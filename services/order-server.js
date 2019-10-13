const Api = require('../config/api.js');
const Common = require('../utils/common.js');
const Util = require('../utils/util.js');
const Pipe = require('../utils/pipe.js');
const Es6Promise = require('../lib/es6-promise.js');

/**
 * 功能：我的--我的交易订单--获取 采购订单 列表
 * 参数：
 *    that：当前页面的this
 *    num：当前请求的是第几页的列表
 */
function getbuyListData(that, num) {
  return new Es6Promise(function (resolve, reject) {
    let buyApi = `${Api.UserBuyList}?page=${num}&size=5`;

    Common.showLoading(that, "加载中...");

    Util.request(buyApi, {}, 'get').then(res => {
      Common.hideLoading(that); // 隐藏 load 图标
      resolve(res);
    }).catch(err => {
      Common.hideLoading(that);
      Util.showModal("获取采购订单失败");
      // reject(err);
    })
  })
}

/**
 * 功能：我的--我的交易订单--获取 销售订单 列表
 * 参数：
 *    that：当前页面的this
 *    num：当前请求的是第几页的列表
 */
function getSaleListData(that, num) {
  return new Es6Promise(function (resolve, reject) {
    let saleApi = `${Api.UserSellList}?page=${num}&size=5`;

    Common.showLoading(that, "加载中...");

    Util.request(saleApi, {}, 'get').then(res => {
      Common.hideLoading(that); // 隐藏 load 图标
      resolve(res);
    }).catch(err => {
      Common.hideLoading(that);
      Util.showModal("获取销售订单失败");
      // reject(err);
    })
  })
}

function getTotalListData(that, num) {
  return new Es6Promise(function (resolve, reject) {
    let totalApi = `${Api.totalOrder}?page=${num}&size=5`;

    Common.showLoading(that, "加载中...");

    Util.request(totalApi, {}, 'get').then(res => {
      Common.hideLoading(that); // 隐藏 load 图标
      resolve(res);
    }).catch(err => {
      Common.hideLoading(that);
      Util.showModal("获取销售订单失败");
      // reject(err);
    })
  })
}


/**
 * 功能：我的--我的交易订单--获取 采购订单详情
 * 参数：
 *    that：当前页面的this
 *    id：订单id
 */
function getBuyDetail(that, id) {
  return new Es6Promise(function (resolve, reject) {
    let buyApi = `${Api.UserOrder}/${id}/buyorder`;

    Util.request(buyApi, {}, 'get').then(res => {
      Common.hideLoading(that); // 隐藏 Loading
      resolve(res);
    }).catch(err => {
      Common.hideLoading(that);
      if (err.statusCode == 403) {
        Util.backIndexPageModal("抱歉！不是本人订单，无权限查看");
      } else {
        Util.showModal("获取详情失败");
      }
      // reject(err);
    })
  })
}

/**
 * 功能：采购订单详情--获取用户的 付款银行账户 
 */
function getpayBankList() {
  return new Es6Promise(function (resolve, reject) {
    let payApi = Api.UserPayAccount;

    Util.request(payApi, {}, 'get').then(res => {
      resolve(res);
    }).catch(err => {
      Util.showModal("获取付款账户失败");
      // reject(err);
    })
  })
}

/**
 * 功能：采购订单详情--获取用户的 收款银行账户 
 */
function getCashBankList() {
  return new Es6Promise(function (resolve, reject) {
    let cashApi = Api.UserCashAccount;

    Util.request(cashApi, {}, 'get').then(res => {
      resolve(res);
    }).catch(err => {
      Util.showModal("获取收款账户失败");
      // reject(err);
    })
  })
}

/**
 * 功能：采购订单详情--确认收货
 * 参数：
 *    id：订单id
 *    formId：表单用于推送的formId
 */
function setBuyOrderSure(id, formId) {
  return new Es6Promise(function (resolve, reject) {
    let apiStr = `${Api.UserOrder}/${id}/receive`;
    let orderApi = Common.pinFormId(apiStr, formId);

    Util.request(orderApi, {}, 'put').then(res => {
      resolve(res);
    }).catch(err => {
      Util.showModal(res.data.description);
      // reject(err);
    })
  })
}

/**
 * 功能：采购订单详情--提交评价（v2.3 前的版本）
 * 参数：
 *    that：当前页面的this
 *    id：订单id
 *    val：评价内容
 *    formId：表单用于推送的formId
 */
function subBuyAppraise(that, id, val, formId) {
  return new Es6Promise(function (resolve, reject) {
    let apiStr = `${Api.UserOrder}/${id}/buycomment`;
    let orderApi = Common.pinFormId(apiStr, formId);

    Common.setLoadFalse(that);

    Util.request(orderApi, val, 'put').then(res => {
      Common.setLoadTrue(that);
      resolve(res);
    }).catch(err => {
      Common.setLoadTrue(that);
      Util.showModal("提交评价失败");
      // reject(err);
    })
  })
}

/**
 * 功能：采购订单详情--提交评价（v2.3 后的版本）
 * 参数：
 *    that：当前页面的this
 *    val：评价内容
 *    formId：表单用于推送的formId
 */
function subBuyNewAppraise(that, data, formId) {
  return new Es6Promise(function (resolve, reject) {
    let apiStr = Api.UserBuyAppraise;
    let orderApi = Common.pinFormId(apiStr, formId);

    Common.setLoadFalse(that);

    Util.request(orderApi, data, 'post').then(res => {
      Common.setLoadTrue(that);
      resolve(res);
    }).catch(err => {
      Common.setLoadTrue(that);
      Util.showModal("提交评价失败");
      // reject(err);
    })
  })
}

/**
 * 功能：采购订单详情--提交/修改退款账户
 * 参数：
 *    that：当前页面的this
 *    id：订单id
 *    data：退款账户
 *    formId：表单用于推送的formId
 */
function subBuyBackBank(that, id, data, formId) {
  return new Es6Promise(function (resolve, reject) {
    let accountApi = `${Api.UserOrder}/${id}/setrefundcard`;
    let sumbitApi = Common.pinFormId(accountApi, formId);

    Common.setLoadFalse(that);

    Util.request(sumbitApi, data, 'put').then(res => {
      Common.setLoadTrue(that);
      resolve(res);
    }).catch(err => {
      Common.setLoadTrue(that);
      Util.showModal("确认退款失败");
      // reject(err);
    })
  })
}

/**
 * 功能：我的--我的交易订单--获取 销售订单详情
 * 参数：
 *    that：当前页面的this
 *    id：订单id
 */
function getSellDetail(that, id) {
  return new Es6Promise(function (resolve, reject) {
    let saleApi = `${Api.UserOrder}/${id}/sellorder`;

    Util.request(saleApi, {}, 'get').then(res => {
      Common.hideLoading(that); // 隐藏 Loading
      resolve(res);
    }).catch(err => {
      Common.hideLoading(that);
      if (err.statusCode == 403) {
        Util.backIndexPageModal("抱歉！不是本人订单，无权限查看");
      } else {
        Util.showModal("获取详情失败");
      }
      // reject(err);
    })
  })
}

/**
 * 功能：销售订单详情--确认订单、修改收款账户
 * 参数：
 *    id：订单id
 *    bankId：银行id
 *    formId：表单用于推送的formId
 */
function subSellCashBank(that, id, bankId, formId) {
  return new Es6Promise(function (resolve, reject) {
    let apiStr = `${Api.UserOrder}/${id}/setrecvcard`;
    let orderApi = Common.pinFormId(apiStr, formId);
    
    Common.setLoadFalse(that);

    Util.request(orderApi, bankId, 'put').then(res => {
      Common.setLoadTrue(that);
      resolve(res);
    }).catch(err => {
      Common.setLoadTrue(that);
      Util.showModal("提交失败");
      // reject(err);
    })
  })
}

/**
 * 功能：销售订单详情--确认发货
 * 参数：
 *    id：订单id
 *    formId：表单用于推送的formId
 */
function setSellOrderSure(id, formId) {
  return new Es6Promise(function (resolve, reject) {
    let apiStr = `${Api.UserOrder}/${id}/send`;
    let orderApi = Common.pinFormId(apiStr, formId);

    Util.request(orderApi, {}, 'put').then(res => {
      resolve(res);
    }).catch(err => {
      Util.showModal("确认发货失败");
      // reject(err);
    })
  })
}

/**
 * 功能：销售订单详情--提交评价
 * 参数：
 *    that：当前页面的this
 *    id：订单id
 *    val：评价内容
 *    formId：表单用于推送的formId
 */
function subSellAppraise(that, id, val, formId) {
  return new Es6Promise(function (resolve, reject) {
    let apiStr = `${Api.UserOrder}/${id}/sellcomment`;
    let orderApi = Common.pinFormId(apiStr, formId);

    Common.setLoadFalse(that);

    Util.request(orderApi, val, 'put').then(res => {
      Common.setLoadTrue(that);
      resolve(res);
    }).catch(err => {
      Common.setLoadTrue(that);
      Util.showModal("提交评价失败");
      // reject(err);
    })
  })
}


/**
 * 功能：采购订单--获取快捷支付验证码
 * 参数：
 *    id：订单id
 *    data：发送的内容
 *    formId：表单用于推送的formId
 */
function subBuyOrderCode(id, data, formId) {
  return new Es6Promise(function (resolve, reject) {
    // let apiStr = `${Api.UserOrder}/${id}/tx1375`; // v2.0接口
    // let apiStr = `${Api.UserOrder}/${id}/v2.1/tx1375`; // v2.1接口
    let apiStr = `${Api.UserOrder}/${id}/v3.1/tx1375`; // v3.1接口
    let valiApi = Common.pinFormId(apiStr, formId);

    Common.showLoad('发送中...'); // 显示loading

    Util.request(valiApi, data, 'post').then(res => {
      Common.hideLoad(); // 隐藏loading
      resolve(res);
    }).catch(err => {
      Common.hideLoad(); // 隐藏loading
      Util.showModal("错误信息", err.data.description)
      reject(err);
    })
  })
}

/**
 * 功能：采购订单--提交 确认支付
 * 参数：
 *    that：当前页面的this
 *    id：订单id
 *    data：发送的内容
 *    formId：表单用于推送的formId
 */
function subBuyOrderPay(that, id, data, formId) {
  return new Es6Promise(function (resolve, reject) {
    // let apiStr = `${Api.UserOrder}/${id}/tx1376`; // v2.0
    // let apiStr = `${Api.UserOrder}/${id}/v2.1/tx1376`; // v2.1
    let apiStr = `${Api.UserOrder}/${id}/v3.1/tx1376`; // v3.1

    let sumbitApi = Common.pinFormId(apiStr, formId);
    
    Common.showLoading(that, "提交中..."); // 显示loading，设置loadState为false

    Util.request(sumbitApi, data, 'post').then(res => {
      Common.hideLoading(that); // 隐藏loading
      resolve(res);
    }).catch(err => {
      Common.hideLoading(that); // 隐藏loading
      Util.showModal("错误信息", err.data.description)
      reject(err);
    })
  })
}

/**
 * 认证信息处理
 */
function approveDispose() {
  return new Es6Promise(function (resolve, reject) {
    // 获取认证信息
    Util.getApproveData().then(res => {
      let now = Pipe.approveState(res.data);

      // 审核中
      if (now == 1) {
        wx.showModal({
          content: "身份正在审核中，审核通过后，才能进行操作，请耐心等待。",
          showCancel: false,
          confirmColor: "#ff8834",
          success: function (res) {
            // if (res.confirm) {
              wx.switchTab({
                url: '/pages/tab-user/user'
              })
            // }
          }
        });
      }
      // 未认证，认证失败
      else if (now == 0 || now == 2) {
        wx.showModal({
          content: "未身份认证，暂时无法交易",
          confirmText: "去认证",
          confirmColor: "#ff8834",
          success: function (res) {
            if (res.confirm) {
              wx.redirectTo({
                url: '/pages/user-approve/approve',
              })
            } else {
              wx.switchTab({
                url: '/pages/tab-user/user'
              })
            }
          }
        });
      }
      // 个人认证和企业认证
      else if (now == 3 || now == 4) {
        resolve(res);
      }
    })
  })
}

/**
 * 支付成功后，给买家发送消息
 */
// function sendOrderInfo(id, money, openId) {
//   return new Promise(function (resolve, reject) {
//     let sendApi = Api.UserOrderSend;
//     let nData = {
//       templateId: 'en4O2YmmzcmgWdJnEHqc82qk0Kw_s8nBVTDYs7QVrL0',
//       page: 'pages/user-order/detail-buy?id='+id,
//       keyword1: id,
//       keyword2: "采购订单",
//       keyword3: "支付成功",
//       keyword4: money,
//       keyword5: "订单支付成功！有进展将第一时间通知您，等待收货吧~点击查看",
//       openids: [openId]
//     }

//     if (openId) {
//       Util.request(sendApi, nData, "post").then(res => {
//         // resolve(res);

//       }).catch(err => {
//         // reject();
//         Util.showModal("信息推送失败");
//       })
//     }
//   })
// }

/**
 * 功能：白条--白条展示页--多种白条状态展示
 * 参数：
 *    that：当前页面的this
 *    
 */
function getWhitestrips() {
  return new Es6Promise(function (resolve, reject) {
    // let buyApi = `${Api.whiteStrips}/${id}/buyorder`;
    Util.request(Api.whiteStrips, {}, 'get').then(res => {
      resolve(res);
    }).catch(err => {
      reject(err);
    })
  })
}

/**
 * 功能：获取信用卡费率
 */
function getPayRateNum() {
  return new Es6Promise(function (resolve, reject) {
    let oApi = Api.getPayRateNum;

    Util.request(oApi, {}, 'get').then(res => {
      resolve(res);
    }).catch(err => {
      Util.showModal("获取信用卡费率失败");
      // reject(err);
    })
  })
}

module.exports = {
  getbuyListData,
  getSaleListData,
  getTotalListData,

  getpayBankList,
  getCashBankList,
  
  getBuyDetail,
  setBuyOrderSure,
  subBuyAppraise,
  subBuyNewAppraise,
  subBuyBackBank,

  getSellDetail,
  subSellCashBank,
  setSellOrderSure,
  subSellAppraise,

  subBuyOrderCode,
  subBuyOrderPay,

  approveDispose,
  // sendOrderInfo
  getWhitestrips,
  getPayRateNum
}