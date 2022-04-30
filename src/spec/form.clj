(ns spec.form
  (:require
   [clojure.spec.alpha :as s]))

(s/def ::full-name (s/and string? not-empty))

(s/def ::form (s/keys :req-un [::full-name ::birth-date]))

(s/explain-data ::form {:email "foo@example.com"
                        :password "qwas"})
