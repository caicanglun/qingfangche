<template>
<view>
	<view v-if="isIdentity">
	  <view class="hand_box">
		 <view class="flex-row-reverse mt_50">
		 		 
		 		<view class="widgit" style="margin-top: 50upx;">
		 			<image src="/static/images/jinsy/xiaoxi@2x.png" @tap="navNewsPage" class="xiaoxi_img" mode="aspectFit"></image>
		 			<view class="xiaoxi_text" v-if="newsNum>0">{{newsNum|| ''}}</view>
		 		</view>
		 		<view style="padding-right: 30upx;margin-top: 50upx;">
		 				<image src="/static/images/jinsy/setting@2x.png" @tap="toSetting" class="setting_img" mode="aspectFit"></image>
		 		</view>
		 		
		 </view>
		 <view style="display:flex;margin-left: 15upx;">
			 <view>
				 <image :src="userInfo.avatar" class="hand_img" mode="aspectFit"></image>
			 </view>
			
			<view class="hand_content">
			  <view class="fs_15 font_we_bold  mt_10">{{userInfo.nickName || ''}}</view>
			  <view class="fs_14 font_we_bold color_cf mt_30">{{userInfo.realName|| ''}}</view>
			  <view class="fs_12 font_we_bold color_cf mt_20">{{userInfo.phone|| ''}}</view>
			</view>
			
			<view style="display: flex;flex-direction: column-reverse;">
					<!-- <view class="flex-row-reverse" @tap="navNewsPage">
							 
							<view class="widgit">
								<image src="/static/images/jinsy/xiaoxi@2x.png" class="xiaoxi_img" mode="aspectFit"></image>
								<view class="xiaoxi_text" v-if="newsNum>0">{{newsNum|| ''}}</view>
							</view>
							<view style="padding-right: 20upx;">
									<image src="/static/images/jinsy/setting@2x.png" class="setting_img" mode="aspectFit"></image>
							</view>
							
					</view> -->
				
					<view class="flex pb_20">
						<!-- <view class="hand_btn" v-if="regionalManager">区域经理</view> -->
						<!-- <view class="hand_btn" v-if="!isSpecial">{{userInfo.postName}}</view> -->
						<view class="hand_btn ml_20" @tap="showSinglePicker">
							   {{userInfo.postName|| ''}}
						</view>
						
						<view class="hand_btn ml_20">{{userInfo.regionName||'区域'}}</view>

					</view>
			
			</view>
		  </view>
	  </view>
      <!-- <view class="box_2 box_shadow">
		  <view style="padding: 30upx 0;">
			   <view style="display: flex;align-content: space-around;flex-wrap: wrap;">
				   <block v-for="(item,index) in arrList" :key="index">
					   <view style="display: flex;align-items:center;flex-direction: column; width:220upx;margin-top: 30upx;"@tap="navMenu(item.url)">
						   <view class="image_back" style="position: relative;">
							   <image :src="item.icon" mode="aspectFill" class="icon_img"></image>
							   <widgit :count="parseInt(directorReviewCount)+parseInt(auditCount)" v-if="item.name=='审核管理'&&(parseInt(directorReviewCount)+parseInt(auditCount)>0)"></widgit>
						   </view>
						   <view style="font-size: 13px;color:#333236">
							   {{item.name}}
						   </view>
							
					   </view>
				   </block>
				</view>    
		   </view>
	  </view> -->
	  <!-- 九宫格插件显示 -->
	     <view class="box_1 box_shadow">
			 <view style="padding: 30upx 0;">
				 <uni-grid :column="3" :show-border="false" :square="false">
				 
				 	    <uni-grid-item v-for="(item, index) in arrList" :key="index" >
							<!-- <view class="flex_c_c">
								<navigator :url="item.url" hover-class="none">
									   
											<view class='image_back' @tap="prompt(item.url)">
												<image :src="item.icon" mode="aspectFill" class="icon_img"></image>
											</view>
											<widgit :count="parseInt(directorReviewCount)+parseInt(auditCount)" v-if="item.name=='审核管理'&&(parseInt(directorReviewCount)+parseInt(auditCount)>0)"></widgit>
										
								</navigator>
								<view class="fs_12 text_algin_c">{{item.name|| ''}}</view>
							</view> -->
				 			<view style="display: flex;align-items:center;flex-direction: column; width:220upx;margin-top: 40upx;" @tap="navMenu(item.url)">
								   <view class="image_back" style="position: relative;">
									   <image :src="item.icon" mode="aspectFill" class="icon_img"></image>
								   </view>
								   <widgit :count="parseInt(directorReviewCount)+parseInt(auditCount)+parseInt(customLevelCount)" v-if="item.name=='审核管理'&&(parseInt(directorReviewCount)+parseInt(auditCount)+parseInt(customLevelCount)>0)"></widgit>
								   <widgit :count="latentCount" v-if="item.name=='潜在订单'&&latentCount>0"></widgit>
								   <view style="font-size: 13px;color:#333236;margin-top:10upx;">
									   {{item.name}}
								   </view>
				 										
				 			</view>
				 	    </uni-grid-item>
				 	
				 	    
				 </uni-grid>
			 </view>
			 
		 </view>
	 
	 
	  
      <image src="/static/images/jinsy/erweima.png" mode="aspectFit" class="er_img" @tap="scanCode" v-if="identityName!='已冻结'"></image>

	</view>
	
	<!-- <view @tap="showSinglePicker" v-if="shopList.length != 0">门店:{{shopList[index].label}}</view> -->
	 <mpvue-picker ref="mpvuePicker" :mode="mode" :pickerValueDefault="index" 
	 @onChange="onChange" @onConfirm="onConfirm" @onCancel="onCancel" 
	 :pickerValueArray="identList">
	 </mpvue-picker>
</view>	
</template>

<script>
import mpvuePicker from '@/components/mpvue-picker/mpvuePicker.vue';
import uniGrid from "@/components/uni-grid/uni-grid.vue"
import uniGridItem from "@/components/uni-grid-item/uni-grid-item.vue"
import widgit from "@/components/widgit.vue";
const JsyServer = require("../../services/jsy-server.js");
const Api = require("../../services/config/api.js");
const Server = require("../../services/server.js");
let _this,_regionCode;


const arrListBuyB = [
	{
	icon: '/static/images/jinsy/common/kehu.png',
	name: '客户管理',
	url: '/pages/qing-f-c/buyDupty/customer-admin'
	},
	{
	  icon: '/static/images/jinsy/common/jiaoyi.png',
	  name: '交易管理',
	  url: ''
	}, {
	  icon: '/static/images/jinsy/common/xunjia.png',
	  name: '询价管理',
	  url: '/pages/qing-f-c/inquiryManage/inquiryManage'
	}, 
	{
	  icon: '/static/images/jinsy/common/genjin.png',
	  name: '潜在订单',
	  url: '/pages/qing-f-c/newFollowRecord/deputyFollowList'
    }, 
	{
	  icon: '/static/images/jinsy/common/wuliu.png',
	  name: '物流信息',
	  url: '',
	},
	{
	  icon: '/static/images/jinsy/common/shenfen.png',
	  name: '身份认领',
	  url: ''},
	{
	    icon: '/static/images/jinsy/common/customFollow.png',
	    name: '客户跟进',
	    url: '/pages/qing-f-c/customPicture/followListNew',
	},
	{
	    icon: '/static/images/jinsy/common/casual.png',
	    name: '随口价',
	    url: '/pages/qing-f-c/casualPrice/casualList',
	}
  ];  //买办
const arrListSellB = [
	{
	icon: '/static/images/jinsy/common/kehu.png',
	name: '客户管理',
	url: '/pages/qing-f-c/sellDupty/customer-admin'
	},
	{
	  icon: '/static/images/jinsy/common/jiaoyi.png',
	  name: '交易管理',
	  url: ''
	}, {
	  icon: '/static/images/jinsy/common/xunjia.png',
	  name: '询价管理',
	  url: '/pages/qing-f-c/inquiryManage/sellDeputy/inquiryManage'
	}, 
	{
	  icon: '/static/images/jinsy/common/genjin.png',
	  name: '潜在订单',
	  url: '/pages/qing-f-c/newFollowRecord/deputyFollowList'
	}, 
	{
	  icon: '/static/images/jinsy/common/wuliu.png',
	  name: '物流信息',
	  url: '',
	},
	{
	  icon: '/static/images/jinsy/common/shenfen.png',
	  name: '身份认领',
	  url: ''},
	{
	    icon: '/static/images/jinsy/common/customFollow.png',
	    name: '客户跟进',
	    url: '/pages/qing-f-c/customPicture/followListNew',
	}
];   //卖办
const arrListRGbuy = [
	{
		icon: '/static/images/jinsy/common/kehu.png',
		name: '客户管理',
		url: '/pages/qing-f-c/regionalManager/customer-admin'
		},
		
		{
		  icon: '/static/images/jinsy/common/genjin.png',
		  name: '潜在订单',
		  url: '/pages/qing-f-c/newFollowRecord/sd_followList'
	    }, 
	
		{
		  icon: '/static/images/jinsy/common/tongji.png',
		  name: '报表统计',
		  url: ''
		},
		{
		  icon: '/static/images/jinsy/common/bangban.png',
		  name: '帮办管理',
		  url: ''
		}, 
		{
		  icon: '/static/images/jinsy/common/shenke.png',
		  name: '审核管理',
		  url: '/pages/qing-f-c/regionalManager/approved'
		},
		{
		  icon: '/static/images/jinsy/common/shenfen.png',
		  name: '身份认领',
		  url: '',
		},
		  
		{
		    icon: '/static/images/jinsy/common/customFollow.png',
		    name: '客户跟进',
		    url: '/pages/qing-f-c/customPicture/sd_followList',
		}
];      //买办区域经理

const arrListRGsell = [
	{
		icon: '/static/images/jinsy/common/kehu.png',
		name: '客户管理',
		url: '/pages/qing-f-c/regionalManager/customer-admin'
		},
		
		{
		  icon: '/static/images/jinsy/common/genjin.png',
		  name: '潜在订单',
		  url: '/pages/qing-f-c/newFollowRecord/sd_followList'
	    }, 
	
		{
		  icon: '/static/images/jinsy/common/tongji.png',
		  name: '报表统计',
		  url: ''
		},
		{
		  icon: '/static/images/jinsy/common/bangban.png',
		  name: '帮办管理',
		  url: ''
		}, 
		{
		  icon: '/static/images/jinsy/common/shenke.png',
		  name: '审核管理',
		  url: '/pages/qing-f-c/regionalManager/approved'
		},
		{
		  icon: '/static/images/jinsy/common/shenfen.png',
		  name: '身份认领',
		  url: ''},
		{
		    icon: '/static/images/jinsy/common/customFollow.png',
		    name: '客户跟进',
		    url: '/pages/qing-f-c/customPicture/sd_followList',
		}
];      //卖办区域经理
const arrListGM= [
	{
		icon: '/static/images/jinsy/common/kehu.png',
		name: '客户管理',
		url: '/pages/qing-f-c/sales_director/customer-admin'
		},
		
		{
		  icon: '/static/images/jinsy/common/genjin.png',
		  name: '潜在订单',
		  url: '/pages/qing-f-c/newFollowRecord/sd_followList'
	    }, 
	
		{
		  icon: '/static/images/jinsy/common/tongji.png',
		  name: '报表统计',
		  url: ''
		},
		{
		  icon: '/static/images/jinsy/common/bangban.png',
		  name: '帮办管理',
		  url: ''
		}, 
		{
		  icon: '/static/images/jinsy/common/shenke.png',
		  name: '审核管理',
		  url: '/pages/qing-f-c/sales_director/approved'
		},
		{
		  icon: '/static/images/jinsy/common/shenfen.png',
		  name: '身份认领',
		  url: '',
		},
		{
		    icon: '/static/images/jinsy/common/customFollow.png',
		    name: '客户跟进',
		    url: '/pages/qing-f-c/customPicture/sd_followList',
		},
		{
		    icon: '/static/images/jinsy/common/casual.png',
		    name: '随口价',
		    url: '/pages/qing-f-c/casualPrice/sd_casualList',
		}
];     //销售总监
const arrListAN= [
	{
		  icon: '/static/images/jinsy/common/tongji.png',
		  name: '报表统计',
		  url: ''
		},
    {
		icon: '/static/images/jinsy/common/fenxi.png',
		name: '分析管理',
		url: '/pages/qing-f-c/inquiryManage/sampleInquiry/analyst/inquiryManage'
	},
	{
	  icon: '/static/images/jinsy/common/shenke.png',
	  name: '审核管理',
	  url: '/pages/qing-f-c/analyist/analyist'
	}
	];     //分析师
const arrListBuyer= [
	{   //买，卖家共用一个
  icon: '/static/images/jinsy/common/xunjia.png',
  name: '我的询价',
  url: '/pages/jin-suo-yun/deputy/sample-many-search'
 }, {
  icon: '/static/images/jinsy/common/jiaoyi.png',
  name: '我的交易',
  url: ''
 }, {
  icon: '/static/images/jinsy/buyer/lianxi.png',
  name: '联系帮办',
  url: ''
 },
 {
  icon: '/static/images/jinsy/buyer/guanzhu.png',
  name: '我的关注',
  url: ''
 },
 {
  icon: '/static/images/jinsy/buyer/mingpian.png',
  name: '采购名片',
  url: '',
  },
 ]
  
const arrListSeller= [
	{   //买，卖家共用一个
  icon: '/static/images/jinsy/common/xunjia.png',
  name: '我的询价',
  url: ''
  },
  {
  icon: '/static/images/jinsy/common/jiaoyi.png',
  name: '我的交易',
  url: ''
  }, {
  icon: '/static/images/jinsy/seller/lianxi.png',
  name: '联系帮办',
  url: ''
  },
  {
  icon: '/static/images/jinsy/seller/weidian.png',
  name: '我的微店',
  url: ''
  },
  {
  icon: '/static/images/jinsy/seller/mingpian.png',
  name: '采购名片',
  url: ''
  },
 {
  icon: '/static/images/jinsy/common/shenfen.png',
  name: '身份认领',
  url: ''
  },
  {
  icon: '/static/images/jinsy/seller/guanzhu.png',
  name: '我的关注',
  url: '/pages/jin-suo-yun/analysis-list'
 },
  {
  icon: '/static/images/jinsy/seller/mingpian.png',
  name: '采购名片',
  url: ''
 }];


export default {
  data() {
    return {
      arrList: [],
	  userInfo: {},
	  pupDef:'',   //默认身份
	  
	  isSeller: false,
      isIdentity: true,
      //是否已经有身份
      identityName: '',
	  isSpecial: false,
      regionalManager: false,
      //是否是区域经理
      newsNum: 0,
      //新消息数量
      popAds: false,
	  identList:[],
	  index:[0],
	  mode: 'selector',
	  directorReviewCount:0,//待审核计数图标
	  isDoRefresh: false,
	  qrUrl:'',
	  detailUrl:'',
	  numberStatus:'',
	  quotationlUrl:'',
	  auditCount:0,
	  totalCount:0,
	  latentCount:0,
	  customLevelCount:0
    };
  },

  onPullDownRefresh() {
    // this.getUserInfo();
	  this.userDetails()
	  //获取未读信息
	  this.getNewsNum()
	  //获取默认职位
	  this.pupDefault()
	  //获取职位列表
	  this.pupList()
	  //待审核计数
	  this.reviewCount()
	  this.getAuditCount()
	  this.getCustomLevelCount()  //客户等级审核
	  uni.stopPullDownRefresh();
      
  },

  onShow: function (e) {
	  // let pages = getCurrentPages();
	  // let currPage = pages[pages.length-1];
	  // if (currPage.data.isDoRefresh == true){
	  // 	       currPage.data.isDoRefresh = false;
	  // 		   this.reviewCount()
			//    this.getAuditCount()
	  // 	 }
	  this.userDetails()
	  this.reviewCount()
	  this.getAuditCount()
	  this.pupList()
	  this.pupDefault()
	  this.getNewsNum()
	  this.getLatentCount()
	  this.getCustomLevelCount()  //客户等级审核
  },
  onLoad: function (options) {
        _this = this;
		if (this.checkLogin()){
			uni.showLoading({
			  title: '加载中'
			});
			let timer = setTimeout(() => {
			  uni.hideLoading();
			}, 1000);
			// 用户信息
			this.userDetails()
			//获取未读信息
			this.getNewsNum()
			//获取默认职位
			this.pupDefault()
			//获取职位列表
			this.pupList()
			this.reviewCount()    //待审核询价单数量
			this.getAuditCount()  //待审核产品数量
			this.getLatentCount() //潜在订单
			this.getCustomLevelCount()  //客户等级审核
			
		}
		

  },
  components: {
	  mpvuePicker,
	  uniGrid,
	  uniGridItem,
	  widgit
  },
  props: {},
  methods: {
	  async getCustomLevelCount(){
	  	let data ={
	  		postCode: uni.getStorageSync('pupDefault')
	  	}
	  	const res = await this.$http.get('/cm/level_audit_count',{data: data})
	  	this.customLevelCount = res.data.data.msg
	  },
	  async getLatentCount(){
		  const res = await this.$http.get('/latent/user_message_count',{})
		  this.latentCount = res.data.data.msg
	  },
	  navMenu:function(url){
		  if (url==''){
			 uni.showToast({
			   title: '开发中',
			   icon: 'none'
			 });
			 return
		  }
		  uni.navigateTo({
		  	url: url,
		  	success: res => {},
		  	fail: (err) => {console.log(err)},
		  	complete: () => {}
		  });
	  },
	  getAuditCount:function(){
	  	let data={
			postCode: uni.getStorageSync('pupDefault')
		}
	  	let url= this.Api.auditCount
	  	this.myRequest(data,url,'get').then(res => {
	  	  console.log(res);
	  	  _this.auditCount= res.data.data.msg
		 
	  	  console.log(_this.auditCount)
	  	}).catch(err => {
	  	  uni.showToast({
	  	    title: err.data.errMsg,
	  	    icon: 'none'
	  	  });
	  	});
	  },
	reviewCount:function(){
	  	let data={
			postCode: uni.getStorageSync('pupDefault')
		}
	  	let url= this.Api.directorReviewCount
	  	this.myRequest(data,url,'get').then(res => {
	  	  console.log(res);
		  if (uni.getStorageSync('pupDefault')=='SALES_DIRECTOR'){
			  _this.directorReviewCount = res.data.data.msg
		  }else{
			  _this.directorReviewCount = 0
		  }
	  	  
	  	  console.log(_this.directorReviewCount)
	  	}).catch(err => {
	  	  wx.showToast({
	  	    title: err.data.errMsg,
	  	    icon: 'none'
	  	  });
	  	});
	  },
    showPicker() {
    			  this.$refs.mpvuePicker.show();
    			},
    			onConfirm(e) {
    				this.index = e.index
					// this.identityName = this.identList[this.index].label
					let id = this.identList[this.index].id
					switch(id){
							case 'SALES_DIRECTOR':
							 try{
								uni.setStorageSync('pupDefault','SALES_DIRECTOR')
							 }catch(e){
								//TODO handle the exception
								uni.showToast({
									title: '缓存出错',
									icon: 'none'
								});
								return
							 }
						    
						    this.userDetails()
						    this.arrList =arrListGM;
							this.isSpecial = true
						    this.isSeller = false;
							break;
					    case  'REGIONAL_MANAGER':
							try{
								uni.setStorageSync('pupDefault','REGIONAL_MANAGER')
								this.userDetails()
							}catch(e){
								//TODO handle the exception
								uni.showToast({
									title: '缓存出错',
									icon: 'none'
								});
								return
							}
							this.userDetails()

							this.isSpecial = true
						    this.isSeller = false;
							break;
						case 'BUY_DEPUTY':
						     try{
						     	uni.setStorageSync('pupDefault','BUY_DEPUTY')
						     }catch(e){
						     	//TODO handle the exception
						     	uni.showToast({
						     		title: '缓存出错',
						     		icon: 'none'
						     	});
						     	return
						     }
							this.userDetails()
						    this.arrList = arrListBuyB; 
						    this.isSeller = false;
							this.isSpecial = false
							break;
						case 'SELL_DEPUTY':
						    try{
						    	uni.setStorageSync('pupDefault','SELL_DEPUTY')
						    }catch(e){
						    	//TODO handle the exception
						    	uni.showToast({
						    		title: '缓存出错',
						    		icon: 'none'
						    	});
						    	return
						    }
							this.userDetails()
						    this.arrList = arrListSellB;
							this.isSpecial = false
						    this.isSeller = true; 
							break;
						case 'ANALYST':
						    try{
						    	uni.setStorageSync('pupDefault','ANALYST')
						    }catch(e){
						    	//TODO handle the exception
						    	uni.showToast({
						    		title: '缓存出错',
						    		icon: 'none'
						    	});
						    	return
						    }
							this.userDetails()
						    this.arrList = arrListAN ;
							this.isSpecial = false
						    this.isSeller = false; 
							break;
					}		
    			},
    			onChange(e) {
    			  this.index = e.index
    			},
    			onCancel(e) {
    			  console.log('onCancel')
    			  console.log(e);
    			},
    			selectChange(e){
    				this.index = e.detail.value
    			},
    			showSinglePicker() {
    				console.log(this.identList)
    				this.mode = 'selector'
    				this.index = [0]
    				this.$refs.mpvuePicker.show()
    			},
					
    // 获取未读消息数量
   getNewsNum:function() {
      JsyServer.getNewsNum().then(res => {
        _this.newsNum = res.data.data.count
      }).catch(err => {
        console.log("getNewsNum=err==", res);
      });
	  // const res = await this.$http.get('/um/count',{})
	  // _this.newsNum = res.data.data.count
    },
	userDetails:function(){
		let data = {
			postCode: uni.getStorageSync('pupDefault')
		} 
		
		JsyServer.userDetails(data).then(res => {
		  console.log(res)
		  _this.userInfo = res.data.data
		  this.$store.dispatch('regionCodeFun',res.data.data.regionCode) //区域经理要带的区域代码
		  _regionCode = res.data.data.regionCode  
		 // console.log("quyudaima",_regionCode)
		  console.log("userInfo===",_this.userInfo)
		  this.pupDefault()
		}).catch(err => {
		  console.log("getNewsNum=err==", res);
		});
	},
	
    pupDefault:function(){
			let pupDefault = uni.getStorageSync('pupDefault')
			console.log("默认身份====",pupDefault)
			if (pupDefault == 'SELL_DEPUTY' || pupDefault == 'SELLER'){
				_this.isSeller = true;
			}
			if (pupDefault == 'SALES_DIRECTOR' || pupDefault == 'REGIONAL_MANAGER'){
				_this.isSpecial = true;
			}
			switch (pupDefault){
				case "BUY_DEPUTY":
				     _this.arrList = arrListBuyB
					 _this.qrUrl = '/pages/qing-f-c/inquiryManage/inquiry-created?number='
					 _this.detailUrl = '/pages/qing-f-c/inquiryManage/sampleInquiry/buyDeputy/inquiry-details?inquiryNumber='
					 
					 _this.quotationlUrl = '/pages/qing-f-c/inquiryManage/sampleInquiry/buyDeputy/quotationDetails/quotationDetails?number='
					
					 console.log(_this.arrList[0])
					 break;
				case "SELL_DEPUTY":
				     _this.arrList = arrListSellB
					 _this.qrUrl = ''
					 _this.detailUrl = '/pages/qing-f-c/inquiryManage/sampleInquiry/sellDeputy/inquiry-details?inquiryNumber='
					 _this.quotationlUrl = '/pages/qing-f-c/inquiryManage/sampleInquiry/sellDeputy/quotationDetails?number='
				     break;
				case "ANALYST":
				     _this.arrList = arrListAN
					 _this.qrUrl = ''
					 _this.detailUrl = '/pages/qing-f-c/inquiryManage/sampleInquiry/analyst/inquiry-details?inquiryNumber='
					 _this.quotationlUrl = '/pages/qing-f-c/inquiryManage/sampleInquiry/analyst/inquiry-details?inquiryNumber='
				     break;
				case "SALES_DIRECTOR":
				     _this.arrList = arrListGM
					 break;
				case "REGIONAL_MANAGER":
				     _this.arrList = arrListRGbuy
					 break;
				case "BUYER":
				     _this.arrList = arrListBuyer
					 break;
				case "SELLER":
				     _this.arrList = arrListSeller
					 break;
			}
		
	},
	
    pupList:function(){
		JsyServer.pupList().then(res=>{
			console.log("身份列表",res)
			if (res.data.status == 0){
				_this.identList = res.data.data.list
			}
			if (res.data.status == 80){
				uni.redirectTo({
					url: '/pages/qing-f-c/login/login'
				});
			}
			
			 
		}).catch(err =>{
			console.log("pupList=err==", res)
		})
	},
	isExist:function(number,orderType){
		let url= this.Api.isExist
		
		let data={
			number: number,		  
		}
		
		this.myRequest(data,url,'get').then(res => {
		  console.log(res.data.data.msg);
          _this.numberStatus = res.data.data.msg
		  console.log(_this.numberStatus)
		  if (_this.numberStatus=='false'){
			  console.log('xiangdeng')
			  uni.navigateTo({
			    url: _this.qrUrl+ number,
			    success: res => {},
		        fail: () => {},
			    complete: () => {}
			  });
		  }else{
			
			 if (orderType == 1){
				uni.navigateTo({
				  url: _this.detailUrl+ number,
				  success: res => {},
				  fail: (err) => {
					  uni.showToast({
					  	title: err,
						duration: 3000
					  });
				  },
				  complete: () => {}
				}); 
			 }else {
				 uni.navigateTo({
				   url: _this.quotationlUrl+ number+'&orderType='+orderType,
				   success: res => {},
				   fail: (err) => {
					   uni.showModal({
						  content: err
					   })
				   },
				   complete: () => {}
				 }); 
			 }
			 
		  }
		 }).catch(err => {
		  wx.showToast({
		    title: err.data.errMsg,
		    icon: 'none'
		  });
		});
	},
    // 扫描二维码
    scanCode: function () {
	  
      uni.scanCode({
        success: function (res) {
          let number = res.result.split('#')[2]
		  let orderType = res.result.split('#')[0]
			 // uni.navigateTo({
				// url: _this.detailUrl+ number,
				// success: res => {},
				// fail: () => {},
				// complete: () => {}
			 // });
		  _this.isExist(number,orderType)
		 
        },
        fail: function (res) {
			uni.showToast({
				title: res,
				icon: 'none'
			});
			return
		}
      });
    },
    navNewsPage: function () {
      console.log("跳转到消息页");
      uni.navigateTo({
        url: '/pages/qing-f-c/message/messageList'
      });
    },
	toSetting:function(){
		uni.navigateTo({
			url: './setting/setting',
			success: res => {},
			fail: (err) => { console.log(err)},
			complete: () => {}
		});
	},
    toChoicePage: function () {
      if (!uni.getStorageSync("token")) {
        return;
      }
    },
	prompt:function(url){
           if (url == ''){
			   uni.showToast({
			   	title: '开发中...',
				icon:'none',
				duration: 1000
			   });
			   return
		   }
	},
    toJump: function (e) {
      let url = e.currentTarget.dataset.url;

      if (!url || !this.popAds && url == "/pages/user-order/order") {
        uni.showToast({
          title: '开发中...',
          icon: 'none'
        });
      }
    },
  }
};
</script>
<style>
page{
  background-color: #f6f6f6;
}
.mb_40{
  margin-bottom: 40upx
}
.mb_20{
  margin-bottom: 20upx
}
.mt_10{
	margin-top: 10upx;
}
.color_cf{
  color:#cfcfcf
}
.hand_box{
  background-image:url('~@/static/images/qingfc/login-back.jpeg');
  background-repeat:no-repeat;
  background-position:center top;
  background-size:cover;
  height: 420upx;
  color:#fff;
  padding: 30upx 24upx 100upx;
}
.hand_img{
  width: 160upx;
  height: 160upx;
  margin-right: 30upx;
  border-radius: 8upx;
}
.hand_content{
	width: 250upx;
	line-height: 1;
}
.align-c{
	align-content: space-between;
}
.widgit{
	position: relative;
}

.xiaoxi_text{
  background-color: #FF0000;
  color: #fff;
  border-radius: 26upx;
  height: 26upx;
  width: 26upx;
  text-align: center;
  line-height: 26upx; 
  font-size: 12px;
  z-index: 100;
  position: absolute;
  top: -10upx;
  right: -10upx;
}
.xiaoxi_img{
  height: 50upx;
  width: 50upx;
  z-index: 95;
}
.setting_img{
  height: 50upx;
  width: 50upx;
  z-index: 95;
}
.box{
	 padding: 30upx 50upx 0;
	 margin:0 24upx;
	 position: relative;
	 bottom: 60upx;
	 background-color: #fff;
	 border-radius: 8upx;
	 display: flex;
	 flex-wrap: wrap;
}
.box_1{
	 /* padding: 30upx 50upx 0; */
	 margin: 0 30upx;
	 position: relative; 
	 
	 bottom: 120upx;
	 background-color: #fff;
	 border-radius: 8upx;
	
}
.box_2{
	 /* padding: 30upx 50upx 0; */
	 margin: -120upx 30upx 0 30upx;
	 position: relative; 
	 
	 /* bottom: 120upx; */
	 background-color: #fff;
	 border-radius: 8upx;
	
}
.mar_131{
  margin: 0 91upx;
}
/* .text_algin_c{
  text-align: center;
  width: 140upx;
  white-space: nowrap;
} */
.text_algin_c{
   margin-top: 10upx;
}
.icon_blue{
	width: 100upx;
	height: 100upx;
	background: linear-gradient(to right, #4487FD, #40adfa);
	z-index: -1;
	border-radius: 50%;
	margin: 14upx 20upx 0;
	display: flex;
	justify-content: center;
	align-items: center;
}
.icon_orange{
	width: 100upx;
	height: 100upx;
	background: linear-gradient(to right, #FF6000, #FFA24F);
	z-index: -1;
	border-radius: 50%;
	margin: 14upx 20upx 0;
	display: flex;
	justify-content: center;
	align-items: center;
}
.icon_img{
 /* width:100upx;
 height: 100upx; */
 width: 100upx;
 height: 100upx;
/* margin: 14upx 20upx 0; */
}
.image_back{
	width: 100upx;
	height: 100upx;
	border-radius: 50%;
	box-shadow:5px 5px 10px -4px rgba(0,0,0,0.1);
}

.er_img{
  position: absolute;
  bottom: 90upx;
  right: 24upx;
  width: 120upx;
  height: 120upx;
}
.login_top{
  height: 404upx;
  width: 750upx;
  box-sizing: border-box;
  background-image:url(https://api.qingfangche.net/api/common/picture/hand_back/png/static/images/download);
  background-repeat:no-repeat;
  background-position:center top;
  background-size:cover;
  text-align: center;
}
.login_img{
  width: 336upx;
  height: 128upx;
  margin: 138upx auto;
}
.login_btn{
  width: 406upx;
  line-height: 96upx;
  color:#fff;
  background-color: #FF6000;
  border-radius: 6upx;
  margin: 160upx auto 40upx;
  font-size: 18px;
}
.login_text{
  width: 602upx;
  text-align: center;
  font-size: 28upx;
  color:#4A4A4A;
  margin: 0 auto;
}
.hand_btn{
	border: 2upx solid #FFFFFF;
	border-radius: 4upx;
	line-height: 40upx;
	padding: 0 10upx;
	color: #FFFFFF;
	font-size: 24upx;
}
.ml_20{
	margin-left: 20upx;
}
.frozen{
	padding: 100upx 0;
	color: #cfcfcf;
	font-size: 16px;
	text-align: center;
	width: 602upx;
}
.bottom_img{
	width: 20upx;
	height: 20upx;
	box-shadow: 0 4upx 8upx 0 rgba(0, 0, 0, 0.2);
}
</style>