(ns persons.frontend-test
  (:require
   [cljs.test :refer-macros [deftest is testing run-tests use-fixtures async]]
   ;; [persons.core :refer [app]]
   ;; [persons.components.table :refer [table]]
   ;; [helix.core :refer [$]]
   ;; ["@testing-library/react" :as rtl]
   [day8.re-frame.test :as rf-test]
   [re-frame.core :as rf]))

(def person {:full-name "Koka"
             :sex "female"
             :birth-date "1992-01-25"
             :address "address"
             :insurance-policy-number "1234567890"})

;; (use-fixtures :each
;;   {:after rtl/cleanup})

;; (deftest test-empty-table
;;   (testing "Empty table"
;;     (is
;;      (=
;;       "List is empty"
;;       (-> ($ table)
;;           (rtl/render)
;;           (. getByText "List is empty")
;;           (. -innerHTML))))))

;; (deftest test-table
;;   (testing "Table with data"
;;     (is
;;      (=
;;       "ФИО"
;;       (-> ($ table {:persons [person]})
;;           (rtl/render)
;;           (. getByText "ФИО")
;;           (. -innerHTML))))))

;; (deftest test-create-new-person-modal
;;   (testing "Open modal"
;;     (async done
;;            (do (-> ($ app)
;;                    (rtl/render)
;;                    (. getByText "Add new person")
;;                    (. click rtl/fireEvent))
;;                (-> (. rtl/screen findByText "Create new person")
;;                    (.then (is (= "Create new person" (. * -innerHTML))) (done)))))))

;; (rtl/cleanup)

(deftest test-search)
(rf/dispatch [:search-query])

(comment
  (run-tests))
