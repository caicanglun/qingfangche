<template>
	<view>
		<view class="details-box-seller">
			<view class='wrap-box-match'>
				
				<view class="details-content" style="justify-content: space-between;">
					<view>
						<text>{{quotationInfo.companyName||''}}</text>
					</view>
					<view>
						<text style="color:#FF6000">{{quotationInfo.matchStatusName||''}}</text>
					</view>
				</view>
				
				<view class="bingpai">
					<view class="details-content">
						<text class='title fs_13'>成交笔数：</text><text>{{quotationInfo.volumeOfTrade}}</text>
					</view>
					<view class="details-content">
						<text class='title'>保证金：</text><text>{{quotationInfo.cashDeposit}}</text>
					</view>
					<view v-if="quotationInfo.matchStatusCode ==1">
						<view class='baojia_Clipboard' @tap.stop="handleEvent('systemUnMatch',quotationInfo.matchCode)">不匹配</view>
					</view>
				</view>
				<view style="height:20upx;width:100%">
					
				</view>
			
			</view>
			
		</view>  <!-- 卖家信息 -->
	</view>
</template>

<script>
	import uniIcon from "@/components/uni-icons/uni-icons.vue";
	export default {
		components:{
			uniIcon
		},
		props:{
			quotationInfo:{
				type: Object
			}
		},
		data() {
			return {
				
			};
		},
		methods:{
			handleEvent:function(label,params){
				this.$emit("handleEvent",[label,params])
			}
		}
	}
</script>

<style lang="scss">
   .details-box-seller{
   		margin: 20upx 30upx 0 30upx;
   		border-radius: 6upx;
   		line-height: 1;
   		background-color: #fff;
   	   }
   	  .wrap-box-match{
   	  	// padding-left: 24upx;
   	  	//padding-right: 20upx;
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
   	.box-contentBottom{
   		display: flex;
   		align-items: center;
   		width: 100%;
   		font-size: 11px;
   		height: 50upx;
   		color: #999999;
   		
   		}
    .baojia_Clipboard{
    	display: flex;
    	justify-content: center;
    	align-items: center;
    	background-color: #FF6000;
    	color: white;
    	line-height: 52upx;
    	width:136upx;
    	font-size: 13px;
    	height:52upx;
    	background:rgba(255,96,0,1);
    	border-radius:4upx;
    }
</style>
