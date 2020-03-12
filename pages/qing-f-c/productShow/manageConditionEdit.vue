<template>
	<view>
		<view style="padding:20upx 20upx  0 20upx;background: #FFFFFF;">
			<text style="font-size:16px;font-weight: bold;">主营产品类型</text>
			<text style="color: #999999;font-size:14px;">（可多选）</text>
		</view>
		
		<view style="padding:20upx 20upx;background: #FFFFFF;">
			<myCheckboxGroup @selectChange="tabSwitchChange('mainProduct',$event)" :items="mainProduct"></myCheckboxGroup>
		</view>
		<popupMeAdd ref="addMachineInfo" @input="getMachineInfo" title="请填写织机信息"></popupMeAdd>
		<view style="padding:20upx 20upx  0 20upx;background: #FFFFFF;">
			<text style="font-size:16px;font-weight: bold;">主营产品系列</text>
			<text style="color: #999999;font-size:14px;">（可多选）</text>
		</view>
		<view style="padding:20upx 20upx;background: #FFFFFF;">
			<myCheckboxGroup @selectChange="tabSwitchChange('productSerial',$event)" :items="productSerial"></myCheckboxGroup>
		</view>
		
		<view style="padding:20upx 20upx  0 20upx;background: #FFFFFF;">
			<text style="font-size:16px;font-weight: bold;">织机信息</text>
		</view>
		<block v-for="(item,index) in weavingMachineList" :key="index">
			<view style="padding: 0 20upx;background:#ffffff;">
				<uni-swipe-action :options="options2" @click="bindClick(item.machineCode)">
					<view  class="flex_c" style="height:60upx;border-bottom: 1upx solid #F4F4F4;">
						{{item.machineName}}：{{item.machineCount}}
					</view>
				</uni-swipe-action>
			</view>
			
		</block>
		<view class="flex_c_c" style="background: #FFFFFF;padding-top:40upx;" @tap="tapAddMachine">
			<uniIcon type="plus" size="16" color="#ff6000"></uniIcon><text style="color:#FF6000;font-size:13px;">添加织机数量</text>
		</view>
		<view style="height:200upx;background: #FFFFFF;width:100%;"></view>
		
		<view class="fixed_bottom box_shadow_btn">
		  <button class="btn_left" hover-class="none" @tap="bindCancel">取消</button>
		  <button class="btn_right" @tap="submit" hover-class="none">确定</button>
		</view>
	</view>
</template>

<script>
	import myCheckboxGroup from "@/components/myCheckboxGroup.vue";
	import uniIcon from "@/components/uni-icons/uni-icons.vue";
	import popupMeAdd from "@/components/popupMe-addM.vue"
	import uniSwipeAction from '@/components/uni-swipe-action/uni-swipe-action.vue'
	let _this
	export default {
		components:{
			myCheckboxGroup,
			uniIcon,
			popupMeAdd,
			uniSwipeAction
		},
		data() {
			return {
				mainProductList:[],
				seriesList:[],
				seriesListTemp:[],
				mainProductListTemp:[],
				companyCode:'',
				options2: [
				{
					text: '删除',
					style: {
						backgroundColor: '#FF6000'
					}
				}],
				mainProduct:'',
				mainProductIndex:'',
				productSerial:'',
				machineName:'',
				machineCount:'',
				weavingMachineList:[]
			};
		},
		onShow:function(){
			this.getAllSelect()
			this.getManageProfile()
		},
		onLoad:function(options){
			_this = this
			this.companyCode = options.companyCode
			this.getAllSelect()
			this.getManageProfile()
		},
		methods:{
			getAllSelect:function(){
				  //产品类型
				  let url= this.Api.getMainProduct
				  let data={}
				  this.myRequest(data,url,'get').then(res => {
					console.log(res);
						_this.mainProduct = res.data.data.list
				   }).catch(err => {
					wx.showToast({
					  title: err.data.errMsg,
					  icon: 'none'
					});
				  });
				  
				  //产品系列选项
				  url = this.Api.series
				  data = {}
				  this.myRequest(data,url,'get').then(res => {
					console.log(res);
					_this.productSerial = res.data.data.list
				  }).catch(err => {
					wx.showToast({
					  title: err.data.errMsg,
					  icon: 'none'
					});
				  });  
						  
			},
			//获取经营概况
			getManageProfile:function(){
				let url= this.Api.manageProfile
				let data={
					companyCode:_this.companyCode
				}
				this.myRequest(data,url,'get').then(res => {
					console.log(res);
					if (res.data.status==0){
						
						_this.mainProductLisTemp = res.data.data.mainProductList
						_this.mainProductLisTemp.forEach((item)=>{
							_this.mainProduct.forEach((product)=>{
								if (product.id == item.id){
									_this.$set(product,'isChecked',true)
									
								}
							})
						})
						
						_this.seriesListTemp = res.data.data.seriesList
						_this.seriesListTemp.forEach((item)=>{
							_this.productSerial.forEach((product)=>{
								if (product.id == item.id){
									_this.$set(product,'isChecked',true)
									
								}
							})
						})

						
						_this.weavingMachineList = res.data.data.weavingMachineList

					}
						
				 }).catch(err => {
						wx.showToast({
						  title: err.data.errMsg,
						  icon: 'none'
						});
				});
			},
			//获取经营概况
			getManageMachineList:function(){
				let url= this.Api.manageProfile
				let data={
					companyCode:_this.companyCode
				}
				this.myRequest(data,url,'get').then(res => {
					console.log(res);
					if (res.data.status==0){

						_this.weavingMachineList = res.data.data.weavingMachineList
			
					}
						
				 }).catch(err => {
						wx.showToast({
						  title: err.data.errMsg,
						  icon: 'none'
						});
				});
			},
			//处理多选项
			tabSwitchChange:function(label,index){
				if (label=="mainProduct"){
					let items = this.mainProduct
					for (var i = 0, lenI = items.length; i < lenI; ++i) {
						const item = items[i]
						if (item.id == index) {
							this.$set(item,'isChecked',!item.isChecked)
						}
					}
				}
				if (label=="productSerial"){
					let items = this.productSerial
					for (var i = 0, lenI = items.length; i < lenI; ++i) {
						const item = items[i]
						if (item.id == index) {
							this.$set(item,'isChecked',!item.isChecked)
						}
					}
				}
				
				 
			  },
			  //划动删除按钮
			  bindClick:function(e){
				 let url= this.Api.weavingMachineDel
				 let data={
					 machineCode: e
				 }
				 uni.showLoading({
				 	title: '加载中',
				 	mask: true
				 });
				 this.myRequest(data,url,'get').then(res => {
						console.log(res);
						if (res.data.status == 0){
							uni.hideLoading()
							_this.getManageMachineList()
						}
							
				  }).catch(err => {
						wx.showToast({
						  title: err.data.errMsg,
						  icon: 'none'
						});
				 });
			  },
			  //弹出框激活
			  tapAddMachine:function(){
				  this.$refs.addMachineInfo.show()
			  },
			  //织布机信息添加
			  getMachineInfo:function(e){
				 this.machineName = e[0]
				 this.machineCount = e[1]
				 console.log(this.machineName)
				 console.log(this.machineCount)
				 let url= this.Api.weavingMachineAdd
				 let data={
					 companyCode:_this.companyCode,   //公司编码
					 machineName: _this.machineName,//	织机名
					 machineCount: _this.machineCount	//	织机数量

				 }
				 uni.showLoading({
				 	title: '加载中',
				 	mask: true
				 });
				 this.myRequest(data,url,'get').then(res => {
				 		console.log(res);
						if (res.data.status==0){
							uni.hideLoading()
							_this.getManageMachineList()
						}
				 		
				  }).catch(err => {
						uni.showToast({
						  title: err.data.errMsg,
						  icon: 'none'
						});
				 });
				 
			  },
			  submit:function(){
				  let url = _this.Api.profileUpdate
				  _this.mainProduct.forEach((item)=>{
					  if (item.isChecked){
						  _this.mainProductList.push(item.id)
					  }
				  })
				  _this.productSerial.forEach((item)=>{
					  if (item.isChecked){
						  _this.seriesList.push(item.id)
					  }
				  })
				  let data ={
				  	companyCode: _this.companyCode,  // 公司编码 
					mainProductList: _this.mainProductList, //	类型编码数组
					seriesList:_this.seriesList //		系列编码数组

				  }
				  uni.showLoading({
				  	title: '加载中',
				  	mask: true
				  });
				  this.myRequest(data,url,'post').then(res => {
				        console.log(res)
				  	    if (res.data.status==0){
							uni.hideLoading()
							uni.showToast({
								title: '更新成功',
								duration:500
							});
							setTimeout(function() {
								uni.navigateBack({
									delta: 1
								});
							}, 1000);
							
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
	  background: #F4F4F4;
	  font-size: 13px;
	  
  }
  .fixed_bottom{
    width: 750upx;
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
    line-height: 98upx;
  }
  .btn_right{
    width: 50%;
    background-color: #FF6000;
    color: #fff;
    border-radius: 0;
    font-size: 16px;
    line-height: 98upx;
  }
</style>
