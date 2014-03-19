// Compiled by ClojureScript 0.0-2138
goog.provide('dommy.attrs');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
/**
* does class-name string have class starting at index idx.
* only will be used when Element::classList doesn't exist
*/
dommy.attrs.class_match_QMARK_ = (function class_match_QMARK_(class_name,class$,idx){var and__9373__auto__ = ((idx === 0)) || ((" " === class_name.charAt((idx - 1))));if(and__9373__auto__)
{var total_len = class_name.length;var stop = (idx + class$.length);if((stop <= total_len))
{return ((stop === total_len)) || ((" " === class_name.charAt(stop)));
} else
{return null;
}
} else
{return and__9373__auto__;
}
});
/**
* Finds the index of class in a space-delimited class-name
* only will be used when Element::classList doesn't exist
*/
dommy.attrs.class_index = (function class_index(class_name,class$){var start_from = 0;while(true){
var i = class_name.indexOf(class$,start_from);if((i >= 0))
{if(dommy.attrs.class_match_QMARK_.call(null,class_name,class$,i))
{return i;
} else
{{
var G__19411 = (i + class$.length);
start_from = G__19411;
continue;
}
}
} else
{return null;
}
break;
}
});
/**
* Does an HTML element have a class. Uses Element::classList if
* available and otherwise does fast parse of className string
*/
dommy.attrs.has_class_QMARK_ = (function has_class_QMARK_(elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto__ = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto__))
{var class_list = temp__4090__auto__;return class_list.contains(class$__$1);
} else
{var temp__4092__auto__ = elem__$1.className;if(cljs.core.truth_(temp__4092__auto__))
{var class_name = temp__4092__auto__;var temp__4092__auto____$1 = dommy.attrs.class_index.call(null,class_name,class$__$1);if(cljs.core.truth_(temp__4092__auto____$1))
{var i = temp__4092__auto____$1;return (i >= 0);
} else
{return null;
}
} else
{return null;
}
}
});
/**
* add class to element
* @param {...*} var_args
*/
dommy.attrs.add_class_BANG_ = (function() {
var add_class_BANG_ = null;
var add_class_BANG___2 = (function (elem,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var classes__$1 = clojure.string.trim.call(null,cljs.core.name.call(null,classes));if(cljs.core.seq.call(null,classes__$1))
{var temp__4090__auto___19436 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___19436))
{var class_list_19437 = temp__4090__auto___19436;var seq__19424_19438 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__19425_19439 = null;var count__19426_19440 = 0;var i__19427_19441 = 0;while(true){
if((i__19427_19441 < count__19426_19440))
{var class_19442 = cljs.core._nth.call(null,chunk__19425_19439,i__19427_19441);class_list_19437.add(class_19442);
{
var G__19443 = seq__19424_19438;
var G__19444 = chunk__19425_19439;
var G__19445 = count__19426_19440;
var G__19446 = (i__19427_19441 + 1);
seq__19424_19438 = G__19443;
chunk__19425_19439 = G__19444;
count__19426_19440 = G__19445;
i__19427_19441 = G__19446;
continue;
}
} else
{var temp__4092__auto___19447 = cljs.core.seq.call(null,seq__19424_19438);if(temp__4092__auto___19447)
{var seq__19424_19448__$1 = temp__4092__auto___19447;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19424_19448__$1))
{var c__10127__auto___19449 = cljs.core.chunk_first.call(null,seq__19424_19448__$1);{
var G__19450 = cljs.core.chunk_rest.call(null,seq__19424_19448__$1);
var G__19451 = c__10127__auto___19449;
var G__19452 = cljs.core.count.call(null,c__10127__auto___19449);
var G__19453 = 0;
seq__19424_19438 = G__19450;
chunk__19425_19439 = G__19451;
count__19426_19440 = G__19452;
i__19427_19441 = G__19453;
continue;
}
} else
{var class_19454 = cljs.core.first.call(null,seq__19424_19448__$1);class_list_19437.add(class_19454);
{
var G__19455 = cljs.core.next.call(null,seq__19424_19448__$1);
var G__19456 = null;
var G__19457 = 0;
var G__19458 = 0;
seq__19424_19438 = G__19455;
chunk__19425_19439 = G__19456;
count__19426_19440 = G__19457;
i__19427_19441 = G__19458;
continue;
}
}
} else
{}
}
break;
}
} else
{var class_name_19459 = elem__$1.className;var seq__19428_19460 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__19429_19461 = null;var count__19430_19462 = 0;var i__19431_19463 = 0;while(true){
if((i__19431_19463 < count__19430_19462))
{var class_19464 = cljs.core._nth.call(null,chunk__19429_19461,i__19431_19463);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_19459,class_19464)))
{} else
{elem__$1.className = (((class_name_19459 === ""))?class_19464:[cljs.core.str(class_name_19459),cljs.core.str(" "),cljs.core.str(class_19464)].join(''));
}
{
var G__19465 = seq__19428_19460;
var G__19466 = chunk__19429_19461;
var G__19467 = count__19430_19462;
var G__19468 = (i__19431_19463 + 1);
seq__19428_19460 = G__19465;
chunk__19429_19461 = G__19466;
count__19430_19462 = G__19467;
i__19431_19463 = G__19468;
continue;
}
} else
{var temp__4092__auto___19469 = cljs.core.seq.call(null,seq__19428_19460);if(temp__4092__auto___19469)
{var seq__19428_19470__$1 = temp__4092__auto___19469;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19428_19470__$1))
{var c__10127__auto___19471 = cljs.core.chunk_first.call(null,seq__19428_19470__$1);{
var G__19472 = cljs.core.chunk_rest.call(null,seq__19428_19470__$1);
var G__19473 = c__10127__auto___19471;
var G__19474 = cljs.core.count.call(null,c__10127__auto___19471);
var G__19475 = 0;
seq__19428_19460 = G__19472;
chunk__19429_19461 = G__19473;
count__19430_19462 = G__19474;
i__19431_19463 = G__19475;
continue;
}
} else
{var class_19476 = cljs.core.first.call(null,seq__19428_19470__$1);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_19459,class_19476)))
{} else
{elem__$1.className = (((class_name_19459 === ""))?class_19476:[cljs.core.str(class_name_19459),cljs.core.str(" "),cljs.core.str(class_19476)].join(''));
}
{
var G__19477 = cljs.core.next.call(null,seq__19428_19470__$1);
var G__19478 = null;
var G__19479 = 0;
var G__19480 = 0;
seq__19428_19460 = G__19477;
chunk__19429_19461 = G__19478;
count__19430_19462 = G__19479;
i__19431_19463 = G__19480;
continue;
}
}
} else
{}
}
break;
}
}
} else
{}
return elem__$1;
});
var add_class_BANG___3 = (function() { 
var G__19481__delegate = function (elem,classes,more_classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__19432_19482 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));var chunk__19433_19483 = null;var count__19434_19484 = 0;var i__19435_19485 = 0;while(true){
if((i__19435_19485 < count__19434_19484))
{var c_19486 = cljs.core._nth.call(null,chunk__19433_19483,i__19435_19485);add_class_BANG_.call(null,elem__$1,c_19486);
{
var G__19487 = seq__19432_19482;
var G__19488 = chunk__19433_19483;
var G__19489 = count__19434_19484;
var G__19490 = (i__19435_19485 + 1);
seq__19432_19482 = G__19487;
chunk__19433_19483 = G__19488;
count__19434_19484 = G__19489;
i__19435_19485 = G__19490;
continue;
}
} else
{var temp__4092__auto___19491 = cljs.core.seq.call(null,seq__19432_19482);if(temp__4092__auto___19491)
{var seq__19432_19492__$1 = temp__4092__auto___19491;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19432_19492__$1))
{var c__10127__auto___19493 = cljs.core.chunk_first.call(null,seq__19432_19492__$1);{
var G__19494 = cljs.core.chunk_rest.call(null,seq__19432_19492__$1);
var G__19495 = c__10127__auto___19493;
var G__19496 = cljs.core.count.call(null,c__10127__auto___19493);
var G__19497 = 0;
seq__19432_19482 = G__19494;
chunk__19433_19483 = G__19495;
count__19434_19484 = G__19496;
i__19435_19485 = G__19497;
continue;
}
} else
{var c_19498 = cljs.core.first.call(null,seq__19432_19492__$1);add_class_BANG_.call(null,elem__$1,c_19498);
{
var G__19499 = cljs.core.next.call(null,seq__19432_19492__$1);
var G__19500 = null;
var G__19501 = 0;
var G__19502 = 0;
seq__19432_19482 = G__19499;
chunk__19433_19483 = G__19500;
count__19434_19484 = G__19501;
i__19435_19485 = G__19502;
continue;
}
}
} else
{}
}
break;
}
return elem__$1;
};
var G__19481 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__19481__delegate.call(this,elem,classes,more_classes);};
G__19481.cljs$lang$maxFixedArity = 2;
G__19481.cljs$lang$applyTo = (function (arglist__19503){
var elem = cljs.core.first(arglist__19503);
arglist__19503 = cljs.core.next(arglist__19503);
var classes = cljs.core.first(arglist__19503);
var more_classes = cljs.core.rest(arglist__19503);
return G__19481__delegate(elem,classes,more_classes);
});
G__19481.cljs$core$IFn$_invoke$arity$variadic = G__19481__delegate;
return G__19481;
})()
;
add_class_BANG_ = function(elem,classes,var_args){
var more_classes = var_args;
switch(arguments.length){
case 2:
return add_class_BANG___2.call(this,elem,classes);
default:
return add_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic(elem,classes, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_class_BANG_.cljs$lang$maxFixedArity = 2;
add_class_BANG_.cljs$lang$applyTo = add_class_BANG___3.cljs$lang$applyTo;
add_class_BANG_.cljs$core$IFn$_invoke$arity$2 = add_class_BANG___2;
add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = add_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return add_class_BANG_;
})()
;
dommy.attrs.remove_class_str = (function remove_class_str(init_class_name,class$){var class_name = init_class_name;while(true){
var class_len = class_name.length;var temp__4090__auto__ = dommy.attrs.class_index.call(null,class_name,class$);if(cljs.core.truth_(temp__4090__auto__))
{var i = temp__4090__auto__;{
var G__19504 = (function (){var end = (i + class$.length);return [cljs.core.str((((end < class_len))?[cljs.core.str(class_name.substring(0,i)),cljs.core.str(class_name.substr((end + 1)))].join(''):class_name.substring(0,(i - 1))))].join('');
})();
class_name = G__19504;
continue;
}
} else
{return class_name;
}
break;
}
});
/**
* remove class from and returns `elem`
* @param {...*} var_args
*/
dommy.attrs.remove_class_BANG_ = (function() {
var remove_class_BANG_ = null;
var remove_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___19513 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___19513))
{var class_list_19514 = temp__4090__auto___19513;class_list_19514.remove(class$__$1);
} else
{var class_name_19515 = elem__$1.className;var new_class_name_19516 = dommy.attrs.remove_class_str.call(null,class_name_19515,class$__$1);if((class_name_19515 === new_class_name_19516))
{} else
{elem__$1.className = new_class_name_19516;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__19517__delegate = function (elem,class$,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__19509 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));var chunk__19510 = null;var count__19511 = 0;var i__19512 = 0;while(true){
if((i__19512 < count__19511))
{var c = cljs.core._nth.call(null,chunk__19510,i__19512);remove_class_BANG_.call(null,elem__$1,c);
{
var G__19518 = seq__19509;
var G__19519 = chunk__19510;
var G__19520 = count__19511;
var G__19521 = (i__19512 + 1);
seq__19509 = G__19518;
chunk__19510 = G__19519;
count__19511 = G__19520;
i__19512 = G__19521;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__19509);if(temp__4092__auto__)
{var seq__19509__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19509__$1))
{var c__10127__auto__ = cljs.core.chunk_first.call(null,seq__19509__$1);{
var G__19522 = cljs.core.chunk_rest.call(null,seq__19509__$1);
var G__19523 = c__10127__auto__;
var G__19524 = cljs.core.count.call(null,c__10127__auto__);
var G__19525 = 0;
seq__19509 = G__19522;
chunk__19510 = G__19523;
count__19511 = G__19524;
i__19512 = G__19525;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__19509__$1);remove_class_BANG_.call(null,elem__$1,c);
{
var G__19526 = cljs.core.next.call(null,seq__19509__$1);
var G__19527 = null;
var G__19528 = 0;
var G__19529 = 0;
seq__19509 = G__19526;
chunk__19510 = G__19527;
count__19511 = G__19528;
i__19512 = G__19529;
continue;
}
}
} else
{return null;
}
}
break;
}
};
var G__19517 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__19517__delegate.call(this,elem,class$,classes);};
G__19517.cljs$lang$maxFixedArity = 2;
G__19517.cljs$lang$applyTo = (function (arglist__19530){
var elem = cljs.core.first(arglist__19530);
arglist__19530 = cljs.core.next(arglist__19530);
var class$ = cljs.core.first(arglist__19530);
var classes = cljs.core.rest(arglist__19530);
return G__19517__delegate(elem,class$,classes);
});
G__19517.cljs$core$IFn$_invoke$arity$variadic = G__19517__delegate;
return G__19517;
})()
;
remove_class_BANG_ = function(elem,class$,var_args){
var classes = var_args;
switch(arguments.length){
case 2:
return remove_class_BANG___2.call(this,elem,class$);
default:
return remove_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic(elem,class$, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_class_BANG_.cljs$lang$maxFixedArity = 2;
remove_class_BANG_.cljs$lang$applyTo = remove_class_BANG___3.cljs$lang$applyTo;
remove_class_BANG_.cljs$core$IFn$_invoke$arity$2 = remove_class_BANG___2;
remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = remove_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return remove_class_BANG_;
})()
;
/**
* (toggle-class! elem class) will add-class! if elem does not have class
* and remove-class! otherwise.
* (toggle-class! elem class add?) will add-class! if add? is truthy,
* otherwise it will remove-class!
*/
dommy.attrs.toggle_class_BANG_ = (function() {
var toggle_class_BANG_ = null;
var toggle_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___19531 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___19531))
{var class_list_19532 = temp__4090__auto___19531;class_list_19532.toggle(class$__$1);
} else
{toggle_class_BANG_.call(null,elem__$1,class$__$1,!(dommy.attrs.has_class_QMARK_.call(null,elem__$1,class$__$1)));
}
return elem__$1;
});
var toggle_class_BANG___3 = (function (elem,class$,add_QMARK_){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);if(add_QMARK_)
{dommy.attrs.add_class_BANG_.call(null,elem__$1,class$);
} else
{dommy.attrs.remove_class_BANG_.call(null,elem__$1,class$);
}
return elem__$1;
});
toggle_class_BANG_ = function(elem,class$,add_QMARK_){
switch(arguments.length){
case 2:
return toggle_class_BANG___2.call(this,elem,class$);
case 3:
return toggle_class_BANG___3.call(this,elem,class$,add_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2 = toggle_class_BANG___2;
toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3 = toggle_class_BANG___3;
return toggle_class_BANG_;
})()
;
dommy.attrs.style_str = (function style_str(x){if(typeof x === 'string')
{return x;
} else
{return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__19535){var vec__19536 = p__19535;var k = cljs.core.nth.call(null,vec__19536,0,null);var v = cljs.core.nth.call(null,vec__19536,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str(":"),cljs.core.str(cljs.core.name.call(null,v)),cljs.core.str(";")].join('');
}),x));
}
});
/**
* @param {...*} var_args
*/
dommy.attrs.set_style_BANG_ = (function() { 
var set_style_BANG___delegate = function (elem,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var style = elem__$1.style;var seq__19543_19549 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__19544_19550 = null;var count__19545_19551 = 0;var i__19546_19552 = 0;while(true){
if((i__19546_19552 < count__19545_19551))
{var vec__19547_19553 = cljs.core._nth.call(null,chunk__19544_19550,i__19546_19552);var k_19554 = cljs.core.nth.call(null,vec__19547_19553,0,null);var v_19555 = cljs.core.nth.call(null,vec__19547_19553,1,null);(style[cljs.core.name.call(null,k_19554)] = v_19555);
{
var G__19556 = seq__19543_19549;
var G__19557 = chunk__19544_19550;
var G__19558 = count__19545_19551;
var G__19559 = (i__19546_19552 + 1);
seq__19543_19549 = G__19556;
chunk__19544_19550 = G__19557;
count__19545_19551 = G__19558;
i__19546_19552 = G__19559;
continue;
}
} else
{var temp__4092__auto___19560 = cljs.core.seq.call(null,seq__19543_19549);if(temp__4092__auto___19560)
{var seq__19543_19561__$1 = temp__4092__auto___19560;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19543_19561__$1))
{var c__10127__auto___19562 = cljs.core.chunk_first.call(null,seq__19543_19561__$1);{
var G__19563 = cljs.core.chunk_rest.call(null,seq__19543_19561__$1);
var G__19564 = c__10127__auto___19562;
var G__19565 = cljs.core.count.call(null,c__10127__auto___19562);
var G__19566 = 0;
seq__19543_19549 = G__19563;
chunk__19544_19550 = G__19564;
count__19545_19551 = G__19565;
i__19546_19552 = G__19566;
continue;
}
} else
{var vec__19548_19567 = cljs.core.first.call(null,seq__19543_19561__$1);var k_19568 = cljs.core.nth.call(null,vec__19548_19567,0,null);var v_19569 = cljs.core.nth.call(null,vec__19548_19567,1,null);(style[cljs.core.name.call(null,k_19568)] = v_19569);
{
var G__19570 = cljs.core.next.call(null,seq__19543_19561__$1);
var G__19571 = null;
var G__19572 = 0;
var G__19573 = 0;
seq__19543_19549 = G__19570;
chunk__19544_19550 = G__19571;
count__19545_19551 = G__19572;
i__19546_19552 = G__19573;
continue;
}
}
} else
{}
}
break;
}
return elem__$1;
};
var set_style_BANG_ = function (elem,var_args){
var kvs = null;if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return set_style_BANG___delegate.call(this,elem,kvs);};
set_style_BANG_.cljs$lang$maxFixedArity = 1;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__19574){
var elem = cljs.core.first(arglist__19574);
var kvs = cljs.core.rest(arglist__19574);
return set_style_BANG___delegate(elem,kvs);
});
set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_style_BANG___delegate;
return set_style_BANG_;
})()
;
dommy.attrs.style = (function style(elem,k){if(cljs.core.truth_(k))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"k","k",-1640531420,null)))].join('')));
}
return (window.getComputedStyle(dommy.template.__GT_node_like.call(null,elem))[cljs.core.name.call(null,k)]);
});
/**
* @param {...*} var_args
*/
dommy.attrs.set_px_BANG_ = (function() { 
var set_px_BANG___delegate = function (elem,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__19581_19587 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__19582_19588 = null;var count__19583_19589 = 0;var i__19584_19590 = 0;while(true){
if((i__19584_19590 < count__19583_19589))
{var vec__19585_19591 = cljs.core._nth.call(null,chunk__19582_19588,i__19584_19590);var k_19592 = cljs.core.nth.call(null,vec__19585_19591,0,null);var v_19593 = cljs.core.nth.call(null,vec__19585_19591,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_19592,[cljs.core.str(v_19593),cljs.core.str("px")].join(''));
{
var G__19594 = seq__19581_19587;
var G__19595 = chunk__19582_19588;
var G__19596 = count__19583_19589;
var G__19597 = (i__19584_19590 + 1);
seq__19581_19587 = G__19594;
chunk__19582_19588 = G__19595;
count__19583_19589 = G__19596;
i__19584_19590 = G__19597;
continue;
}
} else
{var temp__4092__auto___19598 = cljs.core.seq.call(null,seq__19581_19587);if(temp__4092__auto___19598)
{var seq__19581_19599__$1 = temp__4092__auto___19598;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19581_19599__$1))
{var c__10127__auto___19600 = cljs.core.chunk_first.call(null,seq__19581_19599__$1);{
var G__19601 = cljs.core.chunk_rest.call(null,seq__19581_19599__$1);
var G__19602 = c__10127__auto___19600;
var G__19603 = cljs.core.count.call(null,c__10127__auto___19600);
var G__19604 = 0;
seq__19581_19587 = G__19601;
chunk__19582_19588 = G__19602;
count__19583_19589 = G__19603;
i__19584_19590 = G__19604;
continue;
}
} else
{var vec__19586_19605 = cljs.core.first.call(null,seq__19581_19599__$1);var k_19606 = cljs.core.nth.call(null,vec__19586_19605,0,null);var v_19607 = cljs.core.nth.call(null,vec__19586_19605,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_19606,[cljs.core.str(v_19607),cljs.core.str("px")].join(''));
{
var G__19608 = cljs.core.next.call(null,seq__19581_19599__$1);
var G__19609 = null;
var G__19610 = 0;
var G__19611 = 0;
seq__19581_19587 = G__19608;
chunk__19582_19588 = G__19609;
count__19583_19589 = G__19610;
i__19584_19590 = G__19611;
continue;
}
}
} else
{}
}
break;
}
return elem__$1;
};
var set_px_BANG_ = function (elem,var_args){
var kvs = null;if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return set_px_BANG___delegate.call(this,elem,kvs);};
set_px_BANG_.cljs$lang$maxFixedArity = 1;
set_px_BANG_.cljs$lang$applyTo = (function (arglist__19612){
var elem = cljs.core.first(arglist__19612);
var kvs = cljs.core.rest(arglist__19612);
return set_px_BANG___delegate(elem,kvs);
});
set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_px_BANG___delegate;
return set_px_BANG_;
})()
;
dommy.attrs.px = (function px(elem,k){var pixels = dommy.attrs.style.call(null,dommy.template.__GT_node_like.call(null,elem),k);if(cljs.core.seq.call(null,pixels))
{return parseInt(pixels);
} else
{return null;
}
});
/**
* Sets dom attributes on and returns `elem`.
* Attributes without values will be set to "true":
* 
* (set-attr! elem :disabled)
* 
* With values, the function takes variadic kv pairs:
* 
* (set-attr! elem :id "some-id"
* :name "some-name")
* @param {...*} var_args
*/
dommy.attrs.set_attr_BANG_ = (function() {
var set_attr_BANG_ = null;
var set_attr_BANG___2 = (function (elem,k){return set_attr_BANG_.call(null,dommy.template.__GT_node_like.call(null,elem),k,"true");
});
var set_attr_BANG___3 = (function (elem,k,v){if(cljs.core.truth_(v))
{if(cljs.core.fn_QMARK_.call(null,v))
{var G__19621 = dommy.template.__GT_node_like.call(null,elem);(G__19621[cljs.core.name.call(null,k)] = v);
return G__19621;
} else
{var G__19622 = dommy.template.__GT_node_like.call(null,elem);G__19622.setAttribute(cljs.core.name.call(null,k),(((k === new cljs.core.Keyword(null,"style","style",1123684643)))?dommy.attrs.style_str.call(null,v):v));
return G__19622;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__19629__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__19623_19630 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,2,kvs)));var chunk__19624_19631 = null;var count__19625_19632 = 0;var i__19626_19633 = 0;while(true){
if((i__19626_19633 < count__19625_19632))
{var vec__19627_19634 = cljs.core._nth.call(null,chunk__19624_19631,i__19626_19633);var k_19635__$1 = cljs.core.nth.call(null,vec__19627_19634,0,null);var v_19636__$1 = cljs.core.nth.call(null,vec__19627_19634,1,null);set_attr_BANG_.call(null,elem__$1,k_19635__$1,v_19636__$1);
{
var G__19637 = seq__19623_19630;
var G__19638 = chunk__19624_19631;
var G__19639 = count__19625_19632;
var G__19640 = (i__19626_19633 + 1);
seq__19623_19630 = G__19637;
chunk__19624_19631 = G__19638;
count__19625_19632 = G__19639;
i__19626_19633 = G__19640;
continue;
}
} else
{var temp__4092__auto___19641 = cljs.core.seq.call(null,seq__19623_19630);if(temp__4092__auto___19641)
{var seq__19623_19642__$1 = temp__4092__auto___19641;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19623_19642__$1))
{var c__10127__auto___19643 = cljs.core.chunk_first.call(null,seq__19623_19642__$1);{
var G__19644 = cljs.core.chunk_rest.call(null,seq__19623_19642__$1);
var G__19645 = c__10127__auto___19643;
var G__19646 = cljs.core.count.call(null,c__10127__auto___19643);
var G__19647 = 0;
seq__19623_19630 = G__19644;
chunk__19624_19631 = G__19645;
count__19625_19632 = G__19646;
i__19626_19633 = G__19647;
continue;
}
} else
{var vec__19628_19648 = cljs.core.first.call(null,seq__19623_19642__$1);var k_19649__$1 = cljs.core.nth.call(null,vec__19628_19648,0,null);var v_19650__$1 = cljs.core.nth.call(null,vec__19628_19648,1,null);set_attr_BANG_.call(null,elem__$1,k_19649__$1,v_19650__$1);
{
var G__19651 = cljs.core.next.call(null,seq__19623_19642__$1);
var G__19652 = null;
var G__19653 = 0;
var G__19654 = 0;
seq__19623_19630 = G__19651;
chunk__19624_19631 = G__19652;
count__19625_19632 = G__19653;
i__19626_19633 = G__19654;
continue;
}
}
} else
{}
}
break;
}
return elem__$1;
};
var G__19629 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__19629__delegate.call(this,elem,k,v,kvs);};
G__19629.cljs$lang$maxFixedArity = 3;
G__19629.cljs$lang$applyTo = (function (arglist__19655){
var elem = cljs.core.first(arglist__19655);
arglist__19655 = cljs.core.next(arglist__19655);
var k = cljs.core.first(arglist__19655);
arglist__19655 = cljs.core.next(arglist__19655);
var v = cljs.core.first(arglist__19655);
var kvs = cljs.core.rest(arglist__19655);
return G__19629__delegate(elem,k,v,kvs);
});
G__19629.cljs$core$IFn$_invoke$arity$variadic = G__19629__delegate;
return G__19629;
})()
;
set_attr_BANG_ = function(elem,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case 2:
return set_attr_BANG___2.call(this,elem,k);
case 3:
return set_attr_BANG___3.call(this,elem,k,v);
default:
return set_attr_BANG___4.cljs$core$IFn$_invoke$arity$variadic(elem,k,v, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
set_attr_BANG_.cljs$lang$maxFixedArity = 3;
set_attr_BANG_.cljs$lang$applyTo = set_attr_BANG___4.cljs$lang$applyTo;
set_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = set_attr_BANG___2;
set_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = set_attr_BANG___3;
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___4.cljs$core$IFn$_invoke$arity$variadic;
return set_attr_BANG_;
})()
;
/**
* @param {...*} var_args
*/
dommy.attrs.remove_attr_BANG_ = (function() {
var remove_attr_BANG_ = null;
var remove_attr_BANG___2 = (function (elem,k){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",1108647146),null,new cljs.core.Keyword(null,"classes","classes",1867525016),null], null), null).call(null,k)))
{elem__$1.className = "";
} else
{elem__$1.removeAttribute(cljs.core.name.call(null,k));
}
return elem__$1;
});
var remove_attr_BANG___3 = (function() { 
var G__19664__delegate = function (elem,k,ks){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__19660_19665 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));var chunk__19661_19666 = null;var count__19662_19667 = 0;var i__19663_19668 = 0;while(true){
if((i__19663_19668 < count__19662_19667))
{var k_19669__$1 = cljs.core._nth.call(null,chunk__19661_19666,i__19663_19668);remove_attr_BANG_.call(null,elem__$1,k_19669__$1);
{
var G__19670 = seq__19660_19665;
var G__19671 = chunk__19661_19666;
var G__19672 = count__19662_19667;
var G__19673 = (i__19663_19668 + 1);
seq__19660_19665 = G__19670;
chunk__19661_19666 = G__19671;
count__19662_19667 = G__19672;
i__19663_19668 = G__19673;
continue;
}
} else
{var temp__4092__auto___19674 = cljs.core.seq.call(null,seq__19660_19665);if(temp__4092__auto___19674)
{var seq__19660_19675__$1 = temp__4092__auto___19674;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19660_19675__$1))
{var c__10127__auto___19676 = cljs.core.chunk_first.call(null,seq__19660_19675__$1);{
var G__19677 = cljs.core.chunk_rest.call(null,seq__19660_19675__$1);
var G__19678 = c__10127__auto___19676;
var G__19679 = cljs.core.count.call(null,c__10127__auto___19676);
var G__19680 = 0;
seq__19660_19665 = G__19677;
chunk__19661_19666 = G__19678;
count__19662_19667 = G__19679;
i__19663_19668 = G__19680;
continue;
}
} else
{var k_19681__$1 = cljs.core.first.call(null,seq__19660_19675__$1);remove_attr_BANG_.call(null,elem__$1,k_19681__$1);
{
var G__19682 = cljs.core.next.call(null,seq__19660_19675__$1);
var G__19683 = null;
var G__19684 = 0;
var G__19685 = 0;
seq__19660_19665 = G__19682;
chunk__19661_19666 = G__19683;
count__19662_19667 = G__19684;
i__19663_19668 = G__19685;
continue;
}
}
} else
{}
}
break;
}
return elem__$1;
};
var G__19664 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__19664__delegate.call(this,elem,k,ks);};
G__19664.cljs$lang$maxFixedArity = 2;
G__19664.cljs$lang$applyTo = (function (arglist__19686){
var elem = cljs.core.first(arglist__19686);
arglist__19686 = cljs.core.next(arglist__19686);
var k = cljs.core.first(arglist__19686);
var ks = cljs.core.rest(arglist__19686);
return G__19664__delegate(elem,k,ks);
});
G__19664.cljs$core$IFn$_invoke$arity$variadic = G__19664__delegate;
return G__19664;
})()
;
remove_attr_BANG_ = function(elem,k,var_args){
var ks = var_args;
switch(arguments.length){
case 2:
return remove_attr_BANG___2.call(this,elem,k);
default:
return remove_attr_BANG___3.cljs$core$IFn$_invoke$arity$variadic(elem,k, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_attr_BANG_.cljs$lang$maxFixedArity = 2;
remove_attr_BANG_.cljs$lang$applyTo = remove_attr_BANG___3.cljs$lang$applyTo;
remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = remove_attr_BANG___2;
remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = remove_attr_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return remove_attr_BANG_;
})()
;
dommy.attrs.attr = (function attr(elem,k){if(cljs.core.truth_(k))
{return dommy.template.__GT_node_like.call(null,elem).getAttribute(cljs.core.name.call(null,k));
} else
{return null;
}
});
dommy.attrs.toggle_attr_BANG_ = (function() {
var toggle_attr_BANG_ = null;
var toggle_attr_BANG___2 = (function (elem,k){return toggle_attr_BANG_.call(null,elem,k,cljs.core.boolean$.call(null,dommy.attrs.attr.call(null,elem,k)));
});
var toggle_attr_BANG___3 = (function (elem,k,add_QMARK_){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);if(add_QMARK_)
{return dommy.attrs.set_attr_BANG_.call(null,elem__$1,k);
} else
{return dommy.attrs.remove_attr_BANG_.call(null,elem__$1,k);
}
});
toggle_attr_BANG_ = function(elem,k,add_QMARK_){
switch(arguments.length){
case 2:
return toggle_attr_BANG___2.call(this,elem,k);
case 3:
return toggle_attr_BANG___3.call(this,elem,k,add_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = toggle_attr_BANG___2;
toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = toggle_attr_BANG___3;
return toggle_attr_BANG_;
})()
;
dommy.attrs.hidden_QMARK_ = (function hidden_QMARK_(elem){return ("none" === dommy.template.__GT_node_like.call(null,elem).style.display);
});
/**
* Display or hide the given `elem`. Takes an optional boolean `show?`
* indicating whether to show or hide `elem`.
*/
dommy.attrs.toggle_BANG_ = (function() {
var toggle_BANG_ = null;
var toggle_BANG___1 = (function (elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);toggle_BANG_.call(null,elem__$1,dommy.attrs.hidden_QMARK_.call(null,elem__$1));
return elem__$1;
});
var toggle_BANG___2 = (function (elem,show_QMARK_){var G__19688 = dommy.template.__GT_node_like.call(null,elem);G__19688.style.display = ((show_QMARK_)?"":"none");
return G__19688;
});
toggle_BANG_ = function(elem,show_QMARK_){
switch(arguments.length){
case 1:
return toggle_BANG___1.call(this,elem);
case 2:
return toggle_BANG___2.call(this,elem,show_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
toggle_BANG_.cljs$core$IFn$_invoke$arity$1 = toggle_BANG___1;
toggle_BANG_.cljs$core$IFn$_invoke$arity$2 = toggle_BANG___2;
return toggle_BANG_;
})()
;
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){var G__19690 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__19690,false);
return G__19690;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){var G__19692 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__19692,true);
return G__19692;
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.attrs.bounding_client_rect = (function bounding_client_rect(elem){return cljs.core.js__GT_clj.call(null,(function (){var G__19694 = dommy.template.__GT_node_like.call(null,elem).getBoundingClientRect();(G__19694["constructor"] = Object);
return G__19694;
})(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);
});
dommy.attrs.scroll_into_view = (function scroll_into_view(elem,align_with_top_QMARK_){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var top = new cljs.core.Keyword(null,"top","top",1014019271).cljs$core$IFn$_invoke$arity$1(dommy.attrs.bounding_client_rect.call(null,elem__$1));if((window.innerHeight < (top + elem__$1.offsetHeight)))
{return elem__$1.scrollIntoView(align_with_top_QMARK_);
} else
{return null;
}
});
