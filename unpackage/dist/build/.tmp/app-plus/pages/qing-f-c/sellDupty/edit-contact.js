(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/qing-f-c/sellDupty/edit-contact"],{"0e4a":function(t,e,n){},"31e9":function(t,e,n){"use strict";var a=n("0e4a"),i=n.n(a);i.a},"7ece":function(t,e,n){"use strict";n.r(e);var a=n("c73f"),i=n("eb09");for(var c in i)"default"!==c&&function(t){n.d(e,t,function(){return i[t]})}(c);n("31e9");var o=n("2877"),s=Object(o["a"])(i["default"],a["a"],a["b"],!1,null,null,null);e["default"]=s.exports},c73f:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return i})},c898:function(t,e,n){"use strict";(function(t){n("3b9b"),n("921b");a(n("66fd"));var e=a(n("7ece"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},d199:function(t,e,n){"use strict";(function(t,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i,c,o=function(){return n.e("components/myPicker").then(n.bind(null,"f08a"))},s=function(){return n.e("components/rangeButton-v").then(n.bind(null,"9c47"))},r=function(){return n.e("components/myCheckboxGroup").then(n.bind(null,"f9e6"))},u=n("b65b"),l={components:{myPicker:o,rangeButton:s,myCheckboxGroup:r},data:function(){return{linkList:"",realName:"",phone:"",costPerformance:[],costPerformanceCode:-1,identity:[],identityCode:-1,characterFeaturesList:[],manageFeaturesList:[],priceSensitivity:[],priceSensitivityCode:-1,channel:[],channelStatusCode:-1,potential:[],potentialCode:-1,costPerformanceName:"",identityName:"",priceInit:{},channelStatusName:"",potentialName:""}},onLoad:function(e){i=this,console.log(t(e," at pages/qing-f-c/sellDupty/edit-contact.vue:116")),c=JSON.parse(e.buyOrSellCode),console.log(t(c," at pages/qing-f-c/sellDupty/edit-contact.vue:118")),this.getCharacterFeatures(),this.getCostPerformance(),this.getIdentity(),this.getManageFeatures(),this.getPriceSensitivity(),this.getPotential(),this.getChannel()},onShow:function(){i.realName=c.realName,i.phone=c.phone,i.costPerformanceName=c.costPerformance,i.identityName=c.identity,i.priceSensitivityName=c.priceSensitivity,i.channelStatusName=c.channelStatus;var e=c.characterFeatures,n=c.manageFeatures,a=c.priceSensitivity;console.log(t("price==",a," at pages/qing-f-c/sellDupty/edit-contact.vue:142")),setTimeout(function(){e.forEach(function(e){console.log(t(i.characterFeaturesList," at pages/qing-f-c/sellDupty/edit-contact.vue:146")),i.characterFeaturesList.forEach(function(t){t.id==e.id&&i.$set(t,"isChecked",!0)})}),n.forEach(function(e){console.log(t(i.manageFeaturesList," at pages/qing-f-c/sellDupty/edit-contact.vue:154")),i.manageFeaturesList.forEach(function(t){t.id==e.id&&i.$set(t,"isChecked",!0)})}),i.priceSensitivity.forEach(function(t){t.label==a&&i.$set(t,"isChecked",!0)}),console.log(t("价格敏感==",i.priceSensitivity," at pages/qing-f-c/sellDupty/edit-contact.vue:167"))},500)},methods:{getManageFeatures:function(){u.getManageFeatures().then(function(e){console.log(t(e," at pages/qing-f-c/sellDupty/edit-contact.vue:176")),i.manageFeaturesList=e.data.data.list}).catch(function(t){wx.showToast({title:t.data.errMsg,icon:"none"})})},getIdentity:function(){u.getIdentity().then(function(e){console.log(t(e," at pages/qing-f-c/sellDupty/edit-contact.vue:188")),i.identity=e.data.data.list}).catch(function(t){wx.showToast({title:t.data.errMsg,icon:"none"})})},getCharacterFeatures:function(){u.getCharacterFeatures().then(function(e){console.log(t(e," at pages/qing-f-c/sellDupty/edit-contact.vue:199")),i.characterFeaturesList=e.data.data.list}).catch(function(t){wx.showToast({title:t.data.errMsg,icon:"none"})})},getPriceSensitivity:function(){u.getPriceSensitivity().then(function(e){console.log(t(e," at pages/qing-f-c/sellDupty/edit-contact.vue:210")),i.priceSensitivity=e.data.data.list}).catch(function(t){wx.showToast({title:t.data.errMsg,icon:"none"})})},getCostPerformance:function(){u.getCostPerformance().then(function(e){console.log(t(e," at pages/qing-f-c/sellDupty/edit-contact.vue:221")),i.costPerformance=e.data.data.list}).catch(function(t){wx.showToast({title:t.data.errMsg,icon:"none"})})},getPotential:function(){u.getPotential().then(function(e){console.log(t(e," at pages/qing-f-c/sellDupty/edit-contact.vue:232")),i.potential=e.data.data.list}).catch(function(t){wx.showToast({title:t.data.errMsg,icon:"none"})})},getChannel:function(){u.getChannel().then(function(e){console.log(t(e," at pages/qing-f-c/sellDupty/edit-contact.vue:243")),i.channel=e.data.data.list}).catch(function(t){wx.showToast({title:t.data.errMsg,icon:"none"})})},tapCharacter:function(t){for(var e=this.characterFeaturesList,n=0,a=e.length;n<a;++n){var i=e[n];i.id==t&&this.$set(i,"isChecked",!i.isChecked)}},tapManageFeatures:function(e){for(var n=this.manageFeaturesList,a=0,i=n.length;a<i;++a){var c=n[a];c.id==e&&this.$set(c,"isChecked",!c.isChecked)}console.log(t(n," at pages/qing-f-c/sellDupty/edit-contact.vue:275"))},identityChange:function(t){this.identityCode=t},costPerformanceChange:function(t){this.costPerformanceCode=t},potentialChange:function(t){this.potentialCode=t},channelChange:function(t){this.channelStatusCode=t},priceSensitivityChange:function(t){var e=this,n=this.priceSensitivity;n.forEach(function(n){n.id==t?e.$set(n,"isChecked",!0):e.$set(n,"isChecked",!1)})},bindCancel:function(){a.navigateBack({delta:1})},submit:function(){var e=this,n={},i={},o=[],s=[];this.characterFeaturesList.forEach(function(t){1==t.isChecked&&o.push(t.id)}),this.manageFeaturesList.forEach(function(t){1==t.isChecked&&s.push(t.id)}),this.priceSensitivity.forEach(function(t){1==t.isChecked&&(e.priceSensitivityCode=t.id)}),n.buyOrSellCode=c.buyOrSellCode,n.realName=this.realName,n.phone=this.phone,n.identityCode=this.identityCode,n.priceSensitivityCode=this.priceSensitivityCode,n.costPerformanceCode=this.costPerformanceCode,n.channelStatusCode=this.channelStatusCode,n.potentialCode=this.potentialCode,n.characterFeatures=o,n.manageFeatures=s,Object.keys(n).forEach(function(t){-1!=n[t]&&(i[t]=n[t])}),u.linkmanUpdate(i).then(function(e){console.log(t(e," at pages/qing-f-c/sellDupty/edit-contact.vue:352")),a.showToast({title:"修改成功",icon:"none"});var n=getCurrentPages(),i=(n[n.length-1],n[n.length-3]);i.setData({isDoRefresh:!0}),a.navigateBack({delta:1})}).catch(function(t){wx.showToast({title:t.data.errMsg,icon:"none"})})}}};e.default=l}).call(this,n("0de9")["default"],n("6e42")["default"])},eb09:function(t,e,n){"use strict";n.r(e);var a=n("d199"),i=n.n(a);for(var c in a)"default"!==c&&function(t){n.d(e,t,function(){return a[t]})}(c);e["default"]=i.a}},[["c898","common/runtime","common/vendor"]]]);