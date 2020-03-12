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
      <view class="fs_18 font_we_bold">{{customerInfo.companyName||''}}</view>
	  <view :class="'ml_20 '+ (customerInfo.buyOrSell==1?'id_btn':'seller_btn')">{{customerInfo.buyOrSell==1?'买家':'卖家'}}</view>
    </view>
    <view>
		<image src="/static/images/qingfc/del@2x.png"  style="width:36upx;height:36upx;" mode="aspectFit" @tap="delCustomer"></image>
	</view>
    
  </view>
  <!-- <view class="flex_right mb_20">
    <view :class="(customerInfo.type==2?'id_btn':'seller_btn')">{{customerInfo.type==2?'买家':'卖家'}}</view>
  </view> -->
  <view class="flex_end mt_30">
    <view class="fs_15 font_we_bold">评价：</view>
    <block v-for="(item, index) in [1,2,3,4,5]" :key="index">
      <image src="/static/images/shixinStar.png" class="stars_img" mode="aspectFit"></image>
    </block>
    <view class="ml_30 fs_12 color_FF6000">查看详情</view>
  </view>
  
  <view v-if='customerInfo.buyOrSell==1'>     <!-- 买家找样需求 -->
  	  <view class="flex_c fs_14 mt_30">
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
  </view>
  <view v-if='customerInfo.buyOrSell==2'>
  	  <view class="flex_c fs_14 mt_30">
  	    <view class="wid_168 flex_c">
  	      <view class="wid_140 color_9b">找样结果数</view>
  	      <view class="wid_156">{{customerInfo.demandNum||0}}</view>
  	    </view>
  	  	<view class="line"></view>
  	  	<view class="wid_168 flex_c">
  	  	  <view class="wid_140 color_9b">匹配确认数</view>
  	  	  <view class="wid_156">{{customerInfo.demandNum||0}}</view>
  	  	</view>
  	    <view class="line"></view>
  	    <view class="wid_168 flex_c">
  	      <view class="wid_140 color_9b">总交易次数</view>
  	      <view class="wid_156">{{customerInfo.transactionNum||0}}</view>
  	    </view>
  	  </view>
  	  
  </view>
  <!-- 买家没有保证金 -->
  <view class="flex_sb mt_30 " v-if="customerInfo.buyOrSell == 1">
    <view class="hand_bottom_btn wid_300" @tap="toRecordDetails">
  		<view>跟进记录</view>
  		<view class="counter">36条</view>
  	</view>
    <view class="hand_bottom_btn wid_300" @tap="toProductPage">
  		<view>产品展示</view>
  		<view class="counter">12个</view>
  	</view>
  </view>
  <!-- 卖家有保证金 -->
  <view class="flex_sb mt_30" v-if="customerInfo.buyOrSell == 2">
    <view class="hand_bottom_btn" @tap="toRecordDetails">
  		<view>跟进记录</view>
  		<view class="counter">36条</view>
  	</view>
    <view class="hand_bottom_btn" @tap="toProductPage">
  		<view>产品展示</view>
  		<view class="counter">12个</view>
  		
  	</view>
    <view class="hand_bottom_btn" @tap="toBondDetail">
  		<view>保证金</view>
  		<view class="counter">20000元</view>
  	</view>
  </view>
</view>
 <!-- ---------------------------------- -->
<view class="inTabbar box_shadow pt_30" id="inTabbar" v-if="isDisplay">
	<view class="flex_c_c mb_20">{{customerInfo.companyName||''}}</view>
	<view class="flex_sa">
		<!-- 卖家没有竞争对手 -->
		<view class="tabItem fs_15"
			v-for="(item,index) of itemsSell" 
			:key= "index" 
			:class= "activeIndex==index?'active':''"
			 @tap= "tabSwitch(index)"
		    :data-index='activeIndex' v-if="customerInfo.buyOrSell == 2">
			<text class= "tabText">{{item}}</text>
			<view class= "bottomLine"></view>
		</view>
		<!-- 买家有竞争对手，引用不用的数组items itemsSell -->
		<view class="tabItem fs_15"
			v-for="(item,index) of items" 
			:key= "index" 
			:class= "activeIndex==index?'active':''"
			 @tap= "tabSwitch(index)"
		    :data-index='activeIndex' v-if="customerInfo.buyOrSell == 1">
			<text class= "tabText">{{item}}</text>
			<view class= "bottomLine"></view>
		</view>
		
	</view>
	
</view>
 <!-- ---------------------------------- -->
 <view style="background-color: #f4f4f4;">             <!-- 背景颜色 -->
 
<!-- ------------------- -->
<view class="box" id="companyInfo">
  <view class="flex_sb_c box_list">
    <view class="fs_16 font_we_bold lh_72 flex_c">
      <view class="list_line"></view>
      <view>公司信息</view>
    </view>
   <!-- <image src="/static/images/jinsy/bianji.png" class="bianji_img" mode="aspectFit" @tap="goEditCustomer"></image> -->
    <!-- <image src="/static/images/jinsy/bianji.png" class="bianji_img" mode="aspectFit"></image> -->
  </view>
 <!-- <view class="flex_c box">
   <listShow label="客户编号" :content="customerInfo.companyCode"></listShow>
 </view>
 -->

  <view class="flex_c box_list fs_14">
    <view class='list_right'>客户编号</view>
    <view>{{customerInfo.companyCode||''}}</view>
  </view>
  
  <view class="flex_c box_list fs_14">
    <view class='list_right'>所属区域</view>
    <view>{{customerInfo.region||''}}</view>
  </view>
  <view class="flex_c box_list fs_14">
    <view class='list_right'>公司地址</view>
    <view>{{customerInfo.companyAddress||''}}</view>
  </view>
  <view class="flex_c box_list fs_14">
    <view class='list_right'>工厂地址</view>
    <view>{{customerInfo.factoryAddress||''}}</view>
  </view>
  <view class="flex_c box_list fs_14" v-if="customerInfo.hasSalesroom==1">
    <view class='list_right'>门市地址</view>
    <view>{{customerInfo.salesroomAddress||''}}</view>
  </view>
  
  <view class="flex_c box_list fs_14">
    <view class='list_right'>客户类型</view>
    <view>{{customerInfo.companyType||''}}</view>
  </view>
 <view class="flex_c box_list fs_14">
    <view class='list_right'>客户规模</view>
    <view>{{customerInfo.companyScale||''}}</view>
  </view>
  <view class="flex_c box_list fs_14">
    <view class='list_right'>客户来源</view>
    <view>{{customerInfo.companySource||''}}</view>
  </view>
  <view class="flex_c box_list fs_14">
    <view class='list_right'>合作意向</view>
    <view>{{customerInfo.cooperationIntention||''}}</view>
  </view>
  
  <view class="flex_c box_list fs_14">
    <view class='list_right'>配合度</view>
    <view>{{customerInfo.coordinate||''}}</view>
  </view>
  <view class="flex_c box_list fs_14 no_border">
    <view class='list_right'>公司定位</view>
    <view>{{customerInfo.managementPosition||''}}</view>
  </view>
</view>
 <!-- ---------------------------------- -->
<view class="box box_shadow" id="contact">
  <view :class="'flex_sb_c box_list ' + (!linkMan?'no_border':'')">
    <view :class="'fs_16 font_we_bold ' + (linkMan?'lh_72':'') + ' flex_c'">
      <view class="list_line"></view>
      <view>联系人</view>
    </view>
    <!-- <image src="/static/images/qingfc/application/tianjia.png" class="bianji_img" mode="aspectFit" @tap="addContacts"></image> -->
	<!-- <image src="/static/images/qingfc/application/tianjia.png" class="bianji_img" mode="aspectFit"></image> -->
  </view>
  <block v-for="(item, index) in linkMan" :key="index">
    <view :class="'flex_sb_c box_list fs_14 ' + (linkMan.length-1==index?'no_border':'')" @tap="toEditLinkman(item.buyOrSellCode)" data-type="1" :data-index="index">
      <view class="flex_c">
        <view class="list_right color_000">{{item.realName}}</view>
        <view class="ml_30">{{item.phone}}</view>
      </view>
      <!-- <view class="flex_c" @tap="toEditLinkman(item.buyOrSellCode)">
        <uniIcon type="arrowright" size="20"></uniIcon>
      </view> -->
    </view>
  </block>
</view>


 <!-- ---------------------------------- -->
<view class="box box_shadow" id="condition">
  <view :class="'flex_sb_c box_list ' + (!operation?'no_border':'')">
    <view :class="'fs_16 font_we_bold ' + (operation?'lh_72':'') + ' flex_c'">
      <view class="list_line"></view>
      <view>经营状况</view>
    </view>
    <!-- <image src="/static/images/jinsy/bianji.png" class="bianji_img" mode="aspectFit" 
	   @tap="toSetManagementCondition(1)" v-if="operation"></image>
	<image src="/static/images/qingfc/application/tianjia.png" class="bianji_img" mode="aspectFit" 
	   @tap="toSetManagementCondition(2)" v-if="!operation"></image> -->
  </view>
  <view v-if="operation">
    <view class="flex_c box_list fs_14">
      <view class="wid_198 color_888">旺季时间</view>
      <view>{{operation.highSeasonTime||''}}</view>
    </view>
    <view class="flex_c box_list fs_14">
      <view class="wid_198 color_888">资金状况</view>
      <view>{{operation.capitalName||''}}</view>
    </view>
    <view class="flex_c box_list fs_14 " >
      <view class="wid_198 color_888">信用度</view>
      <view>{{operation.creditName||''}}</view>
    </view>
	
	<view class="flex_c box_list fs_14 ">
	  <view class="wid_198 color_888">口碑</view>
	  <view>{{operation.womName||''}}</view>
	</view>
	<view class="flex_c box_list fs_14 no_border">
	  <view class="wid_198 color_888">运营状况</view>
	  <view>{{operation.operationName||''}}</view>
	</view>
	
   
  </view>

</view>
 <!-- ---------------------------------- -->
  <view class="box box_shadow" id="competitor" v-if="customerInfo.buyOrSell == 1">
    <view :class="'flex_sb_c box_list ' + (!rival?'no_border':'')">
      <view :class="'fs_16 font_we_bold ' + (rival?'lh_72':'') + ' flex_c'">
        <view class="list_line"></view>
        <view>竞争对手</view>
      </view>
      <!-- <image src="/static/images/qingfc/application/tianjia.png" class="bianji_img" mode="aspectFit" @tap="addCompetitor"></image> -->
    </view>
    <block v-for="(item, index) in rival" :key="index">
      <view :class="'flex_sb_c box_list fs_14 ' + (rival.length-1==index?'no_border':'')" @tap="detailCompetitor(item.id)" data-type="1" :data-index="index">
        <view class="flex_c">
          <view class="list_right_280 color_000">{{item.label}}</view>
        </view>
       <!-- <view class="flex_c" @tap="detailCompetitor(item.id)">
         <uniIcon type="arrowright" size="20"></uniIcon>
        </view> -->
      </view>
    </block>
  </view>
<!-- ---------------------------------- --> 

<view style="width:100%;height:950upx;" v-if="placeholdeView"></view>
</view>   <!-- 背景色 -->
</view>
</template>

<script>
import listShow from '@/components/listShow.vue';
import uniIcon from '@/components/uni-icons/uni-icons.vue';
const JsyServer = require("../../../services/jsy-server.js");

let _this, _companyCode;

export default {
  components:{
	  listShow,
	  uniIcon
	  
  },
  data() {
    return {
      placeholdeView:false,
      identity: 2,
      //1为买帮办，2为卖帮办
	  linkMan:'',
	  //公司联系人
	 operation:'',
	 //经营情况
	 rival:'',
	 //竞争对手
      customerInfo: '',
      //客户详情
      isProduct: false,
      //是否有产品
      admin: false, //是否是管理人员
      isDisplay: false,
	  activeIndex: -1,
	  items: ['公司信息','联系人','经营状况','竞争对手'],
	  itemsSell: ['公司信息','联系人','经营状况'],
	  isDoRefresh:false
    };
  },

  onPullDownRefresh: function () {
    this.getCustomerInfo();
  },
  onShow: function () {
	let pages = getCurrentPages();
    let currPage = pages[pages.length-1];
   if (currPage.data.isDoRefresh == true){
	       currPage.data.isDoRefresh = false;
		   this.getCustomerInfo();
		   this.getLinkMan()
		   this.getOperation()
		   this.getRival()
	 }
   
  },
  onLoad: function (options) {
    _this = this;
    //this.setIdentity();
	console.log(options)
    _companyCode = options.companyCode;
	this.getCustomerInfo();
	this.getLinkMan()
	this.getOperation()
	this.getRival()
  },
  onPageScroll:function(res){
	
	if (res.scrollTop>180){
		this.isDisplay = true
	}
	else {	
		this.isDisplay = false
		this.placeholdeView = false
	}
  },
  components: {},
  props: {},
  methods: {
	  tabSwitch:function(index){
	  	this.activeIndex = index
		this.placeholdeView = true
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
	  //下拉出现tabbar条，用于选择
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
    
    getCustomerInfo:function () {
	  console.log(_companyCode)
	  let _data = {companyCode: _companyCode}
      JsyServer.cmDetail(_data).then(res => {
      
        console.log(res);

        this.customerInfo = res.data.data
		console.log(this.customerInfo)
      }).catch(err => {
        
        console.log("Err===", err);
      });
	 
    },
   //获取公司联系人
	getLinkMan:function(){
		let _data = {companyCode: _companyCode}
		JsyServer.linkMan(_data).then(res => {
		  console.log(res);
		  this.linkMan = res.data.data.list
		}).catch(err => {
		  console.log("Err===", err);
		});
	},
	//获取经营状况
	getOperation:function(){
		let _data = {companyCode: _companyCode}
		JsyServer.operation(_data).then(res => {
		  console.log("获取经营状况",res);
		  _this.operation = res.data.data
		}).catch(err => {
		  console.log("Err===", err);
		});
	},
	//获取竞争对手
	getRival:function(){
		let _data = {companyCode: _companyCode}
		JsyServer.rival(_data).then(res => {
		  console.log("rival===",res);
		  this.rival = res.data.data.list
		  
		}).catch(err => {
		  console.log("Err===", err);
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
	//删除客户
	delCustomer:function(){
		uni.showModal({
		    title: '提示',
		    content: '确认删除该客户吗？',
		    success: function (res) {
		        if (res.confirm) {
		            let data={
						companyCode: _companyCode
					}
					let url = _this.Api.delCustomer
					uni.showLoading({
						title: '删除中',
						mask: true
					});
					_this.myRequest(data,url,'get').then(res => {
					  console.log(res);
					  if (res.data.status == 0){
						  uni.hideLoading();
						  
						  uni.showToast({
						  	title: '删除成功'
						  });
						  setTimeout(function() {
							  uni.navigateBack({
							  	delta: -1
							  });
						  }, 1000);
						  
					  }else {
						  uni.showToast({
						  	title: res.data.message
						  });
					  }
					  
					}).catch(err => {
					  wx.showToast({
					    title: err.data.errMsg,
					    icon: 'none'
					  });
					});
		        } else if (res.cancel) {
		            console.log('用户点击取消');
		        }
		    }
		});
	},
	//跳转到添加竞争对手
	addCompetitor:function(e){
		let companyCode = this.customerInfo.companyCode;
		uni.navigateTo({
			url: '/pages/qing-f-c/sellDupty/add-competitor?companyCode=' + companyCode,
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
		let rivalCode = index;
		
		uni.navigateTo({
			url: '/pages/qing-f-c/sellDupty/detail-competitor?rivalCode=' + rivalCode,
			success: res => {
				console.log(res)
			},
			fail: (err) => {
				console.log(err)
			},
			complete: () => {}
		});
		
	},
	goEditCustomer:function(){
		let companyCode = this.customerInfo.companyCode;
		
		uni.navigateTo({
			url: '/pages/qing-f-c/sellDupty/edit-customer?companyCode=' + companyCode,
			success: res => {},
			fail: () => {},
			complete: () => {}
		});
	},
    // 跳转添加联系人
    addContacts: function (e) {
      let companyCode = this.customerInfo.companyCode;
      console.log(e);
	  uni.navigateTo({
	  	url: '/pages/qing-f-c/sellDupty/add-contact?companyCode=' + companyCode,
	  	success: res => {},
	  	fail: () => {},
	  	complete: () => {}
	  });
       
    },
	//跳转编辑联系人
	toEditLinkman:function(e){
		let buyOrSellCode = e
		uni.navigateTo({
			url: '/pages/qing-f-c/sellDupty/contact-detail?buyOrSellCode=' + buyOrSellCode,
			success: res => {},
			fail: () => {},
			complete: () => {}
		});
	},
    //跳转设置经营状况页面
    toSetManagementCondition: function (e,code) {
      let _companyCode =  this.customerInfo.companyCode
	  if (e == 2){
		  wx.navigateTo({
		    url: '/pages/qing-f-c/sellDupty/setManagerCondition?companyCode=' + _companyCode
		  });
	  }else if (e == 1){
		  let _data = JSON.stringify(this.operation)
		  wx.navigateTo({
		    url: '/pages/qing-f-c/sellDupty/editManagerCondition?data=' + _data
		  });
	  }
      
    },
    // 跳转身份特征页面
    
    // 产品信息
    
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
.box{
    margin-top: 20upx;
    padding-left: 40upx;
    padding-right: 20upx;
    background-color: #fff;
    // box-shadow:5px 5px 10px -4px rgba(0,0,0,0.1);
    
    box-shadow: 0px 5px 10px -5px rgba(0,0,0,0.05);
   }
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
  background-color: #FF6000;
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
  background-color: #FF6000;
  margin:0 27upx;
}
.list_line{
	// width: 4upx;
	// height: 15px;
	// border-radius: 2upx;
	// background-color: #FF6000;
	// margin-right: 10upx;
	// margin-left: -14upx;
}
.hand_bottom{
	margin: 30upx 20upx 0;
}
.hand_bottom_btn{
  height: 90upx;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  background-color: #FF6000;
  width: 190upx;
  font-size: 15px;
  border-radius: 10upx;
  color: #fff;
  .counter{
  	  font-size: 13px;
  	  padding-top: 4upx;
  }
  
}
.wid_300{
	  width: 300upx;
  }

.bianji_img{
  width: 34upx;
  height: 34upx;
	padding: 20upx 0 20upx 50upx
}
.box_list{
  padding:0 10upx; 
  border-bottom: 1upx solid rgba(221, 221, 221, 0.3);
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
  background-color: #FF6000;
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
	background-color: #FF6000;
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
          background-image:url('~@/static/images/qingfc/customer-back.png');
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
			justify-content: center;
			align-items: center;
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
				width: 60upx;
			}
		}
		
	}	
</style>