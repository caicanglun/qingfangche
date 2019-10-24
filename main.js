import Vue from 'vue'
import App from './App'
const Util = require('utils/util.js');
const Es6Promise = require('lib/es6-promise.js');
const Api = require("services/config/api.js");


Vue.config.productionTip = false
Vue.prototype.Api = Api
Vue.prototype.myRequest= function(data,url,method){
	return new Es6Promise(function(resolve, reject) {
	  let newApi = url;
	  Util.request(newApi,data, method).then(res => {
	    resolve(res);
	  }).catch(err => {
	    reject(err);
	  })
	})
}
Vue.prototype.checkLogin = function(){
	var TOKEN = uni.getStorageSync('token');
	var pupDefault = uni.getStorageSync('pupDefault')
	if(TOKEN == ''){
		// uni.redirectTo({url:'/pages/qing-f-c/login/login?backpage='+backpage+'&backtype='+backtype});
		uni.redirectTo({url:'/pages/qing-f-c/login/login'});
		return false;
	}
	if (pupDefault == ''){
		uni.showToast({
			title: '还没有设置身份，请找帮办确认！',
			icon: 'none',
			duration: 2000
		});
		uni.redirectTo({url:'/pages/qing-f-c/login/login'});
		return false;
	}
	return TOKEN;
}

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
