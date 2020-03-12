<template>
	<view>
		<view class="top-nav-fixed">
			<view class="search_top_box_gray">
			  <view class="flex height_56">
				<uniIcon type="scan" size="24" ></uniIcon>
				<view class="flex_c search_left_gray">
				  <icon type="search" size="14" style="height:14px;margin-left:40upx;"></icon>
				  <input class="search_left_input" v-model="inputValueOne" placeholder="搜索" 
				  @input="blurInput" confirm-type="search" @confirm="tapSearch"></input>
				</view>
			
			  </view>
			</view>
			<view>
				<topTabbar @change="tabSwitch()" :items="items" ></topTabbar>
			</view>
			<view class="pt_20 pb_20">
					<filterButton @change="filterButtonChange" :items="filterButton" ></filterButton>
			</view>
			
		</view>
		<view style="height: 220upx;width:100%;"></view>
		
	<!-- ---------------------------------------- -->
	<view class="content">
		
	   
		<inquireList @change="toDetail" :items="lists"></inquireList>
        <uniLoadMore :status="loadingType"></uniLoadMore>
		
	</view>
					
	</view>
</template>

<script>
	import uniIcon from "@/components/uni-icons/uni-icons.vue";
	import topTabbar from "@/components/topTabbar-inquiry.vue";
	import filterButton from "@/components/filterButton-status.vue";
	import inquireList from "@/components/sample-inquiry/inquireList.vue";
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
				items: ['原样分析','回样分析'],
				activeIndex: 0,
				filterButton:[],
				fitlerButtonIndex: '',
				count: 0,
				lists:[],
				totalPage:'',   //总页数
				
				keyword : '',			//搜索关键字
				affiliation	 : 1,	//1我的，2非我的
				inquiryType : 0,		//0全部，1常规，2找样
				time : '',				//天为单位
				pageNum	 : 1,		//当前页数
				pageSize : 20 		,//每页记录数
				isDoRefresh:false,
				orderType: 1,  //1原样，2回样
				isAnalyse: -1,  //是否已分析 1已分析，0未分析 全部传空

			};
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
			this.getInquiryList();
			// this.getInquiryStatus()
		},
		onLoad:function(){
			_this = this
			this.getInquiryList()
			this.getInquiryStatus()
		},
		methods:{
			getInquiryStatus:function(){
				
				let postCode = uni.getStorageSync('pupDefault')
				let url = this.Api.inquiryStatus2
				let data = {
					postCode: postCode
							
				}
				this.myRequest(data,url,'get').then(res => {
				  console.log(res);
				   _this.filterButton = res.data.data.list
				   this.setIsChecked(this.filterButton,this.isAnalyse)
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
						orderType: _this.orderType,        //类型 1询价单，2报价单（询价即原样，报价是回样）
						isAnalyse: _this.isAnalyse,		  //	是否已分析 1已分析，0未分析 全部传空
						time : _this.time,				//天为单位
						pageNum	 : _this.pageNum,		//当前页数
						pageSize : _this.pageSize 		,//每页记录数
						
						
					}
					let url = this.Api.analystList
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
			        },
			
			getInquiryList:function(){
				_this.pageNum = 1
				
				_this.loadingType = 'more';
				uni.showNavigationBarLoading();

				let data ={
					keyword : _this.keyword,			//搜索关键字
					orderType: _this.orderType,        //类型 1询价单，2报价单（询价即原样，报价是回样）
					isAnalyse: _this.isAnalyse,		  //	是否已分析 1已分析，0未分析 全部传空
					time : _this.time,				//天为单位
					pageNum	 : _this.pageNum,		//当前页数
					pageSize : _this.pageSize 		,//每页记录数

					
				}
				let url = this.Api.analystList
				this.myRequest(data,url,'get').then(res => {
				  _this.pageNum++;
				  console.log(res);
				  _this.lists = res.data.data.list
				  console.log('list',_this.lists)
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
				let status = arr[1]
			
					    
				uni.navigateTo({
					url: '/pages/qing-f-c/inquiryManage/sampleInquiry/analyst/inquiry-details?inquiryNumber='+ id+'&orderType='+_this.orderType,
					success: res => {},
					fail: (err) => {
						console.log(err)
					},
					complete: () => {}
				})
		
				
			},
			tabSwitch:function(index){
				this.activeIndex = index
				console.log('activeIndex',this.activeIndex)
				if (this.activeIndex ==0){
					 
					   this.orderType = 1
					   this.isAnalyse = -1
					   	  //	是否已分析 1已分析，0未分析 全部传空
					   this.time = ''				//天为单位
					   this.getInquiryList()
					   this.getInquiryStatus()
					   uni.pageScrollTo({
					   	duration: 0,
						scrollTop: 0
					   })
					 
					}
				if (this.activeIndex ==1){
					this.orderType = 2
					this.isAnalyse = -1
					this.getInquiryList()
					this.getInquiryStatus()
					uni.pageScrollTo({
						duration: 0,
						scrollTop: 0
					})
				}
			},
			filterButtonChange:function(index){
				
              
					
				this.isAnalyse = index
				this.setIsChecked(this.filterButton,this.isAnalyse)
				
			    //	是否已分析 1已分析，0未分析 全部传空
					
				 _this.pageNum =1
				this.getInquiryList()
				console.log(this.filterButton)
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
			},
			toModelSearch:function(){
				
			},
			tapSearch:function() {
				
				this.keyword = this.inputValueOne
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
  margin-left: 20upx;
  background-color:#EFEFEF;
  height: 54upx;
  box-sizing: border-box;
  border-radius: 26upx; 
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
