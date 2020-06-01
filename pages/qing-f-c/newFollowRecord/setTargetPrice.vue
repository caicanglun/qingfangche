<template>
	<view>
		<view class="box-shawn">
			<view class="content-1">
				<view class='label'>系统最优价</view>
				<view style="width: 120upx;">
					<input v-model="sellerPrice" type="number" placeholder="请填写"></input>
				</view>
				<view style="width: 80upx;">元/米</view>
				<view style="display:flex;width: 46%;justify-content: flex-end;">
					<view @tap="tapTaxButton" :class="isTaxSelect?'tabActiveTax':'taxButton'">含税</view>
					<view @tap="tapCarrButton" :class="isCarriageSelect?'tabActiveTax':'taxButton'">含运费</view>
				</view>
			</view>
		</view>
		
		
		<view style="height:150upx;"></view>
		<view class="fixed_bottom box_shadow_btn">
		  <button class="btn_right" @tap="submit" hover-class="none">提交</button>
		</view>
	</view>
</template>

<script>
	import ePicker from '@/components/e-picker/e-picker.vue';
	import myPickerPart from "@/components/myPickerPartProps.vue";
	import uniIcon from "@/components/uni-icons/uni-icons.vue";
	let _this;
	
	export default {
		components:{
			myPickerPart,
			uniIcon,
			ePicker
		},
		data() {
			return {
				recordCode:'',
				sellerPrice:'',
				
				isTaxSelect: false,
				isCarriageSelect: false,
				
				
			};
		},
		onLoad:function(options){
			_this = this
			this.recordCode = options.recordCode
			if (options.sellerPrice >0){
				this.sellerPrice = options.sellerPrice
			}
			if (options.sellerIsPlusDutyCode){
				this.isTaxSelect = options.sellerIsPlusDutyCode==0? false : true
			}
			if (options.sellerIsIcashCode){
				this.isCarriageSelect = options.sellerIsIcashCode==0? false : true
			}
			
			
		},
		methods:{
			async getWarnLevel(){
				const res = await this.$http.get('/latent/warning_level',{})
				this.selectList.warningLevelList = res.data.data.list
				console.log(res)
			},
			async getRecordStatus(){
				const res = await this.$http.get('/latent/record_status',{})
				this.selectList.recordStatusList = res.data.data.list
				console.log(res)
			},
			async getFailCause(){
				const res = await this.$http.get('/latent/fail_cause',{})
				this.selectList.failCauseList = res.data.data.list
				console.log(res)
			},
			pickerChange:function(label,event){
				
			  switch (label){
				  case 'warningLevel':
					 this.form.warningLevel = event
					 console.log(this.form.warningLevel)
					 break;
				 
				case 'recordStatus':
					 this.form.recordStatus = event
					 console.log(this.form.recordStatus)
					 break;
				case 'failCauseCode':
					 this.form.failCauseCode = event
					 console.log(this.form.failCauseCode)
					 break;
				}
			},
			
			selectButton:function(e){
				console.log(e)
				this.activeIndex = e
			},
			
			
			
		    tapTaxButton:function(){
				this.isTaxSelect = !this.isTaxSelect
			},
			tapCarrButton:function(){
				this.isCarriageSelect = !this.isCarriageSelect
			},
			areaInput:function(e){
				console.log(e)
			},
			
			async submit(){
				let data ={
					recordCode: this.recordCode,	//潜在订单编码
					sellerPrice: this.sellerPrice,   //报价
					sellerIsPlusDuty: this.isTaxSelect? 1 : 0,  	//是否含税
					sellerIsIcash: this.isCarriageSelect? 1 : 0		//是否含运费

				}
				const res = await this.$http.get('/latent/update_quote',{data:data})
				console.log(res)
				uni.navigateBack({
					delta: -1
				});
				
			}
		},
		
	}
</script>

<style lang="scss">
 page{
	 background: #F4F4F4;
 }
 .content-1{
 	color: #333236;
 	font-size: 15px;
 	display: flex;
 	align-items: center;
 	//justify-content: space-between;
 	height: 85upx;
 	border-bottom: 1upx solid rgba(237,237,237,1);
 	.label{
 		width: 175upx;
 	}
 	.items{
 		width: 505upx;
 	}
 	.items-1{
 		width: 505upx;
 		display: flex;
 		justify-content: space-between;
 	}
 }
 
 .box-shawn{
	 padding: 30upx 40upx 0 30upx;
	 background: #FFFFFF;
 }
 .title{
 	font-size: 16px;
 	color: #333236;	
 	font-weight: bold;
	line-height: 30px;
 }
.no_border{
	 border: none;
 }
 .fixed_bottom{
   width: 750upx;
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
   line-height: 78upx;
 }
 .deliveryButton{
	 display: flex;
	 align-items: center;
	 justify-content: center;
	 width:88upx;
	 height:48upx;
	 border:2upx solid rgba(220,220,220,1);
	 border-radius:8px;
	 margin-right: 20upx;
 }
 .tabActive{
	 display: flex;
	 align-items: center;
	 justify-content: center;
	 width:88upx;
	 height:48upx;
	 border:2upx solid #ff6000;
	 border-radius:8px;
	 margin-right: 20upx;
	 background: #FF6000;
	 color: white;
 }
 .taxButton{
 	 display: flex;
 	 align-items: center;
 	 justify-content: center;
 	 padding: 0 10upx;
 	 height:48upx;
 	 border:2upx solid rgba(220,220,220,1);
 	 border-radius:8px; 
	 margin-left: 20upx;
 }
 .tabActiveTax{
 	 display: flex;
 	 align-items: center;
 	 justify-content: center;
 	 padding: 0 10upx;
 	 height:48upx;
 	 border:2upx solid #ff6000;
 	 border-radius:8px;
 	 margin-left: 20upx;
 	 background: #FF6000;
 	 color: white;
 }
</style>

