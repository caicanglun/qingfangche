(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/qing-f-c/regionalManager/deputy-list"],{"183e":function(t,e,n){"use strict";n.r(e);var a=n("7cb7"),i=n.n(a);for(var s in a)"default"!==s&&function(t){n.d(e,t,function(){return a[t]})}(s);e["default"]=i.a},"3a37":function(t,e,n){"use strict";var a,i=function(){var t=this,e=t.$createElement;t._self._c},s=[];n.d(e,"b",function(){return i}),n.d(e,"c",function(){return s}),n.d(e,"a",function(){return a})},"7cb7":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a,i=n("b65b"),s={data:function(){return{selectContent:[],bindSelect:!1,list:[],optionIndex:0,idList:[]}},onPullDownRefresh:function(){this.getDeputyList()},onLoad:function(e){!0,a=this,a.idList=JSON.parse(e.optionList),JSON.parse(e.buyOrSell),t("log","options===",a.idList," at pages/qing-f-c/regionalManager/deputy-list.vue:75"),this.getDeputyList()},components:{},props:{},methods:{getAreaList:function(){var e=this;i.getAreaList().then(function(n){var a=[{name:"全部区域",id:!1}].concat(n.data);t("log","selectContent",a," at pages/qing-f-c/regionalManager/deputy-list.vue:90"),e.setData({selectContent:a})}).catch(function(e){t("log","err=>",e," at pages/qing-f-c/regionalManager/deputy-list.vue:95")})},getDeputyList:function(){var e=this.Api.deputyList;this.myRequest({},e,"get").then(function(e){t("log","bangban",e," at pages/qing-f-c/regionalManager/deputy-list.vue:115"),a.list=e.data.data.list}).catch(function(e){t("log","getBSList=err==",res," at pages/qing-f-c/regionalManager/deputy-list.vue:118")})},bindSearch:function(t){var e=t.detail.value,n=this.selectContent[0].id,a={content:e};n&&(a.areaid=n),this.getManagerList(a)},tapBindSelect:function(){this.setData({bindSelect:!this.bindSelect})},bindSelectContent:function(t){var e=t.currentTarget.dataset.index,n=this.selectContent,a=n[0];n[0]=n[e],n[e]=a,this.setData({selectContent:n}),0!=e&&(n[0].id?this.getManagerList({areaid:n[0].id}):this.getManagerList({}))},tapPitchOn:function(e){var n=e.currentTarget.dataset.index;this.setData({optionIndex:n}),t("log",this.list[this.optionIndex]," at pages/qing-f-c/regionalManager/deputy-list.vue:165")},confirm:function(){var e={companyCodes:this.idList,userPostCode:this.list[this.optionIndex].userCode};i.managerAllot(e).then(function(e){if(t("log","帮办分配",e," at pages/qing-f-c/regionalManager/deputy-list.vue:175"),0==e.data.status){wx.showToast({title:"分配成功"});var n=getCurrentPages(),a=(n[n.length-1],n[n.length-2]);a.setData({isDoRefresh:!0});setTimeout(function(){wx.navigateBack({})},500)}}).catch(function(t){!0,wx.showToast({title:"分配失败",icon:"none"})})},setData:function(t){var e,n,a=this,i=[];Object.keys(t).forEach(function(s){i=s.split("."),e=t[s],n=a.$data,i.forEach(function(t,s){s+1==i.length?a.$set(n,t,e):n[t]||a.$set(n,t,{}),n=n[t]})})}}};e.default=s}).call(this,n("0de9")["default"])},"88d0":function(t,e,n){},af1e:function(t,e,n){"use strict";n.r(e);var a=n("3a37"),i=n("183e");for(var s in i)"default"!==s&&function(t){n.d(e,t,function(){return i[t]})}(s);n("dd93");var o,c=n("f0c5"),r=Object(c["a"])(i["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],o);e["default"]=r.exports},dd93:function(t,e,n){"use strict";var a=n("88d0"),i=n.n(a);i.a},e30e:function(t,e,n){"use strict";(function(t){n("3b9b"),n("921b");a(n("66fd"));var e=a(n("af1e"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])}},[["e30e","common/runtime","common/vendor"]]]);