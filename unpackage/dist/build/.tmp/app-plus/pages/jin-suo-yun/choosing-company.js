(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/jin-suo-yun/choosing-company"],{"429e":function(t,n,e){"use strict";var o=function(){var t=this,n=t.$createElement;t._self._c},a=[];e.d(n,"a",function(){return o}),e.d(n,"b",function(){return a})},"53fd":function(t,n,e){"use strict";e.r(n);var o=e("429e"),a=e("9fcd");for(var s in a)"default"!==s&&function(t){e.d(n,t,function(){return a[t]})}(s);e("d5f3");var u=e("2877"),c=Object(u["a"])(a["default"],o["a"],o["b"],!1,null,null,null);n["default"]=c.exports},"9a19":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o,a,s,u=e("104e"),c=1,i=!0,r={data:function(){return{list:[],content:""}},onPullDownRefresh:function(){c=1,i=!0,this.getCompanyList()},onReachBottom:function(){this.getCompanyList()},onLoad:function(n){console.log(t("options",n," at pages\\jin-suo-yun\\choosing-company.vue:46")),a=n.type||2,s=!!n.deputy,c=1,o=this,this.getCompanyList()},components:{},props:{},methods:{tapSearch:function(){c=1,i=!0,this.getCompanyList()},getCompanyList:function(){var n={pageSize:20,pageNo:c,content:this.content};if(s){var e=wx.getStorageSync("userInfo");n.deputyId=e.id}else n.type=a;!i||c<0||(i=!1,u.getCompanyList(n).then(function(n){console.log(t("res===",n," at pages\\jin-suo-yun\\choosing-company.vue:87")),wx.stopPullDownRefresh(),i=!0;var e=o.list;1==c?o.setData({list:n.data}):o.setData({list:e.concat(n.data)}),20==n.data.length?c++:c=-1}).catch(function(n){wx.stopPullDownRefresh(),i=!0,console.log(t("Err==",n," at pages\\jin-suo-yun\\choosing-company.vue:110"))}))},blurInput:function(t){this.setData({content:t.detail.value})},bindSelection:function(t){var n=t.currentTarget.dataset.id,e=t.currentTarget.dataset.name,o=getCurrentPages(),a=o[o.length-2];a.setData({customerId:n,corporateName:e}),wx.navigateBack({})},setData:function(t){var n,e,o=this,a=[];Object.keys(t).forEach(function(s){a=s.split("."),n=t[s],e=o.$data,a.forEach(function(t,s){s+1==a.length?o.$set(e,t,n):e[t]||o.$set(e,t,{}),e=e[t]})})}}};n.default=r}).call(this,e("0de9")["default"])},"9fcd":function(t,n,e){"use strict";e.r(n);var o=e("9a19"),a=e.n(o);for(var s in o)"default"!==s&&function(t){e.d(n,t,function(){return o[t]})}(s);n["default"]=a.a},d5f3:function(t,n,e){"use strict";var o=e("ea56"),a=e.n(o);a.a},ea56:function(t,n,e){}},[["b586","common/runtime","common/vendor"]]]);