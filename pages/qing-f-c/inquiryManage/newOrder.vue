<template>
<view>
<form @submit="formSubmit" report-submit="true">
  <view class="form_box box_shadow">
    <view class="flex_c list">
      <view class="line"></view>
      <view class="font_we_bold fs_16">询价单基本信息 </view>
    </view>
    <view class="flex_c list">
      <view class="list_right">询价单号:</view>
      <input placeholder-class="color_888 fs_12" class="input" disabled="true" placeholder="已自动生成" :value="id"></input>
    </view>
    <view class="flex_c list">
      <view class="list_right">询价类型:</view>
      <view class="flex_sb_c wid_462">
        <input placeholder-class="color_888 fs_12" class="input" style="width:390rpx" disabled="true" @tap="isCode?'':'inquiryProductTypeChange'" name="inquiryProductType" placeholder="常规询价/找样询价" :value="(inquiryProductType == 0 ? '常规询价':(inquiryProductType == 1 ? '找样询价' : ''))"></input>
        <!-- <input disabled placeholder='请选择' value='{{contName}}' class='wid_430 input' placeholder-class='color_888 fs_12'></input> -->
        <image src="/pages/jin-suo-yun/images/bottom.png" class="bottom_img" mode="sapectFill"></image>
      </view>
    </view>
    <view class="flex_c list">
      <view class="list_right">产品系列:</view>
      <view class="flex_sb_c wid_462">
        <input placeholder-class="color_888 fs_12" class="input" style="width:390rpx" name="series" placeholder="请选择" :value="series"></input>
        <picker @change="changeSeries" :range="seriesList" style="height:60rpx">
          <image src="/pages/jin-suo-yun/images/bottom.png" class="bottom_img" mode="sapectFill"></image>
        </picker>
      </view>
    </view>
    <view class="flex_c list">
      <view class="list_right">品名（别名）:</view>
      <input placeholder-class="color_888 fs_12" class="input" placeholder="请填写品名" name="name" :value="name"></input>
    </view>
    <view class="flex_c list border_none">
      <view class="list_right">买家</view>
      <!-- <view class="{{contName?'width_450':'isOption'}}">{{contName||'请选择'}}</view> -->
      <view class="flex_sb_c wid_462" @tap="toSelectCustomer">
        <input disabled placeholder="请选择" :value="contName" class="wid_430 input" placeholder-class="color_888 fs_12"></input>
        <image src="/pages/jin-suo-yun/images/right.png" class="right_img" mode="aspectFit"></image>
      </view>
    </view>
  </view>

  <view class="form_box box_shadow">
    <view class="flex_c list">
      <view class="line"></view>
      <view class="font_we_bold fs_16">产品要素</view>
    </view>
    <view class="flex_c list">
      <view class="width_112">成份：</view>
      <view class="flex_sb_c">
        <input name="content" :value="content" placeholder="请选择成份" placeholder-class="color_888 fs_12" class="input" style="width:510rpx"></input>
        <picker @change="changeContent" :range="newContentList" style="height:60rpx">
          <image src="/pages/jin-suo-yun/images/bottom.png" class="bottom_img" mode="sapectFill"></image>
        </picker>
      </view>
    </view>
    <view class="flex_c list">
      <view class="width_112">含量：</view>
      <input placeholder-class="color_888 fs_12" class="input" placeholder="如:T70%/N25%/SP5%" name="contain" :value="contain"></input>
    </view>
    <!-- <view class='mt_30 pl_40'>含量：</view>
    <view class='list flex_c'>
      <view class='width_112 font_we_bold'>经：</view>
      <input name="containLong" value='{{containLong}}' placeholder='请输入经度' placeholder-class='color_888 fs_12' class='input' style='width:568rpx;'></input>
    </view>
    <view class='list flex_c'>
      <view class='width_112 font_we_bold'>纬：</view>
      <input name="containLat" value='{{containLat}}' placeholder='请输入纬度' placeholder-class='color_888 fs_12' class='input' style='width:568rpx;'></input>
    </view>
    <view class='explain'>请分别输入成分含量的经度和纬度</view> -->
  </view>

  <view class="form_box box_shadow">
    <view class="pt_30 pl_40">规格：</view>
    <view class="list flex_c">
      <view class="width_112 font_we_bold">经：</view>
      <input name="specificationLong" :value="specificationLong" placeholder="请输入经度" placeholder-class="color_888 fs_12" class="input" style="width:568rpx;" data-index="0"></input>
    </view>
    <view class="list flex_c">
      <view class="width_112 font_we_bold">纬：</view>
      <input name="specificationLat" :value="specificationLat" placeholder="请输入纬度" placeholder-class="color_888 fs_12" class="input" style="width:568rpx;" data-index="1"></input>
    </view>
    <view class="explain">请分别输入布样规格的经度和纬度</view>
  </view>

  <view class="form_box box_shadow">
    <view class="flex_c list border_none">
      <view class="width_112">特性：</view>
      <view class="flex color_888">
        <view :class="'select_btn mr_30 ' + (specailTab==1?'selet_tion':'')" data-tab="1" @tap="changeSpecail">消光</view>
        <view :class="'select_btn mr_30 ' + (specailTab==3?'selet_tion':'')" data-tab="3" @tap="changeSpecail">半消光</view>
        <view :class="'select_btn mr_30 ' + (specailTab==2?'selet_tion':'')" data-tab="2" @tap="changeSpecail">半光</view>
        <view :class="'select_btn mr_30 ' + (specailTab==4?'selet_tion':'')" data-tab="4" @tap="changeSpecail">有光</view>
      </view>
    </view>
  </view>

  <view class="form_box box_shadow">
    <view class="flex_c list">
      <view class="width_112">风格：</view>
      <view class="flex_sb_c">
        <input name="structure" :value="structure" placeholder="请输入风格,如 骑兵斜" placeholder-class="color_888 fs_12" class="input" style="width:510rpx"></input>
        <picker @change="changeStructure" :range="newStructureList" style="height:60rpx">
          <image src="/pages/jin-suo-yun/images/bottom.png" class="bottom_img" mode="sapectFill"></image>
        </picker>
      </view>
    </view>
    <view class="flex_c list border_none">
      <view class="width_112">组织：</view>
      <input name="organization" :value="organization" placeholder="请输入风格的组织，如2*1" placeholder-class="color_888 fs_12" class="input"></input>
    </view>
  </view>

  <view class="form_box box_shadow">
    <view class="flex_c list">
      <view class="list_right">布样类型：</view>
      <view class="flex color_888">
        <view :class="'select_btn mr_30 ' + (typeTab==0?'selet_tion':'')" data-tab="0" @tap="changeType">坯布</view>
        <view :class="'select_btn mr_30 ' + (typeTab==1?'selet_tion':'')" data-tab="1" @tap="changeType">成品</view>
      </view>
    </view>
    <view class="pt_30 pl_40">密度（{{typeTab==0?'坯布':'成品'}}）：</view>
    <view class="flex_sb_c list">
      <view class="flex_c ">
        <view class="font_we_bold mr_30">经</view>
        <input name="number1" :value="number1" type="digit" placeholder="请输入经度" placeholder-class="color_888 fs_12" class="input width_160 mr_20"></input>
        <view class="font_we_bold fs_18 mr_20 ">*</view>
        <view class="font_we_bold mr_30">纬</view>
        <input name="number2" :value="number2" type="digit" placeholder="请输入纬度" placeholder-class="color_888 fs_12" class="input width_160"></input>
      </view>
      <!-- <view>梭</view> -->
      <view class="flexend130">
        <view data-tab="0" :class="'unit borderleft ' + (greyTab == 0 ? 'unitselect' : 'unitunselect')" @tap="changeGrey">梭</view>
        <view data-tab="1" :class="'unit borderright ' + (greyTab == 1 ? 'unitselect' : 'unitunselect')" @tap="changeGrey">条</view>
      </view>
    </view>
    <view class="flex_c list">
      <view class="list_right">克重（{{typeTab==0?'坯布':'成品'}}）：</view>
      <view class="flex_sb_c wid_462">
        <input name="weight" :value="weight" type="digit" placeholder="请输入幅宽数值，如 50" placeholder-class="color_888 fs_12" class="input" style="width:350rpx;"></input>
        <view>g/㎡</view>
      </view>
    </view>
    <view class="flex_c list border_none">
      <view class="list_right">幅宽（{{typeTab==0?'坯布':'成品'}}）：</view>
      <view class="flex_sb_c wid_462">
        <input name="width" :value="width" type="digit" placeholder="请输入幅宽数值，如 50" placeholder-class="color_888 fs_12" class="input"></input>
        <view>cm</view>
      </view>
    </view>
  </view>

  <view class="form_box box_shadow">
    <!-- <scroll-view style='height:{{second_height}}px' scroll-y> -->
    <!-- <view class='c-pl30 c-pr30 c-fs14px'> -->
    <!-- <view class='flex_c list'>
      <view class='list_right'>成分：</view>
      <view class='flex_sb_c'>
        <input name="content" value='{{content}}' placeholder='请输入成分及含量，如T100%' placeholder-class='color_888 fs_12' class='input' style='width:414rpx'></input>
        <picker bindchange="changeContent" range='{{newContentList}}' range-key='content' style='height:60rpx'>
          <image src="/pages/jin-suo-yun/images/bottom.png" class='bottom_img' mode='sapectFill'></image>
        </picker>
      </view>
    </view>
    <view class='flex_c list'>
      <view class='list_right'>含量：</view>
      <view class='flex_sb_c wid_462'>
        <view class='flex_c'>
          <input name="containLong" value='{{containLong}}' placeholder='请输入经度' placeholder-class='color_888 fs_12' class='input' style='width:140rpx;'></input>
          <view class='plr_20 font_we_bold'>*</view>
          <input name="containLat" value='{{containLat}}' placeholder='请输入纬度' placeholder-class='color_888 fs_12' class='input' style='width:140rpx;'></input>
        </view>
      </view>
    </view> -->
    <!-- <view class='flex_c list'>
      <view class='list_right'>规格：</view>
      <view class='flex_sb_c wid_462'>
        <view class='flex_c'>
          <input name="specificationLong" value='{{specificationLong}}' placeholder='请输入经度' placeholder-class='color_888 fs_12' class='input' style='width:140rpx;' bindtap='inputValue' disabled data-index='0'></input>
          <view class='plr_20 font_we_bold'>*</view>
          <input name="specificationLat" value='{{specificationLat}}' placeholder='请输入纬度' placeholder-class='color_888 fs_12' class='input' style='width:140rpx;' bindtap='inputValue' disabled data-index='1'></input>
        </view>
      </view>
    </view> -->
    <!-- <view class='flex_c list'>
      <view class='list_right'>特性：</view>
      <view class='flex color_888'>
        <view class="select_btn mr_30 {{specailTab==1?'selet_tion':''}}" data-tab='1' bindtap='changeSpecail'>消光</view>
        <view class="select_btn mr_30 {{specailTab==2?'selet_tion':''}}" data-tab='2' bindtap='changeSpecail'>半光</view>
        <view class="select_btn mr_30 {{specailTab==4?'selet_tion':''}}" data-tab='4' bindtap='changeSpecail'>有光</view>
      </view>
    </view> -->
    <!-- <view class='flex_c list'>
      <view class='list_right'>风格：</view>
      <view class='flex_sb_c'>
        <input name="structure" value='{{structure}}' placeholder='请输入风格,如 骑兵斜' placeholder-class='color_888 fs_12' class='input' style='width:414rpx'></input>
        <picker bindchange="changeStructure" range='{{newStructureList}}' range-key='structure' style='height:60rpx'>
          <image src="/pages/jin-suo-yun/images/bottom.png" class='bottom_img' mode='sapectFill'></image>
        </picker>
      </view>
    </view>
    <view class='flex_c list'>
      <view class='list_right'>组织：</view>
      <input name="organization" value='{{organization}}' placeholder='请输入风格的组织，如2*1' placeholder-class='color_888 fs_12' class='input'></input>
    </view> -->


    <view class="flex_c list">
      <view class="list_right">品质定位</view>
      <view class="flex_sb_c wid_462" @tap="open" :data-arr="qualityArr" :data-index="'qualityI'">
        <input disabled placeholder="请选择" :value="(qualityI==0?'':qualityArr[qualityI])" class="wid_430 input" placeholder-class="color_888 fs_12"></input>
        <image src="/pages/jin-suo-yun/images/right.png" class="right_img" mode="aspectFit"></image>
      </view>
      <!-- <view class='wid_462 {{qualityI==0?"isOption":""}}' data-arr="{{qualityArr}}" data-index="{{'qualityI'}}" bindtap="open">{{qualityArr[qualityI]}}</view> -->
    </view>
    <view class="flex_c list">
      <view class="list_right">购买数量</view>
      <view class="flex_sb_c wid_462">
        <input class="input" name="num" :value="num" type="digit" placeholder="请输入购买数量" placeholder-class="color_888 fs_12"></input>
        <view class="flexend130">
          <view data-tab="0" :class="'unit borderleft ' + (purchaseTab == 0 ? 'unitselect' : 'unitunselect')" @tap="changePurchase">米</view>
          <view data-tab="1" :class="'unit borderright ' + (purchaseTab == 1 ? 'unitselect' : 'unitunselect')" @tap="changePurchase">码</view>
        </view>
      </view>
    </view>
    <view class="flex_c list border_none">
      <view class="list_right">挂码率：</view>
      <view class="flex_sb_c wid_462">
        <input name="codeRate" :value="codeRate" type="digit" placeholder="请输入" placeholder-class="color_888 fs_12" class="input"></input>
        <view>%</view>
      </view>
    </view>
    <view :class="'list flex_c ' + (inquiryProductType == 0?'border_none':'')">
      <view class="list_right">备注：</view>
      <input name="positionOther" :value="supplementVal" class="input" placeholder="非必填"></input>
      <!-- <view class='textareBox'>
        <textarea id="textarea_id" name="desc" placeholder="补充您所知道的更多坯布信息，如：成分、克重等，可以让找布更高效" maxlength='50' bindinput='supplementInput' value="{{supplementVal}}"></textarea>
        <view class="textareBox_title">{{supplementVal.length}}/50</view>
      </view> -->
    </view>
    <view v-if="inquiryProductType == 1">
      <view class="list border_none">布样照片</view>
      <view class="x-image">
        <block v-for="(item, index) in photoList" :key="index">
          <view :class="'x-image-pic ' + ((index+1)%3 == 0 ? 'c-mr0' : '')" @tap="previewImage" :data-index="index">
            <image mode="aspectFill" class="x-image-show" :src="item"></image>
            <image src="../../images/image-del.png" class="x-del" :data-index="index" @click.stop="delImage"></image>
          </view>
        </block>
        <view class="x-find" v-if="photoList.length < 9" @tap="chooseImage">
          <view class="x-txt">添加图片</view>
        </view>
      </view>
    </view>
    <!-- </scroll-view> -->
    <view class="fixed_bottom flex box_shadow_btn">
      <view class="btn_left" @tap="cancel">取消</view>
      <button class="btn_right" hover-class="none" formType="submit">确定</button>
    </view>
  </view>
  <view class="height_98"></view>
</form>


<view class="modal-authorizat" v-if="!loginState">
  <button class="modal-authorizat-btn button-none" hover-class="none" open-type="getUserInfo" @getuserinfo="userInfo">
  </button>
</view>
<view class="fidex_home" v-if="code" @tap="goHome">
  <image src="/images/personal.png" class="personal_img" mode="aspectFit"></image>
  <view>主页</view>
</view>


<!-- <view class='modal_mask' bindtap='cancelMoadl' wx:if="{{seriesModal}}"></view>
<view class='modal_box' wx:if="{{seriesModal}}">
  <view class='fs_16 font_we_bold text_c'>选择产品系列(单选)</view>
  <view class='flex_warp'>
    <block wx:for="{{seriesList}}" wx:key="">
      <view class="type_btn {{index==seriesIndex?'type_on':''}}" bindtap='seriesOption' data-index='{{index}}'>{{item}}</view>
    </block>
  </view>
  <view class='mt_20 modal_bottom_btn' bindtap='cancelMoadl'>关闭</view>
</view> -->
<!-- 虚拟键盘 -->
<!-- <keyboard bind:Keyboard="bindKeyboard" keyboardState="{{keyboardState}}"></keyboard> -->
</view>
</template>

<script>
const Server = require("../../services/server.js");
const Util = require("../../utils/util.js");
const Verify = require("../../utils/validate.js");
const Common = require("../../utils/common.js");
const Pipe = require("../../utils/pipe.js");
const User = require("../../services/user.js");
const JsyServer = require("../../services/jsy-server.js");
let _this,
    submission = true;
import keyboard from "./component/keyboard";

export default {
  data() {
    return {
      link: '../c-success/success?find=1',
      qualityArr: ["请选择", "市场货", "一般订单", "高级订单", "品牌订单"],
      // 特性的值的可选值
      qualityI: 0,
      // 当前选择的品质单位
      qualityList: [0, 1, 2, 4],
      // 特性不同值转化后对应的数值
      specailTab: 1,
      //特性选择的tab
      typeTab: 0,
      //布样类型选择的tab
      purchaseTab: 0,
      //购买数量单位选择的tab
      greyTab: 0,
      //密度单位选择的tab
      gramTab: 0,
      //克重单位选择的tab
      inquiryProductType: 0,
      //询价产品类型选择的tab
      unitArr: ["请选择单位", "g/m", "g/m²"],
      // 克重的单位的可选值
      unitEndI: 0,
      // 当前选择的克重(成品)
      unitFirI: 0,
      // 当前选择的克重(坯布)
      unitNumArr: ["请选择单位", "米", "码"],
      // 数量的值得可选值
      unitNumI: 0,
      // 当前选择的数量
      hide: false,
      // 控制详情是否显示
      loadState: true,
      // 防止多次加载
      changePage: true,
      // 防止用户跳转页面时，重复点击
      photoList: [],
      // 布样照片的数组
      loadedImg: [],
      //已下载图片对象
      formData: {},
      // 存储 找布表单数据
      formId: '',
      // 表单的formId
      loginState: false,
      // FALSE表示没有授权
      supplementVal: '',
      // scopeInfo: false, // 防止未授权时，第一次进入页面就直接退出
      // companyName: '',
      // companyNameIndex: -1,
      keyboardState: false,
      //虚拟键盘是否显示
      inputValue: '',
      //规格
      specificationLong: '',
      //规格经
      specificationLat: '',
      //规格玮
      contid: false,
      //是否有买家id
      contName: '',
      //买家名字
      id: '',
      content: '',
      newContentList: ['涤棉', '棉涤', '锦棉', '棉锦', '全涤', '全尼龙', '涤氨', '尼氨', '涤锦氨', '锦涤氨', '全棉', '锦涤'],
      //成分最热列表
      newStructureList: [],
      //风格最热列表
      isCode: false,
      code: false,
      //是否扫码进入
      series: '',
      seriesList: ['塔丝隆系列', '尼丝纺系列', '涤塔夫系列', '春亚纺系列', '桃皮绒系列', '仿记忆系列', 'T400系列', '牛津系列', '西面唐系列', '锦涤纺系列', '华达呢系列', '仿真丝系列', '蚂蚁绉系列', '乐丽丝系列', '其他']
    };
  },

  /**
   * 监听页面显示
   */
  onShow: function () {
    Common.hideLoading(this);
    Common.changePageTrue(this);
  },

  /** 生命周期函数--start */

  /**
   * 监听页面加载
   */
  onLoad: function (options) {
    _this = this;
    let that = this;
    this.setHight();

    if (options.code) {
      this.setData({
        code: true
      });
    }

    if (options.odata) {
      let odata = JSON.parse(options.odata);
      submission = true;
      this.setOdata(odata);
      this.setData({
        contid: odata.contid,
        contName: odata.contName
      });
    }

    if (options.tab) {
      this.setData({
        inquiryProductType: options.tab
      });
    }

    if (options.id) {
      this.setData({
        id: options.id,
        isCode: true
      });
    } else {
      let id = Pipe.getTimeStamp();

      if (this.inquiryProductType == 0) {
        this.setData({
          id: 'CG' + id
        });
      } else {
        this.setData({
          id: 'ZY' + id
        });
      }
    }

    if (!Common.getToken()) {
      // 调用登录接口
      User.loginByWeixin().then(res => {
        Util.goRegPage();
        that.setData({
          loginState: true
        });
      }).catch(err => {});
    } else {
      Util.goRegPage();
      that.setData({
        loginState: true
      });
    } // this.getNewSearch(4);


    this.getNewSearch(7); // this.getAssociatedCustomers()
  },
  components: {
    keyboard
  },
  props: {},
  methods: {
    setHight: function () {
      wx.getSystemInfo({
        success: function (res) {
          console.log(res); // 计算主体部分高度,单位为px

          let height = res.screenWidth * 98 / 750;
          console.log("height===", height);

          _this.setData({
            // second部分高度 = 利用窗口可使用高度 - first部分高度（这里的高度单位为px，所有利用比例将300rpx转换为px）
            second_height: res.windowHeight - height
          });
        }
      }); // wx.createSelectorQuery().select("#textarea_id").boundingClientRect(function (res) {
      // 	_this.setData({
      // 		textareaTop:res.top
      // 	})
      // }).exec()
    },
    toSelectCustomer: function () {
      wx.navigateTo({
        url: '/pages/jin-suo-yun/select-customer'
      });
    },
    // 获取系列风格最热搜索
    getNewSearch: function (index) {
      let data = {
        type: index,
        num: 20,
        source: ""
      };
      JsyServer.getNewSearch(data).then(res => {
        if (index == 4) {
          _this.setData({
            newContentList: res.data
          });
        } else if (index == 7) {
          _this.setData({
            newStructureList: res.data
          });
        }
      }).catch(err => {
        console.log("err===", err);
      });
    },
    changeSeries: function (e) {
      this.setData({
        series: this.seriesList[e.detail.value]
      });
    },
    changeContent: function (e) {
      this.setData({
        content: this.newContentList[e.detail.value]
      });
    },
    changeStructure: function (e) {
      this.setData({
        structure: this.newStructureList[e.detail.value]
      });
    },
    setOdata: function (data) {
      console.log("data----", data);

      if (data.positionQuality == 1) {
        data.positionQuality = 2;
      } else if (data.positionQuality == 2) {
        data.positionQuality = 1;
      }

      this.setData({
        name: data.name || '',
        number1: data.number1,
        number2: data.number2,
        inquiryProductType: data.inquiryProductType == '常规询价' ? 0 : 1,
        content: data.content,
        containLong: data.containLong,
        containLat: data.containLat,
        specificationLong: data.specificationLong,
        specificationLat: data.specificationLat,
        specailTab: data.glossLongitude || 1,
        structure: data.structure,
        organization: data.organization,
        typeTab: data.prodOrGrey,
        density: data.density || '',
        greyTab: data.densityUnit == '梭' ? 0 : 1,
        width: data.width,
        weight: data.weight,
        gramTab: data.weightUnit == "g/m²" ? 0 : 1,
        qualityI: data.positionQuality || 0,
        num: data.num,
        purchaseTab: data.unit == '米' || !data.unit ? 0 : 1,
        supplementVal: data.positionOther,
        photoList: data.picsList,
        loadedImg: data.pics,
        contain: data.contain,
        codeRate: data.codeRate,
        series: data.series
      });
    },
    // getAssociatedCustomers: function() {
    //   let _this = this
    //   JsyServer.getAssociatedCustomers().then(res => {
    //     console.log("res===", res)
    //     let companyNameIndex = -1
    //     res.data.map((item, index) => {
    //       if (item.id == _this.data.contid) {
    //         companyNameIndex = index
    //       }
    //     })
    //     _this.setData({
    //       companyNameIndex,
    //       companyName: res.data
    //     })
    //   }).catch(err => {
    //     console.log("Err===", err)
    //   })
    // },
    // 选择客户公司
    // choiceCompany: function(e) {
    //   this.setData({
    //     companyNameIndex: e.detail.value
    //   })
    // },
    // 表单提交--验证
    formSubmit: function (e) {
      let that = this;
      let form = e.detail.value;
      let formId = e.detail.formId;
      console.log(form);
      console.log("id=", that.id); // 去除前后空格

      let contName = this.contName; // 购买数量不为数字验证

      if (form.num != "" && !Verify.alertNum(form.num)) return false; //特性

      form.glossLongitude = this.specailTab; //购买数量单位

      var unit = this.purchaseTab == 0 ? '米' : '码'; //坯布

      form.prodOrGrey = this.typeTab;

      if (!form.series) {
        wx.showToast({
          title: '请选择产品系列',
          icon: 'none'
        });
        return;
      }

      if (!form.name) {
        wx.showToast({
          title: '请输入品名',
          icon: 'none'
        });
        return;
      }

      if (!contName) {
        wx.showToast({
          title: '请选择买家',
          icon: 'none'
        });
        return;
      }

      if (this.inquiryProductType == 0) {
        if (!form.content) {
          wx.showToast({
            title: '请输入成分',
            icon: 'none'
          });
          return;
        }

        if (!form.specificationLong || !form.specificationLat) {
          wx.showToast({
            title: '请输入规格',
            icon: 'none'
          });
          return;
        }

        if (!form.structure) {
          wx.showToast({
            title: '请输入风格',
            icon: 'none'
          });
          return;
        }

        if (!form.number1 || !form.number2) {
          wx.showToast({
            title: '请输入密度',
            icon: 'none'
          });
          return;
        }

        if (this.qualityI == 0) {
          wx.showToast({
            title: '请选择品质定位',
            icon: 'none'
          });
          return;
        }
      } else {
        if (this.qualityI == 0) {
          wx.showToast({
            title: '请选择品质定位',
            icon: 'none'
          });
          return;
        }

        if (this.photoList.length == 0) {
          wx.showToast({
            title: '请选择图片',
            icon: 'none'
          });
          return;
        }
      } // if (!form.codeRate) {
      // 	wx.showToast({
      // 		title: '请输入挂码率',
      // 		icon: 'none'
      // 	})
      // 	return
      // }


      if (this.typeTab == 0) {
        form.greyDensityLong = form.number1;
        form.greyDensityLat = form.number2;
        form.greyWidth = form.width || 160;
        form.greyWeight = form.weight;
        form.greyDensityUnit = this.greyTab == 0 ? '梭' : '条';
      } else {
        form.prodDensityLong = form.number1;
        form.prodDensityLat = form.number2;
        form.prodWidth = form.width || 160;
        form.prodWeight = form.weight;
        form.prodDensityUnit = this.greyTab == 0 ? '梭' : '条';
      } //询价产品类型


      let inquiryProductType = this.inquiryProductType == 0 ? '常规询价' : this.inquiryProductType == 1 ? '找样询价' : '';
      form.positionQuality = this.qualityI;

      if (form.positionQuality == 1) {
        form.positionQuality = 2;
      } else if (form.positionQuality == 2) {
        form.positionQuality = 1;
      }

      let data = {
        contName: contName,
        inquiryProductType: inquiryProductType,
        unit: unit,
        info: form,
        contid: that.contid,
        num: form.num,
        id: that.id,
        name: form.name,
        codeRate: form.codeRate
      };
      console.log("data===", data);
      this.setData({
        formData: data,
        formId: formId
      });
      that.onSubImg(data); // that.getUserInfo(data);
    },
    //提交表单图片
    onSubImg: function (oData) {
      let that = this;
      let imgArr = that.photoList;
      console.log(imgArr);
      console.log(this.loadedImg);
      var newImgArr = Util.picUpPic(imgArr, this.loadedImg);
      console.log(newImgArr);

      if (that.loadState) {
        Common.showLoading(that, '提交中...');

        if (imgArr.length > 0) {
          Util.uploadPics(newImgArr[0]).then(res => {
            oData.info.pics = newImgArr[1].concat(res);
            console.log(oData);
            that.onSubFind(oData);
          }).catch(err => {
            Common.hideLoading(that);
            Util.showErrorToast('图片提交失败');
          });
        } else {
          that.onSubFind(oData);
        }
      }
    },
    //提交 找布数据
    onSubFind: function (oData) {
      let that = this;
      let type = this.inquiryProductType;
      Server.createOrder(oData).then(res => {
        if (type == 0) {
          that.toRoutineDetail();
        } else {
          that.toInquiryDetail();
        }

        var pages = getCurrentPages();
        var lastpage = pages[pages.length - 2];
        lastpage.setData({
          refresh: true
        });
      }).catch(err => {
        Common.hideLoading(that);
        Util.showErrorToast('表单提交失败');
      });
    },
    // 跳转到询价单详情
    toInquiryDetail: function () {
      let id = this.id;
      let url = '/pages/jin-suo-yun/deputy/inquiry-detail?id=' + id;

      if (this.code) {
        url += "&code=true";
      }

      wx.redirectTo({
        url: url
      });
    },
    // 跳转到常规询价详情
    toRoutineDetail: function () {
      let id = this.id;
      wx.redirectTo({
        url: '/pages/jin-suo-yun/deputy/routine-detail?id=' + id
      });
    },
    //详情的显示隐藏
    hideOrBlock: function () {
      this.setData({
        hide: !this.hide
      });
    },
    // 提交表单时--设置没选择过的初始单位
    setUnit: function (str, num) {
      if (num == 0) {
        this.setData({
          [str]: 1
        });
      }
    },
    // 单位选择
    open: function (e) {
      let that = this;
      let list = e.currentTarget.dataset.arr;
      let attr = e.currentTarget.dataset.index;
      wx.showActionSheet({
        itemList: list,
        success: function (res) {
          if (!res.cancel) {
            that.setData({
              [attr]: res.tapIndex
            });
          }
        }
      });
    },

    /** 本地图片操作-start */

    /**
     * 添加图片
     */
    chooseImage: function (e) {
      let that = this;
      wx.chooseImage({
        sizeType: ['original', 'compressed'],
        // 可以指定是原图还是压缩图，默认二者都有
        sourceType: ['album', 'camera'],
        // 可以指定来源是相册还是相机，默认二者都有
        success: function (res) {
          let newArr = [];
          let filesArr = res.tempFiles;
          let fliesPathArr = res.tempFilePaths;
          let resArr = [];
          let maxSize = 1024 * 1024;

          if (!filesArr) {
            // 用于处理部分手机返回值为空的问题
            Util.versionTip();
            return;
          } // 验证size是否大于1M


          filesArr.map(function (item, index) {
            let size = item.size;

            if (size > maxSize) {
              fliesPathArr.splice(index, 1);
              wx.showModal({
                content: '图片不能大于1M',
                showCancel: false
              });
            }
          });
          resArr = that.photoList.concat(fliesPathArr); // 验证图片地址是否重复

          resArr.map(function (item) {
            if (newArr.indexOf(item) == -1) {
              newArr.push(item);
            } else {
              wx.showModal({
                content: '不能提交同一张图片',
                showCancel: false,
                success: function () {
                  return false;
                }
              });
            }
          }); // 判断图片数量是否大于9

          if (newArr.length > 9) {
            newArr.splice(9);
            wx.showModal({
              title: '提示',
              content: '照片最多为9张',
              showCancel: false,
              success: function () {
                return false;
              }
            });
          } // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片


          that.setData({
            photoList: newArr
          });
        },
        fail: function () {
          console.log("已取消图片选择");
        }
      });
    },

    /**
     * 预览图片
     */
    previewImage: function (e) {
      let index = e.currentTarget.dataset.index;
      let imgList = this.photoList;
      wx.previewImage({
        current: imgList[index],
        // 当前显示图片的http链接
        urls: imgList // 需要预览的图片http链接列表

      });
    },

    /**
     * 删除图片
     */
    delImage: function (e) {
      let i = e.currentTarget.dataset.index;
      let delList = this.photoList;
      delList.splice(i, 1);
      this.setData({
        photoList: delList
      });
    },

    /** 本地图片操作-start */

    /**
     * 补充内容介绍
     */
    supplementInput: function (e) {
      let val = Verify.trim(e.detail.value);
      this.setData({
        supplementVal: val
      });
    },

    /**
     * 特性选择
     */
    changeSpecail: function (e) {
      var tab = e.currentTarget.dataset.tab;
      this.setData({
        specailTab: tab
      });
    },

    /**
     * 布样类型选择
     */
    changeType: function (e) {
      var tab = e.currentTarget.dataset.tab;
      this.setData({
        typeTab: tab
      });
    },

    /**
     * 购买数量单位选择
     */
    changePurchase: function (e) {
      var tab = e.currentTarget.dataset.tab;
      this.setData({
        purchaseTab: tab
      });
    },

    /**
     * 密度单位选择
     */
    changeGrey: function (e) {
      var tab = e.currentTarget.dataset.tab;
      this.setData({
        greyTab: tab
      });
    },

    /**
     * 克重单位选择
     */
    changeGram: function (e) {
      var tab = e.currentTarget.dataset.tab;
      this.setData({
        gramTab: tab
      });
    },

    /**
     * 询价产品类型选择
     */
    inquiryProductTypeChange: function () {
      var that = this;
      let id = this.id;
      wx.showActionSheet({
        itemList: ['常规询价', '找样询价'],

        success(res) {
          that.setData({
            inquiryProductType: res.tapIndex
          });

          if (res.tapIndex == 0) {
            id = id.replace('ZY', 'CG');
          } else {
            id = id.replace('CG', 'ZY');
          }

          that.setData({
            id
          });
        }

      });
    },
    //虚拟键盘
    bindKeyboard: function (e) {
      let inputValue;
      let keyboardIndex = this.keyboardIndex;

      if (keyboardIndex == 0) {
        inputValue = this.specificationLong;
      } else {
        inputValue = this.specificationLat;
      }

      console.log("2222=", keyboardIndex);
      console.log("1111=", e.detail);

      if (e.detail == '删除') {
        inputValue = inputValue.substring(0, inputValue.length - 1);
      } else if (e.detail == 'top') {
        this.setData({
          keyboardState: false
        });
      } else if (e.detail == '空格') {
        inputValue += " ";
      } else {
        inputValue += e.detail;
      }

      if (keyboardIndex == 0) {
        this.setData({
          specificationLong: inputValue
        });
      } else {
        this.setData({
          specificationLat: inputValue
        });
      }
    },
    cancel: function () {
      wx.navigateBack({});
    },
    //拉起虚拟键盘
    inputValue: function (e) {
      let index = e.currentTarget.dataset.index;
      console.log("index=", index);
      this.setData({
        keyboardState: true,
        keyboardIndex: index
      });

      if (this.keyboardState) {
        wx.pageScrollTo({
          scrollTop: 400
        });
      }
    },
    // 返回首页
    goHome: function () {
      wx.switchTab({
        url: '/pages/tab-user/index'
      });
    } // // 打开选择模态框
    // choiceSeries: function () {
    //   this.setData({
    //     seriesModal: true
    //   })
    // },
    // // 关闭模态框
    // cancelMoadl: function () {
    //   this.setData({
    //     seriesModal: false
    //   })
    // },
    // // 选择选项
    // seriesOption: function (e) {
    //   let index = e.currentTarget.dataset.index;
    //   let seriesList=this.data.seriesList;
    //   let series = seriesList[index];
    //   this.setData({
    //     seriesIndex: index,
    //     series
    //   })
    // },
    ,
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
@import '../../css/common';
.form_box{
  background-color:#fff; 
  font-size: 14px;
	margin-bottom: 20rpx;
}
.list{
  margin: 0 30rpx;
  padding:0 10rpx;
  border-bottom: 1rpx solid rgba(221, 221, 221, 0.3);
  line-height: 87rpx;
  color: #333236;
}

.list_right{
  width:208rpx;
}
.color_888{
  color: #888890;
}
.select_btn{
  padding: 0 20rpx;
  height: 48rpx;
  box-sizing: border-box;
  border: 2rpx solid #EE603F;
  border-radius: 6rpx;
  line-height: 46rpx;
  text-align: center;
}
.wid_2x{
  width: 192rpx;
}
.input{
  width: 446rpx;
  background-color: #fff;
  font-size: 14px;
  padding: 0;
}
.plr_20{
	padding-right: 20rpx;
	padding-left: 20rpx;
	padding-top: 10rx
}
.selet_tion{
  color:#fff;
  background-color: #EE603F;
}
.select_btn view{
  width: 50%;
}
.wid_462{
  width:462rpx;
}
.mr_30{
  margin-right: 30rpx;
}
.btn_left{
  width: 50%;
  background-color: #fff;
  color: #EE603F;
  border-radius: 0;
  font-size: 16px;
  line-height: 98rpx;
}
.btn_right{
  width: 50%;
  background-color: #EE603F;
  color: #fff;
  border-radius: 0;
  font-size: 16px;
  line-height: 98rpx;
}
button::after {
  border-radius: 0;
}
.fixed_bottom{
  width: 750rpx;
  position: fixed;
  bottom: 0;
  display: flex;
  z-index: 999;
}
.border_none{
  border:none;
  padding-bottom: 10rpx;
}
.x-image{
  margin-left: 40rpx;
}
.bottom_img{
	width: 48rpx;
	height: 48rpx;
	box-shadow: 0 4rpx 8rpx 0 rgba(0, 0, 0, 0.2);
}
.textareBox{
	width: 670rpx;
	height: 140rpx;
	background-color: #F4F4F4;
	border-radius: 6rpx;
	padding: 20rpx;
	box-sizing: border-box;
	
}
.textareBox>textarea{
	background-color: #F4F4F4;
	font-size: 24rpx;
	padding: 0;
	height: 80rpx;
	line-height: 1.1;
	
}
.textareBox_title{
	color: #888890;
	text-align: right;
	line-height: 1.1;
	font-size: 24rpx;
}
.flexend130{
  display: flex;
  flex: 0 0 130rpx;
  align-items: center;
  justify-content: flex-end;
}
.unit{
  font-size: 14px;
  line-height: 48rpx;
  width: 80rpx;
  height: 48rpx;
  text-align: center;
  border: 2rpx solid #EE603F;
  box-sizing: border-box;
}
.borderright{
  border-top-right-radius: 6rpx;
  border-bottom-right-radius: 6rpx;
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
.line{
	width: 4rpx;
	height: 15px;
	border-radius: 2rpx;
	background-color: #EE603F;
	margin-right: 10rpx;
	margin-left: -14rpx;
}
.isOption{
	width: 152rpx;
	text-align: center;
	background-color: #EE603F;
	border-radius: 6rpx;
	line-height: 48rpx;
	color: #fff;
}
.explain{
	color: #9B9B9B;
	margin-top: 20rpx;
	padding-bottom: 30rpx;
	font-size: 12px;
	line-height: 1;
	padding-left: 40rpx
}
.width_112{
	width: 112rpx
}
.pl_40{
	padding-left: 40rpx;
}
.width_160{
	width: 160rpx;
}
.mr_40{
	margin-right: 40rpx;
}
.width_450{
	width: 450rpx
}
.right_img{
	width: 14rpx;
	height: 24rpx;
}
.wid_430{
	width: 430rpx;
}
/* .modal_mask {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  background: #000;
  opacity: 0.6;
  overflow: hidden;
}
.modal_box{
	position: fixed;
	top: 277rpx;
	margin: 0 35rpx;
	background-color: #F9F7FA;
	border-radius: 6rpx;
	font-size: 16px;
	z-index: 1001;
}
.text_c{
	text-align: center;
	margin-top: 30rpx;
	margin-bottom: 40rpx;
}
.type_btn{
	width: 200rpx;
	text-align: center;
	line-height: 56rpx;
	height: 60rpx;
	border: 2rpx solid #EE603F;
	box-sizing: border-box;
	color: #EE603F;
	background-color: #fff;
	font-size: 28rpx;
	margin-left:20rpx;
	margin-bottom: 20rpx;
	border-radius: 6rpx
}
.type_on{
	background-color: #EE603F;
	color: #fff;
}
.modal_bottom_btn{
	border-top: 2rpx solid #DDDDDD;
	font-size: 16px;
	color: #999999;
  line-height: 86rpx;
	text-align: center;
  width: 680rpx;
} */

</style>