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
    (include-js "/js/jquery-1.11.0.min.js" "/js/d3/d3.js" "/bootstrap/js/bootstrap.js" "/js/analytics.js" "js/barchart.js")
    (include-css "/bootstrap/css/bootstrap.css" "/css/style.css")]
   [:body
    [:content
     [:h1 "Nesta Technology Innovators"]
     [:div#individuals.chart]
     [:div#companies.chart]
     [:div#technology.chart]
     [:div#location.chart]
     [:div#groupedbar.chart]]
    (include-js "/cljs/main.js")
    [:script
     "

var margin = {top: 20, right: 20, bottom: 30, left: 40},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

var x0 = d3.scale.ordinal()
    .rangeRoundBands([0, width], .1);

var x1 = d3.scale.ordinal();

var y = d3.scale.linear()
    .range([height, 0]);

var color = d3.scale.ordinal()
    .range([\"#98abc5\", \"#8a89a6\", \"#7b6888\", \"#6b486b\", \"#a05d56\", \"#d0743c\", \"#ff8c00\"]);

var xAxis = d3.svg.axis()
    .scale(x0)
    .orient(\"bottom\");

var yAxis = d3.svg.axis()
    .scale(y)
    .orient(\"left\")
    .tickFormat(d3.format(\".2s\"));

var svg = d3.select(\"body\").append(\"svg\")
    .attr(\"width\", width + margin.left + margin.right)
    .attr(\"height\", height + margin.top + margin.bottom)
  .append(\"g\")
    .attr(\"transform\", \"translate(\" + margin.left + \",\" + margin.top + \")\");

d3.csv(\"/js/data.csv\", function(error, data) {

    var ageNames = d3.keys(data[0]).filter(function(key) { return key !== \"State\"; });

    data.forEach(function(d) {
        d.ages = ageNames.map(function(name) { return {name: name, value: +d[name]}; });
    });

    x0.domain(data.map(function(d) { return d.State; }));
    x1.domain(ageNames).rangeRoundBands([0, x0.rangeBand()]);
    y.domain([0, d3.max(data, function(d) { return d3.max(d.ages, function(d) { return d.value; }); })]);

    svg.append(\"g\")
        .attr(\"class\", \"x axis\")
        .attr(\"transform\", \"translate(0,\" + height + \")\")
        .call(xAxis);

    svg.append(\"g\")
        .attr(\"class\", \"y axis\")
        .call(yAxis)
        .append(\"text\")
        .attr(\"transform\", \"rotate(-90)\")
        .attr(\"y\", 6)
        .attr(\"dy\", \".71em\")
        .style(\"text-anchor\", \"end\")
        .text(\"Popularity\");

    var state = svg.selectAll(\".state\")
        .data(data)
        .enter().append(\"g\")
        .attr(\"class\", \"g\")
        .attr(\"transform\", function(d) { return \"translate(\" + x0(d.State) + \",0)\"; });

    state.selectAll(\"rect\")
        .data(function(d) { return d.ages; })
        .enter().append(\"rect\")
        .attr(\"width\", x1.rangeBand())
        .attr(\"x\", function(d) { return x1(d.name); })
        .attr(\"y\", function(d) { return y(d.value); })
        .attr(\"height\", function(d) { return height - y(d.value); })
        .style(\"fill\", function(d) { return color(d.name); });

    var legend = svg.selectAll(\".legend\")
        .data(ageNames.slice().reverse())
        .enter().append(\"g\")
        .attr(\"class\", \"legend\")
        .attr(\"transform\", function(d, i) { return \"translate(0,\" + i * 20 + \")\"; });

    legend.append(\"rect\")
        .attr(\"x\", width - 18)
        .attr(\"width\", 18)
        .attr(\"height\", 18)
        .style(\"fill\", color);

    legend.append(\"text\")
        .attr(\"x\", width - 24)
        .attr(\"y\", 9)
        .attr(\"dy\", \".35em\")
        .style(\"text-anchor\", \"end\")
        .text(function(d) { return d; });
});

"]]
   ))

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
  (GET "/individuals" [] (top-n (:individuals data) 20 2))
  (GET "/by-location" [] (top-n (:by-location data) 20 1))
  (GET "/by-tech" [] (top-n (:tech-location data) 20 2))
  (GET "/by-company" [] (top-n (:by-company data) 20 1))
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
