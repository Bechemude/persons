
(ns persons.core-test
  (:require [clojure.test :refer [deftest is use-fixtures testing]]
            [clojure.java.jdbc :as jdbc]
            [clj-time.jdbc]
            [clj-time.local :as l]
            [clj-time.format :as f]
            [muuntaja.core :refer [decode]]
            [persons.core :refer [app]]
            [persons.db :refer [db-spec]]))

(def default-person {:full-name "Koka"
                     :sex "female"
                     :birth-date "1992-01-25"
                     :address "address"
                     :insurance-policy-number "1020304050"})

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

(def test-persons-sql (jdbc/create-table-ddl
                       :test_persons [[:id :serial "PRIMARY KEY NOT NULL"]
                                      [:full_name "TEXT NOT NULL"]
                                      [:sex "TEXT NOT NULL"]
                                      [:birth_date "DATE NOT NULL"]
                                      [:address "TEXT NOT NULL"]
                                      [:insurance_policy_number "TEXT NOT NULL UNIQUE"]]))

(defn drop-table []
  (jdbc/execute! db-spec "DROP TABLE test_persons;"))

(defn add-test-person [{:keys
                        [full-name sex birth-date address insurance-policy-number]}]
  (jdbc/insert-multi! db-spec :test_persons
                      [{:full_name full-name
                        :sex sex
                        :birth_date (f/parse birth-date)
                        :address address
                        :insurance_policy_number insurance-policy-number}]))

(defn setup-db []
  ;; add time formating
  (extend-protocol jdbc/IResultSetReadColumn
    java.sql.Date
    (result-set-read-column [val _rsmeta _idx]
      (.toString (l/format-local-time val :year-month-day))))
  ;; create table
  (jdbc/db-do-commands db-spec
                       [test-persons-sql])
  ;; add person
  (add-test-person default-person))

(defn fix-db [t]
  (setup-db)
  (t)
  (drop-table))

(use-fixtures :once fix-db)

(deftest test-app-get-persons
  (let [request {:request-method :get :uri "/persons"}
        response-body (:body (app request))]
    (is (= (dissoc (first (decode "application/json" response-body)) :id)
           default-person))))

(deftest test-app-get-persons-by-search
  (let [request {:request-method :get :uri "/persons/" :query-string "search=sok"}
        response-body (:body (app request))]
    (is (= (dissoc (first (decode "application/json" response-body)) :id)
           default-person))))

(deftest test-app-create-person
  (let [request {:request-method :post :uri "/persons" :body-params person}
        status (:status (app request))]
    (is (= 201 status))))

(deftest test-app-get-person-by-id
  (let [request {:request-method :get :uri "/persons/1"}
        response-body (:body (app request))]
    (is (= (dissoc (first (decode "application/json" response-body)) :id)
           default-person))))

(deftest test-app-update-person-by-id
  (let [request {:request-method :put :uri "/persons/1" :body-params person}
        status (:status (app request))]
    (is (= 200 status))))

(deftest test-app-delete-person
  (let [request {:request-method :delete :uri "/persons/1"}
        status (:status (app request))]
    (is (= 200 status))))

(deftest test-app-page-not-found
  (let [request {:request-method :get :uri "/not-found"}
        status (:status (app request))]
    (is (= 404 status))))

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
          (is (= status 400)))))))
