<template>
	<view style="padding-top: 200upx;">
		<view class="fin-wrap">
			<image src="../../../static/images/qingfc/finish@2x.png" mode="aspectFill" class="fin-img"></image>
		</view>
		<view class="fin-wrap fin-text">
			<text style="color: #ff6000">恭喜你,注册成功！</text>
		</view>
		<view>
			<button class="fin-wrap login_btn">开始使用</button>
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
    .fin-wrap{
		display: flex;
		justify-content: center ;
	}
	.fin-img{
		
		width: 82upx;
		height: 82upx
	}
	.fin-text{
		padding-top: 30upx;
	}
	.login_btn{
	  width: 400upx;
	  line-height: 96upx;
	  color:#fff;
	  background-color: #ff6000;
	  border-radius: 44upx;
	  margin: 100upx auto 40upx;
	  font-size: 18px;
	}
</style>
