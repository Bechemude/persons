(ns persons.views
  (:require
   [re-frame.core :as rf]
   [persons.subs]
   [persons.events]
   [helix.core :refer [$]]
   [persons.components.modal :refer [modal]]
   [persons.components.table :refer [table]]
   [persons.components.input :refer [input]]))

(defn dispatch-modal-event
  []
  (rf/dispatch [:modal true]))

(defn header
  [])

(defn search
  []
  [:div.flex.border-2.border-black-500
   ($ input
      {:label "l"
       :type "text"
       :value @(rf/subscribe [:search-query])
       :handler #(rf/dispatch [:search-query (-> % .-target .-value)])})
   [:button {:class "w-11/12 m-auto p-2 mb-4 bg-gray-100 hover:bg-gray-200"
             :on-click #(prn "hello")} "find"]])

(defn add-person-btn
  []
  [:button
   {:class "w-11/12 m-auto p-2 mb-4 bg-gray-100 hover:bg-gray-200"
    :on-click (fn []
                (rf/dispatch [:modal {:is-opened? true :type "edit"}]))}
   "Add new person"])

(defn app
  []
  (let [persons @(rf/subscribe [:persons])
        modal-state @(rf/subscribe [:modal])]

    [:div.flex.flex-col
     [search]
     [:h1.text-4xl.py-4.text-center "Persons"]
     [add-person-btn]
     (if (:is-loading? persons)
       ($ table {:persons persons
                 ;; :set-person-id set-person-id
                 ;; :set-modal-type set-modal-type
                 ;; :set-modal-opened set-modal-opened
                 })
       [:h2 {:class "text-xl pt-4 text-center"} "Loading..."])
     (when (:is-opened? modal-state)
       ($ modal
          {:modal-type (:type modal-state)}))]))
