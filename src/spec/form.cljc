(ns form
  (:require
   #?(:clj [clj-time.core :as c])
   #?(:clj [clj-time.format :as f])
   [#?(:clj clojure.spec.alpha :cljs cljs.spec.alpha) :as s]))

(s/def ::full-name (s/and string? not-empty))

(s/def ::address (s/and string? not-empty))

(s/def ::sex #{"male" "female" "other"})

(s/def ::insurance-policy-number
  (s/and string? #(re-matches #"^(\d{10})$" %)))

(s/def ::birth-date (s/and
                     string?
                     not-empty
                     #?(:cljs #(inst? (new js/Date %)))
                     #?(:cljs #(< (.getTime (new js/Date %)) (.now js/Date)))
                     #?(:clj #(inst? (f/parse %)))
                     #?(:clj #(c/before? (f/parse %) (c/now)))))

(s/def ::form (s/keys :req-un
                      [::full-name
                       ::sex
                       ::address
                       ::insurance-policy-number
                       ::birth-date]))

(def spec-errors
  {::full-name "Строка не должна быть пустой"
   ::address "Строка не должна быть пустой"
   ::sex "Выберите пол"
   ::birth-date "Выберите корректную дату рождения"
   ::insurance-policy-number "Номер страхового полиса состоит из 10 цифр"})

(def default-message
  "Исправьте ошибки в поле")

(defn get-message
  [problem]
  (or (-> problem
          ::s/problems
          peek
          :via
          peek
          spec-errors)
      default-message))
