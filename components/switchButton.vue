<template>
	<view>
		<view class="list flex_c">
		  <view class="list_right fs_14"><text style="color:#FF6000">{{star}}</text>{{name}}：</view>
		  <view class="flex_c">
					 <block v-for="item in items" :key="item.id">
					   <view :class="'unit ' + (item.id==1?'borderleft':'') + ' ' + (item.id==0?'borderright':'') + ' ' + (index==item.id?'unitselect':'unitunselect')"
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
			},
			star:{
				type: String,
				default:''
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
   font-size: 14px;
   line-height: 48upx;
   width: 80upx;
   height: 48upx;
   text-align: center;
   border: 2upx solid #FF6000;
   box-sizing: border-box;
   border-right:none;
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
 }
 .unitunselect{
   color: #333333;
   background-color: #fff;
 }
</style>
