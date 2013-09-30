(ns nesta-innovators.graph.batch
  "Efficient batch insertions into local neo4j"
  (:require [clojure.tools.logging :as log]
            [clojure.set :as set]
            [clj-time.format :as tf]
            [camel-snake-kebab :refer [->kebab-case-keyword]]
            [clojure.data.xml :as xml]
            [clojure.data.csv :as csv]
            [clojure.java.io :as io]
            [clojure.walk :as walk]
            )
  (:import [org.apache.commons.compress.compressors.bzip2 BZip2CompressorInputStream]
           [org.neo4j.unsafe.batchinsert BatchInserter BatchInserter BatchInserterIndex BatchInserterIndexProvider BatchInserters]
           [org.neo4j.index.lucene.unsafe.batchinsert LuceneBatchInserterIndexProvider]
           [org.neo4j.graphdb Label DynamicLabel]
           [nesta_innovators.impl.protocols Lifecycle]
           [nesta_innovators.graph NestaLabels]
           ))

(set! *warn-on-reflection* true)

(defn- parse-long [s]
  (try (Long/parseLong s) (catch Throwable t )))

(defn parse-date [s]
  (when-let [dt ^org.joda.time.DateTime (tf/parse s)]
    (.getMillis dt)))

(def ^:private coerce
  (some-fn parse-long
           parse-date
           str))

(defn- keywordize-keys [m]
  (let [f (fn [[k v]] [(->kebab-case-keyword  k) (coerce v)])]
    (walk/postwalk (fn [x] (if (map? x) (into {} (map f x)) x)) m)))

(defn- stringify-keys [m]
  (let [f (fn [[k v]] [(name k) (coerce v)])]
    (walk/postwalk (fn [x] (if (map? x) (into {} (map f x)) x)) m)))

(defprotocol INeo4jFactory
  (-create-node [this id m index? labels])
  (-create-relationship [this id1 id2 type m]))

(deftype Neo4jBatchInserter [^BatchInserter inserter indexes]
  Lifecycle
  (start [this system]
    (assoc system ::session this))
  (stop [this system]
    (doseq [index indexes]
      (.shutdown ^BatchInserterIndexProvider index))
    (.shutdown inserter)
    (dissoc system ::session))
  INeo4jFactory
  (-create-node [this id m index? labels]
    (let [alabels (into-array Label labels)
          m (stringify-keys m)
          n (if id
              (.createNode inserter id m alabels)
              (.createNode inserter m alabels))]
      (when index?
        (doseq [ index indexes]
          (println (type index))
          (.add  index inserter n m))))
    )
  (-create-relationship [this id1 id2 type m]
    (.createRelationship inserter id1 id2 type m)))

(defn- inserter [store-dir config]
  (BatchInserters/inserter (.getAbsolutePath (io/as-file store-dir))
                           ^java.util.Map (walk/stringify-keys config)))

(defn create-node [session m & labels]
  (-create-node session nil m nil labels))

(defn create-node-and-index [session m & labels]
  (-create-node session nil m :index labels))

(defn create-node-with-id [session id m & labels]
  (-create-node session id m nil labels))

(defn create-node-with-id-and-index [session id m index & labels]
  (-create-node session id m :index labels))
1
(defn create-relationship [session id1 id2 type m]
  (-create-relationship session id1 id2 type m))

(defn mk-session [{config :neo4j-batch}]
  (let [{:keys [store-dir store-config]} config]
      (org.apache.commons.io.FileUtils/cleanDirectory (io/as-file store-dir))
      (let [inserter (inserter store-dir store-config)
            index-providers-class (:indexes config)
            index-providers      [] ;; [(.nodeIndex  (org.neo4j.index.lucene.unsafe.batchinsert.LuceneBatchInserterIndexProvider. inserter) "identity" {"type" "exact"})]
            ]

        (->Neo4jBatchInserter inserter index-providers))))

(defn enrich-oc-officer [x]
  (into {:nesta-source :open-corporates
         :open-corporates-type "officer"}
        (-> x
            keywordize-keys
            (set/rename-keys {:id :oc-id}))))

(defn enrich-oc-company [x]
  (into {:nesta-source :open-corporates
         :open-corporates-type "company"}
        (-> x
            keywordize-keys
            (set/rename-keys {:id :oc-id}))))

(defn- oc-csv->maps [header data enrich-fn]
   (->> data
        (map (partial zipmap header))
        (map enrich-fn)))

(defn load-identity-batched [{session ::session} data]
  (doseq [item data]
    (create-node session item NestaLabels/IDENTITY)))

(defn bzip2-input-stream [s]
  (BZip2CompressorInputStream. (io/input-stream s)))

(defn load-oc-from-csv [system f enrich-fn]
  (let [[header & data] (csv/read-csv (io/reader (bzip2-input-stream f)))]
    (load-identity-batched system
     (oc-csv->maps header data enrich-fn))))
