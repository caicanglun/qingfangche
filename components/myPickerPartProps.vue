<template>
		<view class="picker_list">
		  <picker @change="itemChange" :range="items" range-key="label" :value="index" style="width:90%;">
		    <view :class="(index==-1?'color_888':'')" v-if="index==-1">请选择</view>
			<view v-if="index!=-1">{{items[index].label}} </view>
			
		  </picker>
		  <!-- <image src="/static/images/qingfc/arrow.png" class="i-next" mode="aspectFill"></image> -->
		  <uniIcon type="arrowright" size="20" color="#ACACAC"></uniIcon>
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
			
			firstLabel:{
				type: [String,Number]
				
			}
		},
		data() {
			return {
				index: -1
			};
		},
		// watch:{
		// 	firstLabel(newValue,oldValue){
		// 		this.items.forEach((item,index)=>{
		// 		if (item.id == this.firstLabel){
		// 			this.index = index
					
		// 		}
		// 	})
		// 	this.init()
		// 	}
		// },
		onReady:function(){
			this.items.forEach((item,index)=>{
				if (item.id == this.firstLabel){
					this.index = index
					
				}
			})
			
			// this.index = this.firstLabel
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
	.wid_90{
		width: 90%;
	}
.picker_list{
	display: flex;
	justify-content: space-between;
	align-items: center;
  
   
   //border-bottom: 1upx solid rgba(221, 221, 221, 0.3);
   line-height: 65upx;
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
