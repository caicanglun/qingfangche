(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/qing-f-c/followRecord/orderFollowSchedule"],{"224c":function(e,t,n){"use strict";var o=n("5137"),a=n.n(o);a.a},"42b4":function(e,t,n){"use strict";n.r(t);var o=n("74bd"),a=n.n(o);for(var r in o)"default"!==r&&function(e){n.d(t,e,(function(){return o[e]}))}(r);t["default"]=a.a},5137:function(e,t,n){},6222:function(e,t,n){"use strict";(function(e){n("3b9b"),n("921b");o(n("66fd"));var t=o(n("c639"));function o(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},"74bd":function(e,t,n){"use strict";(function(e,o){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n("4795"));function r(e){return e&&e.__esModule?e:{default:e}}function u(e,t,n,o,a,r,u){try{var i=e[r](u),c=i.value}catch(l){return void n(l)}i.done?t(c):Promise.resolve(c).then(o,a)}function i(e){return function(){var t=this,n=arguments;return new Promise((function(o,a){var r=e.apply(t,n);function i(e){u(r,o,a,i,c,"next",e)}function c(e){u(r,o,a,i,c,"throw",e)}i(void 0)}))}}var c,l,d=function(){n.e("components/uni-load-more/uni-load-more").then(function(){return resolve(n("fbad"))}.bind(null,n)).catch(n.oe)},f=function(){n.e("components/uni-icons/uni-icons").then(function(){return resolve(n("2cee"))}.bind(null,n)).catch(n.oe)},s={components:{uniLoadMore:d,uniIcon:f},data:function(){return{followList:[],recordCode:"",loadingType:"more",pageNum:1,pageSize:20}},onReachBottom:function(){null!=l&&clearTimeout(l),l=setTimeout((function(){c.fetchMoreList()}),1e3)},onPullDownRefresh:function(){this.fetchList()},onLoad:function(e){c=this,this.recordCode=e.recordCode,this.fetchList()},methods:{fetchList:function(){var t=this;return i(a.default.mark((function n(){var r,u;return a.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return t.pageNum=1,r={recordCode:t.recordCode,pageNum:t.pageNum,pageSize:t.pageSize},n.next=4,t.$http.get("/latent/update_list",{data:r});case 4:u=n.sent,e("log",u," at pages/qing-f-c/followRecord/orderFollowSchedule.vue:92"),t.pageNum+=1,t.followList=u.data.data.list,o.stopPullDownRefresh();case 9:case"end":return n.stop()}}),n)})))()},fetchMoreList:function(){var e=this;return i(a.default.mark((function t(){var n,r;return a.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if("more"===c.loadingType){t.next=2;break}return t.abrupt("return",!1);case 2:return c.loadingType="loading",o.showNavigationBarLoading(),n={recordCode:e.recordCode,pageNum:e.pageNum,pageSize:e.pageSize},t.next=7,e.$http.get("/latent/update_list",{data:n});case 7:if(r=t.sent,0!=r.data.data.list.length){t.next=12;break}return c.loadingType="",o.hideNavigationBarLoading(),t.abrupt("return");case 12:e.pageNum+=1,e.followList=e.followList.concat(r.data.data.list),c.loadingType="more",o.hideNavigationBarLoading();case 16:case"end":return t.stop()}}),t)})))()}}};t.default=s}).call(this,n("0de9")["default"],n("6e42")["default"])},c639:function(e,t,n){"use strict";n.r(t);var o=n("f5ca"),a=n("42b4");for(var r in a)"default"!==r&&function(e){n.d(t,e,(function(){return a[e]}))}(r);n("224c");var u,i=n("f0c5"),c=Object(i["a"])(a["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],u);t["default"]=c.exports},f5ca:function(e,t,n){"use strict";var o,a=function(){var e=this,t=e.$createElement;e._self._c},r=[];n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return o}))}},[["6222","common/runtime","common/vendor"]]]);