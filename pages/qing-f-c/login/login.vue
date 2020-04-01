<template>
	
		<view>
			<view class="login_top">
				 <!-- <image src='https://api.qingfangche.net/api/common/picture/201904221111002/png/images/download' mode='aspectFill' class='login_img'></image> -->
				 <image src='/static/images/qingfc/logo.png' mode='aspectFit' class='login_img'></image>
			</view>
			<view class="content">
				<form @submit="formSubmit" report-submit="true">
				  <view class="box">
					<!-- 手机输入框 -->
					<view class="flex_c box_row">
					  <!-- <image src="../../../static/images/qingfc/user.png" class="i-next-login" mode="aspectFill"></image> -->
					  <uniIcon type="phone" size="20"></uniIcon>
					  <input name="contPhone" v-model="contPhone" class="box_input" 
						  placeholder="请输入手机号" 
						  placeholder-style="color: #ccc;font-size: 14px;" 
						  maxlength="11"
						  @input="showCloseIcon"
						  
						  
					  ></input>
					  <!-- <image v-if="isPhoneClear" src="../../../static/images/qingfc/close.png" class="i-next-login" mode="aspectFill" @tap="clearPhone"></image> -->
					  <view style="width: 40upx;padding-left: 20upx;"  @tap="clearPhone">
						  <uniIcon type="close" size="20" v-if="isPhoneClear"></uniIcon>
					  </view>
					</view>
					<!-- 密码输入框 -->
					<view class="flex_c box_row">
					  <!-- <image src="../../../static/images/qingfc/passwd.png" class="i-next-login" mode="aspectFill" ></image> -->
					  <uniIcon type="locked" size="20"></uniIcon>
					  <input name="contPass" v-model="contPass" class="box_input" 
						  placeholder="请输入密码"
						  placeholder-style="color: #ccc;font-size: 14px;"
						  maxlength="11"
						  :type="passType"
						  @input="showPassClearIcon"
					  ></input>
					  <!-- <image v-if="isPassClear" src="../../../static/images/qingfc/close.png" class="i-next"
					       @tap ="clearPass">
					   </image> -->
					    <view style="width: 40upx;padding-left: 20upx;"  @tap ="clearPass">
							<uniIcon type="close" size="20" v-if="isPassClear"></uniIcon>
					   </view>
					  <!-- <image src="../../../static/images/qingfc/invisiable.png" 
					       class="i-next i-padding" 
						   mode="aspectFit" 
						   @tap="showPass"></image> -->
						   <view style="margin-left: 20upx;">
							   <uniIcon type="eye" size="20" v-if="isPassClear" @tap ="showPass"></uniIcon>
						   </view>
						   
					</view>
					
					<button class="login_btn" formType="submit">登录</button>
					<view class="login-footer">
						<navigator url="/pages/qing-f-c/register/findPassword" open-type="navigate">找回密码</navigator>
						
						<navigator url="/pages/qing-f-c/register/register" open-type="navigate">注册账号</navigator>
					</view>
				  </view>
				</form>
			</view>
		</view>

</template>

<script>
	import uniIcon from "@/components/uni-icons/uni-icons.vue";
	const JsyServer = require("services/jsy-server.js");
	const Api = require('services/config/api.js');
	let _this
	export default {
		components:{
			uniIcon
		},
		data() {
			return {
				contPhone: '',
				contPass: '',
				passType: 'password',
				isPhoneClear: false,
				isPassClear: false,
				clientId:''
			};
		},
	   onLoad:function(){
	   	  _this = this
		  let clientInfo = plus.push.getClientInfo()
		  this.clientId = clientInfo.clientid
		  console.log(clientInfo)
	   },
		
		methods:{
			getPupDefault:function(){
				JsyServer.pupDefault().then(res => {
					    if (res.data.status == 0){
							console.log(res.data.data.msg)
							uni.setStorageSync("pupDefault",res.data.data.msg);
							
						}else {
							uni.showToast({
								title: '没有认领身份，请联系帮办',
								icon: 'none',
								duration: 2000
							});
						
						}
							
					}).catch(err => {
					  console.log("currentIdentity=err==", res);
					});
			},

			showPass: function(){
				this.passType = this.passType==='password'?'text':'password'
			},
			clearPhone: function(){
				this.contPhone = ''
			},
			clearPass: function(){
				this.contPass =''
			},
			showCloseIcon:function(e){
				
				if (e.target.value) {
					this.isPhoneClear = true
				}
				else {
					this.isPhoneClear = false
				}
			},
			showPassClearIcon: function(e){
				if (e.target.value){
					this.isPassClear = true
				}else{
					this.isPassClear = false
				}
				
			},
			examineCount:function(){
				
				if(!(/^1(3|4|5|6|7|8|9)\d{9}$/.test(this.phone))){
					uni.showToast({
						title: '请输入正确电话号码！',
						icon: 'none',
						duration: 2000
					});
					return ;
			    }
			},
			
			formSubmit:function(e){
				// let data = e.detail.value;
				// console.log(data);
				
				if(!(/^1(3|4|5|6|7|8|9)\d{9}$/.test(_this.contPhone))){
					uni.showToast({
						title: '请输入正确电话号码',
						icon: 'none',
						duration: 2000
					});
					return ;
				}
				if(!_this.contPass || _this.contPass.length<6){
					uni.showToast({
						title: '请输入至少六位密码',
						icon: 'none',
						duration: 2000
					});
					return ;
				}
				uni.showLoading({
					title: '提交中。。',
					mask: true
				});
				let url = this.Api.login
				let data = {
					phone: _this.contPhone,
					password: _this.contPass,
					cid: _this.clientId
				}
				console.log(data)
				this.myRequest(data,url,'post').then(res => {
				  
				  	if (res.data.status=== 0){
						uni.hideLoading()
				  		uni.setStorageSync("token",res.data.data.msg);
				  		console.log('sfwefewf',uni.getStorageSync("cid"))
				  		this.getPupDefault()
				  		setTimeout(function() {
				  			if (uni.getStorageSync('pupDefault')){
				  				uni.switchTab({
				  					url:"/pages/qing-f-c/index"
				  				})	
				  			}
				  		}, 500);
	
				  	}else {
				  		uni.showToast({
				  			title: res.data.message,
				  			icon: 'none',
				  			duration: 1000
				  		});
				  		return
				  	}
				  
				 
				}).catch(err => {
				  wx.showToast({
				    title: err.data.errMsg,
				    icon: 'none'
				  });
				});
				// uni.request({
				// 	url: Api.login,
				// 	method: 'POST',
				// 	header: {
				// 		'content-type': 'application/json'
				// 	},
				// 	data: {
				// 		phone: _this.contPhone,
				// 		password: _this.contPass,
				// 		cid: uni.getStorageSync("cid")
				// 	},
				// 	success: res => {
				// 		console.log(res.data);
				// 		if (res.data.status=== 0){
				// 			uni.setStorageSync("token",res.data.data.msg);
				// 			console.log('sfwefewf',uni.getStorageSync("cid"))
				// 			this.getPupDefault()
				// 			setTimeout(function() {
				// 				if (uni.getStorageSync('pupDefault')){
				// 					uni.switchTab({
				// 						url:"/pages/qing-f-c/index"
				// 					})	
				// 				}
				// 			}, 500);
							
								
				// 		}else {
				// 			uni.showToast({
				// 				title: res.data.message,
				// 				icon: 'none',
				// 				duration: 1000
				// 			});
				// 			return
				// 		}
				// 		if (res.data.status === 1){
				// 			uni.showToast({
				// 				title: res.data.message,
				// 				icon: 'none',
				// 				duration: 3000
				// 			});
				// 		}
				// 	},
				// 	fail: (err) => {
				// 		console.log(err.data)
				// 	},
				// 	complete: () => {
				// 		uni.hideLoading();
				// 	}
				// });
				// options: {
				// 	url: this.apiServer+'/ul/login',
				// 	method: 'POST',
				// 	data: {
				// 		phone: data.contPhone,
				// 		password: data.contPass
				// 	}
				// };
				// this.http(this.options).then(res =>{
				// 	console.log(res)
				// }).catch(err=> {
				// 	console.log(err)
				// });
			}
			
		}
	}
</script>

<style lang="scss">
	      .content{ 
			  width: 100%;
			  margin-top: -177upx;
			  padding: 0 40upx;
		  }
	     .box {
		   width:670upx;
		   height:600upx;
		   background:rgba(255,255,255,1);
		   border-radius:8upx;
		   // padding: 0 30upx;

	     }
	     
	     .box_row {
		   margin-top: 20upx;
	       padding: 0 20upx;
	       height: 88upx;
	       box-sizing: border-box;
	       line-height: 88upx;
	       border-bottom: 1upx solid #ccc;
	       color: #333236;
		   margin-left: 30upx;
		   margin-right: 30upx;
	     }
	     // .box_row:nth-last-child(1){
	     // 	 border: none;
	     // }
	     
	     .box_input {
		   padding-left: 30upx;
	       width: 400upx;
		   
	     }
	     .code_input{
	       width: 180upx;
	     }
	     .code_btn{
	       width: 200upx;
	       background-color: #ee603f;
	       color: #fff;
	       text-align: center;
	     	line-height: 48upx;
	     	height: 48upx;
	     	border-radius: 6upx;
	     }
	     .success_btn{
	     	line-height: 48upx;
	     	height: 48upx;
	       width: 200upx;
	       background-color: #ccc;
	       text-align: center;
	     	border-radius: 6upx;
	     }
	    
	
	     .i-next-login{
			width: 14upx;
			height: 24upx;
	     	width: 12upx;
	     	height: 20upx;	
			
	     }
		 .i-visible{
			 width: 10upx;
			 height: 20upx;
		 }
	     .i-padding{
	     	padding-left: 20upx;
	     }
	     
	     .scope_action{
	       color:#fff;
	       background-color: #ee603f;
	       border:none;
	     }
	     .wid_170{
	     	width: 170upx;
	     }
	     .select_btn{
	       width: 152upx;
	     	text-align: center;
	       color: #fff;
	     	background-color: #EE603F;
	       line-height: 48upx;
	       border-radius: 6upx;
	     	font-size: 14px;
	     }
	   
        .login_top{
          height: 612upx;
          width: 750upx;
          box-sizing: border-box;
          background-image:url('~@/static/images/qingfc/login-back.jpeg');
          background-repeat:no-repeat;
          background-position:center top;
          background-size:cover;
          display:flex;
		  justify-content: center;
		 
        }
		.login_img{
		  width: 350upx;
		  height: 110upx;
		  margin: 178upx auto;
		}
		.login_btn{
		  width: 620upx;
		  line-height: 96upx;
		  color:#fff;
		  background-color: #ff6000;
		  border-radius: 44upx;
		  margin: 100upx auto 40upx;
		  font-size: 18px;
		}
		.i-next{
			width: 39upx;
			height: 36upx;
		}
		.login-footer{
			display: flex;
			justify-content: space-around;
			color: #A7A7A7;
			font-size: 14px;
		}
		
		.reg-link{
			display: flex;
			justify-content: space-around;
		}
		.reg-text{
			font-size: 15px;
			color: #A7A7A7;
		}
		
</style>
