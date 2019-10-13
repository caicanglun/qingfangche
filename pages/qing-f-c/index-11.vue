<template>
<view>
	<view v-if="isIdentity">
	  <view class="flex hand_box">
		<image :src="userInfo.avatar" class="hand_img" mode="aspectFilt"></image>
		<view class="hand_content">
		  <view class="fs_16 mb_40 mt_10">{{userInfo.nickName}}</view>
		  <view class="fs_14 color_cf">{{userInfo.name}}</view>
		<view class="flex_sb">
			<view class="fs_12 color_cf mt_20">{{userInfo.phone}}</view>
			<view class="flex" v-if="identityName!='已冻结'">
				<!-- <view class="hand_btn" v-if="regionalManager">区域经理</view> -->
				<view class="hand_btn" v-if="!isSpecial">{{identityName}}</view>
				<view class="hand_btn ml_20" v-if="isSpecial" @tap="showSinglePicker">
			          <!-- <picker @change="changeIdent" :range='selectList' :value="selectIndex" :rang_key="text" style='height:10upx'>
				             
							   {{selectList[selectIndex]}}
				       </picker> -->
				       {{identityName}}
				</view>
				
			</view>
		</view>
		</view>
	  </view>
	  <view class="xiaoxi" @tap="navNewsPage" v-if="identityName!='已冻结'">
		 <image src="/static/images/jinsy/setting@2x.png" class="setting_img" mode="aspectFilt"></image>
		
		<image src="/static/images/jinsy/xiaoxi@2x.png" class="xiaoxi_img" mode="aspectFilt"></image>
		<view class="xiaoxi_text" v-if="newsNum>0">{{newsNum}}</view>
	  </view>

	  <view class="box box_shadow">
		<block v-for="(item, index) in arrList" :key="index">
		  <navigator :url="(!popAds&&item.url=='/pages/user-order/order'?'':item.url)" hover-class="none">
			<view :class="'mb_30 ' + (index==1||index==4||index==7?'mar_131':'')" @tap="toJump" :data-url="item.url">
			  <view :class="[isSeller?'icon_blue':'icon_orange']"><image :src="item.icon" mode="aspectFilt" class="icon_img"></image></view>
			  <view class="fs_12 text_algin_c">{{item.name}}</view>
			</view>
		  </navigator>
		</block>
			<!-- <view class="frozen" v-if="identityName=='已冻结'">您的内部人员身份已被冻结,不能进行操作</view> -->
	  </view>
	  
	  <view class="hand_btn ml_20" v-if="userInfo.region">{{userInfo.region}}</view>
      <image src="/static/images/jinsy/erweima.png" mode="aspectFilt" class="er_img" @tap="scanCode" v-if="identityName!='已冻结'"></image>
      
      	 
	</view>
	<view @tap="showSinglePicker" v-if="shopList.length != 0">门店:{{shopList[index].label}}</view>
				 <mpvue-picker ref="mpvuePicker" :mode="mode" :pickerValueDefault="index" @onChange="onChange" @onConfirm="onConfirm" @onCancel="onCancel" :pickerValueArray="shopList">
				 </mpvue-picker>
</view>	
</template>

<script>
import mpvuePicker from '@/components/mpvue-picker/mpvuePicker.vue';
const JsyServer = require("../../services/jsy-server.js");
const User = require("../../services/user.js");
const Api = require("../../services/config/api.js");
const Server = require("../../services/server.js");
const a = [{
  icon: '/static/images/jinsy/kehu.png',
  name: '客户管理',
  url: '/pages/qing-f-c/customer-admin/customer-list'
}, {
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
const arrListBuyB = [a[0],a[1],a[2],a[3],a[4],a[9]];  //买办
const arrListSellB = [a[0],a[1],a[2],a[3],a[4],a[9]];   //卖办
const arrListRG = [a[0],a[3],a[6],a[7],a[8],a[9]];      //区域经理
const arrListGM= [a[0],a[3],a[6],a[7],a[8],a[9]];     //销售总监
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
const selectRGB = [{id:'112',label:'区域经理'},{id:'113',label:'买帮办'}];
const selectRGS = [{id:'112',label:'区域经理'},{id:'114',label:'买帮办'}];
//const selectGM = [{id:'111',label:'销售总监'},{id:'113',label:'买帮办'},{id:'114',label:'卖帮办'}];
const selectGM = [{id:'111',label:'aaa'},{id:'222',label:'bbb'},{id:'333',label:'ccc'},{id:'555',label:'ddd'}];

let _this;

export default {
  data() {
    return {
       arrList: arrListRG,
	   userInfo: {
		  avatar: "",
		  nickName: "昵称",
		  name: "真实姓名",
		  phone: '15259777775',
		  region: '厦门'
	  },
	  isSeller: false,
      isIdentity: true,
      //是否已经有身份
      inAudit: false,
      //是否审核中
      identityName: '销售总监',
	  isSpecial: true,
      regionalManager: false,
      //是否是区域经理
      newsNum: 6,
      //新消息数量
      popAds: false,
	  shopList:[{id:'111',label:'aaa'},{id:'222',label:'bbb'},{id:'333',label:'ccc'},{id:'555',label:'ddd'}],
	  index:[0],
	  mode: 'selector',
	  
    };
  },

  onPullDownRefresh() {
    // this.getUserInfo();
    this.getNewsNum();
    this.popAds();
  },

  onShow: function (e) {
	  this.isSpecial = true;
	  this.identList = selectGM;
//     let register = wx.getStorageSync("register");
// 
//     if (register) {
//       this.getUserInfo();
//       wx.removeStorageSync("register");
//     }
// 
//     if (wx.getStorageSync("token")) {
//       this.getNewsNum();
//     }
  },
  onLoad: function (options) {

//     wx.showLoading({
//       title: '加载中'
//     });
//     let timer = setTimeout(() => {
//       wx.hideLoading();
//     }, 3000);
//     _this = this;
// 
//     if (wx.getStorageSync("token")) {
//       // this.setUserInfo();
//       // this.getUserInfo();
//       this.popAds();
//     } else {
//       wx.hideLoading();
//       User.loginByWeixin().then(res => {
//         _this.setUserInfo();
// 
//         _this.getUserInfo();
// 
//         _this.popAds();
//       }).catch(err => {
//         console.log("err=>", err);
//       });
//     }
  },
  components: {
	  mpvuePicker
  },
  props: {},
  methods: {
	    showPicker:function() {
	    	this.$refs.mpvuePicker.show();
	    			},
	    onConfirm:function(e) {
	    	this.index = e.index
			let index = e.index
			this.identityName = this.identList[this.index].label
			if (this.identList[index].id == "111"){
				this.arrList =arrListGM;
				this.isSeller = false;
			}else if (this.identList[index].id == '112'){
			 this.arrList = arrListRG;
			 this.isSeller = false;
		   }else if (this.identList[index].id == '113'){
			this.isSeller = false;
			this.arrList = arrListBuyB;
		   }else if (this.identList[index].id == '114'){
			this.isSeller = true;
			this.arrList = arrListSellB;
		   }
		},
	    			
	    onChang:function(e){
	    	this.index = e.index
	    },
	    onCancel:function(e) {
	    	console.log('onCancel')
	    	console.log(e);
	    },
	   selectChange:function(e){
	    	this.index = e.detail.value
	    },
		showSinglePicker:function() {
			console.log(this.identList)
			this.mode = 'selector'
			this.index = [0]
			this.$refs.mpvuePicker.show()
		},
		
    // 获取未读消息数量
    getNewsNum: function () {
      JsyServer.getNewsNum().then(res => {
        _this.setData({
          newsNum: res.data
        });
      }).catch(err => {
        console.log("getNewsNum=err==", res);
      });
    },
    getUserInfo: function () {
      wx.showLoading({
        title: '加载中'
      });
      wx.stopPullDownRefresh();
      JsyServer.getUserInfo().then(res => {
        // if (res.data.authority.length != 0 && res.data.authority != "EXAMINE") {
        console.log("res----", res.data);
        wx.setStorageSync("userInfo", res.data);

        _this.setUserInfo(); // }

      }).catch(err => {
        wx.hideLoading();
        console.log("getUserInfoERR=>", err);
      });
    },
    setUserInfo: function () {
      let userInfo = wx.getStorageSync("userInfo");
      this.setData({
        userInfo: userInfo
      });

      if (userInfo.authority && userInfo.authority.length == 0) {
        this.setData({
          isIdentity: false
        });
      } else if (userInfo.authority[0].name == "EXAMINE") {
        this.setData({
          isIdentity: false,
          inAudit: true
        });
      } else {
        this.setData({
          isIdentity: true
        });
        let role = userInfo.authority[0].name;

        if (role == "ROLE_SELL_DEPUTY") {
          if (userInfo.authorityOther == 7) {
            this.setData({
              identityName: '卖帮办',
              regionalManager: true,
              arrList: arrListAdmin
            });
          } else {
            this.setData({
              identityName: '卖帮办',
              regionalManager: false,
              arrList: arrListBb
            });
          }
        } else if (role == "ROLE_BUY_DEPUTY") {
          if (userInfo.authorityOther == 7) {
            this.setData({
              identityName: '买帮办',
              regionalManager: true,
              arrList: arrListAdmin
            });
          } else {
            this.setData({
              identityName: '买帮办',
              regionalManager: false,
              arrList: arrListBb
            });
          }
        } else if (role == "ROLE_BUYER") {
          this.setData({
            identityName: '买家',
            regionalManager: false,
            arrList: arrListBuyer
          });
        } else if (role == "ROLE_SELLER") {
          this.setData({
            identityName: '卖家',
            regionalManager: false,
            arrList: arrListSeller
          });
        } else if (role == "ROLE_ANALYST") {
          this.setData({
            identityName: '分析师',
            regionalManager: false,
            arrList: arrListFx
          });
        } else if (role == "ROLE_SALES_DIRECTOR") {
          this.setData({
            identityName: '销售总监',
            regionalManager: false,
            arrList: arrListAdmin
          });
        } else if (role == "FREEZE") {
          this.setData({
            regionalManager: false,
            identityName: '已冻结',
            arrList: []
          });
        }
      }

      if (userInfo.authority && userInfo.authority.length == 2 && userInfo.authority[1].name == "ROLE_MANAGER") {
        let list = this.arrList;
        list.push({
          icon: '/static/images/jinsy/examine.png',
          name: '审核管理',
          url: '/pages/jin-suo-yun/customer-admin/bond-examine'
        });
        this.setData({
          arrList: list
        });
      }

      wx.hideLoading();
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
//     userInfo: function (e) {
//       console.log(e);
// 
//       if (e.detail.errMsg.indexOf("getUserInfo:fail") != -1) {
//         console.log("用户拒绝授权");
//       } else {
//         console.log("用户接受授权");
// 
//         if (!wx.getStorageSync("userInfo")) {
//           _this.onLoad();
//         }
// 
//         wx.setStorageSync("loginOn", false);
//       }
//     },
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
	width: 512upx;
	line-height: 1;
}
.xiaoxi{
  position: absolute;
  top:30upx;
  right: 60upx;

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
  padding-right: 40upx;
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