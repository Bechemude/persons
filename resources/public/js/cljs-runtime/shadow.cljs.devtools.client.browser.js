goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4824__auto__ = [];
var len__4818__auto___37818 = arguments.length;
var i__4819__auto___37819 = (0);
while(true){
if((i__4819__auto___37819 < len__4818__auto___37818)){
args__4824__auto__.push((arguments[i__4819__auto___37819]));

var G__37820 = (i__4819__auto___37819 + (1));
i__4819__auto___37819 = G__37820;
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq37588){
var G__37589 = cljs.core.first(seq37588);
var seq37588__$1 = cljs.core.next(seq37588);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37589,seq37588__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__37592 = cljs.core.seq(sources);
var chunk__37593 = null;
var count__37594 = (0);
var i__37595 = (0);
while(true){
if((i__37595 < count__37594)){
var map__37600 = chunk__37593.cljs$core$IIndexed$_nth$arity$2(null,i__37595);
var map__37600__$1 = cljs.core.__destructure_map(map__37600);
var src = map__37600__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37600__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37600__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37600__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37600__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e37601){var e_37827 = e37601;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_37827);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_37827.message)].join('')));
}

var G__37829 = seq__37592;
var G__37830 = chunk__37593;
var G__37831 = count__37594;
var G__37832 = (i__37595 + (1));
seq__37592 = G__37829;
chunk__37593 = G__37830;
count__37594 = G__37831;
i__37595 = G__37832;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__37592);
if(temp__5753__auto__){
var seq__37592__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37592__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__37592__$1);
var G__37833 = cljs.core.chunk_rest(seq__37592__$1);
var G__37834 = c__4638__auto__;
var G__37835 = cljs.core.count(c__4638__auto__);
var G__37836 = (0);
seq__37592 = G__37833;
chunk__37593 = G__37834;
count__37594 = G__37835;
i__37595 = G__37836;
continue;
} else {
var map__37606 = cljs.core.first(seq__37592__$1);
var map__37606__$1 = cljs.core.__destructure_map(map__37606);
var src = map__37606__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37606__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37606__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37606__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37606__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e37607){var e_37837 = e37607;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_37837);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_37837.message)].join('')));
}

var G__37838 = cljs.core.next(seq__37592__$1);
var G__37839 = null;
var G__37840 = (0);
var G__37841 = (0);
seq__37592 = G__37838;
chunk__37593 = G__37839;
count__37594 = G__37840;
i__37595 = G__37841;
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
var seq__37609 = cljs.core.seq(js_requires);
var chunk__37610 = null;
var count__37611 = (0);
var i__37612 = (0);
while(true){
if((i__37612 < count__37611)){
var js_ns = chunk__37610.cljs$core$IIndexed$_nth$arity$2(null,i__37612);
var require_str_37842 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_37842);


var G__37843 = seq__37609;
var G__37844 = chunk__37610;
var G__37845 = count__37611;
var G__37846 = (i__37612 + (1));
seq__37609 = G__37843;
chunk__37610 = G__37844;
count__37611 = G__37845;
i__37612 = G__37846;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__37609);
if(temp__5753__auto__){
var seq__37609__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37609__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__37609__$1);
var G__37847 = cljs.core.chunk_rest(seq__37609__$1);
var G__37848 = c__4638__auto__;
var G__37849 = cljs.core.count(c__4638__auto__);
var G__37850 = (0);
seq__37609 = G__37847;
chunk__37610 = G__37848;
count__37611 = G__37849;
i__37612 = G__37850;
continue;
} else {
var js_ns = cljs.core.first(seq__37609__$1);
var require_str_37851 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_37851);


var G__37852 = cljs.core.next(seq__37609__$1);
var G__37853 = null;
var G__37854 = (0);
var G__37855 = (0);
seq__37609 = G__37852;
chunk__37610 = G__37853;
count__37611 = G__37854;
i__37612 = G__37855;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__37619){
var map__37620 = p__37619;
var map__37620__$1 = cljs.core.__destructure_map(map__37620);
var msg = map__37620__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37620__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37620__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4611__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37621(s__37622){
return (new cljs.core.LazySeq(null,(function (){
var s__37622__$1 = s__37622;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__37622__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var map__37631 = cljs.core.first(xs__6308__auto__);
var map__37631__$1 = cljs.core.__destructure_map(map__37631);
var src = map__37631__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37631__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37631__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4607__auto__ = ((function (s__37622__$1,map__37631,map__37631__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__37620,map__37620__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37621_$_iter__37623(s__37624){
return (new cljs.core.LazySeq(null,((function (s__37622__$1,map__37631,map__37631__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__37620,map__37620__$1,msg,info,reload_info){
return (function (){
var s__37624__$1 = s__37624;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__37624__$1);
if(temp__5753__auto____$1){
var s__37624__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__37624__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__37624__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__37626 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__37625 = (0);
while(true){
if((i__37625 < size__4610__auto__)){
var warning = cljs.core._nth(c__4609__auto__,i__37625);
cljs.core.chunk_append(b__37626,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__37856 = (i__37625 + (1));
i__37625 = G__37856;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37626),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37621_$_iter__37623(cljs.core.chunk_rest(s__37624__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37626),null);
}
} else {
var warning = cljs.core.first(s__37624__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37621_$_iter__37623(cljs.core.rest(s__37624__$2)));
}
} else {
return null;
}
break;
}
});})(s__37622__$1,map__37631,map__37631__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__37620,map__37620__$1,msg,info,reload_info))
,null,null));
});})(s__37622__$1,map__37631,map__37631__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__37620,map__37620__$1,msg,info,reload_info))
;
var fs__4608__auto__ = cljs.core.seq(iterys__4607__auto__(warnings));
if(fs__4608__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4608__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37621(cljs.core.rest(s__37622__$1)));
} else {
var G__37857 = cljs.core.rest(s__37622__$1);
s__37622__$1 = G__37857;
continue;
}
} else {
var G__37858 = cljs.core.rest(s__37622__$1);
s__37622__$1 = G__37858;
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
var seq__37638_37859 = cljs.core.seq(warnings);
var chunk__37639_37860 = null;
var count__37640_37861 = (0);
var i__37641_37862 = (0);
while(true){
if((i__37641_37862 < count__37640_37861)){
var map__37644_37863 = chunk__37639_37860.cljs$core$IIndexed$_nth$arity$2(null,i__37641_37862);
var map__37644_37864__$1 = cljs.core.__destructure_map(map__37644_37863);
var w_37865 = map__37644_37864__$1;
var msg_37866__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37644_37864__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_37867 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37644_37864__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_37868 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37644_37864__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_37869 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37644_37864__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_37869)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_37867),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_37868),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_37866__$1)].join(''));


var G__37870 = seq__37638_37859;
var G__37871 = chunk__37639_37860;
var G__37872 = count__37640_37861;
var G__37873 = (i__37641_37862 + (1));
seq__37638_37859 = G__37870;
chunk__37639_37860 = G__37871;
count__37640_37861 = G__37872;
i__37641_37862 = G__37873;
continue;
} else {
var temp__5753__auto___37874 = cljs.core.seq(seq__37638_37859);
if(temp__5753__auto___37874){
var seq__37638_37875__$1 = temp__5753__auto___37874;
if(cljs.core.chunked_seq_QMARK_(seq__37638_37875__$1)){
var c__4638__auto___37876 = cljs.core.chunk_first(seq__37638_37875__$1);
var G__37877 = cljs.core.chunk_rest(seq__37638_37875__$1);
var G__37878 = c__4638__auto___37876;
var G__37879 = cljs.core.count(c__4638__auto___37876);
var G__37880 = (0);
seq__37638_37859 = G__37877;
chunk__37639_37860 = G__37878;
count__37640_37861 = G__37879;
i__37641_37862 = G__37880;
continue;
} else {
var map__37645_37881 = cljs.core.first(seq__37638_37875__$1);
var map__37645_37882__$1 = cljs.core.__destructure_map(map__37645_37881);
var w_37883 = map__37645_37882__$1;
var msg_37884__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37645_37882__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_37885 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37645_37882__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_37886 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37645_37882__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_37887 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37645_37882__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_37887)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_37885),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_37886),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_37884__$1)].join(''));


var G__37888 = cljs.core.next(seq__37638_37875__$1);
var G__37889 = null;
var G__37890 = (0);
var G__37891 = (0);
seq__37638_37859 = G__37888;
chunk__37639_37860 = G__37889;
count__37640_37861 = G__37890;
i__37641_37862 = G__37891;
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

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__37615_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__37615_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__37663){
var map__37664 = p__37663;
var map__37664__$1 = cljs.core.__destructure_map(map__37664);
var msg = map__37664__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37664__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__37665 = cljs.core.seq(updates);
var chunk__37668 = null;
var count__37669 = (0);
var i__37670 = (0);
while(true){
if((i__37670 < count__37669)){
var path = chunk__37668.cljs$core$IIndexed$_nth$arity$2(null,i__37670);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__37730_37895 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__37734_37896 = null;
var count__37735_37897 = (0);
var i__37736_37898 = (0);
while(true){
if((i__37736_37898 < count__37735_37897)){
var node_37899 = chunk__37734_37896.cljs$core$IIndexed$_nth$arity$2(null,i__37736_37898);
if(cljs.core.not(node_37899.shadow$old)){
var path_match_37900 = shadow.cljs.devtools.client.browser.match_paths(node_37899.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37900)){
var new_link_37901 = (function (){var G__37743 = node_37899.cloneNode(true);
G__37743.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37900),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37743;
})();
(node_37899.shadow$old = true);

(new_link_37901.onload = ((function (seq__37730_37895,chunk__37734_37896,count__37735_37897,i__37736_37898,seq__37665,chunk__37668,count__37669,i__37670,new_link_37901,path_match_37900,node_37899,path,map__37664,map__37664__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_37899);
});})(seq__37730_37895,chunk__37734_37896,count__37735_37897,i__37736_37898,seq__37665,chunk__37668,count__37669,i__37670,new_link_37901,path_match_37900,node_37899,path,map__37664,map__37664__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37900], 0));

goog.dom.insertSiblingAfter(new_link_37901,node_37899);


var G__37902 = seq__37730_37895;
var G__37903 = chunk__37734_37896;
var G__37904 = count__37735_37897;
var G__37905 = (i__37736_37898 + (1));
seq__37730_37895 = G__37902;
chunk__37734_37896 = G__37903;
count__37735_37897 = G__37904;
i__37736_37898 = G__37905;
continue;
} else {
var G__37906 = seq__37730_37895;
var G__37907 = chunk__37734_37896;
var G__37908 = count__37735_37897;
var G__37909 = (i__37736_37898 + (1));
seq__37730_37895 = G__37906;
chunk__37734_37896 = G__37907;
count__37735_37897 = G__37908;
i__37736_37898 = G__37909;
continue;
}
} else {
var G__37910 = seq__37730_37895;
var G__37911 = chunk__37734_37896;
var G__37912 = count__37735_37897;
var G__37913 = (i__37736_37898 + (1));
seq__37730_37895 = G__37910;
chunk__37734_37896 = G__37911;
count__37735_37897 = G__37912;
i__37736_37898 = G__37913;
continue;
}
} else {
var temp__5753__auto___37914 = cljs.core.seq(seq__37730_37895);
if(temp__5753__auto___37914){
var seq__37730_37915__$1 = temp__5753__auto___37914;
if(cljs.core.chunked_seq_QMARK_(seq__37730_37915__$1)){
var c__4638__auto___37916 = cljs.core.chunk_first(seq__37730_37915__$1);
var G__37917 = cljs.core.chunk_rest(seq__37730_37915__$1);
var G__37918 = c__4638__auto___37916;
var G__37919 = cljs.core.count(c__4638__auto___37916);
var G__37920 = (0);
seq__37730_37895 = G__37917;
chunk__37734_37896 = G__37918;
count__37735_37897 = G__37919;
i__37736_37898 = G__37920;
continue;
} else {
var node_37921 = cljs.core.first(seq__37730_37915__$1);
if(cljs.core.not(node_37921.shadow$old)){
var path_match_37922 = shadow.cljs.devtools.client.browser.match_paths(node_37921.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37922)){
var new_link_37923 = (function (){var G__37746 = node_37921.cloneNode(true);
G__37746.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37922),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37746;
})();
(node_37921.shadow$old = true);

(new_link_37923.onload = ((function (seq__37730_37895,chunk__37734_37896,count__37735_37897,i__37736_37898,seq__37665,chunk__37668,count__37669,i__37670,new_link_37923,path_match_37922,node_37921,seq__37730_37915__$1,temp__5753__auto___37914,path,map__37664,map__37664__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_37921);
});})(seq__37730_37895,chunk__37734_37896,count__37735_37897,i__37736_37898,seq__37665,chunk__37668,count__37669,i__37670,new_link_37923,path_match_37922,node_37921,seq__37730_37915__$1,temp__5753__auto___37914,path,map__37664,map__37664__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37922], 0));

goog.dom.insertSiblingAfter(new_link_37923,node_37921);


var G__37925 = cljs.core.next(seq__37730_37915__$1);
var G__37926 = null;
var G__37927 = (0);
var G__37928 = (0);
seq__37730_37895 = G__37925;
chunk__37734_37896 = G__37926;
count__37735_37897 = G__37927;
i__37736_37898 = G__37928;
continue;
} else {
var G__37929 = cljs.core.next(seq__37730_37915__$1);
var G__37930 = null;
var G__37931 = (0);
var G__37932 = (0);
seq__37730_37895 = G__37929;
chunk__37734_37896 = G__37930;
count__37735_37897 = G__37931;
i__37736_37898 = G__37932;
continue;
}
} else {
var G__37933 = cljs.core.next(seq__37730_37915__$1);
var G__37934 = null;
var G__37935 = (0);
var G__37936 = (0);
seq__37730_37895 = G__37933;
chunk__37734_37896 = G__37934;
count__37735_37897 = G__37935;
i__37736_37898 = G__37936;
continue;
}
}
} else {
}
}
break;
}


var G__37937 = seq__37665;
var G__37938 = chunk__37668;
var G__37939 = count__37669;
var G__37940 = (i__37670 + (1));
seq__37665 = G__37937;
chunk__37668 = G__37938;
count__37669 = G__37939;
i__37670 = G__37940;
continue;
} else {
var G__37941 = seq__37665;
var G__37942 = chunk__37668;
var G__37943 = count__37669;
var G__37944 = (i__37670 + (1));
seq__37665 = G__37941;
chunk__37668 = G__37942;
count__37669 = G__37943;
i__37670 = G__37944;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__37665);
if(temp__5753__auto__){
var seq__37665__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37665__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__37665__$1);
var G__37945 = cljs.core.chunk_rest(seq__37665__$1);
var G__37946 = c__4638__auto__;
var G__37947 = cljs.core.count(c__4638__auto__);
var G__37948 = (0);
seq__37665 = G__37945;
chunk__37668 = G__37946;
count__37669 = G__37947;
i__37670 = G__37948;
continue;
} else {
var path = cljs.core.first(seq__37665__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__37751_37950 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__37755_37951 = null;
var count__37756_37952 = (0);
var i__37757_37953 = (0);
while(true){
if((i__37757_37953 < count__37756_37952)){
var node_37955 = chunk__37755_37951.cljs$core$IIndexed$_nth$arity$2(null,i__37757_37953);
if(cljs.core.not(node_37955.shadow$old)){
var path_match_37956 = shadow.cljs.devtools.client.browser.match_paths(node_37955.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37956)){
var new_link_37957 = (function (){var G__37770 = node_37955.cloneNode(true);
G__37770.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37956),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37770;
})();
(node_37955.shadow$old = true);

(new_link_37957.onload = ((function (seq__37751_37950,chunk__37755_37951,count__37756_37952,i__37757_37953,seq__37665,chunk__37668,count__37669,i__37670,new_link_37957,path_match_37956,node_37955,path,seq__37665__$1,temp__5753__auto__,map__37664,map__37664__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_37955);
});})(seq__37751_37950,chunk__37755_37951,count__37756_37952,i__37757_37953,seq__37665,chunk__37668,count__37669,i__37670,new_link_37957,path_match_37956,node_37955,path,seq__37665__$1,temp__5753__auto__,map__37664,map__37664__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37956], 0));

goog.dom.insertSiblingAfter(new_link_37957,node_37955);


var G__37958 = seq__37751_37950;
var G__37959 = chunk__37755_37951;
var G__37960 = count__37756_37952;
var G__37961 = (i__37757_37953 + (1));
seq__37751_37950 = G__37958;
chunk__37755_37951 = G__37959;
count__37756_37952 = G__37960;
i__37757_37953 = G__37961;
continue;
} else {
var G__37962 = seq__37751_37950;
var G__37963 = chunk__37755_37951;
var G__37964 = count__37756_37952;
var G__37965 = (i__37757_37953 + (1));
seq__37751_37950 = G__37962;
chunk__37755_37951 = G__37963;
count__37756_37952 = G__37964;
i__37757_37953 = G__37965;
continue;
}
} else {
var G__37966 = seq__37751_37950;
var G__37967 = chunk__37755_37951;
var G__37968 = count__37756_37952;
var G__37969 = (i__37757_37953 + (1));
seq__37751_37950 = G__37966;
chunk__37755_37951 = G__37967;
count__37756_37952 = G__37968;
i__37757_37953 = G__37969;
continue;
}
} else {
var temp__5753__auto___37970__$1 = cljs.core.seq(seq__37751_37950);
if(temp__5753__auto___37970__$1){
var seq__37751_37971__$1 = temp__5753__auto___37970__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37751_37971__$1)){
var c__4638__auto___37972 = cljs.core.chunk_first(seq__37751_37971__$1);
var G__37973 = cljs.core.chunk_rest(seq__37751_37971__$1);
var G__37974 = c__4638__auto___37972;
var G__37975 = cljs.core.count(c__4638__auto___37972);
var G__37976 = (0);
seq__37751_37950 = G__37973;
chunk__37755_37951 = G__37974;
count__37756_37952 = G__37975;
i__37757_37953 = G__37976;
continue;
} else {
var node_37977 = cljs.core.first(seq__37751_37971__$1);
if(cljs.core.not(node_37977.shadow$old)){
var path_match_37978 = shadow.cljs.devtools.client.browser.match_paths(node_37977.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37978)){
var new_link_37979 = (function (){var G__37778 = node_37977.cloneNode(true);
G__37778.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37978),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37778;
})();
(node_37977.shadow$old = true);

(new_link_37979.onload = ((function (seq__37751_37950,chunk__37755_37951,count__37756_37952,i__37757_37953,seq__37665,chunk__37668,count__37669,i__37670,new_link_37979,path_match_37978,node_37977,seq__37751_37971__$1,temp__5753__auto___37970__$1,path,seq__37665__$1,temp__5753__auto__,map__37664,map__37664__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_37977);
});})(seq__37751_37950,chunk__37755_37951,count__37756_37952,i__37757_37953,seq__37665,chunk__37668,count__37669,i__37670,new_link_37979,path_match_37978,node_37977,seq__37751_37971__$1,temp__5753__auto___37970__$1,path,seq__37665__$1,temp__5753__auto__,map__37664,map__37664__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37978], 0));

goog.dom.insertSiblingAfter(new_link_37979,node_37977);


var G__37985 = cljs.core.next(seq__37751_37971__$1);
var G__37986 = null;
var G__37987 = (0);
var G__37988 = (0);
seq__37751_37950 = G__37985;
chunk__37755_37951 = G__37986;
count__37756_37952 = G__37987;
i__37757_37953 = G__37988;
continue;
} else {
var G__37989 = cljs.core.next(seq__37751_37971__$1);
var G__37990 = null;
var G__37991 = (0);
var G__37992 = (0);
seq__37751_37950 = G__37989;
chunk__37755_37951 = G__37990;
count__37756_37952 = G__37991;
i__37757_37953 = G__37992;
continue;
}
} else {
var G__37993 = cljs.core.next(seq__37751_37971__$1);
var G__37994 = null;
var G__37995 = (0);
var G__37996 = (0);
seq__37751_37950 = G__37993;
chunk__37755_37951 = G__37994;
count__37756_37952 = G__37995;
i__37757_37953 = G__37996;
continue;
}
}
} else {
}
}
break;
}


var G__37997 = cljs.core.next(seq__37665__$1);
var G__37998 = null;
var G__37999 = (0);
var G__38000 = (0);
seq__37665 = G__37997;
chunk__37668 = G__37998;
count__37669 = G__37999;
i__37670 = G__38000;
continue;
} else {
var G__38001 = cljs.core.next(seq__37665__$1);
var G__38002 = null;
var G__38003 = (0);
var G__38004 = (0);
seq__37665 = G__38001;
chunk__37668 = G__38002;
count__37669 = G__38003;
i__37670 = G__38004;
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
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__37785){
var map__37786 = p__37785;
var map__37786__$1 = cljs.core.__destructure_map(map__37786);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37786__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
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

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__37787){
var map__37788 = p__37787;
var map__37788__$1 = cljs.core.__destructure_map(map__37788);
var _ = map__37788__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37788__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__37789,done,error){
var map__37790 = p__37789;
var map__37790__$1 = cljs.core.__destructure_map(map__37790);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37790__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__37795,done,error){
var map__37796 = p__37795;
var map__37796__$1 = cljs.core.__destructure_map(map__37796);
var msg = map__37796__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37796__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37796__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37796__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__37797){
var map__37798 = p__37797;
var map__37798__$1 = cljs.core.__destructure_map(map__37798);
var src = map__37798__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37798__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4210__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4210__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4210__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__37799 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__37799) : done.call(null,G__37799));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__37800){
var map__37801 = p__37800;
var map__37801__$1 = cljs.core.__destructure_map(map__37801);
var msg__$1 = map__37801__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37801__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e37802){var ex = e37802;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__37804){
var map__37805 = p__37804;
var map__37805__$1 = cljs.core.__destructure_map(map__37805);
var env = map__37805__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37805__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
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
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__37810){
var map__37811 = p__37810;
var map__37811__$1 = cljs.core.__destructure_map(map__37811);
var msg = map__37811__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37811__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
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
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__37813){
var map__37814 = p__37813;
var map__37814__$1 = cljs.core.__destructure_map(map__37814);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37814__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37814__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
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
}),(function (p__37815){
var map__37816 = p__37815;
var map__37816__$1 = cljs.core.__destructure_map(map__37816);
var svc = map__37816__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37816__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
