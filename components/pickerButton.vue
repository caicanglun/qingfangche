<template>
	<view>
		<view class="pickButtonPicklist flex_c">
		  <view class="list_right fs_14">{{name}}：</view>
		  <view class="flex_c">
				 <block v-for="item in items" :key="item.id">
				   <view :class="'unit ' + (item.id==index?'unitselect':'unitunselect')"
					@tap="buttonChange(item.id)" :data-index="item.id">{{item.label}}</view>
				 </block>
		  </view>
		</view>
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
			}
		},
		data() {
			return {
				index: 1
			};
		},
		methods:{
			buttonChange:function(id){
				this.index = id
				this.$emit("buttonChange",id)
			}
		}
	}
</script>

<style lang="scss">
 .pickButtonPicklist{
   margin: 0 20upx;
   padding:0 10upx;
   border-bottom: 1upx solid rgba(221, 221, 221, 0.3);
   line-height: 87upx;
 }
 .list_right{
   width:250upx;
 }
 .unit{
   display: flex;
   align-items: center;
   font-size: 14px;
   // line-height: 40upx;
   width: 170upx;
   height: 50upx;
   justify-content: center;
   // text-align: center;
   border: 2upx solid #DCDCDC;
   box-sizing: border-box;
   border-radius: 5upx;
   margin-right: 30upx;
   // padding-left: 40upx;
 }
 .borderright{
   border-top-right-radius: 6upx;
   border-bottom-right-radius: 6upx;
   border-right: 2upx solid #FF6000;
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
   color: black;
   background-color: #fff;
 }
</style>
