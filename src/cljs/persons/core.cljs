(ns persons.core
  (:require
   [ajax.core :refer [GET POST PUT DELETE]]
   [helix.core :refer [defnc $ <>]]
   [helix.hooks :as hooks]
   [helix.dom :as d]
   ["react-dom" :as rdom]))




(defnc edit-modal [{:keys [id set-modal-opened]}]
  (let [[form set-form] (hooks/use-state {:full-name nil
                                          :sex nil
                                          :birth-date nil
                                          :address nil
                                          :insurance-policy-number nil})]
    (hooks/use-effect
     [id]
     (when id 
       (GET (str "http://localhost:8080/persons/" id)
            {:handler (fn [response]
                      
                        (set-form (first response)))})))
    (println form)
   (<> 
    (if id  
      (d/h2 "Edit person " id)
      (d/h2  "Create person"))
                  (d/input {:type "text" :placeholder "ФИО" :value (:full-name form)
                            :on-change #(set-form assoc :full-name (.. % -target -value))})
                  (d/select {:type "select" :placeholder "Пол" :value (:sex form)
                              :on-change #(set-form assoc :sex (.. % -target -value))}
                            (d/option "")
                            (d/option "male")
                            (d/option "female")
                            (d/option "other"))
                  (d/input {:type "date" :placeholder "Дата рождения" :value (:birth-date form)
                             :on-change #(set-form assoc :birth-date (.. % -target -value))})
                  (d/input {:type "text" :placeholder "Адрес" :value (:address form)
                             :on-change #(set-form assoc :address (.. % -target -value))})
                  (d/input {:type "number" :placeholder "Номер полиса ОМС" 
                            :value (:insurance-policy-number form)
                            :on-change #(set-form assoc :insurance-policy-number
                                                  (.. % -target -value))})
                  (d/input {:type "button" :value "Save!"
                            :on-click #(POST "http://localhost:8080/persons" {:body form}
                                              {:handler (fn [response]
                                                          (println response)
                                                          )})}))))


                         

(defnc delete-modal [{:keys [id set-modal-opened]}]
  (<>
   (d/h2 "Are you sure?")
   (d/p "Delete person " id)
   (d/div {:style {:display "flex" :justify-content "space-between"}}
          (d/input {:style {:margin-bottom 0} 
                    :type "button" :value "Cancel" :on-click #(set-modal-opened false)})
          (d/input {:type "button" :value "Delete" 
                    :on-click #(DELETE (str "http://localhost:8080/persons/" id))}))))


(defnc modal [{:keys [person-id modal-type set-modal-opened]}]
  (d/div {:style {:position "fixed" 
                  :overflow "hidden" 
                  :left "0" :top "0" :background "rgb(0 0 0 / 30%)"
                  :width "100vw" :height "100vh"}}
         (d/form {:style 
                  {:display "grid" :width "50%" :margin "200px auto"
                    :padding "2em" :background "#f9f9f9"}}
                 (d/button {:on-click #(set-modal-opened false)} "close")
                 (case modal-type
                   "delete" ($ delete-modal {:id person-id 
                                             :set-modal-opened set-modal-opened})
                   "edit" ($ edit-modal  {:id person-id 
                                          :set-modal-opened set-modal-opened})))))


(defnc table [{:keys [persons set-modal-opened set-modal-type set-person-id]}]
  (if (not= (count persons) 0) 
    (d/table
     (d/thead
      (d/tr 
       (d/th "id")
       (d/th "ФИО")
       (d/th "Пол")
       (d/th "Дата рождения")
       (d/th "Адрес")
       (d/th "Номер полиса ОМС")))
     (d/tbody
      (map-indexed 
       (fn [i {:keys [id full_name sex birth-date address insurance-policy-number]}]
         (d/tr {:key i} 
               (d/td id)
               (d/td full_name)               
               (d/td sex)
               (d/td birth-date)
               (d/td address)
               (d/td insurance-policy-number)
               (d/td (d/button {:on-click #((set-person-id id)
                                            (set-modal-type "edit")
                                            (set-modal-opened true))}
                               "Edit"))
               (d/td (d/button {:on-click #((set-person-id id)
                                            (set-modal-type "delete")
                                            (set-modal-opened true))} 
                               "Delete"))))
       persons))) 
    (d/h2  "List is empty")))


;; (def table-mocks [
;;                   {:id 1
;;                    :full-name "Sirotin Alexandr" 
;;                    :birth-date "07.12.1991"
;;                    :sex "male"
;;                    :address "Saint-Petersburg"
;;                    :insurance-policy-number 1234123412341234}
;;                   {:id 2
;;                    :full-name "Sirotin Alexandr" 
;;                    :birth-date "07.12.1991"
;;                    :sex "male"
;;                    :address "Saint-Petersburg"
;;                    :insurance-policy-number 1234123412341234}]) 


(defnc app []
  (let [[persons set-persons] (hooks/use-state nil)
        [person-id set-person-id] (hooks/use-state nil)
        [modal-type set-modal-type] (hooks/use-state nil)
        [is-modal-opened? set-modal-opened] (hooks/use-state false)
        [is-loading? set-loaded] (hooks/use-state true)]
    (hooks/use-effect 
     [is-modal-opened?]
     (println modal-type))
    (hooks/use-effect
     :once
     (GET "http://localhost:8080/persons"
          {:handler (fn [response]
                      (set-loaded false)
                      (set-persons response))}))
    (d/div
     (d/h1 "Persons")
     (d/button {:on-click #((set-person-id nil)
                            (set-modal-type "edit")
                            (set-modal-opened true))} 
               "Add new person")
     (if is-loading?
       (d/h2 "Loading...")
       ($ table {:persons persons 
                 :set-person-id set-person-id 
                 :set-modal-type set-modal-type 
                 :set-modal-opened set-modal-opened}))
     (when (true? is-modal-opened?)
       ($ modal {:person-id person-id 
                 :modal-type modal-type 
                 :set-modal-opened set-modal-opened})))))


(defn ^:export ^:dev/after-load init []
  (println "start")
  (rdom/render ($ app) (js/document.getElementById "app")))










