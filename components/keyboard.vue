<template>
<view>
<view class="keyboard_modal" v-if="keyboardState" data-value="top" @tap="bindKeyboard"></view>
<view class="keyboard_box" v-if="keyboardState">
  <block v-for="(item, index) in keyboardData" :key="index">
    <view class="keyboard_flex">
      <block v-for="(itemkeyboard, index2) in item" :key="index2">
        <view :class="'keyboard_btn ' + itemkeyboard.css" :data-value="itemkeyboard.name" @tap="bindKeyboard">
          <image src="/images/component/shouqijianpan.png" v-if="itemkeyboard.name=='top'" mode="aspectFit" class="keyobard_top_img"></image>
          <view class="key_flex_c" v-else-if="itemkeyboard.name=='删除'">
            <text>{{itemkeyboard.name}}</text>
            <image src="/images/component/fanhui.png" mode="aspectFit" class="keyobard_fanhui_img"></image>
          </view>
          <text v-else> {{itemkeyboard.name}}</text>
        </view>
      </block>
    </view>
  </block>
</view>
</view>
</template>

<script>

export default {
  data() {
    return {
      keyboardData: [[{
        name: "G/M2",
        css: "fs_k28"
      }, {
        name: "G/M",
        css: "fs_k28"
      }, {
        name: "cm",
        css: "fs_k28"
      }, {
        name: "梭",
        css: "fs_k28"
      }, {
        name: "条",
        css: "fs_k28"
      }, {
        name: "删除",
        css: "css_delete"
      }, {
        name: "top",
        css: "css_top"
      }], [{
        name: "包覆",
        css: "fs_k28"
      }, {
        name: "ATY",
        css: "fs_k28"
      }, {
        name: "DTY",
        css: "fs_k28"
      }, {
        name: "FDY",
        css: "fs_k28"
      }, {
        name: "ITY",
        css: "fs_k28"
      }, {
        name: "1",
        css: "fs_k32"
      }, {
        name: "2",
        css: "fs_k32"
      }, {
        name: "3",
        css: "fs_k32"
      }], [{
        name: "POY",
        css: "fs_k28"
      }, {
        name: "PWY",
        css: "fs_k28"
      }, {
        name: "SP",
        css: "fs_k28"
      }, {
        name: "T/S",
        css: "fs_k28"
      }, {
        name: "A",
        css: "fs_k28"
      }, {
        name: "4",
        css: "fs_k32"
      }, {
        name: "5",
        css: "fs_k32"
      }, {
        name: "6",
        css: "fs_k32"
      }], [{
        name: "D",
        css: "fs_k28"
      }, {
        name: "F",
        css: "fs_k28"
      }, {
        name: "N",
        css: "fs_k28"
      }, {
        name: "T",
        css: "fs_k28"
      }, {
        name: "Z",
        css: "fs_k28"
      }, {
        name: "7",
        css: "fs_k32"
      }, {
        name: "8",
        css: "fs_k32"
      }, {
        name: "9",
        css: "fs_k32"
      }], [{
        name: "S",
        css: "fs_k28"
      }, {
        name: "R",
        css: "fs_k28"
      }, {
        name: "C",
        css: "fs_k28"
      }, {
        name: "JC",
        css: "fs_k28"
      }, {
        name: "CVC",
        css: "fs_k28"
      }, {
        name: "0",
        css: "fs_k32"
      }, {
        name: "+",
        css: "fs_k32"
      }, {
        name: "*",
        css: "fs_k32"
      }], [{
        name: "环锭纺",
        css: ""
      }, {
        name: "紧密纺",
        css: ""
      }, {
        name: "气流纺OE",
        css: "fs_k24"
      }, {
        name: "赛络纺",
        css: ""
      }, {
        name: "涡流纺",
        css: ""
      }, {
        name: "/",
        css: "fs_k32"
      }, {
        name: "(",
        css: "fs_k32"
      }, {
        name: ")",
        css: "fs_k32"
      }], [{
        name: "消光",
        css: ""
      }, {
        name: "半光",
        css: ""
      }, {
        name: "有光",
        css: ""
      }, {
        name: "空格",
        css: "css_blank"
      }, {
        name: "%",
        css: "fs_k32"
      }, {
        name: ".",
        css: "fs_k32"
      }]]
    };
  },

  components: {},
  props: {
    keyboardState: Boolean
  },
  methods: {
    // 私有数据，可用于模板渲染
    // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
    attached() {},

    // 此处attached的声明会被lifetimes字段中的声明覆盖
    ready() {},

    bindKeyboard(e) {
      this.$emit('Keyboard', e.currentTarget.dataset.value);
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
.keyboard_modal{
	z-index: 9998;
	width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
}
.keyboard_box{
  position: fixed;
  bottom: 0;
  background-color:#CFD4DA;
  padding: 20rpx 20rpx 10rpx 20rpx;
  box-shadow: 0 5rpx 10rpx 0 rgba(0, 0, 0, 0.1);
  color:#333236;
  z-index: 9999;
}
.keyboard_flex{
  display: flex;
  justify-content: space-between;
}
.keyboard_btn{
  width: 80rpx;
  font-size: 24rpx;
  text-align: center;
  border-radius: 8rpx;
  height: 80rpx;
  margin-bottom: 10rpx;
  margin-right: 11rpx;
  background-color: #fff;
  line-height:80rpx;
  box-shadow: 0 4rpx 8rpx 0 rgba(0, 0, 0, 0.3);
  font-weight: bold;
  box-sizing: border-box;
}
.fs_k24{
  line-height: 1;
  padding: 16rpx 0;
}
.fs_k28{
  font-size: 28rpx;
}
.css_delete{
  width: 170rpx;
  background-color: #A7AFBC;
  font-size: 28rpx;
}
.css_top{
  background-color: #A7AFBC;
}
.fs_k32{
  background-color: #333236;
  color:#fff;
  font-size: 32rpx;
}
.css_blank{
  width: 260rpx;
  font-size: 24rpx;
}
.keyobard_top_img{
  width: 60rpx;
  height: 45px;
  margin: atuo;
}
.key_flex_c{
  display: flex;
  justify-content: center;
  align-items: center;
}
.keyobard_fanhui_img{
  width: 60rpx;
  height: 60rpx;
  margin-left:10rpx; 
}
</style>