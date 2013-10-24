(ns nesta-innovators.pipeline
  "Pipeline for loading nesta innovators data."
  (:require [kixipipe.protocols :as kixi]
            [clojure.core.async :as async :refer [go >! <! chan]]
            [org.httpkit.client :as http])

  (:import [kixipipe.protocols Lifecycle]))


(defprotocol Http
  (GET [this uri result-chan]))

(defrecord HttpRequestComponent []
  Http
  (GET [this uri result-chan]
    (http/get uri)
    )
  )

(defn pipeline []
  (let [work (chan)]
    ()
    )
  )
