(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/qing-f-c/sales_director/approved"],{"304d":function(t,e,n){"use strict";(function(t,o){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i,u=function(){return n.e("components/widgit-menu").then(n.bind(null,"0a83"))},a={components:{widgit:u},data:function(){return{directorReviewCount:"",auditCount:""}},onLoad:function(){i=this,this.reviewCount(),this.getAuditCount()},onShow:function(){this.reviewCount(),this.getAuditCount()},methods:{reviewCount:function(){var e={},n=this.Api.directorReviewCount;this.myRequest(e,n,"get").then(function(e){t("log",e," at pages/qing-f-c/sales_director/approved.vue:53"),i.directorReviewCount=e.data.data.msg,t("log",i.directorReviewCount," at pages/qing-f-c/sales_director/approved.vue:55")}).catch(function(t){wx.showToast({title:t.data.errMsg,icon:"none"})})},getAuditCount:function(){var e={},n=this.Api.auditCount;this.myRequest(e,n,"get").then(function(e){t("log",e," at pages/qing-f-c/sales_director/approved.vue:67"),i.auditCount=e.data.data.msg,t("log",i.auditCount," at pages/qing-f-c/sales_director/approved.vue:69")}).catch(function(t){wx.showToast({title:t.data.errMsg,icon:"none"})})},toQuote:function(){o.navigateTo({url:"/pages/qing-f-c/inquiryManage/sales_director/inquiryManage"})},toTrade:function(){o.navigateTo({url:""})},toProduct:function(){o.navigateTo({url:"/pages/qing-f-c/productShow/examineProduct"})}}};e.default=a}).call(this,n("0de9")["default"],n("6e42")["default"])},7861:function(t,e,n){},af0c:function(t,e,n){"use strict";n.r(e);var o=n("d1b0"),i=n("b5ef");for(var u in i)"default"!==u&&function(t){n.d(e,t,function(){return i[t]})}(u);n("af12");var a,r=n("f0c5"),c=Object(r["a"])(i["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],a);e["default"]=c.exports},af12:function(t,e,n){"use strict";var o=n("7861"),i=n.n(o);i.a},b5ef:function(t,e,n){"use strict";n.r(e);var o=n("304d"),i=n.n(o);for(var u in o)"default"!==u&&function(t){n.d(e,t,function(){return o[t]})}(u);e["default"]=i.a},d1b0:function(t,e,n){"use strict";var o,i=function(){var t=this,e=t.$createElement;t._self._c},u=[];n.d(e,"b",function(){return i}),n.d(e,"c",function(){return u}),n.d(e,"a",function(){return o})},d8ed:function(t,e,n){"use strict";(function(t){n("3b9b"),n("921b");o(n("66fd"));var e=o(n("af0c"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])}},[["d8ed","common/runtime","common/vendor"]]]);