(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/qing-f-c/sellDupty/edit-customer"],{"2fb6":function(e,t,o){"use strict";o.r(t);var n=o("95f6"),c=o.n(n);for(var i in n)"default"!==i&&function(e){o.d(t,e,function(){return n[e]})}(i);t["default"]=c.a},"5cae":function(e,t,o){},"65ac":function(e,t,o){"use strict";o.r(t);var n=o("e9b9"),c=o("2fb6");for(var i in c)"default"!==i&&function(e){o.d(t,e,function(){return c[e]})}(i);o("7f5c");var a=o("2877"),s=Object(a["a"])(c["default"],n["a"],n["b"],!1,null,null,null);t["default"]=s.exports},"6c31":function(e,t,o){"use strict";(function(e){o("3b9b"),o("921b");n(o("66fd"));var t=n(o("65ac"));function n(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,o("6e42")["createPage"])},"7f5c":function(e,t,o){"use strict";var n=o("5cae"),c=o.n(n);c.a},"95f6":function(e,t,o){"use strict";(function(e,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c,i,a=function(){return o.e("components/myPicker").then(o.bind(null,"f08a"))},s=function(){return o.e("components/rangeButton-v").then(o.bind(null,"9c47"))},u=function(){return o.e("components/switchButton").then(o.bind(null,"d6bb"))},r=o("096c"),l=o("b65b"),d={components:{myPicker:a,rangeButton:s,swithButton:u},data:function(){return{customerInfo:{},region:[],companyType:[],companyScale:[],companySource:[],cooperationIntention:[],coordinate:[],isSellroom:[{id:1,label:"有"},{id:0,label:"无"}],hasSalesroom:"",regionCode:-1,companyTypeCode:-1,companySourceCode:-1}},onLoad:function(t){c=this,i=t.companyCode,console.log(e("公司编号===",i," at pages/qing-f-c/sellDupty/edit-customer.vue:95")),this.getCustomerInfo(),this.getRegion(),this.getCoordinate(),this.getSource(),this.getType(),this.getCooperationIntention()},onShow:function(){setTimeout(function(){console.log(e(c.customerInfo," at pages/qing-f-c/sellDupty/edit-customer.vue:106"));var t=c.customerInfo.cooperationIntention,o=c.customerInfo.coordinate,n=c.customerInfo.hasSalesroom;console.log(e("coor==",o," at pages/qing-f-c/sellDupty/edit-customer.vue:111")),c.cooperationIntention.forEach(function(e){e.label==t&&c.$set(e,"isChecked",!0)}),c.coordinate.forEach(function(e){e.label==o&&c.$set(e,"isChecked",!0)}),console.log(e("coordinate",c.coordinate," at pages/qing-f-c/sellDupty/edit-customer.vue:122")),c.isSellroom.forEach(function(e){e.label==n&&c.$set(e,"isChecked",!0)})},500)},methods:{getCustomerInfo:function(){console.log(e(i," at pages/qing-f-c/sellDupty/edit-customer.vue:134"));var t={companyCode:i};l.cmDetail(t).then(function(t){console.log(e("customer--info==",t," at pages/qing-f-c/sellDupty/edit-customer.vue:138")),c.customerInfo=t.data.data,console.log(e(c.customerInfo," at pages/qing-f-c/sellDupty/edit-customer.vue:141"))}).catch(function(t){console.log(e("Err===",t," at pages/qing-f-c/sellDupty/edit-customer.vue:144"))})},getRegion:function(){l.getRegion().then(function(t){console.log(e(t," at pages/qing-f-c/sellDupty/edit-customer.vue:150")),c.region=t.data.data.list,console.log(e("region==",c.region," at pages/qing-f-c/sellDupty/edit-customer.vue:152"))}).catch(function(e){wx.showToast({title:e.data.description,icon:"none"})})},getCoordinate:function(){l.getCoordinate().then(function(t){console.log(e(t," at pages/qing-f-c/sellDupty/edit-customer.vue:162")),c.coordinate=t.data.data.list}).catch(function(e){wx.showToast({title:e.data.description,icon:"none"})})},getType:function(){l.getType().then(function(t){console.log(e(t," at pages/qing-f-c/sellDupty/edit-customer.vue:173")),c.companyType=t.data.data.list}).catch(function(e){wx.showToast({title:e.data.description,icon:"none"})})},getSource:function(){l.getSource().then(function(t){console.log(e(t," at pages/qing-f-c/sellDupty/edit-customer.vue:184")),c.companySource=t.data.data.list}).catch(function(e){wx.showToast({title:e.data.description,icon:"none"})})},getCooperationIntention:function(){l.getCooperationIntention().then(function(t){console.log(e(t," at pages/qing-f-c/sellDupty/edit-customer.vue:195")),c.cooperationIntention=t.data.data.list}).catch(function(e){wx.showToast({title:e.data.description,icon:"none"})})},regionChange:function(t){this.regionCode=t,console.log(e(t," at pages/qing-f-c/sellDupty/edit-customer.vue:209"))},companyTypeChange:function(e){this.companyTypeCode=e},companySourceChange:function(e){this.companySourceCode=e},cooperationIntentionChange:function(e){var t=this,o=this.cooperationIntention;o.forEach(function(o){o.id==e?t.$set(o,"isChecked",!0):t.$set(o,"isChecked",!1)})},coordinateChange:function(e){var t=this,o=this.coordinate;o.forEach(function(o){o.id==e?t.$set(o,"isChecked",!0):t.$set(o,"isChecked",!1)})},sellroomChange:function(e){var t=this,o=this.isSellroom;o.forEach(function(o){o.id==e?t.$set(o,"isChecked",!0):t.$set(o,"isChecked",!1)})},addrPosition:function(t){console.log(e("here"," at pages/qing-f-c/sellDupty/edit-customer.vue:252")),1==t&&n.chooseLocation({success:function(t){c.factoryAddress=t.address,console.log(e("详细地址："+t.address," at pages/qing-f-c/sellDupty/edit-customer.vue:258")),c.factoryLatitude=t.latitude,console.log(e("纬度："+t.latitude," at pages/qing-f-c/sellDupty/edit-customer.vue:260")),c.factoryLongitude=t.longitude,console.log(e("经度："+t.longitude," at pages/qing-f-c/sellDupty/edit-customer.vue:262"))}})},bindCancel:function(){n.navigateBack({delta:1})},formSubmit:function(t){var o=this.customerInfo,c={};console.log(e("合作意向====",this.cooperationIntention," at pages/qing-f-c/sellDupty/edit-customer.vue:278"));var i=r.list2code(this.cooperationIntention),a=r.list2code(this.coordinate);console.log(e("cooper",i," at pages/qing-f-c/sellDupty/edit-customer.vue:282")),c.companyCode=o.companyCode,c.companyName=o.companyName,c.factoryAddress=o.factoryAddress,c.factoryLongitude=o.factoryLongitude,c.factoryLatitude=o.factoryLatitude,c.hasSalesroom=this.isSellroom[0].isChecked?1:0,c.salesroomAddress=o.salesroomAddress,c.salesroomLongitude=o.salesroomLongitude,c.salesroomLatitude=o.salesroomLatitude,c.regionCode=this.regionCode,c.companyTypeCode=this.companyTypeCode,c.companySourceCode=this.companySourceCode,c.cooperationIntentionCode=i[0],c.coordinateCode=a[0],console.log(e("更新客户：",c," at pages/qing-f-c/sellDupty/edit-customer.vue:300")),c=r.filterNull(c),l.updateCustomer(c).then(function(t){if(console.log(e(t," at pages/qing-f-c/sellDupty/edit-customer.vue:307")),0==t.data.status){var o=getCurrentPages(),c=(o[o.length-1],o[o.length-2]);c.setData({isDoRefresh:!0}),n.navigateBack({delta:1})}else n.showToast({title:t.data.message,icon:"none"})}).catch(function(e){wx.showToast({title:e.data.description,icon:"none"})})}}};t.default=d}).call(this,o("0de9")["default"],o("6e42")["default"])},e9b9:function(e,t,o){"use strict";var n=function(){var e=this,t=e.$createElement;e._self._c},c=[];o.d(t,"a",function(){return n}),o.d(t,"b",function(){return c})}},[["6c31","common/runtime","common/vendor"]]]);