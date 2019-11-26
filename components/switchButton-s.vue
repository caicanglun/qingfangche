<template>
	<view>
		 <view class="flex_c">
			 <block v-for="item in items" :key="item.id">
			   <view :class="'unit ' + (returnIndex(item.id)==0?'borderleft':'') + ' ' + (returnIndex(item.id)==items.length-1?'borderright':'') + ' ' + 
			   (item.id == index?'unitselect':'unitunselect')"
				@tap="buttonChange(item.id)" :data-index="item.id">{{item.label}}</view>
			 </block>
		 </view>
	</view>
</template>

<script>
	export default {
		props:{
			items:{
				type: Array
			},
			initValue: {
				type: Number,
				default: 1
			}
		},
		data() {
			return {
				index: this.initValue
		    }
		},
		
		methods:{
			returnIndex:function(id){
				let item = this.items
				for (var i=0;i<item.length;i++){
					if (item[i].id == id){
						return i
					}
				}
			},
			buttonChange:function(id){
				this.index = id
				this.$emit("buttonChange",id)
			}
		}
	}
</script>

<style lang="scss">
 .list{
   margin: 0 30upx;
   padding:0 10upx;
   border-bottom: 1upx solid rgba(221, 221, 221, 0.3);
   line-height: 87upx;
 }
 .list_right{
   width:250upx;
 }
 .unit{
   font-size: 13px;
   // line-height: 48upx;
   line-height: 38upx;
   width: 80upx;
   height: 40upx;
   text-align: center;
   border: 2upx solid #DCDCDC;
   box-sizing: border-box;
   border-right:none;
 }
 .borderright{
   border-top-right-radius: 6upx;
   border-bottom-right-radius: 6upx;
   border-right: 2upx solid #DCDCDC;
 }
 .borderleft{
   border-top-left-radius: 6upx;
   border-bottom-left-radius: 6upx;
   
 }
 .unitselect{
   color: #fff;
   background-color: #FF6000;
   border: 2upx solid #FF6000;
 }
 .unitunselect{
   color: #333333;
   background-color: #fff;
 }
</style>
