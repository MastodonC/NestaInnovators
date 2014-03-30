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

(defn filter-us-states [s]
  "return nil if the string has a 2 letter us state"
  (if (re-find #"(?:\b(AL|AK|AS|AZ|AR|CA|CO|CT|DE|DC|FM|FL|GA|GU|HI|ID|IL|IN|IA|KS|KY|LA|ME|MH|MD|MA|MI|MN|MS|MO|MT|NE|NV|NH|NJ|NM|NY|NC|ND|MP|OH|OK|OR|PW|PA|PR|RI|SC|SD|TN|TX|UT|VT|VA|VI|WA|DC|WV|WI|WY|NEW YORK)\b)" (str/upper-case s))
    nil
    s))

(defn uk-only [s]
  (some->> s
           filter-us-states
           (re-find #"(?i)(?:\b(UK|London|Bath|Birmingham|Bradford|Brighton & Hove|Brighton and Hove|Bristol|Cambridge|Canterbury|Carlisle|Chelmsford|Chester|Chichester|Coventry|Derby|Durham|Ely|Exeter|Gloucester|Hereford|Kingston upon Hull|Lancaster|Leeds|Leicester|Lichfield|Lincoln|Liverpool|London|Manchester|Newcastle upon Tyne|Norwich|Nottingham|Oxford|Peterborough|Plymouth|Portsmouth|Preston|Ripon|Salford|Salisbury|Sheffield|Southampton|St\.? Albans|Stoke-on-Trent|Sunderland|Truro|Wakefield|Wells|Westminster|Winchester|Wolverhampton|Worcester|York|Glasgow|Cardiff|Swansea|Aberdeen|Belfast)\b)")
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

