(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/qing-f-c/register/register"],{"088d":function(e,t,o){"use strict";var n=function(){var e=this,t=e.$createElement,o=(e._self._c,Array.isArray(e.password));e._isMounted||(e.e0=function(t){var o=e.password,n=t.target,s=!!n.checked;if(Array.isArray(o)){var a=null,i=e._i(o,a);n.checked?i<0&&(e.password=o.concat([a])):i>-1&&(e.password=o.slice(0,i).concat(o.slice(i+1)))}else e.password=s},e.e1=function(t){e.password=null}),e.$mp.data=Object.assign({},{$root:{g0:o}})},s=[];o.d(t,"a",function(){return n}),o.d(t,"b",function(){return s})},"5f4e":function(e,t,o){"use strict";o.r(t);var n=o("bb29"),s=o.n(n);for(var a in n)"default"!==a&&function(e){o.d(t,e,function(){return n[e]})}(a);t["default"]=s.a},a536:function(e,t,o){},a5b8:function(e,t,o){"use strict";var n=o("a536"),s=o.n(n);s.a},bb29:function(e,t,o){"use strict";(function(e,o){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={data:function(){return{phone:"",password:"",passType:"password",isPhoneClear:!1,isPassClear:!1,checkProtocol:!0}},methods:{showPass:function(){this.passType="password"===this.passType?"text":"password"},clearPhone:function(){this.contPhone=""},clearPass:function(){this.contPass=""},showCloseIcon:function(e){e.target.value?this.isPhoneClear=!0:this.isPhoneClear=!1},showPassClearIcon:function(e){e.target.value?this.isPassClear=!0:this.isPassClear=!1},agreeProtocol:function(){this.checkProtocol=!this.checkProtocol},getValidCode:function(){e.request({url:this.apiServer+"/ul/verification",method:"POST",data:{phone:this.phone},success:function(t){e.showToast({title:"验证码已发送",duration:2e3,icon:"none"})},fail:function(){},complete:function(){}})},formSubmit:function(t){var n=t.detail.value,s=n.code;delete n.code,console.log(o(n," at pages\\qing-f-c\\register\\register.vue:132")),n.phone?n.password?s?this.checkProtocol?e.request({url:this.apiServer+"/ul/registration",method:"POST",header:{"content-type":"application/json"},data:{phone:n.phone,password:n.password,verification:s},success:function(t){console.log(o(t.data," at pages\\qing-f-c\\register\\register.vue:194")),0==t.data.status&&e.switchTab({url:"/pages/qing-f-c/index"})},fail:function(e){console.log(o(e.data," at pages\\qing-f-c\\register\\register.vue:202"))},complete:function(){}}):e.showToast({title:"请同意轻纺车网协议服务",icon:"none",duration:2e3}):e.showToast({title:"验证码不能为空",icon:"none",duration:2e3}):e.showToast({title:"请输入密码",icon:"none",duration:2e3}):e.showToast({title:"请输入电话号码！",icon:"none",duration:2e3})}}};t.default=n}).call(this,o("6e42")["default"],o("0de9")["default"])},f1ec:function(e,t,o){"use strict";o.r(t);var n=o("088d"),s=o("5f4e");for(var a in s)"default"!==a&&function(e){o.d(t,e,function(){return s[e]})}(a);o("a5b8");var i=o("2877"),r=Object(i["a"])(s["default"],n["a"],n["b"],!1,null,null,null);t["default"]=r.exports}},[["2ba7","common/runtime","common/vendor"]]]);