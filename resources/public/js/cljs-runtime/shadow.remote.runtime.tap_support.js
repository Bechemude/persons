goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__35844,p__35845){
var map__35846 = p__35844;
var map__35846__$1 = cljs.core.__destructure_map(map__35846);
var svc = map__35846__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35846__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35846__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35846__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__35847 = p__35845;
var map__35847__$1 = cljs.core.__destructure_map(map__35847);
var msg = map__35847__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35847__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35847__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35847__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__35847__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__35855,p__35856){
var map__35857 = p__35855;
var map__35857__$1 = cljs.core.__destructure_map(map__35857);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35857__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__35858 = p__35856;
var map__35858__$1 = cljs.core.__destructure_map(map__35858);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35858__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__35862,p__35863){
var map__35865 = p__35862;
var map__35865__$1 = cljs.core.__destructure_map(map__35865);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35865__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35865__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__35866 = p__35863;
var map__35866__$1 = cljs.core.__destructure_map(map__35866);
var msg = map__35866__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__35866__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__35869,tid){
var map__35870 = p__35869;
var map__35870__$1 = cljs.core.__destructure_map(map__35870);
var svc = map__35870__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35870__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__35880 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__35881 = null;
var count__35882 = (0);
var i__35883 = (0);
while(true){
if((i__35883 < count__35882)){
var vec__35895 = chunk__35881.cljs$core$IIndexed$_nth$arity$2(null,i__35883);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35895,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35895,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__35913 = seq__35880;
var G__35914 = chunk__35881;
var G__35915 = count__35882;
var G__35916 = (i__35883 + (1));
seq__35880 = G__35913;
chunk__35881 = G__35914;
count__35882 = G__35915;
i__35883 = G__35916;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35880);
if(temp__5753__auto__){
var seq__35880__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35880__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__35880__$1);
var G__35917 = cljs.core.chunk_rest(seq__35880__$1);
var G__35918 = c__4638__auto__;
var G__35919 = cljs.core.count(c__4638__auto__);
var G__35920 = (0);
seq__35880 = G__35917;
chunk__35881 = G__35918;
count__35882 = G__35919;
i__35883 = G__35920;
continue;
} else {
var vec__35898 = cljs.core.first(seq__35880__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35898,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35898,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__35921 = cljs.core.next(seq__35880__$1);
var G__35922 = null;
var G__35923 = (0);
var G__35924 = (0);
seq__35880 = G__35921;
chunk__35881 = G__35922;
count__35882 = G__35923;
i__35883 = G__35924;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__35871_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__35871_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__35872_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__35872_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__35873_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__35873_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__35874_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__35874_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__35902){
var map__35903 = p__35902;
var map__35903__$1 = cljs.core.__destructure_map(map__35903);
var svc = map__35903__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35903__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35903__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
