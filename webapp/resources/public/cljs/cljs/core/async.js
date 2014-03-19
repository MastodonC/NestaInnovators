// Compiled by ClojureScript 0.0-2138
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t21444 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21444 = (function (f,fn_handler,meta21445){
this.f = f;
this.fn_handler = fn_handler;
this.meta21445 = meta21445;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21444.cljs$lang$type = true;
cljs.core.async.t21444.cljs$lang$ctorStr = "cljs.core.async/t21444";
cljs.core.async.t21444.cljs$lang$ctorPrWriter = (function (this__9947__auto__,writer__9948__auto__,opt__9949__auto__){return cljs.core._write.call(null,writer__9948__auto__,"cljs.core.async/t21444");
});
cljs.core.async.t21444.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t21444.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t21444.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t21444.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21446){var self__ = this;
var _21446__$1 = this;return self__.meta21445;
});
cljs.core.async.t21444.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21446,meta21445__$1){var self__ = this;
var _21446__$1 = this;return (new cljs.core.async.t21444(self__.f,self__.fn_handler,meta21445__$1));
});
cljs.core.async.__GT_t21444 = (function __GT_t21444(f__$1,fn_handler__$1,meta21445){return (new cljs.core.async.t21444(f__$1,fn_handler__$1,meta21445));
});
}
return (new cljs.core.async.t21444(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__21448 = buff;if(G__21448)
{var bit__10029__auto__ = null;if(cljs.core.truth_((function (){var or__9385__auto__ = bit__10029__auto__;if(cljs.core.truth_(or__9385__auto__))
{return or__9385__auto__;
} else
{return G__21448.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__21448.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__21448);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__21448);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,0))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("<! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_21449 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_21449);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_21449);
}));
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(){return null;
});
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(">! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){return put_BANG_.call(null,port,val,cljs.core.async.nop);
});
var put_BANG___3 = (function (port,val,fn0){return put_BANG_.call(null,port,val,fn0,true);
});
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__9373__auto__ = ret;if(cljs.core.truth_(and__9373__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__9373__auto__;
}
})()))
{if(cljs.core.truth_(on_caller_QMARK_))
{fn0.call(null);
} else
{cljs.core.async.impl.dispatch.run.call(null,fn0);
}
} else
{}
return null;
});
put_BANG_ = function(port,val,fn0,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn0);
case 4:
return put_BANG___4.call(this,port,val,fn0,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__10227__auto___21450 = n;var x_21451 = 0;while(true){
if((x_21451 < n__10227__auto___21450))
{(a[x_21451] = 0);
{
var G__21452 = (x_21451 + 1);
x_21451 = G__21452;
continue;
}
} else
{}
break;
}
var i = 1;while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__21453 = (i + 1);
i = G__21453;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t21457 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21457 = (function (flag,alt_flag,meta21458){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta21458 = meta21458;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21457.cljs$lang$type = true;
cljs.core.async.t21457.cljs$lang$ctorStr = "cljs.core.async/t21457";
cljs.core.async.t21457.cljs$lang$ctorPrWriter = (function (this__9947__auto__,writer__9948__auto__,opt__9949__auto__){return cljs.core._write.call(null,writer__9948__auto__,"cljs.core.async/t21457");
});
cljs.core.async.t21457.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t21457.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t21457.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t21457.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21459){var self__ = this;
var _21459__$1 = this;return self__.meta21458;
});
cljs.core.async.t21457.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21459,meta21458__$1){var self__ = this;
var _21459__$1 = this;return (new cljs.core.async.t21457(self__.flag,self__.alt_flag,meta21458__$1));
});
cljs.core.async.__GT_t21457 = (function __GT_t21457(flag__$1,alt_flag__$1,meta21458){return (new cljs.core.async.t21457(flag__$1,alt_flag__$1,meta21458));
});
}
return (new cljs.core.async.t21457(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t21463 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21463 = (function (cb,flag,alt_handler,meta21464){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta21464 = meta21464;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21463.cljs$lang$type = true;
cljs.core.async.t21463.cljs$lang$ctorStr = "cljs.core.async/t21463";
cljs.core.async.t21463.cljs$lang$ctorPrWriter = (function (this__9947__auto__,writer__9948__auto__,opt__9949__auto__){return cljs.core._write.call(null,writer__9948__auto__,"cljs.core.async/t21463");
});
cljs.core.async.t21463.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t21463.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t21463.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t21463.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21465){var self__ = this;
var _21465__$1 = this;return self__.meta21464;
});
cljs.core.async.t21463.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21465,meta21464__$1){var self__ = this;
var _21465__$1 = this;return (new cljs.core.async.t21463(self__.cb,self__.flag,self__.alt_handler,meta21464__$1));
});
cljs.core.async.__GT_t21463 = (function __GT_t21463(cb__$1,flag__$1,alt_handler__$1,meta21464){return (new cljs.core.async.t21463(cb__$1,flag__$1,alt_handler__$1,meta21464));
});
}
return (new cljs.core.async.t21463(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",4143410454).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,0):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,1);return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__21466_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__21466_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__9385__auto__ = wport;if(cljs.core.truth_(or__9385__auto__))
{return or__9385__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__21467 = (i + 1);
i = G__21467;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__9385__auto__ = ret;if(cljs.core.truth_(or__9385__auto__))
{return or__9385__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__9373__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__9373__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__9373__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",2558708147)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints, which
* can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and nil for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__21468){var map__21470 = p__21468;var map__21470__$1 = ((cljs.core.seq_QMARK_.call(null,map__21470))?cljs.core.apply.call(null,cljs.core.hash_map,map__21470):map__21470);var opts = map__21470__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__21468 = null;if (arguments.length > 1) {
  p__21468 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__21468);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__21471){
var ports = cljs.core.first(arglist__21471);
var p__21468 = cljs.core.rest(arglist__21471);
return alts_BANG___delegate(ports,p__21468);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t21479 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21479 = (function (ch,f,map_LT_,meta21480){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta21480 = meta21480;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21479.cljs$lang$type = true;
cljs.core.async.t21479.cljs$lang$ctorStr = "cljs.core.async/t21479";
cljs.core.async.t21479.cljs$lang$ctorPrWriter = (function (this__9947__auto__,writer__9948__auto__,opt__9949__auto__){return cljs.core._write.call(null,writer__9948__auto__,"cljs.core.async/t21479");
});
cljs.core.async.t21479.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t21479.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t21479.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t21479.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t21482 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21482 = (function (fn1,_,meta21480,ch,f,map_LT_,meta21483){
this.fn1 = fn1;
this._ = _;
this.meta21480 = meta21480;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta21483 = meta21483;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21482.cljs$lang$type = true;
cljs.core.async.t21482.cljs$lang$ctorStr = "cljs.core.async/t21482";
cljs.core.async.t21482.cljs$lang$ctorPrWriter = (function (this__9947__auto__,writer__9948__auto__,opt__9949__auto__){return cljs.core._write.call(null,writer__9948__auto__,"cljs.core.async/t21482");
});
cljs.core.async.t21482.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t21482.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t21482.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t21482.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__21472_SHARP_){return f1.call(null,(((p1__21472_SHARP_ == null))?null:self__.f.call(null,p1__21472_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t21482.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21484){var self__ = this;
var _21484__$1 = this;return self__.meta21483;
});
cljs.core.async.t21482.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21484,meta21483__$1){var self__ = this;
var _21484__$1 = this;return (new cljs.core.async.t21482(self__.fn1,self__._,self__.meta21480,self__.ch,self__.f,self__.map_LT_,meta21483__$1));
});
cljs.core.async.__GT_t21482 = (function __GT_t21482(fn1__$1,___$2,meta21480__$1,ch__$2,f__$2,map_LT___$2,meta21483){return (new cljs.core.async.t21482(fn1__$1,___$2,meta21480__$1,ch__$2,f__$2,map_LT___$2,meta21483));
});
}
return (new cljs.core.async.t21482(fn1,___$1,self__.meta21480,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__9373__auto__ = ret;if(cljs.core.truth_(and__9373__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__9373__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t21479.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t21479.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t21479.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21481){var self__ = this;
var _21481__$1 = this;return self__.meta21480;
});
cljs.core.async.t21479.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21481,meta21480__$1){var self__ = this;
var _21481__$1 = this;return (new cljs.core.async.t21479(self__.ch,self__.f,self__.map_LT_,meta21480__$1));
});
cljs.core.async.__GT_t21479 = (function __GT_t21479(ch__$1,f__$1,map_LT___$1,meta21480){return (new cljs.core.async.t21479(ch__$1,f__$1,map_LT___$1,meta21480));
});
}
return (new cljs.core.async.t21479(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t21488 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21488 = (function (ch,f,map_GT_,meta21489){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta21489 = meta21489;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21488.cljs$lang$type = true;
cljs.core.async.t21488.cljs$lang$ctorStr = "cljs.core.async/t21488";
cljs.core.async.t21488.cljs$lang$ctorPrWriter = (function (this__9947__auto__,writer__9948__auto__,opt__9949__auto__){return cljs.core._write.call(null,writer__9948__auto__,"cljs.core.async/t21488");
});
cljs.core.async.t21488.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t21488.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t21488.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t21488.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t21488.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t21488.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t21488.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21490){var self__ = this;
var _21490__$1 = this;return self__.meta21489;
});
cljs.core.async.t21488.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21490,meta21489__$1){var self__ = this;
var _21490__$1 = this;return (new cljs.core.async.t21488(self__.ch,self__.f,self__.map_GT_,meta21489__$1));
});
cljs.core.async.__GT_t21488 = (function __GT_t21488(ch__$1,f__$1,map_GT___$1,meta21489){return (new cljs.core.async.t21488(ch__$1,f__$1,map_GT___$1,meta21489));
});
}
return (new cljs.core.async.t21488(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t21494 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21494 = (function (ch,p,filter_GT_,meta21495){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta21495 = meta21495;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21494.cljs$lang$type = true;
cljs.core.async.t21494.cljs$lang$ctorStr = "cljs.core.async/t21494";
cljs.core.async.t21494.cljs$lang$ctorPrWriter = (function (this__9947__auto__,writer__9948__auto__,opt__9949__auto__){return cljs.core._write.call(null,writer__9948__auto__,"cljs.core.async/t21494");
});
cljs.core.async.t21494.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t21494.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t21494.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t21494.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t21494.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t21494.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t21494.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21496){var self__ = this;
var _21496__$1 = this;return self__.meta21495;
});
cljs.core.async.t21494.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21496,meta21495__$1){var self__ = this;
var _21496__$1 = this;return (new cljs.core.async.t21494(self__.ch,self__.p,self__.filter_GT_,meta21495__$1));
});
cljs.core.async.__GT_t21494 = (function __GT_t21494(ch__$1,p__$1,filter_GT___$1,meta21495){return (new cljs.core.async.t21494(ch__$1,p__$1,filter_GT___$1,meta21495));
});
}
return (new cljs.core.async.t21494(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11500__auto___21579 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__11501__auto__ = (function (){var switch__11485__auto__ = (function (state_21558){var state_val_21559 = (state_21558[1]);if((state_val_21559 === 1))
{var state_21558__$1 = state_21558;var statearr_21560_21580 = state_21558__$1;(statearr_21560_21580[2] = null);
(statearr_21560_21580[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21559 === 2))
{var state_21558__$1 = state_21558;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21558__$1,4,ch);
} else
{if((state_val_21559 === 3))
{var inst_21556 = (state_21558[2]);var state_21558__$1 = state_21558;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21558__$1,inst_21556);
} else
{if((state_val_21559 === 4))
{var inst_21540 = (state_21558[7]);var inst_21540__$1 = (state_21558[2]);var inst_21541 = (inst_21540__$1 == null);var state_21558__$1 = (function (){var statearr_21561 = state_21558;(statearr_21561[7] = inst_21540__$1);
return statearr_21561;
})();if(cljs.core.truth_(inst_21541))
{var statearr_21562_21581 = state_21558__$1;(statearr_21562_21581[1] = 5);
} else
{var statearr_21563_21582 = state_21558__$1;(statearr_21563_21582[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21559 === 5))
{var inst_21543 = cljs.core.async.close_BANG_.call(null,out);var state_21558__$1 = state_21558;var statearr_21564_21583 = state_21558__$1;(statearr_21564_21583[2] = inst_21543);
(statearr_21564_21583[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21559 === 6))
{var inst_21540 = (state_21558[7]);var inst_21545 = p.call(null,inst_21540);var state_21558__$1 = state_21558;if(cljs.core.truth_(inst_21545))
{var statearr_21565_21584 = state_21558__$1;(statearr_21565_21584[1] = 8);
} else
{var statearr_21566_21585 = state_21558__$1;(statearr_21566_21585[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21559 === 7))
{var inst_21554 = (state_21558[2]);var state_21558__$1 = state_21558;var statearr_21567_21586 = state_21558__$1;(statearr_21567_21586[2] = inst_21554);
(statearr_21567_21586[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21559 === 8))
{var inst_21540 = (state_21558[7]);var state_21558__$1 = state_21558;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21558__$1,11,out,inst_21540);
} else
{if((state_val_21559 === 9))
{var state_21558__$1 = state_21558;var statearr_21568_21587 = state_21558__$1;(statearr_21568_21587[2] = null);
(statearr_21568_21587[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21559 === 10))
{var inst_21551 = (state_21558[2]);var state_21558__$1 = (function (){var statearr_21569 = state_21558;(statearr_21569[8] = inst_21551);
return statearr_21569;
})();var statearr_21570_21588 = state_21558__$1;(statearr_21570_21588[2] = null);
(statearr_21570_21588[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21559 === 11))
{var inst_21548 = (state_21558[2]);var state_21558__$1 = state_21558;var statearr_21571_21589 = state_21558__$1;(statearr_21571_21589[2] = inst_21548);
(statearr_21571_21589[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__11485__auto__){
return (function() {
var state_machine__11486__auto__ = null;
var state_machine__11486__auto____0 = (function (){var statearr_21575 = [null,null,null,null,null,null,null,null,null];(statearr_21575[0] = state_machine__11486__auto__);
(statearr_21575[1] = 1);
return statearr_21575;
});
var state_machine__11486__auto____1 = (function (state_21558){while(true){
var ret_value__11487__auto__ = (function (){try{while(true){
var result__11488__auto__ = switch__11485__auto__.call(null,state_21558);if(cljs.core.keyword_identical_QMARK_.call(null,result__11488__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__11488__auto__;
}
break;
}
}catch (e21576){if((e21576 instanceof Object))
{var ex__11489__auto__ = e21576;var statearr_21577_21590 = state_21558;(statearr_21577_21590[5] = ex__11489__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21558);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e21576;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11487__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__21591 = state_21558;
state_21558 = G__21591;
continue;
}
} else
{return ret_value__11487__auto__;
}
break;
}
});
state_machine__11486__auto__ = function(state_21558){
switch(arguments.length){
case 0:
return state_machine__11486__auto____0.call(this);
case 1:
return state_machine__11486__auto____1.call(this,state_21558);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11486__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11486__auto____0;
state_machine__11486__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11486__auto____1;
return state_machine__11486__auto__;
})()
;})(switch__11485__auto__))
})();var state__11502__auto__ = (function (){var statearr_21578 = f__11501__auto__.call(null);(statearr_21578[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11500__auto___21579);
return statearr_21578;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11502__auto__);
}));
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__11500__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__11501__auto__ = (function (){var switch__11485__auto__ = (function (state_21743){var state_val_21744 = (state_21743[1]);if((state_val_21744 === 1))
{var state_21743__$1 = state_21743;var statearr_21745_21782 = state_21743__$1;(statearr_21745_21782[2] = null);
(statearr_21745_21782[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21744 === 2))
{var state_21743__$1 = state_21743;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21743__$1,4,in$);
} else
{if((state_val_21744 === 3))
{var inst_21741 = (state_21743[2]);var state_21743__$1 = state_21743;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21743__$1,inst_21741);
} else
{if((state_val_21744 === 4))
{var inst_21689 = (state_21743[7]);var inst_21689__$1 = (state_21743[2]);var inst_21690 = (inst_21689__$1 == null);var state_21743__$1 = (function (){var statearr_21746 = state_21743;(statearr_21746[7] = inst_21689__$1);
return statearr_21746;
})();if(cljs.core.truth_(inst_21690))
{var statearr_21747_21783 = state_21743__$1;(statearr_21747_21783[1] = 5);
} else
{var statearr_21748_21784 = state_21743__$1;(statearr_21748_21784[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21744 === 5))
{var inst_21692 = cljs.core.async.close_BANG_.call(null,out);var state_21743__$1 = state_21743;var statearr_21749_21785 = state_21743__$1;(statearr_21749_21785[2] = inst_21692);
(statearr_21749_21785[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21744 === 6))
{var inst_21689 = (state_21743[7]);var inst_21694 = f.call(null,inst_21689);var inst_21699 = cljs.core.seq.call(null,inst_21694);var inst_21700 = inst_21699;var inst_21701 = null;var inst_21702 = 0;var inst_21703 = 0;var state_21743__$1 = (function (){var statearr_21750 = state_21743;(statearr_21750[8] = inst_21702);
(statearr_21750[9] = inst_21701);
(statearr_21750[10] = inst_21703);
(statearr_21750[11] = inst_21700);
return statearr_21750;
})();var statearr_21751_21786 = state_21743__$1;(statearr_21751_21786[2] = null);
(statearr_21751_21786[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21744 === 7))
{var inst_21739 = (state_21743[2]);var state_21743__$1 = state_21743;var statearr_21752_21787 = state_21743__$1;(statearr_21752_21787[2] = inst_21739);
(statearr_21752_21787[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21744 === 8))
{var inst_21702 = (state_21743[8]);var inst_21703 = (state_21743[10]);var inst_21705 = (inst_21703 < inst_21702);var inst_21706 = inst_21705;var state_21743__$1 = state_21743;if(cljs.core.truth_(inst_21706))
{var statearr_21753_21788 = state_21743__$1;(statearr_21753_21788[1] = 10);
} else
{var statearr_21754_21789 = state_21743__$1;(statearr_21754_21789[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21744 === 9))
{var inst_21736 = (state_21743[2]);var state_21743__$1 = (function (){var statearr_21755 = state_21743;(statearr_21755[12] = inst_21736);
return statearr_21755;
})();var statearr_21756_21790 = state_21743__$1;(statearr_21756_21790[2] = null);
(statearr_21756_21790[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21744 === 10))
{var inst_21701 = (state_21743[9]);var inst_21703 = (state_21743[10]);var inst_21708 = cljs.core._nth.call(null,inst_21701,inst_21703);var state_21743__$1 = state_21743;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21743__$1,13,out,inst_21708);
} else
{if((state_val_21744 === 11))
{var inst_21714 = (state_21743[13]);var inst_21700 = (state_21743[11]);var inst_21714__$1 = cljs.core.seq.call(null,inst_21700);var state_21743__$1 = (function (){var statearr_21760 = state_21743;(statearr_21760[13] = inst_21714__$1);
return statearr_21760;
})();if(inst_21714__$1)
{var statearr_21761_21791 = state_21743__$1;(statearr_21761_21791[1] = 14);
} else
{var statearr_21762_21792 = state_21743__$1;(statearr_21762_21792[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21744 === 12))
{var inst_21734 = (state_21743[2]);var state_21743__$1 = state_21743;var statearr_21763_21793 = state_21743__$1;(statearr_21763_21793[2] = inst_21734);
(statearr_21763_21793[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21744 === 13))
{var inst_21702 = (state_21743[8]);var inst_21701 = (state_21743[9]);var inst_21703 = (state_21743[10]);var inst_21700 = (state_21743[11]);var inst_21710 = (state_21743[2]);var inst_21711 = (inst_21703 + 1);var tmp21757 = inst_21702;var tmp21758 = inst_21701;var tmp21759 = inst_21700;var inst_21700__$1 = tmp21759;var inst_21701__$1 = tmp21758;var inst_21702__$1 = tmp21757;var inst_21703__$1 = inst_21711;var state_21743__$1 = (function (){var statearr_21764 = state_21743;(statearr_21764[8] = inst_21702__$1);
(statearr_21764[9] = inst_21701__$1);
(statearr_21764[10] = inst_21703__$1);
(statearr_21764[14] = inst_21710);
(statearr_21764[11] = inst_21700__$1);
return statearr_21764;
})();var statearr_21765_21794 = state_21743__$1;(statearr_21765_21794[2] = null);
(statearr_21765_21794[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21744 === 14))
{var inst_21714 = (state_21743[13]);var inst_21716 = cljs.core.chunked_seq_QMARK_.call(null,inst_21714);var state_21743__$1 = state_21743;if(inst_21716)
{var statearr_21766_21795 = state_21743__$1;(statearr_21766_21795[1] = 17);
} else
{var statearr_21767_21796 = state_21743__$1;(statearr_21767_21796[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21744 === 15))
{var state_21743__$1 = state_21743;var statearr_21768_21797 = state_21743__$1;(statearr_21768_21797[2] = null);
(statearr_21768_21797[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21744 === 16))
{var inst_21732 = (state_21743[2]);var state_21743__$1 = state_21743;var statearr_21769_21798 = state_21743__$1;(statearr_21769_21798[2] = inst_21732);
(statearr_21769_21798[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21744 === 17))
{var inst_21714 = (state_21743[13]);var inst_21718 = cljs.core.chunk_first.call(null,inst_21714);var inst_21719 = cljs.core.chunk_rest.call(null,inst_21714);var inst_21720 = cljs.core.count.call(null,inst_21718);var inst_21700 = inst_21719;var inst_21701 = inst_21718;var inst_21702 = inst_21720;var inst_21703 = 0;var state_21743__$1 = (function (){var statearr_21770 = state_21743;(statearr_21770[8] = inst_21702);
(statearr_21770[9] = inst_21701);
(statearr_21770[10] = inst_21703);
(statearr_21770[11] = inst_21700);
return statearr_21770;
})();var statearr_21771_21799 = state_21743__$1;(statearr_21771_21799[2] = null);
(statearr_21771_21799[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21744 === 18))
{var inst_21714 = (state_21743[13]);var inst_21723 = cljs.core.first.call(null,inst_21714);var state_21743__$1 = state_21743;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21743__$1,20,out,inst_21723);
} else
{if((state_val_21744 === 19))
{var inst_21729 = (state_21743[2]);var state_21743__$1 = state_21743;var statearr_21772_21800 = state_21743__$1;(statearr_21772_21800[2] = inst_21729);
(statearr_21772_21800[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21744 === 20))
{var inst_21714 = (state_21743[13]);var inst_21725 = (state_21743[2]);var inst_21726 = cljs.core.next.call(null,inst_21714);var inst_21700 = inst_21726;var inst_21701 = null;var inst_21702 = 0;var inst_21703 = 0;var state_21743__$1 = (function (){var statearr_21773 = state_21743;(statearr_21773[8] = inst_21702);
(statearr_21773[9] = inst_21701);
(statearr_21773[10] = inst_21703);
(statearr_21773[15] = inst_21725);
(statearr_21773[11] = inst_21700);
return statearr_21773;
})();var statearr_21774_21801 = state_21743__$1;(statearr_21774_21801[2] = null);
(statearr_21774_21801[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__11485__auto__){
return (function() {
var state_machine__11486__auto__ = null;
var state_machine__11486__auto____0 = (function (){var statearr_21778 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_21778[0] = state_machine__11486__auto__);
(statearr_21778[1] = 1);
return statearr_21778;
});
var state_machine__11486__auto____1 = (function (state_21743){while(true){
var ret_value__11487__auto__ = (function (){try{while(true){
var result__11488__auto__ = switch__11485__auto__.call(null,state_21743);if(cljs.core.keyword_identical_QMARK_.call(null,result__11488__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__11488__auto__;
}
break;
}
}catch (e21779){if((e21779 instanceof Object))
{var ex__11489__auto__ = e21779;var statearr_21780_21802 = state_21743;(statearr_21780_21802[5] = ex__11489__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21743);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e21779;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11487__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__21803 = state_21743;
state_21743 = G__21803;
continue;
}
} else
{return ret_value__11487__auto__;
}
break;
}
});
state_machine__11486__auto__ = function(state_21743){
switch(arguments.length){
case 0:
return state_machine__11486__auto____0.call(this);
case 1:
return state_machine__11486__auto____1.call(this,state_21743);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11486__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11486__auto____0;
state_machine__11486__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11486__auto____1;
return state_machine__11486__auto__;
})()
;})(switch__11485__auto__))
})();var state__11502__auto__ = (function (){var statearr_21781 = f__11501__auto__.call(null);(statearr_21781[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11500__auto__);
return statearr_21781;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11502__auto__);
}));
return c__11500__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the
* from channel closes, but can be determined by the close?
* parameter.
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__11500__auto___21884 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__11501__auto__ = (function (){var switch__11485__auto__ = (function (state_21863){var state_val_21864 = (state_21863[1]);if((state_val_21864 === 1))
{var state_21863__$1 = state_21863;var statearr_21865_21885 = state_21863__$1;(statearr_21865_21885[2] = null);
(statearr_21865_21885[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21864 === 2))
{var state_21863__$1 = state_21863;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21863__$1,4,from);
} else
{if((state_val_21864 === 3))
{var inst_21861 = (state_21863[2]);var state_21863__$1 = state_21863;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21863__$1,inst_21861);
} else
{if((state_val_21864 === 4))
{var inst_21846 = (state_21863[7]);var inst_21846__$1 = (state_21863[2]);var inst_21847 = (inst_21846__$1 == null);var state_21863__$1 = (function (){var statearr_21866 = state_21863;(statearr_21866[7] = inst_21846__$1);
return statearr_21866;
})();if(cljs.core.truth_(inst_21847))
{var statearr_21867_21886 = state_21863__$1;(statearr_21867_21886[1] = 5);
} else
{var statearr_21868_21887 = state_21863__$1;(statearr_21868_21887[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21864 === 5))
{var state_21863__$1 = state_21863;if(cljs.core.truth_(close_QMARK_))
{var statearr_21869_21888 = state_21863__$1;(statearr_21869_21888[1] = 8);
} else
{var statearr_21870_21889 = state_21863__$1;(statearr_21870_21889[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21864 === 6))
{var inst_21846 = (state_21863[7]);var state_21863__$1 = state_21863;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21863__$1,11,to,inst_21846);
} else
{if((state_val_21864 === 7))
{var inst_21859 = (state_21863[2]);var state_21863__$1 = state_21863;var statearr_21871_21890 = state_21863__$1;(statearr_21871_21890[2] = inst_21859);
(statearr_21871_21890[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21864 === 8))
{var inst_21850 = cljs.core.async.close_BANG_.call(null,to);var state_21863__$1 = state_21863;var statearr_21872_21891 = state_21863__$1;(statearr_21872_21891[2] = inst_21850);
(statearr_21872_21891[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21864 === 9))
{var state_21863__$1 = state_21863;var statearr_21873_21892 = state_21863__$1;(statearr_21873_21892[2] = null);
(statearr_21873_21892[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21864 === 10))
{var inst_21853 = (state_21863[2]);var state_21863__$1 = state_21863;var statearr_21874_21893 = state_21863__$1;(statearr_21874_21893[2] = inst_21853);
(statearr_21874_21893[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21864 === 11))
{var inst_21856 = (state_21863[2]);var state_21863__$1 = (function (){var statearr_21875 = state_21863;(statearr_21875[8] = inst_21856);
return statearr_21875;
})();var statearr_21876_21894 = state_21863__$1;(statearr_21876_21894[2] = null);
(statearr_21876_21894[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__11485__auto__){
return (function() {
var state_machine__11486__auto__ = null;
var state_machine__11486__auto____0 = (function (){var statearr_21880 = [null,null,null,null,null,null,null,null,null];(statearr_21880[0] = state_machine__11486__auto__);
(statearr_21880[1] = 1);
return statearr_21880;
});
var state_machine__11486__auto____1 = (function (state_21863){while(true){
var ret_value__11487__auto__ = (function (){try{while(true){
var result__11488__auto__ = switch__11485__auto__.call(null,state_21863);if(cljs.core.keyword_identical_QMARK_.call(null,result__11488__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__11488__auto__;
}
break;
}
}catch (e21881){if((e21881 instanceof Object))
{var ex__11489__auto__ = e21881;var statearr_21882_21895 = state_21863;(statearr_21882_21895[5] = ex__11489__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21863);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e21881;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11487__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__21896 = state_21863;
state_21863 = G__21896;
continue;
}
} else
{return ret_value__11487__auto__;
}
break;
}
});
state_machine__11486__auto__ = function(state_21863){
switch(arguments.length){
case 0:
return state_machine__11486__auto____0.call(this);
case 1:
return state_machine__11486__auto____1.call(this,state_21863);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11486__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11486__auto____0;
state_machine__11486__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11486__auto____1;
return state_machine__11486__auto__;
})()
;})(switch__11485__auto__))
})();var state__11502__auto__ = (function (){var statearr_21883 = f__11501__auto__.call(null);(statearr_21883[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11500__auto___21884);
return statearr_21883;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11502__auto__);
}));
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__11500__auto___21983 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__11501__auto__ = (function (){var switch__11485__auto__ = (function (state_21961){var state_val_21962 = (state_21961[1]);if((state_val_21962 === 1))
{var state_21961__$1 = state_21961;var statearr_21963_21984 = state_21961__$1;(statearr_21963_21984[2] = null);
(statearr_21963_21984[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21962 === 2))
{var state_21961__$1 = state_21961;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21961__$1,4,ch);
} else
{if((state_val_21962 === 3))
{var inst_21959 = (state_21961[2]);var state_21961__$1 = state_21961;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21961__$1,inst_21959);
} else
{if((state_val_21962 === 4))
{var inst_21942 = (state_21961[7]);var inst_21942__$1 = (state_21961[2]);var inst_21943 = (inst_21942__$1 == null);var state_21961__$1 = (function (){var statearr_21964 = state_21961;(statearr_21964[7] = inst_21942__$1);
return statearr_21964;
})();if(cljs.core.truth_(inst_21943))
{var statearr_21965_21985 = state_21961__$1;(statearr_21965_21985[1] = 5);
} else
{var statearr_21966_21986 = state_21961__$1;(statearr_21966_21986[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21962 === 5))
{var inst_21945 = cljs.core.async.close_BANG_.call(null,tc);var inst_21946 = cljs.core.async.close_BANG_.call(null,fc);var state_21961__$1 = (function (){var statearr_21967 = state_21961;(statearr_21967[8] = inst_21945);
return statearr_21967;
})();var statearr_21968_21987 = state_21961__$1;(statearr_21968_21987[2] = inst_21946);
(statearr_21968_21987[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21962 === 6))
{var inst_21942 = (state_21961[7]);var inst_21948 = p.call(null,inst_21942);var state_21961__$1 = state_21961;if(cljs.core.truth_(inst_21948))
{var statearr_21969_21988 = state_21961__$1;(statearr_21969_21988[1] = 9);
} else
{var statearr_21970_21989 = state_21961__$1;(statearr_21970_21989[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21962 === 7))
{var inst_21957 = (state_21961[2]);var state_21961__$1 = state_21961;var statearr_21971_21990 = state_21961__$1;(statearr_21971_21990[2] = inst_21957);
(statearr_21971_21990[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21962 === 8))
{var inst_21954 = (state_21961[2]);var state_21961__$1 = (function (){var statearr_21972 = state_21961;(statearr_21972[9] = inst_21954);
return statearr_21972;
})();var statearr_21973_21991 = state_21961__$1;(statearr_21973_21991[2] = null);
(statearr_21973_21991[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21962 === 9))
{var state_21961__$1 = state_21961;var statearr_21974_21992 = state_21961__$1;(statearr_21974_21992[2] = tc);
(statearr_21974_21992[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21962 === 10))
{var state_21961__$1 = state_21961;var statearr_21975_21993 = state_21961__$1;(statearr_21975_21993[2] = fc);
(statearr_21975_21993[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21962 === 11))
{var inst_21942 = (state_21961[7]);var inst_21952 = (state_21961[2]);var state_21961__$1 = state_21961;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21961__$1,8,inst_21952,inst_21942);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__11485__auto__){
return (function() {
var state_machine__11486__auto__ = null;
var state_machine__11486__auto____0 = (function (){var statearr_21979 = [null,null,null,null,null,null,null,null,null,null];(statearr_21979[0] = state_machine__11486__auto__);
(statearr_21979[1] = 1);
return statearr_21979;
});
var state_machine__11486__auto____1 = (function (state_21961){while(true){
var ret_value__11487__auto__ = (function (){try{while(true){
var result__11488__auto__ = switch__11485__auto__.call(null,state_21961);if(cljs.core.keyword_identical_QMARK_.call(null,result__11488__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__11488__auto__;
}
break;
}
}catch (e21980){if((e21980 instanceof Object))
{var ex__11489__auto__ = e21980;var statearr_21981_21994 = state_21961;(statearr_21981_21994[5] = ex__11489__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21961);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e21980;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11487__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__21995 = state_21961;
state_21961 = G__21995;
continue;
}
} else
{return ret_value__11487__auto__;
}
break;
}
});
state_machine__11486__auto__ = function(state_21961){
switch(arguments.length){
case 0:
return state_machine__11486__auto____0.call(this);
case 1:
return state_machine__11486__auto____1.call(this,state_21961);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11486__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11486__auto____0;
state_machine__11486__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11486__auto____1;
return state_machine__11486__auto__;
})()
;})(switch__11485__auto__))
})();var state__11502__auto__ = (function (){var statearr_21982 = f__11501__auto__.call(null);(statearr_21982[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11500__auto___21983);
return statearr_21982;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11502__auto__);
}));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__11500__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__11501__auto__ = (function (){var switch__11485__auto__ = (function (state_22042){var state_val_22043 = (state_22042[1]);if((state_val_22043 === 7))
{var inst_22038 = (state_22042[2]);var state_22042__$1 = state_22042;var statearr_22044_22060 = state_22042__$1;(statearr_22044_22060[2] = inst_22038);
(statearr_22044_22060[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22043 === 6))
{var inst_22028 = (state_22042[7]);var inst_22031 = (state_22042[8]);var inst_22035 = f.call(null,inst_22028,inst_22031);var inst_22028__$1 = inst_22035;var state_22042__$1 = (function (){var statearr_22045 = state_22042;(statearr_22045[7] = inst_22028__$1);
return statearr_22045;
})();var statearr_22046_22061 = state_22042__$1;(statearr_22046_22061[2] = null);
(statearr_22046_22061[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22043 === 5))
{var inst_22028 = (state_22042[7]);var state_22042__$1 = state_22042;var statearr_22047_22062 = state_22042__$1;(statearr_22047_22062[2] = inst_22028);
(statearr_22047_22062[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22043 === 4))
{var inst_22031 = (state_22042[8]);var inst_22031__$1 = (state_22042[2]);var inst_22032 = (inst_22031__$1 == null);var state_22042__$1 = (function (){var statearr_22048 = state_22042;(statearr_22048[8] = inst_22031__$1);
return statearr_22048;
})();if(cljs.core.truth_(inst_22032))
{var statearr_22049_22063 = state_22042__$1;(statearr_22049_22063[1] = 5);
} else
{var statearr_22050_22064 = state_22042__$1;(statearr_22050_22064[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22043 === 3))
{var inst_22040 = (state_22042[2]);var state_22042__$1 = state_22042;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22042__$1,inst_22040);
} else
{if((state_val_22043 === 2))
{var state_22042__$1 = state_22042;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22042__$1,4,ch);
} else
{if((state_val_22043 === 1))
{var inst_22028 = init;var state_22042__$1 = (function (){var statearr_22051 = state_22042;(statearr_22051[7] = inst_22028);
return statearr_22051;
})();var statearr_22052_22065 = state_22042__$1;(statearr_22052_22065[2] = null);
(statearr_22052_22065[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
});return ((function (switch__11485__auto__){
return (function() {
var state_machine__11486__auto__ = null;
var state_machine__11486__auto____0 = (function (){var statearr_22056 = [null,null,null,null,null,null,null,null,null];(statearr_22056[0] = state_machine__11486__auto__);
(statearr_22056[1] = 1);
return statearr_22056;
});
var state_machine__11486__auto____1 = (function (state_22042){while(true){
var ret_value__11487__auto__ = (function (){try{while(true){
var result__11488__auto__ = switch__11485__auto__.call(null,state_22042);if(cljs.core.keyword_identical_QMARK_.call(null,result__11488__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__11488__auto__;
}
break;
}
}catch (e22057){if((e22057 instanceof Object))
{var ex__11489__auto__ = e22057;var statearr_22058_22066 = state_22042;(statearr_22058_22066[5] = ex__11489__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22042);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e22057;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11487__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__22067 = state_22042;
state_22042 = G__22067;
continue;
}
} else
{return ret_value__11487__auto__;
}
break;
}
});
state_machine__11486__auto__ = function(state_22042){
switch(arguments.length){
case 0:
return state_machine__11486__auto____0.call(this);
case 1:
return state_machine__11486__auto____1.call(this,state_22042);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11486__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11486__auto____0;
state_machine__11486__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11486__auto____1;
return state_machine__11486__auto__;
})()
;})(switch__11485__auto__))
})();var state__11502__auto__ = (function (){var statearr_22059 = f__11501__auto__.call(null);(statearr_22059[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11500__auto__);
return statearr_22059;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11502__auto__);
}));
return c__11500__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__11500__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__11501__auto__ = (function (){var switch__11485__auto__ = (function (state_22129){var state_val_22130 = (state_22129[1]);if((state_val_22130 === 1))
{var inst_22109 = cljs.core.seq.call(null,coll);var inst_22110 = inst_22109;var state_22129__$1 = (function (){var statearr_22131 = state_22129;(statearr_22131[7] = inst_22110);
return statearr_22131;
})();var statearr_22132_22150 = state_22129__$1;(statearr_22132_22150[2] = null);
(statearr_22132_22150[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22130 === 2))
{var inst_22110 = (state_22129[7]);var state_22129__$1 = state_22129;if(cljs.core.truth_(inst_22110))
{var statearr_22133_22151 = state_22129__$1;(statearr_22133_22151[1] = 4);
} else
{var statearr_22134_22152 = state_22129__$1;(statearr_22134_22152[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22130 === 3))
{var inst_22127 = (state_22129[2]);var state_22129__$1 = state_22129;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22129__$1,inst_22127);
} else
{if((state_val_22130 === 4))
{var inst_22110 = (state_22129[7]);var inst_22113 = cljs.core.first.call(null,inst_22110);var state_22129__$1 = state_22129;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22129__$1,7,ch,inst_22113);
} else
{if((state_val_22130 === 5))
{var state_22129__$1 = state_22129;if(cljs.core.truth_(close_QMARK_))
{var statearr_22135_22153 = state_22129__$1;(statearr_22135_22153[1] = 8);
} else
{var statearr_22136_22154 = state_22129__$1;(statearr_22136_22154[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22130 === 6))
{var inst_22125 = (state_22129[2]);var state_22129__$1 = state_22129;var statearr_22137_22155 = state_22129__$1;(statearr_22137_22155[2] = inst_22125);
(statearr_22137_22155[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22130 === 7))
{var inst_22110 = (state_22129[7]);var inst_22115 = (state_22129[2]);var inst_22116 = cljs.core.next.call(null,inst_22110);var inst_22110__$1 = inst_22116;var state_22129__$1 = (function (){var statearr_22138 = state_22129;(statearr_22138[7] = inst_22110__$1);
(statearr_22138[8] = inst_22115);
return statearr_22138;
})();var statearr_22139_22156 = state_22129__$1;(statearr_22139_22156[2] = null);
(statearr_22139_22156[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22130 === 8))
{var inst_22120 = cljs.core.async.close_BANG_.call(null,ch);var state_22129__$1 = state_22129;var statearr_22140_22157 = state_22129__$1;(statearr_22140_22157[2] = inst_22120);
(statearr_22140_22157[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22130 === 9))
{var state_22129__$1 = state_22129;var statearr_22141_22158 = state_22129__$1;(statearr_22141_22158[2] = null);
(statearr_22141_22158[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22130 === 10))
{var inst_22123 = (state_22129[2]);var state_22129__$1 = state_22129;var statearr_22142_22159 = state_22129__$1;(statearr_22142_22159[2] = inst_22123);
(statearr_22142_22159[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__11485__auto__){
return (function() {
var state_machine__11486__auto__ = null;
var state_machine__11486__auto____0 = (function (){var statearr_22146 = [null,null,null,null,null,null,null,null,null];(statearr_22146[0] = state_machine__11486__auto__);
(statearr_22146[1] = 1);
return statearr_22146;
});
var state_machine__11486__auto____1 = (function (state_22129){while(true){
var ret_value__11487__auto__ = (function (){try{while(true){
var result__11488__auto__ = switch__11485__auto__.call(null,state_22129);if(cljs.core.keyword_identical_QMARK_.call(null,result__11488__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__11488__auto__;
}
break;
}
}catch (e22147){if((e22147 instanceof Object))
{var ex__11489__auto__ = e22147;var statearr_22148_22160 = state_22129;(statearr_22148_22160[5] = ex__11489__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22129);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e22147;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11487__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__22161 = state_22129;
state_22129 = G__22161;
continue;
}
} else
{return ret_value__11487__auto__;
}
break;
}
});
state_machine__11486__auto__ = function(state_22129){
switch(arguments.length){
case 0:
return state_machine__11486__auto____0.call(this);
case 1:
return state_machine__11486__auto____1.call(this,state_22129);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11486__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11486__auto____0;
state_machine__11486__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11486__auto____1;
return state_machine__11486__auto__;
})()
;})(switch__11485__auto__))
})();var state__11502__auto__ = (function (){var statearr_22149 = f__11501__auto__.call(null);(statearr_22149[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11500__auto__);
return statearr_22149;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11502__auto__);
}));
return c__11500__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,100,coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj22163 = {};return obj22163;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__9373__auto__ = _;if(and__9373__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__9373__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__10006__auto__ = (((_ == null))?null:_);return (function (){var or__9385__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__10006__auto__)]);if(or__9385__auto__)
{return or__9385__auto__;
} else
{var or__9385__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__9385__auto____$1)
{return or__9385__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj22165 = {};return obj22165;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__9373__auto__ = m;if(and__9373__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__9373__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__10006__auto__ = (((m == null))?null:m);return (function (){var or__9385__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__10006__auto__)]);if(or__9385__auto__)
{return or__9385__auto__;
} else
{var or__9385__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__9385__auto____$1)
{return or__9385__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__9373__auto__ = m;if(and__9373__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__9373__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__10006__auto__ = (((m == null))?null:m);return (function (){var or__9385__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__10006__auto__)]);if(or__9385__auto__)
{return or__9385__auto__;
} else
{var or__9385__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__9385__auto____$1)
{return or__9385__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__9373__auto__ = m;if(and__9373__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__9373__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__10006__auto__ = (((m == null))?null:m);return (function (){var or__9385__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__10006__auto__)]);if(or__9385__auto__)
{return or__9385__auto__;
} else
{var or__9385__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__9385__auto____$1)
{return or__9385__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap put throws an exception, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t22389 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t22389 = (function (cs,ch,mult,meta22390){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta22390 = meta22390;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22389.cljs$lang$type = true;
cljs.core.async.t22389.cljs$lang$ctorStr = "cljs.core.async/t22389";
cljs.core.async.t22389.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__9947__auto__,writer__9948__auto__,opt__9949__auto__){return cljs.core._write.call(null,writer__9948__auto__,"cljs.core.async/t22389");
});})(cs))
;
cljs.core.async.t22389.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t22389.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t22389.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t22389.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t22389.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t22389.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t22389.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_22391){var self__ = this;
var _22391__$1 = this;return self__.meta22390;
});})(cs))
;
cljs.core.async.t22389.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_22391,meta22390__$1){var self__ = this;
var _22391__$1 = this;return (new cljs.core.async.t22389(self__.cs,self__.ch,self__.mult,meta22390__$1));
});})(cs))
;
cljs.core.async.__GT_t22389 = ((function (cs){
return (function __GT_t22389(cs__$1,ch__$1,mult__$1,meta22390){return (new cljs.core.async.t22389(cs__$1,ch__$1,mult__$1,meta22390));
});})(cs))
;
}
return (new cljs.core.async.t22389(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__11500__auto___22612 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__11501__auto__ = (function (){var switch__11485__auto__ = (function (state_22526){var state_val_22527 = (state_22526[1]);if((state_val_22527 === 32))
{var inst_22470 = (state_22526[7]);var inst_22394 = (state_22526[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_22526,31,Object,null,30);var inst_22477 = cljs.core.async.put_BANG_.call(null,inst_22470,inst_22394,done);var state_22526__$1 = state_22526;var statearr_22528_22613 = state_22526__$1;(statearr_22528_22613[2] = inst_22477);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22526__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22527 === 1))
{var state_22526__$1 = state_22526;var statearr_22529_22614 = state_22526__$1;(statearr_22529_22614[2] = null);
(statearr_22529_22614[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22527 === 33))
{var inst_22483 = (state_22526[9]);var inst_22485 = cljs.core.chunked_seq_QMARK_.call(null,inst_22483);var state_22526__$1 = state_22526;if(inst_22485)
{var statearr_22530_22615 = state_22526__$1;(statearr_22530_22615[1] = 36);
} else
{var statearr_22531_22616 = state_22526__$1;(statearr_22531_22616[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22527 === 2))
{var state_22526__$1 = state_22526;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22526__$1,4,ch);
} else
{if((state_val_22527 === 34))
{var state_22526__$1 = state_22526;var statearr_22532_22617 = state_22526__$1;(statearr_22532_22617[2] = null);
(statearr_22532_22617[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22527 === 3))
{var inst_22524 = (state_22526[2]);var state_22526__$1 = state_22526;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22526__$1,inst_22524);
} else
{if((state_val_22527 === 35))
{var inst_22508 = (state_22526[2]);var state_22526__$1 = state_22526;var statearr_22533_22618 = state_22526__$1;(statearr_22533_22618[2] = inst_22508);
(statearr_22533_22618[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22527 === 4))
{var inst_22394 = (state_22526[8]);var inst_22394__$1 = (state_22526[2]);var inst_22395 = (inst_22394__$1 == null);var state_22526__$1 = (function (){var statearr_22534 = state_22526;(statearr_22534[8] = inst_22394__$1);
return statearr_22534;
})();if(cljs.core.truth_(inst_22395))
{var statearr_22535_22619 = state_22526__$1;(statearr_22535_22619[1] = 5);
} else
{var statearr_22536_22620 = state_22526__$1;(statearr_22536_22620[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22527 === 36))
{var inst_22483 = (state_22526[9]);var inst_22487 = cljs.core.chunk_first.call(null,inst_22483);var inst_22488 = cljs.core.chunk_rest.call(null,inst_22483);var inst_22489 = cljs.core.count.call(null,inst_22487);var inst_22462 = inst_22488;var inst_22463 = inst_22487;var inst_22464 = inst_22489;var inst_22465 = 0;var state_22526__$1 = (function (){var statearr_22537 = state_22526;(statearr_22537[10] = inst_22462);
(statearr_22537[11] = inst_22465);
(statearr_22537[12] = inst_22464);
(statearr_22537[13] = inst_22463);
return statearr_22537;
})();var statearr_22538_22621 = state_22526__$1;(statearr_22538_22621[2] = null);
(statearr_22538_22621[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22527 === 5))
{var inst_22401 = cljs.core.deref.call(null,cs);var inst_22402 = cljs.core.seq.call(null,inst_22401);var inst_22403 = inst_22402;var inst_22404 = null;var inst_22405 = 0;var inst_22406 = 0;var state_22526__$1 = (function (){var statearr_22539 = state_22526;(statearr_22539[14] = inst_22406);
(statearr_22539[15] = inst_22405);
(statearr_22539[16] = inst_22403);
(statearr_22539[17] = inst_22404);
return statearr_22539;
})();var statearr_22540_22622 = state_22526__$1;(statearr_22540_22622[2] = null);
(statearr_22540_22622[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22527 === 37))
{var inst_22483 = (state_22526[9]);var inst_22492 = cljs.core.first.call(null,inst_22483);var state_22526__$1 = (function (){var statearr_22541 = state_22526;(statearr_22541[18] = inst_22492);
return statearr_22541;
})();var statearr_22542_22623 = state_22526__$1;(statearr_22542_22623[2] = null);
(statearr_22542_22623[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22527 === 6))
{var inst_22454 = (state_22526[19]);var inst_22453 = cljs.core.deref.call(null,cs);var inst_22454__$1 = cljs.core.keys.call(null,inst_22453);var inst_22455 = cljs.core.count.call(null,inst_22454__$1);var inst_22456 = cljs.core.reset_BANG_.call(null,dctr,inst_22455);var inst_22461 = cljs.core.seq.call(null,inst_22454__$1);var inst_22462 = inst_22461;var inst_22463 = null;var inst_22464 = 0;var inst_22465 = 0;var state_22526__$1 = (function (){var statearr_22543 = state_22526;(statearr_22543[10] = inst_22462);
(statearr_22543[20] = inst_22456);
(statearr_22543[11] = inst_22465);
(statearr_22543[12] = inst_22464);
(statearr_22543[13] = inst_22463);
(statearr_22543[19] = inst_22454__$1);
return statearr_22543;
})();var statearr_22544_22624 = state_22526__$1;(statearr_22544_22624[2] = null);
(statearr_22544_22624[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22527 === 38))
{var inst_22505 = (state_22526[2]);var state_22526__$1 = state_22526;var statearr_22545_22625 = state_22526__$1;(statearr_22545_22625[2] = inst_22505);
(statearr_22545_22625[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22527 === 7))
{var inst_22522 = (state_22526[2]);var state_22526__$1 = state_22526;var statearr_22546_22626 = state_22526__$1;(statearr_22546_22626[2] = inst_22522);
(statearr_22546_22626[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22527 === 39))
{var inst_22483 = (state_22526[9]);var inst_22501 = (state_22526[2]);var inst_22502 = cljs.core.next.call(null,inst_22483);var inst_22462 = inst_22502;var inst_22463 = null;var inst_22464 = 0;var inst_22465 = 0;var state_22526__$1 = (function (){var statearr_22547 = state_22526;(statearr_22547[10] = inst_22462);
(statearr_22547[21] = inst_22501);
(statearr_22547[11] = inst_22465);
(statearr_22547[12] = inst_22464);
(statearr_22547[13] = inst_22463);
return statearr_22547;
})();var statearr_22548_22627 = state_22526__$1;(statearr_22548_22627[2] = null);
(statearr_22548_22627[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22527 === 8))
{var inst_22406 = (state_22526[14]);var inst_22405 = (state_22526[15]);var inst_22408 = (inst_22406 < inst_22405);var inst_22409 = inst_22408;var state_22526__$1 = state_22526;if(cljs.core.truth_(inst_22409))
{var statearr_22549_22628 = state_22526__$1;(statearr_22549_22628[1] = 10);
} else
{var statearr_22550_22629 = state_22526__$1;(statearr_22550_22629[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22527 === 40))
{var inst_22492 = (state_22526[18]);var inst_22493 = (state_22526[2]);var inst_22494 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_22495 = cljs.core.async.untap_STAR_.call(null,m,inst_22492);var state_22526__$1 = (function (){var statearr_22551 = state_22526;(statearr_22551[22] = inst_22494);
(statearr_22551[23] = inst_22493);
return statearr_22551;
})();var statearr_22552_22630 = state_22526__$1;(statearr_22552_22630[2] = inst_22495);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22526__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22527 === 9))
{var inst_22451 = (state_22526[2]);var state_22526__$1 = state_22526;var statearr_22553_22631 = state_22526__$1;(statearr_22553_22631[2] = inst_22451);
(statearr_22553_22631[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22527 === 41))
{var inst_22394 = (state_22526[8]);var inst_22492 = (state_22526[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_22526,40,Object,null,39);var inst_22499 = cljs.core.async.put_BANG_.call(null,inst_22492,inst_22394,done);var state_22526__$1 = state_22526;var statearr_22554_22632 = state_22526__$1;(statearr_22554_22632[2] = inst_22499);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22526__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22527 === 10))
{var inst_22406 = (state_22526[14]);var inst_22404 = (state_22526[17]);var inst_22412 = cljs.core._nth.call(null,inst_22404,inst_22406);var inst_22413 = cljs.core.nth.call(null,inst_22412,0,null);var inst_22414 = cljs.core.nth.call(null,inst_22412,1,null);var state_22526__$1 = (function (){var statearr_22555 = state_22526;(statearr_22555[24] = inst_22413);
return statearr_22555;
})();if(cljs.core.truth_(inst_22414))
{var statearr_22556_22633 = state_22526__$1;(statearr_22556_22633[1] = 13);
} else
{var statearr_22557_22634 = state_22526__$1;(statearr_22557_22634[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22527 === 42))
{var state_22526__$1 = state_22526;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22526__$1,45,dchan);
} else
{if((state_val_22527 === 11))
{var inst_22423 = (state_22526[25]);var inst_22403 = (state_22526[16]);var inst_22423__$1 = cljs.core.seq.call(null,inst_22403);var state_22526__$1 = (function (){var statearr_22558 = state_22526;(statearr_22558[25] = inst_22423__$1);
return statearr_22558;
})();if(inst_22423__$1)
{var statearr_22559_22635 = state_22526__$1;(statearr_22559_22635[1] = 16);
} else
{var statearr_22560_22636 = state_22526__$1;(statearr_22560_22636[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22527 === 43))
{var state_22526__$1 = state_22526;var statearr_22561_22637 = state_22526__$1;(statearr_22561_22637[2] = null);
(statearr_22561_22637[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22527 === 12))
{var inst_22449 = (state_22526[2]);var state_22526__$1 = state_22526;var statearr_22562_22638 = state_22526__$1;(statearr_22562_22638[2] = inst_22449);
(statearr_22562_22638[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22527 === 44))
{var inst_22519 = (state_22526[2]);var state_22526__$1 = (function (){var statearr_22563 = state_22526;(statearr_22563[26] = inst_22519);
return statearr_22563;
})();var statearr_22564_22639 = state_22526__$1;(statearr_22564_22639[2] = null);
(statearr_22564_22639[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22527 === 13))
{var inst_22413 = (state_22526[24]);var inst_22416 = cljs.core.async.close_BANG_.call(null,inst_22413);var state_22526__$1 = state_22526;var statearr_22565_22640 = state_22526__$1;(statearr_22565_22640[2] = inst_22416);
(statearr_22565_22640[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22527 === 45))
{var inst_22516 = (state_22526[2]);var state_22526__$1 = state_22526;var statearr_22569_22641 = state_22526__$1;(statearr_22569_22641[2] = inst_22516);
(statearr_22569_22641[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22527 === 14))
{var state_22526__$1 = state_22526;var statearr_22570_22642 = state_22526__$1;(statearr_22570_22642[2] = null);
(statearr_22570_22642[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22527 === 15))
{var inst_22406 = (state_22526[14]);var inst_22405 = (state_22526[15]);var inst_22403 = (state_22526[16]);var inst_22404 = (state_22526[17]);var inst_22419 = (state_22526[2]);var inst_22420 = (inst_22406 + 1);var tmp22566 = inst_22405;var tmp22567 = inst_22403;var tmp22568 = inst_22404;var inst_22403__$1 = tmp22567;var inst_22404__$1 = tmp22568;var inst_22405__$1 = tmp22566;var inst_22406__$1 = inst_22420;var state_22526__$1 = (function (){var statearr_22571 = state_22526;(statearr_22571[14] = inst_22406__$1);
(statearr_22571[15] = inst_22405__$1);
(statearr_22571[27] = inst_22419);
(statearr_22571[16] = inst_22403__$1);
(statearr_22571[17] = inst_22404__$1);
return statearr_22571;
})();var statearr_22572_22643 = state_22526__$1;(statearr_22572_22643[2] = null);
(statearr_22572_22643[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22527 === 16))
{var inst_22423 = (state_22526[25]);var inst_22425 = cljs.core.chunked_seq_QMARK_.call(null,inst_22423);var state_22526__$1 = state_22526;if(inst_22425)
{var statearr_22573_22644 = state_22526__$1;(statearr_22573_22644[1] = 19);
} else
{var statearr_22574_22645 = state_22526__$1;(statearr_22574_22645[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22527 === 17))
{var state_22526__$1 = state_22526;var statearr_22575_22646 = state_22526__$1;(statearr_22575_22646[2] = null);
(statearr_22575_22646[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22527 === 18))
{var inst_22447 = (state_22526[2]);var state_22526__$1 = state_22526;var statearr_22576_22647 = state_22526__$1;(statearr_22576_22647[2] = inst_22447);
(statearr_22576_22647[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22527 === 19))
{var inst_22423 = (state_22526[25]);var inst_22427 = cljs.core.chunk_first.call(null,inst_22423);var inst_22428 = cljs.core.chunk_rest.call(null,inst_22423);var inst_22429 = cljs.core.count.call(null,inst_22427);var inst_22403 = inst_22428;var inst_22404 = inst_22427;var inst_22405 = inst_22429;var inst_22406 = 0;var state_22526__$1 = (function (){var statearr_22577 = state_22526;(statearr_22577[14] = inst_22406);
(statearr_22577[15] = inst_22405);
(statearr_22577[16] = inst_22403);
(statearr_22577[17] = inst_22404);
return statearr_22577;
})();var statearr_22578_22648 = state_22526__$1;(statearr_22578_22648[2] = null);
(statearr_22578_22648[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22527 === 20))
{var inst_22423 = (state_22526[25]);var inst_22433 = cljs.core.first.call(null,inst_22423);var inst_22434 = cljs.core.nth.call(null,inst_22433,0,null);var inst_22435 = cljs.core.nth.call(null,inst_22433,1,null);var state_22526__$1 = (function (){var statearr_22579 = state_22526;(statearr_22579[28] = inst_22434);
return statearr_22579;
})();if(cljs.core.truth_(inst_22435))
{var statearr_22580_22649 = state_22526__$1;(statearr_22580_22649[1] = 22);
} else
{var statearr_22581_22650 = state_22526__$1;(statearr_22581_22650[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22527 === 21))
{var inst_22444 = (state_22526[2]);var state_22526__$1 = state_22526;var statearr_22582_22651 = state_22526__$1;(statearr_22582_22651[2] = inst_22444);
(statearr_22582_22651[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22527 === 22))
{var inst_22434 = (state_22526[28]);var inst_22437 = cljs.core.async.close_BANG_.call(null,inst_22434);var state_22526__$1 = state_22526;var statearr_22583_22652 = state_22526__$1;(statearr_22583_22652[2] = inst_22437);
(statearr_22583_22652[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22527 === 23))
{var state_22526__$1 = state_22526;var statearr_22584_22653 = state_22526__$1;(statearr_22584_22653[2] = null);
(statearr_22584_22653[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22527 === 24))
{var inst_22423 = (state_22526[25]);var inst_22440 = (state_22526[2]);var inst_22441 = cljs.core.next.call(null,inst_22423);var inst_22403 = inst_22441;var inst_22404 = null;var inst_22405 = 0;var inst_22406 = 0;var state_22526__$1 = (function (){var statearr_22585 = state_22526;(statearr_22585[14] = inst_22406);
(statearr_22585[15] = inst_22405);
(statearr_22585[29] = inst_22440);
(statearr_22585[16] = inst_22403);
(statearr_22585[17] = inst_22404);
return statearr_22585;
})();var statearr_22586_22654 = state_22526__$1;(statearr_22586_22654[2] = null);
(statearr_22586_22654[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22527 === 25))
{var inst_22465 = (state_22526[11]);var inst_22464 = (state_22526[12]);var inst_22467 = (inst_22465 < inst_22464);var inst_22468 = inst_22467;var state_22526__$1 = state_22526;if(cljs.core.truth_(inst_22468))
{var statearr_22587_22655 = state_22526__$1;(statearr_22587_22655[1] = 27);
} else
{var statearr_22588_22656 = state_22526__$1;(statearr_22588_22656[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22527 === 26))
{var inst_22454 = (state_22526[19]);var inst_22512 = (state_22526[2]);var inst_22513 = cljs.core.seq.call(null,inst_22454);var state_22526__$1 = (function (){var statearr_22589 = state_22526;(statearr_22589[30] = inst_22512);
return statearr_22589;
})();if(inst_22513)
{var statearr_22590_22657 = state_22526__$1;(statearr_22590_22657[1] = 42);
} else
{var statearr_22591_22658 = state_22526__$1;(statearr_22591_22658[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22527 === 27))
{var inst_22465 = (state_22526[11]);var inst_22463 = (state_22526[13]);var inst_22470 = cljs.core._nth.call(null,inst_22463,inst_22465);var state_22526__$1 = (function (){var statearr_22592 = state_22526;(statearr_22592[7] = inst_22470);
return statearr_22592;
})();var statearr_22593_22659 = state_22526__$1;(statearr_22593_22659[2] = null);
(statearr_22593_22659[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22527 === 28))
{var inst_22462 = (state_22526[10]);var inst_22483 = (state_22526[9]);var inst_22483__$1 = cljs.core.seq.call(null,inst_22462);var state_22526__$1 = (function (){var statearr_22597 = state_22526;(statearr_22597[9] = inst_22483__$1);
return statearr_22597;
})();if(inst_22483__$1)
{var statearr_22598_22660 = state_22526__$1;(statearr_22598_22660[1] = 33);
} else
{var statearr_22599_22661 = state_22526__$1;(statearr_22599_22661[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22527 === 29))
{var inst_22510 = (state_22526[2]);var state_22526__$1 = state_22526;var statearr_22600_22662 = state_22526__$1;(statearr_22600_22662[2] = inst_22510);
(statearr_22600_22662[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22527 === 30))
{var inst_22462 = (state_22526[10]);var inst_22465 = (state_22526[11]);var inst_22464 = (state_22526[12]);var inst_22463 = (state_22526[13]);var inst_22479 = (state_22526[2]);var inst_22480 = (inst_22465 + 1);var tmp22594 = inst_22462;var tmp22595 = inst_22464;var tmp22596 = inst_22463;var inst_22462__$1 = tmp22594;var inst_22463__$1 = tmp22596;var inst_22464__$1 = tmp22595;var inst_22465__$1 = inst_22480;var state_22526__$1 = (function (){var statearr_22601 = state_22526;(statearr_22601[10] = inst_22462__$1);
(statearr_22601[11] = inst_22465__$1);
(statearr_22601[12] = inst_22464__$1);
(statearr_22601[13] = inst_22463__$1);
(statearr_22601[31] = inst_22479);
return statearr_22601;
})();var statearr_22602_22663 = state_22526__$1;(statearr_22602_22663[2] = null);
(statearr_22602_22663[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22527 === 31))
{var inst_22470 = (state_22526[7]);var inst_22471 = (state_22526[2]);var inst_22472 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_22473 = cljs.core.async.untap_STAR_.call(null,m,inst_22470);var state_22526__$1 = (function (){var statearr_22603 = state_22526;(statearr_22603[32] = inst_22472);
(statearr_22603[33] = inst_22471);
return statearr_22603;
})();var statearr_22604_22664 = state_22526__$1;(statearr_22604_22664[2] = inst_22473);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22526__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__11485__auto__){
return (function() {
var state_machine__11486__auto__ = null;
var state_machine__11486__auto____0 = (function (){var statearr_22608 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_22608[0] = state_machine__11486__auto__);
(statearr_22608[1] = 1);
return statearr_22608;
});
var state_machine__11486__auto____1 = (function (state_22526){while(true){
var ret_value__11487__auto__ = (function (){try{while(true){
var result__11488__auto__ = switch__11485__auto__.call(null,state_22526);if(cljs.core.keyword_identical_QMARK_.call(null,result__11488__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__11488__auto__;
}
break;
}
}catch (e22609){if((e22609 instanceof Object))
{var ex__11489__auto__ = e22609;var statearr_22610_22665 = state_22526;(statearr_22610_22665[5] = ex__11489__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22526);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e22609;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11487__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__22666 = state_22526;
state_22526 = G__22666;
continue;
}
} else
{return ret_value__11487__auto__;
}
break;
}
});
state_machine__11486__auto__ = function(state_22526){
switch(arguments.length){
case 0:
return state_machine__11486__auto____0.call(this);
case 1:
return state_machine__11486__auto____1.call(this,state_22526);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11486__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11486__auto____0;
state_machine__11486__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11486__auto____1;
return state_machine__11486__auto__;
})()
;})(switch__11485__auto__))
})();var state__11502__auto__ = (function (){var statearr_22611 = f__11501__auto__.call(null);(statearr_22611[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11500__auto___22612);
return statearr_22611;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11502__auto__);
}));
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj22668 = {};return obj22668;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__9373__auto__ = m;if(and__9373__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__9373__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__10006__auto__ = (((m == null))?null:m);return (function (){var or__9385__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__10006__auto__)]);if(or__9385__auto__)
{return or__9385__auto__;
} else
{var or__9385__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__9385__auto____$1)
{return or__9385__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__9373__auto__ = m;if(and__9373__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__9373__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__10006__auto__ = (((m == null))?null:m);return (function (){var or__9385__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__10006__auto__)]);if(or__9385__auto__)
{return or__9385__auto__;
} else
{var or__9385__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__9385__auto____$1)
{return or__9385__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__9373__auto__ = m;if(and__9373__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__9373__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__10006__auto__ = (((m == null))?null:m);return (function (){var or__9385__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__10006__auto__)]);if(or__9385__auto__)
{return or__9385__auto__;
} else
{var or__9385__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__9385__auto____$1)
{return or__9385__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__9373__auto__ = m;if(and__9373__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__9373__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__10006__auto__ = (((m == null))?null:m);return (function (){var or__9385__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__10006__auto__)]);if(or__9385__auto__)
{return or__9385__auto__;
} else
{var or__9385__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__9385__auto____$1)
{return or__9385__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__9373__auto__ = m;if(and__9373__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__9373__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__10006__auto__ = (((m == null))?null:m);return (function (){var or__9385__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__10006__auto__)]);if(or__9385__auto__)
{return or__9385__auto__;
} else
{var or__9385__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__9385__auto____$1)
{return or__9385__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",1120344424),null,new cljs.core.Keyword(null,"mute","mute",1017267595),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",1017440337));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",1017440337),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",1120344424),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1123523302),solos,new cljs.core.Keyword(null,"mutes","mutes",1118168300),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595),chs),new cljs.core.Keyword(null,"reads","reads",1122290959),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",1120344424))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t22778 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t22778 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta22779){
this.pick = pick;
this.out = out;
this.attrs = attrs;
this.cs = cs;
this.calc_state = calc_state;
this.solo_modes = solo_modes;
this.mix = mix;
this.changed = changed;
this.change = change;
this.solo_mode = solo_mode;
this.meta22779 = meta22779;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22778.cljs$lang$type = true;
cljs.core.async.t22778.cljs$lang$ctorStr = "cljs.core.async/t22778";
cljs.core.async.t22778.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__9947__auto__,writer__9948__auto__,opt__9949__auto__){return cljs.core._write.call(null,writer__9948__auto__,"cljs.core.async/t22778");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t22778.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t22778.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t22778.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t22778.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t22778.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t22778.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t22778.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t22778.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t22778.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_22780){var self__ = this;
var _22780__$1 = this;return self__.meta22779;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t22778.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_22780,meta22779__$1){var self__ = this;
var _22780__$1 = this;return (new cljs.core.async.t22778(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta22779__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t22778 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t22778(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta22779){return (new cljs.core.async.t22778(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta22779));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t22778(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__11500__auto___22887 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__11501__auto__ = (function (){var switch__11485__auto__ = (function (state_22845){var state_val_22846 = (state_22845[1]);if((state_val_22846 === 1))
{var inst_22784 = (state_22845[7]);var inst_22784__$1 = calc_state.call(null);var inst_22785 = cljs.core.seq_QMARK_.call(null,inst_22784__$1);var state_22845__$1 = (function (){var statearr_22847 = state_22845;(statearr_22847[7] = inst_22784__$1);
return statearr_22847;
})();if(inst_22785)
{var statearr_22848_22888 = state_22845__$1;(statearr_22848_22888[1] = 2);
} else
{var statearr_22849_22889 = state_22845__$1;(statearr_22849_22889[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22846 === 2))
{var inst_22784 = (state_22845[7]);var inst_22787 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22784);var state_22845__$1 = state_22845;var statearr_22850_22890 = state_22845__$1;(statearr_22850_22890[2] = inst_22787);
(statearr_22850_22890[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22846 === 3))
{var inst_22784 = (state_22845[7]);var state_22845__$1 = state_22845;var statearr_22851_22891 = state_22845__$1;(statearr_22851_22891[2] = inst_22784);
(statearr_22851_22891[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22846 === 4))
{var inst_22784 = (state_22845[7]);var inst_22790 = (state_22845[2]);var inst_22791 = cljs.core.get.call(null,inst_22790,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_22792 = cljs.core.get.call(null,inst_22790,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_22793 = cljs.core.get.call(null,inst_22790,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_22794 = inst_22784;var state_22845__$1 = (function (){var statearr_22852 = state_22845;(statearr_22852[8] = inst_22794);
(statearr_22852[9] = inst_22793);
(statearr_22852[10] = inst_22791);
(statearr_22852[11] = inst_22792);
return statearr_22852;
})();var statearr_22853_22892 = state_22845__$1;(statearr_22853_22892[2] = null);
(statearr_22853_22892[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22846 === 5))
{var inst_22794 = (state_22845[8]);var inst_22797 = cljs.core.seq_QMARK_.call(null,inst_22794);var state_22845__$1 = state_22845;if(inst_22797)
{var statearr_22854_22893 = state_22845__$1;(statearr_22854_22893[1] = 7);
} else
{var statearr_22855_22894 = state_22845__$1;(statearr_22855_22894[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22846 === 6))
{var inst_22843 = (state_22845[2]);var state_22845__$1 = state_22845;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22845__$1,inst_22843);
} else
{if((state_val_22846 === 7))
{var inst_22794 = (state_22845[8]);var inst_22799 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22794);var state_22845__$1 = state_22845;var statearr_22856_22895 = state_22845__$1;(statearr_22856_22895[2] = inst_22799);
(statearr_22856_22895[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22846 === 8))
{var inst_22794 = (state_22845[8]);var state_22845__$1 = state_22845;var statearr_22857_22896 = state_22845__$1;(statearr_22857_22896[2] = inst_22794);
(statearr_22857_22896[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22846 === 9))
{var inst_22802 = (state_22845[12]);var inst_22802__$1 = (state_22845[2]);var inst_22803 = cljs.core.get.call(null,inst_22802__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_22804 = cljs.core.get.call(null,inst_22802__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_22805 = cljs.core.get.call(null,inst_22802__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_22845__$1 = (function (){var statearr_22858 = state_22845;(statearr_22858[12] = inst_22802__$1);
(statearr_22858[13] = inst_22804);
(statearr_22858[14] = inst_22805);
return statearr_22858;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_22845__$1,10,inst_22803);
} else
{if((state_val_22846 === 10))
{var inst_22809 = (state_22845[15]);var inst_22810 = (state_22845[16]);var inst_22808 = (state_22845[2]);var inst_22809__$1 = cljs.core.nth.call(null,inst_22808,0,null);var inst_22810__$1 = cljs.core.nth.call(null,inst_22808,1,null);var inst_22811 = (inst_22809__$1 == null);var inst_22812 = cljs.core._EQ_.call(null,inst_22810__$1,change);var inst_22813 = (inst_22811) || (inst_22812);var state_22845__$1 = (function (){var statearr_22859 = state_22845;(statearr_22859[15] = inst_22809__$1);
(statearr_22859[16] = inst_22810__$1);
return statearr_22859;
})();if(cljs.core.truth_(inst_22813))
{var statearr_22860_22897 = state_22845__$1;(statearr_22860_22897[1] = 11);
} else
{var statearr_22861_22898 = state_22845__$1;(statearr_22861_22898[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22846 === 11))
{var inst_22809 = (state_22845[15]);var inst_22815 = (inst_22809 == null);var state_22845__$1 = state_22845;if(cljs.core.truth_(inst_22815))
{var statearr_22862_22899 = state_22845__$1;(statearr_22862_22899[1] = 14);
} else
{var statearr_22863_22900 = state_22845__$1;(statearr_22863_22900[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22846 === 12))
{var inst_22810 = (state_22845[16]);var inst_22805 = (state_22845[14]);var inst_22824 = (state_22845[17]);var inst_22824__$1 = inst_22805.call(null,inst_22810);var state_22845__$1 = (function (){var statearr_22864 = state_22845;(statearr_22864[17] = inst_22824__$1);
return statearr_22864;
})();if(cljs.core.truth_(inst_22824__$1))
{var statearr_22865_22901 = state_22845__$1;(statearr_22865_22901[1] = 17);
} else
{var statearr_22866_22902 = state_22845__$1;(statearr_22866_22902[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22846 === 13))
{var inst_22841 = (state_22845[2]);var state_22845__$1 = state_22845;var statearr_22867_22903 = state_22845__$1;(statearr_22867_22903[2] = inst_22841);
(statearr_22867_22903[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22846 === 14))
{var inst_22810 = (state_22845[16]);var inst_22817 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_22810);var state_22845__$1 = state_22845;var statearr_22868_22904 = state_22845__$1;(statearr_22868_22904[2] = inst_22817);
(statearr_22868_22904[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22846 === 15))
{var state_22845__$1 = state_22845;var statearr_22869_22905 = state_22845__$1;(statearr_22869_22905[2] = null);
(statearr_22869_22905[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22846 === 16))
{var inst_22820 = (state_22845[2]);var inst_22821 = calc_state.call(null);var inst_22794 = inst_22821;var state_22845__$1 = (function (){var statearr_22870 = state_22845;(statearr_22870[18] = inst_22820);
(statearr_22870[8] = inst_22794);
return statearr_22870;
})();var statearr_22871_22906 = state_22845__$1;(statearr_22871_22906[2] = null);
(statearr_22871_22906[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22846 === 17))
{var inst_22824 = (state_22845[17]);var state_22845__$1 = state_22845;var statearr_22872_22907 = state_22845__$1;(statearr_22872_22907[2] = inst_22824);
(statearr_22872_22907[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22846 === 18))
{var inst_22804 = (state_22845[13]);var inst_22810 = (state_22845[16]);var inst_22805 = (state_22845[14]);var inst_22827 = cljs.core.empty_QMARK_.call(null,inst_22805);var inst_22828 = inst_22804.call(null,inst_22810);var inst_22829 = cljs.core.not.call(null,inst_22828);var inst_22830 = (inst_22827) && (inst_22829);var state_22845__$1 = state_22845;var statearr_22873_22908 = state_22845__$1;(statearr_22873_22908[2] = inst_22830);
(statearr_22873_22908[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22846 === 19))
{var inst_22832 = (state_22845[2]);var state_22845__$1 = state_22845;if(cljs.core.truth_(inst_22832))
{var statearr_22874_22909 = state_22845__$1;(statearr_22874_22909[1] = 20);
} else
{var statearr_22875_22910 = state_22845__$1;(statearr_22875_22910[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22846 === 20))
{var inst_22809 = (state_22845[15]);var state_22845__$1 = state_22845;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22845__$1,23,out,inst_22809);
} else
{if((state_val_22846 === 21))
{var state_22845__$1 = state_22845;var statearr_22876_22911 = state_22845__$1;(statearr_22876_22911[2] = null);
(statearr_22876_22911[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22846 === 22))
{var inst_22802 = (state_22845[12]);var inst_22838 = (state_22845[2]);var inst_22794 = inst_22802;var state_22845__$1 = (function (){var statearr_22877 = state_22845;(statearr_22877[8] = inst_22794);
(statearr_22877[19] = inst_22838);
return statearr_22877;
})();var statearr_22878_22912 = state_22845__$1;(statearr_22878_22912[2] = null);
(statearr_22878_22912[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22846 === 23))
{var inst_22835 = (state_22845[2]);var state_22845__$1 = state_22845;var statearr_22879_22913 = state_22845__$1;(statearr_22879_22913[2] = inst_22835);
(statearr_22879_22913[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__11485__auto__){
return (function() {
var state_machine__11486__auto__ = null;
var state_machine__11486__auto____0 = (function (){var statearr_22883 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_22883[0] = state_machine__11486__auto__);
(statearr_22883[1] = 1);
return statearr_22883;
});
var state_machine__11486__auto____1 = (function (state_22845){while(true){
var ret_value__11487__auto__ = (function (){try{while(true){
var result__11488__auto__ = switch__11485__auto__.call(null,state_22845);if(cljs.core.keyword_identical_QMARK_.call(null,result__11488__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__11488__auto__;
}
break;
}
}catch (e22884){if((e22884 instanceof Object))
{var ex__11489__auto__ = e22884;var statearr_22885_22914 = state_22845;(statearr_22885_22914[5] = ex__11489__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22845);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e22884;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11487__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__22915 = state_22845;
state_22845 = G__22915;
continue;
}
} else
{return ret_value__11487__auto__;
}
break;
}
});
state_machine__11486__auto__ = function(state_22845){
switch(arguments.length){
case 0:
return state_machine__11486__auto____0.call(this);
case 1:
return state_machine__11486__auto____1.call(this,state_22845);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11486__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11486__auto____0;
state_machine__11486__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11486__auto____1;
return state_machine__11486__auto__;
})()
;})(switch__11485__auto__))
})();var state__11502__auto__ = (function (){var statearr_22886 = f__11501__auto__.call(null);(statearr_22886[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11500__auto___22887);
return statearr_22886;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11502__auto__);
}));
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj22917 = {};return obj22917;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__9373__auto__ = p;if(and__9373__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__9373__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__10006__auto__ = (((p == null))?null:p);return (function (){var or__9385__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__10006__auto__)]);if(or__9385__auto__)
{return or__9385__auto__;
} else
{var or__9385__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__9385__auto____$1)
{return or__9385__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__9373__auto__ = p;if(and__9373__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__9373__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__10006__auto__ = (((p == null))?null:p);return (function (){var or__9385__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__10006__auto__)]);if(or__9385__auto__)
{return or__9385__auto__;
} else
{var or__9385__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__9385__auto____$1)
{return or__9385__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__9373__auto__ = p;if(and__9373__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__9373__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__10006__auto__ = (((p == null))?null:p);return (function (){var or__9385__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__10006__auto__)]);if(or__9385__auto__)
{return or__9385__auto__;
} else
{var or__9385__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__9385__auto____$1)
{return or__9385__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__9373__auto__ = p;if(and__9373__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__9373__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__10006__auto__ = (((p == null))?null:p);return (function (){var or__9385__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__10006__auto__)]);if(or__9385__auto__)
{return or__9385__auto__;
} else
{var or__9385__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__9385__auto____$1)
{return or__9385__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__9385__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__9385__auto__))
{return or__9385__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__9385__auto__,mults){
return (function (p1__22918_SHARP_){if(cljs.core.truth_(p1__22918_SHARP_.call(null,topic)))
{return p1__22918_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__22918_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__9385__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t23043 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23043 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta23044){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta23044 = meta23044;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23043.cljs$lang$type = true;
cljs.core.async.t23043.cljs$lang$ctorStr = "cljs.core.async/t23043";
cljs.core.async.t23043.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__9947__auto__,writer__9948__auto__,opt__9949__auto__){return cljs.core._write.call(null,writer__9948__auto__,"cljs.core.async/t23043");
});})(mults,ensure_mult))
;
cljs.core.async.t23043.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t23043.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t23043.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t23043.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t23043.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t23043.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t23043.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t23043.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_23045){var self__ = this;
var _23045__$1 = this;return self__.meta23044;
});})(mults,ensure_mult))
;
cljs.core.async.t23043.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_23045,meta23044__$1){var self__ = this;
var _23045__$1 = this;return (new cljs.core.async.t23043(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta23044__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t23043 = ((function (mults,ensure_mult){
return (function __GT_t23043(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta23044){return (new cljs.core.async.t23043(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta23044));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t23043(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__11500__auto___23167 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__11501__auto__ = (function (){var switch__11485__auto__ = (function (state_23119){var state_val_23120 = (state_23119[1]);if((state_val_23120 === 1))
{var state_23119__$1 = state_23119;var statearr_23121_23168 = state_23119__$1;(statearr_23121_23168[2] = null);
(statearr_23121_23168[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23120 === 2))
{var state_23119__$1 = state_23119;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23119__$1,4,ch);
} else
{if((state_val_23120 === 3))
{var inst_23117 = (state_23119[2]);var state_23119__$1 = state_23119;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23119__$1,inst_23117);
} else
{if((state_val_23120 === 4))
{var inst_23048 = (state_23119[7]);var inst_23048__$1 = (state_23119[2]);var inst_23049 = (inst_23048__$1 == null);var state_23119__$1 = (function (){var statearr_23122 = state_23119;(statearr_23122[7] = inst_23048__$1);
return statearr_23122;
})();if(cljs.core.truth_(inst_23049))
{var statearr_23123_23169 = state_23119__$1;(statearr_23123_23169[1] = 5);
} else
{var statearr_23124_23170 = state_23119__$1;(statearr_23124_23170[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23120 === 5))
{var inst_23055 = cljs.core.deref.call(null,mults);var inst_23056 = cljs.core.vals.call(null,inst_23055);var inst_23057 = cljs.core.seq.call(null,inst_23056);var inst_23058 = inst_23057;var inst_23059 = null;var inst_23060 = 0;var inst_23061 = 0;var state_23119__$1 = (function (){var statearr_23125 = state_23119;(statearr_23125[8] = inst_23061);
(statearr_23125[9] = inst_23060);
(statearr_23125[10] = inst_23059);
(statearr_23125[11] = inst_23058);
return statearr_23125;
})();var statearr_23126_23171 = state_23119__$1;(statearr_23126_23171[2] = null);
(statearr_23126_23171[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23120 === 6))
{var inst_23048 = (state_23119[7]);var inst_23098 = (state_23119[12]);var inst_23096 = (state_23119[13]);var inst_23096__$1 = topic_fn.call(null,inst_23048);var inst_23097 = cljs.core.deref.call(null,mults);var inst_23098__$1 = cljs.core.get.call(null,inst_23097,inst_23096__$1);var state_23119__$1 = (function (){var statearr_23127 = state_23119;(statearr_23127[12] = inst_23098__$1);
(statearr_23127[13] = inst_23096__$1);
return statearr_23127;
})();if(cljs.core.truth_(inst_23098__$1))
{var statearr_23128_23172 = state_23119__$1;(statearr_23128_23172[1] = 19);
} else
{var statearr_23129_23173 = state_23119__$1;(statearr_23129_23173[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23120 === 7))
{var inst_23115 = (state_23119[2]);var state_23119__$1 = state_23119;var statearr_23130_23174 = state_23119__$1;(statearr_23130_23174[2] = inst_23115);
(statearr_23130_23174[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23120 === 8))
{var inst_23061 = (state_23119[8]);var inst_23060 = (state_23119[9]);var inst_23063 = (inst_23061 < inst_23060);var inst_23064 = inst_23063;var state_23119__$1 = state_23119;if(cljs.core.truth_(inst_23064))
{var statearr_23134_23175 = state_23119__$1;(statearr_23134_23175[1] = 10);
} else
{var statearr_23135_23176 = state_23119__$1;(statearr_23135_23176[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23120 === 9))
{var inst_23094 = (state_23119[2]);var state_23119__$1 = state_23119;var statearr_23136_23177 = state_23119__$1;(statearr_23136_23177[2] = inst_23094);
(statearr_23136_23177[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23120 === 10))
{var inst_23061 = (state_23119[8]);var inst_23060 = (state_23119[9]);var inst_23059 = (state_23119[10]);var inst_23058 = (state_23119[11]);var inst_23066 = cljs.core._nth.call(null,inst_23059,inst_23061);var inst_23067 = cljs.core.async.muxch_STAR_.call(null,inst_23066);var inst_23068 = cljs.core.async.close_BANG_.call(null,inst_23067);var inst_23069 = (inst_23061 + 1);var tmp23131 = inst_23060;var tmp23132 = inst_23059;var tmp23133 = inst_23058;var inst_23058__$1 = tmp23133;var inst_23059__$1 = tmp23132;var inst_23060__$1 = tmp23131;var inst_23061__$1 = inst_23069;var state_23119__$1 = (function (){var statearr_23137 = state_23119;(statearr_23137[14] = inst_23068);
(statearr_23137[8] = inst_23061__$1);
(statearr_23137[9] = inst_23060__$1);
(statearr_23137[10] = inst_23059__$1);
(statearr_23137[11] = inst_23058__$1);
return statearr_23137;
})();var statearr_23138_23178 = state_23119__$1;(statearr_23138_23178[2] = null);
(statearr_23138_23178[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23120 === 11))
{var inst_23072 = (state_23119[15]);var inst_23058 = (state_23119[11]);var inst_23072__$1 = cljs.core.seq.call(null,inst_23058);var state_23119__$1 = (function (){var statearr_23139 = state_23119;(statearr_23139[15] = inst_23072__$1);
return statearr_23139;
})();if(inst_23072__$1)
{var statearr_23140_23179 = state_23119__$1;(statearr_23140_23179[1] = 13);
} else
{var statearr_23141_23180 = state_23119__$1;(statearr_23141_23180[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23120 === 12))
{var inst_23092 = (state_23119[2]);var state_23119__$1 = state_23119;var statearr_23142_23181 = state_23119__$1;(statearr_23142_23181[2] = inst_23092);
(statearr_23142_23181[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23120 === 13))
{var inst_23072 = (state_23119[15]);var inst_23074 = cljs.core.chunked_seq_QMARK_.call(null,inst_23072);var state_23119__$1 = state_23119;if(inst_23074)
{var statearr_23143_23182 = state_23119__$1;(statearr_23143_23182[1] = 16);
} else
{var statearr_23144_23183 = state_23119__$1;(statearr_23144_23183[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23120 === 14))
{var state_23119__$1 = state_23119;var statearr_23145_23184 = state_23119__$1;(statearr_23145_23184[2] = null);
(statearr_23145_23184[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23120 === 15))
{var inst_23090 = (state_23119[2]);var state_23119__$1 = state_23119;var statearr_23146_23185 = state_23119__$1;(statearr_23146_23185[2] = inst_23090);
(statearr_23146_23185[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23120 === 16))
{var inst_23072 = (state_23119[15]);var inst_23076 = cljs.core.chunk_first.call(null,inst_23072);var inst_23077 = cljs.core.chunk_rest.call(null,inst_23072);var inst_23078 = cljs.core.count.call(null,inst_23076);var inst_23058 = inst_23077;var inst_23059 = inst_23076;var inst_23060 = inst_23078;var inst_23061 = 0;var state_23119__$1 = (function (){var statearr_23147 = state_23119;(statearr_23147[8] = inst_23061);
(statearr_23147[9] = inst_23060);
(statearr_23147[10] = inst_23059);
(statearr_23147[11] = inst_23058);
return statearr_23147;
})();var statearr_23148_23186 = state_23119__$1;(statearr_23148_23186[2] = null);
(statearr_23148_23186[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23120 === 17))
{var inst_23072 = (state_23119[15]);var inst_23081 = cljs.core.first.call(null,inst_23072);var inst_23082 = cljs.core.async.muxch_STAR_.call(null,inst_23081);var inst_23083 = cljs.core.async.close_BANG_.call(null,inst_23082);var inst_23084 = cljs.core.next.call(null,inst_23072);var inst_23058 = inst_23084;var inst_23059 = null;var inst_23060 = 0;var inst_23061 = 0;var state_23119__$1 = (function (){var statearr_23149 = state_23119;(statearr_23149[16] = inst_23083);
(statearr_23149[8] = inst_23061);
(statearr_23149[9] = inst_23060);
(statearr_23149[10] = inst_23059);
(statearr_23149[11] = inst_23058);
return statearr_23149;
})();var statearr_23150_23187 = state_23119__$1;(statearr_23150_23187[2] = null);
(statearr_23150_23187[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23120 === 18))
{var inst_23087 = (state_23119[2]);var state_23119__$1 = state_23119;var statearr_23151_23188 = state_23119__$1;(statearr_23151_23188[2] = inst_23087);
(statearr_23151_23188[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23120 === 19))
{var state_23119__$1 = state_23119;var statearr_23152_23189 = state_23119__$1;(statearr_23152_23189[2] = null);
(statearr_23152_23189[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23120 === 20))
{var state_23119__$1 = state_23119;var statearr_23153_23190 = state_23119__$1;(statearr_23153_23190[2] = null);
(statearr_23153_23190[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23120 === 21))
{var inst_23112 = (state_23119[2]);var state_23119__$1 = (function (){var statearr_23154 = state_23119;(statearr_23154[17] = inst_23112);
return statearr_23154;
})();var statearr_23155_23191 = state_23119__$1;(statearr_23155_23191[2] = null);
(statearr_23155_23191[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23120 === 22))
{var inst_23109 = (state_23119[2]);var state_23119__$1 = state_23119;var statearr_23156_23192 = state_23119__$1;(statearr_23156_23192[2] = inst_23109);
(statearr_23156_23192[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23120 === 23))
{var inst_23096 = (state_23119[13]);var inst_23100 = (state_23119[2]);var inst_23101 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_23096);var state_23119__$1 = (function (){var statearr_23157 = state_23119;(statearr_23157[18] = inst_23100);
return statearr_23157;
})();var statearr_23158_23193 = state_23119__$1;(statearr_23158_23193[2] = inst_23101);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23119__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23120 === 24))
{var inst_23048 = (state_23119[7]);var inst_23098 = (state_23119[12]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_23119,23,Object,null,22);var inst_23105 = cljs.core.async.muxch_STAR_.call(null,inst_23098);var state_23119__$1 = state_23119;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23119__$1,25,inst_23105,inst_23048);
} else
{if((state_val_23120 === 25))
{var inst_23107 = (state_23119[2]);var state_23119__$1 = state_23119;var statearr_23159_23194 = state_23119__$1;(statearr_23159_23194[2] = inst_23107);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23119__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__11485__auto__){
return (function() {
var state_machine__11486__auto__ = null;
var state_machine__11486__auto____0 = (function (){var statearr_23163 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23163[0] = state_machine__11486__auto__);
(statearr_23163[1] = 1);
return statearr_23163;
});
var state_machine__11486__auto____1 = (function (state_23119){while(true){
var ret_value__11487__auto__ = (function (){try{while(true){
var result__11488__auto__ = switch__11485__auto__.call(null,state_23119);if(cljs.core.keyword_identical_QMARK_.call(null,result__11488__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__11488__auto__;
}
break;
}
}catch (e23164){if((e23164 instanceof Object))
{var ex__11489__auto__ = e23164;var statearr_23165_23195 = state_23119;(statearr_23165_23195[5] = ex__11489__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23119);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e23164;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11487__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__23196 = state_23119;
state_23119 = G__23196;
continue;
}
} else
{return ret_value__11487__auto__;
}
break;
}
});
state_machine__11486__auto__ = function(state_23119){
switch(arguments.length){
case 0:
return state_machine__11486__auto____0.call(this);
case 1:
return state_machine__11486__auto____1.call(this,state_23119);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11486__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11486__auto____0;
state_machine__11486__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11486__auto____1;
return state_machine__11486__auto__;
})()
;})(switch__11485__auto__))
})();var state__11502__auto__ = (function (){var statearr_23166 = f__11501__auto__.call(null);(statearr_23166[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11500__auto___23167);
return statearr_23166;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11502__auto__);
}));
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice(0));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__11500__auto___23333 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__11501__auto__ = (function (){var switch__11485__auto__ = (function (state_23303){var state_val_23304 = (state_23303[1]);if((state_val_23304 === 1))
{var state_23303__$1 = state_23303;var statearr_23305_23334 = state_23303__$1;(statearr_23305_23334[2] = null);
(statearr_23305_23334[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23304 === 2))
{var inst_23266 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_23267 = 0;var state_23303__$1 = (function (){var statearr_23306 = state_23303;(statearr_23306[7] = inst_23267);
(statearr_23306[8] = inst_23266);
return statearr_23306;
})();var statearr_23307_23335 = state_23303__$1;(statearr_23307_23335[2] = null);
(statearr_23307_23335[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23304 === 3))
{var inst_23301 = (state_23303[2]);var state_23303__$1 = state_23303;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23303__$1,inst_23301);
} else
{if((state_val_23304 === 4))
{var inst_23267 = (state_23303[7]);var inst_23269 = (inst_23267 < cnt);var state_23303__$1 = state_23303;if(cljs.core.truth_(inst_23269))
{var statearr_23308_23336 = state_23303__$1;(statearr_23308_23336[1] = 6);
} else
{var statearr_23309_23337 = state_23303__$1;(statearr_23309_23337[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23304 === 5))
{var inst_23287 = (state_23303[2]);var state_23303__$1 = (function (){var statearr_23310 = state_23303;(statearr_23310[9] = inst_23287);
return statearr_23310;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23303__$1,12,dchan);
} else
{if((state_val_23304 === 6))
{var state_23303__$1 = state_23303;var statearr_23311_23338 = state_23303__$1;(statearr_23311_23338[2] = null);
(statearr_23311_23338[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23304 === 7))
{var state_23303__$1 = state_23303;var statearr_23312_23339 = state_23303__$1;(statearr_23312_23339[2] = null);
(statearr_23312_23339[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23304 === 8))
{var inst_23285 = (state_23303[2]);var state_23303__$1 = state_23303;var statearr_23313_23340 = state_23303__$1;(statearr_23313_23340[2] = inst_23285);
(statearr_23313_23340[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23304 === 9))
{var inst_23267 = (state_23303[7]);var inst_23280 = (state_23303[2]);var inst_23281 = (inst_23267 + 1);var inst_23267__$1 = inst_23281;var state_23303__$1 = (function (){var statearr_23314 = state_23303;(statearr_23314[10] = inst_23280);
(statearr_23314[7] = inst_23267__$1);
return statearr_23314;
})();var statearr_23315_23341 = state_23303__$1;(statearr_23315_23341[2] = null);
(statearr_23315_23341[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23304 === 10))
{var inst_23271 = (state_23303[2]);var inst_23272 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_23303__$1 = (function (){var statearr_23316 = state_23303;(statearr_23316[11] = inst_23271);
return statearr_23316;
})();var statearr_23317_23342 = state_23303__$1;(statearr_23317_23342[2] = inst_23272);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23303__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23304 === 11))
{var inst_23267 = (state_23303[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_23303,10,Object,null,9);var inst_23276 = chs__$1.call(null,inst_23267);var inst_23277 = done.call(null,inst_23267);var inst_23278 = cljs.core.async.take_BANG_.call(null,inst_23276,inst_23277);var state_23303__$1 = state_23303;var statearr_23318_23343 = state_23303__$1;(statearr_23318_23343[2] = inst_23278);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23303__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23304 === 12))
{var inst_23289 = (state_23303[12]);var inst_23289__$1 = (state_23303[2]);var inst_23290 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_23289__$1);var state_23303__$1 = (function (){var statearr_23319 = state_23303;(statearr_23319[12] = inst_23289__$1);
return statearr_23319;
})();if(cljs.core.truth_(inst_23290))
{var statearr_23320_23344 = state_23303__$1;(statearr_23320_23344[1] = 13);
} else
{var statearr_23321_23345 = state_23303__$1;(statearr_23321_23345[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23304 === 13))
{var inst_23292 = cljs.core.async.close_BANG_.call(null,out);var state_23303__$1 = state_23303;var statearr_23322_23346 = state_23303__$1;(statearr_23322_23346[2] = inst_23292);
(statearr_23322_23346[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23304 === 14))
{var inst_23289 = (state_23303[12]);var inst_23294 = cljs.core.apply.call(null,f,inst_23289);var state_23303__$1 = state_23303;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23303__$1,16,out,inst_23294);
} else
{if((state_val_23304 === 15))
{var inst_23299 = (state_23303[2]);var state_23303__$1 = state_23303;var statearr_23323_23347 = state_23303__$1;(statearr_23323_23347[2] = inst_23299);
(statearr_23323_23347[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23304 === 16))
{var inst_23296 = (state_23303[2]);var state_23303__$1 = (function (){var statearr_23324 = state_23303;(statearr_23324[13] = inst_23296);
return statearr_23324;
})();var statearr_23325_23348 = state_23303__$1;(statearr_23325_23348[2] = null);
(statearr_23325_23348[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__11485__auto__){
return (function() {
var state_machine__11486__auto__ = null;
var state_machine__11486__auto____0 = (function (){var statearr_23329 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23329[0] = state_machine__11486__auto__);
(statearr_23329[1] = 1);
return statearr_23329;
});
var state_machine__11486__auto____1 = (function (state_23303){while(true){
var ret_value__11487__auto__ = (function (){try{while(true){
var result__11488__auto__ = switch__11485__auto__.call(null,state_23303);if(cljs.core.keyword_identical_QMARK_.call(null,result__11488__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__11488__auto__;
}
break;
}
}catch (e23330){if((e23330 instanceof Object))
{var ex__11489__auto__ = e23330;var statearr_23331_23349 = state_23303;(statearr_23331_23349[5] = ex__11489__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23303);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e23330;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11487__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__23350 = state_23303;
state_23303 = G__23350;
continue;
}
} else
{return ret_value__11487__auto__;
}
break;
}
});
state_machine__11486__auto__ = function(state_23303){
switch(arguments.length){
case 0:
return state_machine__11486__auto____0.call(this);
case 1:
return state_machine__11486__auto____1.call(this,state_23303);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11486__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11486__auto____0;
state_machine__11486__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11486__auto____1;
return state_machine__11486__auto__;
})()
;})(switch__11485__auto__))
})();var state__11502__auto__ = (function (){var statearr_23332 = f__11501__auto__.call(null);(statearr_23332[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11500__auto___23333);
return statearr_23332;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11502__auto__);
}));
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11500__auto___23458 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__11501__auto__ = (function (){var switch__11485__auto__ = (function (state_23434){var state_val_23435 = (state_23434[1]);if((state_val_23435 === 1))
{var inst_23405 = cljs.core.vec.call(null,chs);var inst_23406 = inst_23405;var state_23434__$1 = (function (){var statearr_23436 = state_23434;(statearr_23436[7] = inst_23406);
return statearr_23436;
})();var statearr_23437_23459 = state_23434__$1;(statearr_23437_23459[2] = null);
(statearr_23437_23459[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23435 === 2))
{var inst_23406 = (state_23434[7]);var inst_23408 = cljs.core.count.call(null,inst_23406);var inst_23409 = (inst_23408 > 0);var state_23434__$1 = state_23434;if(cljs.core.truth_(inst_23409))
{var statearr_23438_23460 = state_23434__$1;(statearr_23438_23460[1] = 4);
} else
{var statearr_23439_23461 = state_23434__$1;(statearr_23439_23461[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23435 === 3))
{var inst_23432 = (state_23434[2]);var state_23434__$1 = state_23434;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23434__$1,inst_23432);
} else
{if((state_val_23435 === 4))
{var inst_23406 = (state_23434[7]);var state_23434__$1 = state_23434;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_23434__$1,7,inst_23406);
} else
{if((state_val_23435 === 5))
{var inst_23428 = cljs.core.async.close_BANG_.call(null,out);var state_23434__$1 = state_23434;var statearr_23440_23462 = state_23434__$1;(statearr_23440_23462[2] = inst_23428);
(statearr_23440_23462[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23435 === 6))
{var inst_23430 = (state_23434[2]);var state_23434__$1 = state_23434;var statearr_23441_23463 = state_23434__$1;(statearr_23441_23463[2] = inst_23430);
(statearr_23441_23463[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23435 === 7))
{var inst_23413 = (state_23434[8]);var inst_23414 = (state_23434[9]);var inst_23413__$1 = (state_23434[2]);var inst_23414__$1 = cljs.core.nth.call(null,inst_23413__$1,0,null);var inst_23415 = cljs.core.nth.call(null,inst_23413__$1,1,null);var inst_23416 = (inst_23414__$1 == null);var state_23434__$1 = (function (){var statearr_23442 = state_23434;(statearr_23442[8] = inst_23413__$1);
(statearr_23442[9] = inst_23414__$1);
(statearr_23442[10] = inst_23415);
return statearr_23442;
})();if(cljs.core.truth_(inst_23416))
{var statearr_23443_23464 = state_23434__$1;(statearr_23443_23464[1] = 8);
} else
{var statearr_23444_23465 = state_23434__$1;(statearr_23444_23465[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23435 === 8))
{var inst_23406 = (state_23434[7]);var inst_23413 = (state_23434[8]);var inst_23414 = (state_23434[9]);var inst_23415 = (state_23434[10]);var inst_23418 = (function (){var c = inst_23415;var v = inst_23414;var vec__23411 = inst_23413;var cs = inst_23406;return ((function (c,v,vec__23411,cs,inst_23406,inst_23413,inst_23414,inst_23415,state_val_23435){
return (function (p1__23351_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__23351_SHARP_);
});
;})(c,v,vec__23411,cs,inst_23406,inst_23413,inst_23414,inst_23415,state_val_23435))
})();var inst_23419 = cljs.core.filterv.call(null,inst_23418,inst_23406);var inst_23406__$1 = inst_23419;var state_23434__$1 = (function (){var statearr_23445 = state_23434;(statearr_23445[7] = inst_23406__$1);
return statearr_23445;
})();var statearr_23446_23466 = state_23434__$1;(statearr_23446_23466[2] = null);
(statearr_23446_23466[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23435 === 9))
{var inst_23414 = (state_23434[9]);var state_23434__$1 = state_23434;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23434__$1,11,out,inst_23414);
} else
{if((state_val_23435 === 10))
{var inst_23426 = (state_23434[2]);var state_23434__$1 = state_23434;var statearr_23448_23467 = state_23434__$1;(statearr_23448_23467[2] = inst_23426);
(statearr_23448_23467[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23435 === 11))
{var inst_23406 = (state_23434[7]);var inst_23423 = (state_23434[2]);var tmp23447 = inst_23406;var inst_23406__$1 = tmp23447;var state_23434__$1 = (function (){var statearr_23449 = state_23434;(statearr_23449[7] = inst_23406__$1);
(statearr_23449[11] = inst_23423);
return statearr_23449;
})();var statearr_23450_23468 = state_23434__$1;(statearr_23450_23468[2] = null);
(statearr_23450_23468[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__11485__auto__){
return (function() {
var state_machine__11486__auto__ = null;
var state_machine__11486__auto____0 = (function (){var statearr_23454 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23454[0] = state_machine__11486__auto__);
(statearr_23454[1] = 1);
return statearr_23454;
});
var state_machine__11486__auto____1 = (function (state_23434){while(true){
var ret_value__11487__auto__ = (function (){try{while(true){
var result__11488__auto__ = switch__11485__auto__.call(null,state_23434);if(cljs.core.keyword_identical_QMARK_.call(null,result__11488__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__11488__auto__;
}
break;
}
}catch (e23455){if((e23455 instanceof Object))
{var ex__11489__auto__ = e23455;var statearr_23456_23469 = state_23434;(statearr_23456_23469[5] = ex__11489__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23434);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e23455;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11487__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__23470 = state_23434;
state_23434 = G__23470;
continue;
}
} else
{return ret_value__11487__auto__;
}
break;
}
});
state_machine__11486__auto__ = function(state_23434){
switch(arguments.length){
case 0:
return state_machine__11486__auto____0.call(this);
case 1:
return state_machine__11486__auto____1.call(this,state_23434);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11486__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11486__auto____0;
state_machine__11486__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11486__auto____1;
return state_machine__11486__auto__;
})()
;})(switch__11485__auto__))
})();var state__11502__auto__ = (function (){var statearr_23457 = f__11501__auto__.call(null);(statearr_23457[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11500__auto___23458);
return statearr_23457;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11502__auto__);
}));
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11500__auto___23563 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__11501__auto__ = (function (){var switch__11485__auto__ = (function (state_23540){var state_val_23541 = (state_23540[1]);if((state_val_23541 === 1))
{var inst_23517 = 0;var state_23540__$1 = (function (){var statearr_23542 = state_23540;(statearr_23542[7] = inst_23517);
return statearr_23542;
})();var statearr_23543_23564 = state_23540__$1;(statearr_23543_23564[2] = null);
(statearr_23543_23564[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23541 === 2))
{var inst_23517 = (state_23540[7]);var inst_23519 = (inst_23517 < n);var state_23540__$1 = state_23540;if(cljs.core.truth_(inst_23519))
{var statearr_23544_23565 = state_23540__$1;(statearr_23544_23565[1] = 4);
} else
{var statearr_23545_23566 = state_23540__$1;(statearr_23545_23566[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23541 === 3))
{var inst_23537 = (state_23540[2]);var inst_23538 = cljs.core.async.close_BANG_.call(null,out);var state_23540__$1 = (function (){var statearr_23546 = state_23540;(statearr_23546[8] = inst_23537);
return statearr_23546;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23540__$1,inst_23538);
} else
{if((state_val_23541 === 4))
{var state_23540__$1 = state_23540;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23540__$1,7,ch);
} else
{if((state_val_23541 === 5))
{var state_23540__$1 = state_23540;var statearr_23547_23567 = state_23540__$1;(statearr_23547_23567[2] = null);
(statearr_23547_23567[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23541 === 6))
{var inst_23535 = (state_23540[2]);var state_23540__$1 = state_23540;var statearr_23548_23568 = state_23540__$1;(statearr_23548_23568[2] = inst_23535);
(statearr_23548_23568[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23541 === 7))
{var inst_23522 = (state_23540[9]);var inst_23522__$1 = (state_23540[2]);var inst_23523 = (inst_23522__$1 == null);var inst_23524 = cljs.core.not.call(null,inst_23523);var state_23540__$1 = (function (){var statearr_23549 = state_23540;(statearr_23549[9] = inst_23522__$1);
return statearr_23549;
})();if(inst_23524)
{var statearr_23550_23569 = state_23540__$1;(statearr_23550_23569[1] = 8);
} else
{var statearr_23551_23570 = state_23540__$1;(statearr_23551_23570[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23541 === 8))
{var inst_23522 = (state_23540[9]);var state_23540__$1 = state_23540;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23540__$1,11,out,inst_23522);
} else
{if((state_val_23541 === 9))
{var state_23540__$1 = state_23540;var statearr_23552_23571 = state_23540__$1;(statearr_23552_23571[2] = null);
(statearr_23552_23571[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23541 === 10))
{var inst_23532 = (state_23540[2]);var state_23540__$1 = state_23540;var statearr_23553_23572 = state_23540__$1;(statearr_23553_23572[2] = inst_23532);
(statearr_23553_23572[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23541 === 11))
{var inst_23517 = (state_23540[7]);var inst_23527 = (state_23540[2]);var inst_23528 = (inst_23517 + 1);var inst_23517__$1 = inst_23528;var state_23540__$1 = (function (){var statearr_23554 = state_23540;(statearr_23554[10] = inst_23527);
(statearr_23554[7] = inst_23517__$1);
return statearr_23554;
})();var statearr_23555_23573 = state_23540__$1;(statearr_23555_23573[2] = null);
(statearr_23555_23573[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__11485__auto__){
return (function() {
var state_machine__11486__auto__ = null;
var state_machine__11486__auto____0 = (function (){var statearr_23559 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_23559[0] = state_machine__11486__auto__);
(statearr_23559[1] = 1);
return statearr_23559;
});
var state_machine__11486__auto____1 = (function (state_23540){while(true){
var ret_value__11487__auto__ = (function (){try{while(true){
var result__11488__auto__ = switch__11485__auto__.call(null,state_23540);if(cljs.core.keyword_identical_QMARK_.call(null,result__11488__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__11488__auto__;
}
break;
}
}catch (e23560){if((e23560 instanceof Object))
{var ex__11489__auto__ = e23560;var statearr_23561_23574 = state_23540;(statearr_23561_23574[5] = ex__11489__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23540);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e23560;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11487__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__23575 = state_23540;
state_23540 = G__23575;
continue;
}
} else
{return ret_value__11487__auto__;
}
break;
}
});
state_machine__11486__auto__ = function(state_23540){
switch(arguments.length){
case 0:
return state_machine__11486__auto____0.call(this);
case 1:
return state_machine__11486__auto____1.call(this,state_23540);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11486__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11486__auto____0;
state_machine__11486__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11486__auto____1;
return state_machine__11486__auto__;
})()
;})(switch__11485__auto__))
})();var state__11502__auto__ = (function (){var statearr_23562 = f__11501__auto__.call(null);(statearr_23562[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11500__auto___23563);
return statearr_23562;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11502__auto__);
}));
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11500__auto___23672 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__11501__auto__ = (function (){var switch__11485__auto__ = (function (state_23647){var state_val_23648 = (state_23647[1]);if((state_val_23648 === 1))
{var inst_23624 = null;var state_23647__$1 = (function (){var statearr_23649 = state_23647;(statearr_23649[7] = inst_23624);
return statearr_23649;
})();var statearr_23650_23673 = state_23647__$1;(statearr_23650_23673[2] = null);
(statearr_23650_23673[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23648 === 2))
{var state_23647__$1 = state_23647;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23647__$1,4,ch);
} else
{if((state_val_23648 === 3))
{var inst_23644 = (state_23647[2]);var inst_23645 = cljs.core.async.close_BANG_.call(null,out);var state_23647__$1 = (function (){var statearr_23651 = state_23647;(statearr_23651[8] = inst_23644);
return statearr_23651;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23647__$1,inst_23645);
} else
{if((state_val_23648 === 4))
{var inst_23627 = (state_23647[9]);var inst_23627__$1 = (state_23647[2]);var inst_23628 = (inst_23627__$1 == null);var inst_23629 = cljs.core.not.call(null,inst_23628);var state_23647__$1 = (function (){var statearr_23652 = state_23647;(statearr_23652[9] = inst_23627__$1);
return statearr_23652;
})();if(inst_23629)
{var statearr_23653_23674 = state_23647__$1;(statearr_23653_23674[1] = 5);
} else
{var statearr_23654_23675 = state_23647__$1;(statearr_23654_23675[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23648 === 5))
{var inst_23624 = (state_23647[7]);var inst_23627 = (state_23647[9]);var inst_23631 = cljs.core._EQ_.call(null,inst_23627,inst_23624);var state_23647__$1 = state_23647;if(inst_23631)
{var statearr_23655_23676 = state_23647__$1;(statearr_23655_23676[1] = 8);
} else
{var statearr_23656_23677 = state_23647__$1;(statearr_23656_23677[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23648 === 6))
{var state_23647__$1 = state_23647;var statearr_23658_23678 = state_23647__$1;(statearr_23658_23678[2] = null);
(statearr_23658_23678[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23648 === 7))
{var inst_23642 = (state_23647[2]);var state_23647__$1 = state_23647;var statearr_23659_23679 = state_23647__$1;(statearr_23659_23679[2] = inst_23642);
(statearr_23659_23679[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23648 === 8))
{var inst_23624 = (state_23647[7]);var tmp23657 = inst_23624;var inst_23624__$1 = tmp23657;var state_23647__$1 = (function (){var statearr_23660 = state_23647;(statearr_23660[7] = inst_23624__$1);
return statearr_23660;
})();var statearr_23661_23680 = state_23647__$1;(statearr_23661_23680[2] = null);
(statearr_23661_23680[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23648 === 9))
{var inst_23627 = (state_23647[9]);var state_23647__$1 = state_23647;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23647__$1,11,out,inst_23627);
} else
{if((state_val_23648 === 10))
{var inst_23639 = (state_23647[2]);var state_23647__$1 = state_23647;var statearr_23662_23681 = state_23647__$1;(statearr_23662_23681[2] = inst_23639);
(statearr_23662_23681[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23648 === 11))
{var inst_23627 = (state_23647[9]);var inst_23636 = (state_23647[2]);var inst_23624 = inst_23627;var state_23647__$1 = (function (){var statearr_23663 = state_23647;(statearr_23663[10] = inst_23636);
(statearr_23663[7] = inst_23624);
return statearr_23663;
})();var statearr_23664_23682 = state_23647__$1;(statearr_23664_23682[2] = null);
(statearr_23664_23682[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__11485__auto__){
return (function() {
var state_machine__11486__auto__ = null;
var state_machine__11486__auto____0 = (function (){var statearr_23668 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_23668[0] = state_machine__11486__auto__);
(statearr_23668[1] = 1);
return statearr_23668;
});
var state_machine__11486__auto____1 = (function (state_23647){while(true){
var ret_value__11487__auto__ = (function (){try{while(true){
var result__11488__auto__ = switch__11485__auto__.call(null,state_23647);if(cljs.core.keyword_identical_QMARK_.call(null,result__11488__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__11488__auto__;
}
break;
}
}catch (e23669){if((e23669 instanceof Object))
{var ex__11489__auto__ = e23669;var statearr_23670_23683 = state_23647;(statearr_23670_23683[5] = ex__11489__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23647);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e23669;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11487__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__23684 = state_23647;
state_23647 = G__23684;
continue;
}
} else
{return ret_value__11487__auto__;
}
break;
}
});
state_machine__11486__auto__ = function(state_23647){
switch(arguments.length){
case 0:
return state_machine__11486__auto____0.call(this);
case 1:
return state_machine__11486__auto____1.call(this,state_23647);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11486__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11486__auto____0;
state_machine__11486__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11486__auto____1;
return state_machine__11486__auto__;
})()
;})(switch__11485__auto__))
})();var state__11502__auto__ = (function (){var statearr_23671 = f__11501__auto__.call(null);(statearr_23671[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11500__auto___23672);
return statearr_23671;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11502__auto__);
}));
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11500__auto___23819 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__11501__auto__ = (function (){var switch__11485__auto__ = (function (state_23789){var state_val_23790 = (state_23789[1]);if((state_val_23790 === 1))
{var inst_23752 = (new Array(n));var inst_23753 = inst_23752;var inst_23754 = 0;var state_23789__$1 = (function (){var statearr_23791 = state_23789;(statearr_23791[7] = inst_23754);
(statearr_23791[8] = inst_23753);
return statearr_23791;
})();var statearr_23792_23820 = state_23789__$1;(statearr_23792_23820[2] = null);
(statearr_23792_23820[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23790 === 2))
{var state_23789__$1 = state_23789;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23789__$1,4,ch);
} else
{if((state_val_23790 === 3))
{var inst_23787 = (state_23789[2]);var state_23789__$1 = state_23789;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23789__$1,inst_23787);
} else
{if((state_val_23790 === 4))
{var inst_23757 = (state_23789[9]);var inst_23757__$1 = (state_23789[2]);var inst_23758 = (inst_23757__$1 == null);var inst_23759 = cljs.core.not.call(null,inst_23758);var state_23789__$1 = (function (){var statearr_23793 = state_23789;(statearr_23793[9] = inst_23757__$1);
return statearr_23793;
})();if(inst_23759)
{var statearr_23794_23821 = state_23789__$1;(statearr_23794_23821[1] = 5);
} else
{var statearr_23795_23822 = state_23789__$1;(statearr_23795_23822[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23790 === 5))
{var inst_23754 = (state_23789[7]);var inst_23762 = (state_23789[10]);var inst_23757 = (state_23789[9]);var inst_23753 = (state_23789[8]);var inst_23761 = (inst_23753[inst_23754] = inst_23757);var inst_23762__$1 = (inst_23754 + 1);var inst_23763 = (inst_23762__$1 < n);var state_23789__$1 = (function (){var statearr_23796 = state_23789;(statearr_23796[10] = inst_23762__$1);
(statearr_23796[11] = inst_23761);
return statearr_23796;
})();if(cljs.core.truth_(inst_23763))
{var statearr_23797_23823 = state_23789__$1;(statearr_23797_23823[1] = 8);
} else
{var statearr_23798_23824 = state_23789__$1;(statearr_23798_23824[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23790 === 6))
{var inst_23754 = (state_23789[7]);var inst_23775 = (inst_23754 > 0);var state_23789__$1 = state_23789;if(cljs.core.truth_(inst_23775))
{var statearr_23800_23825 = state_23789__$1;(statearr_23800_23825[1] = 12);
} else
{var statearr_23801_23826 = state_23789__$1;(statearr_23801_23826[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23790 === 7))
{var inst_23785 = (state_23789[2]);var state_23789__$1 = state_23789;var statearr_23802_23827 = state_23789__$1;(statearr_23802_23827[2] = inst_23785);
(statearr_23802_23827[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23790 === 8))
{var inst_23762 = (state_23789[10]);var inst_23753 = (state_23789[8]);var tmp23799 = inst_23753;var inst_23753__$1 = tmp23799;var inst_23754 = inst_23762;var state_23789__$1 = (function (){var statearr_23803 = state_23789;(statearr_23803[7] = inst_23754);
(statearr_23803[8] = inst_23753__$1);
return statearr_23803;
})();var statearr_23804_23828 = state_23789__$1;(statearr_23804_23828[2] = null);
(statearr_23804_23828[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23790 === 9))
{var inst_23753 = (state_23789[8]);var inst_23767 = cljs.core.vec.call(null,inst_23753);var state_23789__$1 = state_23789;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23789__$1,11,out,inst_23767);
} else
{if((state_val_23790 === 10))
{var inst_23773 = (state_23789[2]);var state_23789__$1 = state_23789;var statearr_23805_23829 = state_23789__$1;(statearr_23805_23829[2] = inst_23773);
(statearr_23805_23829[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23790 === 11))
{var inst_23769 = (state_23789[2]);var inst_23770 = (new Array(n));var inst_23753 = inst_23770;var inst_23754 = 0;var state_23789__$1 = (function (){var statearr_23806 = state_23789;(statearr_23806[12] = inst_23769);
(statearr_23806[7] = inst_23754);
(statearr_23806[8] = inst_23753);
return statearr_23806;
})();var statearr_23807_23830 = state_23789__$1;(statearr_23807_23830[2] = null);
(statearr_23807_23830[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23790 === 12))
{var inst_23753 = (state_23789[8]);var inst_23777 = cljs.core.vec.call(null,inst_23753);var state_23789__$1 = state_23789;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23789__$1,15,out,inst_23777);
} else
{if((state_val_23790 === 13))
{var state_23789__$1 = state_23789;var statearr_23808_23831 = state_23789__$1;(statearr_23808_23831[2] = null);
(statearr_23808_23831[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23790 === 14))
{var inst_23782 = (state_23789[2]);var inst_23783 = cljs.core.async.close_BANG_.call(null,out);var state_23789__$1 = (function (){var statearr_23809 = state_23789;(statearr_23809[13] = inst_23782);
return statearr_23809;
})();var statearr_23810_23832 = state_23789__$1;(statearr_23810_23832[2] = inst_23783);
(statearr_23810_23832[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23790 === 15))
{var inst_23779 = (state_23789[2]);var state_23789__$1 = state_23789;var statearr_23811_23833 = state_23789__$1;(statearr_23811_23833[2] = inst_23779);
(statearr_23811_23833[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__11485__auto__){
return (function() {
var state_machine__11486__auto__ = null;
var state_machine__11486__auto____0 = (function (){var statearr_23815 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23815[0] = state_machine__11486__auto__);
(statearr_23815[1] = 1);
return statearr_23815;
});
var state_machine__11486__auto____1 = (function (state_23789){while(true){
var ret_value__11487__auto__ = (function (){try{while(true){
var result__11488__auto__ = switch__11485__auto__.call(null,state_23789);if(cljs.core.keyword_identical_QMARK_.call(null,result__11488__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__11488__auto__;
}
break;
}
}catch (e23816){if((e23816 instanceof Object))
{var ex__11489__auto__ = e23816;var statearr_23817_23834 = state_23789;(statearr_23817_23834[5] = ex__11489__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23789);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e23816;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11487__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__23835 = state_23789;
state_23789 = G__23835;
continue;
}
} else
{return ret_value__11487__auto__;
}
break;
}
});
state_machine__11486__auto__ = function(state_23789){
switch(arguments.length){
case 0:
return state_machine__11486__auto____0.call(this);
case 1:
return state_machine__11486__auto____1.call(this,state_23789);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11486__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11486__auto____0;
state_machine__11486__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11486__auto____1;
return state_machine__11486__auto__;
})()
;})(switch__11485__auto__))
})();var state__11502__auto__ = (function (){var statearr_23818 = f__11501__auto__.call(null);(statearr_23818[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11500__auto___23819);
return statearr_23818;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11502__auto__);
}));
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11500__auto___23978 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__11501__auto__ = (function (){var switch__11485__auto__ = (function (state_23948){var state_val_23949 = (state_23948[1]);if((state_val_23949 === 1))
{var inst_23907 = [];var inst_23908 = inst_23907;var inst_23909 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_23948__$1 = (function (){var statearr_23950 = state_23948;(statearr_23950[7] = inst_23908);
(statearr_23950[8] = inst_23909);
return statearr_23950;
})();var statearr_23951_23979 = state_23948__$1;(statearr_23951_23979[2] = null);
(statearr_23951_23979[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23949 === 2))
{var state_23948__$1 = state_23948;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23948__$1,4,ch);
} else
{if((state_val_23949 === 3))
{var inst_23946 = (state_23948[2]);var state_23948__$1 = state_23948;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23948__$1,inst_23946);
} else
{if((state_val_23949 === 4))
{var inst_23912 = (state_23948[9]);var inst_23912__$1 = (state_23948[2]);var inst_23913 = (inst_23912__$1 == null);var inst_23914 = cljs.core.not.call(null,inst_23913);var state_23948__$1 = (function (){var statearr_23952 = state_23948;(statearr_23952[9] = inst_23912__$1);
return statearr_23952;
})();if(inst_23914)
{var statearr_23953_23980 = state_23948__$1;(statearr_23953_23980[1] = 5);
} else
{var statearr_23954_23981 = state_23948__$1;(statearr_23954_23981[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23949 === 5))
{var inst_23912 = (state_23948[9]);var inst_23909 = (state_23948[8]);var inst_23916 = (state_23948[10]);var inst_23916__$1 = f.call(null,inst_23912);var inst_23917 = cljs.core._EQ_.call(null,inst_23916__$1,inst_23909);var inst_23918 = cljs.core.keyword_identical_QMARK_.call(null,inst_23909,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_23919 = (inst_23917) || (inst_23918);var state_23948__$1 = (function (){var statearr_23955 = state_23948;(statearr_23955[10] = inst_23916__$1);
return statearr_23955;
})();if(cljs.core.truth_(inst_23919))
{var statearr_23956_23982 = state_23948__$1;(statearr_23956_23982[1] = 8);
} else
{var statearr_23957_23983 = state_23948__$1;(statearr_23957_23983[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23949 === 6))
{var inst_23908 = (state_23948[7]);var inst_23933 = inst_23908.length;var inst_23934 = (inst_23933 > 0);var state_23948__$1 = state_23948;if(cljs.core.truth_(inst_23934))
{var statearr_23959_23984 = state_23948__$1;(statearr_23959_23984[1] = 12);
} else
{var statearr_23960_23985 = state_23948__$1;(statearr_23960_23985[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23949 === 7))
{var inst_23944 = (state_23948[2]);var state_23948__$1 = state_23948;var statearr_23961_23986 = state_23948__$1;(statearr_23961_23986[2] = inst_23944);
(statearr_23961_23986[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23949 === 8))
{var inst_23908 = (state_23948[7]);var inst_23912 = (state_23948[9]);var inst_23916 = (state_23948[10]);var inst_23921 = inst_23908.push(inst_23912);var tmp23958 = inst_23908;var inst_23908__$1 = tmp23958;var inst_23909 = inst_23916;var state_23948__$1 = (function (){var statearr_23962 = state_23948;(statearr_23962[7] = inst_23908__$1);
(statearr_23962[8] = inst_23909);
(statearr_23962[11] = inst_23921);
return statearr_23962;
})();var statearr_23963_23987 = state_23948__$1;(statearr_23963_23987[2] = null);
(statearr_23963_23987[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23949 === 9))
{var inst_23908 = (state_23948[7]);var inst_23924 = cljs.core.vec.call(null,inst_23908);var state_23948__$1 = state_23948;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23948__$1,11,out,inst_23924);
} else
{if((state_val_23949 === 10))
{var inst_23931 = (state_23948[2]);var state_23948__$1 = state_23948;var statearr_23964_23988 = state_23948__$1;(statearr_23964_23988[2] = inst_23931);
(statearr_23964_23988[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23949 === 11))
{var inst_23912 = (state_23948[9]);var inst_23916 = (state_23948[10]);var inst_23926 = (state_23948[2]);var inst_23927 = [];var inst_23928 = inst_23927.push(inst_23912);var inst_23908 = inst_23927;var inst_23909 = inst_23916;var state_23948__$1 = (function (){var statearr_23965 = state_23948;(statearr_23965[12] = inst_23926);
(statearr_23965[13] = inst_23928);
(statearr_23965[7] = inst_23908);
(statearr_23965[8] = inst_23909);
return statearr_23965;
})();var statearr_23966_23989 = state_23948__$1;(statearr_23966_23989[2] = null);
(statearr_23966_23989[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23949 === 12))
{var inst_23908 = (state_23948[7]);var inst_23936 = cljs.core.vec.call(null,inst_23908);var state_23948__$1 = state_23948;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23948__$1,15,out,inst_23936);
} else
{if((state_val_23949 === 13))
{var state_23948__$1 = state_23948;var statearr_23967_23990 = state_23948__$1;(statearr_23967_23990[2] = null);
(statearr_23967_23990[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23949 === 14))
{var inst_23941 = (state_23948[2]);var inst_23942 = cljs.core.async.close_BANG_.call(null,out);var state_23948__$1 = (function (){var statearr_23968 = state_23948;(statearr_23968[14] = inst_23941);
return statearr_23968;
})();var statearr_23969_23991 = state_23948__$1;(statearr_23969_23991[2] = inst_23942);
(statearr_23969_23991[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23949 === 15))
{var inst_23938 = (state_23948[2]);var state_23948__$1 = state_23948;var statearr_23970_23992 = state_23948__$1;(statearr_23970_23992[2] = inst_23938);
(statearr_23970_23992[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__11485__auto__){
return (function() {
var state_machine__11486__auto__ = null;
var state_machine__11486__auto____0 = (function (){var statearr_23974 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23974[0] = state_machine__11486__auto__);
(statearr_23974[1] = 1);
return statearr_23974;
});
var state_machine__11486__auto____1 = (function (state_23948){while(true){
var ret_value__11487__auto__ = (function (){try{while(true){
var result__11488__auto__ = switch__11485__auto__.call(null,state_23948);if(cljs.core.keyword_identical_QMARK_.call(null,result__11488__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__11488__auto__;
}
break;
}
}catch (e23975){if((e23975 instanceof Object))
{var ex__11489__auto__ = e23975;var statearr_23976_23993 = state_23948;(statearr_23976_23993[5] = ex__11489__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23948);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e23975;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11487__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__23994 = state_23948;
state_23948 = G__23994;
continue;
}
} else
{return ret_value__11487__auto__;
}
break;
}
});
state_machine__11486__auto__ = function(state_23948){
switch(arguments.length){
case 0:
return state_machine__11486__auto____0.call(this);
case 1:
return state_machine__11486__auto____1.call(this,state_23948);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11486__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11486__auto____0;
state_machine__11486__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11486__auto____1;
return state_machine__11486__auto__;
})()
;})(switch__11485__auto__))
})();var state__11502__auto__ = (function (){var statearr_23977 = f__11501__auto__.call(null);(statearr_23977[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11500__auto___23978);
return statearr_23977;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11502__auto__);
}));
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;
