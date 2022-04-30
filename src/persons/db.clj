(ns persons.db
  (:require [clojure.java.jdbc :as jdbc]
            [clojure.spec.alpha :as s]
            [clj-time.core :as c]
            [clj-time.jdbc]
            [clj-time.local :as l]
            [clj-time.format :as f]))

;; TODO: db pool connector
;; TODO: normalize address and insurance policy

(def db-spec {:dbtype "postgresql"
              :dbname "postgres"
              :user "postgres"
              :password "postgres"})

(def persons-sql (jdbc/create-table-ddl
                  :persons [[:id :serial "PRIMARY KEY"] [:full_name "TEXT"]
                            [:sex "TEXT"]
                            [:birth_date "DATE"]
                            [:address "TEXT"]
                            [:insurance_policy_number "TEXT"]]))

(defn get-persons []
  (jdbc/query db-spec ["SELECT * FROM persons"] {:identifiers #(.replace % \_ \-)}))

(extend-protocol jdbc/IResultSetReadColumn
  java.sql.Date
  (result-set-read-column [val _rsmeta _idx]
    (.toString (l/format-local-time val :year-month-day))))

(defn add-person [{:keys
                   [full-name sex birth-date address insurance-policy-number]}]
  (jdbc/insert-multi! db-spec :persons
                      [{:full_name full-name
                        :sex sex
                        :birth_date (f/parse birth-date)
                        :address address
                        :insurance_policy_number insurance-policy-number}]))

(defn update-person [{:keys
                      [full-name sex birth-date address insurance-policy-number]}
                     id]
  (jdbc/update! db-spec :persons
                {:full_name full-name
                 :sex sex
                 :birth_date (f/parse birth-date)
                 :address address
                 :insurance_policy_number insurance-policy-number} ["id = ?" id]))

(defn get-person-by-id [id]
  (jdbc/query db-spec ["SELECT * FROM persons WHERE id = ?" id]
              {:identifiers #(.replace % \_ \-)}))

(defn delete-person [id]
  (jdbc/delete! db-spec :persons ["id = ?" id]))

(comment
  (jdbc/execute! db-spec "DROP TABLE persons;")
  (jdbc/db-do-commands db-spec
                       [persons-sql
                        "CREATE INDEX name_ix ON persons ( id );"]))

(s/def ::full-name (s/and string? #(> (count %) 1)))
(s/valid? ::full-name "A")
(s/valid? ::full-name "Alex")
(s/def ::date-format (s/and string? (partial re-matches #"^[0-9]{4}+-[0-9]{1,2}+\-[0-9]{1,2}$")))
(s/valid? ::date-format "19911207")
(s/valid? ::date-format "1991-0-7")
(s/valid? ::date-format "1991-12-07")
(s/def ::birth-date #(c/before? % (c/now)))
(s/valid? ::date-of-birth (f/parse "2022-4-27"))
(s/valid? ::date-of-birth (f/parse "1991"))
(s/valid? ::date-of-birth "1991")
(s/def ::insurance-policy-number (s/and string? #(= 10 (count %))))

(s/def ::form
  (s/keys :req [::full-name]))
  ;; (s/keys :req [::full-name ::birth-date ::insurance-policy-number]))
(def person {:full-name "Koka"
                  :sex "female"
                  :birth-date "1992-01-25"
                  :address "address"
                  :insurance-policy-number "$$$$$$$$$"})
(def person-okok {:full-name "Koka"})
(def person-ok {:full-name "Koka"
                  :birth-date "1992-01-25"
                  :insurance-policy-number "1234567890"})
(s/valid? ::form person-ok)
(s/valid? ::form person)
(s/explain-data ::form person-okok)
