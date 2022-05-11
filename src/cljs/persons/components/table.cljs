(ns persons.components.table
  (:require
   [helix.core :refer [defnc]]
   [helix.dom :as d]))

(defnc table [{:keys [persons set-modal-opened set-modal-type set-person-id]}]
  (if (not= (count persons) 0)
    (d/table {:class "table-auto w-11/12 m-auto"}
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
                                        :on-click (fn []
                                                    (set-person-id id)
                                                    (set-modal-type "edit")
                                                    (set-modal-opened true))}
                                       "Edit"))
                       (d/td (d/button {:class "p-1 bg-red-100 hover:bg-red-200"
                                        :on-click (fn []
                                                    (set-person-id id)
                                                    (set-modal-type "delete")
                                                    (set-modal-opened true))}
                                       "Delete"))))
               persons)))
    (d/h2 {:class "text-xl text-center pt-20"}  "List is empty")))
