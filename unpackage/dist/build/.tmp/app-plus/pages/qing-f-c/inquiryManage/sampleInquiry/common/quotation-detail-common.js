(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/qing-f-c/inquiryManage/sampleInquiry/common/quotation-detail-common"],{"2d3a":function(t,n,e){"use strict";(function(t){e("3b9b"),e("921b");a(e("66fd"));var n=a(e("d14f"));function a(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},4697:function(t,n,e){"use strict";e.r(n);var a=e("65ef"),o=e.n(a);for(var i in a)"default"!==i&&function(t){e.d(n,t,(function(){return a[t]}))}(i);n["default"]=o.a},"469f":function(t,n,e){},"54de":function(t,n,e){"use strict";var a,o=function(){var t=this,n=t.$createElement;t._self._c},i=[];e.d(n,"b",(function(){return o})),e.d(n,"c",(function(){return i})),e.d(n,"a",(function(){return a}))},"65ef":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a,o=function(){e.e("components/sample-inquiry/baojia-detail-buy").then(function(){return resolve(e("cf26"))}.bind(null,e)).catch(e.oe)},i=function(){e.e("components/sample-inquiry/baojia-detail-tuisong").then(function(){return resolve(e("4442"))}.bind(null,e)).catch(e.oe)},u={components:{baojiaDetail:o,baojiaDetailTuisong:i},data:function(){return{quotationInfo:"",topList:"",number:"",salerDirect:""}},onLoad:function(t){a=this,this.number=t.number,this.getInquiryInfo()},methods:{getInquiryInfo:function(){var n=this.Api.quotationDetails,e={quotationNumber:a.number};this.myRequest(e,n,"get").then((function(n){0==n.data.status&&(a.topList=n.data.data,a.topList.goAnalysisSample.qualityName=a.topList.goInitialSample.qualityName,a.salerDirect=n.data.data.quotationDirector,t("log",a.topList," at pages/qing-f-c/inquiryManage/sampleInquiry/common/quotation-detail-common.vue:77"),t("log",a.topList.snalyseContrast," at pages/qing-f-c/inquiryManage/sampleInquiry/common/quotation-detail-common.vue:78"))})).catch((function(t){wx.showToast({title:t.data.errMsg,icon:"none"})}))}}};n.default=u}).call(this,e("0de9")["default"])},d14f:function(t,n,e){"use strict";e.r(n);var a=e("54de"),o=e("4697");for(var i in o)"default"!==i&&function(t){e.d(n,t,(function(){return o[t]}))}(i);e("ea9e");var u,r=e("f0c5"),c=Object(r["a"])(o["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],u);n["default"]=c.exports},ea9e:function(t,n,e){"use strict";var a=e("469f"),o=e.n(a);o.a}},[["2d3a","common/runtime","common/vendor"]]]);