(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/qing-f-c/register/register"],{2267:function(t,e,o){"use strict";o.r(e);var n=o("bc69"),s=o("d35e");for(var a in s)"default"!==a&&function(t){o.d(e,t,function(){return s[t]})}(a);o("28b5");var i=o("2877"),c=Object(i["a"])(s["default"],n["a"],n["b"],!1,null,null,null);e["default"]=c.exports},"28b5":function(t,e,o){"use strict";var n=o("9803"),s=o.n(n);s.a},"29a6":function(t,e,o){"use strict";(function(t){o("3b9b"),o("921b");n(o("66fd"));var e=n(o("2267"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,o("6e42")["createPage"])},"45d3":function(t,e,o){"use strict";(function(t,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=function(){return o.e("components/uni-icons/uni-icons").then(o.bind(null,"2cee"))},a=o("b65b"),i={components:{uniIcon:s},data:function(){return{phone:"",password:"",passType:"password",isPhoneClear:!1,isPassClear:!1,checkProtocol:!0,countdown:"获取验证码",isDisplay:!0,disabled:!1,timestatus:!1,clear:"",icon_color:"#FF6000"}},methods:{backto:function(){t.navigateBack({delta:1})},showPass:function(){this.passType="password"===this.passType?"text":"password"},clearPhone:function(){this.phone=""},clearPass:function(){this.password=""},showCloseIcon:function(t){t.target.value?this.isPhoneClear=!0:this.isPhoneClear=!1},showPassClearIcon:function(t){t.target.value?this.isPassClear=!0:this.isPassClear=!1},examineCount:function(){/^1(3|4|5|6|7|8|9)\d{9}$/.test(this.phone)||t.showToast({title:"请输入正确电话号码！",icon:"none",duration:2e3})},agreeProtocol:function(){this.checkProtocol?this.icon_color="#FF6000":this.icon_color="#cccccc",this.checkProtocol=!this.checkProtocol},getValidCode:function(){var e=this;if(e.phone){e.disabled=!0;var o={phone:e.phone};t.showToast({title:"验证码已发送",icon:"none"}),e.timestatus=!0,a.verification(o).then(function(t){e.countdown=60,e.clear=setInterval(e.countDown,1e3),console.log(n(t," at pages/qing-f-c/register/register.vue:179")),0==t.data.status||(e.disabled=!1)}).catch(function(t){wx.showToast({title:t.data.errMsg,icon:"none"})})}else t.showToast({title:"请输入手机号码",icon:"none"})},countDown:function(){var t=this;t.countdown?--t.countdown:(t.disabled=!1,t.timestatus=!1,t.countdown="获取验证码",clearInterval(t.clear))},formSubmit:function(e){var o=e.detail.value,s=o.code;delete o.code,console.log(n(o," at pages/qing-f-c/register/register.vue:211")),/^1(3|4|5|6|7|8|9)\d{9}$/.test(o.phone)?!o.password||o.password.length<6?t.showToast({title:"请输入至少六位密码",icon:"none",duration:2e3}):s?this.checkProtocol?t.request({url:this.Api.registration,method:"POST",header:{"content-type":"application/json"},data:{phone:o.phone,password:o.password,verification:s},success:function(e){console.log(n(e.data," at pages/qing-f-c/register/register.vue:257")),0==e.data.status&&t.switchTab({url:"/pages/qing-f-c/index"})},fail:function(t){console.log(n(t.data," at pages/qing-f-c/register/register.vue:265"))},complete:function(){}}):t.showToast({title:"请同意轻纺车网协议服务",icon:"none",duration:2e3}):t.showToast({title:"验证码不能为空",icon:"none",duration:2e3}):t.showToast({title:"请输入正确电话号码！",icon:"none",duration:2e3})}}};e.default=i}).call(this,o("6e42")["default"],o("0de9")["default"])},9803:function(t,e,o){},bc69:function(t,e,o){"use strict";var n=function(){var t=this,e=t.$createElement,o=(t._self._c,Array.isArray(t.password));t._isMounted||(t.e0=function(e){var o=t.password,n=e.target,s=!!n.checked;if(Array.isArray(o)){var a=null,i=t._i(o,a);n.checked?i<0&&(t.password=o.concat([a])):i>-1&&(t.password=o.slice(0,i).concat(o.slice(i+1)))}else t.password=s},t.e1=function(e){t.password=null}),t.$mp.data=Object.assign({},{$root:{g0:o}})},s=[];o.d(e,"a",function(){return n}),o.d(e,"b",function(){return s})},d35e:function(t,e,o){"use strict";o.r(e);var n=o("45d3"),s=o.n(n);for(var a in n)"default"!==a&&function(t){o.d(e,t,function(){return n[t]})}(a);e["default"]=s.a}},[["29a6","common/runtime","common/vendor"]]]);