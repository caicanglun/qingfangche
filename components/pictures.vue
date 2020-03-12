<template>
	<view>
		<view class="uploadFile list_right_content">
				 <view><text class="fs_14;">布样照片</text><text class="smallFont">（最多可上传9张）</text></view>
				 <view class="flex_wrap">
					 <block v-for="(item,index) in tempList" :key="index">
						 <view>
							 <image :src="item" mode="aspectFill" class="picture_style"></image>
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
	</view>
</template>

<script>
	import uniIcon from "@/components/uni-icons/uni-icons.vue";
	export default {
		components:{
			uniIcon
		},
		props:{
			pictures:{
				type:Array
			}
		},
		data() {
			return {
				tempList:[]
			};
		},
		created() {
		            this.tempList = this.pictures
		        },
		methods:{
				
			pickImage:function(){
				this.$emit('change')
			}
		}
	}
</script>

<style lang="scss">
 .uploadFile{
 	display: flex;
 	flex-direction: column;
 	margin-bottom: 100upx;
 	
 }
 .list_right_content{
 	margin: 0 20upx;
 	padding:0 10upx;
 	line-height: 87upx;
 	border-bottom: 1upx solid rgba(221, 221, 221, 0.3);
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
 .list_right_content{
 	margin: 0 20upx;
 	padding:0 10upx;
 	line-height: 87upx;
 	border-bottom: 1upx solid rgba(221, 221, 221, 0.3);
 }
</style>
