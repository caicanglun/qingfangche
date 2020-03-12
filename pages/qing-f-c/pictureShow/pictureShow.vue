<template>
	<view class="flex_c_c mt_50">
		<image :src="url" mode="aspectFill" class="show_class"></image>
	</view>
</template>

<script>
	let _this = this
	export default {
		data() {
			return {
				url:''
			};
		},
		onLoad:function(options){
			this.url = options.url
		}
	}
</script>

<style lang="scss">
    .show_class{
		width: 700upx;
		height: 900upx;
		
	}
</style>
