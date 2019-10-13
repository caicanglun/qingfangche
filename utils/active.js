const Server = require('../services/server.js');

class Active {

  constructor() {}

  /**
   * 功能：求购区--求购中收藏、求购详情收藏
   * 参数：
   *    that：当前页面的this
   *    state：值为0|1；用于判断是从求购列表点击收藏，还是从求购详情点击收藏
   *    id：订单的id
   *    goodsName：订单的品名
   */
  setCollect(that, state, id, goodsName) {
    let oTitle = state == 0 ? `"${goodsName}"求购列表-收藏` : `"${goodsName}"求购详情-收藏`;

    let data = {
      no: `221`,
      title: oTitle,
      url: that.route,
      action: `CLICK`,
      name: `收藏`,
      desc: `记录用户收藏次数`,
      info: id,
      remark: goodsName
    };

    Server.setActive(that, data);
  }

  /**
   * 功能：求购中--求购详情客服、我要找布--客服、我的--联系客服、加盟申请--客服、成功页--客服、我的--采购订单--客服
   * 参数：
   *    that：当前页面的this
   *    id：当前订单的id（可选）
   *    goodsName：当前订单的品名（可选）
   */
  setContact(that, id, goodsName) {
    let oTitle = goodsName ? `"${goodsName}"求购详情-客服` : `客服`;
    let data = {
      no: `222`,
      title: oTitle,
      url: that.route,
      info: id,
      name: `客服`,
      action: `CLICK`,
      desc: `记录用户联系客服`,
      remark: goodsName
    };

    // 行为记录
    Server.setActive(that, data);
  }

  /**
   * 功能：求购区--求购中进入详情页、匹配成功/交易成功进入详情页
   * 参数：
   *    that：当前页面的this
   *    id：当前订单的id
   *    goodsName：当前订单的品名
   *    navIndex：页面的tab索引
   */
  setDetail(that, id, goodsName, navIndex) {
    let [oNo, oTitle, oName] = ['', '', ''];
      
    if (navIndex == 0) {
      oNo = `224`;
      oTitle = `"${goodsName}"求购列表-点击`;
      oName = `求购详情`;
    } else {
      oNo = `291`;
      oTitle = `"${goodsName}"案例列表-点击`;
      oName = `成功案例`;
    }

    let data = {
      url: that.route,
      action: `CLICK`,
      desc: `记录用户进入详情页`,
      info: id,
      no: oNo,
      title: oTitle,
      name: oName,
      remark: goodsName
    };

    Server.setActive(that, data);
  }

  /**
   * 功能：求购区--求购中--求购详情--进入报价页
   * 参数：
   *    that：当前页面的this
   *    id：当前订单的id
   *    goodsName：当前订单的品名
   */
  setPrice(that, id, goodsName) {
    let data = {
      no: `223`,
      title: `"${goodsName}"求购详情-报价`,
      info: id,
      action: `CLICK`,
      url: that.route,
      name: `求购报价`,
      desc: `记录用户进入报价页面`,
      remark: goodsName
    };

    // 行为记录
    Server.setActive(that, data)
  }

  /**
   * 功能：首页--我要找布、求购区--匹配详情/交易详情--我要找布
   * 参数：
   *    that：当前页面的this
   *    id：当前订单的id（可选）
   */
  setFind(that, id) {
    let data = {
      no: `211`,
      title: `我要找样`,
      url: that.route,
      info: id,
      action: `CLICK`,
      name: `我要找样`,
      desc: `记录用户找布次数`,
    };

    Server.setActive(that, data);
  }

  /**
   * 功能：首页--加盟申请、求购区--匹配详情/交易详情--加盟申请
   * 参数：
   *    that：当前页面的this
   *    id：当前订单的id（可选）
   */
  setJoin(that, id) {
    let data = {
      no: `271`,
      title: `加盟`,
      url: that.route,
      info: id,
      action: `CLICK`,
      name: `我要加盟`,
      desc: `记录用户加盟次数`,
    };

    Server.setActive(that, data);
  }

  /**
   * 功能：现货区--现货详情
   * 参数：
   *    that：当前页面的this
   *    id：订单的id
   *    goodsName：订单的品名
   */
  setGoodsDetail(that, id, goodsName) {
    let data = {
      no: "234",
      url: that.route,
      title: `"${goodsName}"现货列表-点击`,
      info: id,
      action: `CLICK`,
      desc: `记录用户进入详情页`,
      name: "现货详情",
      remark: goodsName
    };

    Server.setActive(that, data);
  }

  /**
   * 功能：现货区--现货搜索
   * 参数：
   *    that：当前页面的this
   */
  setGoodsSearch(that, seachVal) {
    let data = {
      no: "203",
      url: that.route,
      title: `现货列表-搜索`,
      info: seachVal,
      action: `CLICK`,
      desc: `记录用户搜索现货`,
      name: "现货搜索",
      remark: ""
    };

    Server.setActive(that, data);
  }

  /**
   * 功能：现货区--现货收藏
   * 参数：
   *    that：当前页面的this
   *    state：值为0|1；用于判断是从现货列表点击收藏，还是从现货详情点击收藏
   *    id：订单的id
   *    goodsName：订单的品名
   */
  setGoodsColl(that, state, id, goodsName) {
    let oTitle = state == 0 ? `"${goodsName}"现货列表-收藏` : `"${goodsName}"现货详情-收藏`;

    let data = {
      no: `231`,
      title: oTitle,
      url: that.route,
      action: `CLICK`,
      name: `现货收藏`,
      desc: `记录用户收藏次数`,
      info: id,
      remark: goodsName
    };

    Server.setActive(that, data);
  }

  /**
   * 功能：现货区--现货详情--我要咨询
   * 参数：
   *    that：当前页面的this
   *    id：订单的id
   *    goodsName：订单的品名
   */
  setGoodsContact(that, id, goodsName) {
    let data = {
      no: `232`,
      title: `"${goodsName}"现货详情-我要咨询`,
      url: that.route,
      info: id,
      name: `在线咨询`,
      action: `CLICK`,
      desc: `记录用户联系客服`,
      remark: goodsName
    };

    // 行为记录
    Server.setActive(that, data);
  }

  /**
   * 功能：现货区--现货详情--分享
   * 参数：
   *    that：当前页面的this
   *    id：订单的id
   *    goodsName：订单的品名
   */
  setGoodsShare(that, id, goodsName) {
    let data = {
      no: `235`,
      title: `"${goodsName}"现货详情-分享`,
      url: that.route,
      info: id,
      name: `现货分享`,
      action: `CLICK`,
      desc: `记录用户分享`,
      remark: goodsName
    };

    // 行为记录
    Server.setActive(that, data);
  }

  /**
   * 功能：现货区--现货详情--我要索样
   * 参数：
   *    that：当前页面的this
   *    id：订单的id
   *    goodsName：订单的品名
   */
  setGoodsSeek(that, id, goodsName) {
    let data = {
      no: `233`,
      title: `"${goodsName}"现货详情-我要索样`,
      url: that.route,
      info: id,
      name: `在线申请`,
      action: `CLICK`,
      desc: `记录用户索样`,
      remark: goodsName
    };

    // 行为记录
    Server.setActive(that, data);
  }
}

module.exports = new Active();