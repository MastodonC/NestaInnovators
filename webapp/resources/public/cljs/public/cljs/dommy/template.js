// Compiled by ClojureScript 0.0-2138
goog.provide('dommy.template');
goog.require('cljs.core');
goog.require('dommy.attrs');
goog.require('dommy.attrs');
goog.require('clojure.string');
goog.require('clojure.string');
dommy.template._PLUS_svg_ns_PLUS_ = "http://www.w3.org/2000/svg";
dommy.template._PLUS_svg_tags_PLUS_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["svg",null,"line",null], null), null);
dommy.template.PElement = (function (){var obj18863 = {};return obj18863;
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
{var str_18866 = node_str.substring(base_idx);while(true){
var next_idx_18867 = dommy.template.next_css_index.call(null,str_18866,1);var frag_18868 = (((next_idx_18867 >= 0))?str_18866.substring(0,next_idx_18867):str_18866);var G__18865_18869 = frag_18868.charAt(0);if(cljs.core._EQ_.call(null,"#",G__18865_18869))
{node.setAttribute("id",frag_18868.substring(1));
} else
{if(cljs.core._EQ_.call(null,".",G__18865_18869))
{dommy.attrs.add_class_BANG_.call(null,node,frag_18868.substring(1));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(frag_18868.charAt(0))].join('')));
} else
{}
}
}
if((next_idx_18867 >= 0))
{{
var G__18870 = str_18866.substring(next_idx_18867);
str_18866 = G__18870;
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
var __GT_document_fragment__2 = (function (result_frag,data){if((function (){var G__18876 = data;if(G__18876)
{var bit__10029__auto__ = null;if(cljs.core.truth_((function (){var or__9385__auto__ = bit__10029__auto__;if(cljs.core.truth_(or__9385__auto__))
{return or__9385__auto__;
} else
{return G__18876.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__18876.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__18876);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__18876);
}
})())
{result_frag.appendChild(dommy.template._elem.call(null,data));
return result_frag;
} else
{if(cljs.core.seq_QMARK_.call(null,data))
{var seq__18877_18881 = cljs.core.seq.call(null,data);var chunk__18878_18882 = null;var count__18879_18883 = 0;var i__18880_18884 = 0;while(true){
if((i__18880_18884 < count__18879_18883))
{var child_18885 = cljs.core._nth.call(null,chunk__18878_18882,i__18880_18884);__GT_document_fragment.call(null,result_frag,child_18885);
{
var G__18886 = seq__18877_18881;
var G__18887 = chunk__18878_18882;
var G__18888 = count__18879_18883;
var G__18889 = (i__18880_18884 + 1);
seq__18877_18881 = G__18886;
chunk__18878_18882 = G__18887;
count__18879_18883 = G__18888;
i__18880_18884 = G__18889;
continue;
}
} else
{var temp__4092__auto___18890 = cljs.core.seq.call(null,seq__18877_18881);if(temp__4092__auto___18890)
{var seq__18877_18891__$1 = temp__4092__auto___18890;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18877_18891__$1))
{var c__10127__auto___18892 = cljs.core.chunk_first.call(null,seq__18877_18891__$1);{
var G__18893 = cljs.core.chunk_rest.call(null,seq__18877_18891__$1);
var G__18894 = c__10127__auto___18892;
var G__18895 = cljs.core.count.call(null,c__10127__auto___18892);
var G__18896 = 0;
seq__18877_18881 = G__18893;
chunk__18878_18882 = G__18894;
count__18879_18883 = G__18895;
i__18880_18884 = G__18896;
continue;
}
} else
{var child_18897 = cljs.core.first.call(null,seq__18877_18891__$1);__GT_document_fragment.call(null,result_frag,child_18897);
{
var G__18898 = cljs.core.next.call(null,seq__18877_18891__$1);
var G__18899 = null;
var G__18900 = 0;
var G__18901 = 0;
seq__18877_18881 = G__18898;
chunk__18878_18882 = G__18899;
count__18879_18883 = G__18900;
i__18880_18884 = G__18901;
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
dommy.template.__GT_node_like = (function __GT_node_like(data){if((function (){var G__18903 = data;if(G__18903)
{var bit__10029__auto__ = null;if(cljs.core.truth_((function (){var or__9385__auto__ = bit__10029__auto__;if(cljs.core.truth_(or__9385__auto__))
{return or__9385__auto__;
} else
{return G__18903.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__18903.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__18903);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__18903);
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
dommy.template.compound_element = (function compound_element(p__18904){var vec__18924 = p__18904;var tag_name = cljs.core.nth.call(null,vec__18924,0,null);var maybe_attrs = cljs.core.nth.call(null,vec__18924,1,null);var children = cljs.core.nthnext.call(null,vec__18924,2);var n = dommy.template.base_element.call(null,tag_name);var attrs = (((cljs.core.map_QMARK_.call(null,maybe_attrs)) && (!((function (){var G__18926 = maybe_attrs;if(G__18926)
{var bit__10029__auto__ = null;if(cljs.core.truth_((function (){var or__9385__auto__ = bit__10029__auto__;if(cljs.core.truth_(or__9385__auto__))
{return or__9385__auto__;
} else
{return G__18926.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__18926.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__18926);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__18926);
}
})())))?maybe_attrs:null);var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons.call(null,maybe_attrs,children));var seq__18927_18943 = cljs.core.seq.call(null,attrs);var chunk__18928_18944 = null;var count__18929_18945 = 0;var i__18930_18946 = 0;while(true){
if((i__18930_18946 < count__18929_18945))
{var vec__18931_18947 = cljs.core._nth.call(null,chunk__18928_18944,i__18930_18946);var k_18948 = cljs.core.nth.call(null,vec__18931_18947,0,null);var v_18949 = cljs.core.nth.call(null,vec__18931_18947,1,null);var G__18932_18950 = k_18948;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__18932_18950))
{var seq__18933_18951 = cljs.core.seq.call(null,v_18949);var chunk__18934_18952 = null;var count__18935_18953 = 0;var i__18936_18954 = 0;while(true){
if((i__18936_18954 < count__18935_18953))
{var c_18955 = cljs.core._nth.call(null,chunk__18934_18952,i__18936_18954);dommy.attrs.add_class_BANG_.call(null,n,c_18955);
{
var G__18956 = seq__18933_18951;
var G__18957 = chunk__18934_18952;
var G__18958 = count__18935_18953;
var G__18959 = (i__18936_18954 + 1);
seq__18933_18951 = G__18956;
chunk__18934_18952 = G__18957;
count__18935_18953 = G__18958;
i__18936_18954 = G__18959;
continue;
}
} else
{var temp__4092__auto___18960 = cljs.core.seq.call(null,seq__18933_18951);if(temp__4092__auto___18960)
{var seq__18933_18961__$1 = temp__4092__auto___18960;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18933_18961__$1))
{var c__10127__auto___18962 = cljs.core.chunk_first.call(null,seq__18933_18961__$1);{
var G__18963 = cljs.core.chunk_rest.call(null,seq__18933_18961__$1);
var G__18964 = c__10127__auto___18962;
var G__18965 = cljs.core.count.call(null,c__10127__auto___18962);
var G__18966 = 0;
seq__18933_18951 = G__18963;
chunk__18934_18952 = G__18964;
count__18935_18953 = G__18965;
i__18936_18954 = G__18966;
continue;
}
} else
{var c_18967 = cljs.core.first.call(null,seq__18933_18961__$1);dommy.attrs.add_class_BANG_.call(null,n,c_18967);
{
var G__18968 = cljs.core.next.call(null,seq__18933_18961__$1);
var G__18969 = null;
var G__18970 = 0;
var G__18971 = 0;
seq__18933_18951 = G__18968;
chunk__18934_18952 = G__18969;
count__18935_18953 = G__18970;
i__18936_18954 = G__18971;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__18932_18950))
{dommy.attrs.add_class_BANG_.call(null,n,v_18949);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_18948,v_18949);
} else
{}
}
}
{
var G__18972 = seq__18927_18943;
var G__18973 = chunk__18928_18944;
var G__18974 = count__18929_18945;
var G__18975 = (i__18930_18946 + 1);
seq__18927_18943 = G__18972;
chunk__18928_18944 = G__18973;
count__18929_18945 = G__18974;
i__18930_18946 = G__18975;
continue;
}
} else
{var temp__4092__auto___18976 = cljs.core.seq.call(null,seq__18927_18943);if(temp__4092__auto___18976)
{var seq__18927_18977__$1 = temp__4092__auto___18976;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18927_18977__$1))
{var c__10127__auto___18978 = cljs.core.chunk_first.call(null,seq__18927_18977__$1);{
var G__18979 = cljs.core.chunk_rest.call(null,seq__18927_18977__$1);
var G__18980 = c__10127__auto___18978;
var G__18981 = cljs.core.count.call(null,c__10127__auto___18978);
var G__18982 = 0;
seq__18927_18943 = G__18979;
chunk__18928_18944 = G__18980;
count__18929_18945 = G__18981;
i__18930_18946 = G__18982;
continue;
}
} else
{var vec__18937_18983 = cljs.core.first.call(null,seq__18927_18977__$1);var k_18984 = cljs.core.nth.call(null,vec__18937_18983,0,null);var v_18985 = cljs.core.nth.call(null,vec__18937_18983,1,null);var G__18938_18986 = k_18984;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__18938_18986))
{var seq__18939_18987 = cljs.core.seq.call(null,v_18985);var chunk__18940_18988 = null;var count__18941_18989 = 0;var i__18942_18990 = 0;while(true){
if((i__18942_18990 < count__18941_18989))
{var c_18991 = cljs.core._nth.call(null,chunk__18940_18988,i__18942_18990);dommy.attrs.add_class_BANG_.call(null,n,c_18991);
{
var G__18992 = seq__18939_18987;
var G__18993 = chunk__18940_18988;
var G__18994 = count__18941_18989;
var G__18995 = (i__18942_18990 + 1);
seq__18939_18987 = G__18992;
chunk__18940_18988 = G__18993;
count__18941_18989 = G__18994;
i__18942_18990 = G__18995;
continue;
}
} else
{var temp__4092__auto___18996__$1 = cljs.core.seq.call(null,seq__18939_18987);if(temp__4092__auto___18996__$1)
{var seq__18939_18997__$1 = temp__4092__auto___18996__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18939_18997__$1))
{var c__10127__auto___18998 = cljs.core.chunk_first.call(null,seq__18939_18997__$1);{
var G__18999 = cljs.core.chunk_rest.call(null,seq__18939_18997__$1);
var G__19000 = c__10127__auto___18998;
var G__19001 = cljs.core.count.call(null,c__10127__auto___18998);
var G__19002 = 0;
seq__18939_18987 = G__18999;
chunk__18940_18988 = G__19000;
count__18941_18989 = G__19001;
i__18942_18990 = G__19002;
continue;
}
} else
{var c_19003 = cljs.core.first.call(null,seq__18939_18997__$1);dommy.attrs.add_class_BANG_.call(null,n,c_19003);
{
var G__19004 = cljs.core.next.call(null,seq__18939_18997__$1);
var G__19005 = null;
var G__19006 = 0;
var G__19007 = 0;
seq__18939_18987 = G__19004;
chunk__18940_18988 = G__19005;
count__18941_18989 = G__19006;
i__18942_18990 = G__19007;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__18938_18986))
{dommy.attrs.add_class_BANG_.call(null,n,v_18985);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_18984,v_18985);
} else
{}
}
}
{
var G__19008 = cljs.core.next.call(null,seq__18927_18977__$1);
var G__19009 = null;
var G__19010 = 0;
var G__19011 = 0;
seq__18927_18943 = G__19008;
chunk__18928_18944 = G__19009;
count__18929_18945 = G__19010;
i__18930_18946 = G__19011;
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
}catch (e19012){if((e19012 instanceof ReferenceError))
{var __19013 = e19012;console.log("PElement: js/Window not defined by browser, skipping it... (running on phantomjs?)");
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e19012;
} else
{}
}
}dommy.template.node = (function node(data){if((function (){var G__19015 = data;if(G__19015)
{var bit__10029__auto__ = null;if(cljs.core.truth_((function (){var or__9385__auto__ = bit__10029__auto__;if(cljs.core.truth_(or__9385__auto__))
{return or__9385__auto__;
} else
{return G__19015.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__19015.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__19015);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__19015);
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
