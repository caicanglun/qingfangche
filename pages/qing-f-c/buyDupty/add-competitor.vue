<template>
	<view>
	  
		<view class="box box_shadow">
		  <view class="flex_c list">
		    <view class="line"></view>
		    <view class="font_we_bold fs_15">基本信息</view>
		  </view>
		  <view class="flex_c list fs_14" >
		    <view class="list_right">公司名称：</view>
		    <view class="flex_sb_c wid_462">
		      <input name="companyName" v-model="companyName" 
			  placeholder="请输入" placeholder-class="color_888 fs_14" style="width:350upx;" class="input"></input>
		    </view>
		  </view>
		  
		  <myPicker @mychange="channeChange" :items="channel" name="渠道状况"></myPicker>
		  <view class="flex_line_sb list fs_14">
		    <view class="list_right_280">主营产品类型<text class="pl_10 color_888">(可多选)</text>：</view>
			<view>
				
				<myCheckboxGroup :items = "mainProduct" @selectChange="tapMainProduct"></myCheckboxGroup>
			 </view>
		  </view>
		 <!-- --------------------------- -->
		 <view class="box box_shadow">
			 <view class="flex_c list">
			   <view class="line"></view>
			   <view class="font_we_bold fs_15">采购方式分析</view>
			 </view>
			 <view class="fs_15 pl_40" @tap="tapBrokerChange">
				 <checkbox :value="isMiddleman" :checked="isMiddleman" />中间商模式 
			 </view>
			 
			 <myPicker @mychange="scaleChange" :items="scale" name="规模"></myPicker>
			
			 <myPicker @mychange="qualityChange" :items="quality" name="品质定位"></myPicker>
			 
			 <myPicker @mychange="businessModelChange" :items="businessModel" name="经营模式"></myPicker>
			 <view class="fs_15 pl_40" @tap="tapDirectChange">
			 		 <checkbox :value="isFactoryDirectSale" :checked="isFactoryDirectSale" />厂家直接采购
			 </view>
			 <view class="flex_c list fs_14" >
				 <view class="list_right">地址：</view>
				 <view class="flex_sb_c wid_462">
				   <input name="companyAddress" v-model="companyAddress" 
				   placeholder="请填写" placeholder-class="color_888 fs_14" style="width:350upx;" class="input"></input>
				 </view>
			 </view>
			 <view class="flex_c list" >
				 <view class="list_right">机台类型：</view>
				 <view class="flex_sb_c wid_462">
				   <input name="machineType" v-model="machineType"
				   placeholder="请填写机器类型" placeholder-class="color_888 fs_14" style="width:350upx;" class="input"></input>
				 </view>
			 </view>
			 <view class="flex_c list" >
				 <view class="list_right">机台数量：</view>
				 <view class="flex_sb_c wid_462">
				   <input name="machineCount" v-model="machineCount" 
				   placeholder="请填写机器数量" placeholder-class="color_888 fs_14" style="width:350upx;"  cursor-spacing='140' class="input"></input>
				 </view>
			 </view>
		 </view>
		</view>	
		 <!-- --------------------------- -->
		<view class='placeholder-view'></view>	
		<view class="fixed_bottom box_shadow_btn">
		  <button class="btn_left" hover-class="none" @tap="bindCancel">取消</button>
		  <button class="btn_right" @tap="submit" hover-class="none">确定</button>
		</view>
		
	</view>
	
</template>

<script>
	import myPicker from "@/components/myPicker.vue";
	import myCheckboxGroup from "@/components/myCheckboxGroup.vue";
	const JsyServer = require("services/jsy-server.js");
	let _this,_companyCode;
	export default {
		components:{
			myPicker,
			myCheckboxGroup
		},
		data() {
			return {
				companyName:'',
				companyAddress:'',
				machineType:'',
				machineCount:'',
				channel:[],
				channelStatusCode: -1,
				mainProduct:[],
				scale:[],
				companyScaleCode: -1,
				quality:[],
				qualityCode: -1,
				businessModel:[],
				businessModelCode: -1,
				purchase:["中间商","厂家直采"],
				isFactoryDirectSale: false,
				isMiddleman: false
			};
		},
		onLoad:function(options){
			_this = this;
			_companyCode = options.companyCode;
			console.log(_companyCode )
			this.getMainProduct()
			this.getChannel()
			this.getCompanyScale()
			this.getQuality()
			this.getBusinessModel()
		},
		methods:{
			getMainProduct:function(){
					JsyServer.getMainProduct().then(res => {
					  console.log(res);
					  _this.mainProduct = res.data.data.list
					}).catch(err => {
					  wx.showToast({
					    title: err.data.description,
					    icon: 'none'
					  });
					});
			},
			getChannel:function(){
					JsyServer.getChannel().then(res => {
					  console.log(res);
					  _this.channel = res.data.data.list
					}).catch(err => {
					  wx.showToast({
					    title: err.data.description,
					    icon: 'none'
					  });
					});
			},
			getCompanyScale:function(){
					JsyServer.getCompanyScale().then(res => {
					  console.log(res);
					  _this.scale = res.data.data.list
					}).catch(err => {
					  wx.showToast({
					    title: err.data.description,
					    icon: 'none'
					  });
					});
			},
			getQuality:function(){
					JsyServer.getQuality().then(res => {
					  console.log(res);
					  _this.quality = res.data.data.list
					}).catch(err => {
					  wx.showToast({
					    title: err.data.description,
					    icon: 'none'
					  });
					});
			},
			getBusinessModel:function(){
				JsyServer.getBusinessModel().then(res => {
				  console.log(res);
				  _this.businessModel = res.data.data.list
				}).catch(err => {
				  wx.showToast({
				    title: err.data.description,
				    icon: 'none'
				  });
				});
			},
			
			tapDirectChange:function(){
				this.isFactoryDirectSale = ! this.isFactoryDirectSale
			},
			tapBrokerChange:function(){
				this.isMiddleman = !this.isMiddleman
			},
			tapMainProduct:function(index){
				let items = this.mainProduct
				for (var i = 0, lenI = items.length; i < lenI; ++i) {
					const item = items[i]
					if (item.id == index) {
						this.$set(item,'isChecked',!item.isChecked)
					}
				}
			},
			channeChange:function(e){
				console.log(e)
				this.channelStatusCode = e
			},
			scaleChange:function(e){
				console.log(e)
				this.companyScaleCode = e;
			},
			qualityChange:function(e){
				console.log(e)
				this.qualityCode = e;
			},
			businessModelChange:function(e){
				console.log(e)
				this.businessModelCode = e;
			},
			bindCancel:function(){
				uni.navigateBack({
					delta: 1
				});
			},
			submit:function(){
				let _data={}    //提交参数
				let _mainProductCodes = [] //多选项目，id组合成数组
				this.mainProduct.forEach((item)=>{
					if(item.isChecked == true) {
						_mainProductCodes.push(item.id)
					}
				})
				if (_mainProductCodes.lengh == 0){
					uni.showToast({
						title: '请选择主营产品',
						icon: 'none'
					});
					return;
				}
				let before_data = {
				companyCode:  _companyCode,					//客户编码
				companyName	:  this.companyName,				//竞争对手名称
				mainProductCodes: _mainProductCodes,
				channelStatusCode: this.channelStatusCode,			//渠道状况编码
				isMiddleman	:  this.isMiddleman?1:0,				//是否中间商.0否，1是，9未知
				companyScaleCode:  this.companyScaleCode,			//公司规模编码
				qualityCode	:  this.qualityCode,		//品质定位编码
				businessModelCode:  this.businessModelCode,		//经营模式编码
				isFactoryDirectSale:  this.isFactoryDirectSale?1:0,	    //是否厂家直销.0否，1是，9未知
				companyAddress:  this.companyAddress,			//公司地址
				machineType	:  this.machineType,			//机器类型
				machineCount  :  this.machineCount          //机器数量
				}
				if (!before_data.companyName){
					uni.showToast({
						title: '请输入竞争对手名称',
						icon: 'none'
					});
					return;
				}
				
				//过滤未选中的项目
				Object.keys(before_data).forEach((key)=>{
					if (before_data[key] != -1){
						_data[key] = before_data[key]
					}
				})
				console.log("添加竞争对手：==",_data)
				JsyServer.rivalAdd(_data).then(res => {
				  console.log(res);
				  if (res.data.status ==0){
					uni.showToast({
						title: '添加成功',
						icon: 'none'
					});
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
				  if(res.data.status == 1){
					  uni.showToast({
						title: res.data.message,
						icon: 'none'
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
 .box{
   background-color:#fff; 
   font-size: 28upx;
 	margin-bottom: 20upx
 }
 .line{
 	width: 4upx;
 	height: 15px;
 	border-radius: 2upx;
 	background-color: #FF6000;
 	margin-right: 10upx;
 	margin-left: -14upx;
 }
 .list{
   margin: 0 30upx;
   padding:0 10upx;
   border-bottom: 1upx solid rgba(221, 221, 221, 0.3);
   line-height: 87upx;
 }
 .list_right{
   width:200upx;
 }
 
 .bottom_img{
 	width: 48upx;
 	height: 48upx;
 	box-shadow: 0 4upx 8upx 0 rgba(0, 0, 0, 0.2);
 }
 .color_888{
   color: #888890;
 }
 .select_btn{
   width: 96upx;
   height: 48upx;
   box-sizing: border-box;
   border: 1upx solid #FF6000;
   border-radius: 6upx;
   line-height: 46upx;
   text-align: center;
 }
 .wid_2x{
   width: 192upx;
 }
 .input{
   width: 446upx;
   background-color: #fff;
   font-size: 14px;
   padding: 0;
 }
 .plr_20{
 	padding-right: 20upx;
 	padding-left: 20upx;
 	padding-top: 10rx
 }
 .selet_tion{
   color:#fff;
   background-color: #FF6000;
 }
 .select_btn {
   width: 50%;
 }
 .wid_462{
   width:462upx;
 }
 .mr_30{
   margin-right: 30upx;
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
 button::after {
   border-radius: 0;
 }
 .fixed_bottom{
   width: 750upx;
   position: fixed;
   bottom: 0;
   display: flex;
   z-index: 999;
 }
 .border_none{
   border:none;
   padding-bottom: 10upx;
 }
 .x-image{
   margin-left: 40upx;
 }
 .bottom_img{
 	width: 48upx;
 	height: 48upx;
 	box-shadow: 0 4upx 8upx 0 rgba(0, 0, 0, 0.2);
 }
 .unit{
   font-size: 14px;
   line-height: 48upx;
   width: 80upx;
   height: 48upx;
   text-align: center;
   border: 2upx solid #FF6000;
   box-sizing: border-box;
 }
 .borderright{
   border-top-right-radius: 6upx;
   border-bottom-right-radius: 6upx;
 }
 .borderleft{
   border-top-left-radius: 6upx;
   border-bottom-left-radius: 6upx;
 }
 .unitselect{
   color: #fff;
   background-color: #FF6000;
 }
 .unitunselect{
   color: #888890;
   background-color: #fff;
 }
 .modal_mask {
   width: 100%;
   height: 100%;
   position: fixed;
   top: 0;
   left: 0;
   z-index: 1000;
   background: #000;
   opacity: 0.6;
   overflow: hidden;
 }
 .modal_box{
 	position: fixed;
 	top: 277upx;
 	margin: 0 35upx;
 	background-color: #F9F7FA;
 	border-radius: 6upx;
 	font-size: 16px;
 	z-index: 1001;
 }
 .mlr_63{
 	margin: 0 63upx;
 }
 .text_c{
 	text-align: center;
 	margin-top: 30upx;
 	margin-bottom: 40upx;
 }
 .type_btn{
 	width: 200upx;
 	text-align: center;
 	line-height: 56upx;
 	height: 60upx;
 	border: 2upx solid #FF6000;
 	box-sizing: border-box;
 	color: #FF6000;
 	background-color: #fff;
 	font-size: 28upx;
 	margin-left:20upx;
 	margin-bottom: 20upx;
 	border-radius: 6upx
 }
 .width_126{
 	width: 126upx
 }
 .type_on{
 	background-color: #FF6000;
 	color: #fff;
 }
 .modal_bottom_btn{
 	border-top: 2upx solid #DDDDDD;
 	font-size: 16px;
 	color: #999999
 }
 .modal_bottom_btn>view{
 	width: 340upx;
 	line-height: 86upx;
 	text-align: center;
 }
 .bor_right{
 	border-right:2upx solid #DDDDDD
 }
 .isOption{
 	width: 250upx;
 	text-align: center;
 	background-color: #FF6000;
 	border-radius: 6upx;
 	line-height: 48upx;
 	color: #fff;
 }
 .width_450{
 	width: 450upx
 }
 .pl_40{
 	padding-left: 40upx;
 }
 .explain{
 	color: #9B9B9B;
 	margin-top: 20upx;
 	padding-bottom: 30upx;
 	font-size: 12px;
 	line-height: 1;
 	padding-left: 40upx
 }
 .width_112{
 	width: 112upx
 }
 .width_160{
 	width: 160upx;
 }
 .mr_40{
 	margin-right: 40upx;
 }
 .checkgroup{
	 display: flex;
	 flex-direction: row;
	 justify-content: space-between;
	 align-content: flex-start;
	 flex-wrap: wrap;
 }
 .typeItemSelect{
	 width: 200upx;
	 height: 50upx;
	 box-sizing: border-box;
	 border-radius: 6upx;
	 line-height: 46upx;
	 text-align: center;
	 margin-bottom: 20upx;
	 border: 2upx solid #FF6000;
	 color: #FF6000;
	 }
.typeItem{
	 	 width: 200upx;
	 	 height: 50upx;
	 	 box-sizing: border-box;
	 	 border-radius: 6upx;
	 	 line-height: 46upx;
	 	 text-align: center;
	 	 margin-bottom: 20upx;
		 border: 2upx solid #D3D3D3;
	 	 }
checkbox .wx-checkbox-input {
		// border-radius: 50%;
		transform:scale(0.8);
	}
checkbox .wx-checkbox-input.wx-checkbox-input-checked {
		background: #FF6000;
		color: #fff !important;
	}	 

 
</style>
