goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__37347,p__37348){
var map__37349 = p__37347;
var map__37349__$1 = cljs.core.__destructure_map(map__37349);
var svc = map__37349__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37349__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37349__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37349__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__37350 = p__37348;
var map__37350__$1 = cljs.core.__destructure_map(map__37350);
var msg = map__37350__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37350__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37350__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37350__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37350__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__37354,p__37355){
var map__37356 = p__37354;
var map__37356__$1 = cljs.core.__destructure_map(map__37356);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37356__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__37357 = p__37355;
var map__37357__$1 = cljs.core.__destructure_map(map__37357);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37357__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__37359,p__37360){
var map__37361 = p__37359;
var map__37361__$1 = cljs.core.__destructure_map(map__37361);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37361__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37361__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__37362 = p__37360;
var map__37362__$1 = cljs.core.__destructure_map(map__37362);
var msg = map__37362__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37362__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__37379,tid){
var map__37380 = p__37379;
var map__37380__$1 = cljs.core.__destructure_map(map__37380);
var svc = map__37380__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37380__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__37385 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__37386 = null;
var count__37387 = (0);
var i__37388 = (0);
while(true){
if((i__37388 < count__37387)){
var vec__37398 = chunk__37386.cljs$core$IIndexed$_nth$arity$2(null,i__37388);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37398,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37398,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__37409 = seq__37385;
var G__37410 = chunk__37386;
var G__37411 = count__37387;
var G__37412 = (i__37388 + (1));
seq__37385 = G__37409;
chunk__37386 = G__37410;
count__37387 = G__37411;
i__37388 = G__37412;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__37385);
if(temp__5753__auto__){
var seq__37385__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37385__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__37385__$1);
var G__37413 = cljs.core.chunk_rest(seq__37385__$1);
var G__37414 = c__4638__auto__;
var G__37415 = cljs.core.count(c__4638__auto__);
var G__37416 = (0);
seq__37385 = G__37413;
chunk__37386 = G__37414;
count__37387 = G__37415;
i__37388 = G__37416;
continue;
} else {
var vec__37401 = cljs.core.first(seq__37385__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37401,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37401,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__37417 = cljs.core.next(seq__37385__$1);
var G__37418 = null;
var G__37419 = (0);
var G__37420 = (0);
seq__37385 = G__37417;
chunk__37386 = G__37418;
count__37387 = G__37419;
i__37388 = G__37420;
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
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__37381_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__37381_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__37382_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__37382_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__37383_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__37383_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__37384_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__37384_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__37407){
var map__37408 = p__37407;
var map__37408__$1 = cljs.core.__destructure_map(map__37408);
var svc = map__37408__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37408__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37408__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
