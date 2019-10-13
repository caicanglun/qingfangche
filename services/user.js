/**
 * 用户相关服务
 */

const Util = require('utils/util.js');
const Api = require('services/config/api.js');
const Es6Promise = require('lib/es6-promise.js');


/**
 * 调用微信登录
 */
function loginByWeixin() {
  let code = null;
  return new Es6Promise(function (resolve, reject) {
    // return Util.login().then((res) => {
    //   code = res.code;
    //   return Util.getUserInfo();
    // }).then((userInfo) => {
    Es6Promise.all([
      Util.login(),
      Util.getUserInfo()
    ]).then(allRes => {
      let code = allRes[0].code;
      let userInfo = allRes[1];
      let loginOn = wx.getStorageSync("loginOn");

      if (!loginOn) { // 防止重复请求登录
        wx.setStorageSync("loginOn", true);

        wx.setStorageSync("rawData", userInfo.rawData)
        wx.setStorageSync("signature", userInfo.signature)
        
        //登录远程服务器
        Util.request(Api.AuthLoginByWeixin, { code: code, userInfo: userInfo }, 'post').then(res => {
          wx.setStorageSync("loginOn", false);

          if (res.statusCode == 200) {
            if (res.data.sessionKey) {
              wx.setStorageSync("sessionKey", res.data.sessionKey);
            }
            //存储用户信息
            wx.setStorageSync('userInfo', res.data.userInfo);
            wx.setStorageSync('token', res.data.token);

            resolve(res);
          } else {
            reject(res);
          }
        }).catch((err) => {
          wx.setStorageSync("loginOn", false);
          reject(err);
        });
      }
    }).catch((err) => {
      reject(err);
    })
  });
}

/**
 * 判断用户是否登录
 */
function checkLogin() {
  return new Es6Promise(function (resolve, reject) {
    if (wx.getStorageSync('userInfo') && wx.getStorageSync('token')) {

      Util.checkSession().then(() => {
        resolve(true);
      }).catch(() => {
        reject(false);
      });

    } else {
      reject(false);
    }
  });
}

module.exports = {
  loginByWeixin,
  checkLogin
};











