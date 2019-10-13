<template>
	<view>
	   <form @submit="sumbit">
		<view class="box box_shadow">
		  <view class="flex_c list">
		    <view class="line"></view>
		    <view class="font_we_bold fs_15">联系人信息</view>
		  </view>
		  <view class="flex_c list" >
		    <view class="list_right">联系人信息：</view>
		    <view class="flex_sb_c wid_462">
		      <input name="companyName" v-model="companyName" 
			  placeholder="请输入" placeholder-class="color_888 fs_14" style="width:350upx;" class="input"></input>
		    </view>
		  </view>
		  <view class="flex_c list" >
		    <view class="list_right">电话号码：</view>
		    <view class="flex_sb_c wid_462">
		      <input name="phone" v-model="phone" 
		  			  placeholder="请输入" placeholder-class="color_888 fs_14" style="width:350upx;" type="digit" class="input"></input>
		    </view>
		  </view>
		  
		  <view class="flex_c list">
		    <view class="line"></view>
		    <view class="font_we_bold fs_15">经营者特征</view>
		  </view>
		 
		  <myPicker @mychange="identityChange" :items="identity" name="身份"></myPicker>
		  <!-- ----------------------------------- -->
		  <view class="flex_line_sb list">
		    <view class="list_right_280">性格特征<text class="pl_10 color_888">(可多选)</text>：</view>
			<view>
				<myCheckboxGroup @selectChange="tapCharacter" :items="characterFeatures"></myCheckboxGroup>
				
			 </view>
		  </view>
 
		 <!-- --------------------------- -->
		 <view class="flex_line_sb list">
		   <view class="list_right_280">经营特征<text class="pl_10 color_888">(可多选)</text>：</view>
			<view>
				
				<myCheckboxGroup @selectChange="tapManageFeatures" :items="manageFeatures"></myCheckboxGroup>
			 </view>
		 </view>
		</view>
		
		
		
		 <!-- --------------------------- -->
		
		
		 
	     <rangeButton @buttonChange="priceSensitivityChange" :items="priceSensitivity" name="价格敏感度"></rangeButton>
		 <!-- --------------------------- -->
		 
		 <myPicker @mychange="costPerformanceChange" :items="costPerformance" name="性价比思维"></myPicker>
		 <!-- --------------------------- -->
		 
		 <myPicker @mychange="channeChange" :items="channe" name="渠道状况"></myPicker>
		 <!-- --------------------------- -->
		
		 <!-- --------------------------- -->
		<myPicker @mychange="potentialChange" :items="potential" name="发展潜力"></myPicker>
		 
		<view class='placeholder-view'></view>	
		
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
	import myCheckboxGroup from "@/components/myCheckboxGroup.vue";
	const JsyServer = require("services/jsy-server.js");
	let _this,_customerId;
	export default {
		components:{
			myPicker,
			rangeButton,
			myCheckboxGroup
		},
		data() {
			return {
				contactName: '',
				contactPhone: '',
				costPerformance:[], //性价比
				costPerformanceIndex: -1,
				identity: [], //身份
				identityIndex: -1,
				characterFeatures:[], //性格特征
				characterFeaturesIndex: -1,
				manageFeatures:[],  //经营者特征
				manageFeaturesIndex: -1,
				priceSensitivity:[], //价格敏感度
				priceSensitivityIndex: -1,
				channe:[], //渠道
				channeIndex: -1,
				potential:[], //发展潜力
				potentialIndex: -1
				
			};
		},
		onLoad:function(options){
			_this = this;
			// _customerId = options.customerId;
			// console.log(_customerId )
			this.getCharacterFeatures()
			this.getCostPerformance()
			this.getIdentity()
			this.getManageFeatures()
			this.getPriceSensitivity()
			this.getPotential()
			this.getChanne()
			
		},
		methods:{
			testChange:function(e){
				console.log(e)
			},
			getManageFeatures:function(){
				JsyServer.getManageFeatures().then(res => {
				  console.log(res);
				  _this.manageFeatures = res.data.data.list
				}).catch(err => {
				  wx.showToast({
				    title: err.data.description,
				    icon: 'none'
				  });
				});
			},
			
			getIdentity:function(){
				JsyServer.getIdentity().then(res => {
				  console.log(res);
				  _this.identity = res.data.data.list
				}).catch(err => {
				  wx.showToast({
				    title: err.data.description,
				    icon: 'none'
				  });
				});
			},
			getCharacterFeatures:function(){
				JsyServer.getCharacterFeatures().then(res => {
				  console.log(res);
				  _this.characterFeatures = res.data.data.list
				}).catch(err => {
				  wx.showToast({
				    title: err.data.description,
				    icon: 'none'
				  });
				});
			},
			getPriceSensitivity:function(){
				JsyServer.getPriceSensitivity().then(res => {
				  console.log(res);
				  _this.priceSensitivity = res.data.data.list
				}).catch(err => {
				  wx.showToast({
				    title: err.data.description,
				    icon: 'none'
				  });
				});
			},
			getCostPerformance:function(){
				JsyServer.getCostPerformance().then(res => {
				  console.log(res);
				  _this.costPerformance = res.data.data.list
				}).catch(err => {
				  wx.showToast({
				    title: err.data.description,
				    icon: 'none'
				  });
				});
			},
			getPotential:function(){
				JsyServer.getPotential().then(res => {
				  console.log(res);
				  _this.potential = res.data.data.list
				}).catch(err => {
				  wx.showToast({
				    title: err.data.description,
				    icon: 'none'
				  });
				});
			},
			getChanne:function(){
				JsyServer.getChanne().then(res => {
				  console.log(res);
				  _this.channe = res.data.data.list
				}).catch(err => {
				  wx.showToast({
				    title: err.data.description,
				    icon: 'none'
				  });
				});
			},
			
			// tapTypeItem:function(index){
			// 	console.log(index)
			// 	let items = this.arrProduct
			// 	this.$set(items,index,!items[index])
			// },
			tapCharacter:function(index){
				let items = this.characterFeatures
				for (var i = 0, lenI = items.length; i < lenI; ++i) {
					const item = items[i]
					if (item.id == index) {
						this.$set(item,'isChecked',!item.isChecked)
					}
				}
			},
			tapManageFeatures:function(index){
				let items = this.manageFeatures
				for (var i = 0, lenI = items.length; i < lenI; ++i) {
					const item = items[i]
					if (item.id == index) {
						this.$set(item,'isChecked',!item.isChecked)
					}
				}
				console.log(items)
			},
			identityChange:function(e){
				
				this.identityIndex= e
			},
			
			costPerformanceChange:function(e){
				this.costPerformanceIndex= e;
			},
			potentialChange:function(e){
				this.potentialIndex= e;
				
			},
			channeChange:function(e){
				
				this.channeIndex = e
			},
			priceSensitivityChange:function(e){
				
				this.priceSensitivityIndex = e
				console.log(this.priceSensitivityIndex)
				// this.priceSensitivity.forEach((item)=>{
				// 	if (item.id == index){
				// 		console.log(item.label)
				// 	}
				// })
			},
			bindCancel:function(){
				uni.navigateBack({
					delta: 1
				});
			},
			submit:function(e){
				
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
 	background-color: #EE603F;
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
   border: 1upx solid #EE603F;
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


 
</style>
