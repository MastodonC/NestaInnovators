(ns nesta-innovators.main
  "Main class for nesta"
  (:require [nesta-innovators.cascalog :refer [generate-company-officer-relations generate-stackoverflow-locations]])
  (:gen-class))


(defmulti invoke-command first)

(defmethod invoke-command "company-officer-relations" [[_ & [s3-base & args]]]
  (apply generate-company-officer-relations
         (map #(str s3-base "/" %) args)))

(defmethod invoke-command "stackoverflow-locations" [[_ & [s3-base & args]]]
  (println s3-base)
  (println (pr-str args))
  (apply generate-stackoverflow-locations
         (map #(str s3-base "/" %) args)))

(defn -main [ & args]
  (invoke-command args))
