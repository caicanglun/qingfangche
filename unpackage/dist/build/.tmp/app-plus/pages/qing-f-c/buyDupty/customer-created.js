(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/qing-f-c/buyDupty/customer-created"],{"14b4":function(t,n,e){"use strict";(function(t,o){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a,c=function(){return e.e("components/myPicker").then(e.bind(null,"f08a"))},i=function(){return e.e("components/rangeButton").then(e.bind(null,"3315"))},u=function(){return e.e("components/switchButton").then(e.bind(null,"d6bb"))},s=e("b65b"),d={components:{myPicker:c,rangeButton:i,swithButton:u},data:function(){return{companyName:"",companyAddress:"",companyLongitude:"",companyLatitude:"",region:[],regionCode:"",companyType:[],companyTypeCode:"",companyScale:[],companyScaleCode:"",companySource:[],companySourceCode:"",cooperationIntention:[],cooperationIntentionCode:"",coordinate:[],coordinateCode:"",managementPosition:[],managementPositionCode:"",realName:"",phone:""}},onLoad:function(){a=this,this.getRegion(),this.getCoordinate(),this.getSource(),this.getType(),this.getCooperationIntention(),this.getManagementPosition(),this.getCompanyScale()},methods:{getCompanyScale:function(){s.getCompanyScale().then(function(n){console.log(t(n," at pages/qing-f-c/buyDupty/customer-created.vue:108")),a.companyScale=n.data.data.list}).catch(function(t){wx.showToast({title:t.data.description,icon:"none"})})},getManagementPosition:function(){s.getManagementPosition().then(function(n){console.log(t(n," at pages/qing-f-c/buyDupty/customer-created.vue:120")),a.managementPosition=n.data.data.list}).catch(function(t){wx.showToast({title:t.data.description,icon:"none"})})},getRegion:function(){s.getRegion().then(function(n){console.log(t(n," at pages/qing-f-c/buyDupty/customer-created.vue:131")),a.region=n.data.data.list}).catch(function(t){wx.showToast({title:t.data.description,icon:"none"})})},getCoordinate:function(){s.getCoordinate().then(function(n){console.log(t(n," at pages/qing-f-c/buyDupty/customer-created.vue:142")),a.coordinate=n.data.data.list}).catch(function(t){wx.showToast({title:t.data.description,icon:"none"})})},getType:function(){s.getType().then(function(n){console.log(t(n," at pages/qing-f-c/buyDupty/customer-created.vue:153")),a.companyType=n.data.data.list}).catch(function(t){wx.showToast({title:t.data.description,icon:"none"})})},getSource:function(){s.getSource().then(function(n){console.log(t(n," at pages/qing-f-c/buyDupty/customer-created.vue:164")),a.companySource=n.data.data.list}).catch(function(t){wx.showToast({title:t.data.description,icon:"none"})})},getCooperationIntention:function(){s.getCooperationIntention().then(function(n){console.log(t(n," at pages/qing-f-c/buyDupty/customer-created.vue:175")),a.cooperationIntention=n.data.data.list}).catch(function(t){wx.showToast({title:t.data.description,icon:"none"})})},companyScaleChange:function(t){this.companyScaleCode=t},managementPositionChange:function(t){this.managementPositionCode=t},regionChange:function(n){this.regionCode=n,console.log(t(n," at pages/qing-f-c/buyDupty/customer-created.vue:194"))},companyTypeChange:function(t){this.companyTypeCode=t},companySourceChange:function(t){this.companySourceCode=t},cooperationIntentionChange:function(t){this.cooperationIntentionCode=t},coordinateChange:function(t){this.coordinateCode=t},sellroomChange:function(t){this.hasSalesroom=t},addrPosition:function(n){console.log(t("here"," at pages/qing-f-c/buyDupty/customer-created.vue:213")),1==n&&o.chooseLocation({success:function(n){a.companyAddress=n.address,console.log(t("详细地址："+n.address," at pages/qing-f-c/buyDupty/customer-created.vue:219")),a.companyLatitude=n.latitude,console.log(t("纬度："+n.latitude," at pages/qing-f-c/buyDupty/customer-created.vue:221")),a.companyLongitude=n.longitude,console.log(t("经度："+n.longitude," at pages/qing-f-c/buyDupty/customer-created.vue:223"))}})},bindCancel:function(){o.navigateBack({delta:1})},formSubmit:function(n){var e={};this.companyName?(e.companyName=this.companyName,e.regionCode=this.regionCode,e.companyAddress=this.companyAddress,e.companyLongitude=this.companyLongitude,e.companyLongitude=this.companyLatitude,e.companyTypeCode=this.companyTypeCode,e.companySourceCode=this.companySourceCode,e.cooperationIntentionCode=this.cooperationIntentionCode,e.coordinateCode="",e.managementPositionCode=this.managementPositionCode,e.companyScaleCode=this.companyScaleCode,e.realName=this.realName,e.phone=this.phone,console.log(t(e," at pages/qing-f-c/buyDupty/customer-created.vue:258")),s.buyAddCustomer(e).then(function(n){if(console.log(t(n," at pages/qing-f-c/buyDupty/customer-created.vue:260")),0==n.data.status){o.showToast({title:"客户创建成功",icon:"none"});var e=getCurrentPages(),a=(e[e.length-1],e[e.length-2]);a.setData({isDoRefresh:!0}),o.navigateBack({delta:1})}1!=n.data.status||o.showToast({title:n.data.message,icon:"none"})}).catch(function(t){wx.showToast({title:t.data.description,icon:"none"})})):o.showToast({title:"公司名称不能为空",icon:"none"})}}};n.default=d}).call(this,e("0de9")["default"],e("6e42")["default"])},2789:function(t,n,e){"use strict";var o=function(){var t=this,n=t.$createElement;t._self._c},a=[];e.d(n,"a",function(){return o}),e.d(n,"b",function(){return a})},3291:function(t,n,e){"use strict";var o=e("3ff1"),a=e.n(o);a.a},"3ff1":function(t,n,e){},"8ea7":function(t,n,e){"use strict";e.r(n);var o=e("14b4"),a=e.n(o);for(var c in o)"default"!==c&&function(t){e.d(n,t,function(){return o[t]})}(c);n["default"]=a.a},"8f5b":function(t,n,e){"use strict";(function(t){e("3b9b"),e("921b");o(e("66fd"));var n=o(e("c30f"));function o(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},c30f:function(t,n,e){"use strict";e.r(n);var o=e("2789"),a=e("8ea7");for(var c in a)"default"!==c&&function(t){e.d(n,t,function(){return a[t]})}(c);e("3291");var i=e("2877"),u=Object(i["a"])(a["default"],o["a"],o["b"],!1,null,null,null);n["default"]=u.exports}},[["8f5b","common/runtime","common/vendor"]]]);