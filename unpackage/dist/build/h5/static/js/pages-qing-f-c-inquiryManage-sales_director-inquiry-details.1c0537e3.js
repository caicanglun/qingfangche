(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-qing-f-c-inquiryManage-sales_director-inquiry-details"],{"1abe":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/* 弹出层形式的广告 */.uni-banner[data-v-88387f7c]{width:80%;position:fixed;left:10%;margin-top:%?-100?%;z-index:99;border-radius:%?10?%;background:#fff}.uni-mask[data-v-88387f7c]{position:fixed;top:0;left:0;z-index:50;width:100%;height:100%;background:rgba(0,0,0,.4)}.popupTitle[data-v-88387f7c]{text-align:center;padding:%?20?%;font-size:16px}.textarea-borer[data-v-88387f7c]{border:%?2?% solid #dcdcdc;height:%?140?%;width:%?500?%;border-radius:%?6?%;padding-right:%?20?%;background-color:#f7f7f7;font-size:14px}.newPart[data-v-88387f7c]{display:-webkit-box;display:-webkit-flex;display:flex;font-size:14px;width:%?170?%;height:%?60?%;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;border:%?1?% solid #ff6000;box-sizing:border-box;border-radius:%?30?%;color:#fff;background-color:#ff6000;margin-left:%?10?%}.newPartCancel[data-v-88387f7c]{display:-webkit-box;display:-webkit-flex;display:flex;font-size:14px;width:%?170?%;height:%?60?%;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;border:%?1?% solid #dcdcdc;box-sizing:border-box;border-radius:%?30?%;color:#000;background-color:#fff;margin-left:%?10?%}.iconClose[data-v-88387f7c]{position:absolute;top:%?2?%;right:%?2?%}.input-wrap[data-v-88387f7c]{margin:0 %?30?%;background-color:#f7f7f7;border-radius:%?10?%;height:%?80?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.input-class[data-v-88387f7c]{padding-left:%?10?%;background-color:#f7f7f7}.uni-list-cell[data-v-88387f7c]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start}.uni-list-cell-pd[data-v-88387f7c]{padding:%?22?% %?30?%}.uni-list[data-v-88387f7c]{background-color:#fff;position:relative;width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}',""])},"1b08":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-view",{staticClass:"login_top"},[i("v-uni-view",{staticClass:"backto",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.backto.apply(void 0,arguments)}}},[t._v("返回")]),i("veiw",{staticClass:"navTitle"},[t._v("询价单详情")])],1),i("v-uni-view",{staticClass:"hand_box"},[i("v-uni-view",{staticClass:"wrap-box"},[i("v-uni-view",{staticClass:"box-row"},[i("v-uni-view",[t._v("询价单号: "+t._s(t.inquiryInfo.inquiryNumber||""))]),i("v-uni-view",{staticClass:"buttonStyle"},[t._v(t._s(t.inquiryInfo.inquiryStatus||""))])],1),i("v-uni-view",{staticClass:"box-content"},[i("v-uni-text",{staticClass:"title"},[t._v("买帮办：")]),i("v-uni-text",[t._v(t._s(t.inquiryInfo.buyDeputyRealName||""))])],1),i("v-uni-view",{staticClass:"box-content"},[i("v-uni-text",{staticClass:"title"},[t._v("买家：")]),i("v-uni-text",[t._v(t._s(t.inquiryInfo.companyName||""))])],1),i("v-uni-view",{staticClass:"box-contentSmall"},[i("v-uni-text",[t._v("询价类型：")]),i("v-uni-text",[t._v(t._s(1==t.inquiryInfo.inquiryTypeCode?"常规询价":"找样询价"))])],1),i("v-uni-view",{staticClass:"box-contentBottom"},[i("v-uni-view",[i("v-uni-text",[t._v("建立时间：")]),i("v-uni-text",[t._v(t._s(t.inquiryInfo.inquiryCreateTime||""))])],1)],1)],1)],1),i("popupMe",{ref:"closingRef",attrs:{title:"关闭原因"},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.getContent("closingRef",e)}}}),i("v-uni-view",{staticClass:"details-box"},[i("v-uni-view",{staticClass:"wrap-box-1"},[i("v-uni-view",{staticClass:"details-title"},[t._v("品名（别名）："+t._s(t.inquiryInfo.tradeName||""))]),2==t.inquiryInfo.inquiryTypeCode?i("v-uni-view",{staticClass:"details-title",staticStyle:{height:"60upx"}},[t._v("原样分析数据")]):t._e(),i("chanpinyaosu",{attrs:{inquiryInfo:t.inquiryInfo}})],1)],1),t.quotationList.length>0?i("v-uni-view",{staticClass:"banner"},[t._v("报价记录"),i("v-uni-text",{staticClass:"pl_20"},[t._v("("+t._s(t.quotationList.length)+")")])],1):t._e(),t._l(t.quotationList,function(e,a){return[i("v-uni-view",{key:a+"_0",staticClass:"baojia-box",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.toDetail(e.quotationNumber)}}},[i("baojiaList",{attrs:{item:e,isSaleDirector:!0},on:{handleEvent:function(e){arguments[0]=e=t.$handleEvent(e),t.handleEvent.apply(void 0,arguments)}}})],1)]}),i("v-uni-view",{staticClass:"placeholder-view"}),t.quotationInfo.hasSalesDirectorQuotation||9==t.quotationInfo.quotationStatus||5==t.quotationInfo.quotationStatus||"直接报价"==t.quotationInfo.sellDeputyRealName?t._e():i("v-uni-view",{staticClass:"fixed_bottom box_shadow_btn"},[i("v-uni-button",{staticClass:"btn_left",attrs:{"hover-class":"none"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.modifyQuote.apply(void 0,arguments)}}},[t._v("修改报价")]),i("v-uni-button",{staticClass:"btn_right",attrs:{"hover-class":"none"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.submit.apply(void 0,arguments)}}},[t._v("确定并推送")])],1)],2)},n=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return n})},"1b34":function(t,e,i){"use strict";var a=i("e599"),n=i.n(a);n.a},"1b82":function(t,e,i){"use strict";i.r(e);var a=i("1b08"),n=i("ebc2");for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);i("2dd4");var s=i("2877"),c=Object(s["a"])(n["default"],a["a"],a["b"],!1,null,"21a98e1a",null);e["default"]=c.exports},"2dd4":function(t,e,i){"use strict";var a=i("e0d5"),n=i.n(a);n.a},5468:function(t,e,i){"use strict";i.r(e);var a=i("beb6"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);e["default"]=n.a},6682:function(t,e,i){var a=i("85ca");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("0665b287",a,!0,{sourceMap:!1,shadowMode:!1})},"80b0":function(t,e,i){"use strict";var a=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n,o,s=a(i("a7de")),c=a(i("f0a2")),l=a(i("cb0f")),r={components:{baojiaList:s.default,chanpinyaosu:c.default,popupMe:l.default},data:function(){return{isMatch:!0,unMatch:"",closing:"",inquiryInfo:"",pageNum:1,pageSize:10,quotationList:[],isDoRefresh:!1,quotationNumber:""}},onLoad:function(t){n=this,o=t.inquiryNumber,this.getInquiryInfo(o),this.getDeputyQuotation()},onShow:function(){var t=getCurrentPages(),e=t[t.length-1];1==e.data.isDoRefresh&&(e.data.isDoRefresh=!1,this.getInquiryInfo(o),this.getDeputyQuotation())},methods:{backto:function(){uni.navigateBack({delta:1})},swtichMatch:function(t){this.isMatch=!this.isMatch},getInquiryInfo:function(t){var e={inquiryNumber:t},i=this.Api.deputyDetails;this.myRequest(e,i,"get").then(function(t){console.log(t),n.inquiryInfo=t.data.data,console.log(n.inquiryInfo)}).catch(function(t){wx.showToast({title:t.data.errMsg,icon:"none"})})},getDeputyQuotation:function(){var t={inquiryNumber:o,pageNum:n.pageNum,pageSize:n.pageSize},e=this.Api.deputyQuotation;this.myRequest(t,e,"get").then(function(t){console.log(t),n.quotationList=t.data.data.list,console.log(n.quotationList)}).catch(function(t){wx.showToast({title:t.data.errMsg,icon:"none"})})},toDetail:function(t){var e=t;console.log("id",t),uni.navigateTo({url:"/pages/qing-f-c/inquiryManage/sales_director/quotation-detail?quoteNumber="+e,success:function(t){},fail:function(){},complete:function(){}})},closingQuote:function(t){var e={quotationNumber:n.quotationNumber,sellDeputyRemarks:n.closing},i=this.Api.sellDeputyClose;this.myRequest(e,i,"get").then(function(t){console.log(t),0==t.data.status&&(n.getInquiryInfo(o),n.getDeputyQuotation())}).catch(function(t){wx.showToast({title:t.data.errMsg,icon:"none"})})},handleEvent:function(t){switch(console.log(t[0]),console.log(t[1]),t[0]){case"closing":n.quotationNumber=t[1],this.tapClosing();break;case"verify":uni.navigateTo({url:"/pages/qing-f-c/inquiryManage/sales_director/quotation-detail?quoteNumber="+t[1],success:function(t){},fail:function(){},complete:function(){}});break}},tapClosing:function(){this.$refs.closingRef.show()},tapUnmatch:function(){this.$refs.unMatchRef.show()},getContent:function(t,e){switch(t){case"unMatchRef":this.unMatch=e,console.log(this.unMatch);break;case"closingRef":this.closing=e,this.closingQuote(),console.log(this.closing);break}},submit:function(){uni.navigateTo({url:"/pages/qing-f-c/inquiryManage/sellDeputy/startQuote?inquiryNumber="+o,success:function(t){},fail:function(){},complete:function(){}})}}};e.default=r},"85ca":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.baojiaList-box[data-v-39bbab5e]{padding-left:%?24?%;padding-right:%?20?%;font-size:13px;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.baojia-row[data-v-39bbab5e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:%?72?%;width:100%;border-bottom:%?1?% solid #f3f3f3}.baojia-row .buttonStyle[data-v-39bbab5e]{color:#ff6000}.baojia-row .state-unMatch[data-v-39bbab5e]{color:#333}.baojia-row .tax_button[data-v-39bbab5e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;color:#ff6000;width:%?116?%;height:%?44?%;background:rgba(255,96,0,.12);border-radius:%?4?%;font-size:12px}.baojia-row .title[data-v-39bbab5e]{font-size:14px;font-weight:700}.baojia-row .title .num[data-v-39bbab5e]{color:#ff6000}.baojia-content[data-v-39bbab5e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;width:100%;font-size:13px;height:%?56?%}.baojia-content .title[data-v-39bbab5e]{color:#8d8d8d}.baojia-content-spec[data-v-39bbab5e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;width:100%;font-size:12px;height:%?69?%}.box-contentSmall[data-v-39bbab5e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;width:100%;font-size:11px;height:%?50?%;color:#8d8d8d}.baojia-contentBottom[data-v-39bbab5e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;line-height:%?65?%;width:100%;font-size:12px;height:%?69?%;color:#8d8d8d}.baojia-contentBottom .baojia_button[data-v-39bbab5e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:reverse;-webkit-flex-direction:row-reverse;flex-direction:row-reverse;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;width:%?300?%}.baojia-contentBottom .baojia_button .baojia_Clipboard[data-v-39bbab5e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;background-color:#ff6000;color:#fff;line-height:%?52?%;width:%?136?%;font-size:13px;height:%?52?%;background:#ff6000;border-radius:%?4?%}.box-row[data-v-39bbab5e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:%?72?%;width:100%;border-bottom:%?1?% solid #f3f3f3}.box-row .buttonStyle[data-v-39bbab5e]{color:#ff6000}.box-row .state-unMatch[data-v-39bbab5e]{color:#333}.box-row .tax_button[data-v-39bbab5e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;color:#ff6000;width:%?116?%;height:%?44?%;background:rgba(255,96,0,.12);border-radius:%?4?%;font-size:11px}.box-row .title[data-v-39bbab5e]{font-size:14px;font-weight:700}.box-row .title .num[data-v-39bbab5e]{color:#ff6000}.tax_button_closing[data-v-39bbab5e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;color:#999;width:%?116?%;height:%?44?%;background:hsla(0,0%,60%,.12);border-radius:%?4?%;font-size:11px}',""])},a7de:function(t,e,i){"use strict";i.r(e);var a=i("b844"),n=i("eb0d");for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);i("a93a");var s=i("2877"),c=Object(s["a"])(n["default"],a["a"],a["b"],!1,null,"39bbab5e",null);e["default"]=c.exports},a93a:function(t,e,i){"use strict";var a=i("6682"),n=i.n(a);n.a},b844:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[t.status04.includes(t.item.quotationStatusCode)?i("v-uni-view",{staticClass:"baojiaList-box"},[i("v-uni-view",{staticClass:"baojia-row"},[i("v-uni-view",{staticClass:"title"},[t._v("报价："),i("v-uni-text",{staticClass:"color_FF6000"},[t._v(t._s(t.item.unitPrice||""))])],1),i("v-uni-view",{staticClass:"tax_button"},[t._v(t._s(t.item.isIcash||""))]),i("v-uni-view",{staticClass:"tax_button"},[t._v(t._s(t.item.isPlusDuty||""))]),i("v-uni-view",{class:5==t.item.quotationStatus?"state-unMatch":"buttonStyle"},[t._v(t._s(t.item.quotationStatus||""))])],1),i("v-uni-view",{staticClass:"baojia-content"},[i("v-uni-text",{staticClass:"title"},[t._v("卖帮办：")]),i("v-uni-text",[t._v(t._s(t.item.sellDeputyRealName||""))])],1),i("v-uni-view",{staticClass:"baojia-content"},[i("v-uni-text",{staticClass:"title"},[t._v("卖家：")]),i("v-uni-text",[t._v(t._s(t.item.companyCode||""))])],1),i("v-uni-view",{staticClass:"baojia-contentBottom"},[i("v-uni-view",{staticClass:"baojia_time"},[i("v-uni-text",[t._v("报价时间：")]),i("v-uni-text",[t._v(t._s(t.item.quotationCreateTime||""))])],1),i("v-uni-view",{staticClass:"baojia_button"},[0!=t.item.quotationStatusCode||t.isSaleDirector?t._e():i("v-uni-view",{staticClass:"baojia_Clipboard",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.handleEvent("closing",t.item.quotationNumber)}}},[t._v("关闭")]),0==t.item.quotationStatusCode&&t.isSaleDirector?i("v-uni-view",{staticClass:"baojia_Clipboard",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.handleEvent("verify",t.item.quotationNumber)}}},[t._v("去审核")]):t._e()],1)],1)],1):t._e(),t.status02.includes(t.item.quotationStatusCode)?i("v-uni-view",{staticClass:"baojiaList-box"},[i("v-uni-view",{staticClass:"unmatch-wrap"},[i("v-uni-view",{staticClass:"box-row"},[i("v-uni-view",{staticClass:"title"},[t._v("报价："),i("v-uni-text",{staticClass:"color_FF6000"},[t._v(t._s(t.item.unitPrice||""))])],1),i("v-uni-view",{staticClass:"tax_button"},[t._v(t._s(t.item.isIcash||""))]),i("v-uni-view",{staticClass:"tax_button"},[t._v(t._s(t.item.isPlusDuty||""))]),i("v-uni-view",{staticClass:"state-unMatch"},[t._v(t._s(t.item.quotationStatus||""))])],1),i("v-uni-view",{staticClass:"baojia-content"},[i("v-uni-text",{staticClass:"title"},[t._v("卖帮办：")]),i("v-uni-text",[t._v(t._s(t.item.sellDeputyRealName||""))])],1),i("v-uni-view",{staticClass:"baojia-content"},[i("v-uni-text",{staticClass:"title"},[t._v("卖家：")]),i("v-uni-text",[t._v(t._s(t.item.companyCode||""))])],1),i("v-uni-view",{staticClass:"baojia-bottom-spec"},[i("v-uni-view",{staticClass:"baojia_time"},[i("v-uni-text",[t._v("报价时间：")]),i("v-uni-text",[t._v(t._s(t.item.quotationCreateTime||""))])],1)],1),i("v-uni-view",{staticClass:"baojia-content-spec"},[i("v-uni-text",[t._v(t._s(t.item.buyDeputyRemarks||""))])],1)],1)],1):t._e(),t.status03.includes(t.item.quotationStatusCode)?i("v-uni-view",{staticClass:"baojia-box baojia-close"},[i("v-uni-view",{staticClass:"closing-wrap-box"},[i("v-uni-view",{staticClass:"box-row"},[i("v-uni-view",{staticClass:"title"},[t._v("报价："),i("v-uni-text",{staticClass:"num color_999"},[t._v("2.5元/米")])],1),i("v-uni-view",{staticClass:"tax_button_closing"},[t._v(t._s(t.item.isIcash||""))]),i("v-uni-view",{staticClass:"tax_button_closing"},[t._v(t._s(t.item.isPlusDuty||""))]),i("v-uni-view",{staticClass:"state-unMatch color_999 fs_13"},[t._v(t._s(t.item.quotationStatus||""))])],1),i("v-uni-view",{staticClass:"baojia-content"},[i("v-uni-text",{staticClass:"title"},[t._v("卖帮办：")]),i("v-uni-text",[t._v(t._s(t.item.sellDeputyRealName||""))])],1),i("v-uni-view",{staticClass:"baojia-content"},[i("v-uni-text",{staticClass:"title"},[t._v("卖家：")]),i("v-uni-text",[t._v(t._s(t.item.companyCode||""))])],1),i("v-uni-view",{staticClass:"box-contentSmall"},[i("v-uni-view",{staticClass:"baojia_time"},[i("v-uni-text",[t._v("报价时间：")]),i("v-uni-text",[t._v(t._s(t.item.quotationCreateTime||""))])],1)],1),i("v-uni-view",{staticClass:"baojia-content-spec"},[i("v-uni-text",[t._v(t._s(t.item.sellDeputyRemarks||""))])],1)],1)],1):t._e()],1)},n=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return n})},bdd7:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={props:{item:{type:Object},isSaleDirector:{type:Boolean,default:!1}},data:function(){return{status02:[5],status03:[9],status04:[0,1,2,3,4]}},methods:{handleEvent:function(t,e){this.$emit("handleEvent",[t,e])}}};e.default=a},beb6:function(t,e,i){"use strict";var a=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("2cee")),o={components:{uniIcon:n.default},props:{title:{type:String,default:"请输入"}},data:function(){return{items:[{id:"USA",label:"价格太高"},{id:"CHN",label:"布面不干净"},{id:"BRA",label:"买家不满意"}],current:0,bannerShow:!1,content:""}},methods:{radioChange:function(t){for(var e=0;e<this.items.length;e++)if(this.items[e].id===t.target.id){this.current=e,this.content=this.items[e].label;break}},closeBanner:function(){this.bannerShow=!1},show:function(){this.bannerShow=!0},confirmBanner:function(){""!==this.content?this.$emit("input",this.content):this.$emit("input",this.items[0].name),this.bannerShow=!1}}};e.default=o},cb0f:function(t,e,i){"use strict";i.r(e);var a=i("e0ce"),n=i("5468");for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);i("1b34");var s=i("2877"),c=Object(s["a"])(n["default"],a["a"],a["b"],!1,null,"88387f7c",null);e["default"]=c.exports},cf15:function(t,e,i){var a=i("b041");e=t.exports=i("2350")(!1),e.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-page-body[data-v-21a98e1a]{background-color:#f4f4f4}.login_top[data-v-21a98e1a]{height:%?338?%;width:%?750?%;box-sizing:border-box;background-image:url('+a(i("e412"))+");background-repeat:no-repeat;background-position:top;background-size:cover;text-align:center}.hand_box[data-v-21a98e1a]{margin:%?-200?% %?30?% 0 %?30?%;border-radius:%?6?%;line-height:1;background-color:#fff}.navTitle[data-v-21a98e1a]{color:#fff;position:fixed;top:%?60?%;left:%?280?%;font-size:16px;z-index:99}.wrap-box[data-v-21a98e1a]{padding-left:%?24?%;padding-right:%?20?%;font-size:13px;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.wrap-box-1[data-v-21a98e1a]{padding-right:%?20?%;font-size:13px;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.box-row[data-v-21a98e1a]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:%?72?%;width:100%;border-bottom:%?1?% solid #f3f3f3}.box-row .buttonStyle[data-v-21a98e1a]{color:#ff6000}.box-row .state-unMatch[data-v-21a98e1a]{color:#333}.box-row .tax_button[data-v-21a98e1a]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;color:#ff6000;width:%?124?%;height:%?44?%;background:rgba(255,96,0,.12);border-radius:%?4?%;font-size:12px}.box-row .title[data-v-21a98e1a]{font-size:14px;font-weight:700}.box-row .title .num[data-v-21a98e1a]{color:#ff6000}.box-content[data-v-21a98e1a]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;width:100%;font-size:13px;height:%?50?%}.box-content .title[data-v-21a98e1a]{color:#8d8d8d}.baojia-content[data-v-21a98e1a]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;width:100%;font-size:13px;height:%?69?%}.baojia-content .title[data-v-21a98e1a]{color:#8d8d8d}.baojia-content-spec[data-v-21a98e1a]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;width:100%;font-size:12px;height:%?69?%}.box-contentSmall[data-v-21a98e1a]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;width:100%;font-size:12px;height:%?50?%;color:#8d8d8d}.box-contentBottom[data-v-21a98e1a]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;width:100%;font-size:12px;height:%?50?%;color:#8d8d8d}.box-contentBottom .button[data-v-21a98e1a]{width:%?180?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;height:%?50?%}.baojia-contentBottom[data-v-21a98e1a]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;line-height:%?65?%;width:100%;font-size:12px;height:%?69?%;color:#8d8d8d}.baojia-contentBottom .baojia_button[data-v-21a98e1a]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:reverse;-webkit-flex-direction:row-reverse;flex-direction:row-reverse;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;width:%?300?%}.baojia-contentBottom .baojia_button .baojia_Clipboard[data-v-21a98e1a]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;background-color:#ff6000;color:#fff;line-height:%?52?%;width:%?136?%;height:%?52?%;background:#ff6000;border-radius:%?4?%}.baojia-contentBottom .baojia_time[data-v-21a98e1a]{font-size:10px}.baojia-bottom-spec[data-v-21a98e1a]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;line-height:%?65?%;width:100%;font-size:12px;height:%?69?%;color:#8d8d8d;border-bottom:%?1?% solid #f3f3f3}.baojia-bottom-spec .baojia_time[data-v-21a98e1a]{font-size:10px}.baojia-close[data-v-21a98e1a]{color:#999!important}.color_999[data-v-21a98e1a]{color:#999!important}.Clipboard[data-v-21a98e1a]{text-align:center;width:%?80?%;height:%?40?%;background-color:#ff6000;color:#fff;line-height:%?40?%;border-radius:%?20?%}.details-box[data-v-21a98e1a]{margin:%?20?% %?30?% 0 %?30?%;border-radius:%?6?%;line-height:1;background-color:#fff}.baojia-box[data-v-21a98e1a]{margin:%?20?% %?30?% 0 %?30?%;border-radius:%?6?%;line-height:1;background-color:#fff}.details-title[data-v-21a98e1a]{padding-left:%?24?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:%?65?%;width:100%;font-size:15px;font-weight:700}.details-content[data-v-21a98e1a]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;width:100%;font-size:13px;height:%?56?%}.details-content .title[data-v-21a98e1a]{color:#999}.bingpai[data-v-21a98e1a]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.banner[data-v-21a98e1a]{background-color:#ff6000;width:100%;height:%?68?%;margin-top:%?30?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-justify-content:space-around;justify-content:space-around;font-size:14px;color:#fff}.banner .btn[data-v-21a98e1a]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;width:%?250?%;height:%?60?%;background:hsla(0,0%,100%,.2);border-radius:%?30?%}.fixed_bottom[data-v-21a98e1a]{width:100%;position:fixed;bottom:0;display:-webkit-box;display:-webkit-flex;display:flex;z-index:999}.btn_left[data-v-21a98e1a]{width:50%;background-color:#fff;color:#ff6000;border-radius:0;font-size:16px;line-height:%?88?%}.btn_all[data-v-21a98e1a]{width:100%;background-color:#ff6000;color:#fff;border-radius:0;font-size:16px;line-height:%?88?%}.btn_right[data-v-21a98e1a]{width:50%;background-color:#ff6000;color:#fff;border-radius:0;font-size:16px;line-height:%?88?%}.recentPrice[data-v-21a98e1a]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;color:#ff6000;font-size:13px;height:%?56?%}.no_baojia[data-v-21a98e1a]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:14px;color:#ccc;height:%?56?%;margin-top:%?100?%}.close_button[data-v-21a98e1a]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;color:#999;width:%?124?%;height:%?44?%;background:#f4f4f4;border-radius:%?4?%;font-size:12px}.banner[data-v-21a98e1a]{margin-top:%?20?%;width:100%;height:%?88?%;background:#ff6000;box-shadow:0 4px 8px 0 rgba(0,0,0,.05);display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:14px;color:#fff}body.?%PAGE?%[data-v-21a98e1a]{background-color:#f4f4f4}",""])},e0ce:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[t.bannerShow?i("v-uni-view",{staticClass:"uni-banner"},[i("v-uni-view",{staticClass:"popupTitle",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.closeBanner.apply(void 0,arguments)}}},[i("v-uni-text",[t._v(t._s(t.title))]),i("veiw",{staticClass:"iconClose",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.closeBanner.apply(void 0,arguments)}}},[i("uniIcon",{attrs:{type:"clear",size:"24",color:"#b3b3b3"}})],1)],1),i("v-uni-view",{staticClass:"input-wrap"},[i("v-uni-input",{staticClass:"input-class",attrs:{placeholder:"请输入","placeholder-style":"color: #b3b3b3;font-size: 13px;"},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}})],1),i("v-uni-view",{staticClass:"flex_sa mt_20 mb_20"},[i("v-uni-view",{staticClass:"newPartCancel",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.closeBanner.apply(void 0,arguments)}}},[t._v("取消")]),i("v-uni-view",{staticClass:"newPart",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.confirmBanner.apply(void 0,arguments)}}},[t._v("确定")])],1)],1):t._e(),t.bannerShow?i("v-uni-view",{staticClass:"uni-mask"}):t._e()],1)},n=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return n})},e0d5:function(t,e,i){var a=i("cf15");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("12888a64",a,!0,{sourceMap:!1,shadowMode:!1})},e599:function(t,e,i){var a=i("1abe");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("ebae3f88",a,!0,{sourceMap:!1,shadowMode:!1})},eb0d:function(t,e,i){"use strict";i.r(e);var a=i("bdd7"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);e["default"]=n.a},ebc2:function(t,e,i){"use strict";i.r(e);var a=i("80b0"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);e["default"]=n.a}}]);