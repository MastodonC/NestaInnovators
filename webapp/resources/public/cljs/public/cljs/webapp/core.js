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
webapp.core.barcharts = (function barcharts(p__14926){var map__14930 = p__14926;var map__14930__$1 = ((cljs.core.seq_QMARK_.call(null,map__14930))?cljs.core.apply.call(null,cljs.core.hash_map,map__14930):map__14930);var data = cljs.core.get.call(null,map__14930__$1,new cljs.core.Keyword(null,"data","data",1016980252));var type = cljs.core.get.call(null,map__14930__$1,new cljs.core.Keyword(null,"type","type",1017479852));dommy.core.append_BANG_.call(null,document.querySelector(dommy.core.selector.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,[cljs.core.str("#"),cljs.core.str(type)].join(''))], null))),(function (){var dom14931 = document.createElement("h3");dom14931.appendChild(dommy.template.__GT_node_like.call(null,[cljs.core.str("The top 20 "),cljs.core.str(type)].join('')));
return dom14931;
})());
var G__14932 = type;if(cljs.core._EQ_.call(null,"companies",G__14932))
{return chart(document.querySelector(dommy.core.selector.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,[cljs.core.str("#"),cljs.core.str(type)].join(''))], null))),cljs.core.clj__GT_js.call(null,data));
} else
{if(cljs.core._EQ_.call(null,"location",G__14932))
{return chart(document.querySelector(dommy.core.selector.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,[cljs.core.str("#"),cljs.core.str(type)].join(''))], null))),cljs.core.clj__GT_js.call(null,data));
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"or","or",-1640527972,null),G__14932))
{return chart(document.querySelector(dommy.core.selector.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,[cljs.core.str("#"),cljs.core.str(type)].join(''))], null))),cljs.core.clj__GT_js.call(null,data));
} else
{if(cljs.core._EQ_.call(null,"individuals",G__14932))
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
webapp.core.watch_events_BANG_ = (function watch_events_BANG_(chan){var c__11500__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__11501__auto__ = (function (){var switch__11485__auto__ = (function (state_14974){var state_val_14975 = (state_14974[1]);if((state_val_14975 === 7))
{var inst_14969 = (state_14974[2]);var state_14974__$1 = (function (){var statearr_14976 = state_14974;(statearr_14976[7] = inst_14969);
return statearr_14976;
})();var statearr_14977_14991 = state_14974__$1;(statearr_14977_14991[2] = null);
(statearr_14977_14991[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14975 === 6))
{var state_14974__$1 = state_14974;var statearr_14978_14992 = state_14974__$1;(statearr_14978_14992[2] = null);
(statearr_14978_14992[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14975 === 5))
{var inst_14964 = (state_14974[8]);var inst_14966 = webapp.core.barcharts.call(null,inst_14964);var state_14974__$1 = state_14974;var statearr_14979_14993 = state_14974__$1;(statearr_14979_14993[2] = inst_14966);
(statearr_14979_14993[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14975 === 4))
{var inst_14964 = (state_14974[8]);var inst_14964__$1 = (state_14974[2]);var state_14974__$1 = (function (){var statearr_14980 = state_14974;(statearr_14980[8] = inst_14964__$1);
return statearr_14980;
})();if(cljs.core.truth_(inst_14964__$1))
{var statearr_14981_14994 = state_14974__$1;(statearr_14981_14994[1] = 5);
} else
{var statearr_14982_14995 = state_14974__$1;(statearr_14982_14995[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14975 === 3))
{var inst_14972 = (state_14974[2]);var state_14974__$1 = state_14974;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14974__$1,inst_14972);
} else
{if((state_val_14975 === 2))
{var state_14974__$1 = state_14974;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14974__$1,4,chan);
} else
{if((state_val_14975 === 1))
{var state_14974__$1 = state_14974;var statearr_14983_14996 = state_14974__$1;(statearr_14983_14996[2] = null);
(statearr_14983_14996[1] = 2);
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
var state_machine__11486__auto____0 = (function (){var statearr_14987 = [null,null,null,null,null,null,null,null,null];(statearr_14987[0] = state_machine__11486__auto__);
(statearr_14987[1] = 1);
return statearr_14987;
});
var state_machine__11486__auto____1 = (function (state_14974){while(true){
var ret_value__11487__auto__ = (function (){try{while(true){
var result__11488__auto__ = switch__11485__auto__.call(null,state_14974);if(cljs.core.keyword_identical_QMARK_.call(null,result__11488__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__11488__auto__;
}
break;
}
}catch (e14988){if((e14988 instanceof Object))
{var ex__11489__auto__ = e14988;var statearr_14989_14997 = state_14974;(statearr_14989_14997[5] = ex__11489__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14974);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14988;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11487__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14998 = state_14974;
state_14974 = G__14998;
continue;
}
} else
{return ret_value__11487__auto__;
}
break;
}
});
state_machine__11486__auto__ = function(state_14974){
switch(arguments.length){
case 0:
return state_machine__11486__auto____0.call(this);
case 1:
return state_machine__11486__auto____1.call(this,state_14974);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11486__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11486__auto____0;
state_machine__11486__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11486__auto____1;
return state_machine__11486__auto__;
})()
;})(switch__11485__auto__))
})();var state__11502__auto__ = (function (){var statearr_14990 = f__11501__auto__.call(null);(statearr_14990[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11500__auto__);
return statearr_14990;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11502__auto__);
}));
return c__11500__auto__;
});
window.onload = (function (){var c = (function (){var G__14999 = cljs.core.async.chan.call(null);webapp.core.watch_events_BANG_.call(null,G__14999);
return G__14999;
})();ajax.core.GET.call(null,"/individuals",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",1706707644),(function (response){return webapp.core.barcharts.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"individuals",new cljs.core.Keyword(null,"data","data",1016980252),response], null));
}),new cljs.core.Keyword(null,"format","format",4040092521),new cljs.core.Keyword(null,"json","json",1017176154)], null));
ajax.core.GET.call(null,"/by-company",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",1706707644),(function (response){return webapp.core.barcharts.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"companies",new cljs.core.Keyword(null,"data","data",1016980252),response], null));
}),new cljs.core.Keyword(null,"format","format",4040092521),new cljs.core.Keyword(null,"json","json",1017176154)], null));
ajax.core.GET.call(null,"/by-location",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",1706707644),(function (response){return webapp.core.barcharts.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"location",new cljs.core.Keyword(null,"data","data",1016980252),response], null));
}),new cljs.core.Keyword(null,"format","format",4040092521),new cljs.core.Keyword(null,"json","json",1017176154)], null));
return ajax.core.GET.call(null,"/by-tech",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",1706707644),(function (response){return webapp.core.barcharts.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"technology",new cljs.core.Keyword(null,"data","data",1016980252),response], null));
}),new cljs.core.Keyword(null,"format","format",4040092521),new cljs.core.Keyword(null,"json","json",1017176154)], null));
});
