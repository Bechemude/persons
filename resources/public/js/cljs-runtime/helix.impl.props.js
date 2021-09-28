goog.provide('helix.impl.props');
helix.impl.props.aria_data_css_custom_prop_special_case_re = /^(aria-|data-|--).*/;
helix.impl.props.camel_regexp = RegExp("-(\\w)","g");
/**
 * Returns camel case version of the string, e.g. "http-equiv" becomes "httpEquiv".
 */
helix.impl.props.camel_case = (function helix$impl$props$camel_case(s){
if((((s instanceof cljs.core.Keyword)) || (((typeof s === 'string') || ((s instanceof cljs.core.Symbol)))))){
var name_str = cljs.core.name(s);
if((!((name_str.match(helix.impl.props.aria_data_css_custom_prop_special_case_re) == null)))){
return name_str;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name_str.substring((0),(1)),"'")){
return name_str.substring((1));
} else {
return name_str.replace(helix.impl.props.camel_regexp,(function (p1__27048_SHARP_,p2__27047_SHARP_){
return p2__27047_SHARP_.toUpperCase();
}));

}
}
} else {
return s;
}
});
helix.impl.props.kw__GT_str = (function helix$impl$props$kw__GT_str(kw){
var kw_ns = cljs.core.namespace(kw);
var kw_name = cljs.core.name(kw);
if((kw_ns == null)){
return kw_name;
} else {
return [kw_ns,"/",kw_name].join('');
}
});
helix.impl.props.set_obj = (function helix$impl$props$set_obj(o,k,v){
var G__27049 = o;
goog.object.set(G__27049,k,v);

return G__27049;
});
helix.impl.props.__GT_js = (function helix$impl$props$__GT_js(x){
return cljs.core.clj__GT_js.cljs$core$IFn$_invoke$arity$variadic(x,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keyword-fn","keyword-fn",-64566675),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(helix.impl.props.camel_case,cljs.core.name)], 0));
});
helix.impl.props.primitive_obj = (function helix$impl$props$primitive_obj(var_args){
var G__27051 = arguments.length;
switch (G__27051) {
case 0:
return helix.impl.props.primitive_obj.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return helix.impl.props.primitive_obj.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return helix.impl.props.primitive_obj.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(helix.impl.props.primitive_obj.cljs$core$IFn$_invoke$arity$0 = (function (){
return ({});
}));

(helix.impl.props.primitive_obj.cljs$core$IFn$_invoke$arity$1 = (function (m){
return helix.impl.props.primitive_obj.cljs$core$IFn$_invoke$arity$2(m,helix.impl.props.primitive_obj.cljs$core$IFn$_invoke$arity$0());
}));

(helix.impl.props.primitive_obj.cljs$core$IFn$_invoke$arity$2 = (function (m,o){
while(true){
if(cljs.core.seq(m)){
var G__27071 = cljs.core.rest(m);
var G__27072 = (function (){var entry = cljs.core.first(m);
return helix.impl.props.set_obj(o,helix.impl.props.camel_case(helix.impl.props.kw__GT_str(cljs.core.key(entry))),helix.impl.props.__GT_js(cljs.core.val(entry)));
})();
m = G__27071;
o = G__27072;
continue;
} else {
return o;
}
break;
}
}));

(helix.impl.props.primitive_obj.cljs$lang$maxFixedArity = 2);

helix.impl.props.into_js_array = (function helix$impl$props$into_js_array(aseq){
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(aseq);
});
helix.impl.props.merge_obj = (function helix$impl$props$merge_obj(o1,o2){
if((o2 == null)){
return o1;
} else {
var G__27053 = o1;
goog.object.extend(G__27053,o2);

return G__27053;
}
});
helix.impl.props.seq_to_class = (function helix$impl$props$seq_to_class(class$){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,class$)));
});
helix.impl.props.normalize_class = (function helix$impl$props$normalize_class(class$){
if(typeof class$ === 'string'){
return class$;
} else {
if(cljs.core.sequential_QMARK_(class$)){
return helix.impl.props.seq_to_class(class$);
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$);

}
}
});
helix.impl.props.or_undefined = (function helix$impl$props$or_undefined(v){
if((v == null)){
return undefined;
} else {
return v;
}
});
helix.impl.props.dom_style = (function helix$impl$props$dom_style(style){
if(cljs.core.map_QMARK_(style)){
return helix.impl.props.primitive_obj.cljs$core$IFn$_invoke$arity$1(style);
} else {
if(cljs.core.vector_QMARK_(style)){
return helix.impl.props.into_js_array(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__27055_SHARP_){
if(cljs.core.map_QMARK_(p1__27055_SHARP_)){
return helix.impl.props.primitive_obj.cljs$core$IFn$_invoke$arity$1(p1__27055_SHARP_);
} else {
return p1__27055_SHARP_;
}
}),style));
} else {
return style;

}
}
});
helix.impl.props._dom_props = (function helix$impl$props$_dom_props(var_args){
var G__27059 = arguments.length;
switch (G__27059) {
case 1:
return helix.impl.props._dom_props.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return helix.impl.props._dom_props.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(helix.impl.props._dom_props.cljs$core$IFn$_invoke$arity$1 = (function (m){
if(cljs.core.map_QMARK_(m)){
return helix.impl.props._dom_props.cljs$core$IFn$_invoke$arity$2(m,helix.impl.props.primitive_obj.cljs$core$IFn$_invoke$arity$0());
} else {
return m;
}
}));

(helix.impl.props._dom_props.cljs$core$IFn$_invoke$arity$2 = (function (m,o){
while(true){
if(cljs.core.seq(m)){
var G__27087 = cljs.core.rest(m);
var G__27088 = (function (){var entry = cljs.core.first(m);
var k = cljs.core.key(entry);
var v = cljs.core.val(entry);
var G__27060 = k;
var G__27060__$1 = (((G__27060 instanceof cljs.core.Keyword))?G__27060.fqn:null);
switch (G__27060__$1) {
case "class":
return helix.impl.props.set_obj(o,"className",helix.impl.props.normalize_class(v));

break;
case "for":
return helix.impl.props.set_obj(o,"htmlFor",v);

break;
case "style":
return helix.impl.props.set_obj(o,"style",helix.impl.props.dom_style(v));

break;
case "value":
return helix.impl.props.set_obj(o,"value",helix.impl.props.or_undefined(v));

break;
default:
return helix.impl.props.set_obj(o,helix.impl.props.camel_case(helix.impl.props.kw__GT_str(k)),v);

}
})();
m = G__27087;
o = G__27088;
continue;
} else {
return o;
}
break;
}
}));

(helix.impl.props._dom_props.cljs$lang$maxFixedArity = 2);

helix.impl.props._props = (function helix$impl$props$_props(var_args){
var G__27064 = arguments.length;
switch (G__27064) {
case 1:
return helix.impl.props._props.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return helix.impl.props._props.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(helix.impl.props._props.cljs$core$IFn$_invoke$arity$1 = (function (m){
if(cljs.core.map_QMARK_(m)){
return helix.impl.props._props.cljs$core$IFn$_invoke$arity$2(m,helix.impl.props.primitive_obj.cljs$core$IFn$_invoke$arity$0());
} else {
return m;
}
}));

(helix.impl.props._props.cljs$core$IFn$_invoke$arity$2 = (function (m,o){
while(true){
if(cljs.core.seq(m)){
var G__27098 = cljs.core.rest(m);
var G__27099 = (function (){var entry = cljs.core.first(m);
return helix.impl.props.set_obj(o,helix.impl.props.kw__GT_str(cljs.core.key(entry)),cljs.core.val(entry));
})();
m = G__27098;
o = G__27099;
continue;
} else {
return o;
}
break;
}
}));

(helix.impl.props._props.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=helix.impl.props.js.map