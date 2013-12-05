(ns nesta-innovators.scratch
  "Short package description."
  (:require [clojure.core.async :refer [go <! mult chan tap]]))

(defn foo [src]
  (let [c1 (chan 10)
        c2 (chan 10)
        m1 (mult src)]
    (tap m1 c1 false)
    (tap m1 c2 false)
    (go (while true (println "c1: " (<! c1))))
    (go (while true (println "c2: " (<! c2))))
    src))

