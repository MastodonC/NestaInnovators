(ns nesta-innovators.cascalog
  "Short package description."
  (:require [cascalog.api :refer :all]
            ;; [cascalog.logic.ops :as ops]
            ;; [cascalog.taps :as tap]
            [cascalog.more-taps :refer [hfs-delimited]]
            [clojure.string :as s]
            [clojure.java.io :as io]
            [clj-time.format :as tf]))

(defn parse-date [s]
  (when-let [dt (tf/parse s)]
    (.getMillis dt)))

(defn- split-line [s]
  (let [fields (s/split s #"\t")]
    (concat fields (repeat (- 12 (count fields)) nil))))

(defn company [input]
  (<- [?oc-id ?company-number ?name ?company-type ?current-status
       !incorporation-date !dissolution-date ?ra-street-address
       ?ra-locality ?ra-region ?ra-postal-code]
      (input ?line)
      (split-line ?line :#> 12
                  {0 ?oc-id 1 ?company-number 2 ?name 3 ?company-type 4 ?current-status
                   5 !incorporation-date-dirty 6 !dissolution-date-dirty 7 ?ra-street-address
                   8 ?ra-locality 9 ?ra-region 10 ?ra-postal-code})
       (parse-date !dissolution-date-dirty :> !dissolution-date)
       (parse-date !incorporation-date-dirty :> !incorporation-date)))

(defn officer [input]
  (<-
   [?oc-id ?company-id ?name ?position ?start-date ?end-date
    ?date-of-birth ?inactive ?occupation ?nationality ?address]
   (input :>
          ?oc-id ?company-id ?name ?position ?start-date-dirty ?end-date-dirty
          ?date-of-birth ?inactive ?occupation ?nationality ?address)
   (parse-date ?start-date-dirty :> ?start-date)
   (parse-date ?end-date-dirty :> ?end-date)))

(defn rels [company officer]
  (<- [?company ?officer]
      (company :> ?company _ _ _ _ _ _ _ _ _ _)
      (officer :> ?officer ?company _ _ _ _ _ _ _ _ _)))

#_(let [data-out "./target/company.tsv"
        data-in "/tmp/company.tsv"
        err-out "./target/errs.tsv"]
  (?- (hfs-delimited data-out :sinkmode :replace)
      (company (hfs-textline data-in :skip-header? true))
      (:trap (stdout))))

#_(let [data-out "./target/officer.tsv"
        data-in "/tmp/officer.tsv"
        err-out "./target/errs.tsv"]
  (?- (hfs-delimited data-out :sinkmode :replace)
      (officer (hfs-delimited data-in))))

#_(let [company-in "/Users/neale/workspace/nesta-innovators/data/open-corporates/gb_officer_export_2013-06-24.tsv.bz2"
        officer-in "/Users/neale/workspace/nesta-innovators/data/open-corporates/gb_company_export_2013-06-24.tsv.bz2"
        data-out   "./target/rels.tsv"
        err-out "./target/errs.tsv"]
  (?- (hfs-delimited data-out :sinkmode :replace)
      (rels (company (hfs-textline company-in :skip-header? true ))
            (officer (hfs-delimited officer-in)))
      (:trap (hfs-delimited err-out))))
