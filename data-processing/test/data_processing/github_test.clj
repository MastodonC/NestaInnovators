(ns innovators.github-test
  (:use clojure.java.io)
  (:require [clojure.test :refer :all]
            [innovators.github :refer :all]))

(def locations ["GB" "UK" "United Kingdom"])
(def test-tsv "./test-data/github/users/users_0000006049.tsv")
(deftest uk
  (testing "normalise"
    (is (= (normalise-uk "GB") "UK"))
    (is (= (normalise-uk "UK") "UK"))
    (is (= (normalise-uk "France") "France")))
  (testing "map-loation"
    (is (= (map-location "GB") "UK"))
    (is (= (map-location "London") "LONDON"))
    (is (= (map-location nil) nil))
    (is (= (map-location "France") nil))))

(deftest csv-parsing
  (with-open [rdr (reader test-tsv)]
    (let [first-line (first (line-seq rdr))]
      (is (= (count (split-line first-line)) 20)))))
