const Api = require('services/config/api.js');
const Common = require('utils/common.js');
const Util = require('utils/util.js');
const User=require('services/user.js');
const Es6Promise = require('lib/es6-promise.js');
//下拉选择
//区域列表
function getRegion() {
  return new Es6Promise(function(resolve, reject) {
    let newApi = Api.getRegion;
    Util.request(newApi,{}, 'get').then(res => {
      resolve(res);
    }).catch(err => {
      reject(err);
    })
  })
}
//配合度
function getcoordinate() {
  return new Es6Promise(function(resolve, reject) {
    let newApi = Api.getcoordinate;
    Util.request(newApi,{}, 'get').then(res => {
      resolve(res);
    }).catch(err => {
      reject(err);
    })
  })
}
//客户类型
function getType() {
  return new Es6Promise(function(resolve, reject) {
    let newApi = Api.getType;
    Util.request(newApi,{}, 'get').then(res => {
      resolve(res);
    }).catch(err => {
      reject(err);
    })
  })
}
//客户规模
function getScale() {
  return new Es6Promise(function(resolve, reject) {
    let newApi = Api.getScale;
    Util.request(newApi,{}, 'get').then(res => {
      resolve(res);
    }).catch(err => {
      reject(err);
    })
  })
}
//客户来源
function getSource() {
  return new Es6Promise(function(resolve, reject) {
    let newApi = Api.getSource;
    Util.request(newApi,{}, 'get').then(res => {
      resolve(res);
    }).catch(err => {
      reject(err);
    })
  })
}
//公司经营模式
function getBusinessModel() {
  return new Es6Promise(function(resolve, reject) {
    let newApi = Api.getBusinessModel;
    Util.request(newApi,{}, 'get').then(res => {
      resolve(res);
    }).catch(err => {
      reject(err);
    })
  })
}
//主营产品
function getMainProduct() {
  return new Es6Promise(function(resolve, reject) {
    let newApi = Api.getMainProduct;
    Util.request(newApi,{}, 'get').then(res => {
      resolve(res);
    }).catch(err => {
      reject(err);
    })
  })
}
//资金状况
function getOperateCapital() {
  return new Es6Promise(function(resolve, reject) {
    let newApi = Api.getOperateCapital;
    Util.request(newApi,{}, 'get').then(res => {
      resolve(res);
    }).catch(err => {
      reject(err);
    })
  })
}
//信用状况
function getOperateCredit() {
  return new Es6Promise(function(resolve, reject) {
    let newApi = Api.getOperateCredit;
    Util.request(newApi,{}, 'get').then(res => {
      resolve(res);
    }).catch(err => {
      reject(err);
    })
  })
}
//运营状况
function getOperateOperation() {
  return new Es6Promise(function(resolve, reject) {
    let newApi = Api.getOperateOperation;
    Util.request(newApi,{}, 'get').then(res => {
      resolve(res);
    }).catch(err => {
      reject(err);
    })
  })
}
//口碑
function getOperateWom() {
  return new Es6Promise(function(resolve, reject) {
    let newApi = Api.getOperateWom;
    Util.request(newApi,{}, 'get').then(res => {
      resolve(res);
    }).catch(err => {
      reject(err);
    })
  })
}
//品质定位
function getQuality() {
  return new Es6Promise(function(resolve, reject) {
    let newApi = Api.getQuality;
    Util.request(newApi,{}, 'get').then(res => {
      resolve(res);
    }).catch(err => {
      reject(err);
    })
  })
}
//角色
function getPost() {
  return new Es6Promise(function(resolve, reject) {
    let newApi = Api.getPost;
    Util.request(newApi,{}, 'get').then(res => {
      resolve(res);
    }).catch(err => {
      reject(err);
    })
  })
}
//渠道
function getChanne() {
  return new Es6Promise(function(resolve, reject) {
    let newApi = Api.getChanne;
    Util.request(newApi,{}, 'get').then(res => {
      resolve(res);
    }).catch(err => {
      reject(err);
    })
  })
}
//性价比
function getCostPerformance() {
  return new Es6Promise(function(resolve, reject) {
    let newApi = Api.getCostPerformance;
    Util.request(newApi,{}, 'get').then(res => {
      resolve(res);
    }).catch(err => {
      reject(err);
    })
  })
}
//身份
function getIdentity() {
  return new Es6Promise(function(resolve, reject) {
    let newApi = Api.getIdentity;
    Util.request(newApi,{}, 'get').then(res => {
      resolve(res);
    }).catch(err => {
      reject(err);
    })
  })
}
//发展潜力
function getPotential() {
  return new Es6Promise(function(resolve, reject) {
    let newApi = Api.getPotential;
    Util.request(newApi,{}, 'get').then(res => {
      resolve(res);
    }).catch(err => {
      reject(err);
    })
  })
}

//用户价格敏感度
function getPriceSensitivity() {
  return new Es6Promise(function(resolve, reject) {
    let newApi = Api.getPriceSensitivity;
    Util.request(newApi,{}, 'get').then(res => {
      resolve(res);
    }).catch(err => {
      reject(err);
    })
  })
}
//性格特点
function getCharacterFeatures() {
  return new Es6Promise(function(resolve, reject) {
    let newApi = Api.getCharacterFeatures;
    Util.request(newApi,{}, 'get').then(res => {
      resolve(res);
    }).catch(err => {
      reject(err);
    })
  })
}
//经营者特征
function getManageFeatures() {
  return new Es6Promise(function(resolve, reject) {
    let newApi = Api.getManageFeatures;
    Util.request(newApi,{}, 'get').then(res => {
      resolve(res);
    }).catch(err => {
      reject(err);
    })
  })
}
//经营定位
function getManagementPosition() {
  return new Es6Promise(function(resolve, reject) {
    let newApi = Api.getManagementPosition;
    Util.request(newApi,{}, 'get').then(res => {
      resolve(res);
    }).catch(err => {
      reject(err);
    })
  })
}
function getCooperationIntention(){
	return new Es6Promise(function(resolve, reject) {
	  let newApi = Api.getCooperationIntention;
	  Util.request(newApi,{}, 'get').then(res => {
	    resolve(res);
	  }).catch(err => {
	    reject(err);
	  })
	})
}



  function sellCusmterCreated(data) {
    return new Es6Promise(function(resolve, reject) {
      let newApi = Api.sellCusmterCreated;
      Util.request(newApi, data, 'post').then(res => {
        resolve(res);
      }).catch(err => {
        reject(err);
      })
    })
  }
// ---------------------------------------------

//新用户注册
function registration(data) {
  return new Es6Promise(function(resolve, reject) {
    let newApi = Api.registration;
    Util.request(newApi, data, 'post').then(res => {
      resolve(res);
    }).catch(err => {
      reject(err);
    })
  })
}

function getUserInfo(){
  return new Es6Promise(function (resolve, reject) {
    let newApi = Api.getAccountInfo;
    Util.request(newApi, {}, 'get').then(res => {
      resolve(res);
    }).catch(err => {
			if(err.statusCode==404){
				wx.clearStorage()
			}
			reject(err);
    })
  })
}
function getInquiryDetail(id) {
  return new Es6Promise(function(resolve, reject) {
    let newApi = Api.getInquiryDetail + '/' + id;

    Util.request(newApi, {}, 'get').then(res => {
      resolve(res);
    }).catch(err => {
      reject(err);
    })
  })
}

function getInquiryList(data) {
  return new Es6Promise(function(resolve, reject) {
    let newApi = Api.getInquiryList;
    Util.request(newApi, data, 'get').then(res => {
      resolve(res);
    }).catch(err => {
      reject(err);
    })
  })
}
// 获取跟进列表
function getRecordList(data) {
  return new Es6Promise(function(resolve, reject) {
    let newApi = Api.getRecordList;
    Util.request(newApi, data, 'get').then(res => {
      resolve(res);
    }).catch(err => {
      reject(err);
    })
  })
}
//获取客户列表
function getCustomerList(data) {
  return new Es6Promise(function(resolve, reject) {
    let newApi = Api.getCustomerList;
    Util.request(newApi, data, 'get').then(res => {
      resolve(res);
    }).catch(err => {
      reject(err);
    })
  })
}
// 获取关联客户列表
function getAssociatedCustomers(data={}) {
  return new Es6Promise(function(resolve, reject) {
    let newApi = Api.getAssociatedCustomers;
    Util.request(newApi, data, 'get').then(res => {
      resolve(res);
    }).catch(err => {
      reject(err);
    })
  })
}
function getBoundAssociatedCustomers(){
	return new Es6Promise(function (resolve, reject) {
		let newApi = Api.getBoundAssociatedCustomers;
		Util.request(newApi, {}, 'get').then(res => {
			resolve(res);
		}).catch(err => {
			reject(err);
		})
	})
}
// 新建客户跟进记录
function addRecord(data) {
  return new Es6Promise(function(resolve, reject) {
    let newApi = Api.addRecord;
    Util.request(newApi, data, 'post').then(res => {
      resolve(res);
    }).catch(err => {
      reject(err);
    })
  })
}
// 跟进记录详情单条
function getRecordOne(id) {
  return new Es6Promise(function(resolve, reject) {
    let newApi = Api.getRecordOne + "/" + id;
    Util.request(newApi, {}, 'get').then(res => {
      resolve(res);
    }).catch(err => {
      reject(err);
    })
  })
}
//跟进记录详情
function getRecord(data) {
  return new Es6Promise(function(resolve, reject) {
    let newApi = Api.getRecord;
    Util.request(newApi, data, 'get').then(res => {
      resolve(res);
    }).catch(err => {
      reject(err);
    })
  })
}
// 新建客户基本信息
function addCustomer(data){
  return new Es6Promise(function (resolve, reject) {
    let newApi = Api.addCustomer;
    Util.request(newApi, data, 'post').then(res => {
      resolve(res);
    }).catch(err => {
      reject(err);
    })
  })
}
//获取客户信息
function getCustomerInfo(id){
  return new Es6Promise(function (resolve, reject) {
    let newApi = Api.getCustomerInfo+id;
    Util.request(newApi, {}, 'get').then(res => {
      resolve(res);
    }).catch(err => {
      reject(err);
    })
  })
}
// 设置客户身份特征
function setIdentity(data){
  return new Es6Promise(function (resolve, reject) {
    let newApi = Api.setIdentity;
    Util.request(newApi, data, 'post').then(res => {
      resolve(res);
    }).catch(err => {
      reject(err);
    })
  })
}
// 设置客户产品信息
function setOpi(data) {
  return new Es6Promise(function (resolve, reject) {
    let newApi = Api.setOpi;
    Util.request(newApi, data, 'post').then(res => {
      resolve(res);
    }).catch(err => {
      reject(err);
    })
  })
}
// 设置经营状况
function setManagement(data) {
  return new Es6Promise(function (resolve, reject) {
    let newApi = Api.setManagement;
    Util.request(newApi, data, 'post').then(res => {
      resolve(res);
    }).catch(err => {
      reject(err);
    })
  })
}
// 新建保证金管理
function setDeposit(data) {
  return new Es6Promise(function (resolve, reject) {
    let newApi = Api.setDeposit;
    Util.request(newApi, data, 'post').then(res => {
      resolve(res);
    }).catch(err => {
      reject(err);
    })
  })
}
//保证金详情
function getDeposit(id){
  return new Es6Promise(function (resolve, reject) {
    let newApi = Api.setDeposit+"/"+id;
    Util.request(newApi, {}, 'get').then(res => {
      resolve(res);
    }).catch(err => {
      reject(err);
    })
  })
}
  
//分析单管理列表
function getAnalysisLst(data){
  return new Es6Promise(function (resolve, reject) {
    let newApi = Api.getAnalysisLst;
    Util.request(newApi, data, 'get').then(res => {
      resolve(res);
    }).catch(err => {
      reject(err);
    })
  })
}
// 新建询价分析单
function addXJAnalysis(data){
  return new Es6Promise(function (resolve, reject) {
    let newApi = Api.addXJAnalysis;
    Util.request(newApi, data, 'post').then(res => {
      resolve(res);
    }).catch(err => {
      reject(err);
    })
  })
}
//录入找样分析单
function addZYAnalysis(data) {
  return new Es6Promise(function (resolve, reject) {
    let newApi = Api.addZYAnalysis;
    Util.request(newApi, data, 'post').then(res => {
      resolve(res);
    }).catch(err => {
      reject(err);
    })
  })
}
//推送给全部卖帮办
function pushSellDeputy(id){
  return new Es6Promise(function (resolve, reject) {
    let newApi = Api.pushSellDeputy + "/" + id;
    Util.request(newApi, {}, 'get').then(res => {
      resolve(res);
    }).catch(err => {
      reject(err);
    })
  })
}
// 推送单个帮办
function pushSingleSeLLDeputy(data){
	return new Es6Promise(function (resolve, reject) {
		let newApi = Api.getMatchingDetail;
		Util.request(newApi, data, 'post').then(res => {
			resolve(res);
		}).catch(err => {
			reject(err);
		})
	})
}
//匹配列表
function getMatchingList(id){
  return new Es6Promise(function (resolve, reject) {
    let newApi = Api.getMatchingList + "/" + id;
    Util.request(newApi, {}, 'get').then(res => {
      resolve(res);
    }).catch(err => {
      reject(err);
    })
  })
}
//录入找样结果
function inputResult(data){
  return new Es6Promise(function (resolve, reject) {
    let newApi = Api.inputResult;
    Util.request(newApi,data, 'post').then(res => {
      resolve(res);
    }).catch(err => {
      reject(err);
    })
  })
}
// 获取找样结果详情
function getSampleDetail(data){
  return new Es6Promise(function (resolve, reject) {
		let newApi = Api.getSampleDetail;
    Util.request(newApi, data, 'get').then(res => {
      resolve(res);
    }).catch(err => {
      reject(err);
    })
  })
}
// 获取匹配结果详情
function getMatchingDetail(id) {
  return new Es6Promise(function (resolve, reject) {
    let newApi = Api.getMatchingDetail + "/" + id;
    Util.request(newApi, {}, 'get').then(res => {
      resolve(res);
    }).catch(err => {
      reject(err);
    })
  })
}
// 设置找样结果
function setSearchResul(data) {
  return new Es6Promise(function (resolve, reject) {
    let newApi = Api.setSearchResul;
    Util.request(newApi, data, 'post').then(res => {
      resolve(res);
    }).catch(err => {
      reject(err);
    })
  })
}
// 设置报价
function setOffer(data) {
  return new Es6Promise(function (resolve, reject) {
    let newApi = Api.setOffer;
    // if (pageId.zyId){
    //   newApi = newApi + '?zyid=' + pageId.zyId
    // }
		//  else if (pageId.ppId){
    //   newApi = newApi + '?ppid=' + pageId.ppId
    // }
    Util.request(newApi, data, 'post').then(res => {
      resolve(res);
    }).catch(err => {
      reject(err);
    })
  })
}
// 设置是否匹配
function setWhetherMarching(data) {
  return new Es6Promise(function (resolve, reject) {
    let newApi = Api.setWhetherMarching;
    Util.request(newApi, data, 'post').then(res => {
      resolve(res);
    }).catch(err => {
      reject(err);
    })
  })
}
function getVerificationCode(data){
  return new Es6Promise(function (resolve, reject) {
    let newApi = Api.getVerificationCode;
    Util.request(newApi, data, 'get').then(res => {
      resolve(res);
    }).catch(err => {
      reject(err);
    })
  })
}
function userRegistration(data,code){
  return new Es6Promise(function (resolve, reject) {
    let newApi = Api.userRegistration+'?code='+code;
    Util.request(newApi, data, 'post').then(res => {
      resolve(res);
    }).catch(err => {
      reject(err);
    })
  })
}
//获取最热搜索内容
function getNewSearch(data){
  return new Es6Promise(function (resolve, reject) {
    let newApi = Api.getNewSearch;
    Util.request(newApi, data, 'get').then(res => {
      resolve(res);
    }).catch(err => {
      reject(err);
    })
  })
}
// 样品库搜索结果列表
function getsearchResult(data){
  return new Es6Promise(function (resolve, reject) {
    let newApi = Api.getsearchResult;
    Util.request(newApi, data, 'post').then(res => {
      resolve(res);
    }).catch(err => {
      reject(err);
    })
  })
}
// 多项搜索
function manySearch(data, pageNo, pageSize){
  return new Es6Promise(function (resolve, reject) {
		let newApi = Api.manySearch + "?pageNo=" + pageNo + "&pageSize=" + pageSize;
    Util.request(newApi, data, 'post').then(res => {
      resolve(res);
    }).catch(err => {
      reject(err);
    })
  })
}
// 获取样品详情
function getSampleDetailBank(id){
  return new Es6Promise(function (resolve, reject) {
    let newApi = Api.getsearchResult + "/" + id;
    Util.request(newApi, {}, 'get').then(res => {
      resolve(res);
    }).catch(err => {
      reject(err);
    })
  })
}
// 查看历史报价
function viewHistoryQutoe(data){
  return new Es6Promise(function (resolve, reject) {
    let newApi = Api.viewHistoryQutoe;
    Util.request(newApi, data, 'post').then(res => {
      resolve(res);
    }).catch(err => {
      reject(err);
    })
  })
}
// 获取管理帮办列表
function getDeputyAdminList(data){
  return new Es6Promise(function (resolve, reject) {
    let newApi = Api.getDeputyAdminList;
    Util.request(newApi, data, 'get').then(res => {
      resolve(res);
    }).catch(err => {
      reject(err);
    })
  })
}
// 获取区域列表
function getAreaList() {
  return new Es6Promise(function (resolve, reject) {
    let newApi = Api.getAreaList;
    Util.request(newApi, {}, 'get').then(res => {
      resolve(res);
    }).catch(err => {
      reject(err);
    })
  })
}
// 设置区域经理
function setManager(id,areaId) {
  return new Es6Promise(function (resolve, reject) {
    let newApi = Api.setManager + "?id=" + id + "&&areaId=" + areaId;
    Util.request(newApi, {}, 'get').then(res => {
      resolve(res);
    }).catch(err => {
      reject(err);
    })
  })
}
// 获取区域经理列表
function getManagerList(data) {
  return new Es6Promise(function (resolve, reject) {
    let newApi = Api.getManagerList;
    Util.request(newApi, data, 'get').then(res => {
      resolve(res);
    }).catch(err => {
      reject(err);
    })
  })
}
// 获取帮办详情
function getDeputyDetails(data){
	return new Es6Promise(function (resolve, reject) {
		let newApi = Api.getDeputyDetails;
		Util.request(newApi, data, 'get').then(res => {
			resolve(res);
		}).catch(err => {
			reject(err);
		})
	})
}
// 冻结帮办
function freezeDeputy(data){
	return new Es6Promise(function (resolve, reject) {
		let newApi = Api.freezeDeputy ;
		Util.request(newApi, data, 'get').then(res => {
			resolve(res);
		}).catch(err => {
			reject(err);
		})
	})
}
// 分配给区域经理
function allocationDeputy(data){
	return new Es6Promise(function (resolve, reject) {
		let newApi = Api.allocationDeputy;
		Util.request(newApi, data, 'post').then(res => {
			resolve(res);
		}).catch(err => {
			reject(err);
		})
	})
}
// 获分配的客户列表
function getAllocationClientList(data){
	return new Es6Promise(function (resolve, reject) {
		let newApi = Api.getAllocationClientList;
		Util.request(newApi, data, 'get').then(res => {
			resolve(res);
		}).catch(err => {
			reject(err);
		})
	})
}
// 获分配的帮办列表
function getAllocationDeputyList(data) {
	return new Es6Promise(function (resolve, reject) {
		let newApi = Api.getAllocationDeputyList;
		Util.request(newApi, data, 'get').then(res => {
			resolve(res);
		}).catch(err => {
			reject(err);
		})
	})
}
// 移交权限
function transferManager(data){
	return new Es6Promise(function (resolve, reject) {
		let newApi = Api.transferManager;
		Util.request(newApi, data, 'get').then(res => {
			resolve(res);
		}).catch(err => {
			reject(err);
		})
	})
}
// 删除帮办分配
function deleteDeputyAllocation(data){
	return new Es6Promise(function (resolve, reject) {
		let newApi = Api.deleteDeputyAllocation;
		Util.request(newApi, data, 'post').then(res => {
			resolve(res);
		}).catch(err => {
			reject(err);
		})
	})
}
// 管理人员获取客户管理列表
function getAdminCustomerList(data) {
	return new Es6Promise(function (resolve, reject) {
		let newApi = Api.getAdminCustomerList;
		Util.request(newApi, data, 'get').then(res => {
			resolve(res);
		}).catch(err => {
			reject(err);
		})
	})
}
// 分配客户给区域经理
function allocationCustomer(data){
	return new Es6Promise(function (resolve, reject) {
		let newApi = Api.allocationCustomer;
		Util.request(newApi, data, 'post').then(res => {
			resolve(res);
		}).catch(err => {
			reject(err);
		})
	})
}
// 删除客户分配(销售总监)
function deleteAllotCustomer(data){
	return new Es6Promise(function (resolve, reject) {
		let newApi = Api.deleteAllotCustomer;
		Util.request(newApi, data, 'post').then(res => {
			resolve(res);
		}).catch(err => {
			reject(err);
		})
	})
}
//删除客户分配（区域经理）
function deleCustomers(data){
	return new Es6Promise(function (resolve, reject) {
		let newApi = Api.deleCustomers;
		Util.request(newApi, data, 'post').then(res => {
			resolve(res);
		}).catch(err => {
			reject(err);
		})
	})
}
// 区域经理分配客户
function setCustomerForManager(data){
	return new Es6Promise(function (resolve, reject) {
		let newApi = Api.setCustomerForManager;
		Util.request(newApi, data, 'post').then(res => {
			resolve(res);
		}).catch(err => {
			reject(err);
		})
	})
}
// 获取常规询价列表
function getRoutineList(data){
	return new Es6Promise(function (resolve, reject) {
		let newApi = Api.getRoutineList;
		Util.request(newApi, data, 'get').then(res => {
			resolve(res);
		}).catch(err => {
			reject(err);
		})
	})
}
// 催单报价
function reminderOffer(id){
	return new Es6Promise(function (resolve, reject) {
		let newApi = Api.reminderOffer+"/"+id;
		Util.request(newApi, {}, 'get').then(res => {
			resolve(res);
		}).catch(err => {
			reject(err);
		})
	})
}
// 常规询价报价
function setQuoteforCgxj(id,data){
	return new Es6Promise(function (resolve, reject) {
		let newApi = Api.setQuoteforCgxj + "/" + id;
		Util.request(newApi, data, 'post').then(res => {
			resolve(res);
		}).catch(err => {
			reject(err);
		})
	})
}
// 匹配结果报价
function setQuoteforPpbj(id,data){
	return new Es6Promise(function (resolve, reject) {
		let newApi = Api.setQuoteforPpbj + "/" + id;
		Util.request(newApi, data, 'post').then(res => {
			resolve(res);
		}).catch(err => {
			reject(err);
		})
	})
}
function getPpDetail(data){
	return new Es6Promise(function (resolve, reject) {
		let newApi = Api.getPpDetail;
		Util.request(newApi, data, 'get').then(res => {
			resolve(res);
		}).catch(err => {
			reject(err);
		})
	})
}
// 推送卖家
function pushSeller(data){
	return new Es6Promise(function (resolve, reject) {
		let newApi = Api.pushSeller;
		Util.request(newApi, data, 'post').then(res => {
			resolve(res);
		}).catch(err => {
			reject(err);
		})
	})
}
// 卖家我的报价列表
function getOfferList(data){
	return new Es6Promise(function (resolve, reject) {
		let newApi = Api.getOfferList;
		Util.request(newApi, data, 'get').then(res => {
			resolve(res);
		}).catch(err => {
			reject(err);
		})
	})
}
// 获取全部找样、匹配列表
function getAllList(data){
	return new Es6Promise(function (resolve, reject) {
		let newApi = Api.getAllList;
		Util.request(newApi, data, 'get').then(res => {
			resolve(res);
		}).catch(err => {
			reject(err);
		})
	})
}
// 关闭询价单
function closeInquirySheet(id, shut_reason){
	return new Es6Promise(function (resolve, reject) {
		let newApi = Api.closeInquirySheet+"/"+id;
		Util.request(newApi, {shut_reason}, 'put').then(res => {
			resolve(res);
		}).catch(err => {
			reject(err);
		})
	})
}
// 生成小程序二维码
function generateQrCode(data){
	return new Es6Promise(function (resolve, reject) {
		let newApi = Api.generateQrCode;
		Util.request(newApi, data, 'post').then(res => {
			resolve(res);
		}).catch(err => {
			reject(err);
		})
	})
}
// 获取未读消息数量
function getNewsNum(){
	return new Es6Promise(function (resolve, reject) {
		let newApi = Api.getNewsNum;
		Util.request(newApi, {}, 'get').then(res => {
			resolve(res);
		}).catch(err => {
			reject(err);
		})
	})
}
// 获取消息列表
function getNewsList(data){
	return new Es6Promise(function (resolve, reject) {
		let newApi = Api.getNewsList;
		Util.request(newApi, data, 'get').then(res => {
			resolve(res);
		}).catch(err => {
			reject(err);
		})
	})
}
// 标记已读
function setHaveRead(id){
	return new Es6Promise(function (resolve, reject) {
		let newApi = Api.setHaveRead
		if(id){
			newApi = Api.setHaveRead+"/"+id;
		}
		Util.request(newApi, {}, 'get').then(res => {
			resolve(res);
		}).catch(err => {
			reject(err);
		})
	})
}
// 获取客户询价列表
function getCustomerInquiryList(data){
	return new Es6Promise(function (resolve, reject) {
		let newApi = Api.getCustomerInquiryList
		Util.request(newApi, data, 'get').then(res => {
			resolve(res);
		}).catch(err => {
			reject(err);
		})
	})
}
// 获取最热
function getNewNumber(data){
	return new Es6Promise(function (resolve, reject) {
		let newApi = Api.getNewNumber
		Util.request(newApi, data, 'get').then(res => {
			resolve(res);
		}).catch(err => {
			reject(err);
		})
	})
}
// 删除找样结果
function deleteSample(data){
	return new Es6Promise(function (resolve, reject) {
		let newApi = Api.deleteSample
		Util.request(newApi, data, 'post').then(res => {
			resolve(res);
		}).catch(err => {
			reject(err);
		})
	})
}
// 获取产品展示详情
function getProductDetail(id){
	return new Es6Promise(function (resolve, reject) {
		let newApi = Api.getProductDetail+"/"+id
		Util.request(newApi, {}, 'get').then(res => {
			resolve(res);
		}).catch(err => {
			reject(err);
		})
	})
}
// 新增产品
function addProduct(data) {
	return new Es6Promise(function (resolve, reject) {
		let newApi = Api.addProduct;
		Util.request(newApi, data, 'post').then(res => {
			resolve(res);
		}).catch(err => {
			reject(err);
		})
	})
}
// 批量修改产品展示系列类型
function allModityTypeSeries(data) {
	return new Es6Promise(function (resolve, reject) {
		let newApi = Api.allModityTypeSeries;
		Util.request(newApi, data, 'post').then(res => {
			resolve(res);
		}).catch(err => {
			reject(err);
		})
	})
}
// 获取产品详情
function getProductDetails(id){
	return new Es6Promise(function (resolve, reject) {
		let newApi = Api.addProduct + "/" + id
		Util.request(newApi, {}, 'get').then(res => {
			resolve(res);
		}).catch(err => {
			reject(err);
		})
	})
}
// 更新产品信息
function updateProduct(data,id){
	return new Es6Promise(function (resolve, reject) {
		let newApi = Api.updateProduct + "/" + id
		Util.request(newApi, data, 'post').then(res => {
			resolve(res);
		}).catch(err => {
			reject(err);
		})
	})
}
// 更新记录列表
function getRenewList(data) {
	return new Es6Promise(function (resolve, reject) {
		let newApi = Api.getRenewList
		Util.request(newApi, data, 'get').then(res => {
			resolve(res);
		}).catch(err => {
			reject(err);
		})
	})
}
// 更新产品状态
function updateStatus(data) {
	return new Es6Promise(function (resolve, reject) {
		let newApi = Api.updateStatus
		Util.request(newApi, data, 'post').then(res => {
			resolve(res);
		}).catch(err => {
			reject(err);
		})
	})
}
// 保证金处理列表
function getBondHandleList(data) {
	return new Es6Promise(function (resolve, reject) {
		let newApi = Api.getBondHandleList
		Util.request(newApi, data, 'get').then(res => {
			resolve(res);
		}).catch(err => {
			reject(err);
		})
	})
}
// 新增保证金处理
function addBondHandle(data) {
	return new Es6Promise(function (resolve, reject) {
		let newApi = Api.addBondHandle
		Util.request(newApi, data, 'post').then(res => {
			resolve(res);
		}).catch(err => {
			reject(err);
		})
	})
}
// 保证金处理详情
function getHandleDetail(id) {
	return new Es6Promise(function (resolve, reject) {
		let newApi = Api.addBondHandle+'/'+id
		Util.request(newApi, {}, 'get').then(res => {
			resolve(res);
		}).catch(err => {
			reject(err);
		})
	})
}
// 新增保证金列表
function getBondAddList(data) {
	return new Es6Promise(function (resolve, reject) {
		let newApi = Api.getBondAddList
		Util.request(newApi, data, 'get').then(res => {
			resolve(res);
		}).catch(err => {
			reject(err);
		})
	})
}
// 新增保证金
function addBond(data){
	return new Es6Promise(function (resolve, reject) {
		let newApi = Api.setDeposit
		Util.request(newApi, data, 'post').then(res => {
			resolve(res);
		}).catch(err => {
			reject(err);
		})
	})
}
// 新增保证金详情
function getBondeDetail(id) {
	return new Es6Promise(function (resolve, reject) {
		let newApi = Api.setDeposit + '/' + id
		Util.request(newApi, {}, 'get').then(res => {
			resolve(res);
		}).catch(err => {
			reject(err);
		})
	})
}
// 管理员获取审核列表
function getBondAdmin(data){
	return new Es6Promise(function (resolve, reject) {
		let newApi = Api.getBondAdmin
		Util.request(newApi, data, 'get').then(res => {
			resolve(res);
		}).catch(err => {
			reject(err);
		})
	})
}
// 修改保证金处理状态
function setHandleStatus(data) {
	return new Es6Promise(function (resolve, reject) {
		let newApi = Api.setHandleStatus
		Util.request(newApi, data, 'post').then(res => {
			resolve(res);
		}).catch(err => {
			reject(err);
		})
	})
} 
// 修改保证金状态
function setBondStatus(data) {
	return new Es6Promise(function (resolve, reject) {
		let newApi = Api.setBondStatus
		Util.request(newApi, data, 'post').then(res => {
			resolve(res);
		}).catch(err => {
			reject(err);
		})
	})
}
// 请求再次报价
function requestQuoation(data) {
	return new Es6Promise(function (resolve, reject) {
		let newApi = Api.requestQuoation
		Util.request(newApi, data, 'get').then(res => {
			resolve(res);
		}).catch(err => {
			reject(err);
		})
	})
}
// 找样结果发起报价
function setQuoteForZyxj(id, data) {
	return new Es6Promise(function (resolve, reject) {
		let newApi = Api.setQuoteForZyxj + "/" + id;
		Util.request(newApi, data, 'post').then(res => {
			resolve(res);
		}).catch(err => {
			reject(err);
		})
	})
}
// 推送买帮办
function pushToBuyer(id){
	return new Es6Promise(function (resolve, reject) {
		let newApi = Api.pushToBuyer + "/" + id;
		Util.request(newApi, {}, 'get').then(res => {
			resolve(res);
		}).catch(err => {
			reject(err);
		})
	})
}
// 分析师找样列表
function getzyAnalysisList(data){
	return new Es6Promise(function (resolve, reject) {
		let newApi = Api.getzyAnalysisList;
		Util.request(newApi, data, 'get').then(res => {
			resolve(res);
		}).catch(err => {
			reject(err);
		})
	})
}
// 分析师询价列表
function getxjAnalysisList(data){
	return new Es6Promise(function (resolve, reject) {
		let newApi = Api.getxjAnalysisList;
		Util.request(newApi, data, 'get').then(res => {
			resolve(res);
		}).catch(err => {
			reject(err);
		})
	})
}
// 移交客户列表
function getTransferCustomersList(data) {
	return new Es6Promise(function (resolve, reject) {
		let newApi = Api.getTransferCustomersList;
		Util.request(newApi, data, 'get').then(res => {
			resolve(res);
		}).catch(err => {
			reject(err);
		})
	})
}
// 新建修改公司
function corporateBaseInfo(data){
	return new Es6Promise(function (resolve, reject) {
		let newApi = Api.corporateBaseInfo;
		Util.request(newApi, data, 'post').then(res => {
			resolve(res);
		}).catch(err => {
			reject(err);
		})
	})
}
// 添加修改联系人
function addContacts(data){
	return new Es6Promise(function (resolve, reject) {
		let newApi = Api.addContacts;
		Util.request(newApi, data, 'post').then(res => {
			resolve(res);
		}).catch(err => {
			reject(err);
		})
	})
}
// 删除联系人
function deleBaseInfo(id){
	return new Es6Promise(function (resolve, reject) {
		let newApi = Api.deleBaseInfo+"/"+id;
		Util.request(newApi, {}, 'get').then(res => {
			resolve(res);
		}).catch(err => {
			reject(err);
		})
	})
}
// 获取公司列表
function getCompanyList(data){
	return new Es6Promise(function (resolve, reject) {
		let newApi = Api.getCompanyList;
		Util.request(newApi, data, 'get').then(res => {
			resolve(res);
		}).catch(err => {
			reject(err);
		})
	})
}
// 是否展示
function controllShow(){
	return new Es6Promise(function (resolve, reject) {
		let newApi = Api.controllShow;
		Util.request(newApi, {}, 'get').then(res => {
			resolve(res);
		}).catch(err => {
			reject(err);
		})
	})
}
// 获取报价详情
function getQuoteDetail(id){
	return new Es6Promise(function (resolve, reject) {
		let newApi = Api.getQuoteDetail+"/"+id;
		Util.request(newApi, {}, 'get').then(res => {
			resolve(res);
		}).catch(err => {
			reject(err);
		})
	})
}
// 删除客户公司
function deleteCompany(id){
	return new Es6Promise(function (resolve, reject) {
		let newApi = Api.deleteCompany + "/" + id;
		Util.request(newApi, {}, 'get').then(res => {
			resolve(res);
		}).catch(err => {
			reject(err);
		})
	})
}
// 选择公司
function getContactsList(id){
	return new Es6Promise(function (resolve, reject) {
		let newApi = Api.getContactsList + "/" + id;
		Util.request(newApi, {}, 'get').then(res => {
			resolve(res);
		}).catch(err => {
			reject(err);
		})
	})
}
// 删除跟进记录
function deleteFollow(id){
	return new Es6Promise(function (resolve, reject) {
		let newApi = Api.deleteFollow + "/" + id;
		Util.request(newApi, {}, 'get').then(res => {
			resolve(res);
		}).catch(err => {
			reject(err);
		})
	})
}
// 分析师推送
function pushAllDeputy(data){
	return new Es6Promise(function (resolve, reject) {
		let newApi = Api.pushAllDeputy;
		Util.request(newApi,data, 'get').then(res => {
			resolve(res);
		}).catch(err => {
			reject(err);
		})
	})
}
// 我的询价列表
function getMyList(data){
  return new Es6Promise(function (resolve, reject) {
    let newApi = Api.getMyList;
    Util.request(newApi, data, 'get').then(res => {
      resolve(res);
    }).catch(err => {
      reject(err);
    })
  })
}
// 买帮办直接报价
function directQuotation(data,id) {
  return new Es6Promise(function (resolve, reject) {
    let newApi = Api.directQuotation+"/"+id;
    Util.request(newApi, data, 'post').then(res => {
      resolve(res);
    }).catch(err => {
      reject(err);
    })
  })
}
module.exports = {
  getUserInfo,
  getInquiryDetail,
  getInquiryList,
  getRecordList,
  getCustomerList,
  getAssociatedCustomers,
	getBoundAssociatedCustomers,
  addRecord,
  getRecordOne,
  getRecord,
  addCustomer,
  getCustomerInfo,
  setIdentity,
  setOpi,
  setManagement,
  setDeposit,
  getDeposit,
  getAnalysisLst,
  addXJAnalysis,
  addZYAnalysis,
  pushSellDeputy,
  getMatchingList,
  inputResult,
  getSampleDetail,
  getMatchingDetail,
  setSearchResul,
  setOffer,
  setWhetherMarching,
  getVerificationCode,
  userRegistration,
  getNewSearch,
  getsearchResult,
  manySearch,
  getSampleDetailBank,
  viewHistoryQutoe,
  getDeputyAdminList,
  getAreaList,
  setManager,
  getManagerList,
	getDeputyDetails,
	freezeDeputy,
	allocationDeputy,
	getAllocationDeputyList,
	getAllocationClientList,
	transferManager,
	deleteDeputyAllocation,
	getAdminCustomerList,
	allocationCustomer,
	deleteAllotCustomer,
	deleCustomers,
	setCustomerForManager,
	getRoutineList,
	reminderOffer,
	setQuoteforCgxj,
	pushSingleSeLLDeputy,
	getPpDetail,
	setQuoteforPpbj,
	pushSeller,
	getOfferList,
	getAllList,
	closeInquirySheet,
	generateQrCode,
	getNewsNum,
	getNewsList,
	setHaveRead,
	getCustomerInquiryList,
	getNewNumber,
	deleteSample,
	getProductDetail,
	addProduct,
	allModityTypeSeries,
	getProductDetails,
	updateProduct,
	getRenewList,
	updateStatus,
	getBondHandleList,
	addBondHandle,
	getHandleDetail,
	getBondAddList,
	addBond,
	getBondeDetail,
	getBondAdmin,
	setHandleStatus,
	setBondStatus,
	requestQuoation,
	setQuoteForZyxj,
	pushToBuyer,
	getzyAnalysisList,
	getxjAnalysisList,
	getTransferCustomersList,
	corporateBaseInfo,
	addContacts,
	deleBaseInfo,
	getCompanyList,
	controllShow,
	getQuoteDetail,
	deleteCompany,
	getContactsList,
	deleteFollow,
	pushAllDeputy,
  getMyList,
  directQuotation,
  getManageFeatures,
  getRegion, 
  getcoordinate,
  getType, 
  getScale,
  getSource,
  getBusinessModel,
  getMainProduct,
  getOperateCapital,
  getOperateCredit,
  getOperateOperation,
  getOperateWom,
  getQuality,
  getPost,
  getChanne,
  getCostPerformance,
  getIdentity,
  getPotential,
  getPriceSensitivity,
  getCharacterFeatures,
  getManageFeatures,
  getManagementPosition,
  getCooperationIntention,
  sellCusmterCreated
  
}