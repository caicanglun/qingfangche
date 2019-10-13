<template>
<view>
<form @submit="formSubmit" report-submit="true">
  <view class="box box_shadow">
    <view class="flex_sb_c box_row" @tap="toChoosingCompany">
      <view class="wid_170">所属公司</view>
			<!-- <view class="select_btn" v-if="!corporateName">请选择</view> ccl-->
			<image class='i-next' src="../../static/images/next.png" v-if="!corporateName"></image>
      <input v-if="corporateName" name="corporateName" :value="corporateName" class="box_input" placeholder="请输入公司名称" disabled></input>
    </view>
    <view class="flex_c box_row">
      <view class="wid_170">姓名</view>
      <input name="contName" :value="contName" class="box_input" placeholder="请输入姓名"></input>
    </view>
    <view class="flex_c box_row">
      <view class="wid_170">手机号</view>
      <input name="contPhone" :value="contPhone" class="box_input" placeholder="请输入手机号" @input="bindTel"></input>
    </view>
    <view class="flex_sb_c box_row">
      <view class="flex_c">
        <view class="wid_170">验证码</view>
        <input name="code" maxlength="4" class="code_input" placeholder="请输入验证码"></input>
      </view>
			<view class="code_btn" @tap="validateFn" v-if="time==-1">发送验证码</view>
			<view class="success_btn" v-if="time>-1">{{time}}s后重新获取</view>
    </view>
    <!-- <view class='flex_sb_c box_row'>
      <view>行业</view>
      <input name="industry" value='{{scopesValue}}' bindtap='bindScope' class='box_input' placeholder='请选择行业(多选)' disabled placeholder-style="text-algin:right"></input>
    </view>
    <view class='flex_sb_c box_row border_none'>
      <view>城市</view>
      <picker mode="region" bindchange="bindRegionChange" value="{{region}}" custom-item="{{customItem}}">
        <input name="city" value="{{region[1]}}" class='box_input' placeholder='请选择城市' placeholder-style="text-algin:right"disabled></input>
      </picker>
    </view> -->
  </view>
  <view class="fixed_bottom box_shadow_btn flex">
    <view class="btn_left" @tap="cancel">取消</view>
    <button class="btn_right" hover-class="none" formType="submit">确定</button>
  </view>
</form>

<view class="scope_mask" v-if="isScope" @tap="bindScope"></view>
<view class="scope_box" v-if="isScope">
  <view>请选择行业</view>
  <view class="secope_padding">
    <block v-for="(item, index) in scopesData" :key="index">
      <view class="flex_sb">
        <block v-for="(itemName, index2) in item" :key="index2">
          <view :class="'scope_option ' + (itemName.active?'scope_action':'')" @tap="bindScopeOption" :data-one="oIndex" :data-two="tIndex">{{itemName.item}}</view>
        </block>
      </view>
    </block>
  </view>
  <view class="scope_btn" @tap="bindScope" data-type="1">确定</view>
</view>
</view>
</template>

<script>
const JsyServer = require("services/jsy-server.js");
let type, _this;

export default {
  data() {
    return {
      scopesData: [[{
        item: '棉花',
        num: 1 << 0,
        active: false
      }, {
        item: '化纤',
        num: 1 << 1,
        active: false
      }, {
        item: '纱线',
        num: 1 << 2,
        active: false
      }], [{
        item: '坯布',
        num: 1 << 3,
        active: false
      }, {
        item: '印染',
        num: 1 << 4,
        active: false
      }, {
        item: '家纺',
        num: 1 << 5,
        active: false
      }], [{
        item: '色织',
        num: 1 << 6,
        active: false
      }, {
        item: '梭织',
        num: 1 << 7,
        active: false
      }, {
        item: '针织',
        num: 1 << 8,
        active: false
      }], [{
        item: '面料',
        num: 1 << 9,
        active: false
      }, {
        item: '辅料',
        num: 1 << 10,
        active: false
      }, {
        item: '服饰',
        num: 1 << 11,
        active: false
      }], [{
        item: '机械',
        num: 1 << 12,
        active: false
      }, {
        item: '配件',
        num: 1 << 13,
        active: false
      }, {
        item: '纺织厂',
        num: 1 << 14,
        active: false
      }], [{
        item: '加工厂',
        num: 1 << 15,
        active: false
      }, {
        item: '服装厂',
        num: 1 << 16,
        active: false
      }, {
        item: '其他',
        num: 1 << 17,
        active: false
      }]],
      isScope: false,
      //选择行业模态框
      scopesValue: '',
      //选中的行业
      region: '',
      //选中的城市
      contPhone: '',
      //电话号码
      contName: '',
      //姓名
      corporateName: '',
      //公司名称
      customerId: '',
      //公司id
      time: -1 //倒计时时间

    };
  },

  onLoad: function (options) {
    type = options.type;
    _this = this;
    let userInfo = wx.getStorageSync("userInfo");
    this.setData({
      contPhone: userInfo.phone,
      contName: userInfo.name
    });
  },
  components: {},
  props: {},
  methods: {
    choiceIndustry: function (e) {
      this.setData({
        industryIndex: e.detail.value
      });
    },
    bindScope: function (e) {
      if (e.currentTarget.dataset.type == 1) {
        let scopesData = this.scopesData;
        let scopesValue = "";
        scopesData.map(item => {
          item.map(items => {
            if (items.active) {
              if (scopesValue) {
                scopesValue = scopesValue + ',' + items.item;
              } else {
                scopesValue += items.item;
              }
            }
          });
        });
        this.setData({
          scopesValue: scopesValue
        });
      }

      this.setData({
        isScope: !this.isScope
      });
    },
    // 点击所选行业
    bindScopeOption: function (e) {
      let one = e.currentTarget.dataset.one,
          two = e.currentTarget.dataset.two,
          nowActive = this.scopesData[one][two].active;
      this.setData({
        [`scopesData[${one}][${two}].active`]: !nowActive
      });
    },
    // 选择城市
    bindRegionChange: function (e) {
      this.setData({
        region: e.detail.value
      });
    },
    // 提交信息
    formSubmit: function (e) {
      let data = e.detail.value;
      let code = data.code;
      data.type = type;
      data.customerId = this.customerId;
      delete data.code;

      if (!data.corporateName) {
        wx.showToast({
          title: '请选择所属公司'
        });
        return;
      } else if (!data.contName) {
        wx.showToast({
          title: '请输入姓名'
        });
        return;
      } else if (!data.contPhone) {
        wx.showToast({
          title: '请输入手机号'
        });
        return;
      } else if (!code) {
        wx.showToast({
          title: '请输入验证码'
        });
        return;
      }

      JsyServer.userRegistration(data, code).then(res => {
        wx.showToast({
          title: '注册成功'
        });
        let timer = setTimeout(() => {
          wx.setStorageSync("register", true);
          wx.switchTab({
            url: '/pages/tab-user/index'
          });
        }, 1500);
      }).catch(err => {
        wx.showToast({
          title: err.data.description,
          icon: 'none'
        });
      });
    },
    // 获取手机号
    bindTel: function (e) {
      this.setData({
        contPhone: e.detail.value
      });
    },
    // 获取验证码
    validateFn: function (e) {
      let data = {
        phone: this.contPhone
      };
      JsyServer.getVerificationCode(data).then(res => {
        wx.showToast({
          title: '发送成功',
          icon: 'none'
        });

        _this.setData({
          time: 60
        });

        _this.downTime();
      }).catch(err => {
        wx.showToast({
          title: '发送验证码失败',
          icon: 'none'
        });
      });
    },
    //倒计时
    downTime: function () {
      let backTime = _this.time;
      let backInter = setInterval(() => {
        backTime--;

        _this.setData({
          time: backTime
        });

        if (backTime <= 0) {
          clearInterval(backInter);

          _this.setData({
            time: -1
          });

          return false;
        }
      }, 1000);
    },
    toChoosingCompany: function () {
      wx.navigateTo({
        url: '/pages/jin-suo-yun/choosing-company?type=' + type
      });
    },
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
page {
  font-size: 14px;
}

.box {
  margin-bottom: 20upx;
  padding: 0 30upx;
  background-color: #fff;
}

.box_row {
  padding: 0 10upx;
  height: 88upx;
  box-sizing: border-box;
  line-height: 88upx;
  border-bottom: 1upx solid #ccc;
  color: #333236;
}
.box_row:nth-last-child(1){
	 border: none;
}

.box_input {
  width: 450upx;
}
.code_input{
  width: 180upx;
}
.code_btn{
  width: 200upx;
  background-color: #ee603f;
  color: #fff;
  text-align: center;
	line-height: 48upx;
	height: 48upx;
	border-radius: 6upx;
}
.success_btn{
	line-height: 48upx;
	height: 48upx;
  width: 200upx;
  background-color: #ccc;
  text-align: center;
	border-radius: 6upx;
}
.color_888 {
  color: #888890;
}

.select_box {
  border: 2upx solid #ee603f;
  padding: 0 20upx;
  line-height: 40upx;
  border-radius: 6upx;
}

.select_img {
  width: 14upx;
  height: 22upx;
  margin-left: 20upx;
}

.scope_box {
  overflow: hidden;
  position: fixed;
  top: 50%;
  left: 0;
  right: 0;
  width: 86%;
  margin: 0 auto;
  z-index: 9999;
  background-color: #fff;
  border-radius: 20upx;
  text-align: center;
  box-sizing: border-box;
  padding-top:30upx;
  transform:translateY(-50%);

}

.scope_mask {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: #000;
  opacity: 0.5;
  overflow: hidden;
  z-index: 9000;
  color: #fff;
}
.secope_padding{
  padding: 30upx
}
.scope_option{
  width: 160upx;
  line-height: 70upx;
  border: 1upx solid #ccc;
  border-radius: 70upx;
  margin-top: 20upx;
  height: 70upx;
  box-sizing: border-box;
}
.scope_btn{
  line-height: 90upx;
  background-color: #ee603f;
  color: #fff;
  font-size: 18px;
 
}
.i-next{
	width: 12upx;
	height: 20upx;
}


.scope_action{
  color:#fff;
  background-color: #ee603f;
  border:none;
}
.wid_170{
	width: 170upx;
}
.select_btn{
  width: 152upx;
	text-align: center;
  color: #fff;
	background-color: #EE603F;
  line-height: 48upx;
  border-radius: 6upx;
	font-size: 14px;
}
</style>