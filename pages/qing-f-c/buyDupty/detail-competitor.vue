<template>
	<view>
		<view class="box box_shadow">
		  <!-- <view class="flex_c list">
		    <view class="line"></view>
		    <view class="font_we_bold fs_15">基本信息</view>
		  </view> -->
		  <view class="flex_c list" >
		    <view class="list_right color_888" >公司名称：</view>
		    <view class="flex_sb_c wid_462">
		      {{competitor.companyName}}
		    </view>
		  </view>
		  <view class="flex_c list" >
		    <view class="list_right color_888" >渠道状况：</view>
		    <view class="flex_sb_c wid_462">
		      {{competitor.channelStatusName}}
		    </view>
		  </view>
		  <view class="flex_c list" >
		    <view class="list_right color_888" >采购方式：</view>
		    <view class="flex_sb_c wid_462">
		      {{competitor.isFactoryDirectSale?"中间商+厂家直采":"中间商为主"}}
		    </view>
		  </view>
		  
		  <view class="flex_c list" >
		    <view class="list_right color_888" >主营产品类型：</view>
		    <view class="flex_sb_c wid_462">
		      {{mainPro}}
		    </view>
		  </view>
		  <view class="flex_c list" >
		    <view class="list_right color_888">规模：</view>
		    <view class="flex_sb_c wid_462">
		      {{competitor.companyScaleName}}
		    </view>
		  </view><view class="flex_c list" >
		    <view class="list_right color_888">品质定位：</view>
		    <view class="flex_sb_c wid_462">
		      {{competitor.qualityName}}
		    </view>
		  </view>
		  <view class="flex_c list" >
		    <view class="list_right color_888">经营模式：</view>
		    <view class="flex_sb_c wid_462">
		      {{competitor.businessModelName}}
		    </view>
		  </view>
		  <view class="flex_c list" >
		    <view class="list_right color_888">地址：</view>
		    <view class="flex_sb_c wid_462">
		      {{competitor.companyAddress}}
		    </view>
		  </view>
		  <view class="flex_c list" >
		    <view class="list_right color_888">机台类型：</view>
		    <view class="flex_sb_c wid_462">
		      {{competitor.machineType}}
		    </view>
		  </view>
		  <view class="flex_c list" >
		    <view class="list_right color_888">机台数量：</view>
		    <view class="flex_sb_c wid_462">
		      {{competitor.machineCount}}
		    </view>
		  </view>
		  
		</view>
		<view class="fixed_bottom box_shadow_btn">
		  <button class="btn_left" hover-class="none" @tap="bindDelete">删除</button>
		  <button class="btn_right"  hover-class="none" @tap="bindEdit">编辑</button>
		</view>
	</view>
</template>

<script>
	const JsyServer = require("../../../services/jsy-server.js");
	const Tools = require('services/tools.js');
	let _this,_competitor;
	export default {
		data() {
			return {
				competitor: {},
				mainPro: ''
			};
		},
		onLoad:function(options){
			_this = this
			_competitor = JSON.parse(options.rivalCode)
			console.log(_competitor)
			this.getRivalDetails()
		},
		onShow:function(){
		    //获取全局设置的变量
		   // this.competitor = _competitor
		  
		   console.log("competitor==",_competitor)
  
		},
		computed:{
			retMidleman:function(){
				let temp=[]
				temp.push(this.competitor.isMiddleman==1?'中间商':'')
				temp.push(this.competitor.isFactoryDirectSale==1?'直接采购':'')
				return temp.join('+')
			}
		},
		methods:{
			getRivalDetails:function () {
			  console.log(_competitor)
			  let _data = {rivalCode: _competitor}
			  JsyServer.rivalDetails(_data).then(res => {
			    console.log(res);
			    _this.competitor = res.data.data
				let temp = res.data.data.mainProducts
				_this.mainPro = Tools.list2string(temp)
				
				
				console.log("raivelDetails===",_this.competitor )
			  }).catch(err => {
			    console.log("Err===", err);
			  });
			 
			},
			bindDelete:function(){
				uni.showModal({
				    	title: '删除竞争对手',
				    	content: '确认要删除竞争对手吗？不要请取消',
				    	showCancel: true,
				    	cancelText: '返回',
				    	confirmText: '我要删除',
				    	success: res => {
							if (res.confirm) {
							            let _data ={
							            	rivalCode: this.competitor.rivalCode
							            }
							            JsyServer.rivalDel(_data).then(res => {
											console.log("返回信息==",res)
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
							              }
							              
							            }).catch(err => {
							              wx.showToast({
							                title: err.data.msg,
							                icon: 'none'
							              });
							            });
							        } else if (res.cancel) {
							           return
							        }
	
						},
				    	fail: () => {},
				    	complete: () => {}
				    });
	
			},
			bindEdit:function(){
				let odata = JSON.stringify(this.competitor)
				console.log(odata)
				uni.navigateTo({
					url: '/pages/qing-f-c/buyDupty/edit-competitor?odata=' + odata,
					success: res => {
						console.log(res)
					},
					fail: (err) => {
						console.log(err)
					},
					complete: () => {}
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
</style>
