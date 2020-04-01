<template>
	<view>
		<view class='wrap-box'> 
			<view class="top-box">
				<view class="top-title">
					卖办报价基本信息
				</view>
			    <view class='mt_20'>
					<view class="top-content">
					      <text class='fs_14'>报价：</text><text class='fs_14 color_FF6000'> {{quoteList.unitPrice||''}} </text>
					</view>
					 <view class="top-content fs_14">
					        <text>{{quoteList.isPlusDuty||''}}</text><text class='ml_30'>{{quoteList.isIcash||''}}  </text><text class='color_999 ml_30'>交货地：</text><text>{{quoteList.placeOfDelivery||''}}</text>
					 </view>
					 <view class="top-content fs_13">
					       <text class="color_999">卖帮办：</text><text>{{quoteList.sellDeputyName||''}} </text>
					 </view>
					 <view class="top-content fs_13">
					       <text class="color_999">卖家：</text><text> {{quoteList.companyCode||''}}</text>
					 </view>
					 <view class="top-content fs_13">
					       <text class="color_999">库存状态：</text><text>{{quoteList.inventory||''}} </text>
					 </view>
					
					<view class="top-content fs_11">
					      <text class="color_999">报价时间：{{quoteList.createTime||''}}</text>
					</view>
					        
				</view>
				
			</view> 
		</view>    <!-- 顶部框 -->
		
		<view class='quote-regular'>
			<view class='wrap-quote'>
				<view class="quote-title">
					报价规则
				</view>
				<view class="quote-content">
					<view class="fs_14">
						计算规则：
					</view>
					<view>
						<switchButtonOne :items='brokerage' @buttonChange="switchChange('brokerage',$event)"></switchButtonOne>
					</view>
				</view>
				<!-- <view class="quote-content">
					<view class="quote-content-left">
						<view class="wid_241 fs_14">
							报价：
						</view>
						<input placeholder="请输入"  type='number' class="input" placeholder-style="font-size: 13px;" v-model="quotePrice" @input="rule1"></input>
					</view>
					
					<view>
						<switchButton :items='unit' @buttonChange="switchChange('unit',$event)"></switchButton>
					</view>
					
				</view> -->
				<view class="quote-content no_border">
					<view class="fs_14">
						税：
					</view>

					<view>
						<switchButton :items='taxes' @buttonChange="switchChange('taxes',$event)" ></switchButton>
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
						<view class="wid_241 fs_14">
							运费单价：
						</view>
						<input placeholder="请输入"  type='number' 
						class="input" placeholder-style="font-size: 13px;" v-model="carriageContent" @input="carriageFunc"></input>
					</view>
	 
					<view class="fs_14">
						{{returnLabel}}
					</view>
					
				</view>
			
			   <view class="quote-content">
					 <view class="quote-content-left">
						 <view class="wid_241 fs_14">
							 佣金比例：
						 </view>
						 <view v-if="brokerageIndex==2">{{brokerageRate}}</view>
						 <view v-else>
							 <input placeholder="请输入" type='number' class="input" placeholder-style="font-size: 13px;" v-model="brokerageRate" @input="rule1">
						 </view>
						 
					 </view>

					<view class="fs_14">
						%
					</view>
			   </view>
			   <view class="quote-content">
				 <view class="quote-content-left">
					 <view class="wid_241 fs_14">
						 备注：
					 </view>
					 <input placeholder="非必填" class="input" placeholder-style="font-size: 13px;" v-model="remark"></input>
				 </view>

			   </view>
			   
				
				<view class="quote-content">
					<view class="quote-content-left">
						<view class="wid_241 fs_14">
							最终报价：
						</view>
						<view v-if="brokerageIndex==1">{{finalPrice}}</view>
						<view v-else>
							<input placeholder="请输入"  type='number' class="input" placeholder-style="font-size: 13px;" v-model="finalPrice" @input="rule2"></input>
						</view>
					</view>
					
					<view>
						<switchButton :items='unit' @buttonChange="switchChange('unit',$event)"></switchButton>
					</view>
					
				</view>
				
			</view>
			
		</view>
		
		<view class='placeholder-view'></view>
		
		<view class="fixed_bottom box_shadow_btn">
		  <button class="btn_left" hover-class="none" @tap="bindCancel">取消</button>
		  <button class="btn_right" @tap="submit" hover-class="none">推送报价</button>
		</view>
		
	</view>
</template>

<script>
	import switchButtonOne from '@/components/switchButton-auto.vue';
	import switchButton from '@/components/switchButton-edit.vue';
	let _this,_quotationNumber
	export default {
		components:{
			switchButton,
			switchButtonOne
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
				quoteList: {},
				quotePrice:'',  //基础价格
			    brokerage:[],
				brokerageIndex: 1,  //佣金计算规则
				taxes:[],
				taxedIndex: 1,    //是否含税
				carriage:[],
				carriageIndex: 0,  //是否含运费
				unit:[],
				unitIndex: 1,      //价格单位
				upUnit:1,
				carriagePrice: 0,   //运费单价
				brokerageRate:'',  //佣金比例
				remark: ''      ,//备注
				carriageSwitch: true,
				finalPrice:'',
				unitRate: 1,
				includeTaxes: 1,
				carriageContent: '',
				upTax: 0,
				downTax: 0
				
	
			};
		},
		onshow:function(){
			
		},
		onLoad:function(options){
			_this = this
			_quotationNumber = options.quotationNumber

			this.getSelect()
		
			
		},
		methods:{
			carriageFunc:function(){
				this.carriagePrice = this.carriageContent
				if(this.brokerageIndex==1){
				  this.rule1()
				}else{
				  this.rule2()
				}
			},
			rule1:function(){
				//最终报价 = （报价/税比例 + 运费）*（1+佣金比例）
				console.log('报价',this.quotePrice)
				console.log('佣金',this.brokerageRate)
				console.log('含税',this.includeTaxes)
				console.log('运费单价1',this.carriagePrice)
				this.includeTaxes = this.upTax - this.downTax
				console.log(this.upTax)
				console.log(this.downTax)
				console.log('税比例',this.includeTaxes)
				console.log("mima",this.unitRate)
				this.setUnit()
			    if(this.brokerageIndex==1){
					if (_this.unitIndex ==1){
						this.finalPrice = ((this.quotePrice/this.includeTaxes + this.carriagePrice/1)*(1+this.brokerageRate/100)*this.unitRate).toFixed(2)
					}else{
						this.finalPrice = ((this.quotePrice/this.includeTaxes + this.carriagePrice/1)*(1+this.brokerageRate/100)/this.unitRate).toFixed(2)
					}
					
				}
				
			},
			rule2:function(){
				console.log('报价',this.quotePrice)
				console.log('佣金',this.brokerageRate)
				console.log('运费单价',this.carriagePrice)
				this.includeTaxes = this.upTax - this.downTax
				console.log("税比例",this.includeTaxes)
				// if (quoteList.isPlusDutyCode==1){
				// 	if (this.taxedIndex ==0){
						
				// 	}
				// }
				this.setUnit()
				if(this.finalPrice==''){
					return
				}
				if(this.brokerageIndex==2){
					console.log("daozheli")
					if (_this.unitIndex ==1){
					  this.brokerageRate = ((this.finalPrice*_this.unitRate/(this.quotePrice/this.includeTaxes + this.carriagePrice/1)-1)*100).toFixed(2)
					}else{
					  this.brokerageRate = ((this.finalPrice/_this.unitRate/(this.quotePrice/this.includeTaxes + this.carriagePrice/1)-1)*100).toFixed(2)
					}
				}
				
				
			},
			setUnit:function(){
				if (this.unitIndex == this.upUnit){
					this.unitRate = 1
				}else {
					this.unitRate = 0.9144
				}
			},
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
				url= this.Api.buyDeputySetDetails
				data= {
					quotationNumber:_quotationNumber
				}
				this.myRequest(data,url,'get').then(res => {
						console.log("baojiadan",res);
						_this.quoteList = res.data.data
						
						_this.taxedIndex = _this.quoteList.isPlusDutyCode
						if (_this.taxedIndex == 1){
							_this.upTax = 2.16
							_this.downTax = 1.16
						}else {
							_this.upTax = 2.08
							_this.downTax = 1.08
						}
						_this.arrChecked(_this.unit,_this.quoteList.priceUnit)
						_this.arrChecked(_this.taxes,_this.quoteList.isPlusDutyCode)
						console.log("shuifei",_this.taxes)
						_this.arrChecked(_this.carriage,_this.quoteList.isIcashCode)
						console.log(_this.unit)
						
						_this.carriageIndex = _this.quoteList.isIcashCode
						_this.unitIndex = _this.quoteList.priceUnit
						_this.upUnit = _this.quoteList.priceUnit
						console.log('运费',_this.carriageIndex)
						console.log('税',_this.taxedIndex)
						console.log('单位',_this.unitIndex)
						_this.quotePrice = parseFloat(res.data.data.unitPrice)
				 }).catch(err => {
					wx.showToast({
					  title: err.data.errMsg,
					  icon: 'none'
					});
				});
			},
			arrChecked:function(arr,index){
				arr.forEach((item)=>{
					if (item.id == index){
						this.$set(item,'isChecked',true)
					}				
					else{
						this.$set(item,'isChecked',false)
					}
				})
			},
			switchChange:function(label,index){

				switch (label){
					case 'unit':
					  this.arrChecked(this.unit,index)
					    
					    this.unitIndex = index;
						
						
						if(this.brokerageIndex==1){
							  this.rule1()
						}else{
							  this.rule2()
						}
						
						console.log(this.unitIndex)
						break;
					case 'carriage':
					     this.arrChecked(this.carriage,index)
					    this.carriageIndex = index;
						console.log(this.carriageIndex)
						this.carriageSwitch = !this.carriageSwitch
						if (this.carriageIndex== 0){
							this.carriagePrice = ''
							this.carriageContent = ''
						}
						if(this.brokerageIndex==1){
						  this.rule1()
					    }else{
						  this.rule2()
						}
						break;
					case 'taxes':
					     this.arrChecked(this.taxes,index)
					    this.taxedIndex = index;
						console.log(this.taxedIndex)
						if (this.taxedIndex == 1){
							this.downTax = 1.16
							
						}else{
							this.downTax = 1.08
						}
						if(this.brokerageIndex==1){
						  this.rule1()
						}else{
						  this.rule2()
						}
						break;
					case 'brokerage':
					    this.arrChecked(this.brokerage,index)
					    this.brokerageIndex = index;
						this.brokerageRate = ''
						this.finalPrice = ''
						console.log(this.brokerageIndex)
						break;
				}
			},
			submit:function(){
				if(_this.carriageIndex == 1){
					if(_this.carriagePrice<=0){
						uni.showToast({
							title: '运费不能为零',
							icon:'none',
							duration: 1000
						});
						return
					}
				}
				if(_this.finalPrice <=0){
					
					uni.showToast({
						title: '报价不能为零',
						icon:'none',
						duration: 1000
					});
					return
					
				}
				let data={
					    quotationNumber:   _this.quoteList.quotationNumber ,	//询价单号
						basicsPrice: _this.quotePrice    ,			//基础价格
						computationRule: _this.brokerageIndex    ,	//计算规则
						isIcash: _this.carriageIndex    ,				//是否含运费
						isPlusDuty: _this.taxedIndex    ,			//是否含税
						freight: _this.carriagePrice||0  ,				//运费
						freightUnit: _this.unitIndex    ,			//运费单位
						commissionRate: _this.brokerageRate    ,		//佣金比例
						remarks: _this.remark    ,				//备注
						finalPrice: _this.finalPrice    ,			//最终价格
						finalPriceUnit: _this.unitIndex    ,	//最终价格单位
				}
				let url = this.Api.buyDeputySetPrice
				uni.showLoading({
					title:'',
					mask: true
				})
				this.myRequest(data,url,'post').then(res => {
					    uni.hideLoading()
						
						console.log(res);
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
							return
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
			 font-size: 16px;
			 font-weight: bold;
		 }
		 .top-content{
			 display: flex;
			 align-items: center;
			height: 56upx;
		 }
		 
	 }
	 
	.quote-regular{
		margin-top: 20upx;
		background-color: #FFFFFF;
		color: #333236;
	}

	.quote-title{
		font-size: 16px;
		font-weight: bold;
		height: 65upx;
	}
	
	.no_border{
		border: none;
	}
	.input{
		width: 250upx;
		font-size: 14px;
	}
	.quote-content{
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 65upx;
		border-bottom: 1upx solid #EDEDED;
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
