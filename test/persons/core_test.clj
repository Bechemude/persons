(ns persons.core-test
  (:require [clojure.test :refer [deftest is use-fixtures testing]]
            [clojure.java.jdbc :as jdbc]
            [clj-time.jdbc]
            [clj-time.local :as l]
            [muuntaja.core :refer [decode]]
            [persons.core :refer [app]]
            [persons.db :refer [drop-table create-table add-person]]))

(def person {:full-name "Koka"
             :sex "female"
             :birth-date "1992-01-25"
             :address "address"
             :insurance-policy-number "1234567890"})

(def bad-params
  [[{:full-name nil} "empty full-name field"]
   [{:full-name 42} "wrong value in full-name field"]
   [{:sex nil} "empty sex field"]
   [{:sex 42} "wrong value in sex field"]
   [{:birth-date nil} "empty birth-date field"]
   [{:birth-date 42} "wrong value in birth-date field"]
   [{:birth-date "2200-01-01"} "wrong value in birth-date field"]
   [{:address nil} "empty address field"]
   [{:insurance-policy-number nil} "empty insurance-policy-number field"]])

(defn setup-db []
  (extend-protocol jdbc/IResultSetReadColumn
    java.sql.Date
    (result-set-read-column [val _rsmeta _idx]
      (.toString (l/format-local-time val :year-month-day))))
  (create-table)
  (add-person person))

(defn fix-db [t]
  (setup-db)
  (t)
  (drop-table))

(use-fixtures :once fix-db)

(deftest test-app-get-persons
  (let [request {:request-method :get :uri "/persons"}
        response-body (:body (app request))]
    (is (= person
           (dissoc (first (decode "application/json" response-body)) :id)))))

(deftest test-app-create-person
  (let [request {:request-method :post :uri "/persons" :body-params person}
        status (:status (app request))]
    (is (= status 201))))

(deftest test-app-get-person-by-id
  (let [request {:request-method :get :uri "/persons/1"}
        response-body (:body (app request))]
    (is (= person
           (dissoc (first (decode "application/json" response-body)) :id)))))

(deftest test-app-update-person-by-id
  (let [request {:request-method :put :uri "/persons/1" :body-params person}
        status (:status (app request))]
    (is (= status 200))))

(deftest test-app-delete-person
  (let [request {:request-method :delete :uri "/persons/1"}
        status (:status (app request))]
    (is (= status 200))))

(deftest test-app-page-not-found
  (let [request {:request-method :get :uri "/not-found"}
        status (:status (app request))]
    (is (= status 404))))

;; bad params

(deftest test-app-create-person-bad-params
  (testing "Sending bad params:"
    (doseq [[params desription] bad-params]
      (testing desription
        (let [bad-param (merge person params)
              request {:request-method :post
                       :uri "/persons"
                       :body-params bad-param}
              status (:status (app request))]
          (is (= 400 status)))))))
