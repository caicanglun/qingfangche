<template>
	
		<view class="list flex_c">
		  <view class="list_right ml-14 color_888">
			{{label}}
		  </view>
		  <view>{{content}}</view>
		</view>
	
</template>

<script>
	export default {
		props:{
			label:{
				type: String,
				default: ''
			},
			content:{
				type: String,
				default: ''
			},
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
      .list{
        margin: 0 20upx;
        padding:0 10upx;
        border-bottom: 1upx solid rgba(221, 221, 221, 0.3);
        line-height: 87upx;
      }
      .list_right{
        width: 200upx;
      }
	  
</style>
