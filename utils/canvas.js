const Es6Promise = require('../lib/es6-promise.js');

/**
 * 获取保存本地图片权限
 */
function getAlbumSetting(saveStr) {
  return new Es6Promise(function (resolve, reject) {
    if (wx.getSetting) {
      wx.getSetting({
        success(res) {
          if (!res.authSetting['scope.writePhotosAlbum']) {
            if (wx.authorize) {
              wx.authorize({
                scope: 'scope.writePhotosAlbum',
                success(resMsg) {
                  saveCanvas(saveStr).then(() => {
                    resolve(true);
                  })
                },
                fail: function (errMsg) {
                  if (wx.openSetting) {
                    // 打开用户设置
                    wx.openSetting({
                      success: function (openRes) {
                        if (openRes.authSetting['scope.writePhotosAlbum']) {
                          saveCanvas(saveStr).then(() => {
                            resolve(true);
                          })
                        }
                      },
                      fail: function() {
                        showModal("微信 openSetting 方法错误");
                      }
                    });
                  } else {
                    wx.showModal({
                      title: '版本提示',
                      content: '当前版本暂不支持该功能，请升级微信版本！',
                    })
                  }
                }
              })
            } else {
              wx.showModal({
                title: '版本提示',
                content: '当前版本暂不支持该功能，请升级微信版本！',
              })
            }
          } else {
            saveCanvas(saveStr).then(() => {
              resolve(true);
            })
          }
        }
      })
    } else {
      wx.showModal({
        title: '版本提示',
        content: '当前版本暂不支持该功能，请升级微信版本！',
      })
    }
  })
}

/**
 * 保存canvas
 */
function saveCanvas(saveStr) {
  return new Es6Promise(function (resolve, reject) {
    if (saveStr == "order") {
      saveOrderPhone().then(orderRes => {
        resolve(true);
      })
    } else if (saveStr == "detail") {
      saveDetailCanvas().then(detailRes => {
        resolve(true);
      })
    } else if (saveStr == "list") {
      saveListCanvas().then(listRes => {
        resolve(true);
      })
    }
  })
}

/**
 * 功能：设置递增
 * 参数：start: 起始值；inc: 递增值；mul: 倍数
 */
function setMath(start, inc, mul) {
  return Number((start + (inc * mul)).toFixed(2));
}

/**
 * 功能：通过当前的手机，计算页面 rpx 和 canvas的宽度
 */
function setPhone() {
  const phoneInfo = wx.getSystemInfoSync();
  let screenW = phoneInfo.screenWidth;
  let rpx = screenW / 750; // 转换为rpx单位

  return [rpx, screenW];
}

/**
 * 功能：用于判断字符串包含的非中文数量
 */
function strCount(str, objLen) {
  let [cutLen, strLen] = [0, 0];
  let reg = /[u4E00-u9FA5]/;

  for (let i = 0; i < str.length; i++) {
    let iStr = str.charAt(i);

    if (!reg.test(iStr)) {
      cutLen += 2;
    } else {
      cutLen += 1;
    }
    strLen++;

    if (Math.ceil(cutLen / 2) >= objLen) break;
  }

  return [Math.ceil(cutLen / 2), // 中文与非中文区分后的长度
    strLen]  // 字符长度
}

/**
 * 功能：绘制 canvas 头部logo和抬头
 * 参数：
 *    ctx：canvas 对象
 *    oTitle：canvas 的抬头
 *    rpx：当前页面的rpx值
 */
function setCanvasHeader(ctx, oTitle, rpx) {
  /**
   * 顶部设置
   */
  let t_left = rpx * 250;
  // 绘制logo
  ctx.drawImage("../../images/logo.png", rpx*40, rpx*40, rpx * 184, rpx * 70);
  // 绘制直线
  ctx.setFillStyle('#000000');
  ctx.moveTo(t_left, rpx * 60);
  ctx.lineTo(t_left, rpx * 90);
  ctx.stroke();
  // 绘制抬头
  ctx.setFontSize(16)
  ctx.fillText(oTitle, rpx * 275, rpx * 85);

  return rpx;
}

/**
 * 绘制 canvas 订单凭证
 */
function drawOrderCanvas(oDetail, oMoney, totalMoney, canvasH, PayRateNum) {
  let userInfo = wx.getStorageSync("userInfo");
  let oOrder = oDetail.buyOrder ? oDetail.buyOrder : oDetail.sellOrder;
  let oInfo = oDetail.info;

  let oI = {
    userName: userInfo.name || '', // 用户名称
    userTel: userInfo.phone || '', // 用户手机
    orderId: oDetail.id || '', // 订单id
    orderTime: oDetail.createdDate || '', // 创建时间
    orderPrice: oOrder.price || '', // 单价
    orderPUnit: oOrder.punit || '', // 单价单位
    orderNum: oOrder.num || '', // 数量
    orderNUnit: oOrder.nunit || '' // 数量单位
  };
  let oL = {
    oName: oInfo.name || '', // 品名
    ostructure: oInfo.structure || '', // 风格
    ocontent: oInfo.content || '', // 成分含量
    oSpec: oInfo.specification || '', // 规格
    oGloss: oInfo.glossLongitude || '', // 特性
    oDensity: oInfo.prodDensity || oInfo.greyDensity || '', // 密度
    oQPosition: oInfo.positionQuality || '', // 品质定位
    oWidth: oInfo.prodWidth || oInfo.greyWidth || '', // 幅宽
    oWidUnit: oInfo.prodWidth ? 'cm' : oInfo.greyWidth ? 'cm' : '',
    oQRequire: oInfo.quality || '', // 品质要求
    oWeight: oInfo.prodWeight || oInfo.greyWeight || '', // 克重
    oWeiUnit: oInfo.prodWeight ? oInfo.prodWeightUnit : oInfo.greyWeigh ? oInfo.greyWeightUnit : ''
  }

  const ctx = wx.createCanvasContext("order-canvas");
  let [rpx, screenW] = setPhone();
  let rpx_40 = rpx * 40;
  let rpx_46 = rpx * 46;
  let rpx_50 = rpx * 50;
  let rpx_60 = rpx * 60;
  
  ctx.setFillStyle('#ffffff');
  ctx.fillRect(0, 0, screenW * 0.86, rpx*canvasH);

  // setCanvasHeader(ctx, '订单交易凭证', rpx);
  /**
   * 顶部设置
   */
  let t_left = rpx * 250;
  // 绘制logo
  ctx.drawImage("../../images/logo.png", rpx * 40, rpx * 40, rpx * 184, rpx * 70);
  // 绘制直线
  ctx.setFillStyle('#000000');
  ctx.moveTo(t_left, rpx * 60);
  ctx.lineTo(t_left, rpx * 90);
  ctx.stroke();
  // 绘制抬头
  ctx.setFontSize(16)
  ctx.fillText("订单交易凭证", rpx * 275, rpx * 85);

  /**
   * 订单详情设置
   */
  let oRpx = rpx * 160;
  let oNum = 0;

  ctx.setFontSize(12);
  ctx.fillText(`坯布配账号：${oI.userName}/${oI.userTel}`, rpx_40, oRpx);
  ctx.fillText(`订单号：${oI.orderId}`, rpx_40, setMath(oRpx, rpx_46, ++oNum));
  ctx.fillText(`订单时间：${oI.orderTime}`, rpx_40, setMath(oRpx, rpx_46, ++oNum));
  
  let m_left = rpx_40;
  let m_top = setMath(oRpx, rpx_46, oNum);
  let box_left = (screenW * 0.86 / 2) - rpx*20;
  console.log(box_left)

  ctx.fillText(`单价：${oI.orderPrice}${oI.orderPUnit}`, rpx_40, setMath(oRpx, rpx_46, ++oNum));
  ctx.fillText(`数量：${oI.orderNum}${oI.orderNUnit}`, box_left, setMath(oRpx, rpx_46, oNum));

  // 金额
  oMoney.map((item, i) => {
    if (i%2==0) { // 偶数
      m_left = rpx_40;
      m_top = setMath(oRpx, rpx_46, ++oNum);
    } else { // 奇数
      m_left = box_left;
    }

    if (item.order) {

      ctx.fillText(`订单金额：${item.order}元`, m_left, m_top);
    } else if (item.deposit) {

      ctx.fillText(`定金金额：${item.deposit} 元`, m_left, m_top);
    } else if (item.other) {

      ctx.fillText(`其它金额：${item.other} 元`, m_left, m_top);
    } else if (item.rate) {

      ctx.fillText(`信用卡手续费(0.${PayRateNum}%)：${item.rate} 元`, m_left, m_top);
    } else if (item.commis) {
      
      if (item.feeRate) {
        ctx.fillText(`佣金金额(${item.feeRate * 100}%)：${item.commis} 元`, m_left, m_top);
      } else {
        ctx.fillText(`佣金金额：${item.commis} 元`, m_left, m_top);
      }
    } else if (item.bail) {

      ctx.fillText(`扣除保证金：${item.bail} 元`, m_left, m_top);
    }
  })
  
  if (oDetail.buyOrder) {
    ctx.fillText(`支付总金额：`, rpx_40, setMath(oRpx, rpx_46, ++oNum));
    ctx.setFillStyle('#ff0000');
    ctx.fillText(`${totalMoney}元`, rpx * 180, setMath(oRpx, rpx_46, oNum));
    ctx.setFillStyle('#000000');
  } else {
    ctx.fillText(`收付总金额：`, rpx_40, setMath(oRpx, rpx_46, ++oNum));
    ctx.setFillStyle('#ff0000');
    ctx.fillText(`${totalMoney}元`, rpx * 180, setMath(oRpx, rpx_46, oNum));
    ctx.setFillStyle('#000000');
  }
  

  /**
   * 坯布详情设置
   */
  // 绘制背景颜色
  let boxW = (screenW * 0.86) - (rpx_40 * 2); // 灰色背景宽度
  let o_Top = setMath(oRpx, rpx_46, oNum) + rpx*30; // 灰色背景 top

  ctx.setFillStyle('#eeeeee');
  ctx.fillRect(rpx_40, o_Top, boxW, rpx * 290);

  // 绘制坯布文本
  // let tRpx = rpx * 510;
  // let gRpx = rpx * 520;
  let text_top = o_Top + 20*rpx; // 文本高度
  let g_left = boxW / 2 + rpx * 20; // 右半部分详情距离左边的距离

  ctx.setFontSize(16);
  ctx.setFillStyle('#000000');
  let wordLen = Math.round(screenW / 25);
  if (oL.oName.length >= wordLen) {
    ctx.fillText(oL.oName.substring(0, wordLen) + '...', rpx_60, setMath(text_top, rpx_40, 1));
  } else {
    ctx.fillText(oL.oName, rpx_60, setMath(text_top, rpx_40, 1));
  }

  ctx.setFontSize(11);
  ctx.fillText(`风格：${oL.ostructure}`, rpx_60, setMath(text_top, rpx_40, 2));
  ctx.fillText(`成分/含量：${oL.ocontent}`, g_left, setMath(text_top, rpx_40, 2));

  ctx.fillText(`规格：${oL.oSpec}`, rpx_60, setMath(text_top, rpx_40, 3));

  ctx.fillText(`特性：${oL.oGloss}`, rpx_60, setMath(text_top, rpx_40, 4));
  ctx.fillText(`密度(成品)：${oL.oDensity}`, g_left, setMath(text_top, rpx_40, 4));

  ctx.fillText(`品质定位：${oL.oQPosition}`, rpx_60, setMath(text_top, rpx_40, 5));
  ctx.fillText(`幅宽(成品)：${oL.oWidth}${oL.oWidUnit}`, g_left, setMath(text_top, rpx_40, 5));

  ctx.fillText(`品质要求：${oL.oQRequire}`, rpx_60, setMath(text_top, rpx_40, 6));
  ctx.fillText(`克重(成品)：${oL.oWeight}${oL.oWeiUnit}`, g_left, setMath(text_top, rpx_40, 6));

  ctx.draw();
}

/**
 * 将 订单凭证 的canvas转化为图片，并保存图片到本地
 */
function saveOrderPhone() {
  return new Es6Promise(function (resolve, reject) {
    // 将canvas转化为图片，并返回路径
    wx.canvasToTempFilePath({
      canvasId: "order-canvas",
      success: function (res) {
        // 保存图片到本地
        wx.saveImageToPhotosAlbum({
          filePath: res.tempFilePath,
          success: function () {
            wx.showToast({
              title: "保存成功",
              icon: "../images/save-canvas.png",
              mask: true,
              success: function () {
                resolve(true);
              }
            })
          }
        })
      }
    })
  })
}

/**
 * 绘制 canvas 现货/求购 详情
 */
function drawDetailCanvas(obj) {
  let o = {
    title: obj.title, // 抬头
    name: obj.name || "", // 品名
    num: obj.num || '', // 数量
    pic: obj.pic || "../../images/detail-buy-s.png", // 布匹图片
    weChat: obj.weChat || "../../images/detail-buy-s.png", // 二维码图片
    disc: obj.disc || "", // 现货单价 或 求购数量
    page: obj.page || "goods", // 页面
    nData: obj.nData || "" // 布匹详情
  }

  const ctx = wx.createCanvasContext("detail-canvas");
  let [rpx, screenW] = setPhone();
  let start = screenW/100;
  let text1 = "";
  let text2 = "";

  if (o.page == "goods") {
    text2 = "价格优惠，欢迎询价";
  } else {
    text2 = "现金求布，有货私聊";
  }

  // 绘制橘色外壳
  ctx.setFillStyle('#ff8834');
  ctx.fillRect(0, 0, rpx * 710, rpx * 710);

  // 绘制白色底部
  ctx.setFillStyle('#ffffff');
  ctx.setTextAlign('left');
  ctx.fillRect(10*rpx, 10*rpx, rpx * 690, rpx * 450);
  
  /**
   * 绘制内容
   */
  let wordLeft = rpx * 320;
  
  // 绘制品名
  ctx.setFillStyle('#000000');

  if (ctx.font) {
    ctx.font = 'bold 20px sans-serif';
  } else {
    ctx.setFontSize(20);
  }

  if (screenW <= 320) {
    let sLen = 13;
    let [cutLen, strLen] = strCount(o.name, sLen);

    if (cutLen >= sLen) {
      let [newCutLen, newStrLen] = strCount(o.name.substring(strLen, o.name.length), sLen);

      if (newCutLen >= sLen && (newStrLen + strLen - 1) < o.name.length) {
        ctx.fillText(o.name.substring(0, strLen), rpx * 40, rpx * 60);
        ctx.fillText(o.name.substring(strLen, strLen + newStrLen), rpx * 40, rpx * 110);
        ctx.fillText(o.name.substring(strLen + newStrLen, o.name.length), rpx * 40, rpx * 160);
      } else {
        ctx.fillText(o.name.substring(0, strLen), rpx * 40, rpx * 80);
        ctx.fillText(o.name.substring(strLen, o.name.length), rpx * 40, rpx * 130);
      }
    } else {
      ctx.fillText(o.name, rpx * 40, rpx * 100);
    }
  } else {
    let sLen = 15;
    let [cutLen, strLen] = strCount(o.name, sLen);

    if (cutLen >= sLen) {
      let [newCutLen, newStrLen] = strCount(o.name.substring(strLen, o.name.length), 15);

      if (newCutLen >= sLen && (newStrLen + strLen - 1) < o.name.length) {
        ctx.fillText(o.name.substring(0, strLen), rpx * 40, rpx * 60);
        ctx.fillText(o.name.substring(strLen, strLen + newStrLen), rpx * 40, rpx * 110);
        ctx.fillText(o.name.substring(strLen + newStrLen, o.name.length), rpx * 40, rpx * 160);
      } else {
        ctx.fillText(o.name.substring(0, strLen), rpx * 40, rpx * 80);
        ctx.fillText(o.name.substring(strLen, o.name.length), rpx * 40, rpx * 130);
      }
    } else {
      ctx.fillText(o.name, rpx * 40, rpx * 100);
    }
  }

  if (ctx.font) {
    ctx.font = 'normal 12px sans-serif';
  } else {
    ctx.setFontSize(12);
  }

  // 绘制订单图片
  ctx.drawImage(o.pic, rpx * 40, rpx * 170, rpx * 260, rpx * 260);
  
  ctx.setTextAlign("left");
  
  let wordLen = Math.round(screenW / 40);
  let len = Math.ceil(o.nData.positionQuality.length / wordLen) + 1;

  ctx.setFillStyle('#666666');

  // 数量
  let wordTop = 0;
  if (o.page == "goods") {
    wordTop = 190 * rpx;
    ctx.setFillStyle("#ff8834");
    ctx.fillText(`数量：${o.num}`, wordLeft, wordTop);
    wordTop = 250*rpx;
    ctx.setFillStyle("#000000");
  } else {
    wordTop = 220*rpx;
  }

  // 规格
  let spec = o.nData.specification;
  if (screenW <= 320) {
    let sLen = 10;
    let [cutLen, strLen] = strCount(spec, sLen);

    if (cutLen >= sLen) {
      let [newCutLen, newStrLen] = strCount(spec.substring(strLen, spec.length), sLen);

      if (newCutLen >= sLen && (newStrLen + strLen - 1) < spec.length) {
        ctx.fillText(`规格：${spec.substring(0, strLen)}`, wordLeft, wordTop - rpx * 20);
        ctx.fillText(`${spec.substring(strLen, strLen + newStrLen)}`, wordLeft + rpx * 80, wordTop+10*rpx);
        ctx.fillText(`${spec.substring(strLen + newStrLen, spec.length)}`, wordLeft+rpx*80, wordTop+30*rpx);
      } else {
        ctx.fillText(`规格：${spec.substring(0, strLen)}`, wordLeft, wordTop-rpx * 20);
        ctx.fillText(`${spec.substring(strLen, spec.length)}`, wordLeft + rpx * 80, wordTop+10*rpx);
      }
    } else {
      ctx.fillText(`规格：${spec}`, wordLeft, wordTop);
    }
  }
  else if (screenW > 320) {
    let sLen = 12;
    let [cutLen, strLen] = strCount(spec, sLen);

    if (cutLen >= sLen) {
      let [newCutLen, newStrLen] = strCount(spec.substring(strLen, spec.length), sLen);

      if (newCutLen >= sLen && (newStrLen + strLen - 1) < spec.length) {
        ctx.fillText(`规格：${spec.substring(0, strLen)}`, wordLeft, wordTop-20*rpx);
        ctx.fillText(`${spec.substring(strLen, strLen + newStrLen)}`, wordLeft + rpx * 70, wordTop+10*rpx);
        ctx.fillText(`${spec.substring(strLen + newStrLen, spec.length)}`, wordLeft+rpx*70, wordTop+40*rpx);
      } else {
        ctx.fillText(`规格：${spec.substring(0, strLen)}`, wordLeft, wordTop-20*rpx);
        ctx.fillText(`${spec.substring(strLen, spec.length)}`, wordLeft + rpx * 70, wordTop+10*rpx);
      }
    } else {
      ctx.fillText(`规格：${spec}`, wordLeft, wordTop);
    }
  }

  ctx.fillText(`特性：${o.nData.glossLongitude}`, wordLeft, wordTop+60*rpx);
  ctx.fillText(`密度：${o.nData.prodDensity}`, wordLeft, wordTop+120*rpx);

  let position = o.nData.positionQuality;
  if (position.length > 8 && screenW <= 320) {
    let sLen = 8;
    ctx.fillText(`品质定位：${position.substring(0, sLen)}`, wordLeft, wordTop+180*rpx);

    if (position.length > sLen*2) {
      ctx.fillText(`${position.substring(sLen, sLen * 2)}`, wordLeft + 140 * rpx, wordTop + 210 * rpx);
      ctx.fillText(`${position.substring(sLen * 2, position.length)}`, wordLeft+140*rpx, wordTop+240*rpx);
    } else {
      ctx.fillText(`${position.substring(sLen, position.length)}`, wordLeft + 140 * rpx, wordTop+210*rpx);
    }

  } else if (position.length > 10 && screenW > 320) {
    ctx.fillText(`品质定位：${position.substring(0, 10)}`, wordLeft, wordTop + 180 * rpx);
    ctx.fillText(`${position.substring(10, position.length)}`, wordLeft + 120 * rpx, wordTop+210*rpx);
  } else {
    ctx.fillText(`品质定位：${o.nData.positionQuality}`, wordLeft, wordTop + 180 * rpx);
  }

  /*
   * 绘制logo和抬头
   */
  let t_left = rpx * 300;
  let t_top = rpx * 330;

  // 绘制抬头
  // if (ctx.font) {
  //   ctx.font = 'bold 50px sans-serif';
  // } else {
  //   ctx.setFontSize(50);
  // }
  
  // ctx.setFillStyle('#ffffff');
  // ctx.fillText(o.title, rpx * 30, rpx * 570);
  if (o.page == "goods") {
    ctx.drawImage('../../images/day-goods.png', 30 * rpx, rpx * 480, rpx * 411, rpx * 100);
  } else {
    ctx.drawImage('../../images/day-buy.png', 30 * rpx, rpx * 480, rpx * 411, rpx * 100);
  }

  /**
   * 绘制二维码和推送文本
   */
  // 绘制二维码
  ctx.drawImage(o.weChat, (screenW * 0.94 - rpx *195), rpx * 480, rpx * 190, rpx * 220);

  // 绘制文本
  if (ctx.font) {
    ctx.font = 'normal 23px sans-serif';
  } else {
    ctx.setFontSize(23);
  }
  ctx.setFillStyle('#ffffff');
  ctx.fillText(text2, 30 * rpx, rpx * 640);

  ctx.setFontSize(12);
  ctx.fillText('扫二维码，查看更多', 30 * rpx, rpx * 690);
  
  ctx.draw();
}

/**
 * 将求购、现货详情的canvas转化为图片，并保存图片到本地
 */
function saveDetailCanvas() {
  return new Es6Promise(function (resolve, reject) {
    // 将canvas转化为图片，并返回路径
    wx.canvasToTempFilePath({
      canvasId: "detail-canvas",
      success: function (canvasRes) {
        // 保存图片到本地
        wx.saveImageToPhotosAlbum({
          filePath: canvasRes.tempFilePath,
          success: function () {
            wx.showToast({
              title: "保存成功",
              icon: "../images/save-canvas.png",
              mask: true,
              success: function () {
                resolve(true);
              }
            })
          }
        })
      }
    })
  })
}

/**
 * 绘制 求购/现货列表 canvas
 */
function drawListCanvas(obj) {
  let o = {
    listArr: obj.listArr,
    title: obj.title || "现货供应",
    weChat: obj.weChat || "../../images/detail-buy-s.png",
    canvasH: obj.canvasH,
    whiteH: obj.whiteH
  }

  const ctx = wx.createCanvasContext("list-canvas");
  let [rpx, screenW] = setPhone();
  let rpx_710 = rpx * 710;
  let rpx_40 = 40 * rpx;
  
  // 清除画布
  ctx.clearRect(0, 0, rpx_710, rpx * o.canvasH);

  // 绘制橘色外壳
  ctx.setFillStyle('#ff8834');
  ctx.fillRect(0, 0, rpx_710, rpx * o.canvasH);

  // 绘制抬头
  // if (ctx.font) {
  //   ctx.font = 'blod 52px sans-serif'
  // } else {
  //   ctx.setFontSize(52);
  // }
  // ctx.setTextAlign('center');
  // ctx.fillText(o.title, rpx_710/2, rpx * 120);

  if (o.title.indexOf("现货") != -1) {
    ctx.drawImage('../../images/day-goods.png', (710 - 445) / 2 * rpx, 30 * rpx, rpx * 445, rpx * 108);
  } else {
    ctx.drawImage('../../images/day-buy.png', (710 - 445) / 2 * rpx, 30 * rpx, rpx * 445, rpx * 108);
  }


  // 绘制白底
  // ctx.setTextAlign('left');
  ctx.setFillStyle('#ffffff');
  ctx.fillRect(10*rpx, 160 * rpx, 690 * rpx, o.whiteH * rpx);
  
  let wordTop = 210 * rpx;
  let newWordTop = 0;

  o.listArr.map((item, i) => {
    newWordTop = setMath(wordTop, rpx * 100, i);
    
    let textTop = newWordTop + 40 * rpx;
    let borderTop = newWordTop + 60 * rpx;

  //   // 绘制白色底部
  //   ctx.setFillStyle('#ffffff');
  //   ctx.fillRect(rpx * 10, rTop, screenW * 0.94-20*rpx, rpx * 90);

  //   // 绘制橙色圆
  //   ctx.beginPath();
  //   ctx.setFillStyle('#ff8834');
  //   ctx.arc(rpx * 55, cTop, rpx * 30, 0, 2 * Math.PI);
  //   ctx.closePath();
  //   ctx.fill();

  //   // 绘制编号
  //   ctx.setFillStyle('#ffffff');
  //   ctx.fillText(i + 1, rpx * 45, tTop);

    // 绘制标题
    ctx.setFontSize(16);
    ctx.setFillStyle('#000000');
    // item.name = "机构的进攻吧炯炯去哦挂机哦iosjo对公IE噢公布就偶尔感觉2342熊放假"
    ctx.fillText(`${item.name || ''}    ${item.stock || ''}${item.stock ? item.sunit || '' : ''}`, rpx_40, newWordTop, 630 * rpx);

    ctx.setFontSize(13);
    ctx.setFillStyle('#aaaaaa');
    // item.specification = "脚结构的FGJDOO放假狗年";
    let allStr = `${item.specification || ''}   ${item.glossLongitude || ''}   ${item.greyDensity || item.prodDensity || ''}   ${item.positionQuality || ''}`;

    // let allMax = Math.ceil(screenW / 14);
    // console.log(allMax)
    // let [cutLen, strLen] = strCount(allStr, allMax);
    // console.log(cutLen, strLen)
    // allStr = cutLen >= allMax ? `${allStr.substring(0, strLen)}...` : allStr;
    ctx.fillText(allStr, rpx_40, textTop, 630*rpx);

    // 绘制直线
    if (o.listArr.length-1 > i) {
      ctx.setStrokeStyle('#eeeeee');
      ctx.setLineWidth(1*rpx);
      ctx.moveTo(rpx_40, borderTop);
      ctx.lineTo(670 * rpx, borderTop);
      ctx.stroke();
    }
  })

  /**
   * 绘制二维码和推送文本
   */
  // 绘制文本
  ctx.setFillStyle('#ffffff');
  if (o.title.indexOf("现货") != -1) {
    ctx.setFontSize(40);
    ctx.fillText("价格优惠", rpx_40, newWordTop + rpx * 150);
    ctx.fillText("欢迎询价", rpx_40, newWordTop + rpx * 240);
    ctx.setFontSize(14);
    ctx.fillText("更多现货，扫二维码", rpx_40, newWordTop + rpx * 290);
  } else {
    ctx.setFontSize(40);
    ctx.fillText("现金求布", rpx_40, newWordTop + rpx * 150);
    ctx.fillText("有货私聊", rpx_40, newWordTop + rpx * 240);
    ctx.setFontSize(14);
    ctx.fillText("更多求购，扫二维码", rpx_40, newWordTop + rpx * 290);
  }
  
  // 绘制二维码
  ctx.drawImage(o.weChat, rpx_710 - 200*rpx, newWordTop+70*rpx, rpx * 190, rpx * 220);

  /*
   * 绘制logo和抬头
   */
  // let t_left = rpx * 420;
  // let t_top = rpx * 520;
  // 绘制logo
  // ctx.drawImage("../../images/logo-transparent.png", rpx * 200, t_top, rpx * 213, rpx * 96);
  // 绘制直线
  // ctx.setStrokeStyle('#ffffff');
  // ctx.setLineWidth(3);
  // ctx.moveTo(t_left, t_top + rpx * 20);
  // ctx.lineTo(t_left, t_top + rpx * 70);
  // ctx.stroke();

  ctx.draw();
}

/**
 * 将求购、现货列表的canvas转化为图片，并保存图片到本地
 */
function saveListCanvas() {
  return new Es6Promise(function (resolve, reject) {
    // 将canvas转化为图片，并返回路径
    wx.canvasToTempFilePath({
      canvasId: "list-canvas",
      success: function (canvasRes) {
        // 保存图片到本地
        wx.saveImageToPhotosAlbum({
          filePath: canvasRes.tempFilePath,
          success: function () {
            wx.showToast({
              title: "保存成功",
              icon: "../images/save-canvas.png",
              mask: true,
              success: function () {
                resolve(true);
              }
            })
          }
        })
      }
    })
  })
}


module.exports = {
  drawOrderCanvas,
  drawDetailCanvas,
  drawListCanvas,
  getAlbumSetting,
  setMath
}