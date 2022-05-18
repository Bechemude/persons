(ns persons.frontend-test
  (:require
   [cljs.test :refer-macros [deftest is testing run-tests use-fixtures async]]
   [persons.core :refer [app]]
   [persons.components.table :refer [table]]
   [helix.core :refer [$]]
   [cljs.core.async.interop :refer-macros [<p! p->c]]
   [cljs.core.async :refer [timeout take! go go-loop <!]]
   ["@testing-library/react" :as rtl]))

(def person {:full-name "Koka"
             :sex "female"
             :birth-date "1992-01-25"
             :address "address"
             :insurance-policy-number "1234567890"})

(use-fixtures :each
  {:after rtl/cleanup})

(deftest test-empty-table
  (testing "Empty table"
    (is
     (=
      "List is empty"
      (-> ($ table)
          (rtl/render)
          (. getByText "List is empty")
          (. -innerHTML))))))

(deftest test-table
  (testing "Table with data"
    (is
     (=
      "ФИО"
      (-> ($ table {:persons [person]})
          (rtl/render)
          (. getByText "ФИО")
          (. -innerHTML))))))

(deftest test-create-new-person-modal
  (testing "Modal for creating new person"
    (async done
           (do (-> ($ app)
                   (rtl/render)
                   (. getByText "Add new person")
                   (. click rtl/fireEvent))
               (-> (. rtl/screen findByText "Create new person")
                   (.then #(is (= "Loadin..." (. % -innerHTML)))))
               (done)))))

;; this sexp work!
;;

(do (-> ($ app)
        (rtl/render)
        (. getByText "Add new person")
        (. click rtl/fireEvent))
    (go
      (is
       (= "text"
          (<!
           (-> (. rtl/screen findByText "Create new person")
               (.then #(. % -innerHTML))))))))

(is (= "text" (fn [])))

(. rtl/screen findByText "Create new person")

(. %  -innerHTML)

(go-loop []
  (<! (timeout 100))
  (println "Hello from process 1")
  (recur))

(go []
    (<p! (js/Promise.resolve (println "Hello from process 1"))))

(rtl/cleanup)

(comment
  (run-tests))
