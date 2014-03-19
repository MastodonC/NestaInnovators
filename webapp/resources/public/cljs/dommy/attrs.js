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
var G__20933 = (i + class$.length);
start_from = G__20933;
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
{var temp__4090__auto___20958 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___20958))
{var class_list_20959 = temp__4090__auto___20958;var seq__20946_20960 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__20947_20961 = null;var count__20948_20962 = 0;var i__20949_20963 = 0;while(true){
if((i__20949_20963 < count__20948_20962))
{var class_20964 = cljs.core._nth.call(null,chunk__20947_20961,i__20949_20963);class_list_20959.add(class_20964);
{
var G__20965 = seq__20946_20960;
var G__20966 = chunk__20947_20961;
var G__20967 = count__20948_20962;
var G__20968 = (i__20949_20963 + 1);
seq__20946_20960 = G__20965;
chunk__20947_20961 = G__20966;
count__20948_20962 = G__20967;
i__20949_20963 = G__20968;
continue;
}
} else
{var temp__4092__auto___20969 = cljs.core.seq.call(null,seq__20946_20960);if(temp__4092__auto___20969)
{var seq__20946_20970__$1 = temp__4092__auto___20969;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20946_20970__$1))
{var c__10127__auto___20971 = cljs.core.chunk_first.call(null,seq__20946_20970__$1);{
var G__20972 = cljs.core.chunk_rest.call(null,seq__20946_20970__$1);
var G__20973 = c__10127__auto___20971;
var G__20974 = cljs.core.count.call(null,c__10127__auto___20971);
var G__20975 = 0;
seq__20946_20960 = G__20972;
chunk__20947_20961 = G__20973;
count__20948_20962 = G__20974;
i__20949_20963 = G__20975;
continue;
}
} else
{var class_20976 = cljs.core.first.call(null,seq__20946_20970__$1);class_list_20959.add(class_20976);
{
var G__20977 = cljs.core.next.call(null,seq__20946_20970__$1);
var G__20978 = null;
var G__20979 = 0;
var G__20980 = 0;
seq__20946_20960 = G__20977;
chunk__20947_20961 = G__20978;
count__20948_20962 = G__20979;
i__20949_20963 = G__20980;
continue;
}
}
} else
{}
}
break;
}
} else
{var class_name_20981 = elem__$1.className;var seq__20950_20982 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__20951_20983 = null;var count__20952_20984 = 0;var i__20953_20985 = 0;while(true){
if((i__20953_20985 < count__20952_20984))
{var class_20986 = cljs.core._nth.call(null,chunk__20951_20983,i__20953_20985);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_20981,class_20986)))
{} else
{elem__$1.className = (((class_name_20981 === ""))?class_20986:[cljs.core.str(class_name_20981),cljs.core.str(" "),cljs.core.str(class_20986)].join(''));
}
{
var G__20987 = seq__20950_20982;
var G__20988 = chunk__20951_20983;
var G__20989 = count__20952_20984;
var G__20990 = (i__20953_20985 + 1);
seq__20950_20982 = G__20987;
chunk__20951_20983 = G__20988;
count__20952_20984 = G__20989;
i__20953_20985 = G__20990;
continue;
}
} else
{var temp__4092__auto___20991 = cljs.core.seq.call(null,seq__20950_20982);if(temp__4092__auto___20991)
{var seq__20950_20992__$1 = temp__4092__auto___20991;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20950_20992__$1))
{var c__10127__auto___20993 = cljs.core.chunk_first.call(null,seq__20950_20992__$1);{
var G__20994 = cljs.core.chunk_rest.call(null,seq__20950_20992__$1);
var G__20995 = c__10127__auto___20993;
var G__20996 = cljs.core.count.call(null,c__10127__auto___20993);
var G__20997 = 0;
seq__20950_20982 = G__20994;
chunk__20951_20983 = G__20995;
count__20952_20984 = G__20996;
i__20953_20985 = G__20997;
continue;
}
} else
{var class_20998 = cljs.core.first.call(null,seq__20950_20992__$1);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_20981,class_20998)))
{} else
{elem__$1.className = (((class_name_20981 === ""))?class_20998:[cljs.core.str(class_name_20981),cljs.core.str(" "),cljs.core.str(class_20998)].join(''));
}
{
var G__20999 = cljs.core.next.call(null,seq__20950_20992__$1);
var G__21000 = null;
var G__21001 = 0;
var G__21002 = 0;
seq__20950_20982 = G__20999;
chunk__20951_20983 = G__21000;
count__20952_20984 = G__21001;
i__20953_20985 = G__21002;
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
var G__21003__delegate = function (elem,classes,more_classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__20954_21004 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));var chunk__20955_21005 = null;var count__20956_21006 = 0;var i__20957_21007 = 0;while(true){
if((i__20957_21007 < count__20956_21006))
{var c_21008 = cljs.core._nth.call(null,chunk__20955_21005,i__20957_21007);add_class_BANG_.call(null,elem__$1,c_21008);
{
var G__21009 = seq__20954_21004;
var G__21010 = chunk__20955_21005;
var G__21011 = count__20956_21006;
var G__21012 = (i__20957_21007 + 1);
seq__20954_21004 = G__21009;
chunk__20955_21005 = G__21010;
count__20956_21006 = G__21011;
i__20957_21007 = G__21012;
continue;
}
} else
{var temp__4092__auto___21013 = cljs.core.seq.call(null,seq__20954_21004);if(temp__4092__auto___21013)
{var seq__20954_21014__$1 = temp__4092__auto___21013;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20954_21014__$1))
{var c__10127__auto___21015 = cljs.core.chunk_first.call(null,seq__20954_21014__$1);{
var G__21016 = cljs.core.chunk_rest.call(null,seq__20954_21014__$1);
var G__21017 = c__10127__auto___21015;
var G__21018 = cljs.core.count.call(null,c__10127__auto___21015);
var G__21019 = 0;
seq__20954_21004 = G__21016;
chunk__20955_21005 = G__21017;
count__20956_21006 = G__21018;
i__20957_21007 = G__21019;
continue;
}
} else
{var c_21020 = cljs.core.first.call(null,seq__20954_21014__$1);add_class_BANG_.call(null,elem__$1,c_21020);
{
var G__21021 = cljs.core.next.call(null,seq__20954_21014__$1);
var G__21022 = null;
var G__21023 = 0;
var G__21024 = 0;
seq__20954_21004 = G__21021;
chunk__20955_21005 = G__21022;
count__20956_21006 = G__21023;
i__20957_21007 = G__21024;
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
var G__21003 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__21003__delegate.call(this,elem,classes,more_classes);};
G__21003.cljs$lang$maxFixedArity = 2;
G__21003.cljs$lang$applyTo = (function (arglist__21025){
var elem = cljs.core.first(arglist__21025);
arglist__21025 = cljs.core.next(arglist__21025);
var classes = cljs.core.first(arglist__21025);
var more_classes = cljs.core.rest(arglist__21025);
return G__21003__delegate(elem,classes,more_classes);
});
G__21003.cljs$core$IFn$_invoke$arity$variadic = G__21003__delegate;
return G__21003;
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
var G__21026 = (function (){var end = (i + class$.length);return [cljs.core.str((((end < class_len))?[cljs.core.str(class_name.substring(0,i)),cljs.core.str(class_name.substr((end + 1)))].join(''):class_name.substring(0,(i - 1))))].join('');
})();
class_name = G__21026;
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
var remove_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___21035 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___21035))
{var class_list_21036 = temp__4090__auto___21035;class_list_21036.remove(class$__$1);
} else
{var class_name_21037 = elem__$1.className;var new_class_name_21038 = dommy.attrs.remove_class_str.call(null,class_name_21037,class$__$1);if((class_name_21037 === new_class_name_21038))
{} else
{elem__$1.className = new_class_name_21038;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__21039__delegate = function (elem,class$,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__21031 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));var chunk__21032 = null;var count__21033 = 0;var i__21034 = 0;while(true){
if((i__21034 < count__21033))
{var c = cljs.core._nth.call(null,chunk__21032,i__21034);remove_class_BANG_.call(null,elem__$1,c);
{
var G__21040 = seq__21031;
var G__21041 = chunk__21032;
var G__21042 = count__21033;
var G__21043 = (i__21034 + 1);
seq__21031 = G__21040;
chunk__21032 = G__21041;
count__21033 = G__21042;
i__21034 = G__21043;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__21031);if(temp__4092__auto__)
{var seq__21031__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21031__$1))
{var c__10127__auto__ = cljs.core.chunk_first.call(null,seq__21031__$1);{
var G__21044 = cljs.core.chunk_rest.call(null,seq__21031__$1);
var G__21045 = c__10127__auto__;
var G__21046 = cljs.core.count.call(null,c__10127__auto__);
var G__21047 = 0;
seq__21031 = G__21044;
chunk__21032 = G__21045;
count__21033 = G__21046;
i__21034 = G__21047;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__21031__$1);remove_class_BANG_.call(null,elem__$1,c);
{
var G__21048 = cljs.core.next.call(null,seq__21031__$1);
var G__21049 = null;
var G__21050 = 0;
var G__21051 = 0;
seq__21031 = G__21048;
chunk__21032 = G__21049;
count__21033 = G__21050;
i__21034 = G__21051;
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
var G__21039 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__21039__delegate.call(this,elem,class$,classes);};
G__21039.cljs$lang$maxFixedArity = 2;
G__21039.cljs$lang$applyTo = (function (arglist__21052){
var elem = cljs.core.first(arglist__21052);
arglist__21052 = cljs.core.next(arglist__21052);
var class$ = cljs.core.first(arglist__21052);
var classes = cljs.core.rest(arglist__21052);
return G__21039__delegate(elem,class$,classes);
});
G__21039.cljs$core$IFn$_invoke$arity$variadic = G__21039__delegate;
return G__21039;
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
var toggle_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___21053 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___21053))
{var class_list_21054 = temp__4090__auto___21053;class_list_21054.toggle(class$__$1);
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
{return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__21057){var vec__21058 = p__21057;var k = cljs.core.nth.call(null,vec__21058,0,null);var v = cljs.core.nth.call(null,vec__21058,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str(":"),cljs.core.str(cljs.core.name.call(null,v)),cljs.core.str(";")].join('');
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var style = elem__$1.style;var seq__21065_21071 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__21066_21072 = null;var count__21067_21073 = 0;var i__21068_21074 = 0;while(true){
if((i__21068_21074 < count__21067_21073))
{var vec__21069_21075 = cljs.core._nth.call(null,chunk__21066_21072,i__21068_21074);var k_21076 = cljs.core.nth.call(null,vec__21069_21075,0,null);var v_21077 = cljs.core.nth.call(null,vec__21069_21075,1,null);(style[cljs.core.name.call(null,k_21076)] = v_21077);
{
var G__21078 = seq__21065_21071;
var G__21079 = chunk__21066_21072;
var G__21080 = count__21067_21073;
var G__21081 = (i__21068_21074 + 1);
seq__21065_21071 = G__21078;
chunk__21066_21072 = G__21079;
count__21067_21073 = G__21080;
i__21068_21074 = G__21081;
continue;
}
} else
{var temp__4092__auto___21082 = cljs.core.seq.call(null,seq__21065_21071);if(temp__4092__auto___21082)
{var seq__21065_21083__$1 = temp__4092__auto___21082;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21065_21083__$1))
{var c__10127__auto___21084 = cljs.core.chunk_first.call(null,seq__21065_21083__$1);{
var G__21085 = cljs.core.chunk_rest.call(null,seq__21065_21083__$1);
var G__21086 = c__10127__auto___21084;
var G__21087 = cljs.core.count.call(null,c__10127__auto___21084);
var G__21088 = 0;
seq__21065_21071 = G__21085;
chunk__21066_21072 = G__21086;
count__21067_21073 = G__21087;
i__21068_21074 = G__21088;
continue;
}
} else
{var vec__21070_21089 = cljs.core.first.call(null,seq__21065_21083__$1);var k_21090 = cljs.core.nth.call(null,vec__21070_21089,0,null);var v_21091 = cljs.core.nth.call(null,vec__21070_21089,1,null);(style[cljs.core.name.call(null,k_21090)] = v_21091);
{
var G__21092 = cljs.core.next.call(null,seq__21065_21083__$1);
var G__21093 = null;
var G__21094 = 0;
var G__21095 = 0;
seq__21065_21071 = G__21092;
chunk__21066_21072 = G__21093;
count__21067_21073 = G__21094;
i__21068_21074 = G__21095;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__21096){
var elem = cljs.core.first(arglist__21096);
var kvs = cljs.core.rest(arglist__21096);
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__21103_21109 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__21104_21110 = null;var count__21105_21111 = 0;var i__21106_21112 = 0;while(true){
if((i__21106_21112 < count__21105_21111))
{var vec__21107_21113 = cljs.core._nth.call(null,chunk__21104_21110,i__21106_21112);var k_21114 = cljs.core.nth.call(null,vec__21107_21113,0,null);var v_21115 = cljs.core.nth.call(null,vec__21107_21113,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_21114,[cljs.core.str(v_21115),cljs.core.str("px")].join(''));
{
var G__21116 = seq__21103_21109;
var G__21117 = chunk__21104_21110;
var G__21118 = count__21105_21111;
var G__21119 = (i__21106_21112 + 1);
seq__21103_21109 = G__21116;
chunk__21104_21110 = G__21117;
count__21105_21111 = G__21118;
i__21106_21112 = G__21119;
continue;
}
} else
{var temp__4092__auto___21120 = cljs.core.seq.call(null,seq__21103_21109);if(temp__4092__auto___21120)
{var seq__21103_21121__$1 = temp__4092__auto___21120;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21103_21121__$1))
{var c__10127__auto___21122 = cljs.core.chunk_first.call(null,seq__21103_21121__$1);{
var G__21123 = cljs.core.chunk_rest.call(null,seq__21103_21121__$1);
var G__21124 = c__10127__auto___21122;
var G__21125 = cljs.core.count.call(null,c__10127__auto___21122);
var G__21126 = 0;
seq__21103_21109 = G__21123;
chunk__21104_21110 = G__21124;
count__21105_21111 = G__21125;
i__21106_21112 = G__21126;
continue;
}
} else
{var vec__21108_21127 = cljs.core.first.call(null,seq__21103_21121__$1);var k_21128 = cljs.core.nth.call(null,vec__21108_21127,0,null);var v_21129 = cljs.core.nth.call(null,vec__21108_21127,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_21128,[cljs.core.str(v_21129),cljs.core.str("px")].join(''));
{
var G__21130 = cljs.core.next.call(null,seq__21103_21121__$1);
var G__21131 = null;
var G__21132 = 0;
var G__21133 = 0;
seq__21103_21109 = G__21130;
chunk__21104_21110 = G__21131;
count__21105_21111 = G__21132;
i__21106_21112 = G__21133;
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
set_px_BANG_.cljs$lang$applyTo = (function (arglist__21134){
var elem = cljs.core.first(arglist__21134);
var kvs = cljs.core.rest(arglist__21134);
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
{var G__21143 = dommy.template.__GT_node_like.call(null,elem);(G__21143[cljs.core.name.call(null,k)] = v);
return G__21143;
} else
{var G__21144 = dommy.template.__GT_node_like.call(null,elem);G__21144.setAttribute(cljs.core.name.call(null,k),(((k === new cljs.core.Keyword(null,"style","style",1123684643)))?dommy.attrs.style_str.call(null,v):v));
return G__21144;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__21151__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__21145_21152 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,2,kvs)));var chunk__21146_21153 = null;var count__21147_21154 = 0;var i__21148_21155 = 0;while(true){
if((i__21148_21155 < count__21147_21154))
{var vec__21149_21156 = cljs.core._nth.call(null,chunk__21146_21153,i__21148_21155);var k_21157__$1 = cljs.core.nth.call(null,vec__21149_21156,0,null);var v_21158__$1 = cljs.core.nth.call(null,vec__21149_21156,1,null);set_attr_BANG_.call(null,elem__$1,k_21157__$1,v_21158__$1);
{
var G__21159 = seq__21145_21152;
var G__21160 = chunk__21146_21153;
var G__21161 = count__21147_21154;
var G__21162 = (i__21148_21155 + 1);
seq__21145_21152 = G__21159;
chunk__21146_21153 = G__21160;
count__21147_21154 = G__21161;
i__21148_21155 = G__21162;
continue;
}
} else
{var temp__4092__auto___21163 = cljs.core.seq.call(null,seq__21145_21152);if(temp__4092__auto___21163)
{var seq__21145_21164__$1 = temp__4092__auto___21163;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21145_21164__$1))
{var c__10127__auto___21165 = cljs.core.chunk_first.call(null,seq__21145_21164__$1);{
var G__21166 = cljs.core.chunk_rest.call(null,seq__21145_21164__$1);
var G__21167 = c__10127__auto___21165;
var G__21168 = cljs.core.count.call(null,c__10127__auto___21165);
var G__21169 = 0;
seq__21145_21152 = G__21166;
chunk__21146_21153 = G__21167;
count__21147_21154 = G__21168;
i__21148_21155 = G__21169;
continue;
}
} else
{var vec__21150_21170 = cljs.core.first.call(null,seq__21145_21164__$1);var k_21171__$1 = cljs.core.nth.call(null,vec__21150_21170,0,null);var v_21172__$1 = cljs.core.nth.call(null,vec__21150_21170,1,null);set_attr_BANG_.call(null,elem__$1,k_21171__$1,v_21172__$1);
{
var G__21173 = cljs.core.next.call(null,seq__21145_21164__$1);
var G__21174 = null;
var G__21175 = 0;
var G__21176 = 0;
seq__21145_21152 = G__21173;
chunk__21146_21153 = G__21174;
count__21147_21154 = G__21175;
i__21148_21155 = G__21176;
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
var G__21151 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__21151__delegate.call(this,elem,k,v,kvs);};
G__21151.cljs$lang$maxFixedArity = 3;
G__21151.cljs$lang$applyTo = (function (arglist__21177){
var elem = cljs.core.first(arglist__21177);
arglist__21177 = cljs.core.next(arglist__21177);
var k = cljs.core.first(arglist__21177);
arglist__21177 = cljs.core.next(arglist__21177);
var v = cljs.core.first(arglist__21177);
var kvs = cljs.core.rest(arglist__21177);
return G__21151__delegate(elem,k,v,kvs);
});
G__21151.cljs$core$IFn$_invoke$arity$variadic = G__21151__delegate;
return G__21151;
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
var G__21186__delegate = function (elem,k,ks){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__21182_21187 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));var chunk__21183_21188 = null;var count__21184_21189 = 0;var i__21185_21190 = 0;while(true){
if((i__21185_21190 < count__21184_21189))
{var k_21191__$1 = cljs.core._nth.call(null,chunk__21183_21188,i__21185_21190);remove_attr_BANG_.call(null,elem__$1,k_21191__$1);
{
var G__21192 = seq__21182_21187;
var G__21193 = chunk__21183_21188;
var G__21194 = count__21184_21189;
var G__21195 = (i__21185_21190 + 1);
seq__21182_21187 = G__21192;
chunk__21183_21188 = G__21193;
count__21184_21189 = G__21194;
i__21185_21190 = G__21195;
continue;
}
} else
{var temp__4092__auto___21196 = cljs.core.seq.call(null,seq__21182_21187);if(temp__4092__auto___21196)
{var seq__21182_21197__$1 = temp__4092__auto___21196;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21182_21197__$1))
{var c__10127__auto___21198 = cljs.core.chunk_first.call(null,seq__21182_21197__$1);{
var G__21199 = cljs.core.chunk_rest.call(null,seq__21182_21197__$1);
var G__21200 = c__10127__auto___21198;
var G__21201 = cljs.core.count.call(null,c__10127__auto___21198);
var G__21202 = 0;
seq__21182_21187 = G__21199;
chunk__21183_21188 = G__21200;
count__21184_21189 = G__21201;
i__21185_21190 = G__21202;
continue;
}
} else
{var k_21203__$1 = cljs.core.first.call(null,seq__21182_21197__$1);remove_attr_BANG_.call(null,elem__$1,k_21203__$1);
{
var G__21204 = cljs.core.next.call(null,seq__21182_21197__$1);
var G__21205 = null;
var G__21206 = 0;
var G__21207 = 0;
seq__21182_21187 = G__21204;
chunk__21183_21188 = G__21205;
count__21184_21189 = G__21206;
i__21185_21190 = G__21207;
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
var G__21186 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__21186__delegate.call(this,elem,k,ks);};
G__21186.cljs$lang$maxFixedArity = 2;
G__21186.cljs$lang$applyTo = (function (arglist__21208){
var elem = cljs.core.first(arglist__21208);
arglist__21208 = cljs.core.next(arglist__21208);
var k = cljs.core.first(arglist__21208);
var ks = cljs.core.rest(arglist__21208);
return G__21186__delegate(elem,k,ks);
});
G__21186.cljs$core$IFn$_invoke$arity$variadic = G__21186__delegate;
return G__21186;
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
var toggle_BANG___2 = (function (elem,show_QMARK_){var G__21210 = dommy.template.__GT_node_like.call(null,elem);G__21210.style.display = ((show_QMARK_)?"":"none");
return G__21210;
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
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){var G__21212 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__21212,false);
return G__21212;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){var G__21214 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__21214,true);
return G__21214;
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.attrs.bounding_client_rect = (function bounding_client_rect(elem){return cljs.core.js__GT_clj.call(null,(function (){var G__21216 = dommy.template.__GT_node_like.call(null,elem).getBoundingClientRect();(G__21216["constructor"] = Object);
return G__21216;
})(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);
});
dommy.attrs.scroll_into_view = (function scroll_into_view(elem,align_with_top_QMARK_){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var top = new cljs.core.Keyword(null,"top","top",1014019271).cljs$core$IFn$_invoke$arity$1(dommy.attrs.bounding_client_rect.call(null,elem__$1));if((window.innerHeight < (top + elem__$1.offsetHeight)))
{return elem__$1.scrollIntoView(align_with_top_QMARK_);
} else
{return null;
}
});
