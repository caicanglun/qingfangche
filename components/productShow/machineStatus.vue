<template>
	<view>
         <view style="display: flex;flex-direction:column;">
			<view class="bingpai">
				<view class="flex_c" style="height: 50upx;width:100%;">
					
					<text style="">织机状态：</text><text>{{productInfo.machineStatusName||''}}</text>
				</view>
				<view class="flex_c" style="height: 50upx;width:100%;">
					
					<text class="item">织机数量：</text><text v-if="productInfo.machineCount">{{productInfo.machineCount||''}}台</text>
				</view>
			</view>
			<view class="bingpai">
				<view class="flex_c" style="height: 50upx;width:100%;">
					
					<text class="item">织机类型：</text><text>{{productInfo.machineTypeName||''}}</text>
				</view>
				<view class="flex_c" style="height: 50upx;width:100%;">
					
					<text class="item">单机产量：</text><text v-if="productInfo.dailyProduction">{{productInfo.dailyProduction||''}}米</text>
				</view>
			</view>
			<view class="bingpai">
				<view class="flex_c" style="height: 50upx;width:100%;">
					
					<text class="item">织机品牌：</text><text>{{productInfo.machineBrandName||''}}</text>
				</view>
				
				
				<view class="flex_c" style="height: 50upx;width:100%;">
					
					<text class="item">日产总量：</text><text v-if="productInfo.machineCount*productInfo.dailyProduction">{{productInfo.machineCount*productInfo.dailyProduction||''}}米</text>
				</view>
			</view>
			<view class="bingpai">
				<view class="flex_c" style="height: 50upx;width:100%;">
					
					<text class="item">现货状态：</text><text>{{productInfo.inStockName||''}}</text>
				</view>
				<view class="flex_c" style="height: 50upx;width:100%;">
					
					<text class="item">现货数量：</text><text v-if="productInfo.goodsCount">{{productInfo.goodsCount||''}}米</text>
				</view>
			</view>

		</view>
	</view>
</template>

<script>
	export default {
		props:{
			productInfo:{
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
	.bingpai{
		display: flex;
		justify-content: space-between;
	}
     .item{
		 color:#8d8d8d;
		 font-size:13px;
	 }
</style>
