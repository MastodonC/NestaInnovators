(ns nesta-innovators.system
  "Short package description."
  (:require [nesta-innovators.impl.protocols :refer [start stop] :as impl]
            [nesta-innovators.config :as config]
            [nesta-innovators.github :as gh]
            [nesta-innovators.stackexchange :as se]
            [nesta-innovators.opencorporates :as oc]
            [nesta-innovators.meetup :as mu]
            [nesta-innovators.graph :as gr]))

(defrecord NestaSystem [config neo4j github stackexchange opencorporates meetup ]
  impl/Lifecycle
  (start [this]
    (start neo4j)
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
                   (gr/mk-session config)
                   (gh/mk-session config)
                   (se/mk-session config)
                   (oc/mk-session config)
                   (mu/mk-session config))))
