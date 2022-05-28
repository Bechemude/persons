(ns persons.events
  (:require
   [re-frame.core :as rf]))

(rf/reg-event-db
 :initialize
 (fn [_ _]
   {:modal nil
    :persons nil
    :search-query nil}))

(rf/reg-event-db
 :modal
 (fn [db [_ modal]]
   (assoc db :modal modal)))

(rf/reg-event-db
 :search-query
 (fn [db [_ value]]
   (assoc db :search-query value)))

(rf/reg-event-db
 :persons
 (fn [db [_ value]]
   (assoc db :person value)))
