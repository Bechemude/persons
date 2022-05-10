(ns persons.components.modal
  (:require
   [ajax.core :refer [GET POST PUT DELETE]]
   [helix.core :refer [defnc $ <>]]
   [cljs.spec.alpha :as s]
   [helix.hooks :as hooks]
   [helix.dom :as d]
   [form :as f]
   [persons.components.input :refer [input select]]))

(def base-url "http://localhost:8080/persons/")

(defnc edit-modal [{:keys [id set-modal-opened]}]
  (let [[form set-form] (hooks/use-state {:full-name nil
                                          :sex nil
                                          :birth-date nil
                                          :address nil
                                          :insurance-policy-number nil})
        [is-loaded? set-loaded] (hooks/use-state false)
        [error set-error] (hooks/use-state nil)]

    (hooks/use-effect
     "Get the user being edited"
     [id]
     (when id
       (GET (str base-url id)
         {:handler (fn [response]
                     (set-loaded true)
                     (set-form (first response)))
          :errror-handler (fn [error]
                            (set-loaded true)
                            (set-error error))})))
    (<>
     (d/h2 {:class "text-xl text-center"}
           (if id
             (str "Edit person " id)
             "Create new person"))
     (when id (when-not is-loaded?
                (d/h2 {:class "text-xl pt-4 text-center"} "Loading...")))
     ($ input {:label "ФИО"
               :type "text"
               :value (:full-name form)
               :handler #(set-form assoc :full-name (-> % .-target .-value))
               :is-valid? (s/valid? ::f/full-name (:full-name form))
               :error-msg (f/get-message (s/explain-data ::f/full-name (:full-name form)))})
     ($ select {:label "Пол"
                :type "select"
                :value (:sex form)
                :handler #(set-form assoc :sex (-> % .-target .-value))
                :is-valid? (s/valid? ::f/sex (:sex form))
                :error-msg (f/get-message (s/explain-data ::f/sex (:sex form)))
                :options #{"male" "female" "other"}})
     ($ input {:label "Дата рождения"
               :type "date"
               :value (:birth-date form)
               :handler #(set-form assoc :birth-date (-> % .-target .-value))
               :is-valid? (s/valid? ::f/birth-date (:birth-date form))
               :error-msg (f/get-message (s/explain-data ::f/birth-date (:full form)))})
     ($ input {:label "Адрес"
               :type "text"
               :value (:address form)
               :handler #(set-form assoc :address (-> % .-target .-value))
               :is-valid? (s/valid? ::f/address (:address form))
               :error-msg (f/get-message (s/explain-data ::f/address (:address form)))})
     ($ input {:label "Номер полиса ОМС"
               :type "text"
               :value (:insurance-policy-number form)
               :handler #(set-form assoc :insurance-policy-number (-> % .-target .-value))
               :is-valid? (s/valid? ::f/insurance-policy-number (:insurance-policy-number form))
               :error-msg (f/get-message (s/explain-data ::f/insurance-policy-number (:insurance-policy-number form)))})
     (when error
       (d/h2 {:class "text-xl pt-4 text-center"} "Error: " (:status-text error)))
     (d/button {:class "p-1 bg-gray-200 hover:bg-gray-300"
                :on-click #((if id PUT POST)
                            (str base-url id)
                            {:response-format :json
                             :format :json
                             :params form
                             :error-handler (fn [error]
                                              (set-loaded true)
                                              (set-error error))})}
               "Save!"))))

(defnc delete-modal [{:keys [id set-modal-opened]}]
  (<>
   (d/h2 {:class "text-xl text-center"} "Are you sure?")
   (d/p "Delete person " id)
   (d/button {:class "p-1 bg-red-100 hover:bg-red-200"
              :on-click #(DELETE (str base-url id))}
             "Delete")))

(defnc modal [{:keys [person-id modal-type set-modal-opened]}]
  (let [modal-ref (hooks/use-ref nil)]
    (hooks/use-effect
     :once
     (.focus @modal-ref))
    (d/div {:on-key-down (fn [e] (when (= (.-key e) "Escape") (set-modal-opened false)))
            :tab-index 0
            :ref modal-ref
            :on-click (fn [] (set-modal-opened false))
            :class "fixed left-0 top-0 w-screen h-screen
                    bg-gray-400 bg-opacity-50 overflow-auto"}
           (d/div {:class "grid w-3/6 m-auto my-20 p-10 gap-10 bg-gray-100"
                   :on-click (fn [e] (.stopPropagation e))}
                  (d/button {:class "absolute justify-self-end text-3xl -m-5 transform rotate-45"
                             :on-click #(set-modal-opened false)} "+")
                  (case modal-type
                    "delete" ($ delete-modal {:id person-id
                                              :set-modal-opened set-modal-opened})
                    "edit" ($ edit-modal {:id person-id
                                          :set-modal-opened set-modal-opened}))))))
