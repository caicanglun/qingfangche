<template>
<view class="back_top">
  <text class="fs_22">请选择身份</text>
  <view class="btn" @tap="toRegisterPage" data-type="2">我是买家</view>
  <view class="btn" @tap="toRegisterPage" data-type="4">我是卖家</view>
  <view class="btn" @tap="toInsideRegisterPage">内部人员</view>
</view>
</template>

<script>

export default {
  data() {
    return {};
  },

  onLoad: function (options) {},
  components: {},
  props: {},
  methods: {
    toRegisterPage: function (e) {
      let type = e.currentTarget.dataset.type;
	  console.log(type);
      wx.navigateTo({
        url: '/pages/jin-suo-yun/register?type=' + type
      });
    },
    toInsideRegisterPage: function () {
      wx.navigateTo({
        url: '/pages/jin-suo-yun/register-inside'
      });
    }
    
  }
};
</script>
<style>
.back_top{
  height: 842upx;
  width: 750upx;
  box-sizing: border-box;
  background-image:url(https://api.qingfangche.net/api/common/picture/201904221111003/png/images/download);
  background-repeat:no-repeat;
  background-position:center top;
  background-size:cover;
  text-align: center;
  color: #fff;
  padding-top:120upx; 
}
.fs_22{
  font-size: 22px;
  margin-bottom: 80upx;
}
.btn{
  width: 406upx;
  line-height: 96upx;
  font-size: 18px;
  text-align: center;
  background: #EE603F;
  border-radius: 6upx;
  margin: 70upx auto 0;
}
</style>