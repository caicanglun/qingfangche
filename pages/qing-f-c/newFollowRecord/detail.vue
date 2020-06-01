<template>
	<view>
		<view class="box-shawn" style="padding: 30upx;background: #FFFFFF;line-height: 25px;">
			<view style="font-size: 16px;font-weight: bold;">{{item.latentTradeName ||''}}</view>
			<view style="font-size: 16px;"><text style="color: #999999">规格</text><text style="padding-left: 15upx;">{{item.specification ||''}}</text></view>
			<view style="font-size: 16px;display: flex;">
				<view style="width: 50%;"><text style="color: #999999">密度</text><text style="padding-left: 15upx;">{{item.density ||''}}</text></view>
				<view style="width: 50%;"><text style="color: #999999">品质定位</text><text style="padding-left: 15upx;">{{item.qualityName ||''}}</text></view>
			</view>
		</view>	
		<view class="box-shawn" style="margin-top:20upx;padding: 30upx 30upx 0 30upx;background: #FFFFFF;line-height: 25px;">
			<view style="font-size: 16px;font-weight: bold;text-align: center;">订单信息</view>
			<view class="content-body" style="justify-content: '';">
					<view style="width: 50%;"><text style="color: #888890">数量</text><text style="padding-left: 15upx;">{{item.purchaseQuantity ||''}}米</text></view>
					<view style="width: 50%;"><text style="color: #888890">交期</text><text style="padding-left: 15upx;">{{item.timeName ||''}}</text><text style="padding-left: 10upx;" v-if="item.timeCode=='101660570722'">{{item.dayCount+'天'}}</text></view>
			</view>
			<view class="content-body">
					<view class="title">订单属性</view>
					<view>{{item.attributeName ||''}}</view>
			</view>
			<view class="content-body">
				    <view style="display: flex;justify-content: space-between; width: 50%;">
						<view style="color: #888890">目标价格</view>
						<view><text style="color:#FF0000">{{item.buyerPrice ||''}}</text><text style="padding-left: 10upx;" v-show="item.buyerPrice">元/米</text></view>
					</view>  
					<view style="display: flex;justify-content: flex-end" v-if="item.buyerPrice>0">
						<view class="taxButton">
							{{item.buyerIsPlusDutyName ||''}}
						</view>
						<view class="taxButton">
							{{item.buyerIsIcashName ||''}}
						</view>
					</view>
					
			</view>
			<view class="content-body">
				    <view style="display: flex;justify-content: space-between; width: 50%;">
						<view style="color: #888890">系统最优价</view>
						<view><text style="color:#FF0000">{{item.sellerPrice ||''}}</text><text style="padding-left: 10upx;" v-show="item.sellerPrice">元/米</text></view>
					</view>  
					<view style="display: flex;justify-content: flex-end" v-if="item.sellerPrice >0">
						<view class="taxButton">
							{{item.sellerIsPlusDutyName ||''}}
						</view>
						<view class="taxButton">
							{{item.sellerIsIcashName ||''}}
						</view>
					</view>
					
			</view>
			<view class="content-body">
					<view class="title">资金状况</view>
					<view>{{item.positionName ||''}}</view>
			</view>
			<view class="content-body">
					<view class="title">供应链情况</view>
					<view>{{item.chainName ||''}}</view>
			</view>
			<view class="content-body">
					<view class="title">接单概率</view>
					<view>{{item.probabilityName ||''}}</view>
			</view>
			<view class="content-body" style="border: none">
					<view class="title">关联单</view>
					<view style="color: #4487FD" @tap="toInquiryDetail(item.inquiryNumber,item.inquiryTypeCode)">{{item.inquiryTradeName ||''}}</view>
			</view>
		</view>	
		<view class="box-shawn" v-if="item.recordStatusCode!== 1" style="margin-top:20upx;padding: 30upx;background: #FFFFFF;line-height: 25px;">
			  <view style="font-size: 16px;font-weight: bold;text-align: center;">订单总结</view>
			  <view class="flex_sb" style="margin: 30upx;">
				  <view style="width: 250upx;">
					  <view class="flex_c_c" style="color:#888890;">订单状态</view>
					  <view class="flex_c_c" style="margin-top: 20upx;">
						  <image src="/static/images/qingfc/application/deal2x.png" mode="aspectFit" class="deal_img"></image>
						  <!-- <image src="/static/images/qingfc/application/lost2x.png" mode="aspectFit" class="deal_img"></image> -->
						  <text style="padding-left: 10upx;font-size: 18px;font-weight: bold;">{{item.recordStatusName ||''}}</text>
					  </view>
				  </view>
				  <view class="splitLine"></view>
				  <view style="width: 250upx;">
					  <view class="flex_c_c" style="color:#888890;">原因</view>
					  <view class="flex_c_c" v-for="(item,index) in item.causeList" :key="index">
						  {{ item.causeName }}
					  </view>
					  
				   </view>
			  </view>
		</view>
		<view class="box-shawn" style="margin-top:20upx;padding: 30upx;background: #FFFFFF;line-height: 25px;" v-if="updateList.length>0">
			  <view style="font-size: 16px;font-weight: bold;text-align: center;">历史记录</view>
			  <block v-for="(item,index) in updateList" :key="index">
				  <view class="flex" style="height: 24upx;">
				  		<view class="circleTime"></view><view class="flex_c" style="padding-left: 20upx;font-size: 12px;color: #999">{{item.createTime}}</view>
				  </view>
				  <view class="timeContent">
					  <view style="margin-left: 30upx;">
				          <text>{{item.content}}</text>
					  </view>
				  </view>
			  </block>
		</view>
		<view style="height:150upx;"></view>
		<view class="fixed_bottom box_shadow_btn" v-if="item.initiator">
		   <button class="btn_left" @tap="modifyRecord" hover-class="none">修改</button>
		   <button class="btn_right" @tap="updateRecord" hover-class="none">更新状态</button>
		</view>
		<view class="fixed_bottom box_shadow_btn" v-if="item.principal">
		   <button class="btn_right_all" @tap="startQuote" hover-class="none" v-if="item.sellerPrice==0">发起报价</button>
		   <button class="btn_right_all" @tap="modifyQuote" hover-class="none" v-if="item.sellerPrice > 0">修改报价</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				recordCode:'',
				pupDefault:'',
				item:'',
				updateList:''
			};
		},
		onLoad:function(options){
			this.recordCode = options.recordCode
			this.getFetch()
			this.getUpdateList()
		},
		onShow:function(){
			this.getFetch()
			this.getUpdateList()
		},
		methods:{
			async getUpdateList(){
				let data ={
					recordCode: this.recordCode,	//潜在订单编码
					pageNum: 1,
					pageSize: 100
				}
				const res = await this.$http.get('/latent/update_list',{data:data})
				console.log(res)
				this.updateList = res.data.data.list
			},
			async getFetch(){
				let data ={
					recordCode: this.recordCode
				}
				const res = await this.$http.get('/latent/details',{data:data})
			    console.log(res)
				this.item = res.data.data
			},
			modifyRecord:function(){
				uni.navigateTo({
					url:`./modifyRecord?recordCode=${this.recordCode}`
				})
			},
			updateRecord:function(){
				if (this.item.recordStatusCode == 1){
					uni.navigateTo({
						url:`./updateState?recordCode=${this.recordCode}&warningLevelCode=${this.item.warningLevelCode}`
					})
				}
				else {
					uni.showToast({
						title: '已成交或丢单',
						icon: 'none'
					})
				}
			},
			startQuote:function(){
				uni.navigateTo({
					url:`./setTargetPrice?recordCode=${this.recordCode}`
				})
			},
			modifyQuote:function(){
				uni.navigateTo({
					url:`./setTargetPrice?recordCode=${this.recordCode}&sellerPrice=${this.item.sellerPrice}&sellerIsPlusDutyCode=${this.item.sellerIsPlusDutyCode}&sellerIsIcashCode=${this.item.sellerIsIcashCode}`
				})
			},
			toInquiryDetail:function(number,code){
				if (code >0){
					let identity = uni.getStorageSync('pupDefault')
			
					switch (identity){
						case 'SELL_DEPUTY':
						    if (code ==1){
						    	uni.navigateTo({
						    		url: `/pages/qing-f-c/inquiryManage/sellDeputy/inquiry-details?inquiryNumber=${number}`,
						    		
						    	});
						    } else if (code == 2){
								uni.navigateTo({
									url:`/pages/qing-f-c/inquiryManage/sampleInquiry/sellDeputy/inquiry-details?inquiryNumber=${number}`
								})
							}else if (code == 3){
								uni.navigateTo({
									url:`/pages/qing-f-c/inquiryManage/sellDeputy/inquiry-details?inquiryNumber=${number}`
								})
							}
							else if (code == 4){
								uni.navigateTo({
									url:`/pages/qing-f-c/inquiryManage/sampleInquiry/sellDeputy/inquiry-details?inquiryNumber=${number}`
								})
							}
						    break;
						case 'BUY_DEPUTY':
						    if (code ==1){
						    	uni.navigateTo({
						    		url: `/pages/qing-f-c/inquiryManage/inquiry-details?inquiryNumber=${number}`,
						    		
						    	});
						    } else if (code ==2){
								uni.navigateTo({
									url: `/pages/qing-f-c/inquiryManage/sampleInquiry/buyDeputy/inquiry-details?inquiryNumber=${number}`,
									
								});
							}else if (code ==3){
								uni.navigateTo({
									url: `/pages/qing-f-c/inquiryManage/quotedPrice/quotedPrice?quoteNumber=${number}`,
									
								});
							}else if (code ==4){
								uni.navigateTo({
									url: `/pages/qing-f-c/inquiryManage/sampleInquiry/buyDeputy/quotationDetails/quotationDetails?number=${number}`,
									
								});
							}		
						    break;
						case 'SALES_DIRECTOR':
						    if (code ==1){
						    	uni.navigateTo({
						    		url: `/pages/qing-f-c/inquiryManage/sales_director/inquiry-details?inquiryNumber=${number}`,
						    		
						    	});
						    } else if (code ==2){
						    	uni.navigateTo({
						    		url: `/pages/qing-f-c/inquiryManage/sampleInquiry/sales_director/inquiry-details?inquiryNumber=${number}`,
						    		
						    	});
						    }else if (code ==3){
						    	uni.navigateTo({
						    		url: `/pages/qing-f-c/inquiryManage/sales_director/quotation-detail?quoteNumber=${number}`,
						    		
						    	});
						    }else if (code ==4){
						    	uni.navigateTo({
						    		url: `/pages/qing-f-c/inquiryManage/sampleInquiry/sales_director/quotation-details?number=${number}`,
						    		
						    	});
						    }		
						    break;
						case 'REGIONAL_MANAGER':
						   
						    break;
						case 'ANALYST':
						    
						    break;
					}
				}else {
					return
				}
			}
			
		}
	}
</script>

<style lang="scss">
page{
	background: #F4F4F4;
	font-size: 14px;
}
*{
	box-sizing: border-box;
}
.content-body{
	display: flex;
	align-items: center;
	height: 85upx;
	border-bottom: 1upx solid #E6E6E6;
	justify-content: space-between;
}
.content-body .title {
	color: #888890;
}
.taxButton{
 	 display: flex;
 	 align-items: center;
 	 justify-content: center;
 	 padding: 0 10upx;
 	 height:48upx;
	 background:rgba(204,204,204,0.2);
 	 border-radius:8px; 
	 margin-left: 20upx;
 }
 .splitLine{
	 width:1upx;
	 height:130upx;
	 background:rgba(204,204,204,1);
 }
 .deal_img{
   padding-right: 20upx;
   width: 54upx;
   height: 64upx;
 }
 .circleTime{
	 width:20upx;
	 height:20upx;
	 border:4upx solid rgba(218,218,218,1);
	 border-radius:50%;
 }
 .timeContent{
	color: #333333;
	margin-left: 12upx;
	border-left: 4upx solid #E6E6E6;
	line-height: 35px;
 }
 .timeContent:last-child{
	 border: none;
 }
 .border_none{
	border: none;
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
   line-height: 98upx;
 }
 .btn_right{
   width: 50%;
   background-color: #FF6000;
   color: #fff;
   border-radius: 0;
   font-size: 16px;
   line-height: 98upx;
 }
 .btn_right_all{
   width: 100%;
   background-color: #FF6000;
   color: #fff;
   border-radius: 0;
   font-size: 16px;
   line-height: 98upx;
 }
</style>
