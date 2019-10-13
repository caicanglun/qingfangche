//  const ServerUrl = "https://www.144f.com"; // 生产环境

//const ServerUrl = "https://www.qingfangche.net"; // 开发环境
const ServerUrl = "http://192.168.11.141"; 

const NewApiRootUrl = ServerUrl + '/api/';
const WXApiRootUrl = ServerUrl + '/wx/';
const ChooseUrl = ServerUrl + '/choose/';
const VERSION = '3.3.72'; // 小程序版本

module.exports = {
  VERSION: VERSION,
  NewApiRootUrl,
  WXApiRootUrl,
  ChooseUrl,
  //下拉选择

  getRegion: ChooseUrl + "region", //区域
  getcoordinate: ChooseUrl + "coordinate", //配合度
  getType: ChooseUrl + "type", //客户类型
  getScale: ChooseUrl + "scale", //客户规模
  getSource: ChooseUrl + "source", //客户来源
  getBusinessModel: ChooseUrl + "businessModel", //公司经营模式
  getMainProduct: ChooseUrl + "mainProduct", //主营产品
  getOperateCapital: ChooseUrl + "operateCapital", //资金状况
  getOperateCredit: ChooseUrl + "operateCredit", //信用状况
  getOperateOperation: ChooseUrl + "operateOperation", //运营状况
  getOperateWom: ChooseUrl + "operateWom", //口碑
  getQuality: ChooseUrl + "quality", //品质定位
  getPost: ChooseUrl + "post", //角色
  getChanne: ChooseUrl + "channe", //渠道
  getCostPerformance: ChooseUrl + "costPerformance", //性价比
  getIdentity: ChooseUrl + "identity", //身份
  getPotential: ChooseUrl + "potential", //发展潜力
  getPriceSensitivity: ChooseUrl + "priceSensitivity", //用户价格敏感度
  getCooperationIntention : ChooseUrl + "cooperationIntention", //合作意向
  getCharacterFeatures: ChooseUrl + "characterFeatures", //性格特点
  getManageFeatures: ChooseUrl + "manageFeatures", //经营者特征
  getManagementPosition: ChooseUrl + "managementPosition", //经营定位
  
  
  //
  sellCusmterCreated: ServerUrl + "/cm/sellAddCustomer", //卖帮办创建客户
  
  
  
  
  // 图片处理
  picIdentify: NewApiRootUrl + "common/picture", // 图片识别
  ShowPic: NewApiRootUrl + 'common/picture', // 图片展示/下载
  PicUpload: NewApiRootUrl + 'common/picture/upload', // 图片上传
  PicNewUpload: NewApiRootUrl + 'common/picture/v2.2/upload', // 图片上传
  QRCodeUrl: NewApiRootUrl + 'wxma/qrcode/save', // 获取二维码
  ConsultTel: WXApiRootUrl + 'consultative', // 获取咨询电话

  AuthLoginByWeixin: WXApiRootUrl + 'user/login', // 微信登录
  getAccountInfo: WXApiRootUrl + 'user/account', // 获取用户信息
  // Info: WXApiRootUrl +'user/info', // test
  formID: WXApiRootUrl + 'formid', // 提交formId
  userBehavior: WXApiRootUrl + 'common/event', // 用户行为
  phoneAuthorize: WXApiRootUrl + 'user/registered', // 判断电话是否授权
  getUserPhone: WXApiRootUrl + 'user/getPhone', // 获取用户微信电话号码
  
  
  IndexBanner: WXApiRootUrl + 'pbp/banner', // 首页--banner
  IndexNews: WXApiRootUrl + 'common/message/pbp-index/top', // 首页--公告
  IndexParam: WXApiRootUrl + 'pbp/index/data', // 首页--系统数据：加入的人织造厂等
  IndexOrder: WXApiRootUrl + "common/message/pbp-user/tx-buy-order/first", // 首页--待支付订单
  IndexJoinState: WXApiRootUrl + 'pbp/corp-apply/status', // 首页--申请加盟状态
  regUser: WXApiRootUrl + 'user/v2.2/phone', // 用户注册--提交用户注册（用户微信有号码）

  // 首页--找布、加盟
  findCloth: WXApiRootUrl + 'pbp/seek-demand', // 提交我的找布
  joinCorp: WXApiRootUrl + 'pbp/corp-apply', // 提交加盟申请
  validate: WXApiRootUrl + 'common/sms/sendPbpUserVerifyCode', // 加盟申请/用户注册--发送验证码
  telName: WXApiRootUrl + 'user/phone', // 用户注册--提交用户注册
  company: WXApiRootUrl + 'user', // 用户注册--提交公司名称

  // 求购区
  BuySample: WXApiRootUrl + 'pbp/qiugou', // 求购区--求购列表/求购详情/收藏/取消收藏/浏览人数/搜索
  BuyOffer: WXApiRootUrl + 'pbp/qiugou-baojia', // 求购区--求购报价
  BuyCase: WXApiRootUrl + 'pbp/seek-case', // 求购区--匹配成功列表/匹配详情/交易成功列表/交易详情/搜索

  // 现货区
  goodsList: WXApiRootUrl + 'pbp/spotarea', // 现货区--现货列表/现货详情/收藏/取消收藏/浏览人数
  goodsApply: WXApiRootUrl + 'pbp/spotarea-apply', // 现货区--提交索样

  // 我的
  UserNews: WXApiRootUrl + 'common/message/pbp-user/top', // 我的--是否有我的消息
  UserApprove: WXApiRootUrl + "tx/certify", // 我的--个人/企业认证信息
  UserPaySave: WXApiRootUrl + 'tx/bank/paylist/1', // 我的--付款支持的 储蓄卡 账户列表
  UserPayCredit: WXApiRootUrl + 'tx/bank/paylist/3', // 我的--付款支持的 信用卡 账户列表
  UserCashBank: WXApiRootUrl + 'tx/bank/recvlist', // 我的--收款支持的银行账户列表

  // 我的--我的消息
  UserNewsList: WXApiRootUrl + 'common/message/pbp-user', // 我的--我的消息--消息列表
  UserNewsRead: WXApiRootUrl + 'common/message', // 我的--我的消息--阅读消息

  // 我的--我的找布
  UserCloth: WXApiRootUrl + 'pbp/seek', // 我的--我的找布--我的找布/找布详情
  UserAnalysis: WXApiRootUrl + 'pbp/seek-analysis', // 我的--我的找布--找布详情--分析结果确认/否认
  UserResult: WXApiRootUrl + 'pbp/seek-result', // 我的--我的找布--找布详情--布样结果确认/否认
  UserFinally: WXApiRootUrl + 'pbp/seek-finally', // 我的--我的找布--找布详情--匹配结果-提交评价

  // 我的--报价
  UserPrice: WXApiRootUrl + 'pbp/qiugou-baojia', // 我的--我的报价--报价列表/报价详情
  UserPriceDel: WXApiRootUrl + 'pbp/qiugou-baojia/delete', // 我的--我的报价--清除失效报价
  UserPriceMatch: WXApiRootUrl + 'pbp/qiugou-matched', // 我的--我的报价--报价详情--提交报价评价

  // 我的--我的索样
  UserSeek: WXApiRootUrl + 'pbp/spotarea-apply/query', // 我的--我的索样--索样列表
  UserSeekDel: WXApiRootUrl + 'pbp/spotarea-apply/delete', // 我的--我的索样--清空失效索样

  // 我的--收藏夹
  UserCollBuy: WXApiRootUrl + 'pbp/user-collection', // 我的--收藏夹--求购收藏--收藏列表
  UserBuyUnColl: WXApiRootUrl + 'pbp/qiugou/uncollect', // 我的--收藏夹--求购收藏--取消收藏（清除失效收藏）
  UserCollGoods: WXApiRootUrl + 'pbp/user-collection/query/spotarea', // 我的--收藏夹--现货收藏--收藏列表
  UserGoodsUnColl: WXApiRootUrl + 'pbp/spotarea/uncollect', // 我的--收藏夹--现货收藏--取消收藏（清除失效收藏）

  // 我的--交易账户
  UserPayVerify: WXApiRootUrl + 'tx/user-paycard/send', // 我的--我的交易账户--添加交易账户--发送验证码
  UserPayAccount: WXApiRootUrl + 'tx/user-paycard', // 我的--我的交易账户--付款账户--付款账户列表/解除绑定/设为默认账户/添加付款账户
  UserCashAccount: WXApiRootUrl + "tx/user-recvcard", // 我的--我的交易账户--收款账户--(个人)收款账户列表/解除绑定/设为默认账户/添加收款账户/(企业)收款账户列表/添加收款账户/解除绑定

  // 我的--个人/企业 认证
  UserFormApprove: WXApiRootUrl + "tx/certify", // 我的--个人/企业认证--获取认证信息/提交个人认证/提交企业认证

  // 我的--我的交易订单
  UserBuyList: WXApiRootUrl + "tx/order/buylist", // 我的--我的交易订单--采购订单列表
  UserSellList: WXApiRootUrl + "tx/order/selllist", // 我的--我的交易订单--销售订单列表
  UserOrder: WXApiRootUrl + "tx/order", // 我的--我的交易订单--采购订单详情/提交评价/修改退款账户/确认收货/快捷支付验证码/快捷支付；销售订单详情/确认订单/修改收款账户/确认收货/提交评价
  UserBuyAppraise: WXApiRootUrl + "tx/assess", // 采购订单提交评价
  UserOrderSend: NewApiRootUrl + "wxma/tplmsg/send", // 订单支付成功后，发送信息通知卖家
  // bannee点击跳转
  // bannerJump: NewApiRootUrl +"pbp/banner",

  // 加盟，找样，上月成交
  mainCount: WXApiRootUrl + "pbp/mixed-information/banner/count",
  // 客户评语
  guestComment: WXApiRootUrl + "pbp/comments",
  //弹窗广告
  popAds: WXApiRootUrl + "pbp/banner/advertise",

  //搜索求购、现货、成功案例的整合
  goodsCount: WXApiRootUrl + "pbp/mixed-information/keyword",

  // 订单整合
  totalOrder: WXApiRootUrl + "tx/order/orderlist",

  // mingpian: WXApiRootUrl + "pbp/corp-apply",

  tiaozhuan: WXApiRootUrl + "user/gotoCarte",

  //白条消息通知
  whiteBars: WXApiRootUrl + "tx/white-strip/notice", //POST


  //白条页面展示
  whiteStrips: WXApiRootUrl + "tx/whitebar-apply/status", //get

  baitiaoApply: WXApiRootUrl + "tx/whitebar-apply", //POST


  //获取信用卡手续费费率
  getPayRateNum: NewApiRootUrl + "/common/param/creditrates", //get

  // 金梭云
  // 新建询价单
  createOrder: WXApiRootUrl + "inquiry-list", //post

  // 询价单详情
  getInquiryDetail: WXApiRootUrl + "inquiry-list", //get

  // 获取询价单列表
  getInquiryList: WXApiRootUrl + "inquiry-list/findAll",
  //分析师获取分析单管理列表
  getAnalysisLst: WXApiRootUrl + "inquirylist/analysis/findAll", 
  // 录入找样结果，
  inputResult: WXApiRootUrl + "inquirylist/seek-result", 
	// 获取找样结果详情
	getSampleDetail: WXApiRootUrl + "inquirylist/seek-result/getZyDetail", 
  //新建保证金管理
  setDeposit: WXApiRootUrl + "customer/deposit", 
  // 新建询价分析单
  addXJAnalysis: WXApiRootUrl + "inquirylist/analysis", 
  // 录入找样分析单
  addZYAnalysis: WXApiRootUrl + "inquirylist/seekresult/analysis",  
  //推送给卖帮办
  pushSellDeputy: WXApiRootUrl + "inquiry-list/forAllseller", 
	// 催单报价
	reminderOffer: WXApiRootUrl + "inquiry-list/urgeQuote", 
  //获取匹配列表
  getMatchingList: WXApiRootUrl + "inquiry-list/searchInSample",
  //设置找样结果
  setSearchResul: WXApiRootUrl + "inquirylist/seek-result/setSampleResults", 
  //设置并推送报价
  setOffer: WXApiRootUrl + "inquirylist/quote/setQuote", 
  //设置是否匹配
  setWhetherMarching: WXApiRootUrl + "inquirylist/quote/updateStatus", 
  // 获取匹配结果详情,推送卖帮办
  getMatchingDetail: WXApiRootUrl + "inquirylist/push", 
  // 样品库获取最热搜索
  getNewSearch: WXApiRootUrl + "jsy/sample/findByType", 
  // 样品库搜索结果列表,样品详情
  getsearchResult: WXApiRootUrl + "jsy/sample", 
  //多项搜索
  manySearch: WXApiRootUrl + "jsy/sample/searchDetail", 
  //查看历史报价
  viewHistoryQutoe: WXApiRootUrl + "jsy/sample/quoteHistory", 
  // 获取管理帮办列表
  getDeputyAdminList: WXApiRootUrl + "jsy/designatedPersons/deputy", 
  //获取区域列表 
  getAreaList: WXApiRootUrl + "jsy/designatedPersons/getAreaList",
  // 设置区域经理
  setManager: WXApiRootUrl + "jsy/designatedPersons/setManager",
  //获取区域经理列表
  getManagerList: WXApiRootUrl + "jsy/designatedPersons/getManagerList",
  // 获取帮办详情
	getDeputyDetails: WXApiRootUrl + "jsy/designatedPersons/getDeputy",
  // 冻结帮办
	freezeDeputy: WXApiRootUrl + "jsy/designatedPersons/freezeDeputy",
  // 分配给区域经理
	allocationDeputy: WXApiRootUrl + "jsy/designatedPersons/setDeputy",
	//获取分配的客户列表
	getAllocationClientList: WXApiRootUrl + "jsy/designatedPersons/distribution/customer", 
  //获取分配的帮办列表
	getAllocationDeputyList: WXApiRootUrl + "jsy/designatedPersons/distribution/deputy",
	// 移交权限
	transferManager: WXApiRootUrl + "jsy/designatedPersons/transferManager",
	// 删除帮办分配
	deleteDeputyAllocation: WXApiRootUrl + "jsy/designatedPersons/deleDeputyList",
	// 管理人员获取客户管理列表
	getAdminCustomerList: WXApiRootUrl + "jsy/designatedPersons/customerList",
	// 分配客户给区域经理
	allocationCustomer: WXApiRootUrl + "jsy/designatedPersons/setCustomerForDirector",
	// 删除客户分配
	deleteAllotCustomer: WXApiRootUrl + "jsy/designatedPersons/deleCustomerList",
	//删除客户分配（区域经理）
	deleCustomers: WXApiRootUrl + "jsy/designatedPersons/deleCustomers",
	// 区域经理分配客户
	setCustomerForManager: WXApiRootUrl + "jsy/designatedPersons/setCustomerForManager",
	// 获取常规询价列表
	getRoutineList: WXApiRootUrl + "inquiry-list/findAllConvention",
	// 常规询价报价
	setQuoteforCgxj: WXApiRootUrl + "inquirylist/push/setQuoteforCgxj",
	// 匹配结果报价
	setQuoteforPpbj: WXApiRootUrl + "inquirylist/push/setQuote",
	// 获取匹配结果详情
	getPpDetail: WXApiRootUrl + "inquirylist/push/getPpDetail",
	// 推送卖家
	pushSeller: WXApiRootUrl + "inquirylist/push/pushSeller",
	// 卖家，我的报价列表
	getOfferList: WXApiRootUrl + "inquiry-list/myQuote",
	// 获取全部找样、匹配列表
	getAllList: WXApiRootUrl + "inquiry-list/getAllQuote",
	// 关闭询价单
	closeInquirySheet: WXApiRootUrl + "inquiry-list/updateStatus",
	// 生成小程序二维码
	generateQrCode: NewApiRootUrl + "wxma/qrcode/min",
	// 获取未读消息数量
	getNewsNum: WXApiRootUrl + "jsy/message/findAllNum",
	//获取消息列表
	getNewsList: WXApiRootUrl + "jsy/message/findAll",
	//标记已读
	setHaveRead: WXApiRootUrl + "jsy/message/haveRead",
	// 最热
	getNewNumber: WXApiRootUrl + "jsy/sample/findAllByType",
	// 删除找样结果
	deleteSample: WXApiRootUrl + "inquirylist/seek-result/delete",
	// 请求再次报价
	requestQuoation: WXApiRootUrl + "inquirylist/quote/requestQuoteAgain",
	// 找样发起报价
	setQuoteForZyxj: WXApiRootUrl + "inquirylist/quote/setQuoteForZyxj",
	// 推送买帮办
	pushToBuyer: WXApiRootUrl + "inquirylist/quote/pushToBuyer",
	// 分析师找样列表
	getzyAnalysisList: WXApiRootUrl + "inquirylist/analysis/findAllForZy",
	// 分析师询价列表
	getxjAnalysisList: WXApiRootUrl + "inquirylist/analysis/findAllForXj",
	// 移交客户列表
	getTransferCustomersList: WXApiRootUrl + "jsy/designatedPersons/deputylistForTransfer",	

  //金梭云客户管理系统
  
  // 获取跟进记录列表
  getRecordList: WXApiRootUrl + "customer/findAllFollowList", //get
  //获取客户列表
  getCustomerList: WXApiRootUrl + "customer/findAllCustomerByPage", //get
  // 获取帮办关联客户列表
  getAssociatedCustomers: WXApiRootUrl + "customer/findAllCustomer", //get
	// 获取帮办关联客户列表(已绑定)
	getBoundAssociatedCustomers: WXApiRootUrl + "customer/findAllUser",
  //新建客户跟进记录
  addRecord: WXApiRootUrl + "customer/followRecord", //post
  //跟进记录单条
  getRecordOne: WXApiRootUrl + "customer/followRecordFindOne", //post
  //跟进记录
  getRecord: WXApiRootUrl + "customer/followRecordFindAll", //get
  // 新建客户
  addCustomer: WXApiRootUrl + "customer/baseInfo", //post
  // 获取客户信息
  getCustomerInfo: WXApiRootUrl + "customer/baseInfo/", //get
  //设置客户身份特征
  setIdentity: WXApiRootUrl + "customer/identityCharacteristics", //post
  // 设置客户产品信息
  setOpi: WXApiRootUrl + "customer/productInfo", //post
  // 设置经营状况
  setManagement: WXApiRootUrl + "customer/operationStatus", //post
  //获取验证码
  getVerificationCode: WXApiRootUrl + "common/sms/sendPbpUserVerifyCodeUnBind", //post
  // 注册用户
  userRegistration: WXApiRootUrl + "customer/login", //post
  // 客户询价记录
	getCustomerInquiryList: WXApiRootUrl + "inquiry-list/findAllByBuyerid",
	//产品展示详情
	getProductDetail: WXApiRootUrl + "customer/product/productShow",
	// 新增产品
	addProduct: WXApiRootUrl + "customer/product",
	// 批量修改产品展示系列类型
	allModityTypeSeries: WXApiRootUrl + "customer/product/updateAll",
	// 更新产品信息
	updateProduct: WXApiRootUrl + "customer/product/updateProduct",
	// 更新记录列表
	getRenewList: WXApiRootUrl + "customer/product/renewList",
	//更新产品状态
	updateStatus: WXApiRootUrl + "customer/product/updateStatus",
	// 保证金处理列表
	getBondHandleList: WXApiRootUrl + "customer/depositDeal/findAll",
	// 新增保证金处理
	addBondHandle: WXApiRootUrl + "customer/depositDeal",
	// 保证金列表
	getBondAddList: WXApiRootUrl + "customer/deposit/findAll",
	// 管理员获取审核列表
	getBondAdmin: WXApiRootUrl + "customer/depositDeal/findAllList",
	// 修改保证金处理状态
	setHandleStatus: WXApiRootUrl + "customer/depositDeal/updateStatus",
	// 修改添加保证金状态
	setBondStatus: WXApiRootUrl + "customer/deposit/updateStatus",
	// 新建修改公司
	corporateBaseInfo: WXApiRootUrl + "corporateBaseInfo",
	// 添加联系人
	addContacts: WXApiRootUrl + "customer/baseInfo",
	// 删除联系人
	deleBaseInfo: WXApiRootUrl + "customer/deleBaseInfo",
	// 获取公司列表
	getCompanyList: WXApiRootUrl + "corporateBaseInfo/list",
	// 是否展示
	controllShow: NewApiRootUrl +"common/param/controllShow",
	// 报价详情
	getQuoteDetail: WXApiRootUrl + "inquirylist/quote",
	// 删除客户公司
	deleteCompany: WXApiRootUrl + "corporateBaseInfo/dele",
	// 选择联系人
	getContactsList: WXApiRootUrl +"corporateBaseInfo/contlist",
	// 删除跟进记录
	deleteFollow: WXApiRootUrl + "customer/deleFollowRecord",
	// 分析师推送
	pushAllDeputy: WXApiRootUrl + "inquirylist/seekresult/analysis/push",
  // 我的询价列表
  getMyList: WXApiRootUrl + "inquiry-list/findMyInquiry",
  // 
  directQuotation: WXApiRootUrl + "inquirylist/quote/setQuoteMJ",
};