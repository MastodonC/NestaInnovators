(ns nesta-innovators.quick
  "quick data downloader"
  (:gen-class)
  (:require [org.httpkit.client :as http]
            [clojure.core.async :refer [go chan <!! <! put! take! alt! timeout mult tap] :as a]
            [clj-http.links :as http-links]
            [clojure.data.csv :as csv]
            [clojure.set :as set]
            [cheshire.core :as json]
            [clojure.java.io :as io]
            [clojure.tools.logging :as log]
            [clojure.string :as str]))

(def BASE_API_URI "https://api.github.com/")

(def tokens {:mastodonc "41ae276c544a470c1d3696c986df4a0803ad8e86"
             :thor2013  "9df56817ffcbb4d64ea9d42a72fd23203440f98c"})

(def auth {:headers
           {"Authorization" "token 41ae276c544a470c1d3696c986df4a0803ad8e86"}})

(def auth2 {:headers
            {"Authorization" "token 9df56817ffcbb4d64ea9d42a72fd23203440f98c"}})
          
(defn now [] (System/currentTimeMillis))

(defn http-get 
  ([url] (http-get nil url))
  ([opts url]
     (log/debugf "HTTP GET %s" url)
     (let [c (chan)]
       (http/get url
                 (merge auth2 opts)
                 (fn [r] (put! c r)))
       c)))

(defn ->uri [ & parts]
  (when-not (some nil? parts)
    (apply str BASE_API_URI (interpose \/ (map name parts)))))

(defn ->json [m]
  (update-in m [:body] #(json/parse-string % true)))

(defn ->long [s]
  (condp #(%1 %2) s
      nil? nil
      number? (long s)
      (Long/parseLong s)))

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

(defn user-details 
  "Takes a github user login and returns a channel containing a map of
   the user details after removing some redundant information."
  [login]
  (go (some->> (->uri "users" login)
           request-and-process 
           <!
           :body
           clean)))

(defn user-followers
  "Takes a github user login and returns a channel containing a
   sequence of the login of each of those users following the given
   user."
  [login]
  (go (->> (->uri "users" login "followers")
           request-and-process 
           <!
           :body
           (map :login))))

(defn user-repos
  "Takes a github user login and returns a channel containing a map of
   the user repos after removing some redundant information."
  [login]
  (go (some->> (->uri "users" login "repos")
           request-and-process 
           <!
           :body
           (map clean)
           (map #(assoc % :owner login)))))

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

(defn users
  "Returns a 2 element sequence with a channel containing a sequence of a page of user details and the next page data.
   Since argument can be passed to indicate the last seen id and
   retrieve the following page."
  ([] (users nil))
  ([next-uri]
     (let [in (chan)
           m1 (mult in)
           out1 (tap m1 (chan))
           out2 (tap m1 (chan))]
       (go (>! in (<! (request-and-process (or next-uri (->uri "users"))))))
       (vector
        (go
         (->> out1 
              <!
              :body 
              (keep (comp user-details :login))
              (map <!!) ;; TODO - does mapping this separately affect parallelism?           
              ))
        (go (-> out2
                 <!
                 decode-link-headers
                 (get-in [:links :next :href])))))))

(defn all-users 
  "Returns a lazy sequence of all users. Lazyness is per page." 
  ([] (all-users nil))
  ([uri]
     (log/debug uri)
     (let [[page next-uri] (map <!! (users uri))]
       (lazy-cat page
                 (all-users next-uri)))))

(defn clean-csv [xs]
  (mapv #(if (string? %) (str/replace % #"[^\w\t \.@/:'\",!#\$%^&\*()_\+]" " ") %) xs))

(defn dump-users-to-csv [users per-file dir filename-template]
  (let [users (partition per-file users)
        ->vals (juxt :id :login :followers :following :gravatar_id 
                     :name :updated_at :bio :location :public_repos 
                     :created_at :site_admin :url :email :type 
                     :public_gists :hireable :blog  :company)]
    (loop [n 0 [data & more] users]
      (with-open [out (io/writer (io/file dir (format filename-template n)))]
        (csv/write-csv out (mapv (comp clean-csv ->vals) data) :quote? (constantly true)))
      (when more (recur (inc n) more)))))

(defn rate-limit-stats []
  (let [to-date #(java.util.Date. (* 1000 (Long/parseLong %)))]
    (clojure.pprint/pprint 
     (-> (http-get "https://api.github.com/rate_limit")
         <!!
         :headers
         (select-keys [:x-ratelimit-remaining 
                       :x-ratelimit-reset 
                       :x-ratelimit-limit])
         (update-in [:x-ratelimit-reset] to-date)))))

(defn -main [& args]
  (let [[dir per-file & more] args]
    (let [since (first more)]
      (dump-users-to-csv 
       (all-users 
        (str "https://api.github.com/users?since=" since)) 
       (Long/parseLong per-file) 
       dir
       "users_%010d.tsv"))))

