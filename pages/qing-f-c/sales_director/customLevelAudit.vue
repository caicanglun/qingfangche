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
			<view>
				<topTabbar @change="tabSwitch()" :items="items" ></topTabbar>
			</view>

		</view>
		<view style="height: 180upx;width:100%;"></view>
		<block v-for="(item,index) in followList" :key="index" >
			<view class="record-wrap" v-if="pupDefault=='REGIONAL_MANAGER'">
				<view class="flex_sb">
					<view class="flex_column" style="line-height: 25px;">
						<view class="followTitle">{{item.companyName||''}}</view>
					
						<view class="followContent"><text>客户等级：{{item.companyLevelName||''}}</text></view>
					    
					    <view style="color:#999;font-size:12px;line-height: 20px;"><text>帮办：{{item.realName||''}}</text><text style="padding-left: 30upx;">时间：{{item.createTime.split(' ')[0]||''}}</text></view>
						
					</view>
					<view class="flex_column" v-if="item.companyLevelStatusCode ==0">
						<view class="buttonPass" @tap='passAudit(item.companyCode,index)'>通过</view>
						<view class="buttonReturn" @tap='rejectAudit(item.companyCode,index)'>驳回</view>
					</view>
					<view class="statusMessage" v-else :style="{color: item.companyLevelStatusCode==2||item.companyLevelStatusCode==4?'#ff0000':''}">{{item.companyLevelStatusName||''}}</view>
				</view>
			</view>
			<view class="record-wrap" v-else>
				<view class="flex_sb">
					<view class="flex_column" style="line-height: 25px;">
						<view class="followTitle">{{item.companyName||''}}</view>
					
						<view class="followContent"><text>客户等级：{{item.companyLevelName||''}}</text></view>
					    
					    <view style="color:#999;font-size:12px;line-height: 20px;"><text>帮办：{{item.realName||''}}</text><text style="padding-left: 30upx;">时间：{{item.createTime.split(' ')[0]||''}}</text></view>
						
					</view>
					<view class="flex_column" v-if="item.companyLevelStatusCode ==1">
						<view class="buttonPass" @tap='passAudit(item.companyCode,index)'>通过</view>
						<view class="buttonReturn" @tap='rejectAudit(item.companyCode,index)'>驳回</view>
					</view>
					<view class="statusMessage" v-else :style="{color: item.companyLevelStatusCode==4?'#ff0000':''}">{{item.companyLevelStatusName||''}}</view>
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
				items: ['待审核','已审核'],
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
					auditStatus: this.scope,  //1待审核，2已审核
					pageNum:  this.pageNum,
					pageSize: this.pageSize,
				}
				const res = await this.$http.get('/cm/level_audit_list',{data:data})
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
					auditStatus: this.scope,  //1待审核，2已审核
					pageNum:  this.pageNum,
					pageSize: this.pageSize,
				}
				const res = await this.$http.get('/cm/level_audit_list',{data:data})
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
			
			tabSwitch:function(index){
				this.activeIndex = index
				_this.loadingType = 'more'
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
			async passAudit(companyCode,index){
				let data ={
					companyCode: companyCode
				}
				uni.showLoading({
					title: '审核中',
					mask: true
				});
				const res = await this.$http.get('/cm/level_audit_pass',{data: data})
				uni.hideLoading()
				this.followList.splice(index,1)
				uni.showToast({
					title: '审核通过'
				});
				
			},
			async rejectAudit(companyCode,index){
				let data ={
					companyCode: companyCode
				}
				uni.showLoading({
					title: '审核中',
					mask: true
				});
				const res = await this.$http.get('/cm/level_audit_reject',{data: data})
				uni.hideLoading()
				this.followList.splice(index,1)
				uni.showToast({
					title: '审核驳回'
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
	font-size: 14px;
	color: #000000;
	
	line-height: 25px;
}
.followContent{
	font-size: 14px;
	color: #333333;
	line-height:25px;
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
.buttonPass{
	width:120upx;
	height:50upx;
	color: white;
	font-size: 14px;
	background:rgba(255,102,0,1);
	border-radius:10upx;
	display: flex;
	justify-content: center;
	align-items: center;
}
.buttonReturn{
	margin-top: 25upx;
	width:120upx;
	height:50upx;
	color: white;
	font-size: 14px;
	background:rgba(162,162,162,1);
	border-radius:10upx;
	display: flex;
	justify-content: center;
	align-items: center;
}
.statusMessage{
	width: 150upx;
	font-size: 14px;
	color: #00A21B;
}
</style>

