(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/qing-f-c/productShow/auditProductDetail"],{1051:function(t,o,n){"use strict";n.r(o);var e=n("c361"),i=n.n(e);for(var u in e)"default"!==u&&function(t){n.d(o,t,function(){return e[t]})}(u);o["default"]=i.a},"79c6":function(t,o,n){"use strict";var e=n("9cd1"),i=n.n(e);i.a},"8e37":function(t,o,n){"use strict";var e,i=function(){var t=this,o=t.$createElement;t._self._c},u=[];n.d(o,"b",function(){return i}),n.d(o,"c",function(){return u}),n.d(o,"a",function(){return e})},"9cd1":function(t,o,n){},c07f:function(t,o,n){"use strict";n.r(o);var e=n("8e37"),i=n("1051");for(var u in i)"default"!==u&&function(t){n.d(o,t,function(){return i[t]})}(u);n("79c6");var a,c=n("f0c5"),d=Object(c["a"])(i["default"],e["b"],e["c"],!1,null,null,null,!1,e["a"],a);o["default"]=d.exports},c361:function(t,o,n){"use strict";(function(t,e){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var i,u=function(){return n.e("components/productShow/chanpinyaosu-show").then(n.bind(null,"6da3"))},a=function(){return n.e("components/productShow/machineStatus").then(n.bind(null,"57bf"))},c=function(){return n.e("components/uni-icons/uni-icons").then(n.bind(null,"2cee"))},d={components:{chanpinyaosu:u,machineStatus:a,uniIcon:c},data:function(){return{goodsCode:"",goodsDetail:""}},onShow:function(){this.getGoodsDetail()},onLoad:function(t){i=this,this.goodsCode=t.goodsCode,this.getGoodsDetail()},methods:{getGoodsDetail:function(){var o=i.Api.goodsDetails,n={goodsCode:i.goodsCode};t.showLoading({title:"提交中",mask:!0}),this.myRequest(n,o,"get").then(function(o){e("log",o," at pages/qing-f-c/productShow/auditProductDetail.vue:100"),0==o.data.status&&(t.hideLoading(),i.goodsDetail=o.data.data,e("log",i.goodsDetail," at pages/qing-f-c/productShow/auditProductDetail.vue:104"))}).catch(function(t){wx.showToast({title:t.data.errMsg,icon:"none"})})},toBigPic:function(o){t.previewImage({urls:[o],success:function(){e("log","正在预览中"," at pages/qing-f-c/productShow/auditProductDetail.vue:121")},fail:function(){},complete:function(){}})},bindCancel:function(){var o=i.Api.auditPass,n={goodsCode:i.goodsCode};t.showLoading({title:"提交中",mask:!0}),this.myRequest(n,o,"get").then(function(o){t.hideLoading(),e("log",o," at pages/qing-f-c/productShow/auditProductDetail.vue:143"),0==o.data.status&&(t.showToast({title:"审核成功",duration:1e3}),i.getGoodsDetail())}).catch(function(t){wx.showToast({title:t.data.errMsg,icon:"none"})})},submit:function(){var o=JSON.stringify(i.goodsDetail);t.navigateTo({url:"./auditProduct?goodsDetail="+o,success:function(t){},fail:function(t){e("log",t," at pages/qing-f-c/productShow/auditProductDetail.vue:165")},complete:function(){}})}}};o.default=d}).call(this,n("6e42")["default"],n("0de9")["default"])},efff:function(t,o,n){"use strict";(function(t){n("3b9b"),n("921b");e(n("66fd"));var o=e(n("c07f"));function e(t){return t&&t.__esModule?t:{default:t}}t(o.default)}).call(this,n("6e42")["createPage"])}},[["efff","common/runtime","common/vendor"]]]);