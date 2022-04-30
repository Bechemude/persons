(ns persons.components.input
  (:require
   [helix.hooks :as hooks]
   [helix.dom :as d]))

(defn input []
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

           (when (and dirty (not (s/valid? ::full-name (:full-name form)))) (d/p {:class "text-red-500"} "error")))))
