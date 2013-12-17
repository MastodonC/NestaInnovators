(ns nesta-innovators.cascalog
  "Short package description."
  (:require [cascalog.api :refer :all]
            ;; [cascalog.logic.ops :as ops]
            [cascalog.ops :as ops]
            [cascalog.more-taps :refer [hfs-delimited]]
            [clojure.string :as s]
            [clojure.java.io :as io]
            [clj-time.format :as tf]
            [clojure.tools.logging :as log]
            [clojure-csv.core :as csv]))

(defn parse-date [s]
  (when-let [dt (tf/parse s)]
    (.getMillis dt)))

(defn- split-line12 [s]
  (let [[fields] (csv/parse-csv s)]
    (concat fields (repeat (- 12 (count fields)) nil))))

(defn- split-line [s min-cols]
  (let [fields (first (csv/parse-csv s :delimiter \tab))]
    (take min-cols (concat fields (repeat (- min-cols (count fields)) nil)))))

(defn remove-line-breaks [s]
  (when s (s/replace s "\n" " ")))

(defn- convert-flag [flag tval fval]
  (if (= flag "true") tval fval))

(defn clean-bio [s]
  (s/replace s #"[^\w \.@/:'\",!#\$%^&\*()_\+\-]" " "))

(defn clean-user-id [s]
  (.toUpperCase (s/replace s #"[\s]" "")))

(defn company [input trap]
  (<- [?oc-id ?company-number !name !company-type !current-status
       !incorporation-date !dissolution-date !ra-street-address
       !ra-locality !ra-region !ra-postal-code]
      (input ?line)
      (split-line ?line 12 :>
                  ?oc-id ?company-number  !name !company-type !current-status
                  !incorporation-date-dirty  !dissolution-date-dirty !ra-street-address
                  !ra-locality !ra-region !ra-postal-code _)
      (parse-date !incorporation-date-dirty :> !incorporation-date)
      (parse-date !dissolution-date-dirty :> !dissolution-date)
      (:trap trap)))

(defn officer [input trap]
  (<-
   [?oc-id ?company-id !name !position !start-date !end-date
    !date-of-birth !active !occupation !nationality !address]
   (input ?line)
   (split-line ?line 12 :>
               ?oc-id ?company-id !name !position !start-date-dirty
               !end-date-dirty !date-of-birth !inactive-flag !occupation
               !nationality !address _)
   (convert-flag ?inactive-flag "Inactive" "Active" :> ?active)
   (parse-date !start-date-dirty :> !start-date)
   (parse-date !end-date-dirty :> !end-date)
   (:trap trap)))

(defn rels [company officer trap]
  (<- [?company ?officer ?type ?active]
      (officer :> ?officer ?company _ _ _ _ _ ?inactive-flag _ _ _)
      (company :> ?company _ _ _ _ _ _ _ _ _ _)
      (convert-flag ?inactive-flag "Inactive" "Active" :> ?active)
      (identity "member_of" :> ?type)
      (:trap trap)))

(defn stackoverflow-users [users trap]
  (<- [?so-id !nesta-identity !age !up-votes !last-access-date
       !creation-date !down-votes !reputation !location
       !website-url !profile-image-url !views
       ]
      (users ?line)
      (split-line ?line 14 :#> 14
                  { 0 ?so-id
                    1 !nesta-identity
                    2 !age
                    3 !up-votes
                    4 !last-access-date
                    5 !creation-date
                    6 !down-votes
                    7 !reputation
                    8 !location
                    9 !website-url
                   10 !profile-image-url
                   12 !views
                   13 !email-hash}
                  )
      ;; (parse-date !last-access-date-dirty :> !last-access-date)
      ;; (parse-date !creation-date-dirty :> !creation-date)
      ;; (remove-line-breaks !about-me-dirty :> !about-me)
      (:trap trap)))

(defn normalise-uk [s]
  (s/replace s #"(?i)\b(United Kingdom|Great Britain|GB)\b" "UK"))

(defn uk-only [s]
  (some->> s
           (re-find #"(?i)(?:\b(UK|London|Bath|Birmingham|Bradford|Brighton & Hove|Brighton and Hove|Bristol|Cambridge|Canterbury|Carlisle|Chelmsford|Chester|Chichester|Coventry|Derby|Durham|Ely|Exeter|Gloucester|Hereford|Kingston upon Hull|Lancaster|Leeds|Leicester|Lichfield|Lincoln|Liverpool|London|Manchester|Newcastle upon Tyne|Norwich|Nottingham|Oxford|Peterborough|Plymouth|Portsmouth|Preston|Ripon|Salford|Salisbury|Sheffield|Southampton|St\.? Albans|Stoke-on-Trent|Sunderland|Truro|Wakefield|Wells|Westminster|Winchester|Wolverhampton|Worcester|York)\b)")
           first
           s/upper-case))

(defn best-location [& ls]
  (reduce
   (fn [a c] (if (= a "UK") 
              (or c a) 
              (or a c))) ls))

(defn map-location [l]
  (some-> l
          normalise-uk
           uk-only))

(defn stackoverflow-locations [users trap]
  (<- [!location ?count]
      (users ?line)
      (split-line ?line 14 :#> 14
                  { 8 !location-dirty
                   }
                  )
      ;; (parse-date !last-access-date-dirty :> !last-access-date)
      ;; (parse-date !creation-date-dirty :> !creation-date)
      ;; (remove-line-breaks !about-me-dirty :> !about-me)
      (map-location !location-dirty :> !location)
      (ops/!count !location :> ?count)
      (:trap trap)))

(defmapcatop extract-urls [s]
  (when s (map (comp  vector second) (re-seq #"(https?://[/\w\.]+)" s))))

(defn stackoverflow-about-me-match [users trap]
  (<- [!url !about-me]
      (stackoverflow-users users trap
                           :#> 14
                           {11 !about-me})
      (extract-urls !about-me :> !url)))

(defn officer-locations [officers-in trap]
  (<- [!location ?count]
      (officer (hfs-textline officers-in :skip-header? true)
               trap :#> 11 {10 !address})
      (map-location !address :> !location)
      (ops/!count !location :> ?count)
      (:trap trap)))

(defn officer-counts [officers-in trap]
  (<- [!company ?active ?officer-count]
       (officer (hfs-textline officers-in :skip-header? true)
                trap :#> 11 {1 !company 7 !active})
      (ops/!count !location !active :> ?count)
      (:trap trap)))

(defn github-users-uk [input trap]
  (<- [?userid ?followers ?following ?name ?bio ?location ?repos ?url ?blog ?company]
   (input :>
          _ ?userid ?followers ?following ?name ?bio-dirty ?location-dirty ?repos ?url ?blog ?company)
   (clean-bio ?bio-dirty :> ?bio)
   (map-location ?location-dirty :> ?location)
   (:trap trap)))

(defn stackoverflow-users-uk [input trap]
  (<- [?userid ?so-up-votes ?so-down-votes ?so-reputation ?location-dirty ?so-url]
      (input :> ?userid ?so-up-votes ?so-down-votes ?so-reputation ?location-dirty ?so-url)
    
      ;; (parse-date !last-access-date-dirty :> !last-access-date)
      ;; (parse-date !creation-date-dirty :> !creation-date)v
      ;; (remove-line-breaks !about-me-dirty :> !about-me)
      (map-location ?location-dirty :> ?location)
      (:trap trap)))

(defn stackoverflow-cleanid [stackoverflow-in]
  (<- [?userid ?so-up-votes ?so-down-votes ?so-reputation ?location ?so-url]
      (stackoverflow-in ?so-line)
      (split-line ?so-line 12 :>  _ ?userid-dirty _ ?so-up-votes _ _ ?so-down-votes ?so-reputation ?location-dirty ?so-url _ _)
      (clean-user-id ?userid-dirty :> ?userid)
      (map-location ?location-dirty :> ?location)))

(defn github-cleanid [github-in]
  (<- [?gh-id ?userid ?gh-followers ?gh-following ?gh-name ?gh-bio ?location ?gh-repos ?gh-url ?gh-blog ?gh-company]
      (github-in :> ?gh-line)
      (split-line ?gh-line 20 :> _ ?gh-id ?userid-dirty ?gh-followers ?gh-following _ ?gh-name _ ?gh-bio ?location-dirty ?gh-repos _ _ ?gh-url _ _ _ _ ?gh-blog ?gh-company)
      (clean-user-id ?userid-dirty :> ?userid)
      (map-location ?location-dirty :> ?location)))

(defn joined-stackoverflow-github [stackoverflow-in github-in trap]
  (<- [?userid ?location ?so-up-votes ?so-down-votes ?so-reputation ?so-url ?gh-followers ?gh-following ?gh-name ?gh-bio ?gh-repos ?gh-url ?gh-blog ?gh-company]

      (stackoverflow-in :> ?userid ?so-up-votes ?so-down-votes ?so-reputation ?location-so ?so-url)
      (github-in :> ?userid ?gh-followers ?gh-following ?gh-name ?gh-bio ?location-gh ?gh-repos ?gh-url ?gh-blog ?gh-company)
      ;(best-location ?location-so ?location-gh :> ?location)
      (identity ?location-gh :> ?location)))

(defn generate-officer-counts [officer-in officer-counts-out trap-base]
  (?- (hfs-delimited officer-counts-out :sinkmode :replace :compress? true)
      (officer (hfs-textline officer-in :skip-header? true)
               (hfs-delimited (str trap-base "/officer")))

       (hfs-delimited (str trap-base "/rels"))))
(defn generate-company-officer-relations [company-in officer-in relations-out trap-base]
  (?- (hfs-delimited relations-out :sinkmode :replace :compress? true)
      (rels
       (company (hfs-textline company-in :skip-header? true)
                (hfs-delimited (str trap-base "/company")))
       (officer (hfs-textline officer-in :skip-header? true)
                (hfs-delimited (str trap-base "/officer")))
       (hfs-delimited (str trap-base "/rels")))))
(defn generate-stackoverflow-locations [users-in locations-out trap-base]
  (?- (hfs-delimited locations-out :sinkmode :replace :compress? true)
      (stackoverflow-locations (hfs-textline users-in)
                               (hfs-delimited (str trap-base "/so-locations")))))
(defn generate-stackoverflow-urls [users-in locations-out trap-base]
  (?- (hfs-delimited locations-out :sinkmode :replace :compress? true)
      (stackoverflow-locations (hfs-textline users-in)
                               (hfs-delimited (str trap-base "/so-locations")))))
(defn generate-officer-locations [officer-in locations-out trap-base]
  (?- (hfs-delimited locations-out :sinkmode :replace :compress? true)
      (officer-locations (hfs-textline officer-in :skip-header? true)
                         (hfs-delimited (str trap-base "/oc-locations")))))
(defn generate-stackoverflow-about-me-match [users-in urls-out trap-base]
  (?- (hfs-delimited urls-out :sinkmode :replace :compress? false)
      (stackoverflow-about-me-match (hfs-textline users-in)
                                    (hfs-delimited (str trap-base "/so-urls")))))

(defn generate-github-uk [users-in uk-users-out trap-base]
  (?- (hfs-delimited uk-users-out :sinkmode :replace :compress? false :quoted? (constantly true))
      (github-users-uk (github-cleanid (hfs-textline users-in))
                       (hfs-delimited (str trap-base "/github-uk")))))

(defn generate-stackoverflow-uk [stackoverflow-in uk-users-out trap-base]
  (?- (hfs-delimited uk-users-out :sinkmode :replace :compress? false)
      (stackoverflow-users-uk (stackoverflow-cleanid (hfs-textline stackoverflow-in))
                       (hfs-delimited (str trap-base "/stackoverflow-uk")))))

(defn generate-joined [stackoverflow-in github-in joined-out trap-base]
  (?- (hfs-delimited joined-out :sinkmode :replace :compress? false)
      (joined-stackoverflow-github (stackoverflow-cleanid (hfs-textline stackoverflow-in))
                                   (github-cleanid (hfs-textline github-in))
                                   (hfs-delimited (str trap-base "/joined")))))

#_(generate-stackoverflow-about-me-match "data/stackoverflow/Users.tsv.bz2"
                                         "output/so-urls"
                                         "output/errors")

#_(generate-stackoverflow-uk "data/stackoverflow/Users.tsv"
                             "output/stackoverflow-uk"
                             "output/errors")

#_(generate-github-uk "data/github/users/"
                      "output/github-uk"
                      "output/errors")

#_(generate-joined "data/stackoverflow-1.tsv" 
                   "data/github-1.tsv"
                   "output/joined-uk"
                   "output/errors")
