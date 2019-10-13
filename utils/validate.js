/**
 *  去除前后空格
 */
function trim(str) {
  return str.replace(/(^\s*)|(\s*$)/g, "");
}
/**
 * 去除所有空格
 */
function allTrim(str) {
  return str.replace(/\s/g, "");
}
/**
 *  去除前后空格
 */
function otrim(str) {
  if (str && typeof str == 'String') {
    return str.replace(/(^\s*)|(\s*$)/g, "");
  } else {
    return str;
  }
}
/**
 * 去除所有空格
 */
function oallTrim(str) {
  if (str && typeof str == 'String') {
    return str.replace(/\s/g, "");
  } else {
    return str;
  }
}

/**
 * 是否为空验证
 */
function length(value, text) {
  let val = trim(value);

  if (val == '') {
    wx.showToast({
      title: text,
      image: '../../images/alert.png'
    })
    return false;
  }
  return true;
}

/**
 * 验证姓名
 */
const NAMEREG = /^[\u4e00-\u9fa5a-zA-Z\/\(\)]{2,}$/;
function testName(value) {
  let val = trim(value);

  return NAMEREG.test(val) ? true : false;
}
function alertName(value, text) {
  let val = trim(value);
  let oTitle = text ? text : "无效姓名";
  
  if (val != "" && !testName(val)) {
    wx.showToast({
      title: oTitle,
      image: '../../images/alert.png'
    })
    return false;
  }
  return true;
}

/**
 * 手机号码验证
 */
const TELREG = /^((1[3456789]{1})+\d{9})$/;
function testTel(value) {
  let val = trim(value);

  return TELREG.test(val) ? true : false;
}
function alertTel(value) {
  let val = trim(value);

  if (val != "" && !testTel(val)) {
    wx.showToast({
      title: '无效手机号',
      image: '../../images/alert.png'
    })
    return false;
  }
  return true;
}

/**
 * 正整数验证--验证码
 */
const CODEREG_4 = /^\d{4}$/;
function testCode(value) {
  let val = trim(value);
  return CODEREG_4.test(val) ? true : false;
}
function alertCode(value) {
  let val = trim(value);

  if (val != "" && !testCode(val)) {
    wx.showToast({
      title: "无效验证码",
      image: '../../images/alert.png'
    })
    return false;
  }
  return true;
}
const CODEREG_6 = /^\d{6}$/;
function testCodeSix(value) {
  let val = trim(value);
  return CODEREG_6.test(val) ? true : false;
}
function alertCodeSix(value) {
  let val = trim(value);

  if (val != "" && !testCodeSix(val)) {
    wx.showToast({
      title: "无效验证码",
      image: '../../images/alert.png'
    })
    return false;
  }
  return true;
}

/**
 * 公司名称
 */
const COMPANYREG = /^\D+$/;
function testCompany(value) {
  let val = trim(value);
  return COMPANYREG.test(val) ? true : false;
}
function alertCompany(value, text) {
  let val = trim(value);
  let oTitle = text ? text : "无效公司名称";
  
  if (val != "" && !testCompany(val)) {
    wx.showToast({
      title: oTitle,
      image: '../../images/alert.png'
    })
    return false;
  }
  return true;
}

/**
 * 数量验证
 */
const NUMREG = /^\d+$/;
function testNum(value) {
  let val = trim(value);
  return NUMREG.test(val) ? true : false;
}
function alertNum(value) {
  let val = trim(value);

  if (val != "" && !testNum(val)) {
    wx.showToast({
      title: "无效数量",
      image: '../../images/alert.png'
    })
    return false;
  }
  return true;
}

/**
 * 单价验证
 */
const PRICEREG = /(^[1-9]\d*(\.\d{1,2})?$)|(^[0]{1}(\.\d{1,2})?$)/;
function testPrice(value) {
  let val = trim(value);
  return PRICEREG.test(val) ? true : false;
}
function alertPrice(value) {
  let val = trim(value);

  if (val != "" && !testPrice(val)) {
    wx.showToast({
      title: '无效单价',
      image: '../../images/alert.png'
    })
    return false;
  }
  return true;
}

/**
 * 身份证验证
 */
const IDREG = /^\d{6}(18|19|20)\d{2}(0|1)\d{1}(0|1|2|3)\d{4}(\d|X)$/i;
function testID(value) {
  let val = trim(value);
  return IDREG.test(val) ? true : false;
}
function alertID(value) {
  let val = trim(value);
  
  if (val != "" && !testID(val)) {
    wx.showToast({
      title: '无效身份证',
      image: '../../images/alert.png'
    })
    return false;
  }
  return true;
}

/**
 * 银行卡号验证
 */
const BANKREG = /^((3|4|5|6){1})(\d{15,18})$/;
function testBank(value) {
  let val = trim(value);
  return BANKREG.test(val) ? true : false;
}
function alertBank(value) {
  let val = trim(value);
  
  if (val != "" && !testBank(val)) {
    wx.showToast({
      title: '无效银行卡',
      image: '../../images/alert.png'
    })
    return false;
  }
  return true;
}



module.exports = {
  length,
  trim,
  allTrim,
  otrim,
  oallTrim,
  
  testName,
  alertName,

  testTel,
  alertTel,

  testCode,
  alertCode,
  testCodeSix,
  alertCodeSix,

  testCompany,
  alertCompany,

  testNum,
  alertNum,

  testPrice,
  alertPrice,

  testID,
  alertID,

  testBank,
  alertBank
}