<template>
	<view>
		<view class="wrap-box">
			
			<view class="img-wrap" style="margin-top: 30upx;position: absolute;" >
				<image src="/static/images/product.png" mode="aspectFit" class="approved-image" @tap= "toProduct"></image>
			    <widgit :count="auditCount" v-if="parseInt(auditCount)>0"></widgit>
			</view>
			
				
		</view>
			
	</view>
</template>

<script>
	import widgit from "@/components/widgit-menu.vue";
	let _this
	
	export default {
		components:{
			widgit
		},
		data() {
			return {
				directorReviewCount:'',
				auditCount:''
			};
		},
		onLoad:function(){
			_this = this
			// this.reviewCount()
			this.getAuditCount()
		},
		methods:{
			getAuditCount:function(){
				let data={}
				let url= this.Api.auditCount
				this.myRequest(data,url,'get').then(res => {
				  console.log(res);
				  _this.auditCount= res.data.data.msg
					 
				  console.log(_this.auditCount)
				}).catch(err => {
				  wx.showToast({
				    title: err.data.errMsg,
				    icon: 'none'
				  });
				});
			},
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
			toProduct:function(){
				uni.navigateTo({
					url: '/pages/qing-f-c/productShow/examineProduct',
				});
			}
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
		//justify-content: space-around;
		flex-wrap: wrap;
		align-content: flex-start;
	}
   .approved-image{
	   width: 330upx;
	   height: 250upx;
   }
   .img-wrap{
	   position: relative;
	   margin-left: 30upx;
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
