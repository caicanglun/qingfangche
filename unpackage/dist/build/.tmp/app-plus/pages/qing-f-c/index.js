(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/qing-f-c/index"],{"05c8":function(e,n,i){"use strict";i.r(n);var t=i("6c84"),s=i("9f9c");for(var a in s)"default"!==a&&function(e){i.d(n,e,function(){return s[e]})}(a);i("d595");var o=i("2877"),u=Object(o["a"])(s["default"],t["a"],t["b"],!1,null,null,null);n["default"]=u.exports},"22ac":function(e,n,i){"use strict";(function(e,t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var s,a,o=function(){return i.e("components/mpvue-picker/mpvuePicker").then(i.bind(null,"cdb2"))},u=function(){return i.e("components/uni-grid/uni-grid").then(i.bind(null,"18b5"))},c=function(){return i.e("components/uni-grid-item/uni-grid-item").then(i.bind(null,"068f"))},r=function(){return i.e("components/widgit").then(i.bind(null,"7e05"))},l=i("b65b"),g=(i("48ac"),i("109d"),[{icon:"/static/images/jinsy/buy-deputy/kehu.png",name:"客户管理",url:"/pages/qing-f-c/buyDupty/customer-admin"},{icon:"/static/images/jinsy/buy-deputy/jiaoyi.png",name:"交易管理",url:""},{icon:"/static/images/jinsy/buy-deputy/xunjia.png",name:"询价管理",url:"/pages/qing-f-c/inquiryManage/inquiryManage"},{icon:"/static/images/jinsy/buy-deputy/genjin.png",name:"跟进记录",url:""},{icon:"/static/images/jinsy/buy-deputy/wuliu.png",name:"物流信息",url:""},{icon:"/static/images/jinsy/buy-deputy/renling.png",name:"身份认领",url:""}]),p=[{icon:"/static/images/jinsy/sell-deputy/kehu.png",name:"客户管理",url:"/pages/qing-f-c/sellDupty/customer-admin"},{icon:"/static/images/jinsy/sell-deputy/jiaoyi.png",name:"交易管理",url:""},{icon:"/static/images/jinsy/sell-deputy/xunjia.png",name:"询价管理",url:"/pages/qing-f-c/inquiryManage/sellDeputy/inquiryManage"},{icon:"/static/images/jinsy/sell-deputy/genjin.png",name:"跟进记录",url:""},{icon:"/static/images/jinsy/sell-deputy/wuliu.png",name:"物流信息",url:""},{icon:"/static/images/jinsy/sell-deputy/renling.png",name:"身份认领",url:""}],d=[{icon:"/static/images/jinsy/buy-region/kehu.png",name:"客户管理",url:"/pages/qing-f-c/regionalManager/customer-admin"},{icon:"/static/images/jinsy/buy-region/genjin.png",name:"跟进记录",url:""},{icon:"/static/images/jinsy/buy-region/tongji.png",name:"报表统计",url:""},{icon:"/static/images/jinsy/buy-region/admin.png",name:"帮办管理",url:""},{icon:"/static/images/jinsy/buy-region/examine.png",name:"审核管理",url:""},{icon:"/static/images/jinsy/buy-region/renling.png",name:"身份认领",url:""}],m=[{icon:"/static/images/jinsy/sales-director/kehu.png",name:"客户管理",url:"/pages/qing-f-c/sales_director/customer-admin"},{icon:"/static/images/jinsy/sales-director/genjin.png",name:"跟进记录",url:""},{icon:"/static/images/jinsy/sales-director/tongji.png",name:"报表统计",url:""},{icon:"/static/images/jinsy/sales-director/admin.png",name:"帮办管理",url:""},{icon:"/static/images/jinsy/sales-director/examine.png",name:"审核管理",url:"/pages/qing-f-c/sales_director/approved"},{icon:"/static/images/jinsy/sales-director/renling.png",name:"身份认领",url:""}],f=[{icon:"/static/images/jinsy/sales-director/tongji.png",name:"报表统计",url:""},{icon:"/static/images/jinsy/analyist/fenxi.png",name:"分析管理",url:""}],y=[{icon:"/static/images/jinsy/buyer/xunjia.png",name:"我的询价",url:"/pages/jin-suo-yun/deputy/sample-many-search"},{icon:"/static/images/jinsy/buyer/jiaoyi.png",name:"我的交易",url:""},{icon:"/static/images/jinsy/buyer/lianxi.png",name:"联系帮办",url:""},{icon:"/static/images/jinsy/buyer/guanzhu.png",name:"我的关注",url:""},{icon:"/static/images/jinsy/buyer/mingpian.png",name:"采购名片",url:""}],h=[{icon:"/static/images/jinsy/seller/xunjia.png",name:"我的询价",url:""},{icon:"/static/images/jinsy/seller/jiaoyi.png",name:"我的交易",url:""},{icon:"/static/images/jinsy/seller/lianxi.png",name:"联系帮办",url:""},{icon:"/static/images/jinsy/seller/weidian.png",name:"我的微店",url:""},{icon:"/static/images/jinsy/seller/mingpian.png",name:"采购名片",url:""},{icon:"/static/images/jinsy/seller/renling.png",name:"身份认领",url:""},{icon:"/static/images/jinsy/seller/guanzhu.png",name:"我的关注",url:"/pages/jin-suo-yun/analysis-list"},{icon:"/static/images/jinsy/seller/mingpian.png",name:"采购名片",url:""}],j={data:function(){return{arrList:[],userInfo:{},pupDef:"",isSeller:!1,isIdentity:!0,identityName:"",isSpecial:!1,regionalManager:!1,newsNum:0,popAds:!1,identList:[],index:[0],mode:"selector",directorReviewCount:"",isDoRefresh:!1}},onPullDownRefresh:function(){this.userDetails(),this.getNewsNum(),this.pupDefault(),this.pupList(),this.reviewCount(),e.stopPullDownRefresh()},onShow:function(e){var n=getCurrentPages(),i=n[n.length-1];1==i.data.isDoRefresh&&(i.data.isDoRefresh=!1,this.reviewCount())},onLoad:function(n){if(s=this,this.checkLogin()){e.showLoading({title:"加载中"});setTimeout(function(){e.hideLoading()},1e3);this.userDetails(),this.getNewsNum(),this.pupDefault(),this.pupList(),this.reviewCount()}},components:{mpvuePicker:o,uniGrid:u,uniGridItem:c,widgit:r},props:{},methods:{reviewCount:function(){var e={},n=this.Api.directorReviewCount;this.myRequest(e,n,"get").then(function(e){console.log(t(e," at pages/qing-f-c/index.vue:424")),s.directorReviewCount=e.data.data.msg,console.log(t(s.directorReviewCount," at pages/qing-f-c/index.vue:426"))}).catch(function(e){wx.showToast({title:e.data.errMsg,icon:"none"})})},showPicker:function(){this.$refs.mpvuePicker.show()},onConfirm:function(n){this.index=n.index;var i=this.identList[this.index].id;switch(i){case"SALES_DIRECTOR":try{e.setStorageSync("pupDefault","SALES_DIRECTOR")}catch(n){return void e.showToast({title:"缓存出错",icon:"none"})}this.userDetails(),this.arrList=m,this.isSpecial=!0,this.isSeller=!1;break;case"REGIONAL_MANAGER":try{e.setStorageSync("pupDefault","REGIONAL_MANAGER"),this.userDetails()}catch(n){return void e.showToast({title:"缓存出错",icon:"none"})}this.userDetails(),setTimeout(function(){var e=d;e[0].url=e[0].url+"?regionCode="+a,console.log(t(e[0].url," at pages/qing-f-c/index.vue:475")),this.arrList=e},500),this.isSpecial=!0,this.isSeller=!1;break;case"BUY_DEPUTY":try{e.setStorageSync("pupDefault","BUY_DEPUTY")}catch(n){return void e.showToast({title:"缓存出错",icon:"none"})}this.userDetails(),this.arrList=g,this.isSeller=!1,this.isSpecial=!1;break;case"SELL_DEPUTY":try{e.setStorageSync("pupDefault","SELL_DEPUTY")}catch(n){return void e.showToast({title:"缓存出错",icon:"none"})}this.userDetails(),this.arrList=p,this.isSpecial=!1,this.isSeller=!0;break}},onChange:function(e){this.index=e.index},onCancel:function(e){console.log(t("onCancel"," at pages/qing-f-c/index.vue:520")),console.log(t(e," at pages/qing-f-c/index.vue:521"))},selectChange:function(e){this.index=e.detail.value},showSinglePicker:function(){console.log(t(this.identList," at pages/qing-f-c/index.vue:527")),this.mode="selector",this.index=[0],this.$refs.mpvuePicker.show()},getNewsNum:function(){l.getNewsNum().then(function(e){s.newsNum=e.data.data.count}).catch(function(e){console.log(t("getNewsNum=err==",res," at pages/qing-f-c/index.vue:538"))})},userDetails:function(){var n=this,i={postCode:e.getStorageSync("pupDefault")};l.userDetails(i).then(function(e){console.log(t(e," at pages/qing-f-c/index.vue:547")),s.userInfo=e.data.data,a=e.data.data.regionCode,console.log(t("quyudaima",a," at pages/qing-f-c/index.vue:550")),console.log(t("userInfo===",s.userInfo," at pages/qing-f-c/index.vue:551")),n.pupDefault()}).catch(function(e){console.log(t("getNewsNum=err==",res," at pages/qing-f-c/index.vue:554"))})},pupDefault:function(){var n=e.getStorageSync("pupDefault");switch(console.log(t("默认身份====",n," at pages/qing-f-c/index.vue:560")),"SELL_DEPUTY"!=n&&"SELLER"!=n||(s.isSeller=!0),"SALES_DIRECTOR"!=n&&"REGIONAL_MANAGER"!=n||(s.isSpecial=!0),n){case"BUY_DEPUTY":s.arrList=g;break;case"SELL_DEPUTY":s.arrList=p;break;case"ANALYST":s.arrList=f;break;case"SALES_DIRECTOR":s.arrList=m;break;case"REGIONAL_MANAGER":s.arrList=d;break;case"BUYER":s.arrList=y;break;case"SELLER":s.arrList=h;break}},pupList:function(){l.pupList().then(function(e){console.log(t("身份列表",e," at pages/qing-f-c/index.vue:595")),s.identList=e.data.data.list}).catch(function(e){console.log(t("pupList=err==",res," at pages/qing-f-c/index.vue:599"))})},scanCode:function(){wx.scanCode({success:function(e){console.log(t("code---",e," at pages/qing-f-c/index.vue:607")),console.log(t("path---",e.path," at pages/qing-f-c/index.vue:608")),wx.navigateTo({url:"/"+e.path})},fail:function(e){}})},navNewsPage:function(){console.log(t("跳转到消息页"," at pages/qing-f-c/index.vue:617")),wx.navigateTo({url:"/pages/jin-suo-yun/news"})},toChoicePage:function(){wx.getStorageSync("token")},prompt:function(n){""!=n||e.showToast({title:"开发中...",icon:"none",duration:1e3})},toJump:function(e){var n=e.currentTarget.dataset.url;n&&(this.popAds||"/pages/user-order/order"!=n)||wx.showToast({title:"开发中...",icon:"none"})}}};n.default=j}).call(this,i("6e42")["default"],i("0de9")["default"])},"6c84":function(e,n,i){"use strict";var t=function(){var e=this,n=e.$createElement;e._self._c},s=[];i.d(n,"a",function(){return t}),i.d(n,"b",function(){return s})},"9f9c":function(e,n,i){"use strict";i.r(n);var t=i("22ac"),s=i.n(t);for(var a in t)"default"!==a&&function(e){i.d(n,e,function(){return t[e]})}(a);n["default"]=s.a},d595:function(e,n,i){"use strict";var t=i("f4e4"),s=i.n(t);s.a},f4e4:function(e,n,i){},fd65:function(e,n,i){"use strict";(function(e){i("3b9b"),i("921b");t(i("66fd"));var n=t(i("05c8"));function t(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,i("6e42")["createPage"])}},[["fd65","common/runtime","common/vendor"]]]);