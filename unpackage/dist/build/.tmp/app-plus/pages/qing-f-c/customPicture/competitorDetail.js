(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/qing-f-c/customPicture/competitorDetail"],{"355b":function(t,e,n){"use strict";var r,i=function(){var t=this,e=t.$createElement;t._self._c},a=[];n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return r}))},"36ab":function(t,e,n){"use strict";var r=n("a9c9"),i=n.n(r);i.a},"6f30":function(t,e,n){"use strict";n.r(e);var r=n("ab63"),i=n.n(r);for(var a in r)"default"!==a&&function(t){n.d(e,t,(function(){return r[t]}))}(a);e["default"]=i.a},9945:function(t,e,n){"use strict";n.r(e);var r=n("355b"),i=n("6f30");for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);n("36ab");var c,o=n("f0c5"),u=Object(o["a"])(i["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],c);e["default"]=u.exports},a9c9:function(t,e,n){},ab63:function(t,e,n){"use strict";(function(t,r){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("4795"));function a(t){return t&&t.__esModule?t:{default:t}}function c(t,e,n,r,i,a,c){try{var o=t[a](c),u=o.value}catch(s){return void n(s)}o.done?e(u):Promise.resolve(u).then(r,i)}function o(t){return function(){var e=this,n=arguments;return new Promise((function(r,i){var a=t.apply(e,n);function o(t){c(a,r,i,o,u,"next",t)}function u(t){c(a,r,i,o,u,"throw",t)}o(void 0)}))}}var u={data:function(){return{rivalCode:"",item:"",mainProduct:"",superiority:"",procurementArr:[],companyScaleArr:[],businessModelArr:[],isShow:!1}},onLoad:function(e){this.rivalCode=e.rivalCode,t("log",this.rivalCode," at pages/qing-f-c/customPicture/competitorDetail.vue:60");var n=r.getStorageSync("pupDefault");"BUY_DEPUTY"==n&&(this.isShow=!0),this.fetchProcurement(),this.fetchCompanyScale(),this.fetchBusinessModel(),this.fetch()},onShow:function(){this.fetchProcurement(),this.fetchCompanyScale(),this.fetchBusinessModel(),this.fetch()},methods:{fetch:function(){var e=this;return o(i.default.mark((function n(){var r;return i.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.$http.get("/cm/rival_details",{data:{rivalCode:e.rivalCode}});case 2:r=n.sent,t("log",r," at pages/qing-f-c/customPicture/competitorDetail.vue:82"),e.item=r.data.data,t("log",e.item," at pages/qing-f-c/customPicture/competitorDetail.vue:85"),e.joinMain(),e.joinSuperiority();case 8:case"end":return n.stop()}}),n)})))()},joinMain:function(){var t=[];this.item.mainProductList.forEach((function(e){t.push(e.mainProductName)})),this.mainProduct=t.join(",")},joinSuperiority:function(){var t=[];this.item.superiorityList.forEach((function(e){t.push(e.superiorityName)})),this.superiority=t.join(",")},bindCancel:function(){var e=this;return o(i.default.mark((function n(){return i.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:r.showModal({title:"提示",content:"确认删除该竞争对手吗？",showCancel:!0,cancelText:"取消",confirmText:"确认",success:function(){var n=o(i.default.mark((function n(a){return i.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(t("log",a," at pages/qing-f-c/customPicture/competitorDetail.vue:111"),!a.confirm){n.next=8;break}return r.showLoading({title:"提交中",mask:!0}),n.next=5,e.$http.get("/cm/rivalDel",{data:{rivalCode:e.rivalCode}});case 5:r.hideLoading(),r.showToast({title:"删除成功"}),r.navigateBack({delta:-1});case 8:case"end":return n.stop()}}),n)})));function a(t){return n.apply(this,arguments)}return a}(),fail:function(e){t("log",e," at pages/qing-f-c/customPicture/competitorDetail.vue:133")},complete:function(){}});case 1:case"end":return n.stop()}}),n)})))()},fetchProcurement:function(){var e=this;return o(i.default.mark((function n(){var r;return i.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.$http.get("/choose/procurement",{});case 2:r=n.sent,e.procurementArr=r.data.data.list,t("log",e.procurementArr," at pages/qing-f-c/customPicture/competitorDetail.vue:141");case 5:case"end":return n.stop()}}),n)})))()},fetchCompanyScale:function(){var e=this;return o(i.default.mark((function n(){var r;return i.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.$http.get("/choose/scale",{});case 2:r=n.sent,e.companyScaleArr=r.data.data.list,t("log",e.companyScaleArr," at pages/qing-f-c/customPicture/competitorDetail.vue:147");case 5:case"end":return n.stop()}}),n)})))()},fetchBusinessModel:function(){var e=this;return o(i.default.mark((function n(){var r;return i.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.$http.get("/choose/businessModel",{});case 2:r=n.sent,e.businessModelArr=r.data.data.list,t("log",e.businessModelArr," at pages/qing-f-c/customPicture/competitorDetail.vue:152");case 5:case"end":return n.stop()}}),n)})))()},toEdit:function(){var t=JSON.stringify(this.item),e=JSON.stringify({procurementArr:this.procurementArr,companyScaleArr:this.companyScaleArr,businessModelArr:this.businessModelArr});r.navigateTo({url:"./editCompetitor?rivalCode=".concat(this.rivalCode,"&data=").concat(t,"&select=").concat(e),success:function(t){},fail:function(){},complete:function(){}})}}};e.default=u}).call(this,n("0de9")["default"],n("6e42")["default"])},e647:function(t,e,n){"use strict";(function(t){n("3b9b"),n("921b");r(n("66fd"));var e=r(n("9945"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])}},[["e647","common/runtime","common/vendor"]]]);