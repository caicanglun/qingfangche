<template>
	<view>
		<top-search @search="handleSearch"></top-search>
		<view>
		  <block v-for="(item, index) in customerList" :key="index">
		    <view class="list flex_c box_shadow" @click.stop="toClientDetail(item.realName,item.buyOrSellCode)" :data-id="item.buyOrSellCode" :data-index="index">
		      
		      <!-- <image src="/images/jinsy/pitch_on.png"  mode="aspectFill" class="pitch_on"></image> -->
		      <view :class="(compileing?'wid_610':'wid_670')">
		        <view class="flex_sb mt_10">
		          <view class="flex">
		            <image src="/static/images/qingfc/application/companyx.png" class="title_img" mode="aspectFit"></image>
		            <view class="fs_16 font_we_bold wid_510">公司名称:{{item.companyName||''}}</view>
		          </view>
		          <!-- <view :class="(item.buyOrsell==1?'id_btn':'seller_btn')">{{item.buyOrsell==1?'买家':'卖家'}}</view> -->
				 
		        </view>
		        <view class="flex_c mt_20">
		          <image src="/static/images/qingfc/application/list.png" class="title_img" mode="aspectFit"></image>
		          <view class="fs_14 ">
		            <text class="mr_60">客户编号:{{item.companyCode||''}}</text>
		            
		            
		          </view>
		        </view>
		        <view class="flex_c mt_20">
					  <image src="/static/images/qingfc/application/contacts.png" class="title_img" mode="aspectFit"></image>
					  <view class="fs_14">联系人: {{item.realName||''}}</view>
		        </view>
				
				
		      </view>
		    </view>
		  </block>
		  <view class="bottom_title fff_50" v-if="loading">加载中...</view>
		</view>
		<uniLoadMore :status="loadingType"></uniLoadMore>
	</view>
</template>

<script>
	import topSearch from "@/components/topSearch.vue";
	import uniLoadMore from "@/components/uni-load-more/uni-load-more.vue";
	let _pageSize = 20
	let _this,timer
	export default {
		components:{
			topSearch,
			uniLoadMore
		},
		data() {
			return {
				loadingType: 'more',
				customerList:[],
				keyword:'',
				pageNum: 1,
				isLastPage:false
			};
		},
		onReachBottom: function () {
			if (timer != null) {
			    clearTimeout(timer);
			       }
			  timer = setTimeout(function() {
			       _this.getMoreCustomer('',_this.pageNum,_pageSize);
			   }, 1000);

		 },
		 onPullDownRefresh: function () {
			_this.getCustomerList('',_this.pageNum,_pageSize);
		 },
		onLoad:function(){
			_this = this
			this.getCustomList()
		},
		methods:{
			getMoreCustomer:function(keyword,pageNum,pageSize){
				    if (_this.loadingType !== 'more') {//loadingType!='more';直接返回
				    	return false;
				    }
					_this.loadingType = 'loading';
					uni.showNavigationBarLoading();//显示加载动画
					let url =  this.Api.buyerList
				    let data= {
						keyword: '',  //	搜索关键字
						pageNum: this.pageNum,		   //当前页数
						pageSize: _pageSize
					}
				   this.myRequest(data,url,'get').then(res => {
					   if (res.data.data.list.length == 0) {//没有数据
					        console.log("no data")
					    	_this.loadingType = '';
					    	uni.hideNavigationBarLoading();//关闭加载动画
					    	return;
					   }
					 _this.pageNum++;//每触底一次 page +1
					  console.log(res)
					  _this.customerList = _this.customerList.concat(res.data.data.list)
					 _this.loadingType = 'more';//将loadingType归0重置
					 uni.hideNavigationBarLoading();//关闭加载动画
					 
				    }).catch(err => {
				     wx.showToast({
				       title: err.data.errMsg,
				       icon: 'none'
				     });
				   });
			},
			handleSearch:function(e){
				console.log(e)
				this.keyword = e
				let url =  this.Api.buyerList
				let data ={
					keyword: this.keyword,  //	搜索关键字
					pageNum: this.pageNum,		   //当前页数
					pageSize: _pageSize
				}
				this.myRequest(data,url,'get').then(res => {
				  console.log(res);
					 _this.customerList = res.data.data.list
				 }).catch(err => {
				  wx.showToast({
				    title: err.data.errMsg,
				    icon: 'none'
				  });
				});
				
			},
			getCustomList:function(){
				_this.pageNum = 1
				_this.loadingType = 'more';
				uni.showNavigationBarLoading();
				
				let url =  this.Api.buyerList
				let data ={
					keyword: '',  //	搜索关键字
					pageNum: this.pageNum,		   //当前页数
					pageSize: _pageSize
				}
				this.myRequest(data,url,'get').then(res => {
					_this.pageNum++;
				  console.log(res);
					_this.customerList = res.data.data.list
				 }).catch(err => {
				  wx.showToast({
				    title: err.data.errMsg,
				    icon: 'none'
				  });
				});
				uni.hideNavigationBarLoading();
				uni.stopPullDownRefresh();//得到数据后停止下拉刷新
			},
			toClientDetail:function(realName,code){
				console.log(realName,code)
				var pages = getCurrentPages();
					var currPage = pages[pages.length - 1]; //当前页面
					var prevPage = pages[pages.length - 2]; //上一个页面
					//直接调用上一个页面的setData()方法，把数据存到上一个页面中去
					// prevPage.setData({
					// 		buyer:  realName,
					// 		buyerCode: code
					// })
					prevPage.$vm.seller = realName
					prevPage.$vm.sellerCode = code
				uni.navigateBack({
					delta: 1
				});
			}
		}
	}
</script>

<style lang="scss">
	page{
		background: #F4F4F4;
	}
     .tab_one{
       color: #fff;
       text-align: center;
       width: 374upx;
       font-size: 14px;
     }
     .tab_one:nth-child(1){
       border-right: 2upx solid #fff;
     }
     .tab_list{
       background-color: #fff;
       font-size: 28upx;
       font-weight: 300;
     }
     .tab_170{
       text-align: center;
       width: 170upx;
     }
     .tab_145{
       text-align: center;
       width: 145upx;
     }
     .tab_208{
       text-align: center;
       width: 208upx;
     	
     }
     
     .tab_on{
       color: #FF6000;
       font-weight: bold;
     }
     .line{
       height: 60upx;
       width: 2upx;
       background-color: #D3D3D3;
     }
     .tab_text{
       display: inline-block;
       padding: 24upx 0;
     }
     .text_on{
       border-bottom: 4upx solid #FF6000;
     }
     .tab_bj{
       font-size: 24upx;
       color: #FF6000;
       font-weight: bold;
       text-align: center;
       width: 114upx;
     	padding: 24upx 0;
     }
     .all_list{
       padding: 20upx 40upx 0;
     }
     .no_pitch{
        width: 40upx;
        height: 40upx;
        border-radius: 40upx;
        border: 1upx solid #979797;
        background-color: #fff;
        margin-right: 20upx;
        box-sizing: border-box;
     }
     .pitch_on{
       width: 40upx;
       height: 40upx;
       border-radius: 40upx;
       margin-right: 20upx;
     }
     .list{
       padding: 20upx;
       margin: 20upx;
       background-color: #fff;
       border-radius: 6upx;
       font-size: 12px;
     }
     .hand_img{
       width: 100upx;
       height: 100upx;
       margin-right: 20upx;
       border-radius: 100upx;
     }
     .client_hand_img{
       width: 120upx;
       height: 120upx;
       margin-right: 30upx;
       border-radius: 120upx;
     }
     .height_120{
       height: 120upx;
     }
     .width_380{
     	width: 380upx
     }
     .width_400{
     	width: 400upx;
     }
     .width_510{
       width: 510upx;
     }
     .width_490{
       width: 490upx;
     }
     .mr_50{
       margin-right: 50upx;
     }
     .fff_50{
       color: rgba(0, 0, 0, 0.5)
     }
     .fixed_right_bottom{
       position: fixed;
       bottom: 187upx;
       right: 23upx;
       height: 100upx;
       width: 100upx;
       border-radius: 100upx;
       background-color: #FF6000;
       color: #fff;
       font-size: 28upx;
       text-align: center;
       line-height: 1;
       box-sizing: border-box;
       padding-top:22upx; 
       font-weight: bold;  
     }
     .riqi_img{
       width: 50upx;
       height: 50upx;
       margin-right: 10upx;
       margin-top: 3upx;
     }
     .wangfan_img{
       width: 50upx;
       height: 27upx;
       margin: 14upx 30upx;
     }
     .time_btn{
       width: 222upx;
       height: 56upx;
       box-sizing: border-box;
       background-color: #FF6000;
       color: #fff;
       font-size: 14px;
       text-align: center;
       border-radius: 6upx;
       line-height: 56upx;
     }
     .height_100{
     	height: 100upx
     }
     
     .mb_16{
     	margin-bottom: 16upx;
     	line-height: 1.1
     }
     .search_btn{
       width: 138upx;
       background-color: #fff;
       border-radius: 28upx;
       display: flex;
       justify-content: center;
       color:#9B9B9B;
       height: 56upx;
       flex-wrap: wrap;
       position: relative;
       z-index: 99;
       overflow: hidden;
       transition: 0.2s
     }
     .bind_searach{
       height: 192upx;
     }
     .selection{
       line-height: 56upx;
     }
     .search_btn image{
       width: 18upx;
       height: 28upx;
       margin-left: 12upx;
       margin-top: 14upx
     }
     .lh_62{
       line-height: 62upx;
     }
     .height_92{
     	height: 92upx
     }
     .height_56{
       height: 56upx
     }
     .bottom_title{
     	text-align: center;
     	font-size: 14px;
     	margin: 20upx 0;
     }
     .ptb_20{
     	line-height: 1.2;
     	padding-top: 17upx;
     	padding-bottom: 17upx;
     }
     .title_img{
     	width: 32upx;
     	height: 35upx;
     	padding-left:10upx;
     	padding-right: 20upx; 
     }
     .mr_60{
     	margin-right: 60upx;
     }
     .mt_10{
     	margin-top: 10upx;
     }
     .color_888{
     	color: #888890;
     }
     .wid_670{
     	width: 670upx
     }
     .wid_610{
     	width: 610upx
     }
     .time_box{
       padding: 14upx 30upx 16upx 30upx;
     }
     .wangfan_img{
       width: 84upx;
       height: 18upx;
       margin: 11upx 32upx;
     }
     .reset{
     	color: #FF6000;
     	font-weight: bold;
     	line-height: 56upx;
     	padding-left: 40upx;
     }
     .record_list{
     	margin: 20upx;
     	padding: 20upx 10upx;
     	font-size: 14px;
     	background-color: #fff;
     	border-radius: 6upx;
     }
     .color_9b{
     	color: #9B9B9B
     }
     .border_bottom{
     	border-bottom: 1upx solid #ddd;
     	padding:0 10upx 20upx; 
     	margin-bottom: 15upx;
     }
     .wid_510{
     	width: 510upx;
     	line-height: 1.1
     }
     
</style>
