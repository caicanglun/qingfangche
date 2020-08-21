<template>
	
	<view>
		<view class="top-nav-fixed">
			<view class="search_top_box_gray">
			  <view class="flex height_56">
				
				<view class="flex_c search_left_gray">
				  <icon type="search" size="14" style="height:14px;margin-left:40upx;"></icon>
				  <input class="search_left_input" v-model="keyword" placeholder="搜索" 
				   confirm-type="search" @confirm="tapSearch"></input>
				</view>
			
			  </view>
			</view>
		<!-- 	<view>
				<topTabbar @change="tabSwitch()" :items="items" ></topTabbar>
			</view> -->

		</view>
		<view style="height: 120upx;width:100%;"></view>
		<block v-for="(item,index) in followList" :key="index" >
			<view class="record-wrap " @tap="toDetail(item.recordCode)">
				<view class="flex_sb">
					<view class="flex_column" style="line-height: 25px;">
						<view class="followTitle">{{item.tradeName||''}}</view>

					    <view class="flex" style="color: #333333;font-size: 14px;">
						   <view>
							   {{item.price||''}}  
							</view>
						   <view class="taxButton">
							{{item.isPlusDutyName ||''}}
						   </view>
						   <view class="taxButton">
							{{item.isIcashName ||''}}
						   </view>
						  <view class="taxButton">
						  		价格{{item.priceStatusName ||''}}
						  </view>
						</view>
						<view class="followContent"><text style="color: #333333">{{item.companyName||''}}</text></view>
					    <view style="color:#999;font-size:12px;line-height: 20px;">时间：{{item.createTime||''}}</view>
						
					</view>
					<view class="flex_column">
						<view>
							<image src="/static/images/qingfc/del@2x.png"  style="width:36upx;height:36upx;" mode="aspectFit" @tap="delCasual(item.quotationCode)"></image>
						</view>
					</view>
				</view>
				
				
			</view>
			
		</block>
		
		<uniLoadMore :status="loadingType"></uniLoadMore>
		
		<view class="fixed_right_bottom box_shadow"  @tap="addFollow">
		  <view>新建</view>
		  <view>随口价</view>
		</view>
		
		
	</view>
</template>

<script>
	import uniLoadMore from "@/components/uni-load-more/uni-load-more.vue";
	import uniIcon from "@/components/uni-icons/uni-icons.vue";
	import topTabbar from "@/components/topTabbar-follow.vue";
	let _this,timer;
	export default {
		components:{
			uniLoadMore,
			uniIcon,
			topTabbar
		},
		data() {
			return {
				pupDefault:'',
				baseUrl:'/static/images/jinsy/alert/',
				items: ['我的订单','全部订单'],
				loadingType: 'more',
			
				followList:[],
				keyword:"",
				scope: 1,
				pageNum: 1,
				pageSize: 20,
				isDoRefresh:false,
				isShowButton:false
			};
		},
		onReachBottom:function(){
			 if (timer != null) {
			            clearTimeout(timer);
			        }
			   timer = setTimeout(function() {
			        _this.fetchMoreList();
			        }, 1000);
		},
		onPullDownRefresh:function(){
			
			this.fetchList();
		},
		onLoad:function(){
			_this = this
		    this.pupDefault = uni.getStorageSync('pupDefault')
		    if (this.pupDefault == "BUY_DEPUTY"){
		    	this.isShowButton = true
		    }
			this.fetchList()
			
		},
		onShow:function(){
			   let pages = getCurrentPages();
			   let currPage = pages[pages.length-1];
			   if (currPage.data.isDoRefresh == true){
			   	       currPage.data.isDoRefresh = false;
			   		   this.fetchList()
			   	}
		},
		methods:{
			async fetchList(){
				this.pageNum =1
				let data={
					postCode: this.pupDefault,  //身份编码
					keyword:this.keyword,  //	搜索关键字
					pageNum:  this.pageNum,
					pageSize: this.pageSize,
				}
				const res = await this.$http.get('/sQuotation/rapid_list',{data:data})
				console.log(res)
				this.pageNum += 1
				
				this.followList = res.data.data.list
				uni.stopPullDownRefresh(); //得到数据后停止下拉刷新
			},
			async fetchMoreList(){
				if (_this.loadingType !== 'more') {//loadingType!=0;直接返回
					return false;
				}
				_this.loadingType = 'loading';
				uni.showNavigationBarLoading();//显示加载动画
				let data={
					postCode: this.pupDefault,  //身份编码
					keyword:this.keyword,  //	搜索关键字
					pageNum:  this.pageNum,
					pageSize: this.pageSize,
				}
				const res = await this.$http.get('/sQuotation/rapid_list',{data:data})
				if (res.data.data.list.length==0){
					_this.loadingType = '';
					uni.hideNavigationBarLoading();//关闭加载动画
					return;
				}
				this.pageNum += 1
				this.followList = this.followList.concat(res.data.data.list)
				_this.loadingType = 'more';//将loadingType归0重置
				uni.hideNavigationBarLoading();//关闭加载动画
				
			},
			toDetail:function(e){
				uni.navigateTo({
					url: `./publicDialog?recordCode=${e}&buyOrSell=1`,
					success: res => {},
					fail: (err) => {console.log(err)},
					complete: () => {}
				});
				
			},
			tabSwitch:function(index){
				this.activeIndex = index
				console.log('activeIndex',this.activeIndex)
				if (this.activeIndex ==0){
					 this.scope = 1
					}
				if (this.activeIndex ==1){
					this.scope = 2
				}
				this.fetchList()
			},
			tapSearch:function() {
				console.log(this.keyword)
				this.fetchList()
			
			},
			addFollow:function(){
				uni.navigateTo({
					url: './createCasual',
					success: res => {},
					fail: (err) => { console.log(err)},
					complete: () => {}
				});
			},
			async delCasual(code){
				let data = {
					quotationCode: code
				}
				uni.showModal({
					title: '提示',
					content: '确认删除随口价吗？',
					showCancel: true,
					cancelText: '取消',
					confirmText: '确认',
					success: async res => {
						console.log(res)
						if (res.confirm){
							uni.showLoading({
								title: '提交中',
								mask: true
							})
							const res = await this.$http.get("/sQuotation/rapid_del",{data: data})
							uni.hideLoading()
							_this.fetchList()
						}
						
					},
					fail: (err) => { console.log(err)}
					
				});
				
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
  padding:30upx;
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
.record-wrap{
	padding: 20upx;
	margin: 20upx;
	background: #FFFFFF;
	
	border-radius: 8upx;
}
.follow_point{
	width: 24upx;
	height: 24upx;
	border-radius: 50%;
	margin-top: 10upx;
}
.followTitle{
	font-size: 16px;
	color: #000000;
	font-weight: bold;
	line-height: 30px;
}
.followContent{
	font-size: 14px;
	color: #333333;
	line-height: 30px;
}

.er_img{
  position: fixed;
  bottom: 200upx;
  right: 24upx;
  width: 84upx;
  height: 84upx;
}
.alertPng{
	width: 34upx;
	height: 28upx;
}
.triangle_border_up{
    width:0;
    height:0;
    border-width:0 20upx 30upx;
    border-style:solid;
    border-color:transparent transparent #333;/*透明 透明  灰*/
    margin:10px auto;
    position:relative;

}
.messageCount{
	height: 36upx;
	width: 50upx;
	border-radius: 18upx;
	// padding: 0 10upx;
	background: #ff0000;
	color: #FFFFFF;
}
.statusStyle{
	height: 40upx;
	border-radius: 20upx;
	padding: 0 20upx;

}
.fixed_right_bottom{
  position: fixed;
  bottom: 187upx;
  right: 23upx;
  height: 84upx;
  width: 84upx;
  background:linear-gradient(-30deg,rgba(255,121,40,1) 0%,rgba(255,96,0,1) 80%);
  box-shadow:0px 0px 15px 0px rgba(0, 0, 0, 0.2);
  border-radius:50%;
  color: #fff;
  font-size: 26upx;
  text-align: center;
  line-height: 1;
  box-sizing: border-box;
  padding-top:16upx; 
  font-weight: bold;  
}
.taxButton{
 	 display: flex;
 	 align-items: center;
 	 justify-content: center;
 	 padding: 0 10upx;
 	 height:48upx;
	 background:rgba(204,204,204,0.2);
 	 border-radius:8upx; 
	 margin-left: 20upx;
 }
</style>

