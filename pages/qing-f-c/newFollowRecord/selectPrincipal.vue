<template>
	<view style="margin: 30upx;">
		<block v-for="(item,index) in list" :key = "index">
			<view class="row_select_contact box_shadow" @tap="selectContact(item.userCode,item.realName)">
				<view style="width:120upx;border-radius: 50%;" class="flex_c_c">
					<image :src="item.avatar" mode="aspectFit" class="er_img"></image>
			    </view>
				<view style="display: flex;flex-direction: column;padding-left: 30upx;padding-top:20upx;">
					<view>{{item.realName}}</view>
					<view style="font-size:13px;">客户{{item.companyCount}}人</view>
				</view>
				<view style="color: #9B9B9B;font-size: 13px;padding-left: 50upx;padding-top:20upx;">{{item.regionName}}</view>
				
			</view>
		</block>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				recordCode:'',
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
			// this.buyOrSell = options.buyOrSell
			this.recordCode = options.recordCode
			this.fetch()
		},
		methods:{
			
			async fetch(){
				const res = await this.$http.get('/cm/deputyList',{})
				console.log(res)
				this.list = res.data.data.list
			},
			async selectContact(userCode,realName){
				
				
				let data ={
					recordCode: this.recordCode,			//潜在订单编码
					userCode: userCode		//卖办用户编码

				}
				const res = await this.$http.get('/latent/select_deputy',{data:data})
				console.log(res)
				let pages = getCurrentPages();
				let prevPage = pages[pages.length - 2]; //上一个页面
				prevPage.$vm.setPrincipal(this.recordCode,realName)
				
				uni.navigateBack({
					delta:  -1
				});
			}
			
		}
	}
</script>

<style lang="scss">
  page{
	  background: #F4F4F4;
  }
  .row_select_contact{
	  background: #FFFFFF;
	  display: flex;
	  
	  font-size: 15px;
	  line-height: 25px;
      height: 120upx;
	  margin-top: 20upx;
	  border-radius:6px;
  }
  .label_deputy{
	 
	  width: 48upx;
	  height: 48upx;
	  border-radius: 50%;
	  font-size: 10px;
	  color: white;
	  background: #FF6000;
  }
  .er_img{
    // position: fixed;
	border-radius: 50%;
    width: 100upx;
    height: 100upx;
  }
</style>
