<template>
	<view>
		<view class="content-box">
			<view class='subItem'><text class="label">推送报价：</text>{{item.buyDeputyFinalPrice ||''}}{{item.buyDeputyFinalPriceUnitName ||''}}</view>
			<view class='subItem'><text class="label">税：</text>{{item.buyDeputyIsPlusDutyName ||''}}</view>
			<view class='subItem'><text class="label">运费：</text>{{item.buyDeputyIsIcashName ||''}}</view>
			<view class='subItem' v-if='item.buyDeputyIsIcash ==1'><text class="label">运费单价：</text>{{item.buyDeputyFreight ||''}}{{item.buyDeputyFinalPriceUnitName ||''}}</view>	
			<view class='subItem'><text class="label">佣金比例：</text>{{item.buyDeputyCommissionRate ||''}}%</view>
			<view class='subItem'><text class="label">买帮办：</text>{{item.buyDeputyRealName ||''}}</view>
			<view class='subItem'><text class="label">买帮办备注：</text>{{item.qBuyDeputyRemarks ||''}}</view>
			<view class='subItemTime'><text>推送时间：</text>{{item.buyDeputyCreateTime ||''}}</view>
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
   }
</style>
