<template>
<view>
  <form @submit="formSubmit" report-submit="true">
    <view class="form_box box_shadow">
      
      <view class="list flex_c">
        <view class="list_right ml-14">
          <text style="color:#EE603F">*</text>客户公司名称：
        </view>
        <input class="input" name="corporateName" :value="corporateName" placeholder="请输入"></input>
      </view>

      <view class="list flex_c">
        <view class="list_right ml-14">
          <text style="color:#EE603F">*</text>所属区域：</view>
        <picker :value="areaIndex" :range="areaArr" @change="areaChange">
          <view :class="(areaIndex==-1?'pickerClass':'')">{{areaIndex==-1?'请选择':areaArr[areaIndex]}}</view>
        </picker>
		<image src="/static/images/qingfc/arrow.png" class="i-next" mode="aspectFill"></image>
      </view>
      <view class="list flex_c" >
        <view class="list_right">公司地址：</view>
        <input class="input" name="corporateAddress" :value="corporateAddress" placeholder="请输入"></input>
		<image src="/static/images/qingfc/position.png" class="i-position" mode="aspectFill"></image>
      </view>
      
	  <view class="list flex_c">
	    <view class="list_right ml-14">
	      <text style="color:#EE603F">*</text>客户类型：</view>
	    <picker :value="customerTypeIndex" :range="customerTypeArr" @change="customerTypeChange">
	      <view :class="(customerTypeIndex==-1?'pickerClass':'')">{{customerTypeIndex==-1?"请选择":customerTypeArr[customerTypeIndex]}}</view>
	    </picker>
		<image src="/static/images/qingfc/arrow.png" class="i-next" mode="aspectFill"></image>
	  </view>
	   <view class="list flex_c">
	    <view class="list_right ml-14">
	      <text style="color:#EE603F">*</text>经营定位：</view>
	    <picker :value="positionIndex" :range="positionArr" @change="positionChange">
	      <view :class="(positionIndex==-1?'pickerClass':'')">{{positionIndex==-1?"请选择":positionArr[positionIndex]}}</view>
	    </picker>
	  </view>
	  <view class="list flex_c">
	    <view class="list_right">经营规模：</view>
	    <picker :value="customerLevelIndex" :range="customerLevelArr" @change="customerLevelChange">
	      <view :class="(customerLevelIndex==-1?'pickerClass':'')">{{customerLevelIndex==-1?"请选择":customerLevelArr[customerLevelIndex]}}</view>
	    </picker>
		<image src="/static/images/qingfc/arrow.png" class="i-next" mode="aspectFill"></image>
	  </view>
      <view class="list flex_c">
        <view class="list_right ml-14">
          <text style="color:#EE603F">*</text>客户来源：</view>
        <picker :value="customerSourceIndex" :range="customerSourceArr" @change="customerSourceChange">
          <view :class="(customerSourceIndex==-1?'pickerClass':'')">{{customerSourceIndex==-1?"请选择":customerSourceArr[customerSourceIndex]}}</view>
        </picker>
		<image src="/static/images/qingfc/arrow.png" class="i-next" mode="aspectFill"></image>
      </view>

      <view class="list flex_c">
        <view class="list_right">合作意向：</view>
        <view class="flex_c">
          <block v-for="(item, index) in cooperationArr" :key="index">
            <view :class="'unit width_107 ' + (index==0?'borderleft':'') + ' ' + (index==cooperationArr.length-1?'borderright':'') + ' ' + (cooperationIndex==index?'unitselect':'unitunselect')" @tap="cooperationChange" :data-index="index">{{item}}</view>
          </block>
        </view>
      </view>

      <!-- <view class="list flex_c border_none">
        <view class="width_282 ">保证金配合度：</view>
			<block v-for="(item, index) in bondArr" :key="index">
			  <view :class="'unit width_107 ' + (index==0?'borderleft':'') + ' ' + (index==cooperationDegreeArr.length-1?'borderright':'') + ' ' + (bondIndex==index?'unitselect':'unitunselect')" 
			    @tap="changeBond" :data-index="index">{{item}}</view>
			</block>
      </view> -->
      
      <view class="list flex_c">
        <view class="list_right">保证金配合度：</view>
        <view class="flex_c">
          <block v-for="(item, index) in cooperationDegreeArr" :key="index">
            <view :class="'unit ' + (index==0?'borderleft':'') + ' ' + (index==cooperationDegreeArr.length-1?'borderright':'') + ' ' + (cooperationDegreeIndex==index?'unitselect':'unitunselect')" @tap="cooperationDegreeChange" :data-index="index">{{item}}</view>
          </block>
        </view>
		
      </view>
	  <view class="title">高：有合作交保证金；中：有合作可考虑或多次合作会交保证金； 低：不接受交保证金</view>
      <!-- <view class="list flex_sb_c" wx:if="{{!addContacts&&!id}}" bindtap='bindAddContacts'>
        <view class="list_right fs_16 font_we_bold">添加联系人</view>
        <image src='/pages/jin-suo-yun/images/tianjia.png' class='add_img' mode='aspectFit'></image>
      </view> -->
      <view class="list flex_c">
        <view class="list_right ml-14">
          <text style="color:#EE603F">*</text>联系人：</view>
        <input class="input" name="contName" :value="contName" placeholder="请输入"></input>
      </view>
      <view class="list flex_c">
        <view class="list_right ml-14">
          <text style="color:#EE603F">*</text>手机号码：</view>
        <input class="input" type="number" name="contPhone" :value="contPhone" placeholder="请输入"></input>
      </view>
    </view>

    <view class="fixed_bottom flex box_shadow_btn">
      <view class="btn_left" @tap="cancel">取消</view>
      <button class="btn_right" hover-class="none" formType="submit">确定</button>
    </view>
    <view class="height_98"></view>
  </form>
</view>
</template>

<script>
const JsyServer = require("../../../services/jsy-server.js");
let adding = true;
let typeBuy = ['布行', '坯布中间商', '贸易公司', '市场门市部', '其他'];
let typeSell = ['梭织织造厂', '经编织造厂', '纬编织造厂', '坯布中间商', '其他'];
let cooperationBuy = ['信任', '保守', '观望', '排斥'];
let cooperationSell = ['强烈', '一般', '较差'];

export default {
  data() {
    return {
      userName: '',
      //自己的名字
      areaArr: ['石狮', '盛泽', '柯桥', '其他'],
      //所属区域数组
      areaIndex: -1,
      //所属区域的index
      customerTypeArr: ['布行','坯步中间商','贸易公司'],
      //客户类型1数组
      customerTypeIndex: -1,
	  //经营定位
	  positionArr: ['外贸','内销','内外销'],
	  positionIndex: -1,
      //客户类型1的index
      customerSourceArr: ['线下', '网络名单电话联系', '线上-坯布配', '其他'],
      //客户来源数组
      customerSourceIndex: -1,
      //客户来源的index
      customerLevelArr: ['大客户（年销售5000万及以上）', '中型客户（年销售3000-5000万）', '小型客户（年销售1500-3000万）', '小微客户（年销售500-1500万）', '微型客户（年销售500万以下）'],
      //客户等级数组
      customerLevelIndex: -1,
      //客户等级的index
      cooperationArr: ['信任', '保守', '观望', '排斥'],
      //合作意向数组
      cooperationIndex: -1,
      //合作意向的index
      cooperationDegreeArr: ['高', '中', '低'],
      //配合度数组
      cooperationDegreeIndex: -1,
      //配合度的index
      bondArr: ['高', '中', '低'],
      //保证金
      bondIndex: -1,
      id: '',
      isBuyer: false,
      //true买家，false卖家
      isSalesDepart: true,
      //是否有门市部
      isWeChat: true,
      //是否有微信
      addContacts: false
    };
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    adding = true;
    //let userInfo = wx.getStorageSync("userInfo");
    // let userName = userInfo.name;
    // let type = options.type || '';

    // if (type == 2 || !type && userInfo.authority[0].name == "ROLE_BUY_DEPUTY") {
    //   this.setData({
    //     isBuyer: true,
    //     userName: userName,
    //     customerTypeArr: typeBuy,
    //     cooperationArr: cooperationBuy
    //   });
    // } else {
    //   this.setData({
    //     isBuyer: false,
    //     userName: userName,
    //     customerTypeArr: typeSell,
    //     cooperationArr: cooperationSell
    //   });
    // }

    if (options.odata) {
      let odata = JSON.parse(options.odata);
      this.setOdata(odata);
    }
  },
  components: {},
  props: {},
  methods: {
    setOdata: function (odata) {
      console.log(odata);
      let areaArr = this.areaArr,
          customerTypeArr = this.customerTypeArr,
          customerSourceArr = this.customerSourceArr,
          customerLevelArr = this.customerLevelArr,
          cooperationArr = this.cooperationArr,
          cooperationDegreeArr = this.cooperationDegreeArr,
          areaIndex = this.returnIndex(odata.region, areaArr),
          customerTypeIndex = this.returnIndex(odata.type1, customerTypeArr),
          customerSourceIndex = this.returnIndex(odata.source, customerSourceArr),
          customerLevelIndex = this.returnIndex(odata.lv, customerLevelArr),
          cooperationIndex = this.returnIndex(odata.cooperationIntention, cooperationArr),
          cooperationDegreeIndex = this.returnIndex(odata.concerted, cooperationDegreeArr);
      this.setData({
        id: odata.id,
        corporateName: odata.corporateName,
        contName: odata.contName,
        contPhone: odata.contPhone,
        corporateAddress: odata.corporateAddress,
        // factoryAddress: odata.factoryAddress,
        areaIndex,
        customerTypeIndex,
        customerSourceIndex,
        customerLevelIndex,
        cooperationIndex,
        cooperationDegreeIndex,
        isSalesDepart: odata.isSalesDepart,
        salesDepart: odata.salesDepart,
        bondIndex: odata.depositApproval ? odata.depositApproval - 1 : -1,
        // isWeChat: odata.isWeChat == 0 ? false : true
      });
      console.log({
        id: odata.id,
        corporateName: odata.corporateName,
        contName: odata.contName,
        contPhone: odata.contPhone,
        corporateAddress: odata.corporateAddress,
        areaIndex,
        customerTypeIndex,
        customerSourceIndex,
        customerLevelIndex,
        cooperationIndex,
        cooperationDegreeIndex
      });
    },
    returnIndex: function (name, arrList) {
      let index = -1;

      for (let item in arrList) {
        if (arrList[item] == name) {
          index = item;
        }
      }

      return index;
    },

    /**
     * 所属帮办选择
     */
    // deputyChange: function (e) {
    //   var index = e.detail.value;
    //   this.setData({
    //     deputyIndex: index
    //   });
    // },

    /**
     * 所属区域选择
     */
    areaChange: function (e) {
      var index = e.detail.value;
      this.setData({
        areaIndex: index
      });
    },

    /**
     * 客户类型1选择
     */
    customerTypeChange: function (e) {
      var index = e.detail.value;
      this.setData({
        customerTypeIndex: index
      });
    },

    /**
     * 客户类型2选择
     */
    customerType2Change: function (e) {
      var index = e.detail.value;
      this.setData({
        customerType2Index: index
      });
    },

    /**
     * 客户来源选择
     */
    customerSourceChange: function (e) {
      var index = e.detail.value;
      this.setData({
        customerSourceIndex: index
      });
    },

    /**
     * 客户等级选择
     */
    customerLevelChange: function (e) {
      var index = e.detail.value;
      this.setData({
        customerLevelIndex: index
      });
    },

    /**
     * 合作意向选择
     */
    cooperationChange: function (e) {
      var index = e.currentTarget.dataset.index;

      if (index == this.cooperationIndex) {
        index = -1;
      }

      console.log("index==", index);
      this.setData({
        cooperationIndex: index
      });
    },

    /**
     * 配合度选择
     */
    cooperationDegreeChange: function (e) {
      var index = e.currentTarget.dataset.index;

      if (index == this.cooperationDegreeIndex) {
        index = -1;
      }

      console.log("cooperationDegreeIndex==", index);
      this.setData({
        cooperationDegreeIndex: index
      });
    },
    // 选择保证金认可度
    // changeBond: function (e) {
    //   var index = e.currentTarget.dataset.index;

    //   if (index == this.bondIndex) {
    //     index = -1;
    //   }

    //   this.setData({
    //     bondIndex: index
    //   });
    // },
    changeSalesDepart: function (e) {
      let tab = e.currentTarget.dataset.tab == 0 ? true : false;
      this.setData({
        isSalesDepart: tab
      });
    },
    changeWeChat: function (e) {
      let tab = e.currentTarget.dataset.tab == 0 ? true : false;
      this.setData({
        isWeChat: tab
      });
    },
    bindAddContacts: function () {
      this.setData({
        addContacts: true
      });
    },
    formSubmit: function (e) {
      let data = e.detail.value;

      let _this = this;

      if (!data.corporateName) {
        wx.showToast({
          title: '请输入公司名称',
          icon: 'none'
        });
        return;
      }

      if (this.areaIndex > -1) {
        data.region = this.areaArr[this.areaIndex];
      } else {
        wx.showToast({
          title: '请选择所属区域',
          icon: 'none'
        });
        return;
      }

      if (this.customerTypeIndex > -1) {
        data.type1 = this.customerTypeArr[this.customerTypeIndex];
      } else {
        wx.showToast({
          title: '请选择客户类型',
          icon: 'none'
        });
        return;
      }

      if (this.customerSourceIndex > -1) {
        data.source = this.customerSourceArr[this.customerSourceIndex];
      } else {
        wx.showToast({
          title: '请选择客户来源',
          icon: 'none'
        });
        return;
      }

      if (!data.contName && !this.id) {
        wx.showToast({
          title: '请输入联系人',
          icon: 'none'
        });
        return;
      }

      if (!(/^1(3|4|5|6|7|8|9)\d{9}$/.test(data.contPhone)) && !this.id) {
        wx.showToast({
          title: '请输入手机号码',
          icon: 'none'
        });
        return;
      }

      data.cooperationIntention = this.cooperationIndex > -1 ? this.cooperationArr[this.cooperationIndex] : '';

      if (this.id) {
        data.id = this.id;
      }

      
      let customerBaseInfo = [{
        contName: data.contName,
        contPhone: data.contPhone
      }];
      data.customerBaseInfo = customerBaseInfo;
      delete data.contName;
      delete data.contPhone;

      if (!adding) {
        return;
      }

      adding = false;
      console.log("data---", data);
      JsyServer.corporateBaseInfo(data).then(res => {
        let pages = getCurrentPages();
        let prevPage = pages[pages.length - 2];
        prevPage.setData({
          renewCustomer: true,
          setOver: true
        });

        if (_this.id) {
          wx.showToast({
            title: '修改成功'
          });
        } else {
          wx.showToast({
            title: '新建成功'
          });
        }

        let timer = setTimeout(() => {
          wx.navigateBack({});
        }, 1000);
      }).catch(err => {
        console.log("err-=--", err);
        adding = true;
        wx.showToast({
          title: err.data.description,
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
.form_box{
  background-color:#fff; 
  font-size: 15px;
  margin-bottom: 20upx;
}
.list{
  margin: 0 30upx;
  padding:0 10upx;
  border-bottom: 1upx solid rgba(221, 221, 221, 0.3);
  line-height: 87upx;
  color: #333236;
}
.list:nth-last-child(1),.border_none{
	border:none;
}
.list_right{
  width:226upx;
}
.width_282{
	width:282upx;
}
.color_888{
  color: #888890;
}
.algin_right{
	text-align: right;
	color: #888890;
}
.ml-14{
	margin-left: -14upx;
	margin-right:14upx 
}
.input{
	background-color: #fff;
	width: 444upx;
}
/* .pickerClass{
  width: 152upx;
	text-align: center;
  color: #fff;
	background-color: #EE603F;
  line-height: 48upx;
  border-radius: 6upx;
	font-size: 14px;
} */
.pickerClass{
  width: 152upx;
	text-align: center;
  color: #909090;
	background-color: #fff;
  line-height: 48upx;
  border-radius: 6upx;
	font-size: 15px;
}
.pickerImg{
  width: 14upx;
  height: 22upx;
  margin-left: 20upx;
}
.font_we{
	overflow: hidden;
	text-overflow:ellipsis;
	white-space: nowrap;
}
.unit{
  font-size: 14px;
  line-height: 48upx;
  width: 80upx;
  height: 48upx;
  text-align: center;
  border: 2upx solid #EE603F;
  box-sizing: border-box;
	border-right: none;
}
.borderright{
  border-top-right-radius: 6upx;
  border-bottom-right-radius: 6upx;
	border-right: 2upx solid #EE603F;
}
.borderleft{
  border-top-left-radius: 6upx;
  border-bottom-left-radius: 6upx;
}
.unitselect{
  color: #fff;
  background-color: #EE603F;
}
.unitunselect{
  color: #888890;
  background-color: #fff;
}
.width_107{
	width: 107upx
}
.add_img{
	width:34upx;
	height:34upx;
}
.title{
	margin: 0 30upx;
	padding:0 10upx 27upx 10upx;
	border-bottom: 1upx solid rgba(221, 221, 221, 0.3);
	font-size: 12px;
	color: #9B9B9B;
}
.i-next{
	   width: 14upx;
	   height: 24upx;
	   position: absolute;
	   right: 30upx;
}
.i-position{
	width: 32upx;
	height: 35upx;
	position: absolute;
	right: 30upx;
}
</style>