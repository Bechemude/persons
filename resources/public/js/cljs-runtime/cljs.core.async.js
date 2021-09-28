goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__29793 = arguments.length;
switch (G__29793) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29799 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29799 = (function (f,blockable,meta29800){
this.f = f;
this.blockable = blockable;
this.meta29800 = meta29800;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29799.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29801,meta29800__$1){
var self__ = this;
var _29801__$1 = this;
return (new cljs.core.async.t_cljs$core$async29799(self__.f,self__.blockable,meta29800__$1));
}));

(cljs.core.async.t_cljs$core$async29799.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29801){
var self__ = this;
var _29801__$1 = this;
return self__.meta29800;
}));

(cljs.core.async.t_cljs$core$async29799.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29799.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29799.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async29799.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async29799.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta29800","meta29800",734077687,null)], null);
}));

(cljs.core.async.t_cljs$core$async29799.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29799.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29799");

(cljs.core.async.t_cljs$core$async29799.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async29799");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29799.
 */
cljs.core.async.__GT_t_cljs$core$async29799 = (function cljs$core$async$__GT_t_cljs$core$async29799(f__$1,blockable__$1,meta29800){
return (new cljs.core.async.t_cljs$core$async29799(f__$1,blockable__$1,meta29800));
});

}

return (new cljs.core.async.t_cljs$core$async29799(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__29860 = arguments.length;
switch (G__29860) {
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
var G__29873 = arguments.length;
switch (G__29873) {
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
var G__29878 = arguments.length;
switch (G__29878) {
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
var val_32735 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_32735) : fn1.call(null,val_32735));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_32735) : fn1.call(null,val_32735));
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
var G__29900 = arguments.length;
switch (G__29900) {
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
var n__4695__auto___32741 = n;
var x_32742 = (0);
while(true){
if((x_32742 < n__4695__auto___32741)){
(a[x_32742] = x_32742);

var G__32743 = (x_32742 + (1));
x_32742 = G__32743;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29921 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29921 = (function (flag,meta29922){
this.flag = flag;
this.meta29922 = meta29922;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29921.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29923,meta29922__$1){
var self__ = this;
var _29923__$1 = this;
return (new cljs.core.async.t_cljs$core$async29921(self__.flag,meta29922__$1));
}));

(cljs.core.async.t_cljs$core$async29921.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29923){
var self__ = this;
var _29923__$1 = this;
return self__.meta29922;
}));

(cljs.core.async.t_cljs$core$async29921.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29921.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async29921.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29921.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async29921.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta29922","meta29922",1538810842,null)], null);
}));

(cljs.core.async.t_cljs$core$async29921.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29921.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29921");

(cljs.core.async.t_cljs$core$async29921.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async29921");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29921.
 */
cljs.core.async.__GT_t_cljs$core$async29921 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async29921(flag__$1,meta29922){
return (new cljs.core.async.t_cljs$core$async29921(flag__$1,meta29922));
});

}

return (new cljs.core.async.t_cljs$core$async29921(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29938 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29938 = (function (flag,cb,meta29939){
this.flag = flag;
this.cb = cb;
this.meta29939 = meta29939;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29938.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29940,meta29939__$1){
var self__ = this;
var _29940__$1 = this;
return (new cljs.core.async.t_cljs$core$async29938(self__.flag,self__.cb,meta29939__$1));
}));

(cljs.core.async.t_cljs$core$async29938.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29940){
var self__ = this;
var _29940__$1 = this;
return self__.meta29939;
}));

(cljs.core.async.t_cljs$core$async29938.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29938.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async29938.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29938.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async29938.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta29939","meta29939",1545236643,null)], null);
}));

(cljs.core.async.t_cljs$core$async29938.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29938.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29938");

(cljs.core.async.t_cljs$core$async29938.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async29938");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29938.
 */
cljs.core.async.__GT_t_cljs$core$async29938 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async29938(flag__$1,cb__$1,meta29939){
return (new cljs.core.async.t_cljs$core$async29938(flag__$1,cb__$1,meta29939));
});

}

return (new cljs.core.async.t_cljs$core$async29938(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__29948_SHARP_){
var G__29950 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29948_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__29950) : fret.call(null,G__29950));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29949_SHARP_){
var G__29954 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29949_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__29954) : fret.call(null,G__29954));
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
var G__32753 = (i + (1));
i = G__32753;
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
var len__4818__auto___32759 = arguments.length;
var i__4819__auto___32760 = (0);
while(true){
if((i__4819__auto___32760 < len__4818__auto___32759)){
args__4824__auto__.push((arguments[i__4819__auto___32760]));

var G__32762 = (i__4819__auto___32760 + (1));
i__4819__auto___32760 = G__32762;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__29968){
var map__29970 = p__29968;
var map__29970__$1 = cljs.core.__destructure_map(map__29970);
var opts = map__29970__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq29963){
var G__29964 = cljs.core.first(seq29963);
var seq29963__$1 = cljs.core.next(seq29963);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29964,seq29963__$1);
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
var G__30011 = arguments.length;
switch (G__30011) {
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
var c__29681__auto___32772 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29682__auto__ = (function (){var switch__29478__auto__ = (function (state_30042){
var state_val_30043 = (state_30042[(1)]);
if((state_val_30043 === (7))){
var inst_30038 = (state_30042[(2)]);
var state_30042__$1 = state_30042;
var statearr_30046_32775 = state_30042__$1;
(statearr_30046_32775[(2)] = inst_30038);

(statearr_30046_32775[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30043 === (1))){
var state_30042__$1 = state_30042;
var statearr_30047_32777 = state_30042__$1;
(statearr_30047_32777[(2)] = null);

(statearr_30047_32777[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30043 === (4))){
var inst_30021 = (state_30042[(7)]);
var inst_30021__$1 = (state_30042[(2)]);
var inst_30022 = (inst_30021__$1 == null);
var state_30042__$1 = (function (){var statearr_30053 = state_30042;
(statearr_30053[(7)] = inst_30021__$1);

return statearr_30053;
})();
if(cljs.core.truth_(inst_30022)){
var statearr_30054_32778 = state_30042__$1;
(statearr_30054_32778[(1)] = (5));

} else {
var statearr_30057_32779 = state_30042__$1;
(statearr_30057_32779[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30043 === (13))){
var state_30042__$1 = state_30042;
var statearr_30058_32782 = state_30042__$1;
(statearr_30058_32782[(2)] = null);

(statearr_30058_32782[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30043 === (6))){
var inst_30021 = (state_30042[(7)]);
var state_30042__$1 = state_30042;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30042__$1,(11),to,inst_30021);
} else {
if((state_val_30043 === (3))){
var inst_30040 = (state_30042[(2)]);
var state_30042__$1 = state_30042;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30042__$1,inst_30040);
} else {
if((state_val_30043 === (12))){
var state_30042__$1 = state_30042;
var statearr_30059_32783 = state_30042__$1;
(statearr_30059_32783[(2)] = null);

(statearr_30059_32783[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30043 === (2))){
var state_30042__$1 = state_30042;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30042__$1,(4),from);
} else {
if((state_val_30043 === (11))){
var inst_30031 = (state_30042[(2)]);
var state_30042__$1 = state_30042;
if(cljs.core.truth_(inst_30031)){
var statearr_30060_32785 = state_30042__$1;
(statearr_30060_32785[(1)] = (12));

} else {
var statearr_30061_32787 = state_30042__$1;
(statearr_30061_32787[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30043 === (9))){
var state_30042__$1 = state_30042;
var statearr_30062_32788 = state_30042__$1;
(statearr_30062_32788[(2)] = null);

(statearr_30062_32788[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30043 === (5))){
var state_30042__$1 = state_30042;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30063_32791 = state_30042__$1;
(statearr_30063_32791[(1)] = (8));

} else {
var statearr_30064_32792 = state_30042__$1;
(statearr_30064_32792[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30043 === (14))){
var inst_30036 = (state_30042[(2)]);
var state_30042__$1 = state_30042;
var statearr_30065_32793 = state_30042__$1;
(statearr_30065_32793[(2)] = inst_30036);

(statearr_30065_32793[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30043 === (10))){
var inst_30028 = (state_30042[(2)]);
var state_30042__$1 = state_30042;
var statearr_30066_32794 = state_30042__$1;
(statearr_30066_32794[(2)] = inst_30028);

(statearr_30066_32794[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30043 === (8))){
var inst_30025 = cljs.core.async.close_BANG_(to);
var state_30042__$1 = state_30042;
var statearr_30067_32795 = state_30042__$1;
(statearr_30067_32795[(2)] = inst_30025);

(statearr_30067_32795[(1)] = (10));


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
var cljs$core$async$state_machine__29479__auto__ = null;
var cljs$core$async$state_machine__29479__auto____0 = (function (){
var statearr_30069 = [null,null,null,null,null,null,null,null];
(statearr_30069[(0)] = cljs$core$async$state_machine__29479__auto__);

(statearr_30069[(1)] = (1));

return statearr_30069;
});
var cljs$core$async$state_machine__29479__auto____1 = (function (state_30042){
while(true){
var ret_value__29480__auto__ = (function (){try{while(true){
var result__29481__auto__ = switch__29478__auto__(state_30042);
if(cljs.core.keyword_identical_QMARK_(result__29481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29481__auto__;
}
break;
}
}catch (e30070){var ex__29482__auto__ = e30070;
var statearr_30071_32797 = state_30042;
(statearr_30071_32797[(2)] = ex__29482__auto__);


if(cljs.core.seq((state_30042[(4)]))){
var statearr_30072_32799 = state_30042;
(statearr_30072_32799[(1)] = cljs.core.first((state_30042[(4)])));

} else {
throw ex__29482__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32801 = state_30042;
state_30042 = G__32801;
continue;
} else {
return ret_value__29480__auto__;
}
break;
}
});
cljs$core$async$state_machine__29479__auto__ = function(state_30042){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29479__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29479__auto____1.call(this,state_30042);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29479__auto____0;
cljs$core$async$state_machine__29479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29479__auto____1;
return cljs$core$async$state_machine__29479__auto__;
})()
})();
var state__29683__auto__ = (function (){var statearr_30073 = f__29682__auto__();
(statearr_30073[(6)] = c__29681__auto___32772);

return statearr_30073;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29683__auto__);
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
var process = (function (p__30083){
var vec__30087 = p__30083;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30087,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30087,(1),null);
var job = vec__30087;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__29681__auto___32805 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29682__auto__ = (function (){var switch__29478__auto__ = (function (state_30104){
var state_val_30105 = (state_30104[(1)]);
if((state_val_30105 === (1))){
var state_30104__$1 = state_30104;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30104__$1,(2),res,v);
} else {
if((state_val_30105 === (2))){
var inst_30099 = (state_30104[(2)]);
var inst_30100 = cljs.core.async.close_BANG_(res);
var state_30104__$1 = (function (){var statearr_30106 = state_30104;
(statearr_30106[(7)] = inst_30099);

return statearr_30106;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_30104__$1,inst_30100);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29479__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29479__auto____0 = (function (){
var statearr_30107 = [null,null,null,null,null,null,null,null];
(statearr_30107[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29479__auto__);

(statearr_30107[(1)] = (1));

return statearr_30107;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29479__auto____1 = (function (state_30104){
while(true){
var ret_value__29480__auto__ = (function (){try{while(true){
var result__29481__auto__ = switch__29478__auto__(state_30104);
if(cljs.core.keyword_identical_QMARK_(result__29481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29481__auto__;
}
break;
}
}catch (e30108){var ex__29482__auto__ = e30108;
var statearr_30109_32809 = state_30104;
(statearr_30109_32809[(2)] = ex__29482__auto__);


if(cljs.core.seq((state_30104[(4)]))){
var statearr_30110_32810 = state_30104;
(statearr_30110_32810[(1)] = cljs.core.first((state_30104[(4)])));

} else {
throw ex__29482__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32812 = state_30104;
state_30104 = G__32812;
continue;
} else {
return ret_value__29480__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29479__auto__ = function(state_30104){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29479__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29479__auto____1.call(this,state_30104);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29479__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29479__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29479__auto__;
})()
})();
var state__29683__auto__ = (function (){var statearr_30111 = f__29682__auto__();
(statearr_30111[(6)] = c__29681__auto___32805);

return statearr_30111;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29683__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__30112){
var vec__30113 = p__30112;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30113,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30113,(1),null);
var job = vec__30113;
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
var n__4695__auto___32814 = n;
var __32815 = (0);
while(true){
if((__32815 < n__4695__auto___32814)){
var G__30116_32816 = type;
var G__30116_32817__$1 = (((G__30116_32816 instanceof cljs.core.Keyword))?G__30116_32816.fqn:null);
switch (G__30116_32817__$1) {
case "compute":
var c__29681__auto___32819 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__32815,c__29681__auto___32819,G__30116_32816,G__30116_32817__$1,n__4695__auto___32814,jobs,results,process,async){
return (function (){
var f__29682__auto__ = (function (){var switch__29478__auto__ = ((function (__32815,c__29681__auto___32819,G__30116_32816,G__30116_32817__$1,n__4695__auto___32814,jobs,results,process,async){
return (function (state_30129){
var state_val_30130 = (state_30129[(1)]);
if((state_val_30130 === (1))){
var state_30129__$1 = state_30129;
var statearr_30135_32822 = state_30129__$1;
(statearr_30135_32822[(2)] = null);

(statearr_30135_32822[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30130 === (2))){
var state_30129__$1 = state_30129;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30129__$1,(4),jobs);
} else {
if((state_val_30130 === (3))){
var inst_30127 = (state_30129[(2)]);
var state_30129__$1 = state_30129;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30129__$1,inst_30127);
} else {
if((state_val_30130 === (4))){
var inst_30119 = (state_30129[(2)]);
var inst_30120 = process(inst_30119);
var state_30129__$1 = state_30129;
if(cljs.core.truth_(inst_30120)){
var statearr_30137_32823 = state_30129__$1;
(statearr_30137_32823[(1)] = (5));

} else {
var statearr_30139_32824 = state_30129__$1;
(statearr_30139_32824[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30130 === (5))){
var state_30129__$1 = state_30129;
var statearr_30141_32828 = state_30129__$1;
(statearr_30141_32828[(2)] = null);

(statearr_30141_32828[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30130 === (6))){
var state_30129__$1 = state_30129;
var statearr_30144_32831 = state_30129__$1;
(statearr_30144_32831[(2)] = null);

(statearr_30144_32831[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30130 === (7))){
var inst_30125 = (state_30129[(2)]);
var state_30129__$1 = state_30129;
var statearr_30148_32832 = state_30129__$1;
(statearr_30148_32832[(2)] = inst_30125);

(statearr_30148_32832[(1)] = (3));


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
});})(__32815,c__29681__auto___32819,G__30116_32816,G__30116_32817__$1,n__4695__auto___32814,jobs,results,process,async))
;
return ((function (__32815,switch__29478__auto__,c__29681__auto___32819,G__30116_32816,G__30116_32817__$1,n__4695__auto___32814,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29479__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29479__auto____0 = (function (){
var statearr_30153 = [null,null,null,null,null,null,null];
(statearr_30153[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29479__auto__);

(statearr_30153[(1)] = (1));

return statearr_30153;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29479__auto____1 = (function (state_30129){
while(true){
var ret_value__29480__auto__ = (function (){try{while(true){
var result__29481__auto__ = switch__29478__auto__(state_30129);
if(cljs.core.keyword_identical_QMARK_(result__29481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29481__auto__;
}
break;
}
}catch (e30154){var ex__29482__auto__ = e30154;
var statearr_30155_32834 = state_30129;
(statearr_30155_32834[(2)] = ex__29482__auto__);


if(cljs.core.seq((state_30129[(4)]))){
var statearr_30156_32835 = state_30129;
(statearr_30156_32835[(1)] = cljs.core.first((state_30129[(4)])));

} else {
throw ex__29482__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32840 = state_30129;
state_30129 = G__32840;
continue;
} else {
return ret_value__29480__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29479__auto__ = function(state_30129){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29479__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29479__auto____1.call(this,state_30129);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29479__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29479__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29479__auto__;
})()
;})(__32815,switch__29478__auto__,c__29681__auto___32819,G__30116_32816,G__30116_32817__$1,n__4695__auto___32814,jobs,results,process,async))
})();
var state__29683__auto__ = (function (){var statearr_30157 = f__29682__auto__();
(statearr_30157[(6)] = c__29681__auto___32819);

return statearr_30157;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29683__auto__);
});})(__32815,c__29681__auto___32819,G__30116_32816,G__30116_32817__$1,n__4695__auto___32814,jobs,results,process,async))
);


break;
case "async":
var c__29681__auto___32844 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__32815,c__29681__auto___32844,G__30116_32816,G__30116_32817__$1,n__4695__auto___32814,jobs,results,process,async){
return (function (){
var f__29682__auto__ = (function (){var switch__29478__auto__ = ((function (__32815,c__29681__auto___32844,G__30116_32816,G__30116_32817__$1,n__4695__auto___32814,jobs,results,process,async){
return (function (state_30170){
var state_val_30171 = (state_30170[(1)]);
if((state_val_30171 === (1))){
var state_30170__$1 = state_30170;
var statearr_30174_32852 = state_30170__$1;
(statearr_30174_32852[(2)] = null);

(statearr_30174_32852[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30171 === (2))){
var state_30170__$1 = state_30170;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30170__$1,(4),jobs);
} else {
if((state_val_30171 === (3))){
var inst_30168 = (state_30170[(2)]);
var state_30170__$1 = state_30170;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30170__$1,inst_30168);
} else {
if((state_val_30171 === (4))){
var inst_30160 = (state_30170[(2)]);
var inst_30161 = async(inst_30160);
var state_30170__$1 = state_30170;
if(cljs.core.truth_(inst_30161)){
var statearr_30180_32862 = state_30170__$1;
(statearr_30180_32862[(1)] = (5));

} else {
var statearr_30182_32863 = state_30170__$1;
(statearr_30182_32863[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30171 === (5))){
var state_30170__$1 = state_30170;
var statearr_30184_32868 = state_30170__$1;
(statearr_30184_32868[(2)] = null);

(statearr_30184_32868[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30171 === (6))){
var state_30170__$1 = state_30170;
var statearr_30185_32873 = state_30170__$1;
(statearr_30185_32873[(2)] = null);

(statearr_30185_32873[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30171 === (7))){
var inst_30166 = (state_30170[(2)]);
var state_30170__$1 = state_30170;
var statearr_30186_32875 = state_30170__$1;
(statearr_30186_32875[(2)] = inst_30166);

(statearr_30186_32875[(1)] = (3));


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
});})(__32815,c__29681__auto___32844,G__30116_32816,G__30116_32817__$1,n__4695__auto___32814,jobs,results,process,async))
;
return ((function (__32815,switch__29478__auto__,c__29681__auto___32844,G__30116_32816,G__30116_32817__$1,n__4695__auto___32814,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29479__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29479__auto____0 = (function (){
var statearr_30188 = [null,null,null,null,null,null,null];
(statearr_30188[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29479__auto__);

(statearr_30188[(1)] = (1));

return statearr_30188;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29479__auto____1 = (function (state_30170){
while(true){
var ret_value__29480__auto__ = (function (){try{while(true){
var result__29481__auto__ = switch__29478__auto__(state_30170);
if(cljs.core.keyword_identical_QMARK_(result__29481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29481__auto__;
}
break;
}
}catch (e30190){var ex__29482__auto__ = e30190;
var statearr_30191_32887 = state_30170;
(statearr_30191_32887[(2)] = ex__29482__auto__);


if(cljs.core.seq((state_30170[(4)]))){
var statearr_30192_32893 = state_30170;
(statearr_30192_32893[(1)] = cljs.core.first((state_30170[(4)])));

} else {
throw ex__29482__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32894 = state_30170;
state_30170 = G__32894;
continue;
} else {
return ret_value__29480__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29479__auto__ = function(state_30170){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29479__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29479__auto____1.call(this,state_30170);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29479__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29479__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29479__auto__;
})()
;})(__32815,switch__29478__auto__,c__29681__auto___32844,G__30116_32816,G__30116_32817__$1,n__4695__auto___32814,jobs,results,process,async))
})();
var state__29683__auto__ = (function (){var statearr_30197 = f__29682__auto__();
(statearr_30197[(6)] = c__29681__auto___32844);

return statearr_30197;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29683__auto__);
});})(__32815,c__29681__auto___32844,G__30116_32816,G__30116_32817__$1,n__4695__auto___32814,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30116_32817__$1)].join('')));

}

var G__32896 = (__32815 + (1));
__32815 = G__32896;
continue;
} else {
}
break;
}

var c__29681__auto___32897 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29682__auto__ = (function (){var switch__29478__auto__ = (function (state_30219){
var state_val_30220 = (state_30219[(1)]);
if((state_val_30220 === (7))){
var inst_30215 = (state_30219[(2)]);
var state_30219__$1 = state_30219;
var statearr_30229_32902 = state_30219__$1;
(statearr_30229_32902[(2)] = inst_30215);

(statearr_30229_32902[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30220 === (1))){
var state_30219__$1 = state_30219;
var statearr_30231_32904 = state_30219__$1;
(statearr_30231_32904[(2)] = null);

(statearr_30231_32904[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30220 === (4))){
var inst_30200 = (state_30219[(7)]);
var inst_30200__$1 = (state_30219[(2)]);
var inst_30201 = (inst_30200__$1 == null);
var state_30219__$1 = (function (){var statearr_30232 = state_30219;
(statearr_30232[(7)] = inst_30200__$1);

return statearr_30232;
})();
if(cljs.core.truth_(inst_30201)){
var statearr_30233_32908 = state_30219__$1;
(statearr_30233_32908[(1)] = (5));

} else {
var statearr_30234_32909 = state_30219__$1;
(statearr_30234_32909[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30220 === (6))){
var inst_30200 = (state_30219[(7)]);
var inst_30205 = (state_30219[(8)]);
var inst_30205__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_30206 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30207 = [inst_30200,inst_30205__$1];
var inst_30208 = (new cljs.core.PersistentVector(null,2,(5),inst_30206,inst_30207,null));
var state_30219__$1 = (function (){var statearr_30235 = state_30219;
(statearr_30235[(8)] = inst_30205__$1);

return statearr_30235;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30219__$1,(8),jobs,inst_30208);
} else {
if((state_val_30220 === (3))){
var inst_30217 = (state_30219[(2)]);
var state_30219__$1 = state_30219;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30219__$1,inst_30217);
} else {
if((state_val_30220 === (2))){
var state_30219__$1 = state_30219;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30219__$1,(4),from);
} else {
if((state_val_30220 === (9))){
var inst_30212 = (state_30219[(2)]);
var state_30219__$1 = (function (){var statearr_30238 = state_30219;
(statearr_30238[(9)] = inst_30212);

return statearr_30238;
})();
var statearr_30239_32911 = state_30219__$1;
(statearr_30239_32911[(2)] = null);

(statearr_30239_32911[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30220 === (5))){
var inst_30203 = cljs.core.async.close_BANG_(jobs);
var state_30219__$1 = state_30219;
var statearr_30240_32912 = state_30219__$1;
(statearr_30240_32912[(2)] = inst_30203);

(statearr_30240_32912[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30220 === (8))){
var inst_30205 = (state_30219[(8)]);
var inst_30210 = (state_30219[(2)]);
var state_30219__$1 = (function (){var statearr_30244 = state_30219;
(statearr_30244[(10)] = inst_30210);

return statearr_30244;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30219__$1,(9),results,inst_30205);
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
var cljs$core$async$pipeline_STAR__$_state_machine__29479__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29479__auto____0 = (function (){
var statearr_30250 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30250[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29479__auto__);

(statearr_30250[(1)] = (1));

return statearr_30250;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29479__auto____1 = (function (state_30219){
while(true){
var ret_value__29480__auto__ = (function (){try{while(true){
var result__29481__auto__ = switch__29478__auto__(state_30219);
if(cljs.core.keyword_identical_QMARK_(result__29481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29481__auto__;
}
break;
}
}catch (e30251){var ex__29482__auto__ = e30251;
var statearr_30252_32914 = state_30219;
(statearr_30252_32914[(2)] = ex__29482__auto__);


if(cljs.core.seq((state_30219[(4)]))){
var statearr_30253_32915 = state_30219;
(statearr_30253_32915[(1)] = cljs.core.first((state_30219[(4)])));

} else {
throw ex__29482__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32916 = state_30219;
state_30219 = G__32916;
continue;
} else {
return ret_value__29480__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29479__auto__ = function(state_30219){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29479__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29479__auto____1.call(this,state_30219);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29479__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29479__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29479__auto__;
})()
})();
var state__29683__auto__ = (function (){var statearr_30254 = f__29682__auto__();
(statearr_30254[(6)] = c__29681__auto___32897);

return statearr_30254;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29683__auto__);
}));


var c__29681__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29682__auto__ = (function (){var switch__29478__auto__ = (function (state_30300){
var state_val_30301 = (state_30300[(1)]);
if((state_val_30301 === (7))){
var inst_30296 = (state_30300[(2)]);
var state_30300__$1 = state_30300;
var statearr_30308_32919 = state_30300__$1;
(statearr_30308_32919[(2)] = inst_30296);

(statearr_30308_32919[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30301 === (20))){
var state_30300__$1 = state_30300;
var statearr_30309_32921 = state_30300__$1;
(statearr_30309_32921[(2)] = null);

(statearr_30309_32921[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30301 === (1))){
var state_30300__$1 = state_30300;
var statearr_30316_32924 = state_30300__$1;
(statearr_30316_32924[(2)] = null);

(statearr_30316_32924[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30301 === (4))){
var inst_30257 = (state_30300[(7)]);
var inst_30257__$1 = (state_30300[(2)]);
var inst_30258 = (inst_30257__$1 == null);
var state_30300__$1 = (function (){var statearr_30317 = state_30300;
(statearr_30317[(7)] = inst_30257__$1);

return statearr_30317;
})();
if(cljs.core.truth_(inst_30258)){
var statearr_30319_32927 = state_30300__$1;
(statearr_30319_32927[(1)] = (5));

} else {
var statearr_30320_32929 = state_30300__$1;
(statearr_30320_32929[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30301 === (15))){
var inst_30278 = (state_30300[(8)]);
var state_30300__$1 = state_30300;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30300__$1,(18),to,inst_30278);
} else {
if((state_val_30301 === (21))){
var inst_30291 = (state_30300[(2)]);
var state_30300__$1 = state_30300;
var statearr_30321_32932 = state_30300__$1;
(statearr_30321_32932[(2)] = inst_30291);

(statearr_30321_32932[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30301 === (13))){
var inst_30293 = (state_30300[(2)]);
var state_30300__$1 = (function (){var statearr_30326 = state_30300;
(statearr_30326[(9)] = inst_30293);

return statearr_30326;
})();
var statearr_30327_32933 = state_30300__$1;
(statearr_30327_32933[(2)] = null);

(statearr_30327_32933[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30301 === (6))){
var inst_30257 = (state_30300[(7)]);
var state_30300__$1 = state_30300;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30300__$1,(11),inst_30257);
} else {
if((state_val_30301 === (17))){
var inst_30286 = (state_30300[(2)]);
var state_30300__$1 = state_30300;
if(cljs.core.truth_(inst_30286)){
var statearr_30345_32935 = state_30300__$1;
(statearr_30345_32935[(1)] = (19));

} else {
var statearr_30346_32937 = state_30300__$1;
(statearr_30346_32937[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30301 === (3))){
var inst_30298 = (state_30300[(2)]);
var state_30300__$1 = state_30300;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30300__$1,inst_30298);
} else {
if((state_val_30301 === (12))){
var inst_30271 = (state_30300[(10)]);
var state_30300__$1 = state_30300;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30300__$1,(14),inst_30271);
} else {
if((state_val_30301 === (2))){
var state_30300__$1 = state_30300;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30300__$1,(4),results);
} else {
if((state_val_30301 === (19))){
var state_30300__$1 = state_30300;
var statearr_30349_32939 = state_30300__$1;
(statearr_30349_32939[(2)] = null);

(statearr_30349_32939[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30301 === (11))){
var inst_30271 = (state_30300[(2)]);
var state_30300__$1 = (function (){var statearr_30350 = state_30300;
(statearr_30350[(10)] = inst_30271);

return statearr_30350;
})();
var statearr_30351_32940 = state_30300__$1;
(statearr_30351_32940[(2)] = null);

(statearr_30351_32940[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30301 === (9))){
var state_30300__$1 = state_30300;
var statearr_30352_32941 = state_30300__$1;
(statearr_30352_32941[(2)] = null);

(statearr_30352_32941[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30301 === (5))){
var state_30300__$1 = state_30300;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30353_32946 = state_30300__$1;
(statearr_30353_32946[(1)] = (8));

} else {
var statearr_30354_32947 = state_30300__$1;
(statearr_30354_32947[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30301 === (14))){
var inst_30278 = (state_30300[(8)]);
var inst_30280 = (state_30300[(11)]);
var inst_30278__$1 = (state_30300[(2)]);
var inst_30279 = (inst_30278__$1 == null);
var inst_30280__$1 = cljs.core.not(inst_30279);
var state_30300__$1 = (function (){var statearr_30355 = state_30300;
(statearr_30355[(8)] = inst_30278__$1);

(statearr_30355[(11)] = inst_30280__$1);

return statearr_30355;
})();
if(inst_30280__$1){
var statearr_30356_32951 = state_30300__$1;
(statearr_30356_32951[(1)] = (15));

} else {
var statearr_30357_32952 = state_30300__$1;
(statearr_30357_32952[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30301 === (16))){
var inst_30280 = (state_30300[(11)]);
var state_30300__$1 = state_30300;
var statearr_30358_32953 = state_30300__$1;
(statearr_30358_32953[(2)] = inst_30280);

(statearr_30358_32953[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30301 === (10))){
var inst_30268 = (state_30300[(2)]);
var state_30300__$1 = state_30300;
var statearr_30359_32955 = state_30300__$1;
(statearr_30359_32955[(2)] = inst_30268);

(statearr_30359_32955[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30301 === (18))){
var inst_30283 = (state_30300[(2)]);
var state_30300__$1 = state_30300;
var statearr_30362_32962 = state_30300__$1;
(statearr_30362_32962[(2)] = inst_30283);

(statearr_30362_32962[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30301 === (8))){
var inst_30265 = cljs.core.async.close_BANG_(to);
var state_30300__$1 = state_30300;
var statearr_30363_32963 = state_30300__$1;
(statearr_30363_32963[(2)] = inst_30265);

(statearr_30363_32963[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__29479__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29479__auto____0 = (function (){
var statearr_30364 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30364[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29479__auto__);

(statearr_30364[(1)] = (1));

return statearr_30364;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29479__auto____1 = (function (state_30300){
while(true){
var ret_value__29480__auto__ = (function (){try{while(true){
var result__29481__auto__ = switch__29478__auto__(state_30300);
if(cljs.core.keyword_identical_QMARK_(result__29481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29481__auto__;
}
break;
}
}catch (e30365){var ex__29482__auto__ = e30365;
var statearr_30366_32968 = state_30300;
(statearr_30366_32968[(2)] = ex__29482__auto__);


if(cljs.core.seq((state_30300[(4)]))){
var statearr_30370_32969 = state_30300;
(statearr_30370_32969[(1)] = cljs.core.first((state_30300[(4)])));

} else {
throw ex__29482__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32970 = state_30300;
state_30300 = G__32970;
continue;
} else {
return ret_value__29480__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29479__auto__ = function(state_30300){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29479__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29479__auto____1.call(this,state_30300);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29479__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29479__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29479__auto__;
})()
})();
var state__29683__auto__ = (function (){var statearr_30371 = f__29682__auto__();
(statearr_30371[(6)] = c__29681__auto__);

return statearr_30371;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29683__auto__);
}));

return c__29681__auto__;
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
var G__30373 = arguments.length;
switch (G__30373) {
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
var G__30381 = arguments.length;
switch (G__30381) {
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
var G__30399 = arguments.length;
switch (G__30399) {
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
var c__29681__auto___32994 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29682__auto__ = (function (){var switch__29478__auto__ = (function (state_30442){
var state_val_30443 = (state_30442[(1)]);
if((state_val_30443 === (7))){
var inst_30435 = (state_30442[(2)]);
var state_30442__$1 = state_30442;
var statearr_30444_32998 = state_30442__$1;
(statearr_30444_32998[(2)] = inst_30435);

(statearr_30444_32998[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30443 === (1))){
var state_30442__$1 = state_30442;
var statearr_30445_33000 = state_30442__$1;
(statearr_30445_33000[(2)] = null);

(statearr_30445_33000[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30443 === (4))){
var inst_30411 = (state_30442[(7)]);
var inst_30411__$1 = (state_30442[(2)]);
var inst_30413 = (inst_30411__$1 == null);
var state_30442__$1 = (function (){var statearr_30446 = state_30442;
(statearr_30446[(7)] = inst_30411__$1);

return statearr_30446;
})();
if(cljs.core.truth_(inst_30413)){
var statearr_30447_33001 = state_30442__$1;
(statearr_30447_33001[(1)] = (5));

} else {
var statearr_30448_33005 = state_30442__$1;
(statearr_30448_33005[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30443 === (13))){
var state_30442__$1 = state_30442;
var statearr_30449_33006 = state_30442__$1;
(statearr_30449_33006[(2)] = null);

(statearr_30449_33006[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30443 === (6))){
var inst_30411 = (state_30442[(7)]);
var inst_30421 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_30411) : p.call(null,inst_30411));
var state_30442__$1 = state_30442;
if(cljs.core.truth_(inst_30421)){
var statearr_30452_33007 = state_30442__$1;
(statearr_30452_33007[(1)] = (9));

} else {
var statearr_30455_33009 = state_30442__$1;
(statearr_30455_33009[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30443 === (3))){
var inst_30440 = (state_30442[(2)]);
var state_30442__$1 = state_30442;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30442__$1,inst_30440);
} else {
if((state_val_30443 === (12))){
var state_30442__$1 = state_30442;
var statearr_30458_33012 = state_30442__$1;
(statearr_30458_33012[(2)] = null);

(statearr_30458_33012[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30443 === (2))){
var state_30442__$1 = state_30442;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30442__$1,(4),ch);
} else {
if((state_val_30443 === (11))){
var inst_30411 = (state_30442[(7)]);
var inst_30425 = (state_30442[(2)]);
var state_30442__$1 = state_30442;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30442__$1,(8),inst_30425,inst_30411);
} else {
if((state_val_30443 === (9))){
var state_30442__$1 = state_30442;
var statearr_30459_33014 = state_30442__$1;
(statearr_30459_33014[(2)] = tc);

(statearr_30459_33014[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30443 === (5))){
var inst_30415 = cljs.core.async.close_BANG_(tc);
var inst_30416 = cljs.core.async.close_BANG_(fc);
var state_30442__$1 = (function (){var statearr_30463 = state_30442;
(statearr_30463[(8)] = inst_30415);

return statearr_30463;
})();
var statearr_30464_33015 = state_30442__$1;
(statearr_30464_33015[(2)] = inst_30416);

(statearr_30464_33015[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30443 === (14))){
var inst_30433 = (state_30442[(2)]);
var state_30442__$1 = state_30442;
var statearr_30465_33016 = state_30442__$1;
(statearr_30465_33016[(2)] = inst_30433);

(statearr_30465_33016[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30443 === (10))){
var state_30442__$1 = state_30442;
var statearr_30468_33017 = state_30442__$1;
(statearr_30468_33017[(2)] = fc);

(statearr_30468_33017[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30443 === (8))){
var inst_30428 = (state_30442[(2)]);
var state_30442__$1 = state_30442;
if(cljs.core.truth_(inst_30428)){
var statearr_30469_33018 = state_30442__$1;
(statearr_30469_33018[(1)] = (12));

} else {
var statearr_30470_33020 = state_30442__$1;
(statearr_30470_33020[(1)] = (13));

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
var cljs$core$async$state_machine__29479__auto__ = null;
var cljs$core$async$state_machine__29479__auto____0 = (function (){
var statearr_30471 = [null,null,null,null,null,null,null,null,null];
(statearr_30471[(0)] = cljs$core$async$state_machine__29479__auto__);

(statearr_30471[(1)] = (1));

return statearr_30471;
});
var cljs$core$async$state_machine__29479__auto____1 = (function (state_30442){
while(true){
var ret_value__29480__auto__ = (function (){try{while(true){
var result__29481__auto__ = switch__29478__auto__(state_30442);
if(cljs.core.keyword_identical_QMARK_(result__29481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29481__auto__;
}
break;
}
}catch (e30478){var ex__29482__auto__ = e30478;
var statearr_30479_33022 = state_30442;
(statearr_30479_33022[(2)] = ex__29482__auto__);


if(cljs.core.seq((state_30442[(4)]))){
var statearr_30480_33023 = state_30442;
(statearr_30480_33023[(1)] = cljs.core.first((state_30442[(4)])));

} else {
throw ex__29482__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33028 = state_30442;
state_30442 = G__33028;
continue;
} else {
return ret_value__29480__auto__;
}
break;
}
});
cljs$core$async$state_machine__29479__auto__ = function(state_30442){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29479__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29479__auto____1.call(this,state_30442);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29479__auto____0;
cljs$core$async$state_machine__29479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29479__auto____1;
return cljs$core$async$state_machine__29479__auto__;
})()
})();
var state__29683__auto__ = (function (){var statearr_30481 = f__29682__auto__();
(statearr_30481[(6)] = c__29681__auto___32994);

return statearr_30481;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29683__auto__);
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
var c__29681__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29682__auto__ = (function (){var switch__29478__auto__ = (function (state_30503){
var state_val_30504 = (state_30503[(1)]);
if((state_val_30504 === (7))){
var inst_30499 = (state_30503[(2)]);
var state_30503__$1 = state_30503;
var statearr_30507_33033 = state_30503__$1;
(statearr_30507_33033[(2)] = inst_30499);

(statearr_30507_33033[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30504 === (1))){
var inst_30482 = init;
var inst_30483 = inst_30482;
var state_30503__$1 = (function (){var statearr_30510 = state_30503;
(statearr_30510[(7)] = inst_30483);

return statearr_30510;
})();
var statearr_30512_33036 = state_30503__$1;
(statearr_30512_33036[(2)] = null);

(statearr_30512_33036[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30504 === (4))){
var inst_30486 = (state_30503[(8)]);
var inst_30486__$1 = (state_30503[(2)]);
var inst_30487 = (inst_30486__$1 == null);
var state_30503__$1 = (function (){var statearr_30515 = state_30503;
(statearr_30515[(8)] = inst_30486__$1);

return statearr_30515;
})();
if(cljs.core.truth_(inst_30487)){
var statearr_30520_33042 = state_30503__$1;
(statearr_30520_33042[(1)] = (5));

} else {
var statearr_30521_33043 = state_30503__$1;
(statearr_30521_33043[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30504 === (6))){
var inst_30483 = (state_30503[(7)]);
var inst_30490 = (state_30503[(9)]);
var inst_30486 = (state_30503[(8)]);
var inst_30490__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_30483,inst_30486) : f.call(null,inst_30483,inst_30486));
var inst_30491 = cljs.core.reduced_QMARK_(inst_30490__$1);
var state_30503__$1 = (function (){var statearr_30523 = state_30503;
(statearr_30523[(9)] = inst_30490__$1);

return statearr_30523;
})();
if(inst_30491){
var statearr_30524_33048 = state_30503__$1;
(statearr_30524_33048[(1)] = (8));

} else {
var statearr_30525_33049 = state_30503__$1;
(statearr_30525_33049[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30504 === (3))){
var inst_30501 = (state_30503[(2)]);
var state_30503__$1 = state_30503;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30503__$1,inst_30501);
} else {
if((state_val_30504 === (2))){
var state_30503__$1 = state_30503;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30503__$1,(4),ch);
} else {
if((state_val_30504 === (9))){
var inst_30490 = (state_30503[(9)]);
var inst_30483 = inst_30490;
var state_30503__$1 = (function (){var statearr_30526 = state_30503;
(statearr_30526[(7)] = inst_30483);

return statearr_30526;
})();
var statearr_30527_33051 = state_30503__$1;
(statearr_30527_33051[(2)] = null);

(statearr_30527_33051[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30504 === (5))){
var inst_30483 = (state_30503[(7)]);
var state_30503__$1 = state_30503;
var statearr_30530_33054 = state_30503__$1;
(statearr_30530_33054[(2)] = inst_30483);

(statearr_30530_33054[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30504 === (10))){
var inst_30497 = (state_30503[(2)]);
var state_30503__$1 = state_30503;
var statearr_30531_33055 = state_30503__$1;
(statearr_30531_33055[(2)] = inst_30497);

(statearr_30531_33055[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30504 === (8))){
var inst_30490 = (state_30503[(9)]);
var inst_30493 = cljs.core.deref(inst_30490);
var state_30503__$1 = state_30503;
var statearr_30532_33057 = state_30503__$1;
(statearr_30532_33057[(2)] = inst_30493);

(statearr_30532_33057[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__29479__auto__ = null;
var cljs$core$async$reduce_$_state_machine__29479__auto____0 = (function (){
var statearr_30537 = [null,null,null,null,null,null,null,null,null,null];
(statearr_30537[(0)] = cljs$core$async$reduce_$_state_machine__29479__auto__);

(statearr_30537[(1)] = (1));

return statearr_30537;
});
var cljs$core$async$reduce_$_state_machine__29479__auto____1 = (function (state_30503){
while(true){
var ret_value__29480__auto__ = (function (){try{while(true){
var result__29481__auto__ = switch__29478__auto__(state_30503);
if(cljs.core.keyword_identical_QMARK_(result__29481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29481__auto__;
}
break;
}
}catch (e30539){var ex__29482__auto__ = e30539;
var statearr_30540_33063 = state_30503;
(statearr_30540_33063[(2)] = ex__29482__auto__);


if(cljs.core.seq((state_30503[(4)]))){
var statearr_30541_33064 = state_30503;
(statearr_30541_33064[(1)] = cljs.core.first((state_30503[(4)])));

} else {
throw ex__29482__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33067 = state_30503;
state_30503 = G__33067;
continue;
} else {
return ret_value__29480__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__29479__auto__ = function(state_30503){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__29479__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__29479__auto____1.call(this,state_30503);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__29479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__29479__auto____0;
cljs$core$async$reduce_$_state_machine__29479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__29479__auto____1;
return cljs$core$async$reduce_$_state_machine__29479__auto__;
})()
})();
var state__29683__auto__ = (function (){var statearr_30542 = f__29682__auto__();
(statearr_30542[(6)] = c__29681__auto__);

return statearr_30542;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29683__auto__);
}));

return c__29681__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__29681__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29682__auto__ = (function (){var switch__29478__auto__ = (function (state_30552){
var state_val_30553 = (state_30552[(1)]);
if((state_val_30553 === (1))){
var inst_30546 = cljs.core.async.reduce(f__$1,init,ch);
var state_30552__$1 = state_30552;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30552__$1,(2),inst_30546);
} else {
if((state_val_30553 === (2))){
var inst_30548 = (state_30552[(2)]);
var inst_30549 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_30548) : f__$1.call(null,inst_30548));
var state_30552__$1 = state_30552;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30552__$1,inst_30549);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__29479__auto__ = null;
var cljs$core$async$transduce_$_state_machine__29479__auto____0 = (function (){
var statearr_30554 = [null,null,null,null,null,null,null];
(statearr_30554[(0)] = cljs$core$async$transduce_$_state_machine__29479__auto__);

(statearr_30554[(1)] = (1));

return statearr_30554;
});
var cljs$core$async$transduce_$_state_machine__29479__auto____1 = (function (state_30552){
while(true){
var ret_value__29480__auto__ = (function (){try{while(true){
var result__29481__auto__ = switch__29478__auto__(state_30552);
if(cljs.core.keyword_identical_QMARK_(result__29481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29481__auto__;
}
break;
}
}catch (e30557){var ex__29482__auto__ = e30557;
var statearr_30558_33080 = state_30552;
(statearr_30558_33080[(2)] = ex__29482__auto__);


if(cljs.core.seq((state_30552[(4)]))){
var statearr_30559_33081 = state_30552;
(statearr_30559_33081[(1)] = cljs.core.first((state_30552[(4)])));

} else {
throw ex__29482__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33083 = state_30552;
state_30552 = G__33083;
continue;
} else {
return ret_value__29480__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__29479__auto__ = function(state_30552){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__29479__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__29479__auto____1.call(this,state_30552);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__29479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__29479__auto____0;
cljs$core$async$transduce_$_state_machine__29479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__29479__auto____1;
return cljs$core$async$transduce_$_state_machine__29479__auto__;
})()
})();
var state__29683__auto__ = (function (){var statearr_30564 = f__29682__auto__();
(statearr_30564[(6)] = c__29681__auto__);

return statearr_30564;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29683__auto__);
}));

return c__29681__auto__;
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
var G__30571 = arguments.length;
switch (G__30571) {
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
var c__29681__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29682__auto__ = (function (){var switch__29478__auto__ = (function (state_30599){
var state_val_30600 = (state_30599[(1)]);
if((state_val_30600 === (7))){
var inst_30580 = (state_30599[(2)]);
var state_30599__$1 = state_30599;
var statearr_30609_33093 = state_30599__$1;
(statearr_30609_33093[(2)] = inst_30580);

(statearr_30609_33093[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30600 === (1))){
var inst_30573 = cljs.core.seq(coll);
var inst_30574 = inst_30573;
var state_30599__$1 = (function (){var statearr_30615 = state_30599;
(statearr_30615[(7)] = inst_30574);

return statearr_30615;
})();
var statearr_30617_33098 = state_30599__$1;
(statearr_30617_33098[(2)] = null);

(statearr_30617_33098[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30600 === (4))){
var inst_30574 = (state_30599[(7)]);
var inst_30578 = cljs.core.first(inst_30574);
var state_30599__$1 = state_30599;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30599__$1,(7),ch,inst_30578);
} else {
if((state_val_30600 === (13))){
var inst_30593 = (state_30599[(2)]);
var state_30599__$1 = state_30599;
var statearr_30631_33099 = state_30599__$1;
(statearr_30631_33099[(2)] = inst_30593);

(statearr_30631_33099[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30600 === (6))){
var inst_30583 = (state_30599[(2)]);
var state_30599__$1 = state_30599;
if(cljs.core.truth_(inst_30583)){
var statearr_30633_33101 = state_30599__$1;
(statearr_30633_33101[(1)] = (8));

} else {
var statearr_30639_33102 = state_30599__$1;
(statearr_30639_33102[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30600 === (3))){
var inst_30597 = (state_30599[(2)]);
var state_30599__$1 = state_30599;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30599__$1,inst_30597);
} else {
if((state_val_30600 === (12))){
var state_30599__$1 = state_30599;
var statearr_30641_33106 = state_30599__$1;
(statearr_30641_33106[(2)] = null);

(statearr_30641_33106[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30600 === (2))){
var inst_30574 = (state_30599[(7)]);
var state_30599__$1 = state_30599;
if(cljs.core.truth_(inst_30574)){
var statearr_30642_33108 = state_30599__$1;
(statearr_30642_33108[(1)] = (4));

} else {
var statearr_30644_33109 = state_30599__$1;
(statearr_30644_33109[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30600 === (11))){
var inst_30589 = cljs.core.async.close_BANG_(ch);
var state_30599__$1 = state_30599;
var statearr_30645_33111 = state_30599__$1;
(statearr_30645_33111[(2)] = inst_30589);

(statearr_30645_33111[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30600 === (9))){
var state_30599__$1 = state_30599;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30646_33112 = state_30599__$1;
(statearr_30646_33112[(1)] = (11));

} else {
var statearr_30647_33113 = state_30599__$1;
(statearr_30647_33113[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30600 === (5))){
var inst_30574 = (state_30599[(7)]);
var state_30599__$1 = state_30599;
var statearr_30649_33115 = state_30599__$1;
(statearr_30649_33115[(2)] = inst_30574);

(statearr_30649_33115[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30600 === (10))){
var inst_30595 = (state_30599[(2)]);
var state_30599__$1 = state_30599;
var statearr_30650_33120 = state_30599__$1;
(statearr_30650_33120[(2)] = inst_30595);

(statearr_30650_33120[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30600 === (8))){
var inst_30574 = (state_30599[(7)]);
var inst_30585 = cljs.core.next(inst_30574);
var inst_30574__$1 = inst_30585;
var state_30599__$1 = (function (){var statearr_30653 = state_30599;
(statearr_30653[(7)] = inst_30574__$1);

return statearr_30653;
})();
var statearr_30654_33121 = state_30599__$1;
(statearr_30654_33121[(2)] = null);

(statearr_30654_33121[(1)] = (2));


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
var cljs$core$async$state_machine__29479__auto__ = null;
var cljs$core$async$state_machine__29479__auto____0 = (function (){
var statearr_30656 = [null,null,null,null,null,null,null,null];
(statearr_30656[(0)] = cljs$core$async$state_machine__29479__auto__);

(statearr_30656[(1)] = (1));

return statearr_30656;
});
var cljs$core$async$state_machine__29479__auto____1 = (function (state_30599){
while(true){
var ret_value__29480__auto__ = (function (){try{while(true){
var result__29481__auto__ = switch__29478__auto__(state_30599);
if(cljs.core.keyword_identical_QMARK_(result__29481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29481__auto__;
}
break;
}
}catch (e30657){var ex__29482__auto__ = e30657;
var statearr_30658_33131 = state_30599;
(statearr_30658_33131[(2)] = ex__29482__auto__);


if(cljs.core.seq((state_30599[(4)]))){
var statearr_30659_33133 = state_30599;
(statearr_30659_33133[(1)] = cljs.core.first((state_30599[(4)])));

} else {
throw ex__29482__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33137 = state_30599;
state_30599 = G__33137;
continue;
} else {
return ret_value__29480__auto__;
}
break;
}
});
cljs$core$async$state_machine__29479__auto__ = function(state_30599){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29479__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29479__auto____1.call(this,state_30599);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29479__auto____0;
cljs$core$async$state_machine__29479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29479__auto____1;
return cljs$core$async$state_machine__29479__auto__;
})()
})();
var state__29683__auto__ = (function (){var statearr_30661 = f__29682__auto__();
(statearr_30661[(6)] = c__29681__auto__);

return statearr_30661;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29683__auto__);
}));

return c__29681__auto__;
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
var G__30677 = arguments.length;
switch (G__30677) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_33169 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_33169(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_33176 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_33176(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_33182 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_33182(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_33187 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_33187(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30778 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30778 = (function (ch,cs,meta30779){
this.ch = ch;
this.cs = cs;
this.meta30779 = meta30779;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30778.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30780,meta30779__$1){
var self__ = this;
var _30780__$1 = this;
return (new cljs.core.async.t_cljs$core$async30778(self__.ch,self__.cs,meta30779__$1));
}));

(cljs.core.async.t_cljs$core$async30778.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30780){
var self__ = this;
var _30780__$1 = this;
return self__.meta30779;
}));

(cljs.core.async.t_cljs$core$async30778.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30778.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async30778.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30778.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async30778.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async30778.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async30778.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta30779","meta30779",-1564186285,null)], null);
}));

(cljs.core.async.t_cljs$core$async30778.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30778.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30778");

(cljs.core.async.t_cljs$core$async30778.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async30778");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30778.
 */
cljs.core.async.__GT_t_cljs$core$async30778 = (function cljs$core$async$mult_$___GT_t_cljs$core$async30778(ch__$1,cs__$1,meta30779){
return (new cljs.core.async.t_cljs$core$async30778(ch__$1,cs__$1,meta30779));
});

}

return (new cljs.core.async.t_cljs$core$async30778(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__29681__auto___33210 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29682__auto__ = (function (){var switch__29478__auto__ = (function (state_30951){
var state_val_30952 = (state_30951[(1)]);
if((state_val_30952 === (7))){
var inst_30947 = (state_30951[(2)]);
var state_30951__$1 = state_30951;
var statearr_30955_33213 = state_30951__$1;
(statearr_30955_33213[(2)] = inst_30947);

(statearr_30955_33213[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30952 === (20))){
var inst_30836 = (state_30951[(7)]);
var inst_30856 = cljs.core.first(inst_30836);
var inst_30857 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30856,(0),null);
var inst_30858 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30856,(1),null);
var state_30951__$1 = (function (){var statearr_30956 = state_30951;
(statearr_30956[(8)] = inst_30857);

return statearr_30956;
})();
if(cljs.core.truth_(inst_30858)){
var statearr_30957_33219 = state_30951__$1;
(statearr_30957_33219[(1)] = (22));

} else {
var statearr_30958_33221 = state_30951__$1;
(statearr_30958_33221[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30952 === (27))){
var inst_30889 = (state_30951[(9)]);
var inst_30900 = (state_30951[(10)]);
var inst_30804 = (state_30951[(11)]);
var inst_30891 = (state_30951[(12)]);
var inst_30900__$1 = cljs.core._nth(inst_30889,inst_30891);
var inst_30901 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_30900__$1,inst_30804,done);
var state_30951__$1 = (function (){var statearr_30969 = state_30951;
(statearr_30969[(10)] = inst_30900__$1);

return statearr_30969;
})();
if(cljs.core.truth_(inst_30901)){
var statearr_30970_33232 = state_30951__$1;
(statearr_30970_33232[(1)] = (30));

} else {
var statearr_30971_33234 = state_30951__$1;
(statearr_30971_33234[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30952 === (1))){
var state_30951__$1 = state_30951;
var statearr_30977_33236 = state_30951__$1;
(statearr_30977_33236[(2)] = null);

(statearr_30977_33236[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30952 === (24))){
var inst_30836 = (state_30951[(7)]);
var inst_30864 = (state_30951[(2)]);
var inst_30865 = cljs.core.next(inst_30836);
var inst_30813 = inst_30865;
var inst_30814 = null;
var inst_30815 = (0);
var inst_30816 = (0);
var state_30951__$1 = (function (){var statearr_30978 = state_30951;
(statearr_30978[(13)] = inst_30864);

(statearr_30978[(14)] = inst_30814);

(statearr_30978[(15)] = inst_30816);

(statearr_30978[(16)] = inst_30813);

(statearr_30978[(17)] = inst_30815);

return statearr_30978;
})();
var statearr_30979_33241 = state_30951__$1;
(statearr_30979_33241[(2)] = null);

(statearr_30979_33241[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30952 === (39))){
var state_30951__$1 = state_30951;
var statearr_30985_33245 = state_30951__$1;
(statearr_30985_33245[(2)] = null);

(statearr_30985_33245[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30952 === (4))){
var inst_30804 = (state_30951[(11)]);
var inst_30804__$1 = (state_30951[(2)]);
var inst_30805 = (inst_30804__$1 == null);
var state_30951__$1 = (function (){var statearr_30986 = state_30951;
(statearr_30986[(11)] = inst_30804__$1);

return statearr_30986;
})();
if(cljs.core.truth_(inst_30805)){
var statearr_30987_33248 = state_30951__$1;
(statearr_30987_33248[(1)] = (5));

} else {
var statearr_30988_33250 = state_30951__$1;
(statearr_30988_33250[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30952 === (15))){
var inst_30814 = (state_30951[(14)]);
var inst_30816 = (state_30951[(15)]);
var inst_30813 = (state_30951[(16)]);
var inst_30815 = (state_30951[(17)]);
var inst_30831 = (state_30951[(2)]);
var inst_30832 = (inst_30816 + (1));
var tmp30980 = inst_30814;
var tmp30981 = inst_30813;
var tmp30982 = inst_30815;
var inst_30813__$1 = tmp30981;
var inst_30814__$1 = tmp30980;
var inst_30815__$1 = tmp30982;
var inst_30816__$1 = inst_30832;
var state_30951__$1 = (function (){var statearr_30990 = state_30951;
(statearr_30990[(14)] = inst_30814__$1);

(statearr_30990[(15)] = inst_30816__$1);

(statearr_30990[(18)] = inst_30831);

(statearr_30990[(16)] = inst_30813__$1);

(statearr_30990[(17)] = inst_30815__$1);

return statearr_30990;
})();
var statearr_30995_33251 = state_30951__$1;
(statearr_30995_33251[(2)] = null);

(statearr_30995_33251[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30952 === (21))){
var inst_30868 = (state_30951[(2)]);
var state_30951__$1 = state_30951;
var statearr_31004_33252 = state_30951__$1;
(statearr_31004_33252[(2)] = inst_30868);

(statearr_31004_33252[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30952 === (31))){
var inst_30900 = (state_30951[(10)]);
var inst_30905 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_30900);
var state_30951__$1 = state_30951;
var statearr_31005_33257 = state_30951__$1;
(statearr_31005_33257[(2)] = inst_30905);

(statearr_31005_33257[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30952 === (32))){
var inst_30889 = (state_30951[(9)]);
var inst_30888 = (state_30951[(19)]);
var inst_30890 = (state_30951[(20)]);
var inst_30891 = (state_30951[(12)]);
var inst_30907 = (state_30951[(2)]);
var inst_30908 = (inst_30891 + (1));
var tmp30996 = inst_30889;
var tmp30997 = inst_30888;
var tmp30998 = inst_30890;
var inst_30888__$1 = tmp30997;
var inst_30889__$1 = tmp30996;
var inst_30890__$1 = tmp30998;
var inst_30891__$1 = inst_30908;
var state_30951__$1 = (function (){var statearr_31007 = state_30951;
(statearr_31007[(9)] = inst_30889__$1);

(statearr_31007[(19)] = inst_30888__$1);

(statearr_31007[(20)] = inst_30890__$1);

(statearr_31007[(12)] = inst_30891__$1);

(statearr_31007[(21)] = inst_30907);

return statearr_31007;
})();
var statearr_31008_33270 = state_30951__$1;
(statearr_31008_33270[(2)] = null);

(statearr_31008_33270[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30952 === (40))){
var inst_30920 = (state_30951[(22)]);
var inst_30924 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_30920);
var state_30951__$1 = state_30951;
var statearr_31009_33272 = state_30951__$1;
(statearr_31009_33272[(2)] = inst_30924);

(statearr_31009_33272[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30952 === (33))){
var inst_30911 = (state_30951[(23)]);
var inst_30913 = cljs.core.chunked_seq_QMARK_(inst_30911);
var state_30951__$1 = state_30951;
if(inst_30913){
var statearr_31016_33275 = state_30951__$1;
(statearr_31016_33275[(1)] = (36));

} else {
var statearr_31017_33276 = state_30951__$1;
(statearr_31017_33276[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30952 === (13))){
var inst_30825 = (state_30951[(24)]);
var inst_30828 = cljs.core.async.close_BANG_(inst_30825);
var state_30951__$1 = state_30951;
var statearr_31018_33277 = state_30951__$1;
(statearr_31018_33277[(2)] = inst_30828);

(statearr_31018_33277[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30952 === (22))){
var inst_30857 = (state_30951[(8)]);
var inst_30861 = cljs.core.async.close_BANG_(inst_30857);
var state_30951__$1 = state_30951;
var statearr_31019_33278 = state_30951__$1;
(statearr_31019_33278[(2)] = inst_30861);

(statearr_31019_33278[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30952 === (36))){
var inst_30911 = (state_30951[(23)]);
var inst_30915 = cljs.core.chunk_first(inst_30911);
var inst_30916 = cljs.core.chunk_rest(inst_30911);
var inst_30917 = cljs.core.count(inst_30915);
var inst_30888 = inst_30916;
var inst_30889 = inst_30915;
var inst_30890 = inst_30917;
var inst_30891 = (0);
var state_30951__$1 = (function (){var statearr_31020 = state_30951;
(statearr_31020[(9)] = inst_30889);

(statearr_31020[(19)] = inst_30888);

(statearr_31020[(20)] = inst_30890);

(statearr_31020[(12)] = inst_30891);

return statearr_31020;
})();
var statearr_31021_33283 = state_30951__$1;
(statearr_31021_33283[(2)] = null);

(statearr_31021_33283[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30952 === (41))){
var inst_30911 = (state_30951[(23)]);
var inst_30926 = (state_30951[(2)]);
var inst_30927 = cljs.core.next(inst_30911);
var inst_30888 = inst_30927;
var inst_30889 = null;
var inst_30890 = (0);
var inst_30891 = (0);
var state_30951__$1 = (function (){var statearr_31022 = state_30951;
(statearr_31022[(9)] = inst_30889);

(statearr_31022[(19)] = inst_30888);

(statearr_31022[(20)] = inst_30890);

(statearr_31022[(25)] = inst_30926);

(statearr_31022[(12)] = inst_30891);

return statearr_31022;
})();
var statearr_31023_33290 = state_30951__$1;
(statearr_31023_33290[(2)] = null);

(statearr_31023_33290[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30952 === (43))){
var state_30951__$1 = state_30951;
var statearr_31024_33291 = state_30951__$1;
(statearr_31024_33291[(2)] = null);

(statearr_31024_33291[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30952 === (29))){
var inst_30935 = (state_30951[(2)]);
var state_30951__$1 = state_30951;
var statearr_31025_33292 = state_30951__$1;
(statearr_31025_33292[(2)] = inst_30935);

(statearr_31025_33292[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30952 === (44))){
var inst_30944 = (state_30951[(2)]);
var state_30951__$1 = (function (){var statearr_31026 = state_30951;
(statearr_31026[(26)] = inst_30944);

return statearr_31026;
})();
var statearr_31031_33295 = state_30951__$1;
(statearr_31031_33295[(2)] = null);

(statearr_31031_33295[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30952 === (6))){
var inst_30879 = (state_30951[(27)]);
var inst_30878 = cljs.core.deref(cs);
var inst_30879__$1 = cljs.core.keys(inst_30878);
var inst_30880 = cljs.core.count(inst_30879__$1);
var inst_30881 = cljs.core.reset_BANG_(dctr,inst_30880);
var inst_30887 = cljs.core.seq(inst_30879__$1);
var inst_30888 = inst_30887;
var inst_30889 = null;
var inst_30890 = (0);
var inst_30891 = (0);
var state_30951__$1 = (function (){var statearr_31037 = state_30951;
(statearr_31037[(9)] = inst_30889);

(statearr_31037[(27)] = inst_30879__$1);

(statearr_31037[(19)] = inst_30888);

(statearr_31037[(20)] = inst_30890);

(statearr_31037[(28)] = inst_30881);

(statearr_31037[(12)] = inst_30891);

return statearr_31037;
})();
var statearr_31038_33302 = state_30951__$1;
(statearr_31038_33302[(2)] = null);

(statearr_31038_33302[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30952 === (28))){
var inst_30888 = (state_30951[(19)]);
var inst_30911 = (state_30951[(23)]);
var inst_30911__$1 = cljs.core.seq(inst_30888);
var state_30951__$1 = (function (){var statearr_31039 = state_30951;
(statearr_31039[(23)] = inst_30911__$1);

return statearr_31039;
})();
if(inst_30911__$1){
var statearr_31040_33303 = state_30951__$1;
(statearr_31040_33303[(1)] = (33));

} else {
var statearr_31041_33304 = state_30951__$1;
(statearr_31041_33304[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30952 === (25))){
var inst_30890 = (state_30951[(20)]);
var inst_30891 = (state_30951[(12)]);
var inst_30896 = (inst_30891 < inst_30890);
var inst_30897 = inst_30896;
var state_30951__$1 = state_30951;
if(cljs.core.truth_(inst_30897)){
var statearr_31044_33306 = state_30951__$1;
(statearr_31044_33306[(1)] = (27));

} else {
var statearr_31045_33308 = state_30951__$1;
(statearr_31045_33308[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30952 === (34))){
var state_30951__$1 = state_30951;
var statearr_31048_33310 = state_30951__$1;
(statearr_31048_33310[(2)] = null);

(statearr_31048_33310[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30952 === (17))){
var state_30951__$1 = state_30951;
var statearr_31049_33311 = state_30951__$1;
(statearr_31049_33311[(2)] = null);

(statearr_31049_33311[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30952 === (3))){
var inst_30949 = (state_30951[(2)]);
var state_30951__$1 = state_30951;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30951__$1,inst_30949);
} else {
if((state_val_30952 === (12))){
var inst_30873 = (state_30951[(2)]);
var state_30951__$1 = state_30951;
var statearr_31056_33315 = state_30951__$1;
(statearr_31056_33315[(2)] = inst_30873);

(statearr_31056_33315[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30952 === (2))){
var state_30951__$1 = state_30951;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30951__$1,(4),ch);
} else {
if((state_val_30952 === (23))){
var state_30951__$1 = state_30951;
var statearr_31057_33316 = state_30951__$1;
(statearr_31057_33316[(2)] = null);

(statearr_31057_33316[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30952 === (35))){
var inst_30933 = (state_30951[(2)]);
var state_30951__$1 = state_30951;
var statearr_31063_33320 = state_30951__$1;
(statearr_31063_33320[(2)] = inst_30933);

(statearr_31063_33320[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30952 === (19))){
var inst_30836 = (state_30951[(7)]);
var inst_30844 = cljs.core.chunk_first(inst_30836);
var inst_30845 = cljs.core.chunk_rest(inst_30836);
var inst_30846 = cljs.core.count(inst_30844);
var inst_30813 = inst_30845;
var inst_30814 = inst_30844;
var inst_30815 = inst_30846;
var inst_30816 = (0);
var state_30951__$1 = (function (){var statearr_31064 = state_30951;
(statearr_31064[(14)] = inst_30814);

(statearr_31064[(15)] = inst_30816);

(statearr_31064[(16)] = inst_30813);

(statearr_31064[(17)] = inst_30815);

return statearr_31064;
})();
var statearr_31065_33325 = state_30951__$1;
(statearr_31065_33325[(2)] = null);

(statearr_31065_33325[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30952 === (11))){
var inst_30836 = (state_30951[(7)]);
var inst_30813 = (state_30951[(16)]);
var inst_30836__$1 = cljs.core.seq(inst_30813);
var state_30951__$1 = (function (){var statearr_31070 = state_30951;
(statearr_31070[(7)] = inst_30836__$1);

return statearr_31070;
})();
if(inst_30836__$1){
var statearr_31071_33332 = state_30951__$1;
(statearr_31071_33332[(1)] = (16));

} else {
var statearr_31072_33333 = state_30951__$1;
(statearr_31072_33333[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30952 === (9))){
var inst_30875 = (state_30951[(2)]);
var state_30951__$1 = state_30951;
var statearr_31075_33335 = state_30951__$1;
(statearr_31075_33335[(2)] = inst_30875);

(statearr_31075_33335[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30952 === (5))){
var inst_30811 = cljs.core.deref(cs);
var inst_30812 = cljs.core.seq(inst_30811);
var inst_30813 = inst_30812;
var inst_30814 = null;
var inst_30815 = (0);
var inst_30816 = (0);
var state_30951__$1 = (function (){var statearr_31078 = state_30951;
(statearr_31078[(14)] = inst_30814);

(statearr_31078[(15)] = inst_30816);

(statearr_31078[(16)] = inst_30813);

(statearr_31078[(17)] = inst_30815);

return statearr_31078;
})();
var statearr_31079_33345 = state_30951__$1;
(statearr_31079_33345[(2)] = null);

(statearr_31079_33345[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30952 === (14))){
var state_30951__$1 = state_30951;
var statearr_31082_33346 = state_30951__$1;
(statearr_31082_33346[(2)] = null);

(statearr_31082_33346[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30952 === (45))){
var inst_30941 = (state_30951[(2)]);
var state_30951__$1 = state_30951;
var statearr_31083_33348 = state_30951__$1;
(statearr_31083_33348[(2)] = inst_30941);

(statearr_31083_33348[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30952 === (26))){
var inst_30879 = (state_30951[(27)]);
var inst_30937 = (state_30951[(2)]);
var inst_30938 = cljs.core.seq(inst_30879);
var state_30951__$1 = (function (){var statearr_31084 = state_30951;
(statearr_31084[(29)] = inst_30937);

return statearr_31084;
})();
if(inst_30938){
var statearr_31085_33354 = state_30951__$1;
(statearr_31085_33354[(1)] = (42));

} else {
var statearr_31086_33356 = state_30951__$1;
(statearr_31086_33356[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30952 === (16))){
var inst_30836 = (state_30951[(7)]);
var inst_30841 = cljs.core.chunked_seq_QMARK_(inst_30836);
var state_30951__$1 = state_30951;
if(inst_30841){
var statearr_31087_33358 = state_30951__$1;
(statearr_31087_33358[(1)] = (19));

} else {
var statearr_31088_33359 = state_30951__$1;
(statearr_31088_33359[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30952 === (38))){
var inst_30930 = (state_30951[(2)]);
var state_30951__$1 = state_30951;
var statearr_31089_33363 = state_30951__$1;
(statearr_31089_33363[(2)] = inst_30930);

(statearr_31089_33363[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30952 === (30))){
var state_30951__$1 = state_30951;
var statearr_31094_33368 = state_30951__$1;
(statearr_31094_33368[(2)] = null);

(statearr_31094_33368[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30952 === (10))){
var inst_30814 = (state_30951[(14)]);
var inst_30816 = (state_30951[(15)]);
var inst_30824 = cljs.core._nth(inst_30814,inst_30816);
var inst_30825 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30824,(0),null);
var inst_30826 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30824,(1),null);
var state_30951__$1 = (function (){var statearr_31102 = state_30951;
(statearr_31102[(24)] = inst_30825);

return statearr_31102;
})();
if(cljs.core.truth_(inst_30826)){
var statearr_31103_33373 = state_30951__$1;
(statearr_31103_33373[(1)] = (13));

} else {
var statearr_31104_33374 = state_30951__$1;
(statearr_31104_33374[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30952 === (18))){
var inst_30871 = (state_30951[(2)]);
var state_30951__$1 = state_30951;
var statearr_31105_33375 = state_30951__$1;
(statearr_31105_33375[(2)] = inst_30871);

(statearr_31105_33375[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30952 === (42))){
var state_30951__$1 = state_30951;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30951__$1,(45),dchan);
} else {
if((state_val_30952 === (37))){
var inst_30920 = (state_30951[(22)]);
var inst_30911 = (state_30951[(23)]);
var inst_30804 = (state_30951[(11)]);
var inst_30920__$1 = cljs.core.first(inst_30911);
var inst_30921 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_30920__$1,inst_30804,done);
var state_30951__$1 = (function (){var statearr_31110 = state_30951;
(statearr_31110[(22)] = inst_30920__$1);

return statearr_31110;
})();
if(cljs.core.truth_(inst_30921)){
var statearr_31111_33380 = state_30951__$1;
(statearr_31111_33380[(1)] = (39));

} else {
var statearr_31112_33381 = state_30951__$1;
(statearr_31112_33381[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30952 === (8))){
var inst_30816 = (state_30951[(15)]);
var inst_30815 = (state_30951[(17)]);
var inst_30818 = (inst_30816 < inst_30815);
var inst_30819 = inst_30818;
var state_30951__$1 = state_30951;
if(cljs.core.truth_(inst_30819)){
var statearr_31113_33385 = state_30951__$1;
(statearr_31113_33385[(1)] = (10));

} else {
var statearr_31114_33387 = state_30951__$1;
(statearr_31114_33387[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__29479__auto__ = null;
var cljs$core$async$mult_$_state_machine__29479__auto____0 = (function (){
var statearr_31119 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31119[(0)] = cljs$core$async$mult_$_state_machine__29479__auto__);

(statearr_31119[(1)] = (1));

return statearr_31119;
});
var cljs$core$async$mult_$_state_machine__29479__auto____1 = (function (state_30951){
while(true){
var ret_value__29480__auto__ = (function (){try{while(true){
var result__29481__auto__ = switch__29478__auto__(state_30951);
if(cljs.core.keyword_identical_QMARK_(result__29481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29481__auto__;
}
break;
}
}catch (e31120){var ex__29482__auto__ = e31120;
var statearr_31121_33397 = state_30951;
(statearr_31121_33397[(2)] = ex__29482__auto__);


if(cljs.core.seq((state_30951[(4)]))){
var statearr_31123_33400 = state_30951;
(statearr_31123_33400[(1)] = cljs.core.first((state_30951[(4)])));

} else {
throw ex__29482__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33404 = state_30951;
state_30951 = G__33404;
continue;
} else {
return ret_value__29480__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__29479__auto__ = function(state_30951){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__29479__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__29479__auto____1.call(this,state_30951);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__29479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__29479__auto____0;
cljs$core$async$mult_$_state_machine__29479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__29479__auto____1;
return cljs$core$async$mult_$_state_machine__29479__auto__;
})()
})();
var state__29683__auto__ = (function (){var statearr_31127 = f__29682__auto__();
(statearr_31127[(6)] = c__29681__auto___33210);

return statearr_31127;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29683__auto__);
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
var G__31129 = arguments.length;
switch (G__31129) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_33414 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_33414(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_33419 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_33419(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_33423 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_33423(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_33426 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_33426(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_33433 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_33433(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___33437 = arguments.length;
var i__4819__auto___33438 = (0);
while(true){
if((i__4819__auto___33438 < len__4818__auto___33437)){
args__4824__auto__.push((arguments[i__4819__auto___33438]));

var G__33439 = (i__4819__auto___33438 + (1));
i__4819__auto___33438 = G__33439;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((3) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4825__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__31154){
var map__31155 = p__31154;
var map__31155__$1 = cljs.core.__destructure_map(map__31155);
var opts = map__31155__$1;
var statearr_31156_33442 = state;
(statearr_31156_33442[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_31161_33445 = state;
(statearr_31161_33445[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_31162_33447 = state;
(statearr_31162_33447[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq31144){
var G__31145 = cljs.core.first(seq31144);
var seq31144__$1 = cljs.core.next(seq31144);
var G__31146 = cljs.core.first(seq31144__$1);
var seq31144__$2 = cljs.core.next(seq31144__$1);
var G__31147 = cljs.core.first(seq31144__$2);
var seq31144__$3 = cljs.core.next(seq31144__$2);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31145,G__31146,G__31147,seq31144__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31180 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31180 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta31181){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta31181 = meta31181;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31180.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31182,meta31181__$1){
var self__ = this;
var _31182__$1 = this;
return (new cljs.core.async.t_cljs$core$async31180(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta31181__$1));
}));

(cljs.core.async.t_cljs$core$async31180.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31182){
var self__ = this;
var _31182__$1 = this;
return self__.meta31181;
}));

(cljs.core.async.t_cljs$core$async31180.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31180.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async31180.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31180.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31180.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31180.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31180.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31180.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31180.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta31181","meta31181",767444139,null)], null);
}));

(cljs.core.async.t_cljs$core$async31180.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31180.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31180");

(cljs.core.async.t_cljs$core$async31180.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async31180");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31180.
 */
cljs.core.async.__GT_t_cljs$core$async31180 = (function cljs$core$async$mix_$___GT_t_cljs$core$async31180(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31181){
return (new cljs.core.async.t_cljs$core$async31180(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31181));
});

}

return (new cljs.core.async.t_cljs$core$async31180(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29681__auto___33483 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29682__auto__ = (function (){var switch__29478__auto__ = (function (state_31271){
var state_val_31272 = (state_31271[(1)]);
if((state_val_31272 === (7))){
var inst_31223 = (state_31271[(2)]);
var state_31271__$1 = state_31271;
if(cljs.core.truth_(inst_31223)){
var statearr_31273_33485 = state_31271__$1;
(statearr_31273_33485[(1)] = (8));

} else {
var statearr_31274_33486 = state_31271__$1;
(statearr_31274_33486[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31272 === (20))){
var inst_31212 = (state_31271[(7)]);
var state_31271__$1 = state_31271;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31271__$1,(23),out,inst_31212);
} else {
if((state_val_31272 === (1))){
var inst_31195 = calc_state();
var inst_31196 = cljs.core.__destructure_map(inst_31195);
var inst_31197 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31196,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31198 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31196,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31199 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31196,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_31200 = inst_31195;
var state_31271__$1 = (function (){var statearr_31275 = state_31271;
(statearr_31275[(8)] = inst_31200);

(statearr_31275[(9)] = inst_31198);

(statearr_31275[(10)] = inst_31197);

(statearr_31275[(11)] = inst_31199);

return statearr_31275;
})();
var statearr_31276_33491 = state_31271__$1;
(statearr_31276_33491[(2)] = null);

(statearr_31276_33491[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31272 === (24))){
var inst_31203 = (state_31271[(12)]);
var inst_31200 = inst_31203;
var state_31271__$1 = (function (){var statearr_31277 = state_31271;
(statearr_31277[(8)] = inst_31200);

return statearr_31277;
})();
var statearr_31278_33494 = state_31271__$1;
(statearr_31278_33494[(2)] = null);

(statearr_31278_33494[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31272 === (4))){
var inst_31212 = (state_31271[(7)]);
var inst_31214 = (state_31271[(13)]);
var inst_31211 = (state_31271[(2)]);
var inst_31212__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31211,(0),null);
var inst_31213 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31211,(1),null);
var inst_31214__$1 = (inst_31212__$1 == null);
var state_31271__$1 = (function (){var statearr_31279 = state_31271;
(statearr_31279[(14)] = inst_31213);

(statearr_31279[(7)] = inst_31212__$1);

(statearr_31279[(13)] = inst_31214__$1);

return statearr_31279;
})();
if(cljs.core.truth_(inst_31214__$1)){
var statearr_31280_33497 = state_31271__$1;
(statearr_31280_33497[(1)] = (5));

} else {
var statearr_31281_33503 = state_31271__$1;
(statearr_31281_33503[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31272 === (15))){
var inst_31245 = (state_31271[(15)]);
var inst_31204 = (state_31271[(16)]);
var inst_31245__$1 = cljs.core.empty_QMARK_(inst_31204);
var state_31271__$1 = (function (){var statearr_31282 = state_31271;
(statearr_31282[(15)] = inst_31245__$1);

return statearr_31282;
})();
if(inst_31245__$1){
var statearr_31285_33508 = state_31271__$1;
(statearr_31285_33508[(1)] = (17));

} else {
var statearr_31286_33510 = state_31271__$1;
(statearr_31286_33510[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31272 === (21))){
var inst_31203 = (state_31271[(12)]);
var inst_31200 = inst_31203;
var state_31271__$1 = (function (){var statearr_31288 = state_31271;
(statearr_31288[(8)] = inst_31200);

return statearr_31288;
})();
var statearr_31289_33513 = state_31271__$1;
(statearr_31289_33513[(2)] = null);

(statearr_31289_33513[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31272 === (13))){
var inst_31230 = (state_31271[(2)]);
var inst_31235 = calc_state();
var inst_31200 = inst_31235;
var state_31271__$1 = (function (){var statearr_31290 = state_31271;
(statearr_31290[(8)] = inst_31200);

(statearr_31290[(17)] = inst_31230);

return statearr_31290;
})();
var statearr_31291_33515 = state_31271__$1;
(statearr_31291_33515[(2)] = null);

(statearr_31291_33515[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31272 === (22))){
var inst_31265 = (state_31271[(2)]);
var state_31271__$1 = state_31271;
var statearr_31292_33520 = state_31271__$1;
(statearr_31292_33520[(2)] = inst_31265);

(statearr_31292_33520[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31272 === (6))){
var inst_31213 = (state_31271[(14)]);
var inst_31221 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31213,change);
var state_31271__$1 = state_31271;
var statearr_31296_33524 = state_31271__$1;
(statearr_31296_33524[(2)] = inst_31221);

(statearr_31296_33524[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31272 === (25))){
var state_31271__$1 = state_31271;
var statearr_31299_33528 = state_31271__$1;
(statearr_31299_33528[(2)] = null);

(statearr_31299_33528[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31272 === (17))){
var inst_31213 = (state_31271[(14)]);
var inst_31205 = (state_31271[(18)]);
var inst_31247 = (inst_31205.cljs$core$IFn$_invoke$arity$1 ? inst_31205.cljs$core$IFn$_invoke$arity$1(inst_31213) : inst_31205.call(null,inst_31213));
var inst_31248 = cljs.core.not(inst_31247);
var state_31271__$1 = state_31271;
var statearr_31305_33530 = state_31271__$1;
(statearr_31305_33530[(2)] = inst_31248);

(statearr_31305_33530[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31272 === (3))){
var inst_31269 = (state_31271[(2)]);
var state_31271__$1 = state_31271;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31271__$1,inst_31269);
} else {
if((state_val_31272 === (12))){
var state_31271__$1 = state_31271;
var statearr_31307_33534 = state_31271__$1;
(statearr_31307_33534[(2)] = null);

(statearr_31307_33534[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31272 === (2))){
var inst_31200 = (state_31271[(8)]);
var inst_31203 = (state_31271[(12)]);
var inst_31203__$1 = cljs.core.__destructure_map(inst_31200);
var inst_31204 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31203__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31205 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31203__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31206 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31203__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_31271__$1 = (function (){var statearr_31309 = state_31271;
(statearr_31309[(12)] = inst_31203__$1);

(statearr_31309[(18)] = inst_31205);

(statearr_31309[(16)] = inst_31204);

return statearr_31309;
})();
return cljs.core.async.ioc_alts_BANG_(state_31271__$1,(4),inst_31206);
} else {
if((state_val_31272 === (23))){
var inst_31256 = (state_31271[(2)]);
var state_31271__$1 = state_31271;
if(cljs.core.truth_(inst_31256)){
var statearr_31310_33542 = state_31271__$1;
(statearr_31310_33542[(1)] = (24));

} else {
var statearr_31313_33543 = state_31271__$1;
(statearr_31313_33543[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31272 === (19))){
var inst_31251 = (state_31271[(2)]);
var state_31271__$1 = state_31271;
var statearr_31314_33544 = state_31271__$1;
(statearr_31314_33544[(2)] = inst_31251);

(statearr_31314_33544[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31272 === (11))){
var inst_31213 = (state_31271[(14)]);
var inst_31227 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_31213);
var state_31271__$1 = state_31271;
var statearr_31318_33547 = state_31271__$1;
(statearr_31318_33547[(2)] = inst_31227);

(statearr_31318_33547[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31272 === (9))){
var inst_31213 = (state_31271[(14)]);
var inst_31238 = (state_31271[(19)]);
var inst_31204 = (state_31271[(16)]);
var inst_31238__$1 = (inst_31204.cljs$core$IFn$_invoke$arity$1 ? inst_31204.cljs$core$IFn$_invoke$arity$1(inst_31213) : inst_31204.call(null,inst_31213));
var state_31271__$1 = (function (){var statearr_31320 = state_31271;
(statearr_31320[(19)] = inst_31238__$1);

return statearr_31320;
})();
if(cljs.core.truth_(inst_31238__$1)){
var statearr_31323_33552 = state_31271__$1;
(statearr_31323_33552[(1)] = (14));

} else {
var statearr_31324_33553 = state_31271__$1;
(statearr_31324_33553[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31272 === (5))){
var inst_31214 = (state_31271[(13)]);
var state_31271__$1 = state_31271;
var statearr_31325_33554 = state_31271__$1;
(statearr_31325_33554[(2)] = inst_31214);

(statearr_31325_33554[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31272 === (14))){
var inst_31238 = (state_31271[(19)]);
var state_31271__$1 = state_31271;
var statearr_31326_33556 = state_31271__$1;
(statearr_31326_33556[(2)] = inst_31238);

(statearr_31326_33556[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31272 === (26))){
var inst_31261 = (state_31271[(2)]);
var state_31271__$1 = state_31271;
var statearr_31329_33560 = state_31271__$1;
(statearr_31329_33560[(2)] = inst_31261);

(statearr_31329_33560[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31272 === (16))){
var inst_31253 = (state_31271[(2)]);
var state_31271__$1 = state_31271;
if(cljs.core.truth_(inst_31253)){
var statearr_31339_33561 = state_31271__$1;
(statearr_31339_33561[(1)] = (20));

} else {
var statearr_31340_33562 = state_31271__$1;
(statearr_31340_33562[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31272 === (10))){
var inst_31267 = (state_31271[(2)]);
var state_31271__$1 = state_31271;
var statearr_31343_33566 = state_31271__$1;
(statearr_31343_33566[(2)] = inst_31267);

(statearr_31343_33566[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31272 === (18))){
var inst_31245 = (state_31271[(15)]);
var state_31271__$1 = state_31271;
var statearr_31348_33567 = state_31271__$1;
(statearr_31348_33567[(2)] = inst_31245);

(statearr_31348_33567[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31272 === (8))){
var inst_31212 = (state_31271[(7)]);
var inst_31225 = (inst_31212 == null);
var state_31271__$1 = state_31271;
if(cljs.core.truth_(inst_31225)){
var statearr_31349_33570 = state_31271__$1;
(statearr_31349_33570[(1)] = (11));

} else {
var statearr_31350_33571 = state_31271__$1;
(statearr_31350_33571[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__29479__auto__ = null;
var cljs$core$async$mix_$_state_machine__29479__auto____0 = (function (){
var statearr_31352 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31352[(0)] = cljs$core$async$mix_$_state_machine__29479__auto__);

(statearr_31352[(1)] = (1));

return statearr_31352;
});
var cljs$core$async$mix_$_state_machine__29479__auto____1 = (function (state_31271){
while(true){
var ret_value__29480__auto__ = (function (){try{while(true){
var result__29481__auto__ = switch__29478__auto__(state_31271);
if(cljs.core.keyword_identical_QMARK_(result__29481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29481__auto__;
}
break;
}
}catch (e31353){var ex__29482__auto__ = e31353;
var statearr_31354_33579 = state_31271;
(statearr_31354_33579[(2)] = ex__29482__auto__);


if(cljs.core.seq((state_31271[(4)]))){
var statearr_31355_33583 = state_31271;
(statearr_31355_33583[(1)] = cljs.core.first((state_31271[(4)])));

} else {
throw ex__29482__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33586 = state_31271;
state_31271 = G__33586;
continue;
} else {
return ret_value__29480__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__29479__auto__ = function(state_31271){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__29479__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__29479__auto____1.call(this,state_31271);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__29479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__29479__auto____0;
cljs$core$async$mix_$_state_machine__29479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__29479__auto____1;
return cljs$core$async$mix_$_state_machine__29479__auto__;
})()
})();
var state__29683__auto__ = (function (){var statearr_31358 = f__29682__auto__();
(statearr_31358[(6)] = c__29681__auto___33483);

return statearr_31358;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29683__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_33594 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_33594(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_33599 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_33599(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_33603 = (function() {
var G__33604 = null;
var G__33604__1 = (function (p){
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
var G__33604__2 = (function (p,v){
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
G__33604 = function(p,v){
switch(arguments.length){
case 1:
return G__33604__1.call(this,p);
case 2:
return G__33604__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__33604.cljs$core$IFn$_invoke$arity$1 = G__33604__1;
G__33604.cljs$core$IFn$_invoke$arity$2 = G__33604__2;
return G__33604;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__31386 = arguments.length;
switch (G__31386) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_33603(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_33603(p,v);
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
var G__31396 = arguments.length;
switch (G__31396) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__31394_SHARP_){
if(cljs.core.truth_((p1__31394_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__31394_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__31394_SHARP_.call(null,topic)))){
return p1__31394_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__31394_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31403 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31403 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta31404){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta31404 = meta31404;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31403.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31405,meta31404__$1){
var self__ = this;
var _31405__$1 = this;
return (new cljs.core.async.t_cljs$core$async31403(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta31404__$1));
}));

(cljs.core.async.t_cljs$core$async31403.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31405){
var self__ = this;
var _31405__$1 = this;
return self__.meta31404;
}));

(cljs.core.async.t_cljs$core$async31403.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31403.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async31403.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31403.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async31403.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async31403.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async31403.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async31403.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta31404","meta31404",-1477428575,null)], null);
}));

(cljs.core.async.t_cljs$core$async31403.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31403.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31403");

(cljs.core.async.t_cljs$core$async31403.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async31403");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31403.
 */
cljs.core.async.__GT_t_cljs$core$async31403 = (function cljs$core$async$__GT_t_cljs$core$async31403(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31404){
return (new cljs.core.async.t_cljs$core$async31403(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31404));
});

}

return (new cljs.core.async.t_cljs$core$async31403(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29681__auto___33656 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29682__auto__ = (function (){var switch__29478__auto__ = (function (state_31489){
var state_val_31490 = (state_31489[(1)]);
if((state_val_31490 === (7))){
var inst_31484 = (state_31489[(2)]);
var state_31489__$1 = state_31489;
var statearr_31496_33658 = state_31489__$1;
(statearr_31496_33658[(2)] = inst_31484);

(statearr_31496_33658[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31490 === (20))){
var state_31489__$1 = state_31489;
var statearr_31497_33659 = state_31489__$1;
(statearr_31497_33659[(2)] = null);

(statearr_31497_33659[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31490 === (1))){
var state_31489__$1 = state_31489;
var statearr_31498_33662 = state_31489__$1;
(statearr_31498_33662[(2)] = null);

(statearr_31498_33662[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31490 === (24))){
var inst_31467 = (state_31489[(7)]);
var inst_31476 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_31467);
var state_31489__$1 = state_31489;
var statearr_31499_33667 = state_31489__$1;
(statearr_31499_33667[(2)] = inst_31476);

(statearr_31499_33667[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31490 === (4))){
var inst_31417 = (state_31489[(8)]);
var inst_31417__$1 = (state_31489[(2)]);
var inst_31418 = (inst_31417__$1 == null);
var state_31489__$1 = (function (){var statearr_31502 = state_31489;
(statearr_31502[(8)] = inst_31417__$1);

return statearr_31502;
})();
if(cljs.core.truth_(inst_31418)){
var statearr_31503_33670 = state_31489__$1;
(statearr_31503_33670[(1)] = (5));

} else {
var statearr_31508_33671 = state_31489__$1;
(statearr_31508_33671[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31490 === (15))){
var inst_31460 = (state_31489[(2)]);
var state_31489__$1 = state_31489;
var statearr_31514_33673 = state_31489__$1;
(statearr_31514_33673[(2)] = inst_31460);

(statearr_31514_33673[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31490 === (21))){
var inst_31481 = (state_31489[(2)]);
var state_31489__$1 = (function (){var statearr_31518 = state_31489;
(statearr_31518[(9)] = inst_31481);

return statearr_31518;
})();
var statearr_31520_33674 = state_31489__$1;
(statearr_31520_33674[(2)] = null);

(statearr_31520_33674[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31490 === (13))){
var inst_31441 = (state_31489[(10)]);
var inst_31443 = cljs.core.chunked_seq_QMARK_(inst_31441);
var state_31489__$1 = state_31489;
if(inst_31443){
var statearr_31521_33677 = state_31489__$1;
(statearr_31521_33677[(1)] = (16));

} else {
var statearr_31522_33679 = state_31489__$1;
(statearr_31522_33679[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31490 === (22))){
var inst_31473 = (state_31489[(2)]);
var state_31489__$1 = state_31489;
if(cljs.core.truth_(inst_31473)){
var statearr_31524_33680 = state_31489__$1;
(statearr_31524_33680[(1)] = (23));

} else {
var statearr_31525_33681 = state_31489__$1;
(statearr_31525_33681[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31490 === (6))){
var inst_31469 = (state_31489[(11)]);
var inst_31417 = (state_31489[(8)]);
var inst_31467 = (state_31489[(7)]);
var inst_31467__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_31417) : topic_fn.call(null,inst_31417));
var inst_31468 = cljs.core.deref(mults);
var inst_31469__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31468,inst_31467__$1);
var state_31489__$1 = (function (){var statearr_31529 = state_31489;
(statearr_31529[(11)] = inst_31469__$1);

(statearr_31529[(7)] = inst_31467__$1);

return statearr_31529;
})();
if(cljs.core.truth_(inst_31469__$1)){
var statearr_31531_33683 = state_31489__$1;
(statearr_31531_33683[(1)] = (19));

} else {
var statearr_31532_33684 = state_31489__$1;
(statearr_31532_33684[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31490 === (25))){
var inst_31478 = (state_31489[(2)]);
var state_31489__$1 = state_31489;
var statearr_31533_33687 = state_31489__$1;
(statearr_31533_33687[(2)] = inst_31478);

(statearr_31533_33687[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31490 === (17))){
var inst_31441 = (state_31489[(10)]);
var inst_31450 = cljs.core.first(inst_31441);
var inst_31451 = cljs.core.async.muxch_STAR_(inst_31450);
var inst_31452 = cljs.core.async.close_BANG_(inst_31451);
var inst_31453 = cljs.core.next(inst_31441);
var inst_31427 = inst_31453;
var inst_31428 = null;
var inst_31429 = (0);
var inst_31430 = (0);
var state_31489__$1 = (function (){var statearr_31534 = state_31489;
(statearr_31534[(12)] = inst_31429);

(statearr_31534[(13)] = inst_31430);

(statearr_31534[(14)] = inst_31428);

(statearr_31534[(15)] = inst_31427);

(statearr_31534[(16)] = inst_31452);

return statearr_31534;
})();
var statearr_31535_33690 = state_31489__$1;
(statearr_31535_33690[(2)] = null);

(statearr_31535_33690[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31490 === (3))){
var inst_31486 = (state_31489[(2)]);
var state_31489__$1 = state_31489;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31489__$1,inst_31486);
} else {
if((state_val_31490 === (12))){
var inst_31462 = (state_31489[(2)]);
var state_31489__$1 = state_31489;
var statearr_31536_33691 = state_31489__$1;
(statearr_31536_33691[(2)] = inst_31462);

(statearr_31536_33691[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31490 === (2))){
var state_31489__$1 = state_31489;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31489__$1,(4),ch);
} else {
if((state_val_31490 === (23))){
var state_31489__$1 = state_31489;
var statearr_31537_33694 = state_31489__$1;
(statearr_31537_33694[(2)] = null);

(statearr_31537_33694[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31490 === (19))){
var inst_31469 = (state_31489[(11)]);
var inst_31417 = (state_31489[(8)]);
var inst_31471 = cljs.core.async.muxch_STAR_(inst_31469);
var state_31489__$1 = state_31489;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31489__$1,(22),inst_31471,inst_31417);
} else {
if((state_val_31490 === (11))){
var inst_31441 = (state_31489[(10)]);
var inst_31427 = (state_31489[(15)]);
var inst_31441__$1 = cljs.core.seq(inst_31427);
var state_31489__$1 = (function (){var statearr_31539 = state_31489;
(statearr_31539[(10)] = inst_31441__$1);

return statearr_31539;
})();
if(inst_31441__$1){
var statearr_31540_33697 = state_31489__$1;
(statearr_31540_33697[(1)] = (13));

} else {
var statearr_31541_33698 = state_31489__$1;
(statearr_31541_33698[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31490 === (9))){
var inst_31464 = (state_31489[(2)]);
var state_31489__$1 = state_31489;
var statearr_31542_33699 = state_31489__$1;
(statearr_31542_33699[(2)] = inst_31464);

(statearr_31542_33699[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31490 === (5))){
var inst_31424 = cljs.core.deref(mults);
var inst_31425 = cljs.core.vals(inst_31424);
var inst_31426 = cljs.core.seq(inst_31425);
var inst_31427 = inst_31426;
var inst_31428 = null;
var inst_31429 = (0);
var inst_31430 = (0);
var state_31489__$1 = (function (){var statearr_31543 = state_31489;
(statearr_31543[(12)] = inst_31429);

(statearr_31543[(13)] = inst_31430);

(statearr_31543[(14)] = inst_31428);

(statearr_31543[(15)] = inst_31427);

return statearr_31543;
})();
var statearr_31544_33703 = state_31489__$1;
(statearr_31544_33703[(2)] = null);

(statearr_31544_33703[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31490 === (14))){
var state_31489__$1 = state_31489;
var statearr_31548_33705 = state_31489__$1;
(statearr_31548_33705[(2)] = null);

(statearr_31548_33705[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31490 === (16))){
var inst_31441 = (state_31489[(10)]);
var inst_31445 = cljs.core.chunk_first(inst_31441);
var inst_31446 = cljs.core.chunk_rest(inst_31441);
var inst_31447 = cljs.core.count(inst_31445);
var inst_31427 = inst_31446;
var inst_31428 = inst_31445;
var inst_31429 = inst_31447;
var inst_31430 = (0);
var state_31489__$1 = (function (){var statearr_31549 = state_31489;
(statearr_31549[(12)] = inst_31429);

(statearr_31549[(13)] = inst_31430);

(statearr_31549[(14)] = inst_31428);

(statearr_31549[(15)] = inst_31427);

return statearr_31549;
})();
var statearr_31550_33710 = state_31489__$1;
(statearr_31550_33710[(2)] = null);

(statearr_31550_33710[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31490 === (10))){
var inst_31429 = (state_31489[(12)]);
var inst_31430 = (state_31489[(13)]);
var inst_31428 = (state_31489[(14)]);
var inst_31427 = (state_31489[(15)]);
var inst_31435 = cljs.core._nth(inst_31428,inst_31430);
var inst_31436 = cljs.core.async.muxch_STAR_(inst_31435);
var inst_31437 = cljs.core.async.close_BANG_(inst_31436);
var inst_31438 = (inst_31430 + (1));
var tmp31545 = inst_31429;
var tmp31546 = inst_31428;
var tmp31547 = inst_31427;
var inst_31427__$1 = tmp31547;
var inst_31428__$1 = tmp31546;
var inst_31429__$1 = tmp31545;
var inst_31430__$1 = inst_31438;
var state_31489__$1 = (function (){var statearr_31551 = state_31489;
(statearr_31551[(17)] = inst_31437);

(statearr_31551[(12)] = inst_31429__$1);

(statearr_31551[(13)] = inst_31430__$1);

(statearr_31551[(14)] = inst_31428__$1);

(statearr_31551[(15)] = inst_31427__$1);

return statearr_31551;
})();
var statearr_31556_33718 = state_31489__$1;
(statearr_31556_33718[(2)] = null);

(statearr_31556_33718[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31490 === (18))){
var inst_31456 = (state_31489[(2)]);
var state_31489__$1 = state_31489;
var statearr_31561_33719 = state_31489__$1;
(statearr_31561_33719[(2)] = inst_31456);

(statearr_31561_33719[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31490 === (8))){
var inst_31429 = (state_31489[(12)]);
var inst_31430 = (state_31489[(13)]);
var inst_31432 = (inst_31430 < inst_31429);
var inst_31433 = inst_31432;
var state_31489__$1 = state_31489;
if(cljs.core.truth_(inst_31433)){
var statearr_31567_33721 = state_31489__$1;
(statearr_31567_33721[(1)] = (10));

} else {
var statearr_31568_33722 = state_31489__$1;
(statearr_31568_33722[(1)] = (11));

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
var cljs$core$async$state_machine__29479__auto__ = null;
var cljs$core$async$state_machine__29479__auto____0 = (function (){
var statearr_31570 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31570[(0)] = cljs$core$async$state_machine__29479__auto__);

(statearr_31570[(1)] = (1));

return statearr_31570;
});
var cljs$core$async$state_machine__29479__auto____1 = (function (state_31489){
while(true){
var ret_value__29480__auto__ = (function (){try{while(true){
var result__29481__auto__ = switch__29478__auto__(state_31489);
if(cljs.core.keyword_identical_QMARK_(result__29481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29481__auto__;
}
break;
}
}catch (e31572){var ex__29482__auto__ = e31572;
var statearr_31573_33728 = state_31489;
(statearr_31573_33728[(2)] = ex__29482__auto__);


if(cljs.core.seq((state_31489[(4)]))){
var statearr_31574_33729 = state_31489;
(statearr_31574_33729[(1)] = cljs.core.first((state_31489[(4)])));

} else {
throw ex__29482__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33731 = state_31489;
state_31489 = G__33731;
continue;
} else {
return ret_value__29480__auto__;
}
break;
}
});
cljs$core$async$state_machine__29479__auto__ = function(state_31489){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29479__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29479__auto____1.call(this,state_31489);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29479__auto____0;
cljs$core$async$state_machine__29479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29479__auto____1;
return cljs$core$async$state_machine__29479__auto__;
})()
})();
var state__29683__auto__ = (function (){var statearr_31575 = f__29682__auto__();
(statearr_31575[(6)] = c__29681__auto___33656);

return statearr_31575;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29683__auto__);
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
var G__31577 = arguments.length;
switch (G__31577) {
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
var G__31585 = arguments.length;
switch (G__31585) {
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
var G__31592 = arguments.length;
switch (G__31592) {
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
var c__29681__auto___33757 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29682__auto__ = (function (){var switch__29478__auto__ = (function (state_31665){
var state_val_31667 = (state_31665[(1)]);
if((state_val_31667 === (7))){
var state_31665__$1 = state_31665;
var statearr_31672_33758 = state_31665__$1;
(statearr_31672_33758[(2)] = null);

(statearr_31672_33758[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31667 === (1))){
var state_31665__$1 = state_31665;
var statearr_31673_33765 = state_31665__$1;
(statearr_31673_33765[(2)] = null);

(statearr_31673_33765[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31667 === (4))){
var inst_31619 = (state_31665[(7)]);
var inst_31618 = (state_31665[(8)]);
var inst_31621 = (inst_31619 < inst_31618);
var state_31665__$1 = state_31665;
if(cljs.core.truth_(inst_31621)){
var statearr_31679_33770 = state_31665__$1;
(statearr_31679_33770[(1)] = (6));

} else {
var statearr_31683_33771 = state_31665__$1;
(statearr_31683_33771[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31667 === (15))){
var inst_31651 = (state_31665[(9)]);
var inst_31656 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_31651);
var state_31665__$1 = state_31665;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31665__$1,(17),out,inst_31656);
} else {
if((state_val_31667 === (13))){
var inst_31651 = (state_31665[(9)]);
var inst_31651__$1 = (state_31665[(2)]);
var inst_31652 = cljs.core.some(cljs.core.nil_QMARK_,inst_31651__$1);
var state_31665__$1 = (function (){var statearr_31687 = state_31665;
(statearr_31687[(9)] = inst_31651__$1);

return statearr_31687;
})();
if(cljs.core.truth_(inst_31652)){
var statearr_31690_33778 = state_31665__$1;
(statearr_31690_33778[(1)] = (14));

} else {
var statearr_31691_33779 = state_31665__$1;
(statearr_31691_33779[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31667 === (6))){
var state_31665__$1 = state_31665;
var statearr_31692_33781 = state_31665__$1;
(statearr_31692_33781[(2)] = null);

(statearr_31692_33781[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31667 === (17))){
var inst_31658 = (state_31665[(2)]);
var state_31665__$1 = (function (){var statearr_31697 = state_31665;
(statearr_31697[(10)] = inst_31658);

return statearr_31697;
})();
var statearr_31698_33785 = state_31665__$1;
(statearr_31698_33785[(2)] = null);

(statearr_31698_33785[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31667 === (3))){
var inst_31663 = (state_31665[(2)]);
var state_31665__$1 = state_31665;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31665__$1,inst_31663);
} else {
if((state_val_31667 === (12))){
var _ = (function (){var statearr_31699 = state_31665;
(statearr_31699[(4)] = cljs.core.rest((state_31665[(4)])));

return statearr_31699;
})();
var state_31665__$1 = state_31665;
var ex31696 = (state_31665__$1[(2)]);
var statearr_31700_33790 = state_31665__$1;
(statearr_31700_33790[(5)] = ex31696);


if((ex31696 instanceof Object)){
var statearr_31701_33793 = state_31665__$1;
(statearr_31701_33793[(1)] = (11));

(statearr_31701_33793[(5)] = null);

} else {
throw ex31696;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31667 === (2))){
var inst_31617 = cljs.core.reset_BANG_(dctr,cnt);
var inst_31618 = cnt;
var inst_31619 = (0);
var state_31665__$1 = (function (){var statearr_31703 = state_31665;
(statearr_31703[(7)] = inst_31619);

(statearr_31703[(8)] = inst_31618);

(statearr_31703[(11)] = inst_31617);

return statearr_31703;
})();
var statearr_31704_33795 = state_31665__$1;
(statearr_31704_33795[(2)] = null);

(statearr_31704_33795[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31667 === (11))){
var inst_31626 = (state_31665[(2)]);
var inst_31627 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_31665__$1 = (function (){var statearr_31705 = state_31665;
(statearr_31705[(12)] = inst_31626);

return statearr_31705;
})();
var statearr_31706_33800 = state_31665__$1;
(statearr_31706_33800[(2)] = inst_31627);

(statearr_31706_33800[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31667 === (9))){
var inst_31619 = (state_31665[(7)]);
var _ = (function (){var statearr_31708 = state_31665;
(statearr_31708[(4)] = cljs.core.cons((12),(state_31665[(4)])));

return statearr_31708;
})();
var inst_31633 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_31619) : chs__$1.call(null,inst_31619));
var inst_31635 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_31619) : done.call(null,inst_31619));
var inst_31636 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_31633,inst_31635);
var ___$1 = (function (){var statearr_31710 = state_31665;
(statearr_31710[(4)] = cljs.core.rest((state_31665[(4)])));

return statearr_31710;
})();
var state_31665__$1 = state_31665;
var statearr_31711_33806 = state_31665__$1;
(statearr_31711_33806[(2)] = inst_31636);

(statearr_31711_33806[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31667 === (5))){
var inst_31648 = (state_31665[(2)]);
var state_31665__$1 = (function (){var statearr_31712 = state_31665;
(statearr_31712[(13)] = inst_31648);

return statearr_31712;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31665__$1,(13),dchan);
} else {
if((state_val_31667 === (14))){
var inst_31654 = cljs.core.async.close_BANG_(out);
var state_31665__$1 = state_31665;
var statearr_31713_33810 = state_31665__$1;
(statearr_31713_33810[(2)] = inst_31654);

(statearr_31713_33810[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31667 === (16))){
var inst_31661 = (state_31665[(2)]);
var state_31665__$1 = state_31665;
var statearr_31714_33812 = state_31665__$1;
(statearr_31714_33812[(2)] = inst_31661);

(statearr_31714_33812[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31667 === (10))){
var inst_31619 = (state_31665[(7)]);
var inst_31640 = (state_31665[(2)]);
var inst_31642 = (inst_31619 + (1));
var inst_31619__$1 = inst_31642;
var state_31665__$1 = (function (){var statearr_31715 = state_31665;
(statearr_31715[(7)] = inst_31619__$1);

(statearr_31715[(14)] = inst_31640);

return statearr_31715;
})();
var statearr_31716_33813 = state_31665__$1;
(statearr_31716_33813[(2)] = null);

(statearr_31716_33813[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31667 === (8))){
var inst_31646 = (state_31665[(2)]);
var state_31665__$1 = state_31665;
var statearr_31717_33814 = state_31665__$1;
(statearr_31717_33814[(2)] = inst_31646);

(statearr_31717_33814[(1)] = (5));


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
var cljs$core$async$state_machine__29479__auto__ = null;
var cljs$core$async$state_machine__29479__auto____0 = (function (){
var statearr_31719 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31719[(0)] = cljs$core$async$state_machine__29479__auto__);

(statearr_31719[(1)] = (1));

return statearr_31719;
});
var cljs$core$async$state_machine__29479__auto____1 = (function (state_31665){
while(true){
var ret_value__29480__auto__ = (function (){try{while(true){
var result__29481__auto__ = switch__29478__auto__(state_31665);
if(cljs.core.keyword_identical_QMARK_(result__29481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29481__auto__;
}
break;
}
}catch (e31720){var ex__29482__auto__ = e31720;
var statearr_31721_33816 = state_31665;
(statearr_31721_33816[(2)] = ex__29482__auto__);


if(cljs.core.seq((state_31665[(4)]))){
var statearr_31722_33817 = state_31665;
(statearr_31722_33817[(1)] = cljs.core.first((state_31665[(4)])));

} else {
throw ex__29482__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33818 = state_31665;
state_31665 = G__33818;
continue;
} else {
return ret_value__29480__auto__;
}
break;
}
});
cljs$core$async$state_machine__29479__auto__ = function(state_31665){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29479__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29479__auto____1.call(this,state_31665);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29479__auto____0;
cljs$core$async$state_machine__29479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29479__auto____1;
return cljs$core$async$state_machine__29479__auto__;
})()
})();
var state__29683__auto__ = (function (){var statearr_31726 = f__29682__auto__();
(statearr_31726[(6)] = c__29681__auto___33757);

return statearr_31726;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29683__auto__);
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
var G__31732 = arguments.length;
switch (G__31732) {
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
var c__29681__auto___33820 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29682__auto__ = (function (){var switch__29478__auto__ = (function (state_31772){
var state_val_31773 = (state_31772[(1)]);
if((state_val_31773 === (7))){
var inst_31748 = (state_31772[(7)]);
var inst_31747 = (state_31772[(8)]);
var inst_31747__$1 = (state_31772[(2)]);
var inst_31748__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31747__$1,(0),null);
var inst_31750 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31747__$1,(1),null);
var inst_31752 = (inst_31748__$1 == null);
var state_31772__$1 = (function (){var statearr_31774 = state_31772;
(statearr_31774[(7)] = inst_31748__$1);

(statearr_31774[(9)] = inst_31750);

(statearr_31774[(8)] = inst_31747__$1);

return statearr_31774;
})();
if(cljs.core.truth_(inst_31752)){
var statearr_31775_33829 = state_31772__$1;
(statearr_31775_33829[(1)] = (8));

} else {
var statearr_31776_33830 = state_31772__$1;
(statearr_31776_33830[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31773 === (1))){
var inst_31733 = cljs.core.vec(chs);
var inst_31734 = inst_31733;
var state_31772__$1 = (function (){var statearr_31777 = state_31772;
(statearr_31777[(10)] = inst_31734);

return statearr_31777;
})();
var statearr_31779_33831 = state_31772__$1;
(statearr_31779_33831[(2)] = null);

(statearr_31779_33831[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31773 === (4))){
var inst_31734 = (state_31772[(10)]);
var state_31772__$1 = state_31772;
return cljs.core.async.ioc_alts_BANG_(state_31772__$1,(7),inst_31734);
} else {
if((state_val_31773 === (6))){
var inst_31766 = (state_31772[(2)]);
var state_31772__$1 = state_31772;
var statearr_31789_33835 = state_31772__$1;
(statearr_31789_33835[(2)] = inst_31766);

(statearr_31789_33835[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31773 === (3))){
var inst_31768 = (state_31772[(2)]);
var state_31772__$1 = state_31772;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31772__$1,inst_31768);
} else {
if((state_val_31773 === (2))){
var inst_31734 = (state_31772[(10)]);
var inst_31736 = cljs.core.count(inst_31734);
var inst_31737 = (inst_31736 > (0));
var state_31772__$1 = state_31772;
if(cljs.core.truth_(inst_31737)){
var statearr_31802_33837 = state_31772__$1;
(statearr_31802_33837[(1)] = (4));

} else {
var statearr_31803_33841 = state_31772__$1;
(statearr_31803_33841[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31773 === (11))){
var inst_31734 = (state_31772[(10)]);
var inst_31759 = (state_31772[(2)]);
var tmp31796 = inst_31734;
var inst_31734__$1 = tmp31796;
var state_31772__$1 = (function (){var statearr_31808 = state_31772;
(statearr_31808[(10)] = inst_31734__$1);

(statearr_31808[(11)] = inst_31759);

return statearr_31808;
})();
var statearr_31810_33844 = state_31772__$1;
(statearr_31810_33844[(2)] = null);

(statearr_31810_33844[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31773 === (9))){
var inst_31748 = (state_31772[(7)]);
var state_31772__$1 = state_31772;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31772__$1,(11),out,inst_31748);
} else {
if((state_val_31773 === (5))){
var inst_31764 = cljs.core.async.close_BANG_(out);
var state_31772__$1 = state_31772;
var statearr_31820_33845 = state_31772__$1;
(statearr_31820_33845[(2)] = inst_31764);

(statearr_31820_33845[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31773 === (10))){
var inst_31762 = (state_31772[(2)]);
var state_31772__$1 = state_31772;
var statearr_31822_33849 = state_31772__$1;
(statearr_31822_33849[(2)] = inst_31762);

(statearr_31822_33849[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31773 === (8))){
var inst_31734 = (state_31772[(10)]);
var inst_31748 = (state_31772[(7)]);
var inst_31750 = (state_31772[(9)]);
var inst_31747 = (state_31772[(8)]);
var inst_31754 = (function (){var cs = inst_31734;
var vec__31743 = inst_31747;
var v = inst_31748;
var c = inst_31750;
return (function (p1__31727_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__31727_SHARP_);
});
})();
var inst_31755 = cljs.core.filterv(inst_31754,inst_31734);
var inst_31734__$1 = inst_31755;
var state_31772__$1 = (function (){var statearr_31823 = state_31772;
(statearr_31823[(10)] = inst_31734__$1);

return statearr_31823;
})();
var statearr_31825_33854 = state_31772__$1;
(statearr_31825_33854[(2)] = null);

(statearr_31825_33854[(1)] = (2));


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
var cljs$core$async$state_machine__29479__auto__ = null;
var cljs$core$async$state_machine__29479__auto____0 = (function (){
var statearr_31829 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31829[(0)] = cljs$core$async$state_machine__29479__auto__);

(statearr_31829[(1)] = (1));

return statearr_31829;
});
var cljs$core$async$state_machine__29479__auto____1 = (function (state_31772){
while(true){
var ret_value__29480__auto__ = (function (){try{while(true){
var result__29481__auto__ = switch__29478__auto__(state_31772);
if(cljs.core.keyword_identical_QMARK_(result__29481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29481__auto__;
}
break;
}
}catch (e31832){var ex__29482__auto__ = e31832;
var statearr_31833_33856 = state_31772;
(statearr_31833_33856[(2)] = ex__29482__auto__);


if(cljs.core.seq((state_31772[(4)]))){
var statearr_31836_33857 = state_31772;
(statearr_31836_33857[(1)] = cljs.core.first((state_31772[(4)])));

} else {
throw ex__29482__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33858 = state_31772;
state_31772 = G__33858;
continue;
} else {
return ret_value__29480__auto__;
}
break;
}
});
cljs$core$async$state_machine__29479__auto__ = function(state_31772){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29479__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29479__auto____1.call(this,state_31772);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29479__auto____0;
cljs$core$async$state_machine__29479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29479__auto____1;
return cljs$core$async$state_machine__29479__auto__;
})()
})();
var state__29683__auto__ = (function (){var statearr_31840 = f__29682__auto__();
(statearr_31840[(6)] = c__29681__auto___33820);

return statearr_31840;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29683__auto__);
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
var G__31845 = arguments.length;
switch (G__31845) {
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
var c__29681__auto___33860 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29682__auto__ = (function (){var switch__29478__auto__ = (function (state_31885){
var state_val_31886 = (state_31885[(1)]);
if((state_val_31886 === (7))){
var inst_31867 = (state_31885[(7)]);
var inst_31867__$1 = (state_31885[(2)]);
var inst_31868 = (inst_31867__$1 == null);
var inst_31869 = cljs.core.not(inst_31868);
var state_31885__$1 = (function (){var statearr_31887 = state_31885;
(statearr_31887[(7)] = inst_31867__$1);

return statearr_31887;
})();
if(inst_31869){
var statearr_31889_33865 = state_31885__$1;
(statearr_31889_33865[(1)] = (8));

} else {
var statearr_31890_33866 = state_31885__$1;
(statearr_31890_33866[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31886 === (1))){
var inst_31854 = (0);
var state_31885__$1 = (function (){var statearr_31895 = state_31885;
(statearr_31895[(8)] = inst_31854);

return statearr_31895;
})();
var statearr_31896_33870 = state_31885__$1;
(statearr_31896_33870[(2)] = null);

(statearr_31896_33870[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31886 === (4))){
var state_31885__$1 = state_31885;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31885__$1,(7),ch);
} else {
if((state_val_31886 === (6))){
var inst_31880 = (state_31885[(2)]);
var state_31885__$1 = state_31885;
var statearr_31905_33872 = state_31885__$1;
(statearr_31905_33872[(2)] = inst_31880);

(statearr_31905_33872[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31886 === (3))){
var inst_31882 = (state_31885[(2)]);
var inst_31883 = cljs.core.async.close_BANG_(out);
var state_31885__$1 = (function (){var statearr_31906 = state_31885;
(statearr_31906[(9)] = inst_31882);

return statearr_31906;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31885__$1,inst_31883);
} else {
if((state_val_31886 === (2))){
var inst_31854 = (state_31885[(8)]);
var inst_31864 = (inst_31854 < n);
var state_31885__$1 = state_31885;
if(cljs.core.truth_(inst_31864)){
var statearr_31909_33874 = state_31885__$1;
(statearr_31909_33874[(1)] = (4));

} else {
var statearr_31910_33878 = state_31885__$1;
(statearr_31910_33878[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31886 === (11))){
var inst_31854 = (state_31885[(8)]);
var inst_31872 = (state_31885[(2)]);
var inst_31873 = (inst_31854 + (1));
var inst_31854__$1 = inst_31873;
var state_31885__$1 = (function (){var statearr_31916 = state_31885;
(statearr_31916[(10)] = inst_31872);

(statearr_31916[(8)] = inst_31854__$1);

return statearr_31916;
})();
var statearr_31921_33880 = state_31885__$1;
(statearr_31921_33880[(2)] = null);

(statearr_31921_33880[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31886 === (9))){
var state_31885__$1 = state_31885;
var statearr_31928_33881 = state_31885__$1;
(statearr_31928_33881[(2)] = null);

(statearr_31928_33881[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31886 === (5))){
var state_31885__$1 = state_31885;
var statearr_31935_33882 = state_31885__$1;
(statearr_31935_33882[(2)] = null);

(statearr_31935_33882[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31886 === (10))){
var inst_31877 = (state_31885[(2)]);
var state_31885__$1 = state_31885;
var statearr_31940_33886 = state_31885__$1;
(statearr_31940_33886[(2)] = inst_31877);

(statearr_31940_33886[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31886 === (8))){
var inst_31867 = (state_31885[(7)]);
var state_31885__$1 = state_31885;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31885__$1,(11),out,inst_31867);
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
var cljs$core$async$state_machine__29479__auto__ = null;
var cljs$core$async$state_machine__29479__auto____0 = (function (){
var statearr_31943 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31943[(0)] = cljs$core$async$state_machine__29479__auto__);

(statearr_31943[(1)] = (1));

return statearr_31943;
});
var cljs$core$async$state_machine__29479__auto____1 = (function (state_31885){
while(true){
var ret_value__29480__auto__ = (function (){try{while(true){
var result__29481__auto__ = switch__29478__auto__(state_31885);
if(cljs.core.keyword_identical_QMARK_(result__29481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29481__auto__;
}
break;
}
}catch (e31944){var ex__29482__auto__ = e31944;
var statearr_31945_33888 = state_31885;
(statearr_31945_33888[(2)] = ex__29482__auto__);


if(cljs.core.seq((state_31885[(4)]))){
var statearr_31947_33892 = state_31885;
(statearr_31947_33892[(1)] = cljs.core.first((state_31885[(4)])));

} else {
throw ex__29482__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33894 = state_31885;
state_31885 = G__33894;
continue;
} else {
return ret_value__29480__auto__;
}
break;
}
});
cljs$core$async$state_machine__29479__auto__ = function(state_31885){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29479__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29479__auto____1.call(this,state_31885);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29479__auto____0;
cljs$core$async$state_machine__29479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29479__auto____1;
return cljs$core$async$state_machine__29479__auto__;
})()
})();
var state__29683__auto__ = (function (){var statearr_31949 = f__29682__auto__();
(statearr_31949[(6)] = c__29681__auto___33860);

return statearr_31949;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29683__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31955 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31955 = (function (f,ch,meta31956){
this.f = f;
this.ch = ch;
this.meta31956 = meta31956;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31955.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31957,meta31956__$1){
var self__ = this;
var _31957__$1 = this;
return (new cljs.core.async.t_cljs$core$async31955(self__.f,self__.ch,meta31956__$1));
}));

(cljs.core.async.t_cljs$core$async31955.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31957){
var self__ = this;
var _31957__$1 = this;
return self__.meta31956;
}));

(cljs.core.async.t_cljs$core$async31955.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31955.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31955.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31955.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31955.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31972 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31972 = (function (f,ch,meta31956,_,fn1,meta31973){
this.f = f;
this.ch = ch;
this.meta31956 = meta31956;
this._ = _;
this.fn1 = fn1;
this.meta31973 = meta31973;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31972.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31974,meta31973__$1){
var self__ = this;
var _31974__$1 = this;
return (new cljs.core.async.t_cljs$core$async31972(self__.f,self__.ch,self__.meta31956,self__._,self__.fn1,meta31973__$1));
}));

(cljs.core.async.t_cljs$core$async31972.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31974){
var self__ = this;
var _31974__$1 = this;
return self__.meta31973;
}));

(cljs.core.async.t_cljs$core$async31972.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31972.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async31972.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31972.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__31954_SHARP_){
var G__31985 = (((p1__31954_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__31954_SHARP_) : self__.f.call(null,p1__31954_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__31985) : f1.call(null,G__31985));
});
}));

(cljs.core.async.t_cljs$core$async31972.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31956","meta31956",-2060337444,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async31955","cljs.core.async/t_cljs$core$async31955",1766100119,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta31973","meta31973",1993838794,null)], null);
}));

(cljs.core.async.t_cljs$core$async31972.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31972.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31972");

(cljs.core.async.t_cljs$core$async31972.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async31972");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31972.
 */
cljs.core.async.__GT_t_cljs$core$async31972 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31972(f__$1,ch__$1,meta31956__$1,___$2,fn1__$1,meta31973){
return (new cljs.core.async.t_cljs$core$async31972(f__$1,ch__$1,meta31956__$1,___$2,fn1__$1,meta31973));
});

}

return (new cljs.core.async.t_cljs$core$async31972(self__.f,self__.ch,self__.meta31956,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4210__auto__ = ret;
if(cljs.core.truth_(and__4210__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4210__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__31999 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__31999) : self__.f.call(null,G__31999));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async31955.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31955.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async31955.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31956","meta31956",-2060337444,null)], null);
}));

(cljs.core.async.t_cljs$core$async31955.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31955.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31955");

(cljs.core.async.t_cljs$core$async31955.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async31955");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31955.
 */
cljs.core.async.__GT_t_cljs$core$async31955 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31955(f__$1,ch__$1,meta31956){
return (new cljs.core.async.t_cljs$core$async31955(f__$1,ch__$1,meta31956));
});

}

return (new cljs.core.async.t_cljs$core$async31955(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32014 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32014 = (function (f,ch,meta32015){
this.f = f;
this.ch = ch;
this.meta32015 = meta32015;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32014.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32016,meta32015__$1){
var self__ = this;
var _32016__$1 = this;
return (new cljs.core.async.t_cljs$core$async32014(self__.f,self__.ch,meta32015__$1));
}));

(cljs.core.async.t_cljs$core$async32014.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32016){
var self__ = this;
var _32016__$1 = this;
return self__.meta32015;
}));

(cljs.core.async.t_cljs$core$async32014.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32014.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32014.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32014.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async32014.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32014.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async32014.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32015","meta32015",-1780385431,null)], null);
}));

(cljs.core.async.t_cljs$core$async32014.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32014.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32014");

(cljs.core.async.t_cljs$core$async32014.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async32014");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32014.
 */
cljs.core.async.__GT_t_cljs$core$async32014 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async32014(f__$1,ch__$1,meta32015){
return (new cljs.core.async.t_cljs$core$async32014(f__$1,ch__$1,meta32015));
});

}

return (new cljs.core.async.t_cljs$core$async32014(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32044 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32044 = (function (p,ch,meta32045){
this.p = p;
this.ch = ch;
this.meta32045 = meta32045;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32044.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32046,meta32045__$1){
var self__ = this;
var _32046__$1 = this;
return (new cljs.core.async.t_cljs$core$async32044(self__.p,self__.ch,meta32045__$1));
}));

(cljs.core.async.t_cljs$core$async32044.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32046){
var self__ = this;
var _32046__$1 = this;
return self__.meta32045;
}));

(cljs.core.async.t_cljs$core$async32044.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32044.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32044.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32044.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32044.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async32044.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32044.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async32044.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32045","meta32045",1478211385,null)], null);
}));

(cljs.core.async.t_cljs$core$async32044.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32044.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32044");

(cljs.core.async.t_cljs$core$async32044.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async32044");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32044.
 */
cljs.core.async.__GT_t_cljs$core$async32044 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async32044(p__$1,ch__$1,meta32045){
return (new cljs.core.async.t_cljs$core$async32044(p__$1,ch__$1,meta32045));
});

}

return (new cljs.core.async.t_cljs$core$async32044(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__32066 = arguments.length;
switch (G__32066) {
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
var c__29681__auto___33927 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29682__auto__ = (function (){var switch__29478__auto__ = (function (state_32103){
var state_val_32104 = (state_32103[(1)]);
if((state_val_32104 === (7))){
var inst_32095 = (state_32103[(2)]);
var state_32103__$1 = state_32103;
var statearr_32117_33932 = state_32103__$1;
(statearr_32117_33932[(2)] = inst_32095);

(statearr_32117_33932[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32104 === (1))){
var state_32103__$1 = state_32103;
var statearr_32118_33933 = state_32103__$1;
(statearr_32118_33933[(2)] = null);

(statearr_32118_33933[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32104 === (4))){
var inst_32073 = (state_32103[(7)]);
var inst_32073__$1 = (state_32103[(2)]);
var inst_32078 = (inst_32073__$1 == null);
var state_32103__$1 = (function (){var statearr_32119 = state_32103;
(statearr_32119[(7)] = inst_32073__$1);

return statearr_32119;
})();
if(cljs.core.truth_(inst_32078)){
var statearr_32120_33934 = state_32103__$1;
(statearr_32120_33934[(1)] = (5));

} else {
var statearr_32121_33935 = state_32103__$1;
(statearr_32121_33935[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32104 === (6))){
var inst_32073 = (state_32103[(7)]);
var inst_32086 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_32073) : p.call(null,inst_32073));
var state_32103__$1 = state_32103;
if(cljs.core.truth_(inst_32086)){
var statearr_32123_33936 = state_32103__$1;
(statearr_32123_33936[(1)] = (8));

} else {
var statearr_32127_33938 = state_32103__$1;
(statearr_32127_33938[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32104 === (3))){
var inst_32097 = (state_32103[(2)]);
var state_32103__$1 = state_32103;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32103__$1,inst_32097);
} else {
if((state_val_32104 === (2))){
var state_32103__$1 = state_32103;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32103__$1,(4),ch);
} else {
if((state_val_32104 === (11))){
var inst_32089 = (state_32103[(2)]);
var state_32103__$1 = state_32103;
var statearr_32129_33939 = state_32103__$1;
(statearr_32129_33939[(2)] = inst_32089);

(statearr_32129_33939[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32104 === (9))){
var state_32103__$1 = state_32103;
var statearr_32130_33940 = state_32103__$1;
(statearr_32130_33940[(2)] = null);

(statearr_32130_33940[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32104 === (5))){
var inst_32084 = cljs.core.async.close_BANG_(out);
var state_32103__$1 = state_32103;
var statearr_32132_33941 = state_32103__$1;
(statearr_32132_33941[(2)] = inst_32084);

(statearr_32132_33941[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32104 === (10))){
var inst_32092 = (state_32103[(2)]);
var state_32103__$1 = (function (){var statearr_32133 = state_32103;
(statearr_32133[(8)] = inst_32092);

return statearr_32133;
})();
var statearr_32134_33942 = state_32103__$1;
(statearr_32134_33942[(2)] = null);

(statearr_32134_33942[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32104 === (8))){
var inst_32073 = (state_32103[(7)]);
var state_32103__$1 = state_32103;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32103__$1,(11),out,inst_32073);
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
var cljs$core$async$state_machine__29479__auto__ = null;
var cljs$core$async$state_machine__29479__auto____0 = (function (){
var statearr_32135 = [null,null,null,null,null,null,null,null,null];
(statearr_32135[(0)] = cljs$core$async$state_machine__29479__auto__);

(statearr_32135[(1)] = (1));

return statearr_32135;
});
var cljs$core$async$state_machine__29479__auto____1 = (function (state_32103){
while(true){
var ret_value__29480__auto__ = (function (){try{while(true){
var result__29481__auto__ = switch__29478__auto__(state_32103);
if(cljs.core.keyword_identical_QMARK_(result__29481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29481__auto__;
}
break;
}
}catch (e32136){var ex__29482__auto__ = e32136;
var statearr_32137_33943 = state_32103;
(statearr_32137_33943[(2)] = ex__29482__auto__);


if(cljs.core.seq((state_32103[(4)]))){
var statearr_32139_33944 = state_32103;
(statearr_32139_33944[(1)] = cljs.core.first((state_32103[(4)])));

} else {
throw ex__29482__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33945 = state_32103;
state_32103 = G__33945;
continue;
} else {
return ret_value__29480__auto__;
}
break;
}
});
cljs$core$async$state_machine__29479__auto__ = function(state_32103){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29479__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29479__auto____1.call(this,state_32103);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29479__auto____0;
cljs$core$async$state_machine__29479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29479__auto____1;
return cljs$core$async$state_machine__29479__auto__;
})()
})();
var state__29683__auto__ = (function (){var statearr_32140 = f__29682__auto__();
(statearr_32140[(6)] = c__29681__auto___33927);

return statearr_32140;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29683__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__32142 = arguments.length;
switch (G__32142) {
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
var c__29681__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29682__auto__ = (function (){var switch__29478__auto__ = (function (state_32228){
var state_val_32229 = (state_32228[(1)]);
if((state_val_32229 === (7))){
var inst_32223 = (state_32228[(2)]);
var state_32228__$1 = state_32228;
var statearr_32231_33952 = state_32228__$1;
(statearr_32231_33952[(2)] = inst_32223);

(statearr_32231_33952[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32229 === (20))){
var inst_32193 = (state_32228[(7)]);
var inst_32204 = (state_32228[(2)]);
var inst_32205 = cljs.core.next(inst_32193);
var inst_32167 = inst_32205;
var inst_32168 = null;
var inst_32169 = (0);
var inst_32170 = (0);
var state_32228__$1 = (function (){var statearr_32234 = state_32228;
(statearr_32234[(8)] = inst_32204);

(statearr_32234[(9)] = inst_32170);

(statearr_32234[(10)] = inst_32169);

(statearr_32234[(11)] = inst_32167);

(statearr_32234[(12)] = inst_32168);

return statearr_32234;
})();
var statearr_32235_33960 = state_32228__$1;
(statearr_32235_33960[(2)] = null);

(statearr_32235_33960[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32229 === (1))){
var state_32228__$1 = state_32228;
var statearr_32236_33961 = state_32228__$1;
(statearr_32236_33961[(2)] = null);

(statearr_32236_33961[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32229 === (4))){
var inst_32152 = (state_32228[(13)]);
var inst_32152__$1 = (state_32228[(2)]);
var inst_32153 = (inst_32152__$1 == null);
var state_32228__$1 = (function (){var statearr_32237 = state_32228;
(statearr_32237[(13)] = inst_32152__$1);

return statearr_32237;
})();
if(cljs.core.truth_(inst_32153)){
var statearr_32238_33962 = state_32228__$1;
(statearr_32238_33962[(1)] = (5));

} else {
var statearr_32239_33963 = state_32228__$1;
(statearr_32239_33963[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32229 === (15))){
var state_32228__$1 = state_32228;
var statearr_32243_33964 = state_32228__$1;
(statearr_32243_33964[(2)] = null);

(statearr_32243_33964[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32229 === (21))){
var state_32228__$1 = state_32228;
var statearr_32246_33965 = state_32228__$1;
(statearr_32246_33965[(2)] = null);

(statearr_32246_33965[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32229 === (13))){
var inst_32170 = (state_32228[(9)]);
var inst_32169 = (state_32228[(10)]);
var inst_32167 = (state_32228[(11)]);
var inst_32168 = (state_32228[(12)]);
var inst_32181 = (state_32228[(2)]);
var inst_32186 = (inst_32170 + (1));
var tmp32240 = inst_32169;
var tmp32241 = inst_32167;
var tmp32242 = inst_32168;
var inst_32167__$1 = tmp32241;
var inst_32168__$1 = tmp32242;
var inst_32169__$1 = tmp32240;
var inst_32170__$1 = inst_32186;
var state_32228__$1 = (function (){var statearr_32247 = state_32228;
(statearr_32247[(14)] = inst_32181);

(statearr_32247[(9)] = inst_32170__$1);

(statearr_32247[(10)] = inst_32169__$1);

(statearr_32247[(11)] = inst_32167__$1);

(statearr_32247[(12)] = inst_32168__$1);

return statearr_32247;
})();
var statearr_32248_33969 = state_32228__$1;
(statearr_32248_33969[(2)] = null);

(statearr_32248_33969[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32229 === (22))){
var state_32228__$1 = state_32228;
var statearr_32249_33970 = state_32228__$1;
(statearr_32249_33970[(2)] = null);

(statearr_32249_33970[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32229 === (6))){
var inst_32152 = (state_32228[(13)]);
var inst_32165 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32152) : f.call(null,inst_32152));
var inst_32166 = cljs.core.seq(inst_32165);
var inst_32167 = inst_32166;
var inst_32168 = null;
var inst_32169 = (0);
var inst_32170 = (0);
var state_32228__$1 = (function (){var statearr_32250 = state_32228;
(statearr_32250[(9)] = inst_32170);

(statearr_32250[(10)] = inst_32169);

(statearr_32250[(11)] = inst_32167);

(statearr_32250[(12)] = inst_32168);

return statearr_32250;
})();
var statearr_32251_33974 = state_32228__$1;
(statearr_32251_33974[(2)] = null);

(statearr_32251_33974[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32229 === (17))){
var inst_32193 = (state_32228[(7)]);
var inst_32197 = cljs.core.chunk_first(inst_32193);
var inst_32198 = cljs.core.chunk_rest(inst_32193);
var inst_32199 = cljs.core.count(inst_32197);
var inst_32167 = inst_32198;
var inst_32168 = inst_32197;
var inst_32169 = inst_32199;
var inst_32170 = (0);
var state_32228__$1 = (function (){var statearr_32253 = state_32228;
(statearr_32253[(9)] = inst_32170);

(statearr_32253[(10)] = inst_32169);

(statearr_32253[(11)] = inst_32167);

(statearr_32253[(12)] = inst_32168);

return statearr_32253;
})();
var statearr_32260_33975 = state_32228__$1;
(statearr_32260_33975[(2)] = null);

(statearr_32260_33975[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32229 === (3))){
var inst_32225 = (state_32228[(2)]);
var state_32228__$1 = state_32228;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32228__$1,inst_32225);
} else {
if((state_val_32229 === (12))){
var inst_32213 = (state_32228[(2)]);
var state_32228__$1 = state_32228;
var statearr_32261_33976 = state_32228__$1;
(statearr_32261_33976[(2)] = inst_32213);

(statearr_32261_33976[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32229 === (2))){
var state_32228__$1 = state_32228;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32228__$1,(4),in$);
} else {
if((state_val_32229 === (23))){
var inst_32221 = (state_32228[(2)]);
var state_32228__$1 = state_32228;
var statearr_32262_33980 = state_32228__$1;
(statearr_32262_33980[(2)] = inst_32221);

(statearr_32262_33980[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32229 === (19))){
var inst_32208 = (state_32228[(2)]);
var state_32228__$1 = state_32228;
var statearr_32263_33981 = state_32228__$1;
(statearr_32263_33981[(2)] = inst_32208);

(statearr_32263_33981[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32229 === (11))){
var inst_32193 = (state_32228[(7)]);
var inst_32167 = (state_32228[(11)]);
var inst_32193__$1 = cljs.core.seq(inst_32167);
var state_32228__$1 = (function (){var statearr_32265 = state_32228;
(statearr_32265[(7)] = inst_32193__$1);

return statearr_32265;
})();
if(inst_32193__$1){
var statearr_32266_33982 = state_32228__$1;
(statearr_32266_33982[(1)] = (14));

} else {
var statearr_32268_33983 = state_32228__$1;
(statearr_32268_33983[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32229 === (9))){
var inst_32215 = (state_32228[(2)]);
var inst_32216 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_32228__$1 = (function (){var statearr_32269 = state_32228;
(statearr_32269[(15)] = inst_32215);

return statearr_32269;
})();
if(cljs.core.truth_(inst_32216)){
var statearr_32270_33985 = state_32228__$1;
(statearr_32270_33985[(1)] = (21));

} else {
var statearr_32271_33986 = state_32228__$1;
(statearr_32271_33986[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32229 === (5))){
var inst_32159 = cljs.core.async.close_BANG_(out);
var state_32228__$1 = state_32228;
var statearr_32272_33987 = state_32228__$1;
(statearr_32272_33987[(2)] = inst_32159);

(statearr_32272_33987[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32229 === (14))){
var inst_32193 = (state_32228[(7)]);
var inst_32195 = cljs.core.chunked_seq_QMARK_(inst_32193);
var state_32228__$1 = state_32228;
if(inst_32195){
var statearr_32273_33988 = state_32228__$1;
(statearr_32273_33988[(1)] = (17));

} else {
var statearr_32274_33989 = state_32228__$1;
(statearr_32274_33989[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32229 === (16))){
var inst_32211 = (state_32228[(2)]);
var state_32228__$1 = state_32228;
var statearr_32275_33990 = state_32228__$1;
(statearr_32275_33990[(2)] = inst_32211);

(statearr_32275_33990[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32229 === (10))){
var inst_32170 = (state_32228[(9)]);
var inst_32168 = (state_32228[(12)]);
var inst_32179 = cljs.core._nth(inst_32168,inst_32170);
var state_32228__$1 = state_32228;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32228__$1,(13),out,inst_32179);
} else {
if((state_val_32229 === (18))){
var inst_32193 = (state_32228[(7)]);
var inst_32202 = cljs.core.first(inst_32193);
var state_32228__$1 = state_32228;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32228__$1,(20),out,inst_32202);
} else {
if((state_val_32229 === (8))){
var inst_32170 = (state_32228[(9)]);
var inst_32169 = (state_32228[(10)]);
var inst_32176 = (inst_32170 < inst_32169);
var inst_32177 = inst_32176;
var state_32228__$1 = state_32228;
if(cljs.core.truth_(inst_32177)){
var statearr_32286_34000 = state_32228__$1;
(statearr_32286_34000[(1)] = (10));

} else {
var statearr_32287_34001 = state_32228__$1;
(statearr_32287_34001[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__29479__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__29479__auto____0 = (function (){
var statearr_32288 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32288[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__29479__auto__);

(statearr_32288[(1)] = (1));

return statearr_32288;
});
var cljs$core$async$mapcat_STAR__$_state_machine__29479__auto____1 = (function (state_32228){
while(true){
var ret_value__29480__auto__ = (function (){try{while(true){
var result__29481__auto__ = switch__29478__auto__(state_32228);
if(cljs.core.keyword_identical_QMARK_(result__29481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29481__auto__;
}
break;
}
}catch (e32289){var ex__29482__auto__ = e32289;
var statearr_32290_34010 = state_32228;
(statearr_32290_34010[(2)] = ex__29482__auto__);


if(cljs.core.seq((state_32228[(4)]))){
var statearr_32291_34011 = state_32228;
(statearr_32291_34011[(1)] = cljs.core.first((state_32228[(4)])));

} else {
throw ex__29482__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34012 = state_32228;
state_32228 = G__34012;
continue;
} else {
return ret_value__29480__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__29479__auto__ = function(state_32228){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__29479__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__29479__auto____1.call(this,state_32228);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__29479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__29479__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__29479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__29479__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__29479__auto__;
})()
})();
var state__29683__auto__ = (function (){var statearr_32297 = f__29682__auto__();
(statearr_32297[(6)] = c__29681__auto__);

return statearr_32297;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29683__auto__);
}));

return c__29681__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__32303 = arguments.length;
switch (G__32303) {
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
var G__32311 = arguments.length;
switch (G__32311) {
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
var G__32327 = arguments.length;
switch (G__32327) {
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
var c__29681__auto___34018 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29682__auto__ = (function (){var switch__29478__auto__ = (function (state_32360){
var state_val_32361 = (state_32360[(1)]);
if((state_val_32361 === (7))){
var inst_32355 = (state_32360[(2)]);
var state_32360__$1 = state_32360;
var statearr_32362_34019 = state_32360__$1;
(statearr_32362_34019[(2)] = inst_32355);

(statearr_32362_34019[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32361 === (1))){
var inst_32334 = null;
var state_32360__$1 = (function (){var statearr_32363 = state_32360;
(statearr_32363[(7)] = inst_32334);

return statearr_32363;
})();
var statearr_32365_34020 = state_32360__$1;
(statearr_32365_34020[(2)] = null);

(statearr_32365_34020[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32361 === (4))){
var inst_32339 = (state_32360[(8)]);
var inst_32339__$1 = (state_32360[(2)]);
var inst_32340 = (inst_32339__$1 == null);
var inst_32341 = cljs.core.not(inst_32340);
var state_32360__$1 = (function (){var statearr_32368 = state_32360;
(statearr_32368[(8)] = inst_32339__$1);

return statearr_32368;
})();
if(inst_32341){
var statearr_32369_34027 = state_32360__$1;
(statearr_32369_34027[(1)] = (5));

} else {
var statearr_32372_34028 = state_32360__$1;
(statearr_32372_34028[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32361 === (6))){
var state_32360__$1 = state_32360;
var statearr_32373_34030 = state_32360__$1;
(statearr_32373_34030[(2)] = null);

(statearr_32373_34030[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32361 === (3))){
var inst_32357 = (state_32360[(2)]);
var inst_32358 = cljs.core.async.close_BANG_(out);
var state_32360__$1 = (function (){var statearr_32375 = state_32360;
(statearr_32375[(9)] = inst_32357);

return statearr_32375;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32360__$1,inst_32358);
} else {
if((state_val_32361 === (2))){
var state_32360__$1 = state_32360;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32360__$1,(4),ch);
} else {
if((state_val_32361 === (11))){
var inst_32339 = (state_32360[(8)]);
var inst_32349 = (state_32360[(2)]);
var inst_32334 = inst_32339;
var state_32360__$1 = (function (){var statearr_32377 = state_32360;
(statearr_32377[(10)] = inst_32349);

(statearr_32377[(7)] = inst_32334);

return statearr_32377;
})();
var statearr_32380_34032 = state_32360__$1;
(statearr_32380_34032[(2)] = null);

(statearr_32380_34032[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32361 === (9))){
var inst_32339 = (state_32360[(8)]);
var state_32360__$1 = state_32360;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32360__$1,(11),out,inst_32339);
} else {
if((state_val_32361 === (5))){
var inst_32334 = (state_32360[(7)]);
var inst_32339 = (state_32360[(8)]);
var inst_32344 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32339,inst_32334);
var state_32360__$1 = state_32360;
if(inst_32344){
var statearr_32386_34033 = state_32360__$1;
(statearr_32386_34033[(1)] = (8));

} else {
var statearr_32387_34034 = state_32360__$1;
(statearr_32387_34034[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32361 === (10))){
var inst_32352 = (state_32360[(2)]);
var state_32360__$1 = state_32360;
var statearr_32390_34035 = state_32360__$1;
(statearr_32390_34035[(2)] = inst_32352);

(statearr_32390_34035[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32361 === (8))){
var inst_32334 = (state_32360[(7)]);
var tmp32385 = inst_32334;
var inst_32334__$1 = tmp32385;
var state_32360__$1 = (function (){var statearr_32393 = state_32360;
(statearr_32393[(7)] = inst_32334__$1);

return statearr_32393;
})();
var statearr_32396_34036 = state_32360__$1;
(statearr_32396_34036[(2)] = null);

(statearr_32396_34036[(1)] = (2));


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
var cljs$core$async$state_machine__29479__auto__ = null;
var cljs$core$async$state_machine__29479__auto____0 = (function (){
var statearr_32399 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32399[(0)] = cljs$core$async$state_machine__29479__auto__);

(statearr_32399[(1)] = (1));

return statearr_32399;
});
var cljs$core$async$state_machine__29479__auto____1 = (function (state_32360){
while(true){
var ret_value__29480__auto__ = (function (){try{while(true){
var result__29481__auto__ = switch__29478__auto__(state_32360);
if(cljs.core.keyword_identical_QMARK_(result__29481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29481__auto__;
}
break;
}
}catch (e32400){var ex__29482__auto__ = e32400;
var statearr_32401_34037 = state_32360;
(statearr_32401_34037[(2)] = ex__29482__auto__);


if(cljs.core.seq((state_32360[(4)]))){
var statearr_32402_34038 = state_32360;
(statearr_32402_34038[(1)] = cljs.core.first((state_32360[(4)])));

} else {
throw ex__29482__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34045 = state_32360;
state_32360 = G__34045;
continue;
} else {
return ret_value__29480__auto__;
}
break;
}
});
cljs$core$async$state_machine__29479__auto__ = function(state_32360){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29479__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29479__auto____1.call(this,state_32360);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29479__auto____0;
cljs$core$async$state_machine__29479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29479__auto____1;
return cljs$core$async$state_machine__29479__auto__;
})()
})();
var state__29683__auto__ = (function (){var statearr_32403 = f__29682__auto__();
(statearr_32403[(6)] = c__29681__auto___34018);

return statearr_32403;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29683__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__32406 = arguments.length;
switch (G__32406) {
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
var c__29681__auto___34047 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29682__auto__ = (function (){var switch__29478__auto__ = (function (state_32459){
var state_val_32460 = (state_32459[(1)]);
if((state_val_32460 === (7))){
var inst_32453 = (state_32459[(2)]);
var state_32459__$1 = state_32459;
var statearr_32493_34048 = state_32459__$1;
(statearr_32493_34048[(2)] = inst_32453);

(statearr_32493_34048[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32460 === (1))){
var inst_32407 = (new Array(n));
var inst_32411 = inst_32407;
var inst_32412 = (0);
var state_32459__$1 = (function (){var statearr_32494 = state_32459;
(statearr_32494[(7)] = inst_32411);

(statearr_32494[(8)] = inst_32412);

return statearr_32494;
})();
var statearr_32499_34049 = state_32459__$1;
(statearr_32499_34049[(2)] = null);

(statearr_32499_34049[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32460 === (4))){
var inst_32415 = (state_32459[(9)]);
var inst_32415__$1 = (state_32459[(2)]);
var inst_32416 = (inst_32415__$1 == null);
var inst_32417 = cljs.core.not(inst_32416);
var state_32459__$1 = (function (){var statearr_32504 = state_32459;
(statearr_32504[(9)] = inst_32415__$1);

return statearr_32504;
})();
if(inst_32417){
var statearr_32505_34052 = state_32459__$1;
(statearr_32505_34052[(1)] = (5));

} else {
var statearr_32506_34053 = state_32459__$1;
(statearr_32506_34053[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32460 === (15))){
var inst_32444 = (state_32459[(2)]);
var state_32459__$1 = state_32459;
var statearr_32511_34054 = state_32459__$1;
(statearr_32511_34054[(2)] = inst_32444);

(statearr_32511_34054[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32460 === (13))){
var state_32459__$1 = state_32459;
var statearr_32512_34055 = state_32459__$1;
(statearr_32512_34055[(2)] = null);

(statearr_32512_34055[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32460 === (6))){
var inst_32412 = (state_32459[(8)]);
var inst_32440 = (inst_32412 > (0));
var state_32459__$1 = state_32459;
if(cljs.core.truth_(inst_32440)){
var statearr_32514_34056 = state_32459__$1;
(statearr_32514_34056[(1)] = (12));

} else {
var statearr_32520_34057 = state_32459__$1;
(statearr_32520_34057[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32460 === (3))){
var inst_32455 = (state_32459[(2)]);
var state_32459__$1 = state_32459;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32459__$1,inst_32455);
} else {
if((state_val_32460 === (12))){
var inst_32411 = (state_32459[(7)]);
var inst_32442 = cljs.core.vec(inst_32411);
var state_32459__$1 = state_32459;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32459__$1,(15),out,inst_32442);
} else {
if((state_val_32460 === (2))){
var state_32459__$1 = state_32459;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32459__$1,(4),ch);
} else {
if((state_val_32460 === (11))){
var inst_32434 = (state_32459[(2)]);
var inst_32435 = (new Array(n));
var inst_32411 = inst_32435;
var inst_32412 = (0);
var state_32459__$1 = (function (){var statearr_32524 = state_32459;
(statearr_32524[(7)] = inst_32411);

(statearr_32524[(10)] = inst_32434);

(statearr_32524[(8)] = inst_32412);

return statearr_32524;
})();
var statearr_32525_34068 = state_32459__$1;
(statearr_32525_34068[(2)] = null);

(statearr_32525_34068[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32460 === (9))){
var inst_32411 = (state_32459[(7)]);
var inst_32432 = cljs.core.vec(inst_32411);
var state_32459__$1 = state_32459;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32459__$1,(11),out,inst_32432);
} else {
if((state_val_32460 === (5))){
var inst_32411 = (state_32459[(7)]);
var inst_32412 = (state_32459[(8)]);
var inst_32415 = (state_32459[(9)]);
var inst_32425 = (state_32459[(11)]);
var inst_32419 = (inst_32411[inst_32412] = inst_32415);
var inst_32425__$1 = (inst_32412 + (1));
var inst_32428 = (inst_32425__$1 < n);
var state_32459__$1 = (function (){var statearr_32528 = state_32459;
(statearr_32528[(11)] = inst_32425__$1);

(statearr_32528[(12)] = inst_32419);

return statearr_32528;
})();
if(cljs.core.truth_(inst_32428)){
var statearr_32529_34070 = state_32459__$1;
(statearr_32529_34070[(1)] = (8));

} else {
var statearr_32530_34071 = state_32459__$1;
(statearr_32530_34071[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32460 === (14))){
var inst_32447 = (state_32459[(2)]);
var inst_32451 = cljs.core.async.close_BANG_(out);
var state_32459__$1 = (function (){var statearr_32532 = state_32459;
(statearr_32532[(13)] = inst_32447);

return statearr_32532;
})();
var statearr_32533_34072 = state_32459__$1;
(statearr_32533_34072[(2)] = inst_32451);

(statearr_32533_34072[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32460 === (10))){
var inst_32438 = (state_32459[(2)]);
var state_32459__$1 = state_32459;
var statearr_32534_34074 = state_32459__$1;
(statearr_32534_34074[(2)] = inst_32438);

(statearr_32534_34074[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32460 === (8))){
var inst_32411 = (state_32459[(7)]);
var inst_32425 = (state_32459[(11)]);
var tmp32531 = inst_32411;
var inst_32411__$1 = tmp32531;
var inst_32412 = inst_32425;
var state_32459__$1 = (function (){var statearr_32535 = state_32459;
(statearr_32535[(7)] = inst_32411__$1);

(statearr_32535[(8)] = inst_32412);

return statearr_32535;
})();
var statearr_32536_34075 = state_32459__$1;
(statearr_32536_34075[(2)] = null);

(statearr_32536_34075[(1)] = (2));


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
var cljs$core$async$state_machine__29479__auto__ = null;
var cljs$core$async$state_machine__29479__auto____0 = (function (){
var statearr_32539 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32539[(0)] = cljs$core$async$state_machine__29479__auto__);

(statearr_32539[(1)] = (1));

return statearr_32539;
});
var cljs$core$async$state_machine__29479__auto____1 = (function (state_32459){
while(true){
var ret_value__29480__auto__ = (function (){try{while(true){
var result__29481__auto__ = switch__29478__auto__(state_32459);
if(cljs.core.keyword_identical_QMARK_(result__29481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29481__auto__;
}
break;
}
}catch (e32540){var ex__29482__auto__ = e32540;
var statearr_32541_34077 = state_32459;
(statearr_32541_34077[(2)] = ex__29482__auto__);


if(cljs.core.seq((state_32459[(4)]))){
var statearr_32542_34078 = state_32459;
(statearr_32542_34078[(1)] = cljs.core.first((state_32459[(4)])));

} else {
throw ex__29482__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34079 = state_32459;
state_32459 = G__34079;
continue;
} else {
return ret_value__29480__auto__;
}
break;
}
});
cljs$core$async$state_machine__29479__auto__ = function(state_32459){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29479__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29479__auto____1.call(this,state_32459);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29479__auto____0;
cljs$core$async$state_machine__29479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29479__auto____1;
return cljs$core$async$state_machine__29479__auto__;
})()
})();
var state__29683__auto__ = (function (){var statearr_32543 = f__29682__auto__();
(statearr_32543[(6)] = c__29681__auto___34047);

return statearr_32543;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29683__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__32545 = arguments.length;
switch (G__32545) {
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
var c__29681__auto___34083 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29682__auto__ = (function (){var switch__29478__auto__ = (function (state_32608){
var state_val_32609 = (state_32608[(1)]);
if((state_val_32609 === (7))){
var inst_32604 = (state_32608[(2)]);
var state_32608__$1 = state_32608;
var statearr_32615_34084 = state_32608__$1;
(statearr_32615_34084[(2)] = inst_32604);

(statearr_32615_34084[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32609 === (1))){
var inst_32558 = [];
var inst_32563 = inst_32558;
var inst_32564 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_32608__$1 = (function (){var statearr_32622 = state_32608;
(statearr_32622[(7)] = inst_32563);

(statearr_32622[(8)] = inst_32564);

return statearr_32622;
})();
var statearr_32623_34085 = state_32608__$1;
(statearr_32623_34085[(2)] = null);

(statearr_32623_34085[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32609 === (4))){
var inst_32567 = (state_32608[(9)]);
var inst_32567__$1 = (state_32608[(2)]);
var inst_32568 = (inst_32567__$1 == null);
var inst_32569 = cljs.core.not(inst_32568);
var state_32608__$1 = (function (){var statearr_32627 = state_32608;
(statearr_32627[(9)] = inst_32567__$1);

return statearr_32627;
})();
if(inst_32569){
var statearr_32630_34086 = state_32608__$1;
(statearr_32630_34086[(1)] = (5));

} else {
var statearr_32631_34087 = state_32608__$1;
(statearr_32631_34087[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32609 === (15))){
var inst_32563 = (state_32608[(7)]);
var inst_32596 = cljs.core.vec(inst_32563);
var state_32608__$1 = state_32608;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32608__$1,(18),out,inst_32596);
} else {
if((state_val_32609 === (13))){
var inst_32589 = (state_32608[(2)]);
var state_32608__$1 = state_32608;
var statearr_32638_34091 = state_32608__$1;
(statearr_32638_34091[(2)] = inst_32589);

(statearr_32638_34091[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32609 === (6))){
var inst_32563 = (state_32608[(7)]);
var inst_32593 = inst_32563.length;
var inst_32594 = (inst_32593 > (0));
var state_32608__$1 = state_32608;
if(cljs.core.truth_(inst_32594)){
var statearr_32642_34092 = state_32608__$1;
(statearr_32642_34092[(1)] = (15));

} else {
var statearr_32643_34095 = state_32608__$1;
(statearr_32643_34095[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32609 === (17))){
var inst_32601 = (state_32608[(2)]);
var inst_32602 = cljs.core.async.close_BANG_(out);
var state_32608__$1 = (function (){var statearr_32646 = state_32608;
(statearr_32646[(10)] = inst_32601);

return statearr_32646;
})();
var statearr_32648_34096 = state_32608__$1;
(statearr_32648_34096[(2)] = inst_32602);

(statearr_32648_34096[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32609 === (3))){
var inst_32606 = (state_32608[(2)]);
var state_32608__$1 = state_32608;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32608__$1,inst_32606);
} else {
if((state_val_32609 === (12))){
var inst_32563 = (state_32608[(7)]);
var inst_32582 = cljs.core.vec(inst_32563);
var state_32608__$1 = state_32608;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32608__$1,(14),out,inst_32582);
} else {
if((state_val_32609 === (2))){
var state_32608__$1 = state_32608;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32608__$1,(4),ch);
} else {
if((state_val_32609 === (11))){
var inst_32563 = (state_32608[(7)]);
var inst_32571 = (state_32608[(11)]);
var inst_32567 = (state_32608[(9)]);
var inst_32579 = inst_32563.push(inst_32567);
var tmp32649 = inst_32563;
var inst_32563__$1 = tmp32649;
var inst_32564 = inst_32571;
var state_32608__$1 = (function (){var statearr_32654 = state_32608;
(statearr_32654[(12)] = inst_32579);

(statearr_32654[(7)] = inst_32563__$1);

(statearr_32654[(8)] = inst_32564);

return statearr_32654;
})();
var statearr_32657_34097 = state_32608__$1;
(statearr_32657_34097[(2)] = null);

(statearr_32657_34097[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32609 === (9))){
var inst_32564 = (state_32608[(8)]);
var inst_32575 = cljs.core.keyword_identical_QMARK_(inst_32564,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_32608__$1 = state_32608;
var statearr_32659_34098 = state_32608__$1;
(statearr_32659_34098[(2)] = inst_32575);

(statearr_32659_34098[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32609 === (5))){
var inst_32572 = (state_32608[(13)]);
var inst_32564 = (state_32608[(8)]);
var inst_32571 = (state_32608[(11)]);
var inst_32567 = (state_32608[(9)]);
var inst_32571__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32567) : f.call(null,inst_32567));
var inst_32572__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32571__$1,inst_32564);
var state_32608__$1 = (function (){var statearr_32660 = state_32608;
(statearr_32660[(13)] = inst_32572__$1);

(statearr_32660[(11)] = inst_32571__$1);

return statearr_32660;
})();
if(inst_32572__$1){
var statearr_32665_34112 = state_32608__$1;
(statearr_32665_34112[(1)] = (8));

} else {
var statearr_32666_34113 = state_32608__$1;
(statearr_32666_34113[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32609 === (14))){
var inst_32571 = (state_32608[(11)]);
var inst_32567 = (state_32608[(9)]);
var inst_32584 = (state_32608[(2)]);
var inst_32585 = [];
var inst_32586 = inst_32585.push(inst_32567);
var inst_32563 = inst_32585;
var inst_32564 = inst_32571;
var state_32608__$1 = (function (){var statearr_32668 = state_32608;
(statearr_32668[(7)] = inst_32563);

(statearr_32668[(14)] = inst_32586);

(statearr_32668[(15)] = inst_32584);

(statearr_32668[(8)] = inst_32564);

return statearr_32668;
})();
var statearr_32673_34121 = state_32608__$1;
(statearr_32673_34121[(2)] = null);

(statearr_32673_34121[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32609 === (16))){
var state_32608__$1 = state_32608;
var statearr_32674_34123 = state_32608__$1;
(statearr_32674_34123[(2)] = null);

(statearr_32674_34123[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32609 === (10))){
var inst_32577 = (state_32608[(2)]);
var state_32608__$1 = state_32608;
if(cljs.core.truth_(inst_32577)){
var statearr_32678_34124 = state_32608__$1;
(statearr_32678_34124[(1)] = (11));

} else {
var statearr_32682_34125 = state_32608__$1;
(statearr_32682_34125[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32609 === (18))){
var inst_32598 = (state_32608[(2)]);
var state_32608__$1 = state_32608;
var statearr_32683_34126 = state_32608__$1;
(statearr_32683_34126[(2)] = inst_32598);

(statearr_32683_34126[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32609 === (8))){
var inst_32572 = (state_32608[(13)]);
var state_32608__$1 = state_32608;
var statearr_32684_34127 = state_32608__$1;
(statearr_32684_34127[(2)] = inst_32572);

(statearr_32684_34127[(1)] = (10));


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
var cljs$core$async$state_machine__29479__auto__ = null;
var cljs$core$async$state_machine__29479__auto____0 = (function (){
var statearr_32689 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32689[(0)] = cljs$core$async$state_machine__29479__auto__);

(statearr_32689[(1)] = (1));

return statearr_32689;
});
var cljs$core$async$state_machine__29479__auto____1 = (function (state_32608){
while(true){
var ret_value__29480__auto__ = (function (){try{while(true){
var result__29481__auto__ = switch__29478__auto__(state_32608);
if(cljs.core.keyword_identical_QMARK_(result__29481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29481__auto__;
}
break;
}
}catch (e32690){var ex__29482__auto__ = e32690;
var statearr_32691_34138 = state_32608;
(statearr_32691_34138[(2)] = ex__29482__auto__);


if(cljs.core.seq((state_32608[(4)]))){
var statearr_32692_34139 = state_32608;
(statearr_32692_34139[(1)] = cljs.core.first((state_32608[(4)])));

} else {
throw ex__29482__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34140 = state_32608;
state_32608 = G__34140;
continue;
} else {
return ret_value__29480__auto__;
}
break;
}
});
cljs$core$async$state_machine__29479__auto__ = function(state_32608){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29479__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29479__auto____1.call(this,state_32608);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29479__auto____0;
cljs$core$async$state_machine__29479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29479__auto____1;
return cljs$core$async$state_machine__29479__auto__;
})()
})();
var state__29683__auto__ = (function (){var statearr_32693 = f__29682__auto__();
(statearr_32693[(6)] = c__29681__auto___34083);

return statearr_32693;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29683__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
