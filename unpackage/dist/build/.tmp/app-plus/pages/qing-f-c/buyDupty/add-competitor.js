(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/qing-f-c/buyDupty/add-competitor"],{"28a2":function(t,e,n){},"2bc0":function(t,e,n){"use strict";var o=n("28a2"),a=n.n(o);a.a},"516d":function(t,e,n){"use strict";n.r(e);var o=n("c8eb"),a=n.n(o);for(var i in o)"default"!==i&&function(t){n.d(e,t,function(){return o[t]})}(i);e["default"]=a.a},afc7:function(t,e,n){"use strict";(function(t){n("3b9b"),n("921b");o(n("66fd"));var e=o(n("cc07"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},c8eb:function(t,e,n){"use strict";(function(t,o){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a,i,c=function(){return n.e("components/myPicker").then(n.bind(null,"f08a"))},s=function(){return n.e("components/myCheckboxGroup").then(n.bind(null,"f9e6"))},u=n("b65b"),d={components:{myPicker:c,myCheckboxGroup:s},data:function(){return{companyName:"",companyAddress:"",machineType:"",machineCount:"",channel:[],channelStatusCode:-1,mainProduct:[],scale:[],companyScaleCode:-1,quality:[],qualityCode:-1,businessModel:[],businessModelCode:-1,purchase:["中间商","厂家直采"],isFactoryDirectSale:!1,isMiddleman:!1}},onLoad:function(e){a=this,i=e.companyCode,console.log(t(i," at pages/qing-f-c/buyDupty/add-competitor.vue:110")),this.getMainProduct(),this.getChannel(),this.getCompanyScale(),this.getQuality(),this.getBusinessModel()},methods:{getMainProduct:function(){u.getMainProduct().then(function(e){console.log(t(e," at pages/qing-f-c/buyDupty/add-competitor.vue:120")),a.mainProduct=e.data.data.list}).catch(function(t){wx.showToast({title:t.data.description,icon:"none"})})},getChannel:function(){u.getChannel().then(function(e){console.log(t(e," at pages/qing-f-c/buyDupty/add-competitor.vue:131")),a.channel=e.data.data.list}).catch(function(t){wx.showToast({title:t.data.description,icon:"none"})})},getCompanyScale:function(){u.getCompanyScale().then(function(e){console.log(t(e," at pages/qing-f-c/buyDupty/add-competitor.vue:142")),a.scale=e.data.data.list}).catch(function(t){wx.showToast({title:t.data.description,icon:"none"})})},getQuality:function(){u.getQuality().then(function(e){console.log(t(e," at pages/qing-f-c/buyDupty/add-competitor.vue:153")),a.quality=e.data.data.list}).catch(function(t){wx.showToast({title:t.data.description,icon:"none"})})},getBusinessModel:function(){u.getBusinessModel().then(function(e){console.log(t(e," at pages/qing-f-c/buyDupty/add-competitor.vue:164")),a.businessModel=e.data.data.list}).catch(function(t){wx.showToast({title:t.data.description,icon:"none"})})},tapDirectChange:function(){this.isFactoryDirectSale=!this.isFactoryDirectSale},tapBrokerChange:function(){this.isMiddleman=!this.isMiddleman},tapMainProduct:function(t){for(var e=this.mainProduct,n=0,o=e.length;n<o;++n){var a=e[n];a.id==t&&this.$set(a,"isChecked",!a.isChecked)}},channeChange:function(e){console.log(t(e," at pages/qing-f-c/buyDupty/add-competitor.vue:190")),this.channelStatusCode=e},scaleChange:function(e){console.log(t(e," at pages/qing-f-c/buyDupty/add-competitor.vue:194")),this.companyScaleCode=e},qualityChange:function(e){console.log(t(e," at pages/qing-f-c/buyDupty/add-competitor.vue:198")),this.qualityCode=e},businessModelChange:function(e){console.log(t(e," at pages/qing-f-c/buyDupty/add-competitor.vue:202")),this.businessModelCode=e},bindCancel:function(){o.navigateBack({delta:1})},submit:function(){var e={},n=[];if(this.mainProduct.forEach(function(t){1==t.isChecked&&n.push(t.id)}),0!=n.lengh){var a={companyCode:i,companyName:this.companyName,mainProductCodes:n,channelStatusCode:this.channelStatusCode,isMiddleman:this.isMiddleman?1:0,companyScaleCode:this.companyScaleCode,qualityCode:this.qualityCode,businessModelCode:this.businessModelCode,isFactoryDirectSale:this.isFactoryDirectSale?1:0,companyAddress:this.companyAddress,machineType:this.machineType,machineCount:this.machineCount};a.companyName?(Object.keys(a).forEach(function(t){-1!=a[t]&&(e[t]=a[t])}),console.log(t("添加竞争对手：==",e," at pages/qing-f-c/buyDupty/add-competitor.vue:253")),u.rivalAdd(e).then(function(e){console.log(t(e," at pages/qing-f-c/buyDupty/add-competitor.vue:255")),o.showToast({title:"添加成功",icon:"none"});var n=getCurrentPages(),a=(n[n.length-1],n[n.length-2]);a.setData({isDoRefresh:!0}),o.navigateBack({delta:1})}).catch(function(t){wx.showToast({title:t.data.errMsg,icon:"none"})})):o.showToast({title:"请输入竞争对手名称",icon:"none"})}else o.showToast({title:"请选择主营产品",icon:"none"})}}};e.default=d}).call(this,n("0de9")["default"],n("6e42")["default"])},cc07:function(t,e,n){"use strict";n.r(e);var o=n("ccb9"),a=n("516d");for(var i in a)"default"!==i&&function(t){n.d(e,t,function(){return a[t]})}(i);n("2bc0");var c=n("2877"),s=Object(c["a"])(a["default"],o["a"],o["b"],!1,null,null,null);e["default"]=s.exports},ccb9:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement;t._self._c},a=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return a})}},[["afc7","common/runtime","common/vendor"]]]);