<template>
	<view>
		<block v-for="(item, index) in items" :key="index">
		  <view class="box_shadow list" @tap="toRoutineDetail(item.id)" :data-id="item.id">
		    <view class="title_padding fs_14 flex_sb_c lh_1">
		      <view class="flex_c">
		        <view>询价单号: {{item.showId||item.id}}</view>
		        <view class="cc_label" v-if="isDisplayType" >{{item.type||''}}</view>
		      </view>
		      <view class="pr_10 font_we_bold color_FF6000">{{item.statusName||''}}</view>
		    </view>
		    <view class="line"></view>
		    <view class="flex_sb pl_10 mt_20">
		      <view class="flex">
		        <view class="fs_28r wid_200">品名（别名）：</view>
		        <view class="fs_28r wid_360">{{item.name||''}}</view>
		      </view>
		      
		    </view>
		    <view class="fs_14 mt_20 pl_10 flex">
		      <view class="wid_320">买帮办：{{item.buyerName||''}}</view>
		      <view>买家：{{item.buyContShowId||''}}</view>
		    </view>
		    
		    <view class="fs_12 font_we_lighter lh_1 mt_20 pl_10">建立时间：{{item.createdDate}}</view>
		    <view class="line mt_20"></view>
			<view class="fs_12 plr_10 mt_20 font_we_bold flex_sb_c">
			  <view>收到报价
				<text class="color_FF6000 pl_10"> {{item.quoteNum||0}}</text>
			   </view>
			  <view>处理结果
				<text class='color_FF6000 pl_10'> {{item.dealNum||0}}</text> 
				</view>
			  <view>未处理
				<text class="color_FF6000 pl_10"> {{item.undealNum||0}}</text> 
			  </view>
			  <view style="width:67px"></view>
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
			}
		},
		data() {
			return {
				
			};
		},
		methods:{
			toRoutineDetail:function(id){
				this.$emit('change',id)
			}
		}
	}
</script>

<style lang="scss">
 .list{
   margin:20upx 20upx 0 20upx;
   padding: 20upx 10upx;
   background-color: #fff;
   border-radius: 6upx;
 }
 .title_padding{
   padding-left: 10upx;
   padding-bottom: 20upx;
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
 }
 .color_9b{
 	color: #9B9B9B
 }
 // .color_ff6000{
	//  color: #ff6000;
 // }
 .cc_label{
   color: #fff;
   padding: 0 10upx;
   background-color: #FF6000;
   border-radius: 6upx;
   line-height: 34upx;
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
 	font-size: 28upx;
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
 .wid_320{
   width: 320upx;
 }
</style>
