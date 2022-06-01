(ns persons.core
  (:require
   [re-frame.core :as rf]
   [reagent.dom :as rdom]
   [persons.views :refer [app]])
  ;;  ["react-dom/client" :as rdom]
  )

;; (defn ^:export ^:dev/after-load init []
;;   (. (rdom/createRoot (js/document.getElementById "app")) render ($ app)))

(defn run
  []
  (rf/dispatch-sync [:initialize]) ;; WTF sync?
  (rf/dispatch [:get-persons])
  (app))

(run)

(defn ^:export ^:dev/after-load init []
  (rdom/render [app]
               (.getElementById js/document "app")))
