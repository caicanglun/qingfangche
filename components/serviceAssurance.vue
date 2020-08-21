<template>
	<view>
		<!-- 弹出层 -->
		<view  class="uni-banner" style="font-size: 14px;" v-if="bannerShow">
			<view style="padding: 20upx;">
				<view class="flex_c_c" style="font-size: 16px;font-weight: bold;">服务保障</view>
				<view class="flex" style="margin-top: 20upx;">
					<view style="width: 10%;">
						<uniIcon type="checkbox-filled" size="22" color="#ff6000"></uniIcon>
					</view>
					<view style="width: 90%;">
						<view>
							<text style="font-weight: 500;">服务保障</text>
						</view>
						<view>
							<text style="font-size: 12px;color: #666666;">
								该卖家已开通交易保障服务，对产品质量价格货期有多重保障，有专门售后为您服务
							</text>  
						</view>
						                        
					</view>
				</view>
				<view class="flex" style="margin-top: 50upx;">
					<view style="width: 10%;">
						<uniIcon type="checkbox-filled" size="22" color="#ff6000"></uniIcon>
					</view>
					<view style="width: 90%;">
						<view>
							<text style="font-weight: 500;">免费分析布样</text>
						</view>
						<view>
							<text style="font-size: 12px;color: #666666;">	
								 在平台上下单，可享受免费布样分析，专业的分析师为您分析布样                           
							</text>  
						</view>
						                        
					</view>
				</view>
				<view class="flex" style="margin-top: 50upx;">
					<view style="width: 10%;">
						<uniIcon type="checkbox-filled" size="22" color="#ff6000"></uniIcon>
					</view>
					<view style="width: 90%;">
						<view>
							<text style="font-weight: 500;">发货及时</text>
						</view>
						<view>
							<text style="font-size: 12px;color: #666666;">
								在约定周期内，保质保量为您及时发货
							</text>  
						</view>
						                        
					</view>
				</view>
				<view class="flex_c_c" style="margin-top: 70upx;">
					<view @tap="closeBanner" class="flex_c_c" style="width: 80%;color: #FFFFFF;background: #FF6000;font-size: 16px;height: 88upx;">关闭</view>
				</view>
				
			</view>
		</view>
		
		<!-- 做黑色阴影颜色 -->
		<view class="uni-mask" v-if="bannerShow" @tap="closeBanner"></view>
	</view>
</template>

<script>
	import uniIcon from "@/components/uni-icons/uni-icons.vue";
	export default {
		components:{
			uniIcon
		},
		
		props:{
			
		},
		data() {
			return {
				bannerShow:false
			};
		},
		mounted:function(){
			
		},
		methods:{
			
			closeBanner:function(){
				this.bannerShow=false;
			},
			show:function(){
				this.bannerShow=true;
			},
			confirmBanner:function(e){
				
				this.$emit('input',e)
			
				
				this.bannerShow = false
			}
		}
		
	}
</script>

<style lang="scss">
     /* 弹出层形式的广告 */
     	.uni-banner {
     		width: 750upx;
			height: 630upx;
     		position: fixed;
     		bottom: 0;
     		z-index: 99;
     		
			background: #FFFFFF;
     	}
     	.uni-mask{
     		position: fixed;
     		top:0;
     		left:0;
     		z-index:50;
     		width:100%;
     		height:100%;
     		background:rgba(0,0,0,0.4);
     	}
		.popupTitle{
			height: 100upx;
			background: #1a2843;
			display: flex;
			justify-content: center;
			align-items: center;
			font-size:16px;
			font-weight: bold;
		}
		
     	.textarea-borer{
     		border: 2upx solid #DCDCDC;
     		height: 140upx;
     		width: 500upx;
     		border-radius: 6upx;
     		padding-right: 20upx;
     		background-color:#F7F7F7;
     		font-size: 14px;
     	}
     	
		.iconClose{
			position:absolute;
			top: 2upx;
			right: 2upx;
		}
		.input-wrap{
			
			
			border-radius: 10upx;
			margin: 0 30upx;
			height: 200upx;
			
			display: flex;
			align-items: center;
			justify-content: center;
		}
		.input-class{
			width: 100%;
			height: 90upx;
			background-color:#1a2843;
		}
		.uni-list-cell {
			display: flex;
			
			justify-content: flex-start
		}
		.uni-list-cell-pd {
			padding: 22upx 30upx;
		}
		.uni-list {
			background-color: #FFFFFF;
			position: relative;
			width: 100%;
			display: flex;
			flex-direction: column;
		}
		.newPartCancel{
			background: #283651;
			color: #fe2c2c;
			width: 250upx;
			height: 80upx;
			font-size:14px;
			border-radius: 6upx;
			display: flex;
			justify-content: center;
			align-items: center
		}
	    .newPart{
			background: #283651;
			color: #34f073;
			width: 250upx;
			height: 80upx;
			font-size:14px;
			border-radius: 6upx;
			display: flex;
			justify-content: center;
			align-items: center
        } 
		  .buySellActive{background: #1b2944;color: #FFFFFF;width:50%;height: 100upx;font-size: 15px;}
		  .buySell{background: #121c31;color: #3d4663;width:50%;height: 100upx;font-size: 15px;}
		 .inputClass{
		 	  background: #1b2944;
		 	  height: 90upx;
		 	  border-radius: 8upx;
		 	  padding-left: 20upx;
		 	  font-size: 14px;
		 	  color: #FFFFFF;
		 	  width: 70%;
		 }
		 .inClass{
		 	  color: #34f073;
		 	  font-size: 16px;
		 	  font-weight: bold;
		 	  display: flex;
		 	  width: 250upx;
		 	  height: 70upx;
		 	  border-radius: 8upx;
		 	  background: #2a3650;
		 	  justify-content: center;
		 	  align-items: center;
		 }
</style>
