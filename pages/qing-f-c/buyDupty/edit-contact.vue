<template>
	<view>
	   
		<view class="box box_shadow">
		  <view class="flex_c list">
		    <view class="line"></view>
		    <view class="font_we_bold fs_15">联系人信息</view>
		  </view>
		  <view class="flex_c list" >
		    <view class="list_right">联系人信息：</view>
		    <view class="flex_sb_c wid_462">
		      <input name="realName" v-model="realName" 
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
		 
		  <myPicker @mychange="identityChange" :items="identity" name="身份" :firstLabel="identityName"></myPicker>
		  <!-- ----------------------------------- -->
		  <view class="flex_line_sb list">
		    <view class="list_right_280">性格特征<text class="pl_10 color_888">(可多选)</text>：</view>
			<view>
				<myCheckboxGroup @selectChange="tapCharacter" :items="characterFeaturesList"></myCheckboxGroup>
				
			 </view>
		  </view>
 
		 <!-- --------------------------- -->
		 <view class="flex_line_sb list">
		   <view class="list_right_280">经营特征<text class="pl_10 color_888">(可多选)</text>：</view>
			<view>
				
				<myCheckboxGroup @selectChange="tapManageFeatures" :items="manageFeaturesList"></myCheckboxGroup>
			 </view>
		 </view>
		</view>

		 <!-- --------------------------- -->

	     <rangeButton @buttonChange="priceSensitivityChange" :items="priceSensitivity" name="价格敏感度"></rangeButton>
		 <!-- --------------------------- -->
		 
		 <myPicker @mychange="costPerformanceChange" :items="costPerformance" name="性价比思维" :firstLabel="costPerformanceName"></myPicker>
		 <!-- --------------------------- -->
		 
		 <myPicker @mychange="channelChange" :items="channel" name="渠道状况" :firstLabel="identityName"></myPicker>
		 <!-- --------------------------- -->
		
		 <!-- --------------------------- -->
		<myPicker @mychange="potentialChange" :items="potential" name="发展潜力" :firstLabel="potentialName"></myPicker>
		 
		<view class='placeholder-view'></view>	
		
		<view class="fixed_bottom box_shadow_btn">
		  <button class="btn_left" hover-class="none" @tap="bindCancel">取消</button>
		  <button class="btn_right" @tap="submit" hover-class="none">确定</button>
		</view>
	
	</view>
	
</template>

<script>
	import myPicker from "@/components/myPicker.vue";
	import rangeButton from "@/components/rangeButton-v.vue";
	import myCheckboxGroup from "@/components/myCheckboxGroup.vue";
	const JsyServer = require("services/jsy-server.js");
	let _this,_buyOrSellCode;
	export default {
		components:{
			myPicker,
			rangeButton,
			myCheckboxGroup
		},
		data() {
			return {
				linkList:'',
				realName: '',
				phone: '',
				costPerformance:[], //性价比
				costPerformanceCode: -1,
				identity: [], //身份
				identityCode: -1,
				characterFeaturesList:[], //性格特征
				manageFeaturesList:[],  //经营者特征
				priceSensitivity:[], //价格敏感度
				priceSensitivityCode: -1,
				channel:[], //渠道
				channelStatusCode: -1,
				potential:[], //发展潜力
				potentialCode: -1,

				costPerformanceName:'',
				identityName:'', 
				priceInit: {},
				channelStatusName:'',
				potentialName:''
				
			};
		},
		
		
		onLoad:function(options){
			_this = this;
			console.log(options)
			_buyOrSellCode = JSON.parse(options.buyOrSellCode)
			console.log(_buyOrSellCode)
			this.getCharacterFeatures()
			this.getCostPerformance()
			this.getIdentity()
			this.getManageFeatures()
			this.getPriceSensitivity()
			this.getPotential()
			this.getChannel()
			
			
		},
		onShow:function(){
			
			_this.realName = _buyOrSellCode.realName
			_this.phone = _buyOrSellCode.phone
			_this.costPerformanceName   = _buyOrSellCode.costPerformance
			_this.identityName  = _buyOrSellCode.identity
			
			_this.priceSensitivityName = _buyOrSellCode.priceSensitivity
			_this.channelStatusName = _buyOrSellCode.channelStatus
			
			let character = _buyOrSellCode.characterFeatures
			let manager = _buyOrSellCode.manageFeatures
			let price = _buyOrSellCode.priceSensitivity
			console.log("price==",price)
			
			setTimeout(function() {
				character.forEach((s) =>{
					console.log(_this.characterFeaturesList)
					_this.characterFeaturesList.forEach((item)=>{
						if (item.id == s.id){
							_this.$set(item,'isChecked',true)
						}
					})
				})
				manager.forEach((s)=>{
					console.log(_this.manageFeaturesList)
					_this.manageFeaturesList.forEach((item)=>{
						if (item.id == s.id){
							_this.$set(item,'isChecked',true)
						}
					})
				})
				
			 _this.priceSensitivity.forEach((item)=>{
						if (item.label == price){
							_this.$set(item,'isChecked',true)
						}
					})
				console.log("价格敏感==",_this.priceSensitivity)
				    
			}, 500);
			
		},
		methods:{
		
			getManageFeatures:function(){
				JsyServer.getManageFeatures().then(res => {
				  console.log(res);
				  _this.manageFeaturesList = res.data.data.list
				}).catch(err => {
				  wx.showToast({
				    title: err.data.errMsg,
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
				    title: err.data.errMsg,
				    icon: 'none'
				  });
				});
			},
			getCharacterFeatures:function(){
				JsyServer.getCharacterFeatures().then(res => {
				  console.log(res);
				  _this.characterFeaturesList = res.data.data.list
				}).catch(err => {
				  wx.showToast({
				    title: err.data.errMsg,
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
				    title: err.data.errMsg,
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
				    title: err.data.errMsg,
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
				    title: err.data.errMsg,
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
				    title: err.data.errMsg,
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
				let items = this.characterFeaturesList
				for (var i = 0, lenI = items.length; i < lenI; ++i) {
					const item = items[i]
					if (item.id == index) {
						this.$set(item,'isChecked',!item.isChecked)
					}
				}
			},
			tapManageFeatures:function(index){
				let items = this.manageFeaturesList
				for (var i = 0, lenI = items.length; i < lenI; ++i) {
					const item = items[i]
					if (item.id == index) {
						this.$set(item,'isChecked',!item.isChecked)
					}
				}
				console.log(items)
			},
			identityChange:function(e){
				
				this.identityCode= e
			},
			
			costPerformanceChange:function(e){
				this.costPerformanceCode= e;
			},
			potentialChange:function(e){
				this.potentialCode= e;
				
			},
			channelChange:function(e){
				
				this.channelStatusCode = e
			},
			priceSensitivityChange:function(e){
				let items = this.priceSensitivity
				
				items.forEach((item)=>{
					if (item.id == e){
						this.$set(item,'isChecked',true)
					}else{
						this.$set(item,'isChecked',false)
					}
				})
				
				
			},
			bindCancel:function(){
				uni.navigateBack({
					delta: 1
				});
			},
			submit:function(){
				let data={}
				let _data={}
				let characterFeatures = []
				let manageFeatures = []
				
				this.characterFeaturesList.forEach((item)=>{
					if (item.isChecked == true){
						characterFeatures.push(item.id)
					}
				})
				this.manageFeaturesList.forEach((item)=>{
					if (item.isChecked == true){
						manageFeatures.push(item.id)
					}
				})
				this.priceSensitivity.forEach((item)=>{
					if (item.isChecked == true){
						this.priceSensitivityCode = item.id
					}
				})
				
				
				data.buyOrSellCode = _buyOrSellCode.buyOrSellCode					//联系人编码
				data.realName= this.realName						//真实姓名
				data.phone= this.phone							//电话
				data.identityCode= this.identityCode					//身份编码
				data.priceSensitivityCode = this.priceSensitivityCode	//价格敏感度编码
				data.costPerformanceCode= this.costPerformanceCode			//性价比思维编码
				data.channelStatusCode= this.channelStatusCode			//渠道状况编码
				data.potentialCode= this.potentialCode				//发展潜力编码
				data.characterFeatures = characterFeatures			//性格特点编码数组
				data.manageFeatures= manageFeatures        //经营者特征
				//过滤掉没有选择项
				Object.keys(data).forEach((key)=>{
					if (data[key] != -1){
						_data[key] = data[key]
					}
				})
				
				JsyServer.linkmanUpdate(_data).then(res => {
				  console.log(res);
				  uni.showToast({
				  	title: '修改成功',
					icon: 'none'
				  });
					var pages = getCurrentPages();
					var currPage = pages[pages.length - 1]; //当前页面
					var prevPage = pages[pages.length - 3]; //上一个页面
					//直接调用上一个页面的setData()方法，把数据存到上一个页面中去
					prevPage.setData({
							isDoRefresh:true
					})
				  uni.navigateBack({
				  	delta: 2
				  });
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
   border-left:none;
 }
 .borderleft{
   border-top-left-radius: 6upx;
   border-bottom-left-radius: 6upx;
   border-right:none;
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
