<template>
<view>
	<view class="form_box box_shadow">
		<view class="flex_c list">
		  <!-- <view class="line"></view> -->
		  <view class="font_we_bold fs_16">样品基本信息 </view>
		</view>
		<view class="flex_c list">
		  <view class="list_right">品名（别名）:</view>
		  <input placeholder-class="color_909090 fs_14" class="input" placeholder="请填写品名" name="tradeName" v-model="tradeName"></input>
		</view>
		<!-- <pickerButton :items="inquiryType" name="询价类型" @buttonChange="tabSwitchChange('inquiryType',$event)"></pickerButton> -->
		 <myPicker @mychange="tabSwitchChange('productType',$event)" :items="productType" name="产品类型" :firstLabel="mainProductName"></myPicker>
		 <!-- <myPicker @mychange="tabSwitchChange('productSerial',$event)" :items="productSerial" name="产品系列"></myPicker> -->
		 <pickerInput @mychange="tabSwitchChange('productSerial',$event)"  
		:items="productSerial" :firstLabel="productSerialValue" name="产品系列" fontSize="font-size:14px;" ></pickerInput> 
		
		
		<!-- <view class="flex_c list" @tap="selectBuyer">
		  <view class="list_right">买家:</view>
		  <view :class="(buyer==''?'color_909090 wid_400':'wid_400')">{{buyer==''?"请选择":buyer}}</view>
		  <view><uniIcon type="forward" size="20" color="#ACACAC"></uniIcon></view>
		</view> -->
	</view>
	<!-- ------弹窗---- -->
	<popupMe ref="latiPart" @input="getContent('lati',$event)" title="新增经纱成分"></popupMe>
	<popupMe ref="longtiPart" @input="getContent('longti',$event)" title="新增纬纱成分"></popupMe>
	<!-- ------弹窗---- -->
	<view class="form_box box_shadow">
		<view class="flex_c list">
		  <!-- <view class="line"></view> -->
		  <view class="font_we_bold fs_16">产品要素 </view>
		</view>
		<view class="flex_c list_part">
		  <view>成分<text class='fs_12 color_909090 pl_20'>(可多选,按顺序勾选,可手动添加属性)</text></view>
		</view>

		<view class="flex_sb list_part">
		  <view class="fs_13 wid_550 box-borer">经：
		    <block v-for="(item,index) in part" :key="index">
				<text class="pl_10">{{index+1}}、{{item}}</text>
			</block>
		  </view>
		  <view class="fs_13 color_FF6000" @tap="tapNewPart">
			  +新增加
		  </view>

		</view>
		
		<view class="flex_c list">
		  <partCheckboxGroup :items="partList" @selectChange="tapPartSelect"></partCheckboxGroup>
		</view>
<!-- ------------------------------------	 -->
		<view class="flex_sb list_part">
		  <view class="fs_13 wid_550 box-borer">纬：
		    <block v-for="(item,index) in partLong" :key="index">
				<text class="pl_10">{{index+1}}、{{item}}</text>
			</block>
		  </view>
		  <view class="fs_13 color_FF6000" @tap="tapNewPartLong">
			  +新增加
		  </view>
		</view>
		<view class="flex_c list">
		  <partCheckboxGroup :items="partListLong" @selectChange="tapPartLongSelect"></partCheckboxGroup>
		</view>
		<view class="flex_c list_right_content">
		  <view class="fs_13">含量:</view>
		  <input placeholder-class="color_909090 fs_13" class="input" 
		  placeholder="例如75%涤20%氨5%棉" 
		  name="content" v-model="content"></input>
		</view>
		</view>
  <!-- - - - - - - - - -- - -- - - - - - - - - - --  -- -->
		<view class="form_box box_shadow">
			<view class="flex_c list_part">
			  <view>规格</view>
			 
			</view>
			<view>
				
			</view>
			<view class="flex_c list_right_content justify-content">
			  <view class="flex_c">
				  <view class="fs_13">经:</view>
				  <input placeholder-class="color_909090 fs_13" class="input" 
				  placeholder="例如50D/96FDTY半光+75D/144FFDY消光" 
				  name="spec_longitude" v-model="spec_longitude"></input>
			  </view>
			 
			   <view class="Clipboard" @tap="tapPaste">复制</view>
			</view>
			<view class="flex_c list_right_content">
			  <view class="fs_13">纬:</view>
			  <input placeholder-class="color_909090 fs_13" class="input" 
			  placeholder="例如50D/96FDTY半光+75D/144FFDY消光" 
			  name="spec_latitude" v-model="spec_latitude"></input>
			</view>
		</view>
	<!-- ------------------------------------------------ -->
	
			<view class="form_box box_shadow">

				<!-- <myPickerSmall @mychange="tabSwitchChange('styleChange',$event)" :items="styleSerial" name="风格"></myPickerSmall> -->
				<pickerInput @mychange="tabSwitchChange('styleChange',$event)" 
				:items="styleSerial" :firstLabel="styleSerialValue" name="风格"></pickerInput>
				<view class="flex_c list_right_content">
				  <view class="fs_13">组织:</view>
				  <input placeholder-class="color_909090 fs_13" class="input" 
				  placeholder="例如2/1" 
				  name="organize" v-model="organize"></input>
				</view>
			</view>
		<!-- ------------------------------------------------ -->
		<view class="form_box box_shadow">
		   <pickerButton :items="sampleType" name="布样类型" @buttonChange="tabSwitchChange('sampleType',$event)"></pickerButton>
		   <view class="flex_c list_part">
			  <view>密度<text class="pl_20">({{sampleTypeIndex==1?'坯布':'成品'}})</text></view>
			</view>	
			<view class="flex_c list_right_content">
			  <view class="fs_13">经:</view>
			  <input placeholder-class="color_909090 fs_13" class="input-half-width" 
			  placeholder="请输入数量" 
			  name="density_longitude" v-model="density_longitude" type="number"></input>
			  <view class="fs_13">纬:</view>
			  <input placeholder-class="color_909090 fs_13" class="input-half-width" 
			  placeholder="请输入数量" 
			  name="density_latitude" v-model="density_latitude" type="number"></input>
			  <switchButton :items='densityUnit' @buttonChange="tabSwitchChange('densityUnit',$event)"></switchButton>
			</view>
			<view class="flex_sb list_right_content">
			  <view class="flex_c">
				  <view class="fs_13">克重<text class="pl_20">({{sampleTypeIndex==1?'坯布':'成品'}})：</text></view>
				  <input placeholder-class="color_909090 fs_13" class="input_300" 
				  placeholder="请输入数量" 
				  name="grammage" v-model="grammage" type="number"></input>
			  </view>
			  <view class="flex_c">
				  <switchButton :items='grammageUnit' @buttonChange="tabSwitchChange('grammageUnit',$event)"></switchButton>
			  </view>
			</view>
			<view class="flex_sb list_right_content">
			  <view class="flex_c">
				  <view class="fs_13">幅宽<text class="pl_20">({{sampleTypeIndex==1?'坯布':'成品'}})：</text></view>
				  <input placeholder-class="color_909090 fs_13" class="input_300" 
				  placeholder="请输入数量" 
				  name="clothBreadth" v-model="clothBreadth" type="number"></input>
			  </view>
			  <view>cm</view>
			</view>
		</view>
		<!-- ------------------------------------------------ -->
		
		<!-- <view class="form_box box_shadow">
		
			<view class="uploadFile list_right_content">
				 <view><text class="fs_14;">布样照片</text><text class="smallFont">（最多可上传9张）</text></view>
				 <view class="flex_wrap">
					 <block v-for="(item,index) in pictures" :key="index">
						 <view>
							 <image :src="item" mode="aspectFill" class="picture_style"></image>
						 </view>
					 </block>
					  <view class="IconStyle" @tap="pickImage">
					 	 <view class="iconCenter">
					 		 
					 		 <view>
					 			 <uniIcon type="plus" color="#CECECE" size="30"></uniIcon>
					 		 </view>
					 		 <view style="margin-top: -40upx;"><text style="font-size:14px;color:#B1B1B1;">添加图片</text></view>
					 	 </view>
					  </view>
				 </view>
				
				 <view style="height: 80upx;width:100%;color:#FFFFFF;"></view>
			</view>
		</view> -->
		
		<view class='placeholder-view'></view>
	
		  
		<view class="fixed_bottom box_shadow_btn">
		  <button class="btn_left" hover-class="none" @tap="bindCancel">取消</button>
		  <button class="btn_right" @tap="submit" hover-class="none">确定</button>
		</view>
</view>  <!-- 顶级view -->
</template>

<script>
	import  pickerButton from "@/components/pickerButton.vue";
	import myPicker from "@/components/myPicker.vue";
	import partCheckboxGroup from "@/components/partCheckboxGroup.vue";
	import myPickerSmall from "@/components/myPickerSmall.vue";
	import switchButton from "@/components/switchButton-edit.vue";
	import pickerInput from "@/components/pickerInput.vue";
	import uniIcon from "@/components/uni-icons/uni-icons.vue";
	import popupMe from "@/components/popupMe.vue";
	var _this
	export default {
		components:{
			pickerButton,
			myPicker,
			partCheckboxGroup,
			myPickerSmall,
			switchButton,
			pickerInput,
			uniIcon,
			popupMe
			
		},
	   data(){
		return{
			clothBreadth:'',  //幅宽
			tradeName:'',   //品名
			content:'',  //含量
			spec_longitude:'',  //规格中的经纱
			spec_latitude: '', //规格中的纬纱
			organize:'',  //组织
			style:'', //风格
			grammage:'',  //克重
			density_latitude: '', //纬密
			density_longitude: '',  //经密
			purchaseQuantity:'',   //购买数量
			guamalv: '',            //挂码率
			remarks:'',             //备注
			inquiryType: [],
			inquiryTypeIndex: 1,           //询价类型
			densityUnit:[],
			densityUnitIndex:  1,          //密度单位： 条或梭
			grammageUnit:[],
			grammageUnitIndex: 1,          //克重单位
			lengthUnit: [],
			lengthUnitIndex: 1, 
					  //长度单位
			productSerial:[],
			productSerialIndex: '',       //产品系列
			productSerialValue:'',       //产品系列值
			
			productType:[],
			productTypeIndex: '',        //产品类型
			mainProductName:'',
			
			buyer:'',
			buyerCode: '',
			
			styleSerial:[],
			styleSerialIndex: -1,         //风格类型
			styleSerialValue:''        ,//风格输入选择框返回内容
			
			qualityPosition: [],
			qualityPositionIndex: '',     //品质定位
			
			part:[],   //经成分选中label
			partID:[],  //经成分选中ID
			partList:[], //经成分列表
						 		 
			partListLong:[],  //纬成分列表
			partLong:[]  ,//纬成分选中label
			partLongID:[], //纬成分选中ID
			
			sampleType:[], //布样类型
			sampleTypeIndex: 1 ,
			
			newPartText:'',            //新增经成分
			newPartLongText: '',       //新增纬成分
			
			styleCode: -1,
			number: '',
			orderType:'',
			pictures:[],
			
			goAnalysisSample:'',
			code:''
		};
	  },
	  onShow:function(){
		  console.log("onshow")
	  	 
	  },
	  onLoad:function(options){
		  console.log("onLoad")
		  _this = this
	  	 
		 let data = JSON.parse(options.data)
		 this.number = options.number
		 console.log(this.number)
		 this.orderType = options.orderType
		 console.log(this.orderType)
		 
		 this.styleSerialIndex  = data.styleCode ||-1
		 this.styleSerialVdata	
		_this.clothBreadth = data.clothBreadth
		_this.tradeName = data.tradeName
		_this.content   = data.content
		_this.spec_longitude = data.specificationLongitude
		_this.spec_latitude = data.specificationLatitude
		_this.organize = data.organization
		_this.grammage = data.gramWeight
		_this.density_latitude = data.densityLatitude
		_this.density_longitude = data.densityLongitude
		_this.densityUnitIndex = data.densityUnitCode
		_this.grammageUnitIndex = data.gramWeightUnitCode
		_this.productSerialIndex = data.seriesCode
		_this.productSerialValue = data.seriesName
		
		_this.productTypeIndex = data.mainProductCode
		_this.mainProductName = data.mainProductName
						
		_this.qualityPositionIndex = data.qualityCode
		_this.sampleTypeIndex = data.clothTypeCode ||1
		_this.styleSerialIndex   = data.styleCode ||-1
		_this.styleSerialValue   = data.styleName		
		_this.code = data.code
		 this.getAllSelect()
		
		//this.getInquiryInfo()
		 
		 
		
		
	  },
	  methods:{
		  getInquiryInfo:function(){
		  	let url = this.Api.analystDetails
		  	let data ={
		  		number: _this.number,		//询价/报价单号
		  		orderType: _this.orderType	   //类型 1询价单，2报价单
		  	}
		  	this.myRequest(data,url,'get').then(res => {
		  	  
		  	  if (res.data.status == 0){
		  		 _this.goAnalysisSample = res.data.data.goAnalysisSample
		  		 _this.goAnalysisSample.qualityName= res.data.data.goInitialSample.qualityName
		  		 
		  		 console.log(_this.goAnalysisSample)
		  		 _this.clothBreadth = _this.goAnalysisSample.clothBreadth
				 _this.tradeName = _this.goAnalysisSample.tradeName
				 _this.content   = _this.goAnalysisSample.content
				 _this.spec_longitude = _this.goAnalysisSample.specificationLongitude
				 _this.spec_latitude = _this.goAnalysisSample.specificationLatitude
				 _this.organize = _this.goAnalysisSample.organization
				 _this.grammage = _this.goAnalysisSample.gramWeight
				 _this.density_latitude = _this.goAnalysisSample.densityLatitude
				 _this.density_longitude = _this.goAnalysisSample.densityLongitude
				 _this.densityUnitIndex = _this.goAnalysisSample.densityUnitCode
				 _this.grammageUnitIndex = _this.goAnalysisSample.gramWeightUnitCode
				 _this.productSerialIndex = _this.goAnalysisSample.seriesCode
				 _this.productSerialValue = _this.goAnalysisSample.seriesName
				 
				 _this.productTypeIndex = _this.goAnalysisSample.mainProductCode
				 _this.mainProductName = _this.goAnalysisSample.mainProductName
				
				 _this.qualityPositionIndex = _this.goAnalysisSample.qualityCode
				 _this.sampleTypeIndex = _this.goAnalysisSample.clothTypeCode
                 _this.styleSerialIndex   = _this.goAnalysisSample.styleCode
                 _this.styleSerialValue   = _this.goAnalysisSample.styleName
				 

		  	  }
		  	}).catch(err => {
		  	  wx.showToast({
		  	    title: err.data.errMsg,
		  	    icon: 'none'
		  	  });
		  	});
		  },
		  selectBuyer:function(){
			  uni.navigateTo({
			  	url: '/pages/qing-f-c/inquiryManage/selectBuyer',
			  	success: res => {},
			  	fail: () => {},
			  	complete: () => {}
			  });
		  },
		  test:function(){
			  let url= 'http://show.jkfb.net.cn:8080/aiwc-show/show/city?cityCode=yuyao'
			  let data={}
			  this.myRequest(data,url,'get').then(res => {
			    console.log(res);
			  }).catch(err => {
			    wx.showToast({
			      title: err.data.errMsg,
			      icon: 'none'
			    });
			  });
		  },
		  getAllSelect:function(){
			  
			  //产品类型
			  let url= this.Api.getMainProduct
			  let data={}
			  this.myRequest(data,url,'get').then(res => {
			    console.log(res);
			  		_this.productType = res.data.data.list
			   }).catch(err => {
			    wx.showToast({
			      title: err.data.errMsg,
			      icon: 'none'
			    });
			  });
			  //请求类型
			   url= this.Api.inquiryType
			   data={}
			  this.myRequest(data,url,'get').then(res => {
			    console.log(res);
				_this.inquiryType = res.data.data.list
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
			  //风格选项
			  url = this.Api.style
			  data = {}
			  this.myRequest(data,url,'get').then(res => {
			    console.log(res);
			    _this.styleSerial = res.data.data.list
			  }).catch(err => {
			    wx.showToast({
			      title: err.data.errMsg,
			      icon: 'none'
			    });
			  });
			  //布样类型
			  url = this.Api.clothType
			  data = {}
			  this.myRequest(data,url,'get').then(res => {
			    console.log(res);
			    _this.sampleType = res.data.data.list
			  }).catch(err => {
			    wx.showToast({
			      title: err.data.errMsg,
			      icon: 'none'
			    });
			  });
			  //密度单位选择数据
			  url = this.Api.densityUnit
			  data = {}
			  this.myRequest(data,url,'get').then(res => {
			    console.log(res);
			    _this.densityUnit = res.data.data.list
				_this.densityUnit = this.setIsChecked(_this.densityUnit,_this.densityUnitIndex)
			  }).catch(err => {
			    wx.showToast({
			      title: err.data.errMsg,
			      icon: 'none'
			    });
			  });
			  //克重单位选择数据
			  url = this.Api.gramWeightUnit
			  data = {}
			  this.myRequest(data,url,'get').then(res => {
			    console.log(res);
			    _this.grammageUnit = res.data.data.list
				_this.grammageUnit = this.setIsChecked(_this.grammageUnit,_this.grammageUnitIndex)
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
			  }).catch(err => {
			    wx.showToast({
			      title: err.data.errMsg,
			      icon: 'none'
			    });
			  });
			  //获取经成分元素多选数据
			  url = this.Api.atom
			  data = {}
			  this.myRequest(data,url,'get').then(res => {
			    console.log(res);
			    _this.partList = res.data.data.list
				
			  }).catch(err => {
			    wx.showToast({
			      title: err.data.errMsg,
			      icon: 'none'
			    });
			  });
			  //获取纬成分元素多选数据
			  this.myRequest(data,url,'get').then(res => {
			    console.log(res);
			    _this.partListLong = res.data.data.list
			  				
			  }).catch(err => {
			    wx.showToast({
			      title: err.data.errMsg,
			      icon: 'none'
			    });
			  });
			  //品质定位
			  url = this.Api.getQuality
			  data = {}
			  this.myRequest(data,url,'get').then(res => {
			    console.log(res);
			    _this.qualityPosition = res.data.data.list
			  				
			  }).catch(err => {
			    wx.showToast({
			      title: err.data.errMsg,
			      icon: 'none'
			    });
			  });
			  
			  
			  
		  },
		  
		  tapPartSelect:function(labelArr,idArr){
			  let items = this.partList
			  this.part= labelArr
			  this.partID = idArr
			//从组件发射过来的数组，遍历成分数组对象，如果对象label，在数组中就设置为true，否则就设置为false
			//用，includes方法
			 for (var i = 0, lenI = items.length; i < lenI; ++i) {
			 	const item = items[i]
			  	if(labelArr.includes(item.label)){
			  		this.$set(item,'isChecked',true)	
			    } else{
					this.$set(item,'isChecked',false)
				}
			}
			console.log(this.partID)
			
		  },
		
		  tapPartLongSelect:function(labelArr,idArr){
			  let items = this.partListLong
			    this.partLong= labelArr
			    this.partLongID = idArr
			   for (var i = 0, lenI = items.length; i < lenI; ++i) {
			   	const item = items[i]
			    	if(labelArr.includes(item.label)){
			    		this.$set(item,'isChecked',true)	
			      } else{
			  		this.$set(item,'isChecked',false)
			  	}
			  }
			  console.log(this.partLongID)
		  },
		  // ---  弹窗新增经度处理
		 tapNewPart:function(){
			this.$refs.latiPart.show()
		 },
		 tapNewPartLong:function(){
		 	this.$refs.longtiPart.show()
		 },
		 getContent:function(label,content){
			switch (label){
				case 'lati':
					 this.newPartText = content
					 console.log(this.newPartText)
					 let url = this.Api.atomAdd
					 let data = {
						 atomName: this.newPartText
					  }
					 this.myRequest(data,url,'get').then(res => {
					   console.log(res)
					   if (res.data.status == 0){
						   this.getAllSelect()
					     }
					     }).catch(err => {
					     wx.showToast({
							 title: err.data.errMsg,
							 icon: 'none'
					   })
					   })
					 break;
				case 'longti':
					 this.newPartLongText = content
					 console.log(this.newPartLongText)
					 break
			}
			
		 },
		  // ---  弹窗新增纬度处理

		  tapPaste:function(){
			  // uni.setClipboardData({
			  // 	data: this.spec_longitude
			  // })
			   this.spec_latitude = this.spec_longitude
		  },
		  tabSwitchChange:function(label,event){
			  switch (label){
				  case 'sampleType':
				     this.sampleTypeIndex = event
					 this.sampleType.forEach((item)=>{
						 if(item.id == this.sampleTypeIndex){
								this.$set(item,'isChecked',true)
						 }else{
								this.$set(item,'isChecked',false)
						 }
					 })
					 console.log(this.sampleTypeIndex)
					 break;
				  case 'inquiryType':
				     this.inquiryTypeIndex = event
					 this.inquiryType.forEach((item)=>{
						 if(item.id == this.inquiryTypeIndex){
							 this.$set(item,'isChecked',true)
						 }else{
							 this.$set(item,'isChecked',false)
						 }
					 })
					 console.log(this.inquiryTypeIndex)
					 break;
				  
				  case 'styleChange':
				     console.log(event)
				     this.styleSerialIndex = event[1] || -1
					 this.styleSerialValue = event[0]
					 if (this.styleSerialValue=='平纹'){
					 	 this.organize = '1/1'
					 }
					 
					 break;
				  case 'productSerial':
				   
				   this.productSerialIndex = event[1] || -1
				   this.productSerialValue = event[0]
					 console.log(this.productSerialIndex)
					 break;	
				  case 'productType':
					 this.productTypeIndex = event
					 console.log(this.productTypeIndex)
					 break; 
				 
				  case 'densityUnit':
					  this.densityUnitIndex = event
					  this.densityUnit.forEach((item)=>{
						 if(item.id == this.densityUnitIndex){
								this.$set(item,'isChecked',true)
						 }else{
								this.$set(item,'isChecked',false)
						 }
					  })
					 console.log(this.densityUnitIndex)
					 break;	
				  case 'grammageUnit':
					  this.grammageUnitIndex = event
					  this.grammageUnit.forEach((item)=>{
						 if(item.id == this.grammageUnitIndex){
								this.$set(item,'isChecked',true)
						 }else{
								this.$set(item,'isChecked',false)
						 }
					  })
					 console.log(this.grammageUnitIndex)
					 break;		  
				  case 'qualityPosition':
					  this.qualityPositionIndex = event
					 console.log(this.qualityPositionIndex)
					 break;
				case 'lengthUnit':
					  this.lengthUnitIndex = event
					  this.lengthUnit.forEach((item)=>{
						 if(item.id == this.lengthUnitIndex){
								this.$set(item,'isChecked',true)
						 }else{
								this.$set(item,'isChecked',false)
						 }
					  })
					 console.log(this.lengthUnitIndex)
					 break; 
					
			  }
		  },
		 pickImage:function(){
		 			  uni.chooseImage({
		 				  sizeType: ['compressed'],
		 			      success: (chooseImageRes) => {
		 			          const tempFilePaths = chooseImageRes.tempFilePaths;
		             _this.pictures = []
		 					  for (let i=0 ;i<tempFilePaths.length;i++){
		 						  uni.uploadFile({
		 						      url: _this.Api.upload, 
		 							  filePath: tempFilePaths[i],
		 							  name:'file',
		 						      success: (uploadFileRes) => {
		 						          console.log(uploadFileRes);	
		 								  _this.pictures.push(JSON.parse(uploadFileRes.data).data.msg)
		 								  uni.showToast({
		 								  	title: '上传成功',
		 									icon:'none',
		 									duration: 1000
		 								  });
		 						      }
		 						  });
		 					  }  
		 			      }
		 			  });
		  },
		  bindCancel:function(){
			  uni.navigateBack({
			  	delta: 1
			  });
		  },
		  submit:function(){
			  
			 
			  //判断风格输入内容跟选择编号是否一致，不一致设置为-1
			  
			  _this.styleSerial.forEach((item)=>{
				  if (item.id == _this.styleSerialIndex){
					  if (item.label != _this.styleSerialValue){
						  this.styleSerialIndex = -1
					  }
				  }
			  })
			  _this.productSerial.forEach((item)=>{
			  				  if (item.id == _this.productSerialIndex){
			  					  if (item.label != _this.productSerialValue){
			  						  this.productSerialIndex = -1
			  					  }
			  				  }
			  })
			  console.log(_this.goAnalysisSample.code)
			  let _data={
				  code:_this.code,
				  number:_this.number,					//单号
				  orderType: _this.orderType,			        //询价/报价（来样或回样）
				  mainProductCode: _this.productTypeIndex,  //产品类型编码
				  tradeName:	_this.tradeName			,	//品名
				  seriesCode:	_this.productSerialIndex			,	//产品系列编码
				  seriesName:   _this.productSerialValue,      //产品系列值
				  ingredientLongitudes: _this.partID ,    //成分经数组
				  ingredientLatitudes:	_this.partLongID	,  //成分纬数组（
				  content:	_this.content				,  //含量
				  specificationLongitude: _this.spec_longitude	,     //规格经
				  specificationLatitude:	_this.spec_latitude,	//规格纬
				  styleCode:		_this.styleSerialIndex	,//风格编码
				  styleName	:	   _this.styleSerialValue	,//风格名称
				  organization:		_this.organize		,//组织
				  clothType:			_this.sampleTypeIndex	,	//布样类型
				  densityLongitude:		_this.density_longitude	,//密度经
				  densityLatitude:	     _this.density_latitude   ,//密度纬
				  densityUnit:			  _this.densityUnitIndex , //密度单位
				  gramWeight:			  _this.grammage ,     //克重
				  gramWeightUnit:		  _this.grammageUnitIndex ,    // 克重单位
				  clothBreadth:		      _this.clothBreadth , //幅宽
				  qualityCode:			 _this.qualityPositionIndex ,//品质定位编码
				  remarks:	_this.remarks				,   //备注
				 // pictures:	_this.pictures //图片数组
				  
			  }
			  console.log(_data)
			  let url = this.Api.analystUpdate
			  uni.showLoading({
			  	title:"提交中",
				mask: true
			  })
			  this.myRequest(_data,url,'post').then(res => {
			    console.log(res);
			    if (res.data.status== 0){
					uni.hideLoading()
					uni.showToast({
						title: '录入分析成功',
						icon: 'none',
						duration: 500
					});
					var pages = getCurrentPages();
					var currPage = pages[pages.length - 1]; //当前页面
					var prevPage = pages[pages.length - 2]; //上一个页面
					var pprevPage = pages[pages.length - 3]	; //上上个页面			 
					//直接调用上一个页面的setData()方法，把数据存到上一个页面中去
					
					prevPage.setData({
					   isDoRefresh:true
					})
					pprevPage.setData({
					   isDoRefresh:true
					})
					uni.redirectTo({
						url: './inquiry-details?inquiryNumber='+ _this.number+'&orderType='+_this.orderType
					})
				}else{
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

<style lang='scss'>
	page{
		background: #F4F4F4;
	}
	.form_box{
	  background-color:#fff; 
	  font-size: 14px;
	  margin-bottom: 20upx;
	}
	.list{
	  margin: 0 30upx;
	  padding:0 10upx;
	  border-bottom: 1upx solid rgba(221, 221, 221, 0.3);
	  line-height: 87upx;
	  color: #333236;
	}
    .box-borer{
		box-sizing:border-box;
	}
	.list_part{
		margin: 0 20upx;
		padding:0 10upx;
		line-height: 87upx;
		color: #333236;
	
	}
	
	.list_right{
	  width:250upx;
	}
	.list_right_content{
		margin: 0 20upx;
		padding:0 10upx;
		line-height: 87upx;
		border-bottom: 1upx solid rgba(221, 221, 221, 0.3);
	}
	
	.color_888{
	  color: #888890;
	}
	
	.select_btn{
	  padding: 0 20upx;
	  height: 48upx;
	  box-sizing: border-box;
	  border: 2upx solid #EE603F;
	  border-radius: 6upx;
	  line-height: 46upx;
	  text-align: center;
	}
	.wid_2x{
	  width: 192upx;
	}
	.input{
	  width: 500upx;
	  background-color: #fff;
	  font-size: 14px;
	  padding-left: 30upx;
	}
	.input_300{
	  width: 300upx;
	  background-color: #fff;
	  font-size: 13px;
	  padding-left: 30upx;
	}
	.input-half-width{
	  width: 200upx;
	  background-color: #fff;
	  font-size: 13px;
	  padding-left: 30upx;
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
	.select_btn view{
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
	.textareBox{
		width: 670upx;
		height: 140upx;
		background-color: #F4F4F4;
		border-radius: 6upx;
		padding: 20upx;
		box-sizing: border-box;
		
	}
	.textareBox>textarea{
		background-color: #F4F4F4;
		font-size: 24upx;
		padding: 0;
		height: 80upx;
		line-height: 1.1;
		
	}
	.textareBox_title{
		color: #888890;
		text-align: right;
		line-height: 1.1;
		font-size: 24upx;
	}
	.flexend130{
	  display: flex;
	  flex: 0 0 130upx;
	  align-items: center;
	  justify-content: flex-end;
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
	}
	.borderleft{
	  border-top-left-radius: 6upx;
	  border-bottom-left-radius: 6upx;
	}
	.unitselect{
	  color: #fff;
	  background-color: #EE603F;
	}
	.unitunselect{
	  color: #888890;
	  background-color: #fff;
	}
	.line{
		width: 4upx;
		height: 15px;
		border-radius: 2upx;
		background-color: #EE603F;
		margin-right: 10upx;
		margin-left: -14upx;
	}
	.isOption{
		width: 152upx;
		text-align: center;
		background-color: #EE603F;
		border-radius: 6upx;
		line-height: 48upx;
		color: #fff;
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
	.pl_40{
		padding-left: 40upx;
	}
	.width_160{
		width: 160upx;
	}
	.mr_40{
		margin-right: 40upx;
	}
	.width_450{
		width: 450upx
	}
	.right_img{
		width: 14upx;
		height: 24upx;
	}
	.wid_430{
		width: 430upx;
	}
	
	
	
	
	 .bottomWrapper{  
	    position: fixed;  
	    bottom: 0;  
	    background-color: #fff;  
	    width: 100%;  
	    padding: 16upx 10upx;  
	    border-top: 1px solid $uni-border-color;  
	}  
	.buttonWrapper{  
	    text-align: center;  
	    display: flex;  
	    justify-content:center;  
	    align-items:center;  
	    font-size: $uni-font-size-base;  
	    color: $uni-text-color;  
	}  
	.publishWrapper{  
	    display: flex;  
	    flex-direction: column;
	    justify-content: space-between;  
		
	    input{  
	        border: 1px solid $uni-border-color;  
	        border-radius: 40upx;  
	        padding-left: 20upx;  
	        width: 70%;  
	    }
	}
	.newPart{
		display: flex;
		font-size: 14px;
		
		width: 170upx;
		height: 60upx;
		justify-content: center;
		align-items: center;
		
		border: 2upx solid #DCDCDC;
		box-sizing: border-box;
		border-radius: 30upx;
		color: #fff;
		background-color: #FF6000;
		margin-left: 10upx;
	}
	.newPartCancel{
		display: flex;
		font-size: 14px;
		
		width: 170upx;
		height: 60upx;
		justify-content: center;
		align-items: center;
		
		border: 2upx solid #DCDCDC;
		box-sizing: border-box;
		border-radius: 30upx;
		color: black;
		background-color: #FFFFFF;
		margin-left: 10upx;
	}
	.textarea_border{
		border: 2upx solid #DCDCDC;
		height: 140upx;
		width: 450upx;
		padding-right: 20upx;
		background-color:#F7F7F7;
	}
	.iconClose{
		position:absolute;
		top: 2upx;
		right: 2upx;
	}
	.popTitle{
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.Clipboard{
		text-align: center;
		width: 100upx;
		height: 40upx;
		background-color: #FF6000;
		color: white;
		line-height: 40upx;
		border-radius: 20upx;
		
	}
	.justify-content{
		justify-content: space-between;
	}
	.color_909090{
		color: #909090;
	}
	.uploadFile{
		display: flex;
		flex-direction: column;
		margin-bottom: 100upx;
		
	}
	.IconStyle {
		height: 200upx;
		width: 200upx;
		display: flex;
		justify-content: center;
		align-items: center;
		background: #EFEFEF;
		
	}
	.iconCenter{
		display: flex;
		flex-direction: column;
		align-items: center;
		height: 100upx;
	}
	.smallFont{
	    color: #999999;
		font-size: 12px;
	}
	.picture_style{
		margin: 0upx 20upx;
		width: 180upx;
		height: 180upx;
		
	}
	
	
</style>

