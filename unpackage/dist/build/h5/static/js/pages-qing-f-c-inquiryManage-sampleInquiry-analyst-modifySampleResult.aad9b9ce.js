(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-qing-f-c-inquiryManage-sampleInquiry-analyst-modifySampleResult"],{1378:function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",[e("v-uni-view",{staticClass:"flex_c"},[t._l(t.items,function(n){return[e("v-uni-view",{key:n.id+"_0",class:"unit "+(0==t.returnIndex(n.id)?"borderleft":"")+" "+(t.returnIndex(n.id)==t.items.length-1?"borderright":"")+" "+(t.index==n.id?"unitselect":"unitunselect")+" "+t.wid,attrs:{"data-index":n.id},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.buttonChange(n.id)}}},[t._v(t._s(n.label))])]})],2)],1)},a=[];e.d(n,"a",function(){return i}),e.d(n,"b",function(){return a})},3156:function(t,n,e){n=t.exports=e("2350")(!1),n.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-page-body[data-v-13759122]{background:#f4f4f4}.wrap[data-v-13759122]{background:#fff}.title[data-v-13759122]{font-size:15px;font-weight:700;height:%?65?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-justify-content:space-around;justify-content:space-around;-webkit-box-align:center;-webkit-align-items:center;align-items:center;border-bottom:%?1?% solid #e6e6e6}.content[data-v-13759122]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:%?132?%;border-bottom:%?2?% solid #e6e6e6}.content .content-left[data-v-13759122]{width:%?210?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;font-size:15px}.content .content-left-1[data-v-13759122]{width:%?210?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;font-size:15px}.content .content-right[data-v-13759122]{width:%?520?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.content .content-right .content-text[data-v-13759122]{font-size:13px;color:#898989}.content .content-right .content-text .text-up[data-v-13759122]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-justify-content:space-around;justify-content:space-around}.content .content-right .content-text-1[data-v-13759122]{font-size:12px;color:#898989}.content .content-right .content-text-1 .text-up[data-v-13759122]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-justify-content:space-around;justify-content:space-around}.content .fixed_bottom[data-v-13759122]{width:100%;position:fixed;bottom:0;display:-webkit-box;display:-webkit-flex;display:flex;z-index:999}.content .btn_left[data-v-13759122]{width:50%;background-color:#fff;color:#ff6000;border-radius:0;font-size:16px;line-height:%?88?%}.content .btn_right_100[data-v-13759122]{width:100%;background-color:#ff6000;color:#fff;border-radius:0;font-size:16px;line-height:%?88?%}.content .btn_right[data-v-13759122]{width:50%;background-color:#ff6000;color:#fff;border-radius:0;font-size:16px;line-height:%?88?%}body.?%PAGE?%[data-v-13759122]{background:#f4f4f4}',""])},"59b3":function(t,n,e){"use strict";var i=e("288e");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=i(e("f5f1")),o={components:{rangeButton:a.default},data:function(){return{items:[{id:"xt",label:"相同"},{id:"xs",label:"相似"},{id:"bt",label:"不同"}],partCompare:"",bigButtons:[{id:"xt",label:"相同"},{id:"bt",label:"不同"}]}},methods:{compareChange:function(t){this.partCompare=t},bindCancel:function(){uni.navigateBack({delta:1})},confirm:function(){}}};n.default=o},"5f94":function(t,n,e){"use strict";e.r(n);var i=e("59b3"),a=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(n,t,function(){return i[t]})}(o);n["default"]=a.a},"98bf":function(t,n,e){var i=e("3156");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=e("4f06").default;a("f6d6b526",i,!0,{sourceMap:!1,shadowMode:!1})},a31b:function(t,n,e){"use strict";e.r(n);var i=e("b65e"),a=e("5f94");for(var o in a)"default"!==o&&function(t){e.d(n,t,function(){return a[t]})}(o);e("e3f2");var s=e("2877"),v=Object(s["a"])(a["default"],i["a"],i["b"],!1,null,"13759122",null);n["default"]=v.exports},a7f7:function(t,n,e){"use strict";var i=e("ef5d"),a=e.n(i);a.a},b65e:function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",[e("v-uni-view",{staticClass:"wrap"},[e("v-uni-view",{staticClass:"title"},[e("v-uni-view",[t._v("产品要素")]),e("v-uni-view",[t._v("原样分析结果")]),e("v-uni-view",[t._v("回样分析结果")])],1),e("v-uni-view",{staticClass:"content"},[e("v-uni-view",{staticClass:"content-left"},[t._v("成份")]),e("v-uni-view",{staticClass:"content-right"},[e("v-uni-view",{staticClass:"content-text"},[e("v-uni-view",{staticClass:"text-up"},[e("v-uni-view",[t._v("涤棉")]),e("v-uni-view",[t._v("涤棉")])],1),e("v-uni-view",[e("rangeButton",{attrs:{items:t.items},on:{buttonChange:function(n){arguments[0]=n=t.$handleEvent(n),t.compareChange.apply(void 0,arguments)}}})],1)],1),e("v-uni-view")],1)],1),e("v-uni-view",{staticClass:"content"},[e("v-uni-view",{staticClass:"content-left"},[t._v("规格")]),e("v-uni-view",{staticClass:"content-right"},[e("v-uni-view",{staticClass:"content-text-1"},[e("v-uni-view",{staticClass:"text-up"},[e("v-uni-view",[t._v("T75DDTY*T150DDTY")]),e("v-uni-view",[t._v("T75DDTY*T150DDTY")])],1),e("v-uni-view",[e("rangeButton",{attrs:{items:t.items},on:{buttonChange:function(n){arguments[0]=n=t.$handleEvent(n),t.compareChange.apply(void 0,arguments)}}})],1)],1),e("v-uni-view")],1)],1),e("v-uni-view",{staticClass:"content"},[e("v-uni-view",{staticClass:"content-left"},[t._v("特性")]),e("v-uni-view",{staticClass:"content-right"},[e("v-uni-view",{staticClass:"content-text"},[e("v-uni-view",{staticClass:"text-up"},[e("v-uni-view",[t._v("消光")]),e("v-uni-view",[t._v("半消光")])],1),e("v-uni-view",[e("rangeButton",{attrs:{items:t.items},on:{buttonChange:function(n){arguments[0]=n=t.$handleEvent(n),t.compareChange.apply(void 0,arguments)}}})],1)],1),e("v-uni-view")],1)],1),e("v-uni-view",{staticClass:"content"},[e("v-uni-view",{staticClass:"content-left"},[t._v("风格")]),e("v-uni-view",{staticClass:"content-right"},[e("v-uni-view",{staticClass:"content-text"},[e("v-uni-view",{staticClass:"text-up"},[e("v-uni-view",[t._v("小提花")]),e("v-uni-view",[t._v("小提花")])],1),e("v-uni-view",[e("rangeButton",{attrs:{items:t.items},on:{buttonChange:function(n){arguments[0]=n=t.$handleEvent(n),t.compareChange.apply(void 0,arguments)}}})],1)],1),e("v-uni-view")],1)],1),e("v-uni-view",{staticClass:"content"},[e("v-uni-view",{staticClass:"content-left-1"},[e("v-uni-view",[t._v("布样")]),e("v-uni-view",[t._v("类型")])],1),e("v-uni-view",{staticClass:"content-right"},[e("v-uni-view",{staticClass:"content-text"},[e("v-uni-view",{staticClass:"text-up"},[e("v-uni-view",[t._v("坯布")]),e("v-uni-view",[t._v("坯布")])],1),e("v-uni-view",[e("rangeButton",{attrs:{items:t.bigButtons,wid:"wid_240"},on:{buttonChange:function(n){arguments[0]=n=t.$handleEvent(n),t.compareChange.apply(void 0,arguments)}}})],1)],1),e("v-uni-view")],1)],1),e("v-uni-view",{staticClass:"content"},[e("v-uni-view",{staticClass:"content-left-1"},[e("v-uni-view",[t._v("密度")]),e("v-uni-view",[t._v("(坯布)")])],1),e("v-uni-view",{staticClass:"content-right"},[e("v-uni-view",{staticClass:"content-text"},[e("v-uni-view",{staticClass:"text-up"},[e("v-uni-view",[t._v("113")]),e("v-uni-view",[t._v("114")])],1),e("v-uni-view",[e("rangeButton",{attrs:{items:t.items},on:{buttonChange:function(n){arguments[0]=n=t.$handleEvent(n),t.compareChange.apply(void 0,arguments)}}})],1)],1),e("v-uni-view")],1)],1),e("v-uni-view",{staticClass:"content"},[e("v-uni-view",{staticClass:"content-left-1"},[e("v-uni-view",[t._v("克重")]),e("v-uni-view",[t._v("(坯布)")])],1),e("v-uni-view",{staticClass:"content-right"},[e("v-uni-view",{staticClass:"content-text"},[e("v-uni-view",{staticClass:"text-up"},[e("v-uni-view",[t._v("126")]),e("v-uni-view",[t._v("136")])],1),e("v-uni-view",[e("rangeButton",{attrs:{items:t.items},on:{buttonChange:function(n){arguments[0]=n=t.$handleEvent(n),t.compareChange.apply(void 0,arguments)}}})],1)],1),e("v-uni-view")],1)],1),e("v-uni-view",{staticClass:"content"},[e("v-uni-view",{staticClass:"content-left-1"},[e("v-uni-view",[t._v("幅宽")]),e("v-uni-view",[t._v("(坯布)")])],1),e("v-uni-view",{staticClass:"content-right"},[e("v-uni-view",{staticClass:"content-text"},[e("v-uni-view",{staticClass:"text-up"},[e("v-uni-view",[t._v("150")]),e("v-uni-view",[t._v("160")])],1),e("v-uni-view",[e("rangeButton",{attrs:{items:t.items},on:{buttonChange:function(n){arguments[0]=n=t.$handleEvent(n),t.compareChange.apply(void 0,arguments)}}})],1)],1),e("v-uni-view")],1)],1)],1),e("v-uni-view",{staticClass:"placeholder-view"}),e("v-uni-view",{staticClass:"fixed_bottom box_shadow_btn flex"},[e("v-uni-button",{staticClass:"btn_left",attrs:{"hover-class":"none"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.bindCancel.apply(void 0,arguments)}}},[t._v("取消")]),e("v-uni-button",{staticClass:"btn_right",attrs:{"hover-class":"none"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.confirm.apply(void 0,arguments)}}},[t._v("确定")])],1)],1)},a=[];e.d(n,"a",function(){return i}),e.d(n,"b",function(){return a})},b847:function(t,n,e){n=t.exports=e("2350")(!1),n.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.list[data-v-3f2da312]{margin:0 %?30?%;padding:0 %?10?%;border-bottom:%?1?% solid hsla(0,0%,86.7%,.3);line-height:%?87?%}.list_right[data-v-3f2da312]{width:%?250?%}.unit[data-v-3f2da312]{font-size:14px;line-height:%?48?%;width:%?160?%;height:%?48?%;text-align:center;border:%?2?% solid #dcdcdc;box-sizing:border-box;border-right:none}.borderright[data-v-3f2da312]{border-top-right-radius:%?6?%;border-bottom-right-radius:%?6?%;border-right:%?2?% solid #dcdcdc}.borderleft[data-v-3f2da312]{border-top-left-radius:%?6?%;border-bottom-left-radius:%?6?%}.unitselect[data-v-3f2da312]{color:#fff;background-color:#ff6000;border:%?2?% solid #ff6000}.unitunselect[data-v-3f2da312]{color:#333;background-color:#fff}.wid_240[data-v-3f2da312]{width:%?240?%}',""])},ba26:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i={props:{items:{type:Array},initValue:{type:String,default:""},wid:{type:String,default:""}},data:function(){return{index:this.initValue}},methods:{returnIndex:function(t){for(var n=this.items,e=0;e<n.length;e++)if(n[e].id==t)return e},buttonChange:function(t){this.index=t,this.$emit("buttonChange",t)}}};n.default=i},e3f2:function(t,n,e){"use strict";var i=e("98bf"),a=e.n(i);a.a},ef5d:function(t,n,e){var i=e("b847");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=e("4f06").default;a("5e7157a0",i,!0,{sourceMap:!1,shadowMode:!1})},f5f1:function(t,n,e){"use strict";e.r(n);var i=e("1378"),a=e("fab6");for(var o in a)"default"!==o&&function(t){e.d(n,t,function(){return a[t]})}(o);e("a7f7");var s=e("2877"),v=Object(s["a"])(a["default"],i["a"],i["b"],!1,null,"3f2da312",null);n["default"]=v.exports},fab6:function(t,n,e){"use strict";e.r(n);var i=e("ba26"),a=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(n,t,function(){return i[t]})}(o);n["default"]=a.a}}]);