(ns nesta-innovators.http
  "Component to handle pooled http with rate and connection limiting"
  (:require [clojure.core.async :refer [go >! <! thread]]
            [com.stuartsierra.component :as component]
            [schema.core :as s]
            [kixipipe.ratelimit :as limit]
            [org.httpkit.client :as http]
            [cheshire.core :as json]))

(defprotocol Http
  (GET [this uri opts result-chan]))

(defmulti convert :as)
(defmethod convert :json [x] (json/parse-string x keyword))

(defrecord HttpComponent [rate-limiter threads]
  component/Lifecycle
  (start [this]
    (println "Starting HttpComponent")
    this)
  (stop [this]
    (println "Stopping HttpComponent")
    this)
  Http
  (GET [this uri opts result-chan]
    (limit/take-token rate-limiter)
    (http/get uri opts #(go (>! result-chan 
                                (update-in % [:body] 
                                           json/parse-string keyword))))))

(def ^:private Config {s/Keyword Object})

(defn new-http [config]
  (s/validate Config config)
  (let [[limit period]      (:rate-limit config)
        rate-limiter        (limit/rate-limiter limit period)]
    (->HttpComponent        (limit/rate-limiter limit period) 2)))
