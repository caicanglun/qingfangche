<template>
	<view class="topTabbar">
		<view class= "tabItem" 
			v-for="(item,index) of items" 
			:key= "index"
			:class = "activeIndex==index? 'tabActive': ''"
			@tap = "tapTab(index)"
	    >
			<text class="tabText">{{item}}</text>
			<view class="bottomLine"></view>
			<!-- <view style="height:10upx;"></view> -->
			<view class="icon-position flex_c_c" v-if="directorReviewCount>0&&index==0">{{directorReviewCount}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			"items":{
				type: Array
			},
			
			directorReviewCount:{
				type: Number,
				default: 0
			}
		},
		
		data() {
			return {
				activeIndex: 0
			};
		},
		methods: {
			tapTab(index){
				this.activeIndex = index
				this.$emit("change",index)
			}
		}
	}
</script>

<style lang="scss">
	.topTabbar{
		background: #FFFFFF;
		display: flex;
		justify-content: space-around;
		.tabItem{
			display: flex;
			flex-direction: column;
			position: relative;
			.tabText{
				color: black;
				font-size: 14px;
			}
		}
		.tabActive{
			.tabText{
				color: #ff6000;
				font-size: 14px;
			}
			.bottomLine {
   
				background: #ff6000;
				height: 3upx;
				border-radius: 4upx;
				margin-top: 20upx;
			}
		}
	}
	.icon-position{
		font-size: 13px;
		position: absolute;
		background-color: red;
		color: #ffffff;
		line-height: 30upx;
		width: 30upx;
		height: 30upx;
		border-radius: 50%;
		right: -30upx;
		top: -10upx;
	}
    
</style>
