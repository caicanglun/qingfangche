<template>
	<view>
		<view class="details-box">
			<view class='wrap-box'>
				<view class="details-title-1">
					 报价信息
				</view>
				<view style="margin-left: -16upx;">
					<baojiaDetail :item="topList.quotation"></baojiaDetail>
				</view>
				
			</view>
		
		</view>  <!-- 报价详情 -->
		<popupBack ref="auditReject" @input="getContent('auditReject',$event)" title="产品驳回理由"></popupBack>
		<view class="details-box" >
			<!-- <view v-if="topList.hasQuotationDirector" class="details-box" > -->
			<view class='wrap-box'>
			
				<view style="padding-top:20upx;">
					<view class='baojiaTitle'>销售总监报价信息</view>
					<view class="content-box">
						<view class='subItem'><text class="label">报价：</text><text class="color_FF6000" style="font-weight: bold;">{{salerDirect.directorUnitPrice||''}}{{topList.quotation.priceUnitName||''}}</text></view>
						<view class='subItem'><text class="label">备注：</text><text class="remark-content">{{salerDirect.remarks||''}}</text></view>
						<view class='subItemTime'><text>报价时间：</text><text>{{salerDirect.createTime||''}}</text></view>
					</view>
				</view>
		
			</view>
		
		</view>
		
		<view class='wrap-box' style="background: #FFFFFF;margin:30upx 30upx;border-radius: 6upx;">
			<view class="details-title">
				<view>品名（别名）：{{topList.comeInitialSample.tradeName}}</view>
				<view>回样初始数据</view> 
			</view>
			<chanpinyaosu :inquiryInfo="topList.comeInitialSample"></chanpinyaosu>
		</view>
		 
		<!-- 卖家信息 -->
		<sellerInfo :quotation="quotation" @toProductShow="toProductShow"></sellerInfo>
		<!-- 卖家信息 -->
		<view v-if="topList.hasQuotationBuyDeputy" class="details-box" >
			<view class='wrap-box-1'>
				<view class="details-title" style="padding-left:20upx;">
					 推送报价
				</view>
				<baojiaDetailTuisong :item="topList.quotationBuyDeputy"></baojiaDetailTuisong>
			</view>
		
		</view>
		
		
		<view style="width:100%;height: 140upx;"></view>
		
		<!-- <view class="fixed_bottom box_shadow_btn"
		v-if="!topList.hasQuotationDirector" >
		  <button class="btn_left" hover-class="none" @tap="modifyQuote">修改报价</button>
		  <button class="btn_right"  hover-class="none"  @tap="submit">确定并推送</button>
		</view> -->
		<view class="fixed_bottom box_shadow_btn" v-if="!quotationInfo.hasSalesDirectorQuotation&&!quotationInfo.hasCloseCause">
		  <!-- <button class="btn_left" hover-class="none" @tap="modifyQuote">修改报价</button> -->
		  <button class="btn_left" hover-class="none" @tap="reject">产品驳回</button>
		  <button class="btn_right"  hover-class="none"  @tap="modifyQuote">价格审核</button>
		</view>
	</view>
</template>

<script>
	import popupBack from "@/components/popupMeArea.vue";
	import baojiaDetailTuisong from "@/components/sample-inquiry/baojia-detail-tuisong.vue";
	import baojiaDetail from "@/components/sample-inquiry/baojia-detail-buy.vue";
	import sellerInfo from "@/components/sample-inquiry/sellerInfo.vue";
	import chanpinyaosu from "@/components/sample-inquiry/chanpinyaosu-quote.vue";
	let _this
	export default {
		components:{
		   baojiaDetailTuisong,
		   sellerInfo,
		   chanpinyaosu,
		   baojiaDetail,
		   popupBack
		},

		data() {
			return {
				quotationInfo:'',
				topList:'',
				number:'',
				salerDirect:'',
				quotation:'',
				rejectReason:''
			};
		},
		onShow:function(){
			this.getInquiryInfo()
		},
		onLoad:function(options){
			_this  = this
			this.number = options.number
			this.getInquiryInfo()
			
		},
		methods:{
			//跳转到卖家微店
			toProductShow:function(e){
				console.log(e)
				uni.navigateTo({
					url: '/pages/qing-f-c/productShow/mainShow?companyCode='+e,
					success: res => {},
					fail: (err) => { console.log(err)},
					complete: () => {}
				});
			},
			getInquiryInfo:function(){
				let url = this.Api.quotationDetails
				let data ={
					quotationNumber: _this.number,		//询价/报价单号
					// orderType: _this.orderType	   //类型 1询价单，2报价单
				}
				this.myRequest(data,url,'get').then(res => {
				  
				  if (res.data.status == 0){
					 _this.topList = res.data.data
					 _this.quotation = _this.topList.quotation
					 _this.topList.goAnalysisSample.qualityName= _this.topList.goInitialSample.qualityName
					 _this.salerDirect = res.data.data.quotationDirector
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
			reject:function(){
				this.$refs.auditReject.show()
			},
			modifyQuote:function(){
					console.log("daozheli")
					uni.navigateTo({
						url: './modifyPrice?quotationNumber=' + _this.number + '&unitPrice=' + 
						_this.topList.quotation.unitPrice + '&priceUnitName=' + _this.topList.quotation.priceUnitName,
						success: res => {
							console.log(res)
						},
						fail: (err) => {
							console.log(err)
						},
						complete: (msg) => {
							console.log(msg)
						}
					});
				},
				getContent:function(label,content){
					
					this.rejectReason = content
					console.log(this.rejectReason)
					let data = {
						quotationNumber: _this.number,
						remarks: _this.rejectReason
					}
					let url = this.Api.directorNoPass
					uni.showLoading({
						title: '提交中',
						mask: true
					})
					this.myRequest(data,url,'get').then(res => {
					  console.log(res);
					  if (res.data.status == 0){
						  uni.hideLoading()
						  this.getInquiryInfo()
						  
					  }else{
						 uni.showToast({
						 	title:  res.data.message,
							icon: 'none'
						 });
					  }
					}).catch(err => {
					  wx.showToast({
					    title: err.data.errMsg,
					    icon: 'none'
					  });
					});
				},
				submit:function(){
					let data={
						quotationNumber:  _this.number ,			//报价单号
						directorUnitPrice:   _this.quotation.unitPrice ,		//价格
						remarks:   	''	//备注
					
					}
					let url = this.Api.directorModifyPrice
					uni.showLoading({
						title:"提交中",
						mask: true
					})
					this.myRequest(data,url,'get').then(res => {
					  console.log(res);
					  if (res.data.status == 0){
						  uni.hideLoading()
						  var pages = getCurrentPages();
						  var currPage = pages[pages.length - 1]; //当前页面
						  var prevPage = pages[pages.length - 2]; //上一个页面
						 
						  
						  
						  //直接调用上一个页面的setData()方法，把数据存到上一个页面中去
						  prevPage.setData({
						     isDoRefresh:true
						  })
						
						  
						  uni.navigateBack({
						  	delta: 1
						  });
						  
					  }
					  else{
						  uni.showToast({
						  	title:  res.data.message,
						  	icon: 'none'
						  });
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
		background: #f4f4f4;
	}
 .details-box{
		margin: 20upx 30upx;
		border-radius: 6upx;
		line-height: 1;
		background-color: #fff;
	   }
	  .wrap-box{
		 padding-top: 20upx;
	  	padding-left: 24upx;
	  	padding-right: 20upx;
	  	font-size: 13px;   
	  	display: flex;
	  	flex-direction: column;
	  	
	  }
	  .wrap-box-1{
	  
	  	font-size: 13px;   
	  	display: flex;
	  	flex-direction: column;
	  	
	  }
	.details-title{
		display:flex;
		flex-direction: column;
		//align-items: center;
		height: 56upx;
		width: 100%;
		font-size: 14px;
		font-weight: bold;	
		padding-bottom: 20upx;
	}
	.details-title-1{
		display:flex;
		flex-direction: column;
		//align-items: center;
		height: 56upx;
		width: 100%;
		font-size: 14px;
		font-weight: bold;	
		//padding-bottom: 20upx;
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
