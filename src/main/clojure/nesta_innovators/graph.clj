(ns nesta-innovators.graph
  "Store a graph"
  (:require [clojurewerkz.neocons.rest :as nr]
            [clojurewerkz.neocons.rest.nodes :as nn]
            [clojurewerkz.neocons.rest.relationships :as nrl]
            [clojurewerkz.neocons.rest.cypher :as cy]
            [clojure.tools.logging :as log]
            [clojure.string :as str]
            )
  (:import [nesta_innovators.impl.protocols Lifecycle]))

(def ^{:const true} USER_IDX_NAME "user")
(def ^{:const true} ORGANIZATION_IDX_NAME "organization")

(defrecord Neo4jStore [uri]
  Lifecycle
  (start [this]
    (nr/connect! uri)
    (nn/create-index USER_IDX_NAME)
    (nn/create-index ORGANIZATION_IDX_NAME))
  (stop [this]))

(defn mk-session [{config :neo4j}]
  (let [{:keys [uri]} config]
    (->Neo4jStore uri)))

(defn add-user! [username attrs]
  (log/infof "Adding User %s" username)
  (nn/create-unique-in-index USER_IDX_NAME :user username (merge {:user username} attrs)))

(defn add-organization! [orgname attrs]
  (log/infof "Adding Organization %s" orgname)
  (nn/create-unique-in-index ORGANIZATION_IDX_NAME :org orgname (merge {:org orgname} attrs)))

(defn link-user-and-organization! [user org])

(defn add-repo [repo attrs])

(defn link-user-and-repo [user repo & [attrs]])

(defn find-user-node [username]
  (log/debug "find-user-node" username)
  ;; TODO query can be improved.
  (nn/find-one USER_IDX_NAME "user" username))

;; (deftype Neo4jPagedResponse [session resp]
;;   Page
;;   (next-page [this]
;;     (if-let [uri (next? this)]
;;       (paged-response session uri nil)))
;;   (next? [this]
;;     (get-in resp [:links :next :href]))
;;   (data [this]
;;     (when-let [data (:body resp)]
;;       (if (sequential? data)
;;         data
;;         (list data)))))

(defn all-nodes []
  (map #(let [n (get % "n")] (merge {:self (:self n)} (:data n))) (cy/tquery "START n=node(*) RETURN n LIMIT 100")))

(defn all-relationships []
  (map #(get-in % ["r"]) (cy/tquery "START r=relationship(*) RETURN r LIMIT 100")))

(defn follows! [follower followee]
  (when (and follower followee)
    (log/debugf "Creating following relationship %s(%d) -> %s(%d)"
               (:user follower) (:id follower)
               (:user followee) (:id followee))
    (nrl/create follower followee :follows)))
