<template>
	
		<view class="flex_c list fs_14">
		  <view class="list_right"><text :class="(star=='true'?'star':'starInvisible')">*</text>{{name}}：</view>
		  <picker @change="itemChange" :range="items" range-key="label" :value="index">
		    <view :class="(index==-1?'color_888 wid_400':'wid_400')">{{index==-1?"请选择":items[index].label}} </view>
			<!-- <view :class="(index==-1?'color_888 wid_400':'wid_400')" v-if="firstLabel">{{index==-1?firstLabel:items[index].label}} </view> -->
			<image src="/static/images/qingfc/arrow.png" class="i-next" mode="aspectFill"></image>
		  </picker>
				
		</view>

</template>

<script>
	export default {
		props:{
			items:{
				type: Array
			},
			
			firstLabel:{
				type: String,
				default: '-1'
			}
		},
		data() {
			return {
				index: -1
			};
		},
		onReady:function(){
			this.index = this.firstLabel
		},
		methods:{
			itemChange:function(e){
				
				let index = e.detail.value
				this.index = index
				if (this.index == -1){
					this.index = 0
				}
				this.$emit("mychange",this.items[this.index].id)
			}
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
   width:250upx;
   
 }
 .i-next{
 	   width: 14upx;
 	   height: 24upx;
 	   position: absolute;
 	   right: 30upx;
 	  }
.star{
	color: #FF6000;
}
.starInvisible{
	color: white;
}
</style>
