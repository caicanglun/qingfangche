(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/qing-f-c/inquiryManage/inquiryManage"],{"0840":function(i,n,t){"use strict";t.r(n);var e=t("b125"),a=t.n(e);for(var u in e)"default"!==u&&function(i){t.d(n,i,function(){return e[i]})}(u);n["default"]=a.a},"6b5d":function(i,n,t){"use strict";var e=function(){var i=this,n=i.$createElement;i._self._c},a=[];t.d(n,"a",function(){return e}),t.d(n,"b",function(){return a})},"72c3":function(i,n,t){},"8f43":function(i,n,t){"use strict";var e=t("72c3"),a=t.n(e);a.a},b125:function(i,n,t){"use strict";(function(i,e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a,u,o=function(){return t.e("components/uni-icons/uni-icons").then(t.bind(null,"2cee"))},r=function(){return t.e("components/topTabbar").then(t.bind(null,"48c9"))},s=function(){return t.e("components/filterButton").then(t.bind(null,"76fe"))},c=function(){return t.e("components/inquireList").then(t.bind(null,"0f1f"))},l=function(){return t.e("components/uni-load-more/uni-load-more").then(t.bind(null,"fbad"))},f={components:{uniIcon:o,topTabbar:r,filterButton:s,inquireList:c,uniLoadMore:l},data:function(){return{loadingType:"more",inputValueOne:"",items:["我的询价","常规询价","找样询价"],activeIndex:0,filterButton:["近3天","近7天","近15天","一个月内"],fitlerButtonIndex:-1,count:0,lists:[],totalPage:"",keyword:"",affiliation:1,inquiryType:0,time:0,pageNum:1,pageSize:20,isDoRefresh:!1}},onReachBottom:function(){null!=u&&clearTimeout(u),u=setTimeout(function(){a.getmoreInquiry()},1e3)},onPullDownRefresh:function(){this.getInquiryList()},onShow:function(){var i=getCurrentPages(),n=i[i.length-1];1==n.data.isDoRefresh&&(n.data.isDoRefresh=!1,this.getInquiryList())},onLoad:function(){a=this,this.getInquiryList()},methods:{getmoreInquiry:function(){if("more"!==a.loadingType)return!1;a.loadingType="loading",i.showNavigationBarLoading();var n={keyword:a.keyword,affiliation:a.affiliation,inquiryType:a.inquiryType,time:a.time,pageNum:a.pageNum,pageSize:a.pageSize},t=this.Api.buyDeputyList;this.myRequest(n,t,"get").then(function(n){if(console.log(e(n," at pages/qing-f-c/inquiryManage/inquiryManage.vue:126")),0==n.data.data.list.length)return console.log(e("no data"," at pages/qing-f-c/inquiryManage/inquiryManage.vue:128")),a.loadingType="",void i.hideNavigationBarLoading();a.pageNum++,a.lists=a.lists.concat(n.data.data.list),a.loadingType="more",i.hideNavigationBarLoading()}).catch(function(n){console.log(e(n," at pages/qing-f-c/inquiryManage/inquiryManage.vue:138")),i.showToast({title:n.data.errMsg,icon:"none"})})},getInquiryList:function(){a.pageNum=1,a.fitlerButtonIndex=-1,a.loadingType="more",i.showNavigationBarLoading();var n={keyword:a.keyword,affiliation:a.affiliation,inquiryType:a.inquiryType,time:a.time,pageNum:a.pageNum,pageSize:a.pageSize},t=this.Api.buyDeputyList;this.myRequest(n,t,"get").then(function(i){a.pageNum++,console.log(e(i," at pages/qing-f-c/inquiryManage/inquiryManage.vue:164")),a.lists=i.data.data.list,a.count=i.data.data.totalCount,a.totalPage=i.data.data.totalPage}).catch(function(i){wx.showToast({title:i.data.errMsg,icon:"none"})}),i.hideNavigationBarLoading(),i.stopPullDownRefresh()},toDetail:function(n){var t=n[0],a=n[1];console.log(e("xunjialeixing",a," at pages/qing-f-c/inquiryManage/inquiryManage.vue:184")),1==a?i.navigateTo({url:"/pages/qing-f-c/inquiryManage/inquiry-details?inquiryNumber="+t,success:function(i){},fail:function(){},complete:function(){}}):i.navigateTo({url:"/pages/qing-f-c/inquiryManage/sampleInquiry/buyDeputy/inquiry-details?inquiryNumber="+t,success:function(i){},fail:function(){},complete:function(){}})},tabSwitch:function(i){switch(this.activeIndex=i,console.log(e("activeIndex",this.activeIndex," at pages/qing-f-c/inquiryManage/inquiryManage.vue:203")),this.activeIndex){case 0:this.affiliation=1,this.inquiryType=0,this.getInquiryList();break;case 1:this.affiliation=2,this.inquiryType=1,this.getInquiryList();break;case 2:this.affiliation=2,this.inquiryType=2,this.getInquiryList();break}},filterButtonChange:function(i){switch(this.fitlerButtonIndex=i,i){case 0:this.time=3,this.pageNum=1;break;case 1:this.time=7,this.pageNum=1;break;case 2:this.time=15,this.pageNum=1;break;case 3:this.time=30,this.pageNum=1;break}this.getInquiryList(),console.log(e("fiterButtonIndex",this.fitlerButtonIndex," at pages/qing-f-c/inquiryManage/inquiryManage.vue:243"))},blurInput:function(i){},toNewBuild:function(){i.navigateTo({url:"/pages/qing-f-c/inquiryManage/inquiry-created",success:function(i){},fail:function(){},complete:function(){}})},toModelSearch:function(){},tapSearch:function(){this.keyword=this.inputValueOne,console.log(e(this.keyword," at pages/qing-f-c/inquiryManage/inquiryManage.vue:262")),this.getInquiryList(),this.inputValueOne="",this.keyword=""}}};n.default=f}).call(this,t("6e42")["default"],t("0de9")["default"])},daa3:function(i,n,t){"use strict";t.r(n);var e=t("6b5d"),a=t("0840");for(var u in a)"default"!==u&&function(i){t.d(n,i,function(){return a[i]})}(u);t("8f43");var o=t("2877"),r=Object(o["a"])(a["default"],e["a"],e["b"],!1,null,null,null);n["default"]=r.exports},eb19:function(i,n,t){"use strict";(function(i){t("3b9b"),t("921b");e(t("66fd"));var n=e(t("daa3"));function e(i){return i&&i.__esModule?i:{default:i}}i(n.default)}).call(this,t("6e42")["createPage"])}},[["eb19","common/runtime","common/vendor"]]]);