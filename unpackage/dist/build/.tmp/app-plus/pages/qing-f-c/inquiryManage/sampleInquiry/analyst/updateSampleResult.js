(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/qing-f-c/inquiryManage/sampleInquiry/analyst/updateSampleResult"],{"14e7":function(t,e,a){"use strict";var n,i=function(){var t=this,e=t.$createElement;t._self._c},u=[];a.d(e,"b",function(){return i}),a.d(e,"c",function(){return u}),a.d(e,"a",function(){return n})},"1ed4":function(t,e,a){"use strict";a.r(e);var n=a("a879"),i=a.n(n);for(var u in n)"default"!==u&&function(t){a.d(e,t,function(){return n[t]})}(u);e["default"]=i.a},2933:function(t,e,a){},"81d4":function(t,e,a){"use strict";a.r(e);var n=a("14e7"),i=a("1ed4");for(var u in i)"default"!==u&&function(t){a.d(e,t,function(){return i[t]})}(u);a("ae89");var s,o=a("f0c5"),r=Object(o["a"])(i["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],s);e["default"]=r.exports},"878c":function(t,e,a){"use strict";(function(t){a("3b9b"),a("921b");n(a("66fd"));var e=n(a("81d4"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,a("6e42")["createPage"])},a879:function(t,e,a){"use strict";(function(t,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i,u=function(){return a.e("components/rangeButton-edit").then(a.bind(null,"329b"))},s={components:{rangeButton:u},data:function(){return{items:[{id:1,label:"相同"},{id:2,label:"相似"},{id:3,label:"不同"}],partCompare:"",bigButtons:[{id:1,label:"相同"},{id:3,label:"不同"}],list:"",form:{inquiryAnalysisSampleCode:"",quotationAnalysisSampleCode:"",ingredient:"",specification:"",style:"",clothType:"",density:"",gramWeight:"",clothBreadth:""},compareResult:"",quotationNumber:""}},onLoad:function(e){i=this,this.quotationNumber=e.quotationNumber,this.compareResult=JSON.parse(e.result),this.form=this.compareResult,t("log",this.compareResult," at pages/qing-f-c/inquiryManage/sampleInquiry/analyst/updateSampleResult.vue:184"),t("log",this.quotationNumber," at pages/qing-f-c/inquiryManage/sampleInquiry/analyst/updateSampleResult.vue:185"),this.contrastDetails()},methods:{initSetButton:function(){},compareChange:function(e,a){switch(e){case"ingredient":i.form.ingredient=a;break;case"specification":i.form.specification=a;break;case"style":i.form.style=a;break;case"clothType":i.form.clothType=a;break;case"density":i.form.density=a;break;case"gramWeight":i.form.gramWeight=a;break;case"clothBreadth":i.form.clothBreadth=a;break}t("log",a," at pages/qing-f-c/inquiryManage/sampleInquiry/analyst/updateSampleResult.vue:216")},contrastDetails:function(){var e=this.Api.contrastDetails,a={quotationNumber:i.quotationNumber};this.myRequest(a,e,"get").then(function(e){t("log",e," at pages/qing-f-c/inquiryManage/sampleInquiry/analyst/updateSampleResult.vue:226"),0==e.data.status&&(i.list=e.data.data),t("log",i.list," at pages/qing-f-c/inquiryManage/sampleInquiry/analyst/updateSampleResult.vue:230")}).catch(function(t){wx.showToast({title:t.data.errMsg,icon:"none"})})},bindCancel:function(){n.navigateBack({delta:1})},confirm:function(){var e=this.Api.contrastUpdate,a=i.form;t("log",a," at pages/qing-f-c/inquiryManage/sampleInquiry/analyst/updateSampleResult.vue:247"),n.showLoading({title:"加载中",mask:!0}),this.myRequest(a,e,"post").then(function(e){if(t("log",e," at pages/qing-f-c/inquiryManage/sampleInquiry/analyst/updateSampleResult.vue:253"),0==e.data.status){n.hideLoading();var a=getCurrentPages(),i=(a[a.length-1],a[a.length-2]);i.setData({isDoRefresh:!0}),n.navigateBack({delta:1})}}).catch(function(t){wx.showToast({title:t.data.errMsg,icon:"none"})})}}};e.default=s}).call(this,a("0de9")["default"],a("6e42")["default"])},ae89:function(t,e,a){"use strict";var n=a("2933"),i=a.n(n);i.a}},[["878c","common/runtime","common/vendor"]]]);