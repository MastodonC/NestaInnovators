(ns nesta-innovators.opencorporates
  "Short package description."
  (:require [nesta-innovators.impl.protocols :as impl]))

(deftype OpenCorporatesSession []
  impl/Lifecycle
  (start [this system]
    (assoc system ::session this))
  (stop [this system]
    (dissoc system ::session this)))

(defn mk-session [{config :opencorporates} & [options]]
  (->OpenCorporatesSession))
