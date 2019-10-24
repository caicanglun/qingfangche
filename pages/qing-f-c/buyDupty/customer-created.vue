<template>
	<view>
		<form @submit="formSubmit" report-submit="true">
		  <view class="box box_shadow">
				<view class="list flex_c">
				  <view class="list_right ml-14">
					<text style="color:#EE603F">*</text>客户公司名称：
				  </view>
				  <input class="input" name="companyName" v-model="companyName" placeholder="请输入"></input>
				</view>
				
				
				<myPicker @mychange="regionChange" :items="region" name="所属区域" star="true"></myPicker>
				
				<view class="list flex_c">
				  <view class="list_right ml-14">
					公司地址：
				  </view>
				  <input class="input" name="companyAddress" v-model="companyAddress" placeholder="请输入"></input>
				  <image src="/static/images/qingfc/position.png" class="i-position" mode="aspectFill" @tap="addrPosition(1)"></image>
				</view>
			
				
				
				<myPicker @mychange="companyTypeChange" :items="companyType" name="客户类型" star="true"></myPicker>
				<myPicker @mychange="companySourceChange" :items="companySource" name="客户来源" star="true"></myPicker>
				<myPicker @mychange="companyScaleChange" :items="companyScale" name="客户规模"></myPicker>
				<myPicker @mychange="managementPositionChange" :items="managementPosition" name="经营定位"></myPicker>
				<rangeButton @buttonChange="cooperationIntentionChange" :items="cooperationIntention" name="合作意向"></rangeButton>
				
				<rangeButton @buttonChange="coordinateChange" :items="coordinate" name="保证金配合度"></rangeButton>
				<view class="title">高：有合作会交保证金；中：有合作考虑或者多次合作后交保证金；低：不接受保证金</view>
				<view class="list flex_c">
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
				</view>
		  </view>
		  <view class="fixed_bottom box_shadow_btn">
		    <button class="btn_left" hover-class="none" @tap="bindCancel">取消</button>
		    <button class="btn_right" formType="submit" hover-class="none">确定</button>
		  </view>
		  
		</form>
		
	</view>
</template>

<script>
	import myPicker from "@/components/myPicker.vue";
	import rangeButton from "@/components/rangeButton.vue";
	import swithButton from "@/components/switchButton.vue";
	// import myCheckboxGroup from "@/components/myCheckboxGroup.vue";
	const JsyServer = require("services/jsy-server.js");
	let _this,_customerId;
	export default {
		components:{
			myPicker,
			rangeButton,
			swithButton
		},
		data() {
			return {
				companyName: '',//客户名
				companyAddress: '',//  地址
				companyLongitude: '',//  经度
				companyLatitude: '',//  纬度
				region:[],//区域列表
				regionCode: '',//  区域编码
				companyType:[],
				companyTypeCode: '',//  客户类型编码
				companyScale:[],
				companyScaleCode: '',//  客户规模编码
				companySource:[],
				companySourceCode: '',//  客户来源编码
				cooperationIntention:[],
				cooperationIntentionCode: '',// 合作意向
				coordinate:[],
				coordinateCode: '',//  配合度
				managementPosition:[],
				managementPositionCode: '',// 经营定位
				realName: '',//  姓名
				phone: '',// 电话
				
			};
		},
		onLoad:function(){
			_this = this
			this.getRegion()
			this.getCoordinate()
			this.getSource()
			this.getType()
			this.getCooperationIntention()
			this.getManagementPosition()
			this.getCompanyScale()
			
		},
		methods:{
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
			

			companyScaleChange:function(e){
				this.companyScaleCode = e
			},
			managementPositionChange:function(e){
				this.managementPositionCode = e
			},
			regionChange:function(e){
			    this.regionCode =e
				console.log(e)
			},
			companyTypeChange:function(e){
				this.companyTypeCode = e
			},
			companySourceChange:function(e){
				this.companySourceCode = e
			},
			cooperationIntentionChange:function(e){
				this.cooperationIntentionCode =e
			},
			coordinateChange:function(e){
				this.coordinateCode = e
			},
			sellroomChange:function(e){
				this.hasSalesroom = e
			},
			
			addrPosition:function(index){
				console.log("here")
				if (index ==1){
					uni.chooseLocation({
					    success: function (res) {
					       
							_this.companyAddress = res.address
					        console.log('详细地址：' + res.address);
							_this.companyLatitude = res.latitude
					        console.log('纬度：' + res.latitude);
							_this.companyLongitude = res.longitude
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
				let data = {}
				if (!this.companyName){
					uni.showToast({
						title: '公司名称不能为空',
						icon: 'none'
					});
					return
				}
				data.companyName = this.companyName
				data.regionCode = this.regionCode //  区域编码
				data.companyAddress = this.companyAddress // 公司地址
				data.companyLongitude = this.companyLongitude // 经度
				data.companyLongitude=  this.companyLatitude //纬度
				
				data.companyTypeCode=  this.companyTypeCode //客户类型编码
				data.companySourceCode = this.companySourceCode //客户来源编码
				data.cooperationIntentionCode= this.cooperationIntentionCode //合作意向
				data.coordinateCode= this.coordinateCode //配合度
				data.managementPositionCode = this.managementPositionCode //经营定位
				data.companyScaleCode = this.companyScaleCode
				data.realName = this.realName //姓名
				data.phone= this.phone //电话
				console.log(data)
                JsyServer.buyAddCustomer(data).then(res => {
                  console.log(res);
				  if (res.data.status == 0){
					  
					 uni.navigateBack({
					 	delta: 1
					 });
				  }else{
					  return
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
