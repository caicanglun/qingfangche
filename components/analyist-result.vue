<template>
	<view class="analyist-result-wrapper">
		<view class="analyist-result">
		  <view class="analyist-padding">
            <view>原样分析结果</view>
			<view class="line"></view>
			  
		    </view> 
			             <view class="fatherItem">
	                        <text class="sonItem">成分 : 棉涤</text>
							<text class="sonItem">品质定位 : 一般</text>
							<text class="sonItem">规格 : 75DTY*75DTY</text>
							<text class="sonItem">含量 : T100%</text>
							<text class="sonItem">特性 : 半光</text>
							<text class="sonItem">组织 : 2*1 </text>
							<text class="sonItem">密度(成品) : 150*80</text>
							<text class="sonItem">幅宽(成品) : 150 cm</text>
							<text class="sonItem">克重(成品) : 150 g/m </text>
						</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
    .analyist-result-wrapper{
		padding: 20upx;
	}
	.analyist-padding{
		padding: 10upx;
	}
	.analyist-result{
		width: 100%;
		height: 400upx;
		background: #C0C0C0;
	}
	.line {
		width: 100%;
		height: 4upx;
		background: #808080;
	}
	
	.fatherItem{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		flex-wrap: wrap;
		align-content: stretch;
		padding-left: 20upx;
		height: 80%;
	}
	.sonItem{
		width: 50%;
		font-size: 14px;
	}
	
</style>
