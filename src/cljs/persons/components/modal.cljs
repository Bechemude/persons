(ns persons.components.modal
  (:require
   [re-frame.core :as rf]
   [persons.subs]
   [persons.events]
   [helix.core :refer [defnc $ <>]]
   [cljs.spec.alpha :as s]
   [reagent.core :as r]
   [helix.dom :as d]
   [form :as f]
   [persons.components.input :refer [input select]]))

(defn handle-change [key]
  #(rf/dispatch [:handle-change key (-> % .-target .-value)]))

(defn handle-close []
  (rf/dispatch [:modal nil])
  (rf/dispatch [:update-person nil]))

(defn edit-modal
  [id]
  (r/create-class
   {:component-did-mount
    (fn [] (when id (rf/dispatch [:get-person id])))
    :reagent-render
    (fn []
      (let [person @(rf/subscribe [:person])
            is-loading? @(rf/subscribe [:is-loading?])]
        [:<>
         (if id
           [:h2.text-xl.pt-4.text-center "Edit person"]
           [:h2.text-xl.pt-4.text-center "Create person"])
         (when is-loading? [:h2.text-xl.pt-4.text-center "Loading..."])
         (let [key :full-name]
           [input "ФИО"
            "text"
            (key person)
            (handle-change key)
            (s/valid? ::f/full-name (key person))
            (f/get-message (s/explain-data ::f/full-name (key person)))])
         (let [key :sex]
           [input "Пол"
            "text"
            (key person)
            (handle-change key)
            (s/valid? ::f/sex (key person))
            (f/get-message (s/explain-data ::f/sex (key person)))])
         (let [key :birth-date]
           [input "Дата рождения"
            "date"
            (key person)
            (handle-change key)
            (s/valid? ::f/birth-date (key person))
            (f/get-message (s/explain-data ::f/birth-date (key person)))])
         (let [key :address]
           [input "Адрес"
            "text"
            (key person)
            (handle-change key)
            (s/valid? ::f/address (key person))
            (f/get-message (s/explain-data ::f/address (key person)))])
         (let [key :insurance-policy-number]
           [input "Номер полиса ОМС"
            "text"
            (key person)
            (handle-change key)
            (s/valid? ::f/insurance-policy-number (key person))
            (f/get-message (s/explain-data ::f/insurance-policy-number (key person)))])
         [:button {:class "p-1 bg-gray-200 hover:bg-gray-300"
                   :on-click #(if (contains? person :id)
                                (rf/dispatch [:put-person person (:id person)])
                                (rf/dispatch [:post-person person]))}
          "Save!"]]))}))

(defnc delete-modal [{:keys [id]}]
  (<>
   (d/h2 {:class "text-xl text-center"} "Are you sure?")
   (d/p "Delete person " id)
   (d/button {:class "p-1 bg-red-100 hover:bg-red-200"
              :on-click #(rf/dispatch [:delete-person id])}
             "Delete")))

(defn modal
  []
  (let [modal @(rf/subscribe [:modal])
        error @(rf/subscribe [:error])
        ref (r/atom nil)]
    (r/create-class
     {:component-did-mount
      (fn [_]
        (.focus @ref))
      :reagent-render
      (fn []
        [:div {:on-key-down (fn [e] (when (= (.-key e) "Escape") (handle-close)))
               :tab-index 0
               :ref #(reset! ref %)
               :on-click handle-close
               :class "fixed left-0 top-0 w-screen h-screen
                    bg-gray-400 bg-opacity-50 overflow-auto"}
         [:div {:class "grid w-3/6 m-auto my-20 p-10 gap-10 bg-gray-100"
                :on-click (fn [e] (.stopPropagation e))}
          [:button {:class "absolute justify-self-end text-3xl -m-5 transform rotate-45"
                    :on-click handle-close} "+"]
          (case (:type modal)
            "delete" ($ delete-modal {:id (:person-id modal)})
            "edit" [edit-modal (:person-id modal)])
          (when error
            [:h2 {:class "text-xl pt-4 text-center"} "Error: " (:status-text error)])]])})))
