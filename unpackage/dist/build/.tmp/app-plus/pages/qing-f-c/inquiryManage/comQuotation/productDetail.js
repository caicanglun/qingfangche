(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/qing-f-c/inquiryManage/comQuotation/productDetail"],{"42f9":function(t,o,n){"use strict";(function(t){n("3b9b"),n("921b");e(n("66fd"));var o=e(n("f874"));function e(t){return t&&t.__esModule?t:{default:t}}t(o.default)}).call(this,n("6e42")["createPage"])},"79d1":function(t,o,n){"use strict";var e,i=function(){var t=this,o=t.$createElement;t._self._c},a=[];n.d(o,"b",function(){return i}),n.d(o,"c",function(){return a}),n.d(o,"a",function(){return e})},"95fd":function(t,o,n){"use strict";(function(t,e){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var i,a=function(){return n.e("components/productShow/chanpinyaosu-show").then(n.bind(null,"6da3"))},u=function(){return n.e("components/productShow/machineStatus").then(n.bind(null,"57bf"))},c=function(){return n.e("components/uni-icons/uni-icons").then(n.bind(null,"2cee"))},s={components:{chanpinyaosu:a,machineStatus:u,uniIcon:c},data:function(){return{buyOrSellCode:"",goodsCode:"",goodsDetail:""}},onShow:function(){this.getGoodsDetail()},onLoad:function(t){i=this,this.goodsCode=t.goodsCode,this.buyOrSellCode=t.buyOrSellCode,this.getGoodsDetail()},methods:{getGoodsDetail:function(){var o=i.Api.goodsDetails,n={goodsCode:i.goodsCode};t.showLoading({title:"提交中",mask:!0}),this.myRequest(n,o,"get").then(function(o){e("log",o," at pages/qing-f-c/inquiryManage/comQuotation/productDetail.vue:94"),0==o.data.status&&(t.hideLoading(),i.goodsDetail=o.data.data,e("log",i.goodsDetail," at pages/qing-f-c/inquiryManage/comQuotation/productDetail.vue:98"))}).catch(function(t){wx.showToast({title:t.data.errMsg,icon:"none"})})},toBigPic:function(o){t.previewImage({urls:[o],success:function(){e("log","正在预览中"," at pages/qing-f-c/inquiryManage/comQuotation/productDetail.vue:115")},fail:function(){},complete:function(){}})},showModifyRecord:function(o){t.navigateTo({url:"./updateRecord?goodsCode="+o,success:function(t){},fail:function(t){e("log",t," at pages/qing-f-c/inquiryManage/comQuotation/productDetail.vue:130")},complete:function(){}})},soldOut:function(){var o=this;t.showModal({title:"提示",content:"确认是否下架",showCancel:!0,cancelText:"取消",confirmText:"下架",success:function(n){if(n.confirm){var a=i.Api.soldOut,u={goodsCode:i.goodsCode};t.showLoading({title:"提交中",mask:!0}),o.myRequest(u,a,"get").then(function(n){e("log",n," at pages/qing-f-c/inquiryManage/comQuotation/productDetail.vue:152"),0==n.data.status&&(t.hideLoading(),o.getGoodsDetail())}).catch(function(t){wx.showToast({title:t.data.errMsg,icon:"none"})})}},fail:function(){},complete:function(){}})},soldIn:function(){var o=this,n=i.Api.soldOut,a={goodsCode:i.goodsCode};t.showLoading({title:"提交中",mask:!0}),this.myRequest(a,n,"get").then(function(n){e("log",n," at pages/qing-f-c/inquiryManage/comQuotation/productDetail.vue:182"),0==n.data.status&&(t.hideLoading(),o.getGoodsDetail())}).catch(function(t){wx.showToast({title:t.data.errMsg,icon:"none"})})},startQuotation:function(){t.navigateTo({url:"./startQuotation?goodsCode="+i.goodsCode+"&buyOrSellCode="+this.buyOrSellCode,success:function(t){},fail:function(t){e("log",t," at pages/qing-f-c/inquiryManage/comQuotation/productDetail.vue:199")},complete:function(){}})},submit:function(){var o=JSON.stringify(i.goodsDetail);t.navigateTo({url:"./productUpdate?goodsDetail="+o,success:function(t){},fail:function(t){e("log",t," at pages/qing-f-c/inquiryManage/comQuotation/productDetail.vue:208")},complete:function(){}})}}};o.default=s}).call(this,n("6e42")["default"],n("0de9")["default"])},d7f3:function(t,o,n){},e951:function(t,o,n){"use strict";var e=n("d7f3"),i=n.n(e);i.a},f874:function(t,o,n){"use strict";n.r(o);var e=n("79d1"),i=n("fb7e");for(var a in i)"default"!==a&&function(t){n.d(o,t,function(){return i[t]})}(a);n("e951");var u,c=n("f0c5"),s=Object(c["a"])(i["default"],e["b"],e["c"],!1,null,null,null,!1,e["a"],u);o["default"]=s.exports},fb7e:function(t,o,n){"use strict";n.r(o);var e=n("95fd"),i=n.n(e);for(var a in e)"default"!==a&&function(t){n.d(o,t,function(){return e[t]})}(a);o["default"]=i.a}},[["42f9","common/runtime","common/vendor"]]]);