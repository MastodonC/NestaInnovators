(ns webapp.core
   (:require
   jig
   [compojure.core :refer :all]
   [compojure.route :as route]
   [compojure.handler :refer [site]]
   [hiccup.core :refer :all]
   [hiccup.page :refer :all]
   [org.httpkit.server :refer :all]
   [webapp.parser :refer :all])
  (:import
  (jig Lifecycle)))


(def index
  (html
   [:head
    [:title "Nesta Innovators Project"]
    (include-js "/js/jquery-1.11.0.min.js" "/js/d3/d3.js" "/bootstrap/js/bootstrap.js" "/js/analytics.js" "http://labratrevenge.com/d3-tip/javascripts/d3.tip.v0.6.3.js") 
    (include-css "/bootstrap/css/bootstrap.css" "/css/style.css")]
   [:body
    [:content
     [:h1 "Nesta Technology Innovators"]
     [:div#article
      [:h2 "Blurb"]
      [:p "
	
Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum."]
      ]
     [:div.row
      [:div#by-individual.col-md-6
       [:h2 "Top Innovators"]
       [:div.row [:svg#individuals {:class "chart col-md-8"}
                ;;  (include-js "/js/individuals.js")
                  ]
        [:p.col-md-4 "Explain this chart"]]]
      
      [:div#by-company.col-md-6 [:h2 "Innovations by Company"]
       [:div.row [:svg#companies {:class "chart col-md-8"}]
        [:p.col-md-4 "Explain this chart"]
        ]]]
     [:div.row [:div#by-location.col-md-6 [:h2 "Innovation by City"]
                [:div.row [:svg#location {:class "chart col-md-8"}
                           ]
                 [:p.col-md-4 "Explain this chart"]]]
      [:div#heatmap.col-md-6
       [:div.row [:h2 "Technology Heatmap"] [:img {:class "col-md-8" :src "/img/heatmap.png"}]
        [:p.col-md-4 "Explain this chart"]]]]]]
   (include-js "/js/location.js" "/js/individuals.js" "/js/company.js") ))

(def home-dir "/home/yods/work/innovators")
;;change this !!
(def data {
           :individuals (str home-dir "/data-processing/output/users/ghusers.csv")
           :by-location (str home-dir  "/data-processing/output/innovators-by-location/part-00000")
           :tech-location (str home-dir "/data-processing/output/tech-by-location/part-00000")
           :by-company (str home-dir "/data-processing/output/by-company/part-00000")})


(defroutes app-routes
  (route/resources "/")
  (route/resources "target/js" {:root "js"})
  (GET "/" [] index)
  ;;give me the top twenty
  (route/not-found "<h1>Page not found</h1>"))

(def app
  (site (routes app-routes)))

(deftype CompojureRoutes [config]
  Lifecycle
    (init [_ system]
      (update-in system [(:jig/id config) :jig.compojure/routes] conj app))
    (start [_ system] system)
    (stop [_ system] system))

;; in case you want to run it outside of jig
;; (def start
;;   (run-server app {:port 3000})


(deftype Server [config]
  Lifecycle
  (init [_ system] system)
  (start [_ system]
    (let [server (run-server app {:port 8080})]
      (assoc-in system [(:jig/id config) :server] server)))
  (stop [_ system]
    (when-let [server (get-in system [(:jig/id config) :server])]
      ;; Stop the server by calling the function
      (server))
    (dissoc system (:jig/id config))))
