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
	</view>
</template>

<script>
	import baojiaDetail from "@/components/sample-inquiry/baojia-detail-buy.vue";
	let _this
	export default {
		components:{
		   baojiaDetail	
		},
		data() {
			return {
				quotationInfo:'',
				topList:'',
				number:''
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
					 console.log(_this.topList)
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
</style>
