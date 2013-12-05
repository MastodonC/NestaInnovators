(ns nesta-innovators.github
  "Retrieve data from github"
  (:require [nesta-innovators.http           :as http]
            [clojure.tools.logging           :as log]
            [clj-time.core                   :as t]
            [clojure.tools.logging           :as log]
            [kixipipe.ratelimit              :as limit]
            [kixipipe.data.merge             :refer [map-deep-merge]]
            [kixipipe.ratelimit              :refer [take-token]]
            [nesta-innovators.impl.protocols :refer [->uri
                                                     enrich
                                                     next?
                                                     paged-get
                                                     paged-response] :as nesta]
            [com.stuartsierra.component      :as component]
            [clojure.core.async              :refer [go go-loop >! <!] :as a]
            [schema.core                     :as s]))

(def ^{:const true} BASE_API_URI "https://api.github.com/")

(defn- with-headers-as-meta [obj {:strs [etag last-modified]}]
  (with-meta obj {:etag etag :last-modified last-modified}))

(deftype GithubPagedResponse [session resp]
  nesta/Page
  (next-page [this]
    (if-let [uri (next? this)]
      (paged-response session uri nil)))
  (next? [this]
    (get-in resp [:links :next :href]))
  (data [this]
    (when-let [data (:body resp)]
      (map #(with-headers-as-meta % (:headers resp))
           (if (sequential? data)
             data
             (list data))))))

(defrecord GithubSession [oauth-token limiter options]
  component/Lifecycle
  (start [this] 
    (println "Starting Github Component") 
    (assoc this :enrichments (merge {:headers {"Authorization" (str "token " oauth-token)}}
                                    (select-keys options [:debug :debug-body]))))
  (stop [this] 
    (println "Starting Github Component")
    this)
  nesta/Enrichment
  (enrich [this m]
    (map-deep-merge m (:enrichments this)))
  nesta/Paged
  (paged-response [this uri query-params]
    (let [resp (http/GET (:http this) uri (->> {:as :json}
                                                  (enrich this)) nil)]
      (->GithubPagedResponse this resp)))
  nesta/AsyncProcess
  (process-uri [this uri query-params f] 
    (let [results (a/chan)
          opts    (enrich this query-params)
          get     #(http/GET (:http this) % opts results)]
      (get uri)
      (go-loop [] (when-let [resp (<! results)]
                    (f this (:body resp))
                    (when-let [next (get-in resp [:links :next :href])]
                      (get next)
                      (recur))))
      nil))
  nesta/ToUri
  (->uri [this parts]
    (apply str BASE_API_URI (interpose \/ (map name parts)))))

(defn- raw-api-call [session uri options]
  (log/debug "raw-api-call:" uri options)
  (let [resp (paged-response session uri options)]
    (if (:not-paged? options)
      resp
      (paged-get resp))))

(defn- api-call [session uri-parts options]
  (raw-api-call session (->uri session uri-parts) options))

(defn all-persons [session & [options]]
  (api-call session ["users"] options))

(defn all-organizations [session & [options]]
  (api-call session ["orgs"] options))

(defn person-details [session user & [options]]
  (first (api-call session ["users" user] options)))

(defn events [session user & [options]]
  (api-call session ["users" user "events"] options))

(defn orgs [session user & [options]]
  (api-call session ["users" user "orgs"] options))

(defn org-details [session org & [options]]
  (api-call session ["orgs" org] options))

(defn org-members [session org & [options]]
  (api-call session ["orgs" org "members"] options))

(defn repos [session user & [options]]
  (api-call session ["users" user "repos"] options))

(defn followers [session user & [options]]
  (api-call session ["users" user "followers"] options))

(defn following [session user & [options]]
  (api-call session ["users" user "following"] options))

(def ^:private Config {:auth String
                       :rate-limit (s/pair s/Int "limit"
                                           (s/either s/Int s/Keyword) "period")
                       (s/optional-key :max-connections) Number})

(defn new-github [config & [options]]
  (s/validate Config config)
  (let [{oauth-token :auth} config
        [limit period]      (:rate-limit config)
        limiter             (limit/rate-limiter limit period)]
    (->GithubSession oauth-token limiter options)))

(defn ends-with? [s suffix]
  (.endsWith s suffix))

(defn select-urls [x]
  (into {} (filter (fn [[k v]] (ends-with? (name k) "url")) x)))

(comment
  (require '[nesta-innovators.github :as gh])
  (def sess (gh/mk-session (config/load-config :prod)))
  (gh/repos sess "weavejester")

  (with-open [out (io/writer "/Users/neale/Downloads/github-users2")]
    (doseq [p (all-persons session)]
      (.write out (pr-str p))
      (.write out \newline)))
  )
