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
		</view>
		<view style="height: 140upx;width:100%;"></view>
		<block v-for="(item,index) in followList" :key="index" >
			<view class="record-wrap flex" @tap="toDetail(item.recordCode)">
				<view><image :src="item.icon" mode="aspectFit" style="height: 120upx;width: 120upx;border-radius: 8upx;"></image></view>
				
				<view style="width: 80%;padding-left: 20upx;border-bottom: 1upx solid #EFEFEF;">
					<view class="flex_sb">
					     <view style="font-size: 16px;font-weight: bold;">{{item.productName}}</view>
						 <view class="btnInquiry flex_c_c"><text style="font-size: 13px;color: #FF6000;">立即询价</text></view>
					</view>
					<view class="flex_sb" style="font-size: 14px;font-weight: 500;margin-top: 10upx;">
						<view style="width: 50%;"><text style="color: #999999;padding-right: 20upx;">成份</text>{{item.content}}</view>
						<view style="width: 50%;"><text style="color: #999999;padding-right: 20upx;">风格</text>{{item.style}}</view>
					</view>
					<view class="textOver" style="width:100%;padding-bottom: 20upx;">
						<text style="color: #999999;padding-right: 20upx;">规格</text>
					{{item.spec}}</view>
				</view>
				
				
			</view>
			
			
		</block>
		
		<uniLoadMore :status="loadingType"></uniLoadMore>
		
		
		
		
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
				
				loadingType: 'more',
			
				followList:[
					{
					icon:'/static/images/sample.jpg',
					productName:'锦棉塔丝隆横条',
					content:'100%尼龙',
					style:'平纹',
					spec: 'N40D FDY+ N30D/1F B*同经纱同经纱同经纱'
				},
				{
					icon:'/static/images/sample.jpg',
					productName:'锦棉塔丝隆横条',
					content:'100%尼龙',
					style:'平纹',
					spec: 'N40D FDY+ N30D/1F B*同经纱同经纱同经纱'
				},
				],
				keyword:"",
				
				pageNum: 1,
				pageSize: 20,
				isDoRefresh:false,
				
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
		    
			// this.fetchList()
			
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
					scope:this.scope,			//我的跟进:1，订单跟进:2
					pageNum:  this.pageNum,
					pageSize: this.pageSize,
				}
				const res = await this.$http.get('/latent/list',{data:data})
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
					scope:this.scope,
					pageNum:  this.pageNum,
					pageSize: this.pageSize,
				}
				const res = await this.$http.get('/latent/list',{data:data})
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
					url: `./detail`,
					
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
				this.followList = []
				this.fetchList()
			},
			tapSearch:function() {
				console.log(this.keyword)
				this.fetchList()
			
			},
			addFollow:function(){
				uni.navigateTo({
					url: './addFollowRecord',
					success: res => {},
					fail: (err) => { console.log(err)},
					complete: () => {}
				});
			}
			
		}
	}
</script>

<style lang="scss">
page{
	background: #F4F4F4;
}
.textOver{
	  white-space:nowrap;      
	  overflow:hidden;    
	  text-overflow:ellipsis; 
	  font-size: 14px;
	  font-weight: 500;

	}	
.btnInquiry{
	width:120upx;
	height:44upx;
	border:1upx solid rgba(255,102,0,1);
	opacity:0.5;
	border-radius:4upx;
	
	
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
	// margin: 20upx;
	background: #FFFFFF;
	
	// border-radius: 8upx;
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
  font-size: 28upx;
  text-align: center;
  line-height: 1;
  box-sizing: border-box;
  padding-top:16upx; 
  font-weight: bold;  
}
</style>

