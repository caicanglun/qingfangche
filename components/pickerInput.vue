<template>
	
		<view class="flex_c list" :style="fontSize">
		  <view><text style="color:#FF6000;" v-if="star !=''">{{star}}</text>{{star}}{{name}}：</view>
		  <input class="wid_300 pl_10" v-model="inputValue"
		  						  placeholder="请输入或者选择" 
		  						  placeholder-style="color: #909090;font-size: 13px;"
		  						  @blur = "inputFinish" 
		    ></input>
			
				<picker @change="itemChange" :range="items" range-key="label" :value="index">
					  
					<view class="picker-image" style="width:150upx;"><image src="/static/images/qingfc/arrow.png" class="i-next" mode="aspectFill"></image></view>
					 
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
			fontSize:{
				type: String,
				default: ''
			},
			star:{
				type: String,
				default: ''
			},
			firstLabel:{
				type: String,
				default: ''
			}
			
		},
		data() {
			return {
				index: -1,
				inputValue: '',
				code: -1
			};
		},
		onReady:function(){
			this.inputValue = this.firstLabel
		},
		methods:{
			inputFinish:function(e){
				
				this.$emit("mychange",[this.inputValue,this.code])
			},
			itemChange:function(e){

				this.index = e.detail.value
				if (this.index == -1){
					this.index = 0
				}
				this.inputValue = this.items[this.index].label
				this.code = this.items[this.index].id
				
				this.$emit("mychange",[this.inputValue,this.code])
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
.picker-image{
	width: 150upx;
	height: 65upx;
	display: flex;
	align-items: center;
	justify-content: flex-end;
}
.wid_300{
	width: 400upx;
}
</style>
