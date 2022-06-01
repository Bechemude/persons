
(ns persons.core-test
  (:require [clojure.test :refer [deftest is use-fixtures testing]]
            [clojure.java.jdbc :as jdbc]
            [clj-time.jdbc]
            [clj-time.local :as l]
            [clj-time.format :as f]
            [muuntaja.core :refer [decode]]
            [persons.db :as db]
            [persons.core :refer [app]]))

(def default-person {:full-name "Koka"
                     :sex "female"
                     :birth-date "1992-01-25"
                     :address "address"
                     :insurance-policy-number "1020304050"})

(def test-person {:full-name "Koka"
                  :sex "female"
                  :birth-date "1992-01-25"
                  :address "address"
                  :insurance-policy-number "0987654321"})

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

;; (defonce ^:dynamic *db* nil)

;; (defn fix-db-backend [t]
;;   (binding [*db* db]
;;     (t)))

;; (defn test-get-user-by-id
;;   (let [user (com.system.orm/get-user *db* 1)]
;;     (is (= user {:name "Ivan"}))))

;; (def db-spec {:dbtype "postgresql"
;;               :dbname "postgres"
;;               :user "postgres"
;;               :password "postgres"})

;; (def test-persons-sql (jdbc/create-table-ddl
;;                        :test_persons [[:id :serial "PRIMARY KEY NOT NULL"]
;;                                       [:full_name "TEXT NOT NULL"]
;;                                       [:sex "TEXT NOT NULL"]
;;                                       [:birth_date "DATE NOT NULL"]
;;                                       [:address "TEXT NOT NULL"]
;;                                       [:insurance_policy_number "TEXT NOT NULL UNIQUE"]]))

;; (defn drop-table []
;;   (jdbc/execute! db-spec "DROP TABLE test_persons;"))

;; (defn add-test-person [{:keys
;;                         [full-name sex birth-date address insurance-policy-number]}]
;;   (jdbc/insert-multi! db-spec :test_persons
;;                       [{:full_name full-name
;;                         :sex sex
;;                         :birth_date (f/parse birth-date)
;;                         :address address
;;                         :insurance_policy_number insurance-policy-number}]))

(defn setup-db []
  ;; add time formating
  (extend-protocol jdbc/IResultSetReadColumn
    java.sql.Date
    (result-set-read-column [val _rsmeta _idx]
      (.toString (l/format-local-time val :year-month-day))))
  ;; create table
  ;; (jdbc/db-do-commands db-spec
  ;;                      [test-persons-sql])
  (db/create-table)
  ;; add person
  )

(defn fix-db-data
  [t]
  (db/add-person default-person)
  (t)
  (jdbc/execute! db/db-spec "truncate persons cascade;"))

;; (decode "application/json"  (:body (app {:request-method :get :uri "/persons/"})))
;; (empty? (decode "application/json"  (:body (app {:request-method :get :uri "/persons/" :query-string "search=kkkkkkk"}))))

(defn fix-db [t]
  (setup-db)
  (t)
  (db/drop-table))

(use-fixtures :once fix-db)
(use-fixtures :each fix-db-data)

(def json-header "application/json")

(deftest test-app-get-persons
  (let [request {:request-method :get :uri "/persons/"}
        response-body (:body (app request))
        decoded-response (decode json-header response-body)
        id (:id (first decoded-response))]
    (testing "get all persons"
      (is (= default-person
             (dissoc (first decoded-response) :id))))
    (testing "get person by id"
      (is (= default-person
             (dissoc
              (->> (app {:request-method :get
                         :uri (str  "/persons/" id)})
                   (:body)
                   (decode json-header)
                   (first))
              :id))))
    (testing "update person by id"
      (is (= test-person
             (dissoc
              (->> (app {:request-method :put
                         :uri (str  "/persons/" id)
                         :body-params test-person})
                   (:body)
                   (decode json-header)
                   (first))
              :id))))
    (testing "delete person by id"
      (is (= 200
             (:status (app {:request-method :delete
                            :uri (str  "/persons/" id)})))))))

(deftest test-app-get-persons-by-search
  (let [request {:request-method :get :uri "/persons/" :query-string "search=ok"}
        response-body (:body (app request))]
    (is (= default-person
           (dissoc (first (decode json-header response-body)) :id)))))

(deftest test-app-get-persons-by-fail-search
  (let [request {:request-method :get :uri "/persons/" :query-string "search=kkkkkkk"}
        response-status (:status (app request))]
    (is (= true
           (->> (app request)
                (:body)
                (decode json-header)
                (empty?))))))

(deftest test-app-page-not-found
  (let [request {:request-method :get :uri "/not-found"}
        status (:status (app request))]
    (is (= 404 status))))

;; bad params

(deftest test-app-create-person-bad-params
  (testing "Sending bad params:"
    (doseq [[params desription] bad-params]
      (testing desription
        (let [bad-param (merge test-person params)
              request {:request-method :post
                       :uri "/persons"
                       :body-params bad-param}
              status (:status (app request))]
          (is (= status 400)))))))
