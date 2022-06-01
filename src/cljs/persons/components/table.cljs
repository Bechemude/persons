(ns persons.components.table
  (:require
   [re-frame.core :as rf]
   ;; [persons.events]
   ;; [persons.subs]
   [helix.core :refer [defnc]]
   [helix.dom :as d]))

(defnc table [{:keys [persons]}]
  (if (not= (count persons) 0)
    (d/table {:class "table-auto"}
             (d/thead
              (d/tr {:class "text-left border-solid"}
                    (d/th "id")
                    (d/th "ФИО")
                    (d/th "Пол")
                    (d/th "Дата рождения")
                    (d/th "Адрес")
                    (d/th "Номер полиса ОМС")))
             (d/tbody
              (map-indexed
               (fn [i {:keys [id full-name sex birth-date address insurance-policy-number]}]
                 (d/tr {:key i
                        :class "border-b-2"}
                       (d/td id)
                       (d/td full-name)
                       (d/td sex)
                       (d/td birth-date)
                       (d/td address)
                       (d/td insurance-policy-number)
                       (d/td (d/button {:class "p-1 bg-gray-100 hover:bg-gray-200"
                                        :on-click #(rf/dispatch [:modal
                                                                 {:is-opened? true
                                                                  :type "edit"
                                                                  :person-id id}])}
                                       "Edit"))
                       (d/td (d/button {:class "p-1 bg-red-100 hover:bg-red-200"
                                        :on-click #(rf/dispatch [:modal
                                                                 {:is-opened? true
                                                                  :type "delete"
                                                                  :person-id id}])}
                                       "Delete"))))
               persons)))
    (d/h2 {:class "text-xl text-center pt-20"}  "List is empty")))
