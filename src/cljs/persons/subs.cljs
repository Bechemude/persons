(ns persons.subs
  (:require
   [re-frame.core :as rf]))

(rf/reg-sub
 :persons
 (fn [db _]
   (:persons db)))

(rf/reg-sub
 :modal
 (fn [db _]
   (:modal db)))

(rf/reg-sub
 :search-query
 (fn [db _]
   (:search-query db)))
