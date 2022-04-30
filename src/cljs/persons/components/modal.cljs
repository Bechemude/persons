(ns persons.components.modal
  (:require
   [ajax.core :refer [GET POST PUT DELETE]]
   [helix.core :refer [defnc $ <>]]
   [cljs.spec.alpha :as s]
   [helix.hooks :as hooks]
   [helix.dom :as d]))

(def base-url "http://localhost:8080/persons/")

(s/def ::full-name (s/and string? not-empty))
(s/def ::sex #{"male" "female" "other"})
(s/def ::insurance-policy-number (s/and string? #(partial re-matches #"^[0-9]{10}$")))
(s/valid? ::insurance-policy-number "12345678")
(s/valid? ::insurance-policy-number "1234567890")

(s/def ::birth-date (s/and
                     #(inst? (new js/Date "1991-12-7"))
                     #(< (.getTime (new js/Date %)) (.now js/Date))))

(s/def ::form (s/keys :req-un
                      [::full-name
                       ::sex
                       ::insurance-policy-number
                       ::birth-date]))

(def spec-errors
  {::full-name "Строка не должна быть пустой"
   ::sex "Выберите пол"
   ::birth-date "Выберите корректную дату рождения"
   ::insurance-policy-number "Номер страхового полиса состоит из 10 цифр"})

(defn get-message
  "Destructing explain-data map and get error form dictionary"
  [problem]
  (get spec-errors
       (->> problem
            (s/explain-data ::form)
            :cljs.spec.alpha/problems
            first
            :via
            last)))
(+ 1 2)
(def test-form {:full-name "" :sex "male"})

(get-message test-form)
;; (get spec-errors (last (:via (first (:cljs.spec.alpha/problems (s/explain-data ::form test-form))))))
;; (def problem (s/explain-data ::form test-form))

(defnc edit-modal [{:keys [id set-modal-opened]}]
  (let [[form set-form] (hooks/use-state {:full-name nil
                                          :sex nil
                                          :birth-date nil
                                          :address nil
                                          :insurance-policy-number nil})]
    (let [[errors set-error] (hooks/use-state {:full-name nil
                                               :sex nil
                                               :birth-date nil
                                               :address nil
                                               :insurance-policy-number nil})]
      (hooks/use-effect
       [id]
       (when id
         (GET (str base-url id)
           {:handler (fn [response]
                       (set-form (first response)))})))
      (<>
       (d/h2 {:class "text-xl text-center"}
             (if id
               (str "Edit person " id)
               "Create new person"))

       (let [[dirty set-dirty] (hooks/use-state false)]
         (d/div {:class "flex flex-col"}
                (d/label "ФИО")
                (d/input {:class
                          (str
                           (when
                            (and dirty (not (s/valid? ::full-name (:full-name form))))
                             "border-2 border-red-500 ")
                           "p-3")
                          :name "full-name"
                          :type "text" :placeholder "ФИО" :value (:full-name form)
                          :on-blur #(set-dirty true)
                          :on-change #(set-form assoc :full-name (-> % .-target .-value))})

                (when (and dirty (not (s/valid? ::full-name (:full-name form)))) (d/p {:class "text-red-500"} "error"))))
       (d/select {:class "p-3 bg-white"
                  :type "select" :placeholder "Пол" :value (:sex form)
                  :on-change #(set-form assoc :sex (.. % -target -value))}
                 (d/option "")
                 (d/option "male")
                 (d/option "female")
                 (d/option "other"))
       (d/input {:class "p-3"
                 :type "date" :placeholder "Дата рождения" :value (:birth-date form)
                 :on-change #(set-form assoc :birth-date (.. % -target -value))})
       (d/input {:class "p-3"
                 :type "text" :placeholder "Адрес" :value (:address form)
                 :on-change #(set-form assoc :address (.. % -target -value))})
       (d/input {:class "p-3"
                 :type "text" :placeholder "Номер полиса ОМС"
                 :value (:insurance-policy-number form)
                 :on-change #(set-form assoc :insurance-policy-number
                                       (.. % -target -value))})
       (d/button {:class "p-1 bg-gray-200 hover:bg-gray-300"
                  :on-click #(print form)}
                 "Save!")
       (d/button {:class "p-1 bg-gray-200 hover:bg-gray-300"
                  :on-click #((if id PUT POST)
                              (str base-url id)
                              {:response-format :json
                               :format :json
                               :params form})}
                 "Save!")))))

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
            :class "fixed overflow-hidden left-0 top-0 w-screen h-screen bg-gray-400 bg-opacity-50"}
           (d/div {:class "grid w-3/6 m-auto mt-20 p-10 gap-10 bg-gray-100"
                   :on-click (fn [e] (.stopPropagation e))}
                  (d/button {:class "absolute justify-self-end text-3xl -m-5 transform rotate-45"
                             :on-click #(set-modal-opened false)} "+")
                  (case modal-type
                    "delete" ($ delete-modal {:id person-id
                                              :set-modal-opened set-modal-opened})
                    "edit" ($ edit-modal {:id person-id
                                          :set-modal-opened set-modal-opened}))))))
