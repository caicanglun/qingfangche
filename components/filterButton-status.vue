<template>
	<view class="topTabbar">
		<view class= "box_shadow_btn" 
			v-for="(item,index) of items" 
			:key= "item.id"
			:class = "item.isChecked? 'tabActive': 'tabItem'"
			@tap = "tapTab(item.id)"
	    >
			
				<text class="tabText">{{item.label}}</text>
			
			
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			items:{
				type:Array
			},
			// index:{
			// 	type: Number,
			// 	default: -1
			// }
			
		},
		data() {
			return {
				activeIndex: -1
			};
		},
		methods: {
			tapTab(index){
				if(this.activeIndex == index) {
					this.activeIndex = -1
				}{
					this.activeIndex = index
				}
				
				this.$emit("change",this.activeIndex)
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
			width: 120upx;
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
			width: 120upx;
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
