<template>
	<view>
		<view class="checkgroup">
			  <label v-for="item in items" :key="item.id" > 
				<view>
					<view :class="(item.isChecked?'typeItemSelect':'typeItem')" @tap="tapItem(item.label,item.id)"> 
							<!-- <checkbox :value="index" :checked="item.ischecked"/> -->
							<text>{{item.label}}</text>
							<!-- <uni-icon type="checkbox-filled" color="#FF6000" size="22" class="icon-position" v-if="item.isChecked"></uni-icon> -->
							<view class="icon-position" v-if="item.isChecked">{{selectList.indexOf(item.label)+1}}</view>
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
				selectList:[],
				selectId: []
			};
		},
		methods:{
			 tapItem:function(label,id){
				 let index= this.selectList.indexOf(label)  //查找是否已经在数组里面了
				 
				 if (index > -1){
					 this.selectList.splice(index,1)
					 this.selectId.splice(index,1)
				 }else{
					 if (this.selectList.length== 4){
						 uni.showToast({
							title: '不能超过四个',
							icon: 'none'
						 });
						 return;
					 }
					 this.selectList.push(label)
					 this.selectId.push(id)
				 }
				 
				 console.log("zujian==",this.selectList)
				 this.$emit("selectChange",this.selectList,this.selectId)
			 }
		}
	}
</script>

<style lang="scss">
.checkgroup{
	 display: flex;
	 flex-direction: row;
	 //justify-content: space-between;
	 align-content: flex-start;
	 flex-wrap: wrap;
 }
 .typeItemSelect{
	 // width: 80upx;
	 padding: 0 15upx;
	 margin: 0 5upx;
	 height: 50upx;
	 box-sizing: border-box;
	 border-radius: 6upx;
	 line-height: 46upx;
	 text-align: center;
	 margin-bottom: 20upx;
	 border: 2upx solid #EE603F;
	 color: #FF6000;
	 position:relative;
	 }
.typeItem{
	 	 //width: 100upx;
		 padding: 0 15upx;
		 margin: 0 5upx;
	 	 height: 50upx;
	 	 box-sizing: border-box;
	 	 border-radius: 6upx;
	 	 line-height: 46upx;
	 	 text-align: center;
	 	 margin-bottom: 20upx;
		 border: 2upx solid #D3D3D3;
	 	 }
.icon-position{
	position: absolute;
	background-color: #ff6000;
	color: #ffffff;
	line-height: 30upx;
	width: 32upx;
	height: 32upx;
	border-radius: 50%;
	right: -10upx;
	top: -15upx;
}
</style>
