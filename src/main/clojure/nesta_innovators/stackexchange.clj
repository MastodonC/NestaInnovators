(ns nesta-innovators.stackexchange
  "Wrapper around the stackexchange API"
  (:require [clj-http.client :as http]
            [clojure.string :as str]
            [kixipipe.ratelimit :as limit]
            [nesta-innovators.impl.protocols :as impl]
            [nesta-innovators.impl.protocols :refer [->uri
                                                     paged-get
                                                     paged-response]]))

(def KNOWN_SITES {:stackoverflow "stackoverflow.com"
                  :electronics "electronics.stackexchange.com"})

(def BASE_API_URI "https://api.stackexchange.com/")

(deftype StackExchangePagedResponse [session uri query-params resp]
  Object
  (toString [this]
    (str "query-params:" query-params))
  impl/Page
  (next-page [this]
    (impl/paged-response session uri (update-in query-params [:page] (fnil inc 0))))
  (next? [this]
    (get-in resp [:body :has_more]))
  (data [this]
    (get-in resp [:body :items])))

(deftype StackExchangeSession [oauth-token limiter options]
  impl/Lifecycle
  (start [this])
  (stop [this])
  impl/Enrichment
  (enrich [this m]
    (merge m
           {:headers {"Authorization" oauth-token}}
           (select-keys options [:debug :debug-body] )))
  impl/Paged
  (paged-response [this uri query-params]
    (->StackExchangePagedResponse this uri query-params
                                  (http/get uri  (->> {:as :json
                                                       :query-params query-params}
                                                      (impl/enrich this)))))
  impl/ToUri
  (->uri [this parts]
    (apply str BASE_API_URI (interpose \/ (map name parts)))))


(defn stackexchange-session [config & [options]]
  (let [{:keys [auth rate-limit]} config
        [limit period] rate-limit]
    (->StackExchangeSession auth (limit/rate-limiter limit period) options)))

(defn all-sites [session]
  (paged-get (paged-response session (->uri session ["sites"]) {})))

(defn all-persons [session site]
  (paged-get (paged-response session (->uri session ["users"]) {:site (site KNOWN_SITES)})))

(defn person-details [session site ids]
  (let [ids (if (vector? ids) ids (vector ids)) ]
    (paged-get (paged-response session (->uri session ["users" (str/join \; ids)]) {:site (site KNOWN_SITES)}))))

(comment

  (def session (stackexchange-session 300 "rMMlVB4zqkoQB4SQ3anw1w"))
  (take 5 (all-persons session :stackoverflow))

)
