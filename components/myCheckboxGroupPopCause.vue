<template>
	<view>
		<view class="checkgroup">
			  <label v-for="(item,index) in items" :key="index" > 
				<view>
					<view :class="(item.isChecked?'typeItemSelect':'typeItem')" @tap="tapItem(item.id)"> 
							<!-- <checkbox :value="index" :checked="item.ischecked"/> -->
							<text>{{item.label}}</text>
							<uni-icon type="checkbox-filled" color="#FF6000" size="22" class="icon-position" v-if="item.isChecked"></uni-icon>
					</view>
			   </view>
			</label> 
		</view>	
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
			}
		},
		data() {
			return {
				
			};
		},
		methods:{
			 tapItem:function(id){
				 this.$emit("selectChange",id)
			 }
		}
	}
</script>

<style lang="scss">
.checkgroup{
	 display: flex;
	 flex-direction: row;
	 // justify-content: space-between;
	 align-content: flex-start;
	 flex-wrap: wrap;
 }
 .typeItemSelect{
	 // width: 170upx;
	 height: 55upx;
	 padding: 0 10upx;
	 box-sizing: border-box;
	 border-radius: 6upx;
	display: flex;
	align-items: center;
	justify-content: center;
	 margin-bottom: 30upx;
	 margin-right: 30upx;
	 border: 2upx solid #FF6000;
	 color: #FF6000;
	 position:relative;
	 }
.typeItem{
	 	 // width: 170upx;
	 	 height: 55upx;
		 padding: 0 10upx;
	 	 box-sizing: border-box;
	 	 border-radius: 6upx;
	 	 display: flex;
		 align-items: center;
		 justify-content: center;
	 	 margin-bottom: 30upx;
		 margin-right: 30upx;
		 border: 2upx solid #D3D3D3;
	 	 }
.icon-position{
	position: absolute;
	right: -10upx;
	top: -15upx;
	z-index: 99;
}
</style>
