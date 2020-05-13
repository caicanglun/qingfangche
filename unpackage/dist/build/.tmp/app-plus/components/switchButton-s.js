(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/switchButton-s"],{"1bb46":function(t,n,e){"use strict";var r,u=function(){var t=this,n=t.$createElement,e=(t._self._c,t.__map(t.items,(function(n,e){var r=t.returnIndex(n.id),u=t.returnIndex(n.id);return{$orig:t.__get_orig(n),m0:r,m1:u}})));t.$mp.data=Object.assign({},{$root:{l0:e}})},i=[];e.d(n,"b",(function(){return u})),e.d(n,"c",(function(){return i})),e.d(n,"a",(function(){return r}))},"58af":function(t,n,e){"use strict";e.r(n);var r=e("b32c"),u=e.n(r);for(var i in r)"default"!==i&&function(t){e.d(n,t,(function(){return r[t]}))}(i);n["default"]=u.a},"993d":function(t,n,e){"use strict";var r=e("d435"),u=e.n(r);u.a},b32c:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r={props:{items:{type:Array},initValue:{type:Number,default:1}},data:function(){return{index:this.initValue}},methods:{returnIndex:function(t){for(var n=this.items,e=0;e<n.length;e++)if(n[e].id==t)return e},buttonChange:function(t){this.index=t,this.$emit("buttonChange",t)}}};n.default=r},d435:function(t,n,e){},ef61:function(t,n,e){"use strict";e.r(n);var r=e("1bb46"),u=e("58af");for(var i in u)"default"!==i&&function(t){e.d(n,t,(function(){return u[t]}))}(i);e("993d");var a,o=e("f0c5"),c=Object(o["a"])(u["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],a);n["default"]=c.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/switchButton-s-create-component',
    {
        'components/switchButton-s-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('6e42')['createComponent'](__webpack_require__("ef61"))
        })
    },
    [['components/switchButton-s-create-component']]
]);
