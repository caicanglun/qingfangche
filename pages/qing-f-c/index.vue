<template>
<view>
	<view v-if="isIdentity">
	  <view class="hand_box">
		 <view class="flex mt_50">
			 <view>
				 <image :src="userInfo.avatar" class="hand_img" mode="aspectFilt"></image>
			 </view>
			
			<view class="hand_content">
			  <view class="fs_15 mb_40 mt_10">{{userInfo.nickName}}</view>
			  <view class="fs_14 color_cf">{{userInfo.realName}}</view>
			  <view class="fs_12 color_cf mt_20">{{userInfo.phone}}</view>
			</view>
			
			<view class="flex_column ml_30">
					<view class="flex-row-reverse" @tap="navNewsPage">
							 
							<view class="widgit">
								<image src="/static/images/jinsy/xiaoxi@2x.png" class="xiaoxi_img" mode="aspectFilt"></image>
								<view class="xiaoxi_text" v-if="newsNum>0">{{newsNum}}</view>
							</view>
							<view style="padding-right: 20upx;">
									<image src="/static/images/jinsy/setting@2x.png" class="setting_img" mode="aspectFilt"></image>
							</view>
							
					</view>
				
					<view class="flex mt_50">
						<!-- <view class="hand_btn" v-if="regionalManager">区域经理</view> -->
						<!-- <view class="hand_btn" v-if="!isSpecial">{{userInfo.postName}}</view> -->
						<view class="hand_btn ml_20" @tap="showSinglePicker">
							   {{userInfo.postName}}
						</view>
						
						<view class="hand_btn ml_20" v-if="userInfo.regionName">{{userInfo.regionName}}</view>

					</view>
			
			</view>
		  </view>
	  </view>

	  <view class="box box_shadow">
		<block v-for="(item, index) in arrList" :key="index">
		  <navigator :url="(!popAds&&item.url=='/pages/user-order/order'?'':item.url)" hover-class="none">
			<view :class="'mb_30 ' + (index==1||index==4||index==7?'mar_131':'')" @tap="toJump" :data-url="item.url">
			  <view :class="(isSeller?'icon_blue':'icon_orange')"><image :src="item.icon" mode="aspectFilt" class="icon_img"></image></view>
			  <view class="fs_12 text_algin_c">{{item.name}}</view>
			</view>
		  </navigator>
		</block>
			
	  </view>
      <image src="/static/images/jinsy/erweima.png" mode="aspectFilt" class="er_img" @tap="scanCode" v-if="identityName!='已冻结'"></image>

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
const JsyServer = require("../../services/jsy-server.js");
const User = require("../../services/user.js");
const Api = require("../../services/config/api.js");
const Server = require("../../services/server.js");
const a = [[
	  {
	  icon: '/static/images/jinsy/kehu.png',
	  name: '客户管理',
	  url: '/pages/qing-f-c/buyDupty/customer-admin'
	  },
	  {
	   icon: '/static/images/jinsy/kehu.png',
	   name: '客户管理',
	   url: '/pages/qing-f-c/sellDupty/customer-admin'
	   },
	  {
	    icon: '/static/images/jinsy/kehu.png',
	    name: '客户管理',
	    url: '/pages/qing-f-c/sales_director/customer-admin'
	    },
		{
		  icon: '/static/images/jinsy/kehu.png',
		  name: '客户管理',
		  url: '/pages/qing-f-c/regionalManager/customer-admin'
		  }	
]
, {
  icon: '/static/images/jinsy/jiaoyi.png',
  name: '交易管理',
  url: '/pages/user-order/order'
}, {
  icon: '/static/images/jinsy/xunjia.png',
  name: '询价管理',
  url: '/pages/jin-suo-yun/deputy/inquiry-management-list'
}, {
  icon: '/static/images/jinsy/genjin.png',
  name: '跟进记录',
  url: '/pages/jin-suo-yun/deputy/sample-many-search'
}, 
{
  icon: '/static/images/jinsy/wuliu.png',
  name: '物流信息',
  url: '',
},
{
  icon: '/static/images/jinsy/fenxi.png',
  name: '分析单管理',
  url: ''
}, 
{
  icon: '/static/images/jinsy/tongji.png',
  name: '报表统计',
  url: ''
},
{
  icon: '/static/images/jinsy/admin.png',
  name: '帮办管理',
  url: ''
}, 
{
  icon: '/static/images/jinsy/examine.png',
  name: '审核管理',
  url: ''
},
{
  icon: '/static/images/jinsy/renling.png',
  name: '身份认领',
  url: ''
}];
const arrListBuyB = [a[0][0],a[1],a[2],a[3],a[4],a[9]];  //买办
const arrListSellB = [a[0][1],a[1],a[2],a[3],a[4],a[9]];   //卖办
const arrListRG = [a[0][2],a[3],a[6],a[7],a[8],a[9]];      //区域经理
const arrListGM= [a[0][3],a[3],a[6],a[7],a[8],a[9]];     //销售总监
const arrListAN= [a[6],a[5]];     //分析师
const arrListBS= [{   //买，卖家共用一个
  icon: '/static/images/jinsy/woxunjia.png',
  name: '我的询价',
  url: '/pages/jin-suo-yun/deputy/sample-many-search'
}, {
  icon: '/static/images/jinsy/wojiaoyi.png',
  name: '我的交易',
  url: ''
}, {
  icon: '/static/images/jinsy/wolianxi.png',
  name: '联系帮办',
  url: '/pages/jin-suo-yun/analysis-list'
},
{
  icon: '/static/images/jinsy/woweidian.png',
  name: '我的微店',
  url: ''
},
{
  icon: '/static/images/jinsy/womingpian.png',
  name: '采购名片',
  url: ''
},
{
  icon: '/static/images/jinsy/renling.png',
  name: '身份认领',
  url: ''
},
{
  icon: '/static/images/jinsy/woguanzhu.png',
  name: '我的关注',
  url: '/pages/jin-suo-yun/analysis-list'
},
{
  icon: '/static/images/jinsy/womingpian.png',
  name: '采购名片',
  url: ''
}];

let _this;

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
			}, 3000);
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
	  mpvuePicker
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
							}catch(e){
								//TODO handle the exception
								uni.showToast({
									title: '缓存出错',
									icon: 'none'
								});
								return
							}
							this.userDetails()
						    this.arrList = arrListRG;
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
				     _this.arrList = arrListRG
					 break;
				case "BUYER":
				     _this.arrList = arrListBS
					 break;
				case "SELLER":
				     _this.arrList = arrListBS
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

    /**
    * 获取弹窗广告数据
    */
//     popAds: function (e) {
//       JsyServer.controllShow().then(res => {
//         console.log("res---", res);
// 
//         if (res.data == 1) {
//           _this.setData({
//             popAds: true
//           });
//         } else {
//           _this.setData({
//             popAds: false
//           });
//         }
//       }).catch(err => {
//         console.log("Err=>", err);
//       });
//     },
    setData: function (obj) {
      let that = this;
      let keys = [];
      let val, data;
      Object.keys(obj).forEach(function (key) {
        keys = key.split('.');
        val = obj[key];
        data = that.$data;
        keys.forEach(function (key2, index) {
          if (index + 1 == keys.length) {
            that.$set(data, key2, val);
          } else {
            if (!data[key2]) {
              that.$set(data, key2, {});
            }
          }

          data = data[key2];
        });
      });
    }
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
  height: 300upx;
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
  bottom: 130upx;
  background-color: #fff;
  border-radius: 8upx;
  display: flex;
  flex-wrap: wrap;
}
.mar_131{
  margin: 0 91upx;
}
.text_algin_c{
  text-align: center;
  width: 140upx;
  white-space: nowrap
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
  width:45upx;
  height: 52upx;
  /* position: relative;
  top: 20upx;
  left: 20upx; */
 /*  */
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
  background-color: #EE603F;
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