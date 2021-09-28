
shadow.cljs.devtools.client.env.module_loaded('main');

try { persons.core.init(); } catch (e) { console.error("An error occurred when calling (persons.core/init)"); throw(e); }