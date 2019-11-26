//  const ServerUrl = "https://www.144f.com"; // 生产环境

//const ServerUrl = "https://www.qingfangche.net"; // 开发环境
//const ServerUrl = "http://192.168.11.141"; 
const ServerUrl = "http://test.144f.com:8080/qfc-web";
const ChooseUrl = ServerUrl + '/choose/';
const VERSION = '3.3.72'; // 小程序版本

module.exports = {
  VERSION: VERSION,
  ChooseUrl,
  //下拉选择

  getRegion: ChooseUrl + "region", //区域
  getCoordinate: ChooseUrl + "coordinate", //配合度
  getType: ChooseUrl + "type", //客户类型
  getCompanyScale: ChooseUrl + "scale", //客户规模
  getSource: ChooseUrl + "source", //客户来源
  getBusinessModel: ChooseUrl + "businessModel", //公司经营模式
  getMainProduct: ChooseUrl + "mainProduct", //主营产品
  getOperateCapital: ChooseUrl + "operateCapital", //资金状况
  getOperateCredit: ChooseUrl + "operateCredit", //信用状况
  getOperateOperation: ChooseUrl + "operateOperation", //运营状况
  getOperateWom: ChooseUrl + "operateWom", //口碑
  getQuality: ChooseUrl + "quality", //品质定位
  getPost: ChooseUrl + "post", //角色
  getChannel: ChooseUrl + "channe", //渠道
  getCostPerformance: ChooseUrl + "costPerformance", //性价比
  getIdentity: ChooseUrl + "identity", //身份
  getPotential: ChooseUrl + "potential", //发展潜力
  getPriceSensitivity: ChooseUrl + "priceSensitivity", //用户价格敏感度
  getCooperationIntention : ChooseUrl + "cooperationIntention", //合作意向
  getCharacterFeatures: ChooseUrl + "characterFeatures", //性格特点
  getManageFeatures: ChooseUrl + "manageFeatures", //经营者特征
  getManagementPosition: ChooseUrl + "managementPosition", //经营定位
  
  
  //用户登陆注册
  
  login: ServerUrl + '/ul/login', //用户登陆 post
  chanage_password: ServerUrl + '/ul/change_password', // 修改密码 post
  verification: ServerUrl + '/ul/verification', //短信验证码 post
  registration: ServerUrl + '/ul/registration',  //用户注册 post
  getNewsNum: ServerUrl + '/um/count',  //未读信息
  noReadList: ServerUrl + '/um/list', //未读信息列表 post
  
  //个人中心
  userDetails: ServerUrl + '/user/details', //用户个人信息
  pupList: ServerUrl + '/pup/list', //查询用户职位列表
  pupDefault: ServerUrl + '/pup/default', //获取默认职位
  bsList: ServerUrl + '/cm/bsList', //买/卖帮办客户列表
  dmList: ServerUrl + '/cm/dmList', //销售总监，区域经理客户列表

  cmDetail: ServerUrl + '/cm/details', //客户详情
  updateCustomer: ServerUrl + '/cm/updateCustomer', //更新联系人
  linkMan: ServerUrl + '/cm/linkman', //公司联系人
  linkmanDetails: ServerUrl + '/cm/linkmanDetails', //联系人详情
  linkmanDel: ServerUrl + '/cm/linkmanDel',  //删除联系人
  linkmanAdd: ServerUrl + '/cm/linkmanAdd', //公司联系人添加 post
  linkmanUpdate: ServerUrl + '/cm/linkmanUpdate', //更新联系人 post
  operation: ServerUrl + '/cm/operation', //获取公司经营状况
  rival: ServerUrl + '/cm/rival', //公司竞争对手列表
  rivalDetails: ServerUrl + '/cm/rivalDetails', //竞争对手详情
  rivalDel: ServerUrl + '/cm/rivalDel',   //删除竞争对手
  rivalUpdate: ServerUrl + '/cm/rivalUpdate',   //更新竞争对手
  buyAddCustomer: ServerUrl + '/cm/buyAddCustomer', //买办创建客户 post
  updateCustomer: ServerUrl + '/cm/updateCustomer', //修改客户 post
  sellCusmterCreated: ServerUrl + "/cm/sellAddCustomer", //卖帮办创建客户 post
  operationUpdate: ServerUrl + "/cm/operationUpdate", //更新经营状况
  operationAdd: ServerUrl +'/cm/operationAdd'  ,//添加经营状况
  rivalAdd: ServerUrl + '/cm/rivalAdd' ,//添加竞争对手
  dmList: ServerUrl + '/cm/dmList' ,//销售总监，区域经理客户列表
  dmCount: ServerUrl + '/cm/dmCount', //销售总监/区域经理客户数量
  majordomoDel : ServerUrl + '/cm/majordomoDel',   //销售总监删除分配
  managerDel: ServerUrl + '/cm/managerDel',   //区域经理删除分配
  managerList: ServerUrl + '/cm/managerList',   //销售总监查询区域经理列表
  deputyList: ServerUrl + '/cm/deputyList',   //区域经理查询手下帮办列表
  managerAllot: ServerUrl + '/cm/managerAllot',   //区域经理分配客户给帮办
  majordomoAllot: ServerUrl + '/cm/majordomoAllot' ,//销售总监分配客户给区域经理
 //询价管理
  inquiryType:  ServerUrl +'/choose/inquiryType',  //获取询价类型数据
  atom:  ServerUrl +'/choose/atom',  //获取成分元素多选数据
  atomAdd:  ServerUrl +'/choose/atomAdd',  //新建成分元素
  series:  ServerUrl +'/choose/series',  //产品系列下拉数据
  seriesAdd:  ServerUrl +'/choose/seriesAdd',  //新增产品系列
  style:  ServerUrl +'/choose/style',  //风格下拉数据
  styleAdd:  ServerUrl +'/choose/styleAdd',  //创建风格
  clothType:  ServerUrl +'/choose/clothType',  //布样类型选择数据
  densityUnit:  ServerUrl +'/choose/densityUnit',  //密度单位选择数据
  gramWeightUnit:  ServerUrl +'/choose/gramWeightUnit',  //克重单位选择数据
  quantityUnit:  ServerUrl +'/choose/quantityUnit',  //购买数量单位选择数据
  buyerList:  ServerUrl + '/bInquiry/buyerList',  //创建询价单买家下拉列表
  addInquiry:  ServerUrl + '/bInquiry/add',       //创建询价单
  buyDeputyClose:  ServerUrl + '/bInquiry/buyDeputyClose',       //买办关闭询价单
  push:  ServerUrl + '/bInquiry/push',       //买办推送报价单
 
  
  buyDeputyList: ServerUrl + '/bInquiry/buyDeputyList',       //买帮办询价单列表
  sellDeputyList: ServerUrl + '/bInquiry/sellDeputyList',       //卖帮办询价单列表
  
  upload:        ServerUrl + '/oss/upload',                //上传图片
  upload_batch: ServerUrl + '/oss/upload_batch'           ,//批量上传图片
  deputyDetails: ServerUrl + '/bInquiry/deputyDetails'     ,//买/卖办询价单详情
  
  priceUnit: ServerUrl + '/choose/priceUnit'    ,//价格单位选择数据
  isIcash: ServerUrl + '/choose/isIcash'    ,//是否含运费选择数据
  isPlusDuty: ServerUrl + '/choose/isPlusDuty'    ,//是否含税选择数据
  inventory: ServerUrl + '/choose/inventory'    ,//库存状况下拉数据
  quotationAdd: ServerUrl + '/sQuotation/add'    ,//创建报价单
  deputyQuotation: ServerUrl + '/sQuotation/sellDeputyList'    ,//卖办查看询价单详情内的报价单列表
  sellerQuotationDetail: ServerUrl +  '/sQuotation/sellDeputyDetails' , //卖办报价单详情
  
  buyerQuotation: ServerUrl + '/sQuotation/buyDeputyList'    ,//买办查看询价单详情内的报价单列表
  buyerQuotationDetail: ServerUrl +  '/sQuotation/buyDeputyDetails' ,//买办报价单详情
  sellDeputyClose: ServerUrl +  '/sQuotation/sellDeputyClose' ,//卖办关闭报价单

  directorDetails: ServerUrl +  '/sQuotation/directorDetails' ,//销售总监报价单详情
  
  computationRule: ServerUrl +  '/choose/computationRule' ,//计算规则下拉选项
  buyDeputyDirectPrice: ServerUrl +  '/sQuotation/buyDeputyDirectPrice' ,// 买办直接报价
  directPriceList: ServerUrl +  '/sQuotation/directPriceList' ,// 买办直接报价列表
  
  buyDeputySetDetails: ServerUrl +  '/sQuotation/buyDeputySetDetails' ,// 买办设置报价详情
  buyDeputySetPrice: ServerUrl +  '/sQuotation/buyDeputySetPrice' ,// 买办设置报价
  buyDeputyUnsuited: ServerUrl +  '/sQuotation/buyDeputyUnsuited' ,// 买办设置不匹配
  buyDeputySuited: ServerUrl +  '/sQuotation/buyDeputySuited' ,// 买办 确认/匹配 报价单
  buyDeputyAddOrder: ServerUrl +  '/sQuotation/buyDeputyAddOrder' ,// 买办生成交易单
  directorList: ServerUrl +  '/bInquiry/directorList' ,//销售总监询价单列表
  directorReviewCount: ServerUrl +  '/sQuotation/directorReviewCount' ,//销售总监待审核报价单数量
  directorModifyPrice: ServerUrl +  '/sQuotation/directorModifyPrice' ,//销售总监报价(确定并推送按钮，确定修改并推送按钮)
  
  
  zyDetails: ServerUrl +  '/bInquiry/zyDetails' ,//找样询价单详情






};