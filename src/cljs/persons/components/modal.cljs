(ns persons.components.modal
  (:require
   [re-frame.core :as rf]
   [persons.subs]
   [persons.events]
   [helix.core :refer [defnc $ <>]]
   [cljs.spec.alpha :as s]
   [helix.hooks :as hooks]
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

;; (defnc edit-modal [{:keys [id]}]
;;   (let [person @(rf/subscribe [:person])
;;         is-loading? @(rf/subscribe [:is-loading?])]
;;     (hooks/use-effect
;;      "Get the user"
;;      [id]
;;      :once
;;      (when id
;;        (rf/dispatch [:get-person id])))
;;     (<>
;;      (d/h2 {:class "text-xl text-center"}
;;            (if id
;;              (str "Edit person " id)
;;              "Create new person"))
;;      (when id (when is-loading?
;;                 (d/h2 {:class "text-xl pt-4 text-center"} "Loading...")))
;; ;; ($ input {:label "ФИО"
;; ;;                :type "text"
;; ;;                :value (:full-name person)
;; ;;                :handler (fn [e] (rf/dispatch [:handle-change :full-name (-> e .-target .-value)]))
;; ;;                :is-valid? (s/valid? ::f/full-name (:full-name person))
;; ;;                :error-msg (f/get-message (s/explain-data ::f/full-name (:full-name person)))})
;;      (let [search @(rf/subscribe [:search-query])]
;;        (r/as-element [:input {:label "ФИО"
;;                               :type "text"
;;                               :value search
;;                               :on-change #(rf/dispatch [:handle-change (-> % .-target .-value)])
;;                               :is-valid? (s/valid? ::f/full-name (:full-name person))
;;                               :error-msg (f/get-message (s/explain-data ::f/full-name (:full-name person)))}]))
;;      ($ select {:label "Пол"
;;                 :type "select"
;;                 :value (:sex person)
;;                 :handler #(rf/dispatch [:handle-change :sex (-> % .-target .-value)])
;;                 :is-valid? (s/valid? ::f/sex (:sex person))
;;                 :error-msg (f/get-message (s/explain-data ::f/sex (:sex person)))
;;                 :options #{"select a option" "male" "female" "other"}})
;;      ($ input {:label "Дата рождения"
;;                :type "date"
;;                :value (:birth-date person)
;;                :handler #(rf/dispatch [:handle-change :birth-date (-> % .-target .-value)])
;;                :is-valid? (s/valid? ::f/birth-date (:birth-date person))
;;                :error-msg (f/get-message (s/explain-data ::f/birth-date (:full person)))})
;;      ($ input {:label "Адрес"
;;                :type "text"
;;                :value (:address person)
;;                :handler #(rf/dispatch [:handle-change :address (-> % .-target .-value)])
;;                :is-valid? (s/valid? ::f/address (:address person))
;;                :error-msg (f/get-message (s/explain-data ::f/address (:address person)))})
;;      ($ input {:label "Номер полиса ОМС"
;;                :type "text"
;;                :value (:insurance-policy-number person)
;;                :handler #(rf/dispatch [:handle-change :insurance-policy-number (-> % .-target .-value)])
;;                :is-valid? (s/valid? ::f/insurance-policy-number (:insurance-policy-number person))
;;                :error-msg (f/get-message (s/explain-data ::f/insurance-policy-number (:insurance-policy-number person)))})
;;      (d/button {:class "p-1 bg-gray-200 hover:bg-gray-300"
;;                 :on-click #(prn person)}
;;                "Pers!")
;;      (d/button {:class "p-1 bg-gray-200 hover:bg-gray-300"
;;                 :on-click #(if id
;;                              (rf/dispatch [:put-person person id])
;;                              (rf/dispatch [:post-person person]))}
;;                "Save!"))))

(defnc delete-modal [{:keys [id]}]
  (<>
   (d/h2 {:class "text-xl text-center"} "Are you sure?")
   (d/p "Delete person " id)
   (d/button {:class "p-1 bg-red-100 hover:bg-red-200"
              :on-click #(rf/dispatch [:delete-person id])}
             "Delete")))

;; (defnc modal [{:keys [person-id modal-type]}]
;;   (let [modal-ref (hooks/use-ref nil)
;;         error @(rf/subscribe [:error])]
;;     (hooks/use-effect
;;      :once
;;      (.focus @modal-ref))
;;     (d/div {:on-key-down (fn [e] (when (= (.-key e) "Escape") (handle-close)))
;;             :tab-index 0
;;             :ref modal-ref
;;             :on-click handle-close
;;             :class "fixed left-0 top-0 w-screen h-screen
;;                     bg-gray-400 bg-opacity-50 overflow-auto"}
;;            (d/div {:class "grid w-3/6 m-auto my-20 p-10 gap-10 bg-gray-100"
;;                    :on-click (fn [e] (.stopPropagation e))}
;;                   (d/button {:class "absolute justify-self-end text-3xl -m-5 transform rotate-45"
;;                              :on-click handle-close} "+")
;;                   (case modal-type
;;                     "delete" ($ delete-modal {:id person-id
;;                                               :handle-close handle-close})
;;                     "edit" ($ edit-modal {:id person-id
;;                                           :handle-close handle-close}))
;;                   (when error
;;                     (d/h2 {:class "text-xl pt-4 text-center"} "Error: " (:status-text error)))))))

(defn modal
  []
  (let [modal @(rf/subscribe [:modal])]
    [:div {:on-key-down (fn [e] (when (= (.-key e) "Escape") (handle-close)))
           :tab-index 0
            ;; :ref modal-ref
           :on-click handle-close
           :class "fixed left-0 top-0 w-screen h-screen
                    bg-gray-400 bg-opacity-50 overflow-auto"}
     [:div {:class "grid w-3/6 m-auto my-20 p-10 gap-10 bg-gray-100"
            :on-click (fn [e] (.stopPropagation e))}
      [:button {:class "absolute justify-self-end text-3xl -m-5 transform rotate-45"
                :on-click handle-close} +]
      (case (:type modal)
        "delete" ($ delete-modal {:id (:person-id modal)})
        "edit" [edit-modal (:person-id modal)])]]))
