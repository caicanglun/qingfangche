<template>
	<view>
		<view class="baojia-details">
			
			<view class="baojia-wrap">
				<view class='baojiaTitle'>报价产品要素</view>
				<chanpinyaosu :inquiryInfo="quotationInfo"></chanpinyaosu> 
			</view>
		</view>		
		
		<view class="baojia-details">
			<view class="baojia-wrap">
				<view v-if="quotationInfo.hasSalesDirectorQuotation">
					<view class='baojiaTitle'>销售总监报价信息</view>
					<view class="content-box">
						<view class='subItem'><text class="label">报价：</text><text class="color_FF6000">{{quotationInfo.salesDirectorUnitPrice}}</text></view>
						<view class='subItem'><text class="label">备注：</text>{{quotationInfo.salesDirectorRemarks}}</view>
						<view class='subItemTime'><text>报价时间：</text>{{quotationInfo.salesDirectorCreateTime}}</view>
					</view>
				</view>
				<view class="baojia_line mt_20 mb_20" v-if="quotationInfo.hasSalesDirectorQuotation"></view>
				<view class='baojiaTitle'>卖帮办报价信息</view>
				<baojiaDetail :item="quotationInfo"></baojiaDetail>
				
		
			</view>
		</view>
		
		<!-- 卖家信息 -->
        <sellerInfo :quotationInfo="quotationInfo"></sellerInfo>
		<!-- 卖家信息 -->
		
         <view class="details-box" v-if="quotationInfo.hasCause">
         	<view class='wrap-box'>
         		<view class="details-title">
         			 不匹配原因
         		</view>
         		<view class="details-content">
         			<text>{{quotationInfo.buyDeputyRemarks}}</text>
         		</view>
         
         	</view>
         	
         </view>  <!-- 不匹配原因 -->
		 <view class="details-box" v-if="quotationInfo.hasCloseCause">
		 	<view class='wrap-box'>
		 		<view class="details-title">
		 			 关闭原因
		 		</view>
		 		<view class="details-content">
		 			<text>{{quotationInfo.sellDeputyRemarks}}</text>
		 		</view>
		 
		 	</view>
		 	
		 </view>  <!-- 关闭原因 -->
		<view class='placeholder-view'></view>
	</view>
</template>

<script>
	import chanpinyaosu from "@/components/inquiry/chanpinyaosu-quote.vue";
	import baojiaDetail from "@/components/inquiry/baojia-detail-buy.vue";
	import sellerInfo from "@/components/inquiry/sellerInfo.vue";
	
	let _this,_quotationNumber
	export default {
		components:{
			chanpinyaosu,
			baojiaDetail,
			sellerInfo
			
		},
		data() {
			return {
				quotationInfo:''
			};
		},
	    onLoad:function(options) {
			_this = this
	    	_quotationNumber = options.quoteNumber
			console.log(_quotationNumber)
			this.getInquiryInfo()
	    },
		methods:{
			getInquiryInfo: function(){
				let data={
					quotationNumber: _quotationNumber,  //	询价单号
				}
				let url = this.Api.sellerQuotationDetail
				this.myRequest(data,url,'get').then(res => {
				  console.log(res);
				  _this.quotationInfo = res.data.data
				  console.log(_this.quotationInfo)
				}).catch(err => {
				  wx.showToast({
				    title: err.data.errMsg,
				    icon: 'none'
				  });
				});
			}
		}
		
	}
</script>

<style lang="scss">
	page{
		background-color: #f4f4f4;
	}
.baojia-details{
	  margin: 20upx 30upx 30upx;
	  background: #FFFFFF;
	  
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
  .baojia-wrap{
	  padding-left: 20upx;
	  padding-top: 20upx;
  }
  .baojiaTitle{
	font-size: 14px;
	font-weight: bold;
  }
  .baojia_line{
	  width: 650upx;
	  height: 1upx;
	  background:rgba(237,237,237,1);
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
</style>
