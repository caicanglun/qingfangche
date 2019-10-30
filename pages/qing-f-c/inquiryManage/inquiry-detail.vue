<template>
<view>
<view class="box box_shadow">
  <view class="flex_sb">
    <view class="fs_14 mb_20 pl_10">询价单号: {{inquiryDeatil.showId||inquiryDeatil.id}}</view>
    <!-- <view class='fs_14 color_ee603f font_we_bold pr_10' wx:if="{{identity==4&&inquiryDeatil.analysisStatus==0}}">未推送</view> -->
    <view class="fs_14 color_ee603f font_we_bold pr_10">{{inquiryDeatil.statusName}}</view>
  </view>
  <view class="line mb_30"></view>
  <view class="pl_10">
    <view class="flex mb_20 font_we_bold fs_14 lh_11">品名(别名)：{{inquiryDeatil.name}}</view>
    <view class="font_we_bold ">询价类型：{{inquiryDeatil.inquiryProductType}}</view>
    <image src="/pages/jin-suo-yun/images/dayinjiOff.png" mode="aspectFill" class="printer_img" v-if="inquiryDeatil.status!=9&&(identity==2||identity==3||identity==4)" @tap="toPrinter"></image>
    <view class="mt_20">买帮办：{{inquiryDeatil.buyerName}}</view>
    <view class="mt_20">买家：{{inquiryDeatil.contShowId}}
      <text v-if="identity!=1&&identity!=3&&identity!=4">{{inquiryDeatil.contName}}</text> </view>
    <view class="flex_sb">
      <view class="font_we_lighter mt_20 color_black">建立时间：{{inquiryDeatil.createdDate}}</view>
      <!-- <image src="/images/printer.png" mode='aspectFilt' class='printer_img' wx:if="{{identity==3}}"></image> -->
      <view v-if="identity==2" class="flex">
        <view class="hand_btn" @tap="bindCope" v-if="analysis">复制</view>
        <view class="hand_btn ml_30" @tap="bindClose" v-if="inquiryDeatil.status!=9&&inquiryDeatil.isChange==1">关闭</view>
      </view>
    </view>
  </view>
</view>
<view class="box box_shadow">
  <!-- 分析结果 -->
  <view v-if="analysis">
    <view class="pl_10 mb_20 fs_16 font_we_bold">原样分析结果 </view>
    <view class="line mb_25"></view>
    <view :class="'pl_10 color_black ' + (analysis?'mb_30':'')">
      <view class="mb_25">
        <view>品名(别名)：{{inquiryDeatil.analysises.info.alias||''}}</view>
      </view>
      <view class="mb_25" v-if="inquiryDeatil.analysises.info.series">
        <view>产品系列：{{inquiryDeatil.analysises.info.series||''}}</view>
      </view>
      <view class="mb_25 flex_c ">
        <view class="width_50">成份：{{inquiryDeatil.analysises.info.content}}</view>
        <view class="width_50">品质定位：{{inquiryDeatil.info.positionQualityName||''}}</view>
      </view>
      <view class="mb_25">
        <view>含量：{{inquiryDeatil.analysises.info.contain||''}}</view>
      </view>
      <view class="mb_25">
        <view class="wid_660">规格：{{inquiryDeatil.analysises.info.specification}}</view>
      </view>
      <view class="mb_25 flex_c ">
        <view class="width_50">特性：{{inquiryDeatil.analysises.info.glossLongitudeName}}</view>
        <view class="width_50">密度（{{inquiryDeatil.analysises.info.prodOrGrey==0?'坯布 ':'成品'}}）：{{inquiryDeatil.analysises.info.density=="*"?'':inquiryDeatil.analysises.info.density}}{{inquiryDeatil.analysises.info.prodOrGrey==0?inquiryDeatil.analysises.info.greyDensityUnit||'':inquiryDeatil.analysises.info.prodDensityUnit||''}}</view>
      </view>
      <view class="mb_25 flex_c ">
        <view class="width_50">风格：{{inquiryDeatil.analysises.info.structure}}</view>
        <view class="width_50">幅宽（{{inquiryDeatil.analysises.info.prodOrGrey==0?'坯布 ':'成品'}}）：{{inquiryDeatil.analysises.info.prodOrGrey==0?inquiryDeatil.analysises.info.greyWidth||'':inquiryDeatil.analysises.info.prodWidth||''}}cm</view>
      </view>
      <view class="mb_25 flex_c">
        <view class="width_50">组织：{{inquiryDeatil.analysises.info.organization||''}}</view>
        <view class="width_50">克重（{{inquiryDeatil.analysises.info.prodOrGrey==0?'坯布 ':'成品'}}）：{{inquiryDeatil.analysises.info.prodOrGrey==0?inquiryDeatil.analysises.info.greyWeight||'':inquiryDeatil.analysises.info.prodWeight||''}}{{inquiryDeatil.analysises.info.greyWeight||inquiryDeatil.analysises.info.prodWeight?'g/m²':''}}</view>
      </view>
      <view class="flex_c">
        <view class>备注：{{inquiryDeatil.analysises.info.positionOther||''}}</view>
      </view>
    </view>
  </view>
  <view :class="'open_btn ' + (openDetails?'retract_btn':'open_btn')" v-if="analysis" @tap="openRetract">{{openDetails?'收起详情':'展开详情'}}</view>
  <!-- 原样数据 -->
  <view v-if="!analysis||openDetails">
    <view class="pl_10 mb_20 fs_16 font_we_bold">原样初始数据</view>
    <view class="line mb_25"></view>
    <view class="pl_10 color_black">
      <view class="mb_25" v-if="inquiryDeatil.info.series">
        <view>产品系列：{{inquiryDeatil.info.series||''}}</view>
      </view>
      <view class="mb_25 flex_c ">
        <view class="width_50">成份：{{inquiryDeatil.info.content||''}}</view>
        <view class="width_50">品质定位：{{inquiryDeatil.info.positionQualityName||''}}</view>
      </view>
      <view class="mb_25">
        <view>含量：{{inquiryDeatil.info.contain||''}}</view>
      </view>
      <view class="mb_25">
        <view class="wid_660">规格：{{inquiryDeatil.info.specificationLong||''}}{{inquiryDeatil.info.specificationLong&&inquiryDeatil.info.specificationLat?'*':''}}{{inquiryDeatil.info.specificationLat||''}}</view>
      </view>
      <view class="mb_25 flex_c ">
        <view class="width_50">特性：{{inquiryDeatil.info.glossLongitudeName||''}}</view>
        <view class="width_50">密度（{{inquiryDeatil.info.prodOrGrey==0?'坯布 ':'成品'}}）：{{inquiryDeatil.info.density=="*"?'':inquiryDeatil.info.density}}{{inquiryDeatil.info.prodOrGrey==0?inquiryDeatil.info.greyDensityUnit||'':inquiryDeatil.info.prodDensityUnit||''}}</view>
      </view>
      <view class="mb_25 flex_c ">
        <view class="width_50">风格：{{inquiryDeatil.info.structure||''}}</view>
        <view class="width_50">幅宽（{{inquiryDeatil.info.prodOrGrey==0?'坯布 ':'成品'}}）：{{inquiryDeatil.info.prodOrGrey==0?inquiryDeatil.info.greyWidth||'':inquiryDeatil.info.prodWidth||''}}cm</view>
      </view>
      <view class="flex_c mb_25">
        <view class="width_50">组织：{{inquiryDeatil.info.organization||''}}</view>
        <view class="width_50">克重（{{inquiryDeatil.info.prodOrGrey==0?'坯布 ':'成品'}}）：{{inquiryDeatil.info.prodOrGrey==0?inquiryDeatil.info.greyWeight||'':inquiryDeatil.info.prodWeight||''}}{{inquiryDeatil.info.greyWeight||inquiryDeatil.info.prodWeight?'g/m²':''}}</view>
      </view>
      <view class="flex_c mb_25">
        <view class="width_50">购买数量：{{inquiryDeatil.num||''}}{{inquiryDeatil.unit||''}}</view>
        <view class="width_50">挂码率：{{inquiryDeatil.codeRate||''}}%</view>
      </view>
      <view>备注：{{inquiryDeatil.info.positionOther||''}}</view>

    </view>
  </view>
  <!-- 布样图片 -->
  <view v-if="analysis&&openDetails&&inquiryDeatil.analysises.info.picsList.length>0" class="mb_-10">
    <view class="pl_10 mb_20 mt_30 fs_16 font_we_bold">布样图片 </view>
    <view class="line mb_25"></view>
    <view class="pl_10 flex_warp pr_10">
      <block v-for="(item, index) in inquiryDeatil.analysises.info.picsList" :key="index">
        <image mode="aspectFit" :src="item" :class="'swatch_img  ' + (index==1||index==4||index==7?'mar_25':'')" @tap="previewImg" :data-index="index"></image>
      </block>
    </view>
  </view>
</view>
<!-- 未分析布样图片 -->
<view class="box box_shadow" style="padding-bottom:20rpx" v-if="!analysis&&inquiryDeatil.info.picsList.length>0">
  <view class="pl_10 mb_20 fs_16 font_we_bold">布样图片 </view>
  <view class="line mb_25"></view>
  <view class="pl_10 flex_warp pr_10">
    <block v-for="(item, index) in inquiryDeatil.info.picsList" :key="index">
      <image mode="aspectFit" :src="item" :class="'swatch_img  ' + (index==1||index==4||index==7?'mar_25':'')" @tap="previewImg" :data-index="index"></image>
    </block>
  </view>
</view>

<!-- 匹配报价列表 -->
<view class="back_fff" v-if="isOffer">
  <!-- 买帮办 -->
  <view v-if="identity==2">
    <view class="flex_ju_c font_we_lighter">
      <view :class="(listSelect==0?'on_select':'')" @tap="bindListOption" data-index="0">系统匹配报价</view>
      <view :class="(listSelect==1?'on_select':'')" @tap="bindListOption" data-index="1">人工找样报价</view>
    </view>
    <!-- <view class='flex fs_12 box_border'>
      <view class="{{twoSelect==4?'color_ee603f':''}}" bindtap='bindTwoOption' data-index="4">全部</view>
      <view class="{{twoSelect==0?'color_ee603f':''}}" bindtap='bindTwoOption' data-index="0">待处理</view>
      <view class="{{twoSelect==1?'color_ee603f':''}}" bindtap='bindTwoOption' data-index="1">已推送</view>
      <view class="{{twoSelect==2?'color_ee603f':''}}" bindtap='bindTwoOption' data-index="2">不匹配</view>
      <view class="{{twoSelect==3?'color_ee603f':''}}" bindtap='bindTwoOption' data-index="3">已确认</view>
    </view>
    <view class='selection_line' style="margin-left:{{twoSelect==4?40:(189+twoSelect*149)}}rpx;"></view> -->
  </view>
  <!-- 卖帮办 -->
  <view v-if="identity==3||identity==5">
    <view class="flex_ju_c font_we_lighter">
      <view :class="(listSelect==0?'on_select':'')" @tap="bindListOption" data-index="0">系统匹配报价</view>
      <view :class="(listSelect==1?'on_select':'')" @tap="bindListOption" data-index="1">人工找样报价</view>
    </view>
    <!-- <view class='flex fs_12 box_border'>
      <view class="{{twoSelect==4?'color_ee603f':''}}" bindtap='bindTwoOption' data-index="4">全部</view>
      <view class="{{twoSelect==0?'color_ee603f':''}}" bindtap='bindTwoOption' data-index="0">{{listSelect==0?'待报价':'未分析'}}</view>
      <view class="{{twoSelect==1?'color_ee603f':''}}" bindtap='bindTwoOption' data-index="1">{{listSelect==0?'已报价':'已分析'}}</view>
      <view class="{{twoSelect==2?'color_ee603f':''}}" bindtap='bindTwoOption' data-index="2">不匹配</view>
      <view class="{{twoSelect==3?'color_ee603f':''}}" bindtap='bindTwoOption' data-index="3">已确认</view>
    </view>
    <view class='selection_line' style="margin-left:{{twoSelect==4?40:(189+twoSelect*149)}}rpx;"></view> -->
  </view>
  <!-- 买家 -->
  <view v-if="identity==0">
    <view class="flex_ju_c font_we_lighter">
      <view :class="(listSelect==0?'on_select':'')" @tap="bindListOption" data-index="0">系统匹配报价</view>
      <view :class="(listSelect==1?'on_select':'')" @tap="bindListOption" data-index="1">人工找样报价</view>
    </view>
    <!-- <view class='flex fs_12 buy_box_border'>
      <view class="{{twoSelect==4?'color_ee603f':''}}" bindtap='bindTwoOption' data-index="4">全部</view>
      <view class="{{twoSelect==0?'color_ee603f':''}}" bindtap='bindTwoOption' data-index="0">待处理</view>
      <view class="{{twoSelect==1?'color_ee603f':''}}" bindtap='bindTwoOption' data-index="1">不匹配</view>
      <view class="{{twoSelect==2?'color_ee603f':''}}" bindtap='bindTwoOption' data-index="2">已确认</view>
    </view>
    <view class='selection_line' style="margin-left:{{twoSelect==4?69:245+twoSelect*177}}rpx;"></view> -->
  </view>
  <!-- 卖家 -->
  <view v-if="identity==1">
    <view class="flex_ju_c font_we_bold on_select">
      <view>我的匹配报价</view>
    </view>
    <!-- <view class='flex fs_12 box_border'>
      <view class="{{twoSelect==4?'color_ee603f':''}}" bindtap='bindTwoOption' data-index="4">全部</view>
      <view class="{{twoSelect==0?'color_ee603f':''}}" bindtap='bindTwoOption' data-index="0">待报价</view>
      <view class="{{twoSelect==1?'color_ee603f':''}}" bindtap='bindTwoOption' data-index="1">已报价</view>
      <view class="{{twoSelect==2?'color_ee603f':''}}" bindtap='bindTwoOption' data-index="2">不匹配</view>
      <view class="{{twoSelect==3?'color_ee603f':''}}" bindtap='bindTwoOption' data-index="3">已确认</view>
    </view>
    <view class='selection_line' style="margin-left:{{twoSelect==4?40:(189+twoSelect*149)}}rpx;"></view> -->
  </view>
  <!-- 列表 -->
  <view class v-if="identity!=1">
    <block v-for="(item, index) in listData" :key="index">
      <view class="flex lists_box box_shadow" @tap="toDetailPage" :data-id="item.id" :data-sellerid="item.sellerid">
        <image mode="aspectFit" :src="item.avtar||'/images/jinsy/kehu.png'" class="lists_img"></image>
        <view class="lists_right_box">
          <view class="flex_sb">
            <view class="fs_16 font_we_bold">卖家：{{item.showId}}</view>
            <view class="color_ee603f font_we_bold fs_14">{{twoSelect==4?item.statusName:listStatusName}}</view>
          </view>
          <view class="mt_20 fs_14 font_we_bold" v-if="identity==2">卖帮办：{{item.deputyName||''}}</view>
          <view class="fs_12 mt_20 flex_sb">
            <view>
              <text class="pr_10">保证金：{{item.depositNum||0}}元</text> 成交单数{{item.transactionNum||0}}笔</view>
            <view class="flex_c" v-if="identity!=2&&item.quoteStatus==1">
              <view class="spot"></view>
              <view class="color_21b fs_12">待报价</view>
            </view>
          </view>
          <view class="flex_sb fs_14 mt_20">
            <view v-if="identity==3||(identity==2&&!item.lastPrice)||identity==5">报价：
              <text class="color_ee603f">{{item.price||''}}{{item.unit||''}}</text> </view>
            <view v-if="identity==0||(identity==2&&item.lastPrice)">推送报价：
              <text class="color_ee603f">{{item.lastPrice}}{{item.lastUnit}}</text> </view>

          </view>
          <view class="fs_12 mt_20 color_black" v-if="identity==3||(identity==2&&!item.lastPrice)">报价时间：{{item.createdDateName}}</view>
          <view class="fs_12 mt_20 color_black" v-if="identity==0||(identity==2&&item.lastPrice)">推送时间：{{item.pushDateName}}</view>
        </view>
      </view>
    </block>
  </view>
  <!-- 卖家报价列表 -->
  <block v-for="(item, index) in listData" :key="index" v-if="identity==1">
    <view class="flex list_box" @tap="toDetailPage" :data-id="item.id" :data-sellerid="item.sellerid">
      <image mode="aspectFit" :src="item.picsImg||'/images/noPic.png'" class="same_img"></image>
      <view class="list_right_box">
        <view class="flex_sb font_we_bold mb_20">
          <view class="fs_12 font_we_lighter">匹配样品编号：{{item.infoid}}</view>
          <view class="fs_12 color_ee603f">{{item.statusName}}</view>
        </view>
        <view class="flex_sb_top">
          <view :class="'fs_14 ' + (identity!=2&&item.quoteStatus==1?'wid_470':'')">匹配样品名称：{{item.name}}</view>
          <view class="flex_c fs_12" v-if="identity!=2&&item.quoteStatus==1">
            <view class="spot"></view>
            <view class="color_21b">待报价</view>
          </view>
        </view>
      </view>
    </view>
    <!-- <view class="list_box " bindtap='toDetailPage' data-id='{{item.id}}' data-sellerid='{{item.sellerid}}'>
      <view class='font_we_bold mb_20 fs_14'>匹配样品名称: 春亚纺半光T100</view>
      <view class='flex_sb_c'>
        <view class='font_we_lighter fs_12'>建立时间：2019-03-18</view>
        <view class='fs_14 color_ee603f font_we_bold'>{{twoSelect==4?item.statusName:listStatusName}}</view>
      </view>
    </view> -->
  </block>
  <view class="no_detail" v-if="listData.length==0">暂无{{listSelect==0?'匹配':'找样'}}数据</view>
</view>

<!-- 底部按钮 -->

<!-- 买帮办 -->
<view v-if="identity==2&&analysis&&inquiryDeatil.status!=9&&inquiryDeatil.isChange==1">
  <form @submit="buryingPoint">
    <view class="flex position_bottom box_shadow_btn">
      <button form-type="submit" class="left_btn" @tap="pushDeputy" v-if="inquiryDeatil.pushStatus==0">推送给全体卖帮办</button>
      <button form-type="submit" class="left_btn color_c3" v-if="inquiryDeatil.pushStatus==1">已推送</button>
      <button form-type="submit" class="right_btn" @tap="searchLibrary">搜索样品库</button>
    </view>
  </form>
  <view class="blank"></view>
</view>
<!-- 卖帮办 -->
<view v-if="identity==3&&analysis&&inquiryDeatil.status!=9">
  <form @submit="buryingPoint">
    <view class="flex position_bottom box_shadow_btn" v-if="!isOffer">
      <button form-type="submit" class="left_btn" @tap="addSample">新增找样结果</button>
      <button form-type="submit" class="right_btn" @tap="createCode">生成找样结果二维码</button>
    </view>
    <view class="flex position_bottom box_shadow_btn" v-if="isOffer">
      <button form-type="submit" class="left_btn" @tap="addSample" v-if="listSelect==1">新增找样结果</button>
      <!-- <button form-type='submit' class="left_btn" bindtap='seeAllresults' wx:if="{{listSelect==1}}">查看全部找样结果</button> -->
      <button form-type="submit" class="right_btn" @tap="createCode" v-if="listSelect==1">生成找样结果二维码</button>
      <button form-type="submit" class="bottom_btn" @tap="seeAllppresults" v-if="listSelect==0">查看全部匹配结果</button>
    </view>
  </form>
  <view class="blank"></view>
</view>
<!-- 分析师 -->
<view v-if="identity==4&&inquiryDeatil.status!=9">
  <form @submit="buryingPoint" v-if="!analysis">
    <view class="position_bottom box_shadow_btn">
      <button form-type="submit" class="bottom_btn" @tap="inputResult">录入分析结果</button>
    </view>
  </form>
  <form @submit="buryingPoint" v-if="analysis">
    <view class="position_bottom box_shadow_btn flex">
      <button form-type="submit" class="bottom_btn" @tap="inputResult" data-type="1">修改分析结果</button>
      <!-- <button form-type='submit' class='right_btn' bindtap='pushAllDeputy'>推送</button> -->
    </view>
  </form>
  <view class="blank"></view>
</view>

<view class="modal_mask" @tap="cancelMoadl" v-if="closeModel"></view>
<view class="modal_box fs_12" v-if="closeModel">
  <view class="mt_40 text_center fs_16 font_we_bold">关闭询价单</view>
  <view class="color_ee603f text_center mt_30">关闭询价单后所有匹配和找样结果将会失效!</view>
  <view class="modal_box_text">
    <textarea placeholder="输入关闭原因" @input="reportValue"></textarea>
  </view>
  <view class="flex_sb">
    <view class="model_btn1" @tap="cancelMoadl">取消</view>
    <view class="model_btn2" @tap="determine">确定</view>
  </view>
</view>
<view class="fidex_home" v-if="code" @tap="goHome">
  <image src="/images/personal.png" class="personal_img" mode="aspectFit"></image>
  <view>主页</view>
</view>
</view>
</template>

<script>
const JsyServer = require("../../../services/jsy-server.js");
const Pipe = require("../../../utils/pipe.js");
const Common = require("../../../utils/common.js");
var _this, id;

export default {
  data() {
    return {
      analysis: false,
      //是否已经分析
      swatchImg: ["/images/jinsy/kehu.png", "/images/jinsy/kehu.png", "/images/jinsy/kehu.png", "/images/jinsy/kehu.png", "/images/jinsy/kehu.png", "/images/jinsy/kehu.png", "/images/jinsy/kehu.png", "/images/jinsy/kehu.png", "/images/jinsy/kehu.png"],
      listSelect: 0,
      //0选中匹配报价列表，1选中找样列表
      twoSelect: 4,
      //0待处理；1已推送；2不匹配；3已确认;4全部
      listData: [],
      //匹配列表
      identity: 2,
      //0买家，1卖家，2买帮办，3卖帮办，4分析师
      isOffer: false,
      //是否有匹配报价
      openDetails: false,
      //是否展开详情
      inquiryDeatil: '',
      shut_reason: '',
      //关闭原因
      closeModel: false //关闭模态框是否显示

    };
  },

  onPullDownRefresh: function () {
    this.getDetails(id);
  },
  onShow: function () {
    this.getDetails(id);
  },
  onLoad: function (options) {
    _this = this;
    id = options.id;
    let userInfo = wx.getStorageSync("userInfo");
    let identity;

    if (userInfo && userInfo.authority) {
      identity = userInfo.authority[0].name;
    } else {
      identity = "ROLE_BUYER";
    }

    if (identity == "ROLE_BUYER") {
      identity = 0;
    } else if (identity == "ROLE_SELLER") {
      identity = 1;
    } else if (identity == "ROLE_BUY_DEPUTY") {
      identity = 2;
    } else if (identity == "ROLE_SELL_DEPUTY") {
      identity = 3;
    } else if (identity == "ROLE_ANALYST") {
      identity = 4;
    } else if (identity == "ROLE_SALES_DIRECTOR") {
      identity = 5;
    }

    this.setData({
      identity: identity
    });
  },
  components: {},
  props: {},
  methods: {
    // 获取询价单详情
    getDetails: function (id) {
      JsyServer.getInquiryDetail(id).then(res => {
        wx.stopPullDownRefresh();

        if (res.data.analysises) {
          _this.setData({
            analysis: true
          });
        }

        if (res.data.quotes || res.data.results) {
          _this.setData({
            isOffer: true
          });
        }

        if (res.data.contNam) {
          res.data.contNameNo = res.data.contName.slice(0, 1) + "*****";
        }

        res.data.createdDate = Pipe.setTime(res.data.createdDate);
        res.data.statusName = _this.setStatusName(res.data.status);

        if (res.data.info) {
          res.data.info.picsList = Common.pinImgUrl(res.data.info.pics);
          res.data.info.glossLongitudeName = Common.setGlossLongitude(res.data.info.glossLongitude);
          res.data.info.positionQualityName = Common.setPositionQuality(res.data.info.positionQuality);

          if (res.data.info.prodOrGrey == 0) {
            res.data.info.density = (res.data.info.greyDensityLong || '') + "*" + (res.data.info.greyDensityLat || '');
          } else {
            res.data.info.density = (res.data.info.prodDensityLong || '') + "*" + (res.data.info.prodDensityLat || '');
          }
        }

        if (res.data.analysises && res.data.analysises.info) {
          res.data.analysises.info.picsList = Common.pinImgUrl(res.data.analysises.info.pics);
          res.data.analysises.info.glossLongitudeName = Common.setGlossLongitude(res.data.analysises.info.glossLongitude); // res.data.analysises.info.positionQualityName = Common.setPositionQuality(res.data.analysises.info.positionQuality);

          res.data.analysises.info.specification = res.data.analysises.info.specificationLong + "*" + res.data.analysises.info.specificationLat;

          if (res.data.analysises.info.prodOrGrey == 0) {
            res.data.analysises.info.density = res.data.analysises.info.greyDensityLong + "*" + res.data.analysises.info.greyDensityLat;
          } else {
            res.data.analysises.info.density = res.data.analysises.info.prodDensityLong + "*" + res.data.analysises.info.prodDensityLat;
          }
        }

        if (res.data.quotes) {
          res.data.quoteAll.map(item => {
            item.statusName = _this.setAllstatus(item.status, 0);

            if (item.contName) {
              item.cname = item.contName.slice(0, 1) + "*****";
            }

            if (item.pics && item.pics.length > 0) {
              item.picsImg = Common.pinImgUrl(item.pics)[0];
            }

            if (item.createdDate) {
              item.createdDateName = Pipe.setTime(item.createdDate);
            }

            if (item.pushDate) {
              item.pushDateName = Pipe.setTime(item.pushDate);
            }

            return item;
          });
        }

        if (res.data.results) {
          res.data.resultAll.map(item => {
            item.statusName = _this.setAllstatus(item.status, 1);

            if (item.contName) {
              item.cname = item.contName.slice(0, 1) + "*****";
            }

            if (item.createdDate) {
              item.createdDateName = Pipe.setTime(item.createdDate);
            }

            if (item.pushDate) {
              item.pushDateName = Pipe.setTime(item.pushDate);
            }

            return item;
          });
        }

        _this.setData({
          inquiryDeatil: res.data
        });

        console.log("1111====", res.data);

        _this.setListData();
      }).catch(err => {
        wx.stopPullDownRefresh();
        console.log("err=", err);
      });
    },
    setAllstatus: function (status, type) {
      let arr;
      let identity = this.identity;

      if (identity == 0) {
        arr = ["全部", "待处理", "不匹配", "已确认"];
      } else if (identity == 1) {
        arr = ["全部", "待报价", "已报价", "不匹配", "已确认"];
      } else if (identity == 2 || identity == 5) {
        arr = ["全部", "待处理", "已推送", "不匹配", "已确认"];
      } else if (identity == 3 && type == 1) {
        arr = ["全部", "未分析", "待处理", "已推送", "不匹配", "已确认"];
      } else if (identity == 3 && type == 0) {
        arr = ["全部", "待报价", "待处理", "已推送", "不匹配", "已确认"];
      }

      return arr[status];
    },
    setStatusName: function (status) {
      let isBuyDeputy = this.identity == 2 || this.identity == 0 || this.identity == 4 ? true : false;
      console.log("isBuyDeputy", isBuyDeputy);

      if (status == 1) {
        return '未分析';
      } else if (status == 2 && isBuyDeputy) {
        return '已分析';
      } else if (status == 2 && !isBuyDeputy) {
        return '待处理';
      } else if (status == 3) {
        return '未匹配';
      } else if (status == 4 && isBuyDeputy) {
        return '已匹配';
      } else if (status == 4 && !isBuyDeputy) {
        return '有匹配';
      } else if (status == 9) {
        return '已关闭';
      }
    },
    // 展开关闭详情
    openRetract: function () {
      this.setData({
        openDetails: !this.openDetails
      });
    },
    //点击第一排筛选选项
    bindListOption: function (e) {
      let index = e.currentTarget.dataset.index;
      this.setData({
        listSelect: index
      });
      this.setListData();
    },
    // 点击第二排筛选选项
    bindTwoOption: function (e) {
      let index = e.currentTarget.dataset.index;
      this.setData({
        twoSelect: index
      });
      this.setListData();
    },
    // 设置列表内容
    setListData: function () {
      this.setLisStatus();
      let inquiryDeatil = this.inquiryDeatil,
          listSelect = this.listSelect,
          twoSelect = this.twoSelect,
          listData = [];

      if (listSelect == 0) {
        if (twoSelect == 0) {
          listData = inquiryDeatil.quoteOne;
        } else if (twoSelect == 1) {
          listData = inquiryDeatil.quoteTwo;
        } else if (twoSelect == 2) {
          listData = inquiryDeatil.quoteThree;
        } else if (twoSelect == 3) {
          listData = inquiryDeatil.quoteFour;
        } else if (twoSelect == 4) {
          listData = inquiryDeatil.quoteAll;
        }
      } else {
        if (twoSelect == 0) {
          listData = inquiryDeatil.resultOne;
        } else if (twoSelect == 1) {
          listData = inquiryDeatil.resultTwo;
        } else if (twoSelect == 2) {
          listData = inquiryDeatil.resultThree;
        } else if (twoSelect == 3) {
          listData = inquiryDeatil.resultFour;
        } else if (twoSelect == 4) {
          listData = inquiryDeatil.resultAll;
        }
      }

      this.setData({
        listData: listData || []
      });
    },
    // 设置列表状态
    setLisStatus: function () {
      let identity = this.identity,
          listSelect = this.listSelect,
          twoSelect = this.twoSelect,
          statusName = '';
      let arr0 = [{
        name: '待处理',
        twoSelect: 0
      }, {
        name: '不匹配',
        twoSelect: 1
      }, {
        name: '已确认',
        twoSelect: 2
      }],
          arr2 = [{
        name: '待处理',
        twoSelect: 0
      }, {
        name: '已推送',
        twoSelect: 1
      }, {
        name: '不匹配',
        twoSelect: 2
      }, {
        name: '已确认',
        twoSelect: 3
      }],
          arr3 = [{
        name: '待报价',
        listSelect: 0,
        twoSelect: 0
      }, {
        name: '已报价',
        listSelect: 0,
        twoSelect: 1
      }, {
        name: '不匹配',
        listSelect: 0,
        twoSelect: 2
      }, {
        name: '已确认',
        listSelect: 0,
        twoSelect: 3
      }, {
        name: '未分析',
        listSelect: 1,
        twoSelect: 0
      }, {
        name: '已分析',
        listSelect: 1,
        twoSelect: 1
      }, {
        name: '不匹配',
        listSelect: 1,
        twoSelect: 2
      }, {
        name: '已确认',
        listSelect: 1,
        twoSelect: 3
      }],
          arr4 = [{
        name: '待报价',
        twoSelect: 0
      }, {
        name: '已报价',
        twoSelect: 1
      }, {
        name: '不匹配',
        twoSelect: 2
      }, {
        name: '已确认',
        twoSelect: 3
      }];
      let listStatusName = '';

      if (identity == 0) {
        arr0.map(item => {
          if (item.twoSelect == twoSelect) {
            listStatusName = item.name;
          }
        });
      } else if (identity == 2) {
        arr2.map(item => {
          if (item.twoSelect == twoSelect) {
            listStatusName = item.name;
          }
        });
      } else if (identity == 3) {
        arr3.map(item => {
          if (item.twoSelect == twoSelect && item.listSelect == listSelect) {
            listStatusName = item.name;
          }
        });
      } else if (identity == 1) {
        arr4.map(item => {
          if (item.twoSelect == twoSelect) {
            listStatusName = item.name;
          }
        });
      }

      this.setData({
        listStatusName: listStatusName
      });
    },
    // 跳转到详情页
    toDetailPage: function (e) {
      let id = e.currentTarget.dataset.id;
      let sellerid = e.currentTarget.dataset.sellerid;
      let listSelect = this.listSelect;
      let status = this.inquiryDeatil.status;

      if (listSelect == 0) {
        wx.navigateTo({
          url: '/pages/jin-suo-yun/deputy/matching-results-details?id=' + id + '&sellerid=' + sellerid + '&status=' + status
        });
      } else {
        wx.navigateTo({
          url: '/pages/jin-suo-yun/deputy/sample-result-detail?id=' + id + '&sellerid=' + sellerid
        });
      }
    },
    // 推送给帮办
    pushDeputy: function () {
      JsyServer.pushSellDeputy(id).then(res => {
        wx.showToast({
          title: '推送成功'
        });
        this.getDetails(id);
      }).catch(err => {
        wx.showToast({
          title: '推送失败',
          icon: 'none'
        });
      });
    },
    // 搜索样品库
    searchLibrary: function () {
      let fxid = this.inquiryDeatil.analysises.info.id;
      wx.navigateTo({
        url: '/pages/jin-suo-yun/deputy/matching-results?id=' + fxid + '&xjdid=' + id
      });
    },
    //查看全部找样结果
    seeAllresults: function () {
      wx.navigateTo({
        url: '/pages/jin-suo-yun/deputy/all-search-results?id=' + id
      });
    },
    // 生成找样结果二维码
    createCode: function () {
      let name = this.inquiryDeatil.name;
      wx.navigateTo({
        url: '/pages/jin-suo-yun/deputy/create-code?xjdid=' + id + "&emptyZy=" + name
      });
    },
    // 录入分析结果
    inputResult: function (e) {
      let id = this.inquiryDeatil.id;
      let contid = this.inquiryDeatil.contid;
      let contName = this.inquiryDeatil.contName;
      let alias = this.inquiryDeatil.name;
      let oData = "";

      if (e.currentTarget.dataset.type == 1) {
        oData = JSON.stringify(this.inquiryDeatil.analysises);
      }

      wx.navigateTo({
        url: '/pages/jin-suo-yun/deputy/input-analysis-resulu?data=0&id=' + id + '&contid=' + contid + '&contName=' + contName + '&alias=' + alias + '&oData=' + oData
      });
    },
    // 买帮办：复制数据
    bindCope: function () {
      let detail = this.inquiryDeatil.analysises;
      wx.showModal({
        title: '复制询价单',
        content: '点击确定将会新建询价单，并复制该询价单中的原样初始数据',
        confirmColor: '#EE603F',

        success(res) {
          if (res.confirm) {
            console.log(detail);
            let number1, number2;

            if (detail.info.prodOrGrey == 0) {
              number1 = detail.info.greyDensityLong || '';
              number2 = detail.info.greyDensityLat || '';
            } else {
              number1 = detail.info.prodDensityLong || '';
              number2 = detail.info.prodDensityLat || '';
            }

            let odata = {
              name: detail.name,
              number1,
              number2,
              inquiryProductType: detail.inquiryProductType,
              content: detail.info.content,
              contain: detail.info.contain,
              containLong: detail.info.containLong,
              containLat: detail.info.containLat,
              specificationLong: detail.info.specificationLong,
              specificationLat: detail.info.specificationLat,
              glossLongitude: detail.info.glossLongitude,
              structure: detail.info.structure,
              organization: detail.info.organization,
              prodOrGrey: detail.info.prodOrGrey,
              density: detail.info.greyDensity || detail.info.prodDensity,
              width: detail.info.greyWidth || detail.info.prodWidth,
              weight: detail.info.greyWeight || detail.info.prodWeight,
              positionQuality: detail.info.positionQuality,
              num: detail.num,
              unit: detail.unit,
              positionOther: detail.info.positionOther,
              contid: detail.contid,
              contName: detail.contName,
              pics: detail.info.pics,
              picsList: detail.info.picsList,
              series: detail.info.series
            };
            console.log(odata);
            odata = JSON.stringify(odata);
            wx.navigateTo({
              url: '/pages/jin-suo-yun/newOrder?odata=' + odata
            });
          } else if (res.cancel) {
            console.log('用户点击取消');
          }
        }

      });
    },
    // 输入关闭原因
    reportValue: function (e) {
      this.setData({
        shut_reason: e.detail.value
      });
    },
    // 买帮办：关闭询价单
    bindClose: function () {
      this.setData({
        closeModel: true
      });
    },
    // 关闭模态框
    cancelMoadl: function () {
      this.setData({
        closeModel: false
      });
    },
    // 确定关闭询价单
    determine: function () {
      if (!this.shut_reason) {
        wx.showToast({
          title: '请输入关闭原因',
          icon: 'none'
        });
        return;
      }

      JsyServer.closeInquirySheet(id, this.shut_reason).then(res => {
        wx.showToast({
          title: '关闭成功'
        });

        _this.setData({
          closeModel: false
        });

        _this.getDetails(id);
      }).catch(err => {
        wx.showToast({
          title: '关闭失败',
          icon: 'none'
        });
      });
    },
    // 分析师推送
    pushAllDeputy: function () {
      let data = {
        type: 0,
        id: id
      };
      JsyServer.pushAllDeputy(data).then(res => {
        wx.showToast({
          title: '推送成功'
        });

        _this.getDetails(id);
      }).catch(err => {
        wx.showToast({
          title: '推送失败',
          icon: 'none'
        });
      });
    },
    // 跳转打印界面
    toPrinter: function () {
      wx.navigateTo({
        url: '/pages/jin-suo-yun/deputy/create-code?xjdid=' + id
      });
    },
    previewImg: function (e) {
      let index = e.currentTarget.dataset.index;
      let imgList;

      if (this.analysis) {
        imgList = this.inquiryDeatil.analysises.info.picsList;
      } else {
        imgList = this.inquiryDeatil.info.picsList;
      }

      wx.previewImage({
        current: imgList[index],
        urls: imgList
      });
    },
    // 埋点
    buryingPoint: function (e) {
      console.log("埋点函数");
    },
    // 跳转到录入找样结果
    addSample: function () {
      let zyjgid = 'HY' + Pipe.getTimeStamp();
      wx.navigateTo({
        url: '/pages/jin-suo-yun/sampleResult?id=' + id + '&zyjgid=' + zyjgid
      });
    },
    // 返回首页
    goHome: function () {
      wx.switchTab({
        url: '/pages/tab-user/index'
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
  line-height: 1;
}
.back_fff{
  background-color: #fff;
}
.box{
  margin: 20rpx;
  padding: 20rpx 20rpx 30rpx;
  font-size: 12px;
  background-color: #fff;
  border-radius: 6rpx;
}
.line{
  height:1px;
  background-color: rgba(221, 221, 221, 0.3);
}
.lh_50{
  line-height: 50rpx;
}
.heidian{
  width: 16rpx;
  height: 16rpx;
  border-radius: 16rpx;
  background-color: #000000;
  margin-right: 20rpx;
}
.hand_btn{
  width: 88rpx;
  line-height: 44rpx;
  border-radius: 44rpx;
  border:1px solid #EE603F;
  color:#EE603F;
  text-align: center;
  box-sizing: border-box;
  font-weight: bold;
}
.mb_-10{
  margin-bottom: -10rpx;
}
.mb_25{
  margin-bottom: 25rpx;
}
.mr_30{
  margin-right: 30rpx;
}
.ml_30{
  margin-left: 30rpx;
}
.mt_30{
  margin-top: 30rpx;
}
.mar_25{
  margin: 0 25rpx;
}
.plr_10{
  padding-left: 10rpx;
  padding-right: 10rpx;
}
.color_black{
  color:rgba(0, 0, 0, 0.5);
}
.width_50{
  width: 50%
}

.swatch_img{
  width:200rpx;
  height: 200rpx;
  margin-bottom:20rpx;
  border-radius: 6rpx;
}
.position_bottom{
  position: fixed;
  bottom: 0;
}
.left_btn,.right_btn{
  width: 375rpx;
  height: 98rpx;
  line-height: 98rpx;
  border-radius: 0;
  font-size: 16px;
}
button::after{
  border:none;
}
.left_btn{
  background-color: #fff;
  color:#EE603F;
}
.right_btn{
  background-color: #EE603F;
  color: #fff;
  font-weight: bold;
}
.bottom_btn{
  width: 750rpx;
  line-height: 98rpx;
  border-radius: 0;
  font-size: 16px;
  background-color: #EE603F;
  color: #fff;
  font-weight: bold;
}
.blank{
  height: 98rpx;
}
.flex_ju_c{
  display: flex;
  justify-content: center;
  line-height: 80rpx;
  font-size: 14px;
  color: #EE603F;
  margin-top:20rpx;
	border-bottom: 1rpx solid #EE603F;
}
.on_select{
	background-color: #EE603F;
	color: #fff;
	font-weight: bold;
}
.flex_ju_c>view{
  width: 375rpx;
	text-align: center
}
.box_border{
  margin:10rpx 3rpx; 
}
.box_border>view{
  box-sizing: border-box;
  width: 151rpx;
  line-height: 44rpx;
  border-right: 1rpx solid #D8D8D8;
  text-align: center;
}

.box_border>view:nth-last-child(1),.buy_box_border>view:nth-last-child(1){
   border-right:none;
}
.buy_box_border{
  margin:10rpx 20rpx; 
}
.buy_box_border>view{
 	box-sizing: border-box;
  width: 177rpx;
  line-height: 44rpx;
  border-right: 1rpx solid #D8D8D8;
  text-align: center;
}
.selection_line{
  width: 37px;
  height: 4rpx;
  background-color: #EE603F;
  transition:0.2s;
  margin-bottom: 10rpx;
}
.list_box{
  margin: 0 30rpx;
  padding: 30rpx 0;
  line-height: 1.1;
  border-bottom: 1rpx solid #cccccc;
}
.list_box:nth-last-child(1){
  border:none;
}
.list_img{
  width: 90rpx;
  height: 90rpx;
  margin-right: 20rpx;
  border-radius: 90rpx;
}
.same_img{
	width: 80rpx;
	height: 80rpx;
	margin-right: 20rpx;
	border-radius: 4rpx;
}
.list_right_box{
  width: 580rpx;
}
.open_btn{
  width: 156rpx;
  height: 48rpx;
  line-height: 48rpx;
  background-color:#EE603F;
  color:#fff;
  margin: 0 auto;
  font-size: 12px; 
  border-radius: 24rpx;
  text-align: center;
  box-sizing: border-box;
}
.retract_btn{
  background-color: #fff;
  color: #EE603F;
  line-height: 44rpx;
  border:2rpx solid #EE603F;
  margin-bottom: 30rpx;
}
.no_detail{
	text-align: center;
	padding: 30rpx 0;
	font-size: 14px;
	color: #999999
}

/* 底部模态框 */
.modal_mask {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  background: #000;
  opacity: 0.5;
  overflow: hidden;
}
.modal_box {
  background-color: #fff;
  width: 560rpx;
  z-index: 1001;
  position: fixed;
  top: 376rpx;
  left: 85rpx;
  border-radius: 6rpx;
	padding: 0 10rpx;
}
.text_center{
	text-align: center
}
.modal_box_text {
  width: 470rpx;
  margin: 30rpx auto 20rpx;
  border: 1px solid #CBCBCB;
  background: #F4F4F4;
  padding: 20rpx;
	box-sizing: border-box;
}
.model_btn1, .model_btn2 {
  width: 50%;
  line-height: 86rpx;
  text-align: center;
  border-top: 1px solid #ddd;
	color: #999;
	font-size: 16px
}

.model_btn2 {
  color: #EE603F;
  border-left: 1px solid #ddd;
}
textarea{
	width: 100%;
	height: 120rpx;
}
.mt_40{
	margin-top: 40rpx;
}
.width_170{
	width: 170rpx;
}
.width_480{
	width: 480rpx;
}
.lh_11{
	line-height: 1.1
}
.printer_img{
	width: 50rpx;
	height: 50rpx;
	position: absolute;
	right: 50rpx;
}
.color_c3{
  color: rgba(195, 195, 195, 0.8);
  text-shadow: 0 0 10rpx rgba(195, 195, 195, 0.8);
}
.color_21b{
  color:#D0021B;
}
.spot{
  width: 6rpx;
  height: 6rpx;
  border-radius: 6rpx;
  background-color: #D0021B;
  margin-right: 6rpx;
}
.wid_360{
	width: 360rpx;
	word-break: break-all;
}
.wid_440{
	width:440rpx;
	word-break: break-all;
}
.wid_470{
	width:470rpx;
	word-break: break-all;
}
.back_fff{
	background-color: #fff;
	padding-bottom: 20rpx
}
.lists_box{
	margin: 20rpx 20rpx 0 20rpx;
	padding: 20rpx 30rpx 20rpx 20rpx;
	background-color: #F6F6F6;
	border-radius: 6rpx;
}
.lists_img{
	width: 120rpx;
	height: 120rpx;
	border-right: 120rpx;
	margin-right: 30rpx;
}
.lists_right_box{
	width: 540rpx;
}

</style>