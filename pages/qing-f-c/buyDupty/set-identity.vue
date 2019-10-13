<template>
<view>
<view class="box box_shadow">
  <view class="flex_c box_row ">
    <view class="width_194 color_888">身份：</view>
    <picker @change="optIdentity" :range="identity" :value="identityIndex" >
      <view :class="(identityIndex==-1?'select_box':'')">{{identityIndex==-1?'请选择':identity[identityIndex]}}</view>
    </picker>
		<view>{{identity[identityIndex]}}</view>
  </view>
  <view class="flex_c box_row ">
    <view class="width_194">模式认可度：</view>
    <view class="flex_c">
      <block v-for="(item, index) in modelArr" :key="index">
        <view :class="'unit ' + (index==0?'borderleft':'') + ' ' + (index==modelArr.length-1?'borderright':'') + ' ' + (modelIndex==index?'unitselect':'unitunselect')" @tap="bindModel" :data-index="index">{{item}}</view>
      </block>
    </view>
  </view>
  <view class="flex_c box_row ">
    <view class="width_194">性格特点：</view>
    <picker @change="optCharacter" :range="character" :value="characterIndex">
      <view :class="(characterIndex==-1?'select_box':'width_466 text-overflow')">{{characterIndex==-1?"请选择":character[characterIndex]}}</view>
    </picker>
  </view>
  <view class="flex_c box_row ">
    <view class="width_194">经营特征：</view>
    <picker @change="optManagement" :range="management" :value="managementIndex">
      <view :class="(managementIndex==-1?'select_box':'')">{{managementIndex==-1?"请选择":management[managementIndex]}}</view>
    </picker>
  </view>
  <view class="flex_c box_row ">
    <view class="width_194">产品价格：</view>
    <picker @change="optProductPrice" :range="productPrice" :value="productPriceIndex">
      <view :class="(productPriceIndex==-1?'select_box':'')">{{productPriceIndex==-1?"请选择":productPrice[productPriceIndex]}}</view>
    </picker>
  </view>
  <view class="flex_c box_row ">
    <view class="width_194">价格敏感度：</view>
    <view class="flex_c">
      <block v-for="(item, index) in priceSensitivity" :key="index">
        <view :class="'unit ' + (index==0?'borderleft':'') + ' ' + (index==priceSensitivity.length-1?'borderright':'') + ' ' + (priceSensitivityIndex==index?'unitselect':'unitunselect')" @tap="optPriceSensitivity" :data-index="index">{{item}}</view>
      </block>
    </view>
  </view>
  <view class="flex_c box_row">
    <view class="width_194">性价比思维：</view>
    <picker @change="optCostPerformance" :range="costPerformance" :value="costPerformanceIndex">
      <view :class="(costPerformanceIndex==-1?'select_box':'')">{{costPerformanceIndex==-1?"请选择":costPerformance[costPerformanceIndex]}}</view>
    </picker>
  </view>
  <view class="flex_c box_row ">
    <view class="width_194">渠道状况：</view>
    <picker @change="optChannel" :range="channel" :value="channelIndex">
      <view :class="(channelIndex==-1?'select_box':'width_466 text-overflow')">{{channelIndex==-1?"请选择":channel[channelIndex]}}</view>
    </picker>
  </view>
	<view class="flex_c box_row border_none">
    <view class="width_194">经营理念：</view>
    <picker @change="optManagementIdeaIndex" :range="managementIdea" :value="managementIdeaIndex">
      <view :class="(managementIdeaIndex==-1?'select_box':'text_over') + ' '">{{managementIdeaIndex==-1?"请选择":managementIdea[managementIdeaIndex]}}</view>
    </picker>
  </view>
  <view class="flex_c box_row border_none">
    <view class="width_194">发展潜力：</view>
    <picker @change="optPotential" :range="potential" :value="potentialIndex">
      <view :class="(potentialIndex==-1?'select_box':'text_over') + ' '">{{potentialIndex==-1?"请选择":potential[potentialIndex]}}</view>
    </picker>
  </view>
</view>

<view class="fixed_bottom box_shadow_btn flex">
  <view class="btn_left" @tap="cancel">取消</view>
  <view class="btn_right" @tap="sumbit">确定</view>
</view>
</view>
</template>

<script>
const JsyServer = require("../../../services/jsy-server.js");
let customerId, id, _data, _this;
let characterSeller = ["处事随和/豪爽/讲道理/易相处/易沟通", "处事强势/苛刻/斤斤计较/不易沟通相处"];
let managementSeller = ["有布局有规划经营", "传统保守经营"];
let channelSeller = ["原有销售渠道较宽，销路较多较好", "原有销售渠道较窄，销路较少"];

export default {
  data() {
    return {
      //身份
      identity: ["老板", "亲戚", "雇员"],
      identityIndex: -1,
      // 性格特点
      character: ["温和", "计较", "认真", "诚信", "暴躁", "忽悠", "粗心"],
      characterIndex: -1,
      // 经营特征
      management: ["灵活", "保守", "爱冒险"],
      managementIndex: -1,
      // 价格敏感度1111
      priceSensitivity: ["高", "中", "低"],
      priceSensitivityIndex: 0,
      // 性价比思维
      costPerformance: ["以质量为上/选性价比为主", "以价格为上/质量过关即可"],
      costPerformanceIndex: -1,
      // 渠道状况
      channel: ["原有采购渠道较窄,优势不大", "原有采购渠道较宽,优势较大"],
      channelIndex: -1,
      // 发展潜力
      potential: ["经营者/老板格局思维较高，公司发展潜力度大", "经营者/老板格局思维一般，公司发展潜力一般"],
      potentialIndex: -1,
      isBuyer: true,
      //true买家，false卖家
      modelArr: ["较高", "较低"],
      modelIndex: 0,
      productPrice: ["在同类工厂里有性价比（合理）", "在同类工厂里偏高"],
      productPriceIndex: -1,
      managementIdea: ["以质量和服务为上", "冲销路/做短期合作/不注重服务"],
      managementIdeaIndex: -1
    };
  },

  onLoad: function (options) {
    customerId = options.userId;
    id = options.id;
    _data = this.data;
    _this = this;
    let isBuyer = options.type == 2 ? true : false;

    if (!isBuyer) {
      this.setData({
        isBuyer,
        identityIndex: 0,
        character: characterSeller,
        management: managementSeller,
        channel: channelSeller
      });
    }

    if (options.data) {
      this.setOdata(JSON.parse(options.data));
    }
  },
  components: {},
  props: {},
  methods: {
    // 设置初始数据
    setOdata: function (oData) {
      _data.identity.map((item, index) => {
        if (item == oData.identity) {
          _this.setData({
            identityIndex: index
          });
        }
      });

      _data.character.map((item, index) => {
        if (item == oData.characterTraits) {
          _this.setData({
            characterIndex: index
          });
        }
      });

      _data.management.map((item, index) => {
        if (item == oData.managementState) {
          _this.setData({
            managementIndex: index
          });
        }
      });

      _data.priceSensitivity.map((item, index) => {
        if (item == oData.priceSensitivity) {
          _this.setData({
            priceSensitivityIndex: index
          });
        }
      });

      _data.costPerformance.map((item, index) => {
        if (item == oData.costEffective) {
          _this.setData({
            costPerformanceIndex: index
          });
        }
      });

      _data.channel.map((item, index) => {
        if (item == oData.channelStatus) {
          _this.setData({
            channelIndex: index
          });
        }
      });

      _data.potential.map((item, index) => {
        if (item == oData.developmentPotential) {
          _this.setData({
            potentialIndex: index
          });
        }
      });

      _data.modelArr.map((item, index) => {
        if (item == oData.modelAccreditation) {
          _this.setData({
            modelIndex: index
          });
        }
      });

      _data.productPrice.map((item, index) => {
        if (item == oData.productPrice) {
          _this.setData({
            productPriceIndex: index
          });
        }
      });

      _data.managementIdea.map((item, index) => {
        if (item == oData.managementIdea) {
          _this.setData({
            managementIdeaIndex: index
          });
        }
      });
    },
    // 选择身份
    optIdentity: function (e) {
      this.setData({
        identityIndex: e.detail.value
      });
    },
    // 模式认可度
    bindModel: function (e) {
      this.setData({
        modelIndex: e.currentTarget.dataset.index
      });
    },
    // 产品价格
    optProductPrice: function (e) {
      this.setData({
        productPriceIndex: e.detail.value
      });
    },
    // 经验理念
    optManagementIdeaIndex: function (e) {
      this.setData({
        managementIdeaIndex: e.detail.value
      });
    },
    // 选择性格特点
    optCharacter: function (e) {
      this.setData({
        characterIndex: e.detail.value
      });
    },
    // 选择经营特征
    optManagement: function (e) {
      this.setData({
        managementIndex: e.detail.value
      });
    },
    // 选择价格敏感度
    optPriceSensitivity: function (e) {
      let index = e.currentTarget.dataset.index;
      this.setData({
        priceSensitivityIndex: index
      });
    },
    // 选择性价比思维
    optCostPerformance: function (e) {
      this.setData({
        costPerformanceIndex: e.detail.value
      });
    },
    // 选择 渠道状况
    optChannel: function (e) {
      this.setData({
        channelIndex: e.detail.value
      });
    },
    //选择品质定位
    optPotential: function (e) {
      this.setData({
        potentialIndex: e.detail.value
      });
    },
    //点击取消。返回上一页
    cancel: function () {
      wx.navigateBack({});
    },
    //点击确定，提交数据
    sumbit: function () {
      let data = {
        customerId: customerId
      };

      let _data = this;

      if (_data.identityIndex > -1) {
        data.identity = _data.identity[_data.identityIndex];
      }

      if (_data.characterIndex > -1) {
        data.characterTraits = _data.character[_data.characterIndex];
      }

      if (_data.managementIndex > -1) {
        data.managementState = _data.management[_data.managementIndex];
      }

      if (_data.channelIndex > -1) {
        data.channelStatus = _data.channel[_data.channelIndex];
      }

      if (id) {
        data.id = id;
      }

      if (this.isBuyer) {
        data.priceSensitivity = _data.priceSensitivity[_data.priceSensitivityIndex];

        if (_data.costPerformanceIndex > -1) {
          data.costEffective = _data.costPerformance[_data.costPerformanceIndex];
        }

        if (_data.potentialIndex > -1) {
          data.developmentPotential = _data.potential[_data.potentialIndex];
        }
      } else {
        data.modelAccreditation = _data.modelArr[_data.modelIndex];

        if (_data.productPriceIndex > -1) {
          data.productPrice = _data.productPrice[_data.productPriceIndex];
        }

        if (_data.managementIdeaIndex > -1) {
          data.managementIdea = _data.managementIdea[_data.managementIdeaIndex];
        }
      }

      console.log(data);
      JsyServer.setIdentity(data).then(res => {
        wx.showToast({
          title: '设置成功'
        });
        let timer = setTimeout(() => {
          wx.navigateBack({});
        }, 2000);
      }).catch(err => {
        wx.showToast({
          title: '设置身份特征失败',
          icon: 'none'
        });
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
page{
  font-size: 14px;
}
.box{
  margin-bottom:20rpx ;
  padding:0 30rpx;
  background-color: #fff;
}
.box_row{
  padding: 0 10rpx;
  height: 88rpx;
  box-sizing: border-box;
  line-height: 88rpx;
  border-bottom: 1rpx solid rgba(221, 221, 221, 0.3);
  color: #333236;
}

.border_none{
  border:none;
}
.color_888{
  color: #888890
}
.select_box{
  width: 152rpx;
	text-align: center;
  color: #fff;
	background-color: #EE603F;
  line-height: 48rpx;
  border-radius: 6rpx;
	font-size: 14px;
	
}
.select_img{
  width: 14rpx;
  height: 22rpx;
  margin-left: 20rpx;
}
.fixed_bottom{
  position: fixed;
  bottom: 0;
  width: 750rpx;
  line-height: 98rpx;
  font-size: 16px;
  text-align: center;
}
.btn_left{
  width: 50%;
  background-color: #fff;
  color: #EE603F;
}
.btn_right{
  width: 50%;
  background-color: #EE603F;
  color: #fff;
}
.text_over{
  white-space: nowrap; 
  max-width: 476rpx;
  overflow: hidden;
  text-overflow:ellipsis;
}
.unit{
  font-size: 14px;
  line-height: 48rpx;
  width: 80rpx;
  height: 48rpx;
  text-align: center;
  border: 2rpx solid #EE603F;
  box-sizing: border-box;
	border-right: none;
}
.borderright{
  border-top-right-radius: 6rpx;
  border-bottom-right-radius: 6rpx;
	border-right: 2rpx solid #EE603F;
}
.borderleft{
  border-top-left-radius: 6rpx;
  border-bottom-left-radius: 6rpx;
}
.unitselect{
  color: #fff;
  background-color: #EE603F;
}
.unitunselect{
  color: #888890;
  background-color: #fff;
}
.width_194{
	width: 194rpx
}
.width_466{
	width: 466rpx
}
</style>