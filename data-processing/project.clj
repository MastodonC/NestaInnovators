(defproject data-processing "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :uberjar-name "innovators2.jar"
  :aot [data-processing.munging]
  :main data-processing.munging
  :exclusions [org.clojure/clojure]
  :dependencies [[org.clojure/clojure "1.5.1"]
                 [cascalog "1.10.2"]
                 [clojure-csv/clojure-csv "2.0.1"]]
  :profiles {:dev {:dependencies [[midje-cascalog "0.4.0"]]}
             :provided {:dependencies [[org.apache.hadoop/hadoop-core "0.20.2-dev"]]}})
