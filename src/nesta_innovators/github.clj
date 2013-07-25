(ns nesta-innovators.github
  "Retrieve data from github"
  (:require [clj-http.client :as http]
            [clj-time.core :as t]
            [kixipipe.ratelimit :as limit]
            [nesta-innovators.impl.protocols :as impl]
            [kixipipe.ratelimit :refer [take-token]]
            [nesta-innovators.impl.protocols :refer [->urix
                                                     enrich
                                                     next?
                                                     paged-get
                                                     paged-response]]))

(def BASE_API_URI "https://api.github.com/")

(defn- combine
  "Merge maps, recursively merging nested maps whose keys collide."
  ([] {})
  ([m] m)
  ([m1 m2]
    (reduce (fn [m1 [k2 v2]]
              (if-let [v1 (get m1 k2)]
                (if (and (map? v1) (map? v2))
                  (assoc m1 k2 (combine v1 v2))
                  (assoc m1 k2 v2))
                (assoc m1 k2 v2)))
            m1 m2))
  ([m1 m2 & more]
    (apply combine (combine m1 m2) more)))

(deftype GithubPagedResponse [session resp]
  impl/Page
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
  impl/Enrichment
  (enrich [this m]
    (combine m
           {:headers {"Authorization" (str "token " oauth-token)}}
           (select-keys options [:debug :debug-body])))
  impl/Paged
  (paged-response [this uri query-params]
    (take-token limiter)
    (let [resp (http/get uri (->> {:as :json}
                                  (enrich this)))]
      (->GithubPagedResponse this resp)))
  impl/ToUri
  (->uri [this parts]
    (apply str BASE_API_URI (interpose \/ (map name parts)))))

(defn rate-limit [oauth-token]
  (let [temp-session (->GithubSession oauth-token nil nil)
        {:keys [headers]}  (http/get (->uri temp-session ["rate_limit"])
                                     (->> {:as :json}
                                          (enrich temp-session)))]
    (into {} (keep (fn [[h v]]
                     (if-let [[_ id] (re-matches #"x-ratelimit-(\w*)" h)]
                       (vector (keyword id)
                               (Integer/parseInt v)))) headers))))


(defn all-persons [session]
  (paged-get (paged-response session (->uri session ["users"]) {})))

(defn all-organizations [session]
  (paged-get (paged-response session (->uri session ["orgs"]) {})))

(defn person-details [session user]
  (paged-get (paged-response session (->uri session ["users" user]) {})))

(defn events [session user]
  (paged-get (paged-response session (->uri session ["users" user "events"]) {})))

(defn orgs [session user]
  (paged-get (paged-response session (->uri session ["users" user "orgs"]) {})) )

(defn org-details [session org]
  (paged-get (paged-response session (->uri session ["orgs" org]) {})) )

(defn org-members [session org]
  (paged-get (paged-response session (->uri session ["orgs" org "members"]) {})) )

(defn repos [session user]
  (paged-get (paged-response session (->uri session ["users" user "repos"]) {})))

(defn followers [session user]
  (paged-get (paged-response session (->uri session ["users" user "followers"]) {})))

(defn following [session user]
  (paged-get (paged-response session (->uri session ["users" user "following"]) {})))

(defn github-session [oauth-token & [options]]
  (let [{:keys [limit remaining reset]} (rate-limit oauth-token)
        now-utc                         (.getMillis (t/to-time-zone (t/now) t/utc))
        period-ms                       (- (* reset 1000) now-utc)
        limiter                         (limit/rate-limiter limit  remaining period-ms)]
    (->GithubSession oauth-token limiter options)))

(comment
  (def session (github-session "f8bfc7ae179e376579a08381ad1d67233515869c"))

  (with-open [out (io/writer "/Users/neale/Downloads/github-users2")]
    (doseq [p (all-persons session)]
      (.write out (pr-str p))
      (.write out \newline)))

  )
