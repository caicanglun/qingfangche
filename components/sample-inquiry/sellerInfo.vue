<template>
	<view>
		<view class="details-box">
			<view class='wrap-box'>
				<view class="details-title-seller">
					 卖家信息
				</view>
				<view class="details-content">
					<text class='title'>客户编号：</text><text>{{quotation.companyCode||''}}</text>
				</view>
				
				<view class="bingpai">
					<view class="details-content">
						<text class='title fs_13'>成交笔数：</text><text>{{quotation.quantityOfTransactionOrder}}</text>
					</view>
					<view class="details-content">
						<text class='title'>保证金：</text><text>{{quotation.hasCashDeposit}}</text>
					</view>
					
				</view>
				<view class="bingpai">
					<view class="details-content">
						<text class='title'>评价：</text>
						<block v-for="(item,index) in quotation.evaluationScore" :key="index" >
							<uniIcon type="star-filled" size='18' color='#FF6000'></uniIcon>
						</block>
						<block v-for="(item,index) in (5-quotation.evaluationScore)" :key="index" >
							<uniIcon type="star-filled" size='18' color='#999999'></uniIcon>
						</block>
						
					</view>
					<view class="details-content" @tap="toProductShow(quotation.companyCode)">
						<view class='color_FF6000'>
							<navigator url="">查看详情>></navigator>
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
			quotation:{
				type: Object
			}
		},
		data() {
			return {
				
			};
		},
		methods:{
			toProductShow:function(companyCode){
				this.$emit('toProductShow',companyCode)
			}
		}
	}
</script>

<style lang="scss">
   .details-box{
   		margin: 20upx 30upx 0 30upx;
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
   	.details-title-seller{
   		display:flex;
		padding-top: 20upx;
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
