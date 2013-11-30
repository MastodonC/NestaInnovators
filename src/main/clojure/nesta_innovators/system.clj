(ns nesta-innovators.system
  "Short package description."
  (:require [nesta-innovators.config         :as config]
            [nesta-innovators.github         :as gh]
            [nesta-innovators.stackexchange  :as se]
            [nesta-innovators.opencorporates :as oc]
            [nesta-innovators.meetup         :as mu]
            [nesta-innovators.neo4j          :as n]
            [nesta-innovators.graph.batch    :as grb]
            [nesta-innovators.pipeline       :as p]
            [kixipipe.storage.s3             :as s3]
            [kixipipe.application            :refer [with-defaults defsystem]]))

(defsystem NestaSystem 
  {:components {:s3              (s3/mk-session (with-defaults :s3))
                ;;:neo4j           (n/new-neo4j (with-defaults :neo4j))
                :github          (gh/new-github (with-defaults :github))
                :stackexchange   (se/new-stackexchange (with-defaults :stackexchange))
                :open-corporates (oc/new-open-corporates (with-defaults :open-corporates))
                :meetup          (mu/new-meetup (with-defaults :meetup))
                :pipeline        (p/new-pipeline (with-defaults :pipeline))}
   :dependencies {:pipeline {:storage         :storage
                             ;;:graph           :neo4j
                             :github          :github
                             :stackexchange   :stackexchange
                             :open-corporates :open-corporates
                             :meetup          :meetup}}})
