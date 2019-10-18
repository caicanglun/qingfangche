<template>
	<view>
		<view class="box box_shadow">
		  <view class="flex_c list">
		    <view class="line"></view>
		    <view class="font_we_bold fs_15">基本信息</view>
		  </view>
		  <view class="flex_c list" >
		    <view class="list_right">公司名称：</view>
		    <view class="flex_sb_c wid_462">
		      <input name="companyName" v-model="companyName" 
			  placeholder="请输入" placeholder-class="color_888 fs_14" style="width:350upx;" class="input"></input>
		    </view>
		  </view>
		  <view class="flex_c list">
		    <view class="list_right">渠道状况：</view>
		    <picker @change="channelChange" :range="channel" :value="channelIndex">
		      <view>{{channelIndex==-1?"请选择":channel[channelIndex]}} </view>
		    </picker>
			<image src="/static/images/qingfc/arrow.png" class="i-next" mode="aspectFill"></image>
		  </view>
		  
		  <view class="flex_line_sb list">
		    <view class="list_right_280">主营产品类型<text class="pl_10 color_888">(可多选)</text>：</view>
			<view>
				
				<view class="checkgroup">
					  <label v-for="(item,index) in productType" :key="index" > 
						<view>
							<view :class="(arrProduct[index]?'typeItemSelect':'typeItem')" @tap="tapTypeItem(index)"> 
									<!-- <checkbox :value="index" :checked="item.ischecked"/> -->
									<text>{{item}}</text>
							</view>
							
					   </view>
					</label> 
				</view>	
				
			 </view>
		  </view>
		 <!-- --------------------------- -->
		 <view class="box box_shadow">
			 <view class="flex_c list">
			   <view class="line"></view>
			   <view class="font_we_bold fs_15">采购方式分析</view>
			 </view>
			 <view class="fs_15 pl_20" @tap="tapBrokerChange">
				 <checkbox :value="isBroker" :checked="isBroker" />中间商模式 
			 </view>
			 <view class="flex_c list">
			   <view class="list_right">规模：</view>
			   <picker @change="scopeChange" :range="scope" :value="scopeIndex">
			     <view>{{scopeIndex==-1?"请选择":scope[scopeIndex]}} </view>
			   </picker>
			   <image src="/static/images/qingfc/arrow.png" class="i-next" mode="aspectFill"></image>
			 </view>
			 <view class="flex_c list">
			   <view class="list_right">品质定位：</view>
			   <picker @change="qualityChange" :range="quality" :value="qualityIndex">
			     <view>{{qualityIndex==-1?"请选择":quality[qualityIndex]}} </view>
			   </picker>
			   <image src="/static/images/qingfc/arrow.png" class="i-next" mode="aspectFill"></image>
			 </view>
			 <view class="flex_c list">
			   <view class="list_right">经营模式：</view>
			   <picker @change="modelChange" :range="model" :value="modelIndex">
			     <view>{{modelIndex==-1?"请选择":model[modelIndex]}} </view>
			   </picker>
			   <image src="/static/images/qingfc/arrow.png" class="i-next" mode="aspectFill"></image>
			 </view>
			 <view class="fs_15 pl_20" @tap="tapDirectChange">
			 		 <checkbox :value="isDirect" :checked="isDirect" />厂家直接采购
			 </view>
			 <view class="flex_c list" >
				 <view class="list_right">地址：</view>
				 <view class="flex_sb_c wid_462">
				   <input name="companyAddr" v-model="companyAddr" 
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
				   <input name="machineNum" v-model="machineNum" 
				   placeholder="请填写机器数量" placeholder-class="color_888 fs_14" style="width:350upx;"  cursor-spacing='140' class="input"></input>
				 </view>
			 </view>
		 </view>
		 <!-- --------------------------- -->
		</view>	
		<view class="fixed_bottom box_shadow_btn">
		  <button class="btn_left" hover-class="none" @tap="bindCancel">取消</button>
		  <button class="btn_right" @tap="bindSubmit" hover-class="none">确定</button>
		</view>
	</view>
	
</template>

<script>
	let _this,_competitor;
	export default {
		data() {
			return {
				companyName:'',
				companyAddr:'',
				machineType:'',
				machineNum:'',
				channel:['渠道宽,优势较大','渠道窄,优势不大'],
				channelIndex: -1,
				productType:['梭织化纤面料','梭织棉类面料','经编化纤面料','纬编化纤面料','纬编棉类面料','经编棉类面料','其他面料'],
				arrProduct:[false,false,false,false,false,false,false],
				scope:['大客户(年销售5000万及以上)','中型客户(年销售3000-5000万)','小型客户(年销售1500-3000万)','小微客户(年销售1500万-500万)','微型客户(年销售500万以下)'],
				scopeIndex: -1,
				quality:['品牌订单','高级订单','一般订单','市场订单'],
				qualityIndex: -1,
				model: ['厂家分销','二盘分销','自主采购加工'],
				modelIndex: -1,
				purchase:["中间商","厂家直采"],
				isBroker: false,
				isDirect: false,
				competitor:{}
			};
		},
		onLoad:function(options){
			_this = this;
			_competitor = JSON.parse(options.odata)
			console.log("competior=====",_competitor)
		},
		onShow:function(){
			this.competitor = _competitor
			let competitor = this.competitor
			this.companyName = competitor.name
			this.companyAddr = competitor.address
			this.machineType = competitor.machineType
			this.machineNum = competitor.machineNum
			this.scopeIndex = this.returnIndex(competitor.scope,this.scope)
			this.channelIndex = this.returnIndex(competitor.channel,this.channel)
			this.qualityIndex = this.returnIndex(competitor.quality,this.quality)
			this.modelIndex = this.returnIndex(competitor.model,this.model)
			this.setBroker(competitor.purchase)
			this.setProductType(competitor.productType)
		},
		methods:{
			setBroker:function(val){
				if (val.indexOf(this.purchase[0]) != -1){
					this.isBroker = true
				}
				if (val.indexOf(this.purchase[1]) != -1){
					this.isDirect = true
				}
			},
			
			setProductType:function(val){
				let arrProduct = this.arrProduct
				if (val){
					let arr = val.split(" ")
					arr.forEach((item)=>{
						let index = this.productType.indexOf(item)
						this.$set(arrProduct,index,true)
						
						
					})
				}
			},
			returnIndex:function(val,arr){
				return arr.indexOf(val)
			},
			tapDirectChange:function(){
				this.isDirect = ! this.isDirect
			},
			tapBrokerChange:function(){
				this.isBroker = !this.isBroker
			},
			tapTypeItem:function(index){
				console.log(index)
				let items = this.arrProduct
				this.$set(items,index,!items[index])
			},
			channelChange:function(e){
				let index = e.detail.value
				this.channelIndex = index
			},
			scopeChange:function(e){
				let index = e.detail.value;
				this.scopeIndex = index;
			},
			qualityChange:function(e){
				let index = e.detail.value;
				this.qualityIndex = index;
			},
			modelChange:function(e){
				let index =e.detail.value;
				this.modelIndex = index;
			},
			bindCancel:function(){
				uni.navigateBack({
					delta: 1
				});
			},
			bindSubmit:function(){
				
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
