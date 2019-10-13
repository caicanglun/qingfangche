const Common = require('utils/common.js');
const Api = require('services/config/api.js');
const Util = require('utils/util.js');
const Es6Promise = require('lib/es6-promise.js');

/*
 * get 数据
 */
function getDataWX(api, data) {
  return new Es6Promise(function (resolve, reject) {
    Util.request(api, data, 'get').then(res => {
      if (res.statusCode === 200) {
        resolve(res);
      } else {
        reject(res);
      }
    }).catch(err => {
      reject(err);
    })
  })
}

/**
 * post 数据
 */
function postDataWX(api, data) {
  return new Es6Promise(function (resolve, reject) {
    Util.request(api, data, 'post').then(res => {
      if (res.statusCode >= 200 && res.statusCode < 300) {
        resolve(res);
      } else {
        reject(res);
      }
    }).catch(err => {
      reject(err);
    });
  })
}


/**
 * put 数据
 */
function putDataWX(api, data) {
  return new Es6Promise(function (resolve, reject) {
    Util.request(api, data, 'put').then(res => {
      if (res.statusCode >= 200 && res.statusCode < 300) {
        resolve(res);
      } else {
        reject(res);
      }
    }).catch(err => {
      reject(err);
    });
  })
}

/**
 * delete 数据
 */
function deleteDataWX(api, data) {
  return new Es6Promise(function (resolve, reject) {
    Util.request(api, data, 'delete').then(res => {
      if (res.statusCode >= 200 && res.statusCode < 300) {
        resolve(res);
      } else {
        reject(res);
      }
    }).catch(err => {
      reject(err);
    });
  })
}

/**
 * 页面行为记录
 */
function setActive(that, data) {
  let apiStr = Api.userBehavior;
  let token = wx.getStorageSync("token");

  if (that.data.loadState && token) {
    postDataWX(apiStr, data).then(res => {
      Common.setLoadTrue(that)
    }).catch(err => {
      Common.setLoadTrue(that)
    })
  }
}

/**
 * 获取表单formId
 */
function getFormId(e) {
  let formId = e.detail.formId;
  let formApi = Common.pinFormId(Api.formID, formId);
  let token = wx.getStorageSync("token");

  if (token && formId != "the formId is a mock one") {
    Util.request(formApi, {}, 'get').then(res => {}).catch(err => {});
  }
}


/**
 * 功能：获取二维码
 * 参数：
 *    pagePath：页面路径
 *    id：订单id
 */
function getQRCodeUrl(pagePath, id) {
  return new Es6Promise(function (resolve, reject) {
    let COdeApi = Api.QRCodeUrl;
    let pageUrl = id ? `${pagePath}?id=${id}` : pagePath;

    Util.request(COdeApi, pageUrl, 'post').then(res => {
      let picUrl = `${Api.ShowPic}/${res.data.id}/download`;

      Util.downloadFile(picUrl).then(weChatUrl => {
        resolve(weChatUrl);
      }).catch(err => {
        showModal("图片下载失败");
      })
    }).catch(err => {
      Util.showErrorToast("获取二维码失败");
    })
  })
}

/**
 * 上传图片
 * 
 * 参数：
 *    photoList：要上传的图片数组
 *    apiState：控制使用压缩上传的api，还是不压缩上传的api
 */
const uploadPics = (photoList, apiState = false) => {
  return new Es6Promise((resolve, reject) => {
    let photoJsonArray = [];
    if (photoList && photoList.length >= 1) {
      photoList.forEach(item => {
        wx.uploadFile({
          url: !apiState ? Api.PicUpload : Api.PicNewUpload,
          filePath: item,
          name: 'file',
          header: {
            'Authorization': "Bearer " + wx.getStorageSync('token')
          },
          formData: {
            'user': 'test'
          },
          success: function (res) {
            photoJsonArray.push(JSON.parse(res.data));

            if (photoJsonArray.length == photoList.length) {
              resolve(photoJsonArray);
            }
          },
          fail: function (err) {
            reject(err);
          }
        })
      })
    } else {
      resolve([]);
    }
  });
}



/**
 * 功能：采购订单详情--获取用户的 付款银行账户 
 */
function createOrder(data) {
  return new Es6Promise(function (resolve, reject) {
    let createOrderApi = Api.createOrder;

    Util.request(createOrderApi, data, 'post').then(res => {
      resolve(res);
    }).catch(err => {
      Util.showModal("新建询价单失败");
      // reject(err);
    })
  })
}



module.exports = {
  getDataWX,
  postDataWX,
  putDataWX,
  deleteDataWX,
  setActive,
  getFormId,
  getQRCodeUrl,
  uploadPics,
  createOrder
}