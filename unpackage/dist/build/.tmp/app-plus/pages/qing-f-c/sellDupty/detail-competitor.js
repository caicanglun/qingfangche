(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/qing-f-c/sellDupty/detail-competitor"],{"25c2":function(t,e,o){"use strict";(function(t){o("3b9b"),o("921b");n(o("66fd"));var e=n(o("a60b"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,o("6e42")["createPage"])},"56bd":function(t,e,o){},"56c1":function(t,e,o){"use strict";o.r(e);var n=o("9161"),i=o.n(n);for(var a in n)"default"!==a&&function(t){o.d(e,t,function(){return n[t]})}(a);e["default"]=i.a},"915a":function(t,e,o){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c},i=[];o.d(e,"a",function(){return n}),o.d(e,"b",function(){return i})},9161:function(t,e,o){"use strict";(function(t,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i,a,c=o("b65b"),l=o("096c"),u={data:function(){return{competitor:{},mainPro:""}},onLoad:function(e){i=this,a=JSON.parse(e.rivalCode),console.log(t(a," at pages/qing-f-c/sellDupty/detail-competitor.vue:96")),this.getRivalDetails()},onShow:function(){console.log(t("competitor==",a," at pages/qing-f-c/sellDupty/detail-competitor.vue:103"))},computed:{retMidleman:function(){var t=[];return t.push(1==this.competitor.isMiddleman?"中间商":""),t.push(1==this.competitor.isFactoryDirectSale?"直接采购":""),t.join("+")}},methods:{getRivalDetails:function(){console.log(t(a," at pages/qing-f-c/sellDupty/detail-competitor.vue:116"));var e={rivalCode:a};c.rivalDetails(e).then(function(e){console.log(t(e," at pages/qing-f-c/sellDupty/detail-competitor.vue:119")),i.competitor=e.data.data;var o=e.data.data.mainProducts;i.mainPro=l.list2string(o),console.log(t("raivelDetails===",i.competitor," at pages/qing-f-c/sellDupty/detail-competitor.vue:125"))}).catch(function(e){console.log(t("Err===",e," at pages/qing-f-c/sellDupty/detail-competitor.vue:127"))})},bindDelete:function(){var e=this;n.showModal({title:"删除竞争对手",content:"确认要删除竞争对手吗？不要请取消",showCancel:!0,cancelText:"返回",confirmText:"我要删除",success:function(o){if(o.confirm){var i={rivalCode:e.competitor.rivalCode};c.rivalDel(i).then(function(e){if(console.log(t("返回信息==",e," at pages/qing-f-c/sellDupty/detail-competitor.vue:144")),0==e.data.status){var o=getCurrentPages(),i=(o[o.length-1],o[o.length-2]);i.setData({isDoRefresh:!0}),n.navigateBack({delta:1})}}).catch(function(t){wx.showToast({title:t.data.msg,icon:"none"})})}else if(o.cancel)return},fail:function(){},complete:function(){}})},bindEdit:function(){var e=JSON.stringify(this.competitor);console.log(t(e," at pages/qing-f-c/sellDupty/detail-competitor.vue:177")),n.navigateTo({url:"/pages/qing-f-c/sellDupty/edit-competitor?odata="+e,success:function(e){console.log(t(e," at pages/qing-f-c/sellDupty/detail-competitor.vue:181"))},fail:function(e){console.log(t(e," at pages/qing-f-c/sellDupty/detail-competitor.vue:184"))},complete:function(){}})}}};e.default=u}).call(this,o("0de9")["default"],o("6e42")["default"])},a56d:function(t,e,o){"use strict";var n=o("56bd"),i=o.n(n);i.a},a60b:function(t,e,o){"use strict";o.r(e);var n=o("915a"),i=o("56c1");for(var a in i)"default"!==a&&function(t){o.d(e,t,function(){return i[t]})}(a);o("a56d");var c=o("2877"),l=Object(c["a"])(i["default"],n["a"],n["b"],!1,null,null,null);e["default"]=l.exports}},[["25c2","common/runtime","common/vendor"]]]);