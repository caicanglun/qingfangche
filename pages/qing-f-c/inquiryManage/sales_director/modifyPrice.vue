<template>
	<view>
		<view class="wrap-box">
			<view class="content-box-1">
				<text class="baojia_price">卖办报价：</text><text class="fs_13">{{unitPrice}}</text>
			</view>
			<view class="content-box-2">
				<view class="flex">
					<text class="baojia_price">报价价格：</text>
					<input v-model="newPrice" placeholder="请输入价格"  type='number' class="input" placeholder-style="font-size: 13px;"/>
				</view>
				<view>
					<text class="fs_13">{{unit}}</text>
				</view>
				
			</view>
			<view class="content-bottom">
				<text class="baojia_price">备注：</text>
				<input v-model="remark" placeholder="请输入" class="input_two" placeholder-style="font-size: 13px;"/>
			</view>
			
		</view>
		<view class="fixed_bottom box_shadow_btn">
		  <button class="btn_right" @tap="submit" hover-class="none">推送</button>
		</view>
	</view>
</template>

<script>
	import switchButton from '@/components/switchButton-auto.vue';
	let _this,_quoteNumber
	export default {
		components:{
		   switchButton	
		},
		data() {
			return {
				newPrice:'',
				remark:'',
				unitIndex: 1,
				unitPrice:'',
				unit: '',
				unitPriceDecimal:''
			};
		},
		onLoad:function(options){
			_this = this
			_quoteNumber =  options.quotationNumber
			this.unitPrice  = options.unitPrice
			this.newPrice = options.unitPriceDecimal
			this.unit = this.unitPrice.substring(this.unitPrice.length -3)
		},
		methods:{
			tapSwitch:function(e){
				this.unitIndex = e
				console.log(this.unitIndex)
			},
			submit:function(){
				if (_this.newPrice<0 || _this.newPrice==''){
					uni.showToast({
						title: '价格不能小于零',
						icon: 'none'
					});
					return
				}
				let data={
					quotationNumber: _quoteNumber    ,			//报价单号
					directorUnitPrice:  _this.newPrice   ,		//价格
					remarks: _this.remark  			//备注

				}
				let url = this.Api.directorModifyPrice
				uni.showLoading({
					title:"提交中",
								mask: true
				})
				this.myRequest(data,url,'get').then(res => {
				  console.log(res);
				  if (res.data.status == 0){
					  uni.hideLoading()
					  var pages = getCurrentPages();
					  var currPage = pages[pages.length - 1]; //当前页面
					  var prevPage = pages[pages.length - 2]; //上一个页面
					  //直接调用上一个页面的setData()方法，把数据存到上一个页面中去
					  
					  prevPage.setData({
					     isDoRefresh:true
					  })
					 
					  
					  uni.navigateBack({
					  	delta: 1
					  });
					  
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
   .wrap-box{
	margin-top: 40upx;
	margin-left: 40upx;
	margin-right: 30upx;	
}
.content-box{
	display: flex;
	justify-content: space-between;
	align-items: center;	
	border-bottom: 1upx solid rgba(237,237,237,1);
	height: 65upx;
	
}
.content-box-1{
	display: flex;
	align-items: center;	
	border-bottom: 1upx solid rgba(237,237,237,1);
	height: 65upx;
	
}
.content-box-2{
	display: flex;
	align-items: center;
	justify-content: space-between;
	border-bottom: 1upx solid rgba(237,237,237,1);
	height: 65upx;
}
.content-bottom{
	display: flex;
	// justify-content: space-between;
	align-items: center;	
	height: 65upx;
	
}
.baojia_price{
	color: #333236;
	font-size: 14px;
	width: 200upx;
}
.input{
		width: 250upx;
		font-size: 28upx;
	}
.input_two{
	width: 480upx;
	font-size: 14px;
}
.fixed_bottom{
	  width: 100%;
	  position: fixed;
	  bottom: 0;
	  display: flex;
	  z-index: 999;
	}
	
	.btn_right{
	  width: 100%;
	  background-color: #FF6000;
	  color: #fff;
	  font-size: 16px;
	  line-height: 88upx;
	}
</style>
