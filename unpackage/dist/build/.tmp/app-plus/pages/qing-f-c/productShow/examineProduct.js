(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/qing-f-c/productShow/examineProduct"],{5213:function(t,n,e){"use strict";(function(t){e("3b9b"),e("921b");i(e("66fd"));var n=i(e("d8b5"));function i(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},"541a":function(t,n,e){"use strict";var i={"uni-list":()=>e.e("components/uni-list/uni-list").then(e.bind(null,"c27e")),"uni-list-item":()=>e.e("components/uni-list-item/uni-list-item").then(e.bind(null,"28f8"))},o=function(){var t=this,n=t.$createElement;t._self._c},u=[];e.d(n,"b",function(){return o}),e.d(n,"c",function(){return u}),e.d(n,"a",function(){return i})},"74dd":function(t,n,e){"use strict";e.r(n);var i=e("d95a"),o=e.n(i);for(var u in i)"default"!==u&&function(t){e.d(n,t,function(){return i[t]})}(u);n["default"]=o.a},"90a2":function(t,n,e){"use strict";var i=e("e02a"),o=e.n(i);o.a},d8b5:function(t,n,e){"use strict";e.r(n);var i=e("541a"),o=e("74dd");for(var u in o)"default"!==u&&function(t){e.d(n,t,function(){return o[t]})}(u);e("90a2");var a,c=e("f0c5"),d=Object(c["a"])(o["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],a);n["default"]=d.exports},d95a:function(t,n,e){"use strict";(function(t,i){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o,u=function(){return e.e("components/uni-list/uni-list").then(e.bind(null,"c27e"))},a=function(){return e.e("components/uni-list-item/uni-list-item").then(e.bind(null,"28f8"))},c=function(){return e.e("components/uni-load-more/uni-load-more").then(e.bind(null,"fbad"))},d={components:{uniList:u,uniListItem:a,uniLoadMore:c},data:function(){return{loadingType:"more",pageNum:1,pageSize:20,inputValueOne:"",keyword:"",goodList:[],subList:[{title:"春亚纺300条",note:"旺季时间：7，8，9月份",thumb:"https://img-cdn-qiniu.dcloud.net.cn/new-page/uni.png"},{title:"春亚纺500条",note:"旺季时间：",thumb:"https://img-cdn-qiniu.dcloud.net.cn/new-page/uni.png"}]}},onReachBottom:function(){null!=timer&&clearTimeout(timer),timer=setTimeout(function(){o.getmoreProduct()},1e3)},onPullDownRefresh:function(){this.getInquiryList()},onShow:function(){this.getGoodsList()},onLoad:function(){o=this,this.getGoodsList()},methods:{getmoreProduct:function(){if("more"!==o.loadingType)return!1;o.loadingType="loading",t.showNavigationBarLoading();var n=o.Api.auditList,e={pageNum:o.pageNum,pageSize:o.pageSize};this.myRequest(e,n,"get").then(function(n){if(i("log",n," at pages/qing-f-c/productShow/examineProduct.vue:98"),0==n.data.data.list.length)return i("log","no data"," at pages/qing-f-c/productShow/examineProduct.vue:100"),o.loadingType="",void t.hideNavigationBarLoading();o.pageNum++,o.goodList=o.goodList.concat(n.data.data.list),o.loadingType="more",t.hideNavigationBarLoading()}).catch(function(t){wx.showToast({title:t.data.errMsg,icon:"none"})})},getGoodsList:function(){o.pageNum=1,o.loadingType="more",t.showNavigationBarLoading();var n=o.Api.auditList,e={pageNum:o.pageNum,pageSize:o.pageSize};this.myRequest(e,n,"get").then(function(t){o.pageNum++,i("log",t," at pages/qing-f-c/productShow/examineProduct.vue:133"),0==t.data.status&&(o.goodList=t.data.data.list)}).catch(function(t){wx.showToast({title:t.data.errMsg,icon:"none"})}),t.hideNavigationBarLoading(),t.stopPullDownRefresh()},tapSearch:function(){i("log",this.keyword," at pages/qing-f-c/productShow/examineProduct.vue:148")},toDetail:function(n){t.navigateTo({url:"./auditProductDetail?goodsCode="+n,success:function(t){},fail:function(t){i("log",t," at pages/qing-f-c/productShow/examineProduct.vue:157")},complete:function(){}})},blurInput:function(t){this.keyword=this.inputValueOne}}};n.default=d}).call(this,e("6e42")["default"],e("0de9")["default"])},e02a:function(t,n,e){}},[["5213","common/runtime","common/vendor"]]]);