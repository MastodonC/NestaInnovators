(ns nesta-innovators.neo4j
  "Store a graph"
  (:require [clojurewerkz.neocons.rest :as nr]
            [clojurewerkz.neocons.rest.nodes :as nn]
            [clojurewerkz.neocons.rest.relationships :as nrl]
            [clojurewerkz.neocons.rest.cypher :as cy]
            [clojure.tools.logging :as log]
            [clojure.string :as str]
            [com.stuartsierra.component :as component]))

(def ^{:const true} IDENTITY_IDX_NAME "login")

(defrecord Neo4jStore [uri]
  component/Lifecycle
  (start [this]
    (println "Starting Neo4j on " uri)
    (assoc this :endpoint (nr/connect uri)))
  (stop [this] 
    (println "Stopping Neo4j on " uri)
    (dissoc this :endpoint)
    this))

(defn new-neo4j [config]
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
