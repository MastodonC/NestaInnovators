(ns nesta-innovators.opencorporates
  "Short package description."
  (:require [nesta-innovators.impl.protocols :as impl]))

(deftype OpenCorporatesSession []
  impl/Lifecycle
  (start [this])
  (stop [this]))

(defn mk-session [{config :opencorporates} & [options]])
