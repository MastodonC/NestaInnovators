(ns nesta-innovators.core
  "Short package description."
  (:require [nesta-innovators.graph :as g]
            [nesta-innovators.graph.ml :as gml]
            [nesta-innovators.github :as gh]
            [clojure.tools.logging :as log]
            [clj-time.format :as tf]))

(def FORMATTER (:ordinal-date-time-no-ms tf/formatters))

(defn- parse-long [s]
  (try (Long/parseLong s) (catch Throwable t )))

(defn parse-date [s]
  (try (.getMillis (tf/parse FORMATTER s)) (catch Throwable t)))

(defn- coerce [s]
  ((some parse-long
         parse-date) s))

(defn enrich [item]
  (into {:source :github} (keep (fn [[k v]]
                                  (when-not (.endsWith (name k) "url")
                                    (list k (coerce v))))
                                item)))

(defn load-github [system]
  (let [session (:github system)
        items (take 10000 (gh/all-persons session))]
    (doseq [item items]
      (let [{:keys [login]} item]
       (condp = (:type item)
         "User" (g/add-user! login (enrich item))
         "Organization" (g/add-organization! login (enrich item)))))
    (doseq [item items]
      (let [{:keys [id login]} item
            followee (g/find-user-node login)
            followers    (take 100 (gh/followers session login))]
        (doseq [follower followers]
          (g/follows! (g/find-user-node (:login follower)) followee))))))

(defn dump [file]

  )
