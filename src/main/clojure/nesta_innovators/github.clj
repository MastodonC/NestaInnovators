(ns nesta-innovators.github
  "Retrieve data from github"
  (:require [clj-http.client :as http]
            [clj-time.core :as t]
            [kixipipe.ratelimit :as limit]
            [kixipipe.data.merge :refer [map-deep-merge]]
            [kixipipe.ratelimit :refer [take-token]]
            [nesta-innovators.impl.protocols :refer [->uri
                                                     enrich
                                                     next?
                                                     paged-get
                                                     paged-response]])
  (:import [nesta_innovators.impl.protocols Paged Page Lifecycle Enrichment ToUri]))

(def ^{:const true} BASE_API_URI "https://api.github.com/")

(deftype GithubPagedResponse [session resp]
  Page
  (next-page [this]
    (if-let [uri (next? this)]
      (paged-response session uri nil)))
  (next? [this]
    (get-in resp [:links :next :href]))
  (data [this]
    (when-let [data (:body resp)]
      (if (sequential? data)
        data
        (list data)))))

(deftype GithubSession [oauth-token limiter options]
  Lifecycle
  (start [this])
  (stop [this])
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
  (paged-get (paged-response session uri options)))

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

(defn mk-session [{config :github} & [options]]
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
