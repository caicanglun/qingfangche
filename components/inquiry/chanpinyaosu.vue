<template>
	<view>
		<view class='chanpin-box'>
				<!-- <view class="details-title">
					品名（别名）：T20D400T半光春亚纺
				</view> -->
				<view class="bingpai">
					<view class="details-content">
						<text class='title'>产品类型：</text><text>{{inquiryInfo.mainProduct||''}}</text>
					</view>
					<view class="details-content">
						<text class='title'>产品系列：</text><text>{{inquiryInfo.seriesName||''}}</text>
					</view>
					
				</view>
				<view class="details-content">
					<text class='title'>规格：</text><text>{{inquiryInfo.specification||''}}</text>
				</view>
				<view class="bingpai">
					<view class="details-content">
						<text class='title'>成份：</text><text>{{inquiryInfo.ingredient||''}}</text>
					</view>
					<view class="details-content">
						<text class='title'>含量：</text><text>{{inquiryInfo.content||''}}</text>
					</view>
				</view>

				<view class='bingpai'>
					<view class="details-content">
						<text class='title'>风格：</text><text>{{inquiryInfo.styleName||''}}</text>
					</view>
					<view class="details-content">
						<text class='title'>密度：</text><text>{{inquiryInfo.density||''}}</text>
					</view>
				</view>
				<view class='bingpai'>
					<view class="details-content">
						<text class='title'>组织：</text><text>{{inquiryInfo.organization||''}}</text>
					</view>
					<view class="details-content">
						<text class='title'>克重：</text><text> {{inquiryInfo.gramWeight||''}} </text>
						<text> {{inquiryInfo.gramWeightUnitName||''}} </text>
					</view>
				</view>
				<view class='bingpai'>
					<view class="details-content">
						<text class='title'>挂码率：</text><text>{{inquiryInfo.hangBitRate||''}}</text>
					</view>
					<view class="details-content">
						<text class='title'>幅宽：</text><text>{{inquiryInfo.clothBreadth||''}}</text>
					</view>
				</view>
				<view class='bingpai'> 
					<view class="details-content">
						<text class='title'>品质定位：</text><text>{{inquiryInfo.qualityName||''}}</text>
					</view>
					<view class="details-content">
						<text class='title'>购买数量：</text><text>{{inquiryInfo.purchaseQuantity||''}}</text>
					</view>
				</view>
		        
				<!-- <view class="details-content">
					<text class='remark-title'>备注：</text><text class="remark-content">{{inquiryInfo.remarks||''}}</text>
				</view> -->
				
				<view class='recentPrice' v-if="isDisplayRecent">
					<navigator url="/pages/qing-f-c/inquiryManage/recentPrice/recentPrice">查看近期价格>></navigator>
				</view>
			</view>
			
		</view>  <!-- 详情 -->
	</view>
</template>

<script>
	
	export default {
		
		props:{
			inquiryInfo:{
				type: Object
			},
			isDisplayRecent:{
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				
			};
		},
		
	}
</script>

<style lang="scss">
	.chanpin-box{
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
   .recentPrice{
   	display: flex;
   	justify-content: center;
   	align-items: center;
   	color: #FF6000;
   	font-size: 13px;
   	height: 56upx;
   }
</style>
