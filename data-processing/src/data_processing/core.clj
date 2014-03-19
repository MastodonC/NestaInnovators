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
;; Users:
;; (?etag ?id ?login ?followers ?following ?gravatar_id 
;;        ?name ?updated_at ?bio ?location ?public_repos 
;;        ?created_at ?site_admin ?url ?email ?type 
;;        ?public_gists ?hireable ?blog  ?company)

;; Followers?
;;     (?followee ?follower)

;; Repos?
;;        (?name ?full_name ?owner ?has_issues ?forks_count ?fork ?pushed_at
;;              ?default_branch ?watchers ?updated_at ?has_wiki  ?language ?size
;;              ?created_at ?private ?homepage ?url ?stargazers_count ?has_downloads  
;;              ?watchers_count ?permissions ?open_issues_count ?master_branch
;;              ?open_issues ?id ?forks ?description)


(defn gh-uk-only [input]
  "filter gh users with more than 10 followers and are located in the uk"
  (<- [?id ?login ?followers ?following ?name ?clean-location ?c-company]
     (input :> ?line)
      (split-line ?line 20 :> ?etag ?id ?login ?followers ?following ?gravatar_id 
                  ?name ?updated_at ?bio ?location ?public_repos 
                  ?created_at ?site_admin ?url ?email ?type 
                  ?public_gists ?hireable ?blog ?company)
      (map-location ?location :> ?clean-location)
      (clean-companies ?company :> ?c-company)
      (int-it ?followers :> ?int-follow)
      ;;increase to 10 eventually
      (> ?int-follow 3)
      ))

#_(?- (stdout)
    (gh-uk-only (hfs-textline "test-data/github/users/")))

#_(defn generate-github-uk [users-in uk-users-out trap-base]
    (?- (hfs-delimited uk-users-out :sinkmode :replace :compress? false :quoted? (constantly true) :delimiter ",")
        (gh-uk-only (hfs-textline users-in)
                    (hfs-delimited (str trap-base "/github-uk")))))

;;; top users by city
(defn users-by-city [gh-users]
  "show the top cities by no of innovators count by tech"
  (<- [?location ?count]
      (gh-users :> ?id ?login ?followers ?following ?name ?location ?company)
      (c/count ?count)))

#_(?- (stdout)
      (users-by-city (gh-uk-only (hfs-textline "test-data/github/users/"))))

(defn repos [repos]
  (<- [?login ?language]
      (repos :> ?line)
      (split-line ?line 27 :> _ _ ?login _ _ _ _ _ _ _ _ ?language ?size
                  ?created_at ?private ?homepage ?url ?stargazers_count ?has_downloads  
                                 ?watchers_count ?permissions ?open_issues_count ?master_branch
                                 ?open_issues ?id ?forks ?description)))

#_(?- (stdout)
    (repos (hfs-textline "test-data/github/repositories/repository00000")))

(defn tech-by-city [users-input users-by-repo]
  (<- [?location ?language ?count]
      (users-input :> ?id ?login ?followers ?following ?name ?location ?company)
      (users-by-repo :> ?login ?language)
      (c/count ?count)))

#_(?- (stdout)
      (tech-by-city (gh-uk-only (hfs-textline "test-data/github/users/"))
                    (repos (hfs-textline "test-data/github/repositories/"))))

(defn top-companies [input]
  "companies with and count of innovators"
  (<- [?company ?count]
      (input :> ?id ?login ?followers ?following ?name ?location ?company)
      (c/count ?count)))

#_(?- (stdout)
    (top-companies (hfs-delimited "output/users" :delimiter ",")))

(defn over-twenty [users-input]
  (<- [?login]
      (users-input :> ?id ?login ?followers ?following ?name ?location ?company)
      (> ?followers 20)))

(defn innovators-following [users-input following]
  (<- [?login ?followee]
      (following :> ?line)
      (split-line ?line 2 :> ?login ?followee)
      (over-twenty users-input :> ?login)))

#_(?- (stdout)
   ;;(hfs-delimited "output/innovators-following" :delimiter "," :sinkmode :replace)
    (innovators-following (gh-uk-only (hfs-textline "test-data/github/users/"))
                          (hfs-textline "test-data/github/followers")))

(defn innovators-followee [users-input following]
  (<- [?follower ?login]
      (users-input :> ?id ?login ?followers ?following ?name ?location ?company)
      (> ?follwers 20)
      (following :> ?line)
      (split-line ?line 2 :> ?follower ?login)))

#_(?- ("output/following-innovators")
    (innovators-following (gh-uk-only (hfs-textline "test-data/github/users/"))
                          (hfs-textline "test-data/github/followers")))

;; gets the initial details of programmers in the UK with more than 3 followers
;; with the tech that they are working on as well as the companies they work in and who they are following
(defn -main [in gh-uk repos-in followers-in tech-by-location by-company innovators-by-location innovators-following-out]
  (workflow
   ["/tmp/checkpoint"]
   gh-users-step ([:tmp-dirs [gh-users-temp]]
                    (?- (hfs-delimited gh-users-temp :delimiter ",")
                        (gh-uk-only (hfs-textline in))))

   gh-users-step-2 ([:deps [gh-users-step]]
                      (?- (hfs-delimited gh-uk :sinkmode :replace :delimiter ",")
                          (hfs-delimited gh-users-temp :delimiter ",")))

   tech-join-step ([:deps [gh-users-step]]
                     (?- (hfs-delimited tech-by-location :sinkmode :replace :delimiter ",")
                         (tech-by-city (hfs-delimited gh-users-temp :delimiter ",")
                                       (repos (hfs-textline repos-in)))))
   
   
   companies-step ([:deps [gh-users-step]]
                     (?- (hfs-delimited by-company :sinkmode :replace :delimiter ",")
                         (top-companies
                          (gh-uk-only (hfs-textline in)))))

   innovators-by-city-step ([:deps [gh-users-step]]
                              (?- (hfs-delimited innovators-by-location :sinkmode :replace :delimiter ",")
                                  (users-by-city (hfs-delimited gh-users-temp :delimiter ",") )))

   social-network-step ([:deps [gh-users-step]]
                          (?- (hfs-delimited innovators-following-out :sinkmode :replace :delimiter ",")
                              (innovators-following (hfs-delimited gh-users-temp :delimiter ",")
                                                    (hfs-textline followers-in))))))



#_(-main "test-data/github/users/" "output/users" "test-data/github/repositories" "test-data/github/followers" "output/tech-by-location" "output/by-company" "output/innovators-by-location" "output/innovators-following")


