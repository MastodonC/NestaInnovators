// Compiled by ClojureScript 0.0-2138
goog.provide('webapp.core');
goog.require('cljs.core');
goog.require('ajax.core');
goog.require('cljs.core.async');
goog.require('ajax.core');
goog.require('dommy.core');
goog.require('dommy.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
webapp.core.data = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"individuals","individuals",3873809516),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"uri","uri",1014020318),"/individuals"], null),new cljs.core.Keyword(null,"location","location",2914947879),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"uri","uri",1014020318),"/by-location"], null),new cljs.core.Keyword(null,"tech","tech",1017460232),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"uri","uri",1014020318),"/by-tech"], null),new cljs.core.Keyword(null,"company","company",1964388335),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"uri","uri",1014020318),"/by-company"], null)], null);
webapp.core.barcharts = (function barcharts(p__14852){var map__14856 = p__14852;var map__14856__$1 = ((cljs.core.seq_QMARK_.call(null,map__14856))?cljs.core.apply.call(null,cljs.core.hash_map,map__14856):map__14856);var data = cljs.core.get.call(null,map__14856__$1,new cljs.core.Keyword(null,"data","data",1016980252));var type = cljs.core.get.call(null,map__14856__$1,new cljs.core.Keyword(null,"type","type",1017479852));dommy.core.append_BANG_.call(null,document.querySelector(dommy.core.selector.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,[cljs.core.str("#"),cljs.core.str(type)].join(''))], null))),(function (){var dom14857 = document.createElement("h3");dom14857.appendChild(dommy.template.__GT_node_like.call(null,[cljs.core.str("The top 20 "),cljs.core.str(type)].join('')));
return dom14857;
})());
var G__14858 = type;if(cljs.core._EQ_.call(null,"companies",G__14858))
{return chart(document.querySelector(dommy.core.selector.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,[cljs.core.str("#"),cljs.core.str(type)].join(''))], null))),cljs.core.clj__GT_js.call(null,data));
} else
{if(cljs.core._EQ_.call(null,"location",G__14858))
{return chart(document.querySelector(dommy.core.selector.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,[cljs.core.str("#"),cljs.core.str(type)].join(''))], null))),cljs.core.clj__GT_js.call(null,data));
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"or","or",-1640527972,null),G__14858))
{return chart(document.querySelector(dommy.core.selector.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,[cljs.core.str("#"),cljs.core.str(type)].join(''))], null))),cljs.core.clj__GT_js.call(null,data));
} else
{if(cljs.core._EQ_.call(null,"individuals",G__14858))
{return individuals(document.querySelector(dommy.core.selector.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,[cljs.core.str("#"),cljs.core.str(type)].join(''))], null))),cljs.core.clj__GT_js.call(null,data));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return "technology";
} else
{return null;
}
}
}
}
}
});
webapp.core.watch_events_BANG_ = (function watch_events_BANG_(chan){var c__11500__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__11501__auto__ = (function (){var switch__11485__auto__ = (function (state_14900){var state_val_14901 = (state_14900[1]);if((state_val_14901 === 7))
{var inst_14895 = (state_14900[2]);var state_14900__$1 = (function (){var statearr_14902 = state_14900;(statearr_14902[7] = inst_14895);
return statearr_14902;
})();var statearr_14903_14917 = state_14900__$1;(statearr_14903_14917[2] = null);
(statearr_14903_14917[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14901 === 6))
{var state_14900__$1 = state_14900;var statearr_14904_14918 = state_14900__$1;(statearr_14904_14918[2] = null);
(statearr_14904_14918[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14901 === 5))
{var inst_14890 = (state_14900[8]);var inst_14892 = webapp.core.barcharts.call(null,inst_14890);var state_14900__$1 = state_14900;var statearr_14905_14919 = state_14900__$1;(statearr_14905_14919[2] = inst_14892);
(statearr_14905_14919[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14901 === 4))
{var inst_14890 = (state_14900[8]);var inst_14890__$1 = (state_14900[2]);var state_14900__$1 = (function (){var statearr_14906 = state_14900;(statearr_14906[8] = inst_14890__$1);
return statearr_14906;
})();if(cljs.core.truth_(inst_14890__$1))
{var statearr_14907_14920 = state_14900__$1;(statearr_14907_14920[1] = 5);
} else
{var statearr_14908_14921 = state_14900__$1;(statearr_14908_14921[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14901 === 3))
{var inst_14898 = (state_14900[2]);var state_14900__$1 = state_14900;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14900__$1,inst_14898);
} else
{if((state_val_14901 === 2))
{var state_14900__$1 = state_14900;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14900__$1,4,chan);
} else
{if((state_val_14901 === 1))
{var state_14900__$1 = state_14900;var statearr_14909_14922 = state_14900__$1;(statearr_14909_14922[2] = null);
(statearr_14909_14922[1] = 2);
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
var state_machine__11486__auto____0 = (function (){var statearr_14913 = [null,null,null,null,null,null,null,null,null];(statearr_14913[0] = state_machine__11486__auto__);
(statearr_14913[1] = 1);
return statearr_14913;
});
var state_machine__11486__auto____1 = (function (state_14900){while(true){
var ret_value__11487__auto__ = (function (){try{while(true){
var result__11488__auto__ = switch__11485__auto__.call(null,state_14900);if(cljs.core.keyword_identical_QMARK_.call(null,result__11488__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__11488__auto__;
}
break;
}
}catch (e14914){if((e14914 instanceof Object))
{var ex__11489__auto__ = e14914;var statearr_14915_14923 = state_14900;(statearr_14915_14923[5] = ex__11489__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14900);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14914;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11487__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14924 = state_14900;
state_14900 = G__14924;
continue;
}
} else
{return ret_value__11487__auto__;
}
break;
}
});
state_machine__11486__auto__ = function(state_14900){
switch(arguments.length){
case 0:
return state_machine__11486__auto____0.call(this);
case 1:
return state_machine__11486__auto____1.call(this,state_14900);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11486__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11486__auto____0;
state_machine__11486__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11486__auto____1;
return state_machine__11486__auto__;
})()
;})(switch__11485__auto__))
})();var state__11502__auto__ = (function (){var statearr_14916 = f__11501__auto__.call(null);(statearr_14916[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11500__auto__);
return statearr_14916;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11502__auto__);
}));
return c__11500__auto__;
});
window.onload = (function (){var c = (function (){var G__14925 = cljs.core.async.chan.call(null);webapp.core.watch_events_BANG_.call(null,G__14925);
return G__14925;
})();ajax.core.GET.call(null,"/individuals",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",1706707644),(function (response){return webapp.core.barcharts.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"individuals",new cljs.core.Keyword(null,"data","data",1016980252),response], null));
}),new cljs.core.Keyword(null,"format","format",4040092521),new cljs.core.Keyword(null,"json","json",1017176154)], null));
ajax.core.GET.call(null,"/by-company",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",1706707644),(function (response){return webapp.core.barcharts.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"companies",new cljs.core.Keyword(null,"data","data",1016980252),response], null));
}),new cljs.core.Keyword(null,"format","format",4040092521),new cljs.core.Keyword(null,"json","json",1017176154)], null));
ajax.core.GET.call(null,"/by-location",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",1706707644),(function (response){return webapp.core.barcharts.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"location",new cljs.core.Keyword(null,"data","data",1016980252),response], null));
}),new cljs.core.Keyword(null,"format","format",4040092521),new cljs.core.Keyword(null,"json","json",1017176154)], null));
return ajax.core.GET.call(null,"/by-tech",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",1706707644),(function (response){return webapp.core.barcharts.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"technology",new cljs.core.Keyword(null,"data","data",1016980252),response], null));
}),new cljs.core.Keyword(null,"format","format",4040092521),new cljs.core.Keyword(null,"json","json",1017176154)], null));
});
