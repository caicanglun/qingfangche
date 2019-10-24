<template>
	
		<view class="flex_c list fs_13">
		  <view >{{name}}：</view>
		  <picker @change="itemChange" :range="items" range-key="label" :value="index">
		    <view :class="(index==-1?'color_888 wid_400':'wid_400')" v-if="!firstLabel">{{index==-1?"请选择":items[index].label}} </view>
			<view :class="(index==-1?'color_888 wid_400':'wid_400')" v-if="firstLabel">{{index==-1?firstLabel:items[index].label}} </view>
			
		  </picker>
				<image src="/static/images/qingfc/arrow.png" class="i-next" mode="aspectFill"></image>
		</view>

</template>

<script>
	export default {
		props:{
			items:{
				type: Array
			},
			name:{
				type: String,
				default: '测试'
			},
			star:{
				type: String,
				default: 'false'
			},
			firstLabel:{
				type: String
			}
		},
		data() {
			return {
				index: -1
			};
		},
		
		methods:{
			itemChange:function(e){
				let index = e.detail.value
				this.index = index
				this.$emit("mychange",this.items[index].id)
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
