(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/qing-f-c/sellDupty/add-contact"],{"0747":function(t,e,n){"use strict";var a=n("d6f0"),i=n.n(a);i.a},"1e3c":function(t,e,n){"use strict";(function(t){n("3b9b"),n("921b");a(n("66fd"));var e=a(n("8129"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"49e5":function(t,e,n){"use strict";(function(t,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i,o,c=function(){n.e("components/myPicker").then(function(){return resolve(n("f08a"))}.bind(null,n)).catch(n.oe)},s=function(){n.e("components/rangeButton").then(function(){return resolve(n("3315"))}.bind(null,n)).catch(n.oe)},r=function(){n.e("components/myCheckboxGroup").then(function(){return resolve(n("f9e6"))}.bind(null,n)).catch(n.oe)},u=n("b65b"),d={components:{myPicker:c,rangeButton:s,myCheckboxGroup:r},data:function(){return{realName:"",phone:"",costPerformance:[],costPerformanceCode:-1,identity:[],identityCode:-1,characterFeaturesList:[],manageFeaturesList:[],priceSensitivity:[],priceSensitivityCode:-1,channe:[],channelStatusCode:-1,potential:[],potentialCode:-1}},onLoad:function(e){i=this,o=e.companyCode,t("log",o," at pages/qing-f-c/sellDupty/add-contact.vue:108"),this.getCharacterFeatures(),this.getCostPerformance(),this.getIdentity(),this.getManageFeatures(),this.getPriceSensitivity(),this.getPotential(),this.getChannel()},methods:{testChange:function(e){t("log",e," at pages/qing-f-c/sellDupty/add-contact.vue:120")},getManageFeatures:function(){u.getManageFeatures().then((function(e){t("log",e," at pages/qing-f-c/sellDupty/add-contact.vue:124"),i.manageFeaturesList=e.data.data.list})).catch((function(t){wx.showToast({title:t.data.errMsg,icon:"none"})}))},getIdentity:function(){u.getIdentity().then((function(e){t("log",e," at pages/qing-f-c/sellDupty/add-contact.vue:136"),i.identity=e.data.data.list})).catch((function(t){wx.showToast({title:t.data.errMsg,icon:"none"})}))},getCharacterFeatures:function(){u.getCharacterFeatures().then((function(e){t("log",e," at pages/qing-f-c/sellDupty/add-contact.vue:147"),i.characterFeaturesList=e.data.data.list})).catch((function(t){wx.showToast({title:t.data.errMsg,icon:"none"})}))},getPriceSensitivity:function(){u.getPriceSensitivity().then((function(e){t("log",e," at pages/qing-f-c/sellDupty/add-contact.vue:158"),i.priceSensitivity=e.data.data.list})).catch((function(t){wx.showToast({title:t.data.errMsg,icon:"none"})}))},getCostPerformance:function(){u.getCostPerformance().then((function(e){t("log",e," at pages/qing-f-c/sellDupty/add-contact.vue:169"),i.costPerformance=e.data.data.list})).catch((function(t){wx.showToast({title:t.data.errMsg,icon:"none"})}))},getPotential:function(){u.getPotential().then((function(e){t("log",e," at pages/qing-f-c/sellDupty/add-contact.vue:180"),i.potential=e.data.data.list})).catch((function(t){wx.showToast({title:t.data.errMsg,icon:"none"})}))},getChannel:function(){u.getChannel().then((function(e){t("log",e," at pages/qing-f-c/sellDupty/add-contact.vue:191"),i.channe=e.data.data.list})).catch((function(t){wx.showToast({title:t.data.errMsg,icon:"none"})}))},tapCharacter:function(t){for(var e=this.characterFeaturesList,n=0,a=e.length;n<a;++n){var i=e[n];i.id==t&&this.$set(i,"isChecked",!i.isChecked)}},tapManageFeatures:function(e){for(var n=this.manageFeaturesList,a=0,i=n.length;a<i;++a){var o=n[a];o.id==e&&this.$set(o,"isChecked",!o.isChecked)}t("log",n," at pages/qing-f-c/sellDupty/add-contact.vue:223")},identityChange:function(t){this.identityCode=t},costPerformanceChange:function(t){this.costPerformanceCode=t},potentialChange:function(t){this.potentialCode=t},channeChange:function(t){this.channelStatusCode=t},priceSensitivityChange:function(t){this.priceSensitivityCode=t},bindCancel:function(){a.navigateBack({delta:1})},submit:function(){var e={},n=[],i=[];this.characterFeaturesList.forEach((function(t){1==t.isChecked&&n.push(t.id)})),this.manageFeaturesList.forEach((function(t){1==t.isChecked&&i.push(t.id)})),e.companyCode=o,e.realName=this.realName,e.phone=this.Phone,e.identityCode=this.identityCode,e.priceSensitivityCod=this.priceSensitivityCod,e.costPerformanceCode=this.costPerformanceCode,e.channelStatusCode=this.channelStatusCode,e.potentialCode=this.potentialCode,e.characterFeatures=n,e.manageFeatures=i,a.showLoading({mask:!0,title:"正在加载"}),u.linkmanAdd(e).then((function(e){if(t("log",e," at pages/qing-f-c/sellDupty/add-contact.vue:287"),0==e.data.status){a.showToast({title:"添加成功",icon:"none"});var n=getCurrentPages(),i=(n[n.length-1],n[n.length-2]);i.setData({isDoRefresh:!0}),a.hideLoading(),a.navigateBack({delta:1})}1!=e.data.status||a.showToast({title:e.data.message,icon:"none"})})).catch((function(t){wx.showToast({title:t.data.errMsg,icon:"none"})}))}}};e.default=d}).call(this,n("0de9")["default"],n("6e42")["default"])},"76cb":function(t,e,n){"use strict";var a,i=function(){var t=this,e=t.$createElement;t._self._c},o=[];n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return a}))},8129:function(t,e,n){"use strict";n.r(e);var a=n("76cb"),i=n("9a62");for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("0747");var c,s=n("f0c5"),r=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],c);e["default"]=r.exports},"9a62":function(t,e,n){"use strict";n.r(e);var a=n("49e5"),i=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=i.a},d6f0:function(t,e,n){}},[["1e3c","common/runtime","common/vendor"]]]);