(ns persons.subs
  (:require
   [re-frame.core :as rf]))

(rf/reg-sub
 :persons
 (fn [db _]
   (:persons db)))

(rf/reg-sub
 :person
 (fn [db _]
   (:person db)))

(rf/reg-sub
 :error
 (fn [db _]
   (:error db)))

(rf/reg-sub
 :is-loading?
 (fn [db _]
   (:is-loading? db)))

(rf/reg-sub
 :modal
 (fn [db _]
   (:modal db)))

(rf/reg-sub
 :search-query
 (fn [db _]
   (:search-query db)))
