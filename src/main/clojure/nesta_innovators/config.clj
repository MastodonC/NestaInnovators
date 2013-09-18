(ns nesta-innovators.config
  "Configuration of the controller"
  (require [clojure.edn     :as edn]
           [clojure.java.io :as io]
           [kixipipe.data.merge :refer [map-deep-merge]]))

(def available-configs {:sandbox (str (System/getProperty "user.home") "/.dev-nesta.edn")
                        :prod  (str (System/getProperty "user.home") "/.nesta.edn")})

(defn load-config [arg]
  (let [id (if (keyword? arg) arg (keyword arg))
        src (get available-configs id)]
    (map-deep-merge (edn/read-string (slurp (io/resource "default.nesta.edn")))
             (try (edn/read-string (slurp src)) (catch java.io.FileNotFoundException e nil)))))
