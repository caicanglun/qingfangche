(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/qing-f-c/sellDupty/customer-admin"],{"0ccd":function(e,t,n){"use strict";n.r(t);var i=n("5db8"),o=n.n(i);for(var a in i)"default"!==a&&function(e){n.d(t,e,(function(){return i[e]}))}(a);t["default"]=o.a},3123:function(e,t,n){"use strict";n.r(t);var i=n("df51"),o=n("0ccd");for(var a in o)"default"!==a&&function(e){n.d(t,e,(function(){return o[e]}))}(a);n("e583");var u,s=n("f0c5"),l=Object(s["a"])(o["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],u);t["default"]=l.exports},"5db8":function(e,t,n){"use strict";(function(e,i){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,a=u(n("4795"));function u(e){return e&&e.__esModule?e:{default:e}}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t,n,i,o,a,u){try{var s=e[a](u),l=s.value}catch(r){return void n(r)}s.done?t(l):Promise.resolve(l).then(i,o)}function r(e){return function(){var t=this,n=arguments;return new Promise((function(i,o){var a=e.apply(t,n);function u(e){l(a,i,o,u,s,"next",e)}function s(e){l(a,i,o,u,s,"throw",e)}u(void 0)}))}}var c,d,g=function(){n.e("components/dropMenuRegion").then(function(){return resolve(n("a9a8"))}.bind(null,n)).catch(n.oe)},p=function(){n.e("components/dropMenuDeputy").then(function(){return resolve(n("6252"))}.bind(null,n)).catch(n.oe)},f=function(){n.e("components/dropMenuLevel").then(function(){return resolve(n("951a"))}.bind(null,n)).catch(n.oe)},h=function(){n.e("components/dropMenuPrivateLevel").then(function(){return resolve(n("02674"))}.bind(null,n)).catch(n.oe)},m=function(){n.e("components/uni-icons/uni-icons").then(function(){return resolve(n("2cee"))}.bind(null,n)).catch(n.oe)},v=function(){n.e("components/uni-load-more/uni-load-more").then(function(){return resolve(n("fbad"))}.bind(null,n)).catch(n.oe)},y=function(){n.e("components/ms-dropdown/dropdown-menu").then(function(){return resolve(n("d8d8"))}.bind(null,n)).catch(n.oe)},L=function(){n.e("components/ms-dropdown/dropdown-item").then(function(){return resolve(n("fa40"))}.bind(null,n)).catch(n.oe)},C=20,b=(n("b65b"),o={components:{uniIcon:m,uniLoadMore:v,msDropdownMenu:y,msDropdownItem:L,dropMenuRegion:g,dropMenuDeputy:p,dropMenuLevel:f,dropMenuPirLevel:h},data:function(){return{regionList:[],tabTwo:0,compileing:!1,allPitchOn:!1,inputValueOne:"",setOver:!1,selectContent:[],bindSelect:!1,loadingType:"more",loading:!1,numOne:0,numTwo:0,numThree:0,customerList:[],isFilterBuyer:!1,isFilterSeller:!1,pageNum:1,buyOrSell:-1,isAllocation:-1,isLastPage:!1,codeValue:[],isDoRefresh:!1,totalPage:"",userCode:"",privateLevel:"",companyLevel:"",regionCode:"",postCode:"",totalCount:""}},onReachBottom:function(){null!=d&&clearTimeout(d),d=setTimeout((function(){c.getMoreCustomer()}),1e3)},onPullDownRefresh:function(){c.getCustomerList()},onShow:function(){var e=getCurrentPages(),t=e[e.length-1];1==t.data.isDoRefresh&&(t.data.isDoRefresh=!1,this.pageNum=1,this.getCustomerList()),this.getCustomerList()},onLoad:function(t){c=this,this.postCode=e.getStorageSync("pupDefault"),this.regionCode=this.$store.state.regionCode,this.checkLogin()&&this.getCustomerList()},onNavigationBarButtonTap:function(e){this.tabTwo>0&&this.tapCompile()}},s(o,"components",{}),s(o,"props",{}),s(o,"methods",{goCustomerCreated:function(){wx.navigateTo({url:"/pages/qing-f-c/sellDupty/customer-created"})},getRegionCode:function(){var e=this;return r(a.default.mark((function t(){var n;return a.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("/cm/region_deputy");case 2:n=t.sent,e.regionList=n.data.data.list,e.tapRegion(e.regionCode),i("log",n," at pages/qing-f-c/sellDupty/customer-admin.vue:260");case 6:case"end":return t.stop()}}),t)})))()},tapRegion:function(e){var t=this;i("log",e," at pages/qing-f-c/sellDupty/customer-admin.vue:263"),this.regionList.forEach((function(n,i){n.regionCode==e&&(t.$refs.refDeputy.selectContent=t.regionList[i].list,t.regionList[i].list.length>6?t.$refs.refDeputy.index=2:t.$refs.refDeputy.index=1)}))},tapSelectLevel:function(e){i("log",e," at pages/qing-f-c/sellDupty/customer-admin.vue:279"),this.companyLevel=e,this.privateLevel="",this.pageNum=1,this.loadingType="more",this.getCustomerList()},tapSelectPrivateLevel:function(e){i("log",e," at pages/qing-f-c/sellDupty/customer-admin.vue:287"),this.privateLevel=e,this.companyLevel="",this.pageNum=1,this.loadingType="more",this.getCustomerList()},tapSelectDeputy:function(e){i("log",e," at pages/qing-f-c/sellDupty/customer-admin.vue:295"),this.userCode=e,this.pageNum=1,this.loadingType="more",this.getCustomerList()},getMoreCustomer:function(){var t=this;return r(a.default.mark((function n(){var o,u;return a.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if("more"===c.loadingType){n.next=2;break}return n.abrupt("return",!1);case 2:return c.loadingType="loading",e.showNavigationBarLoading(),o={keyword:c.inputValueOne,regionCode:c.regionCode,isAllocation:c.isAllocation,pageNum:c.pageNum,pageSize:C,postCode:t.postCode,userCode:t.userCode,companyLevel:t.companyLevel,privateLevel:t.privateLevel},n.next=7,t.$http.get("/cm/list",{data:o});case 7:if(u=n.sent,0!=u.data.data.list.length){n.next=13;break}return i("log","no data"," at pages/qing-f-c/sellDupty/customer-admin.vue:325"),c.loadingType="",e.hideNavigationBarLoading(),n.abrupt("return");case 13:c.pageNum++,i("log",u," at pages/qing-f-c/sellDupty/customer-admin.vue:331"),c.customerList=c.customerList.concat(u.data.data.list),c.loadingType="more",e.hideNavigationBarLoading();case 18:case"end":return n.stop()}}),n)})))()},getCustomerList:function(){var t=this;return r(a.default.mark((function n(){var o,u;return a.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return c.pageNum=1,c.loadingType="more",e.showNavigationBarLoading(),o={keyword:c.inputValueOne,regionCode:c.regionCode,isAllocation:c.isAllocation,pageNum:c.pageNum,pageSize:C,postCode:t.postCode,userCode:t.userCode,companyLevel:t.companyLevel,privateLevel:t.privateLevel},i("log","客户请求参数",o," at pages/qing-f-c/sellDupty/customer-admin.vue:355"),n.next=7,t.$http.get("/cm/list",{data:o});case 7:u=n.sent,i("log","客户信息===",u," at pages/qing-f-c/sellDupty/customer-admin.vue:358"),c.pageNum++,c.customerList=u.data.data.list,t.totalCount=u.data.data.totalCount,c.isLastPage=u.data.data.isLastPage,c.totalPage=u.data.data.totalPage,c.loadingType="more",e.hideNavigationBarLoading();case 16:case"end":return n.stop()}}),n)})))()},checkboxChange:function(e){this.codeValue=e.detail.value},tabAllPitchOn:function(){this.allPitchOn=!this.allPitchOn,i("log","quanxuankuang",this.allPitchOn," at pages/qing-f-c/sellDupty/customer-admin.vue:393");var e=[];this.allPitchOn?(this.customerList.forEach((function(t){e.push(t.companyCode)})),c.codeValue=e):c.codeValue=[]},blurInput:function(e){i("log",this.inputValueOne,e.detail.value," at pages/qing-f-c/sellDupty/customer-admin.vue:407")},tapBuyFilter:function(e){var t;this.buyOrSell=1,this.isFilterBuyer=!0,this.isFilterSeller=!1,t=0==this.selectContent[0].id?"":this.selectContent[0].id,this.getCustomerList(this.pageNum,this.isAllocation,this.buyOrSell,t)},tapSellFilter:function(){var e;this.buyOrSell=2,this.isFilterBuyer=!1,this.isFilterSeller=!0,e=0==this.selectContent[0].id?"":this.selectContent[0].id,this.getCustomerList(this.pageNum,this.isAllocation,this.buyOrSell,e)},bindSearch:function(e){},bindSelectFunc:function(){this.bindSelect=!this.bindSelect},tapSearch:function(){e.showLoading({title:"搜索中..."}),this.pageNum=1,this.isAllocation=-1,this.buyOrSell=-1,this.getCustomerList(),setTimeout((function(){e.hideLoading()}),1e3)},setNavButton:function(e){var t=getCurrentPages(),n=t[t.length-1],i=n.$getAppWebview(),o=i.getStyle().titleNView;o.buttons[0].text=e,i.setStyle({titleNView:o})},tapTabTwo:function(e){var t=e.currentTarget.dataset.index;this.tabTwo=t,i("log",t," at pages/qing-f-c/sellDupty/customer-admin.vue:494"),0==t&&(this.setNavButton(""),this.isAllocation=-1,this.compileing=!1),1==t&&(this.setNavButton("编辑"),this.isAllocation=1,this.pageNum=1),2==t&&(this.setNavButton("编辑"),this.isAllocation=0,this.pageNum=1,i("log","分配状态：",this.isAllocation," at pages/qing-f-c/sellDupty/customer-admin.vue:515")),this.getCustomerList()},tapCompile:function(){this.compileing=!this.compileing,this.compileing?this.setNavButton("完成"):this.setNavButton("编辑")},setTime:function(){var e=new Date,t=e.getMonth()+1;t=t<10?"0"+t:t;var n=e.getFullYear()+"-"+t+"-"+e.getDate();this.newTime=n},toSingleAllo:function(e){c.codeValue=[],c.codeValue.push(e),this.toAllotAreaManager()},delSingleAllo:function(e){c.codeValue=[],c.codeValue.push(e),this.deleteAllot()},toAllotAreaManager:function(){var t=this,n=c.codeValue,o=[];if(c.codeValue.forEach((function(e){t.customerList.forEach((function(t){t.companyCode==e&&o.push(t.buyOrSell)}))})),o.includes(1)&&o.includes(2))e.showToast({title:"不能同时选择买家和卖家",icon:"none"});else{i("log","optionList===",n.length," at pages/qing-f-c/sellDupty/customer-admin.vue:580"),n.length>0?(n=JSON.stringify(n),e.navigateTo({url:"/pages/qing-f-c/regionalManager/deputy-list?optionList="+n+"&buyOrSell="+o[0]})):e.showToast({title:"至少选择一个客户",icon:"none"})}},deleteAllot:function(){var t=this;e.showModal({title:"移除分配",content:"确认要移除该分配吗？不要请返回",showCancel:!0,cancelText:"返回",confirmText:"我要移除",success:function(e){if(e.confirm){var n=c.codeValue,o={companyCodes:n},a=t.Api.managerDel;t.myRequest(o,a,"post").then((function(e){i("log","区域经理删除分配",e," at pages/qing-f-c/sellDupty/customer-admin.vue:610"),0==e.data.status&&(wx.showToast({title:"成功删除分配"}),t.getCustomerList(t.pageNum,t.isAllocation))})).catch((function(t){i("log","getBSList=err==",e," at pages/qing-f-c/sellDupty/customer-admin.vue:620")}))}else if(e.cancel)return},fail:function(){},complete:function(){}})},toClientDetail:function(e){i("log",e," at pages/qing-f-c/sellDupty/customer-admin.vue:639"),wx.navigateTo({url:"./customer-details?companyCode="+e})}}),o);t.default=b}).call(this,n("6e42")["default"],n("0de9")["default"])},8825:function(e,t,n){},"8c0d":function(e,t,n){"use strict";(function(e){n("3b9b"),n("921b");i(n("66fd"));var t=i(n("3123"));function i(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},df51:function(e,t,n){"use strict";var i,o=function(){var e=this,t=e.$createElement;e._self._c},a=[];n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return i}))},e583:function(e,t,n){"use strict";var i=n("8825"),o=n.n(i);o.a}},[["8c0d","common/runtime","common/vendor"]]]);