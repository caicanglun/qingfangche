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
function getCoordinate() {
  return new Es6Promise(function(resolve, reject) {
    let newApi = Api.getCoordinate;
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
function getCompanyScale() {
  return new Es6Promise(function(resolve, reject) {
    let newApi = Api.getCompanyScale;
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
function getChannel() {
  return new Es6Promise(function(resolve, reject) {
    let newApi = Api.getChannel;
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
//合作意向
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
//用户登陆
// function login(data) {
//     return new Es6Promise(function(resolve, reject) {
//       let newApi = Api.login;
//       Util.request(newApi, data, 'post').then(res => {
//         resolve(res);
//       }).catch(err => {
//         reject(err);
//       })
//     })
//   }
 // 更改密码
 function chanage_password(data) {
     return new Es6Promise(function(resolve, reject) {
       let newApi = Api.chanage_password;
       Util.request(newApi, data, 'post').then(res => {
         resolve(res);
       }).catch(err => {
         reject(err);
       })
     })
   } 
//验证码
function verification(data) {
       return new Es6Promise(function(resolve, reject) {
         let newApi = Api.verification;
         Util.request(newApi, data, 'post').then(res => {
           resolve(res);
         }).catch(err => {
           reject(err);
         })
       })
} 
//用户注册
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
//用户个人信息
function userDetails(data) {
   return new Es6Promise(function(resolve, reject) {
	 let newApi = Api.userDetails;
	 Util.request(newApi, data, 'get').then(res => {
	   resolve(res);
	 }).catch(err => {
	   reject(err);
	 })
   })
}
//未读信息
function getNewsNum() {
   return new Es6Promise(function(resolve, reject) {
	 let newApi = Api.getNewsNum;
	 Util.request(newApi, {}, 'get').then(res => {
	   resolve(res);
	 }).catch(err => {
	   reject(err);
	 })
   })
} 
//未读信息列表
function noReadList(data) {
   return new Es6Promise(function(resolve, reject) {
	 let newApi = Api.noReadList;
	 Util.request(newApi, data, 'post').then(res => {
	   resolve(res);
	 }).catch(err => {
	   reject(err);
	 })
   })
} 
//查询用户职位列表
function pupList(data) {
   return new Es6Promise(function(resolve, reject) {
	 let newApi = Api.pupList;
	 Util.request(newApi, data, 'get').then(res => {
	   resolve(res);
	 }).catch(err => {
	   reject(err);
	 })
   })
} 
//获取默认职位
function pupDefault(data) {
   return new Es6Promise(function(resolve, reject) {
	 let newApi = Api.pupDefault;
	 Util.request(newApi, data, 'get').then(res => {
	   resolve(res);
	 }).catch(err => {
	   reject(err);
	 })
   })
} 
//买/卖帮办客户列表
function bsList(data) {
   return new Es6Promise(function(resolve, reject) {
	 let newApi = Api.bsList;
	 Util.request(newApi, data, 'get').then(res => {
	   resolve(res);
	 }).catch(err => {
	   reject(err);
	 })
   })
} 
//客户详情
function cmDetail(data) {
   return new Es6Promise(function(resolve, reject) {
	 let newApi = Api.cmDetail;
	 Util.request(newApi, data, 'get').then(res => {
	   resolve(res);
	 }).catch(err => {
	   reject(err);
	 })
   })
} 
//更新客户信息 
function updateCustomer(data) {
   return new Es6Promise(function(resolve, reject) {
	 let newApi = Api.updateCustomer;
	 Util.request(newApi, data, 'post').then(res => {
	   resolve(res);
	 }).catch(err => {
	   reject(err);
	 })
   })
} 

//销售总监，区域经理客户列表
function dmList(data) {
   return new Es6Promise(function(resolve, reject) {
	 let newApi = Api.dmList;
	 Util.request(newApi, data, 'get').then(res => {
	   resolve(res);
	 }).catch(err => {
	   reject(err);
	 })
   })
} 
//公司联系人
function linkMan(data) {
   return new Es6Promise(function(resolve, reject) {
	 let newApi = Api.linkMan;
	 Util.request(newApi, data, 'get').then(res => {
	   resolve(res);
	 }).catch(err => {
	   reject(err);
	 })
   })
} 
//联系人详情
function linkmanDetails(data) {
   return new Es6Promise(function(resolve, reject) {
	 let newApi = Api.linkmanDetails;
	 Util.request(newApi, data, 'get').then(res => {
	   resolve(res);
	 }).catch(err => {
	   reject(err);
	 })
   })
} 
//删除联系人
function linkmanDel(data) {
   return new Es6Promise(function(resolve, reject) {
	 let newApi = Api.linkmanDel;
	 Util.request(newApi, data, 'get').then(res => {
	   resolve(res);
	 }).catch(err => {
	   reject(err);
	 })
   })
} 
//公司联系人添加
function linkmanAdd(data) {
   return new Es6Promise(function(resolve, reject) {
	 let newApi = Api.linkmanAdd;
	 Util.request(newApi, data, 'post').then(res => {
	   resolve(res);
	 }).catch(err => {
	   reject(err);
	 })
   })
} 
//更新联系人 
function linkmanUpdate(data) {
   return new Es6Promise(function(resolve, reject) {
	 let newApi = Api.linkmanUpdate;
	 Util.request(newApi, data, 'post').then(res => {
	   resolve(res);
	 }).catch(err => {
	   reject(err);
	 })
   })
} 
//获取公司经营状况
function operation(data) {
   return new Es6Promise(function(resolve, reject) {
	 let newApi = Api.operation;
	 Util.request(newApi, data, 'get').then(res => {
	   resolve(res);
	 }).catch(err => {
	   reject(err);
	 })
   })
} 
//公司竞争对手列表
function rival(data) {
   return new Es6Promise(function(resolve, reject) {
	 let newApi = Api.rival;
	 Util.request(newApi, data, 'get').then(res => {
	   resolve(res);
	 }).catch(err => {
	   reject(err);
	 })
   })
} 
//竞争对手详情
function rivalDetails(data) {
   return new Es6Promise(function(resolve, reject) {
	 let newApi = Api.rivalDetails;
	 Util.request(newApi, data, 'get').then(res => {
	   resolve(res);
	 }).catch(err => {
	   reject(err);
	 })
   })
} 
//竞争对手更新
function rivalUpdate(data) {
   return new Es6Promise(function(resolve, reject) {
	 let newApi = Api.rivalUpdate;
	 Util.request(newApi, data, 'post').then(res => {
	   resolve(res);
	 }).catch(err => {
	   reject(err);
	 })
   })
} 

//删除竞争对手
function rivalDel(data) {
   return new Es6Promise(function(resolve, reject) {
	 let newApi = Api.rivalDel;
	 Util.request(newApi, data, 'get').then(res => {
	   resolve(res);
	 }).catch(err => {
	   reject(err);
	 })
   })
} 
//买办创建客户
function buyAddCustomer(data) {
   return new Es6Promise(function(resolve, reject) {
	 let newApi = Api.buyAddCustomer;
	 Util.request(newApi, data, 'post').then(res => {
	   resolve(res);
	 }).catch(err => {
	   reject(err);
	 })
   })
} 
//修改客户
function updateCustomer(data) {
   return new Es6Promise(function(resolve, reject) {
	 let newApi = Api.updateCustomer;
	 Util.request(newApi, data, 'post').then(res => {
	   resolve(res);
	 }).catch(err => {
	   reject(err);
	 })
   })
} 
//卖帮办创建客户
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
 //更新经营状况
   function operationUpdate(data) {
     return new Es6Promise(function(resolve, reject) {
       let newApi = Api.operationUpdate;
       Util.request(newApi, data, 'post').then(res => {
         resolve(res);
       }).catch(err => {
         reject(err);
       })
     })
   }
   //添加经营状况
  function operationAdd(data) {
    return new Es6Promise(function(resolve, reject) {
      let newApi = Api.operationAdd;
      Util.request(newApi, data, 'post').then(res => {
        resolve(res);
      }).catch(err => {
        reject(err);
      })
    })
  } 
function rivalAdd(data) {
    return new Es6Promise(function(resolve, reject) {
      let newApi = Api.rivalAdd;
      Util.request(newApi, data, 'post').then(res => {
        resolve(res);
      }).catch(err => {
        reject(err);
      })
    })
  } 
  
  
  
// ---------------------------------------------

//新用户注册


// function getUserInfo(){
//   return new Es6Promise(function (resolve, reject) {
//     let newApi = Api.getAccountInfo;
//     Util.request(newApi, {}, 'get').then(res => {
//       resolve(res);
//     }).catch(err => {
// 			if(err.statusCode==404){
// 				wx.clearStorage()
// 			}
// 			reject(err);
//     })
//   })
//}
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

module.exports = {
  
  getManageFeatures,
  getRegion, 
  getCoordinate,
  getType, 
  getCompanyScale,
  getSource,
  getBusinessModel,
  getMainProduct,
  getOperateCapital,
  getOperateCredit,
  getOperateOperation,
  getOperateWom,
  getQuality,
  getPost,
  getChannel,
  getCostPerformance,
  getIdentity,
  getPotential,
  getPriceSensitivity,
  getCharacterFeatures,
  getManageFeatures,
  getManagementPosition,
  getCooperationIntention,
  
//用户中心功能
  chanage_password,
  verification,
  registration,
  getNewsNum,
  noReadList,
  pupList,
  pupDefault,
  bsList,
  dmList,
  linkMan,
  linkmanDetails,
  linkmanAdd,
  linkmanUpdate,
  operation,
  rival,
  buyAddCustomer,
  updateCustomer,
  sellCusmterCreated,
  userDetails,
  cmDetail,
  operationUpdate,
  operationAdd,
  rivalDetails,
  rivalAdd,
  linkmanDel,
  rivalDel,
  rivalUpdate

}