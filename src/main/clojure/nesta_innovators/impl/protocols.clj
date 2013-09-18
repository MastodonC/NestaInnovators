(ns nesta-innovators.impl.protocols
  "Short package description.")

(defprotocol Person
  (all-persons [this])
  (person-detail [this id])
  (person-organizations [this id]))

(defprotocol Organization
  (all-organizations [this])
  (organization-detail [this id])
  (organization-persons [this]))

(defprotocol Follow
  (follows [this id])
  (followers [this id]))

(defprotocol Page
  (next-page [this])
  (data [this])
  (next? [this]))

(defprotocol Paged
  (paged-response [this uri query-params]))

(defprotocol ToUri
  (->uri [this parts]))

(defprotocol Enrichment
  (enrich [this m]))

(defprotocol Lifecycle
  (init [this config])
  (start [this])
  (stop [this]))

(extend-protocol Lifecycle
  nil
  (start [this])
  (stop [this])
  Object
  (start [this])
  (stop [this]))

(defn paged-get [page]
  (lazy-cat (data page)
            (when (next? page)
              (paged-get (next-page page)))))
