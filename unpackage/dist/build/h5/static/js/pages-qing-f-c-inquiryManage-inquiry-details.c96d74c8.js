(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-qing-f-c-inquiryManage-inquiry-details"],{"17d3":function(t,e,i){"use strict";var n=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a,o,s=n(i("cb0f")),c=n(i("2cee")),r=n(i("3d9b3")),l=n(i("cedf")),d=n(i("f0a2")),u={components:{popupMe:s.default,uniIcon:c.default,baojiaList:r.default,baojiaListDirect:l.default,chanpinyaosu:d.default},data:function(){return{isMatch:!0,unMatch:"",closing:"",inquiryInfo:"",quotationList:[],directQuotion:[],isDoRefresh:!1,quotationNumber:"",pageNum:1,pageSize:10}},onShow:function(){var t=getCurrentPages(),e=t[t.length-1];1==e.data.isDoRefresh&&(e.data.isDoRefresh=!1,a.getInquiryInfo(o),a.getDeputyQuotation(),a.getDirectQuotation())},onLoad:function(t){a=this,o=t.inquiryNumber,this.getInquiryInfo(o),this.getDeputyQuotation(),a.getDirectQuotation()},methods:{getDirectQuotation:function(){var t={inquiryNumber:o},e=this.Api.directPriceList;this.myRequest(t,e,"get").then(function(t){console.log(t),0==t.data.status&&(a.directQuotion=t.data.data.list,console.log("直接报价",a.directQuotion))}).catch(function(t){wx.showToast({title:t.data.errMsg,icon:"none"})})},getInquiryInfo:function(t){var e={inquiryNumber:t},i=this.Api.deputyDetails;this.myRequest(e,i,"get").then(function(t){console.log(t),a.inquiryInfo=t.data.data,console.log(a.inquiryInfo)}).catch(function(t){wx.showToast({title:t.data.errMsg,icon:"none"})})},getDeputyQuotation:function(){var t={inquiryNumber:o,pageNum:a.pageNum,pageSize:a.pageSize},e=this.Api.buyerQuotation;this.myRequest(t,e,"get").then(function(t){console.log("报价单列表",t),a.quotationList=t.data.data.list,console.log(a.quotationList)}).catch(function(t){wx.showToast({title:t.data.errMsg,icon:"none"})})},tapClosing:function(){4!=a.inquiryInfo.inquiryStatusCode&&9!=a.inquiryInfo.inquiryStatusCode&&this.$refs.closingRef.show()},tapUnmatch:function(){this.$refs.unMatchRef.show()},getContent:function(t,e){switch(t){case"unMatchRef":this.unMatch=e,this.unMatchFunc(),console.log(this.unMatch);break;case"closingRef":this.closing=e,this.closingInquiry(),console.log(this.closing);break}},closingInquiry:function(t){var e={inquiryNumber:a.inquiryInfo.inquiryNumber,buyDeputyRemarks:a.closing},i=this.Api.buyDeputyClose;this.myRequest(e,i,"get").then(function(t){console.log(t),0==t.data.status&&(a.getInquiryInfo(o),a.getDeputyQuotation())}).catch(function(t){wx.showToast({title:t.data.errMsg,icon:"none"})})},toDetail:function(t){console.log(t),uni.navigateTo({url:"/pages/qing-f-c/inquiryManage/quotedPrice/quotedPrice?quoteNumber="+t})},backto:function(){uni.navigateBack({delta:1})},swtichMatch:function(t){this.isMatch=!this.isMatch},pushSellerQuote:function(){var t={inquiryNumber:a.inquiryInfo.inquiryNumber},e=this.Api.push;this.myRequest(t,e,"get").then(function(t){console.log(t),0==t.data.status&&(uni.showToast({title:"已推送",duration:1e3}),a.getInquiryInfo(o),a.getDeputyQuotation())}).catch(function(t){wx.showToast({title:t.data.errMsg,icon:"none"})})},closingQuote:function(t){var e={quotationNumber:a.quotationNumber,sellDeputyRemarks:a.closing},i=this.Api.buyDeputySuited;this.myRequest(e,i,"get").then(function(t){console.log(t),0==t.data.status&&(a.getInquiryInfo(o),a.getDeputyQuotation())}).catch(function(t){wx.showToast({title:t.data.errMsg,icon:"none"})})},unMatchFunc:function(t){var e={quotationNumber:a.quotationNumber,buyDeputyRemarks:a.unMatch},i=this.Api.buyDeputyUnsuited;this.myRequest(e,i,"get").then(function(t){console.log(t),0==t.data.status&&(a.getInquiryInfo(o),a.getDeputyQuotation())}).catch(function(t){wx.showToast({title:t.data.errMsg,icon:"none"})})},handleEvent:function(t){switch(console.log(t[0]),console.log(t[1]),a.quotationNumber=t[1],t[0]){case"sure":var e={quotationNumber:a.quotationNumber},i=this.Api.buyDeputySuited;this.myRequest(e,i,"get").then(function(t){console.log(t),0==t.data.status&&(a.getInquiryInfo(o),a.getDeputyQuotation())}).catch(function(t){wx.showToast({title:t.data.errMsg,icon:"none"})});break;case"unMatch":this.tapUnmatch();break;case"trade":var n={inquiryNumber:o,quotationNumber:a.quotationNumber},s=this.Api.buyDeputyAddOrder;this.myRequest(n,s,"get").then(function(t){console.log(t),0==t.data.status&&(a.getInquiryInfo(o),a.getDeputyQuotation())}).catch(function(t){wx.showToast({title:t.data.errMsg,icon:"none"})});break;case"closing":this.closing();break;case"setQuote":uni.navigateTo({url:"/pages/qing-f-c/inquiryManage/setQuotePrice/setQuotePrice?quotationNumber="+t[1],success:function(t){},fail:function(){},complete:function(){}});break}},submit:function(){uni.navigateTo({url:"/pages/qing-f-c/inquiryManage/directorQuotePrice?inquiryNumber="+o,success:function(t){},fail:function(){},complete:function(){}})},bindCancel:function(){}}};e.default=u},"1abe":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/* 弹出层形式的广告 */.uni-banner[data-v-88387f7c]{width:80%;position:fixed;left:10%;margin-top:%?-100?%;z-index:99;border-radius:%?10?%;background:#fff}.uni-mask[data-v-88387f7c]{position:fixed;top:0;left:0;z-index:50;width:100%;height:100%;background:rgba(0,0,0,.4)}.popupTitle[data-v-88387f7c]{text-align:center;padding:%?20?%;font-size:16px}.textarea-borer[data-v-88387f7c]{border:%?2?% solid #dcdcdc;height:%?140?%;width:%?500?%;border-radius:%?6?%;padding-right:%?20?%;background-color:#f7f7f7;font-size:14px}.newPart[data-v-88387f7c]{display:-webkit-box;display:-webkit-flex;display:flex;font-size:14px;width:%?170?%;height:%?60?%;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;border:%?1?% solid #ff6000;box-sizing:border-box;border-radius:%?30?%;color:#fff;background-color:#ff6000;margin-left:%?10?%}.newPartCancel[data-v-88387f7c]{display:-webkit-box;display:-webkit-flex;display:flex;font-size:14px;width:%?170?%;height:%?60?%;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;border:%?1?% solid #dcdcdc;box-sizing:border-box;border-radius:%?30?%;color:#000;background-color:#fff;margin-left:%?10?%}.iconClose[data-v-88387f7c]{position:absolute;top:%?2?%;right:%?2?%}.input-wrap[data-v-88387f7c]{margin:0 %?30?%;background-color:#f7f7f7;border-radius:%?10?%;height:%?80?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.input-class[data-v-88387f7c]{padding-left:%?10?%;background-color:#f7f7f7}.uni-list-cell[data-v-88387f7c]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start}.uni-list-cell-pd[data-v-88387f7c]{padding:%?22?% %?30?%}.uni-list[data-v-88387f7c]{background-color:#fff;position:relative;width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}',""])},"1b34":function(t,e,i){"use strict";var n=i("e599"),a=i.n(n);a.a},"1d55":function(t,e,i){"use strict";var n=i("df26"),a=i.n(n);a.a},2426:function(t,e,i){var n=i("b041");e=t.exports=i("2350")(!1),e.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-page-body[data-v-7d782ae0]{background-color:#f4f4f4}.login_top[data-v-7d782ae0]{height:%?338?%;width:%?750?%;box-sizing:border-box;background-image:url('+n(i("e412"))+");background-repeat:no-repeat;background-position:top;background-size:cover;text-align:center}.hand_box[data-v-7d782ae0]{margin:%?-200?% %?30?% 0 %?30?%;border-radius:%?6?%;line-height:1;background-color:#fff}.navTitle[data-v-7d782ae0]{color:#fff;position:fixed;top:%?60?%;left:%?280?%;font-size:16px;z-index:99}.wrap-box[data-v-7d782ae0]{padding-left:%?24?%;padding-right:%?20?%;font-size:13px;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.wrap-box-1[data-v-7d782ae0]{padding-right:%?20?%;font-size:13px;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.box-row[data-v-7d782ae0]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:%?72?%;width:100%;border-bottom:%?1?% solid #f3f3f3}.box-row .buttonStyle[data-v-7d782ae0]{color:#ff6000}.box-row .state-unMatch[data-v-7d782ae0]{color:#333}.box-row .tax_button[data-v-7d782ae0]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;color:#ff6000;width:%?124?%;height:%?44?%;background:rgba(255,96,0,.12);border-radius:%?4?%;font-size:12px}.box-row .title[data-v-7d782ae0]{font-size:14px;font-weight:700}.box-row .title .num[data-v-7d782ae0]{color:#ff6000}.box-content[data-v-7d782ae0]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;width:100%;font-size:13px;height:%?50?%}.box-content .title[data-v-7d782ae0]{color:#8d8d8d}.baojia-content[data-v-7d782ae0]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;width:100%;font-size:13px;height:%?69?%}.baojia-content .title[data-v-7d782ae0]{color:#8d8d8d}.baojia-content-spec[data-v-7d782ae0]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;width:100%;font-size:12px;height:%?69?%}.box-contentSmall[data-v-7d782ae0]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;width:100%;font-size:11px;height:%?50?%;color:#8d8d8d}.box-contentBottom[data-v-7d782ae0]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;width:100%;font-size:12px;height:%?50?%;color:#8d8d8d}.box-contentBottom .button[data-v-7d782ae0]{width:%?180?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;height:%?50?%}.box-contentBottom .created_time[data-v-7d782ae0]{font-size:11px}.baojia-contentBottom[data-v-7d782ae0]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;line-height:%?65?%;width:100%;font-size:12px;height:%?69?%;color:#8d8d8d}.baojia-contentBottom .baojia_button[data-v-7d782ae0]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:reverse;-webkit-flex-direction:row-reverse;flex-direction:row-reverse;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;width:%?300?%}.baojia-contentBottom .baojia_button .baojia_Clipboard[data-v-7d782ae0]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;background-color:#ff6000;color:#fff;line-height:%?52?%;width:%?136?%;height:%?52?%;background:#ff6000;border-radius:%?4?%}.baojia-contentBottom .baojia_time[data-v-7d782ae0]{font-size:10px}.baojia-bottom-spec[data-v-7d782ae0]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;line-height:%?65?%;width:100%;font-size:12px;height:%?69?%;color:#8d8d8d;border-bottom:%?1?% solid #f3f3f3}.baojia-bottom-spec .baojia_time[data-v-7d782ae0]{font-size:10px}.baojia-close[data-v-7d782ae0]{color:#999!important}.color_999[data-v-7d782ae0]{color:#999!important}.Clipboard[data-v-7d782ae0]{text-align:center;width:%?80?%;height:%?40?%;background-color:#ff6000;color:#fff;line-height:%?40?%;border-radius:%?20?%}.Clipboard_close[data-v-7d782ae0]{text-align:center;width:%?80?%;height:%?40?%;background-color:#999;color:#fff;line-height:%?40?%;border-radius:%?20?%}.details-box[data-v-7d782ae0]{margin:%?20?% %?30?% 0 %?30?%;border-radius:%?6?%;line-height:1;background-color:#fff}.baojia-box[data-v-7d782ae0]{margin:%?20?% %?30?% 0 %?30?%;border-radius:%?6?%;line-height:1;background-color:#fff}.details-title[data-v-7d782ae0]{padding-left:%?24?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:%?72?%;width:100%;font-size:14px;font-weight:700}.details-content[data-v-7d782ae0]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;width:100%;font-size:13px;height:%?56?%}.details-content .title[data-v-7d782ae0]{color:#999}.bingpai[data-v-7d782ae0]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.banner[data-v-7d782ae0]{background-color:#ff6000;width:100%;height:%?88?%;margin-top:%?30?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-justify-content:space-around;justify-content:space-around;font-size:14px;color:#fff}.banner .unSelect[data-v-7d782ae0]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;width:%?250?%;height:%?60?%}.banner .btn[data-v-7d782ae0]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;width:%?250?%;height:%?60?%;background:hsla(0,0%,100%,.2);border-radius:%?30?%}.fixed_bottom[data-v-7d782ae0]{width:100%;position:fixed;bottom:0;display:-webkit-box;display:-webkit-flex;display:flex;z-index:999}.btn_left[data-v-7d782ae0]{width:50%;background-color:#fff;color:#ff6000;border-radius:0;font-size:16px;line-height:%?88?%}.btn_right[data-v-7d782ae0]{width:50%;background-color:#ff6000;color:#fff;border-radius:0;font-size:16px;line-height:%?88?%}.btn_all[data-v-7d782ae0]{width:100%;background-color:#ff6000;color:#fff;border-radius:0;font-size:16px;line-height:%?88?%}.recentPrice[data-v-7d782ae0]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;color:#ff6000;font-size:13px;height:%?56?%}.no_baojia[data-v-7d782ae0]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:14px;color:#ccc;height:%?56?%;margin-top:%?100?%}.close_button[data-v-7d782ae0]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;color:#999;width:%?124?%;height:%?44?%;background:#f4f4f4;border-radius:%?4?%;font-size:12px}.publishWrapper[data-v-7d782ae0]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.publishWrapper uni-input[data-v-7d782ae0]{border:1px solid #c8c7cc;border-radius:%?40?%;padding-left:%?20?%;width:70%}.iconClose[data-v-7d782ae0]{position:absolute;top:%?2?%;right:%?2?%}.popTitle[data-v-7d782ae0]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.newPart[data-v-7d782ae0]{display:-webkit-box;display:-webkit-flex;display:flex;font-size:14px;width:%?170?%;height:%?60?%;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;border:%?1?% solid #ff6000;box-sizing:border-box;border-radius:%?30?%;color:#fff;background-color:#ff6000;margin-left:%?10?%}.newPartCancel[data-v-7d782ae0]{display:-webkit-box;display:-webkit-flex;display:flex;font-size:14px;width:%?170?%;height:%?60?%;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;border:%?1?% solid #dcdcdc;box-sizing:border-box;border-radius:%?30?%;color:#000;background-color:#fff;margin-left:%?10?%}.textarea_border[data-v-7d782ae0]{border:%?2?% solid #dcdcdc;height:%?160?%;width:%?450?%;border-radius:%?6?%;padding-right:%?20?%;background-color:#f7f7f7;font-size:14px}.textarea_holder[data-v-7d782ae0]{color:#b3b3b3b;font-size:13px}body.?%PAGE?%[data-v-7d782ae0]{background-color:#f4f4f4}",""])},5468:function(t,e,i){"use strict";i.r(e);var n=i("beb6"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);e["default"]=a.a},a040:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-view",{staticClass:"login_top"},[i("v-uni-view",{staticClass:"backto",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.backto.apply(void 0,arguments)}}},[t._v("返回")]),i("veiw",{staticClass:"navTitle"},[t._v("询价单详情")])],1),i("v-uni-view",{staticClass:"hand_box"},[i("v-uni-view",{staticClass:"wrap-box"},[i("v-uni-view",{staticClass:"box-row"},[i("v-uni-view",[t._v("询价单号: "+t._s(t.inquiryInfo.inquiryNumber||""))]),i("v-uni-view",{staticClass:"buttonStyle"},[t._v(t._s(t.inquiryInfo.inquiryStatus||""))])],1),i("v-uni-view",{staticClass:"box-content"},[i("v-uni-text",{staticClass:"title"},[t._v("买帮办：")]),i("v-uni-text",[t._v(t._s(t.inquiryInfo.buyDeputyRealName||""))])],1),i("v-uni-view",{staticClass:"box-content"},[i("v-uni-text",{staticClass:"title"},[t._v("买家：")]),i("v-uni-text",[t._v(t._s(t.inquiryInfo.companyName||""))])],1),i("v-uni-view",{staticClass:"box-contentSmall"},[i("v-uni-text",[t._v("询价类型：")]),i("v-uni-text",[t._v(t._s(1==t.inquiryInfo.inquiryTypeCode?"常规询价":"找样询价"))])],1),i("v-uni-view",{staticClass:"box-contentBottom"},[i("v-uni-view",{staticClass:"created_time"},[i("v-uni-text",[t._v("建立时间：")]),i("v-uni-text",[t._v(t._s(t.inquiryInfo.inquiryCreateTime||""))])],1),i("v-uni-view",{staticClass:"button"},[i("v-uni-view",{staticClass:"Clipboard"},[t._v("复制")]),i("v-uni-view",{class:4!=t.inquiryInfo.inquiryStatusCode&&9!=t.inquiryInfo.inquiryStatusCode?"Clipboard":"Clipboard_close",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.tapClosing.apply(void 0,arguments)}}},[t._v("关闭")])],1)],1)],1)],1),i("popupMe",{ref:"unMatchRef",attrs:{title:"不匹配原因"},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.getContent("unMatchRef",e)}}}),i("popupMe",{ref:"closingRef",attrs:{title:"关闭原因"},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.getContent("closingRef",e)}}}),i("v-uni-view",{staticClass:"details-box"},[i("v-uni-view",{staticClass:"wrap-box-1"},[i("v-uni-view",{staticClass:"details-title"},[t._v("品名（别名）："+t._s(t.inquiryInfo.tradeName||""))]),i("chanpinyaosu",{attrs:{inquiryInfo:t.inquiryInfo}}),i("v-uni-view",{staticClass:"recentPrice"},[i("v-uni-navigator",{attrs:{url:"/pages/qing-f-c/inquiryManage/recentPrice/recentPrice"}},[t._v("查看近期价格>>")])],1)],1)],1),i("v-uni-view",{staticClass:"banner"},[i("v-uni-view",{class:t.isMatch?"unSelect":"btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.swtichMatch(1)}}},[t._v("直接报价"),i("v-uni-view",[i("v-uni-text",{staticClass:"fs_12"},[t._v("（"+t._s(t.directQuotion.length)+"）")])],1)],1),i("v-uni-view",{class:t.isMatch?"btn":"unSelect",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.swtichMatch(2)}}},[t._v("卖帮办报价"),i("v-uni-view",[i("v-uni-text",{staticClass:"fs_12"},[t._v("（"+t._s(t.quotationList.length)+"）")])],1)],1)],1),t.isMatch?t._e():i("v-uni-view",[0==t.directQuotion.length?i("v-uni-view",{staticClass:"no_baojia"},[t._v("暂无相关报价信息")]):t._e(),t._l(t.directQuotion,function(e,n){return[i("v-uni-view",{key:n+"_0",staticClass:"baojia-box"},[i("baojiaListDirect",{attrs:{item:e,isDisplayButton:!(4==t.inquiryInfo.inquiryStatusCode||9==t.inquiryInfo.inquiryStatusCode)},on:{handleEvent:function(e){arguments[0]=e=t.$handleEvent(e),t.handleEvent.apply(void 0,arguments)}}})],1)]}),i("v-uni-view",{staticClass:"placeholder-view"}),4!=t.inquiryInfo.inquiryStatusCode&&9!=t.inquiryInfo.inquiryStatusCode?i("v-uni-view",{staticClass:"fixed_bottom box_shadow_btn"},[i("v-uni-button",{staticClass:"btn_all",attrs:{"hover-class":"none"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.submit.apply(void 0,arguments)}}},[t._v("直接报价")])],1):t._e()],2),t.isMatch?i("v-uni-view",[0==t.quotationList.length?i("v-uni-view",{staticClass:"no_baojia"},[t._v("暂无相关报价信息")]):t._e(),t._l(t.quotationList,function(e,n){return[i("v-uni-view",{key:n+"_0",staticClass:"baojia-box",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.toDetail(e.quotationNumber)}}},[i("baojiaList",{attrs:{item:e,isDisplayButton:!(4==t.inquiryInfo.inquiryStatusCode||9==t.inquiryInfo.inquiryStatusCode)},on:{handleEvent:function(e){arguments[0]=e=t.$handleEvent(e),t.handleEvent.apply(void 0,arguments)}}})],1)]}),i("v-uni-view",{staticClass:"placeholder-view"}),2==t.inquiryInfo.inquiryStatusCode?i("v-uni-view",{staticClass:"fixed_bottom box_shadow_btn"},[0==t.quotationList.length?i("v-uni-button",{staticClass:"btn_all",attrs:{"hover-class":"none"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.pushSellerQuote.apply(void 0,arguments)}}},[t._v("推送卖帮办报价")]):t._e()],1):t._e(),3==t.inquiryInfo.inquiryStatusCode?i("v-uni-view",{staticClass:"fixed_bottom box_shadow_btn"},[i("v-uni-button",{staticClass:"btn_all",attrs:{"hover-class":"none"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.bindCancel.apply(void 0,arguments)}}},[t._v("催单报价")])],1):t._e()],2):t._e()],1)},a=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return a})},ade0:function(t,e,i){"use strict";i.r(e);var n=i("a040"),a=i("f2b0");for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);i("1d55");var s=i("2877"),c=Object(s["a"])(a["default"],n["a"],n["b"],!1,null,"7d782ae0",null);e["default"]=c.exports},beb6:function(t,e,i){"use strict";var n=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("2cee")),o={components:{uniIcon:a.default},props:{title:{type:String,default:"请输入"}},data:function(){return{items:[{id:"USA",label:"价格太高"},{id:"CHN",label:"布面不干净"},{id:"BRA",label:"买家不满意"}],current:0,bannerShow:!1,content:""}},methods:{radioChange:function(t){for(var e=0;e<this.items.length;e++)if(this.items[e].id===t.target.id){this.current=e,this.content=this.items[e].label;break}},closeBanner:function(){this.bannerShow=!1},show:function(){this.bannerShow=!0},confirmBanner:function(){""!==this.content?this.$emit("input",this.content):this.$emit("input",this.items[0].name),this.bannerShow=!1}}};e.default=o},cb0f:function(t,e,i){"use strict";i.r(e);var n=i("e0ce"),a=i("5468");for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);i("1b34");var s=i("2877"),c=Object(s["a"])(a["default"],n["a"],n["b"],!1,null,"88387f7c",null);e["default"]=c.exports},df26:function(t,e,i){var n=i("2426");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("34d486f6",n,!0,{sourceMap:!1,shadowMode:!1})},e0ce:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[t.bannerShow?i("v-uni-view",{staticClass:"uni-banner"},[i("v-uni-view",{staticClass:"popupTitle",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.closeBanner.apply(void 0,arguments)}}},[i("v-uni-text",[t._v(t._s(t.title))]),i("veiw",{staticClass:"iconClose",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.closeBanner.apply(void 0,arguments)}}},[i("uniIcon",{attrs:{type:"clear",size:"24",color:"#b3b3b3"}})],1)],1),i("v-uni-view",{staticClass:"input-wrap"},[i("v-uni-input",{staticClass:"input-class",attrs:{placeholder:"请输入","placeholder-style":"color: #b3b3b3;font-size: 13px;"},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}})],1),i("v-uni-view",{staticClass:"flex_sa mt_20 mb_20"},[i("v-uni-view",{staticClass:"newPartCancel",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.closeBanner.apply(void 0,arguments)}}},[t._v("取消")]),i("v-uni-view",{staticClass:"newPart",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.confirmBanner.apply(void 0,arguments)}}},[t._v("确定")])],1)],1):t._e(),t.bannerShow?i("v-uni-view",{staticClass:"uni-mask"}):t._e()],1)},a=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return a})},e599:function(t,e,i){var n=i("1abe");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("ebae3f88",n,!0,{sourceMap:!1,shadowMode:!1})},f2b0:function(t,e,i){"use strict";i.r(e);var n=i("17d3"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);e["default"]=a.a}}]);