(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/qing-f-c/buyDupty/customer-details"],{"16ce":function(t,e,o){"use strict";o.r(e);var n=o("efc0"),i=o.n(n);for(var a in n)"default"!==a&&function(t){o.d(e,t,function(){return n[t]})}(a);e["default"]=i.a},1872:function(t,e,o){"use strict";(function(t){o("3b9b"),o("921b");n(o("66fd"));var e=n(o("4cea"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,o("6e42")["createPage"])},"4cea":function(t,e,o){"use strict";o.r(e);var n=o("84e5"),i=o("16ce");for(var a in i)"default"!==a&&function(t){o.d(e,t,function(){return i[t]})}(a);o("c109");var c=o("2877"),u=Object(c["a"])(i["default"],n["a"],n["b"],!1,null,null,null);e["default"]=u.exports},"84e5":function(t,e,o){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c},i=[];o.d(e,"a",function(){return n}),o.d(e,"b",function(){return i})},bd87:function(t,e,o){},c109:function(t,e,o){"use strict";var n=o("bd87"),i=o.n(n);i.a},efc0:function(t,e,o){"use strict";(function(t,n){var i;function a(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var c,u=function(){return o.e("components/listShow").then(o.bind(null,"b9cb"))},s=function(){return o.e("components/uni-icons/uni-icons").then(o.bind(null,"2cee"))},r=o("b65b"),l=(i={components:{listShow:u,uniIcon:s},data:function(){return{placeholdeView:!1,identity:2,linkMan:"",operation:"",rival:"",customerInfo:"",isProduct:!1,admin:!1,isDisplay:!1,activeIndex:-1,items:["公司信息","联系人","经营状况","竞争对手"],isDoRefresh:!1}},onPullDownRefresh:function(){this.getCustomerInfo()},onShow:function(){var t=getCurrentPages(),e=t[t.length-1];1==e.data.isDoRefresh&&(e.data.isDoRefresh=!1,this.getCustomerInfo(),this.getLinkMan(),this.getOperation(),this.getRival())},onLoad:function(e){this,console.log(t(e," at pages/qing-f-c/buyDupty/customer-details.vue:292")),c=e.companyCode,this.getCustomerInfo(),this.getLinkMan(),this.getOperation(),this.getRival()},onPageScroll:function(t){t.scrollTop>180?this.isDisplay=!0:(this.isDisplay=!1,this.placeholdeView=!1)}},a(i,"components",{}),a(i,"props",{}),a(i,"methods",{tabSwitch:function(t){switch(this.activeIndex=t,this.placeholdeView=!0,t){case 0:this.selectorQuery("#outView","#companyInfo");break;case 1:this.selectorQuery("#outView","#contact");break;case 2:this.selectorQuery("#outView","#condition");break;case 3:this.selectorQuery("#outView","#competitor");break}},selectorQuery:function(e,o){n.createSelectorQuery().select(e).boundingClientRect(function(e){n.createSelectorQuery().select(o).boundingClientRect(function(o){n.createSelectorQuery().select("#inTabbar").boundingClientRect(function(i){console.log(t(o.top,e.top,i.height," at pages/qing-f-c/buyDupty/customer-details.vue:340")),n.pageScrollTo({duration:0,scrollTop:o.top-e.top-i.height})}).exec()}).exec()}).exec()},backto:function(){n.navigateBack({delta:1})},getCustomerInfo:function(){var e=this;console.log(t(c," at pages/qing-f-c/buyDupty/customer-details.vue:358"));var o={companyCode:c};r.cmDetail(o).then(function(o){console.log(t(o," at pages/qing-f-c/buyDupty/customer-details.vue:362")),e.customerInfo=o.data.data,console.log(t(e.customerInfo," at pages/qing-f-c/buyDupty/customer-details.vue:365"))}).catch(function(e){console.log(t("Err===",e," at pages/qing-f-c/buyDupty/customer-details.vue:368"))})},getLinkMan:function(){var e=this,o={companyCode:c};r.linkMan(o).then(function(o){console.log(t(o," at pages/qing-f-c/buyDupty/customer-details.vue:376")),e.linkMan=o.data.data.list}).catch(function(e){console.log(t("Err===",e," at pages/qing-f-c/buyDupty/customer-details.vue:379"))})},getOperation:function(){var e=this,o={companyCode:c};r.operation(o).then(function(o){console.log(t(o," at pages/qing-f-c/buyDupty/customer-details.vue:386")),e.operation=o.data.data}).catch(function(e){console.log(t("Err===",e," at pages/qing-f-c/buyDupty/customer-details.vue:389"))})},getRival:function(){var e=this,o={companyCode:c};r.rival(o).then(function(o){console.log(t("rival===",o," at pages/qing-f-c/buyDupty/customer-details.vue:396")),e.rival=o.data.data.list}).catch(function(e){console.log(t("Err===",e," at pages/qing-f-c/buyDupty/customer-details.vue:400"))})},toRecordDetails:function(){var t=this.customerInfo.id;wx.navigateTo({url:"/pages/jin-suo-yun/customer-admin/record-details?userId="+t+"&name="+this.customerInfo.corporateName})},goMarginControl:function(){var t=this.customerInfo.id;wx.navigateTo({url:"/pages/jin-suo-yun/customer-admin/margin-control?userId="+t})},toBondDetail:function(){var t=this.customerInfo.id;2==this.customerInfo.type?wx.showToast({title:"开发中...",icon:"none"}):wx.navigateTo({url:"/pages/jin-suo-yun/customer-admin/bond-list?id="+t})},addCompetitor:function(e){var o=this.customerInfo.companyCode;n.navigateTo({url:"/pages/qing-f-c/buyDupty/add-competitor?companyCode="+o,success:function(e){console.log(t(e," at pages/qing-f-c/buyDupty/customer-details.vue:450"))},fail:function(e){console.log(t(e," at pages/qing-f-c/buyDupty/customer-details.vue:453"))},complete:function(){}})},detailCompetitor:function(e){var o=e;n.navigateTo({url:"/pages/qing-f-c/buyDupty/detail-competitor?rivalCode="+o,success:function(e){console.log(t(e," at pages/qing-f-c/buyDupty/customer-details.vue:464"))},fail:function(e){console.log(t(e," at pages/qing-f-c/buyDupty/customer-details.vue:467"))},complete:function(){}})},goEditCustomer:function(){var t=this.customerInfo.companyCode;n.navigateTo({url:"/pages/qing-f-c/buyDupty/edit-customer?companyCode="+t,success:function(t){},fail:function(){},complete:function(){}})},addContacts:function(e){var o=this.customerInfo.companyCode;console.log(t(e," at pages/qing-f-c/buyDupty/customer-details.vue:486")),n.navigateTo({url:"/pages/qing-f-c/buyDupty/add-contact?companyCode="+o,success:function(t){},fail:function(){},complete:function(){}})},toEditLinkman:function(t){var e=t;n.navigateTo({url:"/pages/qing-f-c/buyDupty/contact-detail?buyOrSellCode="+e,success:function(t){},fail:function(){},complete:function(){}})},toSetManagementCondition:function(e,o){console.log(t(e," at pages/qing-f-c/buyDupty/customer-details.vue:507"));var n=this.customerInfo.companyCode;if(2==e)wx.navigateTo({url:"/pages/qing-f-c/buyDupty/setManagerCondition?companyCode="+n});else if(1==e){var i=JSON.stringify(this.operation);wx.navigateTo({url:"/pages/qing-f-c/buyDupty/editManagerCondition?data="+i})}},toInquiry:function(){wx.navigateTo({url:"/pages/jin-suo-yun/customer-admin/sampling-record?id="+_id})},toProductPage:function(){var t,e=this.customerInfo.productInfo;t=e?"/pages/jin-suo-yun/customer-admin/product-display?customerId="+_id:"/pages/jin-suo-yun/customer-admin/add-productpage?type="+this.customerInfo.type+"&customerid="+_id,wx.navigateTo({url:t})},bindNull:function(){wx.showToast({title:"待开发...",icon:"none"})},tapDelete:function(){if(this.admin){var e=["删除客户"],o=this.customerInfo.id;wx.showActionSheet({itemList:e,success:function(e){wx.showModal({title:"删除客户",content:"删除客户后该客户的信息将作废，确定删除该客户？",success:function(e){e.confirm?r.deleteCompany(o).then(function(t){var e=getCurrentPages(),o=e[e.length-2];o.setData({setOver:!0}),wx.showToast({title:"删除客户成功"});setTimeout(function(){wx.navigateBack({})},1e3)}).catch(function(e){console.log(t("删除失败err=>",e," at pages/qing-f-c/buyDupty/customer-details.vue:581")),wx.showToast({title:"删除客户失败",icon:"none"})}):e.cancel&&console.log(t("用户点击取消"," at pages/qing-f-c/buyDupty/customer-details.vue:588"))}}),console.log(t("111Res---",e," at pages/qing-f-c/buyDupty/customer-details.vue:593"))}})}},setData:function(t){var e,o,n=this,i=[];Object.keys(t).forEach(function(a){i=a.split("."),e=t[a],o=n.$data,i.forEach(function(t,a){a+1==i.length?n.$set(o,t,e):o[t]||n.$set(o,t,{}),o=o[t]})})}}),i);e.default=l}).call(this,o("0de9")["default"],o("6e42")["default"])}},[["1872","common/runtime","common/vendor"]]]);