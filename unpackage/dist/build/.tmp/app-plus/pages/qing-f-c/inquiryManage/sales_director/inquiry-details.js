(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/qing-f-c/inquiryManage/sales_director/inquiry-details"],{"0d6c":function(t,n,i){"use strict";var e=i("2ba3"),a=i.n(e);a.a},"1b82":function(t,n,i){"use strict";i.r(n);var e=i("7ba9"),a=i("ebc2");for(var u in a)"default"!==u&&function(t){i.d(n,t,(function(){return a[t]}))}(u);i("0d6c");var o,s=i("f0c5"),c=Object(s["a"])(a["default"],e["b"],e["c"],!1,null,null,null,!1,e["a"],o);n["default"]=c.exports},"2ba3":function(t,n,i){},7838:function(t,n,i){"use strict";(function(t){i("3b9b"),i("921b");e(i("66fd"));var n=e(i("1b82"));function e(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,i("6e42")["createPage"])},"7ba9":function(t,n,i){"use strict";var e,a=function(){var t=this,n=t.$createElement;t._self._c},u=[];i.d(n,"b",(function(){return a})),i.d(n,"c",(function(){return u})),i.d(n,"a",(function(){return e}))},ca3a:function(t,n,i){"use strict";(function(t,e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a,u,o=function(){i.e("components/inquiry/baojia-list").then(function(){return resolve(i("a7de"))}.bind(null,i)).catch(i.oe)},s=function(){i.e("components/inquiry/chanpinyaosu").then(function(){return resolve(i("f0a2"))}.bind(null,i)).catch(i.oe)},c=function(){i.e("components/popupMe").then(function(){return resolve(i("cb0f"))}.bind(null,i)).catch(i.oe)},r={components:{baojiaList:o,chanpinyaosu:s,popupMe:c},data:function(){return{isMatch:!0,unMatch:"",closing:"",inquiryInfo:"",pageNum:1,pageSize:10,quotationList:[],isDoRefresh:!1,quotationNumber:""}},onLoad:function(t){a=this,u=t.inquiryNumber,this.getInquiryInfo(u),this.getDeputyQuotation()},onShow:function(){var t=getCurrentPages(),n=t[t.length-1];1==n.data.isDoRefresh&&(n.data.isDoRefresh=!1,this.getInquiryInfo(u),this.getDeputyQuotation()),this.getInquiryInfo(u),this.getDeputyQuotation()},methods:{backto:function(){t.navigateBack({delta:1})},swtichMatch:function(t){this.isMatch=!this.isMatch},getInquiryInfo:function(t){var n={inquiryNumber:t},i=this.Api.deputyDetails;this.myRequest(n,i,"get").then((function(t){e("log",t," at pages/qing-f-c/inquiryManage/sales_director/inquiry-details.vue:136"),a.inquiryInfo=t.data.data,e("log",a.inquiryInfo," at pages/qing-f-c/inquiryManage/sales_director/inquiry-details.vue:138")})).catch((function(t){wx.showToast({title:t.data.errMsg,icon:"none"})}))},getDeputyQuotation:function(){var t={inquiryNumber:u,pageNum:a.pageNum,pageSize:a.pageSize},n=this.Api.deputyQuotation;this.myRequest(t,n,"get").then((function(t){e("log",t," at pages/qing-f-c/inquiryManage/sales_director/inquiry-details.vue:155"),a.quotationList=t.data.data.list,e("log",a.quotationList," at pages/qing-f-c/inquiryManage/sales_director/inquiry-details.vue:157")})).catch((function(t){wx.showToast({title:t.data.errMsg,icon:"none"})}))},toDetail:function(n){var i=n;e("log","id",n," at pages/qing-f-c/inquiryManage/sales_director/inquiry-details.vue:168"),t.navigateTo({url:"/pages/qing-f-c/inquiryManage/sales_director/quotation-detail?quoteNumber="+i,success:function(t){},fail:function(){},complete:function(){}})},closingQuote:function(t){var n={quotationNumber:a.quotationNumber,sellDeputyRemarks:a.closing},i=this.Api.sellDeputyClose;this.myRequest(n,i,"get").then((function(t){e("log",t," at pages/qing-f-c/inquiryManage/sales_director/inquiry-details.vue:184"),0==t.data.status&&(a.getInquiryInfo(u),a.getDeputyQuotation())})).catch((function(t){wx.showToast({title:t.data.errMsg,icon:"none"})}))},handleEvent:function(n){switch(e("log",n[0]," at pages/qing-f-c/inquiryManage/sales_director/inquiry-details.vue:197"),e("log",n[1]," at pages/qing-f-c/inquiryManage/sales_director/inquiry-details.vue:198"),n[0]){case"closing":a.quotationNumber=n[1],this.tapClosing();break;case"verify":t.navigateTo({url:"/pages/qing-f-c/inquiryManage/sales_director/quotation-detail?quoteNumber="+n[1],success:function(t){},fail:function(){},complete:function(){}});break}},tapClosing:function(){this.$refs.closingRef.show()},tapUnmatch:function(){this.$refs.unMatchRef.show()},getContent:function(t,n){switch(t){case"unMatchRef":this.unMatch=n,e("log",this.unMatch," at pages/qing-f-c/inquiryManage/sales_director/inquiry-details.vue:224");break;case"closingRef":this.closing=n,this.closingQuote(),e("log",this.closing," at pages/qing-f-c/inquiryManage/sales_director/inquiry-details.vue:229");break}},submit:function(){t.navigateTo({url:"/pages/qing-f-c/inquiryManage/sellDeputy/startQuote?inquiryNumber="+u,success:function(t){},fail:function(){},complete:function(){}})}}};n.default=r}).call(this,i("6e42")["default"],i("0de9")["default"])},ebc2:function(t,n,i){"use strict";i.r(n);var e=i("ca3a"),a=i.n(e);for(var u in e)"default"!==u&&function(t){i.d(n,t,(function(){return e[t]}))}(u);n["default"]=a.a}},[["7838","common/runtime","common/vendor"]]]);