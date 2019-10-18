import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
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
