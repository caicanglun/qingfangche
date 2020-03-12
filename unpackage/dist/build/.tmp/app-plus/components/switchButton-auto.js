(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/switchButton-auto"],{"0cb3":function(t,n,e){"use strict";var u=e("d544"),r=e.n(u);r.a},"12e7":function(t,n,e){"use strict";e.r(n);var u=e("bce0"),r=e("bb71");for(var i in r)"default"!==i&&function(t){e.d(n,t,function(){return r[t]})}(i);e("0cb3");var a,o=e("f0c5"),c=Object(o["a"])(r["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],a);n["default"]=c.exports},bb71:function(t,n,e){"use strict";e.r(n);var u=e("ed72"),r=e.n(u);for(var i in u)"default"!==i&&function(t){e.d(n,t,function(){return u[t]})}(i);n["default"]=r.a},bce0:function(t,n,e){"use strict";var u,r=function(){var t=this,n=t.$createElement,e=(t._self._c,t.__map(t.items,function(n,e){var u=t.returnIndex(n.id),r=t.returnIndex(n.id);return{$orig:t.__get_orig(n),m0:u,m1:r}}));t.$mp.data=Object.assign({},{$root:{l0:e}})},i=[];e.d(n,"b",function(){return r}),e.d(n,"c",function(){return i}),e.d(n,"a",function(){return u})},d544:function(t,n,e){},ed72:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u={props:{items:{type:Array},initValue:{type:Number,default:1}},data:function(){return{index:this.initValue}},methods:{returnIndex:function(t){for(var n=this.items,e=0;e<n.length;e++)if(n[e].id==t)return e},buttonChange:function(t){this.index=t,this.$emit("buttonChange",t)}}};n.default=u}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/switchButton-auto-create-component',
    {
        'components/switchButton-auto-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('6e42')['createComponent'](__webpack_require__("12e7"))
        })
    },
    [['components/switchButton-auto-create-component']]
]);
