<template>
	<view>
		
			<view style="margin: 20upx 30upx 20upx 30upx;" v-if="pictures.length!=0">
					<swiper class="swiper" indicator-dots="true" autoplay="true" :interval="interval">
						<block v-for="(item,index) in pictures" :key="index">
							<swiper-item>
								<image :src="item.label" style="width:690upx;height:500upx;" mode="aspectFill"></image>
							</swiper-item>
						</block>
						
						
					</swiper>
		    </view>
			
			<view style="background: #FFFFFF;margin: 0 20upx;position:relative;border-radius: 8upx;">
				  <view class="flex_c_c" style="height:65upx;border-radius: 6upx;">
					  <text style="font-size:16px;font-weight: bold;">经营状况</text>
					  <faIcon type='pencil-square-o' v-if="operatingAuthorization" @tap="editCondition" size='24' class="icon-class" color="#ff6000"></faIcon>
				  </view>
				  <view style="border-bottom: 1upx solid #F4F4F4;display: flex;margin-top:10pux;">
					  <view style="width:220upx;padding-left:22upx;display: flex;align-items: center;">
						  <text style='font-size:13px;color: #8d8d8d;'>主营产品类型：</text>
					  </view>
					  <view style='width: 460upx;display: flex;flex-wrap: wrap;'>
						  <text style="font-size:13px;">{{mainProductContent}}</text>
					  </view>
				
				  </view>
				  <view style="border-bottom: 1upx solid #F4F4F4;display: flex;padding-top:20upx;">
						  <view style="width:220upx;padding-left:22upx;display: flex;align-items: center;">
							  <text style='font-size:13px;color: #8d8d8d;'>主营产品系列：</text>
						  </view>
						  <view style='width: 460upx;display: flex;flex-wrap: wrap;'>
							  <text style="font-size:13px;">{{seriesListContent}}</text>
						  </view>
				  				
				  </view>
				  <view style="border-bottom: 1upx solid #F4F4F4;display: flex;padding-top:20upx;">
						  <view style="width:220upx;padding-left:22upx;display: flex;align-items: center;">
							  <text style='font-size:13px;color: #8d8d8d;'>织机信息：</text>
						  </view>
						  <view style='width: 460upx;display: flex;flex-wrap: wrap;'>
							  <text style="font-size:13px;">{{weavingMachineListContent}}</text>
						  </view>
				  				
				  </view>
				 
			</view>
			
			
			<view style="background: #FFFFFF;margin:20upx 20upx;">
				<uni-collapse ref="add" class="warp" @change="change">
					<uni-collapse-item v-for="(sub, key) in serial" :key="key" :open="sub.open" :show-animation="sub.showAnimation" :disabled="sub.disabled" :title="sub.subName">
						
						<uni-list>
							 <uni-list-item v-for="(list, listIndex) in sub.subList" :key="listIndex" :title="list.title" :note="list.note" :isHaveRight="operatingAuthorization" :goodsStatus="list.goodsStatus" :thumb="list.thumb" :show-extra-icon="list.showExtraIcon" :extra-icon="list.extraIcon" :show-switch="list.showSwitch" @switchChange="change" @swClick="handleClick(list.goodsCode,$event)" @click="toDetail(list.goodsCode)" />
						</uni-list>

					</uni-collapse-item>
				</uni-collapse>
			</view>
			
			<view class='placeholder-view'></view>
			<view v-if="operatingAuthorization" class="new_build font_we_bold box_shadow_btn child1" @tap="toNewBuild">
			  <view>添加</view>
			  <view>产品</view>
			</view>
	</view>
</template>

<script>
	let _this
	import uniCollapse from '@/components/uni-collapse/uni-collapse.vue'
	import uniCollapseItem from '@/components/uni-collapse-item/uni-collapse-item.vue'
	import uniList from '@/components/uni-list/uni-list.vue'
	import uniListItem from '@/components/uni-list-item/uni-list-item.vue'
	import faIcon from "@/components/kilvn-fa-icon/fa-icon.vue"
	import uniSwipeAction from '@/components/uni-swipe-action/uni-swipe-action.vue'
	export default {
		components:{
			uniCollapse,
			uniCollapseItem,
			uniList,
			uniListItem,
			faIcon,
			uniSwipeAction
		},
		data() {
			return {
				 operatingAuthorization:'',
				 pictures:'',
				 companyCode:'',
				 interval: 3000, 
				 mainProductList:'', //产品类型
				 mainProductContent:'',  //类型合并
				 seriesList:'', //产品系列
				 seriesListContent:'', //产品系列合并
				 weavingMachineList:'', //织布机列表
				 weavingMachineListContent:'' ,//织布机合并
				 
				 serial:[],
				 serialBack:[{
				 	
				 	subName: '春亚纺系列',
				 					open: false,
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
				    }
				 
				 ],
			};
		},
		onNavigationBarButtonTap:function(e) {
			
			uni.navigateTo({
				url: '/pages/qing-f-c/productShow/companyPictureEdit?companyCode='+ this.companyCode,
				success: res => {},
				fail: (err) => { console.log(err)},
				complete: () => {}
			});		
		},
		onLoad:function(options){
			_this = this
			this.companyCode = options.companyCode
			console.log(this.companyCode)
			this.getPictureList()
			this.getManageMachineList()
			this.getGoodsList()
		},
		onShow:function(){
			this.getPictureList()
			this.getManageMachineList()
			this.getGoodsList()
		},
		methods:{
			getGoodsList:function(){
				let url = _this.Api.goodsList
				let data ={
					companyCode: _this.companyCode,  // 公司编码 
				}
				this.myRequest(data,url,'get').then(res => {
				      console.log(res)
					  _this.serial = res.data.data.list
				}).catch(err => {
				  wx.showToast({
				    title: err.data.errMsg,
				    icon: 'none'
				  });
				});
			},
			getManageMachineList:function(){
				let url= this.Api.manageProfile
				let data={
					companyCode:_this.companyCode
				}
				this.myRequest(data,url,'get').then(res => {
					console.log(res);
					if (res.data.status==0){
						_this.mainProductContent= ''
						_this.seriesListContent = ''
						_this.weavingMachineListContent =''
						//操作权限
						_this.operatingAuthorization = res.data.data.operatingAuthorization
						//类型内容合并
			            _this.mainProductList = res.data.data.mainProductList
						_this.mainProductList.forEach((item)=>{
							_this.mainProductContent = _this.mainProductContent+ item.label+'、'
						})
						_this.mainProductContent = _this.mainProductContent.substring(0,_this.mainProductContent.length-1)
						//系列内容合并
						_this.seriesList = res.data.data.seriesList
						_this.seriesList.forEach((item)=>{
							_this.seriesListContent = _this.seriesListContent+ item.label+'、'
						})
						_this.seriesListContent = _this.seriesListContent.substring(0,_this.seriesListContent.length-1)
						//织布机内容合并
						_this.weavingMachineList = res.data.data.weavingMachineList
						_this.weavingMachineList.forEach((item)=>{
							_this.weavingMachineListContent = _this.weavingMachineListContent+ item.machineName+' '+item.machineCount+'台'+','
						})
						_this.weavingMachineListContent = _this.weavingMachineListContent.substring(0,_this.weavingMachineListContent.length-1)
			
					}
						
				 }).catch(err => {
						wx.showToast({
						  title: err.data.errMsg,
						  icon: 'none'
						});
				});
			},
			getPictureList:function(){
				let url = _this.Api.slideshow
				let data ={
					companyCode: _this.companyCode,  // 公司编码 
				}
				this.myRequest(data,url,'get').then(res => {
				      console.log(res)
					  _this.pictures = res.data.data.idLabels
				}).catch(err => {
				  wx.showToast({
				    title: err.data.errMsg,
				    icon: 'none'
				  });
				});
			},
			toEditPic:function(){
				uni.navigateTo({
					url: '/pages/qing-f-c/productShow/companyPictureEdit?companyCode='+ this.companyCode,
					success: res => {},
					fail: (err) => { console.log(err)},
					complete: () => {}
				});		
			},
			handleClick:function(index,e){
				console.log(index)
				console.log(e)
				if (e.index == 0){
					uni.showToast({
						title: '开发中',
						icon: 'none',
						duration: 1000
					});
				}
				if (e.index ==1){
					uni.showModal({
						title: '提示',
						content: '确认删除该产品吗？',
						showCancel: true,
						cancelText: '取消',
						confirmText: '确认',
						success: res => {
							console.log(res)
							if (res.confirm){
								let url = _this.Api.goodsDel
								let data ={
									goodsCodes: [index],  // 产品编码 
								}
								uni.showLoading({
									title:'提交中',
									mask: true
								})
								this.myRequest(data,url,'post').then(res => {
								      console.log(res)
									  if(res.data.status==0){
										  uni.hideLoading()
										  this.getGoodsList()
									  }
									  
								}).catch(err => {
								  wx.showToast({
								    title: err.data.errMsg,
								    icon: 'none'
								  });
								});
							}
							
						},
						fail: (err) => { console.log(err)},
						complete: () => {}
					});
				}
			},
			toNewBuild:function(){
				uni.navigateTo({
					url: '/pages/qing-f-c/productShow/product-created?companyCode='+_this.companyCode,
					success: res => {},
					fail: (err) => {console.log(err)},
					complete: () => {}
				});
			},
			toDetail:function(e){
				uni.navigateTo({
					url: './productDetail?goodsCode='+ e,
					success: res => {},
					fail: (err) => {console.log(err)},
					complete: () => {}
				});
			},
			editCondition:function(){
				uni.navigateTo({
					url: '/pages/qing-f-c/productShow/manageConditionEdit?companyCode='+ _this.companyCode,
					success: res => {},
					fail: (err) => {console.log(err)},
					complete: () => {}
				});
			},
			change:function(e){
				console.log(e)
			}
		}
	}
</script>

<style lang="scss">
  page{
	  background: #F4F4F4;
	  color: #333333;
  }
  .icon-class{
	  position: absolute;
	  right: 10upx;
	  top: 10upx;
  }
  .uni-media-list {
  	padding: 22upx 30upx;
  	box-sizing: border-box;
  	display: flex;
  	width: 100%;
  	flex-direction: row;
  }
  .uni-list {
  	background-color: #FFFFFF;
  	position: relative;
  	width: 100%;
  	display: flex;
  	flex-direction: column;
  }
  .uni-list-cell {
  	position: relative;
  	display: flex;
  	flex-direction: row;
  	justify-content: space-between;
  	align-items: center;
  }
  .uni-list-cell-hover {
  	background-color: #eee;
  }
  .uni-list-cell-pd {
  	padding: 22upx 30upx;
  }
  .uni-list-cell-left {
  	font-size:28upx;
  	padding: 0 30upx;
  }
  .uni-list-cell-db,
  .uni-list-cell-right {
  	flex: 1;
  }
  .uni-list-cell::after {
  	position: absolute;
    z-index: 3;
  	right: 0;
  	bottom: 0;
  	left: 30upx;
  	height: 1px;
  	content: '';
  	-webkit-transform: scaleY(.5);
  	transform: scaleY(.5);
  	background-color: #c8c7cc;
  }
  .uni-list .uni-list-cell:last-child::after {
  	height: 0upx;
  }
  .uni-list-cell-last.uni-list-cell::after {
  	height: 0upx;
  }
  .uni-list-cell-divider {
  	position: relative;
  	display: flex;
  	color: #999;
  	background-color: #f7f7f7;
  	padding:15upx 20upx;
  }
  .uni-list-cell-divider::before {
  	position: absolute;
  	right: 0;
  	top: 0;
  	left: 0;
  	height: 1px;
  	content: '';
  	-webkit-transform: scaleY(.5);
  	transform: scaleY(.5);
  	background-color: #c8c7cc;
  }
  .uni-list-cell-divider::after {
  	position: absolute;
  	right: 0;
  	bottom: 0;
  	left: 0upx;
  	height: 1px;
  	content: '';
  	-webkit-transform: scaleY(.5);
  	transform: scaleY(.5);
  	background-color: #c8c7cc;
  }
  .uni-list-cell-navigate {
  	font-size:30upx;
  	padding: 22upx 30upx;
  	line-height: 48upx;
  	position: relative;
  	display: flex;
  	box-sizing: border-box;
  	width: 100%;
  	flex: 1;
  	justify-content: space-between;
  	align-items: center;
  }
  .uni-list-cell-navigate {
  	padding-right: 36upx;
  }
  .uni-navigate-badge {
  	padding-right: 50upx;
  }
  .uni-list-cell-navigate.uni-navigate-right:after {
  	font-family: uniicons;
  	content: '\e583';
  	position: absolute;
  	right: 24upx;
  	top: 50%;
  	color: #bbb;
  	-webkit-transform: translateY(-50%);
  	transform: translateY(-50%);
  }
  .uni-list-cell-navigate.uni-navigate-bottom:after {
  	font-family: uniicons;
  	content: '\e581';
  	position: absolute;
  	right: 24upx;
  	top: 50%;
  	color: #bbb;
  	-webkit-transform: translateY(-50%);
  	transform: translateY(-50%);
  }
  .uni-list-cell-navigate.uni-navigate-bottom.uni-active::after {
  	font-family: uniicons;
  	content: '\e580';
  	position: absolute;
  	right: 24upx;
  	top: 50%;
  	color: #bbb;
  	-webkit-transform: translateY(-50%);
  	transform: translateY(-50%);
  }
  .uni-collapse.uni-list-cell {
  	flex-direction: column;
  }
  .uni-list-cell-navigate.uni-active {
  	background: #eee;
  }
  .uni-list.uni-collapse {
  	box-sizing: border-box;
  	height: 0;
  	overflow: hidden;
  }
  .uni-collapse .uni-list-cell {
  	padding-left: 20upx;
  }
  .uni-collapse .uni-list-cell::after {
  	left: 52upx;
  }
  .uni-list.uni-active {
  	height: auto;
  }
  .uni-pull-right>.uni-media-list-logo {
  	margin-right: 0upx;
  	margin-left: 20upx;
  }
  .uni-media-list-logo {
  	height: 84upx;
  	width: 84upx;
  	margin-right: 20upx;
  }
  .uni-media-list-logo image {
  	height: 100%;
  	width: 100%;
  }
  .uni-media-list-body {
  	height: 84upx;
  	display: flex;
  	flex: 1;
  	flex-direction: column;
  	justify-content: space-between;
  	align-items: flex-start;
  	overflow: hidden;
  }
  .uni-media-list-text-top {
  	width: 100%;
  	line-height: 36upx;
  	font-size: 30upx;
  }
  .uni-media-list-text-bottom {
  	width: 100%;
  	line-height: 30upx;
  	font-size: 26upx;
  	color: #8f8f94;
  }
  /* 文本溢出隐藏 */
  .uni-ellipsis {overflow: hidden; white-space: nowrap; text-overflow: ellipsis;}
  .new_build{
    position: fixed;
    right: 23rpx;
    width: 100rpx;
    height: 100rpx;
    border-radius: 100%;
    box-sizing: border-box;
    text-align: center;
    color: #fff;
  	padding-top:20rpx; 
    background-color: #FF6000;
    font-size: 26rpx;
  	line-height: 1.1;
	z-index: 999;
  }
  .child1{
  	bottom:150upx;
  }
  .warp{
	  border-radius: 8upx;
  }
</style>
