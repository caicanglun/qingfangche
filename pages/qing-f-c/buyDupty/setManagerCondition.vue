<template>
	<view>

		<view class="box box_shadow">
		  <view class="flex_c list">
			<view class="line"></view>
			<view class="font_we_bold fs_15">旺季时间</view>
		  </view>
		  <view class="flex_line_sb list">
			  
			  <myCheckboxGroup @selectChange="tapMonths" :items="months"></myCheckboxGroup>
		  </view>
		  <!-- ----------------------------- -->
		  <myPicker @mychange="tapPickerEvent('operateCapital',$event)" :items="operateCapital" name="资金状况"></myPicker>
		  <view class="title">好：资金充足,随时付款；良：按期付款；一般：偶尔拖；差：经常拖</view>
		  <myPicker @mychange="tapPickerEvent('operateWom',$event)" :items="operateWom" name="市场口碑"></myPicker>
		  <myPicker @mychange="tapPickerEvent('operateCredit',$event)" :items="operateCredit" name="公信度级别"></myPicker>
		  <myPicker @mychange="tapPickerEvent('operateOperation',$event)" :items="operateOperation" name="运营状况"></myPicker>
		</view> 
		  <view class="fixed_bottom box_shadow_btn">
			<button class="btn_left" hover-class="none" @tap="bindCancel">取消</button>
			<button class="btn_right" @tap="submit" hover-class="none">确定</button>
		  </view>

	</view>
</template>

<script>
	import myPicker from "@/components/myPicker.vue";
	import myCheckboxGroup from "@/components/myCheckboxGroup.vue";
	import uniIcon from "@/components/uni-icons/uni-icons.vue";
	const JsyServer = require("services/jsy-server.js");
	let _this,_companyCode;
	export default {
		components:{
			myPicker,
			myCheckboxGroup,
			uniIcon
		},
		data() {
			return {
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
				highSeasonTime:'',

				operateCapital:[],
				capitalCode: -1,
				
				operateWom:[],
				womCode: -1,
				
				operateCredit:[],
			    creditCode: -1,
				
				operateOperation:[],
			    operationCode: -1,
			};
		},
		
		onLoad:function(options){
			_this = this;
			_companyCode = options.companyCode;
			console.log(_companyCode)
			this.getOperateCapital()
			this.getOperateWom()
			this.getOperateCredit()
			this.getOperateOperation()
			
		},
		
		methods:{
			getOperateCapital:function(){
				JsyServer.getOperateCapital().then(res => {
				  console.log(res);
				  _this.operateCapital = res.data.data.list
				}).catch(err => {
				  wx.showToast({
				    title: err.data.description,
				    icon: 'none'
				  });
				});
			},
			getOperateWom:function(){
				JsyServer.getOperateWom().then(res => {
				  console.log(res);
				  _this.operateWom = res.data.data.list
				}).catch(err => {
				  wx.showToast({
				    title: err.data.description,
				    icon: 'none'
				  });
				});
			},
			getOperateCredit:function(){
				JsyServer.getOperateCredit().then(res => {
				  console.log(res);
				  _this.operateCredit = res.data.data.list
				}).catch(err => {
				  wx.showToast({
				    title: err.data.description,
				    icon: 'none'
				  });
				});
			},
			getOperateOperation:function(){
				JsyServer.getOperateOperation().then(res => {
				  console.log(res);
				  _this.operateOperation = res.data.data.list
				}).catch(err => {
				  wx.showToast({
				    title: err.data.description,
				    icon: 'none'
				  });
				});
			},
			
			tapMonths:function(index){
				let items = this.months
				for (var i = 0, lenI = items.length; i < lenI; ++i) {
					const item = items[i]
					if (item.id == index) {
						this.$set(item,'isChecked',!item.isChecked)
					}
				}
			},
			tapPickerEvent:function(arrName,id){
				switch (arrName){
					case "operateCapital":
	                   console.log(id)
					   this.capitalCode = id
					   break;
					case "operateWom":
					  this.womCode = id
					  break;
					case "operateCredit":
					  this.creditCode = id
					  break;
					case "operateOperation":
					  this.operationCode = id
					  break;  
				}
			},
			
			
			bindCancel:function(){
				uni.navigateBack({
					delta: 1
				});
			},
			submit:function(e){
				let highSeasonTime = []
				this.months.forEach((item)=>{
					if (item.isChecked== true){
						highSeasonTime.push(item.label)
					}
				})
				let _data= {
				     companyCode: _companyCode,			//客户编码
				     highSeasonTime: highSeasonTime.join(','),		//旺季时间
				     capitalCode: this.capitalCode,			//资金状况编码
				     creditCode: this.creditCode,			//信用度编码
				     womCode: this.womCode,				//口碑
				     operationCode: this.operationCode
					}
					
			
					JsyServer.operationAdd(_data).then(res => {
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
								title: res.data.msg,
								icon: 'none'
						  });
					  }
					}).catch(err => {
					  uni.showToast({
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
		 position:relative;
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
.title{
	margin: 0 30upx;
	padding:0 10upx 27upx 10upx;
	border-bottom: 1upx solid rgba(221, 221, 221, 0.3);
	font-size: 12px;
	color: #9B9B9B;
}
.icon-position{
	position: absolute;
	right: -10upx;
	top: -15upx;
}
    
</style>
