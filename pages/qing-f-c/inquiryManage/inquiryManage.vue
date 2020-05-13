<template>
	<view>
		<view class="top-nav-fixed">
			<view class="search_top_box_gray">
			  <view class="flex height_56">
				<uniIcon type="scan" size="24" @tap="scanQR"></uniIcon>
				<view class="flex_c search_left_gray">
				  <icon type="search" size="14" style="height:14px;margin-left:40upx;"></icon>
				  <input class="search_left_input" v-model="inputValueOne" placeholder="搜索" 
				  @input="blurInput" confirm-type="search" @confirm="tapSearch"></input>
				</view>
				
			  </view>
			</view>
			<view style="height: 10upx;background: #FFFFFF;"></view>
			<view>
				<topTabbar @change="tabSwitch()" :items="items" ></topTabbar>
			</view>
			<view style="height: 20upx;background: #FFFFFF;"></view>
			<view  style="background: #FFFFFF;">
					 <filterButton @change="filterButtonChange" :items="filterButton" ></filterButton>
			</view>
			<view style="background:#FFFFFF;height:20upx;width:100%;"></view>
		</view>
		<view style="height: 100upx;width:100%;"></view>
	<!-- ---------------------------------------- -->
	<view class="content">
	   <view class="counter" style="margin-top:130upx;padding-top:30upx;"  v-if="activeIndex<2"> {{filterButton[fitlerButtonIndex].label || ''}}<text class="pl_20">发起{{count}}条</text></view>
	   <view style="height:120upx;width:100%;margin-top:20upx" v-if="activeIndex>1"></view>
		<inquireList @change="toDetail" :items="lists" :isDisplayType="activeIndex<2?true:''" isSellDeputy="buyDeputy"></inquireList>
        <uniLoadMore :status="loadingType"></uniLoadMore>
		<view class="new_build font_we_bold box_shadow_btn child1" @tap="toNewBuild" v-if="activeIndex>1">
		  <view>新建</view>
		  <view>询价单</view>
		</view>
		<view class="new_build font_we_bold box_shadow_btn child2" @tap="toPrinter" v-if="activeIndex==3">
		  <view>生成</view>
		  <view>二维码</view>
		</view>
	</view>
					
	</view>
</template>

<script>
	import uniIcon from "@/components/uni-icons/uni-icons.vue";
	import topTabbar from "@/components/topTabbar-inquiry.vue";
	import filterButton from "@/components/filterButton-status.vue";
	import inquireList from "@/components/inquireList.vue";
	import uniLoadMore from "@/components/uni-load-more/uni-load-more.vue";
	let _this,timer;
	export default {
		components:{
			uniIcon,
			topTabbar,
			filterButton,
			inquireList,
			uniLoadMore
		},
		data() {
			return {
				
				loadingType: 'more',
				
				inputValueOne:'',
				items: ['我的常规','我的找样','常规询价','找样询价'],
				activeIndex: 0,
				filterButton:[],
				fitlerButtonIndex:-1,
				count: 0,
				lists:[],
				totalPage:'',   //总页数
				
				keyword : '',			//搜索关键字
				affiliation	 : 1,	//1我的，2非我的
				inquiryType : 1,		//0全部，1常规，2找样
				inquiryStatus : -1,				//状态
				pageNum	 : 1,		//当前页数
				pageSize : 20 		,//每页记录数
				isDoRefresh:false

			};
		},
		onLoad:function(){
			_this = this
			this.getInquiryList()
			this.getInquiryStatus()
		},
		onReachBottom:function(){
			 if (timer != null) {
			            clearTimeout(timer);
			        }
			   timer = setTimeout(function() {
			        _this.getmoreInquiry();
			        }, 1000);
			
			
			
		},
		onPullDownRefresh:function(){
			
			this.getInquiryList();
		
		},
		onShow:function(){
			let pages = getCurrentPages();
			let currPage = pages[pages.length-1];
			if (currPage.data.isDoRefresh == true){
				       currPage.data.isDoRefresh = false;
					   this.getInquiryList();
				 }
			this.getInquiryList()
			//this.getInquiryStatus()
		},
		
		methods:{
			// getInquiryStatus:function(){
				
			// 	let url = this.Api.inquiryStatus
			// 	let data = {
			// 		listType: _this.inquiryType

			// 	}
			// 	this.myRequest(data,url,'get').then(res => {
			// 	  console.log(res);
			// 	   _this.filterButton = res.data.data.list
			// 	   console.log(_this.filterButton)
			// 	}).catch(err => {
			// 	  wx.showToast({
			// 	    title: err.data.errMsg,
			// 	    icon: 'none'
			// 	  });
			// 	});
			// },
			getInquiryStatus:function(){
				let postCode = uni.getStorageSync('pupDefault')
				let url = this.Api.inquiryStatus2
				let data = {
					postCode: postCode
			
				}
				this.myRequest(data,url,'get').then(res => {
				  console.log(res);
				   _this.filterButton = res.data.data.list
				   this.setIsChecked(_this.filterButton,_this.inquiryStatus)
				   console.log(_this.filterButton)
				}).catch(err => {
				  wx.showToast({
				    title: err.data.errMsg,
				    icon: 'none'
				  });
				});
			},
			 getmoreInquiry: function() {
					if (_this.loadingType !== 'more') {//loadingType!=0;直接返回
						return false;
					}
					_this.loadingType = 'loading';
					uni.showNavigationBarLoading();//显示加载动画
					let data ={
						keyword : _this.keyword,			//搜索关键字
						affiliation	 : _this.affiliation,	//1我的，2非我的
						inquiryType :  _this.inquiryType,		//1常规，2找样
						inquiryStatus : _this.inquiryStatus,				//天为单位
						pageNum	 : _this.pageNum,		//当前页数
						pageSize : _this.pageSize 		//每页记录数
						
					}
					let url = this.Api.buyDeputyList
				   this.myRequest(data,url,'get').then(res => {
							console.log(res);
							if (res.data.data.list.length == 0) {//没有数据
							    console.log("no data")
								_this.loadingType = '';
								uni.hideNavigationBarLoading();//关闭加载动画
								return;
							}
							_this.pageNum++;//每触底一次 page +1
							_this.lists = _this.lists.concat(res.data.data.list);//将数据拼接在一起
							_this.loadingType = 'more';//将loadingType归0重置
							uni.hideNavigationBarLoading();//关闭加载动画
						}).catch(err => {
							console.log(err)
						  uni.showToast({
							title: err.data.errMsg,
							icon: 'none'
						  });
					   })
					   uni.stopPullDownRefresh(); //得到数据后停止下拉刷新
			        },
			
			getInquiryList:function(){
				_this.pageNum = 1
				_this.fitlerButtonIndex = -1
				_this.loadingType = 'more';
				uni.showNavigationBarLoading();
                uni.showLoading({
                	title: '加载中',
					mask: true
                })
				let data ={
					keyword : _this.keyword,			//搜索关键字
					affiliation	 : _this.affiliation,	//1我的，2非我的
					inquiryType :  _this.inquiryType,		//1常规，2找样
					inquiryStatus : _this.inquiryStatus,				//天为单位
					pageNum	 : _this.pageNum,		//当前页数
					pageSize : _this.pageSize 		//每页记录数
					
				}
				let url = this.Api.buyDeputyList
				this.myRequest(data,url,'get').then(res => {
				   if (res.data.status==0){
					   uni.hideLoading()
					  _this.pageNum++;
					  console.log(res);
					  _this.lists = res.data.data.list
					  //未报价计数
					  				 
					  _this.count = res.data.data.totalCount
					  _this.totalPage = res.data.data.totalPage 
				   }
				  
				}).catch(err => {
				  wx.showToast({
				    title: err.data.errMsg,
				    icon: 'none'
				  });
				});
				uni.hideNavigationBarLoading();
				uni.stopPullDownRefresh();//得到数据后停止下拉刷新

			},
			toDetail:function(arr){
			
				let id = arr[0]
				let type = arr[1]
				console.log("xunjialeixing",type)
				if (type ==1){
					uni.navigateTo({
						url: '/pages/qing-f-c/inquiryManage/inquiry-details?inquiryNumber='+ id,
						success: res => {},
						fail: () => {},
						complete: () => {}
					});
				}else {
					uni.navigateTo({
						url: '/pages/qing-f-c/inquiryManage/sampleInquiry/buyDeputy/inquiry-details?inquiryNumber='+ id,
						success: res => {},
						fail: () => {},
						complete: () => {}
					})
				}
			},
			
			tabSwitch:function(index){
				this.activeIndex = index
				console.log('activeIndex',this.activeIndex)
				switch (this.activeIndex){
					case 0: 
					   this.affiliation = 1  
					   this.inquiryType = 1
					   this.inquiryStatus = -1
					   this.getInquiryStatus()
					   this.getInquiryList()
					   uni.pageScrollTo({
					   	duration: 0,
						scrollTop: 0
					   })
					   break;
					case 1: 
					   this.affiliation = 1
					   this.inquiryType = 2
					   this.inquiryStatus = -1
					   this.getInquiryStatus()
					   this.getInquiryList()
					   uni.pageScrollTo({
					   	duration: 0,
					   	scrollTop: 0
					   })
					   break
					case 2: 
					   this.affiliation = 2
					   this.inquiryType = 1
					   this.inquiryStatus = -1
					   this.getInquiryStatus()
					   this.getInquiryList()
					   uni.pageScrollTo({
					   	duration: 0,
					   	scrollTop: 0
					   })
					   break
					  case 3:
					      this.affiliation = 2
					      this.inquiryType = 2
					      this.inquiryStatus = -1
					      this.getInquiryStatus()
					      this.getInquiryList()
					      uni.pageScrollTo({
					      	duration: 0,
					      	scrollTop: 0
					      })
					      break
				}
			},
			filterButtonChange:function(index){
				this.inquiryStatus = index
				
				this.setIsChecked(this.filterButton,this.inquiryStatus)
				
				this.pageNum = 1
				this.getInquiryList()
				console.log("fiterButtonIndex",this.fitlerButtonIndex)
				
				this.pageNum = 1
				this.getInquiryList()
				
			},
			blurInput:function(e){
				//搜索询价单
				this.keyword = this.inputValueOne
			},
			toNewBuild:function(){
				uni.navigateTo({
					url: '/pages/qing-f-c/inquiryManage/inquiry-created?inquiryType='+_this.inquiryType,
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			},
			toPrinter:function(){
				let data = 1
				uni.navigateTo({
					url: '/pages/qing-f-c/printer/printer?number='+'&orderType='+ data,
					success: res => {},
					fail: (err) => {console.log(err)},
					complete: () => {}
				});
			},
			toModelSearch:function(){
				
			},
			tapSearch:function() {

				console.log(this.keyword)
				this.getInquiryList()

			}
		}
	}
</script>

<style lang="scss">
	page{
		background: #F4F4F4;
	}
	.top-nav-fixed{
		position:fixed;
		top: 0;
        z-index: 99;
		background:#F4F4F4 ;
		width: 100%;
	}
.search_top_box_gray{
  background-color: #FFFFFF;
  padding:16upx 30upx 20upx;
	/* height: 92upx; */
  box-sizing: border-box;
}	
.search_left_gray{
  background-color:#EFEFEF;
  height: 54upx;
  box-sizing: border-box;
  border-radius: 26upx; 
  margin-left: 20upx;
  width: 90%;
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
	height: 40upx;
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
.moban{
	display:flex;
	align-items: center;
	justify-content: center;
	width: 152upx;
	height: 54upx;
	border-radius: 26upx;
	color: #FF6000;
	border: 1upx solid #FF6000;
	font-size:14px;
}
</style>
