<template>
	<view>
		<block v-for="(item, index) in items" :key="index">
		  <view class="box_shadow list" @tap="toRoutineDetail(item.inquiryNumber,item.inquiryTypeCode)" :data-id="item.inquiryNumber">
			  <view class="list-wrap">
				  
				<view class="title_padding fs_12 flex_sb_c">
				  <view class="flex_c">
					<view>询价单号: {{item.inquiryNumber||''}}</view>
					<view class="cc_label flex_c_c fs_11" v-if="isDisplayType" >{{item.inquiryType||''}}</view>
				  </view>
				  <view class="color_FF6000 fs_12">{{item.inquiryStatus||''}}</view>
				</view>
			   <!-- <view class="line"></view> -->
				<view class="flex_sb_c">
				  <view class="flex_sb_c color_000 fs_14 height_48">
					<view class="fs_28r wid_250">品名（别名）：</view>
					<view class="fs_28r wid_360">{{item.initialTradeName||''}}</view>
				  </view>
				  
				</view>
				<view class="fs_12 flex color_333">
				  <view class="wid_320 ">买帮办：{{item.buyDeputyRealName||''}}</view>
				  <view class="flex">
					  <view style="width: 90upx;">买家：</view>
					  <view class="text-overflow-wrap">{{item.companyCode||''}}</view>
				  </view>
				</view>
				
				<view class="fs_10 height_48 mr_20" v-if="isSellDeputy=='buyDeputy'">建立时间：{{item.inquiryCreateTime}}</view>
				<view class="fs_10 height_48 mr_20" v-if="isSellDeputy== 'sellDeputy'">报价时间：{{item.inquiryCreateTime||''}}</view>
				<view class="fs_10 height_48 mr_20" v-if="isSellDeputy=='salesDirector'">建立时间：{{item.inquiryCreateTime||''}}</view>
				<view class="line"></view>
				<view class="fs_12 flex_sb_c height_48" v-if="isSellDeputy=='buyDeputy'">
				  <view>收到报价<text class="color_FF6000 pl_10"> {{item.quotationCount||0}}</text>
				   </view>
				  <view>已推送<text class='color_FF6000 pl_10'> {{item.processed||0}}</text> 
					</view>
				  <view>未处理<text class="color_FF6000 pl_10"> {{item.untreated||0}}</text> 
				  </view>
				</view>
				<!-- --------卖帮办底下计数不同--------- -->
				<view class="fs_12 flex_sb_c height_48" v-if="isSellDeputy=='sellDeputy'">
				  <view>已报价
					<text class="color_FF6000 pl_10"> {{item.quotationCount||0}}</text>
				   </view>
				  <view>已推送
					<text class='color_FF6000 pl_10'> {{item.processed||0}}</text> 
					</view>
				  <view  style="width:250upx;">
					
				  </view>
	
				</view>
				<!-- -------- 销售总监--------- -->
				<view class="fs_12 flex_sb_c height_48" v-if="isSellDeputy=='salesDirector'">
				  <view>收到报价
					<text class="color_FF6000 pl_10"> {{item.quotationCount||0}}</text>
				   </view>
				  <view>待审报价
					<text class='color_FF6000 pl_10'> {{item.untreated||0}}</text> 
				  </view>
				  <view>已审核报价<text class="color_FF6000 pl_10"> {{item.processed||0}}</text>
				  </view>
					
				</view>
				
				
		     </view>
		  </view>
		</block>
	</view>
</template>

<script>
	export default {
		props:{
			items: {
				type: Array
			},
			isDisplayType:{
				type: Boolean,
				default: false
			},
			isSellDeputy:{
				type: String,
				default: "buyDeputy"
			}
		},
		data() {
			return {
				
			};
		},
		methods:{
			toRoutineDetail:function(id,type){
				this.$emit('change',[id,type])
			}
		}
	}
</script>

<style lang="scss">
 .list{
   margin:20upx 20upx 0 20upx;
   //padding: 20upx 10upx;
   background-color: #fff;
   border-radius: 6upx;
   color: #333333;
 }
 .list-wrap{
	 padding-left: 22upx;
	 padding-top: 20upx;
	 padding-right: 20upx;
	 
 }
 .title_padding{
   height:48upx;
 }
 .height_48{
	 height: 48upx;
 }
 .lh_1{
 	line-height: 1
 }
 .pr_10{
   padding-right: 10upx;
 }
 .pr_30{
   padding-right: 30upx;
 }
 .line{
   height: 1upx;
   background-color: rgba(221, 221, 221, 0.3);
   margin-right: 20upx;
 }
 .color_9b{
 	color: #9B9B9B
 } 
 .color_333{
	 color: #333333;
 }
 .cc_label{
   color: #FF6000;
   width:114upx;
   height:32upx;
   background:rgba(255,96,0,0.1);
   border-radius:8upx;
   margin-left: 50upx;
   font-size: 12px
 }
 .color_21b{
   color:#D0021B;
 }
 .spot{
   width: 6upx;
   height: 6upx;
   border-radius: 6upx;
   background-color: #D0021B;
   margin-right: 6upx;
 }

 .color_FF6000{
   color: #FF6000;
 }
 .color_999{
   color:#999999;
 }
 .mt_24{
   margin-top: 20upx;
   padding-left: 10upx;
 }
 .mr_60{
   margin-right: 60upx;
 }
 .pr_10{
   padding-right: 10upx;
 }
 .pr_30{
   padding-right: 30upx;
 }
 .fs_28r{
 	font-size: 14px;
 	font-weight: bold;
 	line-height: 1.1
 }
 .wid_200{
 	width: 200upx
 }
 .wid_360{
 	width: 360upx;
 	word-break: break-all;
 }
 .wid_250{
	 width: 250upx;
 }
 .wid_320{
   width: 320upx;
 }
</style>
