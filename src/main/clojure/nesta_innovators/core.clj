(ns nesta-innovators.core
  "Short package description."
  (:require [nesta-innovators.graph :as g]
            [nesta-innovators.github :as gh]
            [clojure.tools.logging :as log]))


(defn load-github [system]
  (let [items (take 10000 (gh/all-persons (:github system)))]
    (doseq [item items]
      (let [{:keys [login]} item]
       (condp = (:type item)
         "User" (g/add-user! login {:source :github})
         "Organization" (g/add-organization! login {:source :github}))))))
