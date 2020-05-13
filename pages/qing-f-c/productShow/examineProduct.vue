<template>
	<view>
		<view class="top-nav-fixed">
			<view class="search_top_box_gray">
			  <view class="flex_sb height_56">
				<!-- <uniIcon type="scan" size="24" ></uniIcon> -->
				<view class="flex_c search_left_gray">
				  <icon type="search" size="14" style="height:14px;margin-left:40upx;"></icon>
				  <input class="search_left_input" v-model="inputValueOne" placeholder="搜索" 
				  @input="blurInput" confirm-type="search" @confirm="tapSearch"></input>
				</view>
				<!-- <view class="moban" @tap="toModelSearch">
					模板搜索
				</view> -->
			  </view>
			</view>
			
		</view>
		<view style="width:100%;height:50upx;"></view>
		<view style="background: #FFFFFF;margin:20upx 20upx;">
			
			<uni-list>
				 <!-- <uni-list-item v-for="(list, listIndex) in goodList" :key="listIndex" :title="list.title" :note="list.note" :isHaveRight="operatingAuthorization" :goodsStatus="list.goodsStatus" :thumb="list.thumb" :show-extra-icon="list.showExtraIcon" :extra-icon="list.extraIcon" :show-switch="list.showSwitch" @switchChange="change" @swClick="handleClick(list.goodsCode,$event)" @click="toDetail(list.goodsCode)" /> -->
				 <uni-list-item v-for="(list, listIndex) in goodList" :key="listIndex" :title="list.title" :note="list.note" :isHaveRight="operatingAuthorization" :goodsStatus="list.goodsStatus" :thumb="list.thumb" :show-extra-icon="list.showExtraIcon" :extra-icon="list.extraIcon" :show-switch="list.showSwitch" @switchChange="change" @swClick="handleClick(list.goodsCode,$event)" @click="toDetail(list.goodsCode)" />
			</uni-list>
		</view>
		<uniLoadMore :status="loadingType"></uniLoadMore>
	</view>
</template>

<script>
	import uniList from '@/components/uni-list/uni-list.vue'
	import uniListItem from '@/components/uni-list-item/uni-list-item.vue'
	import uniLoadMore from "@/components/uni-load-more/uni-load-more.vue";
	let _this,timer
	export default {
		components:{
			uniList,
			uniListItem,
			uniLoadMore
		},
		data() {
			return {
				loadingType: 'more',
				pageNum: 1,
				pageSize:20,
				inputValueOne:'',
				operatingAuthorization:false,
				keyword:'',
				goodList:[],
				subList: [{
						title: '春亚纺300条',
						note: '旺季时间：7，8，9月份',
						thumb: 'https://img-cdn-qiniu.dcloud.net.cn/new-page/uni.png'
					},
					{
						title: '春亚纺500条',
						note: '旺季时间：',
						thumb: 'https://img-cdn-qiniu.dcloud.net.cn/new-page/uni.png'
					}
				
				]
			};
		},
		onReachBottom:function(){
			 if (timer != null) {
			            clearTimeout(timer);
			        }
			   timer = setTimeout(function() {
			        _this.getmoreProduct();
			        }, 1000);

			
		},
		onPullDownRefresh:function(){
			
			this.getInquiryList();
		},
		onShow:function(){
			this.getGoodsList()
		},
		onLoad:function(){
			_this = this
			this.getGoodsList()
		},
		methods:{
			change:function(){
				
			},
			getmoreProduct:function(){
				if (_this.loadingType !== 'more') {//loadingType!=0;直接返回
					return false;
				}
				_this.loadingType = 'loading';
				uni.showNavigationBarLoading();//显示加载动画
				let url = _this.Api.auditList
				let data ={
					pageNum: _this.pageNum,
					pageSize: _this.pageSize
				
				}
				this.myRequest(data,url,'get').then(res => {
				      console.log(res)
					  if (res.data.data.list.length == 0) {//没有数据
					      console.log("no data")
					  	_this.loadingType = '';
					  	uni.hideNavigationBarLoading();//关闭加载动画
					  	return;
					  }
					  _this.pageNum++;//每触底一次 page +1
					 
					_this.goodList = _this.goodList.concat(res.data.data.list) 
					_this.loadingType = 'more';//将loadingType归0重置
					uni.hideNavigationBarLoading();//关闭加载动画
					  
					  
				}).catch(err => {
				  wx.showToast({
				    title: err.data.errMsg,
				    icon: 'none'
				  });
				});
				
			},
			getGoodsList:function(){
				_this.pageNum = 1
				_this.loadingType = 'more';
				uni.showNavigationBarLoading();
				
				let url = _this.Api.auditList
				let data ={
					pageNum: _this.pageNum,
					pageSize: _this.pageSize

				}
				this.myRequest(data,url,'get').then(res => {
					  _this.pageNum++;
				      console.log(res)
					  if (res.data.status == 0){
						 _this.goodList = res.data.data.list
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
			tapSearch:function() {
				console.log(this.keyword)
				//this.getInquiryList()
				
			},
			
			toDetail:function(e){
					uni.navigateTo({
						url: './auditProductDetail?goodsCode='+ e,
						success: res => {},
						fail: (err) => {console.log(err)},
						complete: () => {}
					});
			},
			blurInput:function(e){
				//搜索询价单
				this.keyword = this.inputValueOne
			},
		}
		
	}
</script>

<style lang="scss">
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
      width: 100%;
    }
</style>
