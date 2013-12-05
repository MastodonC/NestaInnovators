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
            [nesta-innovators.http           :as http]
            [kixipipe.storage.s3             :as s3]
            [kixipipe.application            :refer [defsystem with-defaults]]))

(defsystem nesta [config]
  {:components {:s3              (s3/mk-session (with-defaults config :s3))
                ;;:neo4j           (n/new-neo4j (with-defaults :neo4j))
                :github          (gh/new-github (with-defaults config :github)) 
                :stackexchange   (se/new-stackexchange (with-defaults config :stackexchange)) 
                :open-corporates (oc/new-open-corporates (with-defaults config :open-corporates))
                :meetup          (mu/new-meetup (with-defaults config :meetup)) 
                :http            (http/new-http (with-defaults config :github))
                :pipeline        (p/new-pipeline (with-defaults config :pipeline))}
   :dependencies {:pipeline {:storage         :s3
                             ;;:graph           :neo4j
                             :github          :github
                             :stackexchange   :stackexchange
                             :open-corporates :open-corporates
                             :meetup          :meetup}
                  :github {:http :http}}})
