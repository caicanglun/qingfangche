<template>
<view>
	<view v-if="isIdentity">
	  <view class="hand_box">
		 <view class="flex-row-reverse mt_50" @tap="navNewsPage">
		 		 
		 		<view class="widgit">
		 			<image src="/static/images/jinsy/xiaoxi@2x.png" class="xiaoxi_img" mode="aspectFit"></image>
		 			<view class="xiaoxi_text" v-if="newsNum>0">{{newsNum|| ''}}</view>
		 		</view>
		 		<view style="padding-right: 20upx;">
		 				<image src="/static/images/jinsy/setting@2x.png" class="setting_img" mode="aspectFit"></image>
		 		</view>
		 		
		 </view>
		 <view style="display:flex;margin-top: 100upx;margin-left: 15upx;">
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

	  <!-- 九宫格插件显示 -->
	     <view class="box_1 box_shadow">
			 <view style="padding: 30upx 0;">
				 <uni-grid :column="3" :show-border="false" :square="false">
				 
				 	    <uni-grid-item v-for="(item, index) in arrList" :key="index" >
				 			<navigator :url="item.url" hover-class="none">
				 							<view class='image_back'>
				 								<image :src="item.icon" mode="aspectFill" class="icon_img"></image>
				 							</view>
				 
				 	        </navigator>
				 			<view class="fs_12 text_algin_c">{{item.name|| ''}}</view>
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

const JsyServer = require("../../services/jsy-server.js");
const Api = require("../../services/config/api.js");
const Server = require("../../services/server.js");
let _this,_regionCode;


const arrListBuyB = [
	{
	icon: '/static/images/jinsy/buy-deputy/kehu.png',
	name: '客户管理',
	url: '/pages/qing-f-c/buyDupty/customer-admin'
	},
	{
	  icon: '/static/images/jinsy/buy-deputy/jiaoyi.png',
	  name: '交易管理',
	  url: '/pages/user-order/order'
	}, {
	  icon: '/static/images/jinsy/buy-deputy/xunjia.png',
	  name: '询价管理',
	  url: '/pages/jin-suo-yun/deputy/inquiry-management-list'
	}, 
	{
	  icon: '/static/images/jinsy/buy-deputy/genjin.png',
	  name: '跟进记录',
	  url: '/pages/jin-suo-yun/deputy/sample-many-search'
    }, 
	{
	  icon: '/static/images/jinsy/buy-deputy/wuliu.png',
	  name: '物流信息',
	  url: '',
	},
	{
	  icon: '/static/images/jinsy/buy-deputy/renling.png',
	  name: '身份认领',
	  url: ''}
  ];  //买办
const arrListSellB = [
	{
	icon: '/static/images/jinsy/sell-deputy/kehu.png',
	name: '客户管理',
	url: '/pages/qing-f-c/sellDupty/customer-admin'
	},
	{
	  icon: '/static/images/jinsy/sell-deputy/jiaoyi.png',
	  name: '交易管理',
	  url: '/pages/user-order/order'
	}, {
	  icon: '/static/images/jinsy/sell-deputy/xunjia.png',
	  name: '询价管理',
	  url: '/pages/jin-suo-yun/deputy/inquiry-management-list'
	}, 
	{
	  icon: '/static/images/jinsy/sell-deputy/genjin.png',
	  name: '跟进记录',
	  url: '/pages/jin-suo-yun/deputy/sample-many-search'
	}, 
	{
	  icon: '/static/images/jinsy/sell-deputy/wuliu.png',
	  name: '物流信息',
	  url: '',
	},
	{
	  icon: '/static/images/jinsy/sell-deputy/renling.png',
	  name: '身份认领',
	  url: ''}
];   //卖办
const arrListRGbuy = [
	{
		icon: '/static/images/jinsy/buy-region/kehu.png',
		name: '客户管理',
		url: '/pages/qing-f-c/regionalManager/customer-admin'
		},
		
		{
		  icon: '/static/images/jinsy/buy-region/genjin.png',
		  name: '跟进记录',
		  url: '/pages/jin-suo-yun/regionalManager/sample-many-search'
	    }, 
	
		{
		  icon: '/static/images/jinsy/buy-region/tongji.png',
		  name: '报表统计',
		  url: ''
		},
		{
		  icon: '/static/images/jinsy/buy-region/admin.png',
		  name: '帮办管理',
		  url: ''
		}, 
		{
		  icon: '/static/images/jinsy/buy-region/examine.png',
		  name: '审核管理',
		  url: ''
		},
		{
		  icon: '/static/images/jinsy/buy-region/renling.png',
		  name: '身份认领',
		  url: ''}
];      //买办区域经理

const arrListRGsell = [
	{
		icon: '/static/images/jinsy/sell-region/kehu.png',
		name: '客户管理',
		url: '/pages/qing-f-c/regionalManager/customer-admin'
		},
		
		{
		  icon: '/static/images/jinsy/sell-region/genjin.png',
		  name: '跟进记录',
		  url: '/pages/jin-suo-yun/regionalManager/sample-many-search'
	    }, 
	
		{
		  icon: '/static/images/jinsy/sell-region/tongji.png',
		  name: '报表统计',
		  url: ''
		},
		{
		  icon: '/static/images/jinsy/sell-region/admin.png',
		  name: '帮办管理',
		  url: ''
		}, 
		{
		  icon: '/static/images/jinsy/sell-region/examine.png',
		  name: '审核管理',
		  url: ''
		},
		{
		  icon: '/static/images/jinsy/sell-region/renling.png',
		  name: '身份认领',
		  url: ''}
];      //卖办区域经理
const arrListGM= [
	{
		icon: '/static/images/jinsy/sales-director/kehu.png',
		name: '客户管理',
		url: '/pages/qing-f-c/sales_director/customer-admin'
		},
		
		{
		  icon: '/static/images/jinsy/sales-director/genjin.png',
		  name: '跟进记录',
		  url: '/pages/jin-suo-yun/sales_director/sample-many-search'
	    }, 
	
		{
		  icon: '/static/images/jinsy/sales-director/tongji.png',
		  name: '报表统计',
		  url: ''
		},
		{
		  icon: '/static/images/jinsy/sales-director/admin.png',
		  name: '帮办管理',
		  url: ''
		}, 
		{
		  icon: '/static/images/jinsy/sales-director/examine.png',
		  name: '审核管理',
		  url: ''
		},
		{
		  icon: '/static/images/jinsy/sales-director/renling.png',
		  name: '身份认领',
		  url: ''}
];     //销售总监
const arrListAN= [];     //分析师
const arrListBuyer= [
	{   //买，卖家共用一个
  icon: '/static/images/jinsy/buyer/xunjia.png',
  name: '我的询价',
  url: '/pages/jin-suo-yun/deputy/sample-many-search'
 }, {
  icon: '/static/images/jinsy/buyer/jiaoyi.png',
  name: '我的交易',
  url: ''
 }, {
  icon: '/static/images/jinsy/buyer/lianxi.png',
  name: '联系帮办',
  url: '/pages/jin-suo-yun/buyer/analysis-list'
 },
 {
  icon: '/static/images/jinsy/buyer/guanzhu.png',
  name: '我的关注',
  url: '/pages/jin-suo-yun/analysis-list'
 },
 {
  icon: '/static/images/jinsy/buyer/mingpian.png',
  name: '采购名片',
  url: '',
  },
 ]
  
const arrListSeller= [
	{   //买，卖家共用一个
  icon: '/static/images/jinsy/seller/xunjia.png',
  name: '我的询价',
  url: '/pages/jin-suo-yun/deputy/sample-many-search'
  },
  {
  icon: '/static/images/jinsy/seller/jiaoyi.png',
  name: '我的交易',
  url: ''
  }, {
  icon: '/static/images/jinsy/seller/lianxi.png',
  name: '联系帮办',
  url: '/pages/jin-suo-yun/buyer/analysis-list'
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
  icon: '/static/images/jinsy/seller/renling.png',
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
    
  },

  onShow: function (e) {
	  
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
			//用户信息
			this.userDetails()
			//获取未读信息
			this.getNewsNum()
			//获取默认职位
			this.pupDefault()
			//获取职位列表
			this.pupList()
			
		}
		

  },
  components: {
	  mpvuePicker,
	  uniGrid,
	  uniGridItem
  },
  props: {},
  methods: {
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
							setTimeout(function() {
								let temp = arrListRGbuy
								temp[0].url = temp[0].url+'?regionCode=' + _regionCode
								console.log(temp[0].url)
								this.arrList = temp;
							}, 500);
							
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
    getNewsNum: function () {
      JsyServer.getNewsNum().then(res => {
        _this.newsNum = res.data.data.count
      }).catch(err => {
        console.log("getNewsNum=err==", res);
      });
    },
	userDetails:function(){
		let data = {
			postCode: uni.getStorageSync('pupDefault')
		} 
		
		JsyServer.userDetails(data).then(res => {
		  console.log(res)
		  _this.userInfo = res.data.data
		  _regionCode = res.data.data.regionCode  //区域经理要带的区域代码
		  console.log("quyudaima",_regionCode)
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
					 break;
				case "SELL_DEPUTY":
				     _this.arrList = arrListSellB
				     break;
				case "ANALYST":
				     _this.arrList = arrListAN
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
			_this.identList = res.data.data.list
			 
		}).catch(err =>{
			console.log("pupList=err==", res)
		})
	},
    // 扫描二维码
    scanCode: function () {
      var that = this;
      wx.scanCode({
        success: function (res) {
          console.log("code---", res);
          console.log("path---", res.path);
          wx.navigateTo({
            url: "/" + res.path
          });
        },
        fail: function (res) {}
      });
    },
    navNewsPage: function () {
      console.log("跳转到消息页");
      wx.navigateTo({
        url: '/pages/jin-suo-yun/news'
      });
    },
    toChoicePage: function () {
      if (!wx.getStorageSync("token")) {
        return;
      }
    },

    toJump: function (e) {
      let url = e.currentTarget.dataset.url;

      if (!url || !this.popAds && url == "/pages/user-order/order") {
        wx.showToast({
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
  background-image:url(https://api.qingfangche.net/api/common/picture/hand_back/png/images/download);
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
  background-color: #FF7D21;
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
  height: 42upx;
  width: 36upx;
  z-index: 95;
}
.setting_img{
  height: 42upx;
  width: 36upx;
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
	 margin:0 30upx;
	 position: relative;
	 bottom: 120upx;
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