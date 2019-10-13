const Api = require('services/config/api.js');
const Pipe = require('utils/pipe.js');
const Util = require('utils/util.js');
const Es6Promise = require('lib/es6-promise.js');

/**
 * 去除前后空格
 */
function trim(str) {
  return str.replace(/(^\s*)|(\s*$)/g, "");
}

/**
 * 功能：显示loading图标；并将loadState设为false，防止用户多次点击
 * 参数：that：当前页面的this；val：loading的提示内容
 */
function showLoading(that, val) {
  let sVal = val.toString();
  that.setData({
    loadState: false
  })
  // 兼容处理
  if (wx.showLoading) {
    wx.showLoading({
      title: sVal,
      mask: true
    });
  } else {
    wx.showToast({
      title: sVal,
      mask: true,
      duration: 2500
    })
  }
}

/**
 * 功能：隐藏loading图标；并将loadState设为true，防止出现错误，用户无法点击
 * 参数：that：当前页面的this
 */
function hideLoading(that) {
  // 兼容处理
  if (wx.hideLoading) {
    wx.hideLoading();
  } else {
    wx.hideToast();
  }
  that.setData({
    loadState: true
  })
}
/**
 * 函数：showLoad(val)、hideLoad()
 * 功能：显示/隐藏 loading图标
 * 参数：val：loading图显示的文字
 */
function showLoad(val) {
  let sVal = val.toString();
  if (wx.showLoading) {
    wx.showLoading({
      title: sVal,
      mask: true
    });
  } else {
    wx.showToast({
      title: sVal,
      mask: true,
      duration: 3000
    })
  }
}
function hideLoad() {
  if (wx.hideLoading) {
    wx.hideLoading();
  } else {
    wx.hideToast();
  }
}

/**
 * 函数：setLoadFalse(that)、setLoadTrue(that)
 * 功能：将loadState设置为false；防止用户重复点击提交表单
 * 参数：that：页面的this
 */
function setLoadFalse(that) {
  that.setData({
    loadState: false
  })
}
function setLoadTrue(that) {
  that.setData({
    loadState: true
  })
}

/**
 * 函数：changePageFalse(that)、changePageTrue(that)
 * 功能：防止用户重复点击多次跳转页面
 * 参数：that：页面的this
 */
function changePageFalse(that) {
  that.setData({
    changePage: false
  })
}
function changePageTrue(that) {
  that.setData({
    changePage: true
  })
}


/**
 * 特性 值的转换
 */
function changeGloss(gloss) {
  return Pipe.pipeGloss(gloss);
}

/**
 * 特性、品质要求、品质定位 值的转换
 */
function changeVal(obj, stockType) {
  if (obj) {
    let oInfo = obj;
    // 品质要求转换
    oInfo.quality = Pipe.pipeQuality(oInfo.quality);
    // 特性转换
    oInfo.glossLongitude = Pipe.pipeGloss(oInfo.glossLongitude);
    // oInfo.glossLatitude = Pipe.pipeGloss(oInfo.glossLatitude);
    // 品质定位转换
    oInfo.positionQuality = Pipe.pipePosition(oInfo.positionQuality);
    // 库存状态
    if (stockType) {
      oInfo.stockType = Pipe.pipeStock(stockType);
    }
  }
}

/**
 * 单个--图片地址拼接--返回图片地址数组
 */
function pinImgUrl(obj, defaultImg) {
  if (obj && obj.length >= 1) {
    return obj.map(item => {
      return `${Api.ShowPic}/${item.id}/download`;
    })
  } else {
    return defaultImg ? [defaultImg] : [];
  }
}


/**
 * 单个--图片地址拼接--返回图片地址数组
 */
function pinImgSmallUrl(obj, defaultImg) {
  if (obj && obj.length >= 1) {
    return obj.map(item => {
      return `${Api.ShowPic}/${item.id}/small/download`;
    })
  } else {
    return defaultImg ? [defaultImg] : [];
  }
}

/**
 * 单个--图片地址拼接--返回图片地址数组
 */
function pinImgMiddleUrl(obj, defaultImg) {
  if (obj && obj.length >= 1) {
    return obj.map(item => {
      return `${Api.ShowPic}/${item.id}/middle/download`;
    })
  } else {
    return defaultImg ? [defaultImg] : [];
  }
}

/**
 * 图片预加载--图片地址拼接(求购区、现货区 列表)
 */
function pinPreImg(picId) {
  if (picId) {
    let imgArr = picId.split("|");

    return {
      url: `${Api.ShowPic}/${imgArr[0]}/download`,
      loaded: false
    };
  } else {
    return {
      url: '../../images/detail-buy-s.png',
      loaded: false
    };
  }
}

/**
 * 图片预加载--图片地址拼接(求购区、现货区 列表)
 */
function pinPreSmallImg(picId) {
  if (picId) {
    let imgArr = picId.split("|");

    return {
      url: `${Api.ShowPic}/${imgArr[0]}/small/download`,
      loaded: false
    };
  } else {
    return {
      url: '../../images/detail-buy-s.png',
      loaded: false
    };
  }
}

/**
 * 图片预加载--图片是否加载完成处理
 */
function imgPreload(that, imgArr, fn) {
  if (imgArr.length < 1) return;
  imgArr.forEach(item => {
    // 图片预加载
    that.imgLoader.load(item.url, (err, data) => {
      let imgList = [];
      imgList = imgArr.map(list => {
        if (list.url == data.src) {
          list.loaded = true;
        }
        return list;
      })
  
      fn && fn(imgList);
    })
  })
}

/**
 * 获取 页面高度
 */
function onWindowH() {
  return new Es6Promise(function (resolve, reject) {
    wx.getSystemInfo({
      success: function (res) {
        let minHeight = res.windowHeight;
        
        resolve(minHeight);
      },
      fail: function (err) {
        reject(err);
      }
    })
  });
}

/**
 * 判断有没有token
 */
function getToken() {
  return wx.getStorageSync("token");
}

/**
 * formId 地址拼接
 */
function pinFormId(api, formId) {
  let isFormId = formId == "the formId is a mock one"? "": formId;

  return isFormId ? api + "?formid=" + isFormId : api;
}

/**
 * 添加图片--单张
 */
function addPic(fn) {
  wx.chooseImage({
    count: 1,
    sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
    sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
    success: function (res) {
      let filesArr = res.tempFiles;
      let fliesPathArr = res.tempFilePaths;
      let maxSize = 1024 * 1024;
      let picState = true;

      if (!filesArr) { // 用于处理部分手机返回值为空的问题
        Util.versionTip();
        picState = false;
        return;
      }

      // 验证size是否大于1M
      filesArr.map(function (item, index) {
        let size = item.size;

        if (size > maxSize) {
          wx.showModal({
            content: '图片不能大于1M',
            showCancel: false
          })
          picState = false;
          return false;
        }
      })

      if (picState) {
        fn && fn(fliesPathArr);
      } else {
        fn && fn(picState);
      }
    },
    fail: function() {
      console.log("已取消图片选择");
    }
  })
}

/**
 * 控制按钮状态
 */
function setBtnState(formText, that) {
  let stateNum = 0;

  formText.forEach(function (item) {
    if (item == 1) stateNum++;
  })

  if (stateNum == formText.length) {
    that.setData({
      submitBtn: true,
    })
  } else {
    that.setData({
      submitBtn: false,
    })
  }
}


/**
 * 倒计时
 */
function downTime(that) {
  let backTime = parseInt(that.data.backTime);
  setBackTime();

  function setBackTime() {
    backTime--;
    that.setData({
      backTime: backTime
    })
    if (backTime <= 0 || that.data.backTimeState) {
      that.setData({
        validateCod: !that.data.validateCod,
        backTime: 60,
        backTimeState: false
      })
      return false;
    }
    setTimeout(setBackTime, 1000);
  }
}

/**
 * 价格补零
 */
function supZero(price) {
  if (price) {
    let sPrice = price.toString();

    if (sPrice.indexOf(".") != -1) {
      let newPrice = sPrice.split('.');
      if (!newPrice[1]) { // 有. 没有数
        sPrice += "00";
      } else if (newPrice[1].length == 1) { // 有. 有一位数
        sPrice += "0";
      }
    } else {
      sPrice += ".00";
    }
    return sPrice;
  }
  return price;
}

/**
 * 打 * 函数
 */
function setStar(str, bNum, aNum) {
  let oStr = '';
  if (str) {
    oStr = str.toString();

    let nStr = '';
    let nANum = oStr.length - aNum;

    nStr += oStr.substring(0, bNum);
    for (let i = bNum; i < nANum; i++) {
      nStr += '*';
    }
    nStr += oStr.substring(nANum, oStr.length);
    
    return nStr;
  } else {
    return oStr;
  }
}

/**
 * 每个几个字符加空格 函数
 */
function setSpace(str, num) {
  let nStr = '';
  let firstIndex = 0;
  let endIndex = 4;
  let len = Math.ceil(str.length / 4);

  for (let i = 0; i < len; i++) {
    if (i < len - 1) {
      nStr += str.substring(firstIndex, endIndex) + ' ';
    } else {
      nStr += str.substring(firstIndex, endIndex)
    }
    firstIndex = endIndex;
    endIndex = endIndex + num;
  }
  return nStr;
}

/**
 * 每个几个数字加逗号 函数
 */
function setComma(num) {
  var num = (num || 0).toString();
  var result = '';
  while (num.length > 3) {
    result = ',' + num.slice(-3) + result;
    num = num.slice(0, num.length - 3);
  }
  if (num) { result = num + result; }
  return result;
}

/**
 * 判断点击认证进入的页面
 */
function goApprovePage(that) {
  let approveUrl = ["../user-approve/approve", "../c-approve/private", "../c-approve/public"];
  let applyType = that.data.applyType;
  let appState = that.data.appState;
  let changePage = that.data.changePage;

  if ((appState == 2 && applyType == 1) || (appState == 2 && applyType == 0) && changePage) {
    changePageFalse(that);
    // 个人认证填写页
    wx.navigateTo({
      url: approveUrl[1],
    })
  } else if (appState == 2 && applyType == 2 && changePage) { 
    changePageFalse(that);
    // 企业认证填写页
    wx.navigateTo({
      url: approveUrl[2]+"?only=true",
    })
  } else if (appState == 0 && changePage) {
    changePageFalse(that);
    // 企业认证、个人认证选择页
    wx.navigateTo({
      url: approveUrl[0],
    })
  } else if (appState == 3 && applyType == 1 && changePage) {
    changePageFalse(that);
    // 企业认证填写页
    wx.navigateTo({
      url: approveUrl[2] + "?only=true",
    })
  }
}

/**
 * 银行账号对比，是否重复添加
 */
function toCompareBank(bankArr, bankNum) {
  let BBank = true;
  
  if (bankArr.length < 1) return BBank;

  bankArr.map((item) => {
    if (item == bankNum) {
      Util.showModal("绑定提示", "您已添加过该账户，请换一个账户");
      BBank = false;
    }
  })
  return BBank;
}

/**
 * 设置银行logo、判断银行是否停用
 * bank1：付款储蓄卡列表、收款卡列表
 * bank2：付款信用卡列表
 */
function getBankLogo(bankArr, str, bank1, bank2) {
  let bankList = [];

  if (bankArr.length < 1) return;

  if (str == "pay") {
    bankArr.map(item => {
      if (item.cardType == 10) {
        // bankList = wx.getStorageSync("paySaveList");
        setBankLogo(item, bank1);

      } else {
        // bankList = wx.getStorageSync("payCreditList");
        setBankLogo(item, bank2);
      }
    })
  } else if (str = "cash") {
    // bankList = wx.getStorageSync("cashBankList");

    bankArr.map((item, index) => {
      setBankLogo(item, bank1)
    })
  }
}

/**
 * 设置银行的logo、是否停用等
 */
function setBankLogo(item, bankList) {
  item.bStop = false;

  if (bankList.length < 1) return;

  bankList.map((list, j) => {
    if (trim(item.bankId) == trim(list.code)) {
      item.logo = list.logo;
      item.bStop = true;
      item.limitOnce = list.limitOnce; // 单日限额
      item.limitDay = list.limitDay;
      getBankOverNum(item);
      getBankAccount(item);
    }
  })
}

/**
 * 功能：截取银行卡号后四位
 * 参数：获取到的银行列表数组不同索引的对象
 */
function getBankOverNum(item) {
  let len = item.accountNumber.length;
  item.overNum = item.accountNumber.substring(len - 4, len);
}

/**
 * 功能：返回拼接后的银行账户
 * 参数：获取到的银行列表数组不同索引的对象
 */
function getBankAccount(item) {
  item.sBankVal = `${item.bankName}${item.cardType == 10 ? '储蓄卡' : '信用卡'}(${item.overNum})`
}

/**
 * 信用卡费率计算
 */
function getRate(amount, PayRateNum) {
  let nAmount = amount * 100 * PayRateNum / 1000000;
  let arr = nAmount.toString().split(".");
  let price = 0;

  price = nAmount.toFixed(2);
  
  // if (arr[1].substring(0,2) > 0) {
    // 如果小数位超过3位
    // if (arr.length > 1 && arr[1].length > 3 && arr[1].substring(2, 3) < 5) {
    //   console.log("price")
    //   price = (price * 100 + 1)/100;
    // }
  // }
  
  return supZero(Number(price));
}

//数字四舍五入
function forDight(Dight, How) {
  Dight = Math.round(Dight * Math.pow(10, How)) / Math.pow(10, How);
  return Dight;
} 
function setPositionQuality(item) {
	if (item == 1) {
		return '一般订单'
	} else if (item == 2) {
		return '市场货'
	} else if (item == 3) {
		return '高级订单'
	} else if (item == 4) {
		return '品牌订单'
	} else {
		return ''
	}
}
function setGlossLongitude(item) {
	if (item == 1) {
		return '消光'
	} else if (item == 2) {
		return '半光'
	} else if(item==3){
		return '半消光'
	}else if (item == 4) {
		return '有光'
	} else {
		return ''
	}
}
module.exports= {
  showLoading,
  hideLoading,
  showLoad,
  hideLoad,
  setLoadFalse,
  setLoadTrue,
  changePageFalse,
  changePageTrue,
  changeGloss,
  changeVal,
  pinImgUrl,
  pinImgSmallUrl,
  pinImgMiddleUrl,
  pinPreImg,
  pinPreSmallImg,
  imgPreload,
  onWindowH,
  getToken,
  pinFormId,
  addPic,
  setBtnState,
  downTime,
  supZero,
  setStar,
  setSpace,
  setComma,
  goApprovePage,
  toCompareBank,
  getBankLogo,
  getBankAccount,
  getRate,
  forDight,
	setPositionQuality,
	setGlossLongitude
}