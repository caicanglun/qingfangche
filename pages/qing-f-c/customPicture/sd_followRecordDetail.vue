<template>
	
	<view>
		<view class="login_top" >
			<view class="backto" @tap="backto">返回</view>
			<veiw class="navTitle">跟进记录</veiw>
		</view>
		<view class="hand_box">
			<view class="wrap-box">

				<view class="companyName" @tap="toCompanyDetail">
					{{companyInfo.companyName ||''}}
				</view>            
				
				<view>
				  <text style="color:#8D8D8D;">帮办</text><text style="padding-left: 30upx;">{{companyInfo.deputyRealName ||''}}</text>
				</view>
				
				<view><text style="color:#8D8D8D;">联系人</text><text style="padding-left: 56upx;">{{companyInfo.realNameAndPhone ||''}}</text></view>

				<view style="font-size: 11px;color:#8D8D8D;">
					<text>建立时间：</text><text style="padding-left:20upx;">{{companyInfo.createTime ||''}}</text>
				</view>

			</view>
		</view>
		
		<block v-for="(item,index) in followList" :key="index" >
			<view class="listWrap" @tap="toDetail(item.recordCode)">
				<view class="flex_column" style="line-height: 30px;">
					<veiw class="flex_c">
						<view class="point"></view>
						<view class="followTitle" style="padding-left: 10upx;">{{item.title||''}}</view>
					</veiw>

					<view  style="display: flex;flex-direction: column;font-size:14px;">
						   <block v-for="(subItem,index) in item.content" :key="index">
							   <view style="margin: 5upx 0upx;">
							   	<text style="color:#999999">{{subItem.name}}：</text><text>{{subItem.remarks}}</text>
							   </view>
						   </block>
							
					</view>
				</view>
				
			</view>
		</block>
		
		<uniLoadMore :status="loadingType"></uniLoadMore>
		<view v-show="isShow">
			<image src="/static/images/qingfc/addFollow.png" mode="aspectFit" class="er_img" @tap="AddFollow"></image>
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
				companyInfo:{},
				st:2,
				green:'#7BC346',
				red:"#ff0000",
				items: ['最新跟进','待跟进'],
				inputValueOne:'',  //搜索框value
				loadingType: 'more',
				buyOrSellCode:'',
				companyCode:'',
				followList:[],
				pageNum: 1,
				pageSize: 20,
				isDoRefresh:false,
				isShow: false,
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
		onLoad:function(options){
			_this = this
			this.companyCode = options.companyCode
			// this.buyOrSellCode = options.buyOrSellCode
			let pupDefault = uni.getStorageSync('pupDefault')
            if (pupDefault == "BUY_DEPUTY" || pupDefault == "SELL_DEPUTY"){
				this.isShow = true
			}
			this.fetchList()
			this.getLinkMan()
			
		},
		onShow:function(){	
			this.getLinkMan()
			this.fetchList()
				
		},
		methods:{
			async getLinkMan(){
				const res = await this.$http.get('/cm/linkman',{data:{
					companyCode: this.companyCode
				}	
				})
				this.buyOrSellCode = res.data.data.list[0].buyOrSellCode
				console.log(res)
			},
			backto:function(){
				uni.navigateBack({
					delta: -1
				});
			},
			async fetchList(){
				this.pageNum =1
				let data={
					companyCode: this.companyCode,
					pageNum:  this.pageNum,
					pageSize: this.pageSize,
				}
				const res = await this.$http.get('/portrayal/follow_up_details',{data:data})
				console.log(res)
				this.pageNum += 1
				this.companyInfo = res.data.data
				this.followList = res.data.data.list
				console.log(this.followList)
				uni.stopPullDownRefresh(); //得到数据后停止下拉刷新
			},
			async fetchMoreList(){
				if (_this.loadingType !== 'more') {//loadingType!=0;直接返回
					return false;
				}
				_this.loadingType = 'loading';
				uni.showNavigationBarLoading();//显示加载动画
				let data={
					companyCode: this.companyCode,
					pageNum:  this.pageNum,
					pageSize: this.pageSize,
				}
				const res = await this.$http.get('/portrayal/follow_up_details',{data:data})
				if (res.data.data.list.length==0){
					_this.loadingType = '';
					uni.hideNavigationBarLoading();//关闭加载动画
					return;
				}
				this.pageNum += 1
				this.companyInfo = res.data.data
				this.followList = this.followList.concat(res.data.data.list)
				_this.loadingType = 'more';//将loadingType归0重置
				uni.hideNavigationBarLoading();//关闭加载动画
				
			},
			toCompanyDetail:function(){
				let pupDefault = uni.getStorageSync('pupDefault')
				let companyCode = this.companyInfo.companyCode
				console.log(pupDefault)
				if (pupDefault=='SALES_DIRECTOR'){
					uni.navigateTo({
						url: `/pages/qing-f-c/sales_director/customer-details?companyCode=${companyCode}`,
						success: res => {},
						fail: (err) => {console.log(err)},
						complete: () => {}
					});
				}else if (pupDefault=='REGIONAL_MANAGER'){
					uni.navigateTo({
						url: `/pages/qing-f-c/regionalManager/customer-details?companyCode=${companyCode}`,
						success: res => {},
						fail: (err) => {console.log(err)},
						complete: () => {}
					});
				}else if (pupDefault=='BUY_DEPUTY'){
					uni.navigateTo({
						url: `/pages/qing-f-c/buyDupty/customer-details?companyCode=${companyCode}`,
						fail: (err) => {console.log(err)},
					});
				} else if (pupDefault=='SELL_DEPUTY'){
					uni.navigateTo({
						url: `/pages/qing-f-c/sellDupty/customer-details?companyCode=${companyCode}`,
						fail: (err) => {console.log(err)},
					});
				} 
				
			},
			AddFollow:function(){
				let pupDefault = uni.getStorageSync('pupDefault')
				if (pupDefault=='BUY_DEPUTY' || pupDefault=='SELL_DEPUTY'){
					uni.navigateTo({
						url: `./createCustomFollow?companyCode=${this.companyCode}&buyOrSellCode=${this.buyOrSellCode}`,
						
					});
				}
				else {
					uni.showToast({
						title: '身份不允许',
						icon:'none'
					});
				}
				
			},
			toDetail:function(e){
				   let pupDefault = uni.getStorageSync('pupDefault')
				   if (pupDefault=='BUY_DEPUTY' || pupDefault=='SELL_DEPUTY'){
				   	uni.navigateTo({
				   		url: `./buySellFollowDetail?recordCode=${e}&buyOrSellCode=${this.buyOrSellCode}`,
				   		
				   	});
				  
				   }else {
				   	  uni.navigateTo({
				   		url: `./followRecordDetail?recordCode=${e}&buyOrSellCode=${this.buyOrSellCode}`,
				   		
				   	  })
				   }
					
			}
		}
	}
</script>

<style lang="scss">
page{
	background: #F4F4F4;
	font-size: 14px;
	color: #333333;
}
.navTitle{
		color:#fff;
	    position:fixed;
		top:60upx;
		left:310upx;
		font-size:16px;
		z-index:99;
	}
.login_top{
	          height: 338upx;
	          width: 750upx;
	          box-sizing: border-box;
	          background-image:url('~@/static/images/qingfc/customer-back.png');
	          background-repeat:no-repeat;
	          background-position:center top;
	          background-size:cover;
	          text-align: center;
	   }
.hand_box{
	  margin: -200upx 30upx 0 30upx;
	  border-radius: 6upx;
	  background-color: #fff;
	}
.wrap-box{
	padding: 25upx;
	line-height: 35px;
}
.companyName{
	font-size: 16px;
	font-weight: bold;
	border-bottom: 1upx solid #F4F4F4;
	color: #4487FD;
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
.follow_point{
	width: 24upx;
	height: 24upx;
	border-radius: 50%;
	margin-top: 10upx;
}
.followTitle{
	font-size: 16px;
	color: #140F26;
	font-weight: bold;
}
.followContent{
	font-size: 14px;
	color: #333333;
}
.point{
	width: 8upx;
	height: 8upx;
	background: #FF6000;
	
}
.listWrap{
	display: flex;
	padding: 20upx;
	margin: 30upx;
	background: #FFFFFF;
	border-radius: 8upx;
	box-shadow:0px 4px 8px 0px rgba(0, 0, 0, 0.05);
}
.er_img{
  position: fixed;
  bottom: 200upx;
  right: 24upx;
  width: 84upx;
  height: 84upx;
  z-index: 99;
}

</style>
