<template>
<view>
	<view class="form_box box_shadow">
		<view class="flex_c list">
		  <!-- <view class="line"></view> -->
		  <view class="font_we_bold fs_16">产品信息 </view>
		</view>
		
		<!-- <pickerButton :items="inquiryType" name="询价类型" @buttonChange="tabSwitchChange('inquiryType',$event)"></pickerButton> -->
		
		<!-- <myPicker @mychange="tabSwitchChange('productSerial',$event)" :items="productSerial" name="产品系列"></myPicker> -->
		<pickerInput @mychange="tabSwitchChange('productSerial',$event)"
		:items="productSerial" :firstLabel="productSerialValue" name="产品系列" fontSize="font-size:14px;"></pickerInput>
		
		<view class="flex_c list">
		  <view class="list_right">品名（别名）：</view>
		  <input placeholder-class="color_909090 fs_13" class="input" placeholder="请填写品名" name="tradeName" v-model="tradeName"></input>
		</view>
		<myPicker :firstLabel="mainProductName" @mychange="tabSwitchChange('productType',$event)" name="产品类型" :items="productType" ></myPicker> 
		
		<view class="flex_c list" style="position:relative;" @tap="pickSeason">
			<view style="width:250upx;">旺季时间：</view>
			<view v-if="seasonName==''" style="color:#909090">请选择</view>
			<view v-if="seasonName!=''">{{seasonName}}</view>
			<view style="position:absolute;top:15upx;right:0;"><uniIcon type="forward" size="20" color="#ACACAC"></uniIcon></view>
		</view>
	</view>
	<!-- ------弹窗---- -->
	<popupMe ref="latiPart" @input="getContent('lati',$event)" title="新增经纱成份"></popupMe>
	<popupMe ref="longtiPart" @input="getContent('longti',$event)" title="新增纬纱成份"></popupMe>
	<popupMeSeason ref="season" :season="months" @input="handleSeason()" title="选择旺季时间"></popupMeSeason>
	
	<!-- ------弹窗---- -->
	<view class="form_box box_shadow">
		<view class="flex_c list">
		  <!-- <view class="line"></view> -->
		  <view class="font_we_bold fs_16">产品要素 </view>
		</view>
		<view class="flex_c list_right_content">
		  <view class="fs_13">成份：{{ingredient}}</view>
		  <!-- <input placeholder-class="color_909090 fs_13" class="input" 
		  placeholder="请输入" 
		  name="content" v-model="ingredient"></input> -->
		</view>
		<view class="flex_c list_right_content">
		  <view class="fs_13">经：{{ingredientLongitude}}</view>
		<!--  <input placeholder-class="color_909090 fs_13" class="input" 
		  placeholder="请输入" 
		  name="content" v-model="ingredientLongitude"></input> -->
		</view>
		<view class="flex_c list_right_content">
		  <view class="fs_13">纬：{{ingredientLatitude}}</view>
		  <!-- <input placeholder-class="color_909090 fs_13" class="input" 
		  placeholder="请输入" 
		  name="content" v-model="ingredientLatitude"></input> -->
		</view>
		<view class="flex_c list_right_content">
		  <view class="fs_13">含量：</view>
		  <input placeholder-class="color_909090 fs_13" class="input" 
		  placeholder="请输入，例如涤75%/氨10%/棉5%" 
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
				  <view class="fs_13">经：</view>
				  <input placeholder-class="color_909090 fs_13" class="input" 
				  placeholder="例如T50d/72Ffdy+t50d/72Ffdy" 
				  name="spec_longitude" v-model="spec_longitude"></input>
			  </view>
			 
			   <view class="Clipboard" @tap="tapPaste">复制</view>
			</view>
			<view class="flex_c list_right_content">
			  <view class="fs_13">纬：</view>
			  <input placeholder-class="color_909090 fs_13" class="input" 
			  placeholder="例如T50d/72Ffdy+t50d/72Ffdy" 
			  name="spec_latitude" v-model="spec_latitude"></input>
			</view>
		</view>
	<!-- ------------------------------------------------ -->
	
			<view class="form_box box_shadow">

				<!-- <myPickerSmall @mychange="tabSwitchChange('styleChange',$event)" :items="styleSerial" name="风格"></myPickerSmall> -->
			    <pickerInput @mychange="tabSwitchChange('styleChange',$event)" 
				:items="styleSerial"  :firstLabel="styleSerialValue" name="风格" fontSize="font-size:13px;"></pickerInput>
				<view class="flex_c list_right_content">
				  <view class="fs_13">组织：</view>
				  <input placeholder-class="color_909090 fs_13" class="input" 
				  placeholder="请输入风格的组织，如2/1" 
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
			  <view class="fs_13">纬：</view>
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
				  <switchButtonEdit :items='grammageUnit' @buttonChange="tabSwitchChange('grammageUnit',$event)"></switchButtonEdit>
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
		
		<view class="form_box box_shadow">
		
			<myPickerSmall :firstLabel="qualityName" @mychange="tabSwitchChange('qualityPosition',$event)" :items="qualityPosition" name="品质定位"></myPickerSmall>
        </view>
		<!-- <view class="form_box box_shadow">
		     <view class="flex_c list">
		       
		       <view class="font_we_bold fs_16">生产状态 </view>
		     </view>
			  <pickerButton :items="machineStatus" name="织机状态" @buttonChange="tabSwitchChange('machineStatus',$event)"></pickerButton>
			 <pickerInput @mychange="tabSwitchChange('machineType',$event)"
			 :items="machineType" name="织机类型" fontSize="font-size:14px;"></pickerInput>
			 <pickerInput @mychange="tabSwitchChange('machineBrand',$event)"
			 :items="machineBrand" name="织机品牌" fontSize="font-size:14px;"></pickerInput>
			 <view class="flex_c list" style="position: relative;">
			   <view>织机数量：</view>
			   <input placeholder-class="color_909090 fs_13"   v-model="machineCount" type="number" class="input" placeholder="请输入" name="machineCount"></input>
			   <view style="position:absolute;top:15upx;right:0;">台</view>
			 </view>
			 <view class="flex_c list" style="position: relative;">
			   <view>单机产量：</view>
			   <input placeholder-class="color_909090 fs_13"  v-model="dailyProduction" type="number" class="input" placeholder="请输入" name="dailyProduction" ></input>
			   <view style="position:absolute;top:15upx;right:0;">米</view>
			 </view>
			 <view class="flex_c list" style="position: relative;">
			   <view>日总产量：</view>
			   <view>{{machineCount*dailyProduction}}</view>
			   <view style="position:absolute;top:15upx;right:0;">米</view>
			 </view>
		</view> -->
		<!-- <view class="form_box box_shadow">
		     <view class="flex_c list">
		       
		       <view class="font_we_bold fs_16">现货存量 </view>
		     </view>
			 <pickerButton :items="inStock" name="现货状态:" @buttonChange="tabSwitchChange('inStock',$event)"></pickerButton>
			 <view class="flex_sb list" style="align-items: center;">
			 	<view>现货数量：</view>
			 	<view><input v-model="goodsCount" placeholder="请输入数量" placeholder-style="color:#909090;font-size:13px;" /></view>
			 	<switchButton :items='lengthUnit' @buttonChange="tabSwitchChange('lengthUnit',$event)"></switchButton>
			 </view>
			  
		</view>
		
		<view class="form_box box_shadow">
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
	import pickerButton from "@/components/pickerButton-edit.vue";
	import myPicker from "@/components/myPicker-inquiry.vue";
	import partCheckboxGroup from "@/components/partCheckboxGroup.vue";
	import myPickerSmall from "@/components/myPickerSmall.vue";
	import switchButton from "@/components/switchButton-auto.vue";
	import switchButtonEdit from "@/components/switchButton-edit.vue";
	import pickerInput from "@/components/pickerInput.vue";
	import uniIcon from "@/components/uni-icons/uni-icons.vue";
	import popupMe from "@/components/popupMe.vue";
	import popupMeSeason from "@/components/popupMeSeason.vue"
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
			popupMe,
			switchButtonEdit,
			popupMeSeason
		},
	   data(){
		return{
			companyCode:'',   //公司编码
			machineCount: '', //机台数量
			dailyProduction: '', //单台产量
			machineStatus:[],   //织机状态
			machineStatusIndex: 1,
			inStock:[],
			inStockIndex: 1,
			months:[
				{id: 1,label:'一月'},
				{id: 2,label:'二月'},
				{id: 3,label:'三月'},
				{id: 4,label:'四月'},
				{id: 5,label:'五月'},
				{id: 6,label:'六月'},
				{id: 7,label:'七月'},
				{id: 8,label:'八月'},
				{id: 9,label:'九月'},
				{id: 10,label:'十月'},
				{id: 11,label:'十一月'},
				{id: 12,label:'十二月'}
			],
			highSeasonTimeCode:'',
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
			grammageUnitIndex: 2,          //克重单位
			lengthUnit: [],
			lengthUnitIndex: 1,           //长度单位
			productSerial:[],
			productSerialIndex: '',       //产品系列
			productSerialValue:'',       //产品系列值
			

			buyer:'',
			buyerCode: '',
			productType:'',     //产品类型
			productTypeIndex: 1,
			mainProductName:'',
			styleSerial:[],
			styleSerialIndex: '',         //风格类型
			styleSerialValue:''        ,//风格输入选择框返回内容
			
			qualityPosition: [],
			qualityPositionIndex: '',     //品质定位
			qualityName:'',
			
			part:[],   //经成分选中label
			partID:[],  //经成分选中ID
			partList:[], //经成分列表
			ingredient:'', //成分
			ingredientLongitude:'', //成分经
			ingredientLatitude:'',		 //成分纬		 
			partListLong:[],  //纬成分列表
			partLong:[]  ,//纬成分选中label
			partLongID:[], //纬成分选中ID
			
			sampleType:[], //布样类型
			sampleTypeIndex: 1 ,
			
			newPartText:'',            //新增经成分
			newPartLongText: '',       //新增纬成分
			
			styleCode: '',
			pictures: [],              //上传图片数组
			tempFiles: [],
			
			season:[],
			seasonCode:[],
			seasonName:'',//旺季时间
			
			machineType:[],  //机台类型
			machineTypeIndex: -1,
			machineTypeValue:'' ,
			
			machineBrand: [],  //机台品牌
			machineBrandIndex: '',
			machineBrandValue:'',
			
			goodsCount: '',//现货数量
			goodsDetail:'',
		};
	  },
	  onLoad:function(options){
		  _this = this
	     this.goodsDetail = JSON.parse(options.goodsDetail)
		 console.log(this.goodsDetail)
		 this.tradeName =  this.goodsDetail.tradeName
		 this.highSeasonTimeCode = this.goodsDetail.highSeasonTimeCode
		 let temp = this.highSeasonTimeCode.split(',')
		 console.log(temp)
		 this.months.forEach((item)=>{
			 if (temp.includes(item.id.toString())){
				 this.$set(item,'isChecked',true)
			 }
		 })
		 console.log(this.months)
		 this.productTypeIndex = _this.goodsDetail.mainProductCode ||''
		 this.mainProductName = _this.goodsDetail.mainProductName
		 
		 _this.productSerialIndex =  _this.goodsDetail.seriesCode     //产品系列
		 _this.productSerialValue  =  _this.goodsDetail.seriesName      //产品系列值
		 
		 _this.styleSerialIndex   = _this.goodsDetail.styleCode
		 _this.styleSerialValue   = _this.goodsDetail.styleName
		 
		 _this.content   = _this.goodsDetail.content
		 _this.spec_longitude = _this.goodsDetail.specificationLongitude
		 _this.spec_latitude = _this.goodsDetail.specificationLatitude
		 _this.organize = _this.goodsDetail.organization
		 _this.grammage = _this.goodsDetail.gramWeight
		 _this.density_latitude = _this.goodsDetail.densityLatitude
		 _this.density_longitude = _this.goodsDetail.densityLongitude
		 _this.densityUnitIndex = _this.goodsDetail.densityUnitCode ||1
		 _this.grammageUnitIndex = _this.goodsDetail.gramWeightUnitCode ||2
		 _this.sampleTypeIndex = _this.goodsDetail.clothTypeCode
		 _this.qualityPositionIndex = _this.goodsDetail.qualityCode
		 _this.qualityName  = _this.goodsDetail.qualityName
		 _this.clothBreadth = _this.goodsDetail.clothBreadth
		 _this.ingredient  = _this.goodsDetail.ingredient
		 _this.ingredientLatitude  = _this.goodsDetail.ingredientLatitude
		 _this.ingredientLongitude  = _this.goodsDetail.ingredientLongitude
		 this.getAllSelect()
	  },
	  methods:{
		 
		
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
				_this.sampleType = this.setIsChecked(_this.sampleType,_this.sampleTypeIndex)
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
				console.log(_this.grammageUnit)
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
			  //在机状态
			  url = this.Api.machineStatus
			  data = {}
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
			 this.newPartText = content
			 console.log(this.newPartText)
			 let url = this.Api.atomAdd
			 let data = {
				 atomName: this.newPartText
			  }
			  uni.showLoading({
			  	title: '创建中',
			  	mask: true
			  });
			 this.myRequest(data,url,'get').then(res => {
			   console.log(res)
			   uni.hideLoading()
			   if (res.data.status == 0){
				   this.getAllSelect()
				 }
				 }).catch(err => {
				 wx.showToast({
					 title: err.data.errMsg,
					 icon: 'none'
			   })
			   })
		 },
		 //处理旺季时间
		 handleSeason:function(e){
			_this.months  = e 
			console.log(_this.months)
			_this.months.forEach((item)=>{
				if (item.isChecked==true){
					_this.seasonCode.push(item.id)
				}
			})
			_this.seasonName= _this.seasonCode.join(',')
			console.log(_this.seasonName)
			 
		 },
		  // ---  弹窗新增纬度处理

		  tapPaste:function(){
			  uni.setClipboardData({
			  	data: this.spec_longitude
			  })
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
					 console.log(this.styleSerialIndex)
					 console.log(this.styleSerialValue)
					 break;
				  case 'productSerial':
					  this.productSerialIndex = event[1] || -1
					  this.productSerialValue = event[0]
				      
					  
					  break;	 
				  case 'densityUnit':
					  this.densityUnitIndex = event
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
					 console.log(this.lengthUnitIndex)
					 break; 
				  case 'productType':
						  this.productTypeIndex = event
						 console.log(this.productTypeIndex)
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
					 this.inStock=this.setIsChecked(this.inStock,this.inStockIndex)
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
		  pickSeason:function(){
			  this.$refs.season.show()
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
			  
			 
			  let _data={
				  goodsCode: _this.goodsDetail.goodsCode,  //			公司编码
				 // highSeasonTime: _this.seasonCode,  //		旺季时间编码数组

				  tradeName:	_this.tradeName			,	//品名
				  seriesCode:	_this.productSerialIndex,	//产品系列编码
				  seriesName:   _this.productSerialValue,      //产品系列值
				  ingredientLongitudes: _this.ingredientLongitude,    //成分经数组
				  ingredientLatitudes:	_this.ingredientLatitude,  //成分纬数组
				  content:	_this.content				,  //含量
				  mainProduct: _this.productTypeIndex,    //产品类型
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
				//  pictures:	             _this.pictures  ,//图片数组
				 // remarks:	_this.remarks				,   //备注
				  
			  }
			  if(_this.grammageUnitIndex ==1){
				  if (_this.clothBreadth== 0){
					  uni.showToast({
					  	title: '幅宽必填',
						icon: 'none',
						duration: 500
					  });
					  return
				  }
			  }
			  console.log(_data)
			  uni.showLoading({
			  	title: '加载中',
			  	mask: true
			  });
			  let url = this.Api.goodsAudit
			  this.myRequest(_data,url,'post').then(res => {
			    console.log(res);
				uni.hideLoading()
			    if (res.data.status== 0){
					uni.showToast({
						title: '审核通过',
						icon: 'none',
						duration: 1000
					});
					uni.navigateBack({
						delta: 1
					});
					
					
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
	  /* padding:0 10upx; */
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
	  width: 446upx;
	  background-color: #fff;
	  font-size: 14px;
	  padding-left: 10upx;
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
		height: 180upx;
		width: 180upx;
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
