(ns nesta-innovators.opencorporates
  "Short package description."
  (:require [com.stuartsierra.component :as component]))

(defrecord OpenCorporatesSession []
  component/Lifecycle
  (start [this] 
    (println "Starting Open Corporates Component.")
    this)
  (stop [this] 
    (println "Stopping Open Corporates Component.")
    this))

(defn new-open-corporates [config  & [options]]
  (->OpenCorporatesSession))
