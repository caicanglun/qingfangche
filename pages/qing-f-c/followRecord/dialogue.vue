<template>
	<view>
		<view class="send_button">
			<view><input class="input_class" placeholder="点此可发布评论,可@相关人" v-model="content"></input></view>
			<view class="flex_c_c" style="font-size: 16px;width:90upx;background: #FFFFFF;">
				 <uniIcon type="plusempty" size="40" color="#ACACAC"></uniIcon>
			</view>
			<view class="flex_c_c" style="color:#FFFFFF;background: #FF6000;width:165upx;" @tap="sendMessage">发布</view>
		</view>
	</view>
</template>

<script>
	import uniIcon from "@/components/uni-icons/uni-icons.vue";
	export default {
		components:{
			uniIcon
		},
		data() {
			return {
				content:'',
				postCode:'',
				buyOrSell:'',
				messageType:'',
				fileUrl:''
			};
		},
		methods:{
			
			async sendMessage(){
				let data ={
					postCode: this.postCode,			//职位编码
					recordCode: this.recordCode,		//潜在订单编码
					buyOrSell: this.buyOrSell,		//1买家对话框，2卖家对话框
					messageType: this.messageType,		//消息类型。0文本，1图片，2视频...
					content: this.message,			//内容
					fileUrl:''		//文件地址
				
				}
				const res = await this.$http.post('/latent/dialog_add',{data:data})
				console.log(res)
			}
		}
	}
</script>

<style lang="scss">
  page{
	  background: #f4f4f4;
  }
  .send_button{
	  position: fixed;
	  bottom: 0;
	  width: 750upx;
	  z-index: 999;
	  display: flex;
  }
  .input_class{
	  background: #FFFFFF;
	  width: 500upx;
	  height: 90upx;
	  text-align: center;
	  
  }
</style>
