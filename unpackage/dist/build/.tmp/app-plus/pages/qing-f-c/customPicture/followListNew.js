(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/qing-f-c/customPicture/followListNew"],{3384:function(t,e,n){"use strict";var o,a=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return o}))},"3f51":function(t,e,n){},"53e8":function(t,e,n){"use strict";n.r(e);var o=n("e4a9"),a=n.n(o);for(var i in o)"default"!==i&&function(t){n.d(e,t,(function(){return o[t]}))}(i);e["default"]=a.a},"959f":function(t,e,n){"use strict";(function(t){n("3b9b"),n("921b");o(n("66fd"));var e=o(n("fc42"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},c3ac:function(t,e,n){"use strict";var o=n("3f51"),a=n.n(o);a.a},e4a9:function(t,e,n){"use strict";(function(t,o){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("4795"));function i(t){return t&&t.__esModule?t:{default:t}}function u(t,e,n,o,a,i,u){try{var c=t[i](u),r=c.value}catch(s){return void n(s)}c.done?e(r):Promise.resolve(r).then(o,a)}function c(t){return function(){var e=this,n=arguments;return new Promise((function(o,a){var i=t.apply(e,n);function c(t){u(i,o,a,c,r,"next",t)}function r(t){u(i,o,a,c,r,"throw",t)}c(void 0)}))}}var r,s,f=function(){n.e("components/uni-load-more/uni-load-more").then(function(){return resolve(n("fbad"))}.bind(null,n)).catch(n.oe)},l=function(){n.e("components/uni-icons/uni-icons").then(function(){return resolve(n("2cee"))}.bind(null,n)).catch(n.oe)},d=function(){n.e("components/topTabbar-follow").then(function(){return resolve(n("3a4b"))}.bind(null,n)).catch(n.oe)},p={components:{uniLoadMore:f,uniIcon:l,topTabbar:d},data:function(){return{pupDefault:"",baseUrl:"/static/images/jinsy/alert/",items:["最新跟进","待跟进"],loadingType:"more",followList:[],keyword:"",scope:0,pageNum:1,pageSize:20,isDoRefresh:!1,isShowButton:!1}},onReachBottom:function(){null!=s&&clearTimeout(s),s=setTimeout((function(){r.fetchMoreList()}),1e3)},onPullDownRefresh:function(){this.fetchList()},onLoad:function(){r=this,this.pupDefault=t.getStorageSync("pupDefault"),"BUY_DEPUTY"==this.pupDefault&&(this.isShowButton=!0),this.fetchList()},onShow:function(){var t=getCurrentPages(),e=t[t.length-1];1==e.data.isDoRefresh&&(e.data.isDoRefresh=!1,this.fetchList())},methods:{fetchList:function(){var e=this;return c(a.default.mark((function n(){var i,u;return a.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.pageNum=1,i={keyword:e.keyword,scope:e.scope,pageNum:e.pageNum,pageSize:e.pageSize},n.next=4,e.$http.get("/portrayal/deputy_list",{data:i});case 4:u=n.sent,o("log",u," at pages/qing-f-c/customPicture/followListNew.vue:120"),e.pageNum+=1,e.followList=u.data.data.list,t.stopPullDownRefresh();case 9:case"end":return n.stop()}}),n)})))()},fetchMoreList:function(){var e=this;return c(a.default.mark((function n(){var o,i;return a.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if("more"===r.loadingType){n.next=2;break}return n.abrupt("return",!1);case 2:return r.loadingType="loading",t.showNavigationBarLoading(),o={keyword:e.keyword,scope:e.scope,pageNum:e.pageNum,pageSize:e.pageSize},n.next=7,e.$http.get("/portrayal/deputy_list",{data:o});case 7:if(i=n.sent,0!=i.data.data.list.length){n.next=12;break}return r.loadingType="",t.hideNavigationBarLoading(),n.abrupt("return");case 12:e.pageNum+=1,e.followList=e.followList.concat(i.data.data.list),r.loadingType="more",t.hideNavigationBarLoading();case 16:case"end":return n.stop()}}),n)})))()},toDetail:function(e){t.navigateTo({url:"./sd_followRecordDetail?companyCode=".concat(e),success:function(t){},fail:function(t){o("log",t," at pages/qing-f-c/customPicture/followListNew.vue:155")},complete:function(){}})},tabSwitch:function(t){this.activeIndex=t,o("log","activeIndex",this.activeIndex," at pages/qing-f-c/customPicture/followListNew.vue:161"),0==this.activeIndex&&(this.scope=0),1==this.activeIndex&&(this.scope=1),this.fetchList()},tapSearch:function(){o("log",this.keyword," at pages/qing-f-c/customPicture/followListNew.vue:171"),this.fetchList()},addFollow:function(){t.navigateTo({url:"./addFollowRecord",success:function(t){},fail:function(t){o("log",t," at pages/qing-f-c/customPicture/followListNew.vue:179")},complete:function(){}})}}};e.default=p}).call(this,n("6e42")["default"],n("0de9")["default"])},fc42:function(t,e,n){"use strict";n.r(e);var o=n("3384"),a=n("53e8");for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);n("c3ac");var u,c=n("f0c5"),r=Object(c["a"])(a["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],u);e["default"]=r.exports}},[["959f","common/runtime","common/vendor"]]]);