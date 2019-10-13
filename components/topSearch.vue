<template>
	<view class= "searchWripper">
		<view class="searchView">
			<icon type="search" size="12"></icon>
			<text style="padding-left: 20upx;">搜索当当商品</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
  .searchWripper{
	  padding: 20upx;
  }
  .searchView{
	  display: flex;
	  align-items: center;
	  width: 100%;
	  height: 80upx;
	  background: #eff3f9;
	  font-size: 15px;
	  border-radius: 40upx;
	  padding: 0 20upx;
	  color: #c0c0c0;
	  box-sizing: border-box;
  }
</style>
