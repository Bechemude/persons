(ns persons.views
  (:require
   [re-frame.core :as rf]
   [persons.subs]
   [persons.events]
   [helix.core :refer [$]]
   [persons.components.modal :refer [modal]]
   [persons.components.table :refer [table]]))

(defn search
  []
  (let [search @(rf/subscribe [:search-query])]
    [:div.flex.mb-4.bg-gray-500
     [:input.w-full.p-2.border-2.border-gray-200
      {:type "text"
       :placeholder "Search"
       :value search
       :on-change #(rf/dispatch [:search-query (-> % .-target .-value)])}]
     [:button.p-2.bg-gray-100.hover:bg-gray-200
      {:on-click #(rf/dispatch [:get-persons search])} "find"]]))

(defn add-person-btn
  []
  [:button.p-2.mb-4.bg-gray-100.hover:bg-gray-200
   {:on-click #(rf/dispatch [:modal {:is-opened? true :type "edit"}])}
   "Add new person"])

(defn app
  []
  (let [persons @(rf/subscribe [:persons])
        error @(rf/subscribe [:error])
        is-loading? @(rf/subscribe [:is-loading?])
        modal-state @(rf/subscribe [:modal])]
    [:div.flex.flex-col.px-10
     [:h1.text-4xl.py-4.text-center "Persons"]
     (when (and error (not (:is-opened? modal-state)))
       [:h1.text-4xl.py-4.text-center "Error: " (:status-text error)])
     [add-person-btn]
     [search]
     ;; TABLE
     (if (not is-loading?)
       ($ table {:persons persons})
       [:h2.text-xl.pt-4.text-center "Loading..."])
     ;; MODAL
     (when (:is-opened? modal-state)
       [modal])]))
