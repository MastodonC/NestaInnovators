(def slf4j-version "1.7.5")
(def cascalog-version "2.0.0")
(defproject nesta-innovators "0.2.0"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.5.1"]
                 [org.clojure/data.xml "0.0.7"]
                 [org.clojure/data.csv "0.1.2"]
                 [org.clojure/core.async "0.1.242.0-44b1e3-alpha"]
                 [cheshire "5.2.0"]
                 [org.apache.commons/commons-compress "1.6"]
                 [clj-http "0.7.8"]
                 [http-kit "2.1.13"]
                 [kixipipe "0.12.0-SNAPSHOT"]
                 [ring/ring-codec "1.0.0"]
                 [clojurewerkz/neocons "2.0.0"]
                 [hiccup "1.0.4"]
                 [camel-snake-kebab "0.1.2"]
                 [iota "1.1.1"]
                 [org.neo4j/neo4j "2.0.0"]
                 [commons-io "2.4"]
                 [twitter-api "1.0.0"]
                 [cascalog/cascalog-core ~cascalog-version :exclusions [[org.slf4j/slf4j-log4j12] [log4j]]]
                 [cascalog/cascalog-more-taps ~cascalog-version]
                 ;; Logging
                 [org.clojure/tools.logging      "0.2.6"]
                 [ch.qos.logback/logback-classic "1.0.13"]
                 [org.slf4j/jul-to-slf4j         ~slf4j-version]
                 [org.slf4j/jcl-over-slf4j       ~slf4j-version]
                 [org.slf4j/log4j-over-slf4j     ~slf4j-version]
                 [org.apache.hadoop/hadoop-core "1.2.1" :scope "provided"]
                 ]
  :plugins [[codox "0.6.4"]
            [lein-marginalia "0.7.1"]
            [lein-release "1.0.4"]]
  :java-source-paths ["src/main/java"]
  :source-paths ["src/main/clojure"]
  :test-paths ["src/test/clojure"]
  :resource-paths ["src/main/resources"]
  :profiles {:dev {:source-paths ["src/dev/clojure" "src/main/clojure"]
                   :dependencies [[org.clojure/tools.namespace "0.2.4"]]}
             :uberjar {:aot [nesta-innovators.quick]
                       :main nesta-innovators.quick}})

