(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/qing-f-c/casualPrice/casualList"],{"1ecc":function(t,e,n){"use strict";n.r(e);var a=n("46b4"),i=n("d90f");for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("c069");var u,c=n("f0c5"),r=Object(c["a"])(i["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],u);e["default"]=r.exports},"244d":function(t,e,n){},"46b4":function(t,e,n){"use strict";var a,i=function(){var t=this,e=t.$createElement;t._self._c},o=[];n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return a}))},"702f":function(t,e,n){"use strict";(function(t){n("3b9b"),n("921b");a(n("66fd"));var e=a(n("1ecc"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"9db0":function(t,e,n){"use strict";(function(t,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=o(n("4795"));function o(t){return t&&t.__esModule?t:{default:t}}function u(t,e,n,a,i,o,u){try{var c=t[o](u),r=c.value}catch(s){return void n(s)}c.done?e(r):Promise.resolve(r).then(a,i)}function c(t){return function(){var e=this,n=arguments;return new Promise((function(a,i){var o=t.apply(e,n);function c(t){u(o,a,i,c,r,"next",t)}function r(t){u(o,a,i,c,r,"throw",t)}c(void 0)}))}}var r,s,l=function(){n.e("components/uni-load-more/uni-load-more").then(function(){return resolve(n("fbad"))}.bind(null,n)).catch(n.oe)},f=function(){n.e("components/uni-icons/uni-icons").then(function(){return resolve(n("2cee"))}.bind(null,n)).catch(n.oe)},d=function(){n.e("components/topTabbar-follow").then(function(){return resolve(n("3a4b"))}.bind(null,n)).catch(n.oe)},p={components:{uniLoadMore:l,uniIcon:f,topTabbar:d},data:function(){return{pupDefault:"",baseUrl:"/static/images/jinsy/alert/",items:["我的订单","全部订单"],loadingType:"more",followList:[],keyword:"",scope:1,pageNum:1,pageSize:20,isDoRefresh:!1,isShowButton:!1}},onReachBottom:function(){null!=s&&clearTimeout(s),s=setTimeout((function(){r.fetchMoreList()}),1e3)},onPullDownRefresh:function(){this.fetchList()},onLoad:function(){r=this,this.pupDefault=t.getStorageSync("pupDefault"),"BUY_DEPUTY"==this.pupDefault&&(this.isShowButton=!0),this.fetchList()},onShow:function(){var t=getCurrentPages(),e=t[t.length-1];1==e.data.isDoRefresh&&(e.data.isDoRefresh=!1,this.fetchList())},methods:{fetchList:function(){var e=this;return c(i.default.mark((function n(){var o,u;return i.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.pageNum=1,o={postCode:e.pupDefault,keyword:e.keyword,pageNum:e.pageNum,pageSize:e.pageSize},n.next=4,e.$http.get("/sQuotation/rapid_list",{data:o});case 4:u=n.sent,a("log",u," at pages/qing-f-c/casualPrice/casualList.vue:135"),e.pageNum+=1,e.followList=u.data.data.list,t.stopPullDownRefresh();case 9:case"end":return n.stop()}}),n)})))()},fetchMoreList:function(){var e=this;return c(i.default.mark((function n(){var a,o;return i.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if("more"===r.loadingType){n.next=2;break}return n.abrupt("return",!1);case 2:return r.loadingType="loading",t.showNavigationBarLoading(),a={postCode:e.pupDefault,keyword:e.keyword,pageNum:e.pageNum,pageSize:e.pageSize},n.next=7,e.$http.get("/sQuotation/rapid_list",{data:a});case 7:if(o=n.sent,0!=o.data.data.list.length){n.next=12;break}return r.loadingType="",t.hideNavigationBarLoading(),n.abrupt("return");case 12:e.pageNum+=1,e.followList=e.followList.concat(o.data.data.list),r.loadingType="more",t.hideNavigationBarLoading();case 16:case"end":return n.stop()}}),n)})))()},toDetail:function(e){t.navigateTo({url:"./publicDialog?recordCode=".concat(e,"&buyOrSell=1"),success:function(t){},fail:function(t){a("log",t," at pages/qing-f-c/casualPrice/casualList.vue:169")},complete:function(){}})},tabSwitch:function(t){this.activeIndex=t,a("log","activeIndex",this.activeIndex," at pages/qing-f-c/casualPrice/casualList.vue:176"),0==this.activeIndex&&(this.scope=1),1==this.activeIndex&&(this.scope=2),this.fetchList()},tapSearch:function(){a("log",this.keyword," at pages/qing-f-c/casualPrice/casualList.vue:186"),this.fetchList()},addFollow:function(){t.navigateTo({url:"./createCasual",success:function(t){},fail:function(t){a("log",t," at pages/qing-f-c/casualPrice/casualList.vue:194")},complete:function(){}})},delCasual:function(e){var n=this;return c(i.default.mark((function o(){var u;return i.default.wrap((function(o){while(1)switch(o.prev=o.next){case 0:u={quotationCode:e},t.showModal({title:"提示",content:"确认删除随口价吗？",showCancel:!0,cancelText:"取消",confirmText:"确认",success:function(){var e=c(i.default.mark((function e(o){return i.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(a("log",o," at pages/qing-f-c/casualPrice/casualList.vue:209"),!o.confirm){e.next=8;break}return t.showLoading({title:"提交中",mask:!0}),e.next=5,n.$http.get("/sQuotation/rapid_del",{data:u});case 5:e.sent,t.hideLoading(),r.fetchList();case 8:case"end":return e.stop()}}),e)})));function o(t){return e.apply(this,arguments)}return o}(),fail:function(t){a("log",t," at pages/qing-f-c/casualPrice/casualList.vue:221")}});case 2:case"end":return o.stop()}}),o)})))()}}};e.default=p}).call(this,n("6e42")["default"],n("0de9")["default"])},c069:function(t,e,n){"use strict";var a=n("244d"),i=n.n(a);i.a},d90f:function(t,e,n){"use strict";n.r(e);var a=n("9db0"),i=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=i.a}},[["702f","common/runtime","common/vendor"]]]);