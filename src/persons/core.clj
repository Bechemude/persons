(ns persons.core
  (:gen-class)
  (:require [ring.adapter.jetty :refer [run-jetty]]
            [ring.middleware.reload :refer [wrap-reload]]
            [ring.middleware.params :refer [wrap-params]]
            [ring.middleware.keyword-params :refer [wrap-keyword-params]]
            [ring.middleware.cors :refer [wrap-cors]]
            [ring.middleware.defaults :refer :all]
            [muuntaja.middleware :refer [wrap-format]]
            [compojure.core :refer :all]
            [compojure.coercions :refer [as-int]]
            [compojure.route :as route]
            [clj-time.core :as t]
            [persons.db :as db]))


(t/date-time 1986 10 14 4 3 27 456)

(+ 1 1)

(def a 100)


(defn get-persons []
  (let [persons (db/get-persons)]
    {:status 200
     :body persons}))

(defn get-person-by-id [id]
  (let [person (db/get-person-by-id id)]
    (if (not-empty person) 
      {:status 200
       :body person}
      {:status 404
       :body {:error_code "MISSING_PERSON"
              :error_message "No such a person"
              :error_data {:id id}}})))

(defn add-person [request]
  (let [person (db/add-person request)]
    {:status 201
     :body person}))


(defn update-person [request id]
  (if (= 1 (first (db/update-person request id)))
    {:status 200
     :body id}
    {:status 404
     :body {:error_code "MISSING_PERSON"
            :error_message "No such a person"
            :error_data {:id id}}}))



(add-person {:full-name "TEST" :address "TEST"})

;; (add-person {"full-name":"Aurora","sex":"female"})



;; (first (db/update-person {:full-name "Upd"} 7))
;; {"full-name":"Aurora","sex":"female"}
;; {:full-name "Aurora" :sex "female"}

;; (defn delete-person [id]
;;   (if (= 1 (first (db/delete-person id))))

;; (first (db/update-person {:full-name "Upd"} 7))
;; {"full-name":"Aurora","sex":"female"}
;; {:full-name "Aurora" :sex "female"}



(defn delete-person [id]
  (if (= 1 (first (db/delete-person id)))
    {:status 200
     :body id}
    {:status 404
     :body {:error_code "MISSING_PERSON"
            :error_message "No such a person"
            :error_data {:id id}}}))

(delete-person 56)

(first (db/delete-person 44))


(defroutes app-routes
  (POST "/aga" [_] 
        ;; (let [body (slurp (:body request))])
        (println "params"))
  (context "/persons" [] 
           (GET "/" [] (get-persons))
           (POST "/" [request] (println request))
           (context "/" []
                    (GET "/:id{[0-9]+}" [id :<< as-int] (get-person-by-id id))
                    (PUT "/:id{[0-9]+}" [request id :<< as-int] (update-person request id))
                    (DELETE "/:id{[0-9]+}" [id :<< as-int] (delete-person id))))
  (route/not-found "<h1>Page not found</h1>"))


(def app
  (-> app-routes
      wrap-params
      wrap-format
      wrap-keyword-params
      (wrap-cors :access-control-allow-origin [#".*"]
                 :access-control-allow-methods [:get :put :post :delete])

      ;; wrap-defaults
      wrap-reload))


(defn -main []
  (println "Server started")
  (run-jetty #'app {:port 8080
                    :join? false}))



(comment
  (def app-server-instance (-main))
  (.stop app-server-instance))


;; (app "/persons")


;; (def request {:headers {"accept" "application/json"}})

;; (->> request app)

;; (app {:get "persons"})
;; (get-person-by-id 6)
