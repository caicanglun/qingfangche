const Api = require('/services/config/api.js');
const Common = require('/utils/common.js');
const Util = require('/utils/util.js');
const Es6Promise = require('/lib/es6-promise.js');

// 页面：现货区（现货列表、现货详情、提交索样）、个人中心（我的索样、收藏夹--现货收藏）

/**
 * 功能：现货区--获取现货列表
 * 参数：
 *    that：当前页面的this
 *    num：当前请求的是第几页的列表
 */
function getGoodsData(that, num, keyword) {
  return new Es6Promise(function (resolve, reject) {
    let goodsApi = `${Api.goodsList}?page=${num}&size=6`;
    goodsApi = keyword ? `${goodsApi}&keyword=${keyword}` : goodsApi;
    
    Common.showLoading(that, '加载中...');

    Util.request(goodsApi, {}, 'get').then(res => {
      Common.hideLoading(that);
      resolve(res);
    }).catch(err => {
      Common.hideLoading(that);
      Util.showErrorToast("获取现货失败");
      // reject(err);
    })
  })
}

/**
 * 功能：现货区--浏览人数
 * 参数：
 *    that：当前页面的this
 *    id：订单id；
 *    formId：表单用于推送的formId
 */
function setReadNum(that, id, formId) {
  return new Es6Promise(function (resolve, reject) {
    let readApi = `${Api.goodsList}/${id}/visitors`;
    let numApi = Common.pinFormId(readApi, formId);

    Util.request(numApi, {}, 'put').then(res => {
      resolve(res);
    }).catch(err => {
      Common.changePageTrue(that);
      Util.showErrorToast('浏览失败');
      // reject(err);
    })
  })
}

/**
 * 功能：现货区--收藏
 * 参数：
 *    that：当前页面的this
 *    id：订单id；
 *    formId：表单用于推送的formId
 */
function setGoodsColl(that, id, formId) {
  return new Es6Promise(function (resolve, reject) {
    let collectApi = Api.goodsList;
    let inApi = collectApi + '/' + id + '/collect';
    let yApi = Common.pinFormId(inApi, formId);

    Common.showLoading(that, '收藏中...');

    Util.request(yApi, {}, 'put').then(res => {
      Common.hideLoading(that);
    }).catch(err => {
      Common.hideLoading(that);
      Util.showErrorToast("收藏失败");
    })
  })
}

/**
 * 功能：现货区--取消收藏
 * 参数：
 *    that：当前页面的this
 *    idArr：需要取消收藏的订单id数组；
 *    formId：表单用于推送的formId
 */
function delGoodsColl(that, id, formId) {
  return new Es6Promise(function (resolve, reject) {
    let collectApi = `${Api.goodsList}/${id}/uncollect`;
    let nApi = Common.pinFormId(collectApi, formId);

    Common.showLoading(that, '取消中...');

    Util.request(nApi, {}, 'put').then(res => {
      Common.hideLoading(that);
    }).catch(err => {
      Common.hideLoading(that);
      Util.showErrorToast("取消收藏失败");
    })
  })
}

/**
 * 功能：现货区--获取现货详情
 * 参数：
 *    that：当前页面的this
 *    id：订单id
 */
function getGoodsDetail(that, id) {
  return new Es6Promise(function (resolve, reject) {
    let newApi = Api.goodsList + '/' + id;

    Common.showLoading(that, '加载中...');

    Util.request(newApi, {}, 'get').then(res => {
      Common.hideLoading(that);
      resolve(res);
    }).catch(err => {
      Common.hideLoading(that);
      Util.showErrorToast('加载失败');
      // reject(err);
    })
  })
}

/**
 * 功能：现货区--获取咨询电话
 */
function getConsultTel() {
  return new Es6Promise(function (resolve, reject) {
    let telApi = Api.ConsultTel;

    Util.request(telApi, {},'get').then(res => {
      resolve(res);
    }).catch(err => {
      Util.showErrorToast('获取电话失败');
    })
  })
}

/**
 * 功能：现货区--提交我的索样
 * 参数：
 *    that：当前页面的this
 *    data：要提交的索样数据
 *    formId：表单用于推送的formId
 */
function subMineSeek(that, data, formId) {
  return new Es6Promise(function (resolve, reject) {
    let goodsApi = Common.pinFormId(Api.goodsApply, formId);

    Common.showLoading(that, '提交中...');

    Util.request(goodsApi, data, 'post').then(res => {
      resolve(res);
    }).catch(err => {
      Common.hideLoading(that);
      Util.showErrorToast("提交索样失败");
      // reject(err);
    })
  })
}

/**
 * 功能：我的--我的索样--获取索样列表
 * 参数：
 *    that：当前页面的this
 *    num：当前请求的是第几页的列表
 */
function getSeekData(that, num) {
  return new Es6Promise(function (resolve, reject) {
    let seekApi = `${Api.UserSeek}?page=${num}&size=6`;

    Common.showLoading(that, '加载中...');

    Util.request(seekApi, {}, 'post').then(res => {
      Common.hideLoading(that);
      resolve(res);
    }).catch(err => {
      Common.hideLoading(that);
      Util.showErrorToast("获取索样失败");
      // reject(err);
    })
  })
}

/**
 * 功能：我的--我的索样--清除已失效的列表
 * 参数：
 *    that：当前页面的this
 *    isArr：要清除的订单id数组
 *    formId：表单用于推送的formId
 */
function delSeekData(that, idArr, formId) {
  return new Es6Promise(function (resolve, reject) {
    let delApi = Common.pinFormId(Api.UserSeekDel, formId);

    Common.showLoading(that, '取消中...');

    Util.request(delApi, idArr, 'delete').then(res => {
      Common.hideLoading(that);
      resolve(res);
    }).catch(err => {
      Common.hideLoading(that); // 隐藏 Load图标
      Util.showErrorToast("取消失败");
      // reject(err);
    })
  })
}

/**
 * 功能：我的--收藏夹--现货收藏--获取现货收藏列表
 * 参数：
 *    that：当前页面的this
 *    num：当前请求的是第几页的列表
 */
function getCollGoodsData(that, num) {
  return new Es6Promise(function (resolve, reject) {
    let collectApi = `${Api.UserCollGoods}?page=${num}&size=6`;

    Common.showLoading(that, '加载中...');

    Util.request(collectApi, {}, 'get').then(res => {
      Common.hideLoading(that); // 隐藏 Load图标
      resolve(res);
    }).catch(err => {
      Common.hideLoading(that);
      Util.showErrorToast("获取现货失败");
      // reject(err);
    })
  })
}

/**
 * 功能：我的--收藏夹--现货收藏--取消收藏（清除收藏）
 * 参数：
 *    that：当前页面的this
 *    idArr：要取消的订单id
 *    formId：表单用于推送的formId
 */
function delCollGoodsColl(that, idArr, formId) {
  return new Es6Promise(function (resolve, reject) {
    let collectApi = Api.UserGoodsUnColl;
    let nApi = Common.pinFormId(collectApi, formId);
    
    Common.showLoading(that, '取消中...');

    Util.request(nApi, idArr, 'put').then(res => {
      Common.hideLoading(that);
      resolve(res);
    }).catch(err => {
      Common.hideLoading(that)
      Util.showErrorToast('取消收藏失败');
      // reject(err);
    })
  })
}

/**
 * 功能：搜索现货--获取现货列表
 * 参数：
 *    that：当前页面的this
 *    num：当前请求的是第几页的列表
 */
function getSearchGoodsData(that, num, keyword, orderby, wxSearchType) {
  return new Es6Promise(function (resolve, reject) {
      let goodsApi = `${Api.goodsCount}?page=${num}&size=20`;
    // goodsCount = keyword ? `${goodsApi}&keyword=${keyword}` : goodsApi;
    Common.showLoading(that, '加载中...');
    Util.request(goodsApi, { status: 'UP', isShow: 'true', type: '2', 'keyword': keyword, 'orderby': orderby, 'searchType': wxSearchType}, 'POST').then(res => {
      Common.hideLoading(that);
      resolve(res);
    }).catch(err => {
      Common.hideLoading(that);
      Util.showErrorToast("获取现货失败");
      // reject(err);
    })
  })
}

module.exports = {
  getSearchGoodsData,
  getGoodsData,
  setReadNum,
  setGoodsColl,
  delGoodsColl,
  getGoodsDetail,
  getConsultTel,
  subMineSeek,
  getSeekData,
  delSeekData,
  getCollGoodsData,
  delCollGoodsColl
}