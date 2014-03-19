(ns data-processing.utils
  (:require
   [cascalog.api :refer :all]
   [cascalog.more-taps :refer [hfs-delimited]]
   [clojure.string :as str]
   [clojure-csv.core :as csv]))

(defn generate [in out f]
  (?- (hfs-delimited out :sinkmode :replace :compress? false :quoted? (constantly true) :delimiter ",")
      (f (hfs-delimited in :delimiter ","))))

(defn split-line [s n]
  (let [fields (first (csv/parse-csv s :delimiter \tab))]
    (take n (concat fields (repeat (- n (count fields)) nil)))))

(defn normalise-uk [s]
  (str/replace s #"(?i)\b(United Kingdom|Great Britain|GB)\b" "UK"))

(defn uk-only [s]
  (some->> s
           (re-find #"(?i)(?:\b(UK|London|Bath|Birmingham|Bradford|Brighton & Hove|Brighton and Hove|Bristol|Cambridge|Canterbury|Carlisle|Chelmsford|Chester|Chichester|Coventry|Derby|Durham|Ely|Exeter|Gloucester|Hereford|Kingston upon Hull|Lancaster|Leeds|Leicester|Lichfield|Lincoln|Liverpool|London|Manchester|Newcastle upon Tyne|Norwich|Nottingham|Oxford|Peterborough|Plymouth|Portsmouth|Preston|Ripon|Salford|Salisbury|Sheffield|Southampton|St\.? Albans|Stoke-on-Trent|Sunderland|Truro|Wakefield|Wells|Westminster|Winchester|Wolverhampton|Worcester|York)\b)")
           first
           str/upper-case))

(defn map-location [l]
  (some-> l
          normalise-uk
          uk-only))

(defn int-it [s]
  (Integer. s))

(defn clean-companies [c]
  (if (empty? c)
    "UNLISTED"
    (str/upper-case c)))

