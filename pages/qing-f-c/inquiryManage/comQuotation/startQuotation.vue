<template>
	<view>
		<view class="top-wrap">
			<view class="title">报价基本信息</view>
			
			<!-- <view class="flex_c list_part">
			  <view>卖家{{productDetails.companyCode||''}}<text style="padding-left: 30upx;">{{productDetails.companyName||''}}</text></view>
			</view> -->
			<view style="display: flex;color: #333236;font-size: 14px;border-bottom: 1upx solid rgba(237,237,237,1);margin-top: 20upx;line-height: 60upx;">
				<view style="width:170upx;">卖家</view>
				<view>
					<text class="seller">{{productDetails.companyName||''}}</text>	
				</view>
			</view>
			<view class="content">
				<view>报价价格：</view>
				<view><input v-model="unitPrice" placeholder="请输入价格" placeholder-style="color:#909090;font-size:13px;" /></view>
				<switchButton :items='lengthUnit' :initValue='1' @buttonChange="switchChange('lengthUnit',$event)"></switchButton>
			</view>
			<view class="content">
				<view>运费：</view>
				<switchButtonCarrage :items='carriage' @buttonChange="switchChange('carriage',$event)"></switchButtonCarrage>
			</view>
			
			<view class="content-1" style="justify-content: space-between;" v-if="carriageIndex == 1">
				<view class='label'>运费单价：</view>
				<view><input v-model="carriageContent" type="number" placeholder="请输入运费单价" placeholder-style="color:#909090;font-size:13px;" /></view>
			    <view class="fs_13">
			    	{{returnLabel}}
			    </view>
			</view>
			
            <view class="content">
				<view>税：</view>
				<switchButton :items='taxes' @buttonChange="switchChange('taxes',$event)"></switchButton>
			</view>
			<!-- <view class="content-1">
				<view class='label'>交货地：</view>
				<view><input v-model="placeOfDelivery" placeholder="请输入交货地" placeholder-style="color:#909090;font-size:13px;" /></view>
			</view> -->
			<view class="content-1">
				<view class='label'>交货地点：</view>
				<view class='items'>
					<myPickerPart :items="placeOfDelivery" @mychange="pickerChange('placeOfDelivery',$event)" :firstLabel='1'></myPickerPart>
				</view>
				
			</view>
			<view class="content-1">
				<view class='label'>库存状态：</view>
				<view class='items'>
					<myPickerPart :items="storeStatus" @mychange="pickerChange('storeStatus',$event)" :firstLabel='1'></myPickerPart>
				</view>
				
			</view>
		
			<view class="content-1">
				<view class="label">挂码率：</view>
				<view class="items-1">
					<view><input v-model="guamalv" placeholder="请输入" placeholder-style="color:#909090;font-size:13px;" /></view>
					<view>%</view>
				</view>
				
			</view>
			<view class="content-1 no_border">
				<view class='label'>备注：</view>
				<view><input v-model="remarks" placeholder="请输入" placeholder-style="color:#909090;font-size:13px;" /></view>
			</view>
		</view>
		<!-- 顶部信息块 -->
		
		
		<view class="form_box box_shadow">
				<view class="flex_c list border_none">
				  <!-- <view class="line"></view> -->
				  <view class="font_we_bold fs_16">产品要素 </view>
				</view>
				<view class="flex_c list_part">
				  <view>成份：{{productDetails.ingredient||''}}</view>
				</view>
				<view class="flex_c list_part">
				  <view>经：{{productDetails.ingredientLongitude||''}}</view>
				</view>
				<view class="flex_c list_part">
				  <view>纬：{{productDetails.ingredientLatitude||''}}</view>
				</view>
				<view class="flex_c list_part no_border">
				  <view>含量：{{productDetails.content||''}}</view>
				</view>
			</view>	
		<!-- ------------------------ -->	
			<view class="form_box box_shadow">
					<view class="flex_c list border_none">
					 
					  <view >规格</view>
					</view>
					
					<view class="flex_c list_part">
					  <view>经：{{productDetails.specificationLongitude||''}}</view>
					</view>
					<view class="flex_c list_part no_border">
					  <view>纬：{{productDetails.specificationLatitude||''}}</view>
					</view>
					
			</view>	
			
				<!-- ------------------------------------------------ -->
				
			<view class="form_box box_shadow">

					<view class="flex_c list_part">
					  <view>风格：{{productDetails.styleName||''}}</view>
					</view>
					<view class="flex_c list_part no_border">
					  <view>组织：{{productDetails.organization||''}}</view>
					</view>
					
			</view>	
			<!-- ------------------- -->
				<view class="form_box box_shadow">
				   <view class="flex_c list_part no_border">
				     <view>布样类型：{{productDetails.clothTypeName||''}}</view>
				   </view>
				   <view class="flex_c list_part">
					  <view>密度<text class="pl_20">({{productDetails.clothTypeName||''}})</text></view>
					</view>	
					<view class="flex_c list_right_content">
					  <view class="fs_13">经：</view>
					  <input placeholder-class="color_888 fs_13" class="input-half-width" 
					  placeholder="请输入数量" 
					  name="density_longitude" v-model="density_longitude"></input>
					  <view class="fs_13">纬:</view>
					  <input placeholder-class="color_888 fs_13" class="input-half-width" 
					  placeholder="请输入数量" 
					  name="density_latitude" v-model="density_latitude"></input>
					  <switchButtonS :items='densityUnit' @buttonChange="tabSwitchChange('densityUnit',$event)"></switchButtonS>
					</view>
					<view class="flex_sb list_right_content">
					  <view class="flex_c">
						  <view class="fs_13">克重<text class="pl_20">({{productDetails.clothTypeName||''}})：</text></view>
						  <input placeholder-class="color_888 fs_13" class="input_300" 
						  placeholder="请输入数量" 
						  name="grammage" v-model="grammage"></input>
					  </view>
					  <view class="flex_c">
						  <switchButton :items='grammageUnit' @buttonChange="tabSwitchChange('grammageUnit',$event)"></switchButton>
					  </view>
					</view>
					<view class="flex_sb list_right_content">
					  <view class="flex_c">
						  <view class="fs_13">幅宽<text class="pl_20">({{productDetails.clothTypeName||''}})：</text></view>
						  <input placeholder-class="color_888 fs_13" class="input_300" 
						  placeholder="请输入数量" 
						  name="clothBreadth" v-model="clothBreadth"></input>
					  </view>
					  <view>cm</view>
					</view> 
				</view>
				<!-- 品质定位 -->
				<view class="form_box">
					<view class="flex_c list_part">
					  <view>品质定位：{{productDetails.qualityName||''}}</view>
					</view>
					<!-- <view class="content-2">
						<view class='label'>品质定位：{{productDetails.qualityName||''}}</view>
						<view class='items'>
							<myPickerPart :items="qualityPosition" @mychange="tabSwitchChange('qualityPosition',$event)" :firstLabel='-1'></myPickerPart>
						</view>
						
					</view> -->
				</view>
				
				<view class="uploadFile list_right_content_1">
						 <view style="padding-left: 20upx"><text class="fs_14;">布样照片</text><text class="smallFont">（最多可上传9张）</text></view>
						 <view class="flex_wrap">
							 <block v-for="(item,index) in pictures" :key="index">
								 <view >
									 <image :src="item" mode="aspectFill" class="picture_style"></image>
								 </view>
							 </block>
							  <view class="IconStyle" @tap="pickImage" style="margin-left: 20upx">
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
				
						
				<!-- <view class='placeholder-view-1'></view> -->

				<view class="fixed_bottom box_shadow_btn">

				  <button class="btn_right" @tap="submit" hover-class="none">提交审核</button>
				</view>
		
     
	</view><!-- 顶级view -->
</template>

<script>
	import  pickerButton from "@/components/pickerButton.vue";
	import myPickerPart from "@/components/myPickerPartNew.vue";
	import switchButton from "@/components/switchButton-auto.vue";
	import switchButtonCarrage from "@/components/switchButton-edit.vue";
	import switchButtonS from "@/components/switchButton-s.vue";
	import partCheckboxGroup from "@/components/partCheckboxGroup.vue";
	import pickerInput from "@/components/pickerInput.vue";
	import popupMe from "@/components/popupMe.vue";
	import uniIcon from "@/components/uni-icons/uni-icons.vue";
	
	
	let _this,_inquiryNumber
	export default{
		components:{
			myPickerPart,
			switchButton,
			pickerButton,
			partCheckboxGroup,
			pickerInput,
			switchButtonS,
			popupMe,
			uniIcon,
			switchButtonCarrage
		
		},
		
		data(){
			return{
				content:'',  //含量
				spec_longitude:'',  //规格中的经纱
				spec_latitude: '', //规格中的纬纱
				organize:'',  //组织
				style:'', //风格
				grammage:'',  //克重
				density_latitude: '', //纬密
				density_longitude: '',  //经密
				seller:'',    //卖家
				sellerCode: '',  //卖家编号
				storeStatus:[],  //库存状态
				storeStatusIndex: '',
				taxes:[],  //税费
				taxedIndex: 1,
				carriage:[], //运费
				carriageIndex: 0,
				lengthUnit:[],  //价格单位
				lengthUnitIndex: 1,
				densityUnit:[],  //密度单位
				densityUnitIndex:  1,
				grammageUnit:[],  //克重单位
				grammageUnitIndex: 1,
				styleSerial:[],      //风格
				styleSerialIndex: '',  
				styleSerialValue: '',  //风格值
				qualityPosition: [],  //品质定位
				qualityPositionIndex: '',
				unitPrice:'',  //报价价格
				placeOfDelivery:'',  //交货地
				placeOfDeliveryIndex:'',  //交货地ID
				guamalv:'',   //挂码率
				remarks:'',    //备注
				sampleType:[], //布样类型
				sampleTypeIndex: 1,
				
				partList:[],    //成分列表
				partID:[],  //经成分选中ID
				partListLong:[],  //成分列表
				
				part:[],  //经成分选中列表
				partLongID:[], //纬成分选中ID
				partLong:[]  ,//纬成分选中列表
				
				newPartText:'',   // 新增经度成分
				newPartLongText:''  ,// 新增纬度成分
				
				clothBreadth: ''   ,//幅宽
				pictures: [],
				returnLabel:'',
				goodsCode:'',
				buyOrSellCode:'',
				productDetails:''
			}
		},
		onLoad:function(options){
			_this = this
			console.log(options)
			this.goodsCode = options.goodsCode
			this.buyOrSellCode = options.buyOrSellCode
			this.getAllSelect()
			this.getProductDetail()
		},
		methods:{
			getProductDetail:function(){
				let url = this.Api.QgoodsDetails
				let data = {
					goodsCode: this.goodsCode
				}
				this.myRequest(data,url,'get').then(res => {
					
					_this.productDetails = res.data.data
					console.log(_this.productDetails);
					_this.density_longitude = _this.productDetails.densityLongitude
					_this.density_latitude = _this.productDetails.densityLatitude
					_this.grammage = _this.productDetails.gramWeight
					_this.clothBreadth = _this.productDetails.clothBreadth


					
				 }).catch(err => {
					wx.showToast({
					  title: err.data.errMsg,
					  icon: 'none'
					});
				});
			},
			getAllSelect:function(){
			      //价格单位
				  let url= this.Api.priceUnit
				  let data={}
				  this.myRequest(data,url,'get').then(res => {
					console.log(res);
					_this.lengthUnit = res.data.data.list
					_this.lengthUnit.forEach((item)=>{
						if (item.id == _this.lengthUnitIndex){
							_this.returnLabel = item.label
						}
					})
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
						_this.setIsChecked(_this.carriage,_this.carriageIndex)
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
				  //库存状态
				 url= this.Api.inventory
				 this.myRequest(data,url,'get').then(res => {
						console.log(res);
						_this.storeStatus = res.data.data.list
						_this.storeStatusIndex = _this.storeStatus[1].id
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
				 //交货地
				 url = this.Api.placeOfDelivery
				 data = {}
				 this.myRequest(data,url,'get').then(res => {
				   console.log(res);
				   _this.placeOfDelivery = res.data.data.list
				   
				   _this.placeOfDeliveryIndex = _this.placeOfDelivery[1].id
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
				 //密度单位选择数据
				 url = this.Api.densityUnit
				 data = {}
				 this.myRequest(data,url,'get').then(res => {
				   console.log(res);
				   _this.densityUnit = res.data.data.list
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
	        // ---  弹窗新增经度处理
	        tapNewPart:function(){
	        	this.$refs.latiPart.show()
	        },
			 // ---  弹窗新增纬度处理
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
		
	        },

			// --------------------
			tabSwitchChange:function(label,event){
						  switch (label){
							  case 'sampleType':
							     this.sampleTypeIndex = event
								 console.log(this.sampleTypeIndex)
								 break;
							  case 'inquiryType':
							     this.inquiryTypeIndex = event
								 console.log(this.inquiryTypeIndex)
								 break;
							  case 'buyerChange':
							     this.buyerIndex = event
								 console.log(this.buyerIndex)
								 break;
							  case 'styleChange':
							     console.log(event)
							     this.styleSerialIndex = event[1]
								 this.styleSerialValue = event[0]
								 console.log(this.styleSerialIndex)
								 console.log(this.styleSerialValue)
								 break;
							  case 'productSerial':
							   this.productSerialIndex = event
								 console.log(this.productSerialIndex)
								 break;	 
							  case 'densityUnit':
								  this.densityUnitIndex = event
								 console.log(this.densityUnitIndex)
								 break;	
							  case 'grammageUnit':
								  this.grammageUnitIndex = event
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
								
						  }
			},
			//经纬成分
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
			//粘贴板复制
			tapPaste:function(){
				  uni.setClipboardData({
					data: this.spec_longitude
				  })
			},
			switchChange:function(label,index){
			
				switch (label){
					case 'lengthUnit':
					    this.lengthUnitIndex = index;
						_this.lengthUnit.forEach((item)=>{
							if (item.id == _this.lengthUnitIndex){
								_this.returnLabel = item.label
							}
						})
						console.log(this.lengthUnitIndex)
						break;
					case 'carriage':
					    this.carriageIndex = index;
						_this.setIsChecked(_this.carriage,_this.carriageIndex)
						console.log(this.carriageIndex)
						break;
					case 'taxes':
					    this.taxedIndex = index;
						console.log(this.taxedIndex)
						break;
				}
			},
			pickerChange:function(label,index){
				switch (label){
					case 'placeOfDelivery':{
						this.placeOfDeliveryIndex = index
						console.log(this.placeOfDeliveryIndex)
						break;
					}
					case 'sellers':{
						//this.sellersIndex = index
						break;
					}
					case 'storeStatus':{
						this.storeStatusIndex = index
						console.log(this.storeStatusIndex)
						break;
					}
				}
			},
			selectSeller:function(){
						  uni.navigateTo({
						  	url: '/pages/qing-f-c/inquiryManage/sellDeputy/selectSeller',
						  	success: res => {},
						  	fail: () => {},
						  	complete: () => {}
						  });
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
			submit:function(){
				
				
						if(_this.carriageIndex == 1){
							if(_this.carriagePrice<=0){
								uni.showToast({
									title: '运费还没填',
									icon:'none',
									duration: 1000
								});
								return
							}
						}
						  if(_this.unitPrice <=0){
							
								uni.showToast({
									title: '报价不能为零',
									icon:'none',
									duration: 1000
								});
								return
							
						  }
					  let _data={
						  inquiryNumber: this.$store.state.inquiryNumber,			 //询价单号
						  buyOrSellCode:	_this.buyOrSellCode		,	//联系人
						  unitPrice: _this.unitPrice,   //价格
						  priceUnit: _this.lengthUnitIndex,    //	价格单位
						  isIcash: 	_this.carriageIndex,  //是否含运费
						  isPlusDuty: _this.taxedIndex ,	//是否含税
						  placeOfDelivery: _this.placeOfDeliveryIndex,   //交货地
						  inventoryCode: _this.storeStatusIndex	, //库存状态编码
						  purchaseQuantity:	 '',  //购买数量
						  hangBitRate:	   _this.guamalv			, //挂码率
						  remarks:	_this.remarks				,   //备注
						  densityLongitude:		_this.density_longitude	,//密度经
						  densityLatitude:	     _this.density_latitude   ,//密度纬
						  gramWeight:			  _this.grammage ,     //克重
						  clothBreadth:		      _this.clothBreadth , //幅宽
						  pictures:	             _this.pictures,  //图片数组
						  goodsCode: _this.goodsCode    //产品编号
					  }
					  console.log(_data)
					  let url = this.Api.quotationAdd
					  uni.showLoading({
					  	title:'',
						mask: true
					  })
					  this.myRequest(_data,url,'post').then(res => {
						console.log(res);
						if (res.data.status== 0){
							uni.hideLoading()   
							
							uni.showToast({
								title: '报价创建成功',
								icon: 'none',
								duration: 1000
							});
							
							
							uni.navigateBack({
								delta: 4
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

<style lang="scss">
	page{
		background: #F4F4F4;
	}
	.color_909090{
		color: #909090;
	}
	.padding-left-right{
		padding-left: 30upx;
		padding-right: 30upx;
	}
	.top-wrap{
		padding: 36upx 30upx 0upx 30upx;
		background: #FFFFFF;
		.title{
			font-size: 16px;
			color: #140F26;	
			font-weight: bold;
		}
		.content{
			color: #333236;
			font-size: 14px;
			display: flex;
			align-items: center;
			justify-content: space-between;
			height: 65upx;
			border-bottom: 1upx solid rgba(237,237,237,1);
			.label{
				width: 190upx;
			}
		}
		.content-1{
			color: #333236;
			font-size: 14px;
			display: flex;
			align-items: center;
			//justify-content: space-between;
			height: 65upx;
			border-bottom: 1upx solid rgba(237,237,237,1);
			.label{
				width: 175upx;
			}
			.items{
				width: 505upx;
			}
			.items-1{
				width: 505upx;
				display: flex;
				justify-content: space-between;
			}
		}
		.no_border{
			border: none;
		}
	}
	
	.content-2{
		padding-left: 30upx;
		padding-right: 30upx;
		
		color: #333236;
		font-size: 14px;
		display: flex;
		align-items: center;
		height: 65upx;
		border-bottom: 1upx solid rgba(237,237,237,1);
		.label{
			width: 175upx;
		}
		.items{
			width: 505upx;
		}
		.items-1{
			width: 505upx;
			display: flex;
			justify-content: space-between;
		}
	}
	
	.form_box{
	  background-color:#fff; 
	  font-size: 14px;
	  margin-top: 20upx;
	}
	.list{
	  margin: 0 20upx;
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
		line-height: 65upx;
		font-size: 14px;
		border-bottom: 1upx solid #F4F4F4;
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
	  width: 100%;
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
	 // padding-bottom: 10upx;
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
	// .unit{
	//   font-size: 14px;
	//   line-height: 48upx;
	//   width: 80upx;
	//   height: 48upx;
	//   text-align: center;
	//   border: 2upx solid #EE603F;
	//   box-sizing: border-box;
	// }
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
	
	
	.color_90{
		color: #909090;
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
	.placeholder-view-1{
		width:100%;
		height: 120upx;
		background: #FFFFFF;
	}
	.i-next{
		   position: absolute;
		   right: 60upx;
		  }
		  
	.quote-content{
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 65upx;
		border-bottom: 1upx solid #EDEDED;
	}
	.quote-content-82{
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 82upx;
		border-bottom: 1upx solid #EDEDED;
	}
	.uploadFile{
		display: flex;
		flex-direction: column;
		margin-bottom: 100upx;
				
				background: #FFFFFF;
				
		
	}
	.list_right_content_1{
		padding:0 10upx;
		line-height: 87upx;
		border-bottom: 1upx solid rgba(221, 221, 221, 0.3);
		
	}
	.picture_style{
		margin: 0upx 20upx;
		width: 180upx;
		height: 180upx;
		
	}
	.IconStyle {
		height: 200upx;
		width: 200upx;
		display: flex;
		justify-content: center;
		align-items: center;
		background: #EFEFEF;
		
	}
	.smallFont{
	    color: #999999;
		font-size: 12px;
	}
	.seller{
		max-height: 130upx;
		overflow: hidden;
		word-break: break-all;  /* break-all(允许在单词内换行。) */
		text-overflow: ellipsis;  /* 超出部分省略号 */
		display: -webkit-box; /** 对象作为伸缩盒子模型显示 **/
		-webkit-box-orient: vertical; /** 设置或检索伸缩盒对象的子元素的排列方式 **/
		-webkit-line-clamp: 3; /** 显示的行数 **/	
	}
</style>
