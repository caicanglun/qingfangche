(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/qing-f-c/report/selectTargetCustomer"],{"2b85":function(e,t,n){"use strict";var o=n("6bb3"),r=n.n(o);r.a},"6b1b":function(e,t,n){"use strict";n.r(t);var o=n("e060"),r=n.n(o);for(var a in o)"default"!==a&&function(e){n.d(t,e,(function(){return o[e]}))}(a);t["default"]=r.a},"6bb3":function(e,t,n){},"708a":function(e,t,n){"use strict";(function(e){n("3b9b"),n("921b");o(n("66fd"));var t=o(n("c0ec"));function o(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},c0ec:function(e,t,n){"use strict";n.r(t);var o=n("e896"),r=n("6b1b");for(var a in r)"default"!==a&&function(e){n.d(t,e,(function(){return r[e]}))}(a);n("2b85");var u,i=n("f0c5"),c=Object(i["a"])(r["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],u);t["default"]=c.exports},e060:function(e,t,n){"use strict";(function(e,o){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n("4795"));function a(e){return e&&e.__esModule?e:{default:e}}function u(e,t,n,o,r,a,u){try{var i=e[a](u),c=i.value}catch(s){return void n(s)}i.done?t(c):Promise.resolve(c).then(o,r)}function i(e){return function(){var t=this,n=arguments;return new Promise((function(o,r){var a=e.apply(t,n);function i(e){u(a,o,r,i,c,"next",e)}function c(e){u(a,o,r,i,c,"throw",e)}i(void 0)}))}}var c,s,l=function(){n.e("components/topSearch").then(function(){return resolve(n("82e9"))}.bind(null,n)).catch(n.oe)},f=function(){n.e("components/uni-load-more/uni-load-more").then(function(){return resolve(n("fbad"))}.bind(null,n)).catch(n.oe)},d=function(){n.e("components/ms-dropdown/dropdown-menu").then(function(){return resolve(n("d8d8"))}.bind(null,n)).catch(n.oe)},p=function(){n.e("components/ms-dropdown/dropdown-item").then(function(){return resolve(n("fa40"))}.bind(null,n)).catch(n.oe)};function h(e){var t=new Date,n=t.getFullYear(),o=t.getMonth()+1,r=t.getDate();return"start"===e?n-=60:"end"===e&&(n+=2),o=o>9?o:"0"+o,r=r>9?r:"0"+r,"".concat(n,"-").concat(o,"-").concat(r)}function m(){var e=new Date,t=new Date(e.getYear(),e.getMonth(),1),n=Number(t.getMonth())+1;return e.getFullYear()+"-"+n+"-"+t.getDate()}var g={components:{topSearch:l,uniLoadMore:f,msDropdownMenu:d,msDropdownItem:p},data:function(){return{customerList:[],customLevel:0,levelList:[],keyword:"",postCode:"",pageNum:1,pageSize:20,buyOrSell:"",regionCode:""}},onLoad:function(t){c=this,this.buyOrSell=t.buyOrSell,this.regionCode=t.regionCode,this.postCode=e.getStorageSync("pupDefault"),1,this.fetchList()},onReachBottom:function(){null!=s&&clearTimeout(s),s=setTimeout((function(){c.fetchMoreList()}),1e3)},methods:{fetchList:function(){var e=this;return i(r.default.mark((function t(){var n,a;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n={postCode:e.postCode,buyOrSell:e.buyOrSell,regionCode:e.regionCode,startTime:m({format:!0}),endTime:h({format:!0}),pageNum:e.pageNum,pageSize:e.pageSize},t.next=3,e.$http.get("/data/new_customer_list",{data:n});case 3:a=t.sent,e.customerList=a.data.data.list,o("log",a," at pages/qing-f-c/report/selectTargetCustomer.vue:124");case 6:case"end":return t.stop()}}),t)})))()},fetchMoreList:function(){var e=this;return i(r.default.mark((function t(){var n,a;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.pageSize+=20,n={postCode:e.postCode,buyOrSell:e.buyOrSell,regionCode:e.regionCode,startTime:m({format:!0}),endTime:h({format:!0}),pageNum:e.pageNum,pageSize:e.pageSize},t.next=4,e.$http.get("/data/new_customer_list",{data:n});case 4:a=t.sent,e.customerList=a.data.data.list,o("log",a," at pages/qing-f-c/report/selectTargetCustomer.vue:145");case 7:case"end":return t.stop()}}),t)})))()},filterInput:function(){this.fetchList()},getCompanyLevel:function(){var e=this;return i(r.default.mark((function t(){var n,o;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("/choose/company_level",{});case 2:n=t.sent,o=n.data.data.list,o.forEach((function(t){e.levelList.push({text:t.label,value:t.id})})),e.levelList.unshift({text:"全部等级",value:-1});case 6:case"end":return t.stop()}}),t)})))()},tapSearch:function(t){e.showLoading({title:"搜索中..."}),this.keyword=t,this.fetchList(),setTimeout((function(){e.hideLoading()}),2e3)},toMicroShop:function(t){var n=JSON.stringify(t);e.navigateTo({url:"./microShop?data=".concat(n)})}}};t.default=g}).call(this,n("6e42")["default"],n("0de9")["default"])},e896:function(e,t,n){"use strict";var o,r=function(){var e=this,t=e.$createElement;e._self._c},a=[];n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return o}))}},[["708a","common/runtime","common/vendor"]]]);