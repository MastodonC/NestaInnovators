(ns nesta-innovators.cascalog
  "Short package description."
  (:require [cascalog.api :refer :all]
            [cascalog.ops :as ops]
            ;; [cascalog.taps :as tap]
            [cascalog.more-taps :refer [hfs-delimited]]
            [clojure.string :as s]
            [clojure.java.io :as io]
            [clj-time.format :as tf]))
      (:trap (hfs-textline "target/errors" :sinkmode :update))

(defn parse-date [s]
  (when-let [dt (tf/parse s)]
    (.getMillis dt)))

(defn- split-line12 [s]
  (let [fields (s/split s #"\t")]
    (concat fields (repeat (- 12 (count fields)) nil))))

(defn- split-line [s min-cols]
  (let [fields (s/split s #"\t")]
    (concat fields (repeat (- min-cols (count fields)) nil))))

(defn remove-line-breaks [s]
  (when s (s/replace s "\n" " ")))

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
    !date-of-birth !inactive !occupation !nationality !address]
   (input ?line)
   (split-line ?line 12 :>
               ?oc-id ?company-id !name !position !start-date-dirty
               !end-date-dirty !date-of-birth !inactive !occupation
               !nationality !address _)
   (parse-date !start-date-dirty :> !start-date)
   (parse-date !end-date-dirty :> !end-date)
   (:trap trap)))

(defn- convert-flag [flag tval fval]
  (if (= flag "true") tval fval))

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
       !website-url !profile-image-url ?foo !views
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
      (identity "foo" :> ?foo)
      (:trap trap)))

#_(let [data-out "target/company"
        data-in "/tmp/company.tsv"
        trap-base "target/errors"]
  (?- (hfs-delimited data-out :sinkmode :replace)
      (company ;; (ops/fixed-sample (hfs-textline data-in :skip-header? true) 100)
               (hfs-textline data-in :skip-header? true)
               (hfs-delimited (str trap-base "/company")))))

#_(let [data-out "target/officer"
        data-in "/tmp/officer.tsv"
        trap-base "target/errors"]
  (?- (hfs-delimited data-out :sinkmode :replace)
      (officer (hfs-textline data-in :skip-header? true)
               (hfs-delimited (str trap-base "/officer")))))

#_(let [data-out "target/stackoverflow"
        data-in "/tmp/Users.tsv"
        trap-base "target/errors"]
  (?- (hfs-delimited data-out :sinkmode :replace)
      (stackoverflow-users (hfs-textline data-in)
                           (hfs-delimited (str trap-base "/stackoverflow")))))

#_ (with-job-conf
     {"mapred.map.tasks" 8
      "mapred.child.java.opts" "-Xmx1024m"
      "mapred.output.compression.codec" "org.apache.hadoop.io.compress.GzipCodec"
      }
     (let [;; company-in "/home/neale/workspace/nesta-innovators/data/open-corporates/gb_company_export_2013-06-24.tsv"
           ;; officer-in "/home/neale/workspace/nesta-innovators/data/open-corporates/gb_officer_export_2013-06-24.tsv"
           company-in "/tmp/company.tsv"
           officer-in "/tmp/officer.tsv"
           data-out   "./target/rels"
           err-out "./target/rels-errors"]
       (?- (hfs-delimited data-out :sinkmode :replace :write-header? true :compress? true)
           (rels
            (company (ops/fixed-sample (hfs-textline company-in :skip-header? true) 10000))
            (officer (hfs-textline officer-in :skip-header? true))
            (hfs-delimited err-out :sinkmode :replace)))))
