{:jig/components

 {
  :innovators/routes
  {:jig/component webapp.core/CompojureRoutes  }


  :innovators/cljs-builder
  {:jig/component jig.cljs-builder/Builder
   :jig/project "../webapp/project.clj"
   :output-dir "../webapp/resources/public/cljs"
   :output-to "../webapp/resources/public/cljs/main.js"
   :source-map "../webapp/resources/public/cljs/main.js.map"
   :optimizations :simple
   :pretty-print true
   }



  :innovators/cljs-routes
  {:jig/component jig.compojure/ClojureScriptRouter
   :jig/dependencies [:innovators/cljs-builder]
   :jig.web/context "/webapp-js/"
   }


  :innovators/compojure
  {:jig/component jig.compojure/HandlerComposer
   :jig/dependencies [:innovators/routes :innovators/cljs-routes
                      ]
   :jig.web/context "/"}

  
  :innovators/server
  {:jig/component webapp.core/Server
   :jig/dependencies [:innovators/compojure]
   :jig/project "../webapp/project.clj"
   :port 8080}}}
