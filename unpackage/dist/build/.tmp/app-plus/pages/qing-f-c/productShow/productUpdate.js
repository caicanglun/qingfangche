(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/qing-f-c/productShow/productUpdate"],{"045b":function(t,e,n){"use strict";n.r(e);var a=n("d31d"),i=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=i.a},"0a7d":function(t,e,n){"use strict";var a=n("bbc7"),i=n.n(a);i.a},"96d5":function(t,e,n){"use strict";n.r(e);var a=n("ad13"),i=n("045b");for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("0a7d");var c,d=n("f0c5"),s=Object(d["a"])(i["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],c);e["default"]=s.exports},a52e:function(t,e,n){"use strict";(function(t){n("3b9b"),n("921b");a(n("66fd"));var e=a(n("96d5"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},ad13:function(t,e,n){"use strict";var a,i=function(){var t=this,e=t.$createElement;t._self._c},o=[];n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return a}))},bbc7:function(t,e,n){},d31d:function(t,e,n){"use strict";(function(t,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i,o=function(){n.e("components/pickerInput").then(function(){return resolve(n("f107"))}.bind(null,n)).catch(n.oe)},c=function(){n.e("components/pickerButton-edit").then(function(){return resolve(n("1015"))}.bind(null,n)).catch(n.oe)},d=function(){n.e("components/switchButton-edit").then(function(){return resolve(n("2cc1"))}.bind(null,n)).catch(n.oe)},s={components:{pickerInput:o,pickerButton:c,switchButtonEdit:d},data:function(){return{machineStatus:[],machineStatusIndex:1,inStock:[],inStockIndex:1,lengthUnit:[],legnthUnitIndex:1,goodsCount:"",machineCount:"",dailyProduction:"",machineType:[],machineTypeIndex:-1,machineTypeValue:"",machineBrand:[],machineBrandIndex:"",machineBrandValue:"",goodsDetail:""}},onShow:function(){},onLoad:function(t){i=this,this.goodsDetail=JSON.parse(t.goodsDetail),i.machineStatusIndex=this.goodsDetail.machineStatusCode,i.inStockIndex=this.goodsDetail.inStockCode,i.lengthUnitIndex=this.goodsDetail.goodsCountUnitCode,i.machineTypeValue=this.goodsDetail.machineTypeName,i.machineTypeIndex=this.goodsDetail.machineTypeCode,i.machineBrandValue=this.goodsDetail.machineBrandName,i.machineBrandIndex=this.goodsDetail.machineBrandCode,i.machineCount=this.goodsDetail.machineCount,i.goodsCount=this.goodsDetail.goodsCount,i.dailyProduction=this.goodsDetail.dailyProduction,this.getAllSelect()},methods:{getAllSelect:function(){var e=this,n=this.Api.machineStatus,a={};this.myRequest(a,n,"get").then((function(n){t("log",n," at pages/qing-f-c/productShow/productUpdate.vue:115"),i.machineStatus=n.data.data.list,i.machineStatus=e.setIsChecked(i.machineStatus,i.machineStatusIndex)})).catch((function(t){wx.showToast({title:t.data.errMsg,icon:"none"})})),n=this.Api.inStock,a={},this.myRequest(a,n,"get").then((function(n){t("log",n," at pages/qing-f-c/productShow/productUpdate.vue:129"),i.inStock=n.data.data.list,i.inStock=e.setIsChecked(i.inStock,i.inStockIndex)})).catch((function(t){wx.showToast({title:t.data.errMsg,icon:"none"})})),n=this.Api.machineType,a={},this.myRequest(a,n,"get").then((function(e){t("log",e," at pages/qing-f-c/productShow/productUpdate.vue:143"),i.machineType=e.data.data.list})).catch((function(t){wx.showToast({title:t.data.errMsg,icon:"none"})})),n=this.Api.machineBrand,a={},this.myRequest(a,n,"get").then((function(e){t("log",e," at pages/qing-f-c/productShow/productUpdate.vue:156"),i.machineBrand=e.data.data.list})).catch((function(t){wx.showToast({title:t.data.errMsg,icon:"none"})})),n=this.Api.quantityUnit,a={},this.myRequest(a,n,"get").then((function(n){t("log",n," at pages/qing-f-c/productShow/productUpdate.vue:169"),i.lengthUnit=n.data.data.list,i.lengthUnit=e.setIsChecked(i.lengthUnit,i.lengthUnitIndex)})).catch((function(t){wx.showToast({title:t.data.errMsg,icon:"none"})}))},submit:function(){var e=this.Api.goodsUpdate,n={goodsCode:i.goodsDetail.goodsCode,machineTypeCode:i.machineTypeIndex,machineTypeName:i.machineTypeValue,machineStatus:i.machineStatusIndex,machineBrandCode:i.machineBrandIndex,machineBrandName:i.machineBrandValue,machineCount:i.machineCount,dailyProduction:i.dailyProduction,inStock:i.inStockIndex,goodsCount:i.goodsCount,goodsCountUnit:i.lengthUnitIndex};t("log",n," at pages/qing-f-c/productShow/productUpdate.vue:206"),a.showLoading({title:"提交中",mask:!0}),this.myRequest(n,e,"post").then((function(e){t("log",e," at pages/qing-f-c/productShow/productUpdate.vue:212"),a.hideLoading(),0==e.data.status?(a.showToast({title:"更新成功"}),a.navigateBack({delta:1})):a.showToast({title:e.data.message,icon:"none"})})).catch((function(e){t("log",e," at pages/qing-f-c/productShow/productUpdate.vue:230"),a.showToast({title:e.data.errMsg,icon:"none"})}))},tabSwitchChange:function(e,n){var a=this;switch(e){case"lengthUnit":this.lengthUnitIndex=n,t("log",this.lengthUnitIndex," at pages/qing-f-c/productShow/productUpdate.vue:241"),this.lengthUnit.forEach((function(t){t.id==a.lengthUnitIndex?a.$set(t,"isChecked",!0):a.$set(t,"isChecked",!1)}));break;case"machineStatus":this.machineStatusIndex=n,t("log",this.machineStatusIndex," at pages/qing-f-c/productShow/productUpdate.vue:252"),this.machineStatus.forEach((function(t){t.id==a.machineStatusIndex?a.$set(t,"isChecked",!0):a.$set(t,"isChecked",!1)}));break;case"inStock":this.inStockIndex=n,t("log",this.inStockIndex," at pages/qing-f-c/productShow/productUpdate.vue:263"),this.inStock.forEach((function(t){t.id==a.inStockIndex?a.$set(t,"isChecked",!0):a.$set(t,"isChecked",!1)}));break;case"machineType":this.machineTypeIndex=n[1]||-1,this.machineTypeValue=n[0],t("log",this.machineBrandIndex," at pages/qing-f-c/productShow/productUpdate.vue:276"),t("log",this.machineTypeValue," at pages/qing-f-c/productShow/productUpdate.vue:277");break;case"machineBrand":this.machineBrandIndex=n[1]||-1,this.machineBrandValue=n[0],t("log",this.machineBrandIndex," at pages/qing-f-c/productShow/productUpdate.vue:284"),t("log",this.machineTypeValue," at pages/qing-f-c/productShow/productUpdate.vue:285");break}}}};e.default=s}).call(this,n("0de9")["default"],n("6e42")["default"])}},[["a52e","common/runtime","common/vendor"]]]);