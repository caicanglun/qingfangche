(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/qing-f-c/newFollowRecord/detail"],{"0be2":function(e,t,n){"use strict";n.r(t);var a=n("1892"),i=n.n(a);for(var r in a)"default"!==r&&function(e){n.d(t,e,(function(){return a[e]}))}(r);t["default"]=i.a},1892:function(e,t,n){"use strict";(function(e,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(n("4795"));function r(e){return e&&e.__esModule?e:{default:e}}function u(e,t,n,a,i,r,u){try{var o=e[r](u),c=o.value}catch(s){return void n(s)}o.done?t(c):Promise.resolve(c).then(a,i)}function o(e){return function(){var t=this,n=arguments;return new Promise((function(a,i){var r=e.apply(t,n);function o(e){u(r,a,i,o,c,"next",e)}function c(e){u(r,a,i,o,c,"throw",e)}o(void 0)}))}}var c={data:function(){return{recordCode:"",pupDefault:"",item:"",updateList:""}},onLoad:function(e){this.recordCode=e.recordCode,this.getFetch(),this.getUpdateList()},onShow:function(){this.getFetch(),this.getUpdateList()},methods:{getUpdateList:function(){var t=this;return o(i.default.mark((function n(){var a,r;return i.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a={recordCode:t.recordCode,pageNum:1,pageSize:100},n.next=3,t.$http.get("/latent/update_list",{data:a});case 3:r=n.sent,e("log",r," at pages/qing-f-c/newFollowRecord/detail.vue:141"),t.updateList=r.data.data.list;case 6:case"end":return n.stop()}}),n)})))()},getFetch:function(){var t=this;return o(i.default.mark((function n(){var a,r;return i.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a={recordCode:t.recordCode},n.next=3,t.$http.get("/latent/details",{data:a});case 3:r=n.sent,e("log",r," at pages/qing-f-c/newFollowRecord/detail.vue:149"),t.item=r.data.data;case 6:case"end":return n.stop()}}),n)})))()},modifyRecord:function(){a.navigateTo({url:"./modifyRecord?recordCode=".concat(this.recordCode)})},updateRecord:function(){1==this.item.recordStatusCode?a.navigateTo({url:"./updateState?recordCode=".concat(this.recordCode,"&warningLevelCode=").concat(this.item.warningLevelCode)}):a.showToast({title:"已成交或丢单",icon:"none"})},startQuote:function(){a.navigateTo({url:"./setTargetPrice?recordCode=".concat(this.recordCode)})},modifyQuote:function(){a.navigateTo({url:"./setTargetPrice?recordCode=".concat(this.recordCode,"&sellerPrice=").concat(this.item.sellerPrice,"&sellerIsPlusDutyCode=").concat(this.item.sellerIsPlusDutyCode,"&sellerIsIcashCode=").concat(this.item.sellerIsIcashCode)})},toInquiryDetail:function(e,t){if(t>0){var n=a.getStorageSync("pupDefault");switch(n){case"SELL_DEPUTY":1==t?a.navigateTo({url:"/pages/qing-f-c/inquiryManage/sellDeputy/inquiry-details?inquiryNumber=".concat(e)}):2==t?a.navigateTo({url:"/pages/qing-f-c/inquiryManage/sampleInquiry/sellDeputy/inquiry-details?inquiryNumber=".concat(e)}):3==t?a.navigateTo({url:"/pages/qing-f-c/inquiryManage/sellDeputy/inquiry-details?inquiryNumber=".concat(e)}):4==t&&a.navigateTo({url:"/pages/qing-f-c/inquiryManage/sampleInquiry/sellDeputy/inquiry-details?inquiryNumber=".concat(e)});break;case"BUY_DEPUTY":1==t?a.navigateTo({url:"/pages/qing-f-c/inquiryManage/inquiry-details?inquiryNumber=".concat(e)}):2==t?a.navigateTo({url:"/pages/qing-f-c/inquiryManage/sampleInquiry/buyDeputy/inquiry-details?inquiryNumber=".concat(e)}):3==t?a.navigateTo({url:"/pages/qing-f-c/inquiryManage/quotedPrice/quotedPrice?quoteNumber=".concat(e)}):4==t&&a.navigateTo({url:"/pages/qing-f-c/inquiryManage/sampleInquiry/buyDeputy/quotationDetails/quotationDetails?number=".concat(e)});break;case"SALES_DIRECTOR":1==t?a.navigateTo({url:"/pages/qing-f-c/inquiryManage/sales_director/inquiry-details?inquiryNumber=".concat(e)}):2==t?a.navigateTo({url:"/pages/qing-f-c/inquiryManage/sampleInquiry/sales_director/inquiry-details?inquiryNumber=".concat(e)}):3==t?a.navigateTo({url:"/pages/qing-f-c/inquiryManage/sales_director/quotation-detail?quoteNumber=".concat(e)}):4==t&&a.navigateTo({url:"/pages/qing-f-c/inquiryManage/sampleInquiry/sales_director/quotation-details?number=".concat(e)});break;case"REGIONAL_MANAGER":break;case"ANALYST":break}}}}};t.default=c}).call(this,n("0de9")["default"],n("6e42")["default"])},"27b8":function(e,t,n){},"87f6":function(e,t,n){"use strict";var a,i=function(){var e=this,t=e.$createElement;e._self._c},r=[];n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return a}))},a838:function(e,t,n){"use strict";n.r(t);var a=n("87f6"),i=n("0be2");for(var r in i)"default"!==r&&function(e){n.d(t,e,(function(){return i[e]}))}(r);n("fc1f");var u,o=n("f0c5"),c=Object(o["a"])(i["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],u);t["default"]=c.exports},e3de:function(e,t,n){"use strict";(function(e){n("3b9b"),n("921b");a(n("66fd"));var t=a(n("a838"));function a(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},fc1f:function(e,t,n){"use strict";var a=n("27b8"),i=n.n(a);i.a}},[["e3de","common/runtime","common/vendor"]]]);