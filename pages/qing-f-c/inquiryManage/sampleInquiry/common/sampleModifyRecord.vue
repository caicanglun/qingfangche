<template>
	<view>
		<view v-if="list.length==0">没有更新记录</view>
		<block v-for="(item,index) in list" :key="index">
			<view style="margin-bottom:20upx;padding:10upx 34upx;background: #FFFFFF;">
				<view style="font-size:15px;font-weight: bold;">{{item.title}}</view>
				<view style="font-size:12px;color:#999999">{{item.createTime}}</view>
				<view style="font-size:13px;">{{item.content}}</view>
			</view>
		</block>
	</view>
</template>

<script>
	let _this = this
	export default {
		data() {
			return {
				analysisSampleCode:'',
				list:[]
			};
		},
		onShow:function(){
			this.getRecord()
		},
		onLoad:function(options){
			_this = this
			this.analysisSampleCode = options.analysisSampleCode
			console.log(this.analysisSampleCode)
			this.getRecord()
		},
		methods:{	
			getRecord:function(){
				let url = this.Api.updateList
				let data = {
					analysisSampleCode: _this.analysisSampleCode
							
				}
				this.myRequest(data,url,'get').then(res => {
				  console.log(res);
				   _this.list = res.data.data.list
				   
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
  .wrap{
	  margin-bottom:20upx;
	  padding-top:10upx; 
	  padding-bottom:10upx; 
	  padding-left:34upx; 
	  padding-right:34upx; 
	  
	  background: #FFFFFF;
  }
</style>
