<template>
	<view class='wrap-box-result'>
		<view class="result-banner">
			<view>对比结果</view>
		</view>
		<view class="result-content">
			<view class="flex wid_50">
				<view class="result-title">成分：</view>
				<view :class="[resultList.ingredient==1?'result-button':(resultList.ingredient==2?'result-button back_blue':'result-button back_yellow')]">
				{{resultList.ingredient==1?'相同':(resultList.ingredient==2?'相似':'不同')}}
				</view> 
			</view>
			<view class="flex wid_50">
				<view class="result-title">密度(坯布)：</view>
				<view :class="[resultList.density==1?'result-button':(resultList.density==2?'result-button back_blue':'result-button back_yellow')]">
				{{resultList.density==1?'相同':(resultList.density==2?'相似':'不同')}}
				</view> 
			</view>
			 
		</view>
		<view class="result-content">
			<view class="flex wid_50">
				<view class="result-title">规格：</view>
				<view  :class="[resultList.specification==1?'result-button':(resultList.specification==2?'result-button back_blue':'result-button back_yellow')]">
				{{resultList.specification==1?'相同':(resultList.specification==2?'相似':'不同')}}
				
				</view> 
			</view>
			<view class="flex wid_50">
				<view class="result-title">克重(坯布)：</view>
				<view :class="[resultList.gramWeight==1?'result-button':(resultList.gramWeight==2?'result-button back_blue':'result-button back_yellow')]">
					{{resultList.gramWeight==1?'相同':(resultList.gramWeight==2?'相似':'不同')}}
				
				</view> 
			</view>
			 
		</view>
		<view class="result-content">
			<view class="flex wid_50">
				<view class="result-title">风格：</view>
				<view  :class="[resultList.style==1?'result-button':(resultList.style==2?'result-button back_blue':'result-button back_yellow')]">
					{{resultList.style==1?'相同':(resultList.style==2?'相似':'不同')}}
				</view> 
			</view>
			<view class="flex">
				<view class="result-title">幅宽(坯布)：</view>
				<view :class="[resultList.clothBreadth==1?'result-button':(resultList.clothBreadth==2?'result-button back_blue':'result-button back_yellow')]">
				{{resultList.clothBreadth==1?'相同':(resultList.clothBreadth==2?'相似':'不同')}}	

				</view> 
			</view>
			 
		</view>
		
		<view class="result-dan">
			<view class="flex">
				<view class="result-title">布样类型：</view>
				<view  :class="[resultList.clothType==1?'result-button':(resultList.clothType==2?'result-button back_blue':'result-button back_yellow')]">
				{{resultList.clothType==1?'相同':(resultList.clothType==2?'相似':'不同')}}	
				
				</view> 
			</view>
		</view>
			
	</view>   <!-- wrap -->
</template>

<script>
	export default {
		props:{
			resultList:{
				type:Object
            }
		},
		data() {
			return {
				
			};
		},
		
		
	}
</script>

<style lang="scss">
  .wrap-box-result{
  	padding-left: 22upx;
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
