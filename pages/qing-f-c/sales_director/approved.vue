<template>
	<view>
		<view class="wrap-box">
			<view class="img-wrap">
				<image src="/static/images/quote.png" mode="aspectFit" class="approved-image" @tap="toQuote"></image>
				<!-- <view class="icon-position flex_c_c">{{directorReviewCount}}</view> -->
			</view>
			
			<view>
				<image src="/static/images/trade.png" mode="aspectFit" class="approved-image" @tap= "toTrade"></image>
			</view>
				
		</view>
			
	</view>
</template>

<script>
	let _this
	export default {
		data() {
			return {
				directorReviewCount:''
			};
		},
		onLoad:function(){
			_this = this
			this.reviewCount()
		},
		methods:{
			reviewCount:function(){
				let data={}
				let url= this.Api.directorReviewCount
				this.myRequest(data,url,'get').then(res => {
				  console.log(res);
				  _this.directorReviewCount= res.data.data.msg
				  console.log(_this.directorReviewCount)
				}).catch(err => {
				  wx.showToast({
				    title: err.data.errMsg,
				    icon: 'none'
				  });
				});
			},
			toQuote:function(){
				uni.navigateTo({
					url: '/pages/qing-f-c/inquiryManage/sales_director/inquiryManage',
				});
			},
			toTrade:function(){
				uni.navigateTo({
					url: '',
				});
			},
		}
		
	}
</script>

<style lang="scss">
	page{
		background: #F4F4F4;
	}
	.wrap-box{
		margin-top: 30upx;
		display: flex;
		justify-content: space-around;
	}
   .approved-image{
	   width: 330upx;
	   height: 250upx;
   }
   .img-wrap{
	   position: relative;
   }
   .icon-position{
	
   	position: absolute;
   	background-color: #5CACEE;
   	color: #ffffff;
   	line-height: 40upx;
   	width: 40upx;
   	height: 40upx;
   	border-radius: 50%;
   	right: -10upx;
   	top: -15upx;
   }
</style>
