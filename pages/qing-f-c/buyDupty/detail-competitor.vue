<template>
	<view>
		<view class="box box_shadow">
		  <view class="flex_c list">
		    <view class="line"></view>
		    <view class="font_we_bold fs_15">基本信息</view>
		  </view>
		  <view class="flex_c list" >
		    <view class="list_right color_888" >公司名称：</view>
		    <view class="flex_sb_c wid_462">
		      {{competitor.name}}
		    </view>
		  </view>
		  <view class="flex_c list" >
		    <view class="list_right color_888" >渠道状况：</view>
		    <view class="flex_sb_c wid_462">
		      {{competitor.channel}}
		    </view>
		  </view>
		  <view class="flex_c list">
		    <view class="line"></view>
		    <view class="font_we_bold fs_15">主营产品类型</view>
		  </view>
		  <view class="flex_c list" >
		    <view class="flex_sb_c">
		      {{competitor.productType}}
		    </view>
		  </view>
		  <view class="flex_c list">
		    <view class="line"></view>
		    <view class="font_we_bold fs_15">采购方式分析</view>
		  </view>
		  <view class="flex_c list" >
		    <view class="flex_sb_c wid_462">
		      {{competitor.purchase}}
		    </view>
		  </view>
		  <view class="flex_c list" >
		    <view class="list_right color_888">规模：</view>
		    <view class="flex_sb_c wid_462">
		      {{competitor.scope}}
		    </view>
		  </view><view class="flex_c list" >
		    <view class="list_right color_888">品质定位：</view>
		    <view class="flex_sb_c wid_462">
		      {{competitor.quality}}
		    </view>
		  </view>
		  <view class="flex_c list" >
		    <view class="list_right color_888">经营模式：</view>
		    <view class="flex_sb_c wid_462">
		      {{competitor.model}}
		    </view>
		  </view>
		  <view class="flex_c list" >
		    <view class="list_right color_888">地址：</view>
		    <view class="flex_sb_c wid_462">
		      {{competitor.address}}
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
		      {{competitor.machineNum}}
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
	let _this,_competitor,_customerId;
	export default {
		data() {
			return {
				// companyName:'',
				// companyAddr:'',
				// machineType:'',
				// machineNum:'',
				// channel:["渠道宽，优势大",'渠道窄，优势不大'],
				// channelIndex: -1,
				// productType:['梭织化纤面料','梭织棉类面料','经编化纤面料','纬编化纤面料','纬编棉类面料','经编棉类面料','其他面料'],
				// arrProduct:[false,false,false,false,false,false,false],
				// scope:['大客户(年销售5000万及以上)','中型客户(年销售3000-5000万)','小型客户(年销售1500-3000万)','小微客户(年销售1500万-500万)','微型客户(年销售500万以下)'],
				// scopeIndex: -1,
				// quality:['品牌订单','高级订单','一般订单','市场订单'],
				// qualityIndex: -1,
				// model: ['厂家分销','二盘分销','自主采购加工'],
				// modelIndex: -1,
				// isBroker: false,
				// isDirect: false
				competitor: {},
				
			};
		},
		onLoad:function(options){
			_this = this
			_customerId = options.customerId
			_competitor = JSON.parse(options.competitor)
			console.log(_competitor)
		},
		onShow:function(){
		    //获取全局设置的变量
		    this.competitor = _competitor
		   
		},
		methods:{
			bindDelete:function(){
				
			},
			bindEdit:function(){
				let customerId = _customerId
				let odata = JSON.stringify(this.competitor)
				uni.navigateTo({
					url: '/pages/qing-f-c/buyDupty/edit-competitor?customerId='+customerId+"&competitor="+odata,
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
</style>
