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

(def ^{:const true} IDENTITY_IDX_NAME "login")

(defrecord Neo4jStore [uri]
  Lifecycle
  (start [this system]
    (nr/connect! uri)
    (assoc system ::session this))
  (stop [this system]
    (dissoc system ::session this)))

(defn mk-session [{config :neo4j}]
  (let [{:keys [uri]} config]
    (->Neo4jStore uri)))

(defn add-identity! [{:keys [login] :as m}]
  (log/infof "Adding Identity %s" login)
  (nn/create m))

(defn add-identities! [coll]
  (log/info "Adding a batch")
  (nn/create-batch coll))

(defn add-repo [repo attrs])

(defn find-identity-node [login]
  (log/debug "find-identity-node" login)
  ;; TODO query can be improved.
  (nn/find "login" login))

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
