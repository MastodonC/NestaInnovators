(ns nesta-innovators.twitter
  (:use
   [twitter.oauth]
   [twitter.callbacks]
   [twitter.callbacks.handlers]
   [twitter.api.restful])
  (:require [clojure.java.io :as io]
            [clojure.data.csv :as csv]
            [clojure.string :as str])
  (:import
   (twitter.callbacks.protocols SyncSingleCallback)))

(def my-creds (make-oauth-creds "aLHSnQNMPVdl62TqQJOQ"
                                "beK0oAP8vUcF75Q9Cf07OD9mSGhLuCrBaajh3PWt8"
                                "56846105-CJgRyzEPy0rZBBaEDv1FeShuXsFka9h30rKm4dLT3"
                                "ZDiBEvqFCIgUas4iYEFbqdJKPIv6OOtb5OlAHix1ZsMLC"))

(def handles ["1stvamp"
              "cbetta"
              "bfirsh"
              "danielctull"
              "abitgone"
              "samstarling"
              "remy"       
              "revdancatt"
              "thesmith"
              "jonleighton"])

(defn clean-csv [xs] (mapv #(if (string? %) (str/replace % #"[^\w\t \.@/:'\",!#\$%^&\*()_\+\-]" " ") %) xs))

(def ->vals (juxt :screen_name :profile_use_background_image :profile_sidebar_fill_color :protected :following :profile_background_image_url :default_profile_image :contributors_enabled :favourites_count :time_zone :name :id_str :listed_count :utc_offset :profile_link_color :profile_background_tile :location :statuses_count :followers_count :friends_count :created_at :lang :profile_sidebar_border_color :url :notifications :profile_background_color :geo_enabled :profile_image_url_https :is_translator :profile_image_url :verified :id :profile_background_image_url_https :description :profile_text_color :status :follow_request_sent :entities ))

(defn dump-handles [users]
 
  (with-open [out (io/writer (io/file "/home/neale/Downloads" "twitter-10.tsv"))]
    (csv/write-csv out
                   (->> users
                        (map #(users-show :oauth-creds my-creds :params {:screen-name %}))
                        (map :body)
                        (map (comp clean-csv ->vals)))
                   :delimiter \tab
                   :quote? (constantly true))))

;; ; simply retrieves the user, authenticating with the above credentials
;; ; note that anything in the :params map gets the -'s converted to _'s
;; (users-show :oauth-creds my-creds :params {:screen-name "AdamJWynne"})

;; ; supplying a custom header
;; (users-show :oauth-creds my-creds :params {:screen-name "AdamJWynne"} :headers {:x-blah-blah "value"})

;; ; shows the users friends
;; (friendships-show :oauth-creds my-creds 
;;                   :params {:screen-name "AdamJWynne"})

;; ; use a custom callback function that only returns the body of the response
;; (friendships-show :oauth-creds my-creds
;;                   :callbacks (SyncSingleCallback. response-return-body 
;;                                                   response-throw-error
;;                                                   exception-rethrow)      
;;           :params {:screen-name "AdamJWynne"})

;; ; upload a picture tweet with a text status attached, using the default sync-single callback
;; (statuses-update-with-media :oauth-creds *creds*
;;                             :body [(file-body-part "/pics/test.jpg")
;;                                   (status-body-part "testing")])
