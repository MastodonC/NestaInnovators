(ns nesta-innovators.github
  "Retrieve data from github"
  (:require [clj-http.client :as http]
            [clojure.tools.logging :as log]
            [clj-time.core :as t]
            [clojure.tools.logging :as log]
            [kixipipe.ratelimit :as limit]
            [kixipipe.data.merge :refer [map-deep-merge]]
            [kixipipe.ratelimit :refer [take-token]]
            [nesta-innovators.impl.protocols :refer [->uri
                                                     enrich
                                                     next?
                                                     paged-get
                                                     paged-response]]
            [com.stuartsierra.component :as component]
            [schema.core :as s])

(def ^{:const true} BASE_API_URI "https://api.github.com/")

(defn- with-headers-as-meta [obj {:strs [etag last-modified]}]
  (with-meta obj {:etag etag :last-modified last-modified}))

(deftype GithubPagedResponse [session resp]
  Page
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
    this)
  (stop [this] 
    (println "Starting Github Component")
    this)
  Enrichment
  (enrich [this m]
    (map-deep-merge m
                    {:headers {"Authorization" (str "token " oauth-token)}}
                    (select-keys options [:debug :debug-body])))
  Paged
  (paged-response [this uri query-params]
    (take-token limiter)
    (let [resp (http/get uri (->> {:as :json}
                                  (enrich this)))]
      (->GithubPagedResponse this resp)))
  ToUri
  (->uri [this parts]
    (apply str BASE_API_URI (interpose \/ (map name parts)))))

(defn raw-api-call [session uri options]
  (log/debug "raw-api-call:" uri options)
  (let [resp (paged-response session uri options)]
    (if (:not-paged? options)
      resp
      (paged-get resp))))

(defn api-call [session uri-parts options]
  (raw-api-call session (->uri session uri-parts) options))

(defn all-persons [session & [options]]
  (api-call session ["users"] options))

(defn all-organizations [session & [options]]
  (api-call session ["orgs"] options))

(defn person-details [session user & [options]]
  (api-call session ["users" user] options))

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

(def ^:private Config {:auth s/String
                       :rate-limit (s/pair s/Int "limit"
                                           (s/either s/Int s/Keyword) "period")
                       (s/optional-key :max-connections) s/Number})

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
