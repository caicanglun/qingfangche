<template>
	<view>
		<view style="background: #FFFFFF;margin: 30upx 15upx;padding: 24upx;border-radius: 8upx;">
			<view>
				<view class="flex_c" style="height: 50upx;justify-content: space-between;">
					<view>
						<text style="color:#8d8d8d;font-size:13px;">品名（别名）：</text><text>{{goodsDetail.tradeName||''}}</text>
					</view>
					<view class="ProductClipboard" @tap="copyProduct">复制</view>
				</view>
				<view class="flex_c" style="height: 50upx;">
					
					<text style="color:#8d8d8d;font-size:13px;">旺季时间：</text><text>{{goodsDetail.highSeasonTimeName||''}}</text>
				</view>
				<view class="flex_c" style="height: 50upx;justify-content: space-between;">
					<view>
						<text style="color:#8d8d8d;font-size:12px;">上架时间：{{goodsDetail.createTime||''}}</text>
					</view>
					<view>
						<view class="flex_c_c" v-if="goodsDetail.goodsStatusCode==2">
							<image src="/static/images/qingfc/shangjia.png" mode="aspectFit" style="width:140upx;height: 64upx;"></image>
						</view>
						<view class="flex_c_c" v-if="goodsDetail.goodsStatusCode==3">
							<image src="/static/images/qingfc/xiajia.png" mode="aspectFit" style="width:140upx;height: 64upx;"></image>
						</view>
					</view>
				</view>
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
		<view class="flex_c_c" v-if="goodsDetail.goodsStatusCode >= 2">
			<view class='recentPrice'  @tap="showModifyRecord(goodsDetail.goodsCode)">
				查看更新记录<uniIcon type="arrowright" size="16" color="#FF6000"></uniIcon>
			</view>
		</view>
		
		<view class='placeholder-view'></view>
		<view class="fixed_bottom box_shadow_btn" v-if="goodsDetail.operatingAuthorization">
			
		  <button class="btn_left" v-if="goodsDetail.goodsStatusCode==2" hover-class="none" @tap="soldOut">下架</button>
		  <button class="btn_left" v-if="goodsDetail.goodsStatusCode==3" hover-class="none" @tap="soldIn">重新上架</button>
		  
		  <button class="btn_right" v-if="goodsDetail.goodsStatusCode >= 2" @tap="submit" hover-class="none">更新产品</button>
		  <button class="btn_right_100" v-if="goodsDetail.goodsStatusCode == 1" @tap="toEdit" hover-class="none">修改</button>
		  
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
				goodsCode:'',
				goodsDetail:'',
				qualityPosition:[],
				
			};
		},
		onShow:function(){
			this.getGoodsDetail()
		},
		onLoad:function(options){
			_this = this
			this.goodsCode = options.goodsCode
			console.log(options)
			this.getGoodsDetail()
			this.getQualityPosition()
		},
		methods:{	
			async getQualityPosition(){
				const res = await this.$http.get("/choose/quality",{})
				console.log(res)
				this.qualityPosition = res.data.data.list
			},
			getGoodsDetail:function(){
				let url = _this.Api.goodsDetails
				let data ={
					goodsCode: _this.goodsCode,  // 产品编码 
				}
				uni.showLoading({
					title:'加载中',
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
			toEdit:function(){
				let data = JSON.stringify(_this.goodsDetail)
				let qualityPosition = JSON.stringify(this.qualityPosition)
				uni.navigateTo({
					url: `./editProduct?goodsDetail=${data}&qualityPosition=${qualityPosition}`,
					success: res => {},
					fail: (err) => { console.log(err)},
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
			},
			copyProduct:function(){
				let data = JSON.stringify(_this.goodsDetail)
				let qualityPosition = JSON.stringify(this.qualityPosition)
				uni.navigateTo({
					url: `./productCreateCopy?goodsDetail=${data}&qualityPosition=${qualityPosition}&companyCode=${this.goodsDetail.companyCode}&companyName=${this.goodsDetail.companyName}`
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
  .btn_right_100{
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
  .ProductClipboard{
  	text-align: center;
  	width: 80upx;
  	height: 40upx;
  	background-color: #FF6000;
  	color: white;
  	line-height: 40upx;
  	border-radius: 20upx;
  	
  }
</style>
