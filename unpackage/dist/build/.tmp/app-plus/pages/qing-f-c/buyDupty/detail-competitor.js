(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/qing-f-c/buyDupty/detail-competitor"],{"4e59":function(t,e,o){"use strict";o.r(e);var n=o("a0cb"),i=o("f223");for(var a in i)"default"!==a&&function(t){o.d(e,t,function(){return i[t]})}(a);o("ffde");var c=o("2877"),u=Object(c["a"])(i["default"],n["a"],n["b"],!1,null,null,null);e["default"]=u.exports},"5aec":function(t,e,o){"use strict";(function(t,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i,a,c=o("b65b"),u=o("096c"),l={data:function(){return{competitor:{},mainPro:""}},onLoad:function(e){i=this,a=JSON.parse(e.rivalCode),console.log(t(a," at pages/qing-f-c/buyDupty/detail-competitor.vue:96")),this.getRivalDetails()},onShow:function(){console.log(t("competitor==",a," at pages/qing-f-c/buyDupty/detail-competitor.vue:103"))},computed:{retMidleman:function(){var t=[];return t.push(1==this.competitor.isMiddleman?"中间商":""),t.push(1==this.competitor.isFactoryDirectSale?"直接采购":""),t.join("+")}},methods:{getRivalDetails:function(){console.log(t(a," at pages/qing-f-c/buyDupty/detail-competitor.vue:116"));var e={rivalCode:a};c.rivalDetails(e).then(function(e){console.log(t(e," at pages/qing-f-c/buyDupty/detail-competitor.vue:119")),i.competitor=e.data.data;var o=e.data.data.mainProducts;i.mainPro=u.list2string(o),console.log(t("raivelDetails===",i.competitor," at pages/qing-f-c/buyDupty/detail-competitor.vue:125"))}).catch(function(e){console.log(t("Err===",e," at pages/qing-f-c/buyDupty/detail-competitor.vue:127"))})},bindDelete:function(){var e=this;n.showModal({title:"删除竞争对手",content:"确认要删除竞争对手吗？不要请取消",showCancel:!0,cancelText:"返回",confirmText:"我要删除",success:function(o){if(o.confirm){var i={rivalCode:e.competitor.rivalCode};c.rivalDel(i).then(function(e){if(console.log(t("返回信息==",e," at pages/qing-f-c/buyDupty/detail-competitor.vue:144")),0==e.data.status){var o=getCurrentPages(),i=(o[o.length-1],o[o.length-2]);i.setData({isDoRefresh:!0}),n.navigateBack({delta:1})}}).catch(function(t){wx.showToast({title:t.data.msg,icon:"none"})})}else if(o.cancel)return},fail:function(){},complete:function(){}})},bindEdit:function(){var e=JSON.stringify(this.competitor);console.log(t(e," at pages/qing-f-c/buyDupty/detail-competitor.vue:177")),n.navigateTo({url:"/pages/qing-f-c/sellDupty/edit-competitor?odata="+e,success:function(e){console.log(t(e," at pages/qing-f-c/buyDupty/detail-competitor.vue:181"))},fail:function(e){console.log(t(e," at pages/qing-f-c/buyDupty/detail-competitor.vue:184"))},complete:function(){}})}}};e.default=l}).call(this,o("0de9")["default"],o("6e42")["default"])},"7bad":function(t,e,o){},a0cb:function(t,e,o){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c},i=[];o.d(e,"a",function(){return n}),o.d(e,"b",function(){return i})},eee2:function(t,e,o){"use strict";(function(t){o("3b9b"),o("921b");n(o("66fd"));var e=n(o("4e59"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,o("6e42")["createPage"])},f223:function(t,e,o){"use strict";o.r(e);var n=o("5aec"),i=o.n(n);for(var a in n)"default"!==a&&function(t){o.d(e,t,function(){return n[t]})}(a);e["default"]=i.a},ffde:function(t,e,o){"use strict";var n=o("7bad"),i=o.n(n);i.a}},[["eee2","common/runtime","common/vendor"]]]);