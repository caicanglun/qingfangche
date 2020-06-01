<template>
	<view style="margin: 30upx;">
		<block v-for="(item,index) in list" :key = "index">
			<view class="row_select_contact" @tap="selectContact(item.realName)">
				<view class="flex_c_c label_deputy" :style="{'background': item.postCode=='SELL_DEPUTY'?'#4487FD':''}">{{ item.postCode | returnStyle }}</view>
				<view style="padding-left: 20upx;">{{item.realName}}</view>
			</view>
		</block>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				buyOrSell:'',
				list:[]
				
			};
		},
		
		filters:{
			returnStyle:function(value){
				switch(value){
						case 'SALES_DIRECTOR':
						   return '销总'
						   break;
						case  'REGIONAL_MANAGER':
						  return '区经'
						  break;
						case 'BUY_DEPUTY':
						  
						  return '买办'
						  break;
						case 'SELL_DEPUTY':
						  return '卖办'
						  break;
						case 'ANALYST':
						  return '分析'
						  break;
				   }
			}
		},
		onLoad:function(options){
			this.buyOrSell = options.buyOrSell
			this.fetch()
		},
		methods:{
			
			async fetch(){
				const res = await this.$http.get('/latent/at_list',{
					data:{buyOrSell: this.buyOrSell}
				})
				console.log(res)
				this.list = res.data.data.list
			},
			selectContact:function(realName){
				
				let pages = getCurrentPages();
				// var currPage = pages[pages.length - 1]; //当前页面
				let prevPage = pages[pages.length - 2]; //上一个页面
				
				prevPage.$vm.content = prevPage.$vm.content + `${realName} `
				
				uni.navigateBack({
					delta:  -1
				});
			}
			
		}
	}
</script>

<style lang="scss">
  .row_select_contact{
	  display: flex;
	  align-items: center;
	  font-size: 15px;
	  line-height: 50px;
      border-bottom: 1upx solid #F4F4F4;
  }
  .label_deputy{
	 
	  width: 48upx;
	  height: 48upx;
	  border-radius: 50%;
	  font-size: 10px;
	  color: white;
	  background: #FF6000;
  }
  
</style>
