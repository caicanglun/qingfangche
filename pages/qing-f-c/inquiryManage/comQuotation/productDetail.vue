<template>
	<view>
		<view style="display: flex;background: #FFFFFF;margin: 30upx 15upx;padding: 24upx;border-radius: 8upx;">
			<view style="width:500upx;">
				<view class="flex_c" style="height: 50upx;">
					
					<text style="color:#8d8d8d;font-size:13px;">品名（别名）：</text><text>{{goodsDetail.tradeName||''}}</text>
				</view>
				<view class="flex_c" style="height: 50upx;">
					
					<text style="color:#8d8d8d;font-size:13px;">旺季时间：</text><text>{{goodsDetail.highSeasonTimeName||''}}</text>
				</view>
				<view class="flex_c" style="height: 50upx;">
					
					<text style="color:#8d8d8d;font-size:12px;">上架时间：{{goodsDetail.createTime||''}}</text>
				</view>
			</view>
			<view class="flex_c_c" v-if="goodsDetail.goodsStatusCode==2">
				<image src="/static/images/qingfc/shangjia.png" mode="aspectFit" style="width:140upx;height: 64upx;"></image>
			</view>
			<view class="flex_c_c" v-if="goodsDetail.goodsStatusCode==3">
				<image src="/static/images/qingfc/xiajia.png" mode="aspectFit" style="width:140upx;height: 64upx;"></image>
			</view>
		</view>
		<view style="background: #FFFFFF;margin: 30upx 15upx;padding: 24upx;border-radius: 8upx;">
			<chanpinyaosu :inquiryInfo="goodsDetail"></chanpinyaosu>
		</view>
		<view style="background: #FFFFFF;margin: 30upx 15upx;padding: 24upx;border-radius: 8upx;">
			<machineStatus :productInfo="goodsDetail"></machineStatus>
		</view>
		
		<view style="background: #FFFFFF;margin: 30upx 15upx;border-radius: 8upx;">
			<view class="photo-wrap">
				<view>布样照片</view>
				<view class="photo-flex-wrap">
					<block v-for="(item,index) in goodsDetail.pictures" :key="index">
					   <image :src="item" mode="aspectFill" class="image_sample" @tap="toBigPic(item)"></image>
					</block>
				</view>
				
			</view>
			
		</view>
		
		
		<view class='placeholder-view'></view>
		<view class="fixed_bottom box_shadow_btn">
			
		  <button class="btn_all" hover-class="none" @tap="startQuotation">发起报价</button>
		  
		</view>
		
	</view>
</template>

<script>
	import chanpinyaosu from "@/components/productShow/chanpinyaosu-show.vue"
	import machineStatus from "@/components/productShow/machineStatus.vue"
	import uniIcon from "@/components/uni-icons/uni-icons.vue";
	let _this
	export default {
		components:{
			chanpinyaosu,
			machineStatus,
			uniIcon
		},
		data() {
			return {
				buyOrSellCode:'',
				goodsCode:'',
				goodsDetail:''
			};
		},
		onShow:function(){
			this.getGoodsDetail()
		},
		onLoad:function(options){
			_this = this
			this.goodsCode = options.goodsCode
			this.buyOrSellCode = options.buyOrSellCode
			this.getGoodsDetail()
		},
		methods:{	
			getGoodsDetail:function(){
				let url = _this.Api.goodsDetails
				let data ={
					goodsCode: _this.goodsCode,  // 产品编码 
				}
				uni.showLoading({
					title:'提交中',
					mask: true
				})
				this.myRequest(data,url,'get').then(res => {
				      console.log(res)
					  if(res.data.status==0){
						  uni.hideLoading()
						  _this.goodsDetail = res.data.data
						  console.log(_this.goodsDetail)
					  }
					  
				}).catch(err => {
				  wx.showToast({
				    title: err.data.errMsg,
				    icon: 'none'
				  });
				});
			},
			toBigPic:function(src){
				
				// this.src = src
				// this.$refs.bigimage.show()
				uni.previewImage({
					urls: [src],
					success:function(){
						console.log('正在预览中')
					},
					fail:function(){
						
					},
					complete:function(){
						
					}
				})
				
			},
			showModifyRecord:function(e){
				uni.navigateTo({
					url: './updateRecord?goodsCode='+e,
					success: res => {},
					fail: (err) => { console.log(err)},
					complete: () => {}
				});
			},
			soldOut:function(){
			    uni.showModal({
			    	title: '提示',
			    	content: '确认是否下架',
			    	showCancel: true,
			    	cancelText: '取消',
			    	confirmText: '下架',
			    	success: res => {
						if (res.confirm){
							let url = _this.Api.soldOut
							let data ={
								goodsCode: _this.goodsCode,  // 产品编码 
							}
							uni.showLoading({
								title:'提交中',
								mask: true
							})
							this.myRequest(data,url,'get').then(res => {
							      console.log(res)
								  if(res.data.status==0){
									  uni.hideLoading()
									  this.getGoodsDetail()
								  }
								  
							}).catch(err => {
							  wx.showToast({
							    title: err.data.errMsg,
							    icon: 'none'
							  });
							});
						}
					},
			    	fail: () => {},
			    	complete: () => {}
			    });
				
				
			},
			soldIn:function(){
				let url = _this.Api.soldOut
				let data ={
					goodsCode: _this.goodsCode,  // 产品编码 
				}
				uni.showLoading({
					title:'提交中',
					mask: true
				})
				this.myRequest(data,url,'get').then(res => {
				      console.log(res)
					  if(res.data.status==0){
						  uni.hideLoading()
						  this.getGoodsDetail()
					  }
					  
				}).catch(err => {
				  wx.showToast({
				    title: err.data.errMsg,
				    icon: 'none'
				  });
				});
			},
			startQuotation:function(){
				uni.navigateTo({
					url: './startQuotation?goodsCode='+_this.goodsCode+'&buyOrSellCode='+this.buyOrSellCode,
					success: res => {},
					fail: (err) => {console.log(err)},
					complete: () => {}
				});
			},
			submit:function(){
				let data = JSON.stringify(_this.goodsDetail)
				uni.navigateTo({
					url: './productUpdate?goodsDetail='+ data,
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
	  font-size: 13px;
	  
  }
  .fixed_bottom{
    width: 750upx;
    position: fixed;
    bottom: 0;
    display: flex;
    z-index: 999;
  }
  .btn_left{
    width: 50%;
    background-color: #fff;
    color: #FF6000;
    border-radius: 0;
    font-size: 16px;
    line-height: 98upx;
  }
  .btn_right{
    width: 50%;
    background-color: #FF6000;
    color: #fff;
    border-radius: 0;
    font-size: 16px;
    line-height: 98upx;
  }
  .btn_all{
	 width: 100%;
	 background-color: #FF6000;
	 color: #fff;
	 border-radius: 0;
	 font-size: 16px;
	 line-height: 98upx; 
  }
  .recentPrice{
  	display: flex;
  	justify-content: center;
  	align-items: center;
  	border: 1upx solid #FF6000;
  	color: #FF6000;
  	height: 60upx;
  	width: 324upx;
  	border-radius: 30upx;
  	font-size: 14px;
    margin-bottom: 20upx;
  }
  .photo-box{
  	margin: 20upx 30upx 0 30upx;
  	border-radius: 8upx;
  	line-height: 1;
  	background-color: #fff; 
  	height: 320upx;
  }
  .photo-wrap{
  	padding-top: 30upx;
  	padding-left: 20upx;
  	font-size: 14px;
  	
  }
  .photo-flex-wrap{
  	display: flex;
  	flex-wrap: wrap;
  	
  }
  .image_sample{
  	width: 200upx;
  	height: 200upx;
  	margin-top: 20upx;
  }
</style>
