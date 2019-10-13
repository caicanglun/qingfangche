<template>
<form @submit="sumbit">
  <view class="box box_shacow">
    <view class="flex_c box_row ">
      <view class="wid_170">联系人：</view>
      <input placeholder="请输入" name="contName" :value="contName"></input>
    </view>
    <view class="flex_c box_row ">
      <view class="wid_170">手机号码：</view>
      <input placeholder="请输入" name="contPhone" :value="contPhone" type="number"></input>
    </view>
  </view>
  <view class="fixed_bottom box_shadow_btn flex">
    <view class="btn_left" @tap="cancel">取消</view>
    <button class="btn_right" formType="submit" hover-class="none">确定</button>
  </view>
</form>
</template>

<script>
const JsyServer = require("../../../services/jsy-server.js");
let _this, _data, customerId, id;

export default {
  data() {
    return {};
  },

  onLoad: function (options) {
    console.log("options", options);
    _data = this.data;
    _this = this;
    customerId = options.userId;

    if (options.odata) {
      let odata = JSON.parse(options.odata);
      console.log(odata);
      let contName = odata.contName;
      let contPhone = odata.contPhone;

      if (odata.id) {
        id = odata.id;
      } else {
        id = "";
      }

      this.setData({
        contName,
        contPhone
      });
    }
  },
  components: {},
  props: {},
  methods: {
    sumbit: function (e) {
      let data = e.detail.value;

      if (!data.contName) {
        wx.showToast({
          title: '请输入联系人',
          icon: 'none'
        });
        return;
      }

      if (!data.contPhone) {
        wx.showToast({
          title: '请输入手机号码',
          icon: 'none'
        });
        return;
      }

      console.log("data-", data);
      data.customerId = customerId;

      if (id) {
        data.id = id;
      }

      console.log();
      JsyServer.addContacts(data).then(res => {
        if (id) {
          wx.showToast({
            title: '修改成功'
          });
        } else {
          wx.showToast({
            title: '添加成功'
          });
        }

        let timer = setTimeout(() => {
          wx.navigateBack({});
        }, 1500);
      }).catch(err => {
        console.log("err---", err);
        wx.showToast({
          title: err.data.description,
          icon: "none"
        });
      });
    },
    //点击取消。返回上一页
    cancel: function () {
      wx.navigateBack({});
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
.box{
  margin-bottom:20rpx ;
  padding:0 30rpx;
  background-color: #fff;
	font-size: 14px;
}
.box_row{
  padding: 0 10rpx;
  height: 88rpx;
  box-sizing: border-box;
  line-height: 88rpx;
  border-bottom: 1rpx solid rgba(221, 221, 221, 0.3);
  color: #333236;
}
.box_row:nth-last-child(1){
	border: none;
}
.wid_170{
	width: 170rpx;
}
</style>