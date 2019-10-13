import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
Vue.prototype.checkLogin = function(backpage, backtype){
	var SUID  = uni.getStorageSync('SUID');
	var SNAME = uni.getStorageSync('SNAME');
	var TOKEN = uni.getStorageSync('TOKEN');
	if(SUID == '' || SNAME == '' || TOKEN == ''){
		uni.redirectTo({url:'/pages/qing-f-c/login/login?backpage='+backpage+'&backtype='+backtype});
		return false;
	}
	return [SUID,  SNAME, TOKEN];
}
Vue.prototype.apiServer = "http://192.168.11.141"
App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
