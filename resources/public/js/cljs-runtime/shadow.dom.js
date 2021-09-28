goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_34166 = (function (this$){
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
return shadow$dom$IElement$_to_dom$dyn_34166(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_34168 = (function (this$){
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
return shadow$dom$SVGElement$_to_svg$dyn_34168(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__32738 = coll;
var G__32739 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__32738,G__32739) : shadow.dom.lazy_native_coll_seq.call(null,G__32738,G__32739));
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
var G__32766 = arguments.length;
switch (G__32766) {
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
var G__32776 = arguments.length;
switch (G__32776) {
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
var G__32790 = arguments.length;
switch (G__32790) {
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
var G__32800 = arguments.length;
switch (G__32800) {
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
var G__32811 = arguments.length;
switch (G__32811) {
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
var G__32829 = arguments.length;
switch (G__32829) {
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
}catch (e32860){if((e32860 instanceof Object)){
var e = e32860;
return console.log("didnt support attachEvent",el,e);
} else {
throw e32860;

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
var seq__32898 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__32899 = null;
var count__32900 = (0);
var i__32901 = (0);
while(true){
if((i__32901 < count__32900)){
var el = chunk__32899.cljs$core$IIndexed$_nth$arity$2(null,i__32901);
var handler_34183__$1 = ((function (seq__32898,chunk__32899,count__32900,i__32901,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__32898,chunk__32899,count__32900,i__32901,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_34183__$1);


var G__34184 = seq__32898;
var G__34185 = chunk__32899;
var G__34186 = count__32900;
var G__34187 = (i__32901 + (1));
seq__32898 = G__34184;
chunk__32899 = G__34185;
count__32900 = G__34186;
i__32901 = G__34187;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__32898);
if(temp__5753__auto__){
var seq__32898__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32898__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__32898__$1);
var G__34188 = cljs.core.chunk_rest(seq__32898__$1);
var G__34189 = c__4638__auto__;
var G__34190 = cljs.core.count(c__4638__auto__);
var G__34191 = (0);
seq__32898 = G__34188;
chunk__32899 = G__34189;
count__32900 = G__34190;
i__32901 = G__34191;
continue;
} else {
var el = cljs.core.first(seq__32898__$1);
var handler_34192__$1 = ((function (seq__32898,chunk__32899,count__32900,i__32901,el,seq__32898__$1,temp__5753__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__32898,chunk__32899,count__32900,i__32901,el,seq__32898__$1,temp__5753__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_34192__$1);


var G__34193 = cljs.core.next(seq__32898__$1);
var G__34194 = null;
var G__34195 = (0);
var G__34196 = (0);
seq__32898 = G__34193;
chunk__32899 = G__34194;
count__32900 = G__34195;
i__32901 = G__34196;
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
var G__32920 = arguments.length;
switch (G__32920) {
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
var seq__32942 = cljs.core.seq(events);
var chunk__32943 = null;
var count__32944 = (0);
var i__32945 = (0);
while(true){
if((i__32945 < count__32944)){
var vec__32964 = chunk__32943.cljs$core$IIndexed$_nth$arity$2(null,i__32945);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32964,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32964,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__34198 = seq__32942;
var G__34199 = chunk__32943;
var G__34200 = count__32944;
var G__34201 = (i__32945 + (1));
seq__32942 = G__34198;
chunk__32943 = G__34199;
count__32944 = G__34200;
i__32945 = G__34201;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__32942);
if(temp__5753__auto__){
var seq__32942__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32942__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__32942__$1);
var G__34202 = cljs.core.chunk_rest(seq__32942__$1);
var G__34203 = c__4638__auto__;
var G__34204 = cljs.core.count(c__4638__auto__);
var G__34205 = (0);
seq__32942 = G__34202;
chunk__32943 = G__34203;
count__32944 = G__34204;
i__32945 = G__34205;
continue;
} else {
var vec__32971 = cljs.core.first(seq__32942__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32971,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32971,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__34206 = cljs.core.next(seq__32942__$1);
var G__34207 = null;
var G__34208 = (0);
var G__34209 = (0);
seq__32942 = G__34206;
chunk__32943 = G__34207;
count__32944 = G__34208;
i__32945 = G__34209;
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
var seq__32979 = cljs.core.seq(styles);
var chunk__32980 = null;
var count__32981 = (0);
var i__32982 = (0);
while(true){
if((i__32982 < count__32981)){
var vec__32995 = chunk__32980.cljs$core$IIndexed$_nth$arity$2(null,i__32982);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32995,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32995,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__34210 = seq__32979;
var G__34211 = chunk__32980;
var G__34212 = count__32981;
var G__34213 = (i__32982 + (1));
seq__32979 = G__34210;
chunk__32980 = G__34211;
count__32981 = G__34212;
i__32982 = G__34213;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__32979);
if(temp__5753__auto__){
var seq__32979__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32979__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__32979__$1);
var G__34214 = cljs.core.chunk_rest(seq__32979__$1);
var G__34215 = c__4638__auto__;
var G__34216 = cljs.core.count(c__4638__auto__);
var G__34217 = (0);
seq__32979 = G__34214;
chunk__32980 = G__34215;
count__32981 = G__34216;
i__32982 = G__34217;
continue;
} else {
var vec__33002 = cljs.core.first(seq__32979__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33002,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33002,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__34218 = cljs.core.next(seq__32979__$1);
var G__34219 = null;
var G__34220 = (0);
var G__34221 = (0);
seq__32979 = G__34218;
chunk__32980 = G__34219;
count__32981 = G__34220;
i__32982 = G__34221;
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
var G__33013_34223 = key;
var G__33013_34224__$1 = (((G__33013_34223 instanceof cljs.core.Keyword))?G__33013_34223.fqn:null);
switch (G__33013_34224__$1) {
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
var ks_34232 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4212__auto__ = goog.string.startsWith(ks_34232,"data-");
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return goog.string.startsWith(ks_34232,"aria-");
}
})())){
el.setAttribute(ks_34232,value);
} else {
(el[ks_34232] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__33072){
var map__33074 = p__33072;
var map__33074__$1 = cljs.core.__destructure_map(map__33074);
var props = map__33074__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33074__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__33075 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33075,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33075,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33075,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__33082 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__33082,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__33082;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__33091 = arguments.length;
switch (G__33091) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__33114){
var vec__33117 = p__33114;
var seq__33118 = cljs.core.seq(vec__33117);
var first__33119 = cljs.core.first(seq__33118);
var seq__33118__$1 = cljs.core.next(seq__33118);
var nn = first__33119;
var first__33119__$1 = cljs.core.first(seq__33118__$1);
var seq__33118__$2 = cljs.core.next(seq__33118__$1);
var np = first__33119__$1;
var nc = seq__33118__$2;
var node = vec__33117;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__33122 = nn;
var G__33123 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__33122,G__33123) : create_fn.call(null,G__33122,G__33123));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__33125 = nn;
var G__33126 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__33125,G__33126) : create_fn.call(null,G__33125,G__33126));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__33140 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33140,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33140,(1),null);
var seq__33146_34243 = cljs.core.seq(node_children);
var chunk__33147_34244 = null;
var count__33148_34245 = (0);
var i__33149_34246 = (0);
while(true){
if((i__33149_34246 < count__33148_34245)){
var child_struct_34247 = chunk__33147_34244.cljs$core$IIndexed$_nth$arity$2(null,i__33149_34246);
var children_34248 = shadow.dom.dom_node(child_struct_34247);
if(cljs.core.seq_QMARK_(children_34248)){
var seq__33222_34250 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_34248));
var chunk__33224_34251 = null;
var count__33225_34252 = (0);
var i__33226_34253 = (0);
while(true){
if((i__33226_34253 < count__33225_34252)){
var child_34254 = chunk__33224_34251.cljs$core$IIndexed$_nth$arity$2(null,i__33226_34253);
if(cljs.core.truth_(child_34254)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34254);


var G__34255 = seq__33222_34250;
var G__34256 = chunk__33224_34251;
var G__34257 = count__33225_34252;
var G__34258 = (i__33226_34253 + (1));
seq__33222_34250 = G__34255;
chunk__33224_34251 = G__34256;
count__33225_34252 = G__34257;
i__33226_34253 = G__34258;
continue;
} else {
var G__34259 = seq__33222_34250;
var G__34260 = chunk__33224_34251;
var G__34261 = count__33225_34252;
var G__34262 = (i__33226_34253 + (1));
seq__33222_34250 = G__34259;
chunk__33224_34251 = G__34260;
count__33225_34252 = G__34261;
i__33226_34253 = G__34262;
continue;
}
} else {
var temp__5753__auto___34263 = cljs.core.seq(seq__33222_34250);
if(temp__5753__auto___34263){
var seq__33222_34264__$1 = temp__5753__auto___34263;
if(cljs.core.chunked_seq_QMARK_(seq__33222_34264__$1)){
var c__4638__auto___34265 = cljs.core.chunk_first(seq__33222_34264__$1);
var G__34266 = cljs.core.chunk_rest(seq__33222_34264__$1);
var G__34267 = c__4638__auto___34265;
var G__34268 = cljs.core.count(c__4638__auto___34265);
var G__34269 = (0);
seq__33222_34250 = G__34266;
chunk__33224_34251 = G__34267;
count__33225_34252 = G__34268;
i__33226_34253 = G__34269;
continue;
} else {
var child_34270 = cljs.core.first(seq__33222_34264__$1);
if(cljs.core.truth_(child_34270)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34270);


var G__34271 = cljs.core.next(seq__33222_34264__$1);
var G__34272 = null;
var G__34273 = (0);
var G__34274 = (0);
seq__33222_34250 = G__34271;
chunk__33224_34251 = G__34272;
count__33225_34252 = G__34273;
i__33226_34253 = G__34274;
continue;
} else {
var G__34275 = cljs.core.next(seq__33222_34264__$1);
var G__34276 = null;
var G__34277 = (0);
var G__34278 = (0);
seq__33222_34250 = G__34275;
chunk__33224_34251 = G__34276;
count__33225_34252 = G__34277;
i__33226_34253 = G__34278;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_34248);
}


var G__34279 = seq__33146_34243;
var G__34280 = chunk__33147_34244;
var G__34281 = count__33148_34245;
var G__34282 = (i__33149_34246 + (1));
seq__33146_34243 = G__34279;
chunk__33147_34244 = G__34280;
count__33148_34245 = G__34281;
i__33149_34246 = G__34282;
continue;
} else {
var temp__5753__auto___34283 = cljs.core.seq(seq__33146_34243);
if(temp__5753__auto___34283){
var seq__33146_34284__$1 = temp__5753__auto___34283;
if(cljs.core.chunked_seq_QMARK_(seq__33146_34284__$1)){
var c__4638__auto___34285 = cljs.core.chunk_first(seq__33146_34284__$1);
var G__34286 = cljs.core.chunk_rest(seq__33146_34284__$1);
var G__34287 = c__4638__auto___34285;
var G__34288 = cljs.core.count(c__4638__auto___34285);
var G__34289 = (0);
seq__33146_34243 = G__34286;
chunk__33147_34244 = G__34287;
count__33148_34245 = G__34288;
i__33149_34246 = G__34289;
continue;
} else {
var child_struct_34290 = cljs.core.first(seq__33146_34284__$1);
var children_34291 = shadow.dom.dom_node(child_struct_34290);
if(cljs.core.seq_QMARK_(children_34291)){
var seq__33262_34292 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_34291));
var chunk__33264_34293 = null;
var count__33265_34294 = (0);
var i__33266_34295 = (0);
while(true){
if((i__33266_34295 < count__33265_34294)){
var child_34296 = chunk__33264_34293.cljs$core$IIndexed$_nth$arity$2(null,i__33266_34295);
if(cljs.core.truth_(child_34296)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34296);


var G__34297 = seq__33262_34292;
var G__34298 = chunk__33264_34293;
var G__34299 = count__33265_34294;
var G__34300 = (i__33266_34295 + (1));
seq__33262_34292 = G__34297;
chunk__33264_34293 = G__34298;
count__33265_34294 = G__34299;
i__33266_34295 = G__34300;
continue;
} else {
var G__34301 = seq__33262_34292;
var G__34302 = chunk__33264_34293;
var G__34303 = count__33265_34294;
var G__34304 = (i__33266_34295 + (1));
seq__33262_34292 = G__34301;
chunk__33264_34293 = G__34302;
count__33265_34294 = G__34303;
i__33266_34295 = G__34304;
continue;
}
} else {
var temp__5753__auto___34305__$1 = cljs.core.seq(seq__33262_34292);
if(temp__5753__auto___34305__$1){
var seq__33262_34306__$1 = temp__5753__auto___34305__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33262_34306__$1)){
var c__4638__auto___34308 = cljs.core.chunk_first(seq__33262_34306__$1);
var G__34309 = cljs.core.chunk_rest(seq__33262_34306__$1);
var G__34310 = c__4638__auto___34308;
var G__34311 = cljs.core.count(c__4638__auto___34308);
var G__34312 = (0);
seq__33262_34292 = G__34309;
chunk__33264_34293 = G__34310;
count__33265_34294 = G__34311;
i__33266_34295 = G__34312;
continue;
} else {
var child_34316 = cljs.core.first(seq__33262_34306__$1);
if(cljs.core.truth_(child_34316)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34316);


var G__34318 = cljs.core.next(seq__33262_34306__$1);
var G__34319 = null;
var G__34320 = (0);
var G__34321 = (0);
seq__33262_34292 = G__34318;
chunk__33264_34293 = G__34319;
count__33265_34294 = G__34320;
i__33266_34295 = G__34321;
continue;
} else {
var G__34322 = cljs.core.next(seq__33262_34306__$1);
var G__34323 = null;
var G__34324 = (0);
var G__34325 = (0);
seq__33262_34292 = G__34322;
chunk__33264_34293 = G__34323;
count__33265_34294 = G__34324;
i__33266_34295 = G__34325;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_34291);
}


var G__34326 = cljs.core.next(seq__33146_34284__$1);
var G__34327 = null;
var G__34328 = (0);
var G__34329 = (0);
seq__33146_34243 = G__34326;
chunk__33147_34244 = G__34327;
count__33148_34245 = G__34328;
i__33149_34246 = G__34329;
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
var seq__33338 = cljs.core.seq(node);
var chunk__33339 = null;
var count__33340 = (0);
var i__33341 = (0);
while(true){
if((i__33341 < count__33340)){
var n = chunk__33339.cljs$core$IIndexed$_nth$arity$2(null,i__33341);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__34336 = seq__33338;
var G__34337 = chunk__33339;
var G__34338 = count__33340;
var G__34339 = (i__33341 + (1));
seq__33338 = G__34336;
chunk__33339 = G__34337;
count__33340 = G__34338;
i__33341 = G__34339;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__33338);
if(temp__5753__auto__){
var seq__33338__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33338__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__33338__$1);
var G__34340 = cljs.core.chunk_rest(seq__33338__$1);
var G__34341 = c__4638__auto__;
var G__34342 = cljs.core.count(c__4638__auto__);
var G__34343 = (0);
seq__33338 = G__34340;
chunk__33339 = G__34341;
count__33340 = G__34342;
i__33341 = G__34343;
continue;
} else {
var n = cljs.core.first(seq__33338__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__34344 = cljs.core.next(seq__33338__$1);
var G__34345 = null;
var G__34346 = (0);
var G__34347 = (0);
seq__33338 = G__34344;
chunk__33339 = G__34345;
count__33340 = G__34346;
i__33341 = G__34347;
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
var G__33382 = arguments.length;
switch (G__33382) {
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
var G__33405 = arguments.length;
switch (G__33405) {
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
var G__33431 = arguments.length;
switch (G__33431) {
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
var len__4818__auto___34358 = arguments.length;
var i__4819__auto___34359 = (0);
while(true){
if((i__4819__auto___34359 < len__4818__auto___34358)){
args__4824__auto__.push((arguments[i__4819__auto___34359]));

var G__34361 = (i__4819__auto___34359 + (1));
i__4819__auto___34359 = G__34361;
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
var seq__33474_34362 = cljs.core.seq(nodes);
var chunk__33475_34363 = null;
var count__33476_34364 = (0);
var i__33477_34365 = (0);
while(true){
if((i__33477_34365 < count__33476_34364)){
var node_34366 = chunk__33475_34363.cljs$core$IIndexed$_nth$arity$2(null,i__33477_34365);
fragment.appendChild(shadow.dom._to_dom(node_34366));


var G__34367 = seq__33474_34362;
var G__34368 = chunk__33475_34363;
var G__34369 = count__33476_34364;
var G__34370 = (i__33477_34365 + (1));
seq__33474_34362 = G__34367;
chunk__33475_34363 = G__34368;
count__33476_34364 = G__34369;
i__33477_34365 = G__34370;
continue;
} else {
var temp__5753__auto___34371 = cljs.core.seq(seq__33474_34362);
if(temp__5753__auto___34371){
var seq__33474_34372__$1 = temp__5753__auto___34371;
if(cljs.core.chunked_seq_QMARK_(seq__33474_34372__$1)){
var c__4638__auto___34373 = cljs.core.chunk_first(seq__33474_34372__$1);
var G__34374 = cljs.core.chunk_rest(seq__33474_34372__$1);
var G__34375 = c__4638__auto___34373;
var G__34376 = cljs.core.count(c__4638__auto___34373);
var G__34377 = (0);
seq__33474_34362 = G__34374;
chunk__33475_34363 = G__34375;
count__33476_34364 = G__34376;
i__33477_34365 = G__34377;
continue;
} else {
var node_34378 = cljs.core.first(seq__33474_34372__$1);
fragment.appendChild(shadow.dom._to_dom(node_34378));


var G__34382 = cljs.core.next(seq__33474_34372__$1);
var G__34383 = null;
var G__34384 = (0);
var G__34385 = (0);
seq__33474_34362 = G__34382;
chunk__33475_34363 = G__34383;
count__33476_34364 = G__34384;
i__33477_34365 = G__34385;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq33457){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq33457));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__33498_34386 = cljs.core.seq(scripts);
var chunk__33499_34387 = null;
var count__33501_34388 = (0);
var i__33502_34389 = (0);
while(true){
if((i__33502_34389 < count__33501_34388)){
var vec__33525_34390 = chunk__33499_34387.cljs$core$IIndexed$_nth$arity$2(null,i__33502_34389);
var script_tag_34391 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33525_34390,(0),null);
var script_body_34392 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33525_34390,(1),null);
eval(script_body_34392);


var G__34393 = seq__33498_34386;
var G__34394 = chunk__33499_34387;
var G__34395 = count__33501_34388;
var G__34396 = (i__33502_34389 + (1));
seq__33498_34386 = G__34393;
chunk__33499_34387 = G__34394;
count__33501_34388 = G__34395;
i__33502_34389 = G__34396;
continue;
} else {
var temp__5753__auto___34397 = cljs.core.seq(seq__33498_34386);
if(temp__5753__auto___34397){
var seq__33498_34398__$1 = temp__5753__auto___34397;
if(cljs.core.chunked_seq_QMARK_(seq__33498_34398__$1)){
var c__4638__auto___34399 = cljs.core.chunk_first(seq__33498_34398__$1);
var G__34400 = cljs.core.chunk_rest(seq__33498_34398__$1);
var G__34401 = c__4638__auto___34399;
var G__34402 = cljs.core.count(c__4638__auto___34399);
var G__34403 = (0);
seq__33498_34386 = G__34400;
chunk__33499_34387 = G__34401;
count__33501_34388 = G__34402;
i__33502_34389 = G__34403;
continue;
} else {
var vec__33531_34404 = cljs.core.first(seq__33498_34398__$1);
var script_tag_34405 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33531_34404,(0),null);
var script_body_34406 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33531_34404,(1),null);
eval(script_body_34406);


var G__34407 = cljs.core.next(seq__33498_34398__$1);
var G__34408 = null;
var G__34409 = (0);
var G__34410 = (0);
seq__33498_34386 = G__34407;
chunk__33499_34387 = G__34408;
count__33501_34388 = G__34409;
i__33502_34389 = G__34410;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__33538){
var vec__33539 = p__33538;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33539,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33539,(1),null);
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
var G__33572 = arguments.length;
switch (G__33572) {
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
var seq__33621 = cljs.core.seq(style_keys);
var chunk__33622 = null;
var count__33623 = (0);
var i__33624 = (0);
while(true){
if((i__33624 < count__33623)){
var it = chunk__33622.cljs$core$IIndexed$_nth$arity$2(null,i__33624);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__34419 = seq__33621;
var G__34420 = chunk__33622;
var G__34421 = count__33623;
var G__34422 = (i__33624 + (1));
seq__33621 = G__34419;
chunk__33622 = G__34420;
count__33623 = G__34421;
i__33624 = G__34422;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__33621);
if(temp__5753__auto__){
var seq__33621__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33621__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__33621__$1);
var G__34423 = cljs.core.chunk_rest(seq__33621__$1);
var G__34424 = c__4638__auto__;
var G__34425 = cljs.core.count(c__4638__auto__);
var G__34426 = (0);
seq__33621 = G__34423;
chunk__33622 = G__34424;
count__33623 = G__34425;
i__33624 = G__34426;
continue;
} else {
var it = cljs.core.first(seq__33621__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__34427 = cljs.core.next(seq__33621__$1);
var G__34428 = null;
var G__34429 = (0);
var G__34430 = (0);
seq__33621 = G__34427;
chunk__33622 = G__34428;
count__33623 = G__34429;
i__33624 = G__34430;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4463__auto__,k33641,else__4464__auto__){
var self__ = this;
var this__4463__auto____$1 = this;
var G__33654 = k33641;
var G__33654__$1 = (((G__33654 instanceof cljs.core.Keyword))?G__33654.fqn:null);
switch (G__33654__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33641,else__4464__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4481__auto__,f__4482__auto__,init__4483__auto__){
var self__ = this;
var this__4481__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4484__auto__,p__33661){
var vec__33663 = p__33661;
var k__4485__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33663,(0),null);
var v__4486__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33663,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33640){
var self__ = this;
var G__33640__$1 = this;
return (new cljs.core.RecordIter((0),G__33640__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33642,other33643){
var self__ = this;
var this33642__$1 = this;
return (((!((other33643 == null)))) && ((((this33642__$1.constructor === other33643.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33642__$1.x,other33643.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33642__$1.y,other33643.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33642__$1.__extmap,other33643.__extmap)))))))));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4468__auto__,k33641){
var self__ = this;
var this__4468__auto____$1 = this;
var G__33706 = k33641;
var G__33706__$1 = (((G__33706 instanceof cljs.core.Keyword))?G__33706.fqn:null);
switch (G__33706__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k33641);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4469__auto__,k__4470__auto__,G__33640){
var self__ = this;
var this__4469__auto____$1 = this;
var pred__33712 = cljs.core.keyword_identical_QMARK_;
var expr__33713 = k__4470__auto__;
if(cljs.core.truth_((pred__33712.cljs$core$IFn$_invoke$arity$2 ? pred__33712.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__33713) : pred__33712.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__33713)))){
return (new shadow.dom.Coordinate(G__33640,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__33712.cljs$core$IFn$_invoke$arity$2 ? pred__33712.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__33713) : pred__33712.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__33713)))){
return (new shadow.dom.Coordinate(self__.x,G__33640,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4470__auto__,G__33640),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4474__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4460__auto__,G__33640){
var self__ = this;
var this__4460__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__33640,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__33645){
var extmap__4501__auto__ = (function (){var G__33745 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33645,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__33645)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__33745);
} else {
return G__33745;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__33645),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__33645),null,cljs.core.not_empty(extmap__4501__auto__),null));
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4463__auto__,k33774,else__4464__auto__){
var self__ = this;
var this__4463__auto____$1 = this;
var G__33796 = k33774;
var G__33796__$1 = (((G__33796 instanceof cljs.core.Keyword))?G__33796.fqn:null);
switch (G__33796__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33774,else__4464__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4481__auto__,f__4482__auto__,init__4483__auto__){
var self__ = this;
var this__4481__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4484__auto__,p__33802){
var vec__33803 = p__33802;
var k__4485__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33803,(0),null);
var v__4486__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33803,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33773){
var self__ = this;
var G__33773__$1 = this;
return (new cljs.core.RecordIter((0),G__33773__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33776,other33777){
var self__ = this;
var this33776__$1 = this;
return (((!((other33777 == null)))) && ((((this33776__$1.constructor === other33777.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33776__$1.w,other33777.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33776__$1.h,other33777.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33776__$1.__extmap,other33777.__extmap)))))))));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4468__auto__,k33774){
var self__ = this;
var this__4468__auto____$1 = this;
var G__33843 = k33774;
var G__33843__$1 = (((G__33843 instanceof cljs.core.Keyword))?G__33843.fqn:null);
switch (G__33843__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k33774);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4469__auto__,k__4470__auto__,G__33773){
var self__ = this;
var this__4469__auto____$1 = this;
var pred__33846 = cljs.core.keyword_identical_QMARK_;
var expr__33847 = k__4470__auto__;
if(cljs.core.truth_((pred__33846.cljs$core$IFn$_invoke$arity$2 ? pred__33846.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__33847) : pred__33846.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__33847)))){
return (new shadow.dom.Size(G__33773,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__33846.cljs$core$IFn$_invoke$arity$2 ? pred__33846.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__33847) : pred__33846.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__33847)))){
return (new shadow.dom.Size(self__.w,G__33773,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4470__auto__,G__33773),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4474__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4460__auto__,G__33773){
var self__ = this;
var this__4460__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__33773,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__33780){
var extmap__4501__auto__ = (function (){var G__33873 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33780,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__33780)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__33873);
} else {
return G__33873;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__33780),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__33780),null,cljs.core.not_empty(extmap__4501__auto__),null));
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
var G__34453 = (i + (1));
var G__34454 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__34453;
ret = G__34454;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__33908){
var vec__33909 = p__33908;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33909,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33909,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__33917 = arguments.length;
switch (G__33917) {
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
var G__34459 = ps;
var G__34460 = (i + (1));
el__$1 = G__34459;
i = G__34460;
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
var vec__33949 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33949,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33949,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33949,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__33953_34461 = cljs.core.seq(props);
var chunk__33954_34462 = null;
var count__33955_34463 = (0);
var i__33956_34464 = (0);
while(true){
if((i__33956_34464 < count__33955_34463)){
var vec__33971_34465 = chunk__33954_34462.cljs$core$IIndexed$_nth$arity$2(null,i__33956_34464);
var k_34466 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33971_34465,(0),null);
var v_34467 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33971_34465,(1),null);
el.setAttributeNS((function (){var temp__5753__auto__ = cljs.core.namespace(k_34466);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_34466),v_34467);


var G__34468 = seq__33953_34461;
var G__34469 = chunk__33954_34462;
var G__34470 = count__33955_34463;
var G__34471 = (i__33956_34464 + (1));
seq__33953_34461 = G__34468;
chunk__33954_34462 = G__34469;
count__33955_34463 = G__34470;
i__33956_34464 = G__34471;
continue;
} else {
var temp__5753__auto___34472 = cljs.core.seq(seq__33953_34461);
if(temp__5753__auto___34472){
var seq__33953_34475__$1 = temp__5753__auto___34472;
if(cljs.core.chunked_seq_QMARK_(seq__33953_34475__$1)){
var c__4638__auto___34476 = cljs.core.chunk_first(seq__33953_34475__$1);
var G__34477 = cljs.core.chunk_rest(seq__33953_34475__$1);
var G__34478 = c__4638__auto___34476;
var G__34479 = cljs.core.count(c__4638__auto___34476);
var G__34480 = (0);
seq__33953_34461 = G__34477;
chunk__33954_34462 = G__34478;
count__33955_34463 = G__34479;
i__33956_34464 = G__34480;
continue;
} else {
var vec__33977_34481 = cljs.core.first(seq__33953_34475__$1);
var k_34482 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33977_34481,(0),null);
var v_34483 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33977_34481,(1),null);
el.setAttributeNS((function (){var temp__5753__auto____$1 = cljs.core.namespace(k_34482);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ns = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_34482),v_34483);


var G__34485 = cljs.core.next(seq__33953_34475__$1);
var G__34486 = null;
var G__34487 = (0);
var G__34488 = (0);
seq__33953_34461 = G__34485;
chunk__33954_34462 = G__34486;
count__33955_34463 = G__34487;
i__33956_34464 = G__34488;
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
var vec__33991 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33991,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33991,(1),null);
var seq__33994_34498 = cljs.core.seq(node_children);
var chunk__33996_34499 = null;
var count__33997_34500 = (0);
var i__33998_34501 = (0);
while(true){
if((i__33998_34501 < count__33997_34500)){
var child_struct_34508 = chunk__33996_34499.cljs$core$IIndexed$_nth$arity$2(null,i__33998_34501);
if((!((child_struct_34508 == null)))){
if(typeof child_struct_34508 === 'string'){
var text_34509 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_34509),child_struct_34508].join(''));
} else {
var children_34510 = shadow.dom.svg_node(child_struct_34508);
if(cljs.core.seq_QMARK_(children_34510)){
var seq__34039_34511 = cljs.core.seq(children_34510);
var chunk__34041_34512 = null;
var count__34042_34513 = (0);
var i__34043_34514 = (0);
while(true){
if((i__34043_34514 < count__34042_34513)){
var child_34515 = chunk__34041_34512.cljs$core$IIndexed$_nth$arity$2(null,i__34043_34514);
if(cljs.core.truth_(child_34515)){
node.appendChild(child_34515);


var G__34522 = seq__34039_34511;
var G__34523 = chunk__34041_34512;
var G__34524 = count__34042_34513;
var G__34525 = (i__34043_34514 + (1));
seq__34039_34511 = G__34522;
chunk__34041_34512 = G__34523;
count__34042_34513 = G__34524;
i__34043_34514 = G__34525;
continue;
} else {
var G__34526 = seq__34039_34511;
var G__34527 = chunk__34041_34512;
var G__34528 = count__34042_34513;
var G__34529 = (i__34043_34514 + (1));
seq__34039_34511 = G__34526;
chunk__34041_34512 = G__34527;
count__34042_34513 = G__34528;
i__34043_34514 = G__34529;
continue;
}
} else {
var temp__5753__auto___34530 = cljs.core.seq(seq__34039_34511);
if(temp__5753__auto___34530){
var seq__34039_34531__$1 = temp__5753__auto___34530;
if(cljs.core.chunked_seq_QMARK_(seq__34039_34531__$1)){
var c__4638__auto___34532 = cljs.core.chunk_first(seq__34039_34531__$1);
var G__34533 = cljs.core.chunk_rest(seq__34039_34531__$1);
var G__34534 = c__4638__auto___34532;
var G__34535 = cljs.core.count(c__4638__auto___34532);
var G__34536 = (0);
seq__34039_34511 = G__34533;
chunk__34041_34512 = G__34534;
count__34042_34513 = G__34535;
i__34043_34514 = G__34536;
continue;
} else {
var child_34537 = cljs.core.first(seq__34039_34531__$1);
if(cljs.core.truth_(child_34537)){
node.appendChild(child_34537);


var G__34538 = cljs.core.next(seq__34039_34531__$1);
var G__34539 = null;
var G__34540 = (0);
var G__34541 = (0);
seq__34039_34511 = G__34538;
chunk__34041_34512 = G__34539;
count__34042_34513 = G__34540;
i__34043_34514 = G__34541;
continue;
} else {
var G__34542 = cljs.core.next(seq__34039_34531__$1);
var G__34543 = null;
var G__34544 = (0);
var G__34545 = (0);
seq__34039_34511 = G__34542;
chunk__34041_34512 = G__34543;
count__34042_34513 = G__34544;
i__34043_34514 = G__34545;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_34510);
}
}


var G__34550 = seq__33994_34498;
var G__34551 = chunk__33996_34499;
var G__34552 = count__33997_34500;
var G__34553 = (i__33998_34501 + (1));
seq__33994_34498 = G__34550;
chunk__33996_34499 = G__34551;
count__33997_34500 = G__34552;
i__33998_34501 = G__34553;
continue;
} else {
var G__34554 = seq__33994_34498;
var G__34555 = chunk__33996_34499;
var G__34556 = count__33997_34500;
var G__34557 = (i__33998_34501 + (1));
seq__33994_34498 = G__34554;
chunk__33996_34499 = G__34555;
count__33997_34500 = G__34556;
i__33998_34501 = G__34557;
continue;
}
} else {
var temp__5753__auto___34558 = cljs.core.seq(seq__33994_34498);
if(temp__5753__auto___34558){
var seq__33994_34559__$1 = temp__5753__auto___34558;
if(cljs.core.chunked_seq_QMARK_(seq__33994_34559__$1)){
var c__4638__auto___34560 = cljs.core.chunk_first(seq__33994_34559__$1);
var G__34561 = cljs.core.chunk_rest(seq__33994_34559__$1);
var G__34562 = c__4638__auto___34560;
var G__34563 = cljs.core.count(c__4638__auto___34560);
var G__34564 = (0);
seq__33994_34498 = G__34561;
chunk__33996_34499 = G__34562;
count__33997_34500 = G__34563;
i__33998_34501 = G__34564;
continue;
} else {
var child_struct_34568 = cljs.core.first(seq__33994_34559__$1);
if((!((child_struct_34568 == null)))){
if(typeof child_struct_34568 === 'string'){
var text_34569 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_34569),child_struct_34568].join(''));
} else {
var children_34578 = shadow.dom.svg_node(child_struct_34568);
if(cljs.core.seq_QMARK_(children_34578)){
var seq__34062_34579 = cljs.core.seq(children_34578);
var chunk__34064_34580 = null;
var count__34065_34581 = (0);
var i__34066_34582 = (0);
while(true){
if((i__34066_34582 < count__34065_34581)){
var child_34589 = chunk__34064_34580.cljs$core$IIndexed$_nth$arity$2(null,i__34066_34582);
if(cljs.core.truth_(child_34589)){
node.appendChild(child_34589);


var G__34590 = seq__34062_34579;
var G__34591 = chunk__34064_34580;
var G__34592 = count__34065_34581;
var G__34593 = (i__34066_34582 + (1));
seq__34062_34579 = G__34590;
chunk__34064_34580 = G__34591;
count__34065_34581 = G__34592;
i__34066_34582 = G__34593;
continue;
} else {
var G__34594 = seq__34062_34579;
var G__34595 = chunk__34064_34580;
var G__34596 = count__34065_34581;
var G__34597 = (i__34066_34582 + (1));
seq__34062_34579 = G__34594;
chunk__34064_34580 = G__34595;
count__34065_34581 = G__34596;
i__34066_34582 = G__34597;
continue;
}
} else {
var temp__5753__auto___34598__$1 = cljs.core.seq(seq__34062_34579);
if(temp__5753__auto___34598__$1){
var seq__34062_34605__$1 = temp__5753__auto___34598__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34062_34605__$1)){
var c__4638__auto___34606 = cljs.core.chunk_first(seq__34062_34605__$1);
var G__34607 = cljs.core.chunk_rest(seq__34062_34605__$1);
var G__34608 = c__4638__auto___34606;
var G__34609 = cljs.core.count(c__4638__auto___34606);
var G__34610 = (0);
seq__34062_34579 = G__34607;
chunk__34064_34580 = G__34608;
count__34065_34581 = G__34609;
i__34066_34582 = G__34610;
continue;
} else {
var child_34611 = cljs.core.first(seq__34062_34605__$1);
if(cljs.core.truth_(child_34611)){
node.appendChild(child_34611);


var G__34612 = cljs.core.next(seq__34062_34605__$1);
var G__34613 = null;
var G__34614 = (0);
var G__34615 = (0);
seq__34062_34579 = G__34612;
chunk__34064_34580 = G__34613;
count__34065_34581 = G__34614;
i__34066_34582 = G__34615;
continue;
} else {
var G__34616 = cljs.core.next(seq__34062_34605__$1);
var G__34617 = null;
var G__34618 = (0);
var G__34619 = (0);
seq__34062_34579 = G__34616;
chunk__34064_34580 = G__34617;
count__34065_34581 = G__34618;
i__34066_34582 = G__34619;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_34578);
}
}


var G__34620 = cljs.core.next(seq__33994_34559__$1);
var G__34621 = null;
var G__34622 = (0);
var G__34623 = (0);
seq__33994_34498 = G__34620;
chunk__33996_34499 = G__34621;
count__33997_34500 = G__34622;
i__33998_34501 = G__34623;
continue;
} else {
var G__34624 = cljs.core.next(seq__33994_34559__$1);
var G__34625 = null;
var G__34626 = (0);
var G__34627 = (0);
seq__33994_34498 = G__34624;
chunk__33996_34499 = G__34625;
count__33997_34500 = G__34626;
i__33998_34501 = G__34627;
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
var len__4818__auto___34633 = arguments.length;
var i__4819__auto___34634 = (0);
while(true){
if((i__4819__auto___34634 < len__4818__auto___34633)){
args__4824__auto__.push((arguments[i__4819__auto___34634]));

var G__34635 = (i__4819__auto___34634 + (1));
i__4819__auto___34634 = G__34635;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq34093){
var G__34094 = cljs.core.first(seq34093);
var seq34093__$1 = cljs.core.next(seq34093);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34094,seq34093__$1);
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
var G__34122 = arguments.length;
switch (G__34122) {
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
var c__29681__auto___34641 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29682__auto__ = (function (){var switch__29478__auto__ = (function (state_34148){
var state_val_34149 = (state_34148[(1)]);
if((state_val_34149 === (1))){
var state_34148__$1 = state_34148;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34148__$1,(2),once_or_cleanup);
} else {
if((state_val_34149 === (2))){
var inst_34145 = (state_34148[(2)]);
var inst_34146 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_34148__$1 = (function (){var statearr_34150 = state_34148;
(statearr_34150[(7)] = inst_34145);

return statearr_34150;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34148__$1,inst_34146);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__29479__auto__ = null;
var shadow$dom$state_machine__29479__auto____0 = (function (){
var statearr_34151 = [null,null,null,null,null,null,null,null];
(statearr_34151[(0)] = shadow$dom$state_machine__29479__auto__);

(statearr_34151[(1)] = (1));

return statearr_34151;
});
var shadow$dom$state_machine__29479__auto____1 = (function (state_34148){
while(true){
var ret_value__29480__auto__ = (function (){try{while(true){
var result__29481__auto__ = switch__29478__auto__(state_34148);
if(cljs.core.keyword_identical_QMARK_(result__29481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29481__auto__;
}
break;
}
}catch (e34152){var ex__29482__auto__ = e34152;
var statearr_34153_34648 = state_34148;
(statearr_34153_34648[(2)] = ex__29482__auto__);


if(cljs.core.seq((state_34148[(4)]))){
var statearr_34155_34649 = state_34148;
(statearr_34155_34649[(1)] = cljs.core.first((state_34148[(4)])));

} else {
throw ex__29482__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34650 = state_34148;
state_34148 = G__34650;
continue;
} else {
return ret_value__29480__auto__;
}
break;
}
});
shadow$dom$state_machine__29479__auto__ = function(state_34148){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__29479__auto____0.call(this);
case 1:
return shadow$dom$state_machine__29479__auto____1.call(this,state_34148);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__29479__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__29479__auto____0;
shadow$dom$state_machine__29479__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__29479__auto____1;
return shadow$dom$state_machine__29479__auto__;
})()
})();
var state__29683__auto__ = (function (){var statearr_34159 = f__29682__auto__();
(statearr_34159[(6)] = c__29681__auto___34641);

return statearr_34159;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29683__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
