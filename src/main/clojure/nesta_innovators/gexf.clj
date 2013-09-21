(ns nesta-innovators.gexf
  "Generate a gexf file."
  (:require [clojure.java.io       :as io]
            [clojure.string        :as str]
            [clojure.tools.logging :as log]
            [clojurewerkz.neocons.rest.helpers :refer [extract-id]]
            [hiccup.core :as h]
            [clojure.set :as set]))

(defn node [attrs]
  (let [{:keys [self]} attrs]
   (vector :node (-> attrs
                     (set/rename-keys {:user :label})
                     (dissoc :self)
                     (assoc :id (extract-id self))))))

(defn edge [attrs]
  (vector :edge (merge {:label (:type attrs)}
                       (zipmap [:source :target :id]
                               (map extract-id ((juxt :start :end :self) attrs))))))

(defn gen [nodes edges]
  (h/html [:gexf {:xmlns "http:///www.gexf.net/1.1draft" :version "1.1"}
           [:meta
            {:lastmodifieddate "Foo"}
            [:creator "Clojure"]]
           [:graph {:defaultedgetype "directed" :idtype "integer" :type "static"}
            [:nodes {:count (count nodes)}
             (map node nodes)]
            [:edges {:count (count edges)}
             (map edge edges)]
            ]]))


(defn gen-file [file nodes edges]
  (spit file (gen nodes edges)))

(comment
  (require '[nesta-innovators.graph :as g])
  (require '[nesta-innovators.gexf :as gexf])

  (gexf/gen-file "/Users/neale/Downloads2/graph.gexf"
                 (g/all-nodes)
                 (g/all-relationships))

  )
