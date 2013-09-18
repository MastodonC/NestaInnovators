(def slf4j-version "1.7.5")
(defproject nesta-innovators "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.5.1"]
                 [clj-http "0.7.5"]
                 [kixipipe "0.9.31-SNAPSHOT"]
                 [ring/ring-codec "1.0.0"]
                 ;; Logging
                 [org.clojure/tools.logging      "0.2.6"]
                 [ch.qos.logback/logback-classic "1.0.13"]
                 [org.slf4j/jul-to-slf4j         ~slf4j-version]
                 [org.slf4j/jcl-over-slf4j       ~slf4j-version]
                 [org.slf4j/log4j-over-slf4j     ~slf4j-version]
                 ]
  :source-paths ["src/main/clojure"]
  :resource-paths ["src/main/resources"]
  :profiles {:dev {:source-paths ["src/dev/clojure" "src/main/clojure"]
                   :dependencies [[org.clojure/tools.namespace "0.2.3"]]}
             ;:uberjar {:main }
             })
