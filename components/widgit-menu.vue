<template>
	
	<view class="icon-position flex_c_c">{{count}}</view>
	
</template>

<script>
	export default {
		props:{
			count: {
				type: String,
				default: ''
			}
			
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
.icon-position{
	font-size: 13px;
   	position: absolute;
   	background-color: #ff0000;
   	color: #ffffff;
   	line-height: 40upx;
   	width: 40upx;
   	height: 40upx;
   	border-radius: 50%;
    // right: 50upx;
   	// top: 20upx;
   }
</style>
