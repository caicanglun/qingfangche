(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/qing-f-c/regionalManager/customer-details"],{"6c1a":function(e,t,n){"use strict";n.r(t);var o=n("b768"),a=n.n(o);for(var i in o)"default"!==i&&function(e){n.d(t,e,function(){return o[e]})}(i);t["default"]=a.a},"88bd":function(e,t,n){"use strict";var o=n("f151"),a=n.n(o);a.a},"892e":function(e,t,n){"use strict";n.r(t);var o=n("cb6b"),a=n("6c1a");for(var i in a)"default"!==i&&function(e){n.d(t,e,function(){return a[e]})}(i);n("88bd");var c=n("2877"),s=Object(c["a"])(a["default"],o["a"],o["b"],!1,null,null,null);t["default"]=s.exports},"8e65":function(e,t,n){"use strict";(function(e){n("3b9b"),n("921b");o(n("66fd"));var t=o(n("892e"));function o(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},b768:function(e,t,n){"use strict";(function(e,o){var a;function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c,s,r=function(){return n.e("components/listShow").then(n.bind(null,"b9cb"))},u=function(){return n.e("components/uni-icons/uni-icons").then(n.bind(null,"2cee"))},l=n("b65b"),g=(a={components:{listShow:r,uniIcon:u},data:function(){return{placeholdeView:!1,identity:2,linkMan:"",operation:"",rival:"",customerInfo:"",isProduct:!1,admin:!1,isDisplay:!1,activeIndex:-1,items:["公司信息","联系人","经营状况","竞争对手"],itemsSell:["公司信息","联系人","经营状况"],isDoRefresh:!1}},onPullDownRefresh:function(){this.getCustomerInfo()},onShow:function(){var e=getCurrentPages(),t=e[e.length-1];1==t.data.isDoRefresh&&(t.data.isDoRefresh=!1,this.getCustomerInfo(),this.getLinkMan(),this.getOperation(),this.getRival())},onLoad:function(t){c=this,console.log(e(t," at pages/qing-f-c/regionalManager/customer-details.vue:329")),s=t.companyCode,this.getCustomerInfo(),this.getLinkMan(),this.getOperation(),this.getRival()},onPageScroll:function(e){e.scrollTop>180?this.isDisplay=!0:(this.isDisplay=!1,this.placeholdeView=!1)}},i(a,"components",{}),i(a,"props",{}),i(a,"methods",{tabSwitch:function(e){switch(this.activeIndex=e,this.placeholdeView=!0,e){case 0:this.selectorQuery("#outView","#companyInfo");break;case 1:this.selectorQuery("#outView","#contact");break;case 2:this.selectorQuery("#outView","#condition");break;case 3:this.selectorQuery("#outView","#competitor");break}},selectorQuery:function(t,n){o.createSelectorQuery().select(t).boundingClientRect(function(t){o.createSelectorQuery().select(n).boundingClientRect(function(n){o.createSelectorQuery().select("#inTabbar").boundingClientRect(function(a){console.log(e(n.top,t.top,a.height," at pages/qing-f-c/regionalManager/customer-details.vue:373")),o.pageScrollTo({duration:0,scrollTop:n.top-t.top-a.height})}).exec()}).exec()}).exec()},backto:function(){o.navigateBack({delta:1})},getCustomerInfo:function(){var t=this;console.log(e(s," at pages/qing-f-c/regionalManager/customer-details.vue:391"));var n={companyCode:s};l.cmDetail(n).then(function(n){console.log(e(n," at pages/qing-f-c/regionalManager/customer-details.vue:395")),t.customerInfo=n.data.data,console.log(e(t.customerInfo," at pages/qing-f-c/regionalManager/customer-details.vue:398"))}).catch(function(t){console.log(e("Err===",t," at pages/qing-f-c/regionalManager/customer-details.vue:401"))})},getLinkMan:function(){var t=this,n={companyCode:s};l.linkMan(n).then(function(n){console.log(e(n," at pages/qing-f-c/regionalManager/customer-details.vue:409")),t.linkMan=n.data.data.list}).catch(function(t){console.log(e("Err===",t," at pages/qing-f-c/regionalManager/customer-details.vue:412"))})},getOperation:function(){var t={companyCode:s};l.operation(t).then(function(t){console.log(e("获取经营状况",t," at pages/qing-f-c/regionalManager/customer-details.vue:419")),c.operation=t.data.data}).catch(function(t){console.log(e("Err===",t," at pages/qing-f-c/regionalManager/customer-details.vue:422"))})},getRival:function(){var t=this,n={companyCode:s};l.rival(n).then(function(n){console.log(e("rival===",n," at pages/qing-f-c/regionalManager/customer-details.vue:429")),t.rival=n.data.data.list}).catch(function(t){console.log(e("Err===",t," at pages/qing-f-c/regionalManager/customer-details.vue:433"))})},toRecordDetails:function(){var e=this.customerInfo.id;wx.navigateTo({url:"/pages/jin-suo-yun/customer-admin/record-details?userId="+e+"&name="+this.customerInfo.corporateName})},goMarginControl:function(){var e=this.customerInfo.id;wx.navigateTo({url:"/pages/jin-suo-yun/customer-admin/margin-control?userId="+e})},toBondDetail:function(){var e=this.customerInfo.id;2==this.customerInfo.type?wx.showToast({title:"开发中...",icon:"none"}):wx.navigateTo({url:"/pages/jin-suo-yun/customer-admin/bond-list?id="+e})},addCompetitor:function(t){var n=this.customerInfo.companyCode;o.navigateTo({url:"/pages/qing-f-c/sellDupty/add-competitor?companyCode="+n,success:function(t){console.log(e(t," at pages/qing-f-c/regionalManager/customer-details.vue:483"))},fail:function(t){console.log(e(t," at pages/qing-f-c/regionalManager/customer-details.vue:486"))},complete:function(){}})},detailCompetitor:function(t){var n=t;o.navigateTo({url:"/pages/qing-f-c/sellDupty/detail-competitor?rivalCode="+n,success:function(t){console.log(e(t," at pages/qing-f-c/regionalManager/customer-details.vue:497"))},fail:function(t){console.log(e(t," at pages/qing-f-c/regionalManager/customer-details.vue:500"))},complete:function(){}})},goEditCustomer:function(){var e=this.customerInfo.companyCode;o.navigateTo({url:"/pages/qing-f-c/sellDupty/edit-customer?companyCode="+e,success:function(e){},fail:function(){},complete:function(){}})},addContacts:function(t){var n=this.customerInfo.companyCode;console.log(e(t," at pages/qing-f-c/regionalManager/customer-details.vue:519")),o.navigateTo({url:"/pages/qing-f-c/sellDupty/add-contact?companyCode="+n,success:function(e){},fail:function(){},complete:function(){}})},toEditLinkman:function(e){var t=e;o.navigateTo({url:"/pages/qing-f-c/sellDupty/contact-detail?buyOrSellCode="+t,success:function(e){},fail:function(){},complete:function(){}})},toSetManagementCondition:function(e,t){var n=this.customerInfo.companyCode;if(2==e)wx.navigateTo({url:"/pages/qing-f-c/sellDupty/setManagerCondition?companyCode="+n});else if(1==e){var o=JSON.stringify(this.operation);wx.navigateTo({url:"/pages/qing-f-c/sellDupty/editManagerCondition?data="+o})}},toInquiry:function(){wx.navigateTo({url:"/pages/jin-suo-yun/customer-admin/sampling-record?id="+_id})},toProductPage:function(){var e,t=this.customerInfo.productInfo;e=t?"/pages/jin-suo-yun/customer-admin/product-display?customerId="+_id:"/pages/jin-suo-yun/customer-admin/add-productpage?type="+this.customerInfo.type+"&customerid="+_id,wx.navigateTo({url:e})},bindNull:function(){wx.showToast({title:"待开发...",icon:"none"})},tapDelete:function(){if(this.admin){var t=["删除客户"],n=this.customerInfo.id;wx.showActionSheet({itemList:t,success:function(t){wx.showModal({title:"删除客户",content:"删除客户后该客户的信息将作废，确定删除该客户？",success:function(t){t.confirm?l.deleteCompany(n).then(function(e){var t=getCurrentPages(),n=t[t.length-2];n.setData({setOver:!0}),wx.showToast({title:"删除客户成功"});setTimeout(function(){wx.navigateBack({})},1e3)}).catch(function(t){console.log(e("删除失败err=>",t," at pages/qing-f-c/regionalManager/customer-details.vue:613")),wx.showToast({title:"删除客户失败",icon:"none"})}):t.cancel&&console.log(e("用户点击取消"," at pages/qing-f-c/regionalManager/customer-details.vue:620"))}}),console.log(e("111Res---",t," at pages/qing-f-c/regionalManager/customer-details.vue:625"))}})}},setData:function(e){var t,n,o=this,a=[];Object.keys(e).forEach(function(i){a=i.split("."),t=e[i],n=o.$data,a.forEach(function(e,i){i+1==a.length?o.$set(n,e,t):n[e]||o.$set(n,e,{}),n=n[e]})})}}),a);t.default=g}).call(this,n("0de9")["default"],n("6e42")["default"])},cb6b:function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement;e._self._c},a=[];n.d(t,"a",function(){return o}),n.d(t,"b",function(){return a})},f151:function(e,t,n){}},[["8e65","common/runtime","common/vendor"]]]);