(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/qing-f-c/report/regionReport"],{"00ab":function(t,e,n){"use strict";(function(t,o){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=i(n("4795"));function i(t){return t&&t.__esModule?t:{default:t}}function a(t,e,n,o,r,i,a){try{var s=t[i](a),c=s.value}catch(u){return void n(u)}s.done?e(c):Promise.resolve(c).then(o,r)}function s(t){return function(){var e=this,n=arguments;return new Promise((function(o,r){var i=t.apply(e,n);function s(t){a(i,o,r,s,c,"next",t)}function c(t){a(i,o,r,s,c,"throw",t)}s(void 0)}))}}var c=function(){n.e("components/ms-dropdown/dropdown-menu").then(function(){return resolve(n("d8d8"))}.bind(null,n)).catch(n.oe)},u=function(){n.e("components/ms-dropdown/dropdown-item").then(function(){return resolve(n("fa40"))}.bind(null,n)).catch(n.oe)},l=function(){n.e("components/myProgress/myProgress").then(function(){return resolve(n("d349"))}.bind(null,n)).catch(n.oe)},d=function(){n.e("components/tongji-color").then(function(){return resolve(n("95ea"))}.bind(null,n)).catch(n.oe)},f=function(){n.e("components/t-table/t-table").then(function(){return resolve(n("2838"))}.bind(null,n)).catch(n.oe)},h=function(){n.e("components/t-table/t-th").then(function(){return resolve(n("a957"))}.bind(null,n)).catch(n.oe)},m=function(){n.e("components/t-table/t-tr").then(function(){return resolve(n("874e"))}.bind(null,n)).catch(n.oe)},g=function(){n.e("components/t-table/t-td").then(function(){return resolve(n("f11c"))}.bind(null,n)).catch(n.oe)};function p(t){var e=new Date,n=e.getFullYear(),o=e.getMonth()+1,r=e.getDate();return"start"===t?n-=60:"end"===t&&(n+=2),o=o>9?o:"0"+o,r=r>9?r:"0"+r,"".concat(n,"-").concat(o,"-").concat(r)}function v(){var t=new Date,e=new Date(t.getYear(),t.getMonth(),1),n=Number(e.getMonth())+1;return t.getFullYear()+"-"+n+"-"+e.getDate()}var b={components:{msDropdownMenu:c,msDropdownItem:u,myProgress:l,tongjiColor:d,tTable:f,tTh:h,tTr:m,tTd:g},computed:{comPercent:function(){return 0==this.content1.targetMoney?0:this.content1.turnover/this.content1.targetMoney*100},comPercentWidth:function(){return 0==this.content1.targetMoney?20:this.content1.turnover/this.content1.targetMoney*100<20?20:this.content1.turnover/this.content1.targetMoney*100},comPercentCount:function(){return 0==this.content1.targetCount?0:this.content1.companyCount/this.content1.targetCount*100},comPercentCountWidth:function(){return 0==this.content1.targetCount?20:this.content1.companyCount/this.content1.targetCount*100<20?20:this.content1.companyCount/this.content1.targetCount*100}},data:function(){return{postCode:"",userPostList1:[{value:2,text:"采购"},{value:1,text:"销售"}],userPostList2:[{value:2,text:"采购"},{value:1,text:"销售"}],userPostList3:[{value:2,text:"采购"},{value:1,text:"销售"}],userPostList4:[{value:2,text:"采购"},{value:1,text:"销售"}],userPostList5:[{value:2,text:"采购"},{value:1,text:"销售"}],items:["业绩目标","业绩统计","客户跟进","潜在订单","询价统计"],items2:[],activeIndex:-1,activeIndex2:-1,regionCodeList1:[],regionCodeList2:[],regionCodeList3:[],regionCodeList4:[],regionCodeList5:[],selectTime:{time1:{startTime:v({format:!0}),endTime:p({format:!0})},time2:{startTime:v({format:!0}),endTime:p({format:!0})},time3:{startTime:v({format:!0}),endTime:p({format:!0})},time4:{startTime:v({format:!0}),endTime:p({format:!0})},time5:{startTime:v({format:!0}),endTime:p({format:!0})}},regionCode1:0,regionCode2:0,regionCode3:0,regionCode4:0,regionCode5:0,userPostCode1:1,userPostCode2:1,userPostCode3:1,userPostCode4:1,userPostCode5:1,percent:65,content1:"",content2:"",content3:"",content4:"",content5:"",content2Detail:{},label:{label1:"本月",label2:"本月",label3:"本月",label4:"本月",label5:"本月"},tableList:[{id:0,name:"张三",age:"19",hobby:"游泳"},{id:1,name:"李四",age:"21",hobby:"绘画"},{id:2,name:"王二",age:"29",hobby:"滑板"},{id:3,name:"码字",age:"20",hobby:"蹦极"}]}},onLoad:function(){this.getRegionCode(),this.postCode=t.getStorageSync("pupDefault"),this.fetchList1(),this.fetchList2(),this.fetchList3(),this.fetchList4(),this.fetchList5()},methods:{fetchList1:function(){var t=this;return s(r.default.mark((function e(){var n,i;return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n={postCode:t.postCode,buyOrSell:t.userPostCode1,regionCode:t.regionCode1,startTime:t.selectTime.time1.startTime,endTime:t.selectTime.time1.endTime},o("log",n," at pages/qing-f-c/report/regionReport.vue:604"),e.next=4,t.$http.get("/data/target",{data:n});case 4:i=e.sent,o("log",i," at pages/qing-f-c/report/regionReport.vue:606"),t.content1=i.data.data;case 7:case"end":return e.stop()}}),e)})))()},fetchList2:function(){var t=this;return s(r.default.mark((function e(){var n,i;return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n={postCode:t.postCode,buyOrSell:t.userPostCode2,regionCode:t.regionCode2,startTime:t.selectTime.time2.startTime,endTime:t.selectTime.time2.endTime},o("log",n," at pages/qing-f-c/report/regionReport.vue:620"),e.next=4,t.$http.get("/data/performance",{data:n});case 4:i=e.sent,o("log",i," at pages/qing-f-c/report/regionReport.vue:622"),t.activeIndex2=-1,t.items2=[],t.content2Detail={},t.content2=i.data.data,t.content2.list.forEach((function(e){t.items2.push(e.realName)}));case 11:case"end":return e.stop()}}),e)})))()},fetchList3:function(){var t=this;return s(r.default.mark((function e(){var n,i;return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n={postCode:t.postCode,buyOrSell:t.userPostCode3,regionCode:t.regionCode3,startTime:t.selectTime.time3.startTime,endTime:t.selectTime.time3.endTime},o("log",n," at pages/qing-f-c/report/regionReport.vue:642"),e.next=4,t.$http.get("/data/follow",{data:n});case 4:i=e.sent,o("log",i," at pages/qing-f-c/report/regionReport.vue:644"),t.content3=i.data.data;case 7:case"end":return e.stop()}}),e)})))()},fetchList4:function(){var t=this;return s(r.default.mark((function e(){var n,i;return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n={postCode:t.postCode,buyOrSell:t.userPostCode4,regionCode:t.regionCode4,startTime:t.selectTime.time4.startTime,endTime:t.selectTime.time4.endTime},o("log",n," at pages/qing-f-c/report/regionReport.vue:658"),e.next=4,t.$http.get("/data/latent",{data:n});case 4:i=e.sent,o("log",i," at pages/qing-f-c/report/regionReport.vue:660"),t.content4=i.data.data;case 7:case"end":return e.stop()}}),e)})))()},fetchList5:function(){var t=this;return s(r.default.mark((function e(){var n,i;return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n={postCode:t.postCode,buyOrSell:t.userPostCode5,regionCode:t.regionCode5,startTime:t.selectTime.time5.startTime,endTime:t.selectTime.time5.endTime},o("log",n," at pages/qing-f-c/report/regionReport.vue:674"),e.next=4,t.$http.get("/data/inquiry",{data:n});case 4:i=e.sent,o("log",i," at pages/qing-f-c/report/regionReport.vue:676"),t.content5=i.data.data;case 7:case"end":return e.stop()}}),e)})))()},getRegionCode:function(){var t=this;return s(r.default.mark((function e(){var n,o;return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("/choose/region",{});case 2:n=e.sent,o=n.data.data.list,o.forEach((function(e){t.regionCodeList1.push({text:e.label,value:e.id}),t.regionCodeList2.push({text:e.label,value:e.id}),t.regionCodeList3.push({text:e.label,value:e.id}),t.regionCodeList4.push({text:e.label,value:e.id}),t.regionCodeList5.push({text:e.label,value:e.id})})),t.regionCodeList1.unshift({text:"全部区域",value:0}),t.regionCodeList2.unshift({text:"全部区域",value:0}),t.regionCodeList3.unshift({text:"全部区域",value:0}),t.regionCodeList4.unshift({text:"全部区域",value:0}),t.regionCodeList5.unshift({text:"全部区域",value:0});case 10:case"end":return e.stop()}}),e)})))()},filterInput:function(t){5==t?this.fetchList5():4==t?this.fetchList4():3==t?this.fetchList3():2==t?this.fetchList2():1==t&&this.fetchList1()},toSelectTime:function(e){t.navigateTo({url:"./selectTime?type=".concat(e)})},tabSwitch2:function(t){this.activeIndex2=t,this.content2Detail=this.content2.list[this.activeIndex2]},tabSwitch:function(t){switch(this.activeIndex=t,t){case 0:this.selectorQuery("#outView","#tabbar1");break;case 1:this.selectorQuery("#outView","#tabbar2");break;case 2:this.selectorQuery("#outView","#tabbar3");break;case 3:this.selectorQuery("#outView","#tabbar4");break;case 4:this.selectorQuery("#outView","#tabbar5");break}},selectorQuery:function(e,n){t.createSelectorQuery().select(e).boundingClientRect((function(e){t.createSelectorQuery().select(n).boundingClientRect((function(n){t.pageScrollTo({duration:0,scrollTop:n.top-e.top})})).exec()})).exec()}}};e.default=b}).call(this,n("6e42")["default"],n("0de9")["default"])},2131:function(t,e,n){"use strict";var o=n("f6db"),r=n.n(o);r.a},"2d79":function(t,e,n){"use strict";var o={"t-table":function(){return n.e("components/t-table/t-table").then(n.bind(null,"2838"))}},r=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return o}))},ae5d:function(t,e,n){"use strict";n.r(e);var o=n("00ab"),r=n.n(o);for(var i in o)"default"!==i&&function(t){n.d(e,t,(function(){return o[t]}))}(i);e["default"]=r.a},b5a8:function(t,e,n){"use strict";(function(t){n("3b9b"),n("921b");o(n("66fd"));var e=o(n("d5b3"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},d5b3:function(t,e,n){"use strict";n.r(e);var o=n("2d79"),r=n("ae5d");for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);n("2131");var a,s=n("f0c5"),c=Object(s["a"])(r["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],a);e["default"]=c.exports},f6db:function(t,e,n){}},[["b5a8","common/runtime","common/vendor"]]]);