(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/qing-f-c/inquiryManage/sampleInquiry/analyst/inquiry-details"],{"30b6":function(n,i,t){"use strict";(function(n){t("3b9b"),t("921b");e(t("66fd"));var i=e(t("43c08"));function e(n){return n&&n.__esModule?n:{default:n}}n(i.default)}).call(this,t("6e42")["createPage"])},"43c08":function(n,i,t){"use strict";t.r(i);var e=t("798d"),a=t("7bad");for(var u in a)"default"!==u&&function(n){t.d(i,n,(function(){return a[n]}))}(u);t("99d9");var s,o=t("f0c5"),c=Object(o["a"])(a["default"],e["b"],e["c"],!1,null,null,null,!1,e["a"],s);i["default"]=c.exports},"798d":function(n,i,t){"use strict";var e,a=function(){var n=this,i=n.$createElement;n._self._c},u=[];t.d(i,"b",(function(){return a})),t.d(i,"c",(function(){return u})),t.d(i,"a",(function(){return e}))},"7bad":function(n,i,t){"use strict";t.r(i);var e=t("8663"),a=t.n(e);for(var u in e)"default"!==u&&function(n){t.d(i,n,(function(){return e[n]}))}(u);i["default"]=a.a},"7d2a":function(n,i,t){},8663:function(n,i,t){"use strict";(function(n,e){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a,u=function(){t.e("components/popupMe").then(function(){return resolve(t("cb0f"))}.bind(null,t)).catch(t.oe)},s=function(){t.e("components/uni-icons/uni-icons").then(function(){return resolve(t("2cee"))}.bind(null,t)).catch(t.oe)},o=function(){t.e("components/sample-inquiry/chanpinyaosu-quote").then(function(){return resolve(t("dd41"))}.bind(null,t)).catch(t.oe)},c=function(){t.e("components/sampleResult").then(function(){return resolve(t("2584"))}.bind(null,t)).catch(t.oe)},r=function(){t.e("components/popupMe-pic").then(function(){return resolve(t("e0cd"))}.bind(null,t)).catch(t.oe)},l={components:{popupMe:u,uniIcon:s,chanpinyaosu:o,sampleResult:c,popUpPic:r},data:function(){return{isDoRefresh:!1,isMatch:!0,unMatch:"",closing:"",isHasPush:!0,isDisplayOrginal:!0,isAnaly:!1,number:"",orderType:"",topList:"",src:""}},onLoad:function(i){a=this,n("log",i," at pages/qing-f-c/inquiryManage/sampleInquiry/analyst/inquiry-details.vue:229"),this.number=i.inquiryNumber,this.orderType=i.orderType||1,this.getInquiryInfo()},onShow:function(){var n=getCurrentPages(),i=n[n.length-1];1==i.data.isDoRefresh&&(i.data.isDoRefresh=!1,this.getInquiryInfo()),this.getInquiryInfo()},methods:{toModiGoAnalysis:function(i){var t=JSON.stringify(i);e.navigateTo({url:"./updateAnalyistResult?data="+t+"&number="+a.number+"&orderType="+a.orderType,success:function(n){},fail:function(i){n("log",i," at pages/qing-f-c/inquiryManage/sampleInquiry/analyst/inquiry-details.vue:260")},complete:function(){}})},toPrintContent:function(){e.navigateTo({url:"/pages/qing-f-c/printer/printContent?number="+a.number+"&orderType="+a.orderType+"&isAnalysis=1",success:function(n){},fail:function(){},complete:function(){}})},toBigPic:function(i){e.previewImage({urls:[i],success:function(){n("log","正在预览中"," at pages/qing-f-c/inquiryManage/sampleInquiry/analyst/inquiry-details.vue:280")},fail:function(){},complete:function(){}})},getInquiryInfo:function(){var i=this.Api.analystDetails,t={number:a.number,orderType:a.orderType};this.myRequest(t,i,"get").then((function(i){0==i.data.status&&(a.topList=i.data.data,n("log",a.topList," at pages/qing-f-c/inquiryManage/sampleInquiry/analyst/inquiry-details.vue:302"),n("log",a.topList.snalyseContrast," at pages/qing-f-c/inquiryManage/sampleInquiry/analyst/inquiry-details.vue:303"))})).catch((function(n){wx.showToast({title:n.data.errMsg,icon:"none"})}))},swtichDisplay:function(){this.isDisplayOrginal=!this.isDisplayOrginal},tapClosing:function(){this.$refs.closingRef.show()},tapUnmatch:function(){this.$refs.unMatchRef.show()},getContent:function(i,t){switch(i){case"unMatchRef":this.unMatch=t,n("log",this.unMatch," at pages/qing-f-c/inquiryManage/sampleInquiry/analyst/inquiry-details.vue:327");break;case"closingRef":this.closing=t,n("log",this.closing," at pages/qing-f-c/inquiryManage/sampleInquiry/analyst/inquiry-details.vue:331");break}},handleCancelClosing:function(){this.$refs.popupClosing.close(),this.closing=""},handleClosing:function(){n("log","关闭原因"," at pages/qing-f-c/inquiryManage/sampleInquiry/analyst/inquiry-details.vue:342"),n("log",this.closing," at pages/qing-f-c/inquiryManage/sampleInquiry/analyst/inquiry-details.vue:343"),this.$refs.popupClosing.close()},backto:function(){e.navigateBack({delta:1})},swtichMatch:function(n){this.isMatch=!this.isMatch},modifyResult:function(){var i=JSON.stringify(a.topList.goAnalysisSample);e.navigateTo({url:"./updateAnalyistResult?data="+i+"&number="+a.number+"&orderType="+a.orderType,success:function(n){},fail:function(i){n("log",i," at pages/qing-f-c/inquiryManage/sampleInquiry/analyst/inquiry-details.vue:363")},complete:function(){}})},inputResultCome:function(){var i=JSON.stringify(a.topList.comeInitialSample);e.navigateTo({url:"./analyst-input?data="+i+"&number="+a.number+"&orderType="+a.orderType+"&qualityPosition="+a.topList.goInitialSample.qualityCode,success:function(n){},fail:function(i){n("log",i," at pages/qing-f-c/inquiryManage/sampleInquiry/analyst/inquiry-details.vue:374")},complete:function(){}})},setCompareResult:function(){e.navigateTo({url:"./setSampleResult?quotationNumber="+a.number,success:function(n){},fail:function(i){n("log",i," at pages/qing-f-c/inquiryManage/sampleInquiry/analyst/inquiry-details.vue:383")},complete:function(){}})},updateCompareResult:function(){var i=JSON.stringify(a.topList.snalyseContrast);e.navigateTo({url:"./updateSampleResult?quotationNumber="+a.number+"&result="+i,success:function(n){},fail:function(i){n("log",i," at pages/qing-f-c/inquiryManage/sampleInquiry/analyst/inquiry-details.vue:393")},complete:function(){}})},toShowBig:function(i){e.navigateTo({url:"/pages/qing-f-c/pictureShow/pictureShow?url="+i,success:function(n){},fail:function(i){n("log",i," at pages/qing-f-c/inquiryManage/sampleInquiry/analyst/inquiry-details.vue:401")},complete:function(){}})},showModifyRecord:function(i){e.navigateTo({url:"/pages/qing-f-c/inquiryManage/sampleInquiry/common/sampleModifyRecord?analysisSampleCode="+i,success:function(n){},fail:function(i){n("log",i," at pages/qing-f-c/inquiryManage/sampleInquiry/analyst/inquiry-details.vue:409")},complete:function(){}})},submit:function(){e.navigateTo({url:"./analyst-input?number="+a.number+"&orderType="+a.orderType+"&qualityPosition="+a.topList.goInitialSample.qualityCode,success:function(n){},fail:function(){},complete:function(){}})}}};i.default=l}).call(this,t("0de9")["default"],t("6e42")["default"])},"99d9":function(n,i,t){"use strict";var e=t("7d2a"),a=t.n(e);a.a}},[["30b6","common/runtime","common/vendor"]]]);