const Api = require('services/config/api.js');
const Es6Promise = require('lib/es6-promise.js');


/**
 * 封封微信的的request
 */
let bool = true;
function request(url, data = {}, method = "GET") {
  let loginApi = Api.AuthLoginByWeixin;
  return new Es6Promise(function (resolve, reject) {
    wx.request({
      url: url,
      data: data,
      method: method,
      header: {
        'Content-Type': 'application/json',
        // 'Authorization': "Bearer "+ wx.getStorageSync('token')
		'MYTK': wx.getStorageSync('token')
      },
      success: function (res) {
  
        if (res.statusCode >= 200 && res.statusCode < 300) {
          resolve(res);
        }
        // 重新登录
        else if (res.statusCode == 401 && url.indexOf(loginApi) == -1) {
          let loginOn = wx.getStorageSync("loginOn");

          if (!loginOn) {
            wx.setStorageSync("loginOn", true);

            //需要登录后才可以操作
            let code = null;
            return login().then((res) => {
              code = res.code;
              return getUserInfo();
            }).then((userInfo) => {

              wx.setStorageSync("rawData", userInfo.rawData)
              wx.setStorageSync("signature", userInfo.signature)

              // 重新登录，登录远程服务器
              request(Api.AuthLoginByWeixin, { code: code, userInfo: userInfo }, 'POST').then(res => { 
                wx.setStorageSync("loginOn", false);

                if (res.data.code == 200) {
                  if (res.data.sessionKey) {
                    wx.setStorageSync("sessionKey", res.data.sessionKey);
                  }

                  // 存储用户信息
                  wx.setStorageSync('userInfo', res.data.userInfo);
		              wx.setStorageSync('token', res.data.token);

                  // 获取用户认证信息
                  // getApproveData();
                  // 获取支持的银行卡
                  // getSupportBank();
		              // 获取当前页面的路径
                  let getPage = getCurrentPages();

                  // 拼接当前页面路径
                  let pageRoute = `/${getPage[getPage.length-1].route}`;
                  let pageOptions = getPage[getPage.length - 1].options;
                  let nStr = ``;
                  // 当前路径拼接
                  for (let attr in pageOptions) {
                    nStr += `&${attr}=${pageOptions[attr]}`
                  }
                  let pageUrl = pageRoute + nStr.replace('&', '?');
                  
                  if (wx.reLaunch) {
                    wx.reLaunch({
                      url: pageUrl
                    });
                  } else {
                    wx.switchTab({
                      url: '/pages/tab-index/index'
                    })
                  }
                } else {
                  reject(res);
                }
              }).catch((err) => {
                wx.setStorageSync("loginOn", false);
                reject(err);
              });
              
            }).catch((err) => {
              wx.setStorageSync("loginOn", false);
              reject(err);
            })
          }
        }
        // 无权限
        else if (res.statusCode == 403) {
          // backIndexPageModal("很抱歉，你没有查看权限");
          reject(res);
        }
        else {
          reject(res);
        }
      },
      fail: function (err) {
        reject(err);
        
        if (bool) {
          bool = false;
          wx.getNetworkType({
            success: function(res) {
              // 判断有没有网络
              if (res.networkType == "none") {
                showModal("网络连接失败，请检测网络是否正常", function() {
                  bool = true;
                })
              } else {
                if (err.errMsg.indexOf("timeout") != -1) {
                  showModal("请求超时，请重新请求！", function() {
                    bool = true;
                  })
                } else {
                  showModal(err.errMsg, function() {
                    bool = true;
                  })
                }
              }
            }
          })
        }
      }
    })
  });
}

/**
 * banner跳转
 */

// const bannerJumpRequest = (title,orderNo,picId,type,info,startDate,endDate,status) =>{
//   var url = Api.bannerJump + ""
//   var data = {
//     title:title,
//     orderNo:orderNo,
//     picId:picId,
//     type:type,
//     info:info,
//     startDate: startDate,
//     endDate: endDate,
//     status: status,
//   }
//   request(url,data,"POST")
// }

// const commentRequest = (url,data={},method="GET") =>{
//   var url = `${Api.guestComment}?page=1&size=5`
//   var data = {

//   }
//   request(url,data,"GET")
// }

// const jumpMpRequest = (m_appid, headerTokne, contentType, end_method)=>{
//   var url = Api.tiaozhuan
//   var data={
//     m_appid: "wxfa94ddf446523122",
//     method: "POST",	
//     headerTokne: "",
//     contentType: "application/json",
//     end_method: "/wx/carte/user/receiveData"
//   }
//   request(url,data,"POST")
// }
const showToast = str => {
  wx.showToast({
    title: str,
    image: '/images/icon-alert.png'
  })
}
const showLoading = str => {
  wx.showLoading({
    title: str,
    mask: true
  })
}


/**
 * photo upload 
 */
function uploadPic(filePath){
  return new Es6Promise(function (resolve, reject) {
    const uploadTask = wx.uploadFile({
      url: Api.PicUpload, //仅为示例，非真实的接口地址
      filePath: filePath,
      name: 'file',
      header: {
        'Authorization': "Bearer " + wx.getStorageSync('token')
      },
      formData: {
        'user': 'test'
      },
      success: function (res) {
        resolve(res);
        let data = res.data
        
        //do something
      },
      fail: function (err){
        reject(err);
      }
    })

    // uploadTask.onProgressUpdate((res) => {
    //   console.log(filePath+'上传进度', res.progress)
    //   console.log(filePath+'已经上传的数据长度', res.totalBytesSent)
    //   console.log(filePath+'预期需要上传的数据总长度', res.totalBytesExpectedToSend)
    // })
  });
  
}


/**
 * 已经选中的图片上传 array
 */
function uploadPics(photoList) {
  return new Es6Promise(function (resolve, reject) {
    let picArray = photoList;
    let photoJsonArray = [];
    if (picArray.length != 0) {
      for (let i = 0; i < picArray.length; i++) {
        uploadPic(picArray[i]).then(function (res) {
          photoJsonArray.push(JSON.parse(res.data))
          //console.dir(res.data);
          //console.dir(photoJsonArray);
          if (photoJsonArray.length == picArray.length){
            resolve(photoJsonArray);
          }
        }).catch(err => {
          // util.showToast("图片上传失败");
          reject(err);
          return;
        })
      }
    } else {
      resolve([]);
    }
  });
} 

/**
 * 下载图片
 */
function downloadFile(imgUrl) {
  return new Es6Promise(function (resolve, reject) {
    wx.downloadFile({
      url: imgUrl,
      success: function (res) {
        if (res.statusCode === 200) {
          resolve(res.tempFilePath);
        } else {        
          reject();
        }
      },
      fail: function(err) {
        reject();
      }
    })
  })
}

/**
 * 检查微信会话是否过期
 */
function checkSession() {
  return new Es6Promise(function (resolve, reject) {
    wx.checkSession({
      success: function () {
        resolve(true);
      },
      fail: function () {
        reject(false);
      }
    })
  });
}

/**
 * 调用微信登录
 */
function login() {
  return new Es6Promise(function (resolve, reject) {
    wx.login({
      success: function (res) {
        if (res.code) {
          //登录远程服务器
          resolve(res);
        } else {
          reject(res);
        }
      },
      fail: function (err) {
        reject(err);
      }
    });
  });
}

/**
 * 获取微信用户信息
 */
function getUserInfo() {
  return new Es6Promise(function (resolve, reject) {
    // 查看是否授权
    // console.log('查看用户是否授权')
    if (wx.getSetting) {
      let getPages = getCurrentPages();
      let page = getPages[getPages.length - 1];

      wx.getSetting({
        success: function (getRes) {
          if (getRes.authSetting['scope.userInfo']) {
            wx.getUserInfo({
              withCredentials: true,
              success: function (userRes) {
                resolve(userRes);
              },
              fail: function (userErr) {
                console.log(userErr, 'userInfo');
                reject(err);
              }
            })
          } else {
            page.setData({
              userAuthor: true
            })
            // console.log('用户需要授权');
          }
        },
        fail: function (err) {
          page.setData({
            userAuthor: true
          })
          console.log("调用 wx.getSetting 方法失败",err);
        }
      })
    } else {
      showModal('当前微信版本暂不支持 wx.getSetting 方法，请升级微信版本！');
    }
  });
}

/**
 * 重新登录
 */
function loginAgain() {
  let code = null;
  login().then((res) => {
    code = res.code;
    return getUserInfo();
  }).then((userInfo) => {

    wx.setStorageSync("rawData", userInfo.rawData)
    wx.setStorageSync("signature", userInfo.signature)

    // 重新登录，登录远程服务器
    request(Api.AuthLoginByWeixin, { code: code, userInfo: userInfo }, 'POST').then(res => {
      if (res.statusCode == 200) {
        let newData = res.data;

        if (newData.sessionKey) {
          wx.setStorageSync("sessionKey", newData.sessionKey);
        }

        // 存储用户信息
        wx.setStorageSync('userInfo', newData.userInfo);
        wx.setStorageSync('token', newData.token);

        // 获取当前页面的路径
        let getPage = getCurrentPages();
        let nowPage = getPage[getPage.length - 1];

        // 用户已注册
        if (newData.token && newData.userInfo.company && newData.userInfo.phone) {
          // 拼接当前页面路径
          let pageRoute = `/${nowPage.route}`;
          let pageOptions = nowPage.options;
          let nStr = ``;
          // 当前路径拼接
          for (let attr in pageOptions) {
            nStr += `&${attr}=${pageOptions[attr]}`
          }
          let pageUrl = pageRoute + nStr.replace('&', '?');

          // 执行当前页面的 onLoad 事件
          // nowPage.onLoad(nowPage.options);
          if (wx.reLaunch) {
            wx.reLaunch({
              url: pageUrl,
            })
          } else {
            wx.switchTab({
              url: '/pages/tab-index/index'
            })
          }
        }
        // 用户未注册
        else if (newData.token) {
          let AppData = getApp().globalData;
          AppData.regPage.route = nowPage.route;
          AppData.regPage.opt = nowPage.options;

          if (wx.reLaunch) {
            // wx.reLaunch({
            //   url: '/pages/public/authorize',
            // })
          } else {
            // wx.redirectTo({
            //   url: '/pages/public/authorize',
            // })
          }
        }
      } else {
        showModal("登录服务器失败");
        // reject(res);
      }
    }).catch((err) => {
      showModal("登录服务器失败");
      // reject(err);
    });
  }).catch(err => {
    showModal("登录服务器失败");
  })
}

/**
 * 判断是否进入注册页
 */
function goRegPage() {
  let AppData = getApp().globalData;
  let userInfo = wx.getStorageSync("userInfo");

  // 用户未注册
  if (!userInfo.company || !userInfo.phone) {
    // 获取当前页面的路径
    let getPage = getCurrentPages();
    let nowPage = getPage[getPage.length - 1];

    AppData.regPage.route = nowPage.route;
    AppData.regPage.opt = nowPage.options;

    if (wx.reLaunch) {
      // wx.reLaunch({
      //   url: '/pages/public/authorize',
      // })
    } else {
      // wx.redirectTo({
      //   url: '/pages/public/authorize',
      // })
    }
    return false;
  } else {
    return true;
  }
}

/**
 * 微信是否授权判断
 */
// function scopeWChat() {
  // return new Promise(function (resolve, reject) {
  //   let token = wx.getStorageSync("token");
  //   let scopeLogin = wx.getStorageSync('scopeLogin');

  //   if (!token && scopeLogin) {
  //     wx.getSetting({
  //       success: (res) => {
  //         let scopeInfo = res.authSetting['scope.userInfo'];

  //         // 是否授权
  //         if (scopeInfo) {
  //           resolve(true)
  //           wx.removeStorageSync("scopeLogin");
  //         } else {
  //           reject(false);
  //         }
  //       }
  //     })
  //   }
  // })
// }

/**
 * 获取认证信息
 */
function getApproveData() {
  return new Es6Promise(function (resolve, reject) {
    let info = wx.getStorageSync('userInfo');

    // 判断用户是否已经注册
    if (info.phone) {
      let approveApi = Api.UserApprove;

      request(approveApi, {}, 'get').then(res => {
        resolve(res);
        wx.setStorageSync("approveInfo", res.data);
      }).catch(err => {
        wx.hideLoading();
        showModal("获取认证失败");
      })
    }
  })
}

/**
 * 获取支持的银行列表
 */
function getSupportBank() {
  getPaySaveBank();
  getPayCreditBank();
  getCashBank();
}

/**
 * 获取付款银行列表--储蓄卡
 */
function getPaySaveBank() {
  return new Es6Promise(function (resolve, reject) {
    let info = wx.getStorageSync('userInfo');

    // 判断用户是否已经注册
    if (info.phone) {
        request(Api.UserPaySave).then(res => {
          // 获取银行logo
          let paySaveData = res.data.map((item) => {
            item.logo = item.logo ? `${Api.ShowPic}/${item.logo}/download` : null;
            return item;
          })
          resolve(paySaveData);
          wx.setStorageSync("paySaveList", paySaveData);
        }).catch(err => {
          wx.hideLoading();
          showModal("获取付款卡失败");
        })
    }
  })
}

/**
 * 获取付款银行列表--信用卡
 */
function getPayCreditBank() {
  return new Es6Promise(function (resolve, reject) {
    let info = wx.getStorageSync('userInfo');

    // 判断用户是否已经注册
    if (info.phone) {
      request(Api.UserPayCredit).then(res => {
        // 获取银行logo
        let payCreditData = res.data.map((item) => {
          item.logo = item.logo ? `${Api.ShowPic}/${item.logo}/download` : null;
          return item;
        })
        resolve(payCreditData);
        wx.setStorageSync("payCreditList", payCreditData);
      }).catch(err => {
        wx.hideLoading();
        showModal("获取信用卡失败");
      })
    }
  })
}


/**
 * 获取收款银行列表
 */
function getCashBank() {
  return new Es6Promise(function (resolve, reject) {
    let info = wx.getStorageSync('userInfo');

    // 判断用户是否已经注册
    if (info.phone) {
      request(Api.UserCashBank).then(res => {
        // 获取银行logo
        let cashData = res.data.map((item) => {
          item.logo = item.logo ? `${Api.ShowPic}/${item.logo}/download` : null;
          return item;
        })
        resolve(cashData)
        wx.setStorageSync("cashBankList", cashData);
      }).catch(err => {
        wx.hideLoading();
        showModal("获取收款卡失败");
      })
    }
  })
}

/**
 * 自动消失的提示框
 */
function showErrorToast(msg) {
  wx.showToast({
    title: msg,
    duration: 2500,
    image: '../../images/alert.png'
  })
}

/** 
 * 功能：modal 提醒框
 * 参数：
 *    第一个参数：当无第二个参数，为内容；有第二个参数，为标题
 *    第二个参数：当参数类型为：string时，为内容；参数类型为function：为成功回调函数，并且不能传入第三个参数
 *    第三个参数：成功回调的函数
 * 例子：
 *    showModal("内容")
 *    showModal("标题", "内容")
 *    showModal("内容", function() { console.log("成功回调函数") })
 *    showModal("标题", "内容", function() { console.log("成功回调函数") })
 */
function showModal(oTitle, msg, fn) {
  let sTitle = "";
  let oFn = typeof msg == "function" ? msg : fn;
  let sMsg = "";

  if (msg != undefined && typeof msg == "string") {
    sTitle = oTitle;
    sMsg = msg;
  } else {
    sTitle = "";
    sMsg = oTitle;
  }

  wx.showModal({
    title: sTitle || "",
    content: sMsg || "",
    confirmColor: "#ff8834",
    showCancel: false,
    success: function(res) {
      oFn && oFn(res);
    }
  })
}

/**
 * 返回首页提醒框
 */
function backIndexPageModal(msg) {
  wx.showModal({
    content: msg,
    showCancel: false,
    confirmText: '确认',
    confirmColor: "#ff8834",
    success: function (res) {
      // if (res.confirm) {
      if (wx.reLaunch) {
        wx.reLaunch({
          url: '/pages/tab-index/index'
        })
      } else {
        wx.switchTab({
          url: '/pages/tab-index/index'
        })
      }
      // }
    }
  })
}

/**
 * 从需要上传的图片中，筛选出已经上传过的图片；并返回需要上传的图片 及 无需上传的图片对象
 */
const picUpPic = (picListArr, picListObjArr) => {
  let newArr = [];
  let oldArr = [];
  let oldPicArr = [];

  // 从新获图片数组中，筛选出已经上传过的图片
  picListArr.forEach(item => {
    if (item.indexOf(Api.NewApiRootUrl) == -1) {
      newArr.push(item); // 未上传图片
    } else {
      oldArr.push(item); // 上传图片
    }
  })

  // 获取已上传图片的图片对象
  picListObjArr.forEach(item => {
    oldArr.forEach(list => {
      if (list.indexOf(item.id) != -1) {
        oldPicArr.push(item);
      }
    })
  })

  return [newArr, oldPicArr];
}

/**
 * 版本过低提醒框
 */
function versionTip() {
  showModal("版本提示", "当前版本暂不支持该功能，请升级微信版本！");
}

//获取当前日期
function getTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('-')
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

module.exports = {
  request,
  checkSession,
  login,
  getUserInfo,
  goRegPage,
  // scopeWChat,
  uploadPic,
  uploadPics,
  downloadFile,

  getApproveData,
  getSupportBank,
  getPaySaveBank,
  getPayCreditBank,
  getCashBank,

  showErrorToast,
  showModal,
  showToast,
  showLoading,
  versionTip,
  backIndexPageModal,

  getTime,
  picUpPic
}


