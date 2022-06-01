(ns persons.components.input
  (:require
   [helix.core :refer [defnc]]
   [reagent.core :as r]
   [helix.hooks :as hooks]
   [helix.dom :as d]))

(defn input
  [label type value handler is-valid? err-msg]
  (let [dirty (r/atom false)]
    (fn [label type value handler is-valid? err-msg]
      [:div.flex.flex-col
       [:label label]
       [:input.p-3 {:class
                    (when (and @dirty (not is-valid?))
                      "border-2 border-red-500 ")
                    :type type :placeholder label :value value
                    :on-blur #(reset! dirty true)
                    :on-change handler}]
       (when (and @dirty (not is-valid?))
         [:p.text-red-500 err-msg])])))

;; (defnc input [{:keys [is-valid? label type value handler error-msg] :as props}]
;;   (let [[dirty set-dirty] (hooks/use-state false)]
;;     (d/div {:class "flex flex-col"}
;;            (d/label label)
;;            (d/input {:class
;;                      (str
;;                       (when (and dirty (not is-valid?))
;;                         "border-2 border-red-500 ")
;;                       "p-3")
;;                      :type type :placeholder label :value value
;;                      :on-blur #(set-dirty true)
;;                      :on-change handler})
;;            (when (and dirty (not is-valid?))
;;              (d/p {:class "text-red-500"} error-msg)))))

(defnc select [{:keys [is-valid? label type value handler options error-msg] :as props}]
  (let [[dirty set-dirty] (hooks/use-state false)]
    (d/div {:class "flex flex-col"}
           (d/label label)
           (d/select {:class
                      (str
                       (when (and dirty (not is-valid?))
                         "border-2 border-red-500 ")
                       "p-3 bg-white")
                      :type type :placeholder label :value value
                      :default-value "select a option"
                      :on-blur #(set-dirty true)
                      :on-change handler}
                     (map-indexed (fn [i option]
                                    (d/option {:key i
                                               :class (if (= option "select a option")
                                                        "hidden"
                                                        "")
                                               :disabled (= option "select a option")}
                                              option))
                                  options))
           (when (and dirty (not is-valid?))
             (d/p {:class "text-red-500"} error-msg)))))
