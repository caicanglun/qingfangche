<template>
	<view>
		
		
		<view class='quote-regular'>
			<view class='wrap-quote'>
				
				<!-- <view class="quote-content">
					<view class="fs_13">
						计算规则：
					</view>
					<view>
						<switchButton :items='brokerage' @buttonChange="switchChange('brokerage',$event)"></switchButton>
					</view>
				</view> -->
				<!-- <view class="quote-content">
					<view class="quote-content-left">
						<view class="wid_241 fs_13">
							报价：
						</view>
						<input placeholder="请输入"  type='number' class="input" placeholder-style="font-size: 13px;" v-model="quotePrice" @input="rule1"></input>
					</view>
					
					<view>
						<switchButton :items='unit' @buttonChange="switchChange('unit',$event)"></switchButton>
					</view>
					
				</view> -->
				<view class="quote-content">
					 <view class="quote-content-left">
						 <view class="wid_241 fs_13">
							 挂码率：
						 </view>
						 <input placeholder="请输入" type='number' class="input" placeholder-style="font-size: 13px;" v-model="hangBitRate"></input>
					 </view>
   
					<view class="fs_13">
						%
					</view>
				</view>
				
				<view class="quote-content">
					 <view class="quote-content-left">
						 <view class="wid_241 fs_13">
								库存状态：
						 </view>
						<myPickerPart :items="inventory" @mychange="pickerChange('storeStatus',$event)"></myPickerPart>
					 </view>
				
				</view>
				<view class="quote-content">
					 <view class="quote-content-left">
						 <view class="wid_241 fs_13">
								交货地：
						 </view>
						<myPickerPart :items="placeOfDelivery" @mychange="pickerChange('placeOfDelivery',$event)"></myPickerPart>
					 </view>
				
				</view>
				
				<view class="quote-content no_border">
					<view class="fs_14">
						税：
					</view>

					<view>
						<switchButton :items='taxes' @buttonChange="switchChange('taxes',$event)"></switchButton>
					</view>
				</view>
				<view class='quote-content fs_10 color_999'>
					选择含税，会按规则自动计算税额
				</view>
				<view class="quote-content">
					<view class="fs_14">
						运费：
					</view>
					<view>
						<switchButton :items='carriage' @buttonChange="switchChange('carriage',$event)"></switchButton>
					</view>
				</view>
				
				<view class="quote-content" v-if="carriageIndex == 1">
					<view class="quote-content-left">
						<view class="wid_241 fs_13">
							运费单价：
						</view>
						<input placeholder="请输入"  type='number' 
						class="input" placeholder-style="font-size: 13px;" v-model="carriageContent"></input>
					</view>
	 
					<view class="fs_13">
						{{returnLabel}}
					</view>
					
				</view>
			  <!-- <view class="quote-content">
					 <view class="quote-content-left">
						 <view class="wid_241 fs_13">
							 交货地：
						 </view>
						 <input placeholder="请输入" class="input" placeholder-style="font-size: 13px;" v-model="deliveryPlace"></input>
					 </view>
			   
			   </view> -->
			   
			   
			   
			   <!-- <view class="quote-content">
					 <view class="quote-content-left">
						 <view class="wid_241 fs_13">
							 佣金比例：
						 </view>
						 <input placeholder="请输入" type='number' class="input" placeholder-style="font-size: 13px;" v-model="brokerageRate" @input="rule1"></input>
					 </view>

					<view class="fs_13">
						%
					</view>
			   </view> -->
			  
			  
			   
				
				<view class="quote-content">
					<view class="quote-content-left">
						<view class="wid_241 fs_13">
							直接报价：
						</view>
						<input placeholder="请输入"  type='number' class="input" placeholder-style="font-size: 13px;" v-model="finalPrice"></input>
					</view>
					
					<view class="fs_13">
						{{returnLabel}}
					</view>
					
				</view>
				<view class="quote-content">
								 <view class="quote-content-left">
									 <view class="wid_241 fs_13">
										 备注：
									 </view>
									 <input placeholder="请输入" class="input" placeholder-style="font-size: 13px;" v-model="remark"></input>
								 </view>
				
				</view>
				
			</view>
			
		</view>
		
		<view class='placeholder-view'></view>
		
		<view class="fixed_bottom box_shadow_btn">
		  <button class="btn_left" hover-class="none" @tap="bindCancel">取消</button>
		  <button class="btn_right" @tap="submit" hover-class="none">直接报价</button>
		</view>
		
	</view>
</template>

<script>
	import switchButton from '@/components/switchButton-auto.vue';
	import myPickerPart from "@/components/myPickerPart.vue";
	let _this,_inquiryNumber
	export default {
		components:{
			switchButton,
			myPickerPart
		},
		computed:{
			returnLabel:function(){
				let _label= ''
				this.unit.forEach((item)=>{
					if (item.id == _this.unitIndex){
						_label= item.label
					}
				})
				return _label
			}
		},
		data() {
			return {
				quotePrice:'',  //基础价格
			    brokerage:[],
				brokerageIndex: 1,  //佣金计算规则
				taxes:[],
				taxedIndex: 1,    //是否含税
				carriage:[],
				carriageIndex: 1,  //是否含运费
				unit:[],
				unitIndex: 1,      //价格单位
				carriagePrice: 0,   //运费单价
				brokerageRate:'',  //佣金比例
				remark: ''      ,//备注
				carriageSwitch: true,
				finalPrice:'',
				unitRate: 1,
				includeTaxes: 0.92,
				carriageContent: '',
				deliveryPlace:'' ,//交货地
				placeOfDelivery:'',  //交货地
				placeOfDeliveryIndex:'',  //交货地ID
				hangBitRate: '' , //挂码率
				inventoryCode: '', //库存状态码
				inventory:[]  //库存选项
				
	
			};
		},
		onLoad:function(options){
			_this = this
			_inquiryNumber = options.inquiryNumber
			this.getSelect()
		},
		methods:{
			pickerChange:function(label,index){
				switch (label){
					case 'sellers':{
						//this.sellersIndex = index
						break;
					}
					case 'storeStatus':{
						this.inventoryCode = index
						console.log(this.inventoryCode)
						break;
					}
					case 'placeOfDelivery':{
						this.placeOfDeliveryIndex = index
						console.log(this.placeOfDeliveryIndex)
						break;
					}
				}
			},
			// carriageFunc:function(){
			// 	this.carriagePrice = this.carriageContent
			// 	if(this.brokerageIndex==1){
			// 	  this.rule1()
			// 	}else{
			// 	  this.rule2()
			// 	}
			// },
			// rule1:function(){
			// 	//最终报价 = （报价/税比例 + 运费）*（1+佣金比例）
			// 	console.log('报价',this.quotePrice)
			// 	console.log('佣金',this.brokerageRate)
			// 	console.log('含税',this.includeTaxes)
			// 	console.log('运费单价1',this.carriagePrice)
			//     if(this.brokerageIndex==1){
			// 		this.finalPrice = ((this.quotePrice/this.includeTaxes + this.carriagePrice/1)*(1+this.brokerageRate/100)*_this.unitRate).toFixed(2)
			// 	}
				
			// },
			// rule2:function(){
			// 	console.log('报价',this.quotePrice)
			// 	console.log('佣金',this.brokerageRate)
			// 	console.log('含税',this.includeTaxes)
			// 	console.log('运费单价1',this.carriagePrice)
			// 	if(this.brokerageIndex==2){
			// 		console.log("daozheli")
			// 		this.brokerageRate = ((this.finalPrice/(this.quotePrice/this.includeTaxes + this.carriagePrice/1)-1)*100*_this.unitRate).toFixed(2)
			// 	}
				
				
			// },
			getSelect:function(){
				let data={}
				let url=this.Api.computationRule
				this.myRequest(data,url,'get').then(res => {
				  console.log(res);
					 _this.brokerage = res.data.data.list
				 }).catch(err => {
				  wx.showToast({
				    title: err.data.errMsg,
				    icon: 'none'
				  });
				});
				//运费
				url= this.Api.isIcash
				this.myRequest(data,url,'get').then(res => {
						console.log(res);
						_this.carriage = res.data.data.list
				 }).catch(err => {
					wx.showToast({
					  title: err.data.errMsg,
					  icon: 'none'
					});
				});
				//含税
				url= this.Api.isPlusDuty
				this.myRequest(data,url,'get').then(res => {
						console.log(res);
						_this.taxes = res.data.data.list
				 }).catch(err => {
					wx.showToast({
					  title: err.data.errMsg,
					  icon: 'none'
					});
				});
				// 报价单位
				url= this.Api.priceUnit
				this.myRequest(data,url,'get').then(res => {
						console.log(res);
						_this.unit = res.data.data.list
				 }).catch(err => {
					wx.showToast({
					  title: err.data.errMsg,
					  icon: 'none'
					});
				});
				//交货地
				url = this.Api.placeOfDelivery
				data = {}
				this.myRequest(data,url,'get').then(res => {
				  console.log(res);
				  _this.placeOfDelivery = res.data.data.list
				}).catch(err => {
				  wx.showToast({
				    title: err.data.errMsg,
				    icon: 'none'
				  });
				});
				//库存状态
				url= this.Api.inventory
				this.myRequest(data,url,'get').then(res => {
						console.log(res);
						_this.inventory = res.data.data.list
				 }).catch(err => {
						wx.showToast({
						  title: err.data.errMsg,
						  icon: 'none'
						});
				});
			},
			switchChange:function(label,index){

				switch (label){
					case 'unit':
					    this.unitIndex = index;
						// if (this.unitIndex == 1){
						// 	this.unitRate =1
						// }else{
						// 	this.unitRate = 0.9144
						// }
						console.log(this.unitIndex)
						break;
					case 'carriage':
					    this.carriageIndex = index;
						console.log(this.carriageIndex)
						// this.carriageSwitch = !this.carriageSwitch
						// if (this.carriageIndex== 0){
						// 	this.carriagePrice = ''
						// 	this.carriageContent = ''
						// }
						// if(this.brokerageIndex==1){
						//   this.rule1()
					 //    }else{
						//   this.rule2()
						// }
						break;
					case 'taxes':
					    this.taxedIndex = index;
						// console.log(this.taxedIndex)
						// if (this.taxedIndex == 1){
						// 	this.includeTaxes = 0.92
							
						// }else {
						// 	this.includeTaxes = 1
						// }
						// if(this.brokerageIndex==1){
						//   this.rule1()
						// }else{
						//   this.rule2()
						// }
						break;
					case 'brokerage':
					    this.brokerageIndex = index;
						console.log(this.brokerageIndex)
						break;
				}
			},
			submit:function(){
				
				let data={
					    inquiryNumber: _inquiryNumber,      //询价单号
						basicsPrice: _this.finalPrice,			//基础价格
						computationRule: 1    ,	//计算规则
						isIcash: _this.carriageIndex    ,				//是否含运费
						isPlusDuty: _this.taxedIndex    ,			//是否含税
						// freight: 0  ,				//运费
						freight: _this.carriagePrice   ,				//运费
						freightUnit: _this.unitIndex    ,			//运费单位
						commissionRate: 0,		//佣金比例
						remarks: _this.remark    ,				//备注
						finalPrice: _this.finalPrice    ,			//最终价格
						finalPriceUnit: _this.unitIndex    ,	//最终价格单位
						placeOfDelivery: _this.placeOfDeliveryIndex ,//交货地
						hangBitRate: _this.hangBitRate , //挂码率
						inventoryCode: _this.inventoryCode, //库存状态码
				}
				let url = this.Api.buyDeputyDirectPrice
				uni.showLoading({
					title: '提交中',
					mask: true
				});
				this.myRequest(data,url,'post').then(res => {
						console.log(res);
						uni.hideLoading()
						if (res.data.status == 0){
						   uni.showToast({
						   	title: '报价成功',
							icon: 'none',
							duration: 1000
						   });
						   this.refreshBack();
						}else{
							uni.showToast({
								title: res.data.message,
								icon: 'none',
								duration: 1000
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
     page{
		 background-color: #F4F4F4;
	 }
	 .wrap-box{
		 padding: 43upx 0upx 0upx 38upx;
		 background-color: #FFFFFF;
	 }
	 .wrap-quote{
		  padding: 36upx 30upx 0upx 40upx;
	 }
	 
	 .top-box{
		
		 .top-title{
			 padding-left: 3upx;
			 font-size: 15px;
			 font-weight: bold;
		 }
		 .top-content{
			 display: flex;
			 align-items: center;
			height: 56upx;
		 }
		 
	 }
	 
	.quote-regular{
		// margin-top: 20upx;
		background-color: #FFFFFF;
		color: #333236;
	}

	.quote-title{
		font-size: 15px;
		font-weight: bold;
		height: 65upx;
	}
	.quote-content{
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 65upx;
		border-bottom: 1upx solid #EDEDED;
	}
	.quote-content-82{
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 82upx;
		border-bottom: 1upx solid #EDEDED;
	}
	.no_border{
		border: none;
	}
	.input{
		width: 250upx;
		font-size: 13px;
	}
	.quote-content-left{
		display: flex;
		align-items: center;
	}
	.wid_241{
		width: 241upx;
	}
	.fixed_bottom{
	  width: 100%;
	  position: fixed;
	  bottom: 0;
	  display: flex;
	  z-index: 999;
	}
	.btn_left{
	  width: 50%;
	  background-color: #fff;
	  color: #FF6000;
	  border-radius: 0;
	  font-size: 16px;
	  line-height: 88upx;
	}
	.btn_right{
	  width: 50%;
	  background-color: #FF6000;
	  color: #fff;
	  border-radius: 0;
	  font-size: 16px;
	  line-height: 88upx;
	}
	
</style>
