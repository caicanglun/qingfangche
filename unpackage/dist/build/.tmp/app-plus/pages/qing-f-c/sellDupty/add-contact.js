(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/qing-f-c/sellDupty/add-contact"],{"0747":function(t,e,n){"use strict";var a=n("6b6a"),o=n.n(a);o.a},"1e3c":function(t,e,n){"use strict";(function(t){n("3b9b"),n("921b");a(n("66fd"));var e=a(n("8129"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"48f3":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},o=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return o})},"6b6a":function(t,e,n){},8129:function(t,e,n){"use strict";n.r(e);var a=n("48f3"),o=n("9a62");for(var i in o)"default"!==i&&function(t){n.d(e,t,function(){return o[t]})}(i);n("0747");var c=n("2877"),s=Object(c["a"])(o["default"],a["a"],a["b"],!1,null,null,null);e["default"]=s.exports},"9a62":function(t,e,n){"use strict";n.r(e);var a=n("c3dc"),o=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,function(){return a[t]})}(i);e["default"]=o.a},c3dc:function(t,e,n){"use strict";(function(t,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o,i,c=function(){return n.e("components/myPicker").then(n.bind(null,"f08a"))},s=function(){return n.e("components/rangeButton").then(n.bind(null,"3315"))},r=function(){return n.e("components/myCheckboxGroup").then(n.bind(null,"f9e6"))},u=n("b65b"),l={components:{myPicker:c,rangeButton:s,myCheckboxGroup:r},data:function(){return{realName:"",phone:"",costPerformance:[],costPerformanceCode:-1,identity:[],identityCode:-1,characterFeaturesList:[],manageFeaturesList:[],priceSensitivity:[],priceSensitivityCode:-1,channe:[],channelStatusCode:-1,potential:[],potentialCode:-1}},onLoad:function(e){o=this,i=e.companyCode,console.log(t(i," at pages/qing-f-c/sellDupty/add-contact.vue:108")),this.getCharacterFeatures(),this.getCostPerformance(),this.getIdentity(),this.getManageFeatures(),this.getPriceSensitivity(),this.getPotential(),this.getChannel()},methods:{testChange:function(e){console.log(t(e," at pages/qing-f-c/sellDupty/add-contact.vue:120"))},getManageFeatures:function(){u.getManageFeatures().then(function(e){console.log(t(e," at pages/qing-f-c/sellDupty/add-contact.vue:124")),o.manageFeaturesList=e.data.data.list}).catch(function(t){wx.showToast({title:t.data.errMsg,icon:"none"})})},getIdentity:function(){u.getIdentity().then(function(e){console.log(t(e," at pages/qing-f-c/sellDupty/add-contact.vue:136")),o.identity=e.data.data.list}).catch(function(t){wx.showToast({title:t.data.errMsg,icon:"none"})})},getCharacterFeatures:function(){u.getCharacterFeatures().then(function(e){console.log(t(e," at pages/qing-f-c/sellDupty/add-contact.vue:147")),o.characterFeaturesList=e.data.data.list}).catch(function(t){wx.showToast({title:t.data.errMsg,icon:"none"})})},getPriceSensitivity:function(){u.getPriceSensitivity().then(function(e){console.log(t(e," at pages/qing-f-c/sellDupty/add-contact.vue:158")),o.priceSensitivity=e.data.data.list}).catch(function(t){wx.showToast({title:t.data.errMsg,icon:"none"})})},getCostPerformance:function(){u.getCostPerformance().then(function(e){console.log(t(e," at pages/qing-f-c/sellDupty/add-contact.vue:169")),o.costPerformance=e.data.data.list}).catch(function(t){wx.showToast({title:t.data.errMsg,icon:"none"})})},getPotential:function(){u.getPotential().then(function(e){console.log(t(e," at pages/qing-f-c/sellDupty/add-contact.vue:180")),o.potential=e.data.data.list}).catch(function(t){wx.showToast({title:t.data.errMsg,icon:"none"})})},getChannel:function(){u.getChannel().then(function(e){console.log(t(e," at pages/qing-f-c/sellDupty/add-contact.vue:191")),o.channe=e.data.data.list}).catch(function(t){wx.showToast({title:t.data.errMsg,icon:"none"})})},tapCharacter:function(t){for(var e=this.characterFeaturesList,n=0,a=e.length;n<a;++n){var o=e[n];o.id==t&&this.$set(o,"isChecked",!o.isChecked)}},tapManageFeatures:function(e){for(var n=this.manageFeaturesList,a=0,o=n.length;a<o;++a){var i=n[a];i.id==e&&this.$set(i,"isChecked",!i.isChecked)}console.log(t(n," at pages/qing-f-c/sellDupty/add-contact.vue:223"))},identityChange:function(t){this.identityCode=t},costPerformanceChange:function(t){this.costPerformanceCode=t},potentialChange:function(t){this.potentialCode=t},channeChange:function(t){this.channelStatusCode=t},priceSensitivityChange:function(t){this.priceSensitivityCode=t},bindCancel:function(){a.navigateBack({delta:1})},submit:function(){var e={},n=[],o=[];this.characterFeaturesList.forEach(function(t){1==t.isChecked&&n.push(t.id)}),this.manageFeaturesList.forEach(function(t){1==t.isChecked&&o.push(t.id)}),e.companyCode=i,e.realName=this.realName,e.phone=this.Phone,e.identityCode=this.identityCode,e.priceSensitivityCod=this.priceSensitivityCod,e.costPerformanceCode=this.costPerformanceCode,e.channelStatusCode=this.channelStatusCode,e.potentialCode=this.potentialCode,e.characterFeatures=n,e.manageFeatures=o,u.linkmanAdd(e).then(function(e){if(console.log(t(e," at pages/qing-f-c/sellDupty/add-contact.vue:284")),0==e.data.status){a.showToast({title:"添加成功",icon:"none"});var n=getCurrentPages(),o=(n[n.length-1],n[n.length-2]);o.setData({isDoRefresh:!0}),a.navigateBack({delta:1})}1!=e.data.status||a.showToast({title:e.data.message,icon:"none"})}).catch(function(t){wx.showToast({title:t.data.errMsg,icon:"none"})})}}};e.default=l}).call(this,n("0de9")["default"],n("6e42")["default"])}},[["1e3c","common/runtime","common/vendor"]]]);