(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/qing-f-c/buyDupty/customer-details"],{"16ce":function(t,e,n){"use strict";n.r(e);var o=n("a2c1"),i=n.n(o);for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);e["default"]=i.a},1872:function(t,e,n){"use strict";(function(t){n("3b9b"),n("921b");o(n("66fd"));var e=o(n("4cea"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"4cea":function(t,e,n){"use strict";n.r(e);var o=n("a436"),i=n("16ce");for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);n("c109");var c,u=n("f0c5"),s=Object(u["a"])(i["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],c);e["default"]=s.exports},"6c1b":function(t,e,n){},a2c1:function(t,e,n){"use strict";(function(t,o){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i,a=c(n("4795"));function c(t){return t&&t.__esModule?t:{default:t}}function u(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function s(t,e,n,o,i,a,c){try{var u=t[a](c),s=u.value}catch(r){return void n(r)}u.done?e(s):Promise.resolve(s).then(o,i)}function r(t){return function(){var e=this,n=arguments;return new Promise((function(o,i){var a=t.apply(e,n);function c(t){s(a,o,i,c,u,"next",t)}function u(t){s(a,o,i,c,u,"throw",t)}c(void 0)}))}}var l,f,d=function(){n.e("components/listShow").then(function(){return resolve(n("b9cb"))}.bind(null,n)).catch(n.oe)},g=function(){n.e("components/uni-icons/uni-icons").then(function(){return resolve(n("2cee"))}.bind(null,n)).catch(n.oe)},p=n("b65b"),m=(i={components:{listShow:d,uniIcon:g},data:function(){return{counter:"",placeholdeView:!1,identity:2,linkMan:"",totalCount:"",operation:"",rival:"",customerInfo:"",isProduct:!1,admin:!1,isDisplay:!1,activeIndex:-1,items:["公司信息","联系人","经营状况","竞争对手"],isDoRefresh:!1}},onPullDownRefresh:function(){this.getCustomerInfo()},onShow:function(){this.getCustomerInfo(),this.getLinkMan(),this.getOperation(),this.getRival(),this.getCounter()},onLoad:function(e){l=this,t("log",e," at pages/qing-f-c/buyDupty/customer-details.vue:310"),f=e.companyCode,this.getCustomerInfo(),this.getLinkMan(),this.getOperation(),this.getRival(),this.getCounter()},onPageScroll:function(t){t.scrollTop>180?this.isDisplay=!0:(this.isDisplay=!1,this.placeholdeView=!1)}},u(i,"components",{}),u(i,"props",{}),u(i,"methods",{editCustomeLevel:function(t,e){o.navigateTo({url:"/pages/qing-f-c/buyDupty/updateCustomLevel?companyCode=".concat(t,"&statusCode=").concat(e)})},getCounter:function(){var e=this;return r(a.default.mark((function n(){var o;return a.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.$http.get("/cm/title",{data:{companyCode:f}});case 2:o=n.sent,t("log",o," at pages/qing-f-c/buyDupty/customer-details.vue:340"),e.counter=o.data.data;case 5:case"end":return n.stop()}}),n)})))()},tabSwitch:function(t){switch(this.activeIndex=t,this.placeholdeView=!0,t){case 0:this.selectorQuery("#outView","#companyInfo");break;case 1:this.selectorQuery("#outView","#contact");break;case 2:this.selectorQuery("#outView","#condition");break;case 3:this.selectorQuery("#outView","#competitor");break}},selectorQuery:function(e,n){o.createSelectorQuery().select(e).boundingClientRect((function(e){o.createSelectorQuery().select(n).boundingClientRect((function(n){o.createSelectorQuery().select("#inTabbar").boundingClientRect((function(i){t("log",n.top,e.top,i.height," at pages/qing-f-c/buyDupty/customer-details.vue:371"),o.pageScrollTo({duration:0,scrollTop:n.top-e.top-i.height})})).exec()})).exec()})).exec()},backto:function(){o.navigateBack({delta:1})},getCustomerInfo:function(){var e=this;t("log",f," at pages/qing-f-c/buyDupty/customer-details.vue:389");var n={companyCode:f};p.cmDetail(n).then((function(n){t("log",n," at pages/qing-f-c/buyDupty/customer-details.vue:393"),e.customerInfo=n.data.data,t("log",e.customerInfo," at pages/qing-f-c/buyDupty/customer-details.vue:396")})).catch((function(e){t("log","Err===",e," at pages/qing-f-c/buyDupty/customer-details.vue:399")}))},getLinkMan:function(){var e=this,n={companyCode:f};p.linkMan(n).then((function(n){t("log",n," at pages/qing-f-c/buyDupty/customer-details.vue:407"),e.linkMan=n.data.data.list,l.totalCount=n.data.data.totalCount})).catch((function(e){t("log","Err===",e," at pages/qing-f-c/buyDupty/customer-details.vue:411")}))},getOperation:function(){var e=this,n={companyCode:f};p.operation(n).then((function(n){t("log",n," at pages/qing-f-c/buyDupty/customer-details.vue:418"),e.operation=n.data.data})).catch((function(e){t("log","Err===",e," at pages/qing-f-c/buyDupty/customer-details.vue:421")}))},getRival:function(){var e=this,n={companyCode:f};p.rival(n).then((function(n){t("log","rival===",n," at pages/qing-f-c/buyDupty/customer-details.vue:428"),e.rival=n.data.data.list})).catch((function(e){t("log","Err===",e," at pages/qing-f-c/buyDupty/customer-details.vue:432")}))},toRecordDetails:function(){wx.navigateTo({url:"/pages/qing-f-c/customPicture/sd_followRecordDetail?companyCode=".concat(f)})},goMarginControl:function(){var t=this.customerInfo.id;wx.navigateTo({url:"/pages/jin-suo-yun/customer-admin/margin-control?userId="+t})},toBondDetail:function(){var t=this.customerInfo.id;2==this.customerInfo.type?wx.showToast({title:"开发中...",icon:"none"}):wx.navigateTo({url:"/pages/jin-suo-yun/customer-admin/bond-list?id="+t})},addCompetitor:function(e){var n=this.customerInfo.companyCode;o.navigateTo({url:"/pages/qing-f-c/customPicture/addCompetitor?companyCode=".concat(n),success:function(t){},fail:function(e){t("log",e," at pages/qing-f-c/buyDupty/customer-details.vue:482")},complete:function(){}})},detailCompetitor:function(e){var n=e;o.navigateTo({url:"/pages/qing-f-c/customPicture/competitorDetail?rivalCode=".concat(n),success:function(t){},fail:function(e){t("log",e," at pages/qing-f-c/buyDupty/customer-details.vue:492")},complete:function(){}})},goEditCustomer:function(){var t=this.customerInfo.companyCode;o.navigateTo({url:"/pages/qing-f-c/buyDupty/edit-customer?companyCode="+t,success:function(t){},fail:function(){},complete:function(){}})},addContacts:function(e){var n=this.customerInfo.companyCode;t("log",e," at pages/qing-f-c/buyDupty/customer-details.vue:510"),o.navigateTo({url:"/pages/qing-f-c/buyDupty/add-contact?companyCode="+n,success:function(t){},fail:function(){},complete:function(){}})},toEditLinkman:function(t){var e=t;o.navigateTo({url:"/pages/qing-f-c/buyDupty/contact-detail?buyOrSellCode="+e+"&totalCount="+l.totalCount,success:function(t){},fail:function(){},complete:function(){}})},toSetManagementCondition:function(e,n){t("log",e," at pages/qing-f-c/buyDupty/customer-details.vue:531");var o=this.customerInfo.companyCode;if(2==e)wx.navigateTo({url:"/pages/qing-f-c/buyDupty/setManagerCondition?companyCode="+o});else if(1==e){var i=JSON.stringify(this.operation);wx.navigateTo({url:"/pages/qing-f-c/buyDupty/editManagerCondition?data="+i})}},toInquiry:function(){wx.navigateTo({url:"/pages/jin-suo-yun/customer-admin/sampling-record?id="+_id})},toProductPage:function(){o.navigateTo({url:url})},bindNull:function(){wx.showToast({title:"待开发...",icon:"none"})},tapDelete:function(){if(this.admin){var e=["删除客户"],n=this.customerInfo.id;wx.showActionSheet({itemList:e,success:function(e){wx.showModal({title:"删除客户",content:"删除客户后该客户的信息将作废，确定删除该客户？",success:function(e){e.confirm?p.deleteCompany(n).then((function(t){var e=getCurrentPages(),n=e[e.length-2];n.setData({setOver:!0}),wx.showToast({title:"删除客户成功"});setTimeout((function(){wx.navigateBack({})}),1e3)})).catch((function(e){t("log","删除失败err=>",e," at pages/qing-f-c/buyDupty/customer-details.vue:605"),wx.showToast({title:"删除客户失败",icon:"none"})})):e.cancel&&t("log","用户点击取消"," at pages/qing-f-c/buyDupty/customer-details.vue:612")}}),t("log","111Res---",e," at pages/qing-f-c/buyDupty/customer-details.vue:617")}})}},setData:function(t){var e,n,o=this,i=[];Object.keys(t).forEach((function(a){i=a.split("."),e=t[a],n=o.$data,i.forEach((function(t,a){a+1==i.length?o.$set(n,t,e):n[t]||o.$set(n,t,{}),n=n[t]}))}))}}),i);e.default=m}).call(this,n("0de9")["default"],n("6e42")["default"])},a436:function(t,e,n){"use strict";var o,i=function(){var t=this,e=t.$createElement;t._self._c},a=[];n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return o}))},c109:function(t,e,n){"use strict";var o=n("6c1b"),i=n.n(o);i.a}},[["1872","common/runtime","common/vendor"]]]);