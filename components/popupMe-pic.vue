<template>
	<view>
		<!-- 弹出层 -->
		<view  class="uni-banner"  v-if="bannerShow">
			
			<view class="popupTitle" @tap="closeBanner">
				<text>{{title}}</text>
				<veiw class="iconClose" @tap="closeBanner">
				  		<uniIcon type="clear" size="24" color="#b3b3b3"></uniIcon>
				</veiw>
			</view>
		     <movable-area>
						<movable-view :x="x" :y="y" direction="all" @scale="onScale" scale="true" scale-min="1" scale-max="4" :scale-value="scale">
							<image :src="src" mode='aspectFill' style="width:600upx;height: 600upx;"></image>
						</movable-view>
		     </movable-area>
			
			
		
			<view class="flex_sa mt_20 mb_20">
				 <view class="newPartCancel" @tap="closeBanner">返回</view>
				 
			</view>
			

		</view>
		
		<!-- 做黑色阴影颜色 -->
		<view class="uni-mask" v-if="bannerShow"></view>
	</view>
</template>

<script>
	import uniIcon from "@/components/uni-icons/uni-icons.vue";
	export default {
		components:{
			uniIcon
		},
		props:{
			title:{
				type: String,
				default: '大图'
			},
			src:{
				type:String,
				default:''
			}
		},
		data() {
			return {
				x:'',
				y:'',
				current: 0,
				bannerShow:false,
				content: ''
			};
		},
		methods:{
				
			onScale:function(e){
				this.x = e.detail.x
				this.y = e.detail.y
			},
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
				this.bannerShow=true;
			},
			confirmBanner:function(){
				this.$emit('input')
				this.bannerShow = false
			}
		}
		
	}
</script>

<style lang="scss">
     /* 弹出层形式的广告 */
     	.uni-banner {
     		width: 80%;
     		position: fixed;
     		left: 10%;
     		margin-top: -100upx;
     		z-index: 99;
     		border-radius: 10upx;
			background: #FFFFFF;
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
		.popupTitle{
			text-align:center;
			padding:20upx; 
			font-size:16px;
		}
		
     	.textarea-borer{
     		border: 2upx solid #DCDCDC;
     		height: 140upx;
     		width: 500upx;
     		border-radius: 6upx;
     		padding-right: 20upx;
     		background-color:#F7F7F7;
     		font-size: 14px;
     	}
     	.newPart{
     		display: flex;
     		font-size: 14px;
     		
     		width: 170upx;
     		height: 60upx;
     		justify-content: center;
     		align-items: center;
     		
     		border: 1upx solid #FF6000;
     		box-sizing: border-box;
     		border-radius: 30upx;
     		color: #fff;
     		background-color: #FF6000;
     		margin-left: 10upx;
     	}
     	.newPartCancel{
     		display: flex;
     		font-size: 14px;
     		
     		width: 170upx;
     		height: 60upx;
     		justify-content: center;
     		align-items: center;
     		
     		border: 1upx solid #DCDCDC;
     		box-sizing: border-box;
     		border-radius: 30upx;
     		color: black;
     		background-color: #FFFFFF;
     		margin-left: 10upx;
     	}
		.iconClose{
			position:absolute;
			top: 2upx;
			right: 2upx;
		}
		.input-wrap{
			margin: 0 30upx;
			background-color:#F7F7F7;
			border-radius: 10upx;
			height: 80upx;
			display: flex;
			align-items: center;
		}
		.input-class{
			padding-left: 10upx;
			background-color:#F7F7F7;
		}
		.uni-list-cell {
			display: flex;
			
			justify-content: flex-start
		}
		.uni-list-cell-pd {
			padding: 22upx 30upx;
		}
		.uni-list {
			background-color: #FFFFFF;
			position: relative;
			width: 100%;
			display: flex;
			flex-direction: column;
		}
     
</style>
