<template>
	
		<view class="flex_c list fs_13">
		  <view><text style="color:#FF6000" v-if="star !=''">{{star}}</text>{{star}}{{name}}：</view>
		  <input v-model="inputValue" class="wid_400 pl_10"
		  						  placeholder="请输入或者选择" 
		  						  placeholder-style="color: #ccc;font-size: 13px;"
		  						  @blur = "inputFinish"
		    ></input>
			
				<picker @change="itemChange" :range="items" range-key="label" :value="index">
					  
					<image src="/static/images/qingfc/arrow.png" class="i-next" mode="aspectFill"></image>
					 
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
				default: ''
			},
			firstLabel:{
				type: String
			}
		},
		data() {
			return {
				index: -1,
				inputValue:''
			};
		},
		
		methods:{
			inputFinish:function(){
				this.$emit("mychange",[this.inputValue,this.code])
			},
			itemChange:function(e){
				
				let index = e.detail.value
				this.index = index
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
</style>
