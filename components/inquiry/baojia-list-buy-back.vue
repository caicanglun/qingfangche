<template>
	<view>
		
		<!-- ------------------- -->
		<view class="baojiaList-box" v-if="status01.includes(item.quotationStatusCode)">
			<view class='baojia-row'>
				<view class="title">
					报价： <text class='color_FF6000'>{{item.unitPrice||''}}</text>
				</view>
				<view class='tax_button'>
					{{item.isIcash||''}}
				</view>
				<view class='tax_button'>
					{{item.isPlusDuty||''}}
				</view>
				<view class="buttonStyle">
					{{item.quotationStatus||''}}
				</view>
			</view>
			<view class="baojia-content">
			  <text class='title'>卖帮办：</text><text>{{item.sellDeputyRealName||''}}</text>
			</view>
			<view class="baojia-content">
			  <text class='title'>卖家：</text><text>{{item.companyCode||''}}</text>
			</view>
			<view class="baojia-contentBottom">
				<view class="baojia_time">
					<text>报价时间：</text><text>{{item.quotationCreateTime||''}}</text>
				</view>
			   <view class='baojia_button' v-if="item.operatingAuthorization&&item.quotationStatusCode==2">
				   <view class='baojia_Clipboard' @tap.stop="handleEvent('sure',item.quotationNumber)">确认</view>
				   <view class='baojia_Clipboard' @tap.stop="handleEvent('unMatch',item.quotationNumber)">不匹配</view>
			   </view>
			   <view class='baojia_button' v-if="item.operatingAuthorization&&item.quotationStatusCode==3">
				   <view class='baojia_Clipboard' @tap.stop="handleEvent('trade',item.quotationNumber)">生成交易</view>
				   
			   </view>
			   <view class='baojia_button' v-if="item.operatingAuthorization&&item.quotationStatusCode==1">
				   <view class='baojia_Clipboard' @tap.stop="handleEvent('setQuote',item.quotationNumber)">设置报价</view>
				   <!-- <view class='baojia_Clipboard' @tap.stop="handleEvent('unMatch',item.quotationNumber)" >不匹配</view> -->
			   </view>
		
			</view>
		
		</view>
	    <!-- ---------------- 报价记录---------------- -->
	    		<view class="baojiaList-box" v-if="status02.includes(item.quotationStatusCode)">
	    			<view class="unmatch-wrap">
	    				<view class='box-row'>
	    					<view class="title">
	    						报价： <text class='color_FF6000'>{{item.unitPrice||''}}</text>
	    					</view>
	    					<view class='tax_button'>
	    						{{item.isIcash||''}}
	    					</view>
	    					<view class='tax_button'>
	    						{{item.isPlusDuty||''}}
	    					</view>
	    					<view class="state-unMatch">
	    						{{item.quotationStatus||''}}
	    					</view>
	    				</view>
	    				<view class="baojia-content">
	    				  <text class='title'>卖帮办：</text><text>{{item.sellDeputyRealName||''}}</text>
	    				</view>
	    				<view class="baojia-content">
	    				  <text class='title'>卖家：</text><text>{{item.companyCode||''}}</text>
	    				</view>
	    				<view class="baojia-contentBottom">
	    					<view class="baojia_time">
	    						<text>报价时间：</text><text>{{item.quotationCreateTime||''}}</text>
	    					</view>
	    				</view>
	    				<view class="baojia-content-spec">
	    				  <text>{{item.buyDeputyRemarks||''}}</text>
	    				</view>
	    
	    			</view>
	    		</view>   <!-- 报价记录 -->			
				<!-- ---------------- 报价记录---------------- -->
						<view class="baojia-box baojia-close" v-if="status03.includes(item.quotationStatusCode)">
							<view class="closing-wrap-box">
								<view class='box-row'>
									<view class="title">
										报价：<text class="num color_999">2.5元/米</text>
									</view>
									<view class='tax_button_closing'>
										{{item.isIcash||''}}
									</view>
									<view class='tax_button_closing'>
										{{item.isPlusDuty||''}}
									</view>
									<view class="state-unMatch color_999 fs_13">
										{{item.quotationStatus||''}}
									</view>
								</view>
								<view class="baojia-content">
								  <text class='title'>卖帮办：</text><text>{{item.sellDeputyRealName||''}}</text>
								</view>
								<view class="baojia-content">
								  <text class='title'>卖家：</text><text>{{item.companyCode||''}}</text>
								</view>
								<view class="baojia-bottom-spec">
									<view class="baojia_time">
										<text>报价时间：</text><text>{{item.quotationCreateTime||''}}</text>
									</view>
								</view>
								<view class="baojia-content-spec">
								  <text>{{item.sellDeputyRemarks||''}}</text>
								</view>
				
							</view>
						</view>   <!-- 报价记录 -->			
	</view>
</template>

<script>
	export default {
		props:{
			item:{
				type: Object
			},
			isSaleDirector:{
				type: Boolean,
				default: false
			},
			isDisplayButton:{
				type: Boolean,
				default: true
			}
			
		},
		data() {
			return {
				//WAIT_FOR_REVIEW(0, "待审核"),
				 // WAITING_PROCESS(1, "待处理"),
				 // PUSH(2, "已推送"),
				 // AFFIRM(3, "已确认"),
				 // GENERATED_ORDER(4, "已生成交易单"),
				 // UNSUITED(5, "不匹配"),
				 // CLOSE(9, "关闭");
		
				status01:[1,2,3,4],
				status02:[5],
				status03:[9],
				status04:[0]  //卖帮办
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
	.baojiaList-box{
		padding-left: 24upx;
		padding-right: 20upx;
		font-size: 13px;
		display: flex;
		flex-direction: column;
		
	}
	
.baojia-row{
		display:flex;
		justify-content: space-between;
		align-items: center;
		height: 72upx;
		width: 100%;
		border-bottom: 1upx solid #F3F3F3;
		.buttonStyle{
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
			font-size:14px;
			font-weight: bold;
			.num{
				color: #FF6000;
			}
		}
	}
.baojia-content{
		display: flex;
		align-items: center;
		width: 100%;
		font-size: 13px;
		height: 56upx;
		.title{
			color: #8D8D8D;
		}
	}
.baojia-content-spec{
		display: flex;
		align-items: center;
		width: 100%;
		font-size: 12px;
		height: 69upx;
	}
.box-contentSmall{
		display: flex;
		align-items: center;
		width: 100%;
		font-size: 11px;
		height: 50upx;
		color: #8D8D8D;
}


.baojia-contentBottom{
		display: flex;
		justify-content: space-between;
		line-height: 65upx;
		width: 100%;
		font-size: 12px;
		height: 69upx;
		color: #8D8D8D;
		.baojia_button{
			display: flex;
			flex-direction: row-reverse;
			justify-content: space-between;
			width:300upx;
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
		}
		.baojia_time{
			font-size: 10px;
		}
}
 .baojia-box{
		margin: 20upx 30upx 0 30upx;
		border-radius: 6upx;
		line-height: 1;
		background-color: #fff; 
	 }
 .details-title{
		display:flex;
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
		height: 69upx;
		.title{
			color: #999999;
		}	
	}
	.bingpai{
		display: flex;
		justify-content: space-between;
	}
	.baojia-close{
		color: #999999!important;
	}
	.color_999{
		color: #999999!important;
	}
	.wrap-box{
		padding-left: 24upx;
		padding-right: 20upx;
		font-size: 13px;
		display: flex;
		flex-direction: column;
		
	}
	.box-row{
		display:flex;
		justify-content: space-between;
		align-items: center;
		height: 72upx;
		width: 100%;
		border-bottom: 1upx solid #F3F3F3;
		.buttonStyle{
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
			font-size:14px;
			font-weight: bold;
			.num{
				color: #FF6000;
			}
		}
	}
	.tax_button_closing{
		display: flex;
		justify-content: center;
		align-items: center;
		color:#999999;
		width:124upx;
		height:44upx;
		background:rgba(153,153,153,0.12);
		border-radius:4upx;
		font-size: 11px;
	}
</style>
