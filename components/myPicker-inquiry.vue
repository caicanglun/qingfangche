<template>
	
		<view class="flex_c list fs_14">
		  <view class="list_right"><text :class="(star=='true'?'star':'starInvisible')">*</text>{{name}}：</view>
		  <picker @change="itemChange" :range="items" range-key="label" :value="index">
			 <view class="flex_sb">
				 <view :class="(index==-1?'color_909090 wid_400':'wid_400')" v-if="!firstLabel">{{index==-1?"请选择":items[index].label}} </view>
				 <view :class="(index==-1?'wid_400':'wid_400')" v-if="firstLabel">{{index==-1?firstLabel:items[index].label}} </view>
				 <uniIcon type="arrowright" size="22" color="#ACACAC"></uniIcon>
			 </view>
		    
			
		  </picker>
				
		</view>

</template>

<script>
	import uniIcon from "@/components/uni-icons/uni-icons.vue";
	
	export default {
			
		components:{
			uniIcon
		},
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
  
   margin-left: 20upx;
   margin-right: 10upx;
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
.color_909090{
	color: #909090;
	font-size: 13px;
}
</style>
