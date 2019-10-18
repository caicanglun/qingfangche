<template>
	
		<view>
			<view class="login_top">
				 <view class="backto" @tap="backto">返回</view>
				 <image src='https://api.qingfangche.net/api/common/picture/201904221111002/png/images/download' mode='aspectFill' class='login_img'></image>
			</view>
			<view class="content">
				<form @submit="formSubmit" report-submit="true">
				  <view class="box">
					<!-- 手机输入框 -->
					<view class="flex_c box_row">
					  
					  <!-- <image src="../../../static/images/qingfc/user.png" class="i-next" mode="aspectFill"></image> -->
					  <uniIcon type="phone" size="20"></uniIcon>
					  <input name="phone" v-model="phone" class="box_input" 
						  placeholder="请输入手机号" 
						  placeholder-style="color: #ccc;font-size: 14px;" 
						  maxlength="11"
						  @input="showCloseIcon"
						  
					  ></input>
					  <!-- <image v-if="isPhoneClear" src="../../../static/images/qingfc/close.png" class="i-next" 
					  mode="aspectFill" @tap="clearPhone"></image> -->
					  
					  <view style="width: 40upx;padding-left: 20upx;"  @tap="clearPhone">
					  		<uniIcon type="close" size="20" v-if="isPhoneClear"></uniIcon>
					  </view>
					</view>
					<!-- 密码输入框 -->
					<view class="flex_c box_row">
					  <!-- <image src="../../../static/images/qingfc/passwd.png" class="i-next" mode="aspectFill" ></image> -->
						  <uniIcon type="locked" size="20"></uniIcon>
						  <input name="password" v-model="password" class="box_input" 
							  placeholder="请输入新的密码"
							  placeholder-style="color: #ccc;font-size: 14px;"
							  maxlength="11"
							  :type="passType"
							  @input="showPassClearIcon"
						  ></input>
							  <!-- <image v-if="isPassClear" src="../../../static/images/qingfc/close.png" class="i-next"
								   @tap ="clearPass" >
							   </image>
							  <image src="../../../static/images/qingfc/invisiable.png" 
								   class="i-next i-padding" 
								   mode="aspectFit" 
								   @tap="showPass"></image> -->
						<view style="width: 40upx;padding-left: 20upx;" @tap="clearPass">
							<uniIcon type="close" size="20" v-if="isPassClear"></uniIcon>
						 </view>
						
					   <view style="padding-left: 10upx;" @tap ="showPass">
						   <uniIcon type="eye" size="20" v-if="isPassClear" ></uniIcon>
					   </view>
					  
					</view> 
					
				  
				   
					<!-- 验证码输入框 -->
					<view class="flex_c box_row">
					  
					  <!-- <image src="../../../static/images/qingfc/message.png" class="i-next" mode="aspectFill"></image> -->
					  <uniIcon type="email" size="20"></uniIcon>
					  <input name="code" class="box_input" 
						  placeholder="输入短信验证码" 
						  placeholder-style="color: #ccc;font-size: 14px;" 
						  maxlength="6"
					  ></input>
					  <text style="color: #ff6000;font-size: 13px;" @tap="getValidCode">获取验证码</text>
					  
					</view>
					<button class="login_btn" formType="submit">重设密码</button>
					
				  </view>
				  
				</form>
			</view>
		</view>

</template>

<script>
	import uniIcon from "@/components/uni-icons/uni-icons.vue";
	const JsyServer = require("services/jsy-server.js");
	export default {
		components:{
			uniIcon
		},
		data() {
			return {
				phone: '',
				password: '',
				passType: 'password',
				isPhoneClear: false,
				isPassClear: false,
				
			};
			
			},
		methods:{
			backto:function(){
				uni.navigateBack({
					delta: 1
				});
			},
			showPass: function(){
				this.passType = this.passType==='password'?'text':'password'
			},
			clearPhone: function(){
				this.phone = ''
			},
			clearPass: function(){
				this.password =''
			},
			showCloseIcon:function(e){
				if (e.target.value){
					this.isPhoneClear = true
				}else {
					this.isPhoneClear = false
				}
			},
			showPassClearIcon: function(e){
				if(e.target.value) {
					this.isPassClear = true
				}else {
					this.isPassClear = false
				}
				
			},
			
			getValidCode:function(){
				if (!this.phone){
					uni.showToast({
						title: '请输入手机号码',
						icon: 'none'
					});
					return;
				}
				let _data ={
					phone: this.phone
				}
				JsyServer.verification(_data).then(res => {
				  console.log(res);
				  uni.showToast({
				  	title: '验证码已发送',
					icon: 'none'
				  });
					
				}).catch(err => {
				  wx.showToast({
				    title: err.data.errMsg,
				    icon: 'none'
				  });
				});		
			},
			formSubmit: function(e){
				let data = e.detail.value;
				let code = data.code;
				delete data.code;
				console.log(data);
				
				if(!(/^1(3|4|5|6|7|8|9)\d{9}$/.test(data.phone))){
					uni.showToast({
						title: '请输入正确电话号码！',
						icon: 'none',
						duration: 2000
					});
					return ;
				}
				if(!data.password || data.password.length<6){
					uni.showToast({
						title: '请输入至少六位密码',
						icon: 'none',
						duration: 2000
					});
					return ;
				}
				
				if(!code){
					uni.showToast({
						title: '验证码不能为空',
						icon: 'none',
						duration: 2000
					});
					return ;
				}
				let _data = { 
					phone: data.phone,
					password: data.password,
					verification: code
				}
				console.log(_data)
				JsyServer.chanage_password(_data).then(res => {
				  console.log(res);
				  uni.showToast({
				  	title: '修改成功',
					icon: 'none'
				  });
					
				  uni.navigateBack({
				  	delta: 1
				  });
				}).catch(err => {
				  wx.showToast({
				    title: err.data.errMsg,
				    icon: 'none'
				  });
				});		
				
			}
		
		}
	}
</script>

<style lang="scss">
	      .content{
			  
			  width: 100%;
			  margin-top: -160upx;
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
	     .color_888 {
	       color: #888890;
	     }
	     
	     .select_box {
	       border: 2upx solid #ee603f;
	       padding: 0 20upx;
	       line-height: 40upx;
	       border-radius: 6upx;
	     }
	     
	     .select_img {
	       width: 14upx;
	       height: 22upx;
	       margin-left: 20upx;
	     }
	     
	     .scope_box {
	       overflow: hidden;
	       position: fixed;
	       top: 50%;
	       left: 0;
	       right: 0;
	       width: 86%;
	       margin: 0 auto;
	       z-index: 9999;
	       background-color: #fff;
	       border-radius: 20upx;
	       text-align: center;
	       box-sizing: border-box;
	       padding-top:30upx;
	       transform:translateY(-50%);
	     
	     }
	     
	     .scope_mask {
	       width: 100%;
	       height: 100%;
	       position: fixed;
	       top: 0;
	       left: 0;
	       background: #000;
	       opacity: 0.5;
	       overflow: hidden;
	       z-index: 9000;
	       color: #fff;
	     }
	     .secope_padding{
	       padding: 30upx
	     }
	     .scope_option{
	       width: 160upx;
	       line-height: 70upx;
	       border: 1upx solid #ccc;
	       border-radius: 70upx;
	       margin-top: 20upx;
	       height: 70upx;
	       box-sizing: border-box;
	     }
	     .scope_btn{
	       line-height: 90upx;
	       background-color: #ee603f;
	       color: #fff;
	       font-size: 18px;
	      
	     }
	     .i-next{
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
          background-image:url(https://api.qingfangche.net/api/common/picture/hand_back/png/images/download);
          background-repeat:no-repeat;
          background-position:center top;
          background-size:cover;
          text-align: center;
        }
		.login_img{
		  width: 336upx;
		  height: 128upx;
		  margin: 138upx auto;
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
		.protocol{
			display: flex;
			justify-content: center;
			align-items: center;
		}
		
</style>
