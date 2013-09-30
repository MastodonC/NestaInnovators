(ns nesta-innovators.system
  "Short package description."
  (:require [nesta-innovators.impl.protocols :refer [start stop] :as impl]
            [nesta-innovators.config :as config]
            [nesta-innovators.github :as gh]
            [nesta-innovators.stackexchange :as se]
            [nesta-innovators.opencorporates :as oc]
            [nesta-innovators.meetup :as mu]
            [nesta-innovators.graph :as gr]
            [nesta-innovators.graph.batch :as grb]
            ))

(defrecord NestaSystem [config neo4j neo4j-batch github stackexchange opencorporates meetup ]
  impl/Lifecycle
  (start [_ _]
    (->> {::config config}
         (start neo4j)
         (start github)
         (start stackexchange)
         (start opencorporates)
         (start meetup)))
  (stop [this system]
    (map->NestaSystem (->> this
                           (stop meetup)
                           (stop opencorporates)
                           (stop stackexchange)
                           (stop github)
                           (stop neo4j)))))

(defn system []
  (let [config (config/load-config :prod)]
    (->NestaSystem config
                   (grb/mk-session config)
                   (gr/mk-session config)
                   (gh/mk-session config)
                   (se/mk-session config)
                   (oc/mk-session config)
                   (mu/mk-session config))))
