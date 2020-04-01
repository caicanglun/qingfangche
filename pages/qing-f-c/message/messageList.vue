<template>
	<view>
		<block v-for="(item,index) in message" :key="index" v-if="message.length > 0">
		  <view style="margin-top: 20upx;background: #FFFFFF;">
			  <uniSwipeAction :options="options2" @click="bindClick(item.messageCode,$event)">
			  	<view @tap="toDeail(item)">
			  		<view style="padding:20upx;">
			  			<view class="flex_sb" style="align-items: center;height:46upx;">
			  				<view style="font-size:16px;color:#333333;font-weight: bold;">{{item.messageTitle}}</view>
			  				<view style="font-size:11px;color:#999999;">{{item.createTime}}</view>
			  			</view>
			  			<view class="flex_sb" style="align-items: center;height:46upx;">
			  				<view class="cont_text">{{item.messageDetails}}</view>
			  				<view class="redpoint" v-if="item.isRead == 0"></view>
			  			</view>
			  		</view>
			  
			  	</view>
			  </uniSwipeAction>
		  </view>
			
		</block>
		<uniLoadMore :status="loadingType"></uniLoadMore>


	</view>
</template>

<script>
	import uniSwipeAction from '@/components/uni-swipe-action/uni-swipe-action.vue'
	import uniLoadMore from "@/components/uni-load-more/uni-load-more.vue";
	let _this, timer
	export default {
		components: {
			uniSwipeAction,
			uniLoadMore
		},
		data() {
			return {
				loadingType: 'more',
				message: [],
				options2: [{
					text: '删除',
					style: {
						backgroundColor: '#FF6000'
					}
				}],
				pageNum: 1
			};
		},
		onReachBottom: function() {
			if (timer != null) {
				clearTimeout(timer);
			}
			timer = setTimeout(function() {
				_this.getMoreMessage();
			}, 1000);
		},
		onPullDownRefresh: function() {

			this.getMessage();
		},
		onLoad: function() {
			_this = this
			this.getMessage()
		},
		onShow: function() {
			this.getMessage()
		},
		methods: {
			getMoreMessage: function() {
				if (_this.loadingType !== 'more') { //loadingType!=0;直接返回
					return false;
				}
				_this.loadingType = 'loading';
				uni.showNavigationBarLoading(); //显示加载动画
				let url = this.Api.noReadList
				let data = {
					pageNum: _this.pageNum,
					pageSize: 20
				}
				this.myRequest(data, url, 'post').then(res => {
					if (res.data.data.list.length == 0) { //没有数据
						console.log("no data")
						_this.loadingType = '';
						uni.hideNavigationBarLoading(); //关闭加载动画
						return;
					}
					_this.pageNum++; //每触底一次 page +1

					_this.message = _this.message.concat(res.data.data.list)
					_this.loadingType = 'more'; //将loadingType归0重置
					uni.hideNavigationBarLoading(); //关闭加载动画

				}).catch(err => {
					wx.showToast({
						title: err.data.errMsg,
						icon: 'none'
					});
				});
			},
			getMessage: function() {
				_this.pageNum = 1
				_this.loadingType = 'more';
				uni.showNavigationBarLoading();
				uni.showLoading({
					title: '加载中',
					mask: true
				})
				let url = this.Api.noReadList
				let data = {
					pageNum: _this.pageNum,
					pageSize: 20
				}
				this.myRequest(data, url, 'post').then(res => {
					console.log(res)
					if (res.data.status == 0) {
						uni.hideLoading()
						_this.pageNum++;

						_this.message = res.data.data.list
					}

				}).catch(err => {
					wx.showToast({
						title: err.data.errMsg,
						icon: 'none'
					});
				});
				uni.hideNavigationBarLoading();
				uni.stopPullDownRefresh(); //得到数据后停止下拉刷新
			},
			bindClick(messageCode, e) {
				console.log(messageCode)
				console.log(e)
				if (e.index == 0) {
					let url = this.Api.delReadList
					let data = {
						messageCode: messageCode
					}
					this.myRequest(data, url, 'get').then(res => {
						console.log(res)
						if (res.data.status == 0) {
							uni.showToast({
								title: '删除成功',
								icon: 'none',
								duration: 1000
							})
							setTimeout(function() {
								_this.getMessage()
							}, 2000);

						}

					}).catch(err => {
						wx.showToast({
							title: err.data.errMsg,
							icon: 'none'
						});
					});
				}
			},
			getMessageDetail:function(messageCode){
				let url = this.Api.DetailReadList
				let data = {
					messageCode: messageCode
				}
				this.myRequest(data,url,'get').then(res => {
				   
				}).catch(err => {
				  wx.showToast({
				    title: err.data.errMsg,
				    icon: 'none'
				  });
				});
			},
			toDeail: function(item) {
				if (item.isRead == 0){
					if (plus.os.name.toLowerCase() == 'ios') {
						console.log("heerer")
						 var UIApplication = plus.ios.import("UIApplication");  
						 var app = UIApplication.sharedApplication();  
						 //获取应用图标的数量  
						 
						var oldNum = app.applicationIconBadgeNumber();  
						console.log("oldNUM",oldNum)
						if (oldNum >0){
							var newNum = oldNum - 1;
							
							 plus.runtime.setBadgeNumber(newNum);
							//导入个推原生类
							 var GeTuiSdk = plus.ios.importClass("GeTuiSdk");
							 GeTuiSdk.setBadge(newNum);
						}
					}
				}
				
				
				let identity = uni.getStorageSync('pupDefault')
				this.getMessageDetail(item.messageCode)
				switch (identity){
					case 'SELL_DEPUTY':
					    if (item.messageType ==1){
					    	uni.navigateTo({
					    		url: `/pages/qing-f-c/inquiryManage/sellDeputy/inquiry-details?inquiryNumber=${item.orderNum}`,
					    		
					    	});
					    } else if (item.messageType == 2){
							uni.navigateTo({
								url:`/pages/qing-f-c/inquiryManage/sampleInquiry/sellDeputy/inquiry-details?inquiryNumber=${item.orderNum}`
							})
						}else if (item.messageType == 3){
							uni.navigateTo({
								url:`/pages/qing-f-c/inquiryManage/sellDeputy/inquiry-details?inquiryNumber=${item.orderNum}`
							})
						}
						else if (item.messageType == 4){
							uni.navigateTo({
								url:`/pages/qing-f-c/inquiryManage/sampleInquiry/sellDeputy/inquiry-details?inquiryNumber=${item.orderNum}`
							})
						}
					    break;
					case 'BUY_DEPUTY':
					    if (item.messageType ==1){
					    	uni.navigateTo({
					    		url: `/pages/qing-f-c/inquiryManage/inquiry-details?inquiryNumber=${item.orderNum}`,
					    		
					    	});
					    } else if (item.messageType ==2){
							uni.navigateTo({
								url: `/pages/qing-f-c/inquiryManage/sampleInquiry/buyDeputy/inquiry-details?inquiryNumber=${item.orderNum}`,
								
							});
						}else if (item.messageType ==3){
							uni.navigateTo({
								url: `/pages/qing-f-c/inquiryManage/quotedPrice/quotedPrice?quoteNumber=${item.orderNum}`,
								
							});
						}else if (item.messageType ==4){
							uni.navigateTo({
								url: `/pages/qing-f-c/inquiryManage/sampleInquiry/buyDeputy/quotationDetails/quotationDetails?number=${item.orderNum}`,
								
							});
						}		
					    break;
					case 'SALES_DIRECTOR':
					    uni.navigateTo({
					    	url: `/pages/qing-f-c/inquiryManage/sales_director/quotation-detail?quoteNumber=${item.orderNum}`,
					    	
					    });
					    break;
					case 'REGIONAL_MANAGER':
					  
					    break;
				}
                
				if (item.messageType ==6){
					uni.navigateTo({
						url: './messageDetail?messageCode=' + item.messageCode,
						success: res => {},
						fail: (err) => {
							err
						},
						complete: () => {}
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
	.redpoint {
		background-color: red;
		height: 16upx;
		width: 16upx;
		border-radius: 50%;
	}

	.cont_text {
		color: #666666;
		// max-height: 130upx;
		font-size: 13px;
		width: 90%;
		overflow: hidden;
		word-break: break-all;
		/* break-all(允许在单词内换行。) */
		text-overflow: ellipsis;
		/* 超出部分省略号 */
		display: -webkit-box;
		/** 对象作为伸缩盒子模型显示 **/
		-webkit-box-orient: vertical;
		/** 设置或检索伸缩盒对象的子元素的排列方式 **/
		-webkit-line-clamp: 1;
		/** 显示的行数 **/

	}
</style>
