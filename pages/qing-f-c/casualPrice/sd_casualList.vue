
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
			<view style="background: #FFFFFF;">
				<ms-dropdown-menu>
					<ms-dropdown-item v-model="regionCode" :list="regionCodeList" @input="filterInput" v-if="regionCodeList.length>0"></ms-dropdown-item>
				    <ms-dropdown-item v-model="userPostCode" :list="userPostList" @input="filterInput" v-if="userPostList.length>0"></ms-dropdown-item>
					
					
				</ms-dropdown-menu>
			</view>
			
		</view>
		<view style="height: 220upx;width:100%;"></view>
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
					<view style="font-size: 13px;" class="flex_column">
						
						
					</view>
				</view>
				
			
			</view>
			
		</block>
		
		<uniLoadMore :status="loadingType"></uniLoadMore>
		<!-- <view v-if="isShowButton">
			<image src="/static/images/qingfc/addFollow.png" mode="aspectFit" class="er_img" @tap="addFollow"></image>
		</view> -->
		
	</view>
</template>

<script>
	import uniLoadMore from "@/components/uni-load-more/uni-load-more.vue";
	import uniIcon from "@/components/uni-icons/uni-icons.vue";
	import topTabbar from "@/components/topTabbar-follow.vue";
	import msDropdownMenu from '@/components/ms-dropdown/dropdown-menu.vue'
    import msDropdownItem from '@/components/ms-dropdown/dropdown-item.vue'
	
	let _this,timer;
	export default {
		components:{
			uniLoadMore,
			uniIcon,
			topTabbar,
			msDropdownMenu,
			msDropdownItem
		},
		data() {
			return {
				menuKey: 1,
				list: [
						{
							text: '区域',
							value: 0
						},
						{
							text: 'item2',
							value: 1
						},
						{
							text: 'item3',
							value: 3
						}
				    ],
				regionList:[],
				userPostList:[],
				warningLevelList:[],
				recordStatusList:[],
				regionCodeList:[],
				value1: 0,
				userPostCode: 0,
				warningLevel: 0,
				recordStatus: 0,
				regionCode: 0,
				pupDefault:'',
				items: ['我的跟进','订单跟进'],
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
			this.fetchList()
			
			this.getBuyDeputy()	
		    this.getRegionCode()
			
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
			async getBuyDeputy(){
				const res = await this.$http.get('/latent/buy_deputy',{})
				let tmp = res.data.data.list
				tmp.forEach((item)=>{
					this.userPostList.push({text:item.label,value:item.id})
				})
				this.userPostList.unshift({text:'买帮办',value: 0})
				
				console.log(this.userPostList)
				
			},
			
			async getRegionCode(){
				const res = await this.$http.get('/choose/region',{})
				let tmp = res.data.data.list
				tmp.forEach((item)=>{
					this.regionCodeList.push({text:item.label,value:item.id})
				})
				this.regionCodeList.unshift({text:'全部区域',value: 0})
				console.log(res)
			},
			
			async fetchList(){
				this.pageNum =1
				let data={
					regionCode:this.regionCode, //区域
					postCode: this.pupDefault, //身份
					keyword:this.keyword,  //	搜索关键字
					userPostCode: this.userPostCode,  //帮办
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
					regionCode:this.regionCode, //区域
					postCode: this.pupDefault, //身份
					keyword:this.keyword,  //	搜索关键字
					userPostCode: this.userPostCode,  //帮办
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
			confirm:function(e){
				 console.log(e)
			},
			toDetail:function(e){
				uni.navigateTo({
					url: `./publicDialog?recordCode=${e}&buyOrSell=1`,
					success: res => {},
					fail: (err) => {console.log(err)},
					complete: () => {}
				});
				
			},
			setPrincipal:function(recordCode,realName){
				this.followList.forEach((item)=>{
					if (item.recordCode == recordCode){
						item.principalRealName = realName
					}
				})
			},
			toAllocateDeputy:function(recordCode){
				uni.navigateTo({
					url: `./selectPrincipal?recordCode=${recordCode}`
				})
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
			filterInput:function(){
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
*{
	box-sizing: border-box;
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
	line-height: 25px;
	border-radius: 8upx;
}
.follow_point{
	width: 24upx;
	height: 24upx;
	border-radius: 50%;
	margin-top: 10upx;
}
.followTitle{
	font-size: 15px;
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
.allocateButton{
	width: 106upx;
	height: 40upx;
	border-radius: 20upx;
	background: #FF6000;
	color: white;
	display: flex;
	align-items: center;
	justify-content: center;
}
.bianji_img{
  width: 26upx;
  height: 26upx;
	// padding: 20upx 0 20upx 50upx
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

