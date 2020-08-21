<template>
	<view>
		<!-- <view class="box-shawn">
			<view class="content-1 no_border" @tap="selectBuyer">
				<view class='label'>客户</view>
				<view class='items'>
					<text :style="{color:companyName?'#333':'#909090'}">{{companyName? companyName : '请选择'}}</text>
				</view>
				<view style="justify-content: flex-end;">
					<uniIcon type="arrowright" size="20" color="#ACACAC"></uniIcon>
				</view>
			</view>
		</view> -->
		<view class="box-shawn" style="margin-top: 20upx;">
			<view class="content-1">
				<view class='label'>品名</view>
				<view class='items'>
					<input v-model="form.latentTradeName" placeholder="请填写详细品名"></input>
				</view>
			</view>
			<view class="content-1">
				<view class='label'>规格</view>
				<view class='items'>
					<input v-model="form.specification" placeholder="请填写"></input>
				</view>
			</view>
			<view class="content-1">
				<view style="width:120upx;">密度</view>
				<view style="width: 240upx;" class="flex_c_c">
					<text style="color: #000000">经：</text>
					<input v-model="form.densityLongitude" placeholder="请填写数量" type="number"></input>
				</view>
				<view style="width: 240upx;padding-left: 20upx;" class="flex_c_c">
					<text style="color: #000000">纬：</text>
					<input v-model="form.densityLatitude" placeholder="请填写数量" type="number"></input>
				</view>
				<view style="padding-left: 30upx;">条</view>
			</view>
			<view class="content-1">
				<view class='label'>品质定位</view>
				<view class='items'>
					<myPickerPart v-if="selectList.qualityList.length>0" :items="selectList.qualityList" @mychange="pickerChange('quality',$event)" :firstLabel='form.qualityCode'></myPickerPart>
				</view>
			</view>
			<view class="content-1">
				<view class='label'>订单数量</view>
				<view class='items'>
					<input v-model="form.purchaseQuantity" type="number" placeholder="请填写"></input>
				</view>
				<view style="justify-content: flex-end;">米</view>
			</view>
			<view class="content-1">
				<view class='label'>交期</view>
				<view v-for="(item,index) in selectList.deliveryTimeList" :key="index"
				    :class="activeIndex == item.id?'tabActive':'deliveryButton'"
					@tap="selectButton(item.id)"
				>
					{{item.label}}
				</view>
				
				<view style="width: 250upx;margin-left:30upx;display: flex;" v-if="activeIndex == '101660570722'">
					<input v-model="form.dayCount" type="number" placeholder="请填写"></input>
					<text>天</text>
				</view>
				
			</view>
			<view class="content-1">
				<view class='label'>目标价</view>
				<view style="width: 120upx;">
					<input v-model="form.buyerPrice" type="number" placeholder="请填写"></input>
				</view>
				<view style="width: 80upx;">元/米</view>
				<view style="display:flex;width: 46%;justify-content: flex-end;">
					<view @tap="tapTaxButton" :class="isTaxSelect?'tabActiveTax':'taxButton'">含税</view>
					<view @tap="tapCarrButton" :class="isCarriageSelect?'tabActiveTax':'taxButton'">含运费</view>
				</view>
			</view>
		</view>

		
		<view class="box-shawn" style="margin-top:20upx;">
			<view class="content-1">
				<view class='label'>订单属性</view>
				<view class='items'>
					<myPickerPart v-if="selectList.orderAddrList.length>0" :items="selectList.orderAddrList" @mychange="pickerChange('orderAddr',$event)" :firstLabel='form.attributeCode'></myPickerPart>
				</view>
			</view>
			<view class="content-1">
				<view class='label'>资金状况</view>
				<view class='items'>
					<myPickerPart v-if="selectList.capitalPositionList.length>0" :items="selectList.capitalPositionList" @mychange="pickerChange('capitalPosition',$event)" :firstLabel='form.positionCode'></myPickerPart>
				</view>
			</view>
			<view class="content-1">
				<view class='label'>供应链状况</view>
				<view class='items'>
					<myPickerPart v-if="selectList.supplyChainList.length>0" :items="selectList.supplyChainList" @mychange="pickerChange('supplyChain',$event)" :firstLabel='form.chainCode'></myPickerPart>
				</view>
			</view>
			<view class="content-1">
				<view class='label'>接单概率</view>
				<view class='items'>
					<myPickerPart v-if="selectList.orderProbabilityList.length>0" :items="selectList.orderProbabilityList" @mychange="pickerChange('orderProbability',$event)" :firstLabel='form.probabilityCode'></myPickerPart>
				</view>
			</view>
			<view class="content-1" @tap="toSelectInquiry">
				<view class='label'>选择关联单</view>
				<view class='items'>
					<text :style="{color:tradeName?'#333':'#909090'}">{{tradeName? tradeName : '非必填'}}</text>
				</view>
				<view style="justify-content: flex-end;">
					<uniIcon type="arrowright" size="20" color="#ACACAC"></uniIcon>
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
				item:'',
				
				delivery: ['现货','定织'],
				activeIndex: -1,
				isTaxSelect: false,
				isCarriageSelect: false,
				purcharseArr:[{id:'ss',label:'shenfen'},{id:'sl',label:'shenfen2'}],
				selectList:{
					warningLevelList:[],
					recordStatusList:[],
					failCauseList:[],
					qualityList:[],
					succesSauseList:[],
					orderProbabilityList:[],
					supplyChainList:[],
					capitalPositionList:[],
					orderAddrList:[],
					deliveryTimeList:[]
				},
				tradeName:'',      //关联的品名
				companyName:'',    //公司名
				form:{
					    recordCode: '',
						latentTradeName:'',         //品名
						purchaseQuantity:'',		//购买数量
						inquiryNumber:'',			//询价单号
					    specification:'',			//规格
						densityLongitude:'',		//密度经
						densityLatitude:'',		    //密度纬
						qualityCode:'',				//品质定位编码
						timeCode:'',			    //交期编码
						dayCount: 0,				//天数
						buyerPrice:'',				//目标价
						buyerIsPlusDuty:'',		    //目标价是否含税
						buyerIsIcash:'',			//目标价是否含运费
						attributeCode:'',			//订单属性编码
						positionCode:'',			//资金状况编码
						chainCode:'',				//供应链状况编码
					    probabilityCode:''		    //接单概率编码

				    }
				
			};
		},
		onLoad:function(options){
			_this = this
			this.form.recordCode = options.recordCode
			this.getFetch()
			this.getWarnLevel()
			this.getRecordStatus()
			this.getFailCause()
			
			this.getQuality()
			this.getOrderProbability()
			this.getSupplyChain()
			this.getCapitalPosition()
			this.getDeliveryTime()
			this.getOrderAddr()
		},
		methods:{
		    async getFetch(){
		    	let data ={
		    		recordCode: this.form.recordCode
		    	}
		    	const res = await this.$http.get('/latent/details',{data:data})
		        console.log(res)
		    	let item = res.data.data
				this.form.latentTradeName = item.latentTradeName|| '' 		//品名(别名)
				this.form.specification = item.specification|| ''		//规格
				this.form.densityLongitude = item.densityLongitude|| ''		//密度经
				this.form.densityLatitude = item.densityLatitude|| ''		//密度纬
				this.form.qualityCode = item.qualityCode|| ''				//品质定位编码
				this.form.purchaseQuantity = item.purchaseQuantity|| ''		//购买数量
				this.form.timeCode = item.timeCode|| ''					//交期编码
				this.form.dayCount = item.dayCount|| 0					//天数
				this.form.buyerPrice = item.buyerPrice|| 0				//目标价
				this.form.buyerIsPlusDuty = item.buyerIsPlusDutyCode|| ''		//目标价是否含税
				this.form.buyerIsIcash = item.buyerIsIcashCode|| ''			//目标价是否含运费
				this.form.attributeCode = item.attributeCode|| ''			//订单属性编码
				this.form.positionCode = item.positionCode|| ''			//资金状况编码
				this.form.chainCode = item.chainCode|| ''				//供应链状况编码
				this.form.probabilityCode = item.probabilityCode|| ''		//接单概率编码
				this.form.inquiryNumber = item.inquiryNumber|| ''			//询价单号
				this.tradeName = item.inquiryTradeName || ''                //询价单品名
				this.activeIndex = item.timeCode
				this.isTaxSelect = item.buyerIsPlusDutyCode==0? false : true
				this.isCarriageSelect = item.buyerIsIcashCode==0? false : true

		    },
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
				const res = await this.$http.get('/choose/fail_cause',{})
				this.selectList.failCauseList = res.data.data.list
				console.log(res)
			},
			async getQuality(){
				const res = await this.$http.get('/choose/quality',{})
				this.selectList.qualityList = res.data.data.list
				console.log(res)
			},
			
			async getOrderProbability(){
				const res = await this.$http.get('/choose/order_probability',{})
				this.selectList.orderProbabilityList = res.data.data.list
				console.log(res)
			},
			async getSupplyChain(){
				const res = await this.$http.get('/choose/supply_chain',{})
				this.selectList.supplyChainList = res.data.data.list
				console.log(res)
			},
			async getCapitalPosition(){
				const res = await this.$http.get('/choose/capital_position',{})
				this.selectList.capitalPositionList = res.data.data.list
				console.log(res)
			},
			async getDeliveryTime(){
				const res = await this.$http.get('/choose/delivery_time',{})
				this.selectList.deliveryTimeList = res.data.data.list
				console.log(res)
			},	
			async getOrderAddr(){
				const res = await this.$http.get('/choose/order_attribute',{})
				this.selectList.orderAddrList = res.data.data.list
				console.log(res)
			},
			
			pickerChange:function(label,event){
			  console.log(event)
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
				case 'orderProbability':
					 this.form.probabilityCode = event
					 break;
				
				case 'supplyChain':
					 this.form.chainCode = event
					 break;
				
				case 'capitalPosition':
					 this.form.positionCode = event
					 break;
			    case 'orderAddr':
					 this.form.attributeCode = event
					 break;
				
				case 'quality':
					 this.form.qualityCode = event
					 break;
				
				}
			},
			
			selectButton:function(e){
				console.log(e)
				this.activeIndex = e
			},
			
			
			toSelectInquiry:function(){
				uni.navigateTo({
					url: './connectInquiry',
					success: res => {},
					fail: (err) => { console.log(err)},
					complete: () => {}
				});
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
			selectBuyer:function(){
				uni.navigateTo({
					url: './selectBuyer',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			},
			async submit(){
				
                this.form.timeCode = this.activeIndex
				if (this.form.timeCode == "101660570722"){
					if (this.form.dayCount < 1){
						uni.showToast({
							title: '请填写定织时长',
							icon: 'none'
						})
					}
				}
				this.form.buyerIsPlusDuty = this.isTaxSelect? 1 : 0
				this.form.buyerIsIcash = this.isCarriageSelect? 1 : 0
				let data=this.form
				
                console.log(data)
				
				uni.showLoading({
					title: '提交中',
					mask: true
				})
				const res = await this.$http.post('/latent/update',{data:data})
				console.log(res)
				uni.hideLoading()
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

