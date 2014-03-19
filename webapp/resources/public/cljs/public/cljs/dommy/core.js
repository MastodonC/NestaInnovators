// Compiled by ClojureScript 0.0-2138
goog.provide('dommy.core');
goog.require('cljs.core');
goog.require('dommy.template');
goog.require('dommy.template');
goog.require('dommy.attrs');
goog.require('dommy.attrs');
goog.require('dommy.utils');
goog.require('dommy.utils');
goog.require('clojure.string');
goog.require('clojure.string');
dommy.core.has_class_QMARK_ = dommy.attrs.has_class_QMARK_;
dommy.core.add_class_BANG_ = dommy.attrs.add_class_BANG_;
dommy.core.remove_class_BANG_ = dommy.attrs.remove_class_BANG_;
dommy.core.toggle_class_BANG_ = dommy.attrs.toggle_class_BANG_;
dommy.core.set_attr_BANG_ = dommy.attrs.set_attr_BANG_;
dommy.core.set_style_BANG_ = dommy.attrs.set_style_BANG_;
dommy.core.set_px_BANG_ = dommy.attrs.set_px_BANG_;
dommy.core.px = dommy.attrs.px;
dommy.core.style_str = dommy.attrs.style_str;
dommy.core.style = dommy.attrs.style;
dommy.core.remove_attr_BANG_ = dommy.attrs.remove_attr_BANG_;
dommy.core.toggle_attr_BANG_ = dommy.attrs.toggle_attr_BANG_;
dommy.core.attr = dommy.attrs.attr;
dommy.core.hidden_QMARK_ = dommy.attrs.hidden_QMARK_;
dommy.core.toggle_BANG_ = dommy.attrs.toggle_BANG_;
dommy.core.hide_BANG_ = dommy.attrs.hide_BANG_;
dommy.core.show_BANG_ = dommy.attrs.show_BANG_;
dommy.core.bounding_client_rect = dommy.attrs.bounding_client_rect;
dommy.core.scroll_into_view = dommy.attrs.scroll_into_view;
dommy.core.dissoc_in = dommy.utils.dissoc_in;
dommy.core.__GT_Array = dommy.utils.__GT_Array;
dommy.core.set_html_BANG_ = (function set_html_BANG_(elem,html){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);elem__$1.innerHTML = html;
return elem__$1;
});
dommy.core.html = (function html(elem){return dommy.template.__GT_node_like.call(null,elem).innerHTML;
});
dommy.core.set_text_BANG_ = (function set_text_BANG_(elem,text){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var prop = (cljs.core.truth_(elem__$1.textContent)?"textContent":"innerText");(elem__$1[prop] = text);
return elem__$1;
});
dommy.core.text = (function text(elem){var or__9385__auto__ = elem.textContent;if(cljs.core.truth_(or__9385__auto__))
{return or__9385__auto__;
} else
{return elem.innerText;
}
});
dommy.core.value = (function value(elem){return dommy.template.__GT_node_like.call(null,elem).value;
});
dommy.core.set_value_BANG_ = (function set_value_BANG_(elem,value){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);elem__$1.value = value;
return elem__$1;
});
/**
* append `child` to `parent`. 'parent' and 'child' should be node-like
* (work with dommy.template/->node-like). The node-like projection
* of parent is returned after appending child.
* @param {...*} var_args
*/
dommy.core.append_BANG_ = (function() {
var append_BANG_ = null;
var append_BANG___2 = (function (parent,child){var G__19021 = dommy.template.__GT_node_like.call(null,parent);G__19021.appendChild(dommy.template.__GT_node_like.call(null,child));
return G__19021;
});
var append_BANG___3 = (function() { 
var G__19026__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__19022_19027 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__19023_19028 = null;var count__19024_19029 = 0;var i__19025_19030 = 0;while(true){
if((i__19025_19030 < count__19024_19029))
{var c_19031 = cljs.core._nth.call(null,chunk__19023_19028,i__19025_19030);append_BANG_.call(null,parent__$1,c_19031);
{
var G__19032 = seq__19022_19027;
var G__19033 = chunk__19023_19028;
var G__19034 = count__19024_19029;
var G__19035 = (i__19025_19030 + 1);
seq__19022_19027 = G__19032;
chunk__19023_19028 = G__19033;
count__19024_19029 = G__19034;
i__19025_19030 = G__19035;
continue;
}
} else
{var temp__4092__auto___19036 = cljs.core.seq.call(null,seq__19022_19027);if(temp__4092__auto___19036)
{var seq__19022_19037__$1 = temp__4092__auto___19036;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19022_19037__$1))
{var c__10127__auto___19038 = cljs.core.chunk_first.call(null,seq__19022_19037__$1);{
var G__19039 = cljs.core.chunk_rest.call(null,seq__19022_19037__$1);
var G__19040 = c__10127__auto___19038;
var G__19041 = cljs.core.count.call(null,c__10127__auto___19038);
var G__19042 = 0;
seq__19022_19027 = G__19039;
chunk__19023_19028 = G__19040;
count__19024_19029 = G__19041;
i__19025_19030 = G__19042;
continue;
}
} else
{var c_19043 = cljs.core.first.call(null,seq__19022_19037__$1);append_BANG_.call(null,parent__$1,c_19043);
{
var G__19044 = cljs.core.next.call(null,seq__19022_19037__$1);
var G__19045 = null;
var G__19046 = 0;
var G__19047 = 0;
seq__19022_19027 = G__19044;
chunk__19023_19028 = G__19045;
count__19024_19029 = G__19046;
i__19025_19030 = G__19047;
continue;
}
}
} else
{}
}
break;
}
return parent__$1;
};
var G__19026 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__19026__delegate.call(this,parent,child,more_children);};
G__19026.cljs$lang$maxFixedArity = 2;
G__19026.cljs$lang$applyTo = (function (arglist__19048){
var parent = cljs.core.first(arglist__19048);
arglist__19048 = cljs.core.next(arglist__19048);
var child = cljs.core.first(arglist__19048);
var more_children = cljs.core.rest(arglist__19048);
return G__19026__delegate(parent,child,more_children);
});
G__19026.cljs$core$IFn$_invoke$arity$variadic = G__19026__delegate;
return G__19026;
})()
;
append_BANG_ = function(parent,child,var_args){
var more_children = var_args;
switch(arguments.length){
case 2:
return append_BANG___2.call(this,parent,child);
default:
return append_BANG___3.cljs$core$IFn$_invoke$arity$variadic(parent,child, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
append_BANG_.cljs$lang$maxFixedArity = 2;
append_BANG_.cljs$lang$applyTo = append_BANG___3.cljs$lang$applyTo;
append_BANG_.cljs$core$IFn$_invoke$arity$2 = append_BANG___2;
append_BANG_.cljs$core$IFn$_invoke$arity$variadic = append_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return append_BANG_;
})()
;
/**
* prepend `child` to `parent`, both node-like
* return ->node-like projection of `parent`
* @param {...*} var_args
*/
dommy.core.prepend_BANG_ = (function() {
var prepend_BANG_ = null;
var prepend_BANG___2 = (function (parent,child){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);return parent__$1.insertBefore(dommy.template.__GT_node_like.call(null,child),parent__$1.firstChild);
});
var prepend_BANG___3 = (function() { 
var G__19057__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__19053_19058 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__19054_19059 = null;var count__19055_19060 = 0;var i__19056_19061 = 0;while(true){
if((i__19056_19061 < count__19055_19060))
{var c_19062 = cljs.core._nth.call(null,chunk__19054_19059,i__19056_19061);prepend_BANG_.call(null,parent__$1,c_19062);
{
var G__19063 = seq__19053_19058;
var G__19064 = chunk__19054_19059;
var G__19065 = count__19055_19060;
var G__19066 = (i__19056_19061 + 1);
seq__19053_19058 = G__19063;
chunk__19054_19059 = G__19064;
count__19055_19060 = G__19065;
i__19056_19061 = G__19066;
continue;
}
} else
{var temp__4092__auto___19067 = cljs.core.seq.call(null,seq__19053_19058);if(temp__4092__auto___19067)
{var seq__19053_19068__$1 = temp__4092__auto___19067;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19053_19068__$1))
{var c__10127__auto___19069 = cljs.core.chunk_first.call(null,seq__19053_19068__$1);{
var G__19070 = cljs.core.chunk_rest.call(null,seq__19053_19068__$1);
var G__19071 = c__10127__auto___19069;
var G__19072 = cljs.core.count.call(null,c__10127__auto___19069);
var G__19073 = 0;
seq__19053_19058 = G__19070;
chunk__19054_19059 = G__19071;
count__19055_19060 = G__19072;
i__19056_19061 = G__19073;
continue;
}
} else
{var c_19074 = cljs.core.first.call(null,seq__19053_19068__$1);prepend_BANG_.call(null,parent__$1,c_19074);
{
var G__19075 = cljs.core.next.call(null,seq__19053_19068__$1);
var G__19076 = null;
var G__19077 = 0;
var G__19078 = 0;
seq__19053_19058 = G__19075;
chunk__19054_19059 = G__19076;
count__19055_19060 = G__19077;
i__19056_19061 = G__19078;
continue;
}
}
} else
{}
}
break;
}
return parent__$1;
};
var G__19057 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__19057__delegate.call(this,parent,child,more_children);};
G__19057.cljs$lang$maxFixedArity = 2;
G__19057.cljs$lang$applyTo = (function (arglist__19079){
var parent = cljs.core.first(arglist__19079);
arglist__19079 = cljs.core.next(arglist__19079);
var child = cljs.core.first(arglist__19079);
var more_children = cljs.core.rest(arglist__19079);
return G__19057__delegate(parent,child,more_children);
});
G__19057.cljs$core$IFn$_invoke$arity$variadic = G__19057__delegate;
return G__19057;
})()
;
prepend_BANG_ = function(parent,child,var_args){
var more_children = var_args;
switch(arguments.length){
case 2:
return prepend_BANG___2.call(this,parent,child);
default:
return prepend_BANG___3.cljs$core$IFn$_invoke$arity$variadic(parent,child, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
prepend_BANG_.cljs$lang$maxFixedArity = 2;
prepend_BANG_.cljs$lang$applyTo = prepend_BANG___3.cljs$lang$applyTo;
prepend_BANG_.cljs$core$IFn$_invoke$arity$2 = prepend_BANG___2;
prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = prepend_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return prepend_BANG_;
})()
;
/**
* insert `node` before `other`, both node-like,
* `other` must have a parent. return `node`
*/
dommy.core.insert_before_BANG_ = (function insert_before_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);if(cljs.core.truth_(other__$1.parentNode))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,".-parentNode",".-parentNode",499016324,null),new cljs.core.Symbol(null,"other","other",-1534461751,null))))].join('')));
}
other__$1.parentNode.insertBefore(actual_node,other__$1);
return actual_node;
});
/**
* insert `node` after `other`, both node-like,
* `other` must have a parent. return `node`
*/
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);var parent = other__$1.parentNode;var temp__4090__auto___19080 = other__$1.nextSibling;if(cljs.core.truth_(temp__4090__auto___19080))
{var next_19081 = temp__4090__auto___19080;parent.insertBefore(actual_node,next_19081);
} else
{parent.appendChild(actual_node);
}
return actual_node;
});
/**
* replace `elem` with `new`, both node-like, return node-like projection of new.
* node-like projection of elem must have parent.
*/
dommy.core.replace_BANG_ = (function replace_BANG_(elem,new$){var new$__$1 = dommy.template.__GT_node_like.call(null,new$);var elem__$1 = dommy.template.__GT_node_like.call(null,elem);if(cljs.core.truth_(elem__$1.parentNode))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,".-parentNode",".-parentNode",499016324,null),new cljs.core.Symbol(null,"elem","elem",-1637415608,null))))].join('')));
}
elem__$1.parentNode.replaceChild(new$__$1,elem__$1);
return new$__$1;
});
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(parent,node_like){var G__19083 = dommy.template.__GT_node_like.call(null,parent);G__19083.innerHTML = "";
dommy.core.append_BANG_.call(null,G__19083,node_like);
return G__19083;
});
/**
* remove node-like `elem` from parent, return node-like projection of elem
*/
dommy.core.remove_BANG_ = (function remove_BANG_(elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var G__19085 = elem__$1.parentNode;G__19085.removeChild(elem__$1);
return G__19085;
});
/**
* clears all children from `elem`
*/
dommy.core.clear_BANG_ = (function clear_BANG_(elem){return dommy.template.__GT_node_like.call(null,elem).innerHTML = "";
});
dommy.core.selector = (function selector(data){if(cljs.core.coll_QMARK_.call(null,data))
{return clojure.string.join.call(null," ",cljs.core.map.call(null,selector,data));
} else
{if((typeof data === 'string') || ((data instanceof cljs.core.Keyword)))
{return cljs.core.name.call(null,data);
} else
{return null;
}
}
});
dommy.core.selector_map = (function selector_map(template,key_selectors_map){var container = dommy.template.__GT_node_like.call(null,template);if(!(cljs.core.contains_QMARK_.call(null,key_selectors_map,new cljs.core.Keyword(null,"container","container",602947571))))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-2051487815,null),new cljs.core.Symbol(null,"key-selectors-map","key-selectors-map",19054414,null),new cljs.core.Keyword(null,"container","container",602947571)))))].join('')));
}
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"container","container",602947571),container], null),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__19091){var vec__19092 = p__19091;var k = cljs.core.nth.call(null,vec__19092,0,null);var v = cljs.core.nth.call(null,vec__19092,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(cljs.core.truth_(new cljs.core.Keyword(null,"live","live",1017226334).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v)))?(function (){if(typeof dommy.core.t19093 !== 'undefined')
{} else
{
/**
* @constructor
*/
dommy.core.t19093 = (function (v,k,vec__19092,p__19091,container,key_selectors_map,template,selector_map,meta19094){
this.v = v;
this.k = k;
this.vec__19092 = vec__19092;
this.p__19091 = p__19091;
this.container = container;
this.key_selectors_map = key_selectors_map;
this.template = template;
this.selector_map = selector_map;
this.meta19094 = meta19094;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 425984;
})
dommy.core.t19093.cljs$lang$type = true;
dommy.core.t19093.cljs$lang$ctorStr = "dommy.core/t19093";
dommy.core.t19093.cljs$lang$ctorPrWriter = (function (this__9947__auto__,writer__9948__auto__,opt__9949__auto__){return cljs.core._write.call(null,writer__9948__auto__,"dommy.core/t19093");
});
dommy.core.t19093.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return dommy.utils.__GT_Array.call(null,dommy.template.__GT_node_like.call(null,self__.container).querySelectorAll(dommy.core.selector.call(null,self__.v)));
});
dommy.core.t19093.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19095){var self__ = this;
var _19095__$1 = this;return self__.meta19094;
});
dommy.core.t19093.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19095,meta19094__$1){var self__ = this;
var _19095__$1 = this;return (new dommy.core.t19093(self__.v,self__.k,self__.vec__19092,self__.p__19091,self__.container,self__.key_selectors_map,self__.template,self__.selector_map,meta19094__$1));
});
dommy.core.__GT_t19093 = (function __GT_t19093(v__$1,k__$1,vec__19092__$1,p__19091__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta19094){return (new dommy.core.t19093(v__$1,k__$1,vec__19092__$1,p__19091__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta19094));
});
}
return (new dommy.core.t19093(v,k,vec__19092,p__19091,container,key_selectors_map,template,selector_map,null));
})():dommy.template.__GT_node_like.call(null,container).querySelector(dommy.core.selector.call(null,v)))], null);
}),key_selectors_map)));
});
/**
* a lazy seq of the ancestors of `node`
*/
dommy.core.ancestor_nodes = (function ancestor_nodes(elem){return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,(function (p1__19096_SHARP_){return p1__19096_SHARP_.parentNode;
}),dommy.template.__GT_node_like.call(null,elem)));
});
/**
* returns a predicate on nodes that match `selector` at the
* time of this `matches-pred` call (may return outdated results
* if you fuck with the DOM)
*/
dommy.core.matches_pred = (function() {
var matches_pred = null;
var matches_pred__1 = (function (selector){return matches_pred.call(null,document,selector);
});
var matches_pred__2 = (function (base,selector){var matches = dommy.utils.__GT_Array.call(null,dommy.template.__GT_node_like.call(null,dommy.template.__GT_node_like.call(null,base)).querySelectorAll(dommy.core.selector.call(null,selector)));return (function (elem){return (matches.indexOf(elem) >= 0);
});
});
matches_pred = function(base,selector){
switch(arguments.length){
case 1:
return matches_pred__1.call(this,base);
case 2:
return matches_pred__2.call(this,base,selector);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
matches_pred.cljs$core$IFn$_invoke$arity$1 = matches_pred__1;
matches_pred.cljs$core$IFn$_invoke$arity$2 = matches_pred__2;
return matches_pred;
})()
;
/**
* closest ancestor of `node` (up to `base`, if provided)
* that matches `selector`
*/
dommy.core.closest = (function() {
var closest = null;
var closest__2 = (function (elem,selector){return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,selector),dommy.core.ancestor_nodes.call(null,dommy.template.__GT_node_like.call(null,elem))));
});
var closest__3 = (function (base,elem,selector){var base__$1 = dommy.template.__GT_node_like.call(null,base);var elem__$1 = dommy.template.__GT_node_like.call(null,elem);return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base__$1,selector),cljs.core.take_while.call(null,(function (p1__19097_SHARP_){return !((p1__19097_SHARP_ === base__$1));
}),dommy.core.ancestor_nodes.call(null,elem__$1))));
});
closest = function(base,elem,selector){
switch(arguments.length){
case 2:
return closest__2.call(this,base,elem);
case 3:
return closest__3.call(this,base,elem,selector);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
closest.cljs$core$IFn$_invoke$arity$2 = closest__2;
closest.cljs$core$IFn$_invoke$arity$3 = closest__3;
return closest;
})()
;
/**
* is `descendant` a descendant of `ancestor`?
*/
dommy.core.descendant_QMARK_ = (function descendant_QMARK_(descendant,ancestor){var descendant__$1 = dommy.template.__GT_node_like.call(null,descendant);var ancestor__$1 = dommy.template.__GT_node_like.call(null,ancestor);if(cljs.core.truth_(ancestor__$1.contains))
{return ancestor__$1.contains(descendant__$1);
} else
{if(cljs.core.truth_(ancestor__$1.compareDocumentPosition))
{return ((ancestor__$1.compareDocumentPosition(descendant__$1) & (1 << 4)) != 0);
} else
{return null;
}
}
});
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__19098){var vec__19099 = p__19098;var special_mouse_event = cljs.core.nth.call(null,vec__19099,0,null);var real_mouse_event = cljs.core.nth.call(null,vec__19099,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,(function (f){return (function (event){var related_target = event.relatedTarget;var listener_target = (function (){var or__9385__auto__ = event.selectedTarget;if(cljs.core.truth_(or__9385__auto__))
{return or__9385__auto__;
} else
{return event.currentTarget;
}
})();if(cljs.core.truth_((function (){var and__9373__auto__ = related_target;if(cljs.core.truth_(and__9373__auto__))
{return dommy.core.descendant_QMARK_.call(null,related_target,listener_target);
} else
{return and__9373__auto__;
}
})()))
{return null;
} else
{return f.call(null,event);
}
});
})], true, false)], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mouseenter","mouseenter",2027084997),new cljs.core.Keyword(null,"mouseover","mouseover",1601081963),new cljs.core.Keyword(null,"mouseleave","mouseleave",2033263780),new cljs.core.Keyword(null,"mouseout","mouseout",894298107)], null)));
/**
* fires f if event.target is found with `selector`
*/
dommy.core.live_listener = (function live_listener(elem,selector,f){return (function (event){var selected_target = dommy.core.closest.call(null,dommy.template.__GT_node_like.call(null,elem),event.target,selector);if(cljs.core.truth_((function (){var and__9373__auto__ = selected_target;if(cljs.core.truth_(and__9373__auto__))
{return cljs.core.not.call(null,dommy.core.attr.call(null,selected_target,new cljs.core.Keyword(null,"disabled","disabled",1284845038)));
} else
{return and__9373__auto__;
}
})()))
{event.selectedTarget = selected_target;
return f.call(null,event);
} else
{return null;
}
});
});
/**
* Returns a nested map of event listeners on `nodes`
*/
dommy.core.event_listeners = (function event_listeners(elem){var or__9385__auto__ = dommy.template.__GT_node_like.call(null,elem).dommyEventListeners;if(cljs.core.truth_(or__9385__auto__))
{return or__9385__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
});
/**
* @param {...*} var_args
*/
dommy.core.update_event_listeners_BANG_ = (function() { 
var update_event_listeners_BANG___delegate = function (elem,f,args){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);return elem__$1.dommyEventListeners = cljs.core.apply.call(null,f,dommy.core.event_listeners.call(null,elem__$1),args);
};
var update_event_listeners_BANG_ = function (elem,f,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return update_event_listeners_BANG___delegate.call(this,elem,f,args);};
update_event_listeners_BANG_.cljs$lang$maxFixedArity = 2;
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__19100){
var elem = cljs.core.first(arglist__19100);
arglist__19100 = cljs.core.next(arglist__19100);
var f = cljs.core.first(arglist__19100);
var args = cljs.core.rest(arglist__19100);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){if(cljs.core.sequential_QMARK_.call(null,elem_sel))
{return cljs.core.juxt.call(null,(function (p1__19101_SHARP_){return dommy.template.__GT_node_like.call(null,cljs.core.first.call(null,p1__19101_SHARP_));
}),cljs.core.rest).call(null,elem_sel);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dommy.template.__GT_node_like.call(null,elem_sel),null], null);
}
});
/**
* Adds `f` as a listener for events of type `event-type` on
* `elem-sel`, which must either be a DOM node, or a sequence
* whose first item is a DOM node.
* 
* In other words, the call to `listen!` can take two forms:
* 
* If `elem-sel` is a DOM node, i.e., you're doing something like:
* 
* (listen! elem :click click-handler)
* 
* then `click-handler` will be set as a listener for `click` events
* on the `elem`.
* 
* If `elem-sel` is a sequence:
* 
* (listen! [elem :.selector.for :.some.descendants] :click click-handler)
* 
* then `click-handler` will be set as a listener for `click` events
* on descendants of `elem` that match the selector
* 
* Also accepts any number of event-type and handler pairs for setting
* multiple listeners at once:
* 
* (listen! some-elem :click click-handler :hover hover-handler)
* @param {...*} var_args
*/
dommy.core.listen_BANG_ = (function() { 
var listen_BANG___delegate = function (elem_sel,type_fs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"type-fs","type-fs",1801297401,null)))))].join('')));
}
var vec__19125_19148 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_19149 = cljs.core.nth.call(null,vec__19125_19148,0,null);var selector_19150 = cljs.core.nth.call(null,vec__19125_19148,1,null);var seq__19126_19151 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__19133_19152 = null;var count__19134_19153 = 0;var i__19135_19154 = 0;while(true){
if((i__19135_19154 < count__19134_19153))
{var vec__19142_19155 = cljs.core._nth.call(null,chunk__19133_19152,i__19135_19154);var orig_type_19156 = cljs.core.nth.call(null,vec__19142_19155,0,null);var f_19157 = cljs.core.nth.call(null,vec__19142_19155,1,null);var seq__19136_19158 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_19156,new cljs.core.PersistentArrayMap.fromArray([orig_type_19156,cljs.core.identity], true, false)));var chunk__19138_19159 = null;var count__19139_19160 = 0;var i__19140_19161 = 0;while(true){
if((i__19140_19161 < count__19139_19160))
{var vec__19143_19162 = cljs.core._nth.call(null,chunk__19138_19159,i__19140_19161);var actual_type_19163 = cljs.core.nth.call(null,vec__19143_19162,0,null);var factory_19164 = cljs.core.nth.call(null,vec__19143_19162,1,null);var canonical_f_19165 = (cljs.core.truth_(selector_19150)?cljs.core.partial.call(null,dommy.core.live_listener,elem_19149,selector_19150):cljs.core.identity).call(null,factory_19164.call(null,f_19157));dommy.core.update_event_listeners_BANG_.call(null,elem_19149,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_19150,actual_type_19163,f_19157], null),canonical_f_19165);
if(cljs.core.truth_(elem_19149.addEventListener))
{elem_19149.addEventListener(cljs.core.name.call(null,actual_type_19163),canonical_f_19165);
} else
{elem_19149.attachEvent(cljs.core.name.call(null,actual_type_19163),canonical_f_19165);
}
{
var G__19166 = seq__19136_19158;
var G__19167 = chunk__19138_19159;
var G__19168 = count__19139_19160;
var G__19169 = (i__19140_19161 + 1);
seq__19136_19158 = G__19166;
chunk__19138_19159 = G__19167;
count__19139_19160 = G__19168;
i__19140_19161 = G__19169;
continue;
}
} else
{var temp__4092__auto___19170 = cljs.core.seq.call(null,seq__19136_19158);if(temp__4092__auto___19170)
{var seq__19136_19171__$1 = temp__4092__auto___19170;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19136_19171__$1))
{var c__10127__auto___19172 = cljs.core.chunk_first.call(null,seq__19136_19171__$1);{
var G__19173 = cljs.core.chunk_rest.call(null,seq__19136_19171__$1);
var G__19174 = c__10127__auto___19172;
var G__19175 = cljs.core.count.call(null,c__10127__auto___19172);
var G__19176 = 0;
seq__19136_19158 = G__19173;
chunk__19138_19159 = G__19174;
count__19139_19160 = G__19175;
i__19140_19161 = G__19176;
continue;
}
} else
{var vec__19144_19177 = cljs.core.first.call(null,seq__19136_19171__$1);var actual_type_19178 = cljs.core.nth.call(null,vec__19144_19177,0,null);var factory_19179 = cljs.core.nth.call(null,vec__19144_19177,1,null);var canonical_f_19180 = (cljs.core.truth_(selector_19150)?cljs.core.partial.call(null,dommy.core.live_listener,elem_19149,selector_19150):cljs.core.identity).call(null,factory_19179.call(null,f_19157));dommy.core.update_event_listeners_BANG_.call(null,elem_19149,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_19150,actual_type_19178,f_19157], null),canonical_f_19180);
if(cljs.core.truth_(elem_19149.addEventListener))
{elem_19149.addEventListener(cljs.core.name.call(null,actual_type_19178),canonical_f_19180);
} else
{elem_19149.attachEvent(cljs.core.name.call(null,actual_type_19178),canonical_f_19180);
}
{
var G__19181 = cljs.core.next.call(null,seq__19136_19171__$1);
var G__19182 = null;
var G__19183 = 0;
var G__19184 = 0;
seq__19136_19158 = G__19181;
chunk__19138_19159 = G__19182;
count__19139_19160 = G__19183;
i__19140_19161 = G__19184;
continue;
}
}
} else
{}
}
break;
}
{
var G__19185 = seq__19126_19151;
var G__19186 = chunk__19133_19152;
var G__19187 = count__19134_19153;
var G__19188 = (i__19135_19154 + 1);
seq__19126_19151 = G__19185;
chunk__19133_19152 = G__19186;
count__19134_19153 = G__19187;
i__19135_19154 = G__19188;
continue;
}
} else
{var temp__4092__auto___19189 = cljs.core.seq.call(null,seq__19126_19151);if(temp__4092__auto___19189)
{var seq__19126_19190__$1 = temp__4092__auto___19189;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19126_19190__$1))
{var c__10127__auto___19191 = cljs.core.chunk_first.call(null,seq__19126_19190__$1);{
var G__19192 = cljs.core.chunk_rest.call(null,seq__19126_19190__$1);
var G__19193 = c__10127__auto___19191;
var G__19194 = cljs.core.count.call(null,c__10127__auto___19191);
var G__19195 = 0;
seq__19126_19151 = G__19192;
chunk__19133_19152 = G__19193;
count__19134_19153 = G__19194;
i__19135_19154 = G__19195;
continue;
}
} else
{var vec__19145_19196 = cljs.core.first.call(null,seq__19126_19190__$1);var orig_type_19197 = cljs.core.nth.call(null,vec__19145_19196,0,null);var f_19198 = cljs.core.nth.call(null,vec__19145_19196,1,null);var seq__19127_19199 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_19197,new cljs.core.PersistentArrayMap.fromArray([orig_type_19197,cljs.core.identity], true, false)));var chunk__19129_19200 = null;var count__19130_19201 = 0;var i__19131_19202 = 0;while(true){
if((i__19131_19202 < count__19130_19201))
{var vec__19146_19203 = cljs.core._nth.call(null,chunk__19129_19200,i__19131_19202);var actual_type_19204 = cljs.core.nth.call(null,vec__19146_19203,0,null);var factory_19205 = cljs.core.nth.call(null,vec__19146_19203,1,null);var canonical_f_19206 = (cljs.core.truth_(selector_19150)?cljs.core.partial.call(null,dommy.core.live_listener,elem_19149,selector_19150):cljs.core.identity).call(null,factory_19205.call(null,f_19198));dommy.core.update_event_listeners_BANG_.call(null,elem_19149,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_19150,actual_type_19204,f_19198], null),canonical_f_19206);
if(cljs.core.truth_(elem_19149.addEventListener))
{elem_19149.addEventListener(cljs.core.name.call(null,actual_type_19204),canonical_f_19206);
} else
{elem_19149.attachEvent(cljs.core.name.call(null,actual_type_19204),canonical_f_19206);
}
{
var G__19207 = seq__19127_19199;
var G__19208 = chunk__19129_19200;
var G__19209 = count__19130_19201;
var G__19210 = (i__19131_19202 + 1);
seq__19127_19199 = G__19207;
chunk__19129_19200 = G__19208;
count__19130_19201 = G__19209;
i__19131_19202 = G__19210;
continue;
}
} else
{var temp__4092__auto___19211__$1 = cljs.core.seq.call(null,seq__19127_19199);if(temp__4092__auto___19211__$1)
{var seq__19127_19212__$1 = temp__4092__auto___19211__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19127_19212__$1))
{var c__10127__auto___19213 = cljs.core.chunk_first.call(null,seq__19127_19212__$1);{
var G__19214 = cljs.core.chunk_rest.call(null,seq__19127_19212__$1);
var G__19215 = c__10127__auto___19213;
var G__19216 = cljs.core.count.call(null,c__10127__auto___19213);
var G__19217 = 0;
seq__19127_19199 = G__19214;
chunk__19129_19200 = G__19215;
count__19130_19201 = G__19216;
i__19131_19202 = G__19217;
continue;
}
} else
{var vec__19147_19218 = cljs.core.first.call(null,seq__19127_19212__$1);var actual_type_19219 = cljs.core.nth.call(null,vec__19147_19218,0,null);var factory_19220 = cljs.core.nth.call(null,vec__19147_19218,1,null);var canonical_f_19221 = (cljs.core.truth_(selector_19150)?cljs.core.partial.call(null,dommy.core.live_listener,elem_19149,selector_19150):cljs.core.identity).call(null,factory_19220.call(null,f_19198));dommy.core.update_event_listeners_BANG_.call(null,elem_19149,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_19150,actual_type_19219,f_19198], null),canonical_f_19221);
if(cljs.core.truth_(elem_19149.addEventListener))
{elem_19149.addEventListener(cljs.core.name.call(null,actual_type_19219),canonical_f_19221);
} else
{elem_19149.attachEvent(cljs.core.name.call(null,actual_type_19219),canonical_f_19221);
}
{
var G__19222 = cljs.core.next.call(null,seq__19127_19212__$1);
var G__19223 = null;
var G__19224 = 0;
var G__19225 = 0;
seq__19127_19199 = G__19222;
chunk__19129_19200 = G__19223;
count__19130_19201 = G__19224;
i__19131_19202 = G__19225;
continue;
}
}
} else
{}
}
break;
}
{
var G__19226 = cljs.core.next.call(null,seq__19126_19190__$1);
var G__19227 = null;
var G__19228 = 0;
var G__19229 = 0;
seq__19126_19151 = G__19226;
chunk__19133_19152 = G__19227;
count__19134_19153 = G__19228;
i__19135_19154 = G__19229;
continue;
}
}
} else
{}
}
break;
}
return elem_sel;
};
var listen_BANG_ = function (elem_sel,var_args){
var type_fs = null;if (arguments.length > 1) {
  type_fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return listen_BANG___delegate.call(this,elem_sel,type_fs);};
listen_BANG_.cljs$lang$maxFixedArity = 1;
listen_BANG_.cljs$lang$applyTo = (function (arglist__19230){
var elem_sel = cljs.core.first(arglist__19230);
var type_fs = cljs.core.rest(arglist__19230);
return listen_BANG___delegate(elem_sel,type_fs);
});
listen_BANG_.cljs$core$IFn$_invoke$arity$variadic = listen_BANG___delegate;
return listen_BANG_;
})()
;
/**
* Removes event listener for the element defined in `elem-sel`,
* which is the same format as listen!.
* 
* The following forms are allowed, and will remove all handlers
* that match the parameters passed in:
* 
* (unlisten! [elem :.selector] :click event-listener)
* 
* (unlisten! [elem :.selector]
* :click event-listener
* :mouseover other-event-listener)
* @param {...*} var_args
*/
dommy.core.unlisten_BANG_ = (function() { 
var unlisten_BANG___delegate = function (elem_sel,type_fs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"type-fs","type-fs",1801297401,null)))))].join('')));
}
var vec__19254_19277 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_19278 = cljs.core.nth.call(null,vec__19254_19277,0,null);var selector_19279 = cljs.core.nth.call(null,vec__19254_19277,1,null);var seq__19255_19280 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__19262_19281 = null;var count__19263_19282 = 0;var i__19264_19283 = 0;while(true){
if((i__19264_19283 < count__19263_19282))
{var vec__19271_19284 = cljs.core._nth.call(null,chunk__19262_19281,i__19264_19283);var orig_type_19285 = cljs.core.nth.call(null,vec__19271_19284,0,null);var f_19286 = cljs.core.nth.call(null,vec__19271_19284,1,null);var seq__19265_19287 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_19285,new cljs.core.PersistentArrayMap.fromArray([orig_type_19285,cljs.core.identity], true, false)));var chunk__19267_19288 = null;var count__19268_19289 = 0;var i__19269_19290 = 0;while(true){
if((i__19269_19290 < count__19268_19289))
{var vec__19272_19291 = cljs.core._nth.call(null,chunk__19267_19288,i__19269_19290);var actual_type_19292 = cljs.core.nth.call(null,vec__19272_19291,0,null);var __19293 = cljs.core.nth.call(null,vec__19272_19291,1,null);var keys_19294 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_19279,actual_type_19292,f_19286], null);var canonical_f_19295 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_19278),keys_19294);dommy.core.update_event_listeners_BANG_.call(null,elem_19278,dommy.utils.dissoc_in,keys_19294);
if(cljs.core.truth_(elem_19278.removeEventListener))
{elem_19278.removeEventListener(cljs.core.name.call(null,actual_type_19292),canonical_f_19295);
} else
{elem_19278.detachEvent(cljs.core.name.call(null,actual_type_19292),canonical_f_19295);
}
{
var G__19296 = seq__19265_19287;
var G__19297 = chunk__19267_19288;
var G__19298 = count__19268_19289;
var G__19299 = (i__19269_19290 + 1);
seq__19265_19287 = G__19296;
chunk__19267_19288 = G__19297;
count__19268_19289 = G__19298;
i__19269_19290 = G__19299;
continue;
}
} else
{var temp__4092__auto___19300 = cljs.core.seq.call(null,seq__19265_19287);if(temp__4092__auto___19300)
{var seq__19265_19301__$1 = temp__4092__auto___19300;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19265_19301__$1))
{var c__10127__auto___19302 = cljs.core.chunk_first.call(null,seq__19265_19301__$1);{
var G__19303 = cljs.core.chunk_rest.call(null,seq__19265_19301__$1);
var G__19304 = c__10127__auto___19302;
var G__19305 = cljs.core.count.call(null,c__10127__auto___19302);
var G__19306 = 0;
seq__19265_19287 = G__19303;
chunk__19267_19288 = G__19304;
count__19268_19289 = G__19305;
i__19269_19290 = G__19306;
continue;
}
} else
{var vec__19273_19307 = cljs.core.first.call(null,seq__19265_19301__$1);var actual_type_19308 = cljs.core.nth.call(null,vec__19273_19307,0,null);var __19309 = cljs.core.nth.call(null,vec__19273_19307,1,null);var keys_19310 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_19279,actual_type_19308,f_19286], null);var canonical_f_19311 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_19278),keys_19310);dommy.core.update_event_listeners_BANG_.call(null,elem_19278,dommy.utils.dissoc_in,keys_19310);
if(cljs.core.truth_(elem_19278.removeEventListener))
{elem_19278.removeEventListener(cljs.core.name.call(null,actual_type_19308),canonical_f_19311);
} else
{elem_19278.detachEvent(cljs.core.name.call(null,actual_type_19308),canonical_f_19311);
}
{
var G__19312 = cljs.core.next.call(null,seq__19265_19301__$1);
var G__19313 = null;
var G__19314 = 0;
var G__19315 = 0;
seq__19265_19287 = G__19312;
chunk__19267_19288 = G__19313;
count__19268_19289 = G__19314;
i__19269_19290 = G__19315;
continue;
}
}
} else
{}
}
break;
}
{
var G__19316 = seq__19255_19280;
var G__19317 = chunk__19262_19281;
var G__19318 = count__19263_19282;
var G__19319 = (i__19264_19283 + 1);
seq__19255_19280 = G__19316;
chunk__19262_19281 = G__19317;
count__19263_19282 = G__19318;
i__19264_19283 = G__19319;
continue;
}
} else
{var temp__4092__auto___19320 = cljs.core.seq.call(null,seq__19255_19280);if(temp__4092__auto___19320)
{var seq__19255_19321__$1 = temp__4092__auto___19320;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19255_19321__$1))
{var c__10127__auto___19322 = cljs.core.chunk_first.call(null,seq__19255_19321__$1);{
var G__19323 = cljs.core.chunk_rest.call(null,seq__19255_19321__$1);
var G__19324 = c__10127__auto___19322;
var G__19325 = cljs.core.count.call(null,c__10127__auto___19322);
var G__19326 = 0;
seq__19255_19280 = G__19323;
chunk__19262_19281 = G__19324;
count__19263_19282 = G__19325;
i__19264_19283 = G__19326;
continue;
}
} else
{var vec__19274_19327 = cljs.core.first.call(null,seq__19255_19321__$1);var orig_type_19328 = cljs.core.nth.call(null,vec__19274_19327,0,null);var f_19329 = cljs.core.nth.call(null,vec__19274_19327,1,null);var seq__19256_19330 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_19328,new cljs.core.PersistentArrayMap.fromArray([orig_type_19328,cljs.core.identity], true, false)));var chunk__19258_19331 = null;var count__19259_19332 = 0;var i__19260_19333 = 0;while(true){
if((i__19260_19333 < count__19259_19332))
{var vec__19275_19334 = cljs.core._nth.call(null,chunk__19258_19331,i__19260_19333);var actual_type_19335 = cljs.core.nth.call(null,vec__19275_19334,0,null);var __19336 = cljs.core.nth.call(null,vec__19275_19334,1,null);var keys_19337 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_19279,actual_type_19335,f_19329], null);var canonical_f_19338 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_19278),keys_19337);dommy.core.update_event_listeners_BANG_.call(null,elem_19278,dommy.utils.dissoc_in,keys_19337);
if(cljs.core.truth_(elem_19278.removeEventListener))
{elem_19278.removeEventListener(cljs.core.name.call(null,actual_type_19335),canonical_f_19338);
} else
{elem_19278.detachEvent(cljs.core.name.call(null,actual_type_19335),canonical_f_19338);
}
{
var G__19339 = seq__19256_19330;
var G__19340 = chunk__19258_19331;
var G__19341 = count__19259_19332;
var G__19342 = (i__19260_19333 + 1);
seq__19256_19330 = G__19339;
chunk__19258_19331 = G__19340;
count__19259_19332 = G__19341;
i__19260_19333 = G__19342;
continue;
}
} else
{var temp__4092__auto___19343__$1 = cljs.core.seq.call(null,seq__19256_19330);if(temp__4092__auto___19343__$1)
{var seq__19256_19344__$1 = temp__4092__auto___19343__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19256_19344__$1))
{var c__10127__auto___19345 = cljs.core.chunk_first.call(null,seq__19256_19344__$1);{
var G__19346 = cljs.core.chunk_rest.call(null,seq__19256_19344__$1);
var G__19347 = c__10127__auto___19345;
var G__19348 = cljs.core.count.call(null,c__10127__auto___19345);
var G__19349 = 0;
seq__19256_19330 = G__19346;
chunk__19258_19331 = G__19347;
count__19259_19332 = G__19348;
i__19260_19333 = G__19349;
continue;
}
} else
{var vec__19276_19350 = cljs.core.first.call(null,seq__19256_19344__$1);var actual_type_19351 = cljs.core.nth.call(null,vec__19276_19350,0,null);var __19352 = cljs.core.nth.call(null,vec__19276_19350,1,null);var keys_19353 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_19279,actual_type_19351,f_19329], null);var canonical_f_19354 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_19278),keys_19353);dommy.core.update_event_listeners_BANG_.call(null,elem_19278,dommy.utils.dissoc_in,keys_19353);
if(cljs.core.truth_(elem_19278.removeEventListener))
{elem_19278.removeEventListener(cljs.core.name.call(null,actual_type_19351),canonical_f_19354);
} else
{elem_19278.detachEvent(cljs.core.name.call(null,actual_type_19351),canonical_f_19354);
}
{
var G__19355 = cljs.core.next.call(null,seq__19256_19344__$1);
var G__19356 = null;
var G__19357 = 0;
var G__19358 = 0;
seq__19256_19330 = G__19355;
chunk__19258_19331 = G__19356;
count__19259_19332 = G__19357;
i__19260_19333 = G__19358;
continue;
}
}
} else
{}
}
break;
}
{
var G__19359 = cljs.core.next.call(null,seq__19255_19321__$1);
var G__19360 = null;
var G__19361 = 0;
var G__19362 = 0;
seq__19255_19280 = G__19359;
chunk__19262_19281 = G__19360;
count__19263_19282 = G__19361;
i__19264_19283 = G__19362;
continue;
}
}
} else
{}
}
break;
}
return elem_sel;
};
var unlisten_BANG_ = function (elem_sel,var_args){
var type_fs = null;if (arguments.length > 1) {
  type_fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return unlisten_BANG___delegate.call(this,elem_sel,type_fs);};
unlisten_BANG_.cljs$lang$maxFixedArity = 1;
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__19363){
var elem_sel = cljs.core.first(arglist__19363);
var type_fs = cljs.core.rest(arglist__19363);
return unlisten_BANG___delegate(elem_sel,type_fs);
});
unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic = unlisten_BANG___delegate;
return unlisten_BANG_;
})()
;
/**
* @param {...*} var_args
*/
dommy.core.listen_once_BANG_ = (function() { 
var listen_once_BANG___delegate = function (elem_sel,type_fs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"type-fs","type-fs",1801297401,null)))))].join('')));
}
var vec__19371_19378 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_19379 = cljs.core.nth.call(null,vec__19371_19378,0,null);var selector_19380 = cljs.core.nth.call(null,vec__19371_19378,1,null);var seq__19372_19381 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__19373_19382 = null;var count__19374_19383 = 0;var i__19375_19384 = 0;while(true){
if((i__19375_19384 < count__19374_19383))
{var vec__19376_19385 = cljs.core._nth.call(null,chunk__19373_19382,i__19375_19384);var type_19386 = cljs.core.nth.call(null,vec__19376_19385,0,null);var f_19387 = cljs.core.nth.call(null,vec__19376_19385,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_19386,((function (seq__19372_19381,chunk__19373_19382,count__19374_19383,i__19375_19384,vec__19376_19385,type_19386,f_19387){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_19386,this_fn);
return f_19387.call(null,e);
});})(seq__19372_19381,chunk__19373_19382,count__19374_19383,i__19375_19384,vec__19376_19385,type_19386,f_19387))
);
{
var G__19388 = seq__19372_19381;
var G__19389 = chunk__19373_19382;
var G__19390 = count__19374_19383;
var G__19391 = (i__19375_19384 + 1);
seq__19372_19381 = G__19388;
chunk__19373_19382 = G__19389;
count__19374_19383 = G__19390;
i__19375_19384 = G__19391;
continue;
}
} else
{var temp__4092__auto___19392 = cljs.core.seq.call(null,seq__19372_19381);if(temp__4092__auto___19392)
{var seq__19372_19393__$1 = temp__4092__auto___19392;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19372_19393__$1))
{var c__10127__auto___19394 = cljs.core.chunk_first.call(null,seq__19372_19393__$1);{
var G__19395 = cljs.core.chunk_rest.call(null,seq__19372_19393__$1);
var G__19396 = c__10127__auto___19394;
var G__19397 = cljs.core.count.call(null,c__10127__auto___19394);
var G__19398 = 0;
seq__19372_19381 = G__19395;
chunk__19373_19382 = G__19396;
count__19374_19383 = G__19397;
i__19375_19384 = G__19398;
continue;
}
} else
{var vec__19377_19399 = cljs.core.first.call(null,seq__19372_19393__$1);var type_19400 = cljs.core.nth.call(null,vec__19377_19399,0,null);var f_19401 = cljs.core.nth.call(null,vec__19377_19399,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_19400,((function (seq__19372_19381,chunk__19373_19382,count__19374_19383,i__19375_19384,vec__19377_19399,type_19400,f_19401,seq__19372_19393__$1,temp__4092__auto___19392){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_19400,this_fn);
return f_19401.call(null,e);
});})(seq__19372_19381,chunk__19373_19382,count__19374_19383,i__19375_19384,vec__19377_19399,type_19400,f_19401,seq__19372_19393__$1,temp__4092__auto___19392))
);
{
var G__19402 = cljs.core.next.call(null,seq__19372_19393__$1);
var G__19403 = null;
var G__19404 = 0;
var G__19405 = 0;
seq__19372_19381 = G__19402;
chunk__19373_19382 = G__19403;
count__19374_19383 = G__19404;
i__19375_19384 = G__19405;
continue;
}
}
} else
{}
}
break;
}
return elem_sel;
};
var listen_once_BANG_ = function (elem_sel,var_args){
var type_fs = null;if (arguments.length > 1) {
  type_fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return listen_once_BANG___delegate.call(this,elem_sel,type_fs);};
listen_once_BANG_.cljs$lang$maxFixedArity = 1;
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__19406){
var elem_sel = cljs.core.first(arglist__19406);
var type_fs = cljs.core.rest(arglist__19406);
return listen_once_BANG___delegate(elem_sel,type_fs);
});
listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic = listen_once_BANG___delegate;
return listen_once_BANG_;
})()
;
/**
* NOTE: ONLY TO BE USED FOR TESTS. May not work at mocking many
* event types or their bubbling behaviours
* 
* Creates an event of type `event-type`, optionally having
* `update-event!` mutate and return an updated event object,
* and fires it on `node`.
* Only works when `node` is in the DOM
* @param {...*} var_args
*/
dommy.core.fire_BANG_ = (function() { 
var fire_BANG___delegate = function (node,event_type,p__19407){var vec__19409 = p__19407;var update_event_BANG_ = cljs.core.nth.call(null,vec__19409,0,null);if(dommy.core.descendant_QMARK_.call(null,node,document.documentElement))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"descendant?","descendant?",-1886221157,null),new cljs.core.Symbol(null,"node","node",-1637144645,null),new cljs.core.Symbol("js","document.documentElement","js/document.documentElement",-1449696112,null))))].join('')));
}
var update_event_BANG___$1 = (function (){var or__9385__auto__ = update_event_BANG_;if(cljs.core.truth_(or__9385__auto__))
{return or__9385__auto__;
} else
{return cljs.core.identity;
}
})();if(cljs.core.truth_(document.createEvent))
{var event = document.createEvent("Event");event.initEvent(cljs.core.name.call(null,event_type),true,true);
return node.dispatchEvent(update_event_BANG___$1.call(null,event));
} else
{return node.fireEvent([cljs.core.str("on"),cljs.core.str(cljs.core.name.call(null,event_type))].join(''),update_event_BANG___$1.call(null,document.createEventObject()));
}
};
var fire_BANG_ = function (node,event_type,var_args){
var p__19407 = null;if (arguments.length > 2) {
  p__19407 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fire_BANG___delegate.call(this,node,event_type,p__19407);};
fire_BANG_.cljs$lang$maxFixedArity = 2;
fire_BANG_.cljs$lang$applyTo = (function (arglist__19410){
var node = cljs.core.first(arglist__19410);
arglist__19410 = cljs.core.next(arglist__19410);
var event_type = cljs.core.first(arglist__19410);
var p__19407 = cljs.core.rest(arglist__19410);
return fire_BANG___delegate(node,event_type,p__19407);
});
fire_BANG_.cljs$core$IFn$_invoke$arity$variadic = fire_BANG___delegate;
return fire_BANG_;
})()
;
