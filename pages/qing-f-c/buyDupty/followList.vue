<template>
	<view>
		<view style="margin: 20upx;background: #FFFFFF;height:140upx;">
			<view style="padding: 20upx;">
				<view class="flex_c" style="height: 60upx;">
					<view class="point"></view>
					<view class="followTitle">本次跟进记录</view>
				</view>
				<view class="flex_c" style="height: 60upx;">
					
					<view class="followContent" style="width: 400upx;">联系人：小陈</view>
					<view class="followContent" style="padding-left:25upx;">
						  2020-03-04
					</view>
				</view>
			</view>
			
		</view>
		
		<image src="/static/images/qingfc/addFollow.png" mode="aspectFit" class="er_img" @tap="AddFollow"></image>
	</view>
</template>

<script>
	
	export default {
		data() {
			return {
				companyCode:''
			};
		},
		onLoad:function(options){
			this.companyCode = options.companyCode
		},
		methods:{
			AddFollow:function(){
				uni.navigateTo({
					url: './addFollowRecord',
					success: res => {},
					fail: (err) => {console.log(err)},
					complete: () => {}
				});
			}
		}
	}
</script>

<style lang="scss">
page{
	background: #F4F4F4;
}
.point{
	width: 8upx;
	height: 8upx;
	background: #FF6000;
	
}
.followTitle{
	font-size: 16px;
	color: #140F26;
	padding-left: 10upx;
	font-weight: bold;
}
.followContent{
	font-size: 13px;
	color: #333333;
	padding-left: 18upx;
}

.er_img{
  position: absolute;
  bottom: 200upx;
  right: 24upx;
  width: 84upx;
  height: 84upx;
}
</style>
