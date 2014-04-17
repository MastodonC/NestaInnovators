(ns data-processing.munging
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

#_(?- (hfs-delimited "/home/yods/work/nesta-data/tech.csv" :sinkmode :replace :delimiter ",")
    (group-tech (hfs-delimited "/home/yods/work/nesta-data/tech-by-location/tech-by-location.csv")))

(defn addys-larger-network [addys-following following]
  (<- [?name1 ?name2]
      (addys-following :> _ ?name1)
      (following :> ?name1 ?name2)))


(def innovators ["idiot" "aslakhellesoy" "alexyoung"])


#_(for [x innovators]
  (?- (hfs-delimited (str "/home/yods/work/nesta-data/output/" x) :delimiter ",")
      (addys-larger-network (hfs-delimited (str "/home/yods/work/nesta-data/graph-prep/" x) :delimiter ",")
                            (hfs-delimited "/home/yods/work/nesta-data/following.csv" :delimiter ","))))



(defn find-full-details [filtered users]
  (<- [?login ?name ?gravatar_id ?company ?location]
      (filtered :> ?innovator ?login)
      (users :> ?line)
      (split-line ?line 20 :> ?etag ?id ?login ?followers ?following ?gravatar_id 
                  ?name ?updated_at ?bio ?location ?public_repos 
                  ?created_at ?site_admin ?url ?email ?type 
                  ?public_gists ?hireable ?blog ?company)))


(defn -main [filtered users output]
  (?- (hfs-delimited output :sinkmode :replace :delimiter ",")
      (find-full-details (hfs-delimited filtered :delimiter ",")
                         (hfs-textline users))))


#_(-main "/home/yods/work/nesta-data/full-innovators-graph" "test-data/github/users/" "output/deets")
