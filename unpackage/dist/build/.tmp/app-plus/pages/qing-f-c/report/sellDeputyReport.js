(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/qing-f-c/report/sellDeputyReport"],{"07ab":function(e,t,n){"use strict";(function(e,o){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n("4795"));function i(e){return e&&e.__esModule?e:{default:e}}function a(e,t,n,o,r,i,a){try{var s=e[i](a),u=s.value}catch(c){return void n(c)}s.done?t(u):Promise.resolve(u).then(o,r)}function s(e){return function(){var t=this,n=arguments;return new Promise((function(o,r){var i=e.apply(t,n);function s(e){a(i,o,r,s,u,"next",e)}function u(e){a(i,o,r,s,u,"throw",e)}s(void 0)}))}}var u=function(){n.e("components/ms-dropdown/dropdown-menu").then(function(){return resolve(n("d8d8"))}.bind(null,n)).catch(n.oe)},c=function(){n.e("components/ms-dropdown/dropdown-item").then(function(){return resolve(n("fa40"))}.bind(null,n)).catch(n.oe)},l=function(){n.e("components/myProgress/myProgress").then(function(){return resolve(n("d349"))}.bind(null,n)).catch(n.oe)},d=function(){n.e("components/tongji-color").then(function(){return resolve(n("95ea"))}.bind(null,n)).catch(n.oe)},f=function(){n.e("components/t-table/t-table").then(function(){return resolve(n("2838"))}.bind(null,n)).catch(n.oe)},p=function(){n.e("components/t-table/t-th").then(function(){return resolve(n("a957"))}.bind(null,n)).catch(n.oe)},m=function(){n.e("components/t-table/t-tr").then(function(){return resolve(n("874e"))}.bind(null,n)).catch(n.oe)},h=function(){n.e("components/t-table/t-td").then(function(){return resolve(n("f11c"))}.bind(null,n)).catch(n.oe)};function g(e){var t=new Date,n=t.getFullYear(),o=t.getMonth()+1,r=t.getDate();return"start"===e?n-=60:"end"===e&&(n+=2),o=o>9?o:"0"+o,r=r>9?r:"0"+r,"".concat(n,"-").concat(o,"-").concat(r)}function v(){var e=new Date,t=new Date(e.getYear(),e.getMonth(),1),n=Number(t.getMonth())+1;return e.getFullYear()+"-"+n+"-"+t.getDate()}var b={components:{msDropdownMenu:u,msDropdownItem:c,myProgress:l,tongjiColor:d,tTable:f,tTh:p,tTr:m,tTd:h},computed:{comPercent:function(){return 0==this.content1.targetMoney?0:this.content1.turnover/this.content1.targetMoney*100},comPercentCount:function(){return 0==this.content1.targetCount?0:this.content1.companyCount/this.content1.targetCount*100}},data:function(){return{postCode:"",userPostList1:[{value:2,text:"采购"},{value:1,text:"销售"}],userPostList2:[{value:2,text:"采购"},{value:1,text:"销售"}],userPostList3:[{value:2,text:"采购"},{value:1,text:"销售"}],userPostList4:[{value:2,text:"采购"},{value:1,text:"销售"}],userPostList5:[{value:2,text:"采购"},{value:1,text:"销售"}],items:["业绩目标","业绩统计","客户跟进","潜在订单","询价统计"],items2:[],activeIndex:-1,activeIndex2:-1,regionCodeList1:[],regionCodeList2:[],regionCodeList3:[],regionCodeList4:[],regionCodeList5:[],selectTime:{time1:{startTime:v({format:!0}),endTime:g({format:!0})},time2:{startTime:v({format:!0}),endTime:g({format:!0})},time3:{startTime:v({format:!0}),endTime:g({format:!0})},time4:{startTime:v({format:!0}),endTime:g({format:!0})},time5:{startTime:v({format:!0}),endTime:g({format:!0})}},regionCode1:0,regionCode2:0,regionCode3:0,regionCode4:0,regionCode5:0,userPostCode1:1,userPostCode2:1,userPostCode3:1,userPostCode4:1,userPostCode5:1,percent:65,content1:"",content2:"",content3:"",content4:"",content5:"",content2Detail:{},label:{label1:"本月",label2:"本月",label3:"本月",label4:"本月",label5:"本月"}}},onLoad:function(){this.getRegionCode(),this.postCode=e.getStorageSync("pupDefault"),this.fetchList1(),this.fetchList2(),this.fetchList3(),this.fetchList4(),this.fetchList5()},methods:{fetchList1:function(){var e=this;return s(r.default.mark((function t(){var n,i;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n={postCode:e.postCode,buyOrSell:e.userPostCode1,regionCode:e.regionCode1,startTime:e.selectTime.time1.startTime,endTime:e.selectTime.time1.endTime},o("log",n," at pages/qing-f-c/report/sellDeputyReport.vue:445"),t.next=4,e.$http.get("/data/target",{data:n});case 4:i=t.sent,o("log",i," at pages/qing-f-c/report/sellDeputyReport.vue:447"),e.content1=i.data.data;case 7:case"end":return t.stop()}}),t)})))()},fetchList2:function(){var e=this;return s(r.default.mark((function t(){var n,i;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n={postCode:e.postCode,buyOrSell:e.userPostCode2,regionCode:e.regionCode2,startTime:e.selectTime.time2.startTime,endTime:e.selectTime.time2.endTime},o("log",n," at pages/qing-f-c/report/sellDeputyReport.vue:461"),t.next=4,e.$http.get("/data/performance",{data:n});case 4:i=t.sent,o("log",i," at pages/qing-f-c/report/sellDeputyReport.vue:463"),e.activeIndex2=-1,e.items2=[],e.content2Detail={},e.content2=i.data.data,e.content2.list.forEach((function(t){e.items2.push(t.realName)}));case 11:case"end":return t.stop()}}),t)})))()},fetchList3:function(){var e=this;return s(r.default.mark((function t(){var n,i;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n={postCode:e.postCode,buyOrSell:e.userPostCode3,regionCode:e.regionCode3,startTime:e.selectTime.time3.startTime,endTime:e.selectTime.time3.endTime},o("log",n," at pages/qing-f-c/report/sellDeputyReport.vue:483"),t.next=4,e.$http.get("/data/follow",{data:n});case 4:i=t.sent,o("log",i," at pages/qing-f-c/report/sellDeputyReport.vue:485"),e.content3=i.data.data;case 7:case"end":return t.stop()}}),t)})))()},fetchList4:function(){var e=this;return s(r.default.mark((function t(){var n,i;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n={postCode:e.postCode,buyOrSell:e.userPostCode4,regionCode:e.regionCode4,startTime:e.selectTime.time4.startTime,endTime:e.selectTime.time4.endTime},o("log",n," at pages/qing-f-c/report/sellDeputyReport.vue:499"),t.next=4,e.$http.get("/data/latent",{data:n});case 4:i=t.sent,o("log",i," at pages/qing-f-c/report/sellDeputyReport.vue:501"),e.content4=i.data.data;case 7:case"end":return t.stop()}}),t)})))()},fetchList5:function(){var e=this;return s(r.default.mark((function t(){var n,i;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n={postCode:e.postCode,buyOrSell:e.userPostCode5,regionCode:e.regionCode5,startTime:e.selectTime.time5.startTime,endTime:e.selectTime.time5.endTime},o("log",n," at pages/qing-f-c/report/sellDeputyReport.vue:515"),t.next=4,e.$http.get("/data/inquiry",{data:n});case 4:i=t.sent,o("log",i," at pages/qing-f-c/report/sellDeputyReport.vue:517"),e.content5=i.data.data.list[0];case 7:case"end":return t.stop()}}),t)})))()},getRegionCode:function(){var e=this;return s(r.default.mark((function t(){var n,o;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("/choose/region",{});case 2:n=t.sent,o=n.data.data.list,o.forEach((function(t){e.regionCodeList1.push({text:t.label,value:t.id}),e.regionCodeList2.push({text:t.label,value:t.id}),e.regionCodeList3.push({text:t.label,value:t.id}),e.regionCodeList4.push({text:t.label,value:t.id}),e.regionCodeList5.push({text:t.label,value:t.id})})),e.regionCodeList1.unshift({text:"全部区域",value:0}),e.regionCodeList2.unshift({text:"全部区域",value:0}),e.regionCodeList3.unshift({text:"全部区域",value:0}),e.regionCodeList4.unshift({text:"全部区域",value:0}),e.regionCodeList5.unshift({text:"全部区域",value:0});case 10:case"end":return t.stop()}}),t)})))()},filterInput:function(e){5==e?this.fetchList5():4==e?this.fetchList4():3==e?this.fetchList3():2==e?this.fetchList2():1==e&&this.fetchList1()},toSelectTime:function(t){e.navigateTo({url:"./selectTime?type=".concat(t)})},tabSwitch2:function(e){this.activeIndex2=e,this.content2Detail=this.content2.list[this.activeIndex2]},tabSwitch:function(e){switch(this.activeIndex=e,e){case 0:this.selectorQuery("#outView","#tabbar1");break;case 1:this.selectorQuery("#outView","#tabbar2");break;case 2:this.selectorQuery("#outView","#tabbar3");break;case 3:this.selectorQuery("#outView","#tabbar4");break;case 4:this.selectorQuery("#outView","#tabbar5");break}},selectorQuery:function(t,n){e.createSelectorQuery().select(t).boundingClientRect((function(t){e.createSelectorQuery().select(n).boundingClientRect((function(n){e.pageScrollTo({duration:0,scrollTop:n.top-t.top})})).exec()})).exec()}}};t.default=b}).call(this,n("6e42")["default"],n("0de9")["default"])},2812:function(e,t,n){"use strict";n.r(t);var o=n("07ab"),r=n.n(o);for(var i in o)"default"!==i&&function(e){n.d(t,e,(function(){return o[e]}))}(i);t["default"]=r.a},"7f13":function(e,t,n){},"9eb4":function(e,t,n){"use strict";var o={myProgress:function(){return n.e("components/myProgress/myProgress").then(n.bind(null,"d349"))}},r=function(){var e=this,t=e.$createElement;e._self._c},i=[];n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return o}))},aa98:function(e,t,n){"use strict";n.r(t);var o=n("9eb4"),r=n("2812");for(var i in r)"default"!==i&&function(e){n.d(t,e,(function(){return r[e]}))}(i);n("eb07");var a,s=n("f0c5"),u=Object(s["a"])(r["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],a);t["default"]=u.exports},eb07:function(e,t,n){"use strict";var o=n("7f13"),r=n.n(o);r.a},eb99:function(e,t,n){"use strict";(function(e){n("3b9b"),n("921b");o(n("66fd"));var t=o(n("aa98"));function o(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])}},[["eb99","common/runtime","common/vendor"]]]);