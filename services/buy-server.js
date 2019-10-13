const Api = require('../config/api.js');
const Common = require('../utils/common.js');
const Util = require('../utils/util.js');
const Es6Promise = require('../lib/es6-promise.js');


// 页面：求购区（求购列表、求购详情、提交报价、匹配列表、匹配详情、交易列表、交易详情）、个人中心（我的报价、收藏夹--求购收藏）

/**
 * 功能：求购区--获取 求购中 列表
 * 参数：
 *    that：当前页面的this
 *    num：当前请求的是第几页的列表
 *    keyword：可选，搜索的关键字
 */
function getSampleData(that, num, keyword) {
  return new Es6Promise(function (resolve, reject) {
    let samApi = `${Api.BuySample}?page=${num}&size=10`;
    samApi = keyword ? `${samApi}&keyword=${keyword}` : samApi;

    Common.showLoading(that, '加载中...');

    Util.request(samApi, {}, 'get').then(res => {
      Common.hideLoading(that); // 隐藏 load 图标
      resolve(res);
    }).catch(err => {
      Common.hideLoading(that);
      // Util.showErrorToast("获取求购失败");
      Util.showModal("获取求购失败");
      // reject(err);
    })
  })
}

/**
 * 功能：求购区--获取 匹配成功 列表
 * 参数：
 *    that：当前页面的this
 *    num：当前请求的是第几页的列表
 *    keyword：可选，搜索的关键字
 */
function getMateData(that, num, keyword) {
  return new Es6Promise(function (resolve, reject) {
    let mateApi = `${Api.BuyCase}?type=1&page=${num}&size=6`;
    mateApi = keyword ? `${mateApi}&keyword=${keyword}` : mateApi;

    Common.showLoading(that, '加载中...');

    Util.request(mateApi, {}, 'get').then(res => {
      Common.hideLoading(that); // 隐藏 load 图标
      resolve(res);
    }).catch(err => {
      Common.hideLoading(that);
      Util.showModal("获取匹配失败");
      // Util.showErrorToast("获取匹配失败");
      // reject(err);
    })
  })
}

/**
 * 功能：求购区--获取 交易成功 列表
 * 参数：
 *    that：当前页面的this
 *    num：当前请求的是第几页的列表
 *    keyword：可选，搜索的关键字
 */
function getDealData(that, num, keyword) {
  return new Es6Promise(function (resolve, reject) {
    let dealApi = `${Api.BuyCase}?type=2&page=${num}&size=10`;
    dealApi = keyword ? `${dealApi}&keyword=${keyword}` : dealApi;

    Common.showLoading(that, '加载中...');

    Util.request(dealApi, {}, 'get').then(res => {
      Common.hideLoading(that); // 隐藏 load 图标
      resolve(res);
    }).catch(err => {
      Common.hideLoading(that);
      Util.showModal("获取交易失败");
      // Util.showErrorToast("获取交易失败");
      // reject(err);
    })
  })
}

/**
 * 功能：求购区--收藏
 * 参数：
 *    that：当前页面的this
 *    id：要收藏的订单id
 *    formId：表单用于推送的formId
 */
function setBuyColl(that, id, formId) {
  let collectApi = Api.BuySample;
  let inApi = `${collectApi}/${id}/collect`;
  let yApi = Common.pinFormId(inApi, formId);
  Common.showLoading(that, '收藏中...');
  Util.request(yApi, {}, 'put').then(res => {
    Common.hideLoading(that)
  }).catch(err => {
    Common.hideLoading(that);
    Util.showModal("收藏失败");
    // Util.showErrorToast("收藏失败");
  })
}

/**
 * 功能：求购区--取消收藏
 * 参数：
 *    that：当前页面的this
 *    id：要收藏的订单id
 *    formId：表单用于推送的formId
 */
function delBuyColl(that, id, formId) {
  let collectApi = Api.BuySample;
  let inApi = `${collectApi}/${id}/uncollect`;
  let nApi = Common.pinFormId(inApi, formId);
  Common.showLoading(that, '取消中...');
  Util.request(nApi, {}, 'put').then(res => {
    Common.hideLoading(that);
  }).catch(err => {
    Common.hideLoading(that);
    Util.showModal("取消失败");
    // Util.showErrorToast("取消失败");
  })
}

/**
 * 功能：求购区--求购中--浏览人数
 * 参数：
 *    that：当前页面的this
 *    id：订单id；
 *    formId：表单用于推送的formId
 */
function setReadNum(that, id, formId) {
  return new Es6Promise(function (resolve, reject) {
    let readApi = `${Api.BuySample}/${id}/visitors`;
    let numApi = Common.pinFormId(readApi, formId);

    Util.request(numApi, {}, 'put').then(res => {
      resolve(res);
    }).catch(err => {
      Common.changePageTrue(that);
      Util.showModal("浏览失败");
      // Util.showErrorToast('浏览失败');
      // reject(err);
    })
  })
}

/**
 * 功能：求购区--求购中--获取求购详情
 * 参数：
 *    that：当前页面的this
 *    id：订单id
 */
function getSampleDetail(that, id) {
  return new Es6Promise(function (resolve, reject) {
    let newApi = `${Api.BuySample}/${id}`;

    Common.showLoading(that, '加载中...');

    Util.request(newApi, {}, 'get').then(res => {
      Common.hideLoading(that); // 隐藏 Loading
      resolve(res);
    }).catch(err => {
      Common.hideLoading(that);
      Util.showModal("获取详情失败");
      // Util.showErrorToast('获取详情失败');
      // reject(err);
    })
  })
}

/**
 * 功能：求购区--求购中-求购详情-我要报价
 * 参数：
 *    that：当前页面的this
 *    data：表单提交的数据；
 *    formId：表单用于推送的formId
 */
function subMinePrice(that, data, formId) {
  return new Es6Promise(function (resolve, reject) {
    let offerApi = Common.pinFormId(Api.BuyOffer, formId);

    Common.showLoading(that, '提交中...');
    
    Util.request(offerApi, data, 'post').then(res => {
      resolve(res);
    }).catch(err => {
      Common.hideLoading(that);
      Util.showModal("提交失败");
      // Util.showErrorToast("提交失败");
      // reject(err);
    })
  })
}

/**
 * 功能：求购区--匹配成功--获取匹配详情
 * 参数：
 *    that：当前页面的this
 *    id：订单id
 */
function getMateDetail(that, id) {
  return new Es6Promise(function (resolve, reject) {
    let newApi = `${Api.BuyCase}/${id}`;

    Common.showLoading(that, '加载中...');

    Util.request(newApi, {}, 'get').then(res => {
      Common.hideLoading(that); // 隐藏 Loading
      resolve(res);
    }).catch(err => {
      Common.hideLoading(that);
      Util.showModal("加载失败");
      // Util.showErrorToast('加载失败');
      // reject(err);
    })
  })
}

/**
 * 功能：求购区--交易成功--获取交易详情
 * 参数：
 *    that：当前页面的this
 *    id：订单id
 */
function getDealDetail(that, id) {
  return new Es6Promise(function (resolve, reject) {
    let newApi = `${Api.BuyCase}/${id}`;

    Common.showLoading(that, '加载中...');

    Util.request(newApi, {}, 'get').then(res => {
      Common.hideLoading(that); // 隐藏 Loading
      resolve(res);
    }).catch(err => {
      Common.hideLoading(that);
      Util.showModal("加载失败");
      // Util.showErrorToast('加载失败');
      // reject(err);
    })
  })
}

/**
 * 功能：我的--我的报价--获取 报价 列表
 * 参数：
 *    that：当前页面的this
 *    num：当前请求的是第几页的列表
 */
function getPriceData(that, num) {
  return new Es6Promise(function (resolve, reject) {
    let priceApi = `${Api.UserPrice}?page=${num}&size=5`;

    Common.showLoading(that, "加载中...");

    Util.request(priceApi, {}, 'get').then(res => {
      Common.hideLoading(that); // 隐藏 Load图标
      resolve(res);
    }).catch(err => {
      Common.hideLoading(that); // 隐藏 Load图标
      Util.showModal("获取报价失败");
      // Util.showErrorToast("获取报价失败");
      // reject(err);
    })
  })
}

/**
 * 功能：我的--我的报价--清除失效报价
 * 参数：
 *    that：当前页面的this
 *    idArr：要清除的订单id
 *    formId：表单用于推送的formId
 */
function delPriceData(that, idArr, formId) {
  return new Es6Promise(function (resolve, reject) {
    let delApi = Common.pinFormId(Api.UserPriceDel, formId);

    Common.showLoading(that, '清除中...');

    Util.request(delApi, idArr, 'delete').then(res => {
      Common.hideLoading(that);
      resolve(res);
    }).catch(err => {
      Common.hideLoading(that); // 隐藏 Load图标
      Util.showModal("清除失败");
      // Util.showErrorToast("清除失败");
      // reject(err);
    })
  })
}

/**
 * 功能：我的--我的报价--报价详情
 * 参数：
 *    that：当前页面的this
 *    id：订单id
 */
function getPriceDetail(that, id) {
  return new Es6Promise(function (resolve, reject) {
    let priceApi = `${Api.UserPrice}/${id}`;

    Common.showLoad("加载中...");

    Util.request(priceApi, {}, 'get').then(res => {
      Common.hideLoad(that); // 隐藏 load 图标
      resolve(res);
    }).catch(err => {
      Common.hideLoad(that);
      Util.showModal("获取报价失败");
      // Util.showErrorToast("获取报价失败");
      // reject(err);
    })
  })
}

/**
 * 功能：我的--我的报价--报价详情--提交评价
 * 参数：
 *    that：当前页面的this
 *    id：订单id
 *    appraise：提交的评价内容
 *    formId：表单用于推送的formId
 */
function subPriceAppraise(that, id, appraise, formId) {
  return new Es6Promise(function (resolve, reject) {
    let inApi = `${Api.UserPriceMatch}/${id}/comment`;
    let aApi = Common.pinFormId(inApi, formId);
    
    Common.showLoading(that, '提交中...');

    Util.request(aApi, appraise, 'put').then(res => {
      Common.hideLoading(that);
      resolve(res);
    }).catch(err => {
      Common.hideLoading(that);
      Util.showModal("提交评价失败");
      // Util.showErrorToast("提交评价失败");
      // reject(err);
    })
  })
}

/**
 * 功能：我的--收藏夹--求购收藏--获取收藏列表
 * 参数：
 *    that：当前页面的this
 *    num：当前请求的是第几页的列表
 */
function getCollBuyData(that, num) {
  return new Es6Promise(function (resolve, reject) {
    let collectApi = `${Api.UserCollBuy}?page=${num}&size=5`;

    Common.showLoading(that, '加载中...');
    
    Util.request(collectApi, {}, 'get').then(res => {
      Common.hideLoading(that);
      resolve(res);
    }).catch(err => {
      Common.hideLoading(that);
      Util.showModal("获取求购失败");
      // Util.showErrorToast("获取求购失败");
      // reject(err);
    })
  })
}

/**
 * 功能：我的--收藏夹--求购收藏--取消收藏、清除收藏
 * 参数：
 *    that：当前页面的this
 *    idArr：要取消的订单id
 *    formId：表单用于推送的formId
 */
function delCollBuyColl(that, idArr, formId) {
  return new Es6Promise(function (resolve, reject) {
    let collectApi = Api.UserBuyUnColl;
    let nApi = Common.pinFormId(collectApi, formId);

    Common.showLoading(that, '取消中...');
    
    Util.request(nApi, idArr, 'put').then(res => {
      Common.hideLoading(that);
      resolve(res);
    }).catch(err => {
      Common.hideLoading(that)
      Util.showModal("取消收藏失败");
      // Util.showErrorToast('取消收藏失败');
      // reject(err);
    })
  })
}

module.exports = {
  getSampleData,
  getMateData,
  getDealData,
  setBuyColl,
  delBuyColl,
  setReadNum,
  getSampleDetail,
  subMinePrice,
  getMateDetail,
  getDealDetail,
  getPriceData,
  delPriceData,
  getPriceDetail,
  subPriceAppraise,
  getCollBuyData,
  delCollBuyColl
}