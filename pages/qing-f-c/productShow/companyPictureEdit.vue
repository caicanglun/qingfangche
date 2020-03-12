<template>
	<view>
		<view class="uploadFile list_right_content">
			 <view><text class="fs_14;">公司图片</text><text class="smallFont">（最多可上传9张）</text></view>
			 <view class="flex_wrap">
				 <block v-for="(item,index) in pictures" :key="index">
					 <view style="position:relative">
						 <image :src="item.label" mode="aspectFill" class="picture_style"></image>
						 <!-- <uniIcon type="minus-filled" class="widgit" color="#FF6000" size="24" @tap="delPic(item.id)"></uniIcon> -->
						 <view class="widgit flex_c_c" @tap="delPic(item.id)">一</view>
					 </view>
				 </block>
				  <view class="IconStyle" @tap="pickImage">
				 	 <view class="iconCenter">
				 		 
				 		 <view>
				 			 <uniIcon type="plus" color="#CECECE" size="30"></uniIcon>
				 		 </view>
				 		 <view style="margin-top: -40upx;"><text style="font-size:14px;color:#B1B1B1;">添加图片</text></view>
				 	 </view>
				  </view>
			 </view>
		</view>
		
		<view class='placeholder-view'></view>
			
		  
		<!-- <view class="fixed_bottom box_shadow_btn">
		  <button class="btn_left" hover-class="none" @tap="bindCancel">取消</button>
		  <button class="btn_right" @tap="submit" hover-class="none">确定</button>
		</view> -->
	</view>
</template>

<script>
	import uniIcon from "@/components/uni-icons/uni-icons.vue";
	
	let _this
	export default {
		components:{
			uniIcon,
			
		},
		data() {
			return {
				companyCode:'',
				pictures:[]
			};
		},
		onShow:function(){
			this.getPictureList()
		},
		onLoad:function(options){
			_this = this
			console.log(options)
			this.companyCode = options.companyCode
			this.getPictureList()
		},
		methods:{
			
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
			delPic:function(index){
				console.log('wfefe')
				let url = _this.Api.slideshowDel
				let data ={
					
					pictureCode: index         // 图片路径
				    
				}
				this.myRequest(data,url,'get').then(res => {
				      console.log(res)
					  if (res.data.status==0){
					  	  _this.getPictureList()
					  }
				}).catch(err => {
				  wx.showToast({
				    title: err.data.errMsg,
				    icon: 'none'
				  });
				});
			},
			submit:function(picture){
				let url = _this.Api.slideshowAdd
				let data ={
					companyCode: _this.companyCode,  // 公司编码
					pictures: [picture]         // 图片数组

				}
				this.myRequest(data,url,'post').then(res => {
				      console.log(res)
					  if (res.data.status==0){
						  _this.getPictureList()
					  }
				}).catch(err => {
				  wx.showToast({
				    title: err.data.errMsg,
				    icon: 'none'
				  });
				});
			},
			bindCancel:function(){
				uni.navigateBack({
					delta: 1
				});
			},
			pickImage:function(){
						  uni.chooseImage({
							  sizeType: ['compressed'],
						      success: (chooseImageRes) => {
						          const tempFilePaths = chooseImageRes.tempFilePaths;
			                      _this.pictures = []
								  for (let i=0 ;i<tempFilePaths.length;i++){
									  uni.uploadFile({
									      url: _this.Api.upload, 
										  filePath: tempFilePaths[i],
										  name:'file',
									      success: (uploadFileRes) => {
									          console.log(uploadFileRes);	
											  // _this.pictures.push(JSON.parse(uploadFileRes.data).data.msg)
											  _this.submit(JSON.parse(uploadFileRes.data).data.msg)
											  uni.showToast({
											  	title: '上传成功',
												icon:'none',
												duration: 1000
											  });
									      }
									  });
								  }

						      }
						  });
			},
		}
	}
</script>

<style lang="scss">
	.flex_wrap{
		display: flex;
		flex-wrap: wrap;
	}
	.widgit{
		font-size: 13px;
		position: absolute;
		background-color: #ff0000;
		color: #ffffff;
		line-height: 40upx;
		width: 40upx;
		height: 40upx;
		border-radius: 50%;
		right: -5upx;
		top: -30upx;
	}
	.list_right_content{
		margin: 0 20upx;
		padding:0 10upx;
		line-height: 87upx;
		border-bottom: 1upx solid rgba(221, 221, 221, 0.3);
	}
  .uploadFile{
  	display: flex;
  	flex-direction: column;
  	margin-bottom: 100upx;
  	
  }
  .IconStyle {
	// padding-left: 40upx;
	margin-left: 30upx;
  	height: 180upx;
  	width: 180upx;
  	display: flex;
  	justify-content: center;
  	align-items: center;
  	background: #EFEFEF;
  	
  }
  .iconCenter{
  	display: flex;
  	flex-direction: column;
  	align-items: center;
  	height: 100upx;
  }
  .smallFont{
      color: #999999;
  	font-size: 12px;
  }
  .picture_style{
  	margin: 0upx 20upx;
  	width: 180upx;
  	height: 180upx;
  	
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
</style>
