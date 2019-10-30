<template>
<view>
	<view class="form_box box_shadow">
		<view class="flex_c list">
		  <view class="line"></view>
		  <view class="font_we_bold fs_16">询价单基本信息 </view>
		</view>
		
		 <pickerButton :items="inquiryType" name="询价类型" @buttonChange="tabSwitchChange('inquiryType',$event)"></pickerButton>
		 <myPicker @mychange="tabSwitchChange('productSerial',$event)" :items="productSerial" name="产品系列"></myPicker>
			 
		<view class="flex_c list">
		  <view class="list_right">品名（别名）:</view>
		  <input placeholder-class="color_888 fs_14" class="input" placeholder="请填写品名" name="name" :value="name"></input>
		</view>
		<myPicker @mychange="tabSwitchChange('buyerChange',$event)" :items="productSerial" name="买家"></myPicker>
	</view>
	
	<view class="form_box box_shadow">
		<view class="flex_c list">
		  <view class="line"></view>
		  <view class="font_we_bold fs_16">产品要素 </view>
		</view>
		<view class="flex_c list_part">
		  <view>成分<text class='fs_12 color_888 pl_20'>(可多选,按顺序勾选,可手动添加属性)</text></view>
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
		  <input placeholder-class="color_888 fs_13" class="input" 
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
				  <view class="fs_13">经:</view>
				  <input placeholder-class="color_888 fs_13" class="input" 
				  placeholder="例如T50d/72Ffdy+t50d/72Ffdy" 
				  name="spec_longitude" v-model="spec_longitude"></input>
			  </view>
			 
			   <view class="Clipboard" @tap="tapPaste">复制</view>
			</view>
			<view class="flex_c list_right_content">
			  <view class="fs_13">纬:</view>
			  <input placeholder-class="color_888 fs_13" class="input" 
			  placeholder="例如T50d/72Ffdy+t50d/72Ffdy" 
			  name="spec_latitude" v-model="spec_latitude"></input>
			</view>
		</view>
	<!-- ------------------------------------------------ -->
	
			<view class="form_box box_shadow">

				<!-- <myPickerSmall @mychange="tabSwitchChange('styleChange',$event)" :items="styleSerial" name="风格"></myPickerSmall> -->
				<pickerInput @mychange="tabSwitchChange('styleChange',$event)" :items="styleSerial" name="风格"></pickerInput>
				<view class="flex_c list_right_content">
				  <view class="fs_13">组织:</view>
				  <input placeholder-class="color_888 fs_13" class="input" 
				  placeholder="请输入风格的组织，如2*1" 
				  name="organize" v-model="organize"></input>
				</view>
			</view>
		<!-- ------------------------------------------------ -->
		<view class="form_box box_shadow">
		   <pickerButton :items="sampleType" name="布样类型" @buttonChange="tabSwitchChange('sampleType',$event)"></pickerButton>
		   <view class="flex_c list_part">
			  <view>密度<text class="pl_20">({{sampleTypeIndex?'坯布':'成品'}})</text></view>
			</view>	
			<view class="flex_c list_right_content">
			  <view class="fs_13">经:</view>
			  <input placeholder-class="color_888 fs_13" class="input-half-width" 
			  placeholder="请输入数量" 
			  name="density_longitude" v-model="density_longitude"></input>
			  <view class="fs_13">纬:</view>
			  <input placeholder-class="color_888 fs_13" class="input-half-width" 
			  placeholder="请输入数量" 
			  name="density_latitude" v-model="density_latitude"></input>
			  <switchButton :items='tiaoshuo' @buttonChange="tabSwitchChange('tiaoshuo',$event)"></switchButton>
			</view>
			<view class="flex_sb list_right_content">
			  <view class="flex_c">
				  <view class="fs_13">克重:<text class="pl_20">({{sampleTypeIndex?'坯布':'成品'}})</text></view>
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
				  <view class="fs_13">幅宽:<text class="pl_20">({{sampleTypeIndex?'坯布':'成品'}})</text></view>
				  <input placeholder-class="color_888 fs_13" class="input_300" 
				  placeholder="请输入数量" 
				  name="fukuan" v-model="fukuan"></input>
			  </view>
			  <view>cm</view>
			</view>
		</view>
		<!-- ------------------------------------------------ -->
		
		<view class="form_box box_shadow">
		
			<myPickerSmall @mychange="tabSwitchChange('qualityPosition',$event)" :items="qualityPosition" name="品质定位"></myPickerSmall>
			<view class="flex_sb list_right_content">
			  <view class="flex_c">
				  <view class="fs_13">克重:<text class="pl_20">({{sampleTypeIndex?'坯布':'成品'}})</text></view>
				  <input placeholder-class="color_888 fs_13" class="input_300" 
				  placeholder="请输入数量" 
				  name="grammage" v-model="grammage"></input>
			  </view>
			  <view class="flex_c">
				  <switchButton :items='lengthUnit' @buttonChange="tabSwitchChange('lengthUnit',$event)"></switchButton>
			  </view>
			</view>
			<view class="flex_sb list_right_content">
			  <view class="flex_c">
				  <view class="fs_13">挂码率:<text class="pl_20">({{sampleTypeIndex?'坯布':'成品'}})</text></view>
				  <input placeholder-class="color_888 fs_13" class="input_300" 
				  placeholder="请输入" 
				  name="fukuan" v-model="fukuan"></input>
			  </view>
			  <view>%</view>
			</view>
			<view class="flex_c list_right_content">
			  <view class="fs_13">备注:</view>
			  <input placeholder-class="color_888 fs_13" class="input" 
			  placeholder="非必填" 
			  name="remark" v-model="remark"></input>
			</view>
			
		</view>
		<view class='placeholder-view'></view>
		<uni-popup ref="popup" type="center">  
		            <view class="publishWrapper"> 
					     <view class="flex_c_c fs_15">
							 <text>新增成分</text>
						 </view>
						 <view>
							 <!-- <input type="text" confirm-type='done' v-model="newPartText"
							 placeholder='输入新成分' :focus='setFocus' cursor-spacing='14px' placeholder-class="color_888 fs_14 " />  
							 <view class="newPart" @tap="handleNewPart">新增</view> -->
							 <textarea v-model="newPartText" class="textarea_border" placeholder-style="color: #B3B3B3;font-size: 13px;" placeholder="请输入新的成分"/>
						 </view>
						 <view class="flex_sa mt_20">
							 <view class="newPartCancel" @tap="handleCancelNewPart">取消</view>
							 <view class="newPart" @tap="handleNewPart">确定</view>
						 </view>
						 
		                
		            </view>  
		
		 </uni-popup>  
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
	import switchButton from "@/components/switchButton-s.vue";
	import uniPopup from "@/components/uni-popup.vue";
	import pickerInput from "@/components/pickerInput.vue";
	export default {
		components:{
			pickerButton,
			myPicker,
			partCheckboxGroup,
			myPickerSmall,
			switchButton,
			uniPopup,
			pickerInput
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
			inquiryType: [{id: 1,label: "常规询价"},{id: 0,label: "找样询价"}],
			inquiryTypeIndex: 1,           //询价类型
			tiaoshuo:[{id: 1,label: "梭"},{id: 0,label: "条"}],
			tiaoshuoIndex:  1,
			grammageUnit:[{id: 1,label: "g/m"},{id: 0,label: "g/m²"}],
			grammageUnitIndex: 1,
			lengthUnit: [{id: 1,label: "米"},{id: 0,label: "码"}],
			lengthUnitIndex: 1,
			productSerial:[{id: 'tsl',label: "塔丝隆"},{id: 'dl',label: "涤纶"},{id: 'smt',label: "四面弹"},{id: 'gt',label: "高弹"}],
			productSerialIndex: -1,
			buyer:[{id: 'mj1',label: "布行11"},{id: 'mj2',label: "布行222"},{id: 'mj3',label:'布行'}],
			buyerIndex: -1,
			styleSerial:[{id: 'fg1',label: "风格111"},{id: 'fg2',label: "风格222"},{id: 'fg3',label:'风格333'}],
			styleSerialIndex: -1,
			qualityPosition: [{id: 'gj',label: "高级订单"},{id: 'yb',label: "一般订单"},{id: 'sc',label: "市场单"}],
			qualityPositionIndex: -1,
			part:[],
			partList:[{id:'jl',label:'锦纶'},
			{id:'dl',label:'涤纶'},
			{id:'al',label:'氨纶'},
			{id:'rm',label:'人棉'},
			{id:'rs',label:'人丝'},
			{id:'tc',label:'t/c混纺'},
			{id:'ma',label:'麻'},
			{id:'mian',label:'棉'},
			{id:'mder',label:'莫代尔'},
			{id:'tr',label:'T/R涤粘'},
			{id:'cvc',label:'CVC混纺'}
			],
			
			partListLong:[{id:'jl',label:'锦纶'},
			{id:'dl',label:'涤纶'},
			{id:'al',label:'氨纶'},
			{id:'rm',label:'人棉'},
			{id:'rs',label:'人丝'},
			{id:'tc',label:'t/c混纺'},
			{id:'ma',label:'麻'},
			{id:'mian',label:'棉'},
			{id:'mder',label:'莫代尔'},
			{id:'tr',label:'T/R涤粘'},
			{id:'cvc',label:'CVC混纺'}
			],
			partLong:[]  ,//纬成分选中列表
			
			sampleType:[{id: 1,label: "坯布"},{id: 0,label: "成品"}], //布样类型
			sampleTypeIndex: 1 ,
			newPartText:'',            //新增成分
			styleSerialValue:''        //风格输入选择框返回内容
			
		};
	  },
	  onLoad:function(){
	  	 console.log(this.Api.getChannel)
		 this.test()
	  },
	  methods:{
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
		 
		  tapPartSelect:function(values){
			  let items = this.partList
			  this.part= values
			//从组件发射过来的数组，遍历成分数组对象，如果对象label，在数组中就设置为true，否则就设置为false
			//用，includes方法
			 for (var i = 0, lenI = items.length; i < lenI; ++i) {
			 	const item = items[i]
			  	if(values.includes(item.label)){
			  		this.$set(item,'isChecked',true)	
			    } else{
					this.$set(item,'isChecked',false)
				}
			}
		  },
		
		  tapPartLongSelect:function(values){
			  let items = this.partListLong
			    this.partLong= values
			
			   for (var i = 0, lenI = items.length; i < lenI; ++i) {
			   	const item = items[i]
			    	if(values.includes(item.label)){
			    		this.$set(item,'isChecked',true)	
			      } else{
			  		this.$set(item,'isChecked',false)
			  	}
			  }
		  },
		  handleCancelNewPart:function(){
			  this.$refs.popup.close()
			  this.newPartText=''
		  },
		  handleNewPart:function(){
			 console.log("新增成分")
			 console.log(this.newPartText)
			 this.$refs.popup.close()
		  },
		  tapNewPart:function(){
			  this.newPartText = ''
			  this.$refs.popup.open() 
		  },
		  tapNewPartLong:function(){
			  
		  },
		  tapPaste:function(){
			  uni.setClipboardData({
			  	data: this.spec_longitude
			  })
		  },
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
				  case 'tiaoshuo':
					  this.tiaoshuoIndex = event
					 console.log(this.tiaoshuoIndex)
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
					 
					 lengthUnit
			  }
		  }
	  }
	}
</script>

<style lang='scss'>
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
</style>
