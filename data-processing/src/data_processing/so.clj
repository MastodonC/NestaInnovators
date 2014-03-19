(ns data-processing.so
  (:use [cascalog.api]
        [cascalog.checkpoint]
        [cascalog.more-taps :only [hfs-delimited]])

  (:require  [cascalog [ops :as c] [vars :as v]]
             [data-processing.utils :refer :all]))


;; from the gh-users match SO ids and deets , and count the number of their posts
;; SO users.tsv


;;so-id	nesta-identity	age	up-votes	last-access-date	creation
;;-date	down-votes	reputation	location	website-url	profile-
;;image-url	about-me	views	email-hash

(defn gh-so-ids-join [gh-input so-input]
  (<- [?login ?reputation ?location]
      (gh-input :> ?id ?login ?followers ?following ?name ?gh-location ?company)
      (so-input :> ?line)
      (split-line ?line 14 :> ?id ?login _ _ _ _ _ ?reputation ?location _ _ _ _ _)))

#_ (?- (hfs-delimited "output/so/users" :sinkmode :replace :delimiter ",")
       (gh-so-ids-join (hfs-delimited "output/users" :delimiter ",")
                       (hfs-textline "test-data/stackoverflow/Users.tsv")))
