goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4824__auto__ = [];
var len__4818__auto___36232 = arguments.length;
var i__4819__auto___36233 = (0);
while(true){
if((i__4819__auto___36233 < len__4818__auto___36232)){
args__4824__auto__.push((arguments[i__4819__auto___36233]));

var G__36234 = (i__4819__auto___36233 + (1));
i__4819__auto___36233 = G__36234;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq36101){
var G__36102 = cljs.core.first(seq36101);
var seq36101__$1 = cljs.core.next(seq36101);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36102,seq36101__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__36105 = cljs.core.seq(sources);
var chunk__36106 = null;
var count__36107 = (0);
var i__36108 = (0);
while(true){
if((i__36108 < count__36107)){
var map__36116 = chunk__36106.cljs$core$IIndexed$_nth$arity$2(null,i__36108);
var map__36116__$1 = cljs.core.__destructure_map(map__36116);
var src = map__36116__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36116__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36116__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36116__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36116__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e36118){var e_36235 = e36118;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_36235);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_36235.message)].join('')));
}

var G__36236 = seq__36105;
var G__36237 = chunk__36106;
var G__36238 = count__36107;
var G__36239 = (i__36108 + (1));
seq__36105 = G__36236;
chunk__36106 = G__36237;
count__36107 = G__36238;
i__36108 = G__36239;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__36105);
if(temp__5753__auto__){
var seq__36105__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36105__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__36105__$1);
var G__36240 = cljs.core.chunk_rest(seq__36105__$1);
var G__36241 = c__4638__auto__;
var G__36242 = cljs.core.count(c__4638__auto__);
var G__36243 = (0);
seq__36105 = G__36240;
chunk__36106 = G__36241;
count__36107 = G__36242;
i__36108 = G__36243;
continue;
} else {
var map__36120 = cljs.core.first(seq__36105__$1);
var map__36120__$1 = cljs.core.__destructure_map(map__36120);
var src = map__36120__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36120__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36120__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36120__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36120__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e36121){var e_36244 = e36121;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_36244);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_36244.message)].join('')));
}

var G__36245 = cljs.core.next(seq__36105__$1);
var G__36246 = null;
var G__36247 = (0);
var G__36248 = (0);
seq__36105 = G__36245;
chunk__36106 = G__36246;
count__36107 = G__36247;
i__36108 = G__36248;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__36122 = cljs.core.seq(js_requires);
var chunk__36123 = null;
var count__36124 = (0);
var i__36125 = (0);
while(true){
if((i__36125 < count__36124)){
var js_ns = chunk__36123.cljs$core$IIndexed$_nth$arity$2(null,i__36125);
var require_str_36249 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_36249);


var G__36250 = seq__36122;
var G__36251 = chunk__36123;
var G__36252 = count__36124;
var G__36253 = (i__36125 + (1));
seq__36122 = G__36250;
chunk__36123 = G__36251;
count__36124 = G__36252;
i__36125 = G__36253;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__36122);
if(temp__5753__auto__){
var seq__36122__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36122__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__36122__$1);
var G__36254 = cljs.core.chunk_rest(seq__36122__$1);
var G__36255 = c__4638__auto__;
var G__36256 = cljs.core.count(c__4638__auto__);
var G__36257 = (0);
seq__36122 = G__36254;
chunk__36123 = G__36255;
count__36124 = G__36256;
i__36125 = G__36257;
continue;
} else {
var js_ns = cljs.core.first(seq__36122__$1);
var require_str_36258 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_36258);


var G__36259 = cljs.core.next(seq__36122__$1);
var G__36260 = null;
var G__36261 = (0);
var G__36262 = (0);
seq__36122 = G__36259;
chunk__36123 = G__36260;
count__36124 = G__36261;
i__36125 = G__36262;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__36128){
var map__36129 = p__36128;
var map__36129__$1 = cljs.core.__destructure_map(map__36129);
var msg = map__36129__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36129__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36129__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4611__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36131(s__36132){
return (new cljs.core.LazySeq(null,(function (){
var s__36132__$1 = s__36132;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__36132__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var map__36137 = cljs.core.first(xs__6308__auto__);
var map__36137__$1 = cljs.core.__destructure_map(map__36137);
var src = map__36137__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36137__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36137__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4607__auto__ = ((function (s__36132__$1,map__36137,map__36137__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__36129,map__36129__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36131_$_iter__36133(s__36134){
return (new cljs.core.LazySeq(null,((function (s__36132__$1,map__36137,map__36137__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__36129,map__36129__$1,msg,info,reload_info){
return (function (){
var s__36134__$1 = s__36134;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__36134__$1);
if(temp__5753__auto____$1){
var s__36134__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__36134__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__36134__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__36136 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__36135 = (0);
while(true){
if((i__36135 < size__4610__auto__)){
var warning = cljs.core._nth(c__4609__auto__,i__36135);
cljs.core.chunk_append(b__36136,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__36263 = (i__36135 + (1));
i__36135 = G__36263;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36136),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36131_$_iter__36133(cljs.core.chunk_rest(s__36134__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36136),null);
}
} else {
var warning = cljs.core.first(s__36134__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36131_$_iter__36133(cljs.core.rest(s__36134__$2)));
}
} else {
return null;
}
break;
}
});})(s__36132__$1,map__36137,map__36137__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__36129,map__36129__$1,msg,info,reload_info))
,null,null));
});})(s__36132__$1,map__36137,map__36137__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__36129,map__36129__$1,msg,info,reload_info))
;
var fs__4608__auto__ = cljs.core.seq(iterys__4607__auto__(warnings));
if(fs__4608__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4608__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36131(cljs.core.rest(s__36132__$1)));
} else {
var G__36264 = cljs.core.rest(s__36132__$1);
s__36132__$1 = G__36264;
continue;
}
} else {
var G__36265 = cljs.core.rest(s__36132__$1);
s__36132__$1 = G__36265;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__36138_36266 = cljs.core.seq(warnings);
var chunk__36139_36267 = null;
var count__36140_36268 = (0);
var i__36141_36269 = (0);
while(true){
if((i__36141_36269 < count__36140_36268)){
var map__36144_36270 = chunk__36139_36267.cljs$core$IIndexed$_nth$arity$2(null,i__36141_36269);
var map__36144_36271__$1 = cljs.core.__destructure_map(map__36144_36270);
var w_36272 = map__36144_36271__$1;
var msg_36273__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36144_36271__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_36274 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36144_36271__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_36275 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36144_36271__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_36276 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36144_36271__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_36276)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_36274),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_36275),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_36273__$1)].join(''));


var G__36277 = seq__36138_36266;
var G__36278 = chunk__36139_36267;
var G__36279 = count__36140_36268;
var G__36280 = (i__36141_36269 + (1));
seq__36138_36266 = G__36277;
chunk__36139_36267 = G__36278;
count__36140_36268 = G__36279;
i__36141_36269 = G__36280;
continue;
} else {
var temp__5753__auto___36281 = cljs.core.seq(seq__36138_36266);
if(temp__5753__auto___36281){
var seq__36138_36282__$1 = temp__5753__auto___36281;
if(cljs.core.chunked_seq_QMARK_(seq__36138_36282__$1)){
var c__4638__auto___36283 = cljs.core.chunk_first(seq__36138_36282__$1);
var G__36284 = cljs.core.chunk_rest(seq__36138_36282__$1);
var G__36285 = c__4638__auto___36283;
var G__36286 = cljs.core.count(c__4638__auto___36283);
var G__36287 = (0);
seq__36138_36266 = G__36284;
chunk__36139_36267 = G__36285;
count__36140_36268 = G__36286;
i__36141_36269 = G__36287;
continue;
} else {
var map__36145_36288 = cljs.core.first(seq__36138_36282__$1);
var map__36145_36289__$1 = cljs.core.__destructure_map(map__36145_36288);
var w_36290 = map__36145_36289__$1;
var msg_36291__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36145_36289__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_36292 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36145_36289__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_36293 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36145_36289__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_36294 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36145_36289__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_36294)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_36292),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_36293),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_36291__$1)].join(''));


var G__36295 = cljs.core.next(seq__36138_36282__$1);
var G__36296 = null;
var G__36297 = (0);
var G__36298 = (0);
seq__36138_36266 = G__36295;
chunk__36139_36267 = G__36296;
count__36140_36268 = G__36297;
i__36141_36269 = G__36298;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__36126_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__36126_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4210__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4210__auto__){
var and__4210__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4210__auto____$1){
return new$;
} else {
return and__4210__auto____$1;
}
} else {
return and__4210__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__36146){
var map__36147 = p__36146;
var map__36147__$1 = cljs.core.__destructure_map(map__36147);
var msg = map__36147__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36147__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__36148 = cljs.core.seq(updates);
var chunk__36150 = null;
var count__36151 = (0);
var i__36152 = (0);
while(true){
if((i__36152 < count__36151)){
var path = chunk__36150.cljs$core$IIndexed$_nth$arity$2(null,i__36152);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__36182_36299 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__36186_36300 = null;
var count__36187_36301 = (0);
var i__36188_36302 = (0);
while(true){
if((i__36188_36302 < count__36187_36301)){
var node_36303 = chunk__36186_36300.cljs$core$IIndexed$_nth$arity$2(null,i__36188_36302);
if(cljs.core.not(node_36303.shadow$old)){
var path_match_36304 = shadow.cljs.devtools.client.browser.match_paths(node_36303.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36304)){
var new_link_36305 = (function (){var G__36194 = node_36303.cloneNode(true);
G__36194.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36304),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36194;
})();
(node_36303.shadow$old = true);

(new_link_36305.onload = ((function (seq__36182_36299,chunk__36186_36300,count__36187_36301,i__36188_36302,seq__36148,chunk__36150,count__36151,i__36152,new_link_36305,path_match_36304,node_36303,path,map__36147,map__36147__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_36303);
});})(seq__36182_36299,chunk__36186_36300,count__36187_36301,i__36188_36302,seq__36148,chunk__36150,count__36151,i__36152,new_link_36305,path_match_36304,node_36303,path,map__36147,map__36147__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36304], 0));

goog.dom.insertSiblingAfter(new_link_36305,node_36303);


var G__36306 = seq__36182_36299;
var G__36307 = chunk__36186_36300;
var G__36308 = count__36187_36301;
var G__36309 = (i__36188_36302 + (1));
seq__36182_36299 = G__36306;
chunk__36186_36300 = G__36307;
count__36187_36301 = G__36308;
i__36188_36302 = G__36309;
continue;
} else {
var G__36310 = seq__36182_36299;
var G__36311 = chunk__36186_36300;
var G__36312 = count__36187_36301;
var G__36313 = (i__36188_36302 + (1));
seq__36182_36299 = G__36310;
chunk__36186_36300 = G__36311;
count__36187_36301 = G__36312;
i__36188_36302 = G__36313;
continue;
}
} else {
var G__36314 = seq__36182_36299;
var G__36315 = chunk__36186_36300;
var G__36316 = count__36187_36301;
var G__36317 = (i__36188_36302 + (1));
seq__36182_36299 = G__36314;
chunk__36186_36300 = G__36315;
count__36187_36301 = G__36316;
i__36188_36302 = G__36317;
continue;
}
} else {
var temp__5753__auto___36318 = cljs.core.seq(seq__36182_36299);
if(temp__5753__auto___36318){
var seq__36182_36319__$1 = temp__5753__auto___36318;
if(cljs.core.chunked_seq_QMARK_(seq__36182_36319__$1)){
var c__4638__auto___36320 = cljs.core.chunk_first(seq__36182_36319__$1);
var G__36321 = cljs.core.chunk_rest(seq__36182_36319__$1);
var G__36322 = c__4638__auto___36320;
var G__36323 = cljs.core.count(c__4638__auto___36320);
var G__36324 = (0);
seq__36182_36299 = G__36321;
chunk__36186_36300 = G__36322;
count__36187_36301 = G__36323;
i__36188_36302 = G__36324;
continue;
} else {
var node_36325 = cljs.core.first(seq__36182_36319__$1);
if(cljs.core.not(node_36325.shadow$old)){
var path_match_36326 = shadow.cljs.devtools.client.browser.match_paths(node_36325.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36326)){
var new_link_36327 = (function (){var G__36195 = node_36325.cloneNode(true);
G__36195.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36326),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36195;
})();
(node_36325.shadow$old = true);

(new_link_36327.onload = ((function (seq__36182_36299,chunk__36186_36300,count__36187_36301,i__36188_36302,seq__36148,chunk__36150,count__36151,i__36152,new_link_36327,path_match_36326,node_36325,seq__36182_36319__$1,temp__5753__auto___36318,path,map__36147,map__36147__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_36325);
});})(seq__36182_36299,chunk__36186_36300,count__36187_36301,i__36188_36302,seq__36148,chunk__36150,count__36151,i__36152,new_link_36327,path_match_36326,node_36325,seq__36182_36319__$1,temp__5753__auto___36318,path,map__36147,map__36147__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36326], 0));

goog.dom.insertSiblingAfter(new_link_36327,node_36325);


var G__36328 = cljs.core.next(seq__36182_36319__$1);
var G__36329 = null;
var G__36330 = (0);
var G__36331 = (0);
seq__36182_36299 = G__36328;
chunk__36186_36300 = G__36329;
count__36187_36301 = G__36330;
i__36188_36302 = G__36331;
continue;
} else {
var G__36332 = cljs.core.next(seq__36182_36319__$1);
var G__36333 = null;
var G__36334 = (0);
var G__36335 = (0);
seq__36182_36299 = G__36332;
chunk__36186_36300 = G__36333;
count__36187_36301 = G__36334;
i__36188_36302 = G__36335;
continue;
}
} else {
var G__36336 = cljs.core.next(seq__36182_36319__$1);
var G__36337 = null;
var G__36338 = (0);
var G__36339 = (0);
seq__36182_36299 = G__36336;
chunk__36186_36300 = G__36337;
count__36187_36301 = G__36338;
i__36188_36302 = G__36339;
continue;
}
}
} else {
}
}
break;
}


var G__36340 = seq__36148;
var G__36341 = chunk__36150;
var G__36342 = count__36151;
var G__36343 = (i__36152 + (1));
seq__36148 = G__36340;
chunk__36150 = G__36341;
count__36151 = G__36342;
i__36152 = G__36343;
continue;
} else {
var G__36344 = seq__36148;
var G__36345 = chunk__36150;
var G__36346 = count__36151;
var G__36347 = (i__36152 + (1));
seq__36148 = G__36344;
chunk__36150 = G__36345;
count__36151 = G__36346;
i__36152 = G__36347;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__36148);
if(temp__5753__auto__){
var seq__36148__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36148__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__36148__$1);
var G__36348 = cljs.core.chunk_rest(seq__36148__$1);
var G__36349 = c__4638__auto__;
var G__36350 = cljs.core.count(c__4638__auto__);
var G__36351 = (0);
seq__36148 = G__36348;
chunk__36150 = G__36349;
count__36151 = G__36350;
i__36152 = G__36351;
continue;
} else {
var path = cljs.core.first(seq__36148__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__36196_36352 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__36200_36353 = null;
var count__36201_36354 = (0);
var i__36202_36355 = (0);
while(true){
if((i__36202_36355 < count__36201_36354)){
var node_36356 = chunk__36200_36353.cljs$core$IIndexed$_nth$arity$2(null,i__36202_36355);
if(cljs.core.not(node_36356.shadow$old)){
var path_match_36357 = shadow.cljs.devtools.client.browser.match_paths(node_36356.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36357)){
var new_link_36358 = (function (){var G__36208 = node_36356.cloneNode(true);
G__36208.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36357),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36208;
})();
(node_36356.shadow$old = true);

(new_link_36358.onload = ((function (seq__36196_36352,chunk__36200_36353,count__36201_36354,i__36202_36355,seq__36148,chunk__36150,count__36151,i__36152,new_link_36358,path_match_36357,node_36356,path,seq__36148__$1,temp__5753__auto__,map__36147,map__36147__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_36356);
});})(seq__36196_36352,chunk__36200_36353,count__36201_36354,i__36202_36355,seq__36148,chunk__36150,count__36151,i__36152,new_link_36358,path_match_36357,node_36356,path,seq__36148__$1,temp__5753__auto__,map__36147,map__36147__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36357], 0));

goog.dom.insertSiblingAfter(new_link_36358,node_36356);


var G__36359 = seq__36196_36352;
var G__36360 = chunk__36200_36353;
var G__36361 = count__36201_36354;
var G__36362 = (i__36202_36355 + (1));
seq__36196_36352 = G__36359;
chunk__36200_36353 = G__36360;
count__36201_36354 = G__36361;
i__36202_36355 = G__36362;
continue;
} else {
var G__36363 = seq__36196_36352;
var G__36364 = chunk__36200_36353;
var G__36365 = count__36201_36354;
var G__36366 = (i__36202_36355 + (1));
seq__36196_36352 = G__36363;
chunk__36200_36353 = G__36364;
count__36201_36354 = G__36365;
i__36202_36355 = G__36366;
continue;
}
} else {
var G__36367 = seq__36196_36352;
var G__36368 = chunk__36200_36353;
var G__36369 = count__36201_36354;
var G__36370 = (i__36202_36355 + (1));
seq__36196_36352 = G__36367;
chunk__36200_36353 = G__36368;
count__36201_36354 = G__36369;
i__36202_36355 = G__36370;
continue;
}
} else {
var temp__5753__auto___36371__$1 = cljs.core.seq(seq__36196_36352);
if(temp__5753__auto___36371__$1){
var seq__36196_36372__$1 = temp__5753__auto___36371__$1;
if(cljs.core.chunked_seq_QMARK_(seq__36196_36372__$1)){
var c__4638__auto___36373 = cljs.core.chunk_first(seq__36196_36372__$1);
var G__36374 = cljs.core.chunk_rest(seq__36196_36372__$1);
var G__36375 = c__4638__auto___36373;
var G__36376 = cljs.core.count(c__4638__auto___36373);
var G__36377 = (0);
seq__36196_36352 = G__36374;
chunk__36200_36353 = G__36375;
count__36201_36354 = G__36376;
i__36202_36355 = G__36377;
continue;
} else {
var node_36378 = cljs.core.first(seq__36196_36372__$1);
if(cljs.core.not(node_36378.shadow$old)){
var path_match_36379 = shadow.cljs.devtools.client.browser.match_paths(node_36378.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36379)){
var new_link_36380 = (function (){var G__36209 = node_36378.cloneNode(true);
G__36209.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36379),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36209;
})();
(node_36378.shadow$old = true);

(new_link_36380.onload = ((function (seq__36196_36352,chunk__36200_36353,count__36201_36354,i__36202_36355,seq__36148,chunk__36150,count__36151,i__36152,new_link_36380,path_match_36379,node_36378,seq__36196_36372__$1,temp__5753__auto___36371__$1,path,seq__36148__$1,temp__5753__auto__,map__36147,map__36147__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_36378);
});})(seq__36196_36352,chunk__36200_36353,count__36201_36354,i__36202_36355,seq__36148,chunk__36150,count__36151,i__36152,new_link_36380,path_match_36379,node_36378,seq__36196_36372__$1,temp__5753__auto___36371__$1,path,seq__36148__$1,temp__5753__auto__,map__36147,map__36147__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36379], 0));

goog.dom.insertSiblingAfter(new_link_36380,node_36378);


var G__36381 = cljs.core.next(seq__36196_36372__$1);
var G__36382 = null;
var G__36383 = (0);
var G__36384 = (0);
seq__36196_36352 = G__36381;
chunk__36200_36353 = G__36382;
count__36201_36354 = G__36383;
i__36202_36355 = G__36384;
continue;
} else {
var G__36385 = cljs.core.next(seq__36196_36372__$1);
var G__36386 = null;
var G__36387 = (0);
var G__36388 = (0);
seq__36196_36352 = G__36385;
chunk__36200_36353 = G__36386;
count__36201_36354 = G__36387;
i__36202_36355 = G__36388;
continue;
}
} else {
var G__36389 = cljs.core.next(seq__36196_36372__$1);
var G__36390 = null;
var G__36391 = (0);
var G__36392 = (0);
seq__36196_36352 = G__36389;
chunk__36200_36353 = G__36390;
count__36201_36354 = G__36391;
i__36202_36355 = G__36392;
continue;
}
}
} else {
}
}
break;
}


var G__36393 = cljs.core.next(seq__36148__$1);
var G__36394 = null;
var G__36395 = (0);
var G__36396 = (0);
seq__36148 = G__36393;
chunk__36150 = G__36394;
count__36151 = G__36395;
i__36152 = G__36396;
continue;
} else {
var G__36397 = cljs.core.next(seq__36148__$1);
var G__36398 = null;
var G__36399 = (0);
var G__36400 = (0);
seq__36148 = G__36397;
chunk__36150 = G__36398;
count__36151 = G__36399;
i__36152 = G__36400;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__36210){
var map__36211 = p__36210;
var map__36211__$1 = cljs.core.__destructure_map(map__36211);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36211__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__36212){
var map__36213 = p__36212;
var map__36213__$1 = cljs.core.__destructure_map(map__36213);
var _ = map__36213__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36213__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__36214,done,error){
var map__36215 = p__36214;
var map__36215__$1 = cljs.core.__destructure_map(map__36215);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36215__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__36216,done,error){
var map__36217 = p__36216;
var map__36217__$1 = cljs.core.__destructure_map(map__36217);
var msg = map__36217__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36217__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36217__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36217__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__36218){
var map__36219 = p__36218;
var map__36219__$1 = cljs.core.__destructure_map(map__36219);
var src = map__36219__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36219__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4210__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4210__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4210__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__36220 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__36220) : done.call(null,G__36220));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__36221){
var map__36222 = p__36221;
var map__36222__$1 = cljs.core.__destructure_map(map__36222);
var msg__$1 = map__36222__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36222__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e36223){var ex = e36223;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__36224){
var map__36225 = p__36224;
var map__36225__$1 = cljs.core.__destructure_map(map__36225);
var env = map__36225__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36225__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__36226){
var map__36227 = p__36226;
var map__36227__$1 = cljs.core.__destructure_map(map__36227);
var msg = map__36227__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36227__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__36228){
var map__36229 = p__36228;
var map__36229__$1 = cljs.core.__destructure_map(map__36229);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36229__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36229__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__36230){
var map__36231 = p__36230;
var map__36231__$1 = cljs.core.__destructure_map(map__36231);
var svc = map__36231__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36231__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
