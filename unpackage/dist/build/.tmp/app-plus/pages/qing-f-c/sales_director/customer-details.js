(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/qing-f-c/sales_director/customer-details"],{"450e":function(e,t,n){"use strict";n.r(t);var o=n("8174"),i=n.n(o);for(var a in o)"default"!==a&&function(e){n.d(t,e,(function(){return o[e]}))}(a);t["default"]=i.a},8174:function(e,t,n){"use strict";(function(e,o){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i,a=c(n("4795"));function c(e){return e&&e.__esModule?e:{default:e}}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t,n,o,i,a,c){try{var s=e[a](c),r=s.value}catch(u){return void n(u)}s.done?t(r):Promise.resolve(r).then(o,i)}function u(e){return function(){var t=this,n=arguments;return new Promise((function(o,i){var a=e.apply(t,n);function c(e){r(a,o,i,c,s,"next",e)}function s(e){r(a,o,i,c,s,"throw",e)}c(void 0)}))}}var l,f,d=function(){n.e("components/listShow").then(function(){return resolve(n("b9cb"))}.bind(null,n)).catch(n.oe)},g=function(){n.e("components/uni-icons/uni-icons").then(function(){return resolve(n("2cee"))}.bind(null,n)).catch(n.oe)},p=n("b65b"),m=(i={components:{listShow:d,uniIcon:g},data:function(){return{counter:"",identity:2,linkMan:"",operation:"",rival:"",customerInfo:"",isProduct:!1,admin:!1,isDisplay:!1,activeIndex:-1,items:["公司信息","联系人","经营状况","竞争对手"],itemsSell:["公司信息","联系人","经营状况"],isDoRefresh:!1,placeholdeView:!1,companyCode:""}},onPullDownRefresh:function(){this.getCustomerInfo()},onShow:function(){var e=getCurrentPages(),t=e[e.length-1];1==t.data.isDoRefresh&&(t.data.isDoRefresh=!1,this.getCustomerInfo(),this.getLinkMan(),this.getOperation(),this.getRival()),this.getCounter()},onLoad:function(t){l=this,e("log",t," at pages/qing-f-c/sales_director/customer-details.vue:368"),f=t.companyCode,this.companyCode=t.companyCode,this.getCustomerInfo(),this.getLinkMan(),this.getOperation(),this.getRival(),this.getCounter()},onPageScroll:function(e){e.scrollTop>180?this.isDisplay=!0:(this.isDisplay=!1,this.placeholdeView=!1)}},s(i,"components",{}),s(i,"props",{}),s(i,"methods",{getCounter:function(){var t=this;return u(a.default.mark((function n(){var o;return a.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.$http.get("/cm/title",{data:{companyCode:f}});case 2:o=n.sent,e("log",o," at pages/qing-f-c/sales_director/customer-details.vue:394"),t.counter=o.data.data;case 5:case"end":return n.stop()}}),n)})))()},tabSwitch:function(e){switch(this.activeIndex=e,this.placeholdeView=!0,e){case 0:this.selectorQuery("#outView","#companyInfo");break;case 1:this.selectorQuery("#outView","#contact");break;case 2:this.selectorQuery("#outView","#condition");break;case 3:this.selectorQuery("#outView","#competitor");break}},selectorQuery:function(t,n){o.createSelectorQuery().select(t).boundingClientRect((function(t){o.createSelectorQuery().select(n).boundingClientRect((function(n){o.createSelectorQuery().select("#inTabbar").boundingClientRect((function(i){e("log",n.top,t.top,i.height," at pages/qing-f-c/sales_director/customer-details.vue:421"),o.pageScrollTo({duration:0,scrollTop:n.top-t.top-i.height})})).exec()})).exec()})).exec()},backto:function(){o.navigateBack({delta:1})},getCustomerInfo:function(){var t=this;e("log",f," at pages/qing-f-c/sales_director/customer-details.vue:439");var n={companyCode:f};p.cmDetail(n).then((function(n){e("log",n," at pages/qing-f-c/sales_director/customer-details.vue:443"),t.customerInfo=n.data.data,e("log",t.customerInfo," at pages/qing-f-c/sales_director/customer-details.vue:446")})).catch((function(t){e("log","Err===",t," at pages/qing-f-c/sales_director/customer-details.vue:449")}))},getLinkMan:function(){var t=this,n={companyCode:f};p.linkMan(n).then((function(n){e("log",n," at pages/qing-f-c/sales_director/customer-details.vue:457"),t.linkMan=n.data.data.list})).catch((function(t){e("log","Err===",t," at pages/qing-f-c/sales_director/customer-details.vue:460")}))},getOperation:function(){var t=this,n={companyCode:f};p.operation(n).then((function(n){e("log",n," at pages/qing-f-c/sales_director/customer-details.vue:467"),t.operation=n.data.data})).catch((function(t){e("log","Err===",t," at pages/qing-f-c/sales_director/customer-details.vue:470")}))},getRival:function(){var t=this,n={companyCode:f};p.rival(n).then((function(n){e("log","rival===",n," at pages/qing-f-c/sales_director/customer-details.vue:477"),t.rival=n.data.data.list})).catch((function(t){e("log","Err===",t," at pages/qing-f-c/sales_director/customer-details.vue:481")}))},toRecordDetails:function(){wx.navigateTo({url:"/pages/qing-f-c/customPicture/sd_followRecordDetail?companyCode=".concat(f)})},goMarginControl:function(){var e=this.customerInfo.id;wx.navigateTo({url:"/pages/jin-suo-yun/customer-admin/margin-control?userId="+e})},toBondDetail:function(){var e=this.customerInfo.id;2==this.customerInfo.type?wx.showToast({title:"开发中...",icon:"none"}):wx.navigateTo({url:"/pages/jin-suo-yun/customer-admin/bond-list?id="+e})},addCompetitor:function(t){var n=this.customerInfo.companyCode;o.navigateTo({url:"/pages/qing-f-c/sellDupty/add-competitor?companyCode="+n,success:function(t){e("log",t," at pages/qing-f-c/sales_director/customer-details.vue:539")},fail:function(t){e("log",t," at pages/qing-f-c/sales_director/customer-details.vue:542")},complete:function(){}})},detailCompetitor:function(t){var n=t;o.navigateTo({url:"/pages/qing-f-c/sellDupty/detail-competitor?rivalCode="+n,success:function(t){e("log",t," at pages/qing-f-c/sales_director/customer-details.vue:553")},fail:function(t){e("log",t," at pages/qing-f-c/sales_director/customer-details.vue:556")},complete:function(){}})},goEditCustomer:function(){var e=this.customerInfo.companyCode;o.navigateTo({url:"/pages/qing-f-c/sellDupty/edit-customer?companyCode="+e,success:function(e){},fail:function(){},complete:function(){}})},addContacts:function(t){var n=this.customerInfo.companyCode;e("log",t," at pages/qing-f-c/sales_director/customer-details.vue:575"),o.navigateTo({url:"/pages/qing-f-c/sellDupty/add-contact?companyCode="+n,success:function(e){},fail:function(){},complete:function(){}})},toEditLinkman:function(e){var t=e;o.navigateTo({url:"/pages/qing-f-c/sellDupty/contact-detail?buyOrSellCode="+t,success:function(e){},fail:function(){},complete:function(){}})},toSetManagementCondition:function(e,t){var n=this.customerInfo.companyCode;if(2==e)wx.navigateTo({url:"/pages/qing-f-c/sellDupty/setManagerCondition?companyCode="+n});else if(1==e){var o=JSON.stringify(this.operation);wx.navigateTo({url:"/pages/qing-f-c/sellDupty/editManagerCondition?data="+o})}},toInquiry:function(){wx.navigateTo({url:"/pages/jin-suo-yun/customer-admin/sampling-record?id="+_id})},toProductPage:function(){if(2==this.customerInfo.buyOrSell){var e="/pages/qing-f-c/productShow/mainShow?companyCode=".concat(this.companyCode);wx.navigateTo({url:e})}},bindNull:function(){wx.showToast({title:"待开发...",icon:"none"})},tapDelete:function(){if(this.admin){var t=["删除客户"],n=this.customerInfo.id;wx.showActionSheet({itemList:t,success:function(t){wx.showModal({title:"删除客户",content:"删除客户后该客户的信息将作废，确定删除该客户？",success:function(t){t.confirm?p.deleteCompany(n).then((function(e){var t=getCurrentPages(),n=t[t.length-2];n.setData({setOver:!0}),wx.showToast({title:"删除客户成功"});setTimeout((function(){wx.navigateBack({})}),1e3)})).catch((function(t){e("log","删除失败err=>",t," at pages/qing-f-c/sales_director/customer-details.vue:666"),wx.showToast({title:"删除客户失败",icon:"none"})})):t.cancel&&e("log","用户点击取消"," at pages/qing-f-c/sales_director/customer-details.vue:673")}}),e("log","111Res---",t," at pages/qing-f-c/sales_director/customer-details.vue:678")}})}},delCustomer:function(t){return u(a.default.mark((function n(){return a.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:o.showModal({title:"提示",content:"确认删除该客户吗？",success:function(n){return u(a.default.mark((function i(){var c;return a.default.wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(!n.confirm){i.next=9;break}return o.showLoading({title:"提交中",mask:!0}),c={companyCode:t},i.next=5,l.$http.get("/cm/del",{data:c});case 5:o.hideLoading(),o.navigateBack({delta:-1}),i.next=10;break;case 9:n.cancel&&e("log","用户点击取消"," at pages/qing-f-c/sales_director/customer-details.vue:700");case 10:case"end":return i.stop()}}),i)})))()}});case 1:case"end":return n.stop()}}),n)})))()},setData:function(e){var t,n,o=this,i=[];Object.keys(e).forEach((function(a){i=a.split("."),t=e[a],n=o.$data,i.forEach((function(e,a){a+1==i.length?o.$set(n,e,t):n[e]||o.$set(n,e,{}),n=n[e]}))}))}}),i);t.default=m}).call(this,n("0de9")["default"],n("6e42")["default"])},bef2:function(e,t,n){},c240:function(e,t,n){"use strict";var o,i=function(){var e=this,t=e.$createElement;e._self._c},a=[];n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return o}))},cdf7:function(e,t,n){"use strict";(function(e){n("3b9b"),n("921b");o(n("66fd"));var t=o(n("f4d2"));function o(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},eb53:function(e,t,n){"use strict";var o=n("bef2"),i=n.n(o);i.a},f4d2:function(e,t,n){"use strict";n.r(t);var o=n("c240"),i=n("450e");for(var a in i)"default"!==a&&function(e){n.d(t,e,(function(){return i[e]}))}(a);n("eb53");var c,s=n("f0c5"),r=Object(s["a"])(i["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],c);t["default"]=r.exports}},[["cdf7","common/runtime","common/vendor"]]]);