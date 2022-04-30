goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_34971 = (function (this$){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4510__auto__.call(null,this$));
} else {
var m__4508__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4508__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_34971(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_34972 = (function (this$){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4510__auto__.call(null,this$));
} else {
var m__4508__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4508__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_34972(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__34318 = coll;
var G__34319 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__34318,G__34319) : shadow.dom.lazy_native_coll_seq.call(null,G__34318,G__34319));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4212__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__34350 = arguments.length;
switch (G__34350) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__34361 = arguments.length;
switch (G__34361) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__34368 = arguments.length;
switch (G__34368) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__34373 = arguments.length;
switch (G__34373) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__34386 = arguments.length;
switch (G__34386) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__34407 = arguments.length;
switch (G__34407) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4212__auto__ = (!((typeof document !== 'undefined')));
if(or__4212__auto__){
return or__4212__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e34413){if((e34413 instanceof Object)){
var e = e34413;
return console.log("didnt support attachEvent",el,e);
} else {
throw e34413;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4212__auto__ = (!((typeof document !== 'undefined')));
if(or__4212__auto__){
return or__4212__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__34426 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__34427 = null;
var count__34428 = (0);
var i__34429 = (0);
while(true){
if((i__34429 < count__34428)){
var el = chunk__34427.cljs$core$IIndexed$_nth$arity$2(null,i__34429);
var handler_34979__$1 = ((function (seq__34426,chunk__34427,count__34428,i__34429,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__34426,chunk__34427,count__34428,i__34429,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_34979__$1);


var G__34980 = seq__34426;
var G__34981 = chunk__34427;
var G__34982 = count__34428;
var G__34983 = (i__34429 + (1));
seq__34426 = G__34980;
chunk__34427 = G__34981;
count__34428 = G__34982;
i__34429 = G__34983;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__34426);
if(temp__5753__auto__){
var seq__34426__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34426__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__34426__$1);
var G__34984 = cljs.core.chunk_rest(seq__34426__$1);
var G__34985 = c__4638__auto__;
var G__34986 = cljs.core.count(c__4638__auto__);
var G__34987 = (0);
seq__34426 = G__34984;
chunk__34427 = G__34985;
count__34428 = G__34986;
i__34429 = G__34987;
continue;
} else {
var el = cljs.core.first(seq__34426__$1);
var handler_34988__$1 = ((function (seq__34426,chunk__34427,count__34428,i__34429,el,seq__34426__$1,temp__5753__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__34426,chunk__34427,count__34428,i__34429,el,seq__34426__$1,temp__5753__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_34988__$1);


var G__34989 = cljs.core.next(seq__34426__$1);
var G__34990 = null;
var G__34991 = (0);
var G__34992 = (0);
seq__34426 = G__34989;
chunk__34427 = G__34990;
count__34428 = G__34991;
i__34429 = G__34992;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__34442 = arguments.length;
switch (G__34442) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__34456 = cljs.core.seq(events);
var chunk__34457 = null;
var count__34458 = (0);
var i__34459 = (0);
while(true){
if((i__34459 < count__34458)){
var vec__34476 = chunk__34457.cljs$core$IIndexed$_nth$arity$2(null,i__34459);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34476,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34476,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__34994 = seq__34456;
var G__34995 = chunk__34457;
var G__34996 = count__34458;
var G__34997 = (i__34459 + (1));
seq__34456 = G__34994;
chunk__34457 = G__34995;
count__34458 = G__34996;
i__34459 = G__34997;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__34456);
if(temp__5753__auto__){
var seq__34456__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34456__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__34456__$1);
var G__34998 = cljs.core.chunk_rest(seq__34456__$1);
var G__34999 = c__4638__auto__;
var G__35000 = cljs.core.count(c__4638__auto__);
var G__35001 = (0);
seq__34456 = G__34998;
chunk__34457 = G__34999;
count__34458 = G__35000;
i__34459 = G__35001;
continue;
} else {
var vec__34482 = cljs.core.first(seq__34456__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34482,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34482,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__35002 = cljs.core.next(seq__34456__$1);
var G__35003 = null;
var G__35004 = (0);
var G__35005 = (0);
seq__34456 = G__35002;
chunk__34457 = G__35003;
count__34458 = G__35004;
i__34459 = G__35005;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__34493 = cljs.core.seq(styles);
var chunk__34494 = null;
var count__34495 = (0);
var i__34496 = (0);
while(true){
if((i__34496 < count__34495)){
var vec__34514 = chunk__34494.cljs$core$IIndexed$_nth$arity$2(null,i__34496);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34514,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34514,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__35006 = seq__34493;
var G__35007 = chunk__34494;
var G__35008 = count__34495;
var G__35009 = (i__34496 + (1));
seq__34493 = G__35006;
chunk__34494 = G__35007;
count__34495 = G__35008;
i__34496 = G__35009;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__34493);
if(temp__5753__auto__){
var seq__34493__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34493__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__34493__$1);
var G__35010 = cljs.core.chunk_rest(seq__34493__$1);
var G__35011 = c__4638__auto__;
var G__35012 = cljs.core.count(c__4638__auto__);
var G__35013 = (0);
seq__34493 = G__35010;
chunk__34494 = G__35011;
count__34495 = G__35012;
i__34496 = G__35013;
continue;
} else {
var vec__34522 = cljs.core.first(seq__34493__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34522,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34522,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__35014 = cljs.core.next(seq__34493__$1);
var G__35015 = null;
var G__35016 = (0);
var G__35017 = (0);
seq__34493 = G__35014;
chunk__34494 = G__35015;
count__34495 = G__35016;
i__34496 = G__35017;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__34531_35018 = key;
var G__34531_35019__$1 = (((G__34531_35018 instanceof cljs.core.Keyword))?G__34531_35018.fqn:null);
switch (G__34531_35019__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_35021 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4212__auto__ = goog.string.startsWith(ks_35021,"data-");
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return goog.string.startsWith(ks_35021,"aria-");
}
})())){
el.setAttribute(ks_35021,value);
} else {
(el[ks_35021] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__34570){
var map__34578 = p__34570;
var map__34578__$1 = cljs.core.__destructure_map(map__34578);
var props = map__34578__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34578__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__34581 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34581,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34581,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34581,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__34584 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__34584,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__34584;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__34587 = arguments.length;
switch (G__34587) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__34592){
var vec__34594 = p__34592;
var seq__34595 = cljs.core.seq(vec__34594);
var first__34596 = cljs.core.first(seq__34595);
var seq__34595__$1 = cljs.core.next(seq__34595);
var nn = first__34596;
var first__34596__$1 = cljs.core.first(seq__34595__$1);
var seq__34595__$2 = cljs.core.next(seq__34595__$1);
var np = first__34596__$1;
var nc = seq__34595__$2;
var node = vec__34594;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__34597 = nn;
var G__34598 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__34597,G__34598) : create_fn.call(null,G__34597,G__34598));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__34599 = nn;
var G__34600 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__34599,G__34600) : create_fn.call(null,G__34599,G__34600));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__34601 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34601,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34601,(1),null);
var seq__34604_35023 = cljs.core.seq(node_children);
var chunk__34605_35024 = null;
var count__34606_35025 = (0);
var i__34607_35026 = (0);
while(true){
if((i__34607_35026 < count__34606_35025)){
var child_struct_35027 = chunk__34605_35024.cljs$core$IIndexed$_nth$arity$2(null,i__34607_35026);
var children_35028 = shadow.dom.dom_node(child_struct_35027);
if(cljs.core.seq_QMARK_(children_35028)){
var seq__34645_35029 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_35028));
var chunk__34647_35030 = null;
var count__34648_35031 = (0);
var i__34649_35032 = (0);
while(true){
if((i__34649_35032 < count__34648_35031)){
var child_35033 = chunk__34647_35030.cljs$core$IIndexed$_nth$arity$2(null,i__34649_35032);
if(cljs.core.truth_(child_35033)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35033);


var G__35034 = seq__34645_35029;
var G__35035 = chunk__34647_35030;
var G__35036 = count__34648_35031;
var G__35037 = (i__34649_35032 + (1));
seq__34645_35029 = G__35034;
chunk__34647_35030 = G__35035;
count__34648_35031 = G__35036;
i__34649_35032 = G__35037;
continue;
} else {
var G__35038 = seq__34645_35029;
var G__35039 = chunk__34647_35030;
var G__35040 = count__34648_35031;
var G__35041 = (i__34649_35032 + (1));
seq__34645_35029 = G__35038;
chunk__34647_35030 = G__35039;
count__34648_35031 = G__35040;
i__34649_35032 = G__35041;
continue;
}
} else {
var temp__5753__auto___35042 = cljs.core.seq(seq__34645_35029);
if(temp__5753__auto___35042){
var seq__34645_35043__$1 = temp__5753__auto___35042;
if(cljs.core.chunked_seq_QMARK_(seq__34645_35043__$1)){
var c__4638__auto___35044 = cljs.core.chunk_first(seq__34645_35043__$1);
var G__35045 = cljs.core.chunk_rest(seq__34645_35043__$1);
var G__35046 = c__4638__auto___35044;
var G__35047 = cljs.core.count(c__4638__auto___35044);
var G__35048 = (0);
seq__34645_35029 = G__35045;
chunk__34647_35030 = G__35046;
count__34648_35031 = G__35047;
i__34649_35032 = G__35048;
continue;
} else {
var child_35049 = cljs.core.first(seq__34645_35043__$1);
if(cljs.core.truth_(child_35049)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35049);


var G__35050 = cljs.core.next(seq__34645_35043__$1);
var G__35051 = null;
var G__35052 = (0);
var G__35053 = (0);
seq__34645_35029 = G__35050;
chunk__34647_35030 = G__35051;
count__34648_35031 = G__35052;
i__34649_35032 = G__35053;
continue;
} else {
var G__35054 = cljs.core.next(seq__34645_35043__$1);
var G__35055 = null;
var G__35056 = (0);
var G__35057 = (0);
seq__34645_35029 = G__35054;
chunk__34647_35030 = G__35055;
count__34648_35031 = G__35056;
i__34649_35032 = G__35057;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_35028);
}


var G__35058 = seq__34604_35023;
var G__35059 = chunk__34605_35024;
var G__35060 = count__34606_35025;
var G__35061 = (i__34607_35026 + (1));
seq__34604_35023 = G__35058;
chunk__34605_35024 = G__35059;
count__34606_35025 = G__35060;
i__34607_35026 = G__35061;
continue;
} else {
var temp__5753__auto___35062 = cljs.core.seq(seq__34604_35023);
if(temp__5753__auto___35062){
var seq__34604_35063__$1 = temp__5753__auto___35062;
if(cljs.core.chunked_seq_QMARK_(seq__34604_35063__$1)){
var c__4638__auto___35064 = cljs.core.chunk_first(seq__34604_35063__$1);
var G__35065 = cljs.core.chunk_rest(seq__34604_35063__$1);
var G__35066 = c__4638__auto___35064;
var G__35067 = cljs.core.count(c__4638__auto___35064);
var G__35068 = (0);
seq__34604_35023 = G__35065;
chunk__34605_35024 = G__35066;
count__34606_35025 = G__35067;
i__34607_35026 = G__35068;
continue;
} else {
var child_struct_35069 = cljs.core.first(seq__34604_35063__$1);
var children_35070 = shadow.dom.dom_node(child_struct_35069);
if(cljs.core.seq_QMARK_(children_35070)){
var seq__34661_35071 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_35070));
var chunk__34663_35072 = null;
var count__34664_35073 = (0);
var i__34665_35074 = (0);
while(true){
if((i__34665_35074 < count__34664_35073)){
var child_35075 = chunk__34663_35072.cljs$core$IIndexed$_nth$arity$2(null,i__34665_35074);
if(cljs.core.truth_(child_35075)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35075);


var G__35076 = seq__34661_35071;
var G__35077 = chunk__34663_35072;
var G__35078 = count__34664_35073;
var G__35079 = (i__34665_35074 + (1));
seq__34661_35071 = G__35076;
chunk__34663_35072 = G__35077;
count__34664_35073 = G__35078;
i__34665_35074 = G__35079;
continue;
} else {
var G__35080 = seq__34661_35071;
var G__35081 = chunk__34663_35072;
var G__35082 = count__34664_35073;
var G__35083 = (i__34665_35074 + (1));
seq__34661_35071 = G__35080;
chunk__34663_35072 = G__35081;
count__34664_35073 = G__35082;
i__34665_35074 = G__35083;
continue;
}
} else {
var temp__5753__auto___35084__$1 = cljs.core.seq(seq__34661_35071);
if(temp__5753__auto___35084__$1){
var seq__34661_35085__$1 = temp__5753__auto___35084__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34661_35085__$1)){
var c__4638__auto___35086 = cljs.core.chunk_first(seq__34661_35085__$1);
var G__35087 = cljs.core.chunk_rest(seq__34661_35085__$1);
var G__35088 = c__4638__auto___35086;
var G__35089 = cljs.core.count(c__4638__auto___35086);
var G__35090 = (0);
seq__34661_35071 = G__35087;
chunk__34663_35072 = G__35088;
count__34664_35073 = G__35089;
i__34665_35074 = G__35090;
continue;
} else {
var child_35091 = cljs.core.first(seq__34661_35085__$1);
if(cljs.core.truth_(child_35091)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35091);


var G__35092 = cljs.core.next(seq__34661_35085__$1);
var G__35093 = null;
var G__35094 = (0);
var G__35095 = (0);
seq__34661_35071 = G__35092;
chunk__34663_35072 = G__35093;
count__34664_35073 = G__35094;
i__34665_35074 = G__35095;
continue;
} else {
var G__35096 = cljs.core.next(seq__34661_35085__$1);
var G__35097 = null;
var G__35098 = (0);
var G__35099 = (0);
seq__34661_35071 = G__35096;
chunk__34663_35072 = G__35097;
count__34664_35073 = G__35098;
i__34665_35074 = G__35099;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_35070);
}


var G__35100 = cljs.core.next(seq__34604_35063__$1);
var G__35101 = null;
var G__35102 = (0);
var G__35103 = (0);
seq__34604_35023 = G__35100;
chunk__34605_35024 = G__35101;
count__34606_35025 = G__35102;
i__34607_35026 = G__35103;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__34695 = cljs.core.seq(node);
var chunk__34696 = null;
var count__34697 = (0);
var i__34698 = (0);
while(true){
if((i__34698 < count__34697)){
var n = chunk__34696.cljs$core$IIndexed$_nth$arity$2(null,i__34698);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__35104 = seq__34695;
var G__35105 = chunk__34696;
var G__35106 = count__34697;
var G__35107 = (i__34698 + (1));
seq__34695 = G__35104;
chunk__34696 = G__35105;
count__34697 = G__35106;
i__34698 = G__35107;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__34695);
if(temp__5753__auto__){
var seq__34695__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34695__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__34695__$1);
var G__35108 = cljs.core.chunk_rest(seq__34695__$1);
var G__35109 = c__4638__auto__;
var G__35110 = cljs.core.count(c__4638__auto__);
var G__35111 = (0);
seq__34695 = G__35108;
chunk__34696 = G__35109;
count__34697 = G__35110;
i__34698 = G__35111;
continue;
} else {
var n = cljs.core.first(seq__34695__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__35112 = cljs.core.next(seq__34695__$1);
var G__35113 = null;
var G__35114 = (0);
var G__35115 = (0);
seq__34695 = G__35112;
chunk__34696 = G__35113;
count__34697 = G__35114;
i__34698 = G__35115;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__34713 = arguments.length;
switch (G__34713) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__34722 = arguments.length;
switch (G__34722) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__34728 = arguments.length;
switch (G__34728) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4212__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4824__auto__ = [];
var len__4818__auto___35119 = arguments.length;
var i__4819__auto___35120 = (0);
while(true){
if((i__4819__auto___35120 < len__4818__auto___35119)){
args__4824__auto__.push((arguments[i__4819__auto___35120]));

var G__35121 = (i__4819__auto___35120 + (1));
i__4819__auto___35120 = G__35121;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__34742_35122 = cljs.core.seq(nodes);
var chunk__34743_35123 = null;
var count__34744_35124 = (0);
var i__34745_35125 = (0);
while(true){
if((i__34745_35125 < count__34744_35124)){
var node_35126 = chunk__34743_35123.cljs$core$IIndexed$_nth$arity$2(null,i__34745_35125);
fragment.appendChild(shadow.dom._to_dom(node_35126));


var G__35127 = seq__34742_35122;
var G__35128 = chunk__34743_35123;
var G__35129 = count__34744_35124;
var G__35130 = (i__34745_35125 + (1));
seq__34742_35122 = G__35127;
chunk__34743_35123 = G__35128;
count__34744_35124 = G__35129;
i__34745_35125 = G__35130;
continue;
} else {
var temp__5753__auto___35131 = cljs.core.seq(seq__34742_35122);
if(temp__5753__auto___35131){
var seq__34742_35132__$1 = temp__5753__auto___35131;
if(cljs.core.chunked_seq_QMARK_(seq__34742_35132__$1)){
var c__4638__auto___35133 = cljs.core.chunk_first(seq__34742_35132__$1);
var G__35134 = cljs.core.chunk_rest(seq__34742_35132__$1);
var G__35135 = c__4638__auto___35133;
var G__35136 = cljs.core.count(c__4638__auto___35133);
var G__35137 = (0);
seq__34742_35122 = G__35134;
chunk__34743_35123 = G__35135;
count__34744_35124 = G__35136;
i__34745_35125 = G__35137;
continue;
} else {
var node_35138 = cljs.core.first(seq__34742_35132__$1);
fragment.appendChild(shadow.dom._to_dom(node_35138));


var G__35139 = cljs.core.next(seq__34742_35132__$1);
var G__35140 = null;
var G__35141 = (0);
var G__35142 = (0);
seq__34742_35122 = G__35139;
chunk__34743_35123 = G__35140;
count__34744_35124 = G__35141;
i__34745_35125 = G__35142;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq34734){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq34734));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__34761_35143 = cljs.core.seq(scripts);
var chunk__34762_35144 = null;
var count__34763_35145 = (0);
var i__34764_35146 = (0);
while(true){
if((i__34764_35146 < count__34763_35145)){
var vec__34782_35147 = chunk__34762_35144.cljs$core$IIndexed$_nth$arity$2(null,i__34764_35146);
var script_tag_35148 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34782_35147,(0),null);
var script_body_35149 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34782_35147,(1),null);
eval(script_body_35149);


var G__35150 = seq__34761_35143;
var G__35151 = chunk__34762_35144;
var G__35152 = count__34763_35145;
var G__35153 = (i__34764_35146 + (1));
seq__34761_35143 = G__35150;
chunk__34762_35144 = G__35151;
count__34763_35145 = G__35152;
i__34764_35146 = G__35153;
continue;
} else {
var temp__5753__auto___35154 = cljs.core.seq(seq__34761_35143);
if(temp__5753__auto___35154){
var seq__34761_35155__$1 = temp__5753__auto___35154;
if(cljs.core.chunked_seq_QMARK_(seq__34761_35155__$1)){
var c__4638__auto___35156 = cljs.core.chunk_first(seq__34761_35155__$1);
var G__35157 = cljs.core.chunk_rest(seq__34761_35155__$1);
var G__35158 = c__4638__auto___35156;
var G__35159 = cljs.core.count(c__4638__auto___35156);
var G__35160 = (0);
seq__34761_35143 = G__35157;
chunk__34762_35144 = G__35158;
count__34763_35145 = G__35159;
i__34764_35146 = G__35160;
continue;
} else {
var vec__34787_35161 = cljs.core.first(seq__34761_35155__$1);
var script_tag_35162 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34787_35161,(0),null);
var script_body_35163 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34787_35161,(1),null);
eval(script_body_35163);


var G__35164 = cljs.core.next(seq__34761_35155__$1);
var G__35165 = null;
var G__35166 = (0);
var G__35167 = (0);
seq__34761_35143 = G__35164;
chunk__34762_35144 = G__35165;
count__34763_35145 = G__35166;
i__34764_35146 = G__35167;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__34793){
var vec__34794 = p__34793;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34794,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34794,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__34807 = arguments.length;
switch (G__34807) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__34830 = cljs.core.seq(style_keys);
var chunk__34831 = null;
var count__34832 = (0);
var i__34833 = (0);
while(true){
if((i__34833 < count__34832)){
var it = chunk__34831.cljs$core$IIndexed$_nth$arity$2(null,i__34833);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__35171 = seq__34830;
var G__35172 = chunk__34831;
var G__35173 = count__34832;
var G__35174 = (i__34833 + (1));
seq__34830 = G__35171;
chunk__34831 = G__35172;
count__34832 = G__35173;
i__34833 = G__35174;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__34830);
if(temp__5753__auto__){
var seq__34830__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34830__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__34830__$1);
var G__35175 = cljs.core.chunk_rest(seq__34830__$1);
var G__35176 = c__4638__auto__;
var G__35177 = cljs.core.count(c__4638__auto__);
var G__35178 = (0);
seq__34830 = G__35175;
chunk__34831 = G__35176;
count__34832 = G__35177;
i__34833 = G__35178;
continue;
} else {
var it = cljs.core.first(seq__34830__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__35179 = cljs.core.next(seq__34830__$1);
var G__35180 = null;
var G__35181 = (0);
var G__35182 = (0);
seq__34830 = G__35179;
chunk__34831 = G__35180;
count__34832 = G__35181;
i__34833 = G__35182;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4461__auto__,k__4462__auto__){
var self__ = this;
var this__4461__auto____$1 = this;
return this__4461__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4462__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4463__auto__,k34850,else__4464__auto__){
var self__ = this;
var this__4463__auto____$1 = this;
var G__34861 = k34850;
var G__34861__$1 = (((G__34861 instanceof cljs.core.Keyword))?G__34861.fqn:null);
switch (G__34861__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k34850,else__4464__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4481__auto__,f__4482__auto__,init__4483__auto__){
var self__ = this;
var this__4481__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4484__auto__,p__34866){
var vec__34868 = p__34866;
var k__4485__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34868,(0),null);
var v__4486__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34868,(1),null);
return (f__4482__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4482__auto__.cljs$core$IFn$_invoke$arity$3(ret__4484__auto__,k__4485__auto__,v__4486__auto__) : f__4482__auto__.call(null,ret__4484__auto__,k__4485__auto__,v__4486__auto__));
}),init__4483__auto__,this__4481__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4476__auto__,writer__4477__auto__,opts__4478__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
var pr_pair__4479__auto__ = (function (keyval__4480__auto__){
return cljs.core.pr_sequential_writer(writer__4477__auto__,cljs.core.pr_writer,""," ","",opts__4478__auto__,keyval__4480__auto__);
});
return cljs.core.pr_sequential_writer(writer__4477__auto__,pr_pair__4479__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4478__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__34849){
var self__ = this;
var G__34849__$1 = this;
return (new cljs.core.RecordIter((0),G__34849__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4459__auto__){
var self__ = this;
var this__4459__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4456__auto__){
var self__ = this;
var this__4456__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4465__auto__){
var self__ = this;
var this__4465__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4457__auto__){
var self__ = this;
var this__4457__auto____$1 = this;
var h__4319__auto__ = self__.__hash;
if((!((h__4319__auto__ == null)))){
return h__4319__auto__;
} else {
var h__4319__auto____$1 = (function (coll__4458__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4458__auto__));
})(this__4457__auto____$1);
(self__.__hash = h__4319__auto____$1);

return h__4319__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this34851,other34852){
var self__ = this;
var this34851__$1 = this;
return (((!((other34852 == null)))) && ((((this34851__$1.constructor === other34852.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34851__$1.x,other34852.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34851__$1.y,other34852.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34851__$1.__extmap,other34852.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4471__auto__,k__4472__auto__){
var self__ = this;
var this__4471__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4472__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4471__auto____$1),self__.__meta),k__4472__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4472__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4468__auto__,k34850){
var self__ = this;
var this__4468__auto____$1 = this;
var G__34872 = k34850;
var G__34872__$1 = (((G__34872 instanceof cljs.core.Keyword))?G__34872.fqn:null);
switch (G__34872__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k34850);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4469__auto__,k__4470__auto__,G__34849){
var self__ = this;
var this__4469__auto____$1 = this;
var pred__34873 = cljs.core.keyword_identical_QMARK_;
var expr__34874 = k__4470__auto__;
if(cljs.core.truth_((pred__34873.cljs$core$IFn$_invoke$arity$2 ? pred__34873.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__34874) : pred__34873.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__34874)))){
return (new shadow.dom.Coordinate(G__34849,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__34873.cljs$core$IFn$_invoke$arity$2 ? pred__34873.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__34874) : pred__34873.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__34874)))){
return (new shadow.dom.Coordinate(self__.x,G__34849,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4470__auto__,G__34849),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4474__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4460__auto__,G__34849){
var self__ = this;
var this__4460__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__34849,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4466__auto__,entry__4467__auto__){
var self__ = this;
var this__4466__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4467__auto__)){
return this__4466__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4467__auto__,(0)),cljs.core._nth(entry__4467__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4466__auto____$1,entry__4467__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4505__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4505__auto__,writer__4506__auto__){
return cljs.core._write(writer__4506__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__34853){
var extmap__4501__auto__ = (function (){var G__34876 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__34853,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__34853)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__34876);
} else {
return G__34876;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__34853),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__34853),null,cljs.core.not_empty(extmap__4501__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4461__auto__,k__4462__auto__){
var self__ = this;
var this__4461__auto____$1 = this;
return this__4461__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4462__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4463__auto__,k34878,else__4464__auto__){
var self__ = this;
var this__4463__auto____$1 = this;
var G__34882 = k34878;
var G__34882__$1 = (((G__34882 instanceof cljs.core.Keyword))?G__34882.fqn:null);
switch (G__34882__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k34878,else__4464__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4481__auto__,f__4482__auto__,init__4483__auto__){
var self__ = this;
var this__4481__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4484__auto__,p__34883){
var vec__34884 = p__34883;
var k__4485__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34884,(0),null);
var v__4486__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34884,(1),null);
return (f__4482__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4482__auto__.cljs$core$IFn$_invoke$arity$3(ret__4484__auto__,k__4485__auto__,v__4486__auto__) : f__4482__auto__.call(null,ret__4484__auto__,k__4485__auto__,v__4486__auto__));
}),init__4483__auto__,this__4481__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4476__auto__,writer__4477__auto__,opts__4478__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
var pr_pair__4479__auto__ = (function (keyval__4480__auto__){
return cljs.core.pr_sequential_writer(writer__4477__auto__,cljs.core.pr_writer,""," ","",opts__4478__auto__,keyval__4480__auto__);
});
return cljs.core.pr_sequential_writer(writer__4477__auto__,pr_pair__4479__auto__,"#shadow.dom.Size{",", ","}",opts__4478__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__34877){
var self__ = this;
var G__34877__$1 = this;
return (new cljs.core.RecordIter((0),G__34877__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4459__auto__){
var self__ = this;
var this__4459__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4456__auto__){
var self__ = this;
var this__4456__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4465__auto__){
var self__ = this;
var this__4465__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4457__auto__){
var self__ = this;
var this__4457__auto____$1 = this;
var h__4319__auto__ = self__.__hash;
if((!((h__4319__auto__ == null)))){
return h__4319__auto__;
} else {
var h__4319__auto____$1 = (function (coll__4458__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4458__auto__));
})(this__4457__auto____$1);
(self__.__hash = h__4319__auto____$1);

return h__4319__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this34879,other34880){
var self__ = this;
var this34879__$1 = this;
return (((!((other34880 == null)))) && ((((this34879__$1.constructor === other34880.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34879__$1.w,other34880.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34879__$1.h,other34880.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34879__$1.__extmap,other34880.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4471__auto__,k__4472__auto__){
var self__ = this;
var this__4471__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4472__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4471__auto____$1),self__.__meta),k__4472__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4472__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4468__auto__,k34878){
var self__ = this;
var this__4468__auto____$1 = this;
var G__34887 = k34878;
var G__34887__$1 = (((G__34887 instanceof cljs.core.Keyword))?G__34887.fqn:null);
switch (G__34887__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k34878);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4469__auto__,k__4470__auto__,G__34877){
var self__ = this;
var this__4469__auto____$1 = this;
var pred__34888 = cljs.core.keyword_identical_QMARK_;
var expr__34889 = k__4470__auto__;
if(cljs.core.truth_((pred__34888.cljs$core$IFn$_invoke$arity$2 ? pred__34888.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__34889) : pred__34888.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__34889)))){
return (new shadow.dom.Size(G__34877,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__34888.cljs$core$IFn$_invoke$arity$2 ? pred__34888.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__34889) : pred__34888.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__34889)))){
return (new shadow.dom.Size(self__.w,G__34877,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4470__auto__,G__34877),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4474__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4460__auto__,G__34877){
var self__ = this;
var this__4460__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__34877,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4466__auto__,entry__4467__auto__){
var self__ = this;
var this__4466__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4467__auto__)){
return this__4466__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4467__auto__,(0)),cljs.core._nth(entry__4467__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4466__auto____$1,entry__4467__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4505__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4505__auto__,writer__4506__auto__){
return cljs.core._write(writer__4506__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__34881){
var extmap__4501__auto__ = (function (){var G__34891 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__34881,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__34881)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__34891);
} else {
return G__34891;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__34881),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__34881),null,cljs.core.not_empty(extmap__4501__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4692__auto__ = opts;
var l__4693__auto__ = a__4692__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4693__auto__)){
var G__35205 = (i + (1));
var G__35206 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__35205;
ret = G__35206;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__34896){
var vec__34897 = p__34896;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34897,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34897,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__34901 = arguments.length;
switch (G__34901) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5751__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5751__auto__)){
var child = temp__5751__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__35211 = ps;
var G__35212 = (i + (1));
el__$1 = G__35211;
i = G__35212;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__34902 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34902,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34902,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34902,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__34905_35213 = cljs.core.seq(props);
var chunk__34906_35214 = null;
var count__34907_35215 = (0);
var i__34908_35216 = (0);
while(true){
if((i__34908_35216 < count__34907_35215)){
var vec__34915_35222 = chunk__34906_35214.cljs$core$IIndexed$_nth$arity$2(null,i__34908_35216);
var k_35223 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34915_35222,(0),null);
var v_35224 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34915_35222,(1),null);
el.setAttributeNS((function (){var temp__5753__auto__ = cljs.core.namespace(k_35223);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_35223),v_35224);


var G__35228 = seq__34905_35213;
var G__35229 = chunk__34906_35214;
var G__35230 = count__34907_35215;
var G__35231 = (i__34908_35216 + (1));
seq__34905_35213 = G__35228;
chunk__34906_35214 = G__35229;
count__34907_35215 = G__35230;
i__34908_35216 = G__35231;
continue;
} else {
var temp__5753__auto___35232 = cljs.core.seq(seq__34905_35213);
if(temp__5753__auto___35232){
var seq__34905_35233__$1 = temp__5753__auto___35232;
if(cljs.core.chunked_seq_QMARK_(seq__34905_35233__$1)){
var c__4638__auto___35234 = cljs.core.chunk_first(seq__34905_35233__$1);
var G__35235 = cljs.core.chunk_rest(seq__34905_35233__$1);
var G__35236 = c__4638__auto___35234;
var G__35237 = cljs.core.count(c__4638__auto___35234);
var G__35238 = (0);
seq__34905_35213 = G__35235;
chunk__34906_35214 = G__35236;
count__34907_35215 = G__35237;
i__34908_35216 = G__35238;
continue;
} else {
var vec__34918_35239 = cljs.core.first(seq__34905_35233__$1);
var k_35240 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34918_35239,(0),null);
var v_35241 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34918_35239,(1),null);
el.setAttributeNS((function (){var temp__5753__auto____$1 = cljs.core.namespace(k_35240);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ns = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_35240),v_35241);


var G__35242 = cljs.core.next(seq__34905_35233__$1);
var G__35243 = null;
var G__35244 = (0);
var G__35245 = (0);
seq__34905_35213 = G__35242;
chunk__34906_35214 = G__35243;
count__34907_35215 = G__35244;
i__34908_35216 = G__35245;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__34922 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34922,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34922,(1),null);
var seq__34925_35250 = cljs.core.seq(node_children);
var chunk__34927_35251 = null;
var count__34928_35252 = (0);
var i__34929_35253 = (0);
while(true){
if((i__34929_35253 < count__34928_35252)){
var child_struct_35254 = chunk__34927_35251.cljs$core$IIndexed$_nth$arity$2(null,i__34929_35253);
if((!((child_struct_35254 == null)))){
if(typeof child_struct_35254 === 'string'){
var text_35258 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_35258),child_struct_35254].join(''));
} else {
var children_35259 = shadow.dom.svg_node(child_struct_35254);
if(cljs.core.seq_QMARK_(children_35259)){
var seq__34943_35264 = cljs.core.seq(children_35259);
var chunk__34945_35265 = null;
var count__34946_35266 = (0);
var i__34947_35267 = (0);
while(true){
if((i__34947_35267 < count__34946_35266)){
var child_35268 = chunk__34945_35265.cljs$core$IIndexed$_nth$arity$2(null,i__34947_35267);
if(cljs.core.truth_(child_35268)){
node.appendChild(child_35268);


var G__35269 = seq__34943_35264;
var G__35270 = chunk__34945_35265;
var G__35271 = count__34946_35266;
var G__35272 = (i__34947_35267 + (1));
seq__34943_35264 = G__35269;
chunk__34945_35265 = G__35270;
count__34946_35266 = G__35271;
i__34947_35267 = G__35272;
continue;
} else {
var G__35273 = seq__34943_35264;
var G__35274 = chunk__34945_35265;
var G__35275 = count__34946_35266;
var G__35276 = (i__34947_35267 + (1));
seq__34943_35264 = G__35273;
chunk__34945_35265 = G__35274;
count__34946_35266 = G__35275;
i__34947_35267 = G__35276;
continue;
}
} else {
var temp__5753__auto___35277 = cljs.core.seq(seq__34943_35264);
if(temp__5753__auto___35277){
var seq__34943_35278__$1 = temp__5753__auto___35277;
if(cljs.core.chunked_seq_QMARK_(seq__34943_35278__$1)){
var c__4638__auto___35279 = cljs.core.chunk_first(seq__34943_35278__$1);
var G__35280 = cljs.core.chunk_rest(seq__34943_35278__$1);
var G__35281 = c__4638__auto___35279;
var G__35282 = cljs.core.count(c__4638__auto___35279);
var G__35283 = (0);
seq__34943_35264 = G__35280;
chunk__34945_35265 = G__35281;
count__34946_35266 = G__35282;
i__34947_35267 = G__35283;
continue;
} else {
var child_35284 = cljs.core.first(seq__34943_35278__$1);
if(cljs.core.truth_(child_35284)){
node.appendChild(child_35284);


var G__35285 = cljs.core.next(seq__34943_35278__$1);
var G__35286 = null;
var G__35287 = (0);
var G__35288 = (0);
seq__34943_35264 = G__35285;
chunk__34945_35265 = G__35286;
count__34946_35266 = G__35287;
i__34947_35267 = G__35288;
continue;
} else {
var G__35289 = cljs.core.next(seq__34943_35278__$1);
var G__35290 = null;
var G__35291 = (0);
var G__35292 = (0);
seq__34943_35264 = G__35289;
chunk__34945_35265 = G__35290;
count__34946_35266 = G__35291;
i__34947_35267 = G__35292;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_35259);
}
}


var G__35293 = seq__34925_35250;
var G__35294 = chunk__34927_35251;
var G__35295 = count__34928_35252;
var G__35296 = (i__34929_35253 + (1));
seq__34925_35250 = G__35293;
chunk__34927_35251 = G__35294;
count__34928_35252 = G__35295;
i__34929_35253 = G__35296;
continue;
} else {
var G__35297 = seq__34925_35250;
var G__35298 = chunk__34927_35251;
var G__35299 = count__34928_35252;
var G__35300 = (i__34929_35253 + (1));
seq__34925_35250 = G__35297;
chunk__34927_35251 = G__35298;
count__34928_35252 = G__35299;
i__34929_35253 = G__35300;
continue;
}
} else {
var temp__5753__auto___35301 = cljs.core.seq(seq__34925_35250);
if(temp__5753__auto___35301){
var seq__34925_35302__$1 = temp__5753__auto___35301;
if(cljs.core.chunked_seq_QMARK_(seq__34925_35302__$1)){
var c__4638__auto___35303 = cljs.core.chunk_first(seq__34925_35302__$1);
var G__35304 = cljs.core.chunk_rest(seq__34925_35302__$1);
var G__35305 = c__4638__auto___35303;
var G__35306 = cljs.core.count(c__4638__auto___35303);
var G__35307 = (0);
seq__34925_35250 = G__35304;
chunk__34927_35251 = G__35305;
count__34928_35252 = G__35306;
i__34929_35253 = G__35307;
continue;
} else {
var child_struct_35308 = cljs.core.first(seq__34925_35302__$1);
if((!((child_struct_35308 == null)))){
if(typeof child_struct_35308 === 'string'){
var text_35309 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_35309),child_struct_35308].join(''));
} else {
var children_35310 = shadow.dom.svg_node(child_struct_35308);
if(cljs.core.seq_QMARK_(children_35310)){
var seq__34949_35311 = cljs.core.seq(children_35310);
var chunk__34951_35312 = null;
var count__34952_35313 = (0);
var i__34953_35314 = (0);
while(true){
if((i__34953_35314 < count__34952_35313)){
var child_35315 = chunk__34951_35312.cljs$core$IIndexed$_nth$arity$2(null,i__34953_35314);
if(cljs.core.truth_(child_35315)){
node.appendChild(child_35315);


var G__35316 = seq__34949_35311;
var G__35317 = chunk__34951_35312;
var G__35318 = count__34952_35313;
var G__35319 = (i__34953_35314 + (1));
seq__34949_35311 = G__35316;
chunk__34951_35312 = G__35317;
count__34952_35313 = G__35318;
i__34953_35314 = G__35319;
continue;
} else {
var G__35320 = seq__34949_35311;
var G__35321 = chunk__34951_35312;
var G__35322 = count__34952_35313;
var G__35323 = (i__34953_35314 + (1));
seq__34949_35311 = G__35320;
chunk__34951_35312 = G__35321;
count__34952_35313 = G__35322;
i__34953_35314 = G__35323;
continue;
}
} else {
var temp__5753__auto___35324__$1 = cljs.core.seq(seq__34949_35311);
if(temp__5753__auto___35324__$1){
var seq__34949_35325__$1 = temp__5753__auto___35324__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34949_35325__$1)){
var c__4638__auto___35329 = cljs.core.chunk_first(seq__34949_35325__$1);
var G__35330 = cljs.core.chunk_rest(seq__34949_35325__$1);
var G__35331 = c__4638__auto___35329;
var G__35332 = cljs.core.count(c__4638__auto___35329);
var G__35333 = (0);
seq__34949_35311 = G__35330;
chunk__34951_35312 = G__35331;
count__34952_35313 = G__35332;
i__34953_35314 = G__35333;
continue;
} else {
var child_35334 = cljs.core.first(seq__34949_35325__$1);
if(cljs.core.truth_(child_35334)){
node.appendChild(child_35334);


var G__35335 = cljs.core.next(seq__34949_35325__$1);
var G__35336 = null;
var G__35337 = (0);
var G__35338 = (0);
seq__34949_35311 = G__35335;
chunk__34951_35312 = G__35336;
count__34952_35313 = G__35337;
i__34953_35314 = G__35338;
continue;
} else {
var G__35339 = cljs.core.next(seq__34949_35325__$1);
var G__35340 = null;
var G__35341 = (0);
var G__35342 = (0);
seq__34949_35311 = G__35339;
chunk__34951_35312 = G__35340;
count__34952_35313 = G__35341;
i__34953_35314 = G__35342;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_35310);
}
}


var G__35343 = cljs.core.next(seq__34925_35302__$1);
var G__35344 = null;
var G__35345 = (0);
var G__35346 = (0);
seq__34925_35250 = G__35343;
chunk__34927_35251 = G__35344;
count__34928_35252 = G__35345;
i__34929_35253 = G__35346;
continue;
} else {
var G__35347 = cljs.core.next(seq__34925_35302__$1);
var G__35348 = null;
var G__35349 = (0);
var G__35350 = (0);
seq__34925_35250 = G__35347;
chunk__34927_35251 = G__35348;
count__34928_35252 = G__35349;
i__34929_35253 = G__35350;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4824__auto__ = [];
var len__4818__auto___35351 = arguments.length;
var i__4819__auto___35352 = (0);
while(true){
if((i__4819__auto___35352 < len__4818__auto___35351)){
args__4824__auto__.push((arguments[i__4819__auto___35352]));

var G__35353 = (i__4819__auto___35352 + (1));
i__4819__auto___35352 = G__35353;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq34955){
var G__34956 = cljs.core.first(seq34955);
var seq34955__$1 = cljs.core.next(seq34955);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34956,seq34955__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__34958 = arguments.length;
switch (G__34958) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4210__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4210__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4210__auto__;
}
})())){
var c__32626__auto___35362 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32627__auto__ = (function (){var switch__32581__auto__ = (function (state_34963){
var state_val_34964 = (state_34963[(1)]);
if((state_val_34964 === (1))){
var state_34963__$1 = state_34963;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34963__$1,(2),once_or_cleanup);
} else {
if((state_val_34964 === (2))){
var inst_34960 = (state_34963[(2)]);
var inst_34961 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_34963__$1 = (function (){var statearr_34965 = state_34963;
(statearr_34965[(7)] = inst_34960);

return statearr_34965;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34963__$1,inst_34961);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__32582__auto__ = null;
var shadow$dom$state_machine__32582__auto____0 = (function (){
var statearr_34966 = [null,null,null,null,null,null,null,null];
(statearr_34966[(0)] = shadow$dom$state_machine__32582__auto__);

(statearr_34966[(1)] = (1));

return statearr_34966;
});
var shadow$dom$state_machine__32582__auto____1 = (function (state_34963){
while(true){
var ret_value__32583__auto__ = (function (){try{while(true){
var result__32584__auto__ = switch__32581__auto__(state_34963);
if(cljs.core.keyword_identical_QMARK_(result__32584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32584__auto__;
}
break;
}
}catch (e34967){var ex__32585__auto__ = e34967;
var statearr_34968_35363 = state_34963;
(statearr_34968_35363[(2)] = ex__32585__auto__);


if(cljs.core.seq((state_34963[(4)]))){
var statearr_34969_35364 = state_34963;
(statearr_34969_35364[(1)] = cljs.core.first((state_34963[(4)])));

} else {
throw ex__32585__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35365 = state_34963;
state_34963 = G__35365;
continue;
} else {
return ret_value__32583__auto__;
}
break;
}
});
shadow$dom$state_machine__32582__auto__ = function(state_34963){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__32582__auto____0.call(this);
case 1:
return shadow$dom$state_machine__32582__auto____1.call(this,state_34963);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__32582__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__32582__auto____0;
shadow$dom$state_machine__32582__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__32582__auto____1;
return shadow$dom$state_machine__32582__auto__;
})()
})();
var state__32628__auto__ = (function (){var statearr_34970 = f__32627__auto__();
(statearr_34970[(6)] = c__32626__auto___35362);

return statearr_34970;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32628__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
