(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/qing-f-c/sellDupty/detail-competitor"],{"25c2":function(t,e,a){"use strict";(function(t){a("3b9b"),a("921b");i(a("66fd"));var e=i(a("a60b"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,a("6e42")["createPage"])},2856:function(t,e,a){},"32a7":function(t,e,a){"use strict";(function(t,i){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n,o,c=a("b65b"),l=a("096c"),u={data:function(){return{competitor:{},mainPro:""}},onLoad:function(e){n=this,o=JSON.parse(e.rivalCode),t("log",o," at pages/qing-f-c/sellDupty/detail-competitor.vue:96"),this.getRivalDetails()},onShow:function(){t("log","competitor==",o," at pages/qing-f-c/sellDupty/detail-competitor.vue:103")},computed:{retMidleman:function(){var t=[];return t.push(1==this.competitor.isMiddleman?"中间商":""),t.push(1==this.competitor.isFactoryDirectSale?"直接采购":""),t.join("+")}},methods:{getRivalDetails:function(){t("log",o," at pages/qing-f-c/sellDupty/detail-competitor.vue:116");var e={rivalCode:o};c.rivalDetails(e).then(function(e){t("log",e," at pages/qing-f-c/sellDupty/detail-competitor.vue:119"),n.competitor=e.data.data;var a=e.data.data.mainProducts;n.mainPro=l.list2string(a),t("log","raivelDetails===",n.competitor," at pages/qing-f-c/sellDupty/detail-competitor.vue:125")}).catch(function(e){t("log","Err===",e," at pages/qing-f-c/sellDupty/detail-competitor.vue:127")})},bindDelete:function(){var e=this;i.showModal({title:"删除竞争对手",content:"确认要删除竞争对手吗？不要请取消",showCancel:!0,cancelText:"返回",confirmText:"我要删除",success:function(a){if(a.confirm){var n={rivalCode:e.competitor.rivalCode};c.rivalDel(n).then(function(e){if(t("log","返回信息==",e," at pages/qing-f-c/sellDupty/detail-competitor.vue:144"),0==e.data.status){var a=getCurrentPages(),n=(a[a.length-1],a[a.length-2]);n.setData({isDoRefresh:!0}),i.navigateBack({delta:1})}}).catch(function(t){wx.showToast({title:t.data.msg,icon:"none"})})}else if(a.cancel)return},fail:function(){},complete:function(){}})},bindEdit:function(){var e=JSON.stringify(this.competitor);t("log",e," at pages/qing-f-c/sellDupty/detail-competitor.vue:177"),i.navigateTo({url:"/pages/qing-f-c/sellDupty/edit-competitor?odata="+e,success:function(e){t("log",e," at pages/qing-f-c/sellDupty/detail-competitor.vue:181")},fail:function(e){t("log",e," at pages/qing-f-c/sellDupty/detail-competitor.vue:184")},complete:function(){}})}}};e.default=u}).call(this,a("0de9")["default"],a("6e42")["default"])},"56c1":function(t,e,a){"use strict";a.r(e);var i=a("32a7"),n=a.n(i);for(var o in i)"default"!==o&&function(t){a.d(e,t,function(){return i[t]})}(o);e["default"]=n.a},"915a":function(t,e,a){"use strict";var i,n=function(){var t=this,e=t.$createElement;t._self._c},o=[];a.d(e,"b",function(){return n}),a.d(e,"c",function(){return o}),a.d(e,"a",function(){return i})},a56d:function(t,e,a){"use strict";var i=a("2856"),n=a.n(i);n.a},a60b:function(t,e,a){"use strict";a.r(e);var i=a("915a"),n=a("56c1");for(var o in n)"default"!==o&&function(t){a.d(e,t,function(){return n[t]})}(o);a("a56d");var c,l=a("f0c5"),u=Object(l["a"])(n["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],c);e["default"]=u.exports}},[["25c2","common/runtime","common/vendor"]]]);