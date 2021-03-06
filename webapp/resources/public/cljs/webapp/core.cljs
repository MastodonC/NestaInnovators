(ns webapp.core
  (:require-macros
   [dommy.macros :refer [node sel1 sel]]
   [cljs.core.async.macros :refer [go go-loop]])
  (:require [cljs.core.async :as a]
            [dommy.core :as d]
            [cljs.core.async :refer [>! <! alts! chan sliding-buffer put!]]
            [ajax.core :refer [GET]]))


(def data {:individuals {:uri "/individuals"}
           :location {:uri "/by-location"}
           :tech {:uri "/by-tech"}
           :company {:uri "/by-company"}})


(defn barcharts [{:keys [type data]}]
  (d/append! (sel1 [(keyword (str "#" type))]) (node [:h3 (str "The top 20 " type)]))
  (case type
    "individuals"   (js/individuals (sel1 [(keyword (str "#" type))]) (clj->js data))
    (or "location" "companies") (js/chart (sel1 [(keyword (str "#" type))]) (clj->js data))
    "technology"))
(defn watch-events! [chan]
  (go-loop []
    (when-let [event (<! chan)]
      (barcharts event))
    (recur)))

(set! (.-onload js/window)
      (fn []
        (let [c (doto (chan)
                  (watch-events!))]
          (GET "/individuals" {:handler (fn [response]
                                          (barcharts {:type "individuals" :data response}))
                               :format :json})
          (GET "/by-company" {:handler (fn [response]
                                          (barcharts {:type "companies" :data response}))
                              :format :json})
          (GET "/by-location" {:handler (fn [response]
                                          (barcharts {:type "location" :data response}))
                               :format :json})
          (GET "/by-tech" {:handler (fn [response]
                                          (barcharts{:type "technology" :data response}))
                               :format :json}))))

