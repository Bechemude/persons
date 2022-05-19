(ns persons.middlewares)

(defn wrap-exception-handling
  [handler]
  (fn [request]
    (try
       (handler request)
       (catch Exception e
         {:status 500 :body "Something Went Wrong"}))))
