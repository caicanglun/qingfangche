(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/qing-f-c/customPicture/editCompetitor"],{"459c":function(e,t,r){"use strict";var n,i=function(){var e=this,t=e.$createElement;e._self._c},o=[];r.d(t,"b",(function(){return i})),r.d(t,"c",(function(){return o})),r.d(t,"a",(function(){return n}))},5318:function(e,t,r){"use strict";r.r(t);var n=r("ea1e"),i=r.n(n);for(var o in n)"default"!==o&&function(e){r.d(t,e,(function(){return n[e]}))}(o);t["default"]=i.a},6475:function(e,t,r){"use strict";(function(e){r("3b9b"),r("921b");n(r("66fd"));var t=n(r("cf22"));function n(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,r("6e42")["createPage"])},"6e19":function(e,t,r){},cb88:function(e,t,r){"use strict";var n=r("6e19"),i=r.n(n);i.a},cf22:function(e,t,r){"use strict";r.r(t);var n=r("459c"),i=r("5318");for(var o in i)"default"!==o&&function(e){r.d(t,e,(function(){return i[e]}))}(o);r("cb88");var a,c=r("f0c5"),u=Object(c["a"])(i["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],a);t["default"]=u.exports},ea1e:function(e,t,r){"use strict";(function(e,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=o(r("4795"));function o(e){return e&&e.__esModule?e:{default:e}}function a(e,t,r,n,i,o,a){try{var c=e[o](a),u=c.value}catch(s){return void r(s)}c.done?t(u):Promise.resolve(u).then(n,i)}function c(e){return function(){var t=this,r=arguments;return new Promise((function(n,i){var o=e.apply(t,r);function c(e){a(o,n,i,c,u,"next",e)}function u(e){a(o,n,i,c,u,"throw",e)}c(void 0)}))}}var u=function(){r.e("components/myCheckboxGroup").then(function(){return resolve(r("f9e6"))}.bind(null,r)).catch(r.oe)},s=function(){r.e("components/myPickerPartProps").then(function(){return resolve(r("ad64"))}.bind(null,r)).catch(r.oe)},d={components:{myCheckboxGroup:u,myPickerPart:s},data:function(){return{purcharseArr:[{id:1,label:"shenfen"},{id:2,label:"shenfen2"}],procurementArr:[],companyScaleArr:[],businessModelArr:[],superiorityArr:[],mainProductArr:[],form:{companyName:"",companyScaleCode:"",businessModelCode:"",procurementCode:"",superiorityCode:"",mainProductList:[],superiorityCodeList:[]},rivalCode:""}},onReady:function(){},onLoad:function(t){this.rivalCode=t.rivalCode,this.form=JSON.parse(t.data);var r=JSON.parse(t.select);e("log",r," at pages/qing-f-c/customPicture/editCompetitor.vue:88"),this.procurementArr=r.procurementArr,this.companyScaleArr=r.companyScaleArr,this.businessModelArr=r.businessModelArr,e("log",this.rivalCode," at pages/qing-f-c/customPicture/editCompetitor.vue:92"),this.fetchMainProduct(),this.fetchSuperiority()},methods:{fetch:function(){var t=this;return c(i.default.mark((function r(){var n;return i.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$http.get("/cm/rival_details",{data:{rivalCode:t.rivalCode}});case 2:n=r.sent,t.form=n.data.data,t.handleMainProduct(),t.handleSuperiority(),e("log",t.form," at pages/qing-f-c/customPicture/editCompetitor.vue:110");case 7:case"end":return r.stop()}}),r)})))()},fetchProcurement:function(){var t=this;return c(i.default.mark((function r(){var n;return i.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$http.get("/choose/procurement",{});case 2:n=r.sent,t.procurementArr=n.data.data.list,e("log",t.procurementArr," at pages/qing-f-c/customPicture/editCompetitor.vue:116");case 5:case"end":return r.stop()}}),r)})))()},fetchCompanyScale:function(){var t=this;return c(i.default.mark((function r(){var n;return i.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$http.get("/choose/scale",{});case 2:n=r.sent,t.companyScaleArr=n.data.data.list,e("log",t.companyScaleArr," at pages/qing-f-c/customPicture/editCompetitor.vue:122");case 5:case"end":return r.stop()}}),r)})))()},fetchBusinessModel:function(){var t=this;return c(i.default.mark((function r(){var n;return i.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$http.get("/choose/businessModel",{});case 2:n=r.sent,t.businessModelArr=n.data.data.list,e("log",t.businessModelArr," at pages/qing-f-c/customPicture/editCompetitor.vue:127");case 5:case"end":return r.stop()}}),r)})))()},fetchSuperiority:function(){var t=this;return c(i.default.mark((function r(){var n;return i.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$http.get("/choose/superiority",{});case 2:n=r.sent,t.superiorityArr=n.data.data.list,t.handleSuperiority(),e("log",t.superiorityArr," at pages/qing-f-c/customPicture/editCompetitor.vue:133");case 6:case"end":return r.stop()}}),r)})))()},fetchMainProduct:function(){var t=this;return c(i.default.mark((function r(){var n;return i.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$http.get("/choose/mainProduct",{});case 2:n=r.sent,t.mainProductArr=n.data.data.list,t.handleMainProduct(),e("log",t.mainProductArr," at pages/qing-f-c/customPicture/editCompetitor.vue:139");case 6:case"end":return r.stop()}}),r)})))()},handleMainProduct:function(){var e=this;this.form.mainProductList.forEach((function(t){e.mainProductArr.forEach((function(r){r.id==t.mainProductCode&&e.$set(r,"isChecked",!0)}))}))},handleSuperiority:function(){var e=this;this.form.superiorityList.forEach((function(t){e.superiorityArr.forEach((function(r){r.id==t.superiorityCode&&e.$set(r,"isChecked",!0)}))}))},tabSwitchChange:function(e,t){if("mainProduct"==e)for(var r=this.mainProductArr,n=0,i=r.length;n<i;++n){var o=r[n];o.id==t&&this.$set(o,"isChecked",!o.isChecked)}else if("superiority"==e){var a=this.superiorityArr;for(n=0,i=a.length;n<i;++n){var c=a[n];c.id==t&&this.$set(c,"isChecked",!c.isChecked)}}},pickerChange:function(t,r){switch(t){case"companyScaleCode":this.form.companyScaleCode=r,e("log",this.form.companyScaleCode," at pages/qing-f-c/customPicture/editCompetitor.vue:185");break;case"businessModelCode":this.form.businessModelCode=r,e("log",this.form.businessModelCode," at pages/qing-f-c/customPicture/editCompetitor.vue:189");break;case"procurementCode":this.form.procurementCode=r,e("log",this.form.procurementCode," at pages/qing-f-c/customPicture/editCompetitor.vue:193");break;case"superiorityCode":this.form.superiorityCode=r,e("log",this.form.superiorityCode," at pages/qing-f-c/customPicture/editCompetitor.vue:197");break}},submit:function(){var e=this;return c(i.default.mark((function t(){var r,o;return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=[],e.mainProductArr.forEach((function(e){e.isChecked&&r.push(e.id)})),e.$set(e.form,"mainProductList",r),o=[],e.superiorityArr.forEach((function(e){e.isChecked&&o.push(e.id)})),e.$set(e.form,"superiorityCodeList",o),n.showLoading({title:"提交中",mask:!0}),t.next=9,e.$http.post("/cm/rivalUpdate",{data:e.form});case 9:t.sent,n.hideLoading(),n.navigateBack({delta:-1});case 12:case"end":return t.stop()}}),t)})))()}}};t.default=d}).call(this,r("0de9")["default"],r("6e42")["default"])}},[["6475","common/runtime","common/vendor"]]]);