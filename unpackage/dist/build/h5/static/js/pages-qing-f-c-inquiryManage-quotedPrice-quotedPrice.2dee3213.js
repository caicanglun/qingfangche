(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-qing-f-c-inquiryManage-quotedPrice-quotedPrice"],{"0af4":function(t,e,i){"use strict";i.r(e);var n=i("0f10"),a=i("8254");for(var s in a)"default"!==s&&function(t){i.d(e,t,function(){return a[t]})}(s);i("2f04");var o=i("2877"),l=Object(o["a"])(a["default"],n["a"],n["b"],!1,null,"b37d4ab4",null);e["default"]=l.exports},"0f10":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-view",{staticClass:"details-box"},[i("v-uni-view",{staticClass:"wrap-box"},[i("v-uni-view",{staticClass:"details-title"},[t._v("报价产品要素")]),i("chanpinyaosu",{attrs:{inquiryInfo:t.quotationInfo}})],1)],1),i("v-uni-view",{staticClass:"details-box"},[i("v-uni-view",{staticClass:"wrap-box"},[i("v-uni-view",{staticClass:"details-title"},[t._v("卖帮办报价信息")]),i("baojiaDetail",{attrs:{item:t.quotationInfo}})],1)],1),null!==t.quotationInfo.buyDeputyQuotationBuyDeputyCode?i("v-uni-view",{staticClass:"details-box"},[i("v-uni-view",{staticClass:"wrap-box"},[i("v-uni-view",{staticClass:"details-title"},[t._v("推送报价")]),i("baojiaDetailSell",{attrs:{item:t.quotationInfo}})],1)],1):t._e(),i("sellerInfo",{attrs:{quotationInfo:t.quotationInfo}}),t.quotationInfo.hasCause?i("v-uni-view",{staticClass:"details-box"},[i("v-uni-view",{staticClass:"wrap-box"},[i("v-uni-view",{staticClass:"details-title"},[t._v("不匹配原因")]),i("v-uni-view",{staticClass:"details-content"},[i("v-uni-text",[t._v(t._s(t.quotationInfo.buyDeputyRemarks))])],1)],1)],1):t._e(),t.quotationInfo.hasCloseCause?i("v-uni-view",{staticClass:"details-box"},[i("v-uni-view",{staticClass:"wrap-box"},[i("v-uni-view",{staticClass:"details-title"},[t._v("关闭原因")]),i("v-uni-view",{staticClass:"details-content"},[i("v-uni-text",[t._v(t._s(t.quotationInfo.sellDeputyRemarks))])],1)],1)],1):t._e(),i("v-uni-view",{staticClass:"placeholder-view"})],1)},a=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return a})},"1f9b":function(t,e,i){"use strict";var n=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a,s,o=n(i("2cee")),l=n(i("3abc")),u=n(i("2cdd")),r=n(i("3b06")),c=n(i("417d")),d={components:{uniIcon:o.default,chanpinyaosu:l.default,baojiaDetail:u.default,sellerInfo:r.default,baojiaDetailSell:c.default},data:function(){return{quotationInfo:""}},onLoad:function(t){a=this,s=t.quoteNumber,this.getInquiryInfo(),console.log(s)},methods:{getInquiryInfo:function(){var t={quotationNumber:s},e=this.Api.buyerQuotationDetail;this.myRequest(t,e,"get").then(function(t){console.log(t),a.quotationInfo=t.data.data,console.log(a.quotationInfo)}).catch(function(t){wx.showToast({title:t.data.errMsg,icon:"none"})})},bindCancel:function(){var t=this,e={quotationNumber:s},i=this.Api.buyDeputySuited;this.myRequest(e,i,"get").then(function(e){console.log(e),0==e.data.status&&t.refreshBack()}).catch(function(t){wx.showToast({title:t.data.errMsg,icon:"none"})})}}};e.default=d},2369:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.content-box[data-v-692b26d5]{padding-lef:%?20?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.content-box .subItem[data-v-692b26d5]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:13px;height:%?56?%}.content-box .subItem .label[data-v-692b26d5]{color:#999}.content-box .subItemTime[data-v-692b26d5]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:11px;height:%?56?%;color:#999}',""])},"2d55":function(t,e,i){var n=i("6475");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("4ff2329d",n,!0,{sourceMap:!1,shadowMode:!1})},"2f04":function(t,e,i){"use strict";var n=i("2d55"),a=i.n(n);a.a},"417d":function(t,e,i){"use strict";i.r(e);var n=i("e846"),a=i("f8f3");for(var s in a)"default"!==s&&function(t){i.d(e,t,function(){return a[t]})}(s);i("46444");var o=i("2877"),l=Object(o["a"])(a["default"],n["a"],n["b"],!1,null,"692b26d5",null);e["default"]=l.exports},46444:function(t,e,i){"use strict";var n=i("e8af"),a=i.n(n);a.a},6475:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-page-body[data-v-b37d4ab4]{background-color:#f4f4f4}.details-box[data-v-b37d4ab4]{margin:%?20?% %?30?% 0 %?30?%;border-radius:%?6?%;line-height:1;background-color:#fff}.wrap-box[data-v-b37d4ab4]{padding-left:%?24?%;padding-right:%?20?%;font-size:13px;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.details-title[data-v-b37d4ab4]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:%?56?%;width:100%;font-size:14px;font-weight:700}.details-content[data-v-b37d4ab4]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;width:100%;font-size:13px;height:%?56?%}.details-content .title[data-v-b37d4ab4]{color:#999}.bingpai[data-v-b37d4ab4]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.box-contentBottom[data-v-b37d4ab4]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;width:100%;font-size:11px;height:%?50?%;color:#999}.fixed_bottom[data-v-b37d4ab4]{width:100%;position:fixed;bottom:0;display:-webkit-box;display:-webkit-flex;display:flex;z-index:999}.btn_left[data-v-b37d4ab4]{width:50%;background-color:#fff;color:#ff6000;border-radius:0;font-size:16px;line-height:%?88?%}.btn_right[data-v-b37d4ab4]{width:50%;background-color:#ff6000;color:#fff;border-radius:0;font-size:16px;line-height:%?88?%}body.?%PAGE?%[data-v-b37d4ab4]{background-color:#f4f4f4}',""])},8254:function(t,e,i){"use strict";i.r(e);var n=i("1f9b"),a=i.n(n);for(var s in n)"default"!==s&&function(t){i.d(e,t,function(){return n[t]})}(s);e["default"]=a.a},b138:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={props:{item:{type:Object}},data:function(){return{}}};e.default=n},e846:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-view",{staticClass:"content-box"},[i("v-uni-view",{staticClass:"subItem"},[i("v-uni-text",{staticClass:"label"},[t._v("推送报价：")]),t._v(t._s(t.item.buyDeputyFinalPrice||"")+t._s(t.item.buyDeputyFinalPriceUnitName||""))],1),i("v-uni-view",{staticClass:"subItem"},[i("v-uni-text",{staticClass:"label"},[t._v("税：")]),t._v(t._s(t.item.buyDeputyIsPlusDutyName||""))],1),i("v-uni-view",{staticClass:"subItem"},[i("v-uni-text",{staticClass:"label"},[t._v("运费：")]),t._v(t._s(t.item.buyDeputyIsIcashName||""))],1),0==t.item.buyDeputyIsIcash?i("v-uni-view",{staticClass:"subItem"},[i("v-uni-text",{staticClass:"label"},[t._v("运费单价：")]),t._v(t._s(t.item.buyDeputyFreight||"")+t._s(t.item.buyDeputyFinalPriceUnitName||""))],1):t._e(),i("v-uni-view",{staticClass:"subItem"},[i("v-uni-text",{staticClass:"label"},[t._v("佣金比例：")]),t._v(t._s(t.item.buyDeputyCommissionRate||"")+"%")],1),i("v-uni-view",{staticClass:"subItem"},[i("v-uni-text",{staticClass:"label"},[t._v("买帮办：")]),t._v(t._s(t.item.buyDeputyRealName||""))],1),i("v-uni-view",{staticClass:"subItem"},[i("v-uni-text",{staticClass:"label"},[t._v("买帮办备注：")]),t._v(t._s(t.item.qBuyDeputyRemarks||""))],1),i("v-uni-view",{staticClass:"subItemTime"},[i("v-uni-text",[t._v("推送时间：")]),t._v(t._s(t.item.buyDeputyCreateTime||""))],1)],1)],1)},a=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return a})},e8af:function(t,e,i){var n=i("2369");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("2c5f6e88",n,!0,{sourceMap:!1,shadowMode:!1})},f8f3:function(t,e,i){"use strict";i.r(e);var n=i("b138"),a=i.n(n);for(var s in n)"default"!==s&&function(t){i.d(e,t,function(){return n[t]})}(s);e["default"]=a.a}}]);