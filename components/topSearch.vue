<template>
	<view class="search_top_box">
		<view class="flex_sb" >
			  <view class="flex_c search_left_sousuo">
				<icon type="search" size="14" style="height:14px;margin-left:40upx;"></icon>
				<input class="search_left_self" v-model="inputValueOne" placeholder="请输入搜索内容" 
					   confirm-type="search" @confirm="tapSearch"></input>
			  </view>
		 </view>
	 </view> 
</template>

<script>
	export default {
		data() {
			return {
				inputValueOne:''
			};
		},
		methods:{
			
			tapSearch:function(){
				this.$emit('search',this.inputValueOne)
			}
		}
	}
</script>

<style lang="scss">
	.search_top_box{
	  background-color: #FF6000;
	  padding:16upx 30upx 20upx;
		/* height: 92upx; */
	  box-sizing: border-box;
	}
	.flex_sb{
	  display: flex;
	  justify-content: space-between;
	}
	.flex_c{
	  display: flex;
	  align-items: center;
	}
  .search_left_self{
    width: 100%;
    margin-left: 10upx;
    font-size: 12px
  }
  .search_left_sousuo{
    background-color:#fff;
    height: 56upx;
    box-sizing: border-box;
    border-radius: 56upx; 
    width: 100%;
  }
</style>
