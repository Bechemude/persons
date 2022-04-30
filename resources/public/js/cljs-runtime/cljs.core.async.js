goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__32748 = arguments.length;
switch (G__32748) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32749 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32749 = (function (f,blockable,meta32750){
this.f = f;
this.blockable = blockable;
this.meta32750 = meta32750;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32749.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32751,meta32750__$1){
var self__ = this;
var _32751__$1 = this;
return (new cljs.core.async.t_cljs$core$async32749(self__.f,self__.blockable,meta32750__$1));
}));

(cljs.core.async.t_cljs$core$async32749.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32751){
var self__ = this;
var _32751__$1 = this;
return self__.meta32750;
}));

(cljs.core.async.t_cljs$core$async32749.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32749.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32749.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async32749.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async32749.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta32750","meta32750",1836167759,null)], null);
}));

(cljs.core.async.t_cljs$core$async32749.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32749.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32749");

(cljs.core.async.t_cljs$core$async32749.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async32749");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32749.
 */
cljs.core.async.__GT_t_cljs$core$async32749 = (function cljs$core$async$__GT_t_cljs$core$async32749(f__$1,blockable__$1,meta32750){
return (new cljs.core.async.t_cljs$core$async32749(f__$1,blockable__$1,meta32750));
});

}

return (new cljs.core.async.t_cljs$core$async32749(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__32789 = arguments.length;
switch (G__32789) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__32791 = arguments.length;
switch (G__32791) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__32806 = arguments.length;
switch (G__32806) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_34250 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_34250) : fn1.call(null,val_34250));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_34250) : fn1.call(null,val_34250));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__32827 = arguments.length;
switch (G__32827) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5751__auto__)){
var ret = temp__5751__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5751__auto__)){
var retb = temp__5751__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4695__auto___34254 = n;
var x_34256 = (0);
while(true){
if((x_34256 < n__4695__auto___34254)){
(a[x_34256] = x_34256);

var G__34257 = (x_34256 + (1));
x_34256 = G__34257;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32838 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32838 = (function (flag,meta32839){
this.flag = flag;
this.meta32839 = meta32839;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32838.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32840,meta32839__$1){
var self__ = this;
var _32840__$1 = this;
return (new cljs.core.async.t_cljs$core$async32838(self__.flag,meta32839__$1));
}));

(cljs.core.async.t_cljs$core$async32838.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32840){
var self__ = this;
var _32840__$1 = this;
return self__.meta32839;
}));

(cljs.core.async.t_cljs$core$async32838.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32838.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async32838.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32838.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async32838.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta32839","meta32839",1901742144,null)], null);
}));

(cljs.core.async.t_cljs$core$async32838.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32838.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32838");

(cljs.core.async.t_cljs$core$async32838.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async32838");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32838.
 */
cljs.core.async.__GT_t_cljs$core$async32838 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async32838(flag__$1,meta32839){
return (new cljs.core.async.t_cljs$core$async32838(flag__$1,meta32839));
});

}

return (new cljs.core.async.t_cljs$core$async32838(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32841 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32841 = (function (flag,cb,meta32842){
this.flag = flag;
this.cb = cb;
this.meta32842 = meta32842;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32841.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32843,meta32842__$1){
var self__ = this;
var _32843__$1 = this;
return (new cljs.core.async.t_cljs$core$async32841(self__.flag,self__.cb,meta32842__$1));
}));

(cljs.core.async.t_cljs$core$async32841.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32843){
var self__ = this;
var _32843__$1 = this;
return self__.meta32842;
}));

(cljs.core.async.t_cljs$core$async32841.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32841.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async32841.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32841.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async32841.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta32842","meta32842",747285940,null)], null);
}));

(cljs.core.async.t_cljs$core$async32841.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32841.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32841");

(cljs.core.async.t_cljs$core$async32841.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async32841");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32841.
 */
cljs.core.async.__GT_t_cljs$core$async32841 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async32841(flag__$1,cb__$1,meta32842){
return (new cljs.core.async.t_cljs$core$async32841(flag__$1,cb__$1,meta32842));
});

}

return (new cljs.core.async.t_cljs$core$async32841(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__32844_SHARP_){
var G__32846 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32844_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__32846) : fret.call(null,G__32846));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__32845_SHARP_){
var G__32847 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32845_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__32847) : fret.call(null,G__32847));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4212__auto__ = wport;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return port;
}
})()], null));
} else {
var G__34261 = (i + (1));
i = G__34261;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4212__auto__ = ret;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5753__auto__ = (function (){var and__4210__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4210__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4210__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var got = temp__5753__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___34262 = arguments.length;
var i__4819__auto___34263 = (0);
while(true){
if((i__4819__auto___34263 < len__4818__auto___34262)){
args__4824__auto__.push((arguments[i__4819__auto___34263]));

var G__34264 = (i__4819__auto___34263 + (1));
i__4819__auto___34263 = G__34264;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__32850){
var map__32851 = p__32850;
var map__32851__$1 = cljs.core.__destructure_map(map__32851);
var opts = map__32851__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq32848){
var G__32849 = cljs.core.first(seq32848);
var seq32848__$1 = cljs.core.next(seq32848);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32849,seq32848__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__32853 = arguments.length;
switch (G__32853) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__32626__auto___34270 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32627__auto__ = (function (){var switch__32581__auto__ = (function (state_32877){
var state_val_32878 = (state_32877[(1)]);
if((state_val_32878 === (7))){
var inst_32873 = (state_32877[(2)]);
var state_32877__$1 = state_32877;
var statearr_32879_34271 = state_32877__$1;
(statearr_32879_34271[(2)] = inst_32873);

(statearr_32879_34271[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32878 === (1))){
var state_32877__$1 = state_32877;
var statearr_32880_34272 = state_32877__$1;
(statearr_32880_34272[(2)] = null);

(statearr_32880_34272[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32878 === (4))){
var inst_32856 = (state_32877[(7)]);
var inst_32856__$1 = (state_32877[(2)]);
var inst_32857 = (inst_32856__$1 == null);
var state_32877__$1 = (function (){var statearr_32881 = state_32877;
(statearr_32881[(7)] = inst_32856__$1);

return statearr_32881;
})();
if(cljs.core.truth_(inst_32857)){
var statearr_32882_34275 = state_32877__$1;
(statearr_32882_34275[(1)] = (5));

} else {
var statearr_32883_34276 = state_32877__$1;
(statearr_32883_34276[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32878 === (13))){
var state_32877__$1 = state_32877;
var statearr_32884_34278 = state_32877__$1;
(statearr_32884_34278[(2)] = null);

(statearr_32884_34278[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32878 === (6))){
var inst_32856 = (state_32877[(7)]);
var state_32877__$1 = state_32877;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32877__$1,(11),to,inst_32856);
} else {
if((state_val_32878 === (3))){
var inst_32875 = (state_32877[(2)]);
var state_32877__$1 = state_32877;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32877__$1,inst_32875);
} else {
if((state_val_32878 === (12))){
var state_32877__$1 = state_32877;
var statearr_32885_34281 = state_32877__$1;
(statearr_32885_34281[(2)] = null);

(statearr_32885_34281[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32878 === (2))){
var state_32877__$1 = state_32877;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32877__$1,(4),from);
} else {
if((state_val_32878 === (11))){
var inst_32866 = (state_32877[(2)]);
var state_32877__$1 = state_32877;
if(cljs.core.truth_(inst_32866)){
var statearr_32886_34282 = state_32877__$1;
(statearr_32886_34282[(1)] = (12));

} else {
var statearr_32887_34283 = state_32877__$1;
(statearr_32887_34283[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32878 === (9))){
var state_32877__$1 = state_32877;
var statearr_32888_34284 = state_32877__$1;
(statearr_32888_34284[(2)] = null);

(statearr_32888_34284[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32878 === (5))){
var state_32877__$1 = state_32877;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32889_34287 = state_32877__$1;
(statearr_32889_34287[(1)] = (8));

} else {
var statearr_32890_34288 = state_32877__$1;
(statearr_32890_34288[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32878 === (14))){
var inst_32871 = (state_32877[(2)]);
var state_32877__$1 = state_32877;
var statearr_32891_34289 = state_32877__$1;
(statearr_32891_34289[(2)] = inst_32871);

(statearr_32891_34289[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32878 === (10))){
var inst_32863 = (state_32877[(2)]);
var state_32877__$1 = state_32877;
var statearr_32892_34292 = state_32877__$1;
(statearr_32892_34292[(2)] = inst_32863);

(statearr_32892_34292[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32878 === (8))){
var inst_32860 = cljs.core.async.close_BANG_(to);
var state_32877__$1 = state_32877;
var statearr_32893_34293 = state_32877__$1;
(statearr_32893_34293[(2)] = inst_32860);

(statearr_32893_34293[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32582__auto__ = null;
var cljs$core$async$state_machine__32582__auto____0 = (function (){
var statearr_32894 = [null,null,null,null,null,null,null,null];
(statearr_32894[(0)] = cljs$core$async$state_machine__32582__auto__);

(statearr_32894[(1)] = (1));

return statearr_32894;
});
var cljs$core$async$state_machine__32582__auto____1 = (function (state_32877){
while(true){
var ret_value__32583__auto__ = (function (){try{while(true){
var result__32584__auto__ = switch__32581__auto__(state_32877);
if(cljs.core.keyword_identical_QMARK_(result__32584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32584__auto__;
}
break;
}
}catch (e32895){var ex__32585__auto__ = e32895;
var statearr_32896_34294 = state_32877;
(statearr_32896_34294[(2)] = ex__32585__auto__);


if(cljs.core.seq((state_32877[(4)]))){
var statearr_32897_34295 = state_32877;
(statearr_32897_34295[(1)] = cljs.core.first((state_32877[(4)])));

} else {
throw ex__32585__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34296 = state_32877;
state_32877 = G__34296;
continue;
} else {
return ret_value__32583__auto__;
}
break;
}
});
cljs$core$async$state_machine__32582__auto__ = function(state_32877){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32582__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32582__auto____1.call(this,state_32877);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32582__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32582__auto____0;
cljs$core$async$state_machine__32582__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32582__auto____1;
return cljs$core$async$state_machine__32582__auto__;
})()
})();
var state__32628__auto__ = (function (){var statearr_32898 = f__32627__auto__();
(statearr_32898[(6)] = c__32626__auto___34270);

return statearr_32898;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32628__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__32899){
var vec__32900 = p__32899;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32900,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32900,(1),null);
var job = vec__32900;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__32626__auto___34297 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32627__auto__ = (function (){var switch__32581__auto__ = (function (state_32907){
var state_val_32908 = (state_32907[(1)]);
if((state_val_32908 === (1))){
var state_32907__$1 = state_32907;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32907__$1,(2),res,v);
} else {
if((state_val_32908 === (2))){
var inst_32904 = (state_32907[(2)]);
var inst_32905 = cljs.core.async.close_BANG_(res);
var state_32907__$1 = (function (){var statearr_32909 = state_32907;
(statearr_32909[(7)] = inst_32904);

return statearr_32909;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32907__$1,inst_32905);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32582__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32582__auto____0 = (function (){
var statearr_32910 = [null,null,null,null,null,null,null,null];
(statearr_32910[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32582__auto__);

(statearr_32910[(1)] = (1));

return statearr_32910;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32582__auto____1 = (function (state_32907){
while(true){
var ret_value__32583__auto__ = (function (){try{while(true){
var result__32584__auto__ = switch__32581__auto__(state_32907);
if(cljs.core.keyword_identical_QMARK_(result__32584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32584__auto__;
}
break;
}
}catch (e32911){var ex__32585__auto__ = e32911;
var statearr_32912_34298 = state_32907;
(statearr_32912_34298[(2)] = ex__32585__auto__);


if(cljs.core.seq((state_32907[(4)]))){
var statearr_32913_34299 = state_32907;
(statearr_32913_34299[(1)] = cljs.core.first((state_32907[(4)])));

} else {
throw ex__32585__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34300 = state_32907;
state_32907 = G__34300;
continue;
} else {
return ret_value__32583__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32582__auto__ = function(state_32907){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32582__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32582__auto____1.call(this,state_32907);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32582__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32582__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32582__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32582__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32582__auto__;
})()
})();
var state__32628__auto__ = (function (){var statearr_32914 = f__32627__auto__();
(statearr_32914[(6)] = c__32626__auto___34297);

return statearr_32914;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32628__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__32915){
var vec__32916 = p__32915;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32916,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32916,(1),null);
var job = vec__32916;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4695__auto___34301 = n;
var __34302 = (0);
while(true){
if((__34302 < n__4695__auto___34301)){
var G__32919_34303 = type;
var G__32919_34304__$1 = (((G__32919_34303 instanceof cljs.core.Keyword))?G__32919_34303.fqn:null);
switch (G__32919_34304__$1) {
case "compute":
var c__32626__auto___34306 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__34302,c__32626__auto___34306,G__32919_34303,G__32919_34304__$1,n__4695__auto___34301,jobs,results,process,async){
return (function (){
var f__32627__auto__ = (function (){var switch__32581__auto__ = ((function (__34302,c__32626__auto___34306,G__32919_34303,G__32919_34304__$1,n__4695__auto___34301,jobs,results,process,async){
return (function (state_32932){
var state_val_32933 = (state_32932[(1)]);
if((state_val_32933 === (1))){
var state_32932__$1 = state_32932;
var statearr_32934_34307 = state_32932__$1;
(statearr_32934_34307[(2)] = null);

(statearr_32934_34307[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32933 === (2))){
var state_32932__$1 = state_32932;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32932__$1,(4),jobs);
} else {
if((state_val_32933 === (3))){
var inst_32930 = (state_32932[(2)]);
var state_32932__$1 = state_32932;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32932__$1,inst_32930);
} else {
if((state_val_32933 === (4))){
var inst_32922 = (state_32932[(2)]);
var inst_32923 = process(inst_32922);
var state_32932__$1 = state_32932;
if(cljs.core.truth_(inst_32923)){
var statearr_32935_34308 = state_32932__$1;
(statearr_32935_34308[(1)] = (5));

} else {
var statearr_32936_34309 = state_32932__$1;
(statearr_32936_34309[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32933 === (5))){
var state_32932__$1 = state_32932;
var statearr_32937_34310 = state_32932__$1;
(statearr_32937_34310[(2)] = null);

(statearr_32937_34310[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32933 === (6))){
var state_32932__$1 = state_32932;
var statearr_32938_34311 = state_32932__$1;
(statearr_32938_34311[(2)] = null);

(statearr_32938_34311[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32933 === (7))){
var inst_32928 = (state_32932[(2)]);
var state_32932__$1 = state_32932;
var statearr_32939_34312 = state_32932__$1;
(statearr_32939_34312[(2)] = inst_32928);

(statearr_32939_34312[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__34302,c__32626__auto___34306,G__32919_34303,G__32919_34304__$1,n__4695__auto___34301,jobs,results,process,async))
;
return ((function (__34302,switch__32581__auto__,c__32626__auto___34306,G__32919_34303,G__32919_34304__$1,n__4695__auto___34301,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32582__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32582__auto____0 = (function (){
var statearr_32940 = [null,null,null,null,null,null,null];
(statearr_32940[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32582__auto__);

(statearr_32940[(1)] = (1));

return statearr_32940;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32582__auto____1 = (function (state_32932){
while(true){
var ret_value__32583__auto__ = (function (){try{while(true){
var result__32584__auto__ = switch__32581__auto__(state_32932);
if(cljs.core.keyword_identical_QMARK_(result__32584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32584__auto__;
}
break;
}
}catch (e32941){var ex__32585__auto__ = e32941;
var statearr_32942_34313 = state_32932;
(statearr_32942_34313[(2)] = ex__32585__auto__);


if(cljs.core.seq((state_32932[(4)]))){
var statearr_32943_34314 = state_32932;
(statearr_32943_34314[(1)] = cljs.core.first((state_32932[(4)])));

} else {
throw ex__32585__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34315 = state_32932;
state_32932 = G__34315;
continue;
} else {
return ret_value__32583__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32582__auto__ = function(state_32932){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32582__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32582__auto____1.call(this,state_32932);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32582__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32582__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32582__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32582__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32582__auto__;
})()
;})(__34302,switch__32581__auto__,c__32626__auto___34306,G__32919_34303,G__32919_34304__$1,n__4695__auto___34301,jobs,results,process,async))
})();
var state__32628__auto__ = (function (){var statearr_32944 = f__32627__auto__();
(statearr_32944[(6)] = c__32626__auto___34306);

return statearr_32944;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32628__auto__);
});})(__34302,c__32626__auto___34306,G__32919_34303,G__32919_34304__$1,n__4695__auto___34301,jobs,results,process,async))
);


break;
case "async":
var c__32626__auto___34316 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__34302,c__32626__auto___34316,G__32919_34303,G__32919_34304__$1,n__4695__auto___34301,jobs,results,process,async){
return (function (){
var f__32627__auto__ = (function (){var switch__32581__auto__ = ((function (__34302,c__32626__auto___34316,G__32919_34303,G__32919_34304__$1,n__4695__auto___34301,jobs,results,process,async){
return (function (state_32957){
var state_val_32958 = (state_32957[(1)]);
if((state_val_32958 === (1))){
var state_32957__$1 = state_32957;
var statearr_32959_34317 = state_32957__$1;
(statearr_32959_34317[(2)] = null);

(statearr_32959_34317[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32958 === (2))){
var state_32957__$1 = state_32957;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32957__$1,(4),jobs);
} else {
if((state_val_32958 === (3))){
var inst_32955 = (state_32957[(2)]);
var state_32957__$1 = state_32957;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32957__$1,inst_32955);
} else {
if((state_val_32958 === (4))){
var inst_32947 = (state_32957[(2)]);
var inst_32948 = async(inst_32947);
var state_32957__$1 = state_32957;
if(cljs.core.truth_(inst_32948)){
var statearr_32960_34320 = state_32957__$1;
(statearr_32960_34320[(1)] = (5));

} else {
var statearr_32961_34321 = state_32957__$1;
(statearr_32961_34321[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32958 === (5))){
var state_32957__$1 = state_32957;
var statearr_32962_34322 = state_32957__$1;
(statearr_32962_34322[(2)] = null);

(statearr_32962_34322[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32958 === (6))){
var state_32957__$1 = state_32957;
var statearr_32963_34323 = state_32957__$1;
(statearr_32963_34323[(2)] = null);

(statearr_32963_34323[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32958 === (7))){
var inst_32953 = (state_32957[(2)]);
var state_32957__$1 = state_32957;
var statearr_32964_34324 = state_32957__$1;
(statearr_32964_34324[(2)] = inst_32953);

(statearr_32964_34324[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__34302,c__32626__auto___34316,G__32919_34303,G__32919_34304__$1,n__4695__auto___34301,jobs,results,process,async))
;
return ((function (__34302,switch__32581__auto__,c__32626__auto___34316,G__32919_34303,G__32919_34304__$1,n__4695__auto___34301,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32582__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32582__auto____0 = (function (){
var statearr_32965 = [null,null,null,null,null,null,null];
(statearr_32965[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32582__auto__);

(statearr_32965[(1)] = (1));

return statearr_32965;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32582__auto____1 = (function (state_32957){
while(true){
var ret_value__32583__auto__ = (function (){try{while(true){
var result__32584__auto__ = switch__32581__auto__(state_32957);
if(cljs.core.keyword_identical_QMARK_(result__32584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32584__auto__;
}
break;
}
}catch (e32966){var ex__32585__auto__ = e32966;
var statearr_32967_34325 = state_32957;
(statearr_32967_34325[(2)] = ex__32585__auto__);


if(cljs.core.seq((state_32957[(4)]))){
var statearr_32968_34326 = state_32957;
(statearr_32968_34326[(1)] = cljs.core.first((state_32957[(4)])));

} else {
throw ex__32585__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34327 = state_32957;
state_32957 = G__34327;
continue;
} else {
return ret_value__32583__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32582__auto__ = function(state_32957){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32582__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32582__auto____1.call(this,state_32957);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32582__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32582__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32582__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32582__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32582__auto__;
})()
;})(__34302,switch__32581__auto__,c__32626__auto___34316,G__32919_34303,G__32919_34304__$1,n__4695__auto___34301,jobs,results,process,async))
})();
var state__32628__auto__ = (function (){var statearr_32969 = f__32627__auto__();
(statearr_32969[(6)] = c__32626__auto___34316);

return statearr_32969;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32628__auto__);
});})(__34302,c__32626__auto___34316,G__32919_34303,G__32919_34304__$1,n__4695__auto___34301,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32919_34304__$1)].join('')));

}

var G__34328 = (__34302 + (1));
__34302 = G__34328;
continue;
} else {
}
break;
}

var c__32626__auto___34329 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32627__auto__ = (function (){var switch__32581__auto__ = (function (state_32991){
var state_val_32992 = (state_32991[(1)]);
if((state_val_32992 === (7))){
var inst_32987 = (state_32991[(2)]);
var state_32991__$1 = state_32991;
var statearr_32993_34330 = state_32991__$1;
(statearr_32993_34330[(2)] = inst_32987);

(statearr_32993_34330[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32992 === (1))){
var state_32991__$1 = state_32991;
var statearr_32994_34331 = state_32991__$1;
(statearr_32994_34331[(2)] = null);

(statearr_32994_34331[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32992 === (4))){
var inst_32972 = (state_32991[(7)]);
var inst_32972__$1 = (state_32991[(2)]);
var inst_32973 = (inst_32972__$1 == null);
var state_32991__$1 = (function (){var statearr_32995 = state_32991;
(statearr_32995[(7)] = inst_32972__$1);

return statearr_32995;
})();
if(cljs.core.truth_(inst_32973)){
var statearr_32996_34332 = state_32991__$1;
(statearr_32996_34332[(1)] = (5));

} else {
var statearr_32997_34333 = state_32991__$1;
(statearr_32997_34333[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32992 === (6))){
var inst_32977 = (state_32991[(8)]);
var inst_32972 = (state_32991[(7)]);
var inst_32977__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_32978 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32979 = [inst_32972,inst_32977__$1];
var inst_32980 = (new cljs.core.PersistentVector(null,2,(5),inst_32978,inst_32979,null));
var state_32991__$1 = (function (){var statearr_32998 = state_32991;
(statearr_32998[(8)] = inst_32977__$1);

return statearr_32998;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32991__$1,(8),jobs,inst_32980);
} else {
if((state_val_32992 === (3))){
var inst_32989 = (state_32991[(2)]);
var state_32991__$1 = state_32991;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32991__$1,inst_32989);
} else {
if((state_val_32992 === (2))){
var state_32991__$1 = state_32991;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32991__$1,(4),from);
} else {
if((state_val_32992 === (9))){
var inst_32984 = (state_32991[(2)]);
var state_32991__$1 = (function (){var statearr_32999 = state_32991;
(statearr_32999[(9)] = inst_32984);

return statearr_32999;
})();
var statearr_33000_34334 = state_32991__$1;
(statearr_33000_34334[(2)] = null);

(statearr_33000_34334[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32992 === (5))){
var inst_32975 = cljs.core.async.close_BANG_(jobs);
var state_32991__$1 = state_32991;
var statearr_33001_34335 = state_32991__$1;
(statearr_33001_34335[(2)] = inst_32975);

(statearr_33001_34335[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32992 === (8))){
var inst_32977 = (state_32991[(8)]);
var inst_32982 = (state_32991[(2)]);
var state_32991__$1 = (function (){var statearr_33002 = state_32991;
(statearr_33002[(10)] = inst_32982);

return statearr_33002;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32991__$1,(9),results,inst_32977);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32582__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32582__auto____0 = (function (){
var statearr_33003 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33003[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32582__auto__);

(statearr_33003[(1)] = (1));

return statearr_33003;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32582__auto____1 = (function (state_32991){
while(true){
var ret_value__32583__auto__ = (function (){try{while(true){
var result__32584__auto__ = switch__32581__auto__(state_32991);
if(cljs.core.keyword_identical_QMARK_(result__32584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32584__auto__;
}
break;
}
}catch (e33004){var ex__32585__auto__ = e33004;
var statearr_33005_34336 = state_32991;
(statearr_33005_34336[(2)] = ex__32585__auto__);


if(cljs.core.seq((state_32991[(4)]))){
var statearr_33006_34337 = state_32991;
(statearr_33006_34337[(1)] = cljs.core.first((state_32991[(4)])));

} else {
throw ex__32585__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34338 = state_32991;
state_32991 = G__34338;
continue;
} else {
return ret_value__32583__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32582__auto__ = function(state_32991){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32582__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32582__auto____1.call(this,state_32991);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32582__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32582__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32582__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32582__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32582__auto__;
})()
})();
var state__32628__auto__ = (function (){var statearr_33007 = f__32627__auto__();
(statearr_33007[(6)] = c__32626__auto___34329);

return statearr_33007;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32628__auto__);
}));


var c__32626__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32627__auto__ = (function (){var switch__32581__auto__ = (function (state_33045){
var state_val_33046 = (state_33045[(1)]);
if((state_val_33046 === (7))){
var inst_33041 = (state_33045[(2)]);
var state_33045__$1 = state_33045;
var statearr_33047_34339 = state_33045__$1;
(statearr_33047_34339[(2)] = inst_33041);

(statearr_33047_34339[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33046 === (20))){
var state_33045__$1 = state_33045;
var statearr_33048_34341 = state_33045__$1;
(statearr_33048_34341[(2)] = null);

(statearr_33048_34341[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33046 === (1))){
var state_33045__$1 = state_33045;
var statearr_33049_34342 = state_33045__$1;
(statearr_33049_34342[(2)] = null);

(statearr_33049_34342[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33046 === (4))){
var inst_33010 = (state_33045[(7)]);
var inst_33010__$1 = (state_33045[(2)]);
var inst_33011 = (inst_33010__$1 == null);
var state_33045__$1 = (function (){var statearr_33050 = state_33045;
(statearr_33050[(7)] = inst_33010__$1);

return statearr_33050;
})();
if(cljs.core.truth_(inst_33011)){
var statearr_33051_34343 = state_33045__$1;
(statearr_33051_34343[(1)] = (5));

} else {
var statearr_33052_34344 = state_33045__$1;
(statearr_33052_34344[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33046 === (15))){
var inst_33023 = (state_33045[(8)]);
var state_33045__$1 = state_33045;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33045__$1,(18),to,inst_33023);
} else {
if((state_val_33046 === (21))){
var inst_33036 = (state_33045[(2)]);
var state_33045__$1 = state_33045;
var statearr_33053_34345 = state_33045__$1;
(statearr_33053_34345[(2)] = inst_33036);

(statearr_33053_34345[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33046 === (13))){
var inst_33038 = (state_33045[(2)]);
var state_33045__$1 = (function (){var statearr_33054 = state_33045;
(statearr_33054[(9)] = inst_33038);

return statearr_33054;
})();
var statearr_33055_34346 = state_33045__$1;
(statearr_33055_34346[(2)] = null);

(statearr_33055_34346[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33046 === (6))){
var inst_33010 = (state_33045[(7)]);
var state_33045__$1 = state_33045;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33045__$1,(11),inst_33010);
} else {
if((state_val_33046 === (17))){
var inst_33031 = (state_33045[(2)]);
var state_33045__$1 = state_33045;
if(cljs.core.truth_(inst_33031)){
var statearr_33056_34348 = state_33045__$1;
(statearr_33056_34348[(1)] = (19));

} else {
var statearr_33057_34349 = state_33045__$1;
(statearr_33057_34349[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33046 === (3))){
var inst_33043 = (state_33045[(2)]);
var state_33045__$1 = state_33045;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33045__$1,inst_33043);
} else {
if((state_val_33046 === (12))){
var inst_33020 = (state_33045[(10)]);
var state_33045__$1 = state_33045;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33045__$1,(14),inst_33020);
} else {
if((state_val_33046 === (2))){
var state_33045__$1 = state_33045;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33045__$1,(4),results);
} else {
if((state_val_33046 === (19))){
var state_33045__$1 = state_33045;
var statearr_33058_34351 = state_33045__$1;
(statearr_33058_34351[(2)] = null);

(statearr_33058_34351[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33046 === (11))){
var inst_33020 = (state_33045[(2)]);
var state_33045__$1 = (function (){var statearr_33059 = state_33045;
(statearr_33059[(10)] = inst_33020);

return statearr_33059;
})();
var statearr_33060_34352 = state_33045__$1;
(statearr_33060_34352[(2)] = null);

(statearr_33060_34352[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33046 === (9))){
var state_33045__$1 = state_33045;
var statearr_33061_34353 = state_33045__$1;
(statearr_33061_34353[(2)] = null);

(statearr_33061_34353[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33046 === (5))){
var state_33045__$1 = state_33045;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33062_34354 = state_33045__$1;
(statearr_33062_34354[(1)] = (8));

} else {
var statearr_33063_34355 = state_33045__$1;
(statearr_33063_34355[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33046 === (14))){
var inst_33025 = (state_33045[(11)]);
var inst_33023 = (state_33045[(8)]);
var inst_33023__$1 = (state_33045[(2)]);
var inst_33024 = (inst_33023__$1 == null);
var inst_33025__$1 = cljs.core.not(inst_33024);
var state_33045__$1 = (function (){var statearr_33064 = state_33045;
(statearr_33064[(11)] = inst_33025__$1);

(statearr_33064[(8)] = inst_33023__$1);

return statearr_33064;
})();
if(inst_33025__$1){
var statearr_33065_34356 = state_33045__$1;
(statearr_33065_34356[(1)] = (15));

} else {
var statearr_33066_34357 = state_33045__$1;
(statearr_33066_34357[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33046 === (16))){
var inst_33025 = (state_33045[(11)]);
var state_33045__$1 = state_33045;
var statearr_33067_34359 = state_33045__$1;
(statearr_33067_34359[(2)] = inst_33025);

(statearr_33067_34359[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33046 === (10))){
var inst_33017 = (state_33045[(2)]);
var state_33045__$1 = state_33045;
var statearr_33068_34360 = state_33045__$1;
(statearr_33068_34360[(2)] = inst_33017);

(statearr_33068_34360[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33046 === (18))){
var inst_33028 = (state_33045[(2)]);
var state_33045__$1 = state_33045;
var statearr_33069_34362 = state_33045__$1;
(statearr_33069_34362[(2)] = inst_33028);

(statearr_33069_34362[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33046 === (8))){
var inst_33014 = cljs.core.async.close_BANG_(to);
var state_33045__$1 = state_33045;
var statearr_33070_34363 = state_33045__$1;
(statearr_33070_34363[(2)] = inst_33014);

(statearr_33070_34363[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32582__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32582__auto____0 = (function (){
var statearr_33071 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33071[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32582__auto__);

(statearr_33071[(1)] = (1));

return statearr_33071;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32582__auto____1 = (function (state_33045){
while(true){
var ret_value__32583__auto__ = (function (){try{while(true){
var result__32584__auto__ = switch__32581__auto__(state_33045);
if(cljs.core.keyword_identical_QMARK_(result__32584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32584__auto__;
}
break;
}
}catch (e33072){var ex__32585__auto__ = e33072;
var statearr_33073_34364 = state_33045;
(statearr_33073_34364[(2)] = ex__32585__auto__);


if(cljs.core.seq((state_33045[(4)]))){
var statearr_33074_34365 = state_33045;
(statearr_33074_34365[(1)] = cljs.core.first((state_33045[(4)])));

} else {
throw ex__32585__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34366 = state_33045;
state_33045 = G__34366;
continue;
} else {
return ret_value__32583__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32582__auto__ = function(state_33045){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32582__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32582__auto____1.call(this,state_33045);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32582__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32582__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32582__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32582__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32582__auto__;
})()
})();
var state__32628__auto__ = (function (){var statearr_33075 = f__32627__auto__();
(statearr_33075[(6)] = c__32626__auto__);

return statearr_33075;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32628__auto__);
}));

return c__32626__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__33077 = arguments.length;
switch (G__33077) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__33079 = arguments.length;
switch (G__33079) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__33081 = arguments.length;
switch (G__33081) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__32626__auto___34374 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32627__auto__ = (function (){var switch__32581__auto__ = (function (state_33107){
var state_val_33108 = (state_33107[(1)]);
if((state_val_33108 === (7))){
var inst_33103 = (state_33107[(2)]);
var state_33107__$1 = state_33107;
var statearr_33109_34375 = state_33107__$1;
(statearr_33109_34375[(2)] = inst_33103);

(statearr_33109_34375[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33108 === (1))){
var state_33107__$1 = state_33107;
var statearr_33110_34376 = state_33107__$1;
(statearr_33110_34376[(2)] = null);

(statearr_33110_34376[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33108 === (4))){
var inst_33084 = (state_33107[(7)]);
var inst_33084__$1 = (state_33107[(2)]);
var inst_33085 = (inst_33084__$1 == null);
var state_33107__$1 = (function (){var statearr_33111 = state_33107;
(statearr_33111[(7)] = inst_33084__$1);

return statearr_33111;
})();
if(cljs.core.truth_(inst_33085)){
var statearr_33112_34377 = state_33107__$1;
(statearr_33112_34377[(1)] = (5));

} else {
var statearr_33113_34378 = state_33107__$1;
(statearr_33113_34378[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33108 === (13))){
var state_33107__$1 = state_33107;
var statearr_33114_34379 = state_33107__$1;
(statearr_33114_34379[(2)] = null);

(statearr_33114_34379[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33108 === (6))){
var inst_33084 = (state_33107[(7)]);
var inst_33090 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_33084) : p.call(null,inst_33084));
var state_33107__$1 = state_33107;
if(cljs.core.truth_(inst_33090)){
var statearr_33115_34380 = state_33107__$1;
(statearr_33115_34380[(1)] = (9));

} else {
var statearr_33116_34381 = state_33107__$1;
(statearr_33116_34381[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33108 === (3))){
var inst_33105 = (state_33107[(2)]);
var state_33107__$1 = state_33107;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33107__$1,inst_33105);
} else {
if((state_val_33108 === (12))){
var state_33107__$1 = state_33107;
var statearr_33117_34382 = state_33107__$1;
(statearr_33117_34382[(2)] = null);

(statearr_33117_34382[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33108 === (2))){
var state_33107__$1 = state_33107;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33107__$1,(4),ch);
} else {
if((state_val_33108 === (11))){
var inst_33084 = (state_33107[(7)]);
var inst_33094 = (state_33107[(2)]);
var state_33107__$1 = state_33107;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33107__$1,(8),inst_33094,inst_33084);
} else {
if((state_val_33108 === (9))){
var state_33107__$1 = state_33107;
var statearr_33118_34383 = state_33107__$1;
(statearr_33118_34383[(2)] = tc);

(statearr_33118_34383[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33108 === (5))){
var inst_33087 = cljs.core.async.close_BANG_(tc);
var inst_33088 = cljs.core.async.close_BANG_(fc);
var state_33107__$1 = (function (){var statearr_33119 = state_33107;
(statearr_33119[(8)] = inst_33087);

return statearr_33119;
})();
var statearr_33120_34385 = state_33107__$1;
(statearr_33120_34385[(2)] = inst_33088);

(statearr_33120_34385[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33108 === (14))){
var inst_33101 = (state_33107[(2)]);
var state_33107__$1 = state_33107;
var statearr_33121_34387 = state_33107__$1;
(statearr_33121_34387[(2)] = inst_33101);

(statearr_33121_34387[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33108 === (10))){
var state_33107__$1 = state_33107;
var statearr_33122_34388 = state_33107__$1;
(statearr_33122_34388[(2)] = fc);

(statearr_33122_34388[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33108 === (8))){
var inst_33096 = (state_33107[(2)]);
var state_33107__$1 = state_33107;
if(cljs.core.truth_(inst_33096)){
var statearr_33123_34389 = state_33107__$1;
(statearr_33123_34389[(1)] = (12));

} else {
var statearr_33124_34390 = state_33107__$1;
(statearr_33124_34390[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32582__auto__ = null;
var cljs$core$async$state_machine__32582__auto____0 = (function (){
var statearr_33125 = [null,null,null,null,null,null,null,null,null];
(statearr_33125[(0)] = cljs$core$async$state_machine__32582__auto__);

(statearr_33125[(1)] = (1));

return statearr_33125;
});
var cljs$core$async$state_machine__32582__auto____1 = (function (state_33107){
while(true){
var ret_value__32583__auto__ = (function (){try{while(true){
var result__32584__auto__ = switch__32581__auto__(state_33107);
if(cljs.core.keyword_identical_QMARK_(result__32584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32584__auto__;
}
break;
}
}catch (e33126){var ex__32585__auto__ = e33126;
var statearr_33127_34391 = state_33107;
(statearr_33127_34391[(2)] = ex__32585__auto__);


if(cljs.core.seq((state_33107[(4)]))){
var statearr_33128_34392 = state_33107;
(statearr_33128_34392[(1)] = cljs.core.first((state_33107[(4)])));

} else {
throw ex__32585__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34393 = state_33107;
state_33107 = G__34393;
continue;
} else {
return ret_value__32583__auto__;
}
break;
}
});
cljs$core$async$state_machine__32582__auto__ = function(state_33107){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32582__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32582__auto____1.call(this,state_33107);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32582__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32582__auto____0;
cljs$core$async$state_machine__32582__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32582__auto____1;
return cljs$core$async$state_machine__32582__auto__;
})()
})();
var state__32628__auto__ = (function (){var statearr_33129 = f__32627__auto__();
(statearr_33129[(6)] = c__32626__auto___34374);

return statearr_33129;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32628__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__32626__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32627__auto__ = (function (){var switch__32581__auto__ = (function (state_33151){
var state_val_33152 = (state_33151[(1)]);
if((state_val_33152 === (7))){
var inst_33147 = (state_33151[(2)]);
var state_33151__$1 = state_33151;
var statearr_33153_34394 = state_33151__$1;
(statearr_33153_34394[(2)] = inst_33147);

(statearr_33153_34394[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33152 === (1))){
var inst_33130 = init;
var inst_33131 = inst_33130;
var state_33151__$1 = (function (){var statearr_33154 = state_33151;
(statearr_33154[(7)] = inst_33131);

return statearr_33154;
})();
var statearr_33155_34395 = state_33151__$1;
(statearr_33155_34395[(2)] = null);

(statearr_33155_34395[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33152 === (4))){
var inst_33134 = (state_33151[(8)]);
var inst_33134__$1 = (state_33151[(2)]);
var inst_33135 = (inst_33134__$1 == null);
var state_33151__$1 = (function (){var statearr_33156 = state_33151;
(statearr_33156[(8)] = inst_33134__$1);

return statearr_33156;
})();
if(cljs.core.truth_(inst_33135)){
var statearr_33157_34396 = state_33151__$1;
(statearr_33157_34396[(1)] = (5));

} else {
var statearr_33158_34397 = state_33151__$1;
(statearr_33158_34397[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33152 === (6))){
var inst_33134 = (state_33151[(8)]);
var inst_33131 = (state_33151[(7)]);
var inst_33138 = (state_33151[(9)]);
var inst_33138__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_33131,inst_33134) : f.call(null,inst_33131,inst_33134));
var inst_33139 = cljs.core.reduced_QMARK_(inst_33138__$1);
var state_33151__$1 = (function (){var statearr_33159 = state_33151;
(statearr_33159[(9)] = inst_33138__$1);

return statearr_33159;
})();
if(inst_33139){
var statearr_33160_34398 = state_33151__$1;
(statearr_33160_34398[(1)] = (8));

} else {
var statearr_33161_34399 = state_33151__$1;
(statearr_33161_34399[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33152 === (3))){
var inst_33149 = (state_33151[(2)]);
var state_33151__$1 = state_33151;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33151__$1,inst_33149);
} else {
if((state_val_33152 === (2))){
var state_33151__$1 = state_33151;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33151__$1,(4),ch);
} else {
if((state_val_33152 === (9))){
var inst_33138 = (state_33151[(9)]);
var inst_33131 = inst_33138;
var state_33151__$1 = (function (){var statearr_33162 = state_33151;
(statearr_33162[(7)] = inst_33131);

return statearr_33162;
})();
var statearr_33163_34400 = state_33151__$1;
(statearr_33163_34400[(2)] = null);

(statearr_33163_34400[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33152 === (5))){
var inst_33131 = (state_33151[(7)]);
var state_33151__$1 = state_33151;
var statearr_33164_34401 = state_33151__$1;
(statearr_33164_34401[(2)] = inst_33131);

(statearr_33164_34401[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33152 === (10))){
var inst_33145 = (state_33151[(2)]);
var state_33151__$1 = state_33151;
var statearr_33165_34402 = state_33151__$1;
(statearr_33165_34402[(2)] = inst_33145);

(statearr_33165_34402[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33152 === (8))){
var inst_33138 = (state_33151[(9)]);
var inst_33141 = cljs.core.deref(inst_33138);
var state_33151__$1 = state_33151;
var statearr_33166_34403 = state_33151__$1;
(statearr_33166_34403[(2)] = inst_33141);

(statearr_33166_34403[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__32582__auto__ = null;
var cljs$core$async$reduce_$_state_machine__32582__auto____0 = (function (){
var statearr_33167 = [null,null,null,null,null,null,null,null,null,null];
(statearr_33167[(0)] = cljs$core$async$reduce_$_state_machine__32582__auto__);

(statearr_33167[(1)] = (1));

return statearr_33167;
});
var cljs$core$async$reduce_$_state_machine__32582__auto____1 = (function (state_33151){
while(true){
var ret_value__32583__auto__ = (function (){try{while(true){
var result__32584__auto__ = switch__32581__auto__(state_33151);
if(cljs.core.keyword_identical_QMARK_(result__32584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32584__auto__;
}
break;
}
}catch (e33168){var ex__32585__auto__ = e33168;
var statearr_33169_34405 = state_33151;
(statearr_33169_34405[(2)] = ex__32585__auto__);


if(cljs.core.seq((state_33151[(4)]))){
var statearr_33170_34406 = state_33151;
(statearr_33170_34406[(1)] = cljs.core.first((state_33151[(4)])));

} else {
throw ex__32585__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34408 = state_33151;
state_33151 = G__34408;
continue;
} else {
return ret_value__32583__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__32582__auto__ = function(state_33151){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__32582__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__32582__auto____1.call(this,state_33151);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__32582__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__32582__auto____0;
cljs$core$async$reduce_$_state_machine__32582__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__32582__auto____1;
return cljs$core$async$reduce_$_state_machine__32582__auto__;
})()
})();
var state__32628__auto__ = (function (){var statearr_33171 = f__32627__auto__();
(statearr_33171[(6)] = c__32626__auto__);

return statearr_33171;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32628__auto__);
}));

return c__32626__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__32626__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32627__auto__ = (function (){var switch__32581__auto__ = (function (state_33177){
var state_val_33178 = (state_33177[(1)]);
if((state_val_33178 === (1))){
var inst_33172 = cljs.core.async.reduce(f__$1,init,ch);
var state_33177__$1 = state_33177;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33177__$1,(2),inst_33172);
} else {
if((state_val_33178 === (2))){
var inst_33174 = (state_33177[(2)]);
var inst_33175 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_33174) : f__$1.call(null,inst_33174));
var state_33177__$1 = state_33177;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33177__$1,inst_33175);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__32582__auto__ = null;
var cljs$core$async$transduce_$_state_machine__32582__auto____0 = (function (){
var statearr_33179 = [null,null,null,null,null,null,null];
(statearr_33179[(0)] = cljs$core$async$transduce_$_state_machine__32582__auto__);

(statearr_33179[(1)] = (1));

return statearr_33179;
});
var cljs$core$async$transduce_$_state_machine__32582__auto____1 = (function (state_33177){
while(true){
var ret_value__32583__auto__ = (function (){try{while(true){
var result__32584__auto__ = switch__32581__auto__(state_33177);
if(cljs.core.keyword_identical_QMARK_(result__32584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32584__auto__;
}
break;
}
}catch (e33180){var ex__32585__auto__ = e33180;
var statearr_33181_34409 = state_33177;
(statearr_33181_34409[(2)] = ex__32585__auto__);


if(cljs.core.seq((state_33177[(4)]))){
var statearr_33182_34410 = state_33177;
(statearr_33182_34410[(1)] = cljs.core.first((state_33177[(4)])));

} else {
throw ex__32585__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34411 = state_33177;
state_33177 = G__34411;
continue;
} else {
return ret_value__32583__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__32582__auto__ = function(state_33177){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__32582__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__32582__auto____1.call(this,state_33177);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__32582__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__32582__auto____0;
cljs$core$async$transduce_$_state_machine__32582__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__32582__auto____1;
return cljs$core$async$transduce_$_state_machine__32582__auto__;
})()
})();
var state__32628__auto__ = (function (){var statearr_33183 = f__32627__auto__();
(statearr_33183[(6)] = c__32626__auto__);

return statearr_33183;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32628__auto__);
}));

return c__32626__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__33185 = arguments.length;
switch (G__33185) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__32626__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32627__auto__ = (function (){var switch__32581__auto__ = (function (state_33210){
var state_val_33211 = (state_33210[(1)]);
if((state_val_33211 === (7))){
var inst_33192 = (state_33210[(2)]);
var state_33210__$1 = state_33210;
var statearr_33212_34414 = state_33210__$1;
(statearr_33212_34414[(2)] = inst_33192);

(statearr_33212_34414[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33211 === (1))){
var inst_33186 = cljs.core.seq(coll);
var inst_33187 = inst_33186;
var state_33210__$1 = (function (){var statearr_33213 = state_33210;
(statearr_33213[(7)] = inst_33187);

return statearr_33213;
})();
var statearr_33214_34415 = state_33210__$1;
(statearr_33214_34415[(2)] = null);

(statearr_33214_34415[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33211 === (4))){
var inst_33187 = (state_33210[(7)]);
var inst_33190 = cljs.core.first(inst_33187);
var state_33210__$1 = state_33210;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33210__$1,(7),ch,inst_33190);
} else {
if((state_val_33211 === (13))){
var inst_33204 = (state_33210[(2)]);
var state_33210__$1 = state_33210;
var statearr_33215_34416 = state_33210__$1;
(statearr_33215_34416[(2)] = inst_33204);

(statearr_33215_34416[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33211 === (6))){
var inst_33195 = (state_33210[(2)]);
var state_33210__$1 = state_33210;
if(cljs.core.truth_(inst_33195)){
var statearr_33216_34417 = state_33210__$1;
(statearr_33216_34417[(1)] = (8));

} else {
var statearr_33217_34418 = state_33210__$1;
(statearr_33217_34418[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33211 === (3))){
var inst_33208 = (state_33210[(2)]);
var state_33210__$1 = state_33210;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33210__$1,inst_33208);
} else {
if((state_val_33211 === (12))){
var state_33210__$1 = state_33210;
var statearr_33218_34419 = state_33210__$1;
(statearr_33218_34419[(2)] = null);

(statearr_33218_34419[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33211 === (2))){
var inst_33187 = (state_33210[(7)]);
var state_33210__$1 = state_33210;
if(cljs.core.truth_(inst_33187)){
var statearr_33219_34420 = state_33210__$1;
(statearr_33219_34420[(1)] = (4));

} else {
var statearr_33220_34421 = state_33210__$1;
(statearr_33220_34421[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33211 === (11))){
var inst_33201 = cljs.core.async.close_BANG_(ch);
var state_33210__$1 = state_33210;
var statearr_33221_34422 = state_33210__$1;
(statearr_33221_34422[(2)] = inst_33201);

(statearr_33221_34422[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33211 === (9))){
var state_33210__$1 = state_33210;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33222_34423 = state_33210__$1;
(statearr_33222_34423[(1)] = (11));

} else {
var statearr_33223_34424 = state_33210__$1;
(statearr_33223_34424[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33211 === (5))){
var inst_33187 = (state_33210[(7)]);
var state_33210__$1 = state_33210;
var statearr_33224_34425 = state_33210__$1;
(statearr_33224_34425[(2)] = inst_33187);

(statearr_33224_34425[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33211 === (10))){
var inst_33206 = (state_33210[(2)]);
var state_33210__$1 = state_33210;
var statearr_33225_34430 = state_33210__$1;
(statearr_33225_34430[(2)] = inst_33206);

(statearr_33225_34430[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33211 === (8))){
var inst_33187 = (state_33210[(7)]);
var inst_33197 = cljs.core.next(inst_33187);
var inst_33187__$1 = inst_33197;
var state_33210__$1 = (function (){var statearr_33226 = state_33210;
(statearr_33226[(7)] = inst_33187__$1);

return statearr_33226;
})();
var statearr_33227_34431 = state_33210__$1;
(statearr_33227_34431[(2)] = null);

(statearr_33227_34431[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32582__auto__ = null;
var cljs$core$async$state_machine__32582__auto____0 = (function (){
var statearr_33228 = [null,null,null,null,null,null,null,null];
(statearr_33228[(0)] = cljs$core$async$state_machine__32582__auto__);

(statearr_33228[(1)] = (1));

return statearr_33228;
});
var cljs$core$async$state_machine__32582__auto____1 = (function (state_33210){
while(true){
var ret_value__32583__auto__ = (function (){try{while(true){
var result__32584__auto__ = switch__32581__auto__(state_33210);
if(cljs.core.keyword_identical_QMARK_(result__32584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32584__auto__;
}
break;
}
}catch (e33229){var ex__32585__auto__ = e33229;
var statearr_33230_34432 = state_33210;
(statearr_33230_34432[(2)] = ex__32585__auto__);


if(cljs.core.seq((state_33210[(4)]))){
var statearr_33231_34433 = state_33210;
(statearr_33231_34433[(1)] = cljs.core.first((state_33210[(4)])));

} else {
throw ex__32585__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34434 = state_33210;
state_33210 = G__34434;
continue;
} else {
return ret_value__32583__auto__;
}
break;
}
});
cljs$core$async$state_machine__32582__auto__ = function(state_33210){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32582__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32582__auto____1.call(this,state_33210);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32582__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32582__auto____0;
cljs$core$async$state_machine__32582__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32582__auto____1;
return cljs$core$async$state_machine__32582__auto__;
})()
})();
var state__32628__auto__ = (function (){var statearr_33232 = f__32627__auto__();
(statearr_33232[(6)] = c__32626__auto__);

return statearr_33232;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32628__auto__);
}));

return c__32626__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__33234 = arguments.length;
switch (G__33234) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_34436 = (function (_){
var x__4509__auto__ = (((_ == null))?null:_);
var m__4510__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4510__auto__.call(null,_));
} else {
var m__4508__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4508__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_34436(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_34437 = (function (m,ch,close_QMARK_){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4510__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4508__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4508__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_34437(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_34438 = (function (m,ch){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4510__auto__.call(null,m,ch));
} else {
var m__4508__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4508__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_34438(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_34439 = (function (m){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4510__auto__.call(null,m));
} else {
var m__4508__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4508__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_34439(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33235 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33235 = (function (ch,cs,meta33236){
this.ch = ch;
this.cs = cs;
this.meta33236 = meta33236;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33235.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33237,meta33236__$1){
var self__ = this;
var _33237__$1 = this;
return (new cljs.core.async.t_cljs$core$async33235(self__.ch,self__.cs,meta33236__$1));
}));

(cljs.core.async.t_cljs$core$async33235.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33237){
var self__ = this;
var _33237__$1 = this;
return self__.meta33236;
}));

(cljs.core.async.t_cljs$core$async33235.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33235.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async33235.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33235.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async33235.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async33235.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async33235.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta33236","meta33236",1810752470,null)], null);
}));

(cljs.core.async.t_cljs$core$async33235.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33235.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33235");

(cljs.core.async.t_cljs$core$async33235.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async33235");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33235.
 */
cljs.core.async.__GT_t_cljs$core$async33235 = (function cljs$core$async$mult_$___GT_t_cljs$core$async33235(ch__$1,cs__$1,meta33236){
return (new cljs.core.async.t_cljs$core$async33235(ch__$1,cs__$1,meta33236));
});

}

return (new cljs.core.async.t_cljs$core$async33235(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__32626__auto___34441 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32627__auto__ = (function (){var switch__32581__auto__ = (function (state_33370){
var state_val_33371 = (state_33370[(1)]);
if((state_val_33371 === (7))){
var inst_33366 = (state_33370[(2)]);
var state_33370__$1 = state_33370;
var statearr_33372_34443 = state_33370__$1;
(statearr_33372_34443[(2)] = inst_33366);

(statearr_33372_34443[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33371 === (20))){
var inst_33271 = (state_33370[(7)]);
var inst_33283 = cljs.core.first(inst_33271);
var inst_33284 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33283,(0),null);
var inst_33285 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33283,(1),null);
var state_33370__$1 = (function (){var statearr_33373 = state_33370;
(statearr_33373[(8)] = inst_33284);

return statearr_33373;
})();
if(cljs.core.truth_(inst_33285)){
var statearr_33374_34444 = state_33370__$1;
(statearr_33374_34444[(1)] = (22));

} else {
var statearr_33375_34445 = state_33370__$1;
(statearr_33375_34445[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33371 === (27))){
var inst_33313 = (state_33370[(9)]);
var inst_33315 = (state_33370[(10)]);
var inst_33320 = (state_33370[(11)]);
var inst_33240 = (state_33370[(12)]);
var inst_33320__$1 = cljs.core._nth(inst_33313,inst_33315);
var inst_33321 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_33320__$1,inst_33240,done);
var state_33370__$1 = (function (){var statearr_33376 = state_33370;
(statearr_33376[(11)] = inst_33320__$1);

return statearr_33376;
})();
if(cljs.core.truth_(inst_33321)){
var statearr_33377_34446 = state_33370__$1;
(statearr_33377_34446[(1)] = (30));

} else {
var statearr_33378_34447 = state_33370__$1;
(statearr_33378_34447[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33371 === (1))){
var state_33370__$1 = state_33370;
var statearr_33379_34448 = state_33370__$1;
(statearr_33379_34448[(2)] = null);

(statearr_33379_34448[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33371 === (24))){
var inst_33271 = (state_33370[(7)]);
var inst_33290 = (state_33370[(2)]);
var inst_33291 = cljs.core.next(inst_33271);
var inst_33249 = inst_33291;
var inst_33250 = null;
var inst_33251 = (0);
var inst_33252 = (0);
var state_33370__$1 = (function (){var statearr_33380 = state_33370;
(statearr_33380[(13)] = inst_33251);

(statearr_33380[(14)] = inst_33249);

(statearr_33380[(15)] = inst_33290);

(statearr_33380[(16)] = inst_33250);

(statearr_33380[(17)] = inst_33252);

return statearr_33380;
})();
var statearr_33381_34449 = state_33370__$1;
(statearr_33381_34449[(2)] = null);

(statearr_33381_34449[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33371 === (39))){
var state_33370__$1 = state_33370;
var statearr_33385_34450 = state_33370__$1;
(statearr_33385_34450[(2)] = null);

(statearr_33385_34450[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33371 === (4))){
var inst_33240 = (state_33370[(12)]);
var inst_33240__$1 = (state_33370[(2)]);
var inst_33241 = (inst_33240__$1 == null);
var state_33370__$1 = (function (){var statearr_33386 = state_33370;
(statearr_33386[(12)] = inst_33240__$1);

return statearr_33386;
})();
if(cljs.core.truth_(inst_33241)){
var statearr_33387_34451 = state_33370__$1;
(statearr_33387_34451[(1)] = (5));

} else {
var statearr_33388_34452 = state_33370__$1;
(statearr_33388_34452[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33371 === (15))){
var inst_33251 = (state_33370[(13)]);
var inst_33249 = (state_33370[(14)]);
var inst_33250 = (state_33370[(16)]);
var inst_33252 = (state_33370[(17)]);
var inst_33267 = (state_33370[(2)]);
var inst_33268 = (inst_33252 + (1));
var tmp33382 = inst_33251;
var tmp33383 = inst_33249;
var tmp33384 = inst_33250;
var inst_33249__$1 = tmp33383;
var inst_33250__$1 = tmp33384;
var inst_33251__$1 = tmp33382;
var inst_33252__$1 = inst_33268;
var state_33370__$1 = (function (){var statearr_33389 = state_33370;
(statearr_33389[(13)] = inst_33251__$1);

(statearr_33389[(18)] = inst_33267);

(statearr_33389[(14)] = inst_33249__$1);

(statearr_33389[(16)] = inst_33250__$1);

(statearr_33389[(17)] = inst_33252__$1);

return statearr_33389;
})();
var statearr_33390_34453 = state_33370__$1;
(statearr_33390_34453[(2)] = null);

(statearr_33390_34453[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33371 === (21))){
var inst_33294 = (state_33370[(2)]);
var state_33370__$1 = state_33370;
var statearr_33394_34454 = state_33370__$1;
(statearr_33394_34454[(2)] = inst_33294);

(statearr_33394_34454[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33371 === (31))){
var inst_33320 = (state_33370[(11)]);
var inst_33324 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_33320);
var state_33370__$1 = state_33370;
var statearr_33395_34455 = state_33370__$1;
(statearr_33395_34455[(2)] = inst_33324);

(statearr_33395_34455[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33371 === (32))){
var inst_33313 = (state_33370[(9)]);
var inst_33312 = (state_33370[(19)]);
var inst_33315 = (state_33370[(10)]);
var inst_33314 = (state_33370[(20)]);
var inst_33326 = (state_33370[(2)]);
var inst_33327 = (inst_33315 + (1));
var tmp33391 = inst_33313;
var tmp33392 = inst_33312;
var tmp33393 = inst_33314;
var inst_33312__$1 = tmp33392;
var inst_33313__$1 = tmp33391;
var inst_33314__$1 = tmp33393;
var inst_33315__$1 = inst_33327;
var state_33370__$1 = (function (){var statearr_33396 = state_33370;
(statearr_33396[(9)] = inst_33313__$1);

(statearr_33396[(19)] = inst_33312__$1);

(statearr_33396[(10)] = inst_33315__$1);

(statearr_33396[(21)] = inst_33326);

(statearr_33396[(20)] = inst_33314__$1);

return statearr_33396;
})();
var statearr_33397_34460 = state_33370__$1;
(statearr_33397_34460[(2)] = null);

(statearr_33397_34460[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33371 === (40))){
var inst_33339 = (state_33370[(22)]);
var inst_33343 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_33339);
var state_33370__$1 = state_33370;
var statearr_33398_34464 = state_33370__$1;
(statearr_33398_34464[(2)] = inst_33343);

(statearr_33398_34464[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33371 === (33))){
var inst_33330 = (state_33370[(23)]);
var inst_33332 = cljs.core.chunked_seq_QMARK_(inst_33330);
var state_33370__$1 = state_33370;
if(inst_33332){
var statearr_33399_34465 = state_33370__$1;
(statearr_33399_34465[(1)] = (36));

} else {
var statearr_33400_34466 = state_33370__$1;
(statearr_33400_34466[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33371 === (13))){
var inst_33261 = (state_33370[(24)]);
var inst_33264 = cljs.core.async.close_BANG_(inst_33261);
var state_33370__$1 = state_33370;
var statearr_33401_34467 = state_33370__$1;
(statearr_33401_34467[(2)] = inst_33264);

(statearr_33401_34467[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33371 === (22))){
var inst_33284 = (state_33370[(8)]);
var inst_33287 = cljs.core.async.close_BANG_(inst_33284);
var state_33370__$1 = state_33370;
var statearr_33402_34468 = state_33370__$1;
(statearr_33402_34468[(2)] = inst_33287);

(statearr_33402_34468[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33371 === (36))){
var inst_33330 = (state_33370[(23)]);
var inst_33334 = cljs.core.chunk_first(inst_33330);
var inst_33335 = cljs.core.chunk_rest(inst_33330);
var inst_33336 = cljs.core.count(inst_33334);
var inst_33312 = inst_33335;
var inst_33313 = inst_33334;
var inst_33314 = inst_33336;
var inst_33315 = (0);
var state_33370__$1 = (function (){var statearr_33403 = state_33370;
(statearr_33403[(9)] = inst_33313);

(statearr_33403[(19)] = inst_33312);

(statearr_33403[(10)] = inst_33315);

(statearr_33403[(20)] = inst_33314);

return statearr_33403;
})();
var statearr_33404_34469 = state_33370__$1;
(statearr_33404_34469[(2)] = null);

(statearr_33404_34469[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33371 === (41))){
var inst_33330 = (state_33370[(23)]);
var inst_33345 = (state_33370[(2)]);
var inst_33346 = cljs.core.next(inst_33330);
var inst_33312 = inst_33346;
var inst_33313 = null;
var inst_33314 = (0);
var inst_33315 = (0);
var state_33370__$1 = (function (){var statearr_33405 = state_33370;
(statearr_33405[(9)] = inst_33313);

(statearr_33405[(19)] = inst_33312);

(statearr_33405[(10)] = inst_33315);

(statearr_33405[(25)] = inst_33345);

(statearr_33405[(20)] = inst_33314);

return statearr_33405;
})();
var statearr_33406_34473 = state_33370__$1;
(statearr_33406_34473[(2)] = null);

(statearr_33406_34473[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33371 === (43))){
var state_33370__$1 = state_33370;
var statearr_33407_34474 = state_33370__$1;
(statearr_33407_34474[(2)] = null);

(statearr_33407_34474[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33371 === (29))){
var inst_33354 = (state_33370[(2)]);
var state_33370__$1 = state_33370;
var statearr_33408_34475 = state_33370__$1;
(statearr_33408_34475[(2)] = inst_33354);

(statearr_33408_34475[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33371 === (44))){
var inst_33363 = (state_33370[(2)]);
var state_33370__$1 = (function (){var statearr_33409 = state_33370;
(statearr_33409[(26)] = inst_33363);

return statearr_33409;
})();
var statearr_33410_34479 = state_33370__$1;
(statearr_33410_34479[(2)] = null);

(statearr_33410_34479[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33371 === (6))){
var inst_33304 = (state_33370[(27)]);
var inst_33303 = cljs.core.deref(cs);
var inst_33304__$1 = cljs.core.keys(inst_33303);
var inst_33305 = cljs.core.count(inst_33304__$1);
var inst_33306 = cljs.core.reset_BANG_(dctr,inst_33305);
var inst_33311 = cljs.core.seq(inst_33304__$1);
var inst_33312 = inst_33311;
var inst_33313 = null;
var inst_33314 = (0);
var inst_33315 = (0);
var state_33370__$1 = (function (){var statearr_33411 = state_33370;
(statearr_33411[(9)] = inst_33313);

(statearr_33411[(28)] = inst_33306);

(statearr_33411[(19)] = inst_33312);

(statearr_33411[(10)] = inst_33315);

(statearr_33411[(20)] = inst_33314);

(statearr_33411[(27)] = inst_33304__$1);

return statearr_33411;
})();
var statearr_33412_34480 = state_33370__$1;
(statearr_33412_34480[(2)] = null);

(statearr_33412_34480[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33371 === (28))){
var inst_33330 = (state_33370[(23)]);
var inst_33312 = (state_33370[(19)]);
var inst_33330__$1 = cljs.core.seq(inst_33312);
var state_33370__$1 = (function (){var statearr_33413 = state_33370;
(statearr_33413[(23)] = inst_33330__$1);

return statearr_33413;
})();
if(inst_33330__$1){
var statearr_33414_34481 = state_33370__$1;
(statearr_33414_34481[(1)] = (33));

} else {
var statearr_33415_34485 = state_33370__$1;
(statearr_33415_34485[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33371 === (25))){
var inst_33315 = (state_33370[(10)]);
var inst_33314 = (state_33370[(20)]);
var inst_33317 = (inst_33315 < inst_33314);
var inst_33318 = inst_33317;
var state_33370__$1 = state_33370;
if(cljs.core.truth_(inst_33318)){
var statearr_33416_34486 = state_33370__$1;
(statearr_33416_34486[(1)] = (27));

} else {
var statearr_33417_34487 = state_33370__$1;
(statearr_33417_34487[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33371 === (34))){
var state_33370__$1 = state_33370;
var statearr_33418_34488 = state_33370__$1;
(statearr_33418_34488[(2)] = null);

(statearr_33418_34488[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33371 === (17))){
var state_33370__$1 = state_33370;
var statearr_33419_34489 = state_33370__$1;
(statearr_33419_34489[(2)] = null);

(statearr_33419_34489[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33371 === (3))){
var inst_33368 = (state_33370[(2)]);
var state_33370__$1 = state_33370;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33370__$1,inst_33368);
} else {
if((state_val_33371 === (12))){
var inst_33299 = (state_33370[(2)]);
var state_33370__$1 = state_33370;
var statearr_33420_34490 = state_33370__$1;
(statearr_33420_34490[(2)] = inst_33299);

(statearr_33420_34490[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33371 === (2))){
var state_33370__$1 = state_33370;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33370__$1,(4),ch);
} else {
if((state_val_33371 === (23))){
var state_33370__$1 = state_33370;
var statearr_33421_34491 = state_33370__$1;
(statearr_33421_34491[(2)] = null);

(statearr_33421_34491[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33371 === (35))){
var inst_33352 = (state_33370[(2)]);
var state_33370__$1 = state_33370;
var statearr_33422_34492 = state_33370__$1;
(statearr_33422_34492[(2)] = inst_33352);

(statearr_33422_34492[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33371 === (19))){
var inst_33271 = (state_33370[(7)]);
var inst_33275 = cljs.core.chunk_first(inst_33271);
var inst_33276 = cljs.core.chunk_rest(inst_33271);
var inst_33277 = cljs.core.count(inst_33275);
var inst_33249 = inst_33276;
var inst_33250 = inst_33275;
var inst_33251 = inst_33277;
var inst_33252 = (0);
var state_33370__$1 = (function (){var statearr_33423 = state_33370;
(statearr_33423[(13)] = inst_33251);

(statearr_33423[(14)] = inst_33249);

(statearr_33423[(16)] = inst_33250);

(statearr_33423[(17)] = inst_33252);

return statearr_33423;
})();
var statearr_33424_34497 = state_33370__$1;
(statearr_33424_34497[(2)] = null);

(statearr_33424_34497[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33371 === (11))){
var inst_33271 = (state_33370[(7)]);
var inst_33249 = (state_33370[(14)]);
var inst_33271__$1 = cljs.core.seq(inst_33249);
var state_33370__$1 = (function (){var statearr_33425 = state_33370;
(statearr_33425[(7)] = inst_33271__$1);

return statearr_33425;
})();
if(inst_33271__$1){
var statearr_33426_34501 = state_33370__$1;
(statearr_33426_34501[(1)] = (16));

} else {
var statearr_33427_34502 = state_33370__$1;
(statearr_33427_34502[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33371 === (9))){
var inst_33301 = (state_33370[(2)]);
var state_33370__$1 = state_33370;
var statearr_33428_34503 = state_33370__$1;
(statearr_33428_34503[(2)] = inst_33301);

(statearr_33428_34503[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33371 === (5))){
var inst_33247 = cljs.core.deref(cs);
var inst_33248 = cljs.core.seq(inst_33247);
var inst_33249 = inst_33248;
var inst_33250 = null;
var inst_33251 = (0);
var inst_33252 = (0);
var state_33370__$1 = (function (){var statearr_33429 = state_33370;
(statearr_33429[(13)] = inst_33251);

(statearr_33429[(14)] = inst_33249);

(statearr_33429[(16)] = inst_33250);

(statearr_33429[(17)] = inst_33252);

return statearr_33429;
})();
var statearr_33430_34504 = state_33370__$1;
(statearr_33430_34504[(2)] = null);

(statearr_33430_34504[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33371 === (14))){
var state_33370__$1 = state_33370;
var statearr_33431_34505 = state_33370__$1;
(statearr_33431_34505[(2)] = null);

(statearr_33431_34505[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33371 === (45))){
var inst_33360 = (state_33370[(2)]);
var state_33370__$1 = state_33370;
var statearr_33432_34506 = state_33370__$1;
(statearr_33432_34506[(2)] = inst_33360);

(statearr_33432_34506[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33371 === (26))){
var inst_33304 = (state_33370[(27)]);
var inst_33356 = (state_33370[(2)]);
var inst_33357 = cljs.core.seq(inst_33304);
var state_33370__$1 = (function (){var statearr_33433 = state_33370;
(statearr_33433[(29)] = inst_33356);

return statearr_33433;
})();
if(inst_33357){
var statearr_33434_34510 = state_33370__$1;
(statearr_33434_34510[(1)] = (42));

} else {
var statearr_33435_34511 = state_33370__$1;
(statearr_33435_34511[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33371 === (16))){
var inst_33271 = (state_33370[(7)]);
var inst_33273 = cljs.core.chunked_seq_QMARK_(inst_33271);
var state_33370__$1 = state_33370;
if(inst_33273){
var statearr_33436_34512 = state_33370__$1;
(statearr_33436_34512[(1)] = (19));

} else {
var statearr_33437_34513 = state_33370__$1;
(statearr_33437_34513[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33371 === (38))){
var inst_33349 = (state_33370[(2)]);
var state_33370__$1 = state_33370;
var statearr_33438_34517 = state_33370__$1;
(statearr_33438_34517[(2)] = inst_33349);

(statearr_33438_34517[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33371 === (30))){
var state_33370__$1 = state_33370;
var statearr_33439_34518 = state_33370__$1;
(statearr_33439_34518[(2)] = null);

(statearr_33439_34518[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33371 === (10))){
var inst_33250 = (state_33370[(16)]);
var inst_33252 = (state_33370[(17)]);
var inst_33260 = cljs.core._nth(inst_33250,inst_33252);
var inst_33261 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33260,(0),null);
var inst_33262 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33260,(1),null);
var state_33370__$1 = (function (){var statearr_33440 = state_33370;
(statearr_33440[(24)] = inst_33261);

return statearr_33440;
})();
if(cljs.core.truth_(inst_33262)){
var statearr_33441_34519 = state_33370__$1;
(statearr_33441_34519[(1)] = (13));

} else {
var statearr_33442_34520 = state_33370__$1;
(statearr_33442_34520[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33371 === (18))){
var inst_33297 = (state_33370[(2)]);
var state_33370__$1 = state_33370;
var statearr_33443_34521 = state_33370__$1;
(statearr_33443_34521[(2)] = inst_33297);

(statearr_33443_34521[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33371 === (42))){
var state_33370__$1 = state_33370;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33370__$1,(45),dchan);
} else {
if((state_val_33371 === (37))){
var inst_33330 = (state_33370[(23)]);
var inst_33240 = (state_33370[(12)]);
var inst_33339 = (state_33370[(22)]);
var inst_33339__$1 = cljs.core.first(inst_33330);
var inst_33340 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_33339__$1,inst_33240,done);
var state_33370__$1 = (function (){var statearr_33444 = state_33370;
(statearr_33444[(22)] = inst_33339__$1);

return statearr_33444;
})();
if(cljs.core.truth_(inst_33340)){
var statearr_33445_34525 = state_33370__$1;
(statearr_33445_34525[(1)] = (39));

} else {
var statearr_33446_34526 = state_33370__$1;
(statearr_33446_34526[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33371 === (8))){
var inst_33251 = (state_33370[(13)]);
var inst_33252 = (state_33370[(17)]);
var inst_33254 = (inst_33252 < inst_33251);
var inst_33255 = inst_33254;
var state_33370__$1 = state_33370;
if(cljs.core.truth_(inst_33255)){
var statearr_33447_34527 = state_33370__$1;
(statearr_33447_34527[(1)] = (10));

} else {
var statearr_33448_34528 = state_33370__$1;
(statearr_33448_34528[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__32582__auto__ = null;
var cljs$core$async$mult_$_state_machine__32582__auto____0 = (function (){
var statearr_33449 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33449[(0)] = cljs$core$async$mult_$_state_machine__32582__auto__);

(statearr_33449[(1)] = (1));

return statearr_33449;
});
var cljs$core$async$mult_$_state_machine__32582__auto____1 = (function (state_33370){
while(true){
var ret_value__32583__auto__ = (function (){try{while(true){
var result__32584__auto__ = switch__32581__auto__(state_33370);
if(cljs.core.keyword_identical_QMARK_(result__32584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32584__auto__;
}
break;
}
}catch (e33450){var ex__32585__auto__ = e33450;
var statearr_33451_34529 = state_33370;
(statearr_33451_34529[(2)] = ex__32585__auto__);


if(cljs.core.seq((state_33370[(4)]))){
var statearr_33452_34530 = state_33370;
(statearr_33452_34530[(1)] = cljs.core.first((state_33370[(4)])));

} else {
throw ex__32585__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34532 = state_33370;
state_33370 = G__34532;
continue;
} else {
return ret_value__32583__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__32582__auto__ = function(state_33370){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__32582__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__32582__auto____1.call(this,state_33370);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__32582__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__32582__auto____0;
cljs$core$async$mult_$_state_machine__32582__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__32582__auto____1;
return cljs$core$async$mult_$_state_machine__32582__auto__;
})()
})();
var state__32628__auto__ = (function (){var statearr_33453 = f__32627__auto__();
(statearr_33453[(6)] = c__32626__auto___34441);

return statearr_33453;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32628__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__33455 = arguments.length;
switch (G__33455) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_34534 = (function (m,ch){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4510__auto__.call(null,m,ch));
} else {
var m__4508__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4508__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_34534(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_34535 = (function (m,ch){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4510__auto__.call(null,m,ch));
} else {
var m__4508__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4508__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_34535(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_34536 = (function (m){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4510__auto__.call(null,m));
} else {
var m__4508__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4508__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_34536(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_34537 = (function (m,state_map){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4510__auto__.call(null,m,state_map));
} else {
var m__4508__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4508__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_34537(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_34538 = (function (m,mode){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4510__auto__.call(null,m,mode));
} else {
var m__4508__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4508__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_34538(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___34539 = arguments.length;
var i__4819__auto___34540 = (0);
while(true){
if((i__4819__auto___34540 < len__4818__auto___34539)){
args__4824__auto__.push((arguments[i__4819__auto___34540]));

var G__34541 = (i__4819__auto___34540 + (1));
i__4819__auto___34540 = G__34541;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((3) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4825__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__33460){
var map__33461 = p__33460;
var map__33461__$1 = cljs.core.__destructure_map(map__33461);
var opts = map__33461__$1;
var statearr_33462_34542 = state;
(statearr_33462_34542[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_33463_34543 = state;
(statearr_33463_34543[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_33464_34544 = state;
(statearr_33464_34544[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq33456){
var G__33457 = cljs.core.first(seq33456);
var seq33456__$1 = cljs.core.next(seq33456);
var G__33458 = cljs.core.first(seq33456__$1);
var seq33456__$2 = cljs.core.next(seq33456__$1);
var G__33459 = cljs.core.first(seq33456__$2);
var seq33456__$3 = cljs.core.next(seq33456__$2);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33457,G__33458,G__33459,seq33456__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33465 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33465 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta33466){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta33466 = meta33466;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33465.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33467,meta33466__$1){
var self__ = this;
var _33467__$1 = this;
return (new cljs.core.async.t_cljs$core$async33465(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta33466__$1));
}));

(cljs.core.async.t_cljs$core$async33465.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33467){
var self__ = this;
var _33467__$1 = this;
return self__.meta33466;
}));

(cljs.core.async.t_cljs$core$async33465.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33465.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async33465.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33465.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33465.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33465.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33465.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33465.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33465.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta33466","meta33466",1813354691,null)], null);
}));

(cljs.core.async.t_cljs$core$async33465.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33465.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33465");

(cljs.core.async.t_cljs$core$async33465.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async33465");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33465.
 */
cljs.core.async.__GT_t_cljs$core$async33465 = (function cljs$core$async$mix_$___GT_t_cljs$core$async33465(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta33466){
return (new cljs.core.async.t_cljs$core$async33465(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta33466));
});

}

return (new cljs.core.async.t_cljs$core$async33465(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32626__auto___34545 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32627__auto__ = (function (){var switch__32581__auto__ = (function (state_33535){
var state_val_33536 = (state_33535[(1)]);
if((state_val_33536 === (7))){
var inst_33495 = (state_33535[(2)]);
var state_33535__$1 = state_33535;
if(cljs.core.truth_(inst_33495)){
var statearr_33537_34546 = state_33535__$1;
(statearr_33537_34546[(1)] = (8));

} else {
var statearr_33538_34547 = state_33535__$1;
(statearr_33538_34547[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33536 === (20))){
var inst_33488 = (state_33535[(7)]);
var state_33535__$1 = state_33535;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33535__$1,(23),out,inst_33488);
} else {
if((state_val_33536 === (1))){
var inst_33471 = calc_state();
var inst_33472 = cljs.core.__destructure_map(inst_33471);
var inst_33473 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33472,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33474 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33472,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33475 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33472,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_33476 = inst_33471;
var state_33535__$1 = (function (){var statearr_33539 = state_33535;
(statearr_33539[(8)] = inst_33474);

(statearr_33539[(9)] = inst_33475);

(statearr_33539[(10)] = inst_33473);

(statearr_33539[(11)] = inst_33476);

return statearr_33539;
})();
var statearr_33540_34548 = state_33535__$1;
(statearr_33540_34548[(2)] = null);

(statearr_33540_34548[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33536 === (24))){
var inst_33479 = (state_33535[(12)]);
var inst_33476 = inst_33479;
var state_33535__$1 = (function (){var statearr_33541 = state_33535;
(statearr_33541[(11)] = inst_33476);

return statearr_33541;
})();
var statearr_33542_34549 = state_33535__$1;
(statearr_33542_34549[(2)] = null);

(statearr_33542_34549[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33536 === (4))){
var inst_33488 = (state_33535[(7)]);
var inst_33490 = (state_33535[(13)]);
var inst_33487 = (state_33535[(2)]);
var inst_33488__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33487,(0),null);
var inst_33489 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33487,(1),null);
var inst_33490__$1 = (inst_33488__$1 == null);
var state_33535__$1 = (function (){var statearr_33543 = state_33535;
(statearr_33543[(7)] = inst_33488__$1);

(statearr_33543[(14)] = inst_33489);

(statearr_33543[(13)] = inst_33490__$1);

return statearr_33543;
})();
if(cljs.core.truth_(inst_33490__$1)){
var statearr_33544_34550 = state_33535__$1;
(statearr_33544_34550[(1)] = (5));

} else {
var statearr_33545_34551 = state_33535__$1;
(statearr_33545_34551[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33536 === (15))){
var inst_33480 = (state_33535[(15)]);
var inst_33509 = (state_33535[(16)]);
var inst_33509__$1 = cljs.core.empty_QMARK_(inst_33480);
var state_33535__$1 = (function (){var statearr_33546 = state_33535;
(statearr_33546[(16)] = inst_33509__$1);

return statearr_33546;
})();
if(inst_33509__$1){
var statearr_33547_34552 = state_33535__$1;
(statearr_33547_34552[(1)] = (17));

} else {
var statearr_33548_34553 = state_33535__$1;
(statearr_33548_34553[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33536 === (21))){
var inst_33479 = (state_33535[(12)]);
var inst_33476 = inst_33479;
var state_33535__$1 = (function (){var statearr_33549 = state_33535;
(statearr_33549[(11)] = inst_33476);

return statearr_33549;
})();
var statearr_33550_34554 = state_33535__$1;
(statearr_33550_34554[(2)] = null);

(statearr_33550_34554[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33536 === (13))){
var inst_33502 = (state_33535[(2)]);
var inst_33503 = calc_state();
var inst_33476 = inst_33503;
var state_33535__$1 = (function (){var statearr_33551 = state_33535;
(statearr_33551[(17)] = inst_33502);

(statearr_33551[(11)] = inst_33476);

return statearr_33551;
})();
var statearr_33552_34555 = state_33535__$1;
(statearr_33552_34555[(2)] = null);

(statearr_33552_34555[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33536 === (22))){
var inst_33529 = (state_33535[(2)]);
var state_33535__$1 = state_33535;
var statearr_33553_34556 = state_33535__$1;
(statearr_33553_34556[(2)] = inst_33529);

(statearr_33553_34556[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33536 === (6))){
var inst_33489 = (state_33535[(14)]);
var inst_33493 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33489,change);
var state_33535__$1 = state_33535;
var statearr_33554_34557 = state_33535__$1;
(statearr_33554_34557[(2)] = inst_33493);

(statearr_33554_34557[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33536 === (25))){
var state_33535__$1 = state_33535;
var statearr_33555_34558 = state_33535__$1;
(statearr_33555_34558[(2)] = null);

(statearr_33555_34558[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33536 === (17))){
var inst_33489 = (state_33535[(14)]);
var inst_33481 = (state_33535[(18)]);
var inst_33511 = (inst_33481.cljs$core$IFn$_invoke$arity$1 ? inst_33481.cljs$core$IFn$_invoke$arity$1(inst_33489) : inst_33481.call(null,inst_33489));
var inst_33512 = cljs.core.not(inst_33511);
var state_33535__$1 = state_33535;
var statearr_33556_34559 = state_33535__$1;
(statearr_33556_34559[(2)] = inst_33512);

(statearr_33556_34559[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33536 === (3))){
var inst_33533 = (state_33535[(2)]);
var state_33535__$1 = state_33535;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33535__$1,inst_33533);
} else {
if((state_val_33536 === (12))){
var state_33535__$1 = state_33535;
var statearr_33557_34560 = state_33535__$1;
(statearr_33557_34560[(2)] = null);

(statearr_33557_34560[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33536 === (2))){
var inst_33479 = (state_33535[(12)]);
var inst_33476 = (state_33535[(11)]);
var inst_33479__$1 = cljs.core.__destructure_map(inst_33476);
var inst_33480 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33479__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33481 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33479__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33482 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33479__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_33535__$1 = (function (){var statearr_33558 = state_33535;
(statearr_33558[(15)] = inst_33480);

(statearr_33558[(12)] = inst_33479__$1);

(statearr_33558[(18)] = inst_33481);

return statearr_33558;
})();
return cljs.core.async.ioc_alts_BANG_(state_33535__$1,(4),inst_33482);
} else {
if((state_val_33536 === (23))){
var inst_33520 = (state_33535[(2)]);
var state_33535__$1 = state_33535;
if(cljs.core.truth_(inst_33520)){
var statearr_33559_34561 = state_33535__$1;
(statearr_33559_34561[(1)] = (24));

} else {
var statearr_33560_34562 = state_33535__$1;
(statearr_33560_34562[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33536 === (19))){
var inst_33515 = (state_33535[(2)]);
var state_33535__$1 = state_33535;
var statearr_33561_34563 = state_33535__$1;
(statearr_33561_34563[(2)] = inst_33515);

(statearr_33561_34563[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33536 === (11))){
var inst_33489 = (state_33535[(14)]);
var inst_33499 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_33489);
var state_33535__$1 = state_33535;
var statearr_33562_34564 = state_33535__$1;
(statearr_33562_34564[(2)] = inst_33499);

(statearr_33562_34564[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33536 === (9))){
var inst_33480 = (state_33535[(15)]);
var inst_33506 = (state_33535[(19)]);
var inst_33489 = (state_33535[(14)]);
var inst_33506__$1 = (inst_33480.cljs$core$IFn$_invoke$arity$1 ? inst_33480.cljs$core$IFn$_invoke$arity$1(inst_33489) : inst_33480.call(null,inst_33489));
var state_33535__$1 = (function (){var statearr_33563 = state_33535;
(statearr_33563[(19)] = inst_33506__$1);

return statearr_33563;
})();
if(cljs.core.truth_(inst_33506__$1)){
var statearr_33564_34565 = state_33535__$1;
(statearr_33564_34565[(1)] = (14));

} else {
var statearr_33565_34566 = state_33535__$1;
(statearr_33565_34566[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33536 === (5))){
var inst_33490 = (state_33535[(13)]);
var state_33535__$1 = state_33535;
var statearr_33566_34567 = state_33535__$1;
(statearr_33566_34567[(2)] = inst_33490);

(statearr_33566_34567[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33536 === (14))){
var inst_33506 = (state_33535[(19)]);
var state_33535__$1 = state_33535;
var statearr_33567_34568 = state_33535__$1;
(statearr_33567_34568[(2)] = inst_33506);

(statearr_33567_34568[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33536 === (26))){
var inst_33525 = (state_33535[(2)]);
var state_33535__$1 = state_33535;
var statearr_33568_34569 = state_33535__$1;
(statearr_33568_34569[(2)] = inst_33525);

(statearr_33568_34569[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33536 === (16))){
var inst_33517 = (state_33535[(2)]);
var state_33535__$1 = state_33535;
if(cljs.core.truth_(inst_33517)){
var statearr_33569_34571 = state_33535__$1;
(statearr_33569_34571[(1)] = (20));

} else {
var statearr_33570_34572 = state_33535__$1;
(statearr_33570_34572[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33536 === (10))){
var inst_33531 = (state_33535[(2)]);
var state_33535__$1 = state_33535;
var statearr_33571_34573 = state_33535__$1;
(statearr_33571_34573[(2)] = inst_33531);

(statearr_33571_34573[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33536 === (18))){
var inst_33509 = (state_33535[(16)]);
var state_33535__$1 = state_33535;
var statearr_33572_34574 = state_33535__$1;
(statearr_33572_34574[(2)] = inst_33509);

(statearr_33572_34574[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33536 === (8))){
var inst_33488 = (state_33535[(7)]);
var inst_33497 = (inst_33488 == null);
var state_33535__$1 = state_33535;
if(cljs.core.truth_(inst_33497)){
var statearr_33573_34575 = state_33535__$1;
(statearr_33573_34575[(1)] = (11));

} else {
var statearr_33574_34576 = state_33535__$1;
(statearr_33574_34576[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__32582__auto__ = null;
var cljs$core$async$mix_$_state_machine__32582__auto____0 = (function (){
var statearr_33575 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33575[(0)] = cljs$core$async$mix_$_state_machine__32582__auto__);

(statearr_33575[(1)] = (1));

return statearr_33575;
});
var cljs$core$async$mix_$_state_machine__32582__auto____1 = (function (state_33535){
while(true){
var ret_value__32583__auto__ = (function (){try{while(true){
var result__32584__auto__ = switch__32581__auto__(state_33535);
if(cljs.core.keyword_identical_QMARK_(result__32584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32584__auto__;
}
break;
}
}catch (e33576){var ex__32585__auto__ = e33576;
var statearr_33577_34577 = state_33535;
(statearr_33577_34577[(2)] = ex__32585__auto__);


if(cljs.core.seq((state_33535[(4)]))){
var statearr_33578_34579 = state_33535;
(statearr_33578_34579[(1)] = cljs.core.first((state_33535[(4)])));

} else {
throw ex__32585__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34580 = state_33535;
state_33535 = G__34580;
continue;
} else {
return ret_value__32583__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__32582__auto__ = function(state_33535){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__32582__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__32582__auto____1.call(this,state_33535);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__32582__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__32582__auto____0;
cljs$core$async$mix_$_state_machine__32582__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__32582__auto____1;
return cljs$core$async$mix_$_state_machine__32582__auto__;
})()
})();
var state__32628__auto__ = (function (){var statearr_33579 = f__32627__auto__();
(statearr_33579[(6)] = c__32626__auto___34545);

return statearr_33579;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32628__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_34585 = (function (p,v,ch,close_QMARK_){
var x__4509__auto__ = (((p == null))?null:p);
var m__4510__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4510__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4508__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4508__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_34585(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_34588 = (function (p,v,ch){
var x__4509__auto__ = (((p == null))?null:p);
var m__4510__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4510__auto__.call(null,p,v,ch));
} else {
var m__4508__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4508__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_34588(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_34589 = (function() {
var G__34590 = null;
var G__34590__1 = (function (p){
var x__4509__auto__ = (((p == null))?null:p);
var m__4510__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4510__auto__.call(null,p));
} else {
var m__4508__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4508__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__34590__2 = (function (p,v){
var x__4509__auto__ = (((p == null))?null:p);
var m__4510__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4510__auto__.call(null,p,v));
} else {
var m__4508__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4508__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__34590 = function(p,v){
switch(arguments.length){
case 1:
return G__34590__1.call(this,p);
case 2:
return G__34590__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__34590.cljs$core$IFn$_invoke$arity$1 = G__34590__1;
G__34590.cljs$core$IFn$_invoke$arity$2 = G__34590__2;
return G__34590;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__33581 = arguments.length;
switch (G__33581) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_34589(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_34589(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__33584 = arguments.length;
switch (G__33584) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4212__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__33582_SHARP_){
if(cljs.core.truth_((p1__33582_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__33582_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__33582_SHARP_.call(null,topic)))){
return p1__33582_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__33582_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33585 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33585 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta33586){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta33586 = meta33586;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33585.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33587,meta33586__$1){
var self__ = this;
var _33587__$1 = this;
return (new cljs.core.async.t_cljs$core$async33585(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta33586__$1));
}));

(cljs.core.async.t_cljs$core$async33585.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33587){
var self__ = this;
var _33587__$1 = this;
return self__.meta33586;
}));

(cljs.core.async.t_cljs$core$async33585.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33585.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async33585.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33585.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async33585.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async33585.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async33585.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async33585.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta33586","meta33586",476975768,null)], null);
}));

(cljs.core.async.t_cljs$core$async33585.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33585.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33585");

(cljs.core.async.t_cljs$core$async33585.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async33585");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33585.
 */
cljs.core.async.__GT_t_cljs$core$async33585 = (function cljs$core$async$__GT_t_cljs$core$async33585(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta33586){
return (new cljs.core.async.t_cljs$core$async33585(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta33586));
});

}

return (new cljs.core.async.t_cljs$core$async33585(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32626__auto___34608 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32627__auto__ = (function (){var switch__32581__auto__ = (function (state_33659){
var state_val_33660 = (state_33659[(1)]);
if((state_val_33660 === (7))){
var inst_33655 = (state_33659[(2)]);
var state_33659__$1 = state_33659;
var statearr_33661_34615 = state_33659__$1;
(statearr_33661_34615[(2)] = inst_33655);

(statearr_33661_34615[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33660 === (20))){
var state_33659__$1 = state_33659;
var statearr_33662_34616 = state_33659__$1;
(statearr_33662_34616[(2)] = null);

(statearr_33662_34616[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33660 === (1))){
var state_33659__$1 = state_33659;
var statearr_33663_34617 = state_33659__$1;
(statearr_33663_34617[(2)] = null);

(statearr_33663_34617[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33660 === (24))){
var inst_33638 = (state_33659[(7)]);
var inst_33647 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_33638);
var state_33659__$1 = state_33659;
var statearr_33664_34618 = state_33659__$1;
(statearr_33664_34618[(2)] = inst_33647);

(statearr_33664_34618[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33660 === (4))){
var inst_33590 = (state_33659[(8)]);
var inst_33590__$1 = (state_33659[(2)]);
var inst_33591 = (inst_33590__$1 == null);
var state_33659__$1 = (function (){var statearr_33665 = state_33659;
(statearr_33665[(8)] = inst_33590__$1);

return statearr_33665;
})();
if(cljs.core.truth_(inst_33591)){
var statearr_33666_34619 = state_33659__$1;
(statearr_33666_34619[(1)] = (5));

} else {
var statearr_33667_34620 = state_33659__$1;
(statearr_33667_34620[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33660 === (15))){
var inst_33632 = (state_33659[(2)]);
var state_33659__$1 = state_33659;
var statearr_33668_34621 = state_33659__$1;
(statearr_33668_34621[(2)] = inst_33632);

(statearr_33668_34621[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33660 === (21))){
var inst_33652 = (state_33659[(2)]);
var state_33659__$1 = (function (){var statearr_33669 = state_33659;
(statearr_33669[(9)] = inst_33652);

return statearr_33669;
})();
var statearr_33670_34622 = state_33659__$1;
(statearr_33670_34622[(2)] = null);

(statearr_33670_34622[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33660 === (13))){
var inst_33614 = (state_33659[(10)]);
var inst_33616 = cljs.core.chunked_seq_QMARK_(inst_33614);
var state_33659__$1 = state_33659;
if(inst_33616){
var statearr_33671_34623 = state_33659__$1;
(statearr_33671_34623[(1)] = (16));

} else {
var statearr_33672_34624 = state_33659__$1;
(statearr_33672_34624[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33660 === (22))){
var inst_33644 = (state_33659[(2)]);
var state_33659__$1 = state_33659;
if(cljs.core.truth_(inst_33644)){
var statearr_33673_34625 = state_33659__$1;
(statearr_33673_34625[(1)] = (23));

} else {
var statearr_33674_34626 = state_33659__$1;
(statearr_33674_34626[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33660 === (6))){
var inst_33638 = (state_33659[(7)]);
var inst_33640 = (state_33659[(11)]);
var inst_33590 = (state_33659[(8)]);
var inst_33638__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_33590) : topic_fn.call(null,inst_33590));
var inst_33639 = cljs.core.deref(mults);
var inst_33640__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33639,inst_33638__$1);
var state_33659__$1 = (function (){var statearr_33675 = state_33659;
(statearr_33675[(7)] = inst_33638__$1);

(statearr_33675[(11)] = inst_33640__$1);

return statearr_33675;
})();
if(cljs.core.truth_(inst_33640__$1)){
var statearr_33676_34627 = state_33659__$1;
(statearr_33676_34627[(1)] = (19));

} else {
var statearr_33677_34628 = state_33659__$1;
(statearr_33677_34628[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33660 === (25))){
var inst_33649 = (state_33659[(2)]);
var state_33659__$1 = state_33659;
var statearr_33678_34629 = state_33659__$1;
(statearr_33678_34629[(2)] = inst_33649);

(statearr_33678_34629[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33660 === (17))){
var inst_33614 = (state_33659[(10)]);
var inst_33623 = cljs.core.first(inst_33614);
var inst_33624 = cljs.core.async.muxch_STAR_(inst_33623);
var inst_33625 = cljs.core.async.close_BANG_(inst_33624);
var inst_33626 = cljs.core.next(inst_33614);
var inst_33600 = inst_33626;
var inst_33601 = null;
var inst_33602 = (0);
var inst_33603 = (0);
var state_33659__$1 = (function (){var statearr_33679 = state_33659;
(statearr_33679[(12)] = inst_33601);

(statearr_33679[(13)] = inst_33603);

(statearr_33679[(14)] = inst_33600);

(statearr_33679[(15)] = inst_33625);

(statearr_33679[(16)] = inst_33602);

return statearr_33679;
})();
var statearr_33680_34636 = state_33659__$1;
(statearr_33680_34636[(2)] = null);

(statearr_33680_34636[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33660 === (3))){
var inst_33657 = (state_33659[(2)]);
var state_33659__$1 = state_33659;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33659__$1,inst_33657);
} else {
if((state_val_33660 === (12))){
var inst_33634 = (state_33659[(2)]);
var state_33659__$1 = state_33659;
var statearr_33681_34637 = state_33659__$1;
(statearr_33681_34637[(2)] = inst_33634);

(statearr_33681_34637[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33660 === (2))){
var state_33659__$1 = state_33659;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33659__$1,(4),ch);
} else {
if((state_val_33660 === (23))){
var state_33659__$1 = state_33659;
var statearr_33682_34638 = state_33659__$1;
(statearr_33682_34638[(2)] = null);

(statearr_33682_34638[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33660 === (19))){
var inst_33640 = (state_33659[(11)]);
var inst_33590 = (state_33659[(8)]);
var inst_33642 = cljs.core.async.muxch_STAR_(inst_33640);
var state_33659__$1 = state_33659;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33659__$1,(22),inst_33642,inst_33590);
} else {
if((state_val_33660 === (11))){
var inst_33614 = (state_33659[(10)]);
var inst_33600 = (state_33659[(14)]);
var inst_33614__$1 = cljs.core.seq(inst_33600);
var state_33659__$1 = (function (){var statearr_33683 = state_33659;
(statearr_33683[(10)] = inst_33614__$1);

return statearr_33683;
})();
if(inst_33614__$1){
var statearr_33684_34639 = state_33659__$1;
(statearr_33684_34639[(1)] = (13));

} else {
var statearr_33685_34640 = state_33659__$1;
(statearr_33685_34640[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33660 === (9))){
var inst_33636 = (state_33659[(2)]);
var state_33659__$1 = state_33659;
var statearr_33686_34641 = state_33659__$1;
(statearr_33686_34641[(2)] = inst_33636);

(statearr_33686_34641[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33660 === (5))){
var inst_33597 = cljs.core.deref(mults);
var inst_33598 = cljs.core.vals(inst_33597);
var inst_33599 = cljs.core.seq(inst_33598);
var inst_33600 = inst_33599;
var inst_33601 = null;
var inst_33602 = (0);
var inst_33603 = (0);
var state_33659__$1 = (function (){var statearr_33687 = state_33659;
(statearr_33687[(12)] = inst_33601);

(statearr_33687[(13)] = inst_33603);

(statearr_33687[(14)] = inst_33600);

(statearr_33687[(16)] = inst_33602);

return statearr_33687;
})();
var statearr_33688_34642 = state_33659__$1;
(statearr_33688_34642[(2)] = null);

(statearr_33688_34642[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33660 === (14))){
var state_33659__$1 = state_33659;
var statearr_33692_34643 = state_33659__$1;
(statearr_33692_34643[(2)] = null);

(statearr_33692_34643[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33660 === (16))){
var inst_33614 = (state_33659[(10)]);
var inst_33618 = cljs.core.chunk_first(inst_33614);
var inst_33619 = cljs.core.chunk_rest(inst_33614);
var inst_33620 = cljs.core.count(inst_33618);
var inst_33600 = inst_33619;
var inst_33601 = inst_33618;
var inst_33602 = inst_33620;
var inst_33603 = (0);
var state_33659__$1 = (function (){var statearr_33693 = state_33659;
(statearr_33693[(12)] = inst_33601);

(statearr_33693[(13)] = inst_33603);

(statearr_33693[(14)] = inst_33600);

(statearr_33693[(16)] = inst_33602);

return statearr_33693;
})();
var statearr_33694_34644 = state_33659__$1;
(statearr_33694_34644[(2)] = null);

(statearr_33694_34644[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33660 === (10))){
var inst_33601 = (state_33659[(12)]);
var inst_33603 = (state_33659[(13)]);
var inst_33600 = (state_33659[(14)]);
var inst_33602 = (state_33659[(16)]);
var inst_33608 = cljs.core._nth(inst_33601,inst_33603);
var inst_33609 = cljs.core.async.muxch_STAR_(inst_33608);
var inst_33610 = cljs.core.async.close_BANG_(inst_33609);
var inst_33611 = (inst_33603 + (1));
var tmp33689 = inst_33601;
var tmp33690 = inst_33600;
var tmp33691 = inst_33602;
var inst_33600__$1 = tmp33690;
var inst_33601__$1 = tmp33689;
var inst_33602__$1 = tmp33691;
var inst_33603__$1 = inst_33611;
var state_33659__$1 = (function (){var statearr_33695 = state_33659;
(statearr_33695[(17)] = inst_33610);

(statearr_33695[(12)] = inst_33601__$1);

(statearr_33695[(13)] = inst_33603__$1);

(statearr_33695[(14)] = inst_33600__$1);

(statearr_33695[(16)] = inst_33602__$1);

return statearr_33695;
})();
var statearr_33696_34651 = state_33659__$1;
(statearr_33696_34651[(2)] = null);

(statearr_33696_34651[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33660 === (18))){
var inst_33629 = (state_33659[(2)]);
var state_33659__$1 = state_33659;
var statearr_33697_34652 = state_33659__$1;
(statearr_33697_34652[(2)] = inst_33629);

(statearr_33697_34652[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33660 === (8))){
var inst_33603 = (state_33659[(13)]);
var inst_33602 = (state_33659[(16)]);
var inst_33605 = (inst_33603 < inst_33602);
var inst_33606 = inst_33605;
var state_33659__$1 = state_33659;
if(cljs.core.truth_(inst_33606)){
var statearr_33698_34653 = state_33659__$1;
(statearr_33698_34653[(1)] = (10));

} else {
var statearr_33699_34654 = state_33659__$1;
(statearr_33699_34654[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32582__auto__ = null;
var cljs$core$async$state_machine__32582__auto____0 = (function (){
var statearr_33700 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33700[(0)] = cljs$core$async$state_machine__32582__auto__);

(statearr_33700[(1)] = (1));

return statearr_33700;
});
var cljs$core$async$state_machine__32582__auto____1 = (function (state_33659){
while(true){
var ret_value__32583__auto__ = (function (){try{while(true){
var result__32584__auto__ = switch__32581__auto__(state_33659);
if(cljs.core.keyword_identical_QMARK_(result__32584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32584__auto__;
}
break;
}
}catch (e33701){var ex__32585__auto__ = e33701;
var statearr_33702_34655 = state_33659;
(statearr_33702_34655[(2)] = ex__32585__auto__);


if(cljs.core.seq((state_33659[(4)]))){
var statearr_33703_34656 = state_33659;
(statearr_33703_34656[(1)] = cljs.core.first((state_33659[(4)])));

} else {
throw ex__32585__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34657 = state_33659;
state_33659 = G__34657;
continue;
} else {
return ret_value__32583__auto__;
}
break;
}
});
cljs$core$async$state_machine__32582__auto__ = function(state_33659){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32582__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32582__auto____1.call(this,state_33659);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32582__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32582__auto____0;
cljs$core$async$state_machine__32582__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32582__auto____1;
return cljs$core$async$state_machine__32582__auto__;
})()
})();
var state__32628__auto__ = (function (){var statearr_33704 = f__32627__auto__();
(statearr_33704[(6)] = c__32626__auto___34608);

return statearr_33704;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32628__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__33706 = arguments.length;
switch (G__33706) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__33708 = arguments.length;
switch (G__33708) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__33710 = arguments.length;
switch (G__33710) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__32626__auto___34667 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32627__auto__ = (function (){var switch__32581__auto__ = (function (state_33753){
var state_val_33754 = (state_33753[(1)]);
if((state_val_33754 === (7))){
var state_33753__$1 = state_33753;
var statearr_33755_34668 = state_33753__$1;
(statearr_33755_34668[(2)] = null);

(statearr_33755_34668[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33754 === (1))){
var state_33753__$1 = state_33753;
var statearr_33756_34669 = state_33753__$1;
(statearr_33756_34669[(2)] = null);

(statearr_33756_34669[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33754 === (4))){
var inst_33714 = (state_33753[(7)]);
var inst_33713 = (state_33753[(8)]);
var inst_33716 = (inst_33714 < inst_33713);
var state_33753__$1 = state_33753;
if(cljs.core.truth_(inst_33716)){
var statearr_33757_34670 = state_33753__$1;
(statearr_33757_34670[(1)] = (6));

} else {
var statearr_33758_34671 = state_33753__$1;
(statearr_33758_34671[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33754 === (15))){
var inst_33739 = (state_33753[(9)]);
var inst_33744 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_33739);
var state_33753__$1 = state_33753;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33753__$1,(17),out,inst_33744);
} else {
if((state_val_33754 === (13))){
var inst_33739 = (state_33753[(9)]);
var inst_33739__$1 = (state_33753[(2)]);
var inst_33740 = cljs.core.some(cljs.core.nil_QMARK_,inst_33739__$1);
var state_33753__$1 = (function (){var statearr_33759 = state_33753;
(statearr_33759[(9)] = inst_33739__$1);

return statearr_33759;
})();
if(cljs.core.truth_(inst_33740)){
var statearr_33760_34672 = state_33753__$1;
(statearr_33760_34672[(1)] = (14));

} else {
var statearr_33761_34673 = state_33753__$1;
(statearr_33761_34673[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33754 === (6))){
var state_33753__$1 = state_33753;
var statearr_33762_34674 = state_33753__$1;
(statearr_33762_34674[(2)] = null);

(statearr_33762_34674[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33754 === (17))){
var inst_33746 = (state_33753[(2)]);
var state_33753__$1 = (function (){var statearr_33764 = state_33753;
(statearr_33764[(10)] = inst_33746);

return statearr_33764;
})();
var statearr_33765_34675 = state_33753__$1;
(statearr_33765_34675[(2)] = null);

(statearr_33765_34675[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33754 === (3))){
var inst_33751 = (state_33753[(2)]);
var state_33753__$1 = state_33753;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33753__$1,inst_33751);
} else {
if((state_val_33754 === (12))){
var _ = (function (){var statearr_33766 = state_33753;
(statearr_33766[(4)] = cljs.core.rest((state_33753[(4)])));

return statearr_33766;
})();
var state_33753__$1 = state_33753;
var ex33763 = (state_33753__$1[(2)]);
var statearr_33767_34676 = state_33753__$1;
(statearr_33767_34676[(5)] = ex33763);


if((ex33763 instanceof Object)){
var statearr_33768_34677 = state_33753__$1;
(statearr_33768_34677[(1)] = (11));

(statearr_33768_34677[(5)] = null);

} else {
throw ex33763;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33754 === (2))){
var inst_33712 = cljs.core.reset_BANG_(dctr,cnt);
var inst_33713 = cnt;
var inst_33714 = (0);
var state_33753__$1 = (function (){var statearr_33769 = state_33753;
(statearr_33769[(7)] = inst_33714);

(statearr_33769[(8)] = inst_33713);

(statearr_33769[(11)] = inst_33712);

return statearr_33769;
})();
var statearr_33770_34678 = state_33753__$1;
(statearr_33770_34678[(2)] = null);

(statearr_33770_34678[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33754 === (11))){
var inst_33718 = (state_33753[(2)]);
var inst_33719 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_33753__$1 = (function (){var statearr_33771 = state_33753;
(statearr_33771[(12)] = inst_33718);

return statearr_33771;
})();
var statearr_33772_34679 = state_33753__$1;
(statearr_33772_34679[(2)] = inst_33719);

(statearr_33772_34679[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33754 === (9))){
var inst_33714 = (state_33753[(7)]);
var _ = (function (){var statearr_33773 = state_33753;
(statearr_33773[(4)] = cljs.core.cons((12),(state_33753[(4)])));

return statearr_33773;
})();
var inst_33725 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_33714) : chs__$1.call(null,inst_33714));
var inst_33726 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_33714) : done.call(null,inst_33714));
var inst_33727 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_33725,inst_33726);
var ___$1 = (function (){var statearr_33774 = state_33753;
(statearr_33774[(4)] = cljs.core.rest((state_33753[(4)])));

return statearr_33774;
})();
var state_33753__$1 = state_33753;
var statearr_33775_34680 = state_33753__$1;
(statearr_33775_34680[(2)] = inst_33727);

(statearr_33775_34680[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33754 === (5))){
var inst_33737 = (state_33753[(2)]);
var state_33753__$1 = (function (){var statearr_33776 = state_33753;
(statearr_33776[(13)] = inst_33737);

return statearr_33776;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33753__$1,(13),dchan);
} else {
if((state_val_33754 === (14))){
var inst_33742 = cljs.core.async.close_BANG_(out);
var state_33753__$1 = state_33753;
var statearr_33777_34681 = state_33753__$1;
(statearr_33777_34681[(2)] = inst_33742);

(statearr_33777_34681[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33754 === (16))){
var inst_33749 = (state_33753[(2)]);
var state_33753__$1 = state_33753;
var statearr_33778_34682 = state_33753__$1;
(statearr_33778_34682[(2)] = inst_33749);

(statearr_33778_34682[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33754 === (10))){
var inst_33714 = (state_33753[(7)]);
var inst_33730 = (state_33753[(2)]);
var inst_33731 = (inst_33714 + (1));
var inst_33714__$1 = inst_33731;
var state_33753__$1 = (function (){var statearr_33779 = state_33753;
(statearr_33779[(7)] = inst_33714__$1);

(statearr_33779[(14)] = inst_33730);

return statearr_33779;
})();
var statearr_33780_34683 = state_33753__$1;
(statearr_33780_34683[(2)] = null);

(statearr_33780_34683[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33754 === (8))){
var inst_33735 = (state_33753[(2)]);
var state_33753__$1 = state_33753;
var statearr_33781_34684 = state_33753__$1;
(statearr_33781_34684[(2)] = inst_33735);

(statearr_33781_34684[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32582__auto__ = null;
var cljs$core$async$state_machine__32582__auto____0 = (function (){
var statearr_33782 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33782[(0)] = cljs$core$async$state_machine__32582__auto__);

(statearr_33782[(1)] = (1));

return statearr_33782;
});
var cljs$core$async$state_machine__32582__auto____1 = (function (state_33753){
while(true){
var ret_value__32583__auto__ = (function (){try{while(true){
var result__32584__auto__ = switch__32581__auto__(state_33753);
if(cljs.core.keyword_identical_QMARK_(result__32584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32584__auto__;
}
break;
}
}catch (e33783){var ex__32585__auto__ = e33783;
var statearr_33784_34685 = state_33753;
(statearr_33784_34685[(2)] = ex__32585__auto__);


if(cljs.core.seq((state_33753[(4)]))){
var statearr_33785_34686 = state_33753;
(statearr_33785_34686[(1)] = cljs.core.first((state_33753[(4)])));

} else {
throw ex__32585__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34687 = state_33753;
state_33753 = G__34687;
continue;
} else {
return ret_value__32583__auto__;
}
break;
}
});
cljs$core$async$state_machine__32582__auto__ = function(state_33753){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32582__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32582__auto____1.call(this,state_33753);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32582__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32582__auto____0;
cljs$core$async$state_machine__32582__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32582__auto____1;
return cljs$core$async$state_machine__32582__auto__;
})()
})();
var state__32628__auto__ = (function (){var statearr_33786 = f__32627__auto__();
(statearr_33786[(6)] = c__32626__auto___34667);

return statearr_33786;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32628__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__33789 = arguments.length;
switch (G__33789) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32626__auto___34689 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32627__auto__ = (function (){var switch__32581__auto__ = (function (state_33821){
var state_val_33822 = (state_33821[(1)]);
if((state_val_33822 === (7))){
var inst_33800 = (state_33821[(7)]);
var inst_33801 = (state_33821[(8)]);
var inst_33800__$1 = (state_33821[(2)]);
var inst_33801__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33800__$1,(0),null);
var inst_33802 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33800__$1,(1),null);
var inst_33803 = (inst_33801__$1 == null);
var state_33821__$1 = (function (){var statearr_33823 = state_33821;
(statearr_33823[(9)] = inst_33802);

(statearr_33823[(7)] = inst_33800__$1);

(statearr_33823[(8)] = inst_33801__$1);

return statearr_33823;
})();
if(cljs.core.truth_(inst_33803)){
var statearr_33824_34690 = state_33821__$1;
(statearr_33824_34690[(1)] = (8));

} else {
var statearr_33825_34691 = state_33821__$1;
(statearr_33825_34691[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33822 === (1))){
var inst_33790 = cljs.core.vec(chs);
var inst_33791 = inst_33790;
var state_33821__$1 = (function (){var statearr_33826 = state_33821;
(statearr_33826[(10)] = inst_33791);

return statearr_33826;
})();
var statearr_33827_34692 = state_33821__$1;
(statearr_33827_34692[(2)] = null);

(statearr_33827_34692[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33822 === (4))){
var inst_33791 = (state_33821[(10)]);
var state_33821__$1 = state_33821;
return cljs.core.async.ioc_alts_BANG_(state_33821__$1,(7),inst_33791);
} else {
if((state_val_33822 === (6))){
var inst_33817 = (state_33821[(2)]);
var state_33821__$1 = state_33821;
var statearr_33828_34694 = state_33821__$1;
(statearr_33828_34694[(2)] = inst_33817);

(statearr_33828_34694[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33822 === (3))){
var inst_33819 = (state_33821[(2)]);
var state_33821__$1 = state_33821;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33821__$1,inst_33819);
} else {
if((state_val_33822 === (2))){
var inst_33791 = (state_33821[(10)]);
var inst_33793 = cljs.core.count(inst_33791);
var inst_33794 = (inst_33793 > (0));
var state_33821__$1 = state_33821;
if(cljs.core.truth_(inst_33794)){
var statearr_33830_34699 = state_33821__$1;
(statearr_33830_34699[(1)] = (4));

} else {
var statearr_33831_34700 = state_33821__$1;
(statearr_33831_34700[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33822 === (11))){
var inst_33791 = (state_33821[(10)]);
var inst_33810 = (state_33821[(2)]);
var tmp33829 = inst_33791;
var inst_33791__$1 = tmp33829;
var state_33821__$1 = (function (){var statearr_33832 = state_33821;
(statearr_33832[(10)] = inst_33791__$1);

(statearr_33832[(11)] = inst_33810);

return statearr_33832;
})();
var statearr_33833_34701 = state_33821__$1;
(statearr_33833_34701[(2)] = null);

(statearr_33833_34701[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33822 === (9))){
var inst_33801 = (state_33821[(8)]);
var state_33821__$1 = state_33821;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33821__$1,(11),out,inst_33801);
} else {
if((state_val_33822 === (5))){
var inst_33815 = cljs.core.async.close_BANG_(out);
var state_33821__$1 = state_33821;
var statearr_33834_34702 = state_33821__$1;
(statearr_33834_34702[(2)] = inst_33815);

(statearr_33834_34702[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33822 === (10))){
var inst_33813 = (state_33821[(2)]);
var state_33821__$1 = state_33821;
var statearr_33835_34703 = state_33821__$1;
(statearr_33835_34703[(2)] = inst_33813);

(statearr_33835_34703[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33822 === (8))){
var inst_33791 = (state_33821[(10)]);
var inst_33802 = (state_33821[(9)]);
var inst_33800 = (state_33821[(7)]);
var inst_33801 = (state_33821[(8)]);
var inst_33805 = (function (){var cs = inst_33791;
var vec__33796 = inst_33800;
var v = inst_33801;
var c = inst_33802;
return (function (p1__33787_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__33787_SHARP_);
});
})();
var inst_33806 = cljs.core.filterv(inst_33805,inst_33791);
var inst_33791__$1 = inst_33806;
var state_33821__$1 = (function (){var statearr_33836 = state_33821;
(statearr_33836[(10)] = inst_33791__$1);

return statearr_33836;
})();
var statearr_33837_34704 = state_33821__$1;
(statearr_33837_34704[(2)] = null);

(statearr_33837_34704[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32582__auto__ = null;
var cljs$core$async$state_machine__32582__auto____0 = (function (){
var statearr_33838 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33838[(0)] = cljs$core$async$state_machine__32582__auto__);

(statearr_33838[(1)] = (1));

return statearr_33838;
});
var cljs$core$async$state_machine__32582__auto____1 = (function (state_33821){
while(true){
var ret_value__32583__auto__ = (function (){try{while(true){
var result__32584__auto__ = switch__32581__auto__(state_33821);
if(cljs.core.keyword_identical_QMARK_(result__32584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32584__auto__;
}
break;
}
}catch (e33839){var ex__32585__auto__ = e33839;
var statearr_33840_34705 = state_33821;
(statearr_33840_34705[(2)] = ex__32585__auto__);


if(cljs.core.seq((state_33821[(4)]))){
var statearr_33841_34706 = state_33821;
(statearr_33841_34706[(1)] = cljs.core.first((state_33821[(4)])));

} else {
throw ex__32585__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34707 = state_33821;
state_33821 = G__34707;
continue;
} else {
return ret_value__32583__auto__;
}
break;
}
});
cljs$core$async$state_machine__32582__auto__ = function(state_33821){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32582__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32582__auto____1.call(this,state_33821);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32582__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32582__auto____0;
cljs$core$async$state_machine__32582__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32582__auto____1;
return cljs$core$async$state_machine__32582__auto__;
})()
})();
var state__32628__auto__ = (function (){var statearr_33842 = f__32627__auto__();
(statearr_33842[(6)] = c__32626__auto___34689);

return statearr_33842;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32628__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__33844 = arguments.length;
switch (G__33844) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32626__auto___34709 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32627__auto__ = (function (){var switch__32581__auto__ = (function (state_33868){
var state_val_33869 = (state_33868[(1)]);
if((state_val_33869 === (7))){
var inst_33850 = (state_33868[(7)]);
var inst_33850__$1 = (state_33868[(2)]);
var inst_33851 = (inst_33850__$1 == null);
var inst_33852 = cljs.core.not(inst_33851);
var state_33868__$1 = (function (){var statearr_33870 = state_33868;
(statearr_33870[(7)] = inst_33850__$1);

return statearr_33870;
})();
if(inst_33852){
var statearr_33871_34711 = state_33868__$1;
(statearr_33871_34711[(1)] = (8));

} else {
var statearr_33872_34712 = state_33868__$1;
(statearr_33872_34712[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33869 === (1))){
var inst_33845 = (0);
var state_33868__$1 = (function (){var statearr_33873 = state_33868;
(statearr_33873[(8)] = inst_33845);

return statearr_33873;
})();
var statearr_33874_34714 = state_33868__$1;
(statearr_33874_34714[(2)] = null);

(statearr_33874_34714[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33869 === (4))){
var state_33868__$1 = state_33868;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33868__$1,(7),ch);
} else {
if((state_val_33869 === (6))){
var inst_33863 = (state_33868[(2)]);
var state_33868__$1 = state_33868;
var statearr_33875_34715 = state_33868__$1;
(statearr_33875_34715[(2)] = inst_33863);

(statearr_33875_34715[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33869 === (3))){
var inst_33865 = (state_33868[(2)]);
var inst_33866 = cljs.core.async.close_BANG_(out);
var state_33868__$1 = (function (){var statearr_33876 = state_33868;
(statearr_33876[(9)] = inst_33865);

return statearr_33876;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33868__$1,inst_33866);
} else {
if((state_val_33869 === (2))){
var inst_33845 = (state_33868[(8)]);
var inst_33847 = (inst_33845 < n);
var state_33868__$1 = state_33868;
if(cljs.core.truth_(inst_33847)){
var statearr_33877_34716 = state_33868__$1;
(statearr_33877_34716[(1)] = (4));

} else {
var statearr_33878_34717 = state_33868__$1;
(statearr_33878_34717[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33869 === (11))){
var inst_33845 = (state_33868[(8)]);
var inst_33855 = (state_33868[(2)]);
var inst_33856 = (inst_33845 + (1));
var inst_33845__$1 = inst_33856;
var state_33868__$1 = (function (){var statearr_33879 = state_33868;
(statearr_33879[(8)] = inst_33845__$1);

(statearr_33879[(10)] = inst_33855);

return statearr_33879;
})();
var statearr_33880_34718 = state_33868__$1;
(statearr_33880_34718[(2)] = null);

(statearr_33880_34718[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33869 === (9))){
var state_33868__$1 = state_33868;
var statearr_33881_34719 = state_33868__$1;
(statearr_33881_34719[(2)] = null);

(statearr_33881_34719[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33869 === (5))){
var state_33868__$1 = state_33868;
var statearr_33882_34721 = state_33868__$1;
(statearr_33882_34721[(2)] = null);

(statearr_33882_34721[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33869 === (10))){
var inst_33860 = (state_33868[(2)]);
var state_33868__$1 = state_33868;
var statearr_33883_34723 = state_33868__$1;
(statearr_33883_34723[(2)] = inst_33860);

(statearr_33883_34723[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33869 === (8))){
var inst_33850 = (state_33868[(7)]);
var state_33868__$1 = state_33868;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33868__$1,(11),out,inst_33850);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32582__auto__ = null;
var cljs$core$async$state_machine__32582__auto____0 = (function (){
var statearr_33884 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33884[(0)] = cljs$core$async$state_machine__32582__auto__);

(statearr_33884[(1)] = (1));

return statearr_33884;
});
var cljs$core$async$state_machine__32582__auto____1 = (function (state_33868){
while(true){
var ret_value__32583__auto__ = (function (){try{while(true){
var result__32584__auto__ = switch__32581__auto__(state_33868);
if(cljs.core.keyword_identical_QMARK_(result__32584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32584__auto__;
}
break;
}
}catch (e33885){var ex__32585__auto__ = e33885;
var statearr_33886_34724 = state_33868;
(statearr_33886_34724[(2)] = ex__32585__auto__);


if(cljs.core.seq((state_33868[(4)]))){
var statearr_33887_34725 = state_33868;
(statearr_33887_34725[(1)] = cljs.core.first((state_33868[(4)])));

} else {
throw ex__32585__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34726 = state_33868;
state_33868 = G__34726;
continue;
} else {
return ret_value__32583__auto__;
}
break;
}
});
cljs$core$async$state_machine__32582__auto__ = function(state_33868){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32582__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32582__auto____1.call(this,state_33868);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32582__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32582__auto____0;
cljs$core$async$state_machine__32582__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32582__auto____1;
return cljs$core$async$state_machine__32582__auto__;
})()
})();
var state__32628__auto__ = (function (){var statearr_33888 = f__32627__auto__();
(statearr_33888[(6)] = c__32626__auto___34709);

return statearr_33888;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32628__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33890 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33890 = (function (f,ch,meta33891){
this.f = f;
this.ch = ch;
this.meta33891 = meta33891;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33890.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33892,meta33891__$1){
var self__ = this;
var _33892__$1 = this;
return (new cljs.core.async.t_cljs$core$async33890(self__.f,self__.ch,meta33891__$1));
}));

(cljs.core.async.t_cljs$core$async33890.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33892){
var self__ = this;
var _33892__$1 = this;
return self__.meta33891;
}));

(cljs.core.async.t_cljs$core$async33890.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33890.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33890.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33890.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33890.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33893 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33893 = (function (f,ch,meta33891,_,fn1,meta33894){
this.f = f;
this.ch = ch;
this.meta33891 = meta33891;
this._ = _;
this.fn1 = fn1;
this.meta33894 = meta33894;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33893.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33895,meta33894__$1){
var self__ = this;
var _33895__$1 = this;
return (new cljs.core.async.t_cljs$core$async33893(self__.f,self__.ch,self__.meta33891,self__._,self__.fn1,meta33894__$1));
}));

(cljs.core.async.t_cljs$core$async33893.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33895){
var self__ = this;
var _33895__$1 = this;
return self__.meta33894;
}));

(cljs.core.async.t_cljs$core$async33893.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33893.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async33893.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33893.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__33889_SHARP_){
var G__33896 = (((p1__33889_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__33889_SHARP_) : self__.f.call(null,p1__33889_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__33896) : f1.call(null,G__33896));
});
}));

(cljs.core.async.t_cljs$core$async33893.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33891","meta33891",554769935,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async33890","cljs.core.async/t_cljs$core$async33890",-282989843,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta33894","meta33894",-1518954775,null)], null);
}));

(cljs.core.async.t_cljs$core$async33893.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33893.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33893");

(cljs.core.async.t_cljs$core$async33893.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async33893");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33893.
 */
cljs.core.async.__GT_t_cljs$core$async33893 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async33893(f__$1,ch__$1,meta33891__$1,___$2,fn1__$1,meta33894){
return (new cljs.core.async.t_cljs$core$async33893(f__$1,ch__$1,meta33891__$1,___$2,fn1__$1,meta33894));
});

}

return (new cljs.core.async.t_cljs$core$async33893(self__.f,self__.ch,self__.meta33891,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4210__auto__ = ret;
if(cljs.core.truth_(and__4210__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4210__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__33897 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__33897) : self__.f.call(null,G__33897));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async33890.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33890.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async33890.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33891","meta33891",554769935,null)], null);
}));

(cljs.core.async.t_cljs$core$async33890.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33890.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33890");

(cljs.core.async.t_cljs$core$async33890.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async33890");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33890.
 */
cljs.core.async.__GT_t_cljs$core$async33890 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async33890(f__$1,ch__$1,meta33891){
return (new cljs.core.async.t_cljs$core$async33890(f__$1,ch__$1,meta33891));
});

}

return (new cljs.core.async.t_cljs$core$async33890(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33898 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33898 = (function (f,ch,meta33899){
this.f = f;
this.ch = ch;
this.meta33899 = meta33899;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33898.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33900,meta33899__$1){
var self__ = this;
var _33900__$1 = this;
return (new cljs.core.async.t_cljs$core$async33898(self__.f,self__.ch,meta33899__$1));
}));

(cljs.core.async.t_cljs$core$async33898.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33900){
var self__ = this;
var _33900__$1 = this;
return self__.meta33899;
}));

(cljs.core.async.t_cljs$core$async33898.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33898.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33898.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33898.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async33898.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33898.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async33898.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33899","meta33899",-1430978039,null)], null);
}));

(cljs.core.async.t_cljs$core$async33898.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33898.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33898");

(cljs.core.async.t_cljs$core$async33898.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async33898");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33898.
 */
cljs.core.async.__GT_t_cljs$core$async33898 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async33898(f__$1,ch__$1,meta33899){
return (new cljs.core.async.t_cljs$core$async33898(f__$1,ch__$1,meta33899));
});

}

return (new cljs.core.async.t_cljs$core$async33898(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33901 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33901 = (function (p,ch,meta33902){
this.p = p;
this.ch = ch;
this.meta33902 = meta33902;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33901.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33903,meta33902__$1){
var self__ = this;
var _33903__$1 = this;
return (new cljs.core.async.t_cljs$core$async33901(self__.p,self__.ch,meta33902__$1));
}));

(cljs.core.async.t_cljs$core$async33901.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33903){
var self__ = this;
var _33903__$1 = this;
return self__.meta33902;
}));

(cljs.core.async.t_cljs$core$async33901.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33901.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33901.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33901.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33901.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async33901.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33901.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async33901.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33902","meta33902",-4440156,null)], null);
}));

(cljs.core.async.t_cljs$core$async33901.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33901.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33901");

(cljs.core.async.t_cljs$core$async33901.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async33901");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33901.
 */
cljs.core.async.__GT_t_cljs$core$async33901 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async33901(p__$1,ch__$1,meta33902){
return (new cljs.core.async.t_cljs$core$async33901(p__$1,ch__$1,meta33902));
});

}

return (new cljs.core.async.t_cljs$core$async33901(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__33905 = arguments.length;
switch (G__33905) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32626__auto___34730 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32627__auto__ = (function (){var switch__32581__auto__ = (function (state_33926){
var state_val_33927 = (state_33926[(1)]);
if((state_val_33927 === (7))){
var inst_33922 = (state_33926[(2)]);
var state_33926__$1 = state_33926;
var statearr_33928_34731 = state_33926__$1;
(statearr_33928_34731[(2)] = inst_33922);

(statearr_33928_34731[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33927 === (1))){
var state_33926__$1 = state_33926;
var statearr_33929_34732 = state_33926__$1;
(statearr_33929_34732[(2)] = null);

(statearr_33929_34732[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33927 === (4))){
var inst_33908 = (state_33926[(7)]);
var inst_33908__$1 = (state_33926[(2)]);
var inst_33909 = (inst_33908__$1 == null);
var state_33926__$1 = (function (){var statearr_33930 = state_33926;
(statearr_33930[(7)] = inst_33908__$1);

return statearr_33930;
})();
if(cljs.core.truth_(inst_33909)){
var statearr_33931_34733 = state_33926__$1;
(statearr_33931_34733[(1)] = (5));

} else {
var statearr_33932_34735 = state_33926__$1;
(statearr_33932_34735[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33927 === (6))){
var inst_33908 = (state_33926[(7)]);
var inst_33913 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_33908) : p.call(null,inst_33908));
var state_33926__$1 = state_33926;
if(cljs.core.truth_(inst_33913)){
var statearr_33933_34736 = state_33926__$1;
(statearr_33933_34736[(1)] = (8));

} else {
var statearr_33934_34737 = state_33926__$1;
(statearr_33934_34737[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33927 === (3))){
var inst_33924 = (state_33926[(2)]);
var state_33926__$1 = state_33926;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33926__$1,inst_33924);
} else {
if((state_val_33927 === (2))){
var state_33926__$1 = state_33926;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33926__$1,(4),ch);
} else {
if((state_val_33927 === (11))){
var inst_33916 = (state_33926[(2)]);
var state_33926__$1 = state_33926;
var statearr_33935_34738 = state_33926__$1;
(statearr_33935_34738[(2)] = inst_33916);

(statearr_33935_34738[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33927 === (9))){
var state_33926__$1 = state_33926;
var statearr_33936_34739 = state_33926__$1;
(statearr_33936_34739[(2)] = null);

(statearr_33936_34739[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33927 === (5))){
var inst_33911 = cljs.core.async.close_BANG_(out);
var state_33926__$1 = state_33926;
var statearr_33937_34740 = state_33926__$1;
(statearr_33937_34740[(2)] = inst_33911);

(statearr_33937_34740[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33927 === (10))){
var inst_33919 = (state_33926[(2)]);
var state_33926__$1 = (function (){var statearr_33938 = state_33926;
(statearr_33938[(8)] = inst_33919);

return statearr_33938;
})();
var statearr_33939_34741 = state_33926__$1;
(statearr_33939_34741[(2)] = null);

(statearr_33939_34741[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33927 === (8))){
var inst_33908 = (state_33926[(7)]);
var state_33926__$1 = state_33926;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33926__$1,(11),out,inst_33908);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32582__auto__ = null;
var cljs$core$async$state_machine__32582__auto____0 = (function (){
var statearr_33940 = [null,null,null,null,null,null,null,null,null];
(statearr_33940[(0)] = cljs$core$async$state_machine__32582__auto__);

(statearr_33940[(1)] = (1));

return statearr_33940;
});
var cljs$core$async$state_machine__32582__auto____1 = (function (state_33926){
while(true){
var ret_value__32583__auto__ = (function (){try{while(true){
var result__32584__auto__ = switch__32581__auto__(state_33926);
if(cljs.core.keyword_identical_QMARK_(result__32584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32584__auto__;
}
break;
}
}catch (e33941){var ex__32585__auto__ = e33941;
var statearr_33942_34746 = state_33926;
(statearr_33942_34746[(2)] = ex__32585__auto__);


if(cljs.core.seq((state_33926[(4)]))){
var statearr_33943_34747 = state_33926;
(statearr_33943_34747[(1)] = cljs.core.first((state_33926[(4)])));

} else {
throw ex__32585__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34748 = state_33926;
state_33926 = G__34748;
continue;
} else {
return ret_value__32583__auto__;
}
break;
}
});
cljs$core$async$state_machine__32582__auto__ = function(state_33926){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32582__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32582__auto____1.call(this,state_33926);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32582__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32582__auto____0;
cljs$core$async$state_machine__32582__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32582__auto____1;
return cljs$core$async$state_machine__32582__auto__;
})()
})();
var state__32628__auto__ = (function (){var statearr_33944 = f__32627__auto__();
(statearr_33944[(6)] = c__32626__auto___34730);

return statearr_33944;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32628__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__33946 = arguments.length;
switch (G__33946) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__32626__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32627__auto__ = (function (){var switch__32581__auto__ = (function (state_34008){
var state_val_34009 = (state_34008[(1)]);
if((state_val_34009 === (7))){
var inst_34004 = (state_34008[(2)]);
var state_34008__$1 = state_34008;
var statearr_34010_34750 = state_34008__$1;
(statearr_34010_34750[(2)] = inst_34004);

(statearr_34010_34750[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34009 === (20))){
var inst_33974 = (state_34008[(7)]);
var inst_33985 = (state_34008[(2)]);
var inst_33986 = cljs.core.next(inst_33974);
var inst_33960 = inst_33986;
var inst_33961 = null;
var inst_33962 = (0);
var inst_33963 = (0);
var state_34008__$1 = (function (){var statearr_34011 = state_34008;
(statearr_34011[(8)] = inst_33960);

(statearr_34011[(9)] = inst_33985);

(statearr_34011[(10)] = inst_33961);

(statearr_34011[(11)] = inst_33962);

(statearr_34011[(12)] = inst_33963);

return statearr_34011;
})();
var statearr_34012_34751 = state_34008__$1;
(statearr_34012_34751[(2)] = null);

(statearr_34012_34751[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34009 === (1))){
var state_34008__$1 = state_34008;
var statearr_34013_34752 = state_34008__$1;
(statearr_34013_34752[(2)] = null);

(statearr_34013_34752[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34009 === (4))){
var inst_33949 = (state_34008[(13)]);
var inst_33949__$1 = (state_34008[(2)]);
var inst_33950 = (inst_33949__$1 == null);
var state_34008__$1 = (function (){var statearr_34014 = state_34008;
(statearr_34014[(13)] = inst_33949__$1);

return statearr_34014;
})();
if(cljs.core.truth_(inst_33950)){
var statearr_34015_34753 = state_34008__$1;
(statearr_34015_34753[(1)] = (5));

} else {
var statearr_34016_34754 = state_34008__$1;
(statearr_34016_34754[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34009 === (15))){
var state_34008__$1 = state_34008;
var statearr_34020_34755 = state_34008__$1;
(statearr_34020_34755[(2)] = null);

(statearr_34020_34755[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34009 === (21))){
var state_34008__$1 = state_34008;
var statearr_34021_34756 = state_34008__$1;
(statearr_34021_34756[(2)] = null);

(statearr_34021_34756[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34009 === (13))){
var inst_33960 = (state_34008[(8)]);
var inst_33961 = (state_34008[(10)]);
var inst_33962 = (state_34008[(11)]);
var inst_33963 = (state_34008[(12)]);
var inst_33970 = (state_34008[(2)]);
var inst_33971 = (inst_33963 + (1));
var tmp34017 = inst_33960;
var tmp34018 = inst_33961;
var tmp34019 = inst_33962;
var inst_33960__$1 = tmp34017;
var inst_33961__$1 = tmp34018;
var inst_33962__$1 = tmp34019;
var inst_33963__$1 = inst_33971;
var state_34008__$1 = (function (){var statearr_34022 = state_34008;
(statearr_34022[(8)] = inst_33960__$1);

(statearr_34022[(10)] = inst_33961__$1);

(statearr_34022[(11)] = inst_33962__$1);

(statearr_34022[(12)] = inst_33963__$1);

(statearr_34022[(14)] = inst_33970);

return statearr_34022;
})();
var statearr_34023_34757 = state_34008__$1;
(statearr_34023_34757[(2)] = null);

(statearr_34023_34757[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34009 === (22))){
var state_34008__$1 = state_34008;
var statearr_34024_34758 = state_34008__$1;
(statearr_34024_34758[(2)] = null);

(statearr_34024_34758[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34009 === (6))){
var inst_33949 = (state_34008[(13)]);
var inst_33958 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_33949) : f.call(null,inst_33949));
var inst_33959 = cljs.core.seq(inst_33958);
var inst_33960 = inst_33959;
var inst_33961 = null;
var inst_33962 = (0);
var inst_33963 = (0);
var state_34008__$1 = (function (){var statearr_34025 = state_34008;
(statearr_34025[(8)] = inst_33960);

(statearr_34025[(10)] = inst_33961);

(statearr_34025[(11)] = inst_33962);

(statearr_34025[(12)] = inst_33963);

return statearr_34025;
})();
var statearr_34026_34759 = state_34008__$1;
(statearr_34026_34759[(2)] = null);

(statearr_34026_34759[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34009 === (17))){
var inst_33974 = (state_34008[(7)]);
var inst_33978 = cljs.core.chunk_first(inst_33974);
var inst_33979 = cljs.core.chunk_rest(inst_33974);
var inst_33980 = cljs.core.count(inst_33978);
var inst_33960 = inst_33979;
var inst_33961 = inst_33978;
var inst_33962 = inst_33980;
var inst_33963 = (0);
var state_34008__$1 = (function (){var statearr_34027 = state_34008;
(statearr_34027[(8)] = inst_33960);

(statearr_34027[(10)] = inst_33961);

(statearr_34027[(11)] = inst_33962);

(statearr_34027[(12)] = inst_33963);

return statearr_34027;
})();
var statearr_34028_34760 = state_34008__$1;
(statearr_34028_34760[(2)] = null);

(statearr_34028_34760[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34009 === (3))){
var inst_34006 = (state_34008[(2)]);
var state_34008__$1 = state_34008;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34008__$1,inst_34006);
} else {
if((state_val_34009 === (12))){
var inst_33994 = (state_34008[(2)]);
var state_34008__$1 = state_34008;
var statearr_34029_34765 = state_34008__$1;
(statearr_34029_34765[(2)] = inst_33994);

(statearr_34029_34765[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34009 === (2))){
var state_34008__$1 = state_34008;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34008__$1,(4),in$);
} else {
if((state_val_34009 === (23))){
var inst_34002 = (state_34008[(2)]);
var state_34008__$1 = state_34008;
var statearr_34030_34766 = state_34008__$1;
(statearr_34030_34766[(2)] = inst_34002);

(statearr_34030_34766[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34009 === (19))){
var inst_33989 = (state_34008[(2)]);
var state_34008__$1 = state_34008;
var statearr_34031_34767 = state_34008__$1;
(statearr_34031_34767[(2)] = inst_33989);

(statearr_34031_34767[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34009 === (11))){
var inst_33974 = (state_34008[(7)]);
var inst_33960 = (state_34008[(8)]);
var inst_33974__$1 = cljs.core.seq(inst_33960);
var state_34008__$1 = (function (){var statearr_34032 = state_34008;
(statearr_34032[(7)] = inst_33974__$1);

return statearr_34032;
})();
if(inst_33974__$1){
var statearr_34033_34771 = state_34008__$1;
(statearr_34033_34771[(1)] = (14));

} else {
var statearr_34034_34772 = state_34008__$1;
(statearr_34034_34772[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34009 === (9))){
var inst_33996 = (state_34008[(2)]);
var inst_33997 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_34008__$1 = (function (){var statearr_34035 = state_34008;
(statearr_34035[(15)] = inst_33996);

return statearr_34035;
})();
if(cljs.core.truth_(inst_33997)){
var statearr_34036_34773 = state_34008__$1;
(statearr_34036_34773[(1)] = (21));

} else {
var statearr_34037_34774 = state_34008__$1;
(statearr_34037_34774[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34009 === (5))){
var inst_33952 = cljs.core.async.close_BANG_(out);
var state_34008__$1 = state_34008;
var statearr_34038_34775 = state_34008__$1;
(statearr_34038_34775[(2)] = inst_33952);

(statearr_34038_34775[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34009 === (14))){
var inst_33974 = (state_34008[(7)]);
var inst_33976 = cljs.core.chunked_seq_QMARK_(inst_33974);
var state_34008__$1 = state_34008;
if(inst_33976){
var statearr_34039_34779 = state_34008__$1;
(statearr_34039_34779[(1)] = (17));

} else {
var statearr_34040_34780 = state_34008__$1;
(statearr_34040_34780[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34009 === (16))){
var inst_33992 = (state_34008[(2)]);
var state_34008__$1 = state_34008;
var statearr_34041_34781 = state_34008__$1;
(statearr_34041_34781[(2)] = inst_33992);

(statearr_34041_34781[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34009 === (10))){
var inst_33961 = (state_34008[(10)]);
var inst_33963 = (state_34008[(12)]);
var inst_33968 = cljs.core._nth(inst_33961,inst_33963);
var state_34008__$1 = state_34008;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34008__$1,(13),out,inst_33968);
} else {
if((state_val_34009 === (18))){
var inst_33974 = (state_34008[(7)]);
var inst_33983 = cljs.core.first(inst_33974);
var state_34008__$1 = state_34008;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34008__$1,(20),out,inst_33983);
} else {
if((state_val_34009 === (8))){
var inst_33962 = (state_34008[(11)]);
var inst_33963 = (state_34008[(12)]);
var inst_33965 = (inst_33963 < inst_33962);
var inst_33966 = inst_33965;
var state_34008__$1 = state_34008;
if(cljs.core.truth_(inst_33966)){
var statearr_34042_34785 = state_34008__$1;
(statearr_34042_34785[(1)] = (10));

} else {
var statearr_34043_34786 = state_34008__$1;
(statearr_34043_34786[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__32582__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__32582__auto____0 = (function (){
var statearr_34044 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34044[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__32582__auto__);

(statearr_34044[(1)] = (1));

return statearr_34044;
});
var cljs$core$async$mapcat_STAR__$_state_machine__32582__auto____1 = (function (state_34008){
while(true){
var ret_value__32583__auto__ = (function (){try{while(true){
var result__32584__auto__ = switch__32581__auto__(state_34008);
if(cljs.core.keyword_identical_QMARK_(result__32584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32584__auto__;
}
break;
}
}catch (e34045){var ex__32585__auto__ = e34045;
var statearr_34046_34790 = state_34008;
(statearr_34046_34790[(2)] = ex__32585__auto__);


if(cljs.core.seq((state_34008[(4)]))){
var statearr_34047_34791 = state_34008;
(statearr_34047_34791[(1)] = cljs.core.first((state_34008[(4)])));

} else {
throw ex__32585__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34792 = state_34008;
state_34008 = G__34792;
continue;
} else {
return ret_value__32583__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__32582__auto__ = function(state_34008){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__32582__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__32582__auto____1.call(this,state_34008);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__32582__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__32582__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__32582__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__32582__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__32582__auto__;
})()
})();
var state__32628__auto__ = (function (){var statearr_34048 = f__32627__auto__();
(statearr_34048[(6)] = c__32626__auto__);

return statearr_34048;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32628__auto__);
}));

return c__32626__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__34050 = arguments.length;
switch (G__34050) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__34052 = arguments.length;
switch (G__34052) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__34054 = arguments.length;
switch (G__34054) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32626__auto___34800 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32627__auto__ = (function (){var switch__32581__auto__ = (function (state_34078){
var state_val_34079 = (state_34078[(1)]);
if((state_val_34079 === (7))){
var inst_34073 = (state_34078[(2)]);
var state_34078__$1 = state_34078;
var statearr_34080_34801 = state_34078__$1;
(statearr_34080_34801[(2)] = inst_34073);

(statearr_34080_34801[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34079 === (1))){
var inst_34055 = null;
var state_34078__$1 = (function (){var statearr_34081 = state_34078;
(statearr_34081[(7)] = inst_34055);

return statearr_34081;
})();
var statearr_34082_34802 = state_34078__$1;
(statearr_34082_34802[(2)] = null);

(statearr_34082_34802[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34079 === (4))){
var inst_34058 = (state_34078[(8)]);
var inst_34058__$1 = (state_34078[(2)]);
var inst_34059 = (inst_34058__$1 == null);
var inst_34060 = cljs.core.not(inst_34059);
var state_34078__$1 = (function (){var statearr_34083 = state_34078;
(statearr_34083[(8)] = inst_34058__$1);

return statearr_34083;
})();
if(inst_34060){
var statearr_34084_34803 = state_34078__$1;
(statearr_34084_34803[(1)] = (5));

} else {
var statearr_34085_34804 = state_34078__$1;
(statearr_34085_34804[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34079 === (6))){
var state_34078__$1 = state_34078;
var statearr_34086_34805 = state_34078__$1;
(statearr_34086_34805[(2)] = null);

(statearr_34086_34805[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34079 === (3))){
var inst_34075 = (state_34078[(2)]);
var inst_34076 = cljs.core.async.close_BANG_(out);
var state_34078__$1 = (function (){var statearr_34087 = state_34078;
(statearr_34087[(9)] = inst_34075);

return statearr_34087;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34078__$1,inst_34076);
} else {
if((state_val_34079 === (2))){
var state_34078__$1 = state_34078;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34078__$1,(4),ch);
} else {
if((state_val_34079 === (11))){
var inst_34058 = (state_34078[(8)]);
var inst_34067 = (state_34078[(2)]);
var inst_34055 = inst_34058;
var state_34078__$1 = (function (){var statearr_34088 = state_34078;
(statearr_34088[(7)] = inst_34055);

(statearr_34088[(10)] = inst_34067);

return statearr_34088;
})();
var statearr_34089_34808 = state_34078__$1;
(statearr_34089_34808[(2)] = null);

(statearr_34089_34808[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34079 === (9))){
var inst_34058 = (state_34078[(8)]);
var state_34078__$1 = state_34078;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34078__$1,(11),out,inst_34058);
} else {
if((state_val_34079 === (5))){
var inst_34055 = (state_34078[(7)]);
var inst_34058 = (state_34078[(8)]);
var inst_34062 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34058,inst_34055);
var state_34078__$1 = state_34078;
if(inst_34062){
var statearr_34091_34809 = state_34078__$1;
(statearr_34091_34809[(1)] = (8));

} else {
var statearr_34092_34810 = state_34078__$1;
(statearr_34092_34810[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34079 === (10))){
var inst_34070 = (state_34078[(2)]);
var state_34078__$1 = state_34078;
var statearr_34093_34811 = state_34078__$1;
(statearr_34093_34811[(2)] = inst_34070);

(statearr_34093_34811[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34079 === (8))){
var inst_34055 = (state_34078[(7)]);
var tmp34090 = inst_34055;
var inst_34055__$1 = tmp34090;
var state_34078__$1 = (function (){var statearr_34094 = state_34078;
(statearr_34094[(7)] = inst_34055__$1);

return statearr_34094;
})();
var statearr_34095_34812 = state_34078__$1;
(statearr_34095_34812[(2)] = null);

(statearr_34095_34812[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32582__auto__ = null;
var cljs$core$async$state_machine__32582__auto____0 = (function (){
var statearr_34096 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34096[(0)] = cljs$core$async$state_machine__32582__auto__);

(statearr_34096[(1)] = (1));

return statearr_34096;
});
var cljs$core$async$state_machine__32582__auto____1 = (function (state_34078){
while(true){
var ret_value__32583__auto__ = (function (){try{while(true){
var result__32584__auto__ = switch__32581__auto__(state_34078);
if(cljs.core.keyword_identical_QMARK_(result__32584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32584__auto__;
}
break;
}
}catch (e34097){var ex__32585__auto__ = e34097;
var statearr_34098_34813 = state_34078;
(statearr_34098_34813[(2)] = ex__32585__auto__);


if(cljs.core.seq((state_34078[(4)]))){
var statearr_34099_34814 = state_34078;
(statearr_34099_34814[(1)] = cljs.core.first((state_34078[(4)])));

} else {
throw ex__32585__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34815 = state_34078;
state_34078 = G__34815;
continue;
} else {
return ret_value__32583__auto__;
}
break;
}
});
cljs$core$async$state_machine__32582__auto__ = function(state_34078){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32582__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32582__auto____1.call(this,state_34078);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32582__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32582__auto____0;
cljs$core$async$state_machine__32582__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32582__auto____1;
return cljs$core$async$state_machine__32582__auto__;
})()
})();
var state__32628__auto__ = (function (){var statearr_34100 = f__32627__auto__();
(statearr_34100[(6)] = c__32626__auto___34800);

return statearr_34100;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32628__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__34102 = arguments.length;
switch (G__34102) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32626__auto___34817 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32627__auto__ = (function (){var switch__32581__auto__ = (function (state_34140){
var state_val_34141 = (state_34140[(1)]);
if((state_val_34141 === (7))){
var inst_34136 = (state_34140[(2)]);
var state_34140__$1 = state_34140;
var statearr_34142_34818 = state_34140__$1;
(statearr_34142_34818[(2)] = inst_34136);

(statearr_34142_34818[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34141 === (1))){
var inst_34103 = (new Array(n));
var inst_34104 = inst_34103;
var inst_34105 = (0);
var state_34140__$1 = (function (){var statearr_34143 = state_34140;
(statearr_34143[(7)] = inst_34104);

(statearr_34143[(8)] = inst_34105);

return statearr_34143;
})();
var statearr_34144_34819 = state_34140__$1;
(statearr_34144_34819[(2)] = null);

(statearr_34144_34819[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34141 === (4))){
var inst_34108 = (state_34140[(9)]);
var inst_34108__$1 = (state_34140[(2)]);
var inst_34109 = (inst_34108__$1 == null);
var inst_34110 = cljs.core.not(inst_34109);
var state_34140__$1 = (function (){var statearr_34145 = state_34140;
(statearr_34145[(9)] = inst_34108__$1);

return statearr_34145;
})();
if(inst_34110){
var statearr_34146_34820 = state_34140__$1;
(statearr_34146_34820[(1)] = (5));

} else {
var statearr_34147_34821 = state_34140__$1;
(statearr_34147_34821[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34141 === (15))){
var inst_34130 = (state_34140[(2)]);
var state_34140__$1 = state_34140;
var statearr_34148_34822 = state_34140__$1;
(statearr_34148_34822[(2)] = inst_34130);

(statearr_34148_34822[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34141 === (13))){
var state_34140__$1 = state_34140;
var statearr_34149_34823 = state_34140__$1;
(statearr_34149_34823[(2)] = null);

(statearr_34149_34823[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34141 === (6))){
var inst_34105 = (state_34140[(8)]);
var inst_34126 = (inst_34105 > (0));
var state_34140__$1 = state_34140;
if(cljs.core.truth_(inst_34126)){
var statearr_34150_34824 = state_34140__$1;
(statearr_34150_34824[(1)] = (12));

} else {
var statearr_34151_34825 = state_34140__$1;
(statearr_34151_34825[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34141 === (3))){
var inst_34138 = (state_34140[(2)]);
var state_34140__$1 = state_34140;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34140__$1,inst_34138);
} else {
if((state_val_34141 === (12))){
var inst_34104 = (state_34140[(7)]);
var inst_34128 = cljs.core.vec(inst_34104);
var state_34140__$1 = state_34140;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34140__$1,(15),out,inst_34128);
} else {
if((state_val_34141 === (2))){
var state_34140__$1 = state_34140;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34140__$1,(4),ch);
} else {
if((state_val_34141 === (11))){
var inst_34120 = (state_34140[(2)]);
var inst_34121 = (new Array(n));
var inst_34104 = inst_34121;
var inst_34105 = (0);
var state_34140__$1 = (function (){var statearr_34152 = state_34140;
(statearr_34152[(7)] = inst_34104);

(statearr_34152[(8)] = inst_34105);

(statearr_34152[(10)] = inst_34120);

return statearr_34152;
})();
var statearr_34153_34826 = state_34140__$1;
(statearr_34153_34826[(2)] = null);

(statearr_34153_34826[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34141 === (9))){
var inst_34104 = (state_34140[(7)]);
var inst_34118 = cljs.core.vec(inst_34104);
var state_34140__$1 = state_34140;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34140__$1,(11),out,inst_34118);
} else {
if((state_val_34141 === (5))){
var inst_34104 = (state_34140[(7)]);
var inst_34113 = (state_34140[(11)]);
var inst_34108 = (state_34140[(9)]);
var inst_34105 = (state_34140[(8)]);
var inst_34112 = (inst_34104[inst_34105] = inst_34108);
var inst_34113__$1 = (inst_34105 + (1));
var inst_34114 = (inst_34113__$1 < n);
var state_34140__$1 = (function (){var statearr_34154 = state_34140;
(statearr_34154[(11)] = inst_34113__$1);

(statearr_34154[(12)] = inst_34112);

return statearr_34154;
})();
if(cljs.core.truth_(inst_34114)){
var statearr_34155_34827 = state_34140__$1;
(statearr_34155_34827[(1)] = (8));

} else {
var statearr_34156_34828 = state_34140__$1;
(statearr_34156_34828[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34141 === (14))){
var inst_34133 = (state_34140[(2)]);
var inst_34134 = cljs.core.async.close_BANG_(out);
var state_34140__$1 = (function (){var statearr_34158 = state_34140;
(statearr_34158[(13)] = inst_34133);

return statearr_34158;
})();
var statearr_34159_34829 = state_34140__$1;
(statearr_34159_34829[(2)] = inst_34134);

(statearr_34159_34829[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34141 === (10))){
var inst_34124 = (state_34140[(2)]);
var state_34140__$1 = state_34140;
var statearr_34160_34834 = state_34140__$1;
(statearr_34160_34834[(2)] = inst_34124);

(statearr_34160_34834[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34141 === (8))){
var inst_34104 = (state_34140[(7)]);
var inst_34113 = (state_34140[(11)]);
var tmp34157 = inst_34104;
var inst_34104__$1 = tmp34157;
var inst_34105 = inst_34113;
var state_34140__$1 = (function (){var statearr_34161 = state_34140;
(statearr_34161[(7)] = inst_34104__$1);

(statearr_34161[(8)] = inst_34105);

return statearr_34161;
})();
var statearr_34162_34835 = state_34140__$1;
(statearr_34162_34835[(2)] = null);

(statearr_34162_34835[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32582__auto__ = null;
var cljs$core$async$state_machine__32582__auto____0 = (function (){
var statearr_34163 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34163[(0)] = cljs$core$async$state_machine__32582__auto__);

(statearr_34163[(1)] = (1));

return statearr_34163;
});
var cljs$core$async$state_machine__32582__auto____1 = (function (state_34140){
while(true){
var ret_value__32583__auto__ = (function (){try{while(true){
var result__32584__auto__ = switch__32581__auto__(state_34140);
if(cljs.core.keyword_identical_QMARK_(result__32584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32584__auto__;
}
break;
}
}catch (e34164){var ex__32585__auto__ = e34164;
var statearr_34165_34836 = state_34140;
(statearr_34165_34836[(2)] = ex__32585__auto__);


if(cljs.core.seq((state_34140[(4)]))){
var statearr_34166_34837 = state_34140;
(statearr_34166_34837[(1)] = cljs.core.first((state_34140[(4)])));

} else {
throw ex__32585__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34838 = state_34140;
state_34140 = G__34838;
continue;
} else {
return ret_value__32583__auto__;
}
break;
}
});
cljs$core$async$state_machine__32582__auto__ = function(state_34140){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32582__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32582__auto____1.call(this,state_34140);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32582__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32582__auto____0;
cljs$core$async$state_machine__32582__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32582__auto____1;
return cljs$core$async$state_machine__32582__auto__;
})()
})();
var state__32628__auto__ = (function (){var statearr_34167 = f__32627__auto__();
(statearr_34167[(6)] = c__32626__auto___34817);

return statearr_34167;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32628__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__34169 = arguments.length;
switch (G__34169) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32626__auto___34840 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32627__auto__ = (function (){var switch__32581__auto__ = (function (state_34214){
var state_val_34215 = (state_34214[(1)]);
if((state_val_34215 === (7))){
var inst_34210 = (state_34214[(2)]);
var state_34214__$1 = state_34214;
var statearr_34216_34841 = state_34214__$1;
(statearr_34216_34841[(2)] = inst_34210);

(statearr_34216_34841[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34215 === (1))){
var inst_34170 = [];
var inst_34171 = inst_34170;
var inst_34172 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_34214__$1 = (function (){var statearr_34217 = state_34214;
(statearr_34217[(7)] = inst_34171);

(statearr_34217[(8)] = inst_34172);

return statearr_34217;
})();
var statearr_34218_34842 = state_34214__$1;
(statearr_34218_34842[(2)] = null);

(statearr_34218_34842[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34215 === (4))){
var inst_34175 = (state_34214[(9)]);
var inst_34175__$1 = (state_34214[(2)]);
var inst_34176 = (inst_34175__$1 == null);
var inst_34177 = cljs.core.not(inst_34176);
var state_34214__$1 = (function (){var statearr_34219 = state_34214;
(statearr_34219[(9)] = inst_34175__$1);

return statearr_34219;
})();
if(inst_34177){
var statearr_34220_34843 = state_34214__$1;
(statearr_34220_34843[(1)] = (5));

} else {
var statearr_34221_34844 = state_34214__$1;
(statearr_34221_34844[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34215 === (15))){
var inst_34171 = (state_34214[(7)]);
var inst_34202 = cljs.core.vec(inst_34171);
var state_34214__$1 = state_34214;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34214__$1,(18),out,inst_34202);
} else {
if((state_val_34215 === (13))){
var inst_34197 = (state_34214[(2)]);
var state_34214__$1 = state_34214;
var statearr_34222_34845 = state_34214__$1;
(statearr_34222_34845[(2)] = inst_34197);

(statearr_34222_34845[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34215 === (6))){
var inst_34171 = (state_34214[(7)]);
var inst_34199 = inst_34171.length;
var inst_34200 = (inst_34199 > (0));
var state_34214__$1 = state_34214;
if(cljs.core.truth_(inst_34200)){
var statearr_34223_34846 = state_34214__$1;
(statearr_34223_34846[(1)] = (15));

} else {
var statearr_34224_34847 = state_34214__$1;
(statearr_34224_34847[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34215 === (17))){
var inst_34207 = (state_34214[(2)]);
var inst_34208 = cljs.core.async.close_BANG_(out);
var state_34214__$1 = (function (){var statearr_34225 = state_34214;
(statearr_34225[(10)] = inst_34207);

return statearr_34225;
})();
var statearr_34226_34848 = state_34214__$1;
(statearr_34226_34848[(2)] = inst_34208);

(statearr_34226_34848[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34215 === (3))){
var inst_34212 = (state_34214[(2)]);
var state_34214__$1 = state_34214;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34214__$1,inst_34212);
} else {
if((state_val_34215 === (12))){
var inst_34171 = (state_34214[(7)]);
var inst_34190 = cljs.core.vec(inst_34171);
var state_34214__$1 = state_34214;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34214__$1,(14),out,inst_34190);
} else {
if((state_val_34215 === (2))){
var state_34214__$1 = state_34214;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34214__$1,(4),ch);
} else {
if((state_val_34215 === (11))){
var inst_34175 = (state_34214[(9)]);
var inst_34171 = (state_34214[(7)]);
var inst_34179 = (state_34214[(11)]);
var inst_34187 = inst_34171.push(inst_34175);
var tmp34227 = inst_34171;
var inst_34171__$1 = tmp34227;
var inst_34172 = inst_34179;
var state_34214__$1 = (function (){var statearr_34228 = state_34214;
(statearr_34228[(7)] = inst_34171__$1);

(statearr_34228[(8)] = inst_34172);

(statearr_34228[(12)] = inst_34187);

return statearr_34228;
})();
var statearr_34229_34854 = state_34214__$1;
(statearr_34229_34854[(2)] = null);

(statearr_34229_34854[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34215 === (9))){
var inst_34172 = (state_34214[(8)]);
var inst_34183 = cljs.core.keyword_identical_QMARK_(inst_34172,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_34214__$1 = state_34214;
var statearr_34230_34855 = state_34214__$1;
(statearr_34230_34855[(2)] = inst_34183);

(statearr_34230_34855[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34215 === (5))){
var inst_34175 = (state_34214[(9)]);
var inst_34180 = (state_34214[(13)]);
var inst_34172 = (state_34214[(8)]);
var inst_34179 = (state_34214[(11)]);
var inst_34179__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_34175) : f.call(null,inst_34175));
var inst_34180__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34179__$1,inst_34172);
var state_34214__$1 = (function (){var statearr_34231 = state_34214;
(statearr_34231[(13)] = inst_34180__$1);

(statearr_34231[(11)] = inst_34179__$1);

return statearr_34231;
})();
if(inst_34180__$1){
var statearr_34232_34856 = state_34214__$1;
(statearr_34232_34856[(1)] = (8));

} else {
var statearr_34233_34857 = state_34214__$1;
(statearr_34233_34857[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34215 === (14))){
var inst_34175 = (state_34214[(9)]);
var inst_34179 = (state_34214[(11)]);
var inst_34192 = (state_34214[(2)]);
var inst_34193 = [];
var inst_34194 = inst_34193.push(inst_34175);
var inst_34171 = inst_34193;
var inst_34172 = inst_34179;
var state_34214__$1 = (function (){var statearr_34234 = state_34214;
(statearr_34234[(7)] = inst_34171);

(statearr_34234[(14)] = inst_34194);

(statearr_34234[(8)] = inst_34172);

(statearr_34234[(15)] = inst_34192);

return statearr_34234;
})();
var statearr_34235_34858 = state_34214__$1;
(statearr_34235_34858[(2)] = null);

(statearr_34235_34858[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34215 === (16))){
var state_34214__$1 = state_34214;
var statearr_34236_34859 = state_34214__$1;
(statearr_34236_34859[(2)] = null);

(statearr_34236_34859[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34215 === (10))){
var inst_34185 = (state_34214[(2)]);
var state_34214__$1 = state_34214;
if(cljs.core.truth_(inst_34185)){
var statearr_34237_34860 = state_34214__$1;
(statearr_34237_34860[(1)] = (11));

} else {
var statearr_34238_34862 = state_34214__$1;
(statearr_34238_34862[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34215 === (18))){
var inst_34204 = (state_34214[(2)]);
var state_34214__$1 = state_34214;
var statearr_34239_34863 = state_34214__$1;
(statearr_34239_34863[(2)] = inst_34204);

(statearr_34239_34863[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34215 === (8))){
var inst_34180 = (state_34214[(13)]);
var state_34214__$1 = state_34214;
var statearr_34240_34864 = state_34214__$1;
(statearr_34240_34864[(2)] = inst_34180);

(statearr_34240_34864[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32582__auto__ = null;
var cljs$core$async$state_machine__32582__auto____0 = (function (){
var statearr_34241 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34241[(0)] = cljs$core$async$state_machine__32582__auto__);

(statearr_34241[(1)] = (1));

return statearr_34241;
});
var cljs$core$async$state_machine__32582__auto____1 = (function (state_34214){
while(true){
var ret_value__32583__auto__ = (function (){try{while(true){
var result__32584__auto__ = switch__32581__auto__(state_34214);
if(cljs.core.keyword_identical_QMARK_(result__32584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32584__auto__;
}
break;
}
}catch (e34242){var ex__32585__auto__ = e34242;
var statearr_34243_34865 = state_34214;
(statearr_34243_34865[(2)] = ex__32585__auto__);


if(cljs.core.seq((state_34214[(4)]))){
var statearr_34244_34867 = state_34214;
(statearr_34244_34867[(1)] = cljs.core.first((state_34214[(4)])));

} else {
throw ex__32585__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34871 = state_34214;
state_34214 = G__34871;
continue;
} else {
return ret_value__32583__auto__;
}
break;
}
});
cljs$core$async$state_machine__32582__auto__ = function(state_34214){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32582__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32582__auto____1.call(this,state_34214);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32582__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32582__auto____0;
cljs$core$async$state_machine__32582__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32582__auto____1;
return cljs$core$async$state_machine__32582__auto__;
})()
})();
var state__32628__auto__ = (function (){var statearr_34245 = f__32627__auto__();
(statearr_34245[(6)] = c__32626__auto___34840);

return statearr_34245;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32628__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
