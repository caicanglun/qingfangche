(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/qing-f-c/sales_director/customer-admin"],{2351:function(t,e,i){"use strict";(function(t,o){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n,a,s,l=function(){return i.e("components/uni-icons/uni-icons").then(i.bind(null,"2cee"))},c=function(){return i.e("components/uni-load-more/uni-load-more").then(i.bind(null,"fbad"))},u=10,r=i("b65b"),g={components:{uniIcon:l,uniLoadMore:c},data:function(){return{loadingType:"more",tabTwo:0,compileing:!1,allPitchOn:!1,inputValueOne:"",setOver:!1,selectContent:[],bindSelect:!1,loading:!1,numOne:0,numTwo:0,numThree:0,customerList:[],isFilterBuyer:!1,isFilterSeller:!1,pageNum:1,buyOrSell:-1,isAllocation:-1,isLastPage:!1,codeValue:[],isDoRefresh:!1,totalPage:""}},onReachBottom:function(){null!=s&&clearTimeout(s),s=setTimeout(function(){n.getMoreCustomer(n.pageNum,n.isAllocation)},1e3)},onPullDownRefresh:function(){n.getCustomerList(n.pageNum,n.isAllocation)},onShow:function(){var t=getCurrentPages(),e=t[t.length-1];1==e.data.isDoRefresh&&(e.data.isDoRefresh=!1,n.pageNum=1,n.getCustomerList(n.pageNum,n.isAllocation))},onLoad:function(e){n=this,a=t.getStorageSync("pupDefault"),this.checkLogin()&&(n.getCustomerList(this.pageNum,this.isAllocation),n.getRegionCode())},onNavigationBarButtonTap:function(t){this.tabTwo>0&&this.tapCompile()},methods:{getMoreCustomer:function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:-1,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"";if("more"!==n.loadingType)return!1;n.loadingType="loading",t.showNavigationBarLoading();var l=t.getStorageSync("pupDefault"),c={keyword:s,regionCode:a,buyOrSell:i,isAllocation:e,pageNum:n.pageNum,pageSize:u,postCode:l};r.dmList(c).then(function(e){if(0==e.data.data.list.length)return console.log(o("no data"," at pages/qing-f-c/sales_director/customer-admin.vue:291")),n.loadingType="",void t.hideNavigationBarLoading();n.pageNum++,console.log(o(e," at pages/qing-f-c/sales_director/customer-admin.vue:297")),n.customerList=n.customerList.concat(e.data.data.list),n.loadingType="more",t.hideNavigationBarLoading()}).catch(function(t){console.log(o("getBSList=err==",t," at pages/qing-f-c/sales_director/customer-admin.vue:304"))})},getRegionCode:function(){var t=this.Api.getRegion;this.myRequest({},t,"get").then(function(t){console.log(o("regionCode",t," at pages/qing-f-c/sales_director/customer-admin.vue:311")),n.selectContent=t.data.data.list,n.selectContent.unshift({id:0,label:"全部区域"}),console.log(o("regionCode===",n.selectContent," at pages/qing-f-c/sales_director/customer-admin.vue:314"))}).catch(function(t){console.log(o("getBSList=err==",res," at pages/qing-f-c/sales_director/customer-admin.vue:317"))})},getCustomerList:function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:-1,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",l=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"";n.pageNum=1,n.loadingType="more",t.showNavigationBarLoading();var c={keyword:l,regionCode:s,buyOrSell:i,isAllocation:e,pageNum:n.pageNum,pageSize:u,postCode:a};console.log(o(c," at pages/qing-f-c/sales_director/customer-admin.vue:336")),r.dmList(c).then(function(t){n.pageNum++,n.customerList=t.data.data.list,n.isLastPage=t.data.data.isLastPage,n.totalPage=t.data.data.totalPage}).catch(function(t){console.log(o("getBSList=err==",res," at pages/qing-f-c/sales_director/customer-admin.vue:346"))});var g={keyword:l,regionCode:s,buyOrSell:i,postCode:a};r.dmCount(g).then(function(t){console.log(o("客户数量===",t," at pages/qing-f-c/sales_director/customer-admin.vue:356")),n.numOne=t.data.data.all,n.numTwo=t.data.data.isAllocation,n.numThree=t.data.data.notAllocation}).catch(function(t){console.log(o("getBSList=err==",res," at pages/qing-f-c/sales_director/customer-admin.vue:361"))}),t.hideNavigationBarLoading(),t.stopPullDownRefresh()},checkboxChange:function(t){this.codeValue=t.detail.value},tabAllPitchOn:function(){this.allPitchOn=!this.allPitchOn,console.log(o("quanxuankuang",this.allPitchOn," at pages/qing-f-c/sales_director/customer-admin.vue:376"));var t=[];this.allPitchOn?(this.customerList.forEach(function(e){t.push(e.companyCode)}),n.codeValue=t):n.codeValue=[]},blurInput:function(t){console.log(o(this.tabOne,t.detail.value," at pages/qing-f-c/sales_director/customer-admin.vue:394"))},tapBuyFilter:function(t){var e;this.buyOrSell=1,this.isFilterBuyer=!0,this.isFilterSeller=!1,e=0==this.selectContent[0].id?"":this.selectContent[0].id,this.getCustomerList(this.pageNum,this.isAllocation,this.buyOrSell,e)},tapSellFilter:function(){var t;this.buyOrSell=2,this.isFilterBuyer=!1,this.isFilterSeller=!0,t=0==this.selectContent[0].id?"":this.selectContent[0].id,this.getCustomerList(this.pageNum,this.isAllocation,this.buyOrSell,t)},bindSearch:function(t){},bindSelectFunc:function(){this.bindSelect=!this.bindSelect},bindSelectContent:function(t){var e=t.currentTarget.dataset.index,i=this.selectContent,o=i[0];i[0]=i[e],i[e]=o,0==this.selectContent[0].id?this.getCustomerList(this.pageNum,this.isAllocation,this.buyOrSell):this.getCustomerList(this.pageNum,this.isAllocation,this.buyOrSell,this.selectContent[0].id)},tapSearch:function(){t.showLoading({title:"搜索中..."});var e=1,i=-1,o=-1,n="";this.getCustomerList(e,i,o,n,this.inputValueOne),setTimeout(function(){t.hideLoading()},1e3)},setNavButton:function(t){var e=getCurrentPages(),i=e[e.length-1],o=i.$getAppWebview(),n=o.getStyle().titleNView;n.buttons[0].text=t,o.setStyle({titleNView:n})},tapTabTwo:function(t){var e=t.currentTarget.dataset.index;this.isAllocation=1,this.tabTwo=e,console.log(o(e," at pages/qing-f-c/sales_director/customer-admin.vue:499")),0==e&&(this.setNavButton(""),this.isAllocation=-1,this.compileing=!1,this.getCustomerList()),1==e&&(this.setNavButton("编辑"),this.isAllocation=1,this.pageNum=1,this.getCustomerList(this.pageNum,this.isAllocation)),2==e&&(this.setNavButton("编辑"),this.isAllocation=0,this.pageNum=1,console.log(o("分配状态：",this.isAllocation," at pages/qing-f-c/sales_director/customer-admin.vue:519")),this.getCustomerList(this.pageNum,this.isAllocation))},tapCompile:function(){this.compileing=!this.compileing,this.compileing?this.setNavButton("完成"):this.setNavButton("编辑")},setTime:function(){var t=new Date,e=t.getMonth()+1;e=e<10?"0"+e:e;var i=t.getFullYear()+"-"+e+"-"+t.getDate();this.newTime=i},toSingleAllo:function(t){n.codeValue=[],n.codeValue.push(t),this.toAllotAreaManager()},delSingleAllo:function(t){n.codeValue=[],n.codeValue.push(t),this.deleteAllot()},toAllotAreaManager:function(){var e=this,i=n.codeValue,a=[];if(n.codeValue.forEach(function(t){e.customerList.forEach(function(e){e.companyCode==t&&a.push(e.buyOrSell)})}),a.includes(1)&&a.includes(2))t.showToast({title:"不能同时选择买家和卖家",icon:"none"});else{console.log(o("optionList===",i.length," at pages/qing-f-c/sales_director/customer-admin.vue:582")),i.length>0?(i=JSON.stringify(i),t.navigateTo({url:"/pages/qing-f-c/sales_director/manager-list?optionList="+i+"&buyOrSell="+a[0]})):t.showToast({title:"至少选择一个客户",icon:"none"})}},deleteAllot:function(){var e=this;t.showModal({title:"移除分配",content:"确认要移除该客户分配吗？不要请返回",showCancel:!0,cancelText:"返回",confirmText:"我要移除",success:function(t){if(t.confirm){var i=n.codeValue,a={companyCodes:i},s=e.Api.majordomoDel;e.myRequest(a,s,"post").then(function(t){0==t.data.status&&(wx.showToast({title:"成功删除分配"}),0==e.selectContent[0].id?e.getCustomerList(e.pageNum,e.isAllocation,e.buyOrSell):e.getCustomerList(e.pageNum,e.isAllocation,e.buyOrSell,e.selectContent[0].id))}).catch(function(e){console.log(o("getBSList=err==",t," at pages/qing-f-c/sales_director/customer-admin.vue:625"))})}else if(t.cancel)return},fail:function(){},complete:function(){}})},toClientDetail:function(t){console.log(o(t," at pages/qing-f-c/sales_director/customer-admin.vue:644")),wx.navigateTo({url:"/pages/qing-f-c/sales_director/customer-details?companyCode="+t})}}};e.default=g}).call(this,i("6e42")["default"],i("0de9")["default"])},"32b3":function(t,e,i){"use strict";var o=function(){var t=this,e=t.$createElement;t._self._c},n=[];i.d(e,"a",function(){return o}),i.d(e,"b",function(){return n})},6058:function(t,e,i){"use strict";i.r(e);var o=i("2351"),n=i.n(o);for(var a in o)"default"!==a&&function(t){i.d(e,t,function(){return o[t]})}(a);e["default"]=n.a},"6d76":function(t,e,i){"use strict";(function(t){i("3b9b"),i("921b");o(i("66fd"));var e=o(i("959b"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,i("6e42")["createPage"])},"6f8c":function(t,e,i){"use strict";var o=i("806f"),n=i.n(o);n.a},"806f":function(t,e,i){},"959b":function(t,e,i){"use strict";i.r(e);var o=i("32b3"),n=i("6058");for(var a in n)"default"!==a&&function(t){i.d(e,t,function(){return n[t]})}(a);i("6f8c");var s=i("2877"),l=Object(s["a"])(n["default"],o["a"],o["b"],!1,null,null,null);e["default"]=l.exports}},[["6d76","common/runtime","common/vendor"]]]);