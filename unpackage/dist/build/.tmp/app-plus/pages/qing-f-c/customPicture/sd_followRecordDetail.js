(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/qing-f-c/customPicture/sd_followRecordDetail"],{"0614":function(e,t,o){"use strict";o.r(t);var n=o("2a37"),a=o("e1dc");for(var c in a)"default"!==c&&function(e){o.d(t,e,(function(){return a[e]}))}(c);o("9c01");var i,u=o("f0c5"),r=Object(u["a"])(a["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],i);t["default"]=r.exports},"2a37":function(e,t,o){"use strict";var n,a=function(){var e=this,t=e.$createElement;e._self._c},c=[];o.d(t,"b",(function(){return a})),o.d(t,"c",(function(){return c})),o.d(t,"a",(function(){return n}))},"84c4":function(e,t,o){},"8ece":function(e,t,o){"use strict";(function(e,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=c(o("4795"));function c(e){return e&&e.__esModule?e:{default:e}}function i(e,t,o,n,a,c,i){try{var u=e[c](i),r=u.value}catch(l){return void o(l)}u.done?t(r):Promise.resolve(r).then(n,a)}function u(e){return function(){var t=this,o=arguments;return new Promise((function(n,a){var c=e.apply(t,o);function u(e){i(c,n,a,u,r,"next",e)}function r(e){i(c,n,a,u,r,"throw",e)}u(void 0)}))}}var r,l,s=function(){o.e("components/uni-load-more/uni-load-more").then(function(){return resolve(o("fbad"))}.bind(null,o)).catch(o.oe)},f=function(){o.e("components/uni-icons/uni-icons").then(function(){return resolve(o("2cee"))}.bind(null,o)).catch(o.oe)},d=function(){o.e("components/topTabbar-follow").then(function(){return resolve(o("3a4b"))}.bind(null,o)).catch(o.oe)},p={components:{uniLoadMore:s,uniIcon:f,topTabbar:d},data:function(){return{companyInfo:{},st:2,green:"#7BC346",red:"#ff0000",items:["最新跟进","待跟进"],inputValueOne:"",loadingType:"more",buyOrSellCode:"",companyCode:"",followList:[],pageNum:1,pageSize:20,isDoRefresh:!1,isShow:!1}},onReachBottom:function(){null!=l&&clearTimeout(l),l=setTimeout((function(){r.fetchMoreList()}),1e3)},onPullDownRefresh:function(){this.fetchList()},onLoad:function(t){r=this,this.companyCode=t.companyCode;var o=e.getStorageSync("pupDefault");"BUY_DEPUTY"!=o&&"SELL_DEPUTY"!=o||(this.isShow=!0),this.fetchList(),this.getLinkMan()},onShow:function(){this.getLinkMan(),this.fetchList()},methods:{getLinkMan:function(){var e=this;return u(a.default.mark((function t(){var o;return a.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("/cm/linkman",{data:{companyCode:e.companyCode}});case 2:o=t.sent,e.buyOrSellCode=o.data.data.list[0].buyOrSellCode,n("log",o," at pages/qing-f-c/customPicture/sd_followRecordDetail.vue:122");case 5:case"end":return t.stop()}}),t)})))()},backto:function(){e.navigateBack({delta:-1})},fetchList:function(){var t=this;return u(a.default.mark((function o(){var c,i;return a.default.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return t.pageNum=1,c={companyCode:t.companyCode,pageNum:t.pageNum,pageSize:t.pageSize},o.next=4,t.$http.get("/portrayal/follow_up_details",{data:c});case 4:i=o.sent,n("log",i," at pages/qing-f-c/customPicture/sd_followRecordDetail.vue:137"),t.pageNum+=1,t.companyInfo=i.data.data,t.followList=i.data.data.list,n("log",t.followList," at pages/qing-f-c/customPicture/sd_followRecordDetail.vue:141"),e.stopPullDownRefresh();case 11:case"end":return o.stop()}}),o)})))()},fetchMoreList:function(){var t=this;return u(a.default.mark((function o(){var n,c;return a.default.wrap((function(o){while(1)switch(o.prev=o.next){case 0:if("more"===r.loadingType){o.next=2;break}return o.abrupt("return",!1);case 2:return r.loadingType="loading",e.showNavigationBarLoading(),n={companyCode:t.companyCode,pageNum:t.pageNum,pageSize:t.pageSize},o.next=7,t.$http.get("/portrayal/follow_up_details",{data:n});case 7:if(c=o.sent,0!=c.data.data.list.length){o.next=12;break}return r.loadingType="",e.hideNavigationBarLoading(),o.abrupt("return");case 12:t.pageNum+=1,t.companyInfo=c.data.data,t.followList=t.followList.concat(c.data.data.list),r.loadingType="more",e.hideNavigationBarLoading();case 17:case"end":return o.stop()}}),o)})))()},toCompanyDetail:function(){var t=e.getStorageSync("pupDefault"),o=this.companyInfo.companyCode;n("log",t," at pages/qing-f-c/customPicture/sd_followRecordDetail.vue:171"),"SALES_DIRECTOR"==t?e.navigateTo({url:"/pages/qing-f-c/sales_director/customer-details?companyCode=".concat(o),success:function(e){},fail:function(e){n("log",e," at pages/qing-f-c/customPicture/sd_followRecordDetail.vue:176")},complete:function(){}}):"REGIONAL_MANAGER"==t?e.navigateTo({url:"/pages/qing-f-c/regionalManager/customer-details?companyCode=".concat(o),success:function(e){},fail:function(e){n("log",e," at pages/qing-f-c/customPicture/sd_followRecordDetail.vue:183")},complete:function(){}}):"BUY_DEPUTY"==t?e.navigateTo({url:"/pages/qing-f-c/buyDupty/customer-details?companyCode=".concat(o),fail:function(e){n("log",e," at pages/qing-f-c/customPicture/sd_followRecordDetail.vue:189")}}):"SELL_DEPUTY"==t&&e.navigateTo({url:"/pages/qing-f-c/sellDupty/customer-details?companyCode=".concat(o),fail:function(e){n("log",e," at pages/qing-f-c/customPicture/sd_followRecordDetail.vue:194")}})},AddFollow:function(){var t=e.getStorageSync("pupDefault");"BUY_DEPUTY"==t||"SELL_DEPUTY"==t?e.navigateTo({url:"./createCustomFollow?companyCode=".concat(this.companyCode,"&buyOrSellCode=").concat(this.buyOrSellCode)}):e.showToast({title:"身份不允许",icon:"none"})},toDetail:function(t){var o=e.getStorageSync("pupDefault");"BUY_DEPUTY"==o||"SELL_DEPUTY"==o?e.navigateTo({url:"./buySellFollowDetail?recordCode=".concat(t,"&buyOrSellCode=").concat(this.buyOrSellCode)}):e.navigateTo({url:"./followRecordDetail?recordCode=".concat(t,"&buyOrSellCode=").concat(this.buyOrSellCode)})}}};t.default=p}).call(this,o("6e42")["default"],o("0de9")["default"])},"9c01":function(e,t,o){"use strict";var n=o("84c4"),a=o.n(n);a.a},b059:function(e,t,o){"use strict";(function(e){o("3b9b"),o("921b");n(o("66fd"));var t=n(o("0614"));function n(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,o("6e42")["createPage"])},e1dc:function(e,t,o){"use strict";o.r(t);var n=o("8ece"),a=o.n(n);for(var c in n)"default"!==c&&function(e){o.d(t,e,(function(){return n[e]}))}(c);t["default"]=a.a}},[["b059","common/runtime","common/vendor"]]]);