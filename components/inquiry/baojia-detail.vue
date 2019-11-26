<template>
	<view>
		<view class="content-box">
			<view class='subItem'><text class="label">报价：</text>{{item.unitPrice ||''}}</view>
			<view class="bingpai">
				<view class='subItem'><text class="label">税：</text>{{item.isPlusDuty ||''}}</view>
				<view class='subItem'><text class="label">运费：</text>{{item.isIcash ||''}}</view>
			</view>
			<view class="bingpai">
				<view class='subItem'><text class="label">卖帮办：</text>{{item.sellDeputyRealName ||''}}</view>
				<view class='subItem'><text class="label">交货地：</text>{{item.placeOfDelivery ||''}}</view>
			</view>
			<view class="bingpai">
				<view class='subItem'><text class="label">库存状态：</text>{{item.inventory ||''}}</view>
				<view class='subItem'><text class="label">挂码率：</text>{{item.hangBitRate ||''}}</view>
			</view>
			<view class='subItem'><text class="label">卖帮办备注：</text><text class="remark-content">{{item.remarks ||''}}</text></view>
			<view class='subItemTime'><text>报价时间：</text>{{item.createTime ||''}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
		    item: {
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
   .content-box{
   	  padding-lef: 20upx;
   	  display: flex;
   	  flex-direction: column;
   	  .subItem{
   		  display:flex;
   		  align-items: center;
   		  font-size:13px;
   		  height: 56upx;
   		  .label{
   			  color: #999999;
   		  }
   		  
   	  }
   	  .subItemTime{
   		  display:flex;
   		  align-items: center;
   		  font-size:11px;
   		  height: 56upx;
           color: #999999;
   
   	  }
	  .bingpai{
	  	display: flex;
	  	justify-content: space-between;
	  }
   }
</style>
