(ns nesta-innovators.meetup
  "Short package description."
  (:require [kixipipe.ratelimit              :as limit]
            [nesta-innovators.impl.protocols :as impl :refer [next-page next? data ->uri paged-response enrich paged-get]]
            [clojure.string                  :as str]
            [org.httpkit.client              :as http]
            [ring.util.codec  :refer [form-decode]]
            ))

(def BASE_API_URI "http://api.meetup.com/")

(deftype MeetupPagedResponse [session uri query-params resp]
  Object
  (toString [this]
    (str "query-params:" query-params))
  impl/Page
  (next-page [this]
    (let [extract-query-params (fn [uri]
                                 (let [[_ query-string] (str/split uri #"\?")]
                                   (form-decode (or query-string ""))))]
      (if-let [next-uri (next? this)]
        (impl/paged-response session next-uri (merge query-params (extract-query-params next-uri))))))
  (next? [this]
    (get-in resp [:body :meta :next]))
  (data [this]
    (get-in resp [:body :results])))

(deftype MeetupSession [key limiter options]
  impl/Lifecycle
  (start [this system]
    (assoc system ::session this))
  (stop [this system]
    #spy/d (dissoc system ::session))
  impl/Enrichment
  (enrich [this m]
    (merge m
           (select-keys options [:debug :debug-body] )))
  impl/Paged
  (paged-response [this uri query-params]
    (println "uri:" uri)
    (->MeetupPagedResponse this uri {}
                           (http/get uri  (->> {:as :json
                                                :query-params (assoc-in query-params [:key] key)}
                                               (impl/enrich this)))))
  impl/ToUri
  (->uri [this parts]
    (apply str BASE_API_URI (interpose \/ (map name parts)))))

(defn mk-session [{config :meetup} & [options]]
  (let [{:keys [auth rate-limit]} config
        [limit period] rate-limit]
    (->MeetupSession auth (limit/rate-limiter limit period) options)))

(defn cities [session]
  (paged-get (paged-response session (->uri session ["cities"]) {})))

(defn topics [session]
  (paged-get (paged-response session (->uri session ["topics"]) {})))

(comment

  (def session (meetup-session 300 "543fa67477751e50693c66658564c"))
  (Take 5 (all-persons session :stackoverflow))

)
