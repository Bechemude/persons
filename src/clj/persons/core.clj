(ns persons.core
  (:gen-class)
  (:require
   [compojure.coercions :refer [as-int]]
   [compojure.core :refer [DELETE POST PUT GET context defroutes]]
   [compojure.route :as route]
   [muuntaja.middleware :refer [wrap-params wrap-format wrap-exception]]
   [muuntaja.core :as m]
   [persons.crud :refer [get-persons
                         get-person-by-id
                         add-person
                         update-person
                         delete-person]]
   [persons.middlewares :refer [wrap-exception-handling]]
   [ring.adapter.jetty :refer [run-jetty]]
   [ring.middleware.cors :refer [wrap-cors]]))

(defroutes app-routes
  (context "/persons" []
    (GET "/" [:as query] (get-persons (:query-string query)))
    (POST "/" [:as req] (add-person (:body-params req)))
    (context "/" []
      (GET "/:id{[0-9]+}" [id :<< as-int] (get-person-by-id id))
      (PUT "/:id{[0-9]+}" [:as req id :<< as-int] (update-person (:body-params req) id))
      (DELETE "/:id{[0-9]+}" [id :<< as-int] (delete-person id))))
  (route/not-found "<h1>Page not found</h1>"))

(def app
  (-> app-routes
      wrap-exception-handling
      wrap-exception
      wrap-format
      wrap-params
      (wrap-cors :access-control-allow-origin [#".*"]
                 :access-control-allow-methods [:get :put :post :delete])))

(def server nil)

(def server-options {:port 8080
                     :join? false})

(defn start! []
  (alter-var-root (var server)
                  (fn [server]
                    (if-not server
                      (run-jetty app server-options)
                      server))))

(defn stop! []
  (alter-var-root
   (var server)
   (fn [server]
     (when server
       (.stop server)
       nil))))

(defn restart []
  (stop!)
  (start!))

(comment
  (start!)
  (stop!)
  (restart))

(comment
  (app {:request-method :get :uri "/persons"})
  (app {:request-method :get :uri "/persons/" :query-string {:search "Kok"}})
  (m/decode
   "application/json"
   (:body (app {:request-method :get :uri "/persons/" :query-string "search=sok"})))
  (m/decode "application/json"
            (:body (app {:request-method :get :uri "/persons/"})))
  (:body (get-persons nil))
  (get-persons  "Kok")
  (get-persons  "Sok")
  (app {:request-method :get :uri "/persons/1"})
  (app {:request-method :post :uri "/persons"
        :body-params {:full-name "Koka"
                      :birth-date "1992-01-25"
                      :address "address"
                      :insurance-policy-number "$$$$$$$$$"}}))
