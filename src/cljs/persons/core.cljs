(ns persons.core
  (:require
   [ajax.core :refer [GET POST PUT DELETE]]
   [helix.core :refer [defnc $]]
   [helix.hooks :as hooks]
   [helix.dom :as d]
   ["react-dom" :as rdom]
   [persons.components.modal :refer [modal]]
   [persons.components.table :refer [table]]))

(def table-mocks [
                  {:id 1
                   :full-name "Sirotin Alexandr"
                   :birth-date "07.12.1991"
                   :sex "male"
                   :address "Saint-Petersburg"
                   :insurance-policy-number 1234123412341234}
                  {:id 2
                   :full-name "Sirotin Alexandr"
                   :birth-date "07.12.1991"
                   :sex "male"
                   :address "Saint-Petersburg"
                   :insurance-policy-number 1234123412341234}])

;; TODO: delete mocks

(defnc app []
  (let [[persons set-persons] (hooks/use-state table-mocks)
        [person-id set-person-id] (hooks/use-state nil)
        [modal-type set-modal-type] (hooks/use-state nil)
        [is-modal-opened? set-modal-opened] (hooks/use-state false)
        [is-loading? set-loaded] (hooks/use-state false)]
    (hooks/use-effect
     :once
     (GET "http://localhost:8080/persons"
       {:handler (fn [response]
                   (set-loaded true)
                   (set-persons response))
        :error-handler (fn [error]
                         (set-loaded true)
                         (println error "error"))}))
    (d/div {:class "flex flex-col"}
           (d/h1 {:class "text-4xl pb-4 text-center"} "Persons")
           (d/button {:class "w-11/12 m-auto p-2 mb-4
                              bg-gray-100 hover:bg-gray-200"
                      :on-click #((set-person-id nil)
                                  (set-modal-type "edit")
                                  (set-modal-opened true))}
                     "Add new person")
           (if is-loading?
             ($ table {:persons persons
                       :set-person-id set-person-id
                       :set-modal-type set-modal-type
                       :set-modal-opened set-modal-opened})
             (d/h2 {:class "text-xl pt-4 text-center"} "Loading..."))
           (when (true? is-modal-opened?)
             ($ modal {:person-id person-id
                       :modal-type modal-type
                       :set-modal-opened set-modal-opened})))))

(defn ^:export ^:dev/after-load init []
  (rdom/render ($ app) (js/document.getElementById "app")))
