(ns persons.core
  (:gen-class)
  (:require [ring.adapter.jetty :refer [run-jetty]]
            [ring.middleware.cors :refer [wrap-cors]]
            [muuntaja.middleware :refer [wrap-format wrap-exception]]
            [compojure.core :refer :all]
            [compojure.coercions :refer [as-int]]
            [compojure.route :as route]
            [persons.crud :refer [get-persons
                                  get-person-by-id
                                  add-person
                                  update-person
                                  delete-person]]))

(defroutes app-routes
  (context "/persons" []
    (GET "/" [] (get-persons))
    (POST "/" [:as req] (add-person (:body-params req)))
    (context "/" []
      (GET "/:id{[0-9]+}" [id :<< as-int] (get-person-by-id id))
      (PUT "/:id{[0-9]+}" [:as req id :<< as-int] (update-person (:body-params req) id))
      (DELETE "/:id{[0-9]+}" [id :<< as-int] (delete-person id))))
  (route/not-found "<h1>Page not found</h1>"))

(def app
  (-> app-routes
      wrap-exception
      wrap-format
      (wrap-cors :access-control-allow-origin [#".*"]
                 :access-control-allow-methods [:get :put :post :delete])

      ))

(def server nil)

(defn start! []
  (alter-var-root (var server)
                  (fn [server]
                    (if-not server
                      (run-jetty app {:port 8080
                                      :join? false})
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
