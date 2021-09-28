(ns persons.db
  (:require [clojure.java.jdbc :as jdbc])
  (:import java.util.Date))



(def db-spec {:dbtype "postgresql"
              :dbname "postgres"
              :user "postgres"
              :password "postgres"})


(def persons-sql (jdbc/create-table-ddl 
                :persons [
                          [:id :serial "PRIMARY KEY"] 
                          [:full_name "TEXT" ]
                          [:sex "TEXT"]
                          [:birth_date "DATE"]
                          [:address "TEXT"]
                          [:insurance_policy_number "INTEGER"]]))

;; (jdbc/db-do-commands db-spec
;;                      [persons-sql
;;                       "CREATE INDEX name_ix ON persons ( id );"])


(defn get-persons [] (jdbc/query db-spec ["SELECT * FROM persons"]))

(defn add-person [{:keys 
                   [full-name sex address birth-date address insurance-policy-number]
                   :as person}] 
  (jdbc/insert-multi! db-spec :persons
                      [{:full_name full-name
                        :sex sex
                        :birth_date birth-date
                        :address address
                        :insurance_policy_number insurance-policy-number}]))

(defn update-person [{:keys 
                      [full-name sex address birth-date address insurance-policy-number]} 
                     id] 
  (jdbc/update! db-spec :persons
                {:full_name full-name
                 :sex sex
                 :birth_date birth-date
                 :address address
                 :insurance_policy_number insurance-policy-number} ["id = ?" id]))

(defn get-person-by-id [id] 
  (jdbc/query   db-spec ["SELECT * FROM persons WHERE id = ?" id]))


(defn delete-person [id]
  (jdbc/delete! db-spec :persons ["id = ?" id]))
  
