<template>
	<view>
		<view class='chanpin-box'>
				<!-- <view class="details-title">
					品名（别名）：T20D400T半光春亚纺
				</view> -->
			    <view class="bingpai">
					
					<view class="details-content">
						<text class='title'>产品系列：</text><text>{{inquiryInfo.seriesName||''}}</text>
					</view>
					<view class="details-content">
						<text class='title'>品质定位：</text><text>{{inquiryInfo.qualityName||''}}</text>
					</view>
	
				</view>
				
				<view class="details-content">
					<text class='title'>含量：</text><text>{{inquiryInfo.content||''}}</text>
				</view>
				<view class="details-content_1121">
					<!-- <text class='title'></text> -->
					<an-text-area-tip>
					    
					    <text style="color:#999999">规格：</text><text>{{inquiryInfo.specificationLongitude||''}}*</text><text v-if="inquiryInfo.specificationLongitude.length>20">\n</text><text>{{inquiryInfo.specificationLatitude||''}}</text>
					</an-text-area-tip>
					
					
				</view>

				<view class='bingpai'>
					<view class="details-content">
						<text class='title'>成份：</text><text>{{inquiryInfo.ingredient||''}}</text>
					</view>
					<view class="details-content">
						<text class='title'>密度（{{inquiryInfo.clothTypeName}}）：</text>
						<text>{{inquiryInfo.densityLongitude||''}}*{{inquiryInfo.densityLatitude||''}}{{inquiryInfo.densityUnitName||''}}</text>
					</view>
					
					
					
				</view>
				<view class='bingpai'>
					<view class="details-content">
						<text class='title'>风格：</text><text>{{inquiryInfo.styleName||''}}</text>
					</view>
					<view class="details-content">
						<text class='title'>克重（{{inquiryInfo.clothTypeName}}）：</text>
						<text> {{inquiryInfo.gramWeight||''}} </text>
						<text> {{inquiryInfo.gramWeightUnitName||''}} </text>
					</view>
					
					
					
				</view>
			    <view class='bingpai'>
					<view class="details-content">
						<text class='title'>组织：</text>
						<text>{{inquiryInfo.organization||''}}</text>
					</view>
					<view class="details-content">
						<text class='title'>幅宽（{{inquiryInfo.clothTypeName}}）：</text>
						<text>{{inquiryInfo.clothBreadth||''}}cm</text>
					</view>
					
				</view>
                
			</view>
			
		</view>  <!-- 详情 -->
	</view>
</template>

<script>
	import anTextAreaTip from '@/components/an-textarea-tip/an-textarea-tip';
	export default {
		components:{
			 anTextAreaTip
		},
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
		// padding-left: 24upx;
		// padding-right: 20upx;
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
	.height70{
		height: 70upx;
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
