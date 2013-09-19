(ns nesta-innovators.graph
  "Store a graph"
  (:require [clojurewerkz.neocons.rest :as nr]
            [clojurewerkz.neocons.rest.nodes :as nn]
            [clojurewerkz.neocons.rest.relationships :as nrl])
  (:import [nesta_innovators.impl.protocols Lifecycle]))

(defrecord Neo4jStore [uri]
  Lifecycle
  (start [this]
    (nr/connect! uri))
  (stop [this]))

(defn mk-session [{config :neo4j}]
  (let [{:keys [uri]} config]
    (->Neo4jStore uri)))

(defn add-user! [username attrs]
  (nn/create (merge {:user username} attrs)))

(defn add-organization! [orgname attrs]
  (nn/create (merge {:org orgname} attrs)))

(defn link-user-and-organization! [user-id org-id])

(defn add-repo [repo attrs])

(defn link-user-and-repo [user repo & [attrs]])

(defn follows! [follower followee])
