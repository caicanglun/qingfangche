(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/qing-f-c/inquiryManage/comQuotation/selectProduct"],{"0171":function(n,t,e){},"0299":function(n,t,e){"use strict";(function(n,i){var o;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=function(){return e.e("components/uni-collapse/uni-collapse").then(e.bind(null,"30c3"))},c=function(){return e.e("components/uni-collapse-item/uni-collapse-item").then(e.bind(null,"e7c5"))},l=function(){return e.e("components/uni-list/uni-list").then(e.bind(null,"c27e"))},a=function(){return e.e("components/uni-list-item/uni-list-item-my").then(e.bind(null,"ea89"))},s={components:{uniCollapse:u,uniCollapseItem:c,uniList:l,uniListItem:a},data:function(){return{buyOrSellCode:"",companyCode:"",serialList:[{subName:"春亚纺系列",open:!1,subList:[{title:"春亚纺300条"},{title:"春亚纺500条"}]}]}},onLoad:function(n){o=this,this.buyOrSellCode=n.buyOrSellCode,this.companyCode=n.companyCode,this.getProductList()},onShow:function(){this.getProductList()},methods:{getProductList:function(){var t=this.Api.QgoodsList,e={buyOrSellCode:o.buyOrSellCode};n("log","wfefe"," at pages/qing-f-c/inquiryManage/comQuotation/selectProduct.vue:82"),this.myRequest(e,t,"get").then(function(t){n("log",t," at pages/qing-f-c/inquiryManage/comQuotation/selectProduct.vue:85"),o.serialList=t.data.data.list}).catch(function(n){wx.showToast({title:n.data.errMsg,icon:"none"})})},toDetail:function(t){n("log",t," at pages/qing-f-c/inquiryManage/comQuotation/selectProduct.vue:95"),i.navigateTo({url:"./productDetail?goodsCode="+t+"&buyOrSellCode="+this.buyOrSellCode,success:function(n){},fail:function(t){n("log",t," at pages/qing-f-c/inquiryManage/comQuotation/selectProduct.vue:99")},complete:function(){}})},change:function(){},toAddProuct:function(){i.navigateTo({url:"/pages/qing-f-c/productShow/product-created?companyCode="+this.companyCode,success:function(n){},fail:function(t){n("log",t," at pages/qing-f-c/inquiryManage/comQuotation/selectProduct.vue:110")},complete:function(){}})}}};t.default=s}).call(this,e("0de9")["default"],e("6e42")["default"])},"5c7a":function(n,t,e){"use strict";e.r(t);var i=e("a457"),o=e("a3de");for(var u in o)"default"!==u&&function(n){e.d(t,n,function(){return o[n]})}(u);e("f3d0");var c,l=e("f0c5"),a=Object(l["a"])(o["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],c);t["default"]=a.exports},6670:function(n,t,e){"use strict";(function(n){e("3b9b"),e("921b");i(e("66fd"));var t=i(e("5c7a"));function i(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("6e42")["createPage"])},a3de:function(n,t,e){"use strict";e.r(t);var i=e("0299"),o=e.n(i);for(var u in i)"default"!==u&&function(n){e.d(t,n,function(){return i[n]})}(u);t["default"]=o.a},a457:function(n,t,e){"use strict";var i={"uni-collapse":()=>e.e("components/uni-collapse/uni-collapse").then(e.bind(null,"30c3")),"uni-collapse-item":()=>e.e("components/uni-collapse-item/uni-collapse-item").then(e.bind(null,"e7c5")),"uni-list":()=>e.e("components/uni-list/uni-list").then(e.bind(null,"c27e")),"uni-list-item":()=>e.e("components/uni-list-item/uni-list-item").then(e.bind(null,"28f8"))},o=function(){var n=this,t=n.$createElement;n._self._c},u=[];e.d(t,"b",function(){return o}),e.d(t,"c",function(){return u}),e.d(t,"a",function(){return i})},f3d0:function(n,t,e){"use strict";var i=e("0171"),o=e.n(i);o.a}},[["6670","common/runtime","common/vendor"]]]);