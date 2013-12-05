(ns nesta-innovators.pipeline
  "Pipeline for loading nesta innovators data."
  (:require [kixipipe.protocols         :as kixi]
            [clojure.core.async         :as async :refer [go-loop go >! <! chan pub sub put!]]
            [com.stuartsierra.component :as component]))

(defrecord NestaPipeline []
  component/Lifecycle
  (start [this] 
    (println "Starting Pipeline Component.")
    this)
  (stop [this] 
    (println "Stopping Pipeline Component.")
    this))

(defn consumer [c f]
  (go-loop []  (when-let [x (<! c)]
                 (f x)
                 (recur))))

(defn github [system x follows]
  (put! follows {:follows (:name x)}))

(defn stackexchange [system x]
  (println "STACKEXCHANGE:" x))

(defn follows [system x]
  (println "FOLLOWS:" x))

(defn pipeline [system]
  (let [c       (chan)
        router  (pub c :src-name)
        follows (chan)
        orgs    (chan)
        cfn     #(fn [x] (apply % system x %&))]
    
    (consumer (sub router :github (chan)) (cfn #'github follows))
    (consumer (sub router :stackexchange (chan)) (cfn #'stackexchange))
    
    (consumer follows (cfn #'follows))
    c))

(defn new-pipeline [config]
  (->NestaPipeline))
