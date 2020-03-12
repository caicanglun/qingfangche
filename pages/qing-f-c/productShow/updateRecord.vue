<template>
	<view>
		<view v-if="list.length==0" style="padding: 30upx;">无更新记录</view>
		<block v-for="(item,index) in list" :key="index">
			<view>
				<view style="background: #FFFFFF;padding: 24upx;margin-bottom: 20upx;">
					<text style="font-size:14px;font-weight: bold;">{{item.title}}</text>
					<machineStatus :productInfo="item"></machineStatus>
				</view>
			</view>
		</block>
		
	</view>
</template>

<script>
	import machineStatus from "@/components/productShow/machineStatus.vue"
	let _this
	export default {
		components:{
			machineStatus
		},
		data() {
			return {
				goodsCode:'',
				list:[]
			};
		},
		onLoad:function(options){
			_this = this
			this.goodsCode = options.goodsCode
			this.goodsUpdateList()
		},
		methods:{
			goodsUpdateList:function(){
				let url = _this.Api.goodsUpdateList
				let data ={
					goodsCode: _this.goodsCode,  // 公司编码 
					pageNum: 1,
					pageSize: 20

				}
				this.myRequest(data,url,'get').then(res => {
				      console.log(res)
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
	   font-size: 13px;
   }
</style>
