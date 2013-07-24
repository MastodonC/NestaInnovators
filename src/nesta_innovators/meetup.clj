(ns nesta-innovators.meetup
  "Short package description."
  (:require [kixipipe.ratelimit              :as limit]
            [nesta-innovators.impl.protocols :as impl :refer [next-page next? data ->uri paged-response enrich paged-get]]
            [clojure.string                  :as str]
            [clj-http.client                 :as http]))

(def BASE_API_URI "http://api.meetup.com/")

(deftype MeetupPagedResponse [session uri query-params resp]
  Object
  (toString [this]
    (str "query-params:" query-params))
  impl/Page
  (next-page [this]
    (impl/paged-response session (get-in resp [:meta :next]) {}))
  (next? [this]
    (get-in resp [:meta :next]))
  (data [this]
    (get-in resp [:body :results])))

(deftype StackexchangeSession [oauth-token limiter options]
  impl/Enrichment
  (enrich [this m]
    (merge m
           {:headers {"Authorization" oauth-token}}
           (select-keys options [:debug :debug-body] )))
  impl/Paged
  (paged-response [this uri query-params]
    (->MeetupPagedResponse this uri query-params
                           (http/get uri  (->> {:as :json
                                                :query-params query-params}
                                               (impl/enrich this)))))
  impl/ToUri
  (->uri [this parts]
    (apply str BASE_API_URI (interpose \/ (map name parts)))))

(defn meetup-session [limit oauth-token & [options]]
  (->StackexchangeSession oauth-token (limit/rate-limiter limit :per-hour) options))

(defn cities [session]
  (paged-get (paged-response session (->uri session ["cities"]) {:key ""})))

(defn person-details [session site ids]
  (let [ids (if (vector? ids) ids (vector ids)) ]
    (paged-get (paged-response session (->uri session ["users" (str/join \; ids)]) {}))))

(comment

  (def session (stackexchange-session 300 "rMMlVB4zqkoQB4SQ3anw1w"))
  (take 5 (all-persons session :stackoverflow))

)
