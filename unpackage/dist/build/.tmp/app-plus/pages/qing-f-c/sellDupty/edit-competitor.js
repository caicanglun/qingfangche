(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/qing-f-c/sellDupty/edit-competitor"],{"153b":function(t,e,n){"use strict";n.r(e);var a=n("b905"),o=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,function(){return a[t]})}(i);e["default"]=o.a},"3d47":function(t,e,n){},"499a":function(t,e,n){"use strict";var a=n("3d47"),o=n.n(a);o.a},"6d97":function(t,e,n){"use strict";(function(t){n("3b9b"),n("921b");a(n("66fd"));var e=a(n("db63"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"788b":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},o=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return o})},b905:function(t,e,n){"use strict";(function(t,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o,i,c=function(){return n.e("components/myPicker").then(n.bind(null,"f08a"))},s=function(){return n.e("components/myCheckboxGroup").then(n.bind(null,"f9e6"))},l=n("b65b"),u={components:{myPicker:c,myCheckboxGroup:s},data:function(){return{rivalList:{},channel:[],channelStatusCode:-1,mainProduct:[],scale:[],companyScaleCode:-1,quality:[],qualityCode:-1,businessModel:[],businessModelCode:-1,purchase:["中间商","厂家直采"],isFactoryDirectSale:!1,isMiddleman:!1,businessModelName:"",channelStatusName:"",companyScaleName:"",qualityName:""}},onLoad:function(e){o=this,i=JSON.parse(e.odata),console.log(t("competitor====",i," at pages/qing-f-c/sellDupty/edit-competitor.vue:112")),o.rivalList=i,o.isFactoryDirectSale=1==i.isFactoryDirectSale,o.isMiddleman=1==i.isMiddleman,this.getMainProduct(),this.getChannel(),this.getCompanyScale(),this.getQuality(),this.getBusinessModel()},onShow:function(){console.log(t(this==o," at pages/qing-f-c/sellDupty/edit-competitor.vue:126")),o.businessModelName=i.businessModelName,o.channelStatusName=i.channelStatusName,o.companyScaleName=i.companyScaleName,o.qualityName=i.qualityName},methods:{getMainProduct:function(){var e=this;l.getMainProduct().then(function(n){console.log(t(n," at pages/qing-f-c/sellDupty/edit-competitor.vue:136")),o.mainProduct=n.data.data.list;var a=i.mainProducts;console.log(t(a," at pages/qing-f-c/sellDupty/edit-competitor.vue:139")),a.forEach(function(t){o.mainProduct.forEach(function(n){n.label==t.label&&e.$set(n,"isChecked",!0)})})}).catch(function(t){wx.showToast({title:t.data.description,icon:"none"})})},getChannel:function(){l.getChannel().then(function(e){console.log(t(e," at pages/qing-f-c/sellDupty/edit-competitor.vue:156")),o.channel=e.data.data.list}).catch(function(t){wx.showToast({title:t.data.description,icon:"none"})})},getCompanyScale:function(){l.getCompanyScale().then(function(e){console.log(t(e," at pages/qing-f-c/sellDupty/edit-competitor.vue:167")),o.scale=e.data.data.list}).catch(function(t){wx.showToast({title:t.data.description,icon:"none"})})},getQuality:function(){l.getQuality().then(function(e){console.log(t(e," at pages/qing-f-c/sellDupty/edit-competitor.vue:178")),o.quality=e.data.data.list}).catch(function(t){wx.showToast({title:t.data.description,icon:"none"})})},getBusinessModel:function(){l.getBusinessModel().then(function(e){console.log(t(e," at pages/qing-f-c/sellDupty/edit-competitor.vue:189")),o.businessModel=e.data.data.list}).catch(function(t){wx.showToast({title:t.data.description,icon:"none"})})},tapDirectChange:function(){this.isFactoryDirectSale=!this.isFactoryDirectSale},tapBrokerChange:function(){this.isMiddleman=!this.isMiddleman},tapMainProduct:function(t){for(var e=this.mainProduct,n=0,a=e.length;n<a;++n){var o=e[n];o.id==t&&this.$set(o,"isChecked",!o.isChecked)}},channeChange:function(e){console.log(t(e," at pages/qing-f-c/sellDupty/edit-competitor.vue:215")),this.channelStatusCode=e},scaleChange:function(e){console.log(t(e," at pages/qing-f-c/sellDupty/edit-competitor.vue:219")),this.companyScaleCode=e},qualityChange:function(e){console.log(t(e," at pages/qing-f-c/sellDupty/edit-competitor.vue:223")),this.qualityCode=e},businessModelChange:function(e){console.log(t(e," at pages/qing-f-c/sellDupty/edit-competitor.vue:227")),this.businessModelCode=e},bindCancel:function(){a.navigateBack({delta:1})},submit:function(){var e={},n=[];if(this.mainProduct.forEach(function(t){1==t.isChecked&&n.push(t.id)}),0!=n.lengh){var o={rivalCode:i.rivalCode,companyName:i.companyName,mainProductCodes:n,channelStatusCode:this.channelStatusCode,isMiddleman:this.isMiddleman?1:0,companyScaleCode:this.companyScaleCode,qualityCode:this.qualityCode,businessModelCode:this.businessModelCode,isFactoryDirectSale:this.isFactoryDirectSale?1:0,companyAddress:i.companyAddress,machineType:i.machineType,machineCount:i.machineCount};o.companyName?(Object.keys(o).forEach(function(t){-1!=o[t]&&(e[t]=o[t])}),console.log(t("添加竞争对手：==",e," at pages/qing-f-c/sellDupty/edit-competitor.vue:278")),l.rivalUpdate(e).then(function(e){console.log(t(e," at pages/qing-f-c/sellDupty/edit-competitor.vue:280")),a.showToast({title:"添加成功",icon:"none"});var n=getCurrentPages(),o=(n[n.length-1],n[n.length-3]);o.setData({isDoRefresh:!0}),a.navigateBack({delta:2})}).catch(function(t){wx.showToast({title:t.data.errMsg,icon:"none"})})):a.showToast({title:"请输入竞争对手名称",icon:"none"})}else a.showToast({title:"请选择主营产品",icon:"none"})}}};e.default=u}).call(this,n("0de9")["default"],n("6e42")["default"])},db63:function(t,e,n){"use strict";n.r(e);var a=n("788b"),o=n("153b");for(var i in o)"default"!==i&&function(t){n.d(e,t,function(){return o[t]})}(i);n("499a");var c=n("2877"),s=Object(c["a"])(o["default"],a["a"],a["b"],!1,null,null,null);e["default"]=s.exports}},[["6d97","common/runtime","common/vendor"]]]);