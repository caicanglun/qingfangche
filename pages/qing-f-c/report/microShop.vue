<template>
	<view>
		<view class="login_top flex_column">
			<view class="backto" @tap="backto">返回</view>
			<view class="flex" style="padding-top: 120upx;padding-left: 30upx;" @tap="toClientDetail">
				<image src="/static/images/qingfc/application/company@2x.png" class="title_img" mode="aspectFit"></image>
				<view style="color:#fff;font-size: 16px;font-weight: bold;">{{customerList.companyName||''}}</view>
			</view>
			<view class="flex" style="padding-left: 35upx;color: #fff;font-size: 15px;">
				编号 <text style="padding-left: 20upx;">{{customerList.companyCode||''}}</text>
			</view>
		</view>
		
		<view class="hand_box">
			<view class="wrap-box">
				<view style="font-size:13px;color: #999;">本月数据：</view>
				<view style="padding: 20upx 0;line-height: 50upx;">
					<view class="flex_sb">
						<view style="width:25%;">
							<view class="flex_c_c labelTitle">成交金额</view>
							<view class="flex_c_c"><text class="numberFont">{{content2.totalMoney||0}}</text><text class="spanFont">元</text></view>
						</view>
						<view style="width:25%;">
							<view class="flex_c_c labelTitle">成交笔数</view>
							<view class="flex_c_c"><text class="numberFont">{{content2.orderCount||0}}</text><text class="spanFont">笔</text></view>
						</view>
						<view style="width:25%;">
							<view class="flex_c_c labelTitle">交易量</view>
							<view class="flex_c_c"><text class="numberFont">{{content2.meterNumber||0}}</text><text class="spanFont">万米</text></view>
						</view>
						
					</view>
					<view class="flex_sb" style="margin-top: 20upx;">
						<view style="width:25%;">
							<view class="flex_c_c labelTitle">潜在订单</view>
							<view class="flex_c_c"><text class="numberFont">{{content2.totalMoney||0}}</text><text class="spanFont">单</text></view>
						</view>
						<view style="width:25%;">
							<view class="flex_c_c labelTitle">常规询价</view>
							<view class="flex_c_c"><text class="numberFont">{{content2.orderCount||0}}</text><text class="spanFont">单</text></view>
						</view>
						<view style="width:25%;">
							<view class="flex_c_c labelTitle">找样询价</view>
							<view class="flex_c_c"><text class="numberFont">{{content2.meterNumber||0}}</text><text class="spanFont">单</text></view>
						</view>
						
					</view>
					<view class="flex_sb" style="margin-top: 20upx;">
						<view style="width:25%;">
							<view class="flex_c_c labelTitle">跟进记录</view>
							<view class="flex_c_c"><text class="numberFont">{{content2.totalMoney||0}}</text><text class="spanFont">条</text></view>
						</view>
						<view style="width:25%;">
							<view class="flex_c_c labelTitle">随口价</view>
							<view class="flex_c_c"><text class="numberFont">{{content2.orderCount||0}}</text><text class="spanFont">个</text></view>
						</view>
						<view style="width:25%;">
							
						</view>
						
					</view>
				</view>

			</view>
		</view>
		<view class="flex_c_c" style="margin-top: 30upx;">
			<view class="setTargetShow flex_c_c" v-if="targetAchievement.target>0">
				距离本月目标业绩还差<text style="color: #FF6000;">{{ parseInt(targetAchievement.target) - parseInt(targetAchievement.money)}}元</text>
			</view>
			<view class="setTargetNow flex_c_c" @tap="toInputTarget" v-else>
				马上设定本月目标>
			</view>
		</view>
		<view style="margin: 40upx 40upx;">
			<view class="flex_sb" style="line-height: 70upx;">
				<view class="flex_column" style="width: 20%;">
					<view class="flex_c_c">
						<image src="/static/images/qingfc/weidian/jianjie@2x.png" style="height: 54upx;width: 47upx;" mode="aspectFit"></image>
					</view>
					<view style="font-size: 14px;" class="flex_c_c">客户档案</view>
					
				</view>
				<view class="flex_column" style="width: 20%;">
					<view class="flex_c_c" >
						<image src="/static/images/qingfc/weidian/zichan@2x.png" style="height: 54upx;width: 47upx;" mode="aspectFit"></image>
					</view>
					<view style="font-size: 14px;" class="flex_c_c">产品库</view>
					
				</view>
				<view class="flex_column" style="width: 20%;">
					<view class="flex_c_c">
						<image src="/static/images/qingfc/weidian/baozhengjin@2x.png" style="height: 54upx;width: 47upx;" mode="aspectFit"></image>
					</view>
					<view style="font-size: 14px;" class="flex_c_c">保证金</view>
					
				</view>
				<view class="flex_column" style="width: 20%;">
					<view class="flex_c_c">
						<image src="/static/images/qingfc/weidian/kehugenjin@2x.png" style="height: 54upx;width: 47upx;" mode="aspectFit"></image>
					</view>
					<view style="font-size: 14px;" class="flex_c_c">客户跟进</view>
					
				</view>
				
			</view>
			<view class="flex_sb" style="line-height: 70upx;margin-top: 40upx;">
				<view class="flex_column" style="width: 20%;">
					<view class="flex_c_c">
						<image src="/static/images/qingfc/weidian/xunjia@2x.png" style="height: 54upx;width: 47upx;" mode="aspectFit"></image>
					</view>
					<view style="font-size: 14px;" class="flex_c_c">询价管理</view>
					
				</view>
				<view class="flex_column" style="width: 20%;">
					<view class="flex_c_c">
						<image src="/static/images/qingfc/weidian/qianzai@2x.png" style="height: 54upx;width: 47upx;" mode="aspectFit"></image>
					</view>
					<view style="font-size: 14px;" class="flex_c_c">潜在订单</view>
					
				</view>
				<view class="flex_column" style="width: 20%;">
					<view class="flex_c_c">
						<image src="/static/images/qingfc/weidian/jiaoyi@2x.png" style="height: 54upx;width: 47upx;" mode="aspectFit"></image>
					</view>
					<view style="font-size: 14px;" class="flex_c_c">交易管理</view>
					
				</view>
				<view class="flex_column" style="width: 20%;">
					<view class="flex_c_c">
						<image src="/static/images/qingfc/weidian/mubiao@2x.png" style="height: 54upx;width: 47upx;" mode="aspectFit"></image>
					</view>
					<view style="font-size: 14px;" class="flex_c_c">目标</view>
					
				</view>
				
			</view>
			<view style="font-size: 16px;font-weight: bold;margin-top: 30upx;">
				最新动态
			</view>
		</view>
		
	</view>
</template>

<script>
	
	export default {
		data() {
			return {
				customerList:'',
				targetAchievement: '',
				postCode:''
				
			};
		},
		onLoad:function(options){
			this.customerList = JSON.parse(options.data)
			this.fetchTargetAchievement()
			this.postCode = uni.getStorageSync('pupDefault')
		},
		onShow:function(){
			this.fetchTargetAchievement()
		},
		methods:{
			async fetchTargetAchievement(){
				let data ={
					companyCode: this.customerList.companyCode
				}
				const res = await this.$http.get('/cm/target',{data: data})
				this.targetAchievement = res.data.data
				console.log(res)
				
			},
			toInputTarget:function(){
				if (this.postCode =='BUY_DEPUTY' || this.postCode == 'SELL_DEPUTY'){
					uni.navigateTo({
						url: `./inputTarget?companyCode=${this.customerList.companyCode}`
					});
				} else {
					uni.showToast({
						title: '身份限制',
						icon: 'none',
						duration: 1000
					});
				}
				
			},
			backto:function(){
				uni.navigateBack({
					delta:  -1
				});
			},
			// 跳转到客户详情页
			toClientDetail: function () {
				let companyCode = this.customerList.companyCode
			    if (this.postCode == 'REGIONAL_MANAGER'){
					uni.navigateTo({
					  url: '/pages/qing-f-c/regionalManager/customer-details?companyCode=' + companyCode
					});
				}else if (this.postCode == 'BUY_DEPUTY'){
					uni.navigateTo({
					  url: '/pages/qing-f-c/buyDupty/customer-details?companyCode=' + companyCode
					});
				}else if (this.postCode == 'SELL_DEPUTY'){
					uni.navigateTo({
					  url: '/pages/qing-f-c/sellDupty/customer-details?companyCode=' + companyCode
					});
				}else if (this.postCode == 'SALES_DIRECTOR'){
					wx.navigateTo({
					  url: '/pages/qing-f-c/sales_director/customer-details?companyCode=' + companyCode
					});
				}
				
				
			  
			},
		}
		
	}
</script>

<style lang="scss">
	page{
		// background-color: #f4f4f4;
	}
.login_top{
	         
	          height: 438upx;
	          width: 750upx;
	          box-sizing: border-box;
	          background-image:url('~@/static/images/qingfc/customer-back.png');
	          background-repeat:no-repeat;
	          background-position:center top;
	          background-size:cover;
	          
	        }
	.hand_box{
	  margin: -200upx 30upx 0 30upx;
	  border-radius: 6upx;
	  line-height: 1;
	  background-color: #fff;
	  box-shadow:0px 10upx 10upx 0px rgba(0, 0, 0, 0.1);
	}
	.navTitle{
		color:#fff;
	    position:fixed;
		top:60upx;
		left:280upx;
		font-size:16px;
		z-index:99;
	}
	.wrap-box{
		padding-top: 20upx;
		padding-left: 24upx;
		padding-right: 20upx;
		font-size: 13px;
		display: flex;
		flex-direction: column;
		
	}
	.title_img{
		width: 32upx;
		height: 35upx;
		padding-left:10upx;
		padding-right: 20upx; 
	}
	.numberFont{
		font-size: 18px;
		font-weight: bold;
		color: #FF6000;
	}
	.spanFont{
		font-size: 13px;
		color: #FF6000;
	}
	.labelTitle{
		 font-size:15px;
		 color:#666666;
		 font-weight: bold;
	}
	.setTargetNow{
		width:320upx;
		height:56upx;
		border:3upx dashed rgba(255,102,0,1);
		border-radius:10upx;
		color: #FF6000;
		font-size: 17px;
		font-weight: 500;
	}
	.setTargetShow{
		width:500upx;
		height:56upx;
		
		border-radius:10upx;
		
		font-size: 17px;
		font-weight: 500;
	}
	// .setTarget111{
	// 	width:500upx;
	// 	height:56upx;
	// 	border-radius:10upx;
	// 	font-size: 17px;
	// 	font-weight: 500;
	// }
</style>
