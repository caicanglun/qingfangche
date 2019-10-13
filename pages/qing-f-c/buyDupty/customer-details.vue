<template>
<view id="outView">


<view class="login_top" >
	<view class="backto" @tap="backto" v-if="!isDisplay">返回</view>
		<!-- <image src='https://api.qingfangche.net/api/common/picture/201904221111002/png/images/download' mode='aspectFill' class='login_img'></image> -->
</view>
<view class="hand_box box_shadow margin-top-200">
  <view class="flex_sb">
    <view class="flex">
      <image src="/static/images/qingfc/application/companyx.png" class="title_img" mode="aspectFit"></image>
      <view class="fs_18 font_we_bold">{{customerInfo.corporateName||''}}</view>
	  <view :class="(customerInfo.type==2?'id_btn':'seller_btn')">{{customerInfo.type==2?'买家':'卖家'}}</view>
    </view>
    <!-- <view class="flex" @tap="tapDelete">
      <view class="ellipsis"></view>
      <view class="ellipsis"></view>
      <view class="ellipsis"></view>
    </view> -->
  </view>
  <!-- <view class="flex_right mb_20">
    <view :class="(customerInfo.type==2?'id_btn':'seller_btn')">{{customerInfo.type==2?'买家':'卖家'}}</view>
  </view> -->
  <view class="flex_end mt_30">
    <view class="fs_15 font_we_bold">评价：</view>
    <block v-for="(item, index) in [1,2,3,4,5]" :key="index">
      <image src="/static/images/shixinStar.png" class="stars_img" mode="aspectFit"></image>
    </block>
    <view class="ml_30 fs_12 color_ee603f">查看详情</view>
  </view>
  <view class="flex_c fs_14 mt_30" v-if="customerInfo.type==2">
    <view class="wid_296 flex_c">
      <view class="wid_140 color_9b">找样需求数</view>
      <view class="wid_156">{{customerInfo.demandNum||0}}</view>
    </view>
    <view class="line"></view>
    <view class="wid_296 flex_c">
      <view class="wid_140 color_9b">总交易次数</view>
      <view class="wid_156">{{customerInfo.transactionNum||0}}</view>
    </view>
  </view>
  <view class="fs_14" v-if="customerInfo.type==4">
    <view class="flex_c mt_30 color_9b">
      <view class="wid_168">找样结果数</view>
      <view class="line"></view>
      <view class="wind_193 text_c">匹配确认数</view>
      <view class="line"></view>
      <view class="wid_168 text_right">总交易次数</view>
    </view>
    <view class="flex_c text_c">
      <view class="wid_168">0</view>
      <view class="wind_193 mlr_58">0</view>
      <view class="wid_168">0</view>
    </view>
  </view>
  <view class="flex_sb mt_30">
    <view class="hand_bottom_btn" @tap="toRecordDetails">跟进记录</view>
    <view class="hand_bottom_btn" @tap="toProductPage">产品展示</view>
    <view class="hand_bottom_btn" @tap="toBondDetail">保证金</view>
  </view>
</view>
 <!-- ---------------------------------- -->
<view v-if="isDisplay" class="inTabbar box_shadow pt_30" id="inTabbar">
	<view class="flex_c_c mb_20">客户公司名称</view>
	<view class="flex_sa">
		<view class="tabItem"
			v-for="(item,index) of items" 
			:key= "index" 
			:class= "activeIndex==index?'active':''"
			 @tap= "tabSwitch(index)"
		    :data-index='activeIndex'>
			<text class= "tabText">{{item}}</text>
			<view class= "bottomLine"></view>
		</view>
	</view>
	
</view>
 <!-- ---------------------------------- -->
<view class="box box_shadow" id="companyInfo">
  <view class="flex_sb_c box_list">
    <view class="fs_16 font_we_bold lh_72 flex_c">
      <view class="list_line"></view>
      <view>公司信息</view>
    </view>
    <image src="/static/images/jinsy/bianji.png" class="bianji_img" mode="aspectFit" @tap="goCustomerCreated"></image>
  </view>
  <view class="flex_c box_list fs_14">
    <view :class="(customerInfo.type==2?'list_right':'wid_170')">客户编号</view>
    <view>{{customerInfo.showId||''}}</view>
  </view>
  <!-- <view class='flex_sb_c box_list fs_14'>
    <view>联系人</view>
    <view class='color_888'>{{customerInfo.contName||''}}</view>
  </view>
  <view class='flex_sb_c box_list fs_14'>
    <view>联系方式</view>
    <view class='color_888'>{{customerInfo.contPhone||''}}</view>
  </view> -->
  <view class="flex_c box_list fs_14">
    <view :class="(customerInfo.type==2?'list_right':'wid_170')">所属区域</view>
    <view>{{customerInfo.region||''}}</view>
  </view>
  <!-- <view class="flex_c box_list fs_14" v-if="customerInfo.type==4">
    <view :class="(customerInfo.type==2?'list_right':'wid_170')">工厂地址</view>
    <view>{{customerInfo.factoryAddress||''}}</view>
  </view> -->
  <view class="flex_c box_list fs_14" v-if="customerInfo.type==2">
    <view :class="(customerInfo.type==2?'list_right':'wid_170')">公司地址</view>
    <view>{{customerInfo.corporateAddress||''}}</view>
  </view>
  <!-- <view class="flex_c box_list fs_14" v-if="customerInfo.type==4">
    <view :class="(customerInfo.type==2?'list_right':'wid_170')">有无门市部</view>
    <view>{{customerInfo.isSalesDepart==0?'无':'有'}}</view>
  </view> -->
  <!-- <view class="flex_c box_list fs_14" v-if="customerInfo.type==4">
    <view :class="(customerInfo.type==2?'list_right':'wid_170')">门市部地址</view>
    <view>{{customerInfo.salesDepart||''}}</view>
  </view> -->
  <view class="flex_c box_list fs_14">
    <view :class="(customerInfo.type==2?'list_right':'wid_170')">客户类型</view>
    <view>{{customerInfo.type1||''}}</view>
  </view>
  <view class="flex_c box_list fs_14" v-if="customerInfo.type==2">
    <view :class="(customerInfo.type==2?'list_right':'wid_170')">客户规模</view>
    <view>{{customerInfo.lv||''}}</view>
  </view>
  <view class="flex_c box_list fs_14">
    <view :class="(customerInfo.type==2?'list_right':'wid_170')">客户来源</view>
    <view>{{customerInfo.source||''}}</view>
  </view>
  <view class="flex_c box_list fs_14">
    <view :class="(customerInfo.type==2?'list_right':'wid_170')">合作意向</view>
    <view>{{customerInfo.cooperationIntention||''}}</view>
  </view>
  <view class="flex_c box_list fs_14" v-if="customerInfo.type==4">
    <view class="wid_254">品质保证金认可度</view>
    <view>{{customerInfo.depositApproval==1?'高':(customerInfo.depositApproval==2?'中':(customerInfo.depositApproval==3?'低':''))}}</view>
  </view>
  <view class="flex_c box_list fs_14 no_border" v-if="customerInfo.type==2">
    <view :class="(customerInfo.type==2?'list_right':'wid_170')">配合度</view>
    <view>{{customerInfo.concerted||''}}</view>
  </view>
</view>
 <!-- ---------------------------------- -->
<view class="box box_shadow" id="contact">
  <view :class="'flex_sb_c box_list ' + (!customerInfo.customerBaseInfo?'no_border':'')">
    <view :class="'fs_16 font_we_bold ' + (customerInfo.customerBaseInfo?'lh_72':'') + ' flex_c'">
      <view class="list_line"></view>
      <view>联系人</view>
    </view>
    <image src="/static/images/qingfc/application/tianjia.png" class="bianji_img" mode="aspectFit" @tap="addContacts"></image>
  </view>
  <block v-for="(item, index) in customerInfo.customerBaseInfo" :key="index">
    <view :class="'flex_sb_c box_list fs_14 ' + (customerInfo.customerBaseInfo.length-1==index?'no_border':'')" @tap="addContacts" data-type="1" :data-index="index">
      <view class="flex_c">
        <view class="list_right color_000">{{item.contName}}</view>
        <view>{{item.contPhone}}</view>
      </view>
      <view class="flex_c">
        <view class="spot"></view>
        <view class="spot"></view>
        <view class="spot"></view>
      </view>
    </view>
  </block>
</view>

<!-- <view class="box box_shadow" id="character">
  <view :class="'flex_sb_c box_list ' + (!customerInfo.characteristics?'no_border':'')">
    <view :class="'fs_16 font_we_bold ' + (customerInfo.characteristics?'lh_72':'') + ' flex_c'">
      <view class="list_line"></view>
      <view>经营者特征</view>
    </view>
    <image src="/static/images/jinsy/bianji.png" class="bianji_img" mode="aspectFit" @tap="toSetIdentity"></image>
  </view> -->
  <!-- <view v-if="customerInfo.characteristics">
    <view class="flex_c box_list fs_14">
      <view class="wid_170 color_888">身份</view>
      <view>{{customerInfo.characteristics.identity||''}}</view>
    </view>
    <view class="flex_c box_list fs_14" v-if="customerInfo.type==4">
      <view class="wid_170 color_888">模式认可度</view>
      <view>{{customerInfo.characteristics.modelAccreditation||''}}</view>
    </view>
    <view class="flex_c box_list fs_14">
      <view class="wid_170 color_888">性格特点</view>
      <view class="text-overflow">{{customerInfo.characteristics.characterTraits||''}}</view>
    </view>
    <view class="flex_c box_list fs_14">
      <view class="wid_170 color_888">经营特征</view>
      <view>{{customerInfo.characteristics.managementState||''}}</view>
    </view>
    <view class="flex_c box_list fs_14" v-if="customerInfo.type==4">
      <view class="wid_170 color_888">产品价格</view>
      <view>{{customerInfo.characteristics.productPrice||''}}</view>
    </view>
    <view class="flex_c box_list fs_14" v-if="customerInfo.type==2">
      <view class="wid_170 color_888">价格敏感度</view>
      <view>{{customerInfo.characteristics.priceSensitivity||''}}</view>
    </view>
    <view class="flex_c box_list fs_14" v-if="customerInfo.type==2">
      <view class="wid_170">性价比思维</view>
      <view>{{customerInfo.characteristics.costEffective||''}}</view>
    </view>
    <view class="flex_c box_list fs_14">
      <view class="wid_170 color_888">渠道状况</view>
      <view>{{customerInfo.characteristics.channelStatus||''}}</view>
    </view>
    <view class="flex_c box_list fs_14 no_border" v-if="customerInfo.type==2">
      <view class="wid_170 color_888">发展潜力</view>
      <view class="max_width">{{customerInfo.characteristics.developmentPotential||''}}</view>
    </view>
    <view class="flex_c box_list fs_14 no_border" v-if="customerInfo.type==4">
      <view class="wid_170 color_888">经营理念</view>
      <view class="max_width">{{customerInfo.characteristics.managementIdea||''}}</view>
    </view>
  </view>
</view> -->
 <!-- ---------------------------------- -->
<view class="box box_shadow" id="condition">
  <view :class="'flex_sb_c box_list ' + (!customerInfo.operationStatus?'no_border':'')">
    <view :class="'fs_16 font_we_bold ' + (customerInfo.operationStatus?'lh_72':'') + ' flex_c'">
      <view class="list_line"></view>
      <view>经营状况</view>
    </view>
    <image src="/static/images/jinsy/bianji.png" class="bianji_img" mode="aspectFit" @tap="toSetManagementCondition"></image>
  </view>
  <view v-if="customerInfo.operationStatus">
    <view class="flex_c box_list fs_14">
      <view class="wid_198 color_888">旺季时间</view>
      <view>{{customerInfo.operationStatus.peakSeason||''}}</view>
    </view>
    <view class="flex_c box_list fs_14">
      <view class="wid_198 color_888">资金状况</view>
      <view>{{customerInfo.operationStatus.capitalStatus||''}}</view>
    </view>
    <view class="flex_c box_list fs_14 no_border" v-if="customerInfo.type==2">
      <view class="wid_198 color_888">信用度</view>
      <view>{{customerInfo.operationStatus.credit||''}}</view>
    </view>
	<view class="flex_c box_list fs_14 no_border" v-if="customerInfo.type==2">
	  <view class="wid_198 color_888">公信度级别</view>
	  <view>{{customerInfo.operationStatus.level||''}}</view>
	</view>
	<view class="flex_c box_list fs_14 no_border" v-if="customerInfo.type==2">
	  <view class="wid_198 color_888">运营状况</view>
	  <view>{{customerInfo.operationStatus.condition||''}}</view>
	</view>
	
    <view v-if="customerInfo.type==4">
      <view class="flex_c box_list fs_14">
        <view class="wid_198 color_888">销售方式</view>
        <view>{{customerInfo.operationStatus.salesMethods||''}}</view>
      </view>
      <view class="flex_c box_list fs_14">
        <view class="wid_198 color_888">销售方式比例</view>
        <view>{{customerInfo.operationStatus.salesMethodsProportion||''}}%</view>
      </view>
      <view class="flex_c box_list fs_14">
        <view class="wid_198 color_888">采购方式</view>
        <view>{{customerInfo.operationStatus.procurementMethods||''}}</view>
      </view>
      <view class="flex_c box_list fs_14">
        <view class="wid_198 color_888">采购方式比例</view>
        <view>{{customerInfo.operationStatus.procurementMethodsProportion||''}}%</view>
      </view>
      <view class="flex_c box_list fs_14">
        <view class="wid_198 color_888">生产方式</view>
        <view>{{customerInfo.operationStatus.modeProduction||''}}</view>
      </view>
      <view class="flex_c box_list fs_14">
        <view class="wid_198 color_888">生产方式比例</view>
        <view>{{customerInfo.operationStatus.modeProductionProportion||''}}%</view>
      </view>
      <view class="flex_c box_list fs_14">
        <view class="wid_198 color_888">客户体量</view>
        <view>{{customerInfo.operationStatus.customerVolume||''}}</view>
      </view>
      <view class="flex_c box_list fs_14">
        <view class="wid_198 color_888">去年产量</view>
        <view>{{customerInfo.operationStatus.lastyearOutput||''}}{{customerInfo.operationStatus.lastyearOutputUnit||''}}</view>
      </view>
      <view class="flex_c box_list fs_14">
        <view class="wid_198 color_888">去年产值</view>
        <view>{{customerInfo.operationStatus.lastyearOutputvalue||''}}万元</view>
      </view>
    </view>
  </view>

</view>
 <!-- ---------------------------------- -->
  <view class="box box_shadow" id="competitor">
    <view :class="'flex_sb_c box_list ' + (!customerInfo.customerBaseInfo?'no_border':'')">
      <view :class="'fs_16 font_we_bold ' + (customerInfo.customerBaseInfo?'lh_72':'') + ' flex_c'">
        <view class="list_line"></view>
        <view>竞争对手</view>
      </view>
      <image src="/static/images/qingfc/application/tianjia.png" class="bianji_img" mode="aspectFit" @tap="addCompetitor"></image>
    </view>
    <block v-for="(item, index) in customerInfo.competitor" :key="index">
      <view :class="'flex_sb_c box_list fs_14 ' + (customerInfo.competitor.length-1==index?'no_border':'')" @tap="detailCompetitor(index)" data-type="1" :data-index="index">
        <view class="flex_c">
          <view class="list_right_280 color_000">{{item.name}}</view>
        </view>
        <view class="flex_c">
          <view class="spot"></view>
          <view class="spot"></view>
          <view class="spot"></view>
        </view>
      </view>
    </block>
  </view>
<!-- ---------------------------------- --> 
<!-- 
<view class='none_btn_box flex_warp fs_16'>
  <view class='none_btn flex_sb_c ' bindtap='toSetIdentity' wx:if="{{!customerInfo.characteristics}}">
    <view>身份特征</view>
    <image class='right_img' src='/images/jinsy/right.png' mode='aspectFit'></image>
  </view>
  <view class='none_btn flex_sb_c ' bindtap='toSetManagementCondition' wx:if="{{!customerInfo.operationStatus}}">
    <view>经营状况</view>
    <image class='right_img' src='/images/jinsy/right.png' mode='aspectFit'></image>
  </view>
</view> -->

</view>
</template>

<script>
const JsyServer = require("../../../services/jsy-server.js");
let _this, _id;

export default {
  data() {
    return {
      identity: 2,
      //1为买帮办，2为卖帮办
      customerInfo: '',
      //客户详情
      isProduct: false,
      //是否有产品
      admin: false, //是否是管理人员
      isDisplay: false,
	  activeIndex: -1,
	  items: ['公司信息','联系人','经营状况','竞争对手']
    };
  },

  onPullDownRefresh: function () {
    this.getCustomerInfo();
  },
  onShow: function () {
    this.getCustomerInfo();
  },
  onLoad: function (options) {
    _this = this;
    //this.setIdentity();
    _id = options.id;
  },
  onPageScroll:function(res){
	 console.log(res.scrollTop)
	if (res.scrollTop>180){
		this.isDisplay = true
	}
	else {	
		this.isDisplay = false
	}
  },
  components: {},
  props: {},
  methods: {
	  
	  tabSwitch:function(index){
	  	this.activeIndex = index
	  	switch (index){
			case 0:
			    this.selectorQuery("#outView","#companyInfo");
				break;
			case 1:
			    this.selectorQuery("#outView","#contact");
				break;
			case 2:
			   this.selectorQuery("#outView","#condition");
			   break;
			case 3:
			   this.selectorQuery("#outView","#competitor");
			   break;
		}
	  	
	  },
	  selectorQuery:function(outView,currentView){
	  	uni.createSelectorQuery().select(outView).boundingClientRect(data=>{
	  	    uni.createSelectorQuery().select(currentView).boundingClientRect((res)=>{
	  			uni.createSelectorQuery().select("#inTabbar").boundingClientRect((tab)=>{
					console.log(res.top,data.top,tab.height)
	  				uni.pageScrollTo({
	  				    duration:0,
	  				    scrollTop:res.top - data.top - tab.height
	  				})
	  		    }).exec()
	  	    }).exec()
	  	}).exec();
	  },
	  //返回
	  backto:function(){
		  uni.navigateBack({
		  	delta: 1
		  });
	  },
    // 设置身份
    setIdentity: function () {
      let userInfo = wx.getStorageSync("userInfo");
      this.setData({
        userInfo: userInfo
      });
      let role = userInfo.authority[0].name;

      if (role == "ROLE_BUY_DEPUTY") {
        this.setData({
          identity: 1
        });
      } else if (role == "ROLE_SELL_DEPUTY") {
        this.setData({
          identity: 2
        });
      }

      if (userInfo.authorityOther == 7 || role == 'ROLE_SALES_DIRECTOR') {
        this.setData({
          admin: true
        });
      }
    },
    getCustomerInfo: function () {
      // JsyServer.getCustomerInfo(_id).then(res => {
      //   wx.stopPullDownRefresh();
      //   console.log("res==", res);

      //   _this.setData({
      //     customerInfo: res.data
      //   });
      // }).catch(err => {
      //   wx.stopPullDownRefresh();
      //   console.log("Err===", err);
      // });
	  this.customerInfo={
		  characteristics:{
			  channelStatus: "原有采购渠道较窄,优势不大",
			  characterTraits: "认真",
			  costEffective: "以价格为上/质量过关即可",
			  createdBy: "8a9efd266d38ecab016d3944c82a0308",
			  createdDate: "2019-10-08T06:30:10Z",
			  customerId: "B2019100851256123",
			  developmentPotential: "经营者/老板格局思维一般，公司发展潜力一般",
			  id: "8a9efd266d7c8aff016daa0f917f15d2",
			  identity: "雇员",
			  lastModifiedBy: "8a9efd266d38ecab016d3944c82a0308",
			  lastModifiedDate: "2019-10-08T06:30:10Z",
			  managementIdea: null,
			  managementState: "爱冒险",
			  modelAccreditation: null,
			  priceSensitivity: "中",
			  productPrice: null
		  },
	      concerted: "中",
	      cooperationIntention: "信任",
	      corporateAddress: "盛泽",
	      corporateName: "海西纺织有限公司",
	      createdBy: "8a9efd266d38ecab016d3944c82a0308",
	      createdDate: "2019-10-08T06:14:16Z",
		  customerBaseInfo:[
			  {
			  	avatar: null,
			  	contName: "马云",
			  	contPhone: "13434334434",
			  	corporateName: "海西纺织有限公司",
			  	createdBy: "8a9efd266d38ecab016d3944c82a0308",
			  	createdDate: "2019-10-08T06:14:16Z",
			  	customerId: "B2019100851256123",
			  	deputyId: "8a9efd266d38ecab016d3944c82a0308",
			  	id: "8a9efd266d7c8aff016daa0103bf15c7",
			  	lastModifiedBy: "8a9efd266d38ecab016d3944c82a0308",
			  	lastModifiedDate: "2019-10-08T06:14:16Z",
			  	status: 0,
			  	type: 2,
			  	userid: null		 
			  }
			  
		  ],
		  depositApproval: 0,
		  depositNum: 0,
		  deputyId: "8a9efd266d38ecab016d3944c82a0308",
		  factoryAddress: "",
		  id: "B2019100851256123",
		  isSalesDepart: 0,
		  lastModifiedBy: "8a9efd266d38ecab016d3944c82a0308",
		  lastModifiedDate: "2019-10-08T06:14:16Z",
		  lv: "小型客户（年销售1500-3000万）",
		  ppNum: 0,
		  productInfo: "",
		  region: "盛泽",
		  salesDepart: "",
		  showId: "SS04357W",
		  source: "线下",
		  status: 0,
		  transactionNum: 0,
		  type: 2,
		  type1: "贸易公司",
		  zyDemandNum: 0,
		  zyResultNum: 0,
		  competitor:[{
			  name:"轻纺车有限公司",
			  channel: "渠道宽,优势较大",
			  productType: "梭织化纤面料 纬编化纤面料 纬编棉类面料 梭织化纤面料 梭织棉类面料",
			  purchase: "中间商+厂家直采",
			  scope: "大客户(年销售5000万及以上)",
			  quality: "高级订单",
			  model: "厂家分销",
			  address: "盛泽",
			  machineType: "织布机",
			  machineNum: "500"
		      }
		      ],
		  operationStatus:{
			  capitalStatus: "很好",
			  createdBy: "8a9efd266d38ecab016d3944c82a0308",
			  createdDate: "2019-10-08T06:34:57Z",
			  credit: "良",
			  customerId: "B2019100851256123",
			  condition: "健康成长",
			  level: "信任级",
			  customerVolume: null,
			  id: "8a9efd266d7c8aff016daa13f2cb15d5",
			  lastModifiedBy: "8a9efd266d38ecab016d3944c82a0308",
			  lastModifiedDate: "2019-10-08T06:34:57Z",
			  lastyearOutput: null,
			  lastyearOutputUnit: null,
			  lastyearOutputvalue: null,
			  modeProduction: null,
			  modeProductionProportion: null,
			  peakSeason: "2月,7月",
			  procurementMethods: null,
			  procurementMethodsProportion: null,
			  salesMethods: null,
			  salesMethodsProportion: null
		  }
		 
	  }
    },
    //跳转到新建客户页面
    goCustomerCreated: function () {
      let detail = this.customerInfo;
      let odata = {
        id: detail.id,
        corporateName: detail.corporateName,
        contName: detail.contName,
        contPhone: detail.contPhone,
        region: detail.region,
        corporateAddress: detail.corporateAddress,
        isSalesDepart: detail.isSalesDepart,
        salesDepart: detail.salesDepart,
        factoryAddress: detail.factoryAddress,
        type1: detail.type1,
        source: detail.source,
        lv: detail.lv,
        cooperationIntention: detail.cooperationIntention,
        concerted: detail.concerted,
        depositApproval: detail.depositApproval,
        isWx: detail.isWx
      };
      console.log(odata);
      odata = JSON.stringify(odata);
      wx.navigateTo({
        url: '/pages/jin-suo-yun/customer-admin/customer-created?odata=' + odata + '&type=' + detail.type
      });
    },
    // 跳转跟进记录详情（总）
    toRecordDetails: function () {
      let userId = this.customerInfo.id;
      wx.navigateTo({
        url: '/pages/jin-suo-yun/customer-admin/record-details?userId=' + userId + '&name=' + this.customerInfo.corporateName
      });
    },
    //跳转保证金管理页面
    goMarginControl: function () {
      let userId = this.customerInfo.id;
      wx.navigateTo({
        url: '/pages/jin-suo-yun/customer-admin/margin-control?userId=' + userId
      });
    },
    // 跳转保证金详情
    toBondDetail: function () {
      let userId = this.customerInfo.id;
      let id = ""; // if (this.data.customerInfo.deposit) {
      //   id = this.data.customerInfo.deposit.id;
      //   wx.navigateTo({
      //     url: '/pages/jin-suo-yun/customer-admin/bond-details?userId=' + userId + "&id=" + id,
      //   })
      // } else {
      // 	wx.navigateTo({
      // 		url: '/pages/jin-suo-yun/customer-admin/margin-control?userId=' + userId,
      // 	})
      // }

      if (this.customerInfo.type == 2) {
        wx.showToast({
          title: '开发中...',
          icon: 'none'
        });
      } else {
        wx.navigateTo({
          url: '/pages/jin-suo-yun/customer-admin/bond-list?id=' + userId
        });
      }
    },
	//跳转到添加竞争对手
	addCompetitor:function(e){
		let customerId = this.customerInfo.id;
		uni.navigateTo({
			url: '/pages/qing-f-c/buyDupty/add-competitor?customerId=' + customerId,
			success: res => {
				console.log(res)
			},
			fail: (err) => {
				console.log(err)
			},
			complete: () => {}
		});
	},
	detailCompetitor:function(index){
		let customerId = this.customerInfo.id;
		let odata = JSON.stringify(this.customerInfo.competitor[index])
		uni.navigateTo({
			url: '/pages/qing-f-c/buyDupty/detail-competitor?competitor=' + odata+"&customerId="+ customerId,
			success: res => {
				console.log(res)
			},
			fail: (err) => {
				console.log(err)
			},
			complete: () => {}
		});
		
	},
    // 跳转添加联系人
    addContacts: function (e) {
      let userId = this.customerInfo.id;
      console.log(e);
      let type = e.currentTarget.dataset.type;
      let list = ['编辑联系人', '删除联系人'];

      if (type == 1) {
        let index = e.currentTarget.dataset.index;
        let odata = JSON.stringify(this.customerInfo.customerBaseInfo[index]);
        let id = this.customerInfo.customerBaseInfo[index].id;

        if (this.customerInfo.customerBaseInfo.length == 1) {
          list = ['编辑联系人'];
        }

        wx.showActionSheet({
          itemList: list,
          success: function (res) {
            if (!res.cancel) {
              if (res.tapIndex == 0) {
                wx.navigateTo({
                  url: '/pages/jin-suo-yun/customer-admin/add-contacts?userId=' + userId + '&odata=' + odata
                });
              } else if (res.tapIndex == 1) {
                wx.showModal({
                  title: '删除联系人',
                  content: '删除联系人后该联系人的信息将作废，确定删除该联系人？',

                  success(res) {
                    if (res.confirm) {
                      JsyServer.deleBaseInfo(id).then(res => {
                        wx.showToast({
                          title: '删除成功'
                        });

                        _this.getCustomerInfo();
                      }).catch(err => {
                        wx.showToast({
                          title: '删除失败',
                          icon: 'none'
                        });
                      });
                    } else if (res.cancel) {
                      console.log('用户点击取消');
                    }
                  }

                });
              }
            }
          }
        });
      } else {
        wx.navigateTo({
          url: '/pages/jin-suo-yun/customer-admin/add-contacts?userId=' + userId
        });
      }
    },
    //跳转设置经营状况页面
    toSetManagementCondition: function () {
      let userId = this.customerInfo.id;
      let type = this.customerInfo.type;
      let id = "",
          data = "";

      if (this.customerInfo.operationStatus) {
        id = this.customerInfo.operationStatus.id;
        data = JSON.stringify(this.customerInfo.operationStatus);
      }

      wx.navigateTo({
        url: '/pages/jin-suo-yun/customer-admin/set-management-condition?userId=' + userId + "&id=" + id + '&data=' + data + '&type=' + type
      });
    },
    // 跳转身份特征页面
    toSetIdentity: function () {
      let userId = this.customerInfo.id;
      let type = this.customerInfo.type;
      let id = "",
          data = "";

      if (this.customerInfo.characteristics) {
        id = this.customerInfo.characteristics.id;
        data = JSON.stringify(this.customerInfo.characteristics);
      }

      wx.navigateTo({
        url: '/pages/jin-suo-yun/customer-admin/set-identity?userId=' + userId + "&id=" + id + '&data=' + data + '&type=' + type
      });
    },
    // 产品信息
    toSetOpi: function () {
      let userId = this.customerInfo.id;
      let id = "",
          data = "";

      if (this.customerInfo.productInfo) {
        id = this.customerInfo.productInfo.id;
        data = JSON.stringify(this.customerInfo.productInfo);
      }

      wx.navigateTo({
        url: '/pages/jin-suo-yun/customer-admin/set-opi?userId=' + userId + "&id=" + id + '&data=' + data
      });
    },
    // 跳转询价管理
    toInquiry: function () {
      wx.navigateTo({
        url: '/pages/jin-suo-yun/customer-admin/sampling-record?id=' + _id
      });
    },
    // 跳转到产品展示
    toProductPage: function () {
      let isProduct = this.customerInfo.productInfo;
      let url;

      if (isProduct) {
        url = '/pages/jin-suo-yun/customer-admin/product-display?customerId=' + _id;
      } else {
        url = '/pages/jin-suo-yun/customer-admin/add-productpage?type=' + this.customerInfo.type + '&customerid=' + _id;
      }

      wx.navigateTo({
        url: url
      });
    },
    bindNull: function () {
      wx.showToast({
        title: '待开发...',
        icon: 'none'
      });
    },
    tapDelete: function () {
      if (!this.admin) {
        return;
      }

      let list = ['删除客户'];
      let id = this.customerInfo.id;
      wx.showActionSheet({
        itemList: list,
        success: function (res) {
          wx.showModal({
            title: '删除客户',
            content: '删除客户后该客户的信息将作废，确定删除该客户？',

            success(res) {
              if (res.confirm) {
                JsyServer.deleteCompany(id).then(res => {
                  let pages = getCurrentPages();
                  let prevPage = pages[pages.length - 2];
                  prevPage.setData({
                    setOver: true
                  });
                  wx.showToast({
                    title: '删除客户成功'
                  });
                  let timer = setTimeout(() => {
                    wx.navigateBack({});
                  }, 1000);
                }).catch(err => {
                  console.log("删除失败err=>", err);
                  wx.showToast({
                    title: "删除客户失败",
                    icon: 'none'
                  });
                });
              } else if (res.cancel) {
                console.log('用户点击取消');
              }
            }

          });
          console.log("111Res---", res);
        }
      });
    },
    setData: function (obj) {
      let that = this;
      let keys = [];
      let val, data;
      Object.keys(obj).forEach(function (key) {
        keys = key.split('.');
        val = obj[key];
        data = that.$data;
        keys.forEach(function (key2, index) {
          if (index + 1 == keys.length) {
            that.$set(data, key2, val);
          } else {
            if (!data[key2]) {
              that.$set(data, key2, {});
            }
          }

          data = data[key2];
        });
      });
    }
  }
};
</script>
<style lang="scss">
page{
  padding-bottom: 20upx;
}
.margin-top-200{
	margin-top: -200upx !important;
}
.hand_box{
  margin: 20upx 20upx 0;
  padding:30upx;
  border-radius: 6upx;
  line-height: 1;
  background-color: #fff;
}
.hand_top_box{
  padding-bottom: 20upx;
  border-bottom: 2upx solid #DDDDDD;
  margin-bottom: 20upx;
}
.hand_img{
  width: 120upx;
  height:120upx;
  border-radius: 120upx;
  margin-right: 30upx; 
}
.hand_top_right{
  /* height: 120upx; */
  width: 510upx;
  box-sizing: border-box;
  padding-top:10upx;
  padding-bottom:14upx;
  /* display: flex;
  flex-direction: column;
  justify-content: space-between; */
}
.stars_img{
  width: 26upx;
  height: 26upx;
  margin-left: 20upx
}
.border_btn{
  width: 175upx;
  box-sizing: border-box;
  background-color: #EE603F;
  color: #fff;
  border-radius: 6upx;
  text-align: center;
  line-height: 44upx;
}
.plr_20{
  padding: 0 20upx;
}
.hand_middle_box{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 123upx;
  width: 144upx;

}
.color_9b{
  color: #9b9b9b;
}
.query_btn{
  width: 144upx;
  height: 40upx;
  background-color: #333236;
  color: #fff;
  line-height: 40upx;
  text-align: center;
  border-radius: 4upx;
}
.line{
  width: 4upx;
  height: 28upx;
  border-radius: 2upx;
  background-color: #EE603F;
  margin:0 27upx;
}
.list_line{
	width: 4upx;
	height: 15px;
	border-radius: 2upx;
	background-color: #EE603F;
	margin-right: 10upx;
	margin-left: -14upx;
}
.hand_bottom{
	margin: 30upx 20upx 0;
}
.hand_bottom_btn{
  height: 90upx;
  line-height: 82upx;
  background-color: #EE603F;
  width: 190upx;
  font-size: 15px;
  border-radius: 4upx;
  color: #fff;
  text-align: center;
  font-weight: bold;
}
.box{
  margin: 20upx 20upx 0;
  padding: 0 20upx;
  border-radius: 6upx;
  background-color: #fff;
}
.bianji_img{
  width: 34upx;
  height: 34upx;
	padding: 20upx 0 20upx 50upx
}
.box_list{
  padding:0 10upx; 
  border-bottom: 2upx solid rbga(221,221,221,0.3);
  line-height: 87upx;
}
.lh_72{
  line-height: 72upx;
}
.no_border{
  border: none
}
.color_888{
  color: #888890
}
.none_btn_box{
  margin: 0 50upx;
}
.none_btn{
  width: 310upx;
  height: 97upx;
  line-height: 97upx;
  padding: 0 40upx 0 30upx;
  color: #fff;
  background-color: #EE603F;
  border-radius: 6upx;
  box-sizing: border-box;
  margin-top: 31upx;
  box-shadow: 0 4upx 8upx 0 rgba(0, 0, 0, 0.1)
}
.none_btn:nth-child(1),.none_btn:nth-child(3){
  margin-right: 30upx;
}

.right_img{
  width: 22upx;
  height: 24upx;
}
.max_width{
  max-width: 500upx;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.wid_550{
	width: 315upx
}
.wid_80{
	width: 80upx;
}
.wid_175{
	width: 175upx;
}

.wid_254{
	width: 254upx;
	color: #888890;
}
.wid_170{
	width: 170upx;
	color: #888890;
}
.list_right{
	width: 140upx;
	color: #888890;
}
.list_right_280{
	width: 280upx;
	color: #888890;
}
.spot{
	width: 7upx;
	height: 7upx;
	border-radius: 7upx;
	background-color: #EE603F;
	margin-left: 6upx;
}
.wid_198{
	width: 198upx;
}
.color_000{
	color: #333236
}
.title_img{
	width: 36upx;
	height: 36upx;
	padding-right: 20upx; 
}
.ellipsis{
	width: 10upx;
	height: 10upx;
	border-radius: 10upx;
	background-color: #C6C6C6;
	margin-right: 10upx;
}
.wid_296{
	width: 296upx;
}
.wid_140{
	width: 140upx;
	white-space:nowrap; 
}
.wid_156{
	width: 156upx;
	text-align: center;
}
.wid_168{
	width:168upx;
}
.wind_193{
	width: 193upx;
}
.text_right{
	text-align: right
}
.mlr_58{
	margin: 0 58upx
}
.text_c{
	text-align: center
}
.wid_480{
	width: 480upx;
	line-height: 1.2;
}
.mar_20{
	margin: 20upx;
}
.login_top{
          height: 378upx;
          width: 750upx;
          box-sizing: border-box;
          background-image:url(https://api.qingfangche.net/api/common/picture/hand_back/png/images/download);
          background-repeat:no-repeat;
          background-position:center top;
          background-size:cover;
          text-align: center;
        }
.login_img{
		  width: 336upx;
		  height: 128upx;
		  margin: 138upx auto;
		}
.inTabbar{
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		width: 100%;
		background-color: #FFFFFF;
		z-index: 99;
		position: fixed;
		top: 0;
		.tabItem {
			display: flex;
			flex-direction: column;
			.tabText{
				color: black;
			}
		    .tabNum{
				font-size: 13px;
			}
		}
		.active {
			.tabText {
				color: black;
			}
			.bottomLine{
				background: red;
				height: 6upx;
				border-radius: 4upx;
			}
		}
		
	}	
</style>