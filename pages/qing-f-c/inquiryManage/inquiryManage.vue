<template>
	<view>
		<view class="search_top_box_gray">
		  <view class="flex_sb height_56">
			<uniIcon type="scan" size="24" ></uniIcon>
			<view class="flex_c search_left_gray " style="width:90%">
			  <icon type="search" size="14" style="height:14px;margin-left:40upx;"></icon>
			  <input class="search_left_input" :value="inputValueOne" placeholder="搜索" 
			  @input="blurInput" confirm-type="search" @confirm="tapSearch"></input>
			</view>
		  </view>
		</view>
		<view class="mt_20">
			<topTabbar @change="tabSwitch()" :items="items" ></topTabbar>
		</view>
		
	<!-- ---------------------------------------- -->
	<view class="content">
		<view class="pt_20 pb_20">
			<filterButton @change="filterButtonChange" :items="filterButton"></filterButton>
		</view>
		<view class="counter"> {{filterButton[fitlerButtonIndex]}}<text class="pl_20">发起{{count}}条</text></view>

		<inquireList @change="toDetail" :items="lists" :isDisplayType="activeIndex==0?true:''"></inquireList>
		
		
		
		<view class="new_build font_we_bold box_shadow_btn child1" @tap="toNewBuild" v-if="activeIndex>0">
		  <view>新建</view>
		  <view>询价单</view>
		</view>
		<view class="new_build font_we_bold box_shadow_btn child2" @tap="toPrinter" v-if="activeIndex>0">
		  <view>生成</view>
		  <view>二维码</view>
		</view>
	</view>
					
	</view>
</template>

<script>
	import uniIcon from "@/components/uni-icons/uni-icons.vue";
	import topTabbar from "@/components/topTabbar.vue";
	import filterButton from "@/components/filterButton.vue";
	import inquireList from "@/components/inquireList.vue";
	export default {
		components:{
			uniIcon,
			topTabbar,
			filterButton,
			inquireList
		},
		data() {
			return {
				inputValueOne:'',
				items: ['我的询价','常规询价','找样询价'],
				activeIndex: 0,
				filterButton:['近3天','近七天','近15天','一个月内'],
				fitlerButtonIndex: 0,
				count: 10,
				lists:[{id:'1111',showId:'00038cc',statusName:'待报价',
				name:'涤纶 600D双经双纬低弹牛津',
				buyerName:'曾广庭',buyContShowId:'ss00556w',
				createdDate:'2019-10-11 10:21:45',
				quoteNum: 1,dealNum: 2,undealNum: 3},
				{id:'2222',showId:'00038cc',statusName:'待报价',
				name:'涤纶 600D双经双纬低弹牛津',
				buyerName:'曾广庭',buyContShowId:'ss00556w',
				createdDate:'2019-10-11 10:21:45',
				quoteNum: 1,dealNum: 2,undealNum: 3},
				{id:'3333',showId:'00038cc',statusName:'待报价',
				name:'涤纶 600D双经双纬低弹牛津',
				buyerName:'曾广庭',buyContShowId:'ss00556w',
				createdDate:'2019-10-11 10:21:45',
				quoteNum: 1,dealNum: 2,undealNum: 3},
				{id:'4444',showId:'00038cc',statusName:'待报价',
				name:'涤纶 600D双经双纬低弹牛津',
				buyerName:'曾广庭',buyContShowId:'ss00556w',
				createdDate:'2019-10-11 10:21:45',
				quoteNum: 1,dealNum: 2,undealNum: 3},
				{id:'5555',showId:'00038cc',statusName:'待报价',
				name:'涤纶 600D双经双纬低弹牛津',
				buyerName:'曾广庭',buyContShowId:'ss00556w',
				createdDate:'2019-10-11 10:21:45',
				quoteNum: 1,dealNum: 2,undealNum: 3},
				{id:'6666',showId:'00038cc',statusName:'待报价',
				name:'涤纶 600D双经双纬低弹牛津',
				buyerName:'曾广庭',buyContShowId:'ss00556w',
				createdDate:'2019-10-11 10:21:45',
				quoteNum: 1,dealNum: 2,undealNum: 3},
				{id:'1111',showId:'00038cc',statusName:'待报价',
				name:'涤纶 600D双经双纬低弹牛津',
				buyerName:'曾广庭',buyContShowId:'ss00556w',
				createdDate:'2019-10-11 10:21:45',
				quoteNum: 1,dealNum: 2,undealNum: 3},
				{id:'1111',showId:'00038cc',statusName:'待报价',
				name:'涤纶 600D双经双纬低弹牛津',
				buyerName:'曾广庭',buyContShowId:'ss00556w',
				createdDate:'2019-10-11 10:21:45',
				quoteNum: 1,dealNum: 2,undealNum: 3},
				{id:'1111',showId:'00038cc',statusName:'待报价',
				name:'涤纶 600D双经双纬低弹牛津',
				buyerName:'曾广庭',buyContShowId:'ss00556w',
				createdDate:'2019-10-11 10:21:45',
				quoteNum: 1,dealNum: 2,undealNum: 3},
				{id:'1111',showId:'00038cc',statusName:'待报价',
				name:'涤纶 600D双经双纬低弹牛津',
				buyerName:'曾广庭',buyContShowId:'ss00556w',
				createdDate:'2019-10-11 10:21:45',
				quoteNum: 1,dealNum: 2,undealNum: 3},
				{id:'1111',showId:'00038cc',statusName:'待报价',
				name:'涤纶 600D双经双纬低弹牛津',
				buyerName:'曾广庭',buyContShowId:'ss00556w',
				createdDate:'2019-10-11 10:21:45',
				quoteNum: 1,dealNum: 2,undealNum: 3},
				{id:'1111',showId:'00038cc',statusName:'待报价',
				name:'涤纶 600D双经双纬低弹牛津',
				buyerName:'曾广庭',buyContShowId:'ss00556w',
				createdDate:'2019-10-11 10:21:45',
				quoteNum: 1,dealNum: 2,undealNum: 3},
				{id:'1111',showId:'00038cc',statusName:'待报价',
				name:'涤纶 600D双经双纬低弹牛津',
				buyerName:'曾广庭',buyContShowId:'ss00556w',
				createdDate:'2019-10-11 10:21:45',
				quoteNum: 1,dealNum: 2,undealNum: 3},
				{id:'1111',showId:'00038cc',statusName:'待报价',
				name:'涤纶 600D双经双纬低弹牛津',
				buyerName:'曾广庭',buyContShowId:'ss00556w',
				createdDate:'2019-10-11 10:21:45',
				quoteNum: 1,dealNum: 2,undealNum: 3}
	
				]
			};
		},
		methods:{
			toDetail:function(id){
				console.log(id)
			},
			tabSwitch:function(index){
				this.activeIndex = index
				console.log('activeIndex',this.activeIndex)
			},
			filterButtonChange:function(index){
				this.fitlerButtonIndex = index
				console.log("fiterButtonIndex",this.fitlerButtonIndex)
			},
			blurInput:function(e){
				//搜索询价单
			},
			toNewBuild:function(){
				uni.navigateTo({
					url: '/pages/qing-f-c/inquiryManage/inquiry-created',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			}
		}
	}
</script>

<style lang="scss">
.search_top_box_gray{
  background-color: #FFFFFF;
  padding:16upx 30upx 20upx;
	/* height: 92upx; */
  box-sizing: border-box;
}	
.search_left_gray{
  background-color:#EFEFEF;
  height: 56upx;
  box-sizing: border-box;
  border-radius: 56upx; 
  width: 594upx;
}
.height_56{
  height: 56upx
}
.content{
	background-color: #EFEFEF;
	width: 100%;
}
.counter{
	width: 100%;
	height: 56upx;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 13px;
}
.new_build{
  position: fixed;
  right: 23rpx;
  width: 100rpx;
  height: 100rpx;
  border-radius: 100%;
	box-sizing: border-box;
  text-align: center;
  color: #fff;
	padding-top:20rpx; 
  background-color: #FF6000;
  font-size: 26rpx;
	line-height: 1.1
}
.child1{
	bottom:230rpx;
}
.child2{
	bottom:100rpx;
}
</style>
