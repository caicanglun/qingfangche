(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/qing-f-c/newFollowRecord/selectSellDeputy"],{5889:function(t,e,n){"use strict";(function(t){n("3b9b"),n("921b");r(n("66fd"));var e=r(n("6567"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},6567:function(t,e,n){"use strict";n.r(e);var r=n("813a"),u=n("81d7");for(var a in u)"default"!==a&&function(t){n.d(e,t,(function(){return u[t]}))}(a);n("f4b86");var c,o=n("f0c5"),i=Object(o["a"])(u["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],c);e["default"]=i.exports},"813a":function(t,e,n){"use strict";var r,u=function(){var t=this,e=t.$createElement,n=(t._self._c,t.__map(t.list,(function(e,n){var r=t._f("returnStyle")(e.postCode);return{$orig:t.__get_orig(e),f0:r}})));t.$mp.data=Object.assign({},{$root:{l0:n}})},a=[];n.d(e,"b",(function(){return u})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return r}))},"81d7":function(t,e,n){"use strict";n.r(e);var r=n("f499"),u=n.n(r);for(var a in r)"default"!==a&&function(t){n.d(e,t,(function(){return r[t]}))}(a);e["default"]=u.a},f036:function(t,e,n){},f499:function(t,e,n){"use strict";(function(t,r){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=a(n("4795"));function a(t){return t&&t.__esModule?t:{default:t}}function c(t,e,n,r,u,a,c){try{var o=t[a](c),i=o.value}catch(l){return void n(l)}o.done?e(i):Promise.resolve(i).then(r,u)}function o(t){return function(){var e=this,n=arguments;return new Promise((function(r,u){var a=t.apply(e,n);function o(t){c(a,r,u,o,i,"next",t)}function i(t){c(a,r,u,o,i,"throw",t)}o(void 0)}))}}var i={data:function(){return{buyOrSell:"",list:[],recordCode:""}},filters:{returnStyle:function(t){switch(t){case"SALES_DIRECTOR":return"销总";case"REGIONAL_MANAGER":return"区经";case"BUY_DEPUTY":return"买办";case"SELL_DEPUTY":return"卖办";case"ANALYST":return"分析"}}},onLoad:function(t){this.recordCode=t.recordCode,this.fetch()},methods:{fetch:function(){var e=this;return o(u.default.mark((function n(){var r;return u.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.$http.get("/latent/at_list",{data:{buyOrSell:e.buyOrSell}});case 2:r=n.sent,t("log",r," at pages/qing-f-c/newFollowRecord/selectSellDeputy.vue:57"),e.list=r.data.data.list;case 5:case"end":return n.stop()}}),n)})))()},selectContact:function(t){var e=getCurrentPages(),n=e[e.length-2];n.$vm.content=n.$vm.content+"".concat(t," "),r.navigateBack({delta:-1})}}};e.default=i}).call(this,n("0de9")["default"],n("6e42")["default"])},f4b86:function(t,e,n){"use strict";var r=n("f036"),u=n.n(r);u.a}},[["5889","common/runtime","common/vendor"]]]);