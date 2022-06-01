(ns persons.events
  (:require
   [day8.re-frame.http-fx]
   [ajax.core :as ajax]
   [re-frame.core :as rf]))

(rf/reg-event-db
 :initialize
 (fn [_ _]
   {:modal nil
    :is-loading? false
    :error nil
    :person nil
    :persons nil
    :search-query nil}))

(rf/reg-event-db
 :modal
 (fn [db [_ modal]]
   (assoc db :modal modal :error nil)))

(rf/reg-event-db
 :error
 (fn [db [_ error]]
   (assoc db :error error)))

(rf/reg-event-db
 :search-query
 (fn [db [_ value]]
   (assoc db :search-query value)))

(rf/reg-event-db
 :handle-change
 (fn [db [_ key value]]
   (update db :person assoc key value)))

(def db {:person {:full-name ""}})

(update db :person assoc :full-name "keke")

(def base-url "http://localhost:8080/persons/")

;; Persons list

(rf/reg-event-fx
 :get-persons
 (fn [{:keys [db]} [_ search]]
   {:http-xhrio {:method :get
                 :uri base-url
                 :params (when search {:search search})
                 :response-format (ajax/json-response-format {:keywords? true})
                 :on-success  [:success-get-persons]
                 :on-failure     [:failure-http-result]}
    :db (assoc db :is-loading? true)}))

(rf/reg-event-db
 :success-get-persons
 (fn [db [_ persons]]
   (assoc db :persons persons :is-loading? false)))

;; Person

(rf/reg-event-fx
 :get-person
 (fn [{:keys [db]} [_ id]]
   {:http-xhrio {:method :get
                 :uri (str base-url id)
                 :response-format (ajax/json-response-format {:keywords? true})
                 :on-success  [:success-get-person]
                 :on-failure  [:failure-http-result]}
    :db (assoc db :is-loading? true)}))

(rf/reg-event-fx
 :post-person
 (fn [{:keys [db]} [_ person]]
   (prn person)
   {:http-xhrio {:method :post
                 :uri base-url
                 :params person
                 :format (ajax/json-request-format)
                 :response-format (ajax/json-response-format {:keywords? true})
                 :on-success  [:update-person]
                 :on-failure     [:failure-http-result]}
    :db (assoc db :is-loading? true)}))

(rf/reg-event-fx
 :put-person
 (fn [{:keys [db]} [_ person id]]
   {:http-xhrio {:method :put
                 :uri (str base-url id)
                 :params person
                 :format (ajax/json-request-format)
                 :response-format (ajax/json-response-format {:keywords? true})
                 :on-success  [:update-person]
                 :on-failure     [:failure-http-result]}
    :db (assoc db :is-loading? true)}))

(rf/reg-event-fx
 :delete-person
 (fn [{:keys [db]} [_ id]]
   {:http-xhrio {:method :delete
                 :uri (str base-url id)
                 :format (ajax/json-request-format)
                 :response-format (ajax/json-response-format {:keywords? true})
                 :on-success  [:update-person]
                 :on-failure     [:failure-http-result]}
    :db (assoc db :is-loading? true)}))

;; TODO :get-persons after udpdate

(rf/reg-event-db
 :success-get-person
 (fn [db [_ person]]
   (assoc db :person (first person) :is-loading? false)))

(rf/reg-event-fx
 :update-person
 (fn [cofx [_ person]]
   {:db (assoc (:db cofx) :person (first person) :is-loading? false :modal nil)
    :fx [[:dispatch [:get-persons]]]}))

(rf/reg-event-db
 :failure-http-result
 (fn [db [_ error]]
   (assoc db :error error :is-loading? false)))
