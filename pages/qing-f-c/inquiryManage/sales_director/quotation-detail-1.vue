<template>
	<view>
		<view class="baojia-details">
			
			<view class="baojia-wrap">
				<view class='baojiaTitle'>报价产品要素</view>
				<view class='baojiaTitle'>
					品名(别名)：{{quotationInfo.tradeName||''}}</view>
				<chanpinyaosu :inquiryInfo="quotationInfo"></chanpinyaosu> 
			</view>
		</view>		
		
		<view class="baojia-details">
			<view class="baojia-wrap">
				<view>
					<view class='baojiaTitle'>销售总监报价信息</view>
					<view class="content-box">
						<view class='subItem'><text class="label">报价：</text><text class="color_FF6000">{{quotationInfo.salesDirectorUnitPrice||''}}</text></view>
						<view class='subItem'><text class="label">备注：</text><text class="remark-content">{{quotationInfo.salesDirectorRemarks||''}}</text></view>
						<view class='subItemTime'><text>报价时间：</text><text>{{quotationInfo.salesDirectorCreateTime||''}}</text></view>
					</view>
				</view>
				<view class="baojia_line mt_20 mb_20" ></view>
				<view class='baojiaTitle'>卖帮办报价信息</view>
				<baojiaDetail :item="quotationInfo"></baojiaDetail>
		
			</view>
		</view>
		<popupBack ref="AuditBack" @input="getContent('AuditBack',$event)" title="产品驳回理由"></popupBack>
		<!-- 买办推送报价 -->
		<view class="details-box" v-if="quotationInfo.buyDeputyQuotationBuyDeputyCode!==null">
			<view class='wrap-box'>
				<view class="details-title">
					 推送报价
				</view>
				<baojiaDetailSell :item="quotationInfo"></baojiaDetailSell>
			</view>
		
		</view>  <!-- 报价详情 -->
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
		<!-- <view class="uploadFile list_right_content" v-if="topList.hasGoAnalysisSample">
				 <view><text class="fs_14;">布样照片</text></view>
				 <view class="flex_wrap">
					 <block v-for="(item,index) in pictures" :key="index">
						 <view>
							 <image :src="item" mode="aspectFill" class="picture_style"></image>
						 </view>
					 </block>
					  
				 </view>	
		</view> -->
		
		
		<view class='placeholder-view'></view>
		<!-- (!topList.hasQuotationDirector)&&(quotationInfo.quotationStatus!=9)&&(quotationInfo.quotationStatus!=5)&&(quotationInfo.sellDeputyRealName!='直接报价')" -->
		<view class="fixed_bottom box_shadow_btn" v-if="!quotationInfo.hasSalesDirectorQuotation">
		  <button class="btn_left" hover-class="none" @tap="modifyQuote">修改报价</button>
		  <button class="btn_right"  hover-class="none"  @tap="submit">确定并推送</button>
		</view>
		
	</view>
</template>

<script>
	import popupBack from "@/components/popupMeArea.vue";
	import chanpinyaosu from "@/components/inquiry/chanpinyaosu-quote.vue";
	import baojiaDetail from "@/components/inquiry/baojia-detail.vue";
	import sellerInfo from "@/components/inquiry/sellerInfo.vue";
	import baojiaDetailSell from "@/components/inquiry/baojiaDetail-sell.vue";
	let _this,_quotationNumber
	export default {
		components:{
			chanpinyaosu,
			baojiaDetail,
			sellerInfo,
			baojiaDetailSell,
			popupBack
		},
		data() {
			return {
				quotationInfo:'',
				isDoRefresh:false,
				pictures:[],
				topList:''
			};
		},
		onShow:function(){
			let pages = getCurrentPages();
			let currPage = pages[pages.length-1];
			if (currPage.data.isDoRefresh == true){
				       currPage.data.isDoRefresh = false;
					   this.getInquiryInfo()
					  // this.getInquiryInfoPicture()
				 }
			 this.getInquiryInfo()
		},
	    onLoad:function(options) {
			_this = this
	    	_quotationNumber = options.quoteNumber
			console.log(_quotationNumber)
			//this.getInquiryInfo()
			this.getInquiryInfo()
	    },
		methods:{
			getInquiryInfo: function(){
				
				let data={
					quotationNumber: _quotationNumber,  //	报价单号
				}
				let url = this.Api.directorDetails
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
			// getInquiryInfo:function(){
			// 	let temp= _quotationNumber.split('-')[0]
			// 	console.log(temp)
			// 	let url = this.Api.zyDetails
			// 	let data ={
			// 		inquiryNumber: temp
			// 	}
			// 	this.myRequest(data,url,'get').then(res => {
				  
			// 	  if (res.data.status == 0){
			// 		  console.log(res)
			// 		  _this.pictures = res.data.data.goInitialPictures
			// 		 _this.topList = res.data.data
			// 		 _this.quotationInfo = res.data.data.quotation
					
			// 	  }
			// 	}).catch(err => {
			// 	  wx.showToast({
			// 	    title: err.data.errMsg,
			// 	    icon: 'none'
			// 	  });
			// 	});
			// },
			modifyQuote:function(){
				console.log("daozheli")
				uni.navigateTo({
					url: '/pages/qing-f-c/inquiryManage/sales_director/modifyPrice?quotationNumber=' + _quotationNumber + '&unitPrice=' + _this.quotationInfo.unitPrice,
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
				console.log(content)
			},
			submit:function(){
				let data={
					quotationNumber:  _quotationNumber ,			//报价单号
					directorUnitPrice:   _this.quotationInfo.unitPriceDecimal ,		//价格
					remarks:   	''	//备注
				
				}
				let url = this.Api.directorModifyPrice
				
				
				this.myRequest(data,url,'get').then(res => {
				  console.log(res);
				  if (res.data.status == 0){
					  
					  var pages = getCurrentPages();
					  var currPage = pages[pages.length - 1]; //当前页面
					  var prevPage = pages[pages.length - 2]; //上一个页面
					
					  
					  
					  //直接调用上一个页面的setData()方法，把数据存到上一个页面中去
					  prevPage.setData({
					     isDoRefresh:true
					  })
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
	.uploadFile{
		
		display: flex;
		flex-direction: column;
		
		border-radius: 6upx;
		background: #FFFFFF;
		margin: 20upx 30upx;
		padding:0 10upx;
		
		
	}
	
	.iconCenter{
		display: flex;
		flex-direction: column;
		align-items: center;
		height: 100upx;
	}
	.smallFont{
	    color: #999999;
		font-size: 12px;
	}
	.picture_style{
		margin: 0upx 20upx;
		width: 180upx;
		height: 180upx;
		
	}
	
</style>
