(ns persons.components.form_spec
  (:require
   [cljs.spec.alpha :as s]))

(s/def ::full-name (s/and string? not-empty))

(def form {:full-name {:value nil :error nil}
           :sex nil
           :birth-date nil
           :address nil
           :insurance-policy-number nil})

(assoc-in form [:full-name :value] "puka")

(first (keys (:full-name form)))
(println form)
(+ 1 2)
