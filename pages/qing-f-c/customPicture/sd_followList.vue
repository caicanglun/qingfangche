<template>
	
	<view>
		<view class="top-nav-fixed">
			<view class="search_top_box_gray">
                 <view class = "inputWrap">
					 <icon type="search" size="14" style="height:14px;padding-top: 25upx;"></icon>
                 	 <input class="input" v-model="keyword" confirm-type="search" @confirm="tapSearch" placeholder="搜索" type="text"></input>
                 </view>
			</view>
			<!-- <view>
				<topTabbar @change="tabSwitch()" :items="items" ></topTabbar>
			</view> -->
            <view style="background: #FFFFFF;">
            	<ms-dropdown-menu>
					<ms-dropdown-item v-model="scope" :list="items" @input="filterInput"></ms-dropdown-item>
            	    <ms-dropdown-item v-model="userPostCode" :list="userPostList" @input="filterInput" v-if="userPostList.length>0"></ms-dropdown-item>
            	</ms-dropdown-menu>
            </view>
		</view>
		<view style="height: 250upx;width:100%;"></view>
		<block v-for="(item,index) in followList" :key="index" >
			<view class="flex" style="border-radius:8px;padding: 20upx;margin: 20upx;background: #FFFFFF;height:160upx;" @tap="toCompanyDetail(item.companyCode)">
				<view style="width: 85%;" class="flex_column">
					
					<view class="followTitle">{{item.companyName||''}}</view>

					<view class="followContent">帮办：{{item.realName||''}}</view>

				    <view style="color:#999;font-size:12px;line-height: 30px;">跟进时间：{{item.createTime||''}}</view>
					
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
				st:2,
				green:'#7BC346',
				red:"#ff0000",
				items: [{text:'最新跟进',value: 0},{text:'待跟进',value: 1}],
				userPostList:[],
				userPostCode: 0,
				
				loadingType: 'more',
				followList:[],
				pageNum: 1,
				pageSize: 20,
				scope:0,
				keyword:'',
				isDoRefresh:false
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
			this.fetchList()
			this.getBuyDeputy()
		},
		onShow:function(){
			this.fetchList()
		},
		methods:{
			async getBuyDeputy(){
				const res = await this.$http.get('/portrayal/deputy_base',{})
				let tmp = res.data.data.list
				tmp.forEach((item)=>{
					this.userPostList.push({text:item.label,value:item.id})
				})
				this.userPostList.unshift({text:'帮办',value: 0})
				
				console.log(this.userPostList)
				
			},
			async fetchList(){
				this.pageNum =1
				let data={
					deputyUserCode: this.userPostCode,
					scope: this.scope,
					keyword: this.keyword,
					pageNum:  this.pageNum,
					pageSize: this.pageSize,
				}
				console.log(data)
				const res = await this.$http.get('/portrayal/follow_up_list',{data:data})
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
					deputyUserCode: this.userPostCode,
					scope: this.scope,
					keyword: this.keyword,
					pageNum:  this.pageNum,
					pageSize: this.pageSize,
				}
				const res = await this.$http.get('/portrayal/follow_up_list',{data:data})
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
			blurInput:function(){
				
			},
			tapSearch:function() {
			
				console.log(this.keyword)
				this.fetchList()
			
			},
			filterInput:function(){
				this.fetchList()
			},
			toDetail:function(e){
				let pupDefault = uni.getStorageSync('pupDefault')
				console.log(pupDefault)
				if (pupDefault=='BUY_DEPUTY'){
					uni.navigateTo({
						url: `./followRecordDetail?recordCode=${e}`,
						success: res => {},
						fail: (err) => {console.log(err)},
						complete: () => {}
					});
				}else if (pupDefault=='SELL_DEPUTY'){
					uni.navigateTo({
						url: `./followRecordDetailSeller?recordCode=${e}`,
						success: res => {},
						fail: (err) => {console.log(err)},
						complete: () => {}
					});
				}
				
			},
			tabSwitch:function(index){
				this.activeIndex = index
				console.log('activeIndex',this.activeIndex)
				if (this.activeIndex ==0){
					 this.scope = 0
					}else {
						this.scope = 1
				}
				this.fetchList()
			},
			toCompanyDetail:function(companyCode){
				uni.navigateTo({
					url: `./sd_followRecordDetail?companyCode=${companyCode}`,
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
  // height: 54upx;
  box-sizing: border-box;
  border-radius: 26upx; 
  width: 100%;
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
	line-height: 30px;
	font-weight: bold;
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
.inputWrap{
	    display: flex;
		width: 100%;
		height: 70upx;
		border-radius: 20px;
		box-sizing: border-box;
        padding: 0 20px;
		background-color:#EFEFEF;
	}
	.inputWrap .input{
		width: 100%;
		height: 100%;
		padding-left: 20upx;
		// text-align: center;
		font-size: 15px;
	}
</style>
