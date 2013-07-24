(ns nesta-innovators.impl.protocols
  "Short package description.")

(defprotocol Person
  (all-persons [this])
  (person-detail [this id]))

(defprotocol Organization
  (all-organizations [this])
  (organization-detail [this id]))

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
  (running? [this])
  (start [this])
  (stop [this]))

(defn paged-get [page]
  (lazy-cat (data page)
            (when (next? page)
              (paged-get (next-page page)))))
