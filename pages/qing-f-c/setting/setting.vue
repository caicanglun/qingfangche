<template>
	<view>
		<view class="row" style="border-bottom: 1upx solid #F4F4F4;margin-top:20upx;">
			<view style="font-size:14px;">个人资料修改</view>
			<view>
				<uniIcon type="arrowright" size="24" color="#333333"></uniIcon>
			</view>
		</view>
		<view class="row">
			<view style="font-size:14px;">重置登录密码</view>
			<view>
				<uniIcon type="arrowright" size="24" color="#333333"></uniIcon>
			</view>
		</view>
		<view class="row" style="margin-top:20upx;">
			<view style="font-size:14px;">消息设置</view>
			<view>
				<uniIcon type="arrowright" size="24" color="#333333"></uniIcon>
			</view>
		</view>
		<view class="row" style="border-bottom: 1upx solid #F4F4F4; margin-top:20upx;">
			<view style="font-size:14px;">版本更新</view>
			<view>
				<uniIcon type="arrowright" size="24" color="#333333"></uniIcon>
			</view>
		</view>
		<view class="row" style="border-bottom: 1upx solid #F4F4F4;">
			<view style="font-size:14px;">意见反馈</view>
			<view>
				<uniIcon type="arrowright" size="24" color="#333333"></uniIcon>
			</view>
		</view>
		<view class="row">
			<view style="font-size:14px;">关于</view>
			<view>
				<uniIcon type="arrowright" size="24" color="#333333"></uniIcon>
			</view>
		</view>
		
		<view class="fixed_bottom box_shadow_btn">
		
		  <button class="btn_all" @tap="submit" hover-class="none">退出登录</button>
		</view>
	</view>
</template>

<script>
	import uniIcon from "@/components/uni-icons/uni-icons.vue";
	export default {
		components:{
			uniIcon
		},
		data() {
			return {
				
			};
		},
			
		methods:{
			submit:function(){
				uni.clearStorageSync("token");
				uni.redirectTo({
					url: '/pages/qing-f-c/login/login'
				});
			}
		}
	}
</script>

<style lang="scss">
	page{
		background: #F4F4F4;
		color: #333333;
	}
	.row{
		
		background: #FFFFFF;
		display: flex;
		height: 65upx;
		align-items: center;
		justify-content: space-between;
		padding-left: 20upx;
		padding-right: 20upx;
	}
.fixed_bottom{
	  width: 750upx;
	  position: fixed;
	  bottom: 0;
	  display: flex;
	  z-index: 999;
	}
.btn_all{
	  width: 100%;
	  background-color: #FF6000;
	  color: #fff;
	  border-radius: 0;
	  font-size: 16px;
	  line-height: 98upx;
	}
</style>
