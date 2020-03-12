<template>
	<view>
		<view class="content-box">
			
			<view class='baojia-row' v-if="item.directorUnitPrice!=null">
				<view class="title">
					报价： <text class='color_FF6000'>{{item.directorUnitPrice||''}}{{item.priceUnitName||''}}</text>
				</view>
				<view class='tax_button'>
					{{item.isIcashName||''}}
				</view>
				<view class='tax_button'>
					{{item.isPlusDutyName||''}}
				</view>
				
				<view class="buttonStyle">
					{{item.quotationStatusName||''}}
				</view>
			</view>
			
			<view class='baojia-row' style="border-bottom: none;" v-if="item.unitPrice!=null">
				<view class="title">
					卖办： <text class='color_FF6000'>{{item.unitPrice||''}}{{item.priceUnitName||''}}</text>
				</view>
				<view class='tax_button'>
					{{item.isIcashName||''}}
				</view>
				<view class='tax_button'>
					{{item.isPlusDutyName||''}}
				</view>
				
				<view class="buttonStyle">
					
				</view>
			</view>
			<view class='baojia-row' style="border-bottom: none;" v-if="item.buyDeputyUnitPrice!=null">
				<view class="title">
					推送： <text class='color_FF6000'>{{item.buyDeputyUnitPrice||''}}{{item.priceUnitName||''}}</text>
				</view>
				<view class='tax_button'>
					{{item.buyDeputyIsIcashName||''}}
				</view>
				<view class='tax_button'>
					{{item.buyDeputyIsPlusDutyName||''}}
				</view>
				
				<view class="buttonStyle">
					
				</view>
			</view>
			
			<!-- <view class="bingpai">
				<view class='subItem'><text class="label">税：</text>{{item.isPlusDutyName ||''}}</view>
				<view class='subItem'><text class="label">运费：</text>{{item.isIcashName ||''}}</view>
			</view> -->
			<view class="bingpai">
				<view class='subItem'><text class="label">库存状态：</text>{{item.inventoryName ||''}}</view>
				<view class='subItem'><text class="label">挂码率：</text>{{item.hangBitRate ||''}}%</view>
			</view>
			
				
			<view class='subItem'><text class="label">交货地：</text>{{item.placeOfDelivery ||''}}</view>
			
			
			
			<!-- <view class='subItem'><text class="label">卖家：</text>{{item.companyCode ||''}}</view> -->
			
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
   	  margin: 0 20upx;
	  
   	  display: flex;
   	  flex-direction: column;
   	  .subItem{
   		  display:flex;
   		  align-items: center;
		  width: 100%;
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
   .baojia-row{
   		display:flex;
   		justify-content: space-between;
   		align-items: center;
   		height: 72upx;
   		width: 100%;
   		border-bottom: 1upx solid #F3F3F3;
   		.buttonStyle{
			width: 100upx;
			display: flex;
			justify-content: flex-end;
			font-size:13px;
   			color: #FF6000;
   		}
   		.state-unMatch{
   			color: #333333;
   		}
   		.tax_button{
   			display: flex;
   			justify-content: center;
   			align-items: center;
   			color:#FF6000;
   			width:124upx;
   			height:44upx;
   			background:rgba(255,96,0,0.12);
   			border-radius:4upx;
   			font-size: 11px;
   			
   		}
   		
   		.title{
			width:220upx;
   			font-size:14px;
   			font-weight: bold;
   			.num{
   				color: #FF6000;
   			}
   		}
   	}
</style>
