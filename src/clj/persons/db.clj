(ns persons.db
  (:require [clojure.java.jdbc :as jdbc]
            [clj-time.jdbc]
            [clj-time.local :as l]
            [clj-time.format :as f]))

(extend-protocol jdbc/IResultSetReadColumn
  java.sql.Date
  (result-set-read-column [val _rsmeta _idx]
    (.toString (l/format-local-time val :year-month-day))))

(def db-spec {:dbtype "postgresql"
              :dbname "postgres"
              :user "postgres"
              :password "postgres"})

(def persons-sql (jdbc/create-table-ddl
                  :persons [[:id :serial "PRIMARY KEY NOT NULL"]
                            [:full_name "TEXT NOT NULL"]
                            [:sex "TEXT NOT NULL"]
                            [:birth_date "DATE NOT NULL"]
                            [:address "TEXT NOT NULL"]
                            [:insurance_policy_number "TEXT NOT NULL UNIQUE"]]))

(defn create-table []
  (jdbc/db-do-commands db-spec
                       persons-sql))

;; TODO: delete index dublicate

(defn drop-table []
  (jdbc/execute! db-spec "DROP TABLE persons;"))

(defn get-persons
  []
  (jdbc/query db-spec ["SELECT * FROM persons"]
              {:identifiers #(.replace % \_ \-)}))

(defn get-persons-by-search
  [search]
  (jdbc/query db-spec [(str
                        "SELECT * FROM persons WHERE full_name ILIKE '%" search "%'")]
              {:identifiers #(.replace % \_ \-)}))

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
  (create-table)
  (drop-table))
