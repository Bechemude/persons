goog.provide('persons.core');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
persons.core.table_mocks = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"full-name","full-name",408178550),"Sirotin Alexandr",new cljs.core.Keyword(null,"birth-date","birth-date",-749581010),"07.12.1991",new cljs.core.Keyword(null,"sex","sex",-2056008571),"male",new cljs.core.Keyword(null,"address","address",559499426),"Saint-Petersburg",new cljs.core.Keyword(null,"insurance-policy-number","insurance-policy-number",-1729955203),(1234123412341234)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),(2),new cljs.core.Keyword(null,"full-name","full-name",408178550),"Sirotin Alexandr",new cljs.core.Keyword(null,"birth-date","birth-date",-749581010),"07.12.1991",new cljs.core.Keyword(null,"sex","sex",-2056008571),"male",new cljs.core.Keyword(null,"address","address",559499426),"Saint-Petersburg",new cljs.core.Keyword(null,"insurance-policy-number","insurance-policy-number",-1729955203),(1234123412341234)], null)], null);

persons.core.app = (function (){var G__33719 = (function persons$core$app(props__31811__auto__,maybe_ref__31812__auto__){
var vec__33720 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__31811__auto__),maybe_ref__31812__auto__], null);

var vec__33723 = helix.hooks.use_state(persons.core.table_mocks);
var persons__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33723,(0),null);
var set_persons = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33723,(1),null);
var vec__33726 = helix.hooks.use_state(null);
var person_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33726,(0),null);
var set_person_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33726,(1),null);
var vec__33729 = helix.hooks.use_state(null);
var modal_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33729,(0),null);
var set_modal_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33729,(1),null);
var vec__33732 = helix.hooks.use_state(false);
var is_modal_opened_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33732,(0),null);
var set_modal_opened = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33732,(1),null);
var vec__33735 = helix.hooks.use_state(false);
var is_loading_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33735,(0),null);
var set_loaded = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33735,(1),null);
var G__33738_33758 = helix.hooks.wrap_fx((function (){
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic("http://localhost:8080/persons",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
(set_loaded.cljs$core$IFn$_invoke$arity$1 ? set_loaded.cljs$core$IFn$_invoke$arity$1(true) : set_loaded.call(null,true));

return (set_persons.cljs$core$IFn$_invoke$arity$1 ? set_persons.cljs$core$IFn$_invoke$arity$1(response) : set_persons.call(null,response));
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),(function (error){
(set_loaded.cljs$core$IFn$_invoke$arity$1 ? set_loaded.cljs$core$IFn$_invoke$arity$1(true) : set_loaded.call(null,true));

return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([error,"error"], 0));
})], null)], 0));
}));
var G__33739_33759 = [];
(helix.hooks.raw_use_effect.cljs$core$IFn$_invoke$arity$2 ? helix.hooks.raw_use_effect.cljs$core$IFn$_invoke$arity$2(G__33738_33758,G__33739_33759) : helix.hooks.raw_use_effect.call(null,G__33738_33758,G__33739_33759));

return helix.core.get_react().createElement("div",(function (){var obj33741 = ({"className":"flex flex-col"});
return obj33741;
})(),helix.core.get_react().createElement("h1",(function (){var obj33743 = ({"className":"text-4xl pb-4 text-center"});
return obj33743;
})(),"Persons"),helix.core.get_react().createElement("button",(function (){var obj33745 = ({"className":"w-11/12 m-auto p-2 mb-4\n                              bg-gray-100 hover:bg-gray-200","onClick":(function (){
var G__33747 = (set_modal_type.cljs$core$IFn$_invoke$arity$1 ? set_modal_type.cljs$core$IFn$_invoke$arity$1("edit") : set_modal_type.call(null,"edit"));
var G__33748 = (set_modal_opened.cljs$core$IFn$_invoke$arity$1 ? set_modal_opened.cljs$core$IFn$_invoke$arity$1(true) : set_modal_opened.call(null,true));
var fexpr__33746 = (set_person_id.cljs$core$IFn$_invoke$arity$1 ? set_person_id.cljs$core$IFn$_invoke$arity$1(null) : set_person_id.call(null,null));
return (fexpr__33746.cljs$core$IFn$_invoke$arity$2 ? fexpr__33746.cljs$core$IFn$_invoke$arity$2(G__33747,G__33748) : fexpr__33746.call(null,G__33747,G__33748));
})});
return obj33745;
})(),"Add new person"),(cljs.core.truth_(is_loading_QMARK_)?helix.core.get_react().createElement(persons.components.table.table,(function (){var obj33752 = ({"persons":persons__$1,"set-person-id":set_person_id,"set-modal-type":set_modal_type,"set-modal-opened":set_modal_opened});
return obj33752;
})()):helix.core.get_react().createElement("h2",(function (){var obj33754 = ({"className":"text-xl pt-4 text-center"});
return obj33754;
})(),"Loading...")),((is_modal_opened_QMARK_ === true)?helix.core.get_react().createElement(persons.components.modal.modal,(function (){var obj33756 = ({"person-id":person_id,"modal-type":modal_type,"set-modal-opened":set_modal_opened});
return obj33756;
})()):null));
});
if(goog.DEBUG === true){
var G__33757 = G__33719;
goog.object.set(G__33757,"displayName","persons.core/app");

return G__33757;
} else {
return G__33719;
}
})();



persons.core.init = (function persons$core$init(){
return module$node_modules$react_dom$index.render(helix.core.get_react().createElement(persons.core.app,null),document.getElementById("app"));
});
goog.exportSymbol('persons.core.init', persons.core.init);

//# sourceMappingURL=persons.core.js.map
