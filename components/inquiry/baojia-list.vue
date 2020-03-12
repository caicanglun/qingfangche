<template>
	<view>
		<view class="baojiaList-box" v-if="status04.includes(item.quotationStatusCode)">
			<view class='baojia-row' v-if="item.directorUnitPrice!=null">
				<view class="title">
					审核价： <text :class="item.directorUnitPrice==item.unitPrice?'color_FF6000':'color_FF0000'">{{item.directorUnitPrice||''}}</text>
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
			<view class='baojia-row' style="border-bottom: none;">
				<view class="title">
					出厂价： <text class='color_FF6000'>{{item.unitPrice||''}}</text>
				</view>
				<view class='tax_button'>
					{{item.isIcash||''}}
				</view>
				<view class='tax_button'>
					{{item.isPlusDuty||''}}
				</view>
				<view :class="(item.quotationStatus ==5)?'state-unMatch':'buttonStyle'">
					{{item.quotationStatus||''}}
				</view>
			</view>
			<view class='baojia-row' style="border-bottom: none;" v-if="item.buyDeputyUnitPrice!=null">
				<view class="title">
					销售价： <text class='color_FF6000'>{{item.buyDeputyUnitPrice||''}}</text>
				</view>
				<view class='tax_button'>
					{{item.buyDeputyIsIcash||''}}
				</view>
				<view class='tax_button'>
					{{item.buyDeputyIsPlusDuty||''}}
				</view>
				<view class="buttonStyle">
					
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
			   <view class='baojia_button' >
				   <view class='baojia_Clipboard' @tap.stop="handleEvent('closing',item.quotationNumber)" v-if="item.operatingAuthorization&&item.quotationStatusCode==0&&!isSaleDirector">关闭</view>
				   <view class='baojia_Clipboard' @tap.stop="handleEvent('verify',item.quotationNumber)" v-if="item.quotationStatusCode==0&&isSaleDirector">去审核</view>
			   </view>
		
			</view>
		
		</view>
		<!-- ---------------- 报价记录---------------- -->
				<view class="baojiaList-box" v-if="status02.includes(item.quotationStatusCode)">
					<view class="unmatch-wrap">
						<view class='baojia-row' style="border-bottom: none;" v-if="item.directorUnitPrice!=null">
							<view class="title">
								审核价： <text class='color_FF6000'>{{item.directorUnitPrice||''}}</text>
							</view>
							<view class='tax_button'>
								{{item.isIcash||''}}
							</view>
							<view class='tax_button'>
								{{item.isPlusDuty||''}}
							</view>
							<view class="buttonStyle">
								
							</view>
						</view>
						<view class='box-row'>
							<view class="title">
								出厂价： <text class='color_FF6000'>{{item.unitPrice||''}}</text>
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
						<view class='baojia-row' style="border-bottom: none;" v-if="item.buyDeputyUnitPrice!=null">
							<view class="title">
								销售价： <text class='color_FF6000'>{{item.buyDeputyUnitPrice||''}}</text>
							</view>
							<view class='tax_button'>
								{{item.buyDeputyIsIcash||''}}
							</view>
							<view class='tax_button'>
								{{item.buyDeputyIsPlusDuty||''}}
							</view>
							<view class="buttonStyle">
								
							</view>
						</view>
						
						<view class="flex_sb">
							<view class="baojia-content">
							  <text class='title'>卖帮办：</text><text>{{item.sellDeputyRealName||''}}</text>
							</view>
							<view class="baojia-content">
							  <text class='title'>卖家：</text><text>{{item.companyCode||''}}</text>
							</view>
						</view>
						
						<view class="box-contentSmall">
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
								<view class='box-row' style="border-bottom: none;" v-if="item.directorUnitPrice!=null">
									<view class="title">
										审核价：<text class="num color_999">{{item.directorUnitPrice||''}}</text>
									</view>
									<view class='tax_button_closing'>
										{{item.isIcash||''}}
									</view>
									<view class='tax_button_closing'>
										{{item.isPlusDuty||''}}
									</view>
									<view class="state-unMatch color_999 fs_13">
										
									</view>
								</view>
								<view class='box-row'>
									<view class="title">
										出厂价：<text class="num color_999">{{item.unitPrice||''}}</text>
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
								<view class='box-row' style="border-bottom: none;" v-if="item.buyDeputyUnitPrice!=null">
									<view class="title">
										销售价：<text class="num color_999">{{item.buyDeputyUnitPrice||''}}</text>
									</view>
									<view class='tax_button_closing'>
										{{item.buyDeputyIsIcash||''}}
									</view>
									<view class='tax_button_closing'>
										{{item.buyDeputyIsPlusDuty||''}}
									</view>
									<view class="state-unMatch color_999 fs_13">
										
									</view>
								</view>
								
								<view class="baojia-content">
								  <text class='title'>卖帮办：</text><text>{{item.sellDeputyRealName||''}}</text>
								</view>
								<view class="baojia-content">
								  <text class='title'>卖家：</text><text>{{item.companyCode||''}}</text>
								</view>
								<view class="box-contentSmall">
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
			}
			
		},
		data() {
			return {
				status02:[5],
				status03:[9],
				status04:[0,1,2,3,4]  //卖帮办
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
	.color_FF0000{
		color:#4487FD;
	}
.baojia-row{
		display:flex;
		justify-content: space-between;
		align-items: center;
		height: 72upx;
		width: 100%;
		border-bottom: 1upx solid #F3F3F3;
		.buttonStyle{
			width:100upx;
			display: flex;
			justify-content: flex-end;
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
			width:116upx;
			height:44upx;
			background:rgba(255,96,0,0.12);
			border-radius:4upx;
			font-size: 12px;
			
		}
		.title{
			font-size:14px;
			width: 220upx;
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
		font-size: 12px;
		height: 69upx;
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
		// .baojia_time{
		// 	font-size: 10px;
		// }
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
			width:116upx;
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
		width:116upx;
		height:44upx;
		background:rgba(153,153,153,0.12);
		border-radius:4upx;
		font-size: 11px;
		
	}
</style>
