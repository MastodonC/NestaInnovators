(ns nesta-innovators.core
  "Short package description."
  (:require [nesta-innovators.graph :as g]
            [nesta-innovators.github :as gh]
            [clojure.tools.logging :as log]
            [clojure.set :as set]
            [clj-time.format :as tf]
            [clojure.data.xml :as xml]
            [clojure.data.csv :as csv]
            [camel-snake-kebab :refer [->kebab-case-keyword]]
            [clojure.java.io :as io]
            [cheshire.core :as json]
            [clojure.edn :as edn]
            [clojure.string :as str])
  (:import [org.apache.commons.compress.compressors.bzip2 BZip2CompressorInputStream]))

(def FORMATTER (:ordinal-date-time-no-ms tf/formatters))

(defn- parse-long [s]
  (try (Long/parseLong s) (catch Throwable t )))

(defn parse-date [s]
  (when-let [dt (tf/parse s)]
    (.getMillis dt)))

(def ^:private coerce
  (some-fn parse-long
           parse-date
           str))

(defn enrich-github [x]
  (into {:nesta-source :github} (keep (fn [[k v]]
                                  (and v
                                       (when-not (.endsWith (name k) "url")
                                         (vector k (coerce v)))))
                                x)))
(defn remove-line-breaks [s]
  (some-> s
          (str/replace \" \')
          (str/replace #"[^\w<>=/:']" " ")))

(defn load-github [system]
  (let [session (:github system)
        items (take 10000 (gh/all-persons session))]
    (doseq [item items]
      (let [{:keys [login]} item
            item (enrich-github item)]
        (g/add-identity! item)))
    (doseq [item items]
      (let [{:keys [id login]} item
            followee           (g/find-identity-node login)
            followers          (take 100 (gh/followers session login))]
        (doseq [follower followers]
          (g/follows! (g/find-identity-node (:login follower)) followee))))))

(defn keywordize [m]
  (letfn [(mapper [[k v]] [(->kebab-case-keyword k) (if (map? v) (keywordize v) (coerce v))])]
    (into {} (map mapper m))))

(defn enrich-stackoverflow [x]
  (into {:nesta-source :stackoverflow}
        (-> x
            keywordize
            (set/rename-keys {:display-name :nesta-identity
                              :id :so-id})
            (update-in [:about-me] remove-line-breaks)
            )))

(defn load-github-users-from-dump [system file]
  (with-open [in (io/reader file)
              out (java.io.PrintWriter. (io/writer (.replaceAll file ".cql" ".edn")))]
    (.println out "(")
    (doseq [l (line-seq in)]
      (when-let [[s id data] (re-matches #"^create \(_(\d+) (\{.*\})\)$" l)]
        (.println out (pr-str (list id (json/parse-string (.replaceAll data "`" "\"") keyword))))))
    (.println out ")")))

(defn load-github-users-from-edn [system file]
  (g/add-identities! (map second (edn/read-string (slurp file)))))

(defn load-identity-in-batches [xs batch-size]
  (doseq [batch  (partition batch-size xs)]
    (g/add-identities! batch)))

(defn bzip2-input-stream [s]
  (BZip2CompressorInputStream. (io/input-stream s)))

(defn load-stackoverflow-users-from-xml [system f]
  (load-identity-in-batches (map (comp enrich-stackoverflow :attrs)
                                 (:content (xml/parse (io/reader (bzip2-input-stream f))))) 10000))

(defn enrich-oc-officer [x]
  (into {:nesta-source :open-corporates
         :open-corporates-type "officer"}
        (-> x
            keywordize
            (set/rename-keys {:id :oc-id}))))

(defn enrich-oc-company [x]
  (into {:nesta-source :open-corporates
         :open-corporates-type "company"}
        (-> x
            keywordize
            (set/rename-keys {:id :oc-id}))))

(defn- oc-csv->maps [header data enrich-fn]
   (->> data
        (map (partial zipmap header))
        (map enrich-fn)))

(defn- load-oc-from-csv [system f enrich-fn]
  (let [[header & data] (csv/read-csv (io/reader (bzip2-input-stream f)))]
    (load-identity-in-batches
     (oc-csv->maps header data enrich-fn)
     10000)))

(defn load-stackoverflow-users-from-xml [system inf outf]
  (let [header [:so-id :nesta-identity :age :up-votes :last-access-date :creation-date :down-votes :reputation :location :website-url :profile-image-url :about-me :views  :email-hash]
        col-fn (apply juxt header)
        data (map (comp col-fn enrich-stackoverflow :attrs)
                  (:content (xml/parse (io/reader inf))))]
    (with-open [out (io/writer outf)]
      (csv/write-csv out (cons (map name header) data) :separator \tab))))

(defn csv->tsv [inf outf]
  (with-open [in (io/reader inf)]
    (let [[_ basename ext] (re-matches #"(.*)\.(\w+)" outf)
          data (csv/read-csv in)]
      (println "Writing batch to " outf)
      (with-open [out (io/writer outf)]
        (csv/write-csv out data :separator \tab)))))

(defn load-oc-officers-from-csv [system f]
  (load-oc-from-csv system f enrich-oc-officer))

(defn load-oc-companies-from-csv [system f]
  (load-oc-from-csv system f enrich-oc-company))
