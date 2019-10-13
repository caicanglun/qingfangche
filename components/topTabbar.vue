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
			
		</view>
	</view>
</template>

<script>
	export default {
		props: ["items"],
		data() {
			return {
				
				activeIndex: 0
			};
		},
		methods: {
			tapTab(index){
				this.activeIndex = index
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
			flex-direction: column;
			.tabText{
				color: #757576;
			}
		}
		.tabActive{
			.tabText{
				color: black;
			}
			.bottomLine {
				background: red;
				height: 8upx;
				border-radius: 4upx;
			}
		}
	}
    
</style>
