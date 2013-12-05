(ns nesta-innovators.main
  "Main class for nesta"
  (:require [nesta-innovators.cascalog]
            [nesta-innovators.system]
            [nesta-innovators.core :as c]
            [kixipipe.protocols :as kixi])
  (:gen-class))

;; (defn- invoke-command* [f s3-base args]
;;   (apply f (map #(str s3-base "/" %) args)))

;; (defmulti invoke-command first)

;; (defmacro defcommand [c]
;;   (let [c# (name c)]
;;     `(defmethod invoke-command ~c# [[~'_ & [~'s3-base & ~'args]]]
;;        (invoke-command* ~(symbol "nesta-innovators.cascalog" (str "generate-" c#)) ~'s3-base ~'args))))

;; (defcommand company-officer-relations)
;; (defcommand stackoverflow-locations)
;; (defcommand officer-locations)
;; (defcommand officer-counts)

;; (defmethod invoke-command "load-github-to-s3" [[f & args]]
;;   (let [system (nesta-innovators.system/system)]
;;    (c/load-github (kixi/start system system))))

;; (defn -main [ & args]
;;   (invoke-command args))
