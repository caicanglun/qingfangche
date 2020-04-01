<template>
	<view>
		<view class="form_box box_shadow">
		     <view class="flex_c list">
		       <!-- <view class="line"></view> -->
		       <view class="font_we_bold fs_16">生产状态 </view>
		     </view>
			  <pickerButton :items="machineStatus" name="织机状态" @buttonChange="tabSwitchChange('machineStatus',$event)"></pickerButton>
			  <view v-if="machineStatusIndex==1">
				  <pickerInput @mychange="tabSwitchChange('machineType',$event)"
				  :items="machineType" :firstLabel="machineTypeValue" name="织机类型" fontSize="font-size:14px;"></pickerInput>
				  <pickerInput @mychange="tabSwitchChange('machineBrand',$event)"
				  :items="machineBrand" :firstLabel="machineBrandValue" name="织机品牌" fontSize="font-size:14px;"></pickerInput>
				  <view class="flex_c list" style="position: relative;">
				    <view>织机数量：</view>
				    <input placeholder-class="color_909090 fs_13" type="number" class="input" placeholder="请输入" name="machineCount" v-model="machineCount"></input>
				    <view style="position:absolute;top:15upx;right:0;">台</view>
				  </view>
				  <view class="flex_c list" style="position: relative;">
				    <view>单机产量：</view>
				    <input placeholder-class="color_909090 fs_13" type="number" class="input" placeholder="请输入" name="dailyProduction" v-model="dailyProduction"></input>
				    <view style="position:absolute;top:15upx;right:0;">{{goodsDetail.goodsCountUnitName||'米'}}</view>
				  </view>
				  <view class="flex_c list" style="position: relative;">
				    <view>日总产量：</view>
				    <view>{{machineCount*dailyProduction}}</view>
				    <view style="position:absolute;top:15upx;right:0;">{{goodsDetail.goodsCountUnitName||'米'}}</view>
				  </view>
			  </view>
			
		</view>
		<view class="form_box box_shadow">
		     <view class="flex_c list">
		       <!-- <view class="line"></view> -->
		       <view class="font_we_bold fs_16">现货存量 </view>
		     </view>
			 <pickerButton :items="inStock" name="现货状态:" @buttonChange="tabSwitchChange('inStock',$event)"></pickerButton>
			 <view class="flex_sb list" style="align-items: center;">
			 	<view>现货数量：</view>
			 	<view><input v-model="goodsCount" placeholder="请输入数量" placeholder-style="color:#909090;font-size:13px;" /></view>
			 	<switchButtonEdit :items='lengthUnit' @buttonChange="tabSwitchChange('lengthUnit',$event)"></switchButtonEdit>
				
			 </view>
			  
		</view>
		
		<view class="fixed_bottom box_shadow_btn">
		  
		  <button class="btn_all" @tap="submit" hover-class="none">确定</button>
		</view>
		
	</view>
</template>

<script>
	import pickerInput from "@/components/pickerInput.vue";
	import pickerButton from "@/components/pickerButton-edit.vue";
	import switchButtonEdit from "@/components/switchButton-edit.vue";
	let _this
	export default {
		components:{
			pickerInput,
			pickerButton,
			switchButtonEdit
		},
		data() {
			return {
				machineStatus:[],   //织机状态
				machineStatusIndex: 1,
				inStock:[],
				inStockIndex: 1,
				lengthUnit:[],
				legnthUnitIndex: 1,
				goodsCount: '',//现货数量
				machineCount: '', //机台数量
				dailyProduction: '', //单台产量
				machineType:[],  //机台类型
				machineTypeIndex: -1,
				machineTypeValue:'',
				
				
				machineBrand: [],
				machineBrandIndex: '',
				machineBrandValue:'',
				goodsDetail:''
			};
		},
		onShow:function(){
			
		},
		onLoad:function(options){
			_this = this
			this.goodsDetail = JSON.parse(options.goodsDetail)
			
			_this.machineStatusIndex = this.goodsDetail.machineStatusCode
			_this.inStockIndex = this.goodsDetail.inStockCode
			_this.lengthUnitIndex = this.goodsDetail.goodsCountUnitCode
			_this.machineTypeValue = this.goodsDetail.machineTypeName
			_this.machineTypeIndex = this.goodsDetail.machineTypeCode
			_this.machineBrandValue = this.goodsDetail.machineBrandName
			_this.machineBrandIndex = this.goodsDetail.machineBrandCode
			_this.machineCount = this.goodsDetail.machineCount
			_this.goodsCount = this.goodsDetail.goodsCount
			_this.dailyProduction = this.goodsDetail.dailyProduction
			this.getAllSelect()
			
		},
		methods:{
			getAllSelect:function(){
						 
						  //在机状态
						  let url = this.Api.machineStatus
						  let data = {}
						  this.myRequest(data,url,'get').then(res => {
						    console.log(res);
						    _this.machineStatus = res.data.data.list
							_this.machineStatus = this.setIsChecked(_this.machineStatus,_this.machineStatusIndex)
						  				
						  }).catch(err => {
						    wx.showToast({
						      title: err.data.errMsg,
						      icon: 'none'
						    });
						  });
						  //现货状态
						  url = this.Api.inStock
						  data = {}
						  this.myRequest(data,url,'get').then(res => {
						    console.log(res);
						    _this.inStock = res.data.data.list
							_this.inStock = this.setIsChecked(_this.inStock,_this.inStockIndex)
						  				
						  }).catch(err => {
						    wx.showToast({
						      title: err.data.errMsg,
						      icon: 'none'
						    });
						  });
						  //织机类型下拉数据
						  url = this.Api.machineType
						  data = {}
						  this.myRequest(data,url,'get').then(res => {
						    console.log(res);
						    _this.machineType = res.data.data.list
						  				
						  }).catch(err => {
						    wx.showToast({
						      title: err.data.errMsg,
						      icon: 'none'
						    });
						  });
						  //织机品牌下拉数据
						  url = this.Api.machineBrand
						  data = {}
						  this.myRequest(data,url,'get').then(res => {
						    console.log(res);
						    _this.machineBrand = res.data.data.list
						  				
						  }).catch(err => {
						    wx.showToast({
						      title: err.data.errMsg,
						      icon: 'none'
						    });
						  });
						  //购买数量单位选择数据
						  url = this.Api.quantityUnit
						  data = {}
						  this.myRequest(data,url,'get').then(res => {
						    console.log(res);
						    _this.lengthUnit = res.data.data.list
						  	_this.lengthUnit = this.setIsChecked(_this.lengthUnit,_this.lengthUnitIndex)
						  }).catch(err => {
						    wx.showToast({
						      title: err.data.errMsg,
						      icon: 'none'
						    });
						  });
						  
						  
						  
			},
			submit:function(){
				// if (_this.machineStatusIndex ==0){
				// 	_this.machineTypeIndex ='' //	织机类型编码
				// 	_this.machineTypeValue =''
				// 	_this.machineBrandIndex =''	//织机品牌编码
				// 	_this.machineBrandValue ='' 
				// 	_this.machineCount =''//		织机数量
				// 	_this.dailyProduction ='' //	单机日产量
				// }
				let url = this.Api.goodsUpdate
				let data = {
					    goodsCode:_this.goodsDetail.goodsCode, //产品编码
						machineTypeCode:_this.machineTypeIndex, //	织机类型编码
						machineTypeName:_this.machineTypeValue,
						machineStatus: _this.machineStatusIndex, //织机状态编码
						machineBrandCode: _this.machineBrandIndex,	//织机品牌编码
						machineBrandName: _this.machineBrandValue, 
						machineCount: _this.machineCount,//		织机数量
						dailyProduction: _this.dailyProduction, //	单机日产量
						inStock: _this.inStockIndex,		  //现货状态编码
						goodsCount:_this.goodsCount,  //现货数量
					    goodsCountUnit: _this.lengthUnitIndex  //数量单位

				}
				console.log(data)
				uni.showLoading({
					title: '提交中',
					mask: true
				});
				this.myRequest(data,url,'post').then(res => {
				  console.log(res);
				   uni.hideLoading()
				  if (res.data.status==0){
					  uni.showToast({
					  	title:'更新成功'
					  });
					  uni.navigateBack({
					  	delta: 1
					  });
				  }else {
					  uni.showToast({
					  	title:res.data.message,
						icon:'none'
					  })
				  }
				  
								
				}).catch(err => {
					console.log(err)
				  uni.showToast({
				    title: err.data.errMsg,
				    icon: 'none'
				  });
				});
			},
			tabSwitchChange:function(label,event){
						  switch (label){
							case 'lengthUnit':
								  this.lengthUnitIndex = event
								 console.log(this.lengthUnitIndex)
								 this.lengthUnit.forEach((item)=>{
									 if (item.id == this.lengthUnitIndex){
										 this.$set(item,'isChecked',true)
									 }else{
										 this.$set(item,'isChecked',false)
									 }
								 })
								 break; 
							case 'machineStatus':
								 this.machineStatusIndex = event
								 console.log(this.machineStatusIndex)
								 this.machineStatus.forEach((item)=>{
									 if (item.id == this.machineStatusIndex){
										 this.$set(item,'isChecked',true)
									 }else{
										 this.$set(item,'isChecked',false)
									 }
								 })
								 break;
							 case 'inStock':
								 this.inStockIndex = event
								 console.log(this.inStockIndex)
								 this.inStock.forEach((item)=>{
									 if (item.id == this.inStockIndex){
										 this.$set(item,'isChecked',true)
									 }else{
										 this.$set(item,'isChecked',false)
									 }
								 })
								 break;
							case 'machineType':
								 this.machineTypeIndex = event[1] || -1
								 this.machineTypeValue = event[0]
								 
								 console.log(this.machineBrandIndex)
								 console.log(this.machineTypeValue)
								 
								 break;
							case 'machineBrand':
								this.machineBrandIndex = event[1] || -1
								this.machineBrandValue = event[0]
								
								console.log(this.machineBrandIndex)
								console.log(this.machineTypeValue)
												 
								break;
			             }
	        }
		}
	}
</script>

<style lang="scss">
	page {
		background:#f4f4f4;
	}
   .form_box{
     background-color:#fff; 
     font-size: 14px;
     margin-bottom: 20upx;
   }
   .list{
     margin: 0 30upx;
     /* padding:0 10upx; */
     border-bottom: 1upx solid rgba(221, 221, 221, 0.3);
     line-height: 87upx;
     color: #333236;
   }
   .fixed_bottom{
     width: 750upx;
     position: fixed;
     bottom: 0;
     display: flex;
     z-index: 999;
   }
   
   .btn_all{
     width: 100%;
     background-color: #FF6000;
     color: #fff;
     border-radius: 0;
     font-size: 16px;
     line-height: 98upx;
   }
</style>
