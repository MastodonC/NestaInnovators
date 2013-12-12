(ns nesta-innovators.quick
  "quick data downloader"
  (:gen-class)
  (:require [clojure.tools.cli     :refer [cli]]
            [org.httpkit.client    :as http]
            [clojure.core.async    :refer [go chan <!! <! put! take! alt! timeout mult tap] :as a]
            [clj-http.links        :as http-links]
            [clojure.data.csv      :as csv]
            [clojure.set           :as set]
            [cheshire.core         :as json]
            [clojure.java.io       :as io]
            [clojure.tools.logging :as log]
            [clojure.string        :as str]
            [clj-time.format       :as tf]))

(def BASE_API_URI "https://api.github.com/")

(def tokens {:mastodonc "41ae276c544a470c1d3696c986df4a0803ad8e86"
             :thor2013  "9df56817ffcbb4d64ea9d42a72fd23203440f98c"
             :loki2013  "1db481f048833ff828178fe3a0ff9ef5d61121ba"})          

(defn now [] (System/currentTimeMillis))

;; TODO move this into component setup.
(def ^:dynamic *auth* :loki2013)

(defn http-get 
  ([url] (http-get nil url))
  ([opts url]
     (log/debugf "HTTP GET %s" url)
     (let [c (chan)]
       (http/get url
                 (merge {:headers
                         {"Authorization" (str "token " (get tokens *auth*))}} opts)
                 (fn [r] (put! c r)))
       c)))

(defn ->uri [ & parts]
  (when-not (some nil? parts)
    (apply str BASE_API_URI (interpose \/ (map name parts)))))

(defn ->json [m]
  (update-in m [:body] #(json/parse-string % true)))

(defn ->long [s]
  (condp #(%1 %2) s
    nil?    Long/MAX_VALUE
    number? (long s)
    (Long/parseLong s)))

(defn rate-limit-reset->datestr [s]
  (java.util.Date. (* 1000 (->long s))))

(def rate-limit (atom {}))

(defn backoff []
  (let [{:keys [limit 
                remaining 
                reset] 
         :or {limit 1
              remaining 1
              reset 1}} @rate-limit
        reset           (* 1000 reset)
        ms              (quot (- reset (now))
                              (max (- remaining 100) 1))]
    (when (< remaining 100) 
      (log/debugf "Limiting [%s] - %s" *auth* (update-in @rate-limit [:reset] 
                                                         rate-limit-reset->datestr)))
    (timeout ms)))

(defn backoff-feedback [hdrs]
  (let [newlimits (reduce-kv 
                   (fn [m k v] 
                     (if-let [[_ newkey] (re-matches #"(?:x-ratelimit-)(.*)" (name k))] 
                            (assoc m (keyword newkey) (->long v))
                            m)) {} hdrs)]
    (reset! rate-limit newlimits)))

(defn request-and-process [uri & [opts]]
  (go
   (alts! [(backoff)])
   (let [resp (->> uri
                   (http-get opts)
                   <!
                   ->json)]
     (backoff-feedback (:headers resp))
     resp)))

(defn clean [x]
  (into {} (remove #(.endsWith (name (first %)) "_url") x)))

(defn decode-link-headers [response]
  (if-let [link-headers (get-in response [:headers :link])]
    (let [link-headers (if (coll? link-headers)
                         link-headers
                         [link-headers])]
      (assoc response
        :links
        (apply merge (for [link-header link-headers]
                       (http-links/read-link-headers link-header)))))
    response))

(defn next-link-uri [r]
  (-> r
      decode-link-headers
      (get-in [:links :next :href])))

(defn assoc-header [m r k]
  (assoc m k (get-in r [:headers k])))

(defn user-details 
  "Takes a github user login and returns a channel containing a map of
   the user details after removing some redundant information."
  [login]
  (when login
    (go 
     (let [r (<! (request-and-process (->uri  "users" login)))]
       (-> r
           :body
           clean
           (assoc-header r :etag))))))

(defn user-followers
  "Takes a github user login and returns a channel containing a
   sequence of the login of each of those users following the given
   user."
  ([login]
     (user-followers login (->uri "users" login "followers")))
  ([login uri]
     (go
      (let [r (<! (request-and-process uri))]
        (vector 
         (->> r
              :body
              (map :login))
         (next-link-uri r))))))

(defn all-user-followers
  ([login] (all-user-followers login (->uri "users" login "followers")))
  ([login uri]
     (let [[page next-uri] (<!! (user-followers login uri))]
       (if next-uri
         (lazy-cat page
                   (all-user-followers login next-uri))
         page))))

(defn user-repos
  "Takes a github user login and returns a channel containing a map of
   the user repos after removing some redundant information."
  ([login]
     (user-repos login (->uri "users" login "repos")))
  ([login uri]
  (go
   (let [r (<! (request-and-process uri))]
     (vector
      (->> r
           :body
           (map clean)
           (map #(assoc % :owner login)))
      (next-link-uri r))))))

(defn all-user-repos 
  ([login] (all-user-repos login (->uri "users" login "repos")))
  ([login uri]
     (let [[page next-uri] (<!! (user-repos login uri))]
       (if next-uri
         (lazy-cat page
                   (all-user-repos login next-uri))
         page))))

(defn users
  "Returns a 2 element sequence with a channel containing a sequence of a page of user details and the next page data.
   Since argument can be passed to indicate the last seen id and
   retrieve the following page."
  ([] (users nil))
  ([next-uri]
     (go
      (let [r (<! (request-and-process (or next-uri (->uri "users"))))]
        (vector
         (->> r
              :body 
              (keep (comp user-details :login))
              (map <!!))
         (next-link-uri r))))))

(defn all-users 
  "Returns a lazy sequence of all users. Lazyness is per page." 
  ([] (all-users nil))
  ([uri]
     (let [[page next-uri] (<!! (users uri))]
       (if next-uri
         (lazy-cat page
                   (all-users next-uri))
         page))))

(defn clean-csv [xs]
  (mapv #(if (string? %) (str/replace % #"[^\w\t \.@/:'\",!#\$%^&\*()_\+\-]" " ") %) xs))


(defn dump-to-csv [coll per-file dir filename-template vals-fn file-index]
  (let [n (->long per-file)
        coll (partition n n nil coll)]
    (loop [n (or file-index 0) [data & more] coll]
      (with-open [out (io/writer (io/file dir (format filename-template n)))]
        (csv/write-csv out (mapv (comp clean-csv vals-fn) data) :separator \tab :quote? (constantly true)))
      (when more (recur (inc n) more)))))

(defn rate-limit-stats [account]
  (binding [*auth* account]
    (clojure.pprint/pprint 
     (-> (http-get "https://api.github.com/rate_limit")
         <!!
         :headers
         (select-keys [:x-ratelimit-remaining 
                       :x-ratelimit-reset 
                       :x-ratelimit-limit])
         (update-in [:x-ratelimit-reset] rate-limit-reset->datestr)))))

(defn dump-users [per-file [dir & more]]
    (let [n (->long per-file) 
        [since file-index] more]
    (dump-to-csv 
     (all-users 
      (str "https://api.github.com/users?since=" since)) 
     (->long n) 
     dir
     "users_%010d.tsv"
     (juxt :etag :id :login :followers :following :gravatar_id 
           :name :updated_at :bio :location :public_repos 
           :created_at :site_admin :url :email :type 
           :public_gists :hireable :blog  :company)
     (if file-index (->long file-index) 0))))

(defn dump-followers [per-file [user-list dir]]
  (with-open [in (io/reader user-list)]
    (doseq [login (line-seq in)]
      (dump-to-csv
       (map vector (repeat login) (all-user-followers login))
       nil
       dir
       (str login "_followers.tsv")
       identity
       nil))))

(defn dump-user-details-from-list [per-file [user-list dir]]
  (with-open [in (io/reader user-list)]
    (doseq [login (line-seq in)]
      (dump-to-csv
       (map user-details login)
       nil
       dir
       (str login "users_%10d.tsv")
       identity
       nil))))

(defn dump-repos [per-file [user-list dir]]
  (with-open [in (io/reader user-list)]
    (doseq [login (line-seq in)]
      (dump-to-csv
       (map vector (repeat login) (all-user-repos login))
       nil
       dir
       (str login "_followers.tsv")
       identity
       nil))))

;; This gets called from the java wrapper main method.
(defn -main [& args]
  (let [[opts args banner]
        (cli args
             ["-h" "--help" "Show help"
              :flag true :default false]
             ["-a" "--account" (str "Choose account, one of " (apply str (interpose \, (map name (keys tokens)))))
              :default "mastodonc" :parse-fn keyword]
             ["-s" "--partition-size" "Partition Size"
              :default 1000 :parse-fn ->long]
             ["-u" "--users" "Download users"
              :flag true :default false]
             ["-f" "--followers" "Download followers"
              :flag true :default false]
             ["-r" "--repos" "Download repos"
              :flag true :default false])]
    
    (when (:help opts)
      (println banner)
      (System/exit 0))
      
    (let [account (:account opts)]
      (if (contains? tokens account)
       (binding [*auth* account]
         (let [per-file (:partition-size opts)]
           (log/debugf "partition-size: %d" per-file)
           (condp #(%1 %2) opts
             :users     (dump-users per-file args)
             :followers (dump-followers per-file args)
             :repos     (dump-repos per-file args))))
       (do
         (println "Bad account")
         (System/exit 1))))))
