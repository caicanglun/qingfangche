(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/switchButton-auto"],{"0cb3":function(t,n,e){"use strict";var u=e("dde5"),r=e.n(u);r.a},"12e7":function(t,n,e){"use strict";e.r(n);var u=e("bce0"),r=e("bb71");for(var i in r)"default"!==i&&function(t){e.d(n,t,function(){return r[t]})}(i);e("0cb3");var a=e("2877"),o=Object(a["a"])(r["default"],u["a"],u["b"],!1,null,null,null);n["default"]=o.exports},aced:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u={props:{items:{type:Array},initValue:{type:Number,default:1}},data:function(){return{index:this.initValue}},methods:{returnIndex:function(t){for(var n=this.items,e=0;e<n.length;e++)if(n[e].id==t)return e},buttonChange:function(t){this.index=t,this.$emit("buttonChange",t)}}};n.default=u},bb71:function(t,n,e){"use strict";e.r(n);var u=e("aced"),r=e.n(u);for(var i in u)"default"!==i&&function(t){e.d(n,t,function(){return u[t]})}(i);n["default"]=r.a},bce0:function(t,n,e){"use strict";var u=function(){var t=this,n=t.$createElement,e=(t._self._c,t.__map(t.items,function(n,e){var u=t.returnIndex(n.id),r=t.returnIndex(n.id);return{$orig:t.__get_orig(n),m0:u,m1:r}}));t.$mp.data=Object.assign({},{$root:{l0:e}})},r=[];e.d(n,"a",function(){return u}),e.d(n,"b",function(){return r})},dde5:function(t,n,e){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/switchButton-auto-create-component',
    {
        'components/switchButton-auto-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('6e42')['createComponent'](__webpack_require__("12e7"))
        })
    },
    [['components/switchButton-auto-create-component']]
]);                
