<template>
	<view>
		<view class='chanpin-box'>
				<!-- <view class="details-title">
					品名（别名）：T20D400T半光春亚纺
				</view> -->
			    <view class="bingpai">
					<view class="details-content">
						<text class='title'>产品类型：</text><text>{{inquiryInfo.mainProductName||''}}</text>
					</view>
					<view class="details-content">
						<text class='title'>产品系列：</text><text>{{inquiryInfo.seriesName||''}}</text>
					</view>
	
				</view>
				
				
				<view class="details-content_1121" style="display: flex;">
					<view>
						 <text style="color:#999999">规格：</text>
					</view>
					   
					<view>
						<text class="seller">{{inquiryInfo.specificationLongitude||''}}*{{inquiryInfo.specificationLatitude||''}}</text>
					</view>
						
	
				</view>
				<view class='bingpai'>
					<view class="details-content">
						<text class='title'>品质定位：</text><text>{{inquiryInfo.qualityName||''}}</text>
					</view>
					<view class="details-content">
						<text class='title'>成份：</text><text>{{inquiryInfo.ingredient||''}}</text>
					</view>
					
					
				</view>
				
				
				<view class='bingpai'>
					<view class="details-content">
						<text class='title'>含量：</text><text>{{inquiryInfo.content||''}}</text>
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
                 <!-- <view class="details-content">
                 	<text class='title'>样品类型：</text>
                 	<text> {{inquiryInfo.clothTypeName||''}} </text>
                 </view> -->
				<view class="details-content" v-if="inquiryInfo.remarks !=''">
					<text class='title'>备注：</text><text>{{inquiryInfo.remarks||''}}</text>
				</view>
				
				<!-- <view class='recentPrice' v-if="isDisplayRecent">
					<navigator url="/pages/qing-f-c/inquiryManage/recentPrice/recentPrice">查看近期价格>></navigator>
				</view> -->
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
   .seller{
   	max-height: 130upx;
   	overflow: hidden;
   	word-break: break-all;  /* break-all(允许在单词内换行。) */
   	text-overflow: ellipsis;  /* 超出部分省略号 */
   	display: -webkit-box; /** 对象作为伸缩盒子模型显示 **/
   	-webkit-box-orient: vertical; /** 设置或检索伸缩盒对象的子元素的排列方式 **/
   	-webkit-line-clamp: 3; /** 显示的行数 **/	
   }
</style>
