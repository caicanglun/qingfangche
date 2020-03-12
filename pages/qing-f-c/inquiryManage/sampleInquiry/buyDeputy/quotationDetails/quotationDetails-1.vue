<template>
	<view>
		<view class="details-box">
			<view class='wrap-box'>
				<view class="details-title">
					 报价信息
				</view>
				<baojiaDetail :item="topList.quotation"></baojiaDetail>
			</view>
		
		</view>  <!-- 报价详情 -->
		
		<view v-if="topList.hasQuotationBuyDeputy" class="details-box" >
			<view class='wrap-box'>
				<view class="details-title">
					 推送报价{{topList.quotationBuyDeputy.finalPrice}}
				</view>
				<baojiaDetailTuisong :item="topList.quotationBuyDeputy"></baojiaDetailTuisong>
			</view>

		</view>
		<!-- <view v-if="topList.hasQuotationDirector" class="details-box" >
			<view class='wrap-box'>
	
				<view style="padding-top:20upx;">
					<view class='baojiaTitle'>销售总监报价信息</view>
					<view class="content-box">
						<view class='subItem'><text class="label">报价：</text><text class="color_FF6000">{{salerDirect.directorUnitPrice}}</text></view>
						<view class='subItem'><text class="label">备注：</text><text class="remark-content">{{salerDirect.remarks}}</text></view>
						<view class='subItemTime'><text>报价时间：</text><text>{{salerDirect.createTime}}</text></view>
					</view>
				</view>

			</view>
		
		</view> -->
	</view>
</template>

<script>
	import baojiaDetail from "@/components/sample-inquiry/baojia-detail-buy.vue";
	import baojiaDetailTuisong from "@/components/sample-inquiry/baojia-detail-tuisong.vue";
	let _this
	export default {
		components:{
		   baojiaDetail	,
		   baojiaDetailTuisong
		},
		data() {
			return {
				quotationInfo:'',
				topList:'',
				number:'',
				salerDirect:''
			};
		},
		onLoad:function(options){
			_this  = this
			this.number = options.number
			this.getInquiryInfo()
			
		},
		methods:{
			getInquiryInfo:function(){
				let url = this.Api.quotationDetails
				let data ={
					quotationNumber: _this.number,		//询价/报价单号
					// orderType: _this.orderType	   //类型 1询价单，2报价单
				}
				this.myRequest(data,url,'get').then(res => {
				  
				  if (res.data.status == 0){
					 _this.topList = res.data.data
					 _this.topList.goAnalysisSample.qualityName= _this.topList.goInitialSample.qualityName
					 _this.salerDirect = res.data.data.quotationDirector
					 console.log(_this.topList)
					 console.log(_this.topList.quotationBuyDeputy)
					 console.log(_this.topList.snalyseContrast)
					 
				  }
				}).catch(err => {
				  wx.showToast({
				    title: err.data.errMsg,
				    icon: 'none'
				  });
				});
			},
		}
		
	}
</script>

<style lang="scss">
	page{
		background: #f4f4f4;
	}
 .details-box{
		margin: 20upx 30upx 0 30upx;
		border-radius: 6upx;
		line-height: 1;
		background-color: #fff;
	   }
	  .wrap-box{
	  	padding-left: 24upx;
	  	padding-right: 20upx;
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
	.fixed_bottom{
	  width: 100%;
	  position: fixed;
	  bottom: 0;
	  display: flex;
	  z-index: 999;
	}
	.btn_left{
	  width: 50%;
	  background-color: #fff;
	  color: #FF6000;
	  border-radius: 0;
	  font-size: 16px;
	  line-height: 88upx;
	}
	.btn_right{
	  width: 50%;
	  background-color: #FF6000;
	  color: #fff;
	  border-radius: 0;
	  font-size: 16px;
	  line-height: 88upx;
	}
	.baojiaTitle{
		font-size: 14px;
		font-weight: bold;
	}
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
	.baojia_line{
		  width: 650upx;
		  height: 1upx;
		  background:rgba(237,237,237,1);
	}
</style>
