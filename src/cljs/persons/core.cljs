(ns persons.core
  (:require
   [ajax.core :refer [GET]]
   [helix.core :refer [defnc $]]
   [helix.hooks :as hooks]
   [helix.dom :as d]
   ["react-dom" :as rdom]
   [persons.components.modal :refer [modal]]
   [persons.components.table :refer [table]]))

(defnc app []
  (let [[persons set-persons] (hooks/use-state nil)
        [person-id set-person-id] (hooks/use-state nil)
        [modal-type set-modal-type] (hooks/use-state nil)
        [is-modal-opened? set-modal-opened] (hooks/use-state false)
        [is-loading? set-loaded] (hooks/use-state false)
        [is-updated? set-updated] (hooks/use-state false)
        [error set-error] (hooks/use-state nil)]
    (hooks/use-effect
     [is-modal-opened?]
     (when-not is-modal-opened?
       (set-updated false)))
    (hooks/use-effect
     [is-updated?]
     (when-not is-updated?
       (GET "http://localhost:8080/persons"
       {:handler (fn [response]
                   (set-loaded true)
                   (set-updated true)
                   (set-persons response))
        :error-handler (fn [error]
                         (set-loaded true)
                         (set-updated true)
                         (set-error error))})))
    (d/div {:class "flex flex-col"}
           (d/h1 {:class "text-4xl pb-4 text-center"} "Persons")
           (d/button {:class "w-11/12 m-auto p-2 mb-4
                              bg-gray-100 hover:bg-gray-200"
                      :on-click #((set-modal-type "edit")
                                  (set-modal-opened true))}
                     "Add new person")
           (when error
             (d/h2 {:class "text-xl pt-4 text-center"} "Error: " (:status-text error)))
           (if is-loading?
             ($ table {:persons persons
                       :set-person-id set-person-id
                       :set-modal-type set-modal-type
                       :set-modal-opened set-modal-opened})
             (d/h2 {:class "text-xl pt-4 text-center"} "Loading..."))
           (when is-modal-opened?
             ($ modal {:person-id person-id
                       :modal-type modal-type
                       :set-modal-opened set-modal-opened})))))

(defn ^:export ^:dev/after-load init []
  (rdom/render ($ app) (js/document.getElementById "app")))
