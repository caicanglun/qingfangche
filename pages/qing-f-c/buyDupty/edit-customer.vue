<template>
	<view>
		<form @submit="formSubmit" report-submit="true">
		  <!-- <view class="box box_shadow"> -->
		  <view class="box"> 
				<view class="list flex_c">
				  <view class="list_right ml-14">
					<text style="color:#EE603F">*</text>客户公司名称：
				  </view>
				  <input class="input" name="companyName" v-model="customerInfo.companyName" placeholder="请输入"></input>
				</view>
				
				
				<myPicker @mychange="regionChange" :items="region" name="所属区域" star="true" :firstLabel="customerInfo.region"></myPicker>
				
				<view class="list flex_c">
				  <view class="list_right ml-14">
					公司地址：
				  </view>
				  <input class="input" name="companyAddress" v-model="customerInfo.companyAddress" placeholder="请输入"></input>
				  <image src="/static/images/qingfc/position.png" class="i-position" mode="aspectFill" @tap="addrPosition(1)"></image>
				</view>
				
				<!-- <swithButton @buttonChange="sellroomChange" :items="isSellroom" name="有无门市部"></swithButton> -->
				
				<!-- <view class="list flex_c"  v-if="isSellroom[0].isChecked">
				  <view class="list_right ml-14">
					门市部地址：
				  </view>
				  <input class="input" name="salesroomAddress" v-model="customerInfo.salesroomAddress" placeholder="请输入"></input>
				  <image src="/static/images/qingfc/position.png" class="i-position" mode="aspectFill" @tap="addrPosition(2)"></image>
				</view> -->
				
				<myPicker @mychange="companyTypeChange" :items="companyType" name="客户类型" star="true" :firstLabel="customerInfo.companyType"></myPicker>
				<myPicker @mychange="companySourceChange" :items="companySource" name="客户来源" star="true" :firstLabel="customerInfo.companySource"></myPicker>
				<myPicker @mychange="managementPositionChange" :items="managementPosition" name="经营定位" star="true" :firstLabel="customerInfo.managementPosition"></myPicker>
				<myPicker @mychange="companyScaleChange" :items="companyScale" name="经营规模" star="true" :firstLabel="customerInfo.companyScale"></myPicker>
				<rangeButton @buttonChange="cooperationIntentionChange" :items="cooperationIntention" name="合作意向"></rangeButton>
				
				
				<rangeButton @buttonChange="coordinateChange" :items="coordinate" name="保证金配合度" ></rangeButton>
				<view class="title">高：有合作会交保证金；中：有合作考虑或者多次合作后交保证金；低：不接受保证金</view>
				<!-- <view class="list flex_c">
				 <view class="list_right ml-14">
					<text style="color:#EE603F">*</text>联系人：
				  </view>
				  <input class="input" name="companyName" v-model="realName" placeholder="请输入"></input>
				</view>
				<view class="list flex_c">
				  <view class="list_right ml-14">
					<text style="color:#EE603F">*</text>电话号码：
				  </view>
				  <input class="input" name="companyName" v-model="phone" placeholder="请输入"></input>
				</view> -->
		  </view>
		  <view class="fixed_bottom box_shadow_btn">
		    <button class="btn_left" hover-class="none" @tap="bindCancel">取消</button>
		    <button class="btn_right" formType="submit" hover-class="none">编辑</button>
		  </view>
		  
		</form>
		
	</view>
</template>

<script>
	import myPicker from "@/components/myPicker.vue";
	import rangeButton from "@/components/rangeButton-v.vue";
	import swithButton from "@/components/switchButton.vue";
	// import myCheckboxGroup from "@/components/myCheckboxGroup.vue";
	const Tools = require("services/tools.js");
	const JsyServer = require("services/jsy-server.js");
	let _this,_companyCode;
	export default {
		components:{
			myPicker,
			rangeButton,
			swithButton
		},
		data() {
			return {
				customerInfo:{},
				region:[],//区域列表
				companyType:[],
				companyScale:[],
				companySource:[],
				cooperationIntention:[],
				coordinate:[],
				managementPosition:[],
				regionCode: -1,  //						区域编码
				companyTypeCode: -1,  //					客户类型编码
				companySourceCode: -1,  //				客户来源编码
				companyScaleCode: -1 , // 客户规模
				managementPositionCode: -1  // 经营定位
			};
		},
		onLoad:function(options){
			_this = this
			_companyCode = options.companyCode
			console.log("公司编号===",_companyCode)
			this.getCustomerInfo()
			this.getRegion()
			this.getCoordinate()
			this.getSource()
			this.getType()
			this.getCooperationIntention()
			this.getCompanyScale()
			this.getManagementPosition()
			
		},
		onShow:function(){
			
			setTimeout(function() {
				console.log(_this.customerInfo)
				
				  let cooperation = _this.customerInfo.cooperationIntention
				  let coor = _this.customerInfo.coordinate
				 
				   console.log("coor==",coor)
				  _this.cooperationIntention.forEach((item)=>{
					  if(item.label == cooperation){
						  _this.$set(item,'isChecked',true)
					  }
				  })
				  _this.coordinate.forEach((item)=>{
					  if (item.label == coor){
						  _this.$set(item,'isChecked',true)
					  }
				  })
				  console.log("coordinate",_this.coordinate)
				  
			}, 500);
			
			
		},
		methods:{
			getCustomerInfo:function () {
			  console.log(_companyCode)
			  let _data = {companyCode: _companyCode}
			  JsyServer.cmDetail(_data).then(res => {
			  
			    console.log("customer--info==",res);
			
			    _this.customerInfo = res.data.data
				console.log(_this.customerInfo)
			  }).catch(err => {
			    
			    console.log("Err===", err);
			  });
			 
			},
			getCompanyScale:function(){
				JsyServer.getCompanyScale().then(res => {
				  console.log(res);
				  _this.companyScale = res.data.data.list
				}).catch(err => {
				  wx.showToast({
				    title: err.data.description,
				    icon: 'none'
				  });
				});
			},
			
			getManagementPosition:function(){
				JsyServer.getManagementPosition().then(res => {
				  console.log(res);
				  _this.managementPosition = res.data.data.list
				}).catch(err => {
				  wx.showToast({
				    title: err.data.description,
				    icon: 'none'
				  });
				});
			},
			getRegion:function(){
				JsyServer.getRegion().then(res => {
				  console.log(res);
				  _this.region = res.data.data.list
				  console.log("region==",_this.region)
				}).catch(err => {
				  wx.showToast({
				    title: err.data.description,
				    icon: 'none'
				  });
				});
			},
			getCoordinate:function(){
				JsyServer.getCoordinate().then(res => {
				  console.log(res);
				  _this.coordinate = res.data.data.list
				}).catch(err => {
				  wx.showToast({
				    title: err.data.description,
				    icon: 'none'
				  });
				});
			},
			getType:function(){
				JsyServer.getType().then(res => {
				  console.log(res);
				  _this.companyType = res.data.data.list
				}).catch(err => {
				  wx.showToast({
				    title: err.data.description,
				    icon: 'none'
				  });
				});
			},
			getSource:function(){
				JsyServer.getSource().then(res => {
				  console.log(res);
				  _this.companySource = res.data.data.list
				}).catch(err => {
				  wx.showToast({
				    title: err.data.description,
				    icon: 'none'
				  });
				});
			},
			getCooperationIntention:function(){
				JsyServer.getCooperationIntention().then(res => {
				  console.log(res);
				  _this.cooperationIntention = res.data.data.list
				}).catch(err => {
				  wx.showToast({
				    title: err.data.description,
				    icon: 'none'
				  });
				});
			},
			

			//所属区域
			regionChange:function(e){
			    this.regionCode =e
				console.log(e)
			},
			//客户类型
			companyTypeChange:function(e){
				this.companyTypeCode = e
				console.log(e)
			},
			//客户来源
			companySourceChange:function(e){
				this.companySourceCode = e
				console.log(e)
			},
			//经营定位
			managementPositionChange:function(e){
				this.getManagementPositionCode = e
			},
			// 经营规模
			companyScaleChange:function(e){
				this.companyScaleCode = e
				console.log(e)
			},
			cooperationIntentionChange:function(e){
				let items = this.cooperationIntention
				
				items.forEach((item)=>{
					if (item.id == e){
						this.$set(item,'isChecked',true)
					}else{
						this.$set(item,'isChecked',false)
					}
				})
			},
			
			coordinateChange:function(e){
				let items = this.coordinate
				
				items.forEach((item)=>{
					if (item.id == e){
						this.$set(item,'isChecked',true)
					}else{
						this.$set(item,'isChecked',false)
					}
				})
			},
			
			addrPosition:function(index){
				console.log("here")
				if (index ==1){
					uni.chooseLocation({
					    success: function (res) {
					       
							_this.factoryAddress = res.address
					        console.log('详细地址：' + res.address);
							_this.factoryLatitude = res.latitude
					        console.log('纬度：' + res.latitude);
							_this.factoryLongitude = res.longitude
					        console.log('经度：' + res.longitude);
					    }
					});
				}
				
				
			},
			
			bindCancel:function(){
				uni.navigateBack({
					delta: 1
				});
			},
			formSubmit:function(e){
				let data = this.customerInfo
                let _data = {}
				let cooper = Tools.list2code(this.cooperationIntention)  //合作意向编码
				let coor = Tools.list2code(this.coordinate)    //配合度
				
				console.log("cooper",cooper)
				
				
				_data.companyCode  = data.companyCode                    //客户编号
				_data.companyName = data.companyName 					//客户名
				
				_data.companyAddress = data.companyAddress					//工厂地址
				_data.companyLongitude = data.companyLongitude				//工厂经度
				_data.companyLatitude = data.companyLatitude					//工厂纬度
				
				_data.regionCode = this.regionCode						//区域编码
				_data.companyTypeCode = this.companyTypeCode					//客户类型编码
				_data.companySourceCode = this.companySourceCode			//客户来源编码
				_data.companyScaleCode = this.companyScaleCode			//客户规模编码
				_data.managementPositionCode = this.managementPositionCode 			//经营定位编码
				_data.cooperationIntentionCode = cooper[0]
				_data.coordinateCode = coor[0]                      //配合度编码
			   
                console.log("更新客户：",_data)
				
                _data = Tools.filterNull(_data)
				
				
				
                JsyServer.updateCustomer(_data).then(res => {
                  console.log(res);
				  if (res.data.status == 0){
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
				     }else{
						  uni.showToast({
								title: res.data.message,
								icon: 'none'
						  });
				  }
                }).catch(err => {
                  wx.showToast({
                    title: err.data.description,
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
   font-size: 14px;
 	margin-bottom: 20upx
 }
 .line{
 	width: 4upx;
 	height: 15px;
 	border-radius: 2upx;
 	background-color: #EE603F;
 	margin-right: 10upx;
 	margin-left: -14upx;
 }
 .list{
   margin: 0 20upx;
   padding:0 10upx;
   border-bottom: 1upx solid rgba(221, 221, 221, 0.3);
   line-height: 87upx;
 }
 .list_right{
   width:250upx;
   
 }
 .title{
 	margin: 0 30upx;
 	padding:0 10upx 27upx 10upx;
 	border-bottom: 1upx solid rgba(221, 221, 221, 0.3);
 	font-size: 12px;
 	color: #9B9B9B;
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
   border: 1upx solid #EE603F;
   border-radius: 6upx;
   line-height: 46upx;
   text-align: center;
 }
 .wid_2x{
   width: 192upx;
 }
 .input{
   width: 350upx;
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
   background-color: #EE603F;
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
   color: #EE603F;
   border-radius: 0;
   font-size: 16px;
   line-height: 88upx;
 }
 .btn_right{
   width: 50%;
   background-color: #EE603F;
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
   border: 2upx solid #EE603F;
   box-sizing: border-box;
 }
 .borderright{
   border-top-right-radius: 6upx;
   border-bottom-right-radius: 6upx;
   border-left:none;
 }
 .borderleft{
   border-top-left-radius: 6upx;
   border-bottom-left-radius: 6upx;
   border-right:none;
 }
 .unitselect{
   color: #fff;
   background-color: #EE603F;
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
 	border: 2upx solid #EE603F;
 	box-sizing: border-box;
 	color: #EE603F;
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
 	background-color: #EE603F;
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
 	background-color: #EE603F;
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
	 border: 2upx solid #EE603F;
	 color: #EE603F;
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
.i-position{
		width: 32upx;
		height: 35upx;
		position: absolute;
		right: 30upx;
	}

</style>
