(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/qing-f-c/productShow/manageConditionEdit"],{2318:function(t,n,e){},3623:function(t,n,e){"use strict";e.r(n);var i=e("60e2"),o=e.n(i);for(var a in i)"default"!==a&&function(t){e.d(n,t,(function(){return i[t]}))}(a);n["default"]=o.a},"60c0":function(t,n,e){"use strict";e.r(n);var i=e("ac96"),o=e("3623");for(var a in o)"default"!==a&&function(t){e.d(n,t,(function(){return o[t]}))}(a);e("9d14");var c,s=e("f0c5"),u=Object(s["a"])(o["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],c);n["default"]=u.exports},"60e2":function(t,n,e){"use strict";(function(t,i){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o,a=function(){e.e("components/myCheckboxGroup").then(function(){return resolve(e("f9e6"))}.bind(null,e)).catch(e.oe)},c=function(){e.e("components/uni-icons/uni-icons").then(function(){return resolve(e("2cee"))}.bind(null,e)).catch(e.oe)},s=function(){e.e("components/popupMe-addM").then(function(){return resolve(e("d92f"))}.bind(null,e)).catch(e.oe)},u=function(){Promise.all([e.e("common/vendor"),e.e("components/uni-swipe-action/uni-swipe-action")]).then(function(){return resolve(e("3108"))}.bind(null,e)).catch(e.oe)},d={components:{myCheckboxGroup:a,uniIcon:c,popupMeAdd:s,uniSwipeAction:u},data:function(){return{mainProductList:[],seriesList:[],seriesListTemp:[],mainProductListTemp:[],companyCode:"",options2:[{text:"删除",style:{backgroundColor:"#FF6000"}}],mainProduct:"",mainProductIndex:"",productSerial:"",machineName:"",machineCount:"",weavingMachineList:[]}},onShow:function(){this.getAllSelect(),this.getManageProfile()},onLoad:function(t){o=this,this.companyCode=t.companyCode,this.getAllSelect(),this.getManageProfile()},methods:{getAllSelect:function(){var n=this.Api.getMainProduct,e={};this.myRequest(e,n,"get").then((function(n){t("log",n," at pages/qing-f-c/productShow/manageConditionEdit.vue:96"),o.mainProduct=n.data.data.list})).catch((function(t){wx.showToast({title:t.data.errMsg,icon:"none"})})),n=this.Api.series,e={},this.myRequest(e,n,"get").then((function(n){t("log",n," at pages/qing-f-c/productShow/manageConditionEdit.vue:109"),o.productSerial=n.data.data.list})).catch((function(t){wx.showToast({title:t.data.errMsg,icon:"none"})}))},getManageProfile:function(){var n=this.Api.manageProfile,e={companyCode:o.companyCode};this.myRequest(e,n,"get").then((function(n){t("log",n," at pages/qing-f-c/productShow/manageConditionEdit.vue:126"),0==n.data.status&&(o.mainProductLisTemp=n.data.data.mainProductList,o.mainProductLisTemp.forEach((function(t){o.mainProduct.forEach((function(n){n.id==t.id&&o.$set(n,"isChecked",!0)}))})),o.seriesListTemp=n.data.data.seriesList,o.seriesListTemp.forEach((function(t){o.productSerial.forEach((function(n){n.id==t.id&&o.$set(n,"isChecked",!0)}))})),o.weavingMachineList=n.data.data.weavingMachineList)})).catch((function(t){wx.showToast({title:t.data.errMsg,icon:"none"})}))},getManageMachineList:function(){var n=this.Api.manageProfile,e={companyCode:o.companyCode};this.myRequest(e,n,"get").then((function(n){t("log",n," at pages/qing-f-c/productShow/manageConditionEdit.vue:168"),0==n.data.status&&(o.weavingMachineList=n.data.data.weavingMachineList)})).catch((function(t){wx.showToast({title:t.data.errMsg,icon:"none"})}))},tabSwitchChange:function(t,n){if("mainProduct"==t)for(var e=this.mainProduct,i=0,o=e.length;i<o;++i){var a=e[i];a.id==n&&this.$set(a,"isChecked",!a.isChecked)}if("productSerial"==t){var c=this.productSerial;for(i=0,o=c.length;i<o;++i){var s=c[i];s.id==n&&this.$set(s,"isChecked",!s.isChecked)}}},bindClick:function(n){var e=this.Api.weavingMachineDel,a={machineCode:n};i.showLoading({title:"加载中",mask:!0}),this.myRequest(a,e,"get").then((function(n){t("log",n," at pages/qing-f-c/productShow/manageConditionEdit.vue:216"),0==n.data.status&&(i.hideLoading(),o.getManageMachineList())})).catch((function(t){wx.showToast({title:t.data.errMsg,icon:"none"})}))},tapAddMachine:function(){this.$refs.addMachineInfo.show()},getMachineInfo:function(n){this.machineName=n[0],this.machineCount=n[1],t("log",this.machineName," at pages/qing-f-c/productShow/manageConditionEdit.vue:237"),t("log",this.machineCount," at pages/qing-f-c/productShow/manageConditionEdit.vue:238");var e=this.Api.weavingMachineAdd,a={companyCode:o.companyCode,machineName:o.machineName,machineCount:o.machineCount};i.showLoading({title:"加载中",mask:!0}),this.myRequest(a,e,"get").then((function(n){t("log",n," at pages/qing-f-c/productShow/manageConditionEdit.vue:251"),0==n.data.status&&(i.hideLoading(),o.getManageMachineList())})).catch((function(t){i.showToast({title:t.data.errMsg,icon:"none"})}))},submit:function(){var n=o.Api.profileUpdate;o.mainProduct.forEach((function(t){t.isChecked&&o.mainProductList.push(t.id)})),o.productSerial.forEach((function(t){t.isChecked&&o.seriesList.push(t.id)}));var e={companyCode:o.companyCode,mainProductList:o.mainProductList,seriesList:o.seriesList};i.showLoading({title:"加载中",mask:!0}),this.myRequest(e,n,"post").then((function(n){t("log",n," at pages/qing-f-c/productShow/manageConditionEdit.vue:288"),0==n.data.status&&(i.hideLoading(),i.showToast({title:"更新成功",duration:500}),setTimeout((function(){i.navigateBack({delta:1})}),1e3))})).catch((function(t){wx.showToast({title:t.data.errMsg,icon:"none"})}))}}};n.default=d}).call(this,e("0de9")["default"],e("6e42")["default"])},"9d14":function(t,n,e){"use strict";var i=e("2318"),o=e.n(i);o.a},ac96:function(t,n,e){"use strict";var i={"uni-swipe-action":function(){return Promise.all([e.e("common/vendor"),e.e("components/uni-swipe-action/uni-swipe-action")]).then(e.bind(null,"3108"))}},o=function(){var t=this,n=t.$createElement;t._self._c},a=[];e.d(n,"b",(function(){return o})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){return i}))},bd17:function(t,n,e){"use strict";(function(t){e("3b9b"),e("921b");i(e("66fd"));var n=i(e("60c0"));function i(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])}},[["bd17","common/runtime","common/vendor"]]]);