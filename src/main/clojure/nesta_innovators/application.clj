(ns nesta-innovators.application
  "Short package description."
  (:require [nesta.innovators.impl.protocols :as impl]))

(deftype System [config github stackoverflow opencorporates meetup]
  impl/Lifecycle
  (running? [this]
    (every? running? [github stackoverflow opencorporates meetup]))
  (start [this]
    (start github)
    (start stackoverflow)
    (start opencorporates)
    (start meetup))
  (stop [this])
      (start meetup)
      (start opencorporates)
      (start stackoverflow)
      (start github))
