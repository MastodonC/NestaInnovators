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
var append_BANG___2 = (function (parent,child){var G__24000 = dommy.template.__GT_node_like.call(null,parent);G__24000.appendChild(dommy.template.__GT_node_like.call(null,child));
return G__24000;
});
var append_BANG___3 = (function() { 
var G__24005__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__24001_24006 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__24002_24007 = null;var count__24003_24008 = 0;var i__24004_24009 = 0;while(true){
if((i__24004_24009 < count__24003_24008))
{var c_24010 = cljs.core._nth.call(null,chunk__24002_24007,i__24004_24009);append_BANG_.call(null,parent__$1,c_24010);
{
var G__24011 = seq__24001_24006;
var G__24012 = chunk__24002_24007;
var G__24013 = count__24003_24008;
var G__24014 = (i__24004_24009 + 1);
seq__24001_24006 = G__24011;
chunk__24002_24007 = G__24012;
count__24003_24008 = G__24013;
i__24004_24009 = G__24014;
continue;
}
} else
{var temp__4092__auto___24015 = cljs.core.seq.call(null,seq__24001_24006);if(temp__4092__auto___24015)
{var seq__24001_24016__$1 = temp__4092__auto___24015;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24001_24016__$1))
{var c__10127__auto___24017 = cljs.core.chunk_first.call(null,seq__24001_24016__$1);{
var G__24018 = cljs.core.chunk_rest.call(null,seq__24001_24016__$1);
var G__24019 = c__10127__auto___24017;
var G__24020 = cljs.core.count.call(null,c__10127__auto___24017);
var G__24021 = 0;
seq__24001_24006 = G__24018;
chunk__24002_24007 = G__24019;
count__24003_24008 = G__24020;
i__24004_24009 = G__24021;
continue;
}
} else
{var c_24022 = cljs.core.first.call(null,seq__24001_24016__$1);append_BANG_.call(null,parent__$1,c_24022);
{
var G__24023 = cljs.core.next.call(null,seq__24001_24016__$1);
var G__24024 = null;
var G__24025 = 0;
var G__24026 = 0;
seq__24001_24006 = G__24023;
chunk__24002_24007 = G__24024;
count__24003_24008 = G__24025;
i__24004_24009 = G__24026;
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
var G__24005 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__24005__delegate.call(this,parent,child,more_children);};
G__24005.cljs$lang$maxFixedArity = 2;
G__24005.cljs$lang$applyTo = (function (arglist__24027){
var parent = cljs.core.first(arglist__24027);
arglist__24027 = cljs.core.next(arglist__24027);
var child = cljs.core.first(arglist__24027);
var more_children = cljs.core.rest(arglist__24027);
return G__24005__delegate(parent,child,more_children);
});
G__24005.cljs$core$IFn$_invoke$arity$variadic = G__24005__delegate;
return G__24005;
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
var G__24036__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__24032_24037 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__24033_24038 = null;var count__24034_24039 = 0;var i__24035_24040 = 0;while(true){
if((i__24035_24040 < count__24034_24039))
{var c_24041 = cljs.core._nth.call(null,chunk__24033_24038,i__24035_24040);prepend_BANG_.call(null,parent__$1,c_24041);
{
var G__24042 = seq__24032_24037;
var G__24043 = chunk__24033_24038;
var G__24044 = count__24034_24039;
var G__24045 = (i__24035_24040 + 1);
seq__24032_24037 = G__24042;
chunk__24033_24038 = G__24043;
count__24034_24039 = G__24044;
i__24035_24040 = G__24045;
continue;
}
} else
{var temp__4092__auto___24046 = cljs.core.seq.call(null,seq__24032_24037);if(temp__4092__auto___24046)
{var seq__24032_24047__$1 = temp__4092__auto___24046;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24032_24047__$1))
{var c__10127__auto___24048 = cljs.core.chunk_first.call(null,seq__24032_24047__$1);{
var G__24049 = cljs.core.chunk_rest.call(null,seq__24032_24047__$1);
var G__24050 = c__10127__auto___24048;
var G__24051 = cljs.core.count.call(null,c__10127__auto___24048);
var G__24052 = 0;
seq__24032_24037 = G__24049;
chunk__24033_24038 = G__24050;
count__24034_24039 = G__24051;
i__24035_24040 = G__24052;
continue;
}
} else
{var c_24053 = cljs.core.first.call(null,seq__24032_24047__$1);prepend_BANG_.call(null,parent__$1,c_24053);
{
var G__24054 = cljs.core.next.call(null,seq__24032_24047__$1);
var G__24055 = null;
var G__24056 = 0;
var G__24057 = 0;
seq__24032_24037 = G__24054;
chunk__24033_24038 = G__24055;
count__24034_24039 = G__24056;
i__24035_24040 = G__24057;
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
var G__24036 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__24036__delegate.call(this,parent,child,more_children);};
G__24036.cljs$lang$maxFixedArity = 2;
G__24036.cljs$lang$applyTo = (function (arglist__24058){
var parent = cljs.core.first(arglist__24058);
arglist__24058 = cljs.core.next(arglist__24058);
var child = cljs.core.first(arglist__24058);
var more_children = cljs.core.rest(arglist__24058);
return G__24036__delegate(parent,child,more_children);
});
G__24036.cljs$core$IFn$_invoke$arity$variadic = G__24036__delegate;
return G__24036;
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
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);var parent = other__$1.parentNode;var temp__4090__auto___24059 = other__$1.nextSibling;if(cljs.core.truth_(temp__4090__auto___24059))
{var next_24060 = temp__4090__auto___24059;parent.insertBefore(actual_node,next_24060);
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
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(parent,node_like){var G__24062 = dommy.template.__GT_node_like.call(null,parent);G__24062.innerHTML = "";
dommy.core.append_BANG_.call(null,G__24062,node_like);
return G__24062;
});
/**
* remove node-like `elem` from parent, return node-like projection of elem
*/
dommy.core.remove_BANG_ = (function remove_BANG_(elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var G__24064 = elem__$1.parentNode;G__24064.removeChild(elem__$1);
return G__24064;
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
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"container","container",602947571),container], null),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__24070){var vec__24071 = p__24070;var k = cljs.core.nth.call(null,vec__24071,0,null);var v = cljs.core.nth.call(null,vec__24071,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(cljs.core.truth_(new cljs.core.Keyword(null,"live","live",1017226334).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v)))?(function (){if(typeof dommy.core.t24072 !== 'undefined')
{} else
{
/**
* @constructor
*/
dommy.core.t24072 = (function (v,k,vec__24071,p__24070,container,key_selectors_map,template,selector_map,meta24073){
this.v = v;
this.k = k;
this.vec__24071 = vec__24071;
this.p__24070 = p__24070;
this.container = container;
this.key_selectors_map = key_selectors_map;
this.template = template;
this.selector_map = selector_map;
this.meta24073 = meta24073;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 425984;
})
dommy.core.t24072.cljs$lang$type = true;
dommy.core.t24072.cljs$lang$ctorStr = "dommy.core/t24072";
dommy.core.t24072.cljs$lang$ctorPrWriter = (function (this__9947__auto__,writer__9948__auto__,opt__9949__auto__){return cljs.core._write.call(null,writer__9948__auto__,"dommy.core/t24072");
});
dommy.core.t24072.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return dommy.utils.__GT_Array.call(null,dommy.template.__GT_node_like.call(null,self__.container).querySelectorAll(dommy.core.selector.call(null,self__.v)));
});
dommy.core.t24072.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24074){var self__ = this;
var _24074__$1 = this;return self__.meta24073;
});
dommy.core.t24072.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24074,meta24073__$1){var self__ = this;
var _24074__$1 = this;return (new dommy.core.t24072(self__.v,self__.k,self__.vec__24071,self__.p__24070,self__.container,self__.key_selectors_map,self__.template,self__.selector_map,meta24073__$1));
});
dommy.core.__GT_t24072 = (function __GT_t24072(v__$1,k__$1,vec__24071__$1,p__24070__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta24073){return (new dommy.core.t24072(v__$1,k__$1,vec__24071__$1,p__24070__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta24073));
});
}
return (new dommy.core.t24072(v,k,vec__24071,p__24070,container,key_selectors_map,template,selector_map,null));
})():dommy.template.__GT_node_like.call(null,container).querySelector(dommy.core.selector.call(null,v)))], null);
}),key_selectors_map)));
});
/**
* a lazy seq of the ancestors of `node`
*/
dommy.core.ancestor_nodes = (function ancestor_nodes(elem){return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,(function (p1__24075_SHARP_){return p1__24075_SHARP_.parentNode;
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
var closest__3 = (function (base,elem,selector){var base__$1 = dommy.template.__GT_node_like.call(null,base);var elem__$1 = dommy.template.__GT_node_like.call(null,elem);return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base__$1,selector),cljs.core.take_while.call(null,(function (p1__24076_SHARP_){return !((p1__24076_SHARP_ === base__$1));
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
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__24077){var vec__24078 = p__24077;var special_mouse_event = cljs.core.nth.call(null,vec__24078,0,null);var real_mouse_event = cljs.core.nth.call(null,vec__24078,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,(function (f){return (function (event){var related_target = event.relatedTarget;var listener_target = (function (){var or__9385__auto__ = event.selectedTarget;if(cljs.core.truth_(or__9385__auto__))
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
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__24079){
var elem = cljs.core.first(arglist__24079);
arglist__24079 = cljs.core.next(arglist__24079);
var f = cljs.core.first(arglist__24079);
var args = cljs.core.rest(arglist__24079);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){if(cljs.core.sequential_QMARK_.call(null,elem_sel))
{return cljs.core.juxt.call(null,(function (p1__24080_SHARP_){return dommy.template.__GT_node_like.call(null,cljs.core.first.call(null,p1__24080_SHARP_));
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
var vec__24104_24127 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_24128 = cljs.core.nth.call(null,vec__24104_24127,0,null);var selector_24129 = cljs.core.nth.call(null,vec__24104_24127,1,null);var seq__24105_24130 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__24112_24131 = null;var count__24113_24132 = 0;var i__24114_24133 = 0;while(true){
if((i__24114_24133 < count__24113_24132))
{var vec__24121_24134 = cljs.core._nth.call(null,chunk__24112_24131,i__24114_24133);var orig_type_24135 = cljs.core.nth.call(null,vec__24121_24134,0,null);var f_24136 = cljs.core.nth.call(null,vec__24121_24134,1,null);var seq__24115_24137 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_24135,new cljs.core.PersistentArrayMap.fromArray([orig_type_24135,cljs.core.identity], true, false)));var chunk__24117_24138 = null;var count__24118_24139 = 0;var i__24119_24140 = 0;while(true){
if((i__24119_24140 < count__24118_24139))
{var vec__24122_24141 = cljs.core._nth.call(null,chunk__24117_24138,i__24119_24140);var actual_type_24142 = cljs.core.nth.call(null,vec__24122_24141,0,null);var factory_24143 = cljs.core.nth.call(null,vec__24122_24141,1,null);var canonical_f_24144 = (cljs.core.truth_(selector_24129)?cljs.core.partial.call(null,dommy.core.live_listener,elem_24128,selector_24129):cljs.core.identity).call(null,factory_24143.call(null,f_24136));dommy.core.update_event_listeners_BANG_.call(null,elem_24128,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_24129,actual_type_24142,f_24136], null),canonical_f_24144);
if(cljs.core.truth_(elem_24128.addEventListener))
{elem_24128.addEventListener(cljs.core.name.call(null,actual_type_24142),canonical_f_24144);
} else
{elem_24128.attachEvent(cljs.core.name.call(null,actual_type_24142),canonical_f_24144);
}
{
var G__24145 = seq__24115_24137;
var G__24146 = chunk__24117_24138;
var G__24147 = count__24118_24139;
var G__24148 = (i__24119_24140 + 1);
seq__24115_24137 = G__24145;
chunk__24117_24138 = G__24146;
count__24118_24139 = G__24147;
i__24119_24140 = G__24148;
continue;
}
} else
{var temp__4092__auto___24149 = cljs.core.seq.call(null,seq__24115_24137);if(temp__4092__auto___24149)
{var seq__24115_24150__$1 = temp__4092__auto___24149;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24115_24150__$1))
{var c__10127__auto___24151 = cljs.core.chunk_first.call(null,seq__24115_24150__$1);{
var G__24152 = cljs.core.chunk_rest.call(null,seq__24115_24150__$1);
var G__24153 = c__10127__auto___24151;
var G__24154 = cljs.core.count.call(null,c__10127__auto___24151);
var G__24155 = 0;
seq__24115_24137 = G__24152;
chunk__24117_24138 = G__24153;
count__24118_24139 = G__24154;
i__24119_24140 = G__24155;
continue;
}
} else
{var vec__24123_24156 = cljs.core.first.call(null,seq__24115_24150__$1);var actual_type_24157 = cljs.core.nth.call(null,vec__24123_24156,0,null);var factory_24158 = cljs.core.nth.call(null,vec__24123_24156,1,null);var canonical_f_24159 = (cljs.core.truth_(selector_24129)?cljs.core.partial.call(null,dommy.core.live_listener,elem_24128,selector_24129):cljs.core.identity).call(null,factory_24158.call(null,f_24136));dommy.core.update_event_listeners_BANG_.call(null,elem_24128,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_24129,actual_type_24157,f_24136], null),canonical_f_24159);
if(cljs.core.truth_(elem_24128.addEventListener))
{elem_24128.addEventListener(cljs.core.name.call(null,actual_type_24157),canonical_f_24159);
} else
{elem_24128.attachEvent(cljs.core.name.call(null,actual_type_24157),canonical_f_24159);
}
{
var G__24160 = cljs.core.next.call(null,seq__24115_24150__$1);
var G__24161 = null;
var G__24162 = 0;
var G__24163 = 0;
seq__24115_24137 = G__24160;
chunk__24117_24138 = G__24161;
count__24118_24139 = G__24162;
i__24119_24140 = G__24163;
continue;
}
}
} else
{}
}
break;
}
{
var G__24164 = seq__24105_24130;
var G__24165 = chunk__24112_24131;
var G__24166 = count__24113_24132;
var G__24167 = (i__24114_24133 + 1);
seq__24105_24130 = G__24164;
chunk__24112_24131 = G__24165;
count__24113_24132 = G__24166;
i__24114_24133 = G__24167;
continue;
}
} else
{var temp__4092__auto___24168 = cljs.core.seq.call(null,seq__24105_24130);if(temp__4092__auto___24168)
{var seq__24105_24169__$1 = temp__4092__auto___24168;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24105_24169__$1))
{var c__10127__auto___24170 = cljs.core.chunk_first.call(null,seq__24105_24169__$1);{
var G__24171 = cljs.core.chunk_rest.call(null,seq__24105_24169__$1);
var G__24172 = c__10127__auto___24170;
var G__24173 = cljs.core.count.call(null,c__10127__auto___24170);
var G__24174 = 0;
seq__24105_24130 = G__24171;
chunk__24112_24131 = G__24172;
count__24113_24132 = G__24173;
i__24114_24133 = G__24174;
continue;
}
} else
{var vec__24124_24175 = cljs.core.first.call(null,seq__24105_24169__$1);var orig_type_24176 = cljs.core.nth.call(null,vec__24124_24175,0,null);var f_24177 = cljs.core.nth.call(null,vec__24124_24175,1,null);var seq__24106_24178 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_24176,new cljs.core.PersistentArrayMap.fromArray([orig_type_24176,cljs.core.identity], true, false)));var chunk__24108_24179 = null;var count__24109_24180 = 0;var i__24110_24181 = 0;while(true){
if((i__24110_24181 < count__24109_24180))
{var vec__24125_24182 = cljs.core._nth.call(null,chunk__24108_24179,i__24110_24181);var actual_type_24183 = cljs.core.nth.call(null,vec__24125_24182,0,null);var factory_24184 = cljs.core.nth.call(null,vec__24125_24182,1,null);var canonical_f_24185 = (cljs.core.truth_(selector_24129)?cljs.core.partial.call(null,dommy.core.live_listener,elem_24128,selector_24129):cljs.core.identity).call(null,factory_24184.call(null,f_24177));dommy.core.update_event_listeners_BANG_.call(null,elem_24128,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_24129,actual_type_24183,f_24177], null),canonical_f_24185);
if(cljs.core.truth_(elem_24128.addEventListener))
{elem_24128.addEventListener(cljs.core.name.call(null,actual_type_24183),canonical_f_24185);
} else
{elem_24128.attachEvent(cljs.core.name.call(null,actual_type_24183),canonical_f_24185);
}
{
var G__24186 = seq__24106_24178;
var G__24187 = chunk__24108_24179;
var G__24188 = count__24109_24180;
var G__24189 = (i__24110_24181 + 1);
seq__24106_24178 = G__24186;
chunk__24108_24179 = G__24187;
count__24109_24180 = G__24188;
i__24110_24181 = G__24189;
continue;
}
} else
{var temp__4092__auto___24190__$1 = cljs.core.seq.call(null,seq__24106_24178);if(temp__4092__auto___24190__$1)
{var seq__24106_24191__$1 = temp__4092__auto___24190__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24106_24191__$1))
{var c__10127__auto___24192 = cljs.core.chunk_first.call(null,seq__24106_24191__$1);{
var G__24193 = cljs.core.chunk_rest.call(null,seq__24106_24191__$1);
var G__24194 = c__10127__auto___24192;
var G__24195 = cljs.core.count.call(null,c__10127__auto___24192);
var G__24196 = 0;
seq__24106_24178 = G__24193;
chunk__24108_24179 = G__24194;
count__24109_24180 = G__24195;
i__24110_24181 = G__24196;
continue;
}
} else
{var vec__24126_24197 = cljs.core.first.call(null,seq__24106_24191__$1);var actual_type_24198 = cljs.core.nth.call(null,vec__24126_24197,0,null);var factory_24199 = cljs.core.nth.call(null,vec__24126_24197,1,null);var canonical_f_24200 = (cljs.core.truth_(selector_24129)?cljs.core.partial.call(null,dommy.core.live_listener,elem_24128,selector_24129):cljs.core.identity).call(null,factory_24199.call(null,f_24177));dommy.core.update_event_listeners_BANG_.call(null,elem_24128,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_24129,actual_type_24198,f_24177], null),canonical_f_24200);
if(cljs.core.truth_(elem_24128.addEventListener))
{elem_24128.addEventListener(cljs.core.name.call(null,actual_type_24198),canonical_f_24200);
} else
{elem_24128.attachEvent(cljs.core.name.call(null,actual_type_24198),canonical_f_24200);
}
{
var G__24201 = cljs.core.next.call(null,seq__24106_24191__$1);
var G__24202 = null;
var G__24203 = 0;
var G__24204 = 0;
seq__24106_24178 = G__24201;
chunk__24108_24179 = G__24202;
count__24109_24180 = G__24203;
i__24110_24181 = G__24204;
continue;
}
}
} else
{}
}
break;
}
{
var G__24205 = cljs.core.next.call(null,seq__24105_24169__$1);
var G__24206 = null;
var G__24207 = 0;
var G__24208 = 0;
seq__24105_24130 = G__24205;
chunk__24112_24131 = G__24206;
count__24113_24132 = G__24207;
i__24114_24133 = G__24208;
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
listen_BANG_.cljs$lang$applyTo = (function (arglist__24209){
var elem_sel = cljs.core.first(arglist__24209);
var type_fs = cljs.core.rest(arglist__24209);
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
var vec__24233_24256 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_24257 = cljs.core.nth.call(null,vec__24233_24256,0,null);var selector_24258 = cljs.core.nth.call(null,vec__24233_24256,1,null);var seq__24234_24259 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__24241_24260 = null;var count__24242_24261 = 0;var i__24243_24262 = 0;while(true){
if((i__24243_24262 < count__24242_24261))
{var vec__24250_24263 = cljs.core._nth.call(null,chunk__24241_24260,i__24243_24262);var orig_type_24264 = cljs.core.nth.call(null,vec__24250_24263,0,null);var f_24265 = cljs.core.nth.call(null,vec__24250_24263,1,null);var seq__24244_24266 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_24264,new cljs.core.PersistentArrayMap.fromArray([orig_type_24264,cljs.core.identity], true, false)));var chunk__24246_24267 = null;var count__24247_24268 = 0;var i__24248_24269 = 0;while(true){
if((i__24248_24269 < count__24247_24268))
{var vec__24251_24270 = cljs.core._nth.call(null,chunk__24246_24267,i__24248_24269);var actual_type_24271 = cljs.core.nth.call(null,vec__24251_24270,0,null);var __24272 = cljs.core.nth.call(null,vec__24251_24270,1,null);var keys_24273 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_24258,actual_type_24271,f_24265], null);var canonical_f_24274 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_24257),keys_24273);dommy.core.update_event_listeners_BANG_.call(null,elem_24257,dommy.utils.dissoc_in,keys_24273);
if(cljs.core.truth_(elem_24257.removeEventListener))
{elem_24257.removeEventListener(cljs.core.name.call(null,actual_type_24271),canonical_f_24274);
} else
{elem_24257.detachEvent(cljs.core.name.call(null,actual_type_24271),canonical_f_24274);
}
{
var G__24275 = seq__24244_24266;
var G__24276 = chunk__24246_24267;
var G__24277 = count__24247_24268;
var G__24278 = (i__24248_24269 + 1);
seq__24244_24266 = G__24275;
chunk__24246_24267 = G__24276;
count__24247_24268 = G__24277;
i__24248_24269 = G__24278;
continue;
}
} else
{var temp__4092__auto___24279 = cljs.core.seq.call(null,seq__24244_24266);if(temp__4092__auto___24279)
{var seq__24244_24280__$1 = temp__4092__auto___24279;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24244_24280__$1))
{var c__10127__auto___24281 = cljs.core.chunk_first.call(null,seq__24244_24280__$1);{
var G__24282 = cljs.core.chunk_rest.call(null,seq__24244_24280__$1);
var G__24283 = c__10127__auto___24281;
var G__24284 = cljs.core.count.call(null,c__10127__auto___24281);
var G__24285 = 0;
seq__24244_24266 = G__24282;
chunk__24246_24267 = G__24283;
count__24247_24268 = G__24284;
i__24248_24269 = G__24285;
continue;
}
} else
{var vec__24252_24286 = cljs.core.first.call(null,seq__24244_24280__$1);var actual_type_24287 = cljs.core.nth.call(null,vec__24252_24286,0,null);var __24288 = cljs.core.nth.call(null,vec__24252_24286,1,null);var keys_24289 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_24258,actual_type_24287,f_24265], null);var canonical_f_24290 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_24257),keys_24289);dommy.core.update_event_listeners_BANG_.call(null,elem_24257,dommy.utils.dissoc_in,keys_24289);
if(cljs.core.truth_(elem_24257.removeEventListener))
{elem_24257.removeEventListener(cljs.core.name.call(null,actual_type_24287),canonical_f_24290);
} else
{elem_24257.detachEvent(cljs.core.name.call(null,actual_type_24287),canonical_f_24290);
}
{
var G__24291 = cljs.core.next.call(null,seq__24244_24280__$1);
var G__24292 = null;
var G__24293 = 0;
var G__24294 = 0;
seq__24244_24266 = G__24291;
chunk__24246_24267 = G__24292;
count__24247_24268 = G__24293;
i__24248_24269 = G__24294;
continue;
}
}
} else
{}
}
break;
}
{
var G__24295 = seq__24234_24259;
var G__24296 = chunk__24241_24260;
var G__24297 = count__24242_24261;
var G__24298 = (i__24243_24262 + 1);
seq__24234_24259 = G__24295;
chunk__24241_24260 = G__24296;
count__24242_24261 = G__24297;
i__24243_24262 = G__24298;
continue;
}
} else
{var temp__4092__auto___24299 = cljs.core.seq.call(null,seq__24234_24259);if(temp__4092__auto___24299)
{var seq__24234_24300__$1 = temp__4092__auto___24299;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24234_24300__$1))
{var c__10127__auto___24301 = cljs.core.chunk_first.call(null,seq__24234_24300__$1);{
var G__24302 = cljs.core.chunk_rest.call(null,seq__24234_24300__$1);
var G__24303 = c__10127__auto___24301;
var G__24304 = cljs.core.count.call(null,c__10127__auto___24301);
var G__24305 = 0;
seq__24234_24259 = G__24302;
chunk__24241_24260 = G__24303;
count__24242_24261 = G__24304;
i__24243_24262 = G__24305;
continue;
}
} else
{var vec__24253_24306 = cljs.core.first.call(null,seq__24234_24300__$1);var orig_type_24307 = cljs.core.nth.call(null,vec__24253_24306,0,null);var f_24308 = cljs.core.nth.call(null,vec__24253_24306,1,null);var seq__24235_24309 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_24307,new cljs.core.PersistentArrayMap.fromArray([orig_type_24307,cljs.core.identity], true, false)));var chunk__24237_24310 = null;var count__24238_24311 = 0;var i__24239_24312 = 0;while(true){
if((i__24239_24312 < count__24238_24311))
{var vec__24254_24313 = cljs.core._nth.call(null,chunk__24237_24310,i__24239_24312);var actual_type_24314 = cljs.core.nth.call(null,vec__24254_24313,0,null);var __24315 = cljs.core.nth.call(null,vec__24254_24313,1,null);var keys_24316 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_24258,actual_type_24314,f_24308], null);var canonical_f_24317 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_24257),keys_24316);dommy.core.update_event_listeners_BANG_.call(null,elem_24257,dommy.utils.dissoc_in,keys_24316);
if(cljs.core.truth_(elem_24257.removeEventListener))
{elem_24257.removeEventListener(cljs.core.name.call(null,actual_type_24314),canonical_f_24317);
} else
{elem_24257.detachEvent(cljs.core.name.call(null,actual_type_24314),canonical_f_24317);
}
{
var G__24318 = seq__24235_24309;
var G__24319 = chunk__24237_24310;
var G__24320 = count__24238_24311;
var G__24321 = (i__24239_24312 + 1);
seq__24235_24309 = G__24318;
chunk__24237_24310 = G__24319;
count__24238_24311 = G__24320;
i__24239_24312 = G__24321;
continue;
}
} else
{var temp__4092__auto___24322__$1 = cljs.core.seq.call(null,seq__24235_24309);if(temp__4092__auto___24322__$1)
{var seq__24235_24323__$1 = temp__4092__auto___24322__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24235_24323__$1))
{var c__10127__auto___24324 = cljs.core.chunk_first.call(null,seq__24235_24323__$1);{
var G__24325 = cljs.core.chunk_rest.call(null,seq__24235_24323__$1);
var G__24326 = c__10127__auto___24324;
var G__24327 = cljs.core.count.call(null,c__10127__auto___24324);
var G__24328 = 0;
seq__24235_24309 = G__24325;
chunk__24237_24310 = G__24326;
count__24238_24311 = G__24327;
i__24239_24312 = G__24328;
continue;
}
} else
{var vec__24255_24329 = cljs.core.first.call(null,seq__24235_24323__$1);var actual_type_24330 = cljs.core.nth.call(null,vec__24255_24329,0,null);var __24331 = cljs.core.nth.call(null,vec__24255_24329,1,null);var keys_24332 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_24258,actual_type_24330,f_24308], null);var canonical_f_24333 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_24257),keys_24332);dommy.core.update_event_listeners_BANG_.call(null,elem_24257,dommy.utils.dissoc_in,keys_24332);
if(cljs.core.truth_(elem_24257.removeEventListener))
{elem_24257.removeEventListener(cljs.core.name.call(null,actual_type_24330),canonical_f_24333);
} else
{elem_24257.detachEvent(cljs.core.name.call(null,actual_type_24330),canonical_f_24333);
}
{
var G__24334 = cljs.core.next.call(null,seq__24235_24323__$1);
var G__24335 = null;
var G__24336 = 0;
var G__24337 = 0;
seq__24235_24309 = G__24334;
chunk__24237_24310 = G__24335;
count__24238_24311 = G__24336;
i__24239_24312 = G__24337;
continue;
}
}
} else
{}
}
break;
}
{
var G__24338 = cljs.core.next.call(null,seq__24234_24300__$1);
var G__24339 = null;
var G__24340 = 0;
var G__24341 = 0;
seq__24234_24259 = G__24338;
chunk__24241_24260 = G__24339;
count__24242_24261 = G__24340;
i__24243_24262 = G__24341;
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
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__24342){
var elem_sel = cljs.core.first(arglist__24342);
var type_fs = cljs.core.rest(arglist__24342);
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
var vec__24350_24357 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_24358 = cljs.core.nth.call(null,vec__24350_24357,0,null);var selector_24359 = cljs.core.nth.call(null,vec__24350_24357,1,null);var seq__24351_24360 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__24352_24361 = null;var count__24353_24362 = 0;var i__24354_24363 = 0;while(true){
if((i__24354_24363 < count__24353_24362))
{var vec__24355_24364 = cljs.core._nth.call(null,chunk__24352_24361,i__24354_24363);var type_24365 = cljs.core.nth.call(null,vec__24355_24364,0,null);var f_24366 = cljs.core.nth.call(null,vec__24355_24364,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_24365,((function (seq__24351_24360,chunk__24352_24361,count__24353_24362,i__24354_24363,vec__24355_24364,type_24365,f_24366){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_24365,this_fn);
return f_24366.call(null,e);
});})(seq__24351_24360,chunk__24352_24361,count__24353_24362,i__24354_24363,vec__24355_24364,type_24365,f_24366))
);
{
var G__24367 = seq__24351_24360;
var G__24368 = chunk__24352_24361;
var G__24369 = count__24353_24362;
var G__24370 = (i__24354_24363 + 1);
seq__24351_24360 = G__24367;
chunk__24352_24361 = G__24368;
count__24353_24362 = G__24369;
i__24354_24363 = G__24370;
continue;
}
} else
{var temp__4092__auto___24371 = cljs.core.seq.call(null,seq__24351_24360);if(temp__4092__auto___24371)
{var seq__24351_24372__$1 = temp__4092__auto___24371;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24351_24372__$1))
{var c__10127__auto___24373 = cljs.core.chunk_first.call(null,seq__24351_24372__$1);{
var G__24374 = cljs.core.chunk_rest.call(null,seq__24351_24372__$1);
var G__24375 = c__10127__auto___24373;
var G__24376 = cljs.core.count.call(null,c__10127__auto___24373);
var G__24377 = 0;
seq__24351_24360 = G__24374;
chunk__24352_24361 = G__24375;
count__24353_24362 = G__24376;
i__24354_24363 = G__24377;
continue;
}
} else
{var vec__24356_24378 = cljs.core.first.call(null,seq__24351_24372__$1);var type_24379 = cljs.core.nth.call(null,vec__24356_24378,0,null);var f_24380 = cljs.core.nth.call(null,vec__24356_24378,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_24379,((function (seq__24351_24360,chunk__24352_24361,count__24353_24362,i__24354_24363,vec__24356_24378,type_24379,f_24380,seq__24351_24372__$1,temp__4092__auto___24371){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_24379,this_fn);
return f_24380.call(null,e);
});})(seq__24351_24360,chunk__24352_24361,count__24353_24362,i__24354_24363,vec__24356_24378,type_24379,f_24380,seq__24351_24372__$1,temp__4092__auto___24371))
);
{
var G__24381 = cljs.core.next.call(null,seq__24351_24372__$1);
var G__24382 = null;
var G__24383 = 0;
var G__24384 = 0;
seq__24351_24360 = G__24381;
chunk__24352_24361 = G__24382;
count__24353_24362 = G__24383;
i__24354_24363 = G__24384;
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
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__24385){
var elem_sel = cljs.core.first(arglist__24385);
var type_fs = cljs.core.rest(arglist__24385);
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
var fire_BANG___delegate = function (node,event_type,p__24386){var vec__24388 = p__24386;var update_event_BANG_ = cljs.core.nth.call(null,vec__24388,0,null);if(dommy.core.descendant_QMARK_.call(null,node,document.documentElement))
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
var p__24386 = null;if (arguments.length > 2) {
  p__24386 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fire_BANG___delegate.call(this,node,event_type,p__24386);};
fire_BANG_.cljs$lang$maxFixedArity = 2;
fire_BANG_.cljs$lang$applyTo = (function (arglist__24389){
var node = cljs.core.first(arglist__24389);
arglist__24389 = cljs.core.next(arglist__24389);
var event_type = cljs.core.first(arglist__24389);
var p__24386 = cljs.core.rest(arglist__24389);
return fire_BANG___delegate(node,event_type,p__24386);
});
fire_BANG_.cljs$core$IFn$_invoke$arity$variadic = fire_BANG___delegate;
return fire_BANG_;
})()
;
