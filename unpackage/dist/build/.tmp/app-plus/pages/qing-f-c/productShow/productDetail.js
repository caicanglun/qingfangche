(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/qing-f-c/productShow/productDetail"],{1552:function(t,o,n){"use strict";(function(t){n("3b9b"),n("921b");e(n("66fd"));var o=e(n("c9cd"));function e(t){return t&&t.__esModule?t:{default:t}}t(o.default)}).call(this,n("6e42")["createPage"])},"28d3":function(t,o,n){"use strict";var e=n("5981"),i=n.n(e);i.a},5981:function(t,o,n){},"9cc2":function(t,o,n){"use strict";n.r(o);var e=n("fb93"),i=n.n(e);for(var c in e)"default"!==c&&function(t){n.d(o,t,function(){return e[t]})}(c);o["default"]=i.a},c9cd:function(t,o,n){"use strict";n.r(o);var e=n("dbf8"),i=n("9cc2");for(var c in i)"default"!==c&&function(t){n.d(o,t,function(){return i[t]})}(c);n("28d3");var u,a=n("f0c5"),s=Object(a["a"])(i["default"],e["b"],e["c"],!1,null,null,null,!1,e["a"],u);o["default"]=s.exports},dbf8:function(t,o,n){"use strict";var e,i=function(){var t=this,o=t.$createElement;t._self._c},c=[];n.d(o,"b",function(){return i}),n.d(o,"c",function(){return c}),n.d(o,"a",function(){return e})},fb93:function(t,o,n){"use strict";(function(t,e){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var i,c=function(){return n.e("components/productShow/chanpinyaosu-show").then(n.bind(null,"6da3"))},u=function(){return n.e("components/productShow/machineStatus").then(n.bind(null,"57bf"))},a=function(){return n.e("components/uni-icons/uni-icons").then(n.bind(null,"2cee"))},s={components:{chanpinyaosu:c,machineStatus:u,uniIcon:a},data:function(){return{goodsCode:"",goodsDetail:""}},onShow:function(){this.getGoodsDetail()},onLoad:function(t){i=this,this.goodsCode=t.goodsCode,this.getGoodsDetail()},methods:{getGoodsDetail:function(){var o=i.Api.goodsDetails,n={goodsCode:i.goodsCode};t.showLoading({title:"提交中",mask:!0}),this.myRequest(n,o,"get").then(function(o){e("log",o," at pages/qing-f-c/productShow/productDetail.vue:98"),0==o.data.status&&(t.hideLoading(),i.goodsDetail=o.data.data,e("log",i.goodsDetail," at pages/qing-f-c/productShow/productDetail.vue:102"))}).catch(function(t){wx.showToast({title:t.data.errMsg,icon:"none"})})},toBigPic:function(o){t.previewImage({urls:[o],success:function(){e("log","正在预览中"," at pages/qing-f-c/productShow/productDetail.vue:119")},fail:function(){},complete:function(){}})},showModifyRecord:function(o){t.navigateTo({url:"./updateRecord?goodsCode="+o,success:function(t){},fail:function(t){e("log",t," at pages/qing-f-c/productShow/productDetail.vue:134")},complete:function(){}})},soldOut:function(){var o=this;t.showModal({title:"提示",content:"确认是否下架",showCancel:!0,cancelText:"取消",confirmText:"下架",success:function(n){if(n.confirm){var c=i.Api.soldOut,u={goodsCode:i.goodsCode};t.showLoading({title:"提交中",mask:!0}),o.myRequest(u,c,"get").then(function(n){e("log",n," at pages/qing-f-c/productShow/productDetail.vue:156"),0==n.data.status&&(t.hideLoading(),o.getGoodsDetail())}).catch(function(t){wx.showToast({title:t.data.errMsg,icon:"none"})})}},fail:function(){},complete:function(){}})},soldIn:function(){var o=this,n=i.Api.soldOut,c={goodsCode:i.goodsCode};t.showLoading({title:"提交中",mask:!0}),this.myRequest(c,n,"get").then(function(n){e("log",n," at pages/qing-f-c/productShow/productDetail.vue:186"),0==n.data.status&&(t.hideLoading(),o.getGoodsDetail())}).catch(function(t){wx.showToast({title:t.data.errMsg,icon:"none"})})},submit:function(){var o=JSON.stringify(i.goodsDetail);t.navigateTo({url:"./productUpdate?goodsDetail="+o,success:function(t){},fail:function(t){e("log",t," at pages/qing-f-c/productShow/productDetail.vue:204")},complete:function(){}})}}};o.default=s}).call(this,n("6e42")["default"],n("0de9")["default"])}},[["1552","common/runtime","common/vendor"]]]);