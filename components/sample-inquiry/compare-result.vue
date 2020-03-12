<template>
	<view>
			<view class='wrap-box-result'>
				<view class="result-banner">
					<view>对比结果</view>
						</view>
						<view class="result-content">
							<view class="flex wid_50">
								<view class="result-title">成分：</view>
								<view class="result-button">相同</view> 
							</view>
							<view class="flex wid_50">
								<view class="result-title">密度(坯布)：</view>
								<view class="result-button">相同</view> 
							</view>
							 
						</view>
						<view class="result-content">
							<view class="flex wid_50">
								<view class="result-title">规格：</view>
								<view class="result-button">相同</view> 
							</view>
							<view class="flex wid_50">
								<view class="result-title">克重(坯布)：</view>
								<view class="result-button back_blue">不同</view> 
							</view>
							 
						</view>
						<view class="result-content">
							<view class="flex wid_50">
								<view class="result-title">风格：</view>
								<view class="result-button">相同</view> 
							</view>
							<view class="flex">
								<view class="result-title">幅宽(坯布)：</view>
								<view class="result-button back_yellow">相似</view> 
							</view>
							 
						</view>
						<!-- <view class="result-dan">
							<view class="flex">
								<view class="result-title">特性：</view>
								<view class="result-button">相同</view> 
							</view>
						</view> -->
						<view class="result-dan">
							<view class="flex">
								<view class="result-title">布样类型：</view>
								<view class="result-button">相同</view> 
							</view>
						</view>
						<view style="height:10upx;width:100%"></view>
					
			</view>   <!-- wrap -->
			
		
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
  .details-box{
  	margin: 20upx 30upx 0 30upx;
  	border-radius: 6upx;
  	// line-height: 1;
  	background-color: #fff;
     }
   .baojia-box{
  	margin: 20upx 30upx 0 30upx;
  	border-radius: 6upx;
  	line-height: 1;
  	background-color: #fff; 
   }
  .details-title{
  	padding-left: 20upx;
  	padding-top: 20upx;
  	padding-bottom: 10upx;
  	display:flex;
  	flex-direction: column;
  	// align-items: center;
  	height: 72upx;
  	width: 100%;
  	font-size: 14px;
  	font-weight: bold;	
  }
  .details-title-seller{
  	display:flex;
  	align-items: center;
  	height: 56upx;
  	width: 100%;
  	font-size: 14px;
  	font-weight: bold;	
  }
  .details-title-orginal{
  	padding-left: 20upx;
  	padding-top: 10upx;
  	display:flex;
  	//flex-direction: column;
  	align-items: center;
  	height: 72upx;
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
  .wrap-box-result{
  	padding-left: 22upx;
  	padding-right: 20upx;
  	font-size: 13px;
  	display: flex;
  	flex-direction: column;
  }
  .wrap-box-1{
  	//padding-left: 22upx;
  	padding-right: 20upx;
  	font-size: 13px;
  	display: flex;
  	flex-direction: column;
  }
  .result-banner{
  
  	padding-top: 20upx;
  	display:flex;
  	align-items: center;
  	height: 56upx;
  	width: 100%;
  	font-size: 14px;
  	font-weight: bold;	
  }
  .result-content{
  	display: flex;
  	align-items: center;
  	height: 56upx;
  }
  .result-dan{
  	width: 50%;
  	display: flex;
  	align-items: center;
  	height: 56upx;
  }
  .result-title{
  	font-size: 13px;
  	color: #999999;
  	width: 150upx;
  
  }
  .result-button{
  	display: flex;
  	justify-content: center;
  	align-items: center;
  	color: #FFFFFF;
  	background: #FF6000;
  	font-size: 12px;
  	width: 110upx;
  	height: 40upx;
  }
  .wid_50{
  	width: 50%;
  }
  .back_blue{
  	background: #4484FF;
  }
  .back_yellow{
  	background: #FFC438;
  }
</style>
