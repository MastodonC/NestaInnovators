(ns data-processing.core
  (:use [cascalog.api]
        [cascalog.checkpoint]
        [cascalog.more-taps :only [hfs-delimited]])
  (:require
   [clojure.string :as str]
   [cascalog [ops :as c] [vars :as v]]
   [data-processing.utils :refer :all])
  (:gen-class))

#_(use 'cascalog.playground)
#_(bootstrap-emacs)

(defn group-tech [input]
  (<- [?location ?tech ?sum]
      (input :> ?location ?tech ?c)
      (int-it ?c :> ?cnt)
      (c/sum ?cnt :> ?sum)
      ))

(?- (hfs-delimited "/home/yods/work/nesta-data/tech.csv" :delimiter ",")
    (group-tech (hfs-delimited "/home/yods/work/nesta-data/tech1.csv")))
