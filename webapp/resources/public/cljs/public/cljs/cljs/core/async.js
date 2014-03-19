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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t15173 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15173 = (function (f,fn_handler,meta15174){
this.f = f;
this.fn_handler = fn_handler;
this.meta15174 = meta15174;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15173.cljs$lang$type = true;
cljs.core.async.t15173.cljs$lang$ctorStr = "cljs.core.async/t15173";
cljs.core.async.t15173.cljs$lang$ctorPrWriter = (function (this__9947__auto__,writer__9948__auto__,opt__9949__auto__){return cljs.core._write.call(null,writer__9948__auto__,"cljs.core.async/t15173");
});
cljs.core.async.t15173.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t15173.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t15173.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t15173.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15175){var self__ = this;
var _15175__$1 = this;return self__.meta15174;
});
cljs.core.async.t15173.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15175,meta15174__$1){var self__ = this;
var _15175__$1 = this;return (new cljs.core.async.t15173(self__.f,self__.fn_handler,meta15174__$1));
});
cljs.core.async.__GT_t15173 = (function __GT_t15173(f__$1,fn_handler__$1,meta15174){return (new cljs.core.async.t15173(f__$1,fn_handler__$1,meta15174));
});
}
return (new cljs.core.async.t15173(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__15177 = buff;if(G__15177)
{var bit__10029__auto__ = null;if(cljs.core.truth_((function (){var or__9385__auto__ = bit__10029__auto__;if(cljs.core.truth_(or__9385__auto__))
{return or__9385__auto__;
} else
{return G__15177.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__15177.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__15177);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__15177);
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
{var val_15178 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_15178);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_15178);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__10227__auto___15179 = n;var x_15180 = 0;while(true){
if((x_15180 < n__10227__auto___15179))
{(a[x_15180] = 0);
{
var G__15181 = (x_15180 + 1);
x_15180 = G__15181;
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
var G__15182 = (i + 1);
i = G__15182;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t15186 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15186 = (function (flag,alt_flag,meta15187){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta15187 = meta15187;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15186.cljs$lang$type = true;
cljs.core.async.t15186.cljs$lang$ctorStr = "cljs.core.async/t15186";
cljs.core.async.t15186.cljs$lang$ctorPrWriter = (function (this__9947__auto__,writer__9948__auto__,opt__9949__auto__){return cljs.core._write.call(null,writer__9948__auto__,"cljs.core.async/t15186");
});
cljs.core.async.t15186.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t15186.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t15186.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t15186.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15188){var self__ = this;
var _15188__$1 = this;return self__.meta15187;
});
cljs.core.async.t15186.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15188,meta15187__$1){var self__ = this;
var _15188__$1 = this;return (new cljs.core.async.t15186(self__.flag,self__.alt_flag,meta15187__$1));
});
cljs.core.async.__GT_t15186 = (function __GT_t15186(flag__$1,alt_flag__$1,meta15187){return (new cljs.core.async.t15186(flag__$1,alt_flag__$1,meta15187));
});
}
return (new cljs.core.async.t15186(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t15192 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15192 = (function (cb,flag,alt_handler,meta15193){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta15193 = meta15193;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15192.cljs$lang$type = true;
cljs.core.async.t15192.cljs$lang$ctorStr = "cljs.core.async/t15192";
cljs.core.async.t15192.cljs$lang$ctorPrWriter = (function (this__9947__auto__,writer__9948__auto__,opt__9949__auto__){return cljs.core._write.call(null,writer__9948__auto__,"cljs.core.async/t15192");
});
cljs.core.async.t15192.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t15192.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t15192.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t15192.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15194){var self__ = this;
var _15194__$1 = this;return self__.meta15193;
});
cljs.core.async.t15192.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15194,meta15193__$1){var self__ = this;
var _15194__$1 = this;return (new cljs.core.async.t15192(self__.cb,self__.flag,self__.alt_handler,meta15193__$1));
});
cljs.core.async.__GT_t15192 = (function __GT_t15192(cb__$1,flag__$1,alt_handler__$1,meta15193){return (new cljs.core.async.t15192(cb__$1,flag__$1,alt_handler__$1,meta15193));
});
}
return (new cljs.core.async.t15192(cb,flag,alt_handler,null));
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
return (function (p1__15195_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15195_SHARP_,port], null));
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
var G__15196 = (i + 1);
i = G__15196;
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
var alts_BANG___delegate = function (ports,p__15197){var map__15199 = p__15197;var map__15199__$1 = ((cljs.core.seq_QMARK_.call(null,map__15199))?cljs.core.apply.call(null,cljs.core.hash_map,map__15199):map__15199);var opts = map__15199__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__15197 = null;if (arguments.length > 1) {
  p__15197 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__15197);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__15200){
var ports = cljs.core.first(arglist__15200);
var p__15197 = cljs.core.rest(arglist__15200);
return alts_BANG___delegate(ports,p__15197);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t15208 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15208 = (function (ch,f,map_LT_,meta15209){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta15209 = meta15209;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15208.cljs$lang$type = true;
cljs.core.async.t15208.cljs$lang$ctorStr = "cljs.core.async/t15208";
cljs.core.async.t15208.cljs$lang$ctorPrWriter = (function (this__9947__auto__,writer__9948__auto__,opt__9949__auto__){return cljs.core._write.call(null,writer__9948__auto__,"cljs.core.async/t15208");
});
cljs.core.async.t15208.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t15208.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t15208.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t15208.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t15211 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15211 = (function (fn1,_,meta15209,ch,f,map_LT_,meta15212){
this.fn1 = fn1;
this._ = _;
this.meta15209 = meta15209;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta15212 = meta15212;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15211.cljs$lang$type = true;
cljs.core.async.t15211.cljs$lang$ctorStr = "cljs.core.async/t15211";
cljs.core.async.t15211.cljs$lang$ctorPrWriter = (function (this__9947__auto__,writer__9948__auto__,opt__9949__auto__){return cljs.core._write.call(null,writer__9948__auto__,"cljs.core.async/t15211");
});
cljs.core.async.t15211.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t15211.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t15211.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t15211.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__15201_SHARP_){return f1.call(null,(((p1__15201_SHARP_ == null))?null:self__.f.call(null,p1__15201_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t15211.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15213){var self__ = this;
var _15213__$1 = this;return self__.meta15212;
});
cljs.core.async.t15211.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15213,meta15212__$1){var self__ = this;
var _15213__$1 = this;return (new cljs.core.async.t15211(self__.fn1,self__._,self__.meta15209,self__.ch,self__.f,self__.map_LT_,meta15212__$1));
});
cljs.core.async.__GT_t15211 = (function __GT_t15211(fn1__$1,___$2,meta15209__$1,ch__$2,f__$2,map_LT___$2,meta15212){return (new cljs.core.async.t15211(fn1__$1,___$2,meta15209__$1,ch__$2,f__$2,map_LT___$2,meta15212));
});
}
return (new cljs.core.async.t15211(fn1,___$1,self__.meta15209,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t15208.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t15208.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t15208.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15210){var self__ = this;
var _15210__$1 = this;return self__.meta15209;
});
cljs.core.async.t15208.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15210,meta15209__$1){var self__ = this;
var _15210__$1 = this;return (new cljs.core.async.t15208(self__.ch,self__.f,self__.map_LT_,meta15209__$1));
});
cljs.core.async.__GT_t15208 = (function __GT_t15208(ch__$1,f__$1,map_LT___$1,meta15209){return (new cljs.core.async.t15208(ch__$1,f__$1,map_LT___$1,meta15209));
});
}
return (new cljs.core.async.t15208(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t15217 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15217 = (function (ch,f,map_GT_,meta15218){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta15218 = meta15218;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15217.cljs$lang$type = true;
cljs.core.async.t15217.cljs$lang$ctorStr = "cljs.core.async/t15217";
cljs.core.async.t15217.cljs$lang$ctorPrWriter = (function (this__9947__auto__,writer__9948__auto__,opt__9949__auto__){return cljs.core._write.call(null,writer__9948__auto__,"cljs.core.async/t15217");
});
cljs.core.async.t15217.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t15217.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t15217.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t15217.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t15217.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t15217.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t15217.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15219){var self__ = this;
var _15219__$1 = this;return self__.meta15218;
});
cljs.core.async.t15217.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15219,meta15218__$1){var self__ = this;
var _15219__$1 = this;return (new cljs.core.async.t15217(self__.ch,self__.f,self__.map_GT_,meta15218__$1));
});
cljs.core.async.__GT_t15217 = (function __GT_t15217(ch__$1,f__$1,map_GT___$1,meta15218){return (new cljs.core.async.t15217(ch__$1,f__$1,map_GT___$1,meta15218));
});
}
return (new cljs.core.async.t15217(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t15223 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15223 = (function (ch,p,filter_GT_,meta15224){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta15224 = meta15224;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15223.cljs$lang$type = true;
cljs.core.async.t15223.cljs$lang$ctorStr = "cljs.core.async/t15223";
cljs.core.async.t15223.cljs$lang$ctorPrWriter = (function (this__9947__auto__,writer__9948__auto__,opt__9949__auto__){return cljs.core._write.call(null,writer__9948__auto__,"cljs.core.async/t15223");
});
cljs.core.async.t15223.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t15223.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t15223.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t15223.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t15223.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t15223.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t15223.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15225){var self__ = this;
var _15225__$1 = this;return self__.meta15224;
});
cljs.core.async.t15223.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15225,meta15224__$1){var self__ = this;
var _15225__$1 = this;return (new cljs.core.async.t15223(self__.ch,self__.p,self__.filter_GT_,meta15224__$1));
});
cljs.core.async.__GT_t15223 = (function __GT_t15223(ch__$1,p__$1,filter_GT___$1,meta15224){return (new cljs.core.async.t15223(ch__$1,p__$1,filter_GT___$1,meta15224));
});
}
return (new cljs.core.async.t15223(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11500__auto___15308 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__11501__auto__ = (function (){var switch__11485__auto__ = (function (state_15287){var state_val_15288 = (state_15287[1]);if((state_val_15288 === 1))
{var state_15287__$1 = state_15287;var statearr_15289_15309 = state_15287__$1;(statearr_15289_15309[2] = null);
(statearr_15289_15309[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15288 === 2))
{var state_15287__$1 = state_15287;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15287__$1,4,ch);
} else
{if((state_val_15288 === 3))
{var inst_15285 = (state_15287[2]);var state_15287__$1 = state_15287;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15287__$1,inst_15285);
} else
{if((state_val_15288 === 4))
{var inst_15269 = (state_15287[7]);var inst_15269__$1 = (state_15287[2]);var inst_15270 = (inst_15269__$1 == null);var state_15287__$1 = (function (){var statearr_15290 = state_15287;(statearr_15290[7] = inst_15269__$1);
return statearr_15290;
})();if(cljs.core.truth_(inst_15270))
{var statearr_15291_15310 = state_15287__$1;(statearr_15291_15310[1] = 5);
} else
{var statearr_15292_15311 = state_15287__$1;(statearr_15292_15311[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15288 === 5))
{var inst_15272 = cljs.core.async.close_BANG_.call(null,out);var state_15287__$1 = state_15287;var statearr_15293_15312 = state_15287__$1;(statearr_15293_15312[2] = inst_15272);
(statearr_15293_15312[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15288 === 6))
{var inst_15269 = (state_15287[7]);var inst_15274 = p.call(null,inst_15269);var state_15287__$1 = state_15287;if(cljs.core.truth_(inst_15274))
{var statearr_15294_15313 = state_15287__$1;(statearr_15294_15313[1] = 8);
} else
{var statearr_15295_15314 = state_15287__$1;(statearr_15295_15314[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15288 === 7))
{var inst_15283 = (state_15287[2]);var state_15287__$1 = state_15287;var statearr_15296_15315 = state_15287__$1;(statearr_15296_15315[2] = inst_15283);
(statearr_15296_15315[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15288 === 8))
{var inst_15269 = (state_15287[7]);var state_15287__$1 = state_15287;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15287__$1,11,out,inst_15269);
} else
{if((state_val_15288 === 9))
{var state_15287__$1 = state_15287;var statearr_15297_15316 = state_15287__$1;(statearr_15297_15316[2] = null);
(statearr_15297_15316[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15288 === 10))
{var inst_15280 = (state_15287[2]);var state_15287__$1 = (function (){var statearr_15298 = state_15287;(statearr_15298[8] = inst_15280);
return statearr_15298;
})();var statearr_15299_15317 = state_15287__$1;(statearr_15299_15317[2] = null);
(statearr_15299_15317[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15288 === 11))
{var inst_15277 = (state_15287[2]);var state_15287__$1 = state_15287;var statearr_15300_15318 = state_15287__$1;(statearr_15300_15318[2] = inst_15277);
(statearr_15300_15318[1] = 10);
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
var state_machine__11486__auto____0 = (function (){var statearr_15304 = [null,null,null,null,null,null,null,null,null];(statearr_15304[0] = state_machine__11486__auto__);
(statearr_15304[1] = 1);
return statearr_15304;
});
var state_machine__11486__auto____1 = (function (state_15287){while(true){
var ret_value__11487__auto__ = (function (){try{while(true){
var result__11488__auto__ = switch__11485__auto__.call(null,state_15287);if(cljs.core.keyword_identical_QMARK_.call(null,result__11488__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__11488__auto__;
}
break;
}
}catch (e15305){if((e15305 instanceof Object))
{var ex__11489__auto__ = e15305;var statearr_15306_15319 = state_15287;(statearr_15306_15319[5] = ex__11489__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15287);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15305;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11487__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15320 = state_15287;
state_15287 = G__15320;
continue;
}
} else
{return ret_value__11487__auto__;
}
break;
}
});
state_machine__11486__auto__ = function(state_15287){
switch(arguments.length){
case 0:
return state_machine__11486__auto____0.call(this);
case 1:
return state_machine__11486__auto____1.call(this,state_15287);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11486__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11486__auto____0;
state_machine__11486__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11486__auto____1;
return state_machine__11486__auto__;
})()
;})(switch__11485__auto__))
})();var state__11502__auto__ = (function (){var statearr_15307 = f__11501__auto__.call(null);(statearr_15307[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11500__auto___15308);
return statearr_15307;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__11500__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__11501__auto__ = (function (){var switch__11485__auto__ = (function (state_15472){var state_val_15473 = (state_15472[1]);if((state_val_15473 === 1))
{var state_15472__$1 = state_15472;var statearr_15474_15511 = state_15472__$1;(statearr_15474_15511[2] = null);
(statearr_15474_15511[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15473 === 2))
{var state_15472__$1 = state_15472;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15472__$1,4,in$);
} else
{if((state_val_15473 === 3))
{var inst_15470 = (state_15472[2]);var state_15472__$1 = state_15472;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15472__$1,inst_15470);
} else
{if((state_val_15473 === 4))
{var inst_15418 = (state_15472[7]);var inst_15418__$1 = (state_15472[2]);var inst_15419 = (inst_15418__$1 == null);var state_15472__$1 = (function (){var statearr_15475 = state_15472;(statearr_15475[7] = inst_15418__$1);
return statearr_15475;
})();if(cljs.core.truth_(inst_15419))
{var statearr_15476_15512 = state_15472__$1;(statearr_15476_15512[1] = 5);
} else
{var statearr_15477_15513 = state_15472__$1;(statearr_15477_15513[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15473 === 5))
{var inst_15421 = cljs.core.async.close_BANG_.call(null,out);var state_15472__$1 = state_15472;var statearr_15478_15514 = state_15472__$1;(statearr_15478_15514[2] = inst_15421);
(statearr_15478_15514[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15473 === 6))
{var inst_15418 = (state_15472[7]);var inst_15423 = f.call(null,inst_15418);var inst_15428 = cljs.core.seq.call(null,inst_15423);var inst_15429 = inst_15428;var inst_15430 = null;var inst_15431 = 0;var inst_15432 = 0;var state_15472__$1 = (function (){var statearr_15479 = state_15472;(statearr_15479[8] = inst_15432);
(statearr_15479[9] = inst_15430);
(statearr_15479[10] = inst_15431);
(statearr_15479[11] = inst_15429);
return statearr_15479;
})();var statearr_15480_15515 = state_15472__$1;(statearr_15480_15515[2] = null);
(statearr_15480_15515[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15473 === 7))
{var inst_15468 = (state_15472[2]);var state_15472__$1 = state_15472;var statearr_15481_15516 = state_15472__$1;(statearr_15481_15516[2] = inst_15468);
(statearr_15481_15516[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15473 === 8))
{var inst_15432 = (state_15472[8]);var inst_15431 = (state_15472[10]);var inst_15434 = (inst_15432 < inst_15431);var inst_15435 = inst_15434;var state_15472__$1 = state_15472;if(cljs.core.truth_(inst_15435))
{var statearr_15482_15517 = state_15472__$1;(statearr_15482_15517[1] = 10);
} else
{var statearr_15483_15518 = state_15472__$1;(statearr_15483_15518[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15473 === 9))
{var inst_15465 = (state_15472[2]);var state_15472__$1 = (function (){var statearr_15484 = state_15472;(statearr_15484[12] = inst_15465);
return statearr_15484;
})();var statearr_15485_15519 = state_15472__$1;(statearr_15485_15519[2] = null);
(statearr_15485_15519[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15473 === 10))
{var inst_15432 = (state_15472[8]);var inst_15430 = (state_15472[9]);var inst_15437 = cljs.core._nth.call(null,inst_15430,inst_15432);var state_15472__$1 = state_15472;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15472__$1,13,out,inst_15437);
} else
{if((state_val_15473 === 11))
{var inst_15443 = (state_15472[13]);var inst_15429 = (state_15472[11]);var inst_15443__$1 = cljs.core.seq.call(null,inst_15429);var state_15472__$1 = (function (){var statearr_15489 = state_15472;(statearr_15489[13] = inst_15443__$1);
return statearr_15489;
})();if(inst_15443__$1)
{var statearr_15490_15520 = state_15472__$1;(statearr_15490_15520[1] = 14);
} else
{var statearr_15491_15521 = state_15472__$1;(statearr_15491_15521[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15473 === 12))
{var inst_15463 = (state_15472[2]);var state_15472__$1 = state_15472;var statearr_15492_15522 = state_15472__$1;(statearr_15492_15522[2] = inst_15463);
(statearr_15492_15522[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15473 === 13))
{var inst_15432 = (state_15472[8]);var inst_15430 = (state_15472[9]);var inst_15431 = (state_15472[10]);var inst_15429 = (state_15472[11]);var inst_15439 = (state_15472[2]);var inst_15440 = (inst_15432 + 1);var tmp15486 = inst_15430;var tmp15487 = inst_15431;var tmp15488 = inst_15429;var inst_15429__$1 = tmp15488;var inst_15430__$1 = tmp15486;var inst_15431__$1 = tmp15487;var inst_15432__$1 = inst_15440;var state_15472__$1 = (function (){var statearr_15493 = state_15472;(statearr_15493[8] = inst_15432__$1);
(statearr_15493[9] = inst_15430__$1);
(statearr_15493[10] = inst_15431__$1);
(statearr_15493[14] = inst_15439);
(statearr_15493[11] = inst_15429__$1);
return statearr_15493;
})();var statearr_15494_15523 = state_15472__$1;(statearr_15494_15523[2] = null);
(statearr_15494_15523[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15473 === 14))
{var inst_15443 = (state_15472[13]);var inst_15445 = cljs.core.chunked_seq_QMARK_.call(null,inst_15443);var state_15472__$1 = state_15472;if(inst_15445)
{var statearr_15495_15524 = state_15472__$1;(statearr_15495_15524[1] = 17);
} else
{var statearr_15496_15525 = state_15472__$1;(statearr_15496_15525[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15473 === 15))
{var state_15472__$1 = state_15472;var statearr_15497_15526 = state_15472__$1;(statearr_15497_15526[2] = null);
(statearr_15497_15526[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15473 === 16))
{var inst_15461 = (state_15472[2]);var state_15472__$1 = state_15472;var statearr_15498_15527 = state_15472__$1;(statearr_15498_15527[2] = inst_15461);
(statearr_15498_15527[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15473 === 17))
{var inst_15443 = (state_15472[13]);var inst_15447 = cljs.core.chunk_first.call(null,inst_15443);var inst_15448 = cljs.core.chunk_rest.call(null,inst_15443);var inst_15449 = cljs.core.count.call(null,inst_15447);var inst_15429 = inst_15448;var inst_15430 = inst_15447;var inst_15431 = inst_15449;var inst_15432 = 0;var state_15472__$1 = (function (){var statearr_15499 = state_15472;(statearr_15499[8] = inst_15432);
(statearr_15499[9] = inst_15430);
(statearr_15499[10] = inst_15431);
(statearr_15499[11] = inst_15429);
return statearr_15499;
})();var statearr_15500_15528 = state_15472__$1;(statearr_15500_15528[2] = null);
(statearr_15500_15528[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15473 === 18))
{var inst_15443 = (state_15472[13]);var inst_15452 = cljs.core.first.call(null,inst_15443);var state_15472__$1 = state_15472;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15472__$1,20,out,inst_15452);
} else
{if((state_val_15473 === 19))
{var inst_15458 = (state_15472[2]);var state_15472__$1 = state_15472;var statearr_15501_15529 = state_15472__$1;(statearr_15501_15529[2] = inst_15458);
(statearr_15501_15529[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15473 === 20))
{var inst_15443 = (state_15472[13]);var inst_15454 = (state_15472[2]);var inst_15455 = cljs.core.next.call(null,inst_15443);var inst_15429 = inst_15455;var inst_15430 = null;var inst_15431 = 0;var inst_15432 = 0;var state_15472__$1 = (function (){var statearr_15502 = state_15472;(statearr_15502[15] = inst_15454);
(statearr_15502[8] = inst_15432);
(statearr_15502[9] = inst_15430);
(statearr_15502[10] = inst_15431);
(statearr_15502[11] = inst_15429);
return statearr_15502;
})();var statearr_15503_15530 = state_15472__$1;(statearr_15503_15530[2] = null);
(statearr_15503_15530[1] = 8);
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
var state_machine__11486__auto____0 = (function (){var statearr_15507 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15507[0] = state_machine__11486__auto__);
(statearr_15507[1] = 1);
return statearr_15507;
});
var state_machine__11486__auto____1 = (function (state_15472){while(true){
var ret_value__11487__auto__ = (function (){try{while(true){
var result__11488__auto__ = switch__11485__auto__.call(null,state_15472);if(cljs.core.keyword_identical_QMARK_.call(null,result__11488__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__11488__auto__;
}
break;
}
}catch (e15508){if((e15508 instanceof Object))
{var ex__11489__auto__ = e15508;var statearr_15509_15531 = state_15472;(statearr_15509_15531[5] = ex__11489__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15472);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15508;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11487__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15532 = state_15472;
state_15472 = G__15532;
continue;
}
} else
{return ret_value__11487__auto__;
}
break;
}
});
state_machine__11486__auto__ = function(state_15472){
switch(arguments.length){
case 0:
return state_machine__11486__auto____0.call(this);
case 1:
return state_machine__11486__auto____1.call(this,state_15472);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11486__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11486__auto____0;
state_machine__11486__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11486__auto____1;
return state_machine__11486__auto__;
})()
;})(switch__11485__auto__))
})();var state__11502__auto__ = (function (){var statearr_15510 = f__11501__auto__.call(null);(statearr_15510[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11500__auto__);
return statearr_15510;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__11500__auto___15613 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__11501__auto__ = (function (){var switch__11485__auto__ = (function (state_15592){var state_val_15593 = (state_15592[1]);if((state_val_15593 === 1))
{var state_15592__$1 = state_15592;var statearr_15594_15614 = state_15592__$1;(statearr_15594_15614[2] = null);
(statearr_15594_15614[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15593 === 2))
{var state_15592__$1 = state_15592;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15592__$1,4,from);
} else
{if((state_val_15593 === 3))
{var inst_15590 = (state_15592[2]);var state_15592__$1 = state_15592;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15592__$1,inst_15590);
} else
{if((state_val_15593 === 4))
{var inst_15575 = (state_15592[7]);var inst_15575__$1 = (state_15592[2]);var inst_15576 = (inst_15575__$1 == null);var state_15592__$1 = (function (){var statearr_15595 = state_15592;(statearr_15595[7] = inst_15575__$1);
return statearr_15595;
})();if(cljs.core.truth_(inst_15576))
{var statearr_15596_15615 = state_15592__$1;(statearr_15596_15615[1] = 5);
} else
{var statearr_15597_15616 = state_15592__$1;(statearr_15597_15616[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15593 === 5))
{var state_15592__$1 = state_15592;if(cljs.core.truth_(close_QMARK_))
{var statearr_15598_15617 = state_15592__$1;(statearr_15598_15617[1] = 8);
} else
{var statearr_15599_15618 = state_15592__$1;(statearr_15599_15618[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15593 === 6))
{var inst_15575 = (state_15592[7]);var state_15592__$1 = state_15592;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15592__$1,11,to,inst_15575);
} else
{if((state_val_15593 === 7))
{var inst_15588 = (state_15592[2]);var state_15592__$1 = state_15592;var statearr_15600_15619 = state_15592__$1;(statearr_15600_15619[2] = inst_15588);
(statearr_15600_15619[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15593 === 8))
{var inst_15579 = cljs.core.async.close_BANG_.call(null,to);var state_15592__$1 = state_15592;var statearr_15601_15620 = state_15592__$1;(statearr_15601_15620[2] = inst_15579);
(statearr_15601_15620[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15593 === 9))
{var state_15592__$1 = state_15592;var statearr_15602_15621 = state_15592__$1;(statearr_15602_15621[2] = null);
(statearr_15602_15621[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15593 === 10))
{var inst_15582 = (state_15592[2]);var state_15592__$1 = state_15592;var statearr_15603_15622 = state_15592__$1;(statearr_15603_15622[2] = inst_15582);
(statearr_15603_15622[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15593 === 11))
{var inst_15585 = (state_15592[2]);var state_15592__$1 = (function (){var statearr_15604 = state_15592;(statearr_15604[8] = inst_15585);
return statearr_15604;
})();var statearr_15605_15623 = state_15592__$1;(statearr_15605_15623[2] = null);
(statearr_15605_15623[1] = 2);
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
var state_machine__11486__auto____0 = (function (){var statearr_15609 = [null,null,null,null,null,null,null,null,null];(statearr_15609[0] = state_machine__11486__auto__);
(statearr_15609[1] = 1);
return statearr_15609;
});
var state_machine__11486__auto____1 = (function (state_15592){while(true){
var ret_value__11487__auto__ = (function (){try{while(true){
var result__11488__auto__ = switch__11485__auto__.call(null,state_15592);if(cljs.core.keyword_identical_QMARK_.call(null,result__11488__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__11488__auto__;
}
break;
}
}catch (e15610){if((e15610 instanceof Object))
{var ex__11489__auto__ = e15610;var statearr_15611_15624 = state_15592;(statearr_15611_15624[5] = ex__11489__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15592);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15610;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11487__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15625 = state_15592;
state_15592 = G__15625;
continue;
}
} else
{return ret_value__11487__auto__;
}
break;
}
});
state_machine__11486__auto__ = function(state_15592){
switch(arguments.length){
case 0:
return state_machine__11486__auto____0.call(this);
case 1:
return state_machine__11486__auto____1.call(this,state_15592);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11486__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11486__auto____0;
state_machine__11486__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11486__auto____1;
return state_machine__11486__auto__;
})()
;})(switch__11485__auto__))
})();var state__11502__auto__ = (function (){var statearr_15612 = f__11501__auto__.call(null);(statearr_15612[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11500__auto___15613);
return statearr_15612;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__11500__auto___15712 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__11501__auto__ = (function (){var switch__11485__auto__ = (function (state_15690){var state_val_15691 = (state_15690[1]);if((state_val_15691 === 1))
{var state_15690__$1 = state_15690;var statearr_15692_15713 = state_15690__$1;(statearr_15692_15713[2] = null);
(statearr_15692_15713[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15691 === 2))
{var state_15690__$1 = state_15690;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15690__$1,4,ch);
} else
{if((state_val_15691 === 3))
{var inst_15688 = (state_15690[2]);var state_15690__$1 = state_15690;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15690__$1,inst_15688);
} else
{if((state_val_15691 === 4))
{var inst_15671 = (state_15690[7]);var inst_15671__$1 = (state_15690[2]);var inst_15672 = (inst_15671__$1 == null);var state_15690__$1 = (function (){var statearr_15693 = state_15690;(statearr_15693[7] = inst_15671__$1);
return statearr_15693;
})();if(cljs.core.truth_(inst_15672))
{var statearr_15694_15714 = state_15690__$1;(statearr_15694_15714[1] = 5);
} else
{var statearr_15695_15715 = state_15690__$1;(statearr_15695_15715[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15691 === 5))
{var inst_15674 = cljs.core.async.close_BANG_.call(null,tc);var inst_15675 = cljs.core.async.close_BANG_.call(null,fc);var state_15690__$1 = (function (){var statearr_15696 = state_15690;(statearr_15696[8] = inst_15674);
return statearr_15696;
})();var statearr_15697_15716 = state_15690__$1;(statearr_15697_15716[2] = inst_15675);
(statearr_15697_15716[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15691 === 6))
{var inst_15671 = (state_15690[7]);var inst_15677 = p.call(null,inst_15671);var state_15690__$1 = state_15690;if(cljs.core.truth_(inst_15677))
{var statearr_15698_15717 = state_15690__$1;(statearr_15698_15717[1] = 9);
} else
{var statearr_15699_15718 = state_15690__$1;(statearr_15699_15718[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15691 === 7))
{var inst_15686 = (state_15690[2]);var state_15690__$1 = state_15690;var statearr_15700_15719 = state_15690__$1;(statearr_15700_15719[2] = inst_15686);
(statearr_15700_15719[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15691 === 8))
{var inst_15683 = (state_15690[2]);var state_15690__$1 = (function (){var statearr_15701 = state_15690;(statearr_15701[9] = inst_15683);
return statearr_15701;
})();var statearr_15702_15720 = state_15690__$1;(statearr_15702_15720[2] = null);
(statearr_15702_15720[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15691 === 9))
{var state_15690__$1 = state_15690;var statearr_15703_15721 = state_15690__$1;(statearr_15703_15721[2] = tc);
(statearr_15703_15721[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15691 === 10))
{var state_15690__$1 = state_15690;var statearr_15704_15722 = state_15690__$1;(statearr_15704_15722[2] = fc);
(statearr_15704_15722[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15691 === 11))
{var inst_15671 = (state_15690[7]);var inst_15681 = (state_15690[2]);var state_15690__$1 = state_15690;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15690__$1,8,inst_15681,inst_15671);
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
var state_machine__11486__auto____0 = (function (){var statearr_15708 = [null,null,null,null,null,null,null,null,null,null];(statearr_15708[0] = state_machine__11486__auto__);
(statearr_15708[1] = 1);
return statearr_15708;
});
var state_machine__11486__auto____1 = (function (state_15690){while(true){
var ret_value__11487__auto__ = (function (){try{while(true){
var result__11488__auto__ = switch__11485__auto__.call(null,state_15690);if(cljs.core.keyword_identical_QMARK_.call(null,result__11488__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__11488__auto__;
}
break;
}
}catch (e15709){if((e15709 instanceof Object))
{var ex__11489__auto__ = e15709;var statearr_15710_15723 = state_15690;(statearr_15710_15723[5] = ex__11489__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15690);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15709;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11487__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15724 = state_15690;
state_15690 = G__15724;
continue;
}
} else
{return ret_value__11487__auto__;
}
break;
}
});
state_machine__11486__auto__ = function(state_15690){
switch(arguments.length){
case 0:
return state_machine__11486__auto____0.call(this);
case 1:
return state_machine__11486__auto____1.call(this,state_15690);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11486__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11486__auto____0;
state_machine__11486__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11486__auto____1;
return state_machine__11486__auto__;
})()
;})(switch__11485__auto__))
})();var state__11502__auto__ = (function (){var statearr_15711 = f__11501__auto__.call(null);(statearr_15711[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11500__auto___15712);
return statearr_15711;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__11500__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__11501__auto__ = (function (){var switch__11485__auto__ = (function (state_15771){var state_val_15772 = (state_15771[1]);if((state_val_15772 === 7))
{var inst_15767 = (state_15771[2]);var state_15771__$1 = state_15771;var statearr_15773_15789 = state_15771__$1;(statearr_15773_15789[2] = inst_15767);
(statearr_15773_15789[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15772 === 6))
{var inst_15757 = (state_15771[7]);var inst_15760 = (state_15771[8]);var inst_15764 = f.call(null,inst_15757,inst_15760);var inst_15757__$1 = inst_15764;var state_15771__$1 = (function (){var statearr_15774 = state_15771;(statearr_15774[7] = inst_15757__$1);
return statearr_15774;
})();var statearr_15775_15790 = state_15771__$1;(statearr_15775_15790[2] = null);
(statearr_15775_15790[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15772 === 5))
{var inst_15757 = (state_15771[7]);var state_15771__$1 = state_15771;var statearr_15776_15791 = state_15771__$1;(statearr_15776_15791[2] = inst_15757);
(statearr_15776_15791[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15772 === 4))
{var inst_15760 = (state_15771[8]);var inst_15760__$1 = (state_15771[2]);var inst_15761 = (inst_15760__$1 == null);var state_15771__$1 = (function (){var statearr_15777 = state_15771;(statearr_15777[8] = inst_15760__$1);
return statearr_15777;
})();if(cljs.core.truth_(inst_15761))
{var statearr_15778_15792 = state_15771__$1;(statearr_15778_15792[1] = 5);
} else
{var statearr_15779_15793 = state_15771__$1;(statearr_15779_15793[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15772 === 3))
{var inst_15769 = (state_15771[2]);var state_15771__$1 = state_15771;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15771__$1,inst_15769);
} else
{if((state_val_15772 === 2))
{var state_15771__$1 = state_15771;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15771__$1,4,ch);
} else
{if((state_val_15772 === 1))
{var inst_15757 = init;var state_15771__$1 = (function (){var statearr_15780 = state_15771;(statearr_15780[7] = inst_15757);
return statearr_15780;
})();var statearr_15781_15794 = state_15771__$1;(statearr_15781_15794[2] = null);
(statearr_15781_15794[1] = 2);
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
var state_machine__11486__auto____0 = (function (){var statearr_15785 = [null,null,null,null,null,null,null,null,null];(statearr_15785[0] = state_machine__11486__auto__);
(statearr_15785[1] = 1);
return statearr_15785;
});
var state_machine__11486__auto____1 = (function (state_15771){while(true){
var ret_value__11487__auto__ = (function (){try{while(true){
var result__11488__auto__ = switch__11485__auto__.call(null,state_15771);if(cljs.core.keyword_identical_QMARK_.call(null,result__11488__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__11488__auto__;
}
break;
}
}catch (e15786){if((e15786 instanceof Object))
{var ex__11489__auto__ = e15786;var statearr_15787_15795 = state_15771;(statearr_15787_15795[5] = ex__11489__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15771);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15786;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11487__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15796 = state_15771;
state_15771 = G__15796;
continue;
}
} else
{return ret_value__11487__auto__;
}
break;
}
});
state_machine__11486__auto__ = function(state_15771){
switch(arguments.length){
case 0:
return state_machine__11486__auto____0.call(this);
case 1:
return state_machine__11486__auto____1.call(this,state_15771);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11486__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11486__auto____0;
state_machine__11486__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11486__auto____1;
return state_machine__11486__auto__;
})()
;})(switch__11485__auto__))
})();var state__11502__auto__ = (function (){var statearr_15788 = f__11501__auto__.call(null);(statearr_15788[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11500__auto__);
return statearr_15788;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__11500__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__11501__auto__ = (function (){var switch__11485__auto__ = (function (state_15858){var state_val_15859 = (state_15858[1]);if((state_val_15859 === 1))
{var inst_15838 = cljs.core.seq.call(null,coll);var inst_15839 = inst_15838;var state_15858__$1 = (function (){var statearr_15860 = state_15858;(statearr_15860[7] = inst_15839);
return statearr_15860;
})();var statearr_15861_15879 = state_15858__$1;(statearr_15861_15879[2] = null);
(statearr_15861_15879[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15859 === 2))
{var inst_15839 = (state_15858[7]);var state_15858__$1 = state_15858;if(cljs.core.truth_(inst_15839))
{var statearr_15862_15880 = state_15858__$1;(statearr_15862_15880[1] = 4);
} else
{var statearr_15863_15881 = state_15858__$1;(statearr_15863_15881[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15859 === 3))
{var inst_15856 = (state_15858[2]);var state_15858__$1 = state_15858;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15858__$1,inst_15856);
} else
{if((state_val_15859 === 4))
{var inst_15839 = (state_15858[7]);var inst_15842 = cljs.core.first.call(null,inst_15839);var state_15858__$1 = state_15858;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15858__$1,7,ch,inst_15842);
} else
{if((state_val_15859 === 5))
{var state_15858__$1 = state_15858;if(cljs.core.truth_(close_QMARK_))
{var statearr_15864_15882 = state_15858__$1;(statearr_15864_15882[1] = 8);
} else
{var statearr_15865_15883 = state_15858__$1;(statearr_15865_15883[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15859 === 6))
{var inst_15854 = (state_15858[2]);var state_15858__$1 = state_15858;var statearr_15866_15884 = state_15858__$1;(statearr_15866_15884[2] = inst_15854);
(statearr_15866_15884[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15859 === 7))
{var inst_15839 = (state_15858[7]);var inst_15844 = (state_15858[2]);var inst_15845 = cljs.core.next.call(null,inst_15839);var inst_15839__$1 = inst_15845;var state_15858__$1 = (function (){var statearr_15867 = state_15858;(statearr_15867[7] = inst_15839__$1);
(statearr_15867[8] = inst_15844);
return statearr_15867;
})();var statearr_15868_15885 = state_15858__$1;(statearr_15868_15885[2] = null);
(statearr_15868_15885[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15859 === 8))
{var inst_15849 = cljs.core.async.close_BANG_.call(null,ch);var state_15858__$1 = state_15858;var statearr_15869_15886 = state_15858__$1;(statearr_15869_15886[2] = inst_15849);
(statearr_15869_15886[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15859 === 9))
{var state_15858__$1 = state_15858;var statearr_15870_15887 = state_15858__$1;(statearr_15870_15887[2] = null);
(statearr_15870_15887[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15859 === 10))
{var inst_15852 = (state_15858[2]);var state_15858__$1 = state_15858;var statearr_15871_15888 = state_15858__$1;(statearr_15871_15888[2] = inst_15852);
(statearr_15871_15888[1] = 6);
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
var state_machine__11486__auto____0 = (function (){var statearr_15875 = [null,null,null,null,null,null,null,null,null];(statearr_15875[0] = state_machine__11486__auto__);
(statearr_15875[1] = 1);
return statearr_15875;
});
var state_machine__11486__auto____1 = (function (state_15858){while(true){
var ret_value__11487__auto__ = (function (){try{while(true){
var result__11488__auto__ = switch__11485__auto__.call(null,state_15858);if(cljs.core.keyword_identical_QMARK_.call(null,result__11488__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__11488__auto__;
}
break;
}
}catch (e15876){if((e15876 instanceof Object))
{var ex__11489__auto__ = e15876;var statearr_15877_15889 = state_15858;(statearr_15877_15889[5] = ex__11489__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15858);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15876;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11487__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15890 = state_15858;
state_15858 = G__15890;
continue;
}
} else
{return ret_value__11487__auto__;
}
break;
}
});
state_machine__11486__auto__ = function(state_15858){
switch(arguments.length){
case 0:
return state_machine__11486__auto____0.call(this);
case 1:
return state_machine__11486__auto____1.call(this,state_15858);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11486__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11486__auto____0;
state_machine__11486__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11486__auto____1;
return state_machine__11486__auto__;
})()
;})(switch__11485__auto__))
})();var state__11502__auto__ = (function (){var statearr_15878 = f__11501__auto__.call(null);(statearr_15878[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11500__auto__);
return statearr_15878;
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
cljs.core.async.Mux = (function (){var obj15892 = {};return obj15892;
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
cljs.core.async.Mult = (function (){var obj15894 = {};return obj15894;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t16118 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16118 = (function (cs,ch,mult,meta16119){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta16119 = meta16119;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16118.cljs$lang$type = true;
cljs.core.async.t16118.cljs$lang$ctorStr = "cljs.core.async/t16118";
cljs.core.async.t16118.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__9947__auto__,writer__9948__auto__,opt__9949__auto__){return cljs.core._write.call(null,writer__9948__auto__,"cljs.core.async/t16118");
});})(cs))
;
cljs.core.async.t16118.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t16118.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t16118.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t16118.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t16118.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t16118.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t16118.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_16120){var self__ = this;
var _16120__$1 = this;return self__.meta16119;
});})(cs))
;
cljs.core.async.t16118.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_16120,meta16119__$1){var self__ = this;
var _16120__$1 = this;return (new cljs.core.async.t16118(self__.cs,self__.ch,self__.mult,meta16119__$1));
});})(cs))
;
cljs.core.async.__GT_t16118 = ((function (cs){
return (function __GT_t16118(cs__$1,ch__$1,mult__$1,meta16119){return (new cljs.core.async.t16118(cs__$1,ch__$1,mult__$1,meta16119));
});})(cs))
;
}
return (new cljs.core.async.t16118(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__11500__auto___16341 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__11501__auto__ = (function (){var switch__11485__auto__ = (function (state_16255){var state_val_16256 = (state_16255[1]);if((state_val_16256 === 32))
{var inst_16199 = (state_16255[7]);var inst_16123 = (state_16255[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_16255,31,Object,null,30);var inst_16206 = cljs.core.async.put_BANG_.call(null,inst_16199,inst_16123,done);var state_16255__$1 = state_16255;var statearr_16257_16342 = state_16255__$1;(statearr_16257_16342[2] = inst_16206);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16255__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16256 === 1))
{var state_16255__$1 = state_16255;var statearr_16258_16343 = state_16255__$1;(statearr_16258_16343[2] = null);
(statearr_16258_16343[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16256 === 33))
{var inst_16212 = (state_16255[9]);var inst_16214 = cljs.core.chunked_seq_QMARK_.call(null,inst_16212);var state_16255__$1 = state_16255;if(inst_16214)
{var statearr_16259_16344 = state_16255__$1;(statearr_16259_16344[1] = 36);
} else
{var statearr_16260_16345 = state_16255__$1;(statearr_16260_16345[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16256 === 2))
{var state_16255__$1 = state_16255;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16255__$1,4,ch);
} else
{if((state_val_16256 === 34))
{var state_16255__$1 = state_16255;var statearr_16261_16346 = state_16255__$1;(statearr_16261_16346[2] = null);
(statearr_16261_16346[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16256 === 3))
{var inst_16253 = (state_16255[2]);var state_16255__$1 = state_16255;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16255__$1,inst_16253);
} else
{if((state_val_16256 === 35))
{var inst_16237 = (state_16255[2]);var state_16255__$1 = state_16255;var statearr_16262_16347 = state_16255__$1;(statearr_16262_16347[2] = inst_16237);
(statearr_16262_16347[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16256 === 4))
{var inst_16123 = (state_16255[8]);var inst_16123__$1 = (state_16255[2]);var inst_16124 = (inst_16123__$1 == null);var state_16255__$1 = (function (){var statearr_16263 = state_16255;(statearr_16263[8] = inst_16123__$1);
return statearr_16263;
})();if(cljs.core.truth_(inst_16124))
{var statearr_16264_16348 = state_16255__$1;(statearr_16264_16348[1] = 5);
} else
{var statearr_16265_16349 = state_16255__$1;(statearr_16265_16349[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16256 === 36))
{var inst_16212 = (state_16255[9]);var inst_16216 = cljs.core.chunk_first.call(null,inst_16212);var inst_16217 = cljs.core.chunk_rest.call(null,inst_16212);var inst_16218 = cljs.core.count.call(null,inst_16216);var inst_16191 = inst_16217;var inst_16192 = inst_16216;var inst_16193 = inst_16218;var inst_16194 = 0;var state_16255__$1 = (function (){var statearr_16266 = state_16255;(statearr_16266[10] = inst_16192);
(statearr_16266[11] = inst_16191);
(statearr_16266[12] = inst_16193);
(statearr_16266[13] = inst_16194);
return statearr_16266;
})();var statearr_16267_16350 = state_16255__$1;(statearr_16267_16350[2] = null);
(statearr_16267_16350[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16256 === 5))
{var inst_16130 = cljs.core.deref.call(null,cs);var inst_16131 = cljs.core.seq.call(null,inst_16130);var inst_16132 = inst_16131;var inst_16133 = null;var inst_16134 = 0;var inst_16135 = 0;var state_16255__$1 = (function (){var statearr_16268 = state_16255;(statearr_16268[14] = inst_16134);
(statearr_16268[15] = inst_16135);
(statearr_16268[16] = inst_16133);
(statearr_16268[17] = inst_16132);
return statearr_16268;
})();var statearr_16269_16351 = state_16255__$1;(statearr_16269_16351[2] = null);
(statearr_16269_16351[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16256 === 37))
{var inst_16212 = (state_16255[9]);var inst_16221 = cljs.core.first.call(null,inst_16212);var state_16255__$1 = (function (){var statearr_16270 = state_16255;(statearr_16270[18] = inst_16221);
return statearr_16270;
})();var statearr_16271_16352 = state_16255__$1;(statearr_16271_16352[2] = null);
(statearr_16271_16352[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16256 === 6))
{var inst_16183 = (state_16255[19]);var inst_16182 = cljs.core.deref.call(null,cs);var inst_16183__$1 = cljs.core.keys.call(null,inst_16182);var inst_16184 = cljs.core.count.call(null,inst_16183__$1);var inst_16185 = cljs.core.reset_BANG_.call(null,dctr,inst_16184);var inst_16190 = cljs.core.seq.call(null,inst_16183__$1);var inst_16191 = inst_16190;var inst_16192 = null;var inst_16193 = 0;var inst_16194 = 0;var state_16255__$1 = (function (){var statearr_16272 = state_16255;(statearr_16272[20] = inst_16185);
(statearr_16272[10] = inst_16192);
(statearr_16272[11] = inst_16191);
(statearr_16272[12] = inst_16193);
(statearr_16272[13] = inst_16194);
(statearr_16272[19] = inst_16183__$1);
return statearr_16272;
})();var statearr_16273_16353 = state_16255__$1;(statearr_16273_16353[2] = null);
(statearr_16273_16353[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16256 === 38))
{var inst_16234 = (state_16255[2]);var state_16255__$1 = state_16255;var statearr_16274_16354 = state_16255__$1;(statearr_16274_16354[2] = inst_16234);
(statearr_16274_16354[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16256 === 7))
{var inst_16251 = (state_16255[2]);var state_16255__$1 = state_16255;var statearr_16275_16355 = state_16255__$1;(statearr_16275_16355[2] = inst_16251);
(statearr_16275_16355[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16256 === 39))
{var inst_16212 = (state_16255[9]);var inst_16230 = (state_16255[2]);var inst_16231 = cljs.core.next.call(null,inst_16212);var inst_16191 = inst_16231;var inst_16192 = null;var inst_16193 = 0;var inst_16194 = 0;var state_16255__$1 = (function (){var statearr_16276 = state_16255;(statearr_16276[21] = inst_16230);
(statearr_16276[10] = inst_16192);
(statearr_16276[11] = inst_16191);
(statearr_16276[12] = inst_16193);
(statearr_16276[13] = inst_16194);
return statearr_16276;
})();var statearr_16277_16356 = state_16255__$1;(statearr_16277_16356[2] = null);
(statearr_16277_16356[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16256 === 8))
{var inst_16134 = (state_16255[14]);var inst_16135 = (state_16255[15]);var inst_16137 = (inst_16135 < inst_16134);var inst_16138 = inst_16137;var state_16255__$1 = state_16255;if(cljs.core.truth_(inst_16138))
{var statearr_16278_16357 = state_16255__$1;(statearr_16278_16357[1] = 10);
} else
{var statearr_16279_16358 = state_16255__$1;(statearr_16279_16358[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16256 === 40))
{var inst_16221 = (state_16255[18]);var inst_16222 = (state_16255[2]);var inst_16223 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_16224 = cljs.core.async.untap_STAR_.call(null,m,inst_16221);var state_16255__$1 = (function (){var statearr_16280 = state_16255;(statearr_16280[22] = inst_16222);
(statearr_16280[23] = inst_16223);
return statearr_16280;
})();var statearr_16281_16359 = state_16255__$1;(statearr_16281_16359[2] = inst_16224);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16255__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16256 === 9))
{var inst_16180 = (state_16255[2]);var state_16255__$1 = state_16255;var statearr_16282_16360 = state_16255__$1;(statearr_16282_16360[2] = inst_16180);
(statearr_16282_16360[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16256 === 41))
{var inst_16221 = (state_16255[18]);var inst_16123 = (state_16255[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_16255,40,Object,null,39);var inst_16228 = cljs.core.async.put_BANG_.call(null,inst_16221,inst_16123,done);var state_16255__$1 = state_16255;var statearr_16283_16361 = state_16255__$1;(statearr_16283_16361[2] = inst_16228);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16255__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16256 === 10))
{var inst_16135 = (state_16255[15]);var inst_16133 = (state_16255[16]);var inst_16141 = cljs.core._nth.call(null,inst_16133,inst_16135);var inst_16142 = cljs.core.nth.call(null,inst_16141,0,null);var inst_16143 = cljs.core.nth.call(null,inst_16141,1,null);var state_16255__$1 = (function (){var statearr_16284 = state_16255;(statearr_16284[24] = inst_16142);
return statearr_16284;
})();if(cljs.core.truth_(inst_16143))
{var statearr_16285_16362 = state_16255__$1;(statearr_16285_16362[1] = 13);
} else
{var statearr_16286_16363 = state_16255__$1;(statearr_16286_16363[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16256 === 42))
{var state_16255__$1 = state_16255;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16255__$1,45,dchan);
} else
{if((state_val_16256 === 11))
{var inst_16152 = (state_16255[25]);var inst_16132 = (state_16255[17]);var inst_16152__$1 = cljs.core.seq.call(null,inst_16132);var state_16255__$1 = (function (){var statearr_16287 = state_16255;(statearr_16287[25] = inst_16152__$1);
return statearr_16287;
})();if(inst_16152__$1)
{var statearr_16288_16364 = state_16255__$1;(statearr_16288_16364[1] = 16);
} else
{var statearr_16289_16365 = state_16255__$1;(statearr_16289_16365[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16256 === 43))
{var state_16255__$1 = state_16255;var statearr_16290_16366 = state_16255__$1;(statearr_16290_16366[2] = null);
(statearr_16290_16366[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16256 === 12))
{var inst_16178 = (state_16255[2]);var state_16255__$1 = state_16255;var statearr_16291_16367 = state_16255__$1;(statearr_16291_16367[2] = inst_16178);
(statearr_16291_16367[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16256 === 44))
{var inst_16248 = (state_16255[2]);var state_16255__$1 = (function (){var statearr_16292 = state_16255;(statearr_16292[26] = inst_16248);
return statearr_16292;
})();var statearr_16293_16368 = state_16255__$1;(statearr_16293_16368[2] = null);
(statearr_16293_16368[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16256 === 13))
{var inst_16142 = (state_16255[24]);var inst_16145 = cljs.core.async.close_BANG_.call(null,inst_16142);var state_16255__$1 = state_16255;var statearr_16294_16369 = state_16255__$1;(statearr_16294_16369[2] = inst_16145);
(statearr_16294_16369[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16256 === 45))
{var inst_16245 = (state_16255[2]);var state_16255__$1 = state_16255;var statearr_16298_16370 = state_16255__$1;(statearr_16298_16370[2] = inst_16245);
(statearr_16298_16370[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16256 === 14))
{var state_16255__$1 = state_16255;var statearr_16299_16371 = state_16255__$1;(statearr_16299_16371[2] = null);
(statearr_16299_16371[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16256 === 15))
{var inst_16134 = (state_16255[14]);var inst_16135 = (state_16255[15]);var inst_16133 = (state_16255[16]);var inst_16132 = (state_16255[17]);var inst_16148 = (state_16255[2]);var inst_16149 = (inst_16135 + 1);var tmp16295 = inst_16134;var tmp16296 = inst_16133;var tmp16297 = inst_16132;var inst_16132__$1 = tmp16297;var inst_16133__$1 = tmp16296;var inst_16134__$1 = tmp16295;var inst_16135__$1 = inst_16149;var state_16255__$1 = (function (){var statearr_16300 = state_16255;(statearr_16300[27] = inst_16148);
(statearr_16300[14] = inst_16134__$1);
(statearr_16300[15] = inst_16135__$1);
(statearr_16300[16] = inst_16133__$1);
(statearr_16300[17] = inst_16132__$1);
return statearr_16300;
})();var statearr_16301_16372 = state_16255__$1;(statearr_16301_16372[2] = null);
(statearr_16301_16372[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16256 === 16))
{var inst_16152 = (state_16255[25]);var inst_16154 = cljs.core.chunked_seq_QMARK_.call(null,inst_16152);var state_16255__$1 = state_16255;if(inst_16154)
{var statearr_16302_16373 = state_16255__$1;(statearr_16302_16373[1] = 19);
} else
{var statearr_16303_16374 = state_16255__$1;(statearr_16303_16374[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16256 === 17))
{var state_16255__$1 = state_16255;var statearr_16304_16375 = state_16255__$1;(statearr_16304_16375[2] = null);
(statearr_16304_16375[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16256 === 18))
{var inst_16176 = (state_16255[2]);var state_16255__$1 = state_16255;var statearr_16305_16376 = state_16255__$1;(statearr_16305_16376[2] = inst_16176);
(statearr_16305_16376[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16256 === 19))
{var inst_16152 = (state_16255[25]);var inst_16156 = cljs.core.chunk_first.call(null,inst_16152);var inst_16157 = cljs.core.chunk_rest.call(null,inst_16152);var inst_16158 = cljs.core.count.call(null,inst_16156);var inst_16132 = inst_16157;var inst_16133 = inst_16156;var inst_16134 = inst_16158;var inst_16135 = 0;var state_16255__$1 = (function (){var statearr_16306 = state_16255;(statearr_16306[14] = inst_16134);
(statearr_16306[15] = inst_16135);
(statearr_16306[16] = inst_16133);
(statearr_16306[17] = inst_16132);
return statearr_16306;
})();var statearr_16307_16377 = state_16255__$1;(statearr_16307_16377[2] = null);
(statearr_16307_16377[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16256 === 20))
{var inst_16152 = (state_16255[25]);var inst_16162 = cljs.core.first.call(null,inst_16152);var inst_16163 = cljs.core.nth.call(null,inst_16162,0,null);var inst_16164 = cljs.core.nth.call(null,inst_16162,1,null);var state_16255__$1 = (function (){var statearr_16308 = state_16255;(statearr_16308[28] = inst_16163);
return statearr_16308;
})();if(cljs.core.truth_(inst_16164))
{var statearr_16309_16378 = state_16255__$1;(statearr_16309_16378[1] = 22);
} else
{var statearr_16310_16379 = state_16255__$1;(statearr_16310_16379[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16256 === 21))
{var inst_16173 = (state_16255[2]);var state_16255__$1 = state_16255;var statearr_16311_16380 = state_16255__$1;(statearr_16311_16380[2] = inst_16173);
(statearr_16311_16380[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16256 === 22))
{var inst_16163 = (state_16255[28]);var inst_16166 = cljs.core.async.close_BANG_.call(null,inst_16163);var state_16255__$1 = state_16255;var statearr_16312_16381 = state_16255__$1;(statearr_16312_16381[2] = inst_16166);
(statearr_16312_16381[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16256 === 23))
{var state_16255__$1 = state_16255;var statearr_16313_16382 = state_16255__$1;(statearr_16313_16382[2] = null);
(statearr_16313_16382[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16256 === 24))
{var inst_16152 = (state_16255[25]);var inst_16169 = (state_16255[2]);var inst_16170 = cljs.core.next.call(null,inst_16152);var inst_16132 = inst_16170;var inst_16133 = null;var inst_16134 = 0;var inst_16135 = 0;var state_16255__$1 = (function (){var statearr_16314 = state_16255;(statearr_16314[29] = inst_16169);
(statearr_16314[14] = inst_16134);
(statearr_16314[15] = inst_16135);
(statearr_16314[16] = inst_16133);
(statearr_16314[17] = inst_16132);
return statearr_16314;
})();var statearr_16315_16383 = state_16255__$1;(statearr_16315_16383[2] = null);
(statearr_16315_16383[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16256 === 25))
{var inst_16193 = (state_16255[12]);var inst_16194 = (state_16255[13]);var inst_16196 = (inst_16194 < inst_16193);var inst_16197 = inst_16196;var state_16255__$1 = state_16255;if(cljs.core.truth_(inst_16197))
{var statearr_16316_16384 = state_16255__$1;(statearr_16316_16384[1] = 27);
} else
{var statearr_16317_16385 = state_16255__$1;(statearr_16317_16385[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16256 === 26))
{var inst_16183 = (state_16255[19]);var inst_16241 = (state_16255[2]);var inst_16242 = cljs.core.seq.call(null,inst_16183);var state_16255__$1 = (function (){var statearr_16318 = state_16255;(statearr_16318[30] = inst_16241);
return statearr_16318;
})();if(inst_16242)
{var statearr_16319_16386 = state_16255__$1;(statearr_16319_16386[1] = 42);
} else
{var statearr_16320_16387 = state_16255__$1;(statearr_16320_16387[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16256 === 27))
{var inst_16192 = (state_16255[10]);var inst_16194 = (state_16255[13]);var inst_16199 = cljs.core._nth.call(null,inst_16192,inst_16194);var state_16255__$1 = (function (){var statearr_16321 = state_16255;(statearr_16321[7] = inst_16199);
return statearr_16321;
})();var statearr_16322_16388 = state_16255__$1;(statearr_16322_16388[2] = null);
(statearr_16322_16388[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16256 === 28))
{var inst_16191 = (state_16255[11]);var inst_16212 = (state_16255[9]);var inst_16212__$1 = cljs.core.seq.call(null,inst_16191);var state_16255__$1 = (function (){var statearr_16326 = state_16255;(statearr_16326[9] = inst_16212__$1);
return statearr_16326;
})();if(inst_16212__$1)
{var statearr_16327_16389 = state_16255__$1;(statearr_16327_16389[1] = 33);
} else
{var statearr_16328_16390 = state_16255__$1;(statearr_16328_16390[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16256 === 29))
{var inst_16239 = (state_16255[2]);var state_16255__$1 = state_16255;var statearr_16329_16391 = state_16255__$1;(statearr_16329_16391[2] = inst_16239);
(statearr_16329_16391[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16256 === 30))
{var inst_16192 = (state_16255[10]);var inst_16191 = (state_16255[11]);var inst_16193 = (state_16255[12]);var inst_16194 = (state_16255[13]);var inst_16208 = (state_16255[2]);var inst_16209 = (inst_16194 + 1);var tmp16323 = inst_16192;var tmp16324 = inst_16191;var tmp16325 = inst_16193;var inst_16191__$1 = tmp16324;var inst_16192__$1 = tmp16323;var inst_16193__$1 = tmp16325;var inst_16194__$1 = inst_16209;var state_16255__$1 = (function (){var statearr_16330 = state_16255;(statearr_16330[10] = inst_16192__$1);
(statearr_16330[11] = inst_16191__$1);
(statearr_16330[12] = inst_16193__$1);
(statearr_16330[13] = inst_16194__$1);
(statearr_16330[31] = inst_16208);
return statearr_16330;
})();var statearr_16331_16392 = state_16255__$1;(statearr_16331_16392[2] = null);
(statearr_16331_16392[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16256 === 31))
{var inst_16199 = (state_16255[7]);var inst_16200 = (state_16255[2]);var inst_16201 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_16202 = cljs.core.async.untap_STAR_.call(null,m,inst_16199);var state_16255__$1 = (function (){var statearr_16332 = state_16255;(statearr_16332[32] = inst_16200);
(statearr_16332[33] = inst_16201);
return statearr_16332;
})();var statearr_16333_16393 = state_16255__$1;(statearr_16333_16393[2] = inst_16202);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16255__$1);
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
var state_machine__11486__auto____0 = (function (){var statearr_16337 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16337[0] = state_machine__11486__auto__);
(statearr_16337[1] = 1);
return statearr_16337;
});
var state_machine__11486__auto____1 = (function (state_16255){while(true){
var ret_value__11487__auto__ = (function (){try{while(true){
var result__11488__auto__ = switch__11485__auto__.call(null,state_16255);if(cljs.core.keyword_identical_QMARK_.call(null,result__11488__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__11488__auto__;
}
break;
}
}catch (e16338){if((e16338 instanceof Object))
{var ex__11489__auto__ = e16338;var statearr_16339_16394 = state_16255;(statearr_16339_16394[5] = ex__11489__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16255);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16338;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11487__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16395 = state_16255;
state_16255 = G__16395;
continue;
}
} else
{return ret_value__11487__auto__;
}
break;
}
});
state_machine__11486__auto__ = function(state_16255){
switch(arguments.length){
case 0:
return state_machine__11486__auto____0.call(this);
case 1:
return state_machine__11486__auto____1.call(this,state_16255);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11486__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11486__auto____0;
state_machine__11486__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11486__auto____1;
return state_machine__11486__auto__;
})()
;})(switch__11485__auto__))
})();var state__11502__auto__ = (function (){var statearr_16340 = f__11501__auto__.call(null);(statearr_16340[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11500__auto___16341);
return statearr_16340;
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
cljs.core.async.Mix = (function (){var obj16397 = {};return obj16397;
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
;var m = (function (){if(typeof cljs.core.async.t16507 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16507 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta16508){
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
this.meta16508 = meta16508;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16507.cljs$lang$type = true;
cljs.core.async.t16507.cljs$lang$ctorStr = "cljs.core.async/t16507";
cljs.core.async.t16507.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__9947__auto__,writer__9948__auto__,opt__9949__auto__){return cljs.core._write.call(null,writer__9948__auto__,"cljs.core.async/t16507");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16507.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t16507.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16507.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16507.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16507.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16507.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16507.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t16507.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16507.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_16509){var self__ = this;
var _16509__$1 = this;return self__.meta16508;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16507.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_16509,meta16508__$1){var self__ = this;
var _16509__$1 = this;return (new cljs.core.async.t16507(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta16508__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t16507 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t16507(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta16508){return (new cljs.core.async.t16507(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta16508));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t16507(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__11500__auto___16616 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__11501__auto__ = (function (){var switch__11485__auto__ = (function (state_16574){var state_val_16575 = (state_16574[1]);if((state_val_16575 === 1))
{var inst_16513 = (state_16574[7]);var inst_16513__$1 = calc_state.call(null);var inst_16514 = cljs.core.seq_QMARK_.call(null,inst_16513__$1);var state_16574__$1 = (function (){var statearr_16576 = state_16574;(statearr_16576[7] = inst_16513__$1);
return statearr_16576;
})();if(inst_16514)
{var statearr_16577_16617 = state_16574__$1;(statearr_16577_16617[1] = 2);
} else
{var statearr_16578_16618 = state_16574__$1;(statearr_16578_16618[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16575 === 2))
{var inst_16513 = (state_16574[7]);var inst_16516 = cljs.core.apply.call(null,cljs.core.hash_map,inst_16513);var state_16574__$1 = state_16574;var statearr_16579_16619 = state_16574__$1;(statearr_16579_16619[2] = inst_16516);
(statearr_16579_16619[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16575 === 3))
{var inst_16513 = (state_16574[7]);var state_16574__$1 = state_16574;var statearr_16580_16620 = state_16574__$1;(statearr_16580_16620[2] = inst_16513);
(statearr_16580_16620[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16575 === 4))
{var inst_16513 = (state_16574[7]);var inst_16519 = (state_16574[2]);var inst_16520 = cljs.core.get.call(null,inst_16519,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_16521 = cljs.core.get.call(null,inst_16519,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_16522 = cljs.core.get.call(null,inst_16519,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_16523 = inst_16513;var state_16574__$1 = (function (){var statearr_16581 = state_16574;(statearr_16581[8] = inst_16521);
(statearr_16581[9] = inst_16522);
(statearr_16581[10] = inst_16520);
(statearr_16581[11] = inst_16523);
return statearr_16581;
})();var statearr_16582_16621 = state_16574__$1;(statearr_16582_16621[2] = null);
(statearr_16582_16621[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16575 === 5))
{var inst_16523 = (state_16574[11]);var inst_16526 = cljs.core.seq_QMARK_.call(null,inst_16523);var state_16574__$1 = state_16574;if(inst_16526)
{var statearr_16583_16622 = state_16574__$1;(statearr_16583_16622[1] = 7);
} else
{var statearr_16584_16623 = state_16574__$1;(statearr_16584_16623[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16575 === 6))
{var inst_16572 = (state_16574[2]);var state_16574__$1 = state_16574;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16574__$1,inst_16572);
} else
{if((state_val_16575 === 7))
{var inst_16523 = (state_16574[11]);var inst_16528 = cljs.core.apply.call(null,cljs.core.hash_map,inst_16523);var state_16574__$1 = state_16574;var statearr_16585_16624 = state_16574__$1;(statearr_16585_16624[2] = inst_16528);
(statearr_16585_16624[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16575 === 8))
{var inst_16523 = (state_16574[11]);var state_16574__$1 = state_16574;var statearr_16586_16625 = state_16574__$1;(statearr_16586_16625[2] = inst_16523);
(statearr_16586_16625[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16575 === 9))
{var inst_16531 = (state_16574[12]);var inst_16531__$1 = (state_16574[2]);var inst_16532 = cljs.core.get.call(null,inst_16531__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_16533 = cljs.core.get.call(null,inst_16531__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_16534 = cljs.core.get.call(null,inst_16531__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_16574__$1 = (function (){var statearr_16587 = state_16574;(statearr_16587[13] = inst_16534);
(statearr_16587[14] = inst_16533);
(statearr_16587[12] = inst_16531__$1);
return statearr_16587;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_16574__$1,10,inst_16532);
} else
{if((state_val_16575 === 10))
{var inst_16538 = (state_16574[15]);var inst_16539 = (state_16574[16]);var inst_16537 = (state_16574[2]);var inst_16538__$1 = cljs.core.nth.call(null,inst_16537,0,null);var inst_16539__$1 = cljs.core.nth.call(null,inst_16537,1,null);var inst_16540 = (inst_16538__$1 == null);var inst_16541 = cljs.core._EQ_.call(null,inst_16539__$1,change);var inst_16542 = (inst_16540) || (inst_16541);var state_16574__$1 = (function (){var statearr_16588 = state_16574;(statearr_16588[15] = inst_16538__$1);
(statearr_16588[16] = inst_16539__$1);
return statearr_16588;
})();if(cljs.core.truth_(inst_16542))
{var statearr_16589_16626 = state_16574__$1;(statearr_16589_16626[1] = 11);
} else
{var statearr_16590_16627 = state_16574__$1;(statearr_16590_16627[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16575 === 11))
{var inst_16538 = (state_16574[15]);var inst_16544 = (inst_16538 == null);var state_16574__$1 = state_16574;if(cljs.core.truth_(inst_16544))
{var statearr_16591_16628 = state_16574__$1;(statearr_16591_16628[1] = 14);
} else
{var statearr_16592_16629 = state_16574__$1;(statearr_16592_16629[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16575 === 12))
{var inst_16553 = (state_16574[17]);var inst_16539 = (state_16574[16]);var inst_16534 = (state_16574[13]);var inst_16553__$1 = inst_16534.call(null,inst_16539);var state_16574__$1 = (function (){var statearr_16593 = state_16574;(statearr_16593[17] = inst_16553__$1);
return statearr_16593;
})();if(cljs.core.truth_(inst_16553__$1))
{var statearr_16594_16630 = state_16574__$1;(statearr_16594_16630[1] = 17);
} else
{var statearr_16595_16631 = state_16574__$1;(statearr_16595_16631[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16575 === 13))
{var inst_16570 = (state_16574[2]);var state_16574__$1 = state_16574;var statearr_16596_16632 = state_16574__$1;(statearr_16596_16632[2] = inst_16570);
(statearr_16596_16632[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16575 === 14))
{var inst_16539 = (state_16574[16]);var inst_16546 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_16539);var state_16574__$1 = state_16574;var statearr_16597_16633 = state_16574__$1;(statearr_16597_16633[2] = inst_16546);
(statearr_16597_16633[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16575 === 15))
{var state_16574__$1 = state_16574;var statearr_16598_16634 = state_16574__$1;(statearr_16598_16634[2] = null);
(statearr_16598_16634[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16575 === 16))
{var inst_16549 = (state_16574[2]);var inst_16550 = calc_state.call(null);var inst_16523 = inst_16550;var state_16574__$1 = (function (){var statearr_16599 = state_16574;(statearr_16599[18] = inst_16549);
(statearr_16599[11] = inst_16523);
return statearr_16599;
})();var statearr_16600_16635 = state_16574__$1;(statearr_16600_16635[2] = null);
(statearr_16600_16635[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16575 === 17))
{var inst_16553 = (state_16574[17]);var state_16574__$1 = state_16574;var statearr_16601_16636 = state_16574__$1;(statearr_16601_16636[2] = inst_16553);
(statearr_16601_16636[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16575 === 18))
{var inst_16539 = (state_16574[16]);var inst_16534 = (state_16574[13]);var inst_16533 = (state_16574[14]);var inst_16556 = cljs.core.empty_QMARK_.call(null,inst_16534);var inst_16557 = inst_16533.call(null,inst_16539);var inst_16558 = cljs.core.not.call(null,inst_16557);var inst_16559 = (inst_16556) && (inst_16558);var state_16574__$1 = state_16574;var statearr_16602_16637 = state_16574__$1;(statearr_16602_16637[2] = inst_16559);
(statearr_16602_16637[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16575 === 19))
{var inst_16561 = (state_16574[2]);var state_16574__$1 = state_16574;if(cljs.core.truth_(inst_16561))
{var statearr_16603_16638 = state_16574__$1;(statearr_16603_16638[1] = 20);
} else
{var statearr_16604_16639 = state_16574__$1;(statearr_16604_16639[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16575 === 20))
{var inst_16538 = (state_16574[15]);var state_16574__$1 = state_16574;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16574__$1,23,out,inst_16538);
} else
{if((state_val_16575 === 21))
{var state_16574__$1 = state_16574;var statearr_16605_16640 = state_16574__$1;(statearr_16605_16640[2] = null);
(statearr_16605_16640[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16575 === 22))
{var inst_16531 = (state_16574[12]);var inst_16567 = (state_16574[2]);var inst_16523 = inst_16531;var state_16574__$1 = (function (){var statearr_16606 = state_16574;(statearr_16606[11] = inst_16523);
(statearr_16606[19] = inst_16567);
return statearr_16606;
})();var statearr_16607_16641 = state_16574__$1;(statearr_16607_16641[2] = null);
(statearr_16607_16641[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16575 === 23))
{var inst_16564 = (state_16574[2]);var state_16574__$1 = state_16574;var statearr_16608_16642 = state_16574__$1;(statearr_16608_16642[2] = inst_16564);
(statearr_16608_16642[1] = 22);
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
var state_machine__11486__auto____0 = (function (){var statearr_16612 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16612[0] = state_machine__11486__auto__);
(statearr_16612[1] = 1);
return statearr_16612;
});
var state_machine__11486__auto____1 = (function (state_16574){while(true){
var ret_value__11487__auto__ = (function (){try{while(true){
var result__11488__auto__ = switch__11485__auto__.call(null,state_16574);if(cljs.core.keyword_identical_QMARK_.call(null,result__11488__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__11488__auto__;
}
break;
}
}catch (e16613){if((e16613 instanceof Object))
{var ex__11489__auto__ = e16613;var statearr_16614_16643 = state_16574;(statearr_16614_16643[5] = ex__11489__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16574);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16613;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11487__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16644 = state_16574;
state_16574 = G__16644;
continue;
}
} else
{return ret_value__11487__auto__;
}
break;
}
});
state_machine__11486__auto__ = function(state_16574){
switch(arguments.length){
case 0:
return state_machine__11486__auto____0.call(this);
case 1:
return state_machine__11486__auto____1.call(this,state_16574);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11486__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11486__auto____0;
state_machine__11486__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11486__auto____1;
return state_machine__11486__auto__;
})()
;})(switch__11485__auto__))
})();var state__11502__auto__ = (function (){var statearr_16615 = f__11501__auto__.call(null);(statearr_16615[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11500__auto___16616);
return statearr_16615;
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
cljs.core.async.Pub = (function (){var obj16646 = {};return obj16646;
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
return (function (p1__16647_SHARP_){if(cljs.core.truth_(p1__16647_SHARP_.call(null,topic)))
{return p1__16647_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__16647_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__9385__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t16772 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16772 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta16773){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta16773 = meta16773;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16772.cljs$lang$type = true;
cljs.core.async.t16772.cljs$lang$ctorStr = "cljs.core.async/t16772";
cljs.core.async.t16772.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__9947__auto__,writer__9948__auto__,opt__9949__auto__){return cljs.core._write.call(null,writer__9948__auto__,"cljs.core.async/t16772");
});})(mults,ensure_mult))
;
cljs.core.async.t16772.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t16772.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t16772.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t16772.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t16772.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t16772.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t16772.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t16772.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_16774){var self__ = this;
var _16774__$1 = this;return self__.meta16773;
});})(mults,ensure_mult))
;
cljs.core.async.t16772.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_16774,meta16773__$1){var self__ = this;
var _16774__$1 = this;return (new cljs.core.async.t16772(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta16773__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t16772 = ((function (mults,ensure_mult){
return (function __GT_t16772(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta16773){return (new cljs.core.async.t16772(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta16773));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t16772(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__11500__auto___16896 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__11501__auto__ = (function (){var switch__11485__auto__ = (function (state_16848){var state_val_16849 = (state_16848[1]);if((state_val_16849 === 1))
{var state_16848__$1 = state_16848;var statearr_16850_16897 = state_16848__$1;(statearr_16850_16897[2] = null);
(statearr_16850_16897[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16849 === 2))
{var state_16848__$1 = state_16848;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16848__$1,4,ch);
} else
{if((state_val_16849 === 3))
{var inst_16846 = (state_16848[2]);var state_16848__$1 = state_16848;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16848__$1,inst_16846);
} else
{if((state_val_16849 === 4))
{var inst_16777 = (state_16848[7]);var inst_16777__$1 = (state_16848[2]);var inst_16778 = (inst_16777__$1 == null);var state_16848__$1 = (function (){var statearr_16851 = state_16848;(statearr_16851[7] = inst_16777__$1);
return statearr_16851;
})();if(cljs.core.truth_(inst_16778))
{var statearr_16852_16898 = state_16848__$1;(statearr_16852_16898[1] = 5);
} else
{var statearr_16853_16899 = state_16848__$1;(statearr_16853_16899[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16849 === 5))
{var inst_16784 = cljs.core.deref.call(null,mults);var inst_16785 = cljs.core.vals.call(null,inst_16784);var inst_16786 = cljs.core.seq.call(null,inst_16785);var inst_16787 = inst_16786;var inst_16788 = null;var inst_16789 = 0;var inst_16790 = 0;var state_16848__$1 = (function (){var statearr_16854 = state_16848;(statearr_16854[8] = inst_16789);
(statearr_16854[9] = inst_16790);
(statearr_16854[10] = inst_16788);
(statearr_16854[11] = inst_16787);
return statearr_16854;
})();var statearr_16855_16900 = state_16848__$1;(statearr_16855_16900[2] = null);
(statearr_16855_16900[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16849 === 6))
{var inst_16825 = (state_16848[12]);var inst_16827 = (state_16848[13]);var inst_16777 = (state_16848[7]);var inst_16825__$1 = topic_fn.call(null,inst_16777);var inst_16826 = cljs.core.deref.call(null,mults);var inst_16827__$1 = cljs.core.get.call(null,inst_16826,inst_16825__$1);var state_16848__$1 = (function (){var statearr_16856 = state_16848;(statearr_16856[12] = inst_16825__$1);
(statearr_16856[13] = inst_16827__$1);
return statearr_16856;
})();if(cljs.core.truth_(inst_16827__$1))
{var statearr_16857_16901 = state_16848__$1;(statearr_16857_16901[1] = 19);
} else
{var statearr_16858_16902 = state_16848__$1;(statearr_16858_16902[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16849 === 7))
{var inst_16844 = (state_16848[2]);var state_16848__$1 = state_16848;var statearr_16859_16903 = state_16848__$1;(statearr_16859_16903[2] = inst_16844);
(statearr_16859_16903[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16849 === 8))
{var inst_16789 = (state_16848[8]);var inst_16790 = (state_16848[9]);var inst_16792 = (inst_16790 < inst_16789);var inst_16793 = inst_16792;var state_16848__$1 = state_16848;if(cljs.core.truth_(inst_16793))
{var statearr_16863_16904 = state_16848__$1;(statearr_16863_16904[1] = 10);
} else
{var statearr_16864_16905 = state_16848__$1;(statearr_16864_16905[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16849 === 9))
{var inst_16823 = (state_16848[2]);var state_16848__$1 = state_16848;var statearr_16865_16906 = state_16848__$1;(statearr_16865_16906[2] = inst_16823);
(statearr_16865_16906[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16849 === 10))
{var inst_16789 = (state_16848[8]);var inst_16790 = (state_16848[9]);var inst_16788 = (state_16848[10]);var inst_16787 = (state_16848[11]);var inst_16795 = cljs.core._nth.call(null,inst_16788,inst_16790);var inst_16796 = cljs.core.async.muxch_STAR_.call(null,inst_16795);var inst_16797 = cljs.core.async.close_BANG_.call(null,inst_16796);var inst_16798 = (inst_16790 + 1);var tmp16860 = inst_16789;var tmp16861 = inst_16788;var tmp16862 = inst_16787;var inst_16787__$1 = tmp16862;var inst_16788__$1 = tmp16861;var inst_16789__$1 = tmp16860;var inst_16790__$1 = inst_16798;var state_16848__$1 = (function (){var statearr_16866 = state_16848;(statearr_16866[14] = inst_16797);
(statearr_16866[8] = inst_16789__$1);
(statearr_16866[9] = inst_16790__$1);
(statearr_16866[10] = inst_16788__$1);
(statearr_16866[11] = inst_16787__$1);
return statearr_16866;
})();var statearr_16867_16907 = state_16848__$1;(statearr_16867_16907[2] = null);
(statearr_16867_16907[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16849 === 11))
{var inst_16787 = (state_16848[11]);var inst_16801 = (state_16848[15]);var inst_16801__$1 = cljs.core.seq.call(null,inst_16787);var state_16848__$1 = (function (){var statearr_16868 = state_16848;(statearr_16868[15] = inst_16801__$1);
return statearr_16868;
})();if(inst_16801__$1)
{var statearr_16869_16908 = state_16848__$1;(statearr_16869_16908[1] = 13);
} else
{var statearr_16870_16909 = state_16848__$1;(statearr_16870_16909[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16849 === 12))
{var inst_16821 = (state_16848[2]);var state_16848__$1 = state_16848;var statearr_16871_16910 = state_16848__$1;(statearr_16871_16910[2] = inst_16821);
(statearr_16871_16910[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16849 === 13))
{var inst_16801 = (state_16848[15]);var inst_16803 = cljs.core.chunked_seq_QMARK_.call(null,inst_16801);var state_16848__$1 = state_16848;if(inst_16803)
{var statearr_16872_16911 = state_16848__$1;(statearr_16872_16911[1] = 16);
} else
{var statearr_16873_16912 = state_16848__$1;(statearr_16873_16912[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16849 === 14))
{var state_16848__$1 = state_16848;var statearr_16874_16913 = state_16848__$1;(statearr_16874_16913[2] = null);
(statearr_16874_16913[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16849 === 15))
{var inst_16819 = (state_16848[2]);var state_16848__$1 = state_16848;var statearr_16875_16914 = state_16848__$1;(statearr_16875_16914[2] = inst_16819);
(statearr_16875_16914[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16849 === 16))
{var inst_16801 = (state_16848[15]);var inst_16805 = cljs.core.chunk_first.call(null,inst_16801);var inst_16806 = cljs.core.chunk_rest.call(null,inst_16801);var inst_16807 = cljs.core.count.call(null,inst_16805);var inst_16787 = inst_16806;var inst_16788 = inst_16805;var inst_16789 = inst_16807;var inst_16790 = 0;var state_16848__$1 = (function (){var statearr_16876 = state_16848;(statearr_16876[8] = inst_16789);
(statearr_16876[9] = inst_16790);
(statearr_16876[10] = inst_16788);
(statearr_16876[11] = inst_16787);
return statearr_16876;
})();var statearr_16877_16915 = state_16848__$1;(statearr_16877_16915[2] = null);
(statearr_16877_16915[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16849 === 17))
{var inst_16801 = (state_16848[15]);var inst_16810 = cljs.core.first.call(null,inst_16801);var inst_16811 = cljs.core.async.muxch_STAR_.call(null,inst_16810);var inst_16812 = cljs.core.async.close_BANG_.call(null,inst_16811);var inst_16813 = cljs.core.next.call(null,inst_16801);var inst_16787 = inst_16813;var inst_16788 = null;var inst_16789 = 0;var inst_16790 = 0;var state_16848__$1 = (function (){var statearr_16878 = state_16848;(statearr_16878[8] = inst_16789);
(statearr_16878[9] = inst_16790);
(statearr_16878[10] = inst_16788);
(statearr_16878[11] = inst_16787);
(statearr_16878[16] = inst_16812);
return statearr_16878;
})();var statearr_16879_16916 = state_16848__$1;(statearr_16879_16916[2] = null);
(statearr_16879_16916[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16849 === 18))
{var inst_16816 = (state_16848[2]);var state_16848__$1 = state_16848;var statearr_16880_16917 = state_16848__$1;(statearr_16880_16917[2] = inst_16816);
(statearr_16880_16917[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16849 === 19))
{var state_16848__$1 = state_16848;var statearr_16881_16918 = state_16848__$1;(statearr_16881_16918[2] = null);
(statearr_16881_16918[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16849 === 20))
{var state_16848__$1 = state_16848;var statearr_16882_16919 = state_16848__$1;(statearr_16882_16919[2] = null);
(statearr_16882_16919[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16849 === 21))
{var inst_16841 = (state_16848[2]);var state_16848__$1 = (function (){var statearr_16883 = state_16848;(statearr_16883[17] = inst_16841);
return statearr_16883;
})();var statearr_16884_16920 = state_16848__$1;(statearr_16884_16920[2] = null);
(statearr_16884_16920[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16849 === 22))
{var inst_16838 = (state_16848[2]);var state_16848__$1 = state_16848;var statearr_16885_16921 = state_16848__$1;(statearr_16885_16921[2] = inst_16838);
(statearr_16885_16921[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16849 === 23))
{var inst_16825 = (state_16848[12]);var inst_16829 = (state_16848[2]);var inst_16830 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_16825);var state_16848__$1 = (function (){var statearr_16886 = state_16848;(statearr_16886[18] = inst_16829);
return statearr_16886;
})();var statearr_16887_16922 = state_16848__$1;(statearr_16887_16922[2] = inst_16830);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16848__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16849 === 24))
{var inst_16827 = (state_16848[13]);var inst_16777 = (state_16848[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_16848,23,Object,null,22);var inst_16834 = cljs.core.async.muxch_STAR_.call(null,inst_16827);var state_16848__$1 = state_16848;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16848__$1,25,inst_16834,inst_16777);
} else
{if((state_val_16849 === 25))
{var inst_16836 = (state_16848[2]);var state_16848__$1 = state_16848;var statearr_16888_16923 = state_16848__$1;(statearr_16888_16923[2] = inst_16836);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16848__$1);
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
var state_machine__11486__auto____0 = (function (){var statearr_16892 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16892[0] = state_machine__11486__auto__);
(statearr_16892[1] = 1);
return statearr_16892;
});
var state_machine__11486__auto____1 = (function (state_16848){while(true){
var ret_value__11487__auto__ = (function (){try{while(true){
var result__11488__auto__ = switch__11485__auto__.call(null,state_16848);if(cljs.core.keyword_identical_QMARK_.call(null,result__11488__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__11488__auto__;
}
break;
}
}catch (e16893){if((e16893 instanceof Object))
{var ex__11489__auto__ = e16893;var statearr_16894_16924 = state_16848;(statearr_16894_16924[5] = ex__11489__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16848);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16893;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11487__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16925 = state_16848;
state_16848 = G__16925;
continue;
}
} else
{return ret_value__11487__auto__;
}
break;
}
});
state_machine__11486__auto__ = function(state_16848){
switch(arguments.length){
case 0:
return state_machine__11486__auto____0.call(this);
case 1:
return state_machine__11486__auto____1.call(this,state_16848);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11486__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11486__auto____0;
state_machine__11486__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11486__auto____1;
return state_machine__11486__auto__;
})()
;})(switch__11485__auto__))
})();var state__11502__auto__ = (function (){var statearr_16895 = f__11501__auto__.call(null);(statearr_16895[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11500__auto___16896);
return statearr_16895;
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
,cljs.core.range.call(null,cnt));var c__11500__auto___17062 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__11501__auto__ = (function (){var switch__11485__auto__ = (function (state_17032){var state_val_17033 = (state_17032[1]);if((state_val_17033 === 1))
{var state_17032__$1 = state_17032;var statearr_17034_17063 = state_17032__$1;(statearr_17034_17063[2] = null);
(statearr_17034_17063[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17033 === 2))
{var inst_16995 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_16996 = 0;var state_17032__$1 = (function (){var statearr_17035 = state_17032;(statearr_17035[7] = inst_16996);
(statearr_17035[8] = inst_16995);
return statearr_17035;
})();var statearr_17036_17064 = state_17032__$1;(statearr_17036_17064[2] = null);
(statearr_17036_17064[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17033 === 3))
{var inst_17030 = (state_17032[2]);var state_17032__$1 = state_17032;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17032__$1,inst_17030);
} else
{if((state_val_17033 === 4))
{var inst_16996 = (state_17032[7]);var inst_16998 = (inst_16996 < cnt);var state_17032__$1 = state_17032;if(cljs.core.truth_(inst_16998))
{var statearr_17037_17065 = state_17032__$1;(statearr_17037_17065[1] = 6);
} else
{var statearr_17038_17066 = state_17032__$1;(statearr_17038_17066[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17033 === 5))
{var inst_17016 = (state_17032[2]);var state_17032__$1 = (function (){var statearr_17039 = state_17032;(statearr_17039[9] = inst_17016);
return statearr_17039;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17032__$1,12,dchan);
} else
{if((state_val_17033 === 6))
{var state_17032__$1 = state_17032;var statearr_17040_17067 = state_17032__$1;(statearr_17040_17067[2] = null);
(statearr_17040_17067[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17033 === 7))
{var state_17032__$1 = state_17032;var statearr_17041_17068 = state_17032__$1;(statearr_17041_17068[2] = null);
(statearr_17041_17068[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17033 === 8))
{var inst_17014 = (state_17032[2]);var state_17032__$1 = state_17032;var statearr_17042_17069 = state_17032__$1;(statearr_17042_17069[2] = inst_17014);
(statearr_17042_17069[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17033 === 9))
{var inst_16996 = (state_17032[7]);var inst_17009 = (state_17032[2]);var inst_17010 = (inst_16996 + 1);var inst_16996__$1 = inst_17010;var state_17032__$1 = (function (){var statearr_17043 = state_17032;(statearr_17043[10] = inst_17009);
(statearr_17043[7] = inst_16996__$1);
return statearr_17043;
})();var statearr_17044_17070 = state_17032__$1;(statearr_17044_17070[2] = null);
(statearr_17044_17070[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17033 === 10))
{var inst_17000 = (state_17032[2]);var inst_17001 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_17032__$1 = (function (){var statearr_17045 = state_17032;(statearr_17045[11] = inst_17000);
return statearr_17045;
})();var statearr_17046_17071 = state_17032__$1;(statearr_17046_17071[2] = inst_17001);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17032__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17033 === 11))
{var inst_16996 = (state_17032[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_17032,10,Object,null,9);var inst_17005 = chs__$1.call(null,inst_16996);var inst_17006 = done.call(null,inst_16996);var inst_17007 = cljs.core.async.take_BANG_.call(null,inst_17005,inst_17006);var state_17032__$1 = state_17032;var statearr_17047_17072 = state_17032__$1;(statearr_17047_17072[2] = inst_17007);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17032__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17033 === 12))
{var inst_17018 = (state_17032[12]);var inst_17018__$1 = (state_17032[2]);var inst_17019 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_17018__$1);var state_17032__$1 = (function (){var statearr_17048 = state_17032;(statearr_17048[12] = inst_17018__$1);
return statearr_17048;
})();if(cljs.core.truth_(inst_17019))
{var statearr_17049_17073 = state_17032__$1;(statearr_17049_17073[1] = 13);
} else
{var statearr_17050_17074 = state_17032__$1;(statearr_17050_17074[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17033 === 13))
{var inst_17021 = cljs.core.async.close_BANG_.call(null,out);var state_17032__$1 = state_17032;var statearr_17051_17075 = state_17032__$1;(statearr_17051_17075[2] = inst_17021);
(statearr_17051_17075[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17033 === 14))
{var inst_17018 = (state_17032[12]);var inst_17023 = cljs.core.apply.call(null,f,inst_17018);var state_17032__$1 = state_17032;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17032__$1,16,out,inst_17023);
} else
{if((state_val_17033 === 15))
{var inst_17028 = (state_17032[2]);var state_17032__$1 = state_17032;var statearr_17052_17076 = state_17032__$1;(statearr_17052_17076[2] = inst_17028);
(statearr_17052_17076[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17033 === 16))
{var inst_17025 = (state_17032[2]);var state_17032__$1 = (function (){var statearr_17053 = state_17032;(statearr_17053[13] = inst_17025);
return statearr_17053;
})();var statearr_17054_17077 = state_17032__$1;(statearr_17054_17077[2] = null);
(statearr_17054_17077[1] = 2);
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
var state_machine__11486__auto____0 = (function (){var statearr_17058 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17058[0] = state_machine__11486__auto__);
(statearr_17058[1] = 1);
return statearr_17058;
});
var state_machine__11486__auto____1 = (function (state_17032){while(true){
var ret_value__11487__auto__ = (function (){try{while(true){
var result__11488__auto__ = switch__11485__auto__.call(null,state_17032);if(cljs.core.keyword_identical_QMARK_.call(null,result__11488__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__11488__auto__;
}
break;
}
}catch (e17059){if((e17059 instanceof Object))
{var ex__11489__auto__ = e17059;var statearr_17060_17078 = state_17032;(statearr_17060_17078[5] = ex__11489__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17032);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17059;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11487__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17079 = state_17032;
state_17032 = G__17079;
continue;
}
} else
{return ret_value__11487__auto__;
}
break;
}
});
state_machine__11486__auto__ = function(state_17032){
switch(arguments.length){
case 0:
return state_machine__11486__auto____0.call(this);
case 1:
return state_machine__11486__auto____1.call(this,state_17032);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11486__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11486__auto____0;
state_machine__11486__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11486__auto____1;
return state_machine__11486__auto__;
})()
;})(switch__11485__auto__))
})();var state__11502__auto__ = (function (){var statearr_17061 = f__11501__auto__.call(null);(statearr_17061[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11500__auto___17062);
return statearr_17061;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11500__auto___17187 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__11501__auto__ = (function (){var switch__11485__auto__ = (function (state_17163){var state_val_17164 = (state_17163[1]);if((state_val_17164 === 1))
{var inst_17134 = cljs.core.vec.call(null,chs);var inst_17135 = inst_17134;var state_17163__$1 = (function (){var statearr_17165 = state_17163;(statearr_17165[7] = inst_17135);
return statearr_17165;
})();var statearr_17166_17188 = state_17163__$1;(statearr_17166_17188[2] = null);
(statearr_17166_17188[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17164 === 2))
{var inst_17135 = (state_17163[7]);var inst_17137 = cljs.core.count.call(null,inst_17135);var inst_17138 = (inst_17137 > 0);var state_17163__$1 = state_17163;if(cljs.core.truth_(inst_17138))
{var statearr_17167_17189 = state_17163__$1;(statearr_17167_17189[1] = 4);
} else
{var statearr_17168_17190 = state_17163__$1;(statearr_17168_17190[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17164 === 3))
{var inst_17161 = (state_17163[2]);var state_17163__$1 = state_17163;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17163__$1,inst_17161);
} else
{if((state_val_17164 === 4))
{var inst_17135 = (state_17163[7]);var state_17163__$1 = state_17163;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_17163__$1,7,inst_17135);
} else
{if((state_val_17164 === 5))
{var inst_17157 = cljs.core.async.close_BANG_.call(null,out);var state_17163__$1 = state_17163;var statearr_17169_17191 = state_17163__$1;(statearr_17169_17191[2] = inst_17157);
(statearr_17169_17191[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17164 === 6))
{var inst_17159 = (state_17163[2]);var state_17163__$1 = state_17163;var statearr_17170_17192 = state_17163__$1;(statearr_17170_17192[2] = inst_17159);
(statearr_17170_17192[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17164 === 7))
{var inst_17143 = (state_17163[8]);var inst_17142 = (state_17163[9]);var inst_17142__$1 = (state_17163[2]);var inst_17143__$1 = cljs.core.nth.call(null,inst_17142__$1,0,null);var inst_17144 = cljs.core.nth.call(null,inst_17142__$1,1,null);var inst_17145 = (inst_17143__$1 == null);var state_17163__$1 = (function (){var statearr_17171 = state_17163;(statearr_17171[8] = inst_17143__$1);
(statearr_17171[9] = inst_17142__$1);
(statearr_17171[10] = inst_17144);
return statearr_17171;
})();if(cljs.core.truth_(inst_17145))
{var statearr_17172_17193 = state_17163__$1;(statearr_17172_17193[1] = 8);
} else
{var statearr_17173_17194 = state_17163__$1;(statearr_17173_17194[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17164 === 8))
{var inst_17135 = (state_17163[7]);var inst_17143 = (state_17163[8]);var inst_17142 = (state_17163[9]);var inst_17144 = (state_17163[10]);var inst_17147 = (function (){var c = inst_17144;var v = inst_17143;var vec__17140 = inst_17142;var cs = inst_17135;return ((function (c,v,vec__17140,cs,inst_17135,inst_17143,inst_17142,inst_17144,state_val_17164){
return (function (p1__17080_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__17080_SHARP_);
});
;})(c,v,vec__17140,cs,inst_17135,inst_17143,inst_17142,inst_17144,state_val_17164))
})();var inst_17148 = cljs.core.filterv.call(null,inst_17147,inst_17135);var inst_17135__$1 = inst_17148;var state_17163__$1 = (function (){var statearr_17174 = state_17163;(statearr_17174[7] = inst_17135__$1);
return statearr_17174;
})();var statearr_17175_17195 = state_17163__$1;(statearr_17175_17195[2] = null);
(statearr_17175_17195[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17164 === 9))
{var inst_17143 = (state_17163[8]);var state_17163__$1 = state_17163;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17163__$1,11,out,inst_17143);
} else
{if((state_val_17164 === 10))
{var inst_17155 = (state_17163[2]);var state_17163__$1 = state_17163;var statearr_17177_17196 = state_17163__$1;(statearr_17177_17196[2] = inst_17155);
(statearr_17177_17196[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17164 === 11))
{var inst_17135 = (state_17163[7]);var inst_17152 = (state_17163[2]);var tmp17176 = inst_17135;var inst_17135__$1 = tmp17176;var state_17163__$1 = (function (){var statearr_17178 = state_17163;(statearr_17178[7] = inst_17135__$1);
(statearr_17178[11] = inst_17152);
return statearr_17178;
})();var statearr_17179_17197 = state_17163__$1;(statearr_17179_17197[2] = null);
(statearr_17179_17197[1] = 2);
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
var state_machine__11486__auto____0 = (function (){var statearr_17183 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17183[0] = state_machine__11486__auto__);
(statearr_17183[1] = 1);
return statearr_17183;
});
var state_machine__11486__auto____1 = (function (state_17163){while(true){
var ret_value__11487__auto__ = (function (){try{while(true){
var result__11488__auto__ = switch__11485__auto__.call(null,state_17163);if(cljs.core.keyword_identical_QMARK_.call(null,result__11488__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__11488__auto__;
}
break;
}
}catch (e17184){if((e17184 instanceof Object))
{var ex__11489__auto__ = e17184;var statearr_17185_17198 = state_17163;(statearr_17185_17198[5] = ex__11489__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17163);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17184;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11487__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17199 = state_17163;
state_17163 = G__17199;
continue;
}
} else
{return ret_value__11487__auto__;
}
break;
}
});
state_machine__11486__auto__ = function(state_17163){
switch(arguments.length){
case 0:
return state_machine__11486__auto____0.call(this);
case 1:
return state_machine__11486__auto____1.call(this,state_17163);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11486__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11486__auto____0;
state_machine__11486__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11486__auto____1;
return state_machine__11486__auto__;
})()
;})(switch__11485__auto__))
})();var state__11502__auto__ = (function (){var statearr_17186 = f__11501__auto__.call(null);(statearr_17186[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11500__auto___17187);
return statearr_17186;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11500__auto___17292 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__11501__auto__ = (function (){var switch__11485__auto__ = (function (state_17269){var state_val_17270 = (state_17269[1]);if((state_val_17270 === 1))
{var inst_17246 = 0;var state_17269__$1 = (function (){var statearr_17271 = state_17269;(statearr_17271[7] = inst_17246);
return statearr_17271;
})();var statearr_17272_17293 = state_17269__$1;(statearr_17272_17293[2] = null);
(statearr_17272_17293[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17270 === 2))
{var inst_17246 = (state_17269[7]);var inst_17248 = (inst_17246 < n);var state_17269__$1 = state_17269;if(cljs.core.truth_(inst_17248))
{var statearr_17273_17294 = state_17269__$1;(statearr_17273_17294[1] = 4);
} else
{var statearr_17274_17295 = state_17269__$1;(statearr_17274_17295[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17270 === 3))
{var inst_17266 = (state_17269[2]);var inst_17267 = cljs.core.async.close_BANG_.call(null,out);var state_17269__$1 = (function (){var statearr_17275 = state_17269;(statearr_17275[8] = inst_17266);
return statearr_17275;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17269__$1,inst_17267);
} else
{if((state_val_17270 === 4))
{var state_17269__$1 = state_17269;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17269__$1,7,ch);
} else
{if((state_val_17270 === 5))
{var state_17269__$1 = state_17269;var statearr_17276_17296 = state_17269__$1;(statearr_17276_17296[2] = null);
(statearr_17276_17296[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17270 === 6))
{var inst_17264 = (state_17269[2]);var state_17269__$1 = state_17269;var statearr_17277_17297 = state_17269__$1;(statearr_17277_17297[2] = inst_17264);
(statearr_17277_17297[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17270 === 7))
{var inst_17251 = (state_17269[9]);var inst_17251__$1 = (state_17269[2]);var inst_17252 = (inst_17251__$1 == null);var inst_17253 = cljs.core.not.call(null,inst_17252);var state_17269__$1 = (function (){var statearr_17278 = state_17269;(statearr_17278[9] = inst_17251__$1);
return statearr_17278;
})();if(inst_17253)
{var statearr_17279_17298 = state_17269__$1;(statearr_17279_17298[1] = 8);
} else
{var statearr_17280_17299 = state_17269__$1;(statearr_17280_17299[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17270 === 8))
{var inst_17251 = (state_17269[9]);var state_17269__$1 = state_17269;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17269__$1,11,out,inst_17251);
} else
{if((state_val_17270 === 9))
{var state_17269__$1 = state_17269;var statearr_17281_17300 = state_17269__$1;(statearr_17281_17300[2] = null);
(statearr_17281_17300[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17270 === 10))
{var inst_17261 = (state_17269[2]);var state_17269__$1 = state_17269;var statearr_17282_17301 = state_17269__$1;(statearr_17282_17301[2] = inst_17261);
(statearr_17282_17301[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17270 === 11))
{var inst_17246 = (state_17269[7]);var inst_17256 = (state_17269[2]);var inst_17257 = (inst_17246 + 1);var inst_17246__$1 = inst_17257;var state_17269__$1 = (function (){var statearr_17283 = state_17269;(statearr_17283[7] = inst_17246__$1);
(statearr_17283[10] = inst_17256);
return statearr_17283;
})();var statearr_17284_17302 = state_17269__$1;(statearr_17284_17302[2] = null);
(statearr_17284_17302[1] = 2);
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
var state_machine__11486__auto____0 = (function (){var statearr_17288 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_17288[0] = state_machine__11486__auto__);
(statearr_17288[1] = 1);
return statearr_17288;
});
var state_machine__11486__auto____1 = (function (state_17269){while(true){
var ret_value__11487__auto__ = (function (){try{while(true){
var result__11488__auto__ = switch__11485__auto__.call(null,state_17269);if(cljs.core.keyword_identical_QMARK_.call(null,result__11488__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__11488__auto__;
}
break;
}
}catch (e17289){if((e17289 instanceof Object))
{var ex__11489__auto__ = e17289;var statearr_17290_17303 = state_17269;(statearr_17290_17303[5] = ex__11489__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17269);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17289;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11487__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17304 = state_17269;
state_17269 = G__17304;
continue;
}
} else
{return ret_value__11487__auto__;
}
break;
}
});
state_machine__11486__auto__ = function(state_17269){
switch(arguments.length){
case 0:
return state_machine__11486__auto____0.call(this);
case 1:
return state_machine__11486__auto____1.call(this,state_17269);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11486__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11486__auto____0;
state_machine__11486__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11486__auto____1;
return state_machine__11486__auto__;
})()
;})(switch__11485__auto__))
})();var state__11502__auto__ = (function (){var statearr_17291 = f__11501__auto__.call(null);(statearr_17291[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11500__auto___17292);
return statearr_17291;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11500__auto___17401 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__11501__auto__ = (function (){var switch__11485__auto__ = (function (state_17376){var state_val_17377 = (state_17376[1]);if((state_val_17377 === 1))
{var inst_17353 = null;var state_17376__$1 = (function (){var statearr_17378 = state_17376;(statearr_17378[7] = inst_17353);
return statearr_17378;
})();var statearr_17379_17402 = state_17376__$1;(statearr_17379_17402[2] = null);
(statearr_17379_17402[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17377 === 2))
{var state_17376__$1 = state_17376;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17376__$1,4,ch);
} else
{if((state_val_17377 === 3))
{var inst_17373 = (state_17376[2]);var inst_17374 = cljs.core.async.close_BANG_.call(null,out);var state_17376__$1 = (function (){var statearr_17380 = state_17376;(statearr_17380[8] = inst_17373);
return statearr_17380;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17376__$1,inst_17374);
} else
{if((state_val_17377 === 4))
{var inst_17356 = (state_17376[9]);var inst_17356__$1 = (state_17376[2]);var inst_17357 = (inst_17356__$1 == null);var inst_17358 = cljs.core.not.call(null,inst_17357);var state_17376__$1 = (function (){var statearr_17381 = state_17376;(statearr_17381[9] = inst_17356__$1);
return statearr_17381;
})();if(inst_17358)
{var statearr_17382_17403 = state_17376__$1;(statearr_17382_17403[1] = 5);
} else
{var statearr_17383_17404 = state_17376__$1;(statearr_17383_17404[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17377 === 5))
{var inst_17356 = (state_17376[9]);var inst_17353 = (state_17376[7]);var inst_17360 = cljs.core._EQ_.call(null,inst_17356,inst_17353);var state_17376__$1 = state_17376;if(inst_17360)
{var statearr_17384_17405 = state_17376__$1;(statearr_17384_17405[1] = 8);
} else
{var statearr_17385_17406 = state_17376__$1;(statearr_17385_17406[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17377 === 6))
{var state_17376__$1 = state_17376;var statearr_17387_17407 = state_17376__$1;(statearr_17387_17407[2] = null);
(statearr_17387_17407[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17377 === 7))
{var inst_17371 = (state_17376[2]);var state_17376__$1 = state_17376;var statearr_17388_17408 = state_17376__$1;(statearr_17388_17408[2] = inst_17371);
(statearr_17388_17408[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17377 === 8))
{var inst_17353 = (state_17376[7]);var tmp17386 = inst_17353;var inst_17353__$1 = tmp17386;var state_17376__$1 = (function (){var statearr_17389 = state_17376;(statearr_17389[7] = inst_17353__$1);
return statearr_17389;
})();var statearr_17390_17409 = state_17376__$1;(statearr_17390_17409[2] = null);
(statearr_17390_17409[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17377 === 9))
{var inst_17356 = (state_17376[9]);var state_17376__$1 = state_17376;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17376__$1,11,out,inst_17356);
} else
{if((state_val_17377 === 10))
{var inst_17368 = (state_17376[2]);var state_17376__$1 = state_17376;var statearr_17391_17410 = state_17376__$1;(statearr_17391_17410[2] = inst_17368);
(statearr_17391_17410[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17377 === 11))
{var inst_17356 = (state_17376[9]);var inst_17365 = (state_17376[2]);var inst_17353 = inst_17356;var state_17376__$1 = (function (){var statearr_17392 = state_17376;(statearr_17392[7] = inst_17353);
(statearr_17392[10] = inst_17365);
return statearr_17392;
})();var statearr_17393_17411 = state_17376__$1;(statearr_17393_17411[2] = null);
(statearr_17393_17411[1] = 2);
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
var state_machine__11486__auto____0 = (function (){var statearr_17397 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_17397[0] = state_machine__11486__auto__);
(statearr_17397[1] = 1);
return statearr_17397;
});
var state_machine__11486__auto____1 = (function (state_17376){while(true){
var ret_value__11487__auto__ = (function (){try{while(true){
var result__11488__auto__ = switch__11485__auto__.call(null,state_17376);if(cljs.core.keyword_identical_QMARK_.call(null,result__11488__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__11488__auto__;
}
break;
}
}catch (e17398){if((e17398 instanceof Object))
{var ex__11489__auto__ = e17398;var statearr_17399_17412 = state_17376;(statearr_17399_17412[5] = ex__11489__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17376);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17398;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11487__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17413 = state_17376;
state_17376 = G__17413;
continue;
}
} else
{return ret_value__11487__auto__;
}
break;
}
});
state_machine__11486__auto__ = function(state_17376){
switch(arguments.length){
case 0:
return state_machine__11486__auto____0.call(this);
case 1:
return state_machine__11486__auto____1.call(this,state_17376);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11486__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11486__auto____0;
state_machine__11486__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11486__auto____1;
return state_machine__11486__auto__;
})()
;})(switch__11485__auto__))
})();var state__11502__auto__ = (function (){var statearr_17400 = f__11501__auto__.call(null);(statearr_17400[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11500__auto___17401);
return statearr_17400;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11500__auto___17548 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__11501__auto__ = (function (){var switch__11485__auto__ = (function (state_17518){var state_val_17519 = (state_17518[1]);if((state_val_17519 === 1))
{var inst_17481 = (new Array(n));var inst_17482 = inst_17481;var inst_17483 = 0;var state_17518__$1 = (function (){var statearr_17520 = state_17518;(statearr_17520[7] = inst_17483);
(statearr_17520[8] = inst_17482);
return statearr_17520;
})();var statearr_17521_17549 = state_17518__$1;(statearr_17521_17549[2] = null);
(statearr_17521_17549[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17519 === 2))
{var state_17518__$1 = state_17518;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17518__$1,4,ch);
} else
{if((state_val_17519 === 3))
{var inst_17516 = (state_17518[2]);var state_17518__$1 = state_17518;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17518__$1,inst_17516);
} else
{if((state_val_17519 === 4))
{var inst_17486 = (state_17518[9]);var inst_17486__$1 = (state_17518[2]);var inst_17487 = (inst_17486__$1 == null);var inst_17488 = cljs.core.not.call(null,inst_17487);var state_17518__$1 = (function (){var statearr_17522 = state_17518;(statearr_17522[9] = inst_17486__$1);
return statearr_17522;
})();if(inst_17488)
{var statearr_17523_17550 = state_17518__$1;(statearr_17523_17550[1] = 5);
} else
{var statearr_17524_17551 = state_17518__$1;(statearr_17524_17551[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17519 === 5))
{var inst_17491 = (state_17518[10]);var inst_17483 = (state_17518[7]);var inst_17486 = (state_17518[9]);var inst_17482 = (state_17518[8]);var inst_17490 = (inst_17482[inst_17483] = inst_17486);var inst_17491__$1 = (inst_17483 + 1);var inst_17492 = (inst_17491__$1 < n);var state_17518__$1 = (function (){var statearr_17525 = state_17518;(statearr_17525[11] = inst_17490);
(statearr_17525[10] = inst_17491__$1);
return statearr_17525;
})();if(cljs.core.truth_(inst_17492))
{var statearr_17526_17552 = state_17518__$1;(statearr_17526_17552[1] = 8);
} else
{var statearr_17527_17553 = state_17518__$1;(statearr_17527_17553[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17519 === 6))
{var inst_17483 = (state_17518[7]);var inst_17504 = (inst_17483 > 0);var state_17518__$1 = state_17518;if(cljs.core.truth_(inst_17504))
{var statearr_17529_17554 = state_17518__$1;(statearr_17529_17554[1] = 12);
} else
{var statearr_17530_17555 = state_17518__$1;(statearr_17530_17555[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17519 === 7))
{var inst_17514 = (state_17518[2]);var state_17518__$1 = state_17518;var statearr_17531_17556 = state_17518__$1;(statearr_17531_17556[2] = inst_17514);
(statearr_17531_17556[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17519 === 8))
{var inst_17491 = (state_17518[10]);var inst_17482 = (state_17518[8]);var tmp17528 = inst_17482;var inst_17482__$1 = tmp17528;var inst_17483 = inst_17491;var state_17518__$1 = (function (){var statearr_17532 = state_17518;(statearr_17532[7] = inst_17483);
(statearr_17532[8] = inst_17482__$1);
return statearr_17532;
})();var statearr_17533_17557 = state_17518__$1;(statearr_17533_17557[2] = null);
(statearr_17533_17557[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17519 === 9))
{var inst_17482 = (state_17518[8]);var inst_17496 = cljs.core.vec.call(null,inst_17482);var state_17518__$1 = state_17518;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17518__$1,11,out,inst_17496);
} else
{if((state_val_17519 === 10))
{var inst_17502 = (state_17518[2]);var state_17518__$1 = state_17518;var statearr_17534_17558 = state_17518__$1;(statearr_17534_17558[2] = inst_17502);
(statearr_17534_17558[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17519 === 11))
{var inst_17498 = (state_17518[2]);var inst_17499 = (new Array(n));var inst_17482 = inst_17499;var inst_17483 = 0;var state_17518__$1 = (function (){var statearr_17535 = state_17518;(statearr_17535[7] = inst_17483);
(statearr_17535[12] = inst_17498);
(statearr_17535[8] = inst_17482);
return statearr_17535;
})();var statearr_17536_17559 = state_17518__$1;(statearr_17536_17559[2] = null);
(statearr_17536_17559[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17519 === 12))
{var inst_17482 = (state_17518[8]);var inst_17506 = cljs.core.vec.call(null,inst_17482);var state_17518__$1 = state_17518;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17518__$1,15,out,inst_17506);
} else
{if((state_val_17519 === 13))
{var state_17518__$1 = state_17518;var statearr_17537_17560 = state_17518__$1;(statearr_17537_17560[2] = null);
(statearr_17537_17560[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17519 === 14))
{var inst_17511 = (state_17518[2]);var inst_17512 = cljs.core.async.close_BANG_.call(null,out);var state_17518__$1 = (function (){var statearr_17538 = state_17518;(statearr_17538[13] = inst_17511);
return statearr_17538;
})();var statearr_17539_17561 = state_17518__$1;(statearr_17539_17561[2] = inst_17512);
(statearr_17539_17561[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17519 === 15))
{var inst_17508 = (state_17518[2]);var state_17518__$1 = state_17518;var statearr_17540_17562 = state_17518__$1;(statearr_17540_17562[2] = inst_17508);
(statearr_17540_17562[1] = 14);
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
var state_machine__11486__auto____0 = (function (){var statearr_17544 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17544[0] = state_machine__11486__auto__);
(statearr_17544[1] = 1);
return statearr_17544;
});
var state_machine__11486__auto____1 = (function (state_17518){while(true){
var ret_value__11487__auto__ = (function (){try{while(true){
var result__11488__auto__ = switch__11485__auto__.call(null,state_17518);if(cljs.core.keyword_identical_QMARK_.call(null,result__11488__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__11488__auto__;
}
break;
}
}catch (e17545){if((e17545 instanceof Object))
{var ex__11489__auto__ = e17545;var statearr_17546_17563 = state_17518;(statearr_17546_17563[5] = ex__11489__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17518);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17545;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11487__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17564 = state_17518;
state_17518 = G__17564;
continue;
}
} else
{return ret_value__11487__auto__;
}
break;
}
});
state_machine__11486__auto__ = function(state_17518){
switch(arguments.length){
case 0:
return state_machine__11486__auto____0.call(this);
case 1:
return state_machine__11486__auto____1.call(this,state_17518);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11486__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11486__auto____0;
state_machine__11486__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11486__auto____1;
return state_machine__11486__auto__;
})()
;})(switch__11485__auto__))
})();var state__11502__auto__ = (function (){var statearr_17547 = f__11501__auto__.call(null);(statearr_17547[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11500__auto___17548);
return statearr_17547;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11500__auto___17707 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__11501__auto__ = (function (){var switch__11485__auto__ = (function (state_17677){var state_val_17678 = (state_17677[1]);if((state_val_17678 === 1))
{var inst_17636 = [];var inst_17637 = inst_17636;var inst_17638 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_17677__$1 = (function (){var statearr_17679 = state_17677;(statearr_17679[7] = inst_17638);
(statearr_17679[8] = inst_17637);
return statearr_17679;
})();var statearr_17680_17708 = state_17677__$1;(statearr_17680_17708[2] = null);
(statearr_17680_17708[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17678 === 2))
{var state_17677__$1 = state_17677;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17677__$1,4,ch);
} else
{if((state_val_17678 === 3))
{var inst_17675 = (state_17677[2]);var state_17677__$1 = state_17677;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17677__$1,inst_17675);
} else
{if((state_val_17678 === 4))
{var inst_17641 = (state_17677[9]);var inst_17641__$1 = (state_17677[2]);var inst_17642 = (inst_17641__$1 == null);var inst_17643 = cljs.core.not.call(null,inst_17642);var state_17677__$1 = (function (){var statearr_17681 = state_17677;(statearr_17681[9] = inst_17641__$1);
return statearr_17681;
})();if(inst_17643)
{var statearr_17682_17709 = state_17677__$1;(statearr_17682_17709[1] = 5);
} else
{var statearr_17683_17710 = state_17677__$1;(statearr_17683_17710[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17678 === 5))
{var inst_17638 = (state_17677[7]);var inst_17645 = (state_17677[10]);var inst_17641 = (state_17677[9]);var inst_17645__$1 = f.call(null,inst_17641);var inst_17646 = cljs.core._EQ_.call(null,inst_17645__$1,inst_17638);var inst_17647 = cljs.core.keyword_identical_QMARK_.call(null,inst_17638,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_17648 = (inst_17646) || (inst_17647);var state_17677__$1 = (function (){var statearr_17684 = state_17677;(statearr_17684[10] = inst_17645__$1);
return statearr_17684;
})();if(cljs.core.truth_(inst_17648))
{var statearr_17685_17711 = state_17677__$1;(statearr_17685_17711[1] = 8);
} else
{var statearr_17686_17712 = state_17677__$1;(statearr_17686_17712[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17678 === 6))
{var inst_17637 = (state_17677[8]);var inst_17662 = inst_17637.length;var inst_17663 = (inst_17662 > 0);var state_17677__$1 = state_17677;if(cljs.core.truth_(inst_17663))
{var statearr_17688_17713 = state_17677__$1;(statearr_17688_17713[1] = 12);
} else
{var statearr_17689_17714 = state_17677__$1;(statearr_17689_17714[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17678 === 7))
{var inst_17673 = (state_17677[2]);var state_17677__$1 = state_17677;var statearr_17690_17715 = state_17677__$1;(statearr_17690_17715[2] = inst_17673);
(statearr_17690_17715[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17678 === 8))
{var inst_17645 = (state_17677[10]);var inst_17641 = (state_17677[9]);var inst_17637 = (state_17677[8]);var inst_17650 = inst_17637.push(inst_17641);var tmp17687 = inst_17637;var inst_17637__$1 = tmp17687;var inst_17638 = inst_17645;var state_17677__$1 = (function (){var statearr_17691 = state_17677;(statearr_17691[7] = inst_17638);
(statearr_17691[8] = inst_17637__$1);
(statearr_17691[11] = inst_17650);
return statearr_17691;
})();var statearr_17692_17716 = state_17677__$1;(statearr_17692_17716[2] = null);
(statearr_17692_17716[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17678 === 9))
{var inst_17637 = (state_17677[8]);var inst_17653 = cljs.core.vec.call(null,inst_17637);var state_17677__$1 = state_17677;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17677__$1,11,out,inst_17653);
} else
{if((state_val_17678 === 10))
{var inst_17660 = (state_17677[2]);var state_17677__$1 = state_17677;var statearr_17693_17717 = state_17677__$1;(statearr_17693_17717[2] = inst_17660);
(statearr_17693_17717[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17678 === 11))
{var inst_17645 = (state_17677[10]);var inst_17641 = (state_17677[9]);var inst_17655 = (state_17677[2]);var inst_17656 = [];var inst_17657 = inst_17656.push(inst_17641);var inst_17637 = inst_17656;var inst_17638 = inst_17645;var state_17677__$1 = (function (){var statearr_17694 = state_17677;(statearr_17694[7] = inst_17638);
(statearr_17694[8] = inst_17637);
(statearr_17694[12] = inst_17655);
(statearr_17694[13] = inst_17657);
return statearr_17694;
})();var statearr_17695_17718 = state_17677__$1;(statearr_17695_17718[2] = null);
(statearr_17695_17718[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17678 === 12))
{var inst_17637 = (state_17677[8]);var inst_17665 = cljs.core.vec.call(null,inst_17637);var state_17677__$1 = state_17677;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17677__$1,15,out,inst_17665);
} else
{if((state_val_17678 === 13))
{var state_17677__$1 = state_17677;var statearr_17696_17719 = state_17677__$1;(statearr_17696_17719[2] = null);
(statearr_17696_17719[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17678 === 14))
{var inst_17670 = (state_17677[2]);var inst_17671 = cljs.core.async.close_BANG_.call(null,out);var state_17677__$1 = (function (){var statearr_17697 = state_17677;(statearr_17697[14] = inst_17670);
return statearr_17697;
})();var statearr_17698_17720 = state_17677__$1;(statearr_17698_17720[2] = inst_17671);
(statearr_17698_17720[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17678 === 15))
{var inst_17667 = (state_17677[2]);var state_17677__$1 = state_17677;var statearr_17699_17721 = state_17677__$1;(statearr_17699_17721[2] = inst_17667);
(statearr_17699_17721[1] = 14);
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
var state_machine__11486__auto____0 = (function (){var statearr_17703 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17703[0] = state_machine__11486__auto__);
(statearr_17703[1] = 1);
return statearr_17703;
});
var state_machine__11486__auto____1 = (function (state_17677){while(true){
var ret_value__11487__auto__ = (function (){try{while(true){
var result__11488__auto__ = switch__11485__auto__.call(null,state_17677);if(cljs.core.keyword_identical_QMARK_.call(null,result__11488__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__11488__auto__;
}
break;
}
}catch (e17704){if((e17704 instanceof Object))
{var ex__11489__auto__ = e17704;var statearr_17705_17722 = state_17677;(statearr_17705_17722[5] = ex__11489__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17677);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17704;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11487__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17723 = state_17677;
state_17677 = G__17723;
continue;
}
} else
{return ret_value__11487__auto__;
}
break;
}
});
state_machine__11486__auto__ = function(state_17677){
switch(arguments.length){
case 0:
return state_machine__11486__auto____0.call(this);
case 1:
return state_machine__11486__auto____1.call(this,state_17677);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11486__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11486__auto____0;
state_machine__11486__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11486__auto____1;
return state_machine__11486__auto__;
})()
;})(switch__11485__auto__))
})();var state__11502__auto__ = (function (){var statearr_17706 = f__11501__auto__.call(null);(statearr_17706[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11500__auto___17707);
return statearr_17706;
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
