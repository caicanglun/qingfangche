<template>
	<view>
		<view class="details-box">
			<view class='wrap-box'>
				<view class="details-title">
					 报价产品要素
				</view>
				<chanpinyaosu :inquiryInfo="quotationInfo"></chanpinyaosu> 
			</view>
		</view>  <!-- 产品要素 -->
		
		
		<view class="details-box">
			<view class='wrap-box'>
				<view class="details-title">
					 报价信息
				</view>
				<baojiaDetail :item="quotationInfo"></baojiaDetail>
			</view>

		</view>  <!-- 报价详情 -->
		
		<!-- 买办推送报价 -->
		<!-- <view class="details-box" v-if="quotationInfo.buyDeputyQuotationBuyDeputyCode!==null">
			<view class='wrap-box'>
				<view class="details-title">
					 推送报价
				</view>
				<baojiaDetailSell :item="quotationInfo"></baojiaDetailSell>
			</view>
		
		</view>  -->
		<!-- 报价详情 -->
		
		
		<!-- 卖家信息 -->
		<!-- <sellerInfo :quotationInfo="quotationInfo"></sellerInfo> -->
		<!-- 卖家信息 -->
		
		
		<view class='placeholder-view'></view>
		<!-- <view class="fixed_bottom box_shadow_btn">
		
		  <button class="btn_all" @tap="submit" hover-class="none">发起报价</button>
		</view> -->
		<!-- <view class="fixed_bottom box_shadow_btn">
		  <button class="btn_left" hover-class="none" @tap="bindCancel">确定</button>
		  <button class="btn_right" @tap="submit" hover-class="none">不匹配</button>
		</view> -->
		
	</view>
</template>

<script>
	import uniIcon from "@/components/uni-icons/uni-icons.vue";
	import chanpinyaosu from "@/components/inquiry/chanpinyaosu-quote.vue";
	import baojiaDetail from "@/components/inquiry/baojia-detail-buy.vue";
	import sellerInfo from "@/components/inquiry/sellerInfo.vue";
	import baojiaDetailSell from "@/components/inquiry/baojiaDetail-sell.vue";
	
	let _this,_quoteNumber
	export default {
		components:{
			uniIcon,
			chanpinyaosu,
			baojiaDetail,
			sellerInfo,
			baojiaDetailSell
		},
		data() {
			return {
				quotationInfo: ''
			};
		},
		onLoad:function(options){
			_this  = this
			_quoteNumber = options.quotationNumber
			this.getInquiryInfo()
			console.log(_quoteNumber)
		},
		methods:{
			getInquiryInfo:function(){
				let data={
					quotationNumber: _quoteNumber,  //	报价单号
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
			},
			submit:function(){
				
			},	
			bindCancel:function(){
				let data ={
					quotationNumber: _quoteNumber
				}
				let url= this.Api.buyDeputySuited
				this.myRequest(data,url,'get').then(res => {
				  console.log(res)
				  if (res.data.status == 0){
					  this.refreshBack()
				  }
                  
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
	.btn_all{
	  width: 100%;
	  background-color: #FF6000;
	  color: #fff;
	  border-radius: 0;
	  font-size: 16px;
	  line-height: 88upx;
	}
</style>
