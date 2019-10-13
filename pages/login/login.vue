<template>
	<view>
		<view>
			<view class="login_top">
				 <image src='https://api.qingfangche.net/api/common/picture/201904221111002/png/images/download' mode='aspectFilt' class='login_img'></image>
			</view>
			<button class='login_btn' @tap="" open-type="switchTab" >登录</button>
			<view class='login_text'>本次更新增加了身份信息，请登陆并选择您的身份 （身份只能选择一次，请谨慎选择）</view>
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
        .login_top{
          height: 404upx;
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
		  width: 406upx;
		  line-height: 96upx;
		  color:#fff;
		  background-color: #EE603F;
		  border-radius: 6upx;
		  margin: 160upx auto 40upx;
		  font-size: 18px;
		}
		.login_text{
		  width: 602upx;
		  text-align: center;
		  font-size: 28upx;
		  color:#4A4A4A;
		  margin: 0 auto;
		}
</style>
