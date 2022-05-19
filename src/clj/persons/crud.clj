(ns persons.crud
  (:require [persons.db :as db]
            [clojure.spec.alpha :as s]
            [form :as f]))

(defn get-persons []
  (let [persons (db/get-persons)]
    {:status 200
     :body persons}))

(defn get-person-by-id [id]
  (let [person (db/get-person-by-id id)]
    (if (not-empty person)
      {:status 200
       :body person}
      {:status 404
       :body {:error_code "MISSING_PERSON"
              :error_message "No such a person"
              :error_data {:id id}}})))

(defn add-person [request]
  (if (s/valid? ::f/form request)
    (let [person (db/add-person request)]
      {:status 201
       :body person})
    {:status 400 :body "Invalid data"}))

(defn update-person [request id]
  (if (s/valid? ::f/form request)
    (if (= 1 (first (db/update-person request id)))
      {:status 200
       :body (db/get-person-by-id id)}
      {:status 404
       :body {:error_code "MISSING_PERSON"
              :error_message "No such a person"
              :error_data {:id id}}})
    {:status 400 :body "Invalid data"}))

(defn delete-person [id]
  (if (= 1 (first (db/delete-person id)))
    {:status 200
     :body {:id id :deleted true}}
    {:status 404
     :body {:error_code "MISSING_PERSON"
            :error_message "No such a person"
            :error_data {:id id}}}))

(comment
  (get-persons)
  (get-person-by-id 1)
  (add-person {:full-name "Koka"
               :sex "female"
               :birth-date "1992-01-25"
               :address "address"
               :insurance-policy-number "1234567890"})
  (update-person {:full-name "Koka"
                  :sex "female"
                  :birth-date "1992-01-25"
                  :address "address"
                  :insurance-policy-number "123456789"} 1)
  (update-person {:full-name "Alexander"
                  :sex "female"
                  :birth-date "1991-12-07"
                  :address "address"
                  :insurance-policy-number "ext"} 1)
  (delete-person 15))
