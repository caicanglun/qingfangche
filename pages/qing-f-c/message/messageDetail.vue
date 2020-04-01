<template>
	<view>
		<view style="margin:20upx;background: #FFFFFF;">
			<view style="padding: 20upx;">
				<view style="font-size: 15px;font-weight: bold;color:#333333">
					{{message.messageTitle}}
				</view>
				<view style="color: #666666;font-size:13px;padding-top:10upx;">
					{{message.messageDetails}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	let _this
	export default {
		onLoad:function(options){
			_this = this
			this.messageCode = options.messageCode
			this.getMessageDetail()
		},
		data() {
			return {
				messageCode:'',
				message:''
			};
		},
		methods:{
			getMessageDetail:function(){
				let url = this.Api.DetailReadList
				let data = {
					messageCode: this.messageCode
				}
				this.myRequest(data,url,'get').then(res => {
					console.log(res)
				  if (res.data.status==0){			 
				   _this.message = res.data.data
				  }
				 
				}).catch(err => {
				  wx.showToast({
				    title: err.data.errMsg,
				    icon: 'none'
				  });
				});
			}
		}
		
	}
</script>

<style lang="scss">
  page{
	  background: #F4F4F4;
  }
</style>
