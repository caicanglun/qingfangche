(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/switchButton-s"],{"1bb4":function(t,n,e){"use strict";var r=function(){var t=this,n=t.$createElement,e=(t._self._c,t.__map(t.items,function(n,e){var r=t.returnIndex(n.id),u=t.returnIndex(n.id);return{$orig:t.__get_orig(n),m0:r,m1:u}}));t.$mp.data=Object.assign({},{$root:{l0:e}})},u=[];e.d(n,"a",function(){return r}),e.d(n,"b",function(){return u})},"58af":function(t,n,e){"use strict";e.r(n);var r=e("83fe"),u=e.n(r);for(var i in r)"default"!==i&&function(t){e.d(n,t,function(){return r[t]})}(i);n["default"]=u.a},"83fe":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r={props:{items:{type:Array},initValue:{type:Number,default:1}},data:function(){return{index:this.initValue}},methods:{returnIndex:function(t){for(var n=this.items,e=0;e<n.length;e++)if(n[e].id==t)return e},buttonChange:function(t){this.index=t,this.$emit("buttonChange",t)}}};n.default=r},"993d":function(t,n,e){"use strict";var r=e("c44d"),u=e.n(r);u.a},c44d:function(t,n,e){},ef61:function(t,n,e){"use strict";e.r(n);var r=e("1bb4"),u=e("58af");for(var i in u)"default"!==i&&function(t){e.d(n,t,function(){return u[t]})}(i);e("993d");var a=e("2877"),o=Object(a["a"])(u["default"],r["a"],r["b"],!1,null,null,null);n["default"]=o.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/switchButton-s-create-component',
    {
        'components/switchButton-s-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('6e42')['createComponent'](__webpack_require__("ef61"))
        })
    },
    [['components/switchButton-s-create-component']]
]);                
