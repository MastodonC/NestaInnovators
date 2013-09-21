(ns nesta-innovators.core
  "Short package description."
  (:require [nesta-innovators.graph :as g]
            [nesta-innovators.github :as gh]
            [clojure.tools.logging :as log]
            [clojure.set :as set]
            [clj-time.format :as tf]
            [clojure.data.xml :as xml]
            [camel-snake-kebab :refer [->kebab-case-keyword]]))

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
  (into {:source :github} (keep (fn [[k v]]
                                  (and v
                                       (when-not (.endsWith (name k) "url")
                                         (list k (coerce v)))))
                                x)))

(defn load-github [system]
  (let [session (:github system)
        items (take 10000 (gh/all-persons session))]
    (doseq [item items]
      (let [{:keys [login]} item
            item (enrich-github item)]
       (condp = (:type item)
         "User" (g/add-user! login item)
         "Organization" (g/add-organization! login item))))
    (doseq [item items]
      (let [{:keys [id login]} item
            followee (g/find-user-node login)
            followers    (take 100 (gh/followers session login))]
        (doseq [follower followers]
          (g/follows! (g/find-user-node (:login follower)) followee))))))

(defn keywordize [m]
  (letfn [(mapper [[k v]] [(->kebab-case-keyword k) (if (map? v) (keywordize v) (coerce v))])]
    (into {} (map mapper m))))

(defn enrich-stackoverflow [x]
  (into {:source :stackoverflow}
        (-> x
            keywordize
            (set/rename-keys {:display-name :login
                              :id :so-id}))))

(defn load-stackoverflow-users-from-dump [system users-file]
  (map (comp #(g/add-user! (:login %) %) enrich-stackoverflow :attrs)
       (:content (xml/parse users-file))))

(defn dump [file]

  )
