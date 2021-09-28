goog.provide('persons.core');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});

persons.core.edit_modal = (function (){var G__44075 = (function persons$core$edit_modal(props__28407__auto__,maybe_ref__28408__auto__){
var vec__44076 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__28407__auto__),maybe_ref__28408__auto__], null);
var map__44079 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44076,(0),null);
var map__44079__$1 = cljs.core.__destructure_map(map__44079);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44079__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var set_modal_opened = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44079__$1,new cljs.core.Keyword(null,"set-modal-opened","set-modal-opened",1446536614));

var vec__44080 = helix.hooks.use_state(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"full-name","full-name",408178550),null,new cljs.core.Keyword(null,"sex","sex",-2056008571),null,new cljs.core.Keyword(null,"birth-date","birth-date",-749581010),null,new cljs.core.Keyword(null,"address","address",559499426),null,new cljs.core.Keyword(null,"insurance-policy-number","insurance-policy-number",-1729955203),null], null));
var form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44080,(0),null);
var set_form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44080,(1),null);
var G__44083_44208 = helix.hooks.wrap_fx((function (){
if(cljs.core.truth_(id)){
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic(["http://localhost:8080/persons/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
var G__44085 = cljs.core.first(response);
return (set_form.cljs$core$IFn$_invoke$arity$1 ? set_form.cljs$core$IFn$_invoke$arity$1(G__44085) : set_form.call(null,G__44085));
})], null)], 0));
} else {
return null;
}
}));
var G__44084_44209 = [id];
(helix.hooks.raw_use_effect.cljs$core$IFn$_invoke$arity$2 ? helix.hooks.raw_use_effect.cljs$core$IFn$_invoke$arity$2(G__44083_44208,G__44084_44209) : helix.hooks.raw_use_effect.call(null,G__44083_44208,G__44084_44209));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([form], 0));

return helix.core.get_react().createElement(helix.core.Fragment,null,(cljs.core.truth_(id)?helix.core.get_react().createElement("h2",null,"Edit person ",id):helix.core.get_react().createElement("h2",null,"Create person")),helix.core.get_react().createElement("input",(function (){var obj44087 = ({"type":"text","placeholder":"\u0424\u0418\u041E","value":helix.impl.props.or_undefined(new cljs.core.Keyword(null,"full-name","full-name",408178550).cljs$core$IFn$_invoke$arity$1(form)),"onChange":(function (p1__44069_SHARP_){
var G__44088 = cljs.core.assoc;
var G__44089 = new cljs.core.Keyword(null,"full-name","full-name",408178550);
var G__44090 = p1__44069_SHARP_.target.value;
return (set_form.cljs$core$IFn$_invoke$arity$3 ? set_form.cljs$core$IFn$_invoke$arity$3(G__44088,G__44089,G__44090) : set_form.call(null,G__44088,G__44089,G__44090));
})});
return obj44087;
})()),helix.core.get_react().createElement("select",(function (){var obj44092 = ({"type":"select","placeholder":"\u041F\u043E\u043B","value":helix.impl.props.or_undefined(new cljs.core.Keyword(null,"sex","sex",-2056008571).cljs$core$IFn$_invoke$arity$1(form)),"onChange":(function (p1__44070_SHARP_){
var G__44093 = cljs.core.assoc;
var G__44094 = new cljs.core.Keyword(null,"sex","sex",-2056008571);
var G__44095 = p1__44070_SHARP_.target.value;
return (set_form.cljs$core$IFn$_invoke$arity$3 ? set_form.cljs$core$IFn$_invoke$arity$3(G__44093,G__44094,G__44095) : set_form.call(null,G__44093,G__44094,G__44095));
})});
return obj44092;
})(),helix.core.get_react().createElement("option",null,""),helix.core.get_react().createElement("option",null,"male"),helix.core.get_react().createElement("option",null,"female"),helix.core.get_react().createElement("option",null,"other")),helix.core.get_react().createElement("input",(function (){var obj44097 = ({"type":"date","placeholder":"\u0414\u0430\u0442\u0430 \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F","value":helix.impl.props.or_undefined(new cljs.core.Keyword(null,"birth-date","birth-date",-749581010).cljs$core$IFn$_invoke$arity$1(form)),"onChange":(function (p1__44071_SHARP_){
var G__44098 = cljs.core.assoc;
var G__44099 = new cljs.core.Keyword(null,"birth-date","birth-date",-749581010);
var G__44100 = p1__44071_SHARP_.target.value;
return (set_form.cljs$core$IFn$_invoke$arity$3 ? set_form.cljs$core$IFn$_invoke$arity$3(G__44098,G__44099,G__44100) : set_form.call(null,G__44098,G__44099,G__44100));
})});
return obj44097;
})()),helix.core.get_react().createElement("input",(function (){var obj44102 = ({"type":"text","placeholder":"\u0410\u0434\u0440\u0435\u0441","value":helix.impl.props.or_undefined(new cljs.core.Keyword(null,"address","address",559499426).cljs$core$IFn$_invoke$arity$1(form)),"onChange":(function (p1__44072_SHARP_){
var G__44103 = cljs.core.assoc;
var G__44104 = new cljs.core.Keyword(null,"address","address",559499426);
var G__44105 = p1__44072_SHARP_.target.value;
return (set_form.cljs$core$IFn$_invoke$arity$3 ? set_form.cljs$core$IFn$_invoke$arity$3(G__44103,G__44104,G__44105) : set_form.call(null,G__44103,G__44104,G__44105));
})});
return obj44102;
})()),helix.core.get_react().createElement("input",(function (){var obj44107 = ({"type":"number","placeholder":"\u041D\u043E\u043C\u0435\u0440 \u043F\u043E\u043B\u0438\u0441\u0430 \u041E\u041C\u0421","value":helix.impl.props.or_undefined(new cljs.core.Keyword(null,"insurance-policy-number","insurance-policy-number",-1729955203).cljs$core$IFn$_invoke$arity$1(form)),"onChange":(function (p1__44073_SHARP_){
var G__44108 = cljs.core.assoc;
var G__44109 = new cljs.core.Keyword(null,"insurance-policy-number","insurance-policy-number",-1729955203);
var G__44110 = p1__44073_SHARP_.target.value;
return (set_form.cljs$core$IFn$_invoke$arity$3 ? set_form.cljs$core$IFn$_invoke$arity$3(G__44108,G__44109,G__44110) : set_form.call(null,G__44108,G__44109,G__44110));
})});
return obj44107;
})()),helix.core.get_react().createElement("input",(function (){var obj44112 = ({"type":"button","value":helix.impl.props.or_undefined("Save!"),"onClick":(function (){
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic("http://localhost:8080/persons",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"body","body",-2049205669),form], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([response], 0));
})], null)], 0));
})});
return obj44112;
})()));
});
if(goog.DEBUG === true){
var G__44113 = G__44075;
goog.object.set(G__44113,"displayName","persons.core/edit-modal");

return G__44113;
} else {
return G__44075;
}
})();




persons.core.delete_modal = (function (){var G__44115 = (function persons$core$delete_modal(props__28407__auto__,maybe_ref__28408__auto__){
var vec__44116 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__28407__auto__),maybe_ref__28408__auto__], null);
var map__44119 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44116,(0),null);
var map__44119__$1 = cljs.core.__destructure_map(map__44119);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44119__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var set_modal_opened = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44119__$1,new cljs.core.Keyword(null,"set-modal-opened","set-modal-opened",1446536614));

return helix.core.get_react().createElement(helix.core.Fragment,null,helix.core.get_react().createElement("h2",null,"Are you sure?"),helix.core.get_react().createElement("p",null,"Delete person ",id),helix.core.get_react().createElement("div",(function (){var obj44121 = ({"style":(function (){var obj44123 = ({"display":helix.impl.props.__GT_js("flex"),"justifyContent":helix.impl.props.__GT_js("space-between")});
return obj44123;
})()});
return obj44121;
})(),helix.core.get_react().createElement("input",(function (){var obj44125 = ({"style":(function (){var obj44127 = ({"marginBottom":helix.impl.props.__GT_js((0))});
return obj44127;
})(),"type":"button","value":helix.impl.props.or_undefined("Cancel"),"onClick":(function (){
return (set_modal_opened.cljs$core$IFn$_invoke$arity$1 ? set_modal_opened.cljs$core$IFn$_invoke$arity$1(false) : set_modal_opened.call(null,false));
})});
return obj44125;
})()),helix.core.get_react().createElement("input",(function (){var obj44129 = ({"type":"button","value":helix.impl.props.or_undefined("Delete"),"onClick":(function (){
return ajax.core.DELETE(["http://localhost:8080/persons/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''));
})});
return obj44129;
})())));
});
if(goog.DEBUG === true){
var G__44130 = G__44115;
goog.object.set(G__44130,"displayName","persons.core/delete-modal");

return G__44130;
} else {
return G__44115;
}
})();




persons.core.modal = (function (){var G__44132 = (function persons$core$modal(props__28407__auto__,maybe_ref__28408__auto__){
var vec__44133 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__28407__auto__),maybe_ref__28408__auto__], null);
var map__44136 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44133,(0),null);
var map__44136__$1 = cljs.core.__destructure_map(map__44136);
var person_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44136__$1,new cljs.core.Keyword(null,"person-id","person-id",1251942696));
var modal_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44136__$1,new cljs.core.Keyword(null,"modal-type","modal-type",-141455078));
var set_modal_opened = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44136__$1,new cljs.core.Keyword(null,"set-modal-opened","set-modal-opened",1446536614));

return helix.core.get_react().createElement("div",(function (){var obj44138 = ({"style":(function (){var obj44140 = ({"position":helix.impl.props.__GT_js("fixed"),"overflow":helix.impl.props.__GT_js("hidden"),"left":helix.impl.props.__GT_js("0"),"top":helix.impl.props.__GT_js("0"),"background":helix.impl.props.__GT_js("rgb(0 0 0 / 30%)"),"width":helix.impl.props.__GT_js("100vw"),"height":helix.impl.props.__GT_js("100vh")});
return obj44140;
})()});
return obj44138;
})(),helix.core.get_react().createElement("form",(function (){var obj44142 = ({"style":(function (){var obj44144 = ({"display":helix.impl.props.__GT_js("grid"),"width":helix.impl.props.__GT_js("50%"),"margin":helix.impl.props.__GT_js("200px auto"),"padding":helix.impl.props.__GT_js("2em"),"background":helix.impl.props.__GT_js("#f9f9f9")});
return obj44144;
})()});
return obj44142;
})(),helix.core.get_react().createElement("button",(function (){var obj44146 = ({"onClick":(function (){
return (set_modal_opened.cljs$core$IFn$_invoke$arity$1 ? set_modal_opened.cljs$core$IFn$_invoke$arity$1(false) : set_modal_opened.call(null,false));
})});
return obj44146;
})(),"close"),(function (){var G__44147 = modal_type;
switch (G__44147) {
case "delete":
return helix.core.get_react().createElement(persons.core.delete_modal,(function (){var obj44149 = ({"id":person_id,"set-modal-opened":set_modal_opened});
return obj44149;
})());

break;
case "edit":
return helix.core.get_react().createElement(persons.core.edit_modal,(function (){var obj44151 = ({"id":person_id,"set-modal-opened":set_modal_opened});
return obj44151;
})());

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44147)].join('')));

}
})()));
});
if(goog.DEBUG === true){
var G__44152 = G__44132;
goog.object.set(G__44152,"displayName","persons.core/modal");

return G__44152;
} else {
return G__44132;
}
})();




persons.core.table = (function (){var G__44154 = (function persons$core$table(props__28407__auto__,maybe_ref__28408__auto__){
var vec__44155 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__28407__auto__),maybe_ref__28408__auto__], null);
var map__44158 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44155,(0),null);
var map__44158__$1 = cljs.core.__destructure_map(map__44158);
var persons__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44158__$1,new cljs.core.Keyword(null,"persons","persons",724593810));
var set_modal_opened = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44158__$1,new cljs.core.Keyword(null,"set-modal-opened","set-modal-opened",1446536614));
var set_modal_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44158__$1,new cljs.core.Keyword(null,"set-modal-type","set-modal-type",-1364836127));
var set_person_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44158__$1,new cljs.core.Keyword(null,"set-person-id","set-person-id",445276146));

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(persons__$1),(0))){
return helix.core.get_react().createElement("table",null,helix.core.get_react().createElement("thead",null,helix.core.get_react().createElement("tr",null,helix.core.get_react().createElement("th",null,"id"),helix.core.get_react().createElement("th",null,"\u0424\u0418\u041E"),helix.core.get_react().createElement("th",null,"\u041F\u043E\u043B"),helix.core.get_react().createElement("th",null,"\u0414\u0430\u0442\u0430 \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F"),helix.core.get_react().createElement("th",null,"\u0410\u0434\u0440\u0435\u0441"),helix.core.get_react().createElement("th",null,"\u041D\u043E\u043C\u0435\u0440 \u043F\u043E\u043B\u0438\u0441\u0430 \u041E\u041C\u0421"))),helix.core.get_react().createElement("tbody",null,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,p__44159){
var map__44160 = p__44159;
var map__44160__$1 = cljs.core.__destructure_map(map__44160);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44160__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var full_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44160__$1,new cljs.core.Keyword(null,"full_name","full_name",1257415930));
var sex = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44160__$1,new cljs.core.Keyword(null,"sex","sex",-2056008571));
var birth_date = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44160__$1,new cljs.core.Keyword(null,"birth-date","birth-date",-749581010));
var address = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44160__$1,new cljs.core.Keyword(null,"address","address",559499426));
var insurance_policy_number = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44160__$1,new cljs.core.Keyword(null,"insurance-policy-number","insurance-policy-number",-1729955203));
return helix.core.get_react().createElement("tr",(function (){var obj44162 = ({"key":i});
return obj44162;
})(),helix.core.get_react().createElement("td",null,id),helix.core.get_react().createElement("td",null,full_name),helix.core.get_react().createElement("td",null,sex),helix.core.get_react().createElement("td",null,birth_date),helix.core.get_react().createElement("td",null,address),helix.core.get_react().createElement("td",null,insurance_policy_number),helix.core.get_react().createElement("td",null,helix.core.get_react().createElement("button",(function (){var obj44164 = ({"onClick":(function (){
var G__44166 = (set_modal_type.cljs$core$IFn$_invoke$arity$1 ? set_modal_type.cljs$core$IFn$_invoke$arity$1("edit") : set_modal_type.call(null,"edit"));
var G__44167 = (set_modal_opened.cljs$core$IFn$_invoke$arity$1 ? set_modal_opened.cljs$core$IFn$_invoke$arity$1(true) : set_modal_opened.call(null,true));
var fexpr__44165 = (set_person_id.cljs$core$IFn$_invoke$arity$1 ? set_person_id.cljs$core$IFn$_invoke$arity$1(id) : set_person_id.call(null,id));
return (fexpr__44165.cljs$core$IFn$_invoke$arity$2 ? fexpr__44165.cljs$core$IFn$_invoke$arity$2(G__44166,G__44167) : fexpr__44165.call(null,G__44166,G__44167));
})});
return obj44164;
})(),"Edit")),helix.core.get_react().createElement("td",null,helix.core.get_react().createElement("button",(function (){var obj44169 = ({"onClick":(function (){
var G__44171 = (set_modal_type.cljs$core$IFn$_invoke$arity$1 ? set_modal_type.cljs$core$IFn$_invoke$arity$1("delete") : set_modal_type.call(null,"delete"));
var G__44172 = (set_modal_opened.cljs$core$IFn$_invoke$arity$1 ? set_modal_opened.cljs$core$IFn$_invoke$arity$1(true) : set_modal_opened.call(null,true));
var fexpr__44170 = (set_person_id.cljs$core$IFn$_invoke$arity$1 ? set_person_id.cljs$core$IFn$_invoke$arity$1(id) : set_person_id.call(null,id));
return (fexpr__44170.cljs$core$IFn$_invoke$arity$2 ? fexpr__44170.cljs$core$IFn$_invoke$arity$2(G__44171,G__44172) : fexpr__44170.call(null,G__44171,G__44172));
})});
return obj44169;
})(),"Delete")));
}),persons__$1)));
} else {
return helix.core.get_react().createElement("h2",null,"List is empty");
}
});
if(goog.DEBUG === true){
var G__44173 = G__44154;
goog.object.set(G__44173,"displayName","persons.core/table");

return G__44173;
} else {
return G__44154;
}
})();




persons.core.app = (function (){var G__44175 = (function persons$core$app(props__28407__auto__,maybe_ref__28408__auto__){
var vec__44176 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__28407__auto__),maybe_ref__28408__auto__], null);

var vec__44179 = helix.hooks.use_state(null);
var persons__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44179,(0),null);
var set_persons = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44179,(1),null);
var vec__44182 = helix.hooks.use_state(null);
var person_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44182,(0),null);
var set_person_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44182,(1),null);
var vec__44185 = helix.hooks.use_state(null);
var modal_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44185,(0),null);
var set_modal_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44185,(1),null);
var vec__44188 = helix.hooks.use_state(false);
var is_modal_opened_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44188,(0),null);
var set_modal_opened = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44188,(1),null);
var vec__44191 = helix.hooks.use_state(true);
var is_loading_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44191,(0),null);
var set_loaded = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44191,(1),null);
var G__44194_44211 = helix.hooks.wrap_fx((function (){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([modal_type], 0));
}));
var G__44195_44212 = [is_modal_opened_QMARK_];
(helix.hooks.raw_use_effect.cljs$core$IFn$_invoke$arity$2 ? helix.hooks.raw_use_effect.cljs$core$IFn$_invoke$arity$2(G__44194_44211,G__44195_44212) : helix.hooks.raw_use_effect.call(null,G__44194_44211,G__44195_44212));

var G__44196_44213 = helix.hooks.wrap_fx((function (){
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic("http://localhost:8080/persons",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
(set_loaded.cljs$core$IFn$_invoke$arity$1 ? set_loaded.cljs$core$IFn$_invoke$arity$1(false) : set_loaded.call(null,false));

return (set_persons.cljs$core$IFn$_invoke$arity$1 ? set_persons.cljs$core$IFn$_invoke$arity$1(response) : set_persons.call(null,response));
})], null)], 0));
}));
var G__44197_44214 = [];
(helix.hooks.raw_use_effect.cljs$core$IFn$_invoke$arity$2 ? helix.hooks.raw_use_effect.cljs$core$IFn$_invoke$arity$2(G__44196_44213,G__44197_44214) : helix.hooks.raw_use_effect.call(null,G__44196_44213,G__44197_44214));

return helix.core.get_react().createElement("div",null,helix.core.get_react().createElement("h1",null,"Persons"),helix.core.get_react().createElement("button",(function (){var obj44199 = ({"onClick":(function (){
var G__44201 = (set_modal_type.cljs$core$IFn$_invoke$arity$1 ? set_modal_type.cljs$core$IFn$_invoke$arity$1("edit") : set_modal_type.call(null,"edit"));
var G__44202 = (set_modal_opened.cljs$core$IFn$_invoke$arity$1 ? set_modal_opened.cljs$core$IFn$_invoke$arity$1(true) : set_modal_opened.call(null,true));
var fexpr__44200 = (set_person_id.cljs$core$IFn$_invoke$arity$1 ? set_person_id.cljs$core$IFn$_invoke$arity$1(null) : set_person_id.call(null,null));
return (fexpr__44200.cljs$core$IFn$_invoke$arity$2 ? fexpr__44200.cljs$core$IFn$_invoke$arity$2(G__44201,G__44202) : fexpr__44200.call(null,G__44201,G__44202));
})});
return obj44199;
})(),"Add new person"),(cljs.core.truth_(is_loading_QMARK_)?helix.core.get_react().createElement("h2",null,"Loading..."):helix.core.get_react().createElement(persons.core.table,(function (){var obj44204 = ({"persons":persons__$1,"set-person-id":set_person_id,"set-modal-type":set_modal_type,"set-modal-opened":set_modal_opened});
return obj44204;
})())),((is_modal_opened_QMARK_ === true)?helix.core.get_react().createElement(persons.core.modal,(function (){var obj44206 = ({"person-id":person_id,"modal-type":modal_type,"set-modal-opened":set_modal_opened});
return obj44206;
})()):null));
});
if(goog.DEBUG === true){
var G__44207 = G__44175;
goog.object.set(G__44207,"displayName","persons.core/app");

return G__44207;
} else {
return G__44175;
}
})();



persons.core.init = (function persons$core$init(){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["start"], 0));

return module$node_modules$react_dom$index.render(helix.core.get_react().createElement(persons.core.app,null),document.getElementById("app"));
});
goog.exportSymbol('persons.core.init', persons.core.init);

//# sourceMappingURL=persons.core.js.map
