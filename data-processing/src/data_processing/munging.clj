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

#_(?- (hfs-delimited "/home/yods/work/nesta-data/tech.csv" :delimiter ",")
    (group-tech (hfs-delimited "/home/yods/work/nesta-data/tech1.csv")))


(defn addys-network [input1 input2]
  "reciprocal follows"
  (<- [?name1 ?name2 ?name3]
      (input1 :> ?name1 ?name2)
      (input2 :> ?name2 ?name3)
      ))

(defn addys-network2 [input1 input2]
  "reciprocal follows"
  (<- [?name]
      (input1 :> ?name "addyosmani")
      (input2 :> "addyosmani" ?name)
      ))

#_ (?- (hfs-delimited "/home/yods/work/nesta-data/addyreciprocal.csv" :delimiter ",")
       (addys-network2 (hfs-delimited "/home/yods/work/nesta-data/addyfollowee.csv" :delimiter ",")
                       (hfs-delimited "/home/yods/work/nesta-data/addyfollowing.csv" :delimiter ",")))

(defn addys-larger-network [addys-following following]
  (<- [?name1 ?name2]
      (addys-following :> _ ?name1)
      (following :> ?name1 ?name2)))

(?- (hfs-delimited "/home/yods/work/nesta-data/adds-larger" :delimiter ",")
    (addys-larger-network (hfs-delimited "/home/yods/work/nesta-data/addyfollowee.csv" :delimiter ",")
                          (hfs-delimited "/home/yods/work/nesta-data/following.csv" :delimiter ",")))


(def innovators ["kennethreitz" "mitsuhiko" "remy" "csswizardry"
                 "rmurphey" "chrisbanes" "nicklockwood" "mattgemmell"
                 "simonw" "codepo8" "nelstrom" "memo" "daylerees" "padolsey"
                 "caolan" "jgilfelt" "scrooloose" "imathis" "jcoglan"])


(for [x innovators]
  (?- (hfs-delimited (str "/home/yods/work/nesta-data/output/" x) :delimiter ",")
      (addys-larger-network (hfs-delimited (str "/home/yods/work/nesta-data/graph-prep/" x) :delimiter ",")
                            (hfs-delimited "/home/yods/work/nesta-data/following.csv" :delimiter ","))))
