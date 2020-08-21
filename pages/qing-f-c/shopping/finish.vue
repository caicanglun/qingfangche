<template>
	<view>
		<view class="flex_c_c" style="margin-top: 70upx;">
			<image src="/static/shopping/finish.png" mode="aspectFit" style="height: 100upx;width: 100upx;"></image>
		</view>
		<view class="flex_c_c" style="font-size: 18px;font-weight: bold;height: 60upx;margin-top:20upx;">
			询价成功
		</view>
		<view class="flex_c_c" style="color: #666666;font-size: 14px;font-weight: 500;">
			我们将及时为您报价
		</view>
		<view class="flex_sa" style="margin-top: 120upx;">
			<view class="continueInquiry">继续询价</view>
			<view class="showInquiry">查看询价单</view>
			
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
.continueInquiry{
	color: #FF6000;
	width:260upx;
	height:68upx;
	font-size: 16px;
	border:1upx solid rgba(255,102,0,1);
	border-radius:6upx;
	display: flex;
	justify-content: center;
	align-items: center;
}
.showInquiry{
	width:260upx;
	height:68upx;
	background:rgba(255,102,0,1);
	border:1upx solid rgba(255,102,0,1);
	border-radius:6upx;
	font-size: 16px;
	color: #FFFFFF;
	display: flex;
	justify-content: center;
	align-items: center;
}
</style>
