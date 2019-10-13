<template>
<view>
<view class="search_top_box ">
  <view class="flex_sb">
    <view class="flex_c search_left">
      <icon type="search" size="14" style="height:14px;margin-left:40rpx;"></icon>
      <input class="search_left_input" placeholder="请输入搜索内容" @input="blurInput"></input>
    </view>
    <button class="searcb_right_btn" @tap="tapSearch">搜索</button>
  </view>
</view>

<view class="box">
	<block v-for="(item, index) in list" :key="index">
		<view class="list" :data-id="item.id" :data-name="item.name" @tap="bindSelection">{{item.name}}</view>
	</block>
</view>
</view>
</template>

<script>
const JsyServer = require("../../services/jsy-server.js");
let _this,
    type,
    pageNo = 1,
    loding = true,
    deputy;

export default {
  data() {
    return {
      list: [],
      content: ""
    };
  },

  onPullDownRefresh: function () {
    pageNo = 1;
    loding = true;
    this.getCompanyList();
  },
  onReachBottom: function () {
    this.getCompanyList();
  },
  onLoad: function (options) {
    console.log("options", options);
    type = options.type || 2;

    if (options.deputy) {
      deputy = true;
    } else {
      deputy = false;
    }

    pageNo = 1;
    _this = this;
    this.getCompanyList();
  },
  components: {},
  props: {},
  methods: {
    tapSearch: function () {
      pageNo = 1;
      loding = true;
      this.getCompanyList();
    },
    getCompanyList: function () {
      let data = {
        pageSize: 20,
        pageNo: pageNo,
        content: this.content
      };

      if (deputy) {
        let userInfo = wx.getStorageSync("userInfo");
        data.deputyId = userInfo.id;
      } else {
        data.type = type;
      }

      if (!loding || pageNo < 0) {
        return;
      }

      loding = false;
      JsyServer.getCompanyList(data).then(res => {
        console.log("res===", res);
        wx.stopPullDownRefresh();
        loding = true;
        let list = _this.list;

        if (pageNo == 1) {
          _this.setData({
            list: res.data
          });
        } else {
          _this.setData({
            list: list.concat(res.data)
          });
        }

        if (res.data.length == 20) {
          pageNo++;
        } else {
          pageNo = -1;
        }
      }).catch(err => {
        wx.stopPullDownRefresh();
        loding = true;
        console.log("Err==", err);
      });
    },
    blurInput: function (e) {
      this.setData({
        content: e.detail.value
      });
    },
    bindSelection: function (e) {
      let id = e.currentTarget.dataset.id;
      let name = e.currentTarget.dataset.name;
      let pages = getCurrentPages();
      let prevPage = pages[pages.length - 2]; // 上一个页面

      prevPage.setData({
        customerId: id,
        corporateName: name
      });
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
	margin: 20rpx;
	background-color: #fff;
	padding: 0 20rpx;
	font-size: 16px;
	font-weight: bold;
}
.list{
	padding: 27rpx 10rpx;
	border-bottom: 1rpx solid #ddd;
}
</style>