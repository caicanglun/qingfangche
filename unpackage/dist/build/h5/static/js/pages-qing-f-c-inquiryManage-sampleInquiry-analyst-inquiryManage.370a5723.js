(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-qing-f-c-inquiryManage-sampleInquiry-analyst-inquiryManage"],{"1ecfb":function(t,i,e){"use strict";var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",[t._l(t.items,function(i,n){return[e("v-uni-view",{key:n+"_0",staticClass:"box_shadow list",attrs:{"data-id":i.inquiryNumber},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toRoutineDetail(i.orderNum,i.orderStatus)}}},[e("v-uni-view",{staticClass:"list-wrap"},[e("v-uni-view",{staticClass:"title_padding fs_12 flex_sb_c"},[e("v-uni-view",{staticClass:"flex_c"},[e("v-uni-view",[t._v("询价单号: "+t._s(i.orderNum||""))])],1),e("v-uni-view",{staticClass:"color_FF6000 fs_12"},[t._v(t._s(i.orderStatus||""))])],1),e("v-uni-view",{staticClass:"flex_sb_c"},[e("v-uni-view",{staticClass:"flex_sb_c color_000 fs_14 height_48"},[e("v-uni-view",{staticClass:"fs_28r wid_250"},[t._v("品名（别名）：")]),e("v-uni-view",{staticClass:"fs_28r wid_360"},[t._v(t._s(i.tradeName||""))])],1)],1),e("v-uni-view",{staticClass:"fs_12 flex height_48 color_333"},[e("v-uni-view",{staticClass:"wid_320 "},[t._v("买帮办："+t._s(i.deputyName||""))])],1),e("v-uni-view",{staticClass:"fs_10 height_48 mr_20"},[t._v("建立时间："+t._s(i.createTime))])],1)],1)]})],2)},a=[];e.d(i,"a",function(){return n}),e.d(i,"b",function(){return a})},"20fa":function(t,i,e){"use strict";var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",[e("v-uni-view",{staticClass:"top-nav-fixed"},[e("v-uni-view",{staticClass:"search_top_box_gray"},[e("v-uni-view",{staticClass:"flex_sb height_56"},[e("uniIcon",{attrs:{type:"scan",size:"24"}}),e("v-uni-view",{staticClass:"flex_c search_left_gray"},[e("v-uni-icon",{staticStyle:{height:"14px","margin-left":"40upx"},attrs:{type:"search",size:"14"}}),e("v-uni-input",{staticClass:"search_left_input",attrs:{placeholder:"搜索","confirm-type":"search"},on:{input:function(i){arguments[0]=i=t.$handleEvent(i),t.blurInput.apply(void 0,arguments)},confirm:function(i){arguments[0]=i=t.$handleEvent(i),t.tapSearch.apply(void 0,arguments)}},model:{value:t.inputValueOne,callback:function(i){t.inputValueOne=i},expression:"inputValueOne"}})],1),e("v-uni-view",{staticClass:"moban",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.toModelSearch.apply(void 0,arguments)}}},[t._v("模板搜索")])],1)],1),e("v-uni-view",[e("topTabbar",{attrs:{items:t.items},on:{change:function(i){arguments[0]=i=t.$handleEvent(i),t.tabSwitch()}}})],1),e("v-uni-view",{staticClass:"pt_20 pb_20"},[e("filterButton",{attrs:{items:t.filterButton},on:{change:function(i){arguments[0]=i=t.$handleEvent(i),t.filterButtonChange.apply(void 0,arguments)}}})],1)],1),e("v-uni-view",{staticStyle:{height:"220upx",width:"100%"}}),e("v-uni-view",{staticClass:"content"},[e("inquireList",{attrs:{items:t.lists},on:{change:function(i){arguments[0]=i=t.$handleEvent(i),t.toDetail.apply(void 0,arguments)}}}),e("uniLoadMore",{attrs:{status:t.loadingType}})],1)],1)},a=[];e.d(i,"a",function(){return n}),e.d(i,"b",function(){return a})},3247:function(t,i,e){"use strict";e.r(i);var n=e("fb71"),a=e.n(n);for(var o in n)"default"!==o&&function(t){e.d(i,t,function(){return n[t]})}(o);i["default"]=a.a},"3ef0":function(t,i,e){i=t.exports=e("2350")(!1),i.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-page-body[data-v-19f60301]{background:#f4f4f4}.top-nav-fixed[data-v-19f60301]{position:fixed;top:0;z-index:99;background:#f4f4f4;width:100%}.search_top_box_gray[data-v-19f60301]{background-color:#fff;padding:%?16?% %?30?% %?20?%;\n  /* height: 92upx; */box-sizing:border-box}.search_left_gray[data-v-19f60301]{background-color:#efefef;height:%?54?%;box-sizing:border-box;border-radius:%?26?%;width:%?448?%}.height_56[data-v-19f60301]{height:%?56?%}.content[data-v-19f60301]{background-color:#efefef;width:100%}.counter[data-v-19f60301]{width:100%;height:%?40?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:13px}.new_build[data-v-19f60301]{position:fixed;right:%?23?%;width:%?100?%;height:%?100?%;border-radius:100%;box-sizing:border-box;text-align:center;color:#fff;padding-top:%?20?%;background-color:#ff6000;font-size:%?26?%;line-height:1.1}.child1[data-v-19f60301]{bottom:%?230?%}.child2[data-v-19f60301]{bottom:%?100?%}.moban[data-v-19f60301]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;width:%?152?%;height:%?54?%;border-radius:%?26?%;color:#ff6000;border:%?1?% solid #ff6000;font-size:14px}body.?%PAGE?%[data-v-19f60301]{background:#f4f4f4}',""])},"4fb8":function(t,i,e){"use strict";e.r(i);var n=e("20fa"),a=e("8e51");for(var o in a)"default"!==o&&function(t){e.d(i,t,function(){return a[t]})}(o);e("784d");var r=e("2877"),s=Object(r["a"])(a["default"],n["a"],n["b"],!1,null,"19f60301",null);i["default"]=s.exports},5500:function(t,i,e){i=t.exports=e("2350")(!1),i.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.list[data-v-756520c5]{margin:%?20?% %?20?% 0 %?20?%;background-color:#fff;border-radius:%?6?%;color:#333}.list-wrap[data-v-756520c5]{padding-left:%?22?%;padding-top:%?20?%;padding-right:%?20?%}.title_padding[data-v-756520c5]{height:%?48?%}.height_48[data-v-756520c5]{height:%?48?%}.lh_1[data-v-756520c5]{line-height:1}.pr_10[data-v-756520c5]{padding-right:%?10?%}.pr_30[data-v-756520c5]{padding-right:%?30?%}.line[data-v-756520c5]{height:%?1?%;background-color:hsla(0,0%,86.7%,.3);margin-right:%?20?%}.color_9b[data-v-756520c5]{color:#9b9b9b}.color_333[data-v-756520c5]{color:#333}.cc_label[data-v-756520c5]{color:#ff6000;width:%?114?%;height:%?32?%;background:rgba(255,96,0,.1);border-radius:%?8?%;margin-left:%?50?%;font-size:12px}.color_21b[data-v-756520c5]{color:#d0021b}.spot[data-v-756520c5]{width:%?6?%;height:%?6?%;border-radius:%?6?%;background-color:#d0021b;margin-right:%?6?%}.color_FF6000[data-v-756520c5]{color:#ff6000}.color_999[data-v-756520c5]{color:#999}.mt_24[data-v-756520c5]{margin-top:%?20?%;padding-left:%?10?%}.mr_60[data-v-756520c5]{margin-right:%?60?%}.pr_10[data-v-756520c5]{padding-right:%?10?%}.pr_30[data-v-756520c5]{padding-right:%?30?%}.fs_28r[data-v-756520c5]{font-size:14px;font-weight:700;line-height:1.1}.wid_200[data-v-756520c5]{width:%?200?%}.wid_360[data-v-756520c5]{width:%?360?%;word-break:break-all}.wid_250[data-v-756520c5]{width:%?250?%}.wid_320[data-v-756520c5]{width:%?320?%}',""])},"64b5":function(t,i,e){var n=e("5500");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=e("4f06").default;a("65d79fc4",n,!0,{sourceMap:!1,shadowMode:!1})},"784d":function(t,i,e){"use strict";var n=e("c8eb"),a=e.n(n);a.a},"8e51":function(t,i,e){"use strict";e.r(i);var n=e("df98"),a=e.n(n);for(var o in n)"default"!==o&&function(t){e.d(i,t,function(){return n[t]})}(o);i["default"]=a.a},af88:function(t,i,e){"use strict";e.r(i);var n=e("1ecfb"),a=e("3247");for(var o in a)"default"!==o&&function(t){e.d(i,t,function(){return a[t]})}(o);e("e980");var r=e("2877"),s=Object(r["a"])(a["default"],n["a"],n["b"],!1,null,"756520c5",null);i["default"]=s.exports},c8eb:function(t,i,e){var n=e("3ef0");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=e("4f06").default;a("fef3aafa",n,!0,{sourceMap:!1,shadowMode:!1})},df98:function(t,i,e){"use strict";var n=e("288e");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,e("ac6a");var a,o,r=n(e("2cee")),s=n(e("93d0")),c=n(e("4a14")),u=n(e("af88")),l=n(e("fbad")),d={components:{uniIcon:r.default,topTabbar:s.default,filterButton:c.default,inquireList:u.default,uniLoadMore:l.default},data:function(){return{loadingType:"more",inputValueOne:"",items:["原样分析","回样分析"],activeIndex:0,filterButton:[{id:0,label:"未分析"},{id:1,label:"已分析"}],fitlerButtonIndex:-1,count:0,lists:[],totalPage:"",keyword:"",affiliation:1,inquiryType:0,time:"",pageNum:1,pageSize:20,isDoRefresh:!1,orderType:1,isAnalyse:""}},onReachBottom:function(){null!=o&&clearTimeout(o),o=setTimeout(function(){a.getmoreInquiry()},1e3)},onPullDownRefresh:function(){this.getInquiryList()},onShow:function(){var t=getCurrentPages(),i=t[t.length-1];1==i.data.isDoRefresh&&(i.data.isDoRefresh=!1,this.getInquiryList())},onLoad:function(){a=this,this.getInquiryList()},methods:{getmoreInquiry:function(){if("more"!==a.loadingType)return!1;a.loadingType="loading",uni.showNavigationBarLoading();var t={keyword:a.keyword,orderType:a.orderType,isAnalyse:a.isAnalyse,time:a.time,pageNum:a.pageNum,pageSize:a.pageSize},i=this.Api.analystList;this.myRequest(t,i,"get").then(function(t){if(console.log(t),0==t.data.data.list.length)return console.log("no data"),a.loadingType="",void uni.hideNavigationBarLoading();a.pageNum++,a.lists=a.lists.concat(t.data.data.list),a.loadingType="more",uni.hideNavigationBarLoading()}).catch(function(t){console.log(t),uni.showToast({title:t.data.errMsg,icon:"none"})})},getInquiryList:function(){a.pageNum=1,a.fitlerButtonIndex=-1,a.loadingType="more",uni.showNavigationBarLoading();var t={keyword:a.keyword,orderType:a.orderType,isAnalyse:a.isAnalyse,time:a.time,pageNum:a.pageNum,pageSize:a.pageSize},i=this.Api.analystList;this.myRequest(t,i,"get").then(function(t){a.pageNum++,console.log(t),a.lists=t.data.data.list,console.log("list",a.lists)}).catch(function(t){wx.showToast({title:t.data.errMsg,icon:"none"})}),uni.hideNavigationBarLoading(),uni.stopPullDownRefresh()},toDetail:function(t){var i=t[0],e=t[1];switch(e){case"未分析":uni.navigateTo({url:"/pages/qing-f-c/inquiryManage/sampleInquiry/analyst/inquiry-details-1?inquiryNumber="+i+"&number="+a.orderType,success:function(t){},fail:function(t){console.log(t)},complete:function(){}});break;case"已分析":uni.navigateTo({url:"/pages/qing-f-c/inquiryManage/sampleInquiry/analyst/inquiry-details-2?number="+i+"&orderType="+a.orderType,success:function(t){},fail:function(t){console.log(t)},complete:function(){}});break}},tabSwitch:function(t){this.activeIndex=t,console.log("activeIndex",this.activeIndex),0==this.activeIndex&&(this.orderType=1,this.time="",this.getInquiryList(),uni.pageScrollTo({duration:0,scrollTop:0})),1==this.activeIndex&&(this.orderType=2,this.getInquiryList(),uni.pageScrollTo({duration:0,scrollTop:0}))},filterButtonChange:function(t){var i=this;this.fitlerButtonIndex=t,this.isAnalyse==t?(console.log("fwefwef"),this.isAnalyse="",this.filterButton.forEach(function(t){i.$set(t,"isChecked",!1)})):(this.isAnalyse=t,this.setIsChecked(this.filterButton,this.isAnalyse)),this.getInquiryList(),console.log("fiterButtonIndex",this.fitlerButtonIndex)},blurInput:function(t){},toNewBuild:function(){uni.navigateTo({url:"/pages/qing-f-c/inquiryManage/inquiry-created",success:function(t){},fail:function(){},complete:function(){}})},toModelSearch:function(){},tapSearch:function(){this.keyword=this.inputValueOne,console.log(this.keyword),this.getInquiryList(),this.inputValueOne="",this.keyword=""}}};i.default=d},e980:function(t,i,e){"use strict";var n=e("64b5"),a=e.n(n);a.a},fb71:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n={props:{items:{type:Array}},data:function(){return{}},methods:{toRoutineDetail:function(t,i){this.$emit("change",[t,i])}}};i.default=n}}]);