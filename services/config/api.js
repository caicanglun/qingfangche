
//const ServerUrl = "http://192.168.11.135"; 
//const ServerUrl = "http://test.144f.com:8080/qfc-web";
const ServerUrl = "http://apps.144f.com/qfc-web"; 
const ChooseUrl = ServerUrl + '/choose/';
const VERSION = '3.3.72'; // 小程序版本

module.exports = {
  VERSION: VERSION,
  ChooseUrl,
  //下拉选择
  ServerUrl,
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
  getManagementPosition: ChooseUrl + "managementPosition", //经营定位
  
  
  
  //用户登陆注册
  
  login: ServerUrl + '/ul/login', //用户登陆 post
  chanage_password: ServerUrl + '/ul/change_password', // 修改密码 post
  verification: ServerUrl + '/ul/verification', //短信验证码 post
  registration: ServerUrl + '/ul/registration',  //用户注册 post
  getNewsNum: ServerUrl + '/um/count',  //未读信息
  noReadList: ServerUrl + '/um/list', //未读信息列表 post
  delReadList: ServerUrl + '/um/del', //信息删除 get
  DetailReadList: ServerUrl + '/um/details', //信息详情 get
  
  
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
  delCustomer: ServerUrl + '/cm/del', //区域经理删除客户 
  
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
  placeOfDelivery:  ServerUrl +'/choose/placeOfDelivery',  //交货地
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
  directorNoPass: ServerUrl +  '/sQuotation/directorNoPass' ,//销售总监驳回报价
  
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
  analystList: ServerUrl +  '/analyse/list' ,//分析师找样询价列表详情
  quotationDetails: ServerUrl +  '/sQuotation/zyDetails' ,//找样报价单详情
  analystDetails: ServerUrl +  '/analyse/details' ,//找样询价单详情
  analystAdd: ServerUrl + '/analyse/add' ,//分析师录入
  contrastDetails: ServerUrl + '/analyse/contrastDetails' ,//分析师设置对比结果页面详情
  contrastAdd: ServerUrl + '/analyse/contrastAdd' ,//分析师设置对比结果
  contrastUpdate: ServerUrl + '/analyse/updateContrast' ,//分析师修改对比结果
  zyDetailsList: ServerUrl + '/sQuotation/zyDetailsList' ,//找样结果报价单列表
  inquiryStatus: ServerUrl + '/choose/inquiryStatus' ,//询价状态
  inquiryStatus2: ServerUrl + '/choose/inquiryStatus2' ,//询价状态2
  analystUpdate: ServerUrl + '/analyse/update' ,//分析师修改分析结果
  updateList: ServerUrl + '/analyse/updateList' ,//分析结果修改列表

  qrCode: ServerUrl + '/qr/get' ,//获取二维码参数
  isExist: ServerUrl + '/qr/isExist' ,//二维码,单号是否存在
  quoteAgain: ServerUrl + '/sQuotation/quoteAgain' ,//二维码,单号是否存在
  
  //产品展示
  machineStatus: ServerUrl + '/choose/machineStatus' ,//在机状态
  inStock:       ServerUrl + '/choose/inStock' ,//现货状态
  machineType:   ServerUrl + '/choose/machineType' ,//织机类型下拉数据
  machineBrand:  ServerUrl + '/choose/machineBrand' ,//织机品牌下拉数据
  slideshow:     ServerUrl + '/shop/slideshow' ,//查询轮播图
  slideshowDel:  ServerUrl + '/shop/slideshowDel' ,//删除图片
  slideshowAdd:  ServerUrl + '/shop/slideshowAdd' ,//添加图片
  
  goodsAdd:      ServerUrl + '/shop/goodsAdd' ,//添加产品
  manageProfile: ServerUrl + '/shop/profile' ,//经营概况
  weavingMachineAdd:ServerUrl + '/shop/weavingMachineAdd' ,//添加织机
  weavingMachineDel:ServerUrl + '/shop/weavingMachineDel' ,//删除织机
  profileUpdate: ServerUrl + '/shop/profileUpdate' ,//更新产品类型和产品系列
  goodsList:     ServerUrl + '/shop/goodsList' ,//产品列表
  goodsDel:      ServerUrl + '/shop/goodsDel' ,//批量删除产品
  soldOut:       ServerUrl + '/shop/soldOut' ,//下架产品
  goodsDetails:  ServerUrl + '/shop/goodsDetails' ,//产品详情
  goodsUpdate:   ServerUrl + '/shop/goodsUpdate' ,//更新产品
  goodsUpdateList:   ServerUrl + '/shop/goodsUpdateList' ,//产品更新记录
  goodsAudit:    ServerUrl + '/shop/audit' ,//审核产品
  auditList:     ServerUrl + '/shop/auditList' ,//审核产品列表
  auditPass:     ServerUrl + '/shop/auditPass' ,//通过审核并上架
  auditCount:     ServerUrl + '/shop/auditCount' ,//待审核数量
  matchList1:     ServerUrl + '/sQuotation/matchList1' ,//系统匹配第一层
  matchList2:     ServerUrl + '/sQuotation/matchList2' ,//系统匹配第二层
  matchList3:     ServerUrl + '/sQuotation/matchList3' ,//系统匹配第三层
  systemNoMatch:     ServerUrl + '/sQuotation/noMatch' ,//系统匹配不匹配原因
  companyList:     ServerUrl + '/sQuotation/companyList' ,//报价选择客户列表
  QgoodsList:     ServerUrl + '/sQuotation/goodsList' ,//报价产品列表
  QgoodsDetails:     ServerUrl + '/sQuotation/goodsDetails' ,//报价产品详情
  newQuotationAdd:     ServerUrl + '/sQuotation/add' ,//创建报价单
  


  

  




  



  
  
  


  

  
  

  
  
  

 
  
  


  
  
  
  

  






};