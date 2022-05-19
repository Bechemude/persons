(defproject persons "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "EPL-2.0 OR GPL-2.0-or-later WITH Classpath-exception-2.0"
            :url "https://www.eclipse.org/legal/epl-2.0/"}
  :dependencies [[org.clojure/clojure "1.10.1"]
                 [ring "1.9.4"]
                 [metosin/muuntaja "0.6.8"]
                 [ring-cors "0.1.13"]
                 [compojure "1.6.2"]
                 [clj-time "0.15.2"]
                 [org.clojure/java.jdbc "0.7.12"]
                 [org.postgresql/postgresql "42.2.23"]]
  :plugins [[lein-cloverage "1.2.2"]]
  :src-paths ["src/clj" "src/spec"]
  :resource-paths ["resources"]
  :main ^:skip-aot persons.core
  :target-path "target/%s"
  :profiles {:uberjar {:aot :all
                       :jvm-opts ["-Dclojure.compiler.direct-linking=true"]}})
