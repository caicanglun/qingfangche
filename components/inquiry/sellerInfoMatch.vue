<template>
	<view>
		<view class="details-box-seller">
			<view class='wrap-box'>
				<view class="details-title">
					 卖家信息
				</view>
				<view class="details-content">
					<text class='title'>客户编号：</text><text>{{quotationInfo.companyName}}</text>
				</view>
				
				<view class="bingpai">
					<view class="details-content">
						<text class='title fs_13'>成交笔数：</text><text>{{quotationInfo.volumeOfTrade}}</text>
					</view>
					<view class="details-content">
						<text class='title'>保证金：</text><text>{{quotationInfo.cashDeposit}}</text>
					</view>
					
				</view>
				<view class="bingpai">
					<view class="details-content">
						<text class='title'>评价：</text>
						<block v-for="(item,index) in quotationInfo.score" :key="index" >
							<uniIcon type="star-filled" size='18' color='#FF6000'></uniIcon>
						</block>
						<block v-for="(item,index) in (5-quotationInfo.evaluationScore)" :key="index" >
							<uniIcon type="star-filled" size='18' color='#999999'></uniIcon>
						</block>
						
					</view>
					<view class="details-content">
						<view class='color_FF6000'>
							<navigator url="">进入微店>></navigator>
						</view>
					</view>
					
				</view>
			
			</view>
			
		</view>  <!-- 卖家信息 -->
	</view>
</template>

<script>
	import uniIcon from "@/components/uni-icons/uni-icons.vue";
	export default {
		components:{
			uniIcon
		},
		props:{
			quotationInfo:{
				type: Object
			}
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
   .details-box-seller{
   		margin-bottom: 20upx;
   		border-radius: 6upx;
   		line-height: 1;
   		background-color: #fff;
   	   }
   	  .wrap-box{
   	  	padding-left: 24upx;
   	  	padding-right: 20upx;
   	  	font-size: 13px;   
   	  	display: flex;
   	  	flex-direction: column;
   	  	
   	  }
   	.details-title{
   		display:flex;
   		align-items: center;
   		height: 56upx;
   		width: 100%;
   		font-size: 14px;
   		font-weight: bold;	
   	}
   	.details-content{
   		display: flex;
   		align-items: center;
   		width: 100%;
   		font-size: 13px;
   		height: 56upx;
   		.title{
   			color: #999999;
   		}	
   	}
   	.bingpai{
   		display: flex;
   		justify-content: space-between;
   	}
   	.box-contentBottom{
   		display: flex;
   		align-items: center;
   		width: 100%;
   		font-size: 11px;
   		height: 50upx;
   		color: #999999;
   		
   		}
</style>
