<template>
	<view>
		<view class="wrap-box">
			<view class="img-wrap" style="margin-top: 30upx;">
				<image src="/static/images/level.png" mode="aspectFit" class="approved-image" @tap= "toCustomLevel"></image>
				<widgit :count="auditCount" v-if="auditCount>0"></widgit>
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
				auditCount:'',
				pupDefault:''
			};
		},
		onLoad:function(){
			_this = this
			 this.pupDefault = uni.getStorageSync('pupDefault')
			this.getAuditCount()
		},
		onShow:function(){
			
			this.getAuditCount()
		},
		methods:{
			
			async getAuditCount(){
				let data ={
					postCode: this.pupDefault
				}
				const res = await this.$http.get('/cm/level_audit_count',{data: data})
				this.auditCount = res.data.data.msg
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
			},
			toCustomLevel:function(){
				uni.navigateTo({
					url: '/pages/qing-f-c/sales_director/customLevelAudit',
					
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
 //   .icon-position{
	
 //   	position: absolute;
 //   	background-color: #5CACEE;
 //   	color: #ffffff;
 //   	line-height: 40upx;
 //   	width: 40upx;
 //   	height: 40upx;
 //   	border-radius: 50%;
 //   	right: -10upx;
 //   	top: -15upx;
 //   }
</style>
