(def jig-version "2.0.0")

(defproject webapp "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.5.1"]
                 [org.clojure/clojurescript "0.0-2138"]
                 ;;templating
                 [hiccup "1.0.3"]
                 [prismatic/dommy "0.1.2"]

                 ;;web
                 [ring "1.2.2"]
                 [http-kit "2.1.16"]
                 ;; cljs state management
                 [jarohen/clidget "0.2.0"]

                 ;;ajax
                 [cljs-ajax "0.2.3"]
                 [org.clojure/data.csv "0.1.2"]
                 [clj-json "0.5.3"]
                 ;; jig
                 [jig ~jig-version]
                 [jig/async ~jig-version]
                 [jig/ring ~jig-version]
                 [jig/cljs-builder ~jig-version]
                 [jig/compojure ~jig-version]]

  :jvm-opts ["-Xmx4g"]

  :source-paths ["src" "src-cljs"]
  :plugins [[lein-cljsbuild "1.0.1"]]
  :cljsbuild {
               :builds [{
        ; The path to the top-level ClojureScript source directory:
                         :source-paths ["src-cljs"]
                                        ; The standard ClojureScript compiler options:
        ; (See the ClojureScript compiler documentation for details.)
        :compiler {
                   :output-dir "../webapp/resources/public/cljs/"
                   :output-to "../webapp/resources/public/cljs/main.js"
                   :source-map "../webapp/resources/public/cljs/main.js.map"
                   :optimizations :simple}}]}
  )
