(ns nesta-innovators.system
  "Short package description."
  (:require [nesta-innovators.impl.protocols :refer [start stop] :as impl]
            [nesta-innovators.config :as config]
            [nesta-innovators.github :as gh]
            [nesta-innovators.stackexchange :as se]
            [nesta-innovators.opencorporates :as oc]
            [nesta-innovators.meetup :as mu]
            ))

(defrecord NestaSystem [config github stackexchange opencorporates meetup ]
  impl/Lifecycle
  (start [this]
    (start github)
    (start stackexchange)
    (start opencorporates)
    (start meetup)
    this)
  (stop [this]
    (start meetup)
    (start opencorporates)
    (start stackexchange)
    (start github)
    nil))

(defn system []
  (let [config (config/load-config :prod)]
    (->NestaSystem config
                   (gh/github-session (:github config))
                   (se/stackexchange-session (:stackexchange config))
                   (oc/opencorporates-session (:opencorporates config))
                   (mu/meetup-session (:meetup config)))))

(defn collect-persons [system]

  )
