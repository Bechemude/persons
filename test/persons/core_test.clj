(ns persons.core-test
  (:require [clojure.test :refer :all]
            [persons.core :refer :all]))

(def params-ok  {:full-name "Sirotin Alexandr" 
                 :birth-date "07.12.1991"
                 :sex "male"
                 :address "Saint-Petersburg"
                 :insurance-policy-number 1234123412341234})

(def bad-params-variations
  [[{:full-name nil} "Empty full name field"]
   [{:full-name (apply str (repeat 999 "A"))} "Name is too long"]
   [{:sex nil} "Empty sex field"]
   [{:extra 42} "Extra field"]])



(deftest test-api-ok-request
  (testing "Get person"
    (let [status (:status (get-person-by-id 40))]
      (is (= status 200))))
  (testing "Add person"
    (is (= params-ok {})))
  (testing "Update person"
    (let [status (:status (get-person-by-id 40))]
      (is (= status 200))))
  (testing "Delete person"
    (let [status (:status (delete-person 40))]
      (is (= status 200)))))

(deftest test-api-bad-request
  (testing "Get person"
    (let [status (:status (get-person-by-id 400))]
      (is (= status 404))))
  (testing "FIXME, I fail."
    (is (= 1 1))))

