(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/qing-f-c/inquiryManage/systemMatch/systemMatchDetail"],{"27d2":function(t,e,n){"use strict";(function(t,i){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=s(n("95d7"));function s(t){return t&&t.__esModule?t:{default:t}}var o,c=function(){n.e("components/kilvn-fa-icon/fa-icon").then(function(){return resolve(n("18f3"))}.bind(null,n)).catch(n.oe)},r=function(){n.e("components/uni-drawer/uni-drawer").then(function(){return resolve(n("2073"))}.bind(null,n)).catch(n.oe)},u=function(){Promise.all([n.e("common/vendor"),n.e("components/uni-calendar/uni-calendar")]).then(function(){return resolve(n("422d"))}.bind(null,n)).catch(n.oe)},l=function(){n.e("components/inquiry/sellerInfoMatch").then(function(){return resolve(n("dc1b"))}.bind(null,n)).catch(n.oe)},h=null,f={components:{faIcon:c,uniDrawer:r,uniCalendar:u,sellerInfoMatch:l},data:function(){return{inquiryNumber:"",quotationInfo:"",matchCode:"",color1:"#ff6000",startTime:"",endTime:"",showRight:!1,cWidth:"",cHeight:"",pixelRatio:1,series:[{name:"塔丝隆50D",color:"#FF6000",data:[1.81,2,2.01,2.03,2.38,5.27,2.03,2.38,5.27],legendShape:"line",pointShape:"circle",show:!0,type:"line",format:function(t){return t+"元"}}],categories:["10.01","10.01","10.14","10.24","10.30","11.23","10.24","10.30","11.23"]}},onLoad:function(e){o=this,this.matchCode=e.matchCode,this.inquiryNumber=e.inquiryNumber,this.cWidth=t.upx2px(750),this.cHeight=t.upx2px(500),this.endTime=this.getDay(0),this.startTime=this.getDay(-7),i("log",this.endTime," at pages/qing-f-c/inquiryManage/systemMatch/systemMatchDetail.vue:155"),i("log",this.startTime," at pages/qing-f-c/inquiryManage/systemMatch/systemMatchDetail.vue:156"),this.matchList2()},methods:{handleEvent:function(e,n){this.$store.dispatch("copeFun",this.inquiryNumber),t.navigateTo({url:"/pages/qing-f-c/inquiryManage/comQuotation/startQuotation?goodsCode=".concat(e,"&buyOrSellCode=").concat(n,"&flag=1"),success:function(t){},fail:function(){},complete:function(){}})},matchList2:function(){var t=this,e={matchCode:o.matchCode,startTime:o.startTime,endTime:o.endTime},n=this.Api.matchList2;this.myRequest(e,n,"get").then((function(e){if(i("log",e," at pages/qing-f-c/inquiryManage/systemMatch/systemMatchDetail.vue:178"),0==e.data.status){o.quotationInfo=e.data.data,o.categories=e.data.data.categories,i("log",o.categories," at pages/qing-f-c/inquiryManage/systemMatch/systemMatchDetail.vue:182"),o.series=e.data.data.series,i("log",o.series," at pages/qing-f-c/inquiryManage/systemMatch/systemMatchDetail.vue:184"),o.series.forEach((function(e){t.$set(e,"legendShape","line"),t.$set(e,"pointShape","circle"),t.$set(e,"show",!0),t.$set(e,"type","line")}));var n={categories:[],series:[]};n.categories=o.categories,n.series=o.series,o.showLineA("canvasLineA",n),i("log",n.series[0]," at pages/qing-f-c/inquiryManage/systemMatch/systemMatchDetail.vue:199")}})).catch((function(t){wx.showToast({title:t.data.errMsg,icon:"none"})}))},weekly:function(){this.startTime=this.getDay(-7),this.endTime=this.getDay(0),this.matchList2()},resetCal:function(){this.startTime=this.getDay(-7),this.endTime=this.getDay(0)},confirmCal:function(){this.showRight=!1,this.matchList2()},showCalendarEnd:function(){this.$refs.calendarEnd.open()},showCalendar:function(){this.$refs.calendar.open()},confirm:function(t){i("log",t," at pages/qing-f-c/inquiryManage/systemMatch/systemMatchDetail.vue:228"),this.startTime=t.fulldate},confirmEnd:function(t){i("log",t," at pages/qing-f-c/inquiryManage/systemMatch/systemMatchDetail.vue:233"),this.endTime=t.fulldate},closeDrawer:function(){this.showRight=!1},showDrawer:function(){this.showRight=!0,i("log",this.showRight," at pages/qing-f-c/inquiryManage/systemMatch/systemMatchDetail.vue:242")},toSingleProduct:function(e){t.navigateTo({url:"./singleProduct?goodsCode="+e+"&startTime="+o.startTime+"&endTime="+o.endTime,success:function(t){},fail:function(){},complete:function(){}})},getServerData:function(){t.request({url:"https://www.ucharts.cn/data.json",data:{},success:function(t){i("log",t.data.data," at pages/qing-f-c/inquiryManage/systemMatch/systemMatchDetail.vue:258");var e={categories:[],series:[]};e.categories=o.categories,e.series=o.series,o.showLineA("canvasLineA",e),i("log",e.series[0]," at pages/qing-f-c/inquiryManage/systemMatch/systemMatchDetail.vue:267")},fail:function(){o.tips="网络错误，小程序端请检查合法域名"}})},showLineA:function(t,e){h=new a.default({$this:o,canvasId:t,type:"line",fontSize:11,legend:{show:!0},dataLabel:!0,dataPointShape:!0,background:"#FFFFFF",pixelRatio:o.pixelRatio,categories:e.categories,series:e.series,animation:!0,xAxis:{disableGrid:!0,titleFontColor:"#333333"},yAxis:{gridType:"dash",gridColor:"#EAEAEA"},width:o.cWidth*o.pixelRatio,height:o.cHeight*o.pixelRatio,extra:{line:{type:"straight"}}})},touchLineA:function(t){h.showToolTip(t,{format:function(t,e){return t.data}})},getDay:function(t){var e=new Date,n=e.getTime()+864e5*t;e.setTime(n);var i=e.getFullYear(),a=e.getMonth(),s=e.getDate();return a=this.doHandleMonth(a+1),s=this.doHandleMonth(s),i+"-"+a+"-"+s},doHandleMonth:function(t){var e=t;return 1==t.toString().length&&(e="0"+t),e}}};e.default=f}).call(this,n("6e42")["default"],n("0de9")["default"])},"2ab9":function(t,e,n){},"4b4d":function(t,e,n){"use strict";var i={"uni-drawer":function(){return n.e("components/uni-drawer/uni-drawer").then(n.bind(null,"2073"))}},a=function(){var t=this,e=t.$createElement;t._self._c},s=[];n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return i}))},"5eef":function(t,e,n){"use strict";n.r(e);var i=n("27d2"),a=n.n(i);for(var s in i)"default"!==s&&function(t){n.d(e,t,(function(){return i[t]}))}(s);e["default"]=a.a},"66f0":function(t,e,n){"use strict";(function(t){n("3b9b"),n("921b");i(n("66fd"));var e=i(n("ecc3"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"96d8":function(t,e,n){"use strict";var i=n("2ab9"),a=n.n(i);a.a},ecc3:function(t,e,n){"use strict";n.r(e);var i=n("4b4d"),a=n("5eef");for(var s in a)"default"!==s&&function(t){n.d(e,t,(function(){return a[t]}))}(s);n("96d8");var o,c=n("f0c5"),r=Object(c["a"])(a["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],o);e["default"]=r.exports}},[["66f0","common/runtime","common/vendor"]]]);