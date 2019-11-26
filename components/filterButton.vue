<template>
	<view class="topTabbar">
		<view class= "box_shadow_btn" 
			v-for="(item,index) of items" 
			:key= "index"
			:class = "activeIndex==index? 'tabActive': 'tabItem'"
			@tap = "tapTab(index)"
	    >
			
				<text class="tabText">{{item}}</text>
			
			
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			items:{
				type:Array
			},
			index:{
				type: Number,
				default: -1
			}
			
		},
		data() {
			return {
				activeIndex: this.index
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
		display: flex;
		justify-content: space-around;
		.tabItem{
			display: flex;
			width: 150upx;
			height: 56upx;
			justify-content: center;
			align-items: center;
			border-radius: 28upx;
			background-color: #E7E7E7;
			font-size: 13px;
			.tabText{
				color: black;
			}
		}
		.tabActive{display: flex;
			width: 150upx;
			height: 56upx;
			justify-content: center;
			align-items: center;
			border-radius: 28upx;
			background-color: #FF6000;
			font-size: 13px;
			.tabText{
				color: white;
			}
		}
	}
	
    
</style>
