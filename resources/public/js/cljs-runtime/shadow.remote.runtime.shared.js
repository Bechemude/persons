goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__35654,res){
var map__35655 = p__35654;
var map__35655__$1 = cljs.core.__destructure_map(map__35655);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35655__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35655__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__35656 = res;
var G__35656__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35656,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__35656);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35656__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__35656__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__35661 = arguments.length;
switch (G__35661) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__35664,msg,handlers,timeout_after_ms){
var map__35665 = p__35664;
var map__35665__$1 = cljs.core.__destructure_map(map__35665);
var runtime = map__35665__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35665__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___35993 = arguments.length;
var i__4819__auto___35994 = (0);
while(true){
if((i__4819__auto___35994 < len__4818__auto___35993)){
args__4824__auto__.push((arguments[i__4819__auto___35994]));

var G__35995 = (i__4819__auto___35994 + (1));
i__4819__auto___35994 = G__35995;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__35677,ev,args){
var map__35678 = p__35677;
var map__35678__$1 = cljs.core.__destructure_map(map__35678);
var runtime = map__35678__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35678__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__35679 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__35682 = null;
var count__35683 = (0);
var i__35684 = (0);
while(true){
if((i__35684 < count__35683)){
var ext = chunk__35682.cljs$core$IIndexed$_nth$arity$2(null,i__35684);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__35996 = seq__35679;
var G__35997 = chunk__35682;
var G__35998 = count__35683;
var G__35999 = (i__35684 + (1));
seq__35679 = G__35996;
chunk__35682 = G__35997;
count__35683 = G__35998;
i__35684 = G__35999;
continue;
} else {
var G__36000 = seq__35679;
var G__36001 = chunk__35682;
var G__36002 = count__35683;
var G__36003 = (i__35684 + (1));
seq__35679 = G__36000;
chunk__35682 = G__36001;
count__35683 = G__36002;
i__35684 = G__36003;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35679);
if(temp__5753__auto__){
var seq__35679__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35679__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__35679__$1);
var G__36004 = cljs.core.chunk_rest(seq__35679__$1);
var G__36005 = c__4638__auto__;
var G__36006 = cljs.core.count(c__4638__auto__);
var G__36007 = (0);
seq__35679 = G__36004;
chunk__35682 = G__36005;
count__35683 = G__36006;
i__35684 = G__36007;
continue;
} else {
var ext = cljs.core.first(seq__35679__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__36008 = cljs.core.next(seq__35679__$1);
var G__36009 = null;
var G__36010 = (0);
var G__36011 = (0);
seq__35679 = G__36008;
chunk__35682 = G__36009;
count__35683 = G__36010;
i__35684 = G__36011;
continue;
} else {
var G__36012 = cljs.core.next(seq__35679__$1);
var G__36013 = null;
var G__36014 = (0);
var G__36015 = (0);
seq__35679 = G__36012;
chunk__35682 = G__36013;
count__35683 = G__36014;
i__35684 = G__36015;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq35668){
var G__35669 = cljs.core.first(seq35668);
var seq35668__$1 = cljs.core.next(seq35668);
var G__35670 = cljs.core.first(seq35668__$1);
var seq35668__$2 = cljs.core.next(seq35668__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35669,G__35670,seq35668__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__35749,p__35750){
var map__35751 = p__35749;
var map__35751__$1 = cljs.core.__destructure_map(map__35751);
var runtime = map__35751__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35751__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__35752 = p__35750;
var map__35752__$1 = cljs.core.__destructure_map(map__35752);
var msg = map__35752__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35752__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__35753 = cljs.core.deref(state_ref);
var map__35753__$1 = cljs.core.__destructure_map(map__35753);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35753__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35753__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__35755){
var map__35756 = p__35755;
var map__35756__$1 = cljs.core.__destructure_map(map__35756);
var runtime = map__35756__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35756__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__4212__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__35758,msg){
var map__35759 = p__35758;
var map__35759__$1 = cljs.core.__destructure_map(map__35759);
var runtime = map__35759__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35759__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__35765,key,p__35766){
var map__35767 = p__35765;
var map__35767__$1 = cljs.core.__destructure_map(map__35767);
var state = map__35767__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35767__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__35768 = p__35766;
var map__35768__$1 = cljs.core.__destructure_map(map__35768);
var spec = map__35768__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35768__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__35797,key,spec){
var map__35803 = p__35797;
var map__35803__$1 = cljs.core.__destructure_map(map__35803);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35803__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__35805_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__35805_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__35806_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__35806_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__35807_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__35807_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__35808_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__35808_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__35809_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__35809_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__35867,key){
var map__35873 = p__35867;
var map__35873__$1 = cljs.core.__destructure_map(map__35873);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35873__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__35879,msg){
var map__35881 = p__35879;
var map__35881__$1 = cljs.core.__destructure_map(map__35881);
var runtime = map__35881__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35881__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__35941,p__35942){
var map__35943 = p__35941;
var map__35943__$1 = cljs.core.__destructure_map(map__35943);
var runtime = map__35943__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35943__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__35948 = p__35942;
var map__35948__$1 = cljs.core.__destructure_map(map__35948);
var msg = map__35948__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35948__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35948__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__35967 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__35969 = null;
var count__35970 = (0);
var i__35971 = (0);
while(true){
if((i__35971 < count__35970)){
var map__35977 = chunk__35969.cljs$core$IIndexed$_nth$arity$2(null,i__35971);
var map__35977__$1 = cljs.core.__destructure_map(map__35977);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35977__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__36039 = seq__35967;
var G__36040 = chunk__35969;
var G__36041 = count__35970;
var G__36042 = (i__35971 + (1));
seq__35967 = G__36039;
chunk__35969 = G__36040;
count__35970 = G__36041;
i__35971 = G__36042;
continue;
} else {
var G__36043 = seq__35967;
var G__36044 = chunk__35969;
var G__36045 = count__35970;
var G__36046 = (i__35971 + (1));
seq__35967 = G__36043;
chunk__35969 = G__36044;
count__35970 = G__36045;
i__35971 = G__36046;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35967);
if(temp__5753__auto__){
var seq__35967__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35967__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__35967__$1);
var G__36047 = cljs.core.chunk_rest(seq__35967__$1);
var G__36048 = c__4638__auto__;
var G__36049 = cljs.core.count(c__4638__auto__);
var G__36050 = (0);
seq__35967 = G__36047;
chunk__35969 = G__36048;
count__35970 = G__36049;
i__35971 = G__36050;
continue;
} else {
var map__35983 = cljs.core.first(seq__35967__$1);
var map__35983__$1 = cljs.core.__destructure_map(map__35983);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35983__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__36051 = cljs.core.next(seq__35967__$1);
var G__36052 = null;
var G__36053 = (0);
var G__36054 = (0);
seq__35967 = G__36051;
chunk__35969 = G__36052;
count__35970 = G__36053;
i__35971 = G__36054;
continue;
} else {
var G__36055 = cljs.core.next(seq__35967__$1);
var G__36056 = null;
var G__36057 = (0);
var G__36058 = (0);
seq__35967 = G__36055;
chunk__35969 = G__36056;
count__35970 = G__36057;
i__35971 = G__36058;
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

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
