<template>
<view>
<view class="box box_shadow font_we_bold">
  <!-- <view class='flex_sb top_box'>
    <image src='/pages/jin-suo-yun/images/logo.png' class='logo_img' mode='aspectFill'></image>
    <view class='top_right'>{{detail.name||''}}</view>
  </view>
  <view class='flex_sb plr_10'>
    <image src="{{imgUrl}}" class='code_img' mode='aspectFill'></image>
    <view class='top_right'>
      <view>{{detail.id||''}}</view>
			<view class='mt_20'>状态：{{detail.statusName||'待录入'}}</view>
      <view class='mt_20'>{{printer}}</view>
      <view class='mt_20'>打印日期：{{detail.createdDate||''}}</view>
    </view>
  </view> -->
  <view class="flex_sb plr_10">
    <view class="wid_244">
      <image src="/pages/jin-suo-yun/images/logo.png" class="logo_img" mode="aspectFill"></image>
      <image :src="imgUrl" class="code_img" mode="aspectFill"></image>
    </view> 
    <view class="top_right">
      <view>{{detail.id}}</view>
      <view class="mt_20">{{detail.name||''}}</view>
      <view class="mt_20" v-if="detail.automaticName">{{detail.automaticName||''}}</view>
      <view class="mt_20" v-if="type>1">{{detail.buyDeputy||''}}</view>
      <view class="mt_20" v-if="(identity == 3 || identity == 4) && type == 3">{{detail.deputyName||''}}</view>
      <!-- <view class="mt_20" wx:if="{{(identity==2&&type==2)||(identity == 4 && type == 3)}}">{{detail.buyName||''}}</view> -->
      <view class="mt_20" v-if="type>1">{{detail.buyId||''}}</view>
      <view class="mt_20" v-if="(identity==3||identity==4)&&type==3">{{detail.sellerId||''}}</view>
      <view class="mt_20" v-if="(identity == 3 || identity == 4) && type == 2 && detail.analysisName">{{detail.analysisName||''}}</view>
 			<view class="mt_20" v-if="type>1">状态：{{detail.statusName||'待录入'}}</view>
      <view class="mt_20">打印日期：{{detail.createdDate||''}}</view>
    </view>
  </view>
  <!-- <view class='plr_10 mt_50' wx:if="{{type>1&&detail.info}}">原样分析结果</view>
  <view class='table_box' wx:if="{{type>1&&detail.info}}">
    <view class='table_row padding_20'>成分/含量：{{detail.info.content||''}}</view>
    <view class='table_row padding_20'>规格：{{detail.info.specification||''}}</view>
    <view class='flex table_row'>
      <view class='width_50 padding_20 bor_right'>特性：{{detail.info.glossLongitude||''}}</view>
      <view class='width_50 padding_20'>密度（成品）：{{detail.info.density}}</view>
    </view>
    <view class='flex table_row'>
      <view class='width_50 padding_20 bor_right'>风格：{{detail.info.structure}}</view>
      <view class='width_50 padding_20'>幅宽（成品）：{{detail.info.prodOrGrey==0?detail.info.greyWidth:detail.info.prodWidth}}cm</view>
    </view>
    <view class='flex table_row'>
      <view class='width_50 padding_20 bor_right'>品质定位：{{detail.positionQuality}}</view>
      <view class='width_50 padding_20'>克重（成品）：{{detail.info.prodOrGrey==0?detail.info.greyWeight:detail.info.prodWeight}}g/m²</view>
    </view>
  </view> -->
</view>

<view class="fixed_bottom box_shadow_btn">
	<!-- <button class='left_btn'>保存到相册</button> -->
	<button class="btn_middle" @tap="tapStart" :loading="isLabelSend">开始打印</button>
</view>


<!-- <canvas hidden='true' canvas-id='code_canvas' style='width:190px;height:190px'></canvas> -->
<view style="position:absolute;left:-9800rpx">
<block v-for="(item, index) in canvasList" :key="index">
	<canvas :canvas-id="'edit_area_canvas' + (index==0?'':index)" :style="'width:' + canvasWidth + 'px;height:' + canvasHeight + 'px'"></canvas>
</block>
</view>
<view class="modal_mask" @tap="cancelMoadl" v-if="printerModel"></view>
<view class="modal_box fs_16" v-if="printerModel">
	<view class="font_we_bold mt_40">打印二维码</view>
	<view class="mt_30 fs_14">
		<text class="color_6">当前打印机：</text>
		<text class="font_we_bold">Printer_EC72</text>
	</view>
	<view class="flex_c_c mt_20">
		<view class="color_6 fs_14">打印个数： </view>
		<view class="flex_sb_c width_200">
			<view class="modal_btn" @tap="reducePrinterNum">-</view>
			<input class="font_we_bold num_input" :value="(type>1?printerNum:emptyNum)" type="number" @input="inputPrinterNum"></input>
			<view class="modal_btn" @tap="addPrinterNum">+</view>
		</view>
	</view>
	<view class="flex_sb mt_40	">
    <view class="model_btn1" @tap="cancelMoadl">取消</view>
    <view class="model_btn2" @tap="startPrinting">打印</view>
  </view>
</view>
</view>
</template>

<script>
const JsyServer = require("../../../services/jsy-server.js");
const Common = require("../../../utils/common.js");
const Pipe = require("../../../utils/pipe.js");
import { base64src } from "../utils/base64src";
let that;
let app = getApp();
let tsc = require("../utils/tsc.js");
let esc = require("../utils/esc.js");
let encode = require("../utils/encoding.js");

export default {
  data() {
    return {
      emptyNum: 1,
      //空打印张数
      printerNum: 1,
      //打印张数
      canvasWidth: 240,
      //画布宽度
      canvasHeight: 380,
      //画布高度
      oneTimeData: 20,
      looptime: 0,
      currentTime: 1,
      lastData: 0,
      currentPrint: 1,
      emptyPrintNum: 1,
      detail: "",
      imgUrl: '',
      printerModel: false,
      type: '',
      //0空询价，1空找样，2询价，3找样
      canvasList: [1],
      idList: false,
      printer: '打印人：',
      identity: 2
    };
  },

  // 关闭页面
  onUnload: function () {
    wx.closeBLEConnection({
      deviceId: app.BLEInformation.deviceId,
      success: function (res) {
        console.log("关闭蓝牙成功");
      }
    });
  },
  onLoad: function (options) {
    console.log(options);
    that = this;
    let url;
    wx.getSystemInfo({
      success: function (res) {
        if (res.platform == "ios") {
          that.setData({
            oneTimeData: 100
          });
        }
      }
    });
    let userInfo = wx.getStorageSync("userInfo");
    let role = userInfo.authority[0].name;

    if (role == "ROLE_SELL_DEPUTY") {
      this.setData({
        identity: 3,
        printer: '打印人：卖帮办-' + userInfo.name
      });
    } else if (role == "ROLE_BUY_DEPUTY") {
      this.setData({
        identity: 2,
        printer: '打印人：买帮办-' + userInfo.name
      });
    } else if (role == "ROLE_ANALYST") {
      this.setData({
        identity: 4,
        printer: '打印人：分析师-' + userInfo.name
      });
    }

    if (options.emptyZy) {
      //空找样结果
      let zyjgid = 'HY' + Pipe.getTimeStamp();
      let createdDate = that.setTime();
      url = 'pages/jin-suo-yun/transfer-page?type=1&xjid=' + options.xjdid + "&zyjgid=" + zyjgid;
      this.generateQrCode(url);
      let detail = {
        name: options.emptyZy,
        id: '找样单：' + zyjgid,
        createdDate
      };
      this.setData({
        type: 1,
        xjdid: options.xjdid,
        detail: detail
      });
    } else if (options.xjdid) {
      //询价单
      url = "pages/jin-suo-yun/deputy/inquiry-detail?id=" + options.xjdid;
      this.getDetails(options.xjdid);
      this.generateQrCode(url);
      this.setData({
        type: 2
      });
    } else if (options.zyjgid) {
      //找样结果
      url = "pages/jin-suo-yun/deputy/sample-result-detail?id=" + options.zyjgid;
      this.getZyDetails(options.zyjgid);
      this.generateQrCode(url);
      this.setData({
        type: 3
      });
    } else if (options.emptyXj) {
      //空询价单
      let xjid = 'ZY' + Pipe.getTimeStamp();
      let createdDate = that.setTime();
      url = 'pages/jin-suo-yun/transfer-page?type=0&xjid=' + xjid;
      this.generateQrCode(url);
      let detail = {
        name: options.emptyZy,
        id: '询价单：' + xjid,
        createdDate
      };
      this.setData({
        type: 0,
        detail
      });
    }

    wx.notifyBLECharacteristicValueChange({
      deviceId: app.BLEInformation.deviceId,
      serviceId: app.BLEInformation.notifyServiceId,
      characteristicId: app.BLEInformation.notifyCharaterId,
      state: true,
      success: function (res) {
        wx.onBLECharacteristicValueChange(function (r) {
          console.log(`characteristic ${r.characteristicId} has changed, now is ${r}`);
        });
      },
      fail: function (e) {
        console.log(e);
      },
      complete: function (e) {
        console.log(e);
      }
    });
  },
  components: {},
  props: {},
  methods: {
    setTime: function () {
      let nDate = new Date();
      let year = nDate.getFullYear();
      let month = nDate.getMonth() + 1;
      let day = nDate.getDate();

      if (month < 10) {
        month = "0" + month;
      } // let hour = nDate.getHours();
      // let minute = nDate.getMinutes();
      // let second = nDate.getSeconds();


      return year + "-" + month + "-" + day;
    },
    // 生成小程序二维码
    generateQrCode: function (data, i = "") {
      console.log("url-------", data);
      JsyServer.generateQrCode(data).then(res => {
        base64src(res.data, res => {
          that.setData({
            imgUrl: res
          }); // that.setImg(res)

          that.generateImg(res, i);
        });
      }).catch(err => {
        console.log("err===", err);
      });
    },
    // 获取找样结果单详情
    getZyDetails: function (id) {
      JsyServer.getSampleDetail({
        id
      }).then(res => {
        console.log("res==", res);
        res.data.createdDate = Pipe.formatTime(res.data.createdDate);
        res.data.info.glossLongitude = Common.setGlossLongitude(res.data.info.glossLongitude);
        res.data.info.positionQualityName = Common.setPositionQuality(res.data.info.positionQuality);
        let detail = {
          id: "找样单：" + (res.data.showId || res.data.id),
          name: res.data.info.name || '',
          deputyName: "卖帮办：" + res.data.sellerName,
          createdDate: that.setTime(),
          positionQuality: res.data.info.positionQualityName,
          statusName: that.setStatus(res.data.outterStatus),
          // buyName: '买家名称：' + (res.data.buyerContCorporateName||''),
          buyId: '买家编号：' + (res.data.buyerContShowId || ''),
          sellerId: '卖家编号：' + (res.data.sellerContShowId || ''),
          buyDeputy: "买帮办：" + (res.data.buyerName || '')
        };

        if (res.data.inquirySeekResultListAnalysis && res.data.inquirySeekResultListAnalysis.info) {
          let fxInfo = res.data.inquirySeekResultListAnalysis.info;
          fxInfo.glossLongitude = Common.setGlossLongitude(fxInfo.glossLongitude);
          res.data.inquirySeekResultListAnalysis.info.specification = res.data.inquirySeekResultListAnalysis.info.specificationLong + "*" + res.data.inquirySeekResultListAnalysis.info.specificationLat;

          if (res.data.inquirySeekResultListAnalysis.info.prodOrGrey == 0) {
            res.data.inquirySeekResultListAnalysis.info.density = res.data.inquirySeekResultListAnalysis.info.greyDensityLong + "*" + res.data.inquirySeekResultListAnalysis.info.greyDensityLat;
          } else {
            res.data.inquirySeekResultListAnalysis.info.density = res.data.inquirySeekResultListAnalysis.info.prodDensityLong + "*" + res.data.inquirySeekResultListAnalysis.info.prodDensityLat;
          }

          detail.automaticName = fxInfo.name;
          detail.info = fxInfo;
          detail.info.title = "回样分析结果";

          if (fxInfo.alias) {
            detail.name = fxInfo.alias;
          }
        }

        that.setData({
          detail
        });
      }).catch(err => {
        console.log("err=", err);
      });
    },
    // 获取询价单详情
    getDetails: function (id) {
      JsyServer.getInquiryDetail(id).then(res => {
        wx.stopPullDownRefresh();
        res.data.createdDate = Pipe.formatTime(res.data.createdDate);
        res.data.info.positionQualityName = Common.setPositionQuality(res.data.info.positionQuality); // let buyName='';
        // if (res.data.contName){
        //   let buyNameList=res.data.contName.split(" ");
        //   buyName=buyNameList[0];
        // }

        let detail = {
          id: "询价单：" + (res.data.showId || res.data.id),
          name: res.data.name,
          buyDeputy: "买帮办：" + res.data.buyerName,
          createdDate: that.setTime(),
          positionQuality: res.data.info.positionQualityName,
          statusName: that.setStatusName(res.data.status),
          // buyName: '买家名称：' + buyName,
          buyId: '买家编号：' + (res.data.contShowId || '')
        };

        if (res.data.analysises.info) {
          res.data.analysises.info.glossLongitude = Common.setGlossLongitude(res.data.analysises.info.glossLongitude);
          res.data.analysises.info.specification = res.data.analysises.info.specificationLong + "*" + res.data.analysises.info.specificationLat;

          if (res.data.analysises.info.prodOrGrey == 0) {
            res.data.analysises.info.density = res.data.analysises.info.greyDensityLong + "*" + res.data.analysises.info.greyDensityLat;
          } else {
            res.data.analysises.info.density = res.data.analysises.info.prodDensityLong + "*" + res.data.analysises.info.prodDensityLat;
          }

          detail.info = res.data.analysises.info;
          detail.automaticName = detail.info.name;
          detail.info.title = "原样分析结果";
          detail.analysisName = '分析师：' + res.data.analysisName;

          if (detail.info.alias) {
            detail.name = detail.info.alias;
          }
        }

        that.setData({
          detail
        });
      }).catch(err => {
        wx.stopPullDownRefresh();
        console.log("err=", err);
      });
    },
    // 询价单状态
    setStatusName: function (status) {
      let isBuyDeputy = this.identity == 2 || this.identity == 0 || this.identity == 4 ? true : false;

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
    // 找样结果状态
    setStatus: function (item) {
      if (item == -1) {
        return '待录入';
      } else if (item == 1) {
        return '未分析';
      } else if (item == 2) {
        return '未设置';
      } else if (item == 3) {
        return '已分析';
      } else if (item == 4) {
        return '已报价';
      } else if (item == 5) {
        return '已推送';
      } else if (item == 6) {
        return '已确认';
      } else if (item == 7) {
        return '不匹配';
      }
    },
    inputPrinterNum: function (e) {
      let value = e.detail.value || 0;

      if (this.type > 1) {
        this.setData({
          printerNum: value
        });
      } else {
        this.setData({
          emptyNum: value
        });
      }
    },
    reducePrinterNum: function () {
      let printerNum = this.printerNum;
      let emptyNum = this.emptyNum;

      if (this.type > 1) {
        printerNum--;

        if (printerNum > 0) {
          this.setData({
            printerNum: printerNum
          });
        }
      } else {
        emptyNum--;

        if (emptyNum > 0) {
          this.setData({
            emptyNum: emptyNum
          });
        }
      }
    },
    addPrinterNum: function () {
      let printerNum = this.printerNum;
      let emptyNum = this.emptyNum;

      if (this.type > 1) {
        printerNum++;
        this.setData({
          printerNum: printerNum
        });
      } else {
        emptyNum++;
        this.setData({
          emptyNum: emptyNum
        });
      }
    },
    tapStart: function () {
      this.setData({
        printerModel: true
      });
    },
    startPrinting: function () {
      let emptyNum = this.emptyNum;

      if (emptyNum > 1) {
        var arr = Array.from(Array(emptyNum), (v, k) => k);
        this.setData({
          canvasList: arr
        });
        let idList = [];

        for (let i = 0; i < emptyNum; i++) {
          if (this.type == 0) {
            let xjid = 'ZY' + Pipe.getTimeStamp() + i;
            idList[i] = "询价单：" + xjid;
            let url = 'pages/jin-suo-yun/transfer-page?type=0&xjid=' + xjid;

            if (i > 0) {
              this.generateQrCode(url, i);
            }
          } else {
            let id = this.xjdid;
            let zyjgid = 'HY' + Pipe.getTimeStamp() + i;
            idList[i] = "找样单：" + zyjgid;
            let url = 'pages/jin-suo-yun/transfer-page?type=1&xjid=' + id + "&zyjgid=" + zyjgid;

            if (i > 0) {
              this.generateQrCode(url, i);
            }
          }
        }

        this.setData({
          idList: idList
        });
        that.labelTest();
      } else {
        this.labelTest();
      }
    },
    labelTest: function (i = "") {
      //标签测试
      let identity = this.identity;
      let type = this.type;
      var canvasWidth = that.canvasWidth;
      var canvasHeight = that.canvasHeight;
      var command = tsc.jpPrinter.createNew();
      let detail = that.detail;
      let name = detail.name || '';
      let xjdid = "";
      let deputy = this.printer;
      let time = "打印日期：" + (detail.createdDate || "");
      let statusName = "状态：" + (detail.statusName || '待录入');
      let printer = that.printer; // let content = "成分/含量：";
      // let specification = "规格：";
      // let glossLongitude = "特性：";
      // let density = "密度（成品）：";
      // let structure = "风格：";
      // let width = "幅宽（成品）：";
      // let positionQuality = "品质定位："
      // let weight = "克重（成品）：";

      let idList = that.idList;

      if (idList && i) {
        xjdid = idList[i];
      } else {
        xjdid = detail.id;
      } // if (detail) {
      // 	if (idList && i){
      // 		xjdid = idList[i]
      // 	}else{
      // 		xjdid = detail.id;
      // 	}
      // 	console.log("xjdid=====", xjdid)
      //   name = detail.name;
      //   deputy = detail.deputyName;
      //   time += detail.createdDate||"";
      //   positionQuality += detail.positionQuality
      //   if (detail.info) {
      //     content += detail.info.content;
      //     specification += detail.info.specification;
      //     glossLongitude += detail.info.glossLongitude;
      //     density += detail.info.density;
      //     structure += detail.info.structure;
      //     if (detail.info.prodOrGrey == 0) {
      //       width = width + detail.info.greyWidth + "cm";
      //       weight = weight + detail.info.greyWeight + "g/m2"
      //     } else {
      //       width = width + detail.info.prodWidth + "cm"
      //       weight = weight + detail.info.prodWeight + "g/m2"
      //     }
      //   }
      // }


      var nameList = this.setList(name);
      let automaticNameList = detail.automaticName ? this.setList(detail.automaticName) : false;
      console.log("automaticNameList===", automaticNameList);
      let height = 30;
      command.setSize(74, 52);
      command.setGap(0);
      command.setCls();

      if (xjdid) {
        command.setText(250, height, "TSS24.BF2", 1, 1, xjdid.slice(0, 22));
        height += 35;
      }

      if (xjdid && xjdid.length > 22) {
        command.setText(250, height, "TSS24.BF2", 1, 1, xjdid.slice(22));
        height += 35;
      }

      if (nameList) {
        for (let i = 0; i < nameList.length; i++) {
          command.setText(250, height, "TSS24.BF2", 1, 1, nameList[i]);
          height += 35;
        }
      }

      if (automaticNameList) {
        for (let i = 0; i < automaticNameList.length; i++) {
          command.setText(250, height, "TSS24.BF2", 1, 1, automaticNameList[i]);
          height += 35;
        }
      }

      if (type > 1) {
        command.setText(250, height, "TSS24.BF2", 1, 1, detail.buyDeputy);
        height += 35;
      }

      if ((identity == 3 || identity == 4) && type == 3) {
        command.setText(250, height, "TSS24.BF2", 1, 1, detail.deputyName || '');
        height += 35;
      } // if(identity==2&&type==2){
      //   command.setText(250, height, "TSS24.BF2", 1, 1, detail.buyName||'');
      //   height += 35;
      // }
      // if (identity == 4 && type == 3) {
      //   command.setText(250, height, "TSS24.BF2", 1, 1, detail.buyName || '');
      //   height += 35;
      // }


      if (type > 1) {
        command.setText(250, height, "TSS24.BF2", 1, 1, detail.buyId);
        height += 35;
      }

      if ((identity == 3 || identity == 4) && type == 3) {
        command.setText(250, height, "TSS24.BF2", 1, 1, detail.sellerId || '');
        height += 35;
      }

      if ((identity == 3 || identity == 4) && type == 2 && detail.analysisName) {
        command.setText(250, height, "TSS24.BF2", 1, 1, detail.analysisName);
        height += 35;
      }

      if (type > 1) {
        // command.setText(250, 200, "TSS24.BF2", 1, 1, detail.buyId)
        // command.setText(250, 235, "TSS24.BF2", 1, 1, detail.buyDeputy)
        command.setText(250, height, "TSS24.BF2", 1, 1, statusName);
        height += 35;
      }

      command.setText(250, height, "TSS24.BF2", 1, 1, time); // height += 35;
      // if (xjdid) {
      //   command.setText(250, height, "TSS24.BF2", 1, 1, xjdid.slice(0, 22));
      //   height += 35;
      // }
      // if (xjdid && xjdid.length > 22) {
      //   command.setText(250, height, "TSS24.BF2", 1, 1, xjdid.slice(22));
      // }
      // if (this.data.type > 1 && detail.info){
      // 	command.setText(250, 250, "TSS24.BF2", 1, 1, deputy)
      // 	command.setText(30, 370, "TSS24.BF2", 1, 1, detail.info.title)
      // 	command.setBox(10, 410, 572, 710, 2)
      // 	command.setBar(10, 470, 562, 8)
      // 	command.setText(30, 430, "TSS24.BF2", 1, 1, content)
      // 	command.setText(30, 490, "TSS24.BF2", 1, 1, specification)
      // 	command.setText(30, 550, "TSS24.BF2", 1, 1, glossLongitude)
      // 	command.setText(290, 550, "TSS24.BF2", 1, 1, density)
      // 	command.setText(30, 610, "TSS24.BF2", 1, 1, structure)
      // 	command.setText(290, 610, "TSS24.BF2", 1, 1, width)
      // 	command.setText(30, 670, "TSS24.BF2", 1, 1, positionQuality)
      // 	command.setText(290, 670, "TSS24.BF2", 1, 1, weight)
      // }

      wx.canvasGetImageData({
        canvasId: 'edit_area_canvas' + i,
        x: 0,
        y: 0,
        width: canvasWidth,
        height: canvasHeight,
        success: function (res) {
          command.setBitmap(0, 30, 0, res);
        },
        complete: function (res) {
          command.setPagePrint();
          that.setData({
            isLabelSend: true
          });
          wx.showLoading({
            title: '打印中'
          });
          that.prepareSend(command.getData());
        }
      });
    },
    prepareSend: function (buff) {
      //准备发送，根据每次发送字节数来处理分包数量
      var that = this;
      var time = that.oneTimeData;
      var looptime = parseInt(buff.length / time);
      var lastData = parseInt(buff.length % time);
      that.setData({
        looptime: looptime + 1,
        lastData: lastData,
        currentTime: 1
      });
      that.Send(buff);
    },
    Send: function (buff) {
      //分包发送
      var that = this;
      var currentTime = that.currentTime;
      var loopTime = that.looptime;
      var lastData = that.lastData;
      var onTimeData = that.oneTimeData;
      var printNum = that.printerNum;
      var currentPrint = that.currentPrint;
      var emptyPrintNum = that.emptyPrintNum;
      var buf;
      var dataView;

      if (currentTime < loopTime) {
        buf = new ArrayBuffer(onTimeData);
        dataView = new DataView(buf);

        for (var i = 0; i < onTimeData; ++i) {
          dataView.setUint8(i, buff[(currentTime - 1) * onTimeData + i]);
        }
      } else {
        buf = new ArrayBuffer(lastData);
        dataView = new DataView(buf);

        for (var i = 0; i < lastData; ++i) {
          dataView.setUint8(i, buff[(currentTime - 1) * onTimeData + i]);
        }
      } // console.log("第" + currentTime + "次发送数据大小为：" + buf.byteLength)


      wx.writeBLECharacteristicValue({
        deviceId: app.BLEInformation.deviceId,
        serviceId: app.BLEInformation.writeServiceId,
        characteristicId: app.BLEInformation.writeCharaterId,
        value: buf,
        success: function (res) {
          console.log(res);
        },
        fail: function (e) {// console.log(e)
        },
        complete: function (e) {
          // console.log(e)
          currentTime++;

          if (currentTime <= loopTime) {
            that.setData({
              currentTime: currentTime
            });
            that.Send(buff);
          } else {
            if (emptyPrintNum < currentPrint) {
              wx.showToast({
                title: '已打印第' + currentPrint + '张'
              });
            } else {
              wx.showToast({
                title: '已打印第' + emptyPrintNum + '张'
              });
            }

            if (currentPrint == printNum) {
              that.setData({
                looptime: 0,
                lastData: 0,
                currentTime: 1,
                isReceiptSend: false,
                isLabelSend: false,
                currentPrint: 1
              });

              if (emptyPrintNum < currentPrint) {
                that.setData({
                  printerModel: false
                });
              }

              if (emptyPrintNum == that.emptyNum) {
                that.setData({
                  looptime: 0,
                  lastData: 0,
                  currentTime: 1,
                  isReceiptSend: false,
                  isLabelSend: false,
                  currentPrint: 1,
                  printerModel: false
                });

                if (that.type < 2) {
                  wx.navigateBack({});
                }

                wx.hideLoading();
              } else {
                emptyPrintNum++;
                that.setData({
                  emptyPrintNum: emptyPrintNum,
                  currentTime: 1
                });
                that.labelTest(emptyPrintNum - 1);
              }
            } else {
              currentPrint++;
              that.setData({
                currentPrint: currentPrint,
                currentTime: 1
              });
              that.Send(buff);
            }
          }
        }
      });
    },
    // 分行
    setList: function (name = "") {
      let codeNum = 0;
      let index = 0;
      let nameList = [];
      let oneI = '';

      for (let i = 0; i < name.length; i++) {
        if (name.charCodeAt(i) > 255) {
          codeNum += 2;
        } else {
          codeNum++;
        }

        if (index == 0 && codeNum >= 25) {
          index++;
          oneI = i;
          console.log("name---", name.slice(0, i));
          nameList.push(name.slice(0, i));
        } else if (index == 1 && codeNum >= 50) {
          console.log("222222", name.slice(nameList[0].length, i));
          index++;
          nameList.push(name.slice(nameList[0].length, i));
          nameList.push(name.slice(i));
        } else if (index == 1 && codeNum < 50 && i == name.length - 1) {
          index++;
          nameList.push(name.slice(oneI));
        }
      }

      if (index == 0) {
        nameList.push(name);
      }

      console.log("codeNum==", codeNum);
      return nameList;
    },
    generateImg: function (imgUrl, i = 0) {
      i = i == 0 ? '' : i;
      var width = that.canvasWidth;
      var height = that.canvasHeight;
      const ctx = wx.createCanvasContext("edit_area_canvas" + i, this);
      ctx.clearRect(0, 120, 190, 200); // if (app.globalData.platform == "android") {
      //   ctx.translate(width, height)
      //   ctx.rotate(180 * Math.PI / 180)
      // } else {
      //   ctx.translate(width, height)
      //   ctx.rotate(180 * Math.PI / 180)
      // }

      ctx.drawImage("../images/logo.png", 20, 0, 190, 85);
      ctx.drawImage(imgUrl, 0, 105, 240, 240);
      ctx.draw(); // that.onDrawX()
    },
    onDrawX: function (ctx, i) {
      var that = this;
      ctx.draw(false, () => {
        wx.canvasGetImageData({
          canvasId: 'edit_area_canvas' + i,
          x: 0,
          y: 0,
          width: that.canvasWidth,
          height: that.canvasHeight,
          success: res => {
            console.log(res);
            let data = res.data;
            let length = data.length;
            let width = 4 * res.width;
            let pos = 0;
            let array = [];
            let result = [];
            let test = 0;
            let colorArray = []; // 对像素集合中的单个像素进行循环，每个像素是由4个通道组成，所以 i=i+4

            for (let i = 0; i < data.length; i += 4) {
              // 得到 RGBA 通道的值
              let r = data[i],
                  g = data[i + 1],
                  b = data[i + 2]; // 我们从最下面那张颜色生成器中可以看到在图片的右上角区域，有一小块在
              // 肉眼的观察下基本都是白色的，所以我在这里把 RGB 值都在 245 以上的
              // 的定义为白色
              // 大家也可以自己定义的更精确，或者更宽泛一些

              if ([r, g, b].every(v => v < 256 && v > 245)) data[i + 3] = 0;
            } //镜像


            for (let index = 0; index < length; index++) {
              colorArray.push(data[index]);

              if (colorArray.length == 4) {
                array.push(colorArray.concat());
                colorArray = [];
              }

              pos++;

              if (pos >= width) {
                pos = 0;
                let temp = [];
                array.reverse().forEach(item => {
                  temp = temp.concat(item);
                });
                result = result.concat(temp);
                array = [];
              }
            }

            let output = new Uint8ClampedArray(result);
            wx.canvasPutImageData({
              canvasId: 'edit_area_canvas' + i,
              data: output,
              x: 0,
              y: 0,
              width: that.canvasWidth,
              height: that.canvasHeight,

              complete(res) {
                wx.canvasToTempFilePath({
                  canvasId: 'edit_area_canvas' + i,
                  x: 0,
                  y: 0,
                  width: that.canvasWidth,
                  height: that.canvasHeight,
                  destWidth: that.canvasWidth * 3,
                  destHeight: that.canvasHeight * 3,
                  success: function (res) {
                    var height = that.canvasHeight;
                    var width = that.canvasWidth;
                    var tempFilePath = res.tempFilePath;
                    ctx.clearRect(0, 0, width, height);
                    ctx.translate(width, height);
                    ctx.rotate(180 * Math.PI / 180);
                    ctx.drawImage(tempFilePath, 0, 0, width, height);
                    ctx.draw();
                  },
                  fail: function (res) {
                    console.log(res);
                  }
                });
              }

            });
          }
        });
      });
    },
    // 关闭模态框
    cancelMoadl: function () {
      this.setData({
        printerModel: false
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
.box{
	margin: 20rpx;
	background-color: #fff;
	border-radius: 6rpx;
	padding: 30rpx 20rpx 40rpx;
	font-size: 28rpx;
	line-height: 1.2;
}
.logo_img{
	width: 244rpx;
	height: 104rpx;
}
.top_box{
	padding-bottom:40rpx; 
	margin: 0 10rpx;
}
.top_right{
	width: 376rpx;
	word-break: break-all
}
.plr_10{
	padding: 0 10rpx;
}
.code_img{
	width: 244rpx;
	height: 244rpx;
  margin-top: 40rpx
}
.mt_28{
	margin-top: 25rpx;
}
.mt_50{
	margin-top: 50rpx;
	margin-bottom: 20rpx;
}
.table_box{
	border: 1rpx solid #000000;
	font-size: 12px;
}
.table_row{
	
	border-bottom: 1rpx solid #000000;
}
.padding_20{
	padding: 20rpx 0 20rpx 20rpx;
}
.table_row:nth-last-child(1){
	border-bottom: none;
}
.width_50{
	width: 50%;
}
.bor_right{
	border-right: 1rpx solid #000000;
}
.ml_50{
	margin-left: 50rpx;
}
.btn{
	text-align: center;
	color: #fff;
	background-color: #EE603F;
	width: 406rpx;
	line-height: 76rpx;
	border-radius: 6rpx;
	margin-top: 40rpx;
	font-size: 16px;
}
.btn_box{
	margin: 40px 20rpx 0;
	
}
.btn_box>button{
	width: 326rpx;
	height: 76rpx;
	border-radius: 6rpx;
	box-sizing: border-box;
	line-height: 76rpx;
	font-size: 16px;
	font-weight: bold;
}
.left_btn{
	color: #EE603F;
	background-color: #fff;
	border: 2rpx solid #EE603F; 
}
.right_btn{
	background-color: #EE603F;
	color: #fff;
}
.num_input{
	width: 104rpx;
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
	text-align: center
}
.color_6{
	color: rgba(0, 0, 0, 0.5)
}
.modal_btn{
	width: 49rpx;
	line-height: 49rpx;
	background-color: #EE603F;
	color: #fff;
	border-radius: 6rpx;
}
.width_200{
	width: 200rpx;
}
.mt_40{
	margin-top: 40rpx;
}
.mt_30{
	margin-top: 30rpx;
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
.wid_244{
  width: 244rpx
}
</style>