<template>
<view>
<view class="search flex_sb fs_12">
  <view class="flex_c search_input">
    <icon type="search" size="14" style="height:14px;margin-left:40rpx;"></icon>
    <input placeholder="搜索" placeholder-style="color:#9B9B9B" confirm-type="search" @confirm="bindSearch"></input>
  </view>
  <view :class="'box_shadow search_btn ' + (bindSelect?'bind_searach':'')" @tap="bindSelect" :style="'height:' + (bindSelect?(selectContent.length-1)*46+56:56) + 'rpx'">
    <view class="flex selection ">
      <view>
        <block v-for="(item, index) in selectContent" :key="index">
          <view :class="(index>0?'lh_44':'color_ee603f font_we_bold')" @tap="bindSelectContent" :data-index="index">{{item.name}}</view>
        </block>
      </view>
      <image src="/static/images/qingfc/application/select_bind.png" mode="aspectFit"></image>
    </view>
  </view>
</view>

<block v-for="(item, index) in list" :key="index">
  <view class="box box_shadow flex_c">
    <view class="no_pitch" v-if="index!=optionIndex" @tap="tapPitchOn" :data-index="index"></view>
    <image src="/static/images/jinsy/pitch_on.png" v-if="index==optionIndex" mode="aspectFill" class="pitch_on" @tap="tapPitchOn" :data-index="index"></image>
    <image :src="item.avatar||'/static/images/hand_img.png'" mode="aspectFill" class="list_img"></image>
    <view class="flex_line_sb height_100">
      <view class="flex_sb width_490">
        <view>
          <text class="fs_14 font_we_bold width_200">{{item.name}}</text>
          <text class="fff_50">{{item.areaName}}</text>
        </view>
        <view class="border_text">区域经理</view>
      </view>
      <view>
        <text class="width_200">管理客户{{item.customerNum}}人</text>
        <text>管理帮办{{item.customerNum}}人</text>
      </view>
    </view>
  </view>
</block>

<view class="fixed_bottom flex">
  <view class="btn_left" @tap="cancel">取消</view>
  <view class="btn_right" @tap="confirm">确定</view>
</view>
</view>
</template>

<script>
const JsyServer = require("../../../services/jsy-server.js");
let _this,
    ids,
    type = 0,
    adding = true;

export default {
  data() {
    return {
      selectContent: [],
      bindSelect: false,
      //是否点开搜素类别
      list: [],
      optionIndex: 0
    };
  },

  onPullDownRefresh: function () {
    this.getManagerList({});
  },
  onLoad: function (options) {
    adding = true;
    _this = this;
    let idList = JSON.parse(options.optionList);
    ids = idList.join(",");
    // type = options.type || 0;
    this.getManagerList({});
    this.getAreaList();
  },
  components: {},
  props: {},
  methods: {
    // 获得区域列表
    getAreaList: function () {
      JsyServer.getAreaList().then(res => {
        let selectContent = [{
          name: "全部区域",
          id: false
        }].concat(res.data);
        console.log("selectContent", selectContent);
        this.setData({
          selectContent: selectContent
        });
      }).catch(err => {
        console.log("err=>", err);
      });
    },
    // 获取区域经理列表
    getManagerList: function (data) {
      // JsyServer.getManagerList(data).then(res => {
      //   wx.stopPullDownRefresh();

      //   _this.setData({
      //     list: res.data
      //   });

      //   console.log("res---", res);
      // }).catch(err => {
      //   console.log("err---", err);
      // });
	  this.list = [{name:"陈英萍",customerNum: 848,id:"3sff2r29f923fjsjkdf2323r3",deputyNum: 2,areaName: "石狮"},
				  {name:"陈英萍",customerNum: 848,id:"3sff2r29f923fjsjkdf2323r3",deputyNum: 2,areaName: "石狮"},
				  {name:"陈英萍",customerNum: 848,id:"3sff2r29f923fjsjkdf2323r3",deputyNum: 2,areaName: "石狮"},
				  {name:"陈英萍",customerNum: 848,id:"3sff2r29f923fjsjkdf2323r3",deputyNum: 2,areaName: "石狮"},
				  {name:"陈英萍",customerNum: 848,id:"3sff2r29f923fjsjkdf2323r3",deputyNum: 2,areaName: "石狮"},
				  {name:"陈英萍",customerNum: 848,id:"3sff2r29f923fjsjkdf2323r3",deputyNum: 2,areaName: "石狮"},
				  {name:"陈英萍",customerNum: 848,id:"3sff2r29f923fjsjkdf2323r3",deputyNum: 2,areaName: "石狮"}]
    },
    bindSearch: function (e) {
      let content = e.detail.value;
      let areaid = this.selectContent[0].id;
      let data = {
        content
      };

      if (areaid) {
        data.areaid = areaid;
      }

      this.getManagerList(data);
    },
    // 点击选项框
    bindSelect: function () {
      this.setData({
        bindSelect: !this.bindSelect
      });
    },
    // 点击选项框中的选项(客户列表)
    bindSelectContent: function (e) {
      let index = e.currentTarget.dataset.index;
      let selectContent = this.selectContent;
      let obj = selectContent[0];
      selectContent[0] = selectContent[index];
      selectContent[index] = obj;
      this.setData({
        selectContent: selectContent
      });
      if (index == 0) return;

      if (selectContent[0].id) {
        this.getManagerList({
          areaid: selectContent[0].id
        });
      } else {
        this.getManagerList({});
      }
    },
    tapPitchOn: function (e) {
      let index = e.currentTarget.dataset.index;
      this.setData({
        optionIndex: index
      });
    },
    confirm: function () {
      let index = this.optionIndex;
      let managerid = this.list[index].id;
      let data = {
        managerid,
        ids
      };
      console.log(ids, managerid);

      if (!adding) {
        return;
      }

      if (type == 0) {
        this.allocationDeputy(data);
      } else {
        this.allocationCustomer(data);
      }
    },
    // 分配帮办
    allocationDeputy: function (data) {
      adding = false;
      JsyServer.allocationDeputy(data).then(res => {
        let pages = getCurrentPages();
        let prevPage = pages[pages.length - 2];
        prevPage.setData({
          setOver: true
        });
        wx.showToast({
          title: '分配成功'
        });
        let timer = setTimeout(() => {
          wx.navigateBack({});
        }, 1000);
      }).catch(err => {
        adding = true;
        wx.showToast({
          title: '分配失败',
          icon: 'none'
        });
      });
    },
    // 分配客户
    allocationCustomer: function (data) {
      adding = false;
      JsyServer.allocationCustomer(data).then(res => {
        let pages = getCurrentPages();
        let prevPage = pages[pages.length - 2];
        prevPage.setData({
          setOver: true
        });
        wx.showToast({
          title: '分配成功'
        });
        let timer = setTimeout(() => {
          wx.navigateBack({});
        }, 1000);
      }).catch(err => {
        adding = true;
        wx.showToast({
          title: '分配失败',
          icon: 'none'
        });
      });
    },
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
.search{
  background-color: #EE603F;
  height: 74rpx;
  padding: 18rpx 20rpx 0 30rpx;
}
.search_input{
  background-color: #fff;
  width: 466rpx;
  height: 56rpx;
  border-radius: 28rpx;
  line-height: 56rpx;
}
.search_input>input{
  margin-left: 18rpx;
  width: 350rpx;
}
.search_btn{
  width: 194rpx;
  background-color: #fff;
  border-radius: 28rpx;
  display: flex;
  justify-content: center;
  color:#9B9B9B;
  height: 56rpx;
  flex-wrap: wrap;
  position: relative;
  z-index: 99;
  overflow: hidden;
  transition: 0.2s
}
.bind_searach{
  height: 148rpx;
}
.selection{
  line-height: 56rpx;
}
.search_btn image{
  width: 18rpx;
  height: 28rpx;
  margin-left: 16rpx;
  margin-top: 14rpx
}
.lh_44{
  line-height: 44rpx;
}
.box{
  background-color: #fff;
  margin: 20rpx;
  padding:  10rpx 20rpx;
  border-radius: 6rpx;
  font-size: 12px;
}
.no_pitch{
   width: 40rpx;
   height: 40rpx;
   border-radius: 40rpx;
   border: 1rpx solid #979797;
   background-color: #fff;
   margin-right: 20rpx;
   box-sizing: border-box;
}
.pitch_on{
  width: 40rpx;
  height: 40rpx;
  border-radius: 40rpx;
  margin-right: 20rpx;
}
.list_img{
  width: 100rpx;
  height: 100rpx;
  border-radius: 100rpx;
  margin-right: 20rpx;
}
.height_100{
  height: 100rpx;
}
.width_200{
  display: inline-block;
  width: 200rpx;
}
.border_text{
  border: 1rpx solid #EE603F;
  line-height: 38rpx;
  height: 38rpx;
  width: 136rpx;
  text-align: center;
  box-sizing: 38rpx;
  border-radius: 38rpx;
  color: #EE603F;
}
.width_490{
  width:490rpx;
}
</style>