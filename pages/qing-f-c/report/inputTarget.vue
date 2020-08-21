<template>
	<view>
		<view class="flex_c" style="justify-content: space-between;background: #FFFFFF;height: 98upx;padding: 0 20upx;">
			<text style="color: #333236">本月目标金额</text>
			<view class="flex_c">
				<input type="number" v-model="counter" placeholder="请填写" style="width: 200upx;">
				<text>万元</text>
			</view>

		</view>
		<view class="fixed_bottom box_shadow_btn">
		  <button class="btn_right" @tap="submit" hover-class="none">提交</button>
		</view>
	</view>
</template>

<script>
	function getMonths(type) {
		const date = new Date();
	
		let year = date.getFullYear();
		let month = date.getMonth() + 1;
		let day = date.getDate();
	
		if (type === 'start') {
			year = year - 60;
		} else if (type === 'end') {
			year = year + 2;
		}
		month = month > 9 ? month : '0' + month;;
		day = day > 9 ? day : '0' + day;
	
		return `${year}-${month}`;
	}
	export default {
		data() {
			return {
				counter:'',
				companyCode: ''
			};
		},
		onLoad:function(options){
			this.companyCode = options.companyCode
			console.log(this.companyCode)
		},
		methods:{
			async submit(){
				let data = {
					companyCode: this.companyCode,   //		公司编码
					target: this.counter,         //				目标金额，单位万元
					time: 	getMonths({format: true})			//月份。格式：2020-06

				}
				uni.showLoading({
					title: '提交中',
					mask: true
				})
				const res = await this.$http.get('/cm/performance_target',{data: data})
				console.log(res)
				uni.hideLoading()
				uni.showToast({
					title: '提交成功',
					icon: 'none',
					duration: 1000
				});
				setTimeout(function() {
					uni.navigateBack({
						delta:  -1
					});
				}, 2000);
				
			}
		}
	}
</script>

<style lang="scss">
page{
	background: #F4F4F4;
	font-size: 15px;
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
