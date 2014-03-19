(ns webapp.parser
  (:require [clojure.data.csv :as csv]
            [clojure.java.io :as io]
            [clj-json.core :as json]))


(defn parse [file]
  (with-open [in (io/reader file)]
    (doall
     (csv/read-csv in))))

(defn top-n [file n idx]
  "parse the csv and give me the top n "
  (let [origin (parse file)
        unstring (fn [data]
                   (map #(assoc % idx (Integer. (nth % idx))) data))
        data (take n (reverse (sort-by #(nth % idx) (unstring origin))))]
    (json/generate-string data)))
