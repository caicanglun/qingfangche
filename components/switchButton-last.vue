<template>
	<view>
		 <view class="flex_c">
			 <block v-for="item in items" :key="item.id">
			   <view :class="'unit ' + (item.id==1?'borderleft':'') + ' ' + (item.id==0?'borderright':'') + ' ' + (testIndex==item.id?'unitselect':'unitunselect')"
				@tap="buttonChange(item.id)" :data-index="item.id"><text style="padding:0upx 10upx;">{{item.label}}</text></view>
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
			testIndex:{
				type: Number,
				default: 1
			}
		
		},
		data() {
			return {
				index: 1
			};
		},
		methods:{
			buttonChange:function(id){
				
				this.$emit("buttonChange",id)
			}
		}
	}
</script>

<style lang="scss">
 .list{
   margin: 0 30upx;
   border-bottom: 1upx solid rgba(221, 221, 221, 0.3);
   line-height: 87upx;
 }
 .list_right{
   width:250upx;
 }
 .unit{
   font-size: 13px;
   // line-height: 48upx;
   line-height: 46upx;
   //width: 80upx;
   height: 48upx;
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
   color: #888890;
   background-color: #fff;
   border: 2upx solid #DCDCDC;
 }
</style>


