// Compiled by ClojureScript 0.0-2138
goog.provide('dommy.template');
goog.require('cljs.core');
goog.require('dommy.attrs');
goog.require('dommy.attrs');
goog.require('clojure.string');
goog.require('clojure.string');
dommy.template._PLUS_svg_ns_PLUS_ = "http://www.w3.org/2000/svg";
dommy.template._PLUS_svg_tags_PLUS_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["svg",null,"line",null], null), null);
dommy.template.PElement = (function (){var obj21218 = {};return obj21218;
})();
dommy.template._elem = (function _elem(this$){if((function (){var and__9373__auto__ = this$;if(and__9373__auto__)
{return this$.dommy$template$PElement$_elem$arity$1;
} else
{return and__9373__auto__;
}
})())
{return this$.dommy$template$PElement$_elem$arity$1(this$);
} else
{var x__10006__auto__ = (((this$ == null))?null:this$);return (function (){var or__9385__auto__ = (dommy.template._elem[goog.typeOf(x__10006__auto__)]);if(or__9385__auto__)
{return or__9385__auto__;
} else
{var or__9385__auto____$1 = (dommy.template._elem["_"]);if(or__9385__auto____$1)
{return or__9385__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"PElement.-elem",this$);
}
}
})().call(null,this$);
}
});
/**
* index of css character (#,.) in base-element. bottleneck
*/
dommy.template.next_css_index = (function next_css_index(s,start_idx){var id_idx = s.indexOf("#",start_idx);var class_idx = s.indexOf(".",start_idx);var idx = Math.min(id_idx,class_idx);if((idx < 0))
{return Math.max(id_idx,class_idx);
} else
{return idx;
}
});
/**
* dom element from css-style keyword like :a.class1 or :span#my-span.class
*/
dommy.template.base_element = (function base_element(node_key){var node_str = cljs.core.name.call(null,node_key);var base_idx = dommy.template.next_css_index.call(null,node_str,0);var tag = (((base_idx > 0))?node_str.substring(0,base_idx):(((base_idx === 0))?"div":((new cljs.core.Keyword(null,"else","else",1017020587))?node_str:null)));var node = (cljs.core.truth_(dommy.template._PLUS_svg_tags_PLUS_.call(null,tag))?document.createElementNS(dommy.template._PLUS_svg_ns_PLUS_,tag):document.createElement(tag));if((base_idx >= 0))
{var str_21221 = node_str.substring(base_idx);while(true){
var next_idx_21222 = dommy.template.next_css_index.call(null,str_21221,1);var frag_21223 = (((next_idx_21222 >= 0))?str_21221.substring(0,next_idx_21222):str_21221);var G__21220_21224 = frag_21223.charAt(0);if(cljs.core._EQ_.call(null,"#",G__21220_21224))
{node.setAttribute("id",frag_21223.substring(1));
} else
{if(cljs.core._EQ_.call(null,".",G__21220_21224))
{dommy.attrs.add_class_BANG_.call(null,node,frag_21223.substring(1));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(frag_21223.charAt(0))].join('')));
} else
{}
}
}
if((next_idx_21222 >= 0))
{{
var G__21225 = str_21221.substring(next_idx_21222);
str_21221 = G__21225;
continue;
}
} else
{}
break;
}
} else
{}
return node;
});
dommy.template.throw_unable_to_make_node = (function throw_unable_to_make_node(node_data){throw [cljs.core.str("Don't know how to make node from: "),cljs.core.str(cljs.core.pr_str.call(null,node_data))].join('');
});
/**
* take data and return a document fragment
*/
dommy.template.__GT_document_fragment = (function() {
var __GT_document_fragment = null;
var __GT_document_fragment__1 = (function (data){return __GT_document_fragment.call(null,document.createDocumentFragment(),data);
});
var __GT_document_fragment__2 = (function (result_frag,data){if((function (){var G__21231 = data;if(G__21231)
{var bit__10029__auto__ = null;if(cljs.core.truth_((function (){var or__9385__auto__ = bit__10029__auto__;if(cljs.core.truth_(or__9385__auto__))
{return or__9385__auto__;
} else
{return G__21231.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__21231.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__21231);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__21231);
}
})())
{result_frag.appendChild(dommy.template._elem.call(null,data));
return result_frag;
} else
{if(cljs.core.seq_QMARK_.call(null,data))
{var seq__21232_21236 = cljs.core.seq.call(null,data);var chunk__21233_21237 = null;var count__21234_21238 = 0;var i__21235_21239 = 0;while(true){
if((i__21235_21239 < count__21234_21238))
{var child_21240 = cljs.core._nth.call(null,chunk__21233_21237,i__21235_21239);__GT_document_fragment.call(null,result_frag,child_21240);
{
var G__21241 = seq__21232_21236;
var G__21242 = chunk__21233_21237;
var G__21243 = count__21234_21238;
var G__21244 = (i__21235_21239 + 1);
seq__21232_21236 = G__21241;
chunk__21233_21237 = G__21242;
count__21234_21238 = G__21243;
i__21235_21239 = G__21244;
continue;
}
} else
{var temp__4092__auto___21245 = cljs.core.seq.call(null,seq__21232_21236);if(temp__4092__auto___21245)
{var seq__21232_21246__$1 = temp__4092__auto___21245;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21232_21246__$1))
{var c__10127__auto___21247 = cljs.core.chunk_first.call(null,seq__21232_21246__$1);{
var G__21248 = cljs.core.chunk_rest.call(null,seq__21232_21246__$1);
var G__21249 = c__10127__auto___21247;
var G__21250 = cljs.core.count.call(null,c__10127__auto___21247);
var G__21251 = 0;
seq__21232_21236 = G__21248;
chunk__21233_21237 = G__21249;
count__21234_21238 = G__21250;
i__21235_21239 = G__21251;
continue;
}
} else
{var child_21252 = cljs.core.first.call(null,seq__21232_21246__$1);__GT_document_fragment.call(null,result_frag,child_21252);
{
var G__21253 = cljs.core.next.call(null,seq__21232_21246__$1);
var G__21254 = null;
var G__21255 = 0;
var G__21256 = 0;
seq__21232_21236 = G__21253;
chunk__21233_21237 = G__21254;
count__21234_21238 = G__21255;
i__21235_21239 = G__21256;
continue;
}
}
} else
{}
}
break;
}
return result_frag;
} else
{if((data == null))
{return result_frag;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return dommy.template.throw_unable_to_make_node.call(null,data);
} else
{return null;
}
}
}
}
});
__GT_document_fragment = function(result_frag,data){
switch(arguments.length){
case 1:
return __GT_document_fragment__1.call(this,result_frag);
case 2:
return __GT_document_fragment__2.call(this,result_frag,data);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_document_fragment.cljs$core$IFn$_invoke$arity$1 = __GT_document_fragment__1;
__GT_document_fragment.cljs$core$IFn$_invoke$arity$2 = __GT_document_fragment__2;
return __GT_document_fragment;
})()
;
/**
* take data and return DOM node if it satisfies PElement and tries to
* make a document fragment otherwise
*/
dommy.template.__GT_node_like = (function __GT_node_like(data){if((function (){var G__21258 = data;if(G__21258)
{var bit__10029__auto__ = null;if(cljs.core.truth_((function (){var or__9385__auto__ = bit__10029__auto__;if(cljs.core.truth_(or__9385__auto__))
{return or__9385__auto__;
} else
{return G__21258.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__21258.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__21258);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__21258);
}
})())
{return dommy.template._elem.call(null,data);
} else
{return dommy.template.__GT_document_fragment.call(null,data);
}
});
/**
* element with either attrs or nested children [:div [:span "Hello"]]
*/
dommy.template.compound_element = (function compound_element(p__21259){var vec__21279 = p__21259;var tag_name = cljs.core.nth.call(null,vec__21279,0,null);var maybe_attrs = cljs.core.nth.call(null,vec__21279,1,null);var children = cljs.core.nthnext.call(null,vec__21279,2);var n = dommy.template.base_element.call(null,tag_name);var attrs = (((cljs.core.map_QMARK_.call(null,maybe_attrs)) && (!((function (){var G__21281 = maybe_attrs;if(G__21281)
{var bit__10029__auto__ = null;if(cljs.core.truth_((function (){var or__9385__auto__ = bit__10029__auto__;if(cljs.core.truth_(or__9385__auto__))
{return or__9385__auto__;
} else
{return G__21281.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__21281.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__21281);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__21281);
}
})())))?maybe_attrs:null);var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons.call(null,maybe_attrs,children));var seq__21282_21298 = cljs.core.seq.call(null,attrs);var chunk__21283_21299 = null;var count__21284_21300 = 0;var i__21285_21301 = 0;while(true){
if((i__21285_21301 < count__21284_21300))
{var vec__21286_21302 = cljs.core._nth.call(null,chunk__21283_21299,i__21285_21301);var k_21303 = cljs.core.nth.call(null,vec__21286_21302,0,null);var v_21304 = cljs.core.nth.call(null,vec__21286_21302,1,null);var G__21287_21305 = k_21303;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__21287_21305))
{var seq__21288_21306 = cljs.core.seq.call(null,v_21304);var chunk__21289_21307 = null;var count__21290_21308 = 0;var i__21291_21309 = 0;while(true){
if((i__21291_21309 < count__21290_21308))
{var c_21310 = cljs.core._nth.call(null,chunk__21289_21307,i__21291_21309);dommy.attrs.add_class_BANG_.call(null,n,c_21310);
{
var G__21311 = seq__21288_21306;
var G__21312 = chunk__21289_21307;
var G__21313 = count__21290_21308;
var G__21314 = (i__21291_21309 + 1);
seq__21288_21306 = G__21311;
chunk__21289_21307 = G__21312;
count__21290_21308 = G__21313;
i__21291_21309 = G__21314;
continue;
}
} else
{var temp__4092__auto___21315 = cljs.core.seq.call(null,seq__21288_21306);if(temp__4092__auto___21315)
{var seq__21288_21316__$1 = temp__4092__auto___21315;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21288_21316__$1))
{var c__10127__auto___21317 = cljs.core.chunk_first.call(null,seq__21288_21316__$1);{
var G__21318 = cljs.core.chunk_rest.call(null,seq__21288_21316__$1);
var G__21319 = c__10127__auto___21317;
var G__21320 = cljs.core.count.call(null,c__10127__auto___21317);
var G__21321 = 0;
seq__21288_21306 = G__21318;
chunk__21289_21307 = G__21319;
count__21290_21308 = G__21320;
i__21291_21309 = G__21321;
continue;
}
} else
{var c_21322 = cljs.core.first.call(null,seq__21288_21316__$1);dommy.attrs.add_class_BANG_.call(null,n,c_21322);
{
var G__21323 = cljs.core.next.call(null,seq__21288_21316__$1);
var G__21324 = null;
var G__21325 = 0;
var G__21326 = 0;
seq__21288_21306 = G__21323;
chunk__21289_21307 = G__21324;
count__21290_21308 = G__21325;
i__21291_21309 = G__21326;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__21287_21305))
{dommy.attrs.add_class_BANG_.call(null,n,v_21304);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_21303,v_21304);
} else
{}
}
}
{
var G__21327 = seq__21282_21298;
var G__21328 = chunk__21283_21299;
var G__21329 = count__21284_21300;
var G__21330 = (i__21285_21301 + 1);
seq__21282_21298 = G__21327;
chunk__21283_21299 = G__21328;
count__21284_21300 = G__21329;
i__21285_21301 = G__21330;
continue;
}
} else
{var temp__4092__auto___21331 = cljs.core.seq.call(null,seq__21282_21298);if(temp__4092__auto___21331)
{var seq__21282_21332__$1 = temp__4092__auto___21331;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21282_21332__$1))
{var c__10127__auto___21333 = cljs.core.chunk_first.call(null,seq__21282_21332__$1);{
var G__21334 = cljs.core.chunk_rest.call(null,seq__21282_21332__$1);
var G__21335 = c__10127__auto___21333;
var G__21336 = cljs.core.count.call(null,c__10127__auto___21333);
var G__21337 = 0;
seq__21282_21298 = G__21334;
chunk__21283_21299 = G__21335;
count__21284_21300 = G__21336;
i__21285_21301 = G__21337;
continue;
}
} else
{var vec__21292_21338 = cljs.core.first.call(null,seq__21282_21332__$1);var k_21339 = cljs.core.nth.call(null,vec__21292_21338,0,null);var v_21340 = cljs.core.nth.call(null,vec__21292_21338,1,null);var G__21293_21341 = k_21339;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__21293_21341))
{var seq__21294_21342 = cljs.core.seq.call(null,v_21340);var chunk__21295_21343 = null;var count__21296_21344 = 0;var i__21297_21345 = 0;while(true){
if((i__21297_21345 < count__21296_21344))
{var c_21346 = cljs.core._nth.call(null,chunk__21295_21343,i__21297_21345);dommy.attrs.add_class_BANG_.call(null,n,c_21346);
{
var G__21347 = seq__21294_21342;
var G__21348 = chunk__21295_21343;
var G__21349 = count__21296_21344;
var G__21350 = (i__21297_21345 + 1);
seq__21294_21342 = G__21347;
chunk__21295_21343 = G__21348;
count__21296_21344 = G__21349;
i__21297_21345 = G__21350;
continue;
}
} else
{var temp__4092__auto___21351__$1 = cljs.core.seq.call(null,seq__21294_21342);if(temp__4092__auto___21351__$1)
{var seq__21294_21352__$1 = temp__4092__auto___21351__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21294_21352__$1))
{var c__10127__auto___21353 = cljs.core.chunk_first.call(null,seq__21294_21352__$1);{
var G__21354 = cljs.core.chunk_rest.call(null,seq__21294_21352__$1);
var G__21355 = c__10127__auto___21353;
var G__21356 = cljs.core.count.call(null,c__10127__auto___21353);
var G__21357 = 0;
seq__21294_21342 = G__21354;
chunk__21295_21343 = G__21355;
count__21296_21344 = G__21356;
i__21297_21345 = G__21357;
continue;
}
} else
{var c_21358 = cljs.core.first.call(null,seq__21294_21352__$1);dommy.attrs.add_class_BANG_.call(null,n,c_21358);
{
var G__21359 = cljs.core.next.call(null,seq__21294_21352__$1);
var G__21360 = null;
var G__21361 = 0;
var G__21362 = 0;
seq__21294_21342 = G__21359;
chunk__21295_21343 = G__21360;
count__21296_21344 = G__21361;
i__21297_21345 = G__21362;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__21293_21341))
{dommy.attrs.add_class_BANG_.call(null,n,v_21340);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_21339,v_21340);
} else
{}
}
}
{
var G__21363 = cljs.core.next.call(null,seq__21282_21332__$1);
var G__21364 = null;
var G__21365 = 0;
var G__21366 = 0;
seq__21282_21298 = G__21363;
chunk__21283_21299 = G__21364;
count__21284_21300 = G__21365;
i__21285_21301 = G__21366;
continue;
}
}
} else
{}
}
break;
}
n.appendChild(dommy.template.__GT_node_like.call(null,children__$1));
return n;
});
(dommy.template.PElement["string"] = true);
(dommy.template._elem["string"] = (function (this$){if((this$ instanceof cljs.core.Keyword))
{return dommy.template.base_element.call(null,this$);
} else
{return document.createTextNode([cljs.core.str(this$)].join(''));
}
}));
(dommy.template.PElement["number"] = true);
(dommy.template._elem["number"] = (function (this$){return document.createTextNode([cljs.core.str(this$)].join(''));
}));
cljs.core.PersistentVector.prototype.dommy$template$PElement$ = true;
cljs.core.PersistentVector.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return dommy.template.compound_element.call(null,this$__$1);
});
SVGElement.prototype.dommy$template$PElement$ = true;
SVGElement.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
Document.prototype.dommy$template$PElement$ = true;
Document.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
Text.prototype.dommy$template$PElement$ = true;
Text.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
DocumentFragment.prototype.dommy$template$PElement$ = true;
DocumentFragment.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
HTMLElement.prototype.dommy$template$PElement$ = true;
HTMLElement.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
try{Window.prototype.dommy$template$PElement$ = true;
Window.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
}catch (e21367){if((e21367 instanceof ReferenceError))
{var __21368 = e21367;console.log("PElement: js/Window not defined by browser, skipping it... (running on phantomjs?)");
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e21367;
} else
{}
}
}dommy.template.node = (function node(data){if((function (){var G__21370 = data;if(G__21370)
{var bit__10029__auto__ = null;if(cljs.core.truth_((function (){var or__9385__auto__ = bit__10029__auto__;if(cljs.core.truth_(or__9385__auto__))
{return or__9385__auto__;
} else
{return G__21370.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__21370.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__21370);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__21370);
}
})())
{return dommy.template._elem.call(null,data);
} else
{return dommy.template.throw_unable_to_make_node.call(null,data);
}
});
dommy.template.html__GT_nodes = (function html__GT_nodes(html){var parent = document.createElement("div");parent.insertAdjacentHTML("beforeend",html);
return cljs.core.seq.call(null,Array.prototype.slice.call(parent.childNodes));
});
