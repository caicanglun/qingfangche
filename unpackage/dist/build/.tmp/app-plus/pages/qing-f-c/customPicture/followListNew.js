(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/qing-f-c/customPicture/followListNew"],{"3f51":function(e,t,n){},"53e8":function(e,t,n){"use strict";n.r(t);var o=n("e4a9"),a=n.n(o);for(var i in o)"default"!==i&&function(e){n.d(t,e,(function(){return o[e]}))}(i);t["default"]=a.a},"54dd":function(e,t,n){"use strict";var o,a=function(){var e=this,t=e.$createElement;e._self._c},i=[];n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return o}))},"959f":function(e,t,n){"use strict";(function(e){n("3b9b"),n("921b");o(n("66fd"));var t=o(n("fc42"));function o(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},c3acb:function(e,t,n){"use strict";var o=n("3f51"),a=n.n(o);a.a},e4a9:function(e,t,n){"use strict";(function(e,o){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n("4795"));function i(e){return e&&e.__esModule?e:{default:e}}function c(e,t,n,o,a,i,c){try{var u=e[i](c),r=u.value}catch(s){return void n(s)}u.done?t(r):Promise.resolve(r).then(o,a)}function u(e){return function(){var t=this,n=arguments;return new Promise((function(o,a){var i=e.apply(t,n);function u(e){c(i,o,a,u,r,"next",e)}function r(e){c(i,o,a,u,r,"throw",e)}u(void 0)}))}}var r,s,l=function(){n.e("components/uni-load-more/uni-load-more").then(function(){return resolve(n("fbad"))}.bind(null,n)).catch(n.oe)},f=function(){n.e("components/uni-icons/uni-icons").then(function(){return resolve(n("2cee"))}.bind(null,n)).catch(n.oe)},d=function(){n.e("components/topTabbar-follow").then(function(){return resolve(n("3a4b"))}.bind(null,n)).catch(n.oe)},p=function(){n.e("components/ms-dropdown/dropdown-menu").then(function(){return resolve(n("d8d8"))}.bind(null,n)).catch(n.oe)},h=function(){n.e("components/ms-dropdown/dropdown-item").then(function(){return resolve(n("fa40"))}.bind(null,n)).catch(n.oe)},v={components:{uniLoadMore:l,uniIcon:f,topTabbar:d,msDropdownMenu:p,msDropdownItem:h},data:function(){return{pupDefault:"",baseUrl:"/static/images/jinsy/alert/",items:[{text:"最新跟进",value:0},{text:"待跟进",value:1}],loadingType:"more",companyLevelList:[],companyLevel:0,followList:[],keyword:"",scope:0,pageNum:1,pageSize:20,isDoRefresh:!1,isShowButton:!1}},onReachBottom:function(){null!=s&&clearTimeout(s),s=setTimeout((function(){r.fetchMoreList()}),1e3)},onPullDownRefresh:function(){this.fetchList()},onLoad:function(){r=this,this.pupDefault=e.getStorageSync("pupDefault"),"BUY_DEPUTY"==this.pupDefault&&(this.isShowButton=!0),this.getCompanyLevel(),this.fetchList()},onShow:function(){var e=getCurrentPages(),t=e[e.length-1];1==t.data.isDoRefresh&&(t.data.isDoRefresh=!1,this.fetchList())},methods:{getCompanyLevel:function(){var e=this;return u(a.default.mark((function t(){var n,i;return a.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("/choose/company_level",{});case 2:n=t.sent,o("log","companyLevel",n," at pages/qing-f-c/customPicture/followListNew.vue:123"),i=n.data.data.list,i.forEach((function(t){e.companyLevelList.push({text:t.label,value:t.id})})),e.companyLevelList.unshift({text:"客户等级",value:0});case 7:case"end":return t.stop()}}),t)})))()},filterInput:function(){this.loadingType="more",this.fetchList()},fetchList:function(){var t=this;return u(a.default.mark((function n(){var i,c;return a.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return t.pageNum=1,i={companyLevel:t.companyLevel,keyword:t.keyword,scope:t.scope,pageNum:t.pageNum,pageSize:t.pageSize},n.next=4,t.$http.get("/portrayal/deputy_list",{data:i});case 4:c=n.sent,o("log",c," at pages/qing-f-c/customPicture/followListNew.vue:146"),t.pageNum+=1,t.followList=c.data.data.list,e.stopPullDownRefresh();case 9:case"end":return n.stop()}}),n)})))()},fetchMoreList:function(){var t=this;return u(a.default.mark((function n(){var o,i;return a.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if("more"===r.loadingType){n.next=2;break}return n.abrupt("return",!1);case 2:return r.loadingType="loading",e.showNavigationBarLoading(),o={companyLevel:t.companyLevel,keyword:t.keyword,scope:t.scope,pageNum:t.pageNum,pageSize:t.pageSize},n.next=7,t.$http.get("/portrayal/deputy_list",{data:o});case 7:if(i=n.sent,0!=i.data.data.list.length){n.next=12;break}return r.loadingType="",e.hideNavigationBarLoading(),n.abrupt("return");case 12:t.pageNum+=1,t.followList=t.followList.concat(i.data.data.list),r.loadingType="more",e.hideNavigationBarLoading();case 16:case"end":return n.stop()}}),n)})))()},toDetail:function(t){e.navigateTo({url:"./sd_followRecordDetail?companyCode=".concat(t),success:function(e){},fail:function(e){o("log",e," at pages/qing-f-c/customPicture/followListNew.vue:182")},complete:function(){}})},tabSwitch:function(e){this.activeIndex=e,o("log","activeIndex",this.activeIndex," at pages/qing-f-c/customPicture/followListNew.vue:188"),0==this.activeIndex&&(this.scope=0),1==this.activeIndex&&(this.scope=1),this.fetchList()},tapSearch:function(){o("log",this.keyword," at pages/qing-f-c/customPicture/followListNew.vue:198"),this.fetchList()},addFollow:function(){e.navigateTo({url:"./addFollowRecord",success:function(e){},fail:function(e){o("log",e," at pages/qing-f-c/customPicture/followListNew.vue:206")},complete:function(){}})}}};t.default=v}).call(this,n("6e42")["default"],n("0de9")["default"])},fc42:function(e,t,n){"use strict";n.r(t);var o=n("54dd"),a=n("53e8");for(var i in a)"default"!==i&&function(e){n.d(t,e,(function(){return a[e]}))}(i);n("c3acb");var c,u=n("f0c5"),r=Object(u["a"])(a["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],c);t["default"]=r.exports}},[["959f","common/runtime","common/vendor"]]]);