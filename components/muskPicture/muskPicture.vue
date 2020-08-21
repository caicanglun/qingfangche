<template>
	<view>
		<!-- 弹出层 -->
		<view  class="uni-banner-n"  v-if="bannerShow">
			
			<view class="flex_c_c" style="flex-direction: column;">
				<view style="background: #FFFFFF;height: 500upx;width: 500upx;">
					<image :src="url" mode="aspectFit" class="pictureClass"></image>
				</view>
				<view style="background: #FFFFFF;width: 500upx;height: 240upx;">
					<view style="padding: 20upx;" class="flex">
						<view style='width: 65%;'>
							<text style="font-size: 14px;">228T消光塔丝隆进口坯布</text>
						</view>
						<view style='width: 35%;'>
							<view style="display: flex;justify-content: center;">
								<image :src="img" mode="aspectFit" style="height: 120upx;width:120upx;"></image>
							</view>
							<view class="flex_c_c" style="font-size: 11px;margin-top: 10upx;">下载轻纺车APP</view>
							<view class="flex_c_c" style="font-size: 11px;">扫码询价</view>
							
						</view>
					</view>

				</view>
				<view style="margin-top: 20upx;">
					<image src="/static/shopping/downButton.png" mode="aspectFit" style="height: 100upx;width: 100upx;"></image>
				</view>
			</view>
			

		</view>
		
		<!-- 做黑色阴影颜色 -->
		<view class="uni-mask" v-if="bannerShow" @tap="bannerShow = false"></view>
	</view>
</template>

<script>
	import QR from "@/common/wxqrcode.js";
	import uniIcon from "@/components/uni-icons/uni-icons.vue";
	export default {
		components:{
			uniIcon
		},
		props:{
			title:{
				type: String,
				default: '请输入'
			},
			url:{
				type: String,
				default: '请输入'
			}
		},
		data() {
			return {
				img:'',
				bannerShow:false,
				content: '',
				link:'http://fir.144f.com/lrqk'
			};
		},
		// onLoad:function(){
		// 	this.img = QR.createQrCodeImg(this.link, {
		// 	     size: parseInt(200)//二维码大小  
		// 	})
		// },
		methods:{
			radioChange:function(evt) {
				for (let i = 0; i < this.items.length; i++) {
					if (this.items[i].id === evt.target.id) {
						this.current = i;
						this.content = this.items[i].label
						break;
					}
				}
				
			},
			closeBanner:function(){
				this.bannerShow=false;
			},
			show:function(){
				this.img = QR.createQrCodeImg(this.link, {
				     size: parseInt(200)//二维码大小  
				})
				this.bannerShow=true;
			},
			confirmBanner:function(){
				if (this.content !==''){
					this.$emit('input',this.content)
				}
				
				this.bannerShow = false
			}
		}
		
	}
</script>

<style lang="scss">
     /* 弹出层形式的广告 */
     	.uni-banner-n {
     		width: 100%;
     		position: fixed;
   //   		left: 0;
			// right:0;
     		top: 10vh;
			
     		z-index: 99;
			margin-left:auto;
			margin-right:auto;
     		// border-radius: 20upx;
			// background: #111c30;
     	}
     	.uni-mask{
     		position: fixed;
     		top:0;
     		left:0;
     		z-index:50;
     		width:100%;
     		height:100%;
     		background:rgba(0,0,0,0.4);
     	}
		.pictureClass{
			width: 500upx;
			height: 500upx;
		}
		
</style>

