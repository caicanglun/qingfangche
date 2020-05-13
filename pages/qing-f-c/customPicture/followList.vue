<template>
	<view>
		<block v-for="(item,index) in followList" :key="index" >
			<view style="margin: 20upx;background: #FFFFFF;height:140upx;" @tap="toDetail(item.recordCode)">
				<view style="padding: 20upx;">
					<view class="flex_c" style="height: 60upx;">
						<view class="point"></view>
						<view class="followTitle">{{item.title||''}}</view>
					</view>
					<view class="flex_c" style="height: 60upx;">
						
						<view class="followContent" style="width: 300upx;">联系人：{{item.realName||''}}</view>
						<view class="followContent" style="padding-left:25upx;">
							  {{item.createTime||''}}
						</view>
					</view>
				</view>
				
			</view>
		</block>
		
		<uniLoadMore :status="loadingType"></uniLoadMore>
		<view>
			<image src="/static/images/qingfc/addFollow.png" mode="aspectFit" class="er_img" @tap="AddFollow"></image>
		</view>
		
	</view>
</template>

<script>
	import uniLoadMore from "@/components/uni-load-more/uni-load-more.vue";
	let _this,timer;
	export default {
		components:{
			uniLoadMore
		},
		data() {
			return {
				loadingType: 'more',
				buyOrSellCode:'',
				buyOrSell:'',
				companyCode:'',
				followList:'',
				pageNum: 1,
				pageSize: 20,
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
		onLoad:function(options){
			_this = this
			console.log(options)
			let data = JSON.parse(options.data)
			this.companyCode = data.companyCode
			this.buyOrSellCode = data.buyOrSellCode
			this.buyOrSell = data.buyOrSell
			
			this.fetchList()
			
		},
		onShow:function(){
			
				this.fetchList()

		},
		methods:{
			async fetchList(){
				this.pageNum =1
				let data={
					companyCode: this.companyCode,
					pageNum:  this.pageNum,
					pageSize: this.pageSize,
				}
				const res = await this.$http.get('/portrayal/list',{data:data})
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
					companyCode: this.companyCode,
					pageNum:  this.pageNum,
					pageSize: this.pageSize,
				}
				const res = await this.$http.get('/portrayal/list',{data:data})
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
				// let pupDefault = uni.getStorageSync('pupDefault')
				let pupDefault = this.buyOrSell
				
				console.log(pupDefault)
				if (pupDefault==1){
					uni.navigateTo({
						url: `./followRecordDetail?recordCode=${e}`,
						
					});
				}else {
					uni.navigateTo({
						url: `./followRecordDetail?recordCode=${e}`,
						
					});
				}
				
			},
			AddFollow:function(){
				let pupDefault = uni.getStorageSync('pupDefault')
				if (pupDefault=='BUY_DEPUTY'){
					uni.navigateTo({
						url: `./createCustomFollow?companyCode=${this.companyCode}&buyOrSellCode=${this.buyOrSellCode}`,
						
					});
				}else if (pupDefault=='SELL_DEPUTY'){
					uni.navigateTo({
						url: `./createCustomFollow?companyCode=${this.companyCode}&buyOrSellCode=${this.buyOrSellCode}`,
						
					});
				}else {
					uni.showToast({
						title: '身份不允许',
						icon:'none'
					});
				}
				
			}
		}
	}
</script>

<style lang="scss">
page{
	background: #F4F4F4;
}
.point{
	width: 8upx;
	height: 8upx;
	background: #FF6000;
	
}
.followTitle{
	font-size: 16px;
	color: #140F26;
	padding-left: 10upx;
	font-weight: bold;
}
.followContent{
	font-size: 13px;
	color: #333333;
	padding-left: 18upx;
}

.er_img{
  position: fixed;
  bottom: 200upx;
  right: 24upx;
  width: 84upx;
  height: 84upx;
  z-index: 98;
}
</style>
