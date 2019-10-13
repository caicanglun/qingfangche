<template>
<view>
<view class="search flex_sb fs_12">
  <view class="flex_c search_input">
    <icon type="search" size="14" style="height:14px;margin-left:40upx;"></icon>
    <input placeholder="搜索" placeholder-style="color:#9B9B9B" confirm-type="search" @confirm="bindSearch" @input="inputSearch"></input>
  </view>
  <view :class="'box_shadow search_btn ' + (bindSelect?'bind_searach':'')" @tap="bindSelect">
    <view class="flex selection ">
      <view>
        <block v-for="(item, index) in selectContent" :key="index">
          <view :class="(index>0?'lh_44':'color_ee603f font_we_bold')" @tap="bindSelectContent" :data-index="index">{{item.name}}</view>
        </block>
      </view>
      <image src="/static/images/qingfc/application/select_bind.png" mode="aspectFit"></image>
    </view>
  </view>
</view>
<view class="tab_list fs_14">
  <view class="flex_c">
    <view :class="'tab_box ' + (tabSelection==1?'tab_selection':'')" @tap="bindTab" data-index="1">
		<view>全部</view><view>(4235)</view>
	</view>
    <view class="line"></view>
    <view :class="'tab_box ' + (tabSelection==2?'tab_selection':'')" @tap="bindTab" data-index="2">已分配</view>
	<view class="line"></view>
	<view :class="'tab_box ' + (tabSelection==3?'tab_selection':'')" @tap="bindTab" data-index="3">未分配</view>
  </view>
  <view class="underline" :style="'margin-left:' + (tabSelection==1?'131upx':'507upx')"></view>

  
</view>

<!-- <block wx:for="{{customerList}}" wx:key="" wx:if="{{tabSelection==1}}">
  <view class='lits_box flex_c' data-id='{{item.id}}' bindtap='toCustimerDetails'>
    <image class='list_hand_img' mode='aspectFit' src="/images/hand_img.png"></image>
    <view class='flex_col_sb'>
      <view class='flex_sb mb_16'>
        <view class="fs_14 ">公司名称：{{item.name||''}}</view>
        <view class='id_btn'>{{item.type==2?'买家':'卖家'}}</view>
      </view>
      <view class='flex font_we_lighter'>
        <view class='mr_50'>所属区域：{{item.region||''}}</view>
        <view class='text_over'>客户类型：{{item.type1||''}}</view>
      </view>
    </view>
  </view>
</block> -->
<block v-for="(item, index) in customerList" :key="index" v-if="tabSelection==1">
  <view class="lits_box" :data-id="item.id" @tap="toCustimerDetails">
    <view class="flex_sb mt_10">
      <view class="flex">
        <image src="/static/images/qingfc/application/companyx.png" class="title_img" mode="aspectFit"></image>
        <view class="fs_16 font_we_bold wid_510">{{item.name||''}}</view>
      </view>
      <view :class="(item.type==2?'id_btn':'seller_btn')">{{item.type==2?'买家':'卖家'}}</view>
    </view>
    <view class="flex_c mt_20">
      <image src="/static/images/qingfc/application/list.png" class="title_img" mode="aspectFit"></image>
      <view class="fs_14 ">
        <text class="mr_60">{{item.region||''}}</text>
        <text class="mr_60">{{item.type1||''}}</text>
        <text>{{item.contNum||0}}个联系人</text>
      </view>
    </view>
    <view class="flex_c mt_20">
      <image src="/static/images/qingfc/application/contacts.png" class="title_img" mode="aspectFit"></image>
      <view class="fs_14 ">{{item.contName||''}} {{item.contPhone||""}}</view>
    </view>
	<view class="flex_c mt_20">
	  <image src="/static/images/qingfc/application/organize.png" class="title_img" mode="aspectFit"></image>
	  <view class="fs_14 ">所属帮办: {{ item.bangban }}</view>
	</view>
  </view>
</block>

<block v-for="(item, index) in recordList" :key="index" v-if="tabSelection==2">
  <view class="record_list box_shadow" :data-id="item.followid" @tap="toRecordDetalis">
    <view class="flex_sb_c border_bottom ">
      <view class="fs_16 font_we_bold">{{item.name}}</view>
			<view class="fs_12 color_9b">{{item.lastModifiedDate}}</view>
    </view>
		<view class="plr_10 color_9b mb_20">{{item.followRecord}}</view>
		<view class="fs_12 pl_10 color_9b">{{item.timeName}}</view>
		<!-- <image class='list_hand_img' mode='aspectFit' src="/images/hand_img.png"></image>
		<view class='flex_col_sb'>
		  <view>客户编号:{{item.customerInfoId||''}}</view>
		  <view class='fs_14'>公司名称：{{item.name}}</view>
		  <view class='font_we_lighter'>跟进时间：{{item.followTime}}</view>
		</view> -->
  </view>

</block>

<view class="fixed_bottom" v-if="tabSelection==1" @tap="goCustomerCreated">
  <view>新建</view>
  <view>客户</view>
</view>
<!-- <view class="fixed_bottom" v-if="tabSelection==2" @tap="toAddRecord">
  <view>新增</view>
  <view>记录</view>
</view> -->
</view>
</template>

<script>
const JsyServer = require("../../../services/jsy-server.js");
let that;
let customerPage = 1,
    pageSize = 20,
    recordPage = 1,
    customerYN = true,
    recordYN = true;

export default {
  data() {
    return {
      selectContent: [{
        name: '全部区域',
        id: 1
      }, {
        name: '未完善',
        id: 0
      }],
      bindSelect: false,
      //是否点开搜素类别
      tabSelection: 1,
      //1选中客户列表；2选中跟进记录
      customerList: [],
      //客户列表
      recordList: [],
      timeIconStatus: false,
      //时间区间选择是否被打开
      startDate: '',
      endDate: '',
      newTime: '',
      inputValue: '',
      //搜索内容
      renewCustomer: false,
      //新建客户后刷新客户列表数据
      renewRecord: false,
	   //新建客户后刷新跟进记录列表数据
	  allNum: 3346,

    };
  },

  onReachBottom() {
    if (that.tabSelection == 1 && customerPage > -1) {
      this.getCustomerList();
    }

    if (that.tabSelection == 2 && recordPage > -1) {
      this.getRecordList();
    }
  },

  onPullDownRefresh() {
    customerPage = 1, recordPage = 1, this.getCustomerList();
    this.getRecordList();
  },

  onShow: function () {
    if (this.renewCustomer) {
      customerPage = 1;
      this.getCustomerList();
     
	  this.renewCustomer = false;
    }

    if (this.renewRecord) {
      recordPage = 1;
     
      this.renewRecord = false;
    
    }
  },
  onLoad: function (options) {
    customerPage = 1, recordPage = 1;
    that = this;
    this.setTime();
    this.getCustomerList();
  },
  components: {},
  props: {},
  methods: {
    //设置当前时间
    setTime: function () {
      let newDate = new Date();
      let month = newDate.getMonth() + 1;
      month = month < 10 ? "0" + month : month;
      let newTime = newDate.getFullYear() + '-' + month + '-' + newDate.getDate
	  this.newTime = newTime;
      
    },
    //获取跟进记录列表
    
    // 获取客户列表
    getCustomerList: function () {
      if (customerPage < 0 || !customerYN) {
        return;
      }

      customerYN = false;
      let data = {
        pageNo: customerPage,
        pageSize: pageSize,
        name: this.inputValue
      };

      if (this.selectContent[0].id == 0) {
        data.status = 0;
      }
	  this.customerList = [{followid: "11",followRecord: "","name":"绿城纺织有限公司",contNum: 3,
	  region:"柯桥",type: 2,type1: '布行',contName:"王兴明",contPhone:'13400223325',bangban:'王新有'},
	  {followid: "11",followRecord: "","name":"绿城纺织有限公司",contNum: 3,
	  region:"柯桥",type: 1,type1: '布行',contName:"王兴明",contPhone:'13400223325',bangban:'王新有'},
	  {followid: "11",followRecord: "","name":"绿城纺织有限公司",contNum: 3,
	  region:"柯桥",type: 2,type1: '布行',contName:"王兴明",contPhone:'13400223325',bangban:'王新有'},
	  {followid: "11",followRecord: "","name":"绿城纺织有限公司",contNum: 3,
	  region:"柯桥",type: 1,type1: '布行',contName:"王兴明",contPhone:'13400223325',bangban:'王新有'},
	  {followid: "11",followRecord: "","name":"绿城纺织有限公司",contNum: 3,
	  region:"柯桥",type: 2,type1: '布行',contName:"王兴明",contPhone:'13400223325',bangban:'王新有'}
	  ]

      /* JsyServer.getCustomerList(data).then(res => {
        wx.stopPullDownRefresh();
        customerYN = true;

        if (customerPage == 1) {
          that.setData({
            customerList: res.data
          });
        } else if (res.data.length > 0) {
          that.setData({
            customerList: that.customerList.concat(res.data)
          });
        }

        if (res.data.length == 20) {
          customerPage++;
        } else {
          customerPage = -1;
        }
      }).catch(err => {
        customerYN = true;
        console.log("err--", err);
      }); */
    },
    // 点击选项框
    bindSelect: function () {
	  this.bindSelect = !this.bindSelect;
    },
    // 点击选项框中的选项(客户列表)
    bindSelectContent: function (e) {
      let index = e.currentTarget.dataset.index;
      let selectContent = this.selectContent;
      let obj = selectContent[0];
      selectContent[0] = selectContent[index];
      selectContent[index] = obj;
	  this.selectContent = selectContent;
      

      if (index > 0) {
        customerPage = 1;
        this.getCustomerList();
      }
    },
    // 点击搜索
    bindSearch: function (e) {
      
      this.inputValue = e.detail.value;
      if (this.tabSelection == 1) {
        customerPage = 1;
        this.getCustomerList();
      } else {
        this.getRecordList();
      }
    },
    inputSearch: function (e) {
      // this.setData({
      // 	inputValue: e.detail.value
      // })
      console.log(e.detail.value);
    },
    
    // 点击开始时间
   
    //跳转到客户详情
    toCustimerDetails: function (e) {
      
    },
    //跳转到跟进记录详情
    bindTab:function(e){
		this.tabSelection = e.target.dataset.index;
		console.log(e.target.dataset.index);
	},
    //跳转到新建客户页面
    goCustomerCreated: function () {
      uni.navigateTo({
        url: '/pages/jin-suo-yun/customer-admin/customer-created'
      });
    },
    //跳转到新增跟进记录页
    toAddRecord: function () {
      
    }
    //重置时间
  }
};
</script>
<style>
page{
  background-color: #F6F6F6;
  font-size: 12px;
  padding-bottom: 20upx;
}

.search{
  background-color: #EE603F;
  height: 74upx;
  padding: 18upx 20upx 0 30upx;
}
.search_input{
  background-color: #fff;
  width: 498upx;
  height: 56upx;
  border-radius: 28upx;
  line-height: 56upx;
}
.search_input>input{
  margin-left: 18upx;
  width: 380upx;
}
.riqi_img{
  width: 50upx;
  height: 50upx;
  margin-right: 10upx;
  margin-top: 3upx;
}
.time_box{
  padding: 14upx 30upx 16upx 30upx;
}
.time_btn{
  width: 222upx;
  height: 56upx;
  box-sizing: border-box;
  background-color: #EE603F;
  color: #fff;
  font-size: 14px;
  text-align: center;
  border-radius: 6upx;
  line-height: 56upx;
}
.wangfan_img{
  width: 84upx;
  height: 18upx;
  margin: 11upx 32upx;
}
.search_btn{
  width: 162upx;
  background-color: #fff;
  border-radius: 28upx;
  display: flex;
  justify-content: center;
  color:#9B9B9B;
  height: 56upx;
  flex-wrap: wrap;
  position: relative;
  z-index: 99;
  overflow: hidden;
  transition: 0.2s
}
.bind_searach{
  height: 130upx;
}
.selection{
  line-height: 56upx;
}
.search_btn image{
  width: 18upx;
  height: 28upx;
  margin-left: 12upx;
  margin-top: 14upx
}
.lh_44{
  line-height: 62upx;
}
.color_ee603f{
  color: #EE603F;
}

.tab_list{
  background-color: #fff;
  line-height: 80upx;
  font-weight: 300;
  box-shadow: 0 4upx 8upx 0 rgba(0, 0, 0, 0.1);
}

.tab_box{
  display: flex;
  flex-direction: column;
   width: 375upx;
  /* text-align: center; */
}
.line{
  width: 1px;
  height: 29upx;
  background-color: #D3D3D3;
}
.tab_selection{
  color: #EE603F;
  font-weight: bold;
}
.underline{
  width:57px;
  height: 4upx;
  background-color: #EE603F;
  margin-left: 507upx;
  transition: 0.2s
}
.lits_box{
  margin:20upx 20upx 0;
  padding: 20upx 30upx 20upx 20upx;
  border-radius: 6upx;
  background-color: #fff;
  box-shadow: 0 4upx 8upx 0 rgba(0, 0, 0, 0.1);
  line-height: 1
}
.list_hand_img{
  width: 120upx;
  height: 120upx;
  border-radius: 120upx;
  margin-right: 30upx;
}
.flex_col_sb{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100upx;
  width: 510upx;
}
.mr_50{
  margin-right: 50upx;
}
.fixed_bottom{
  position: fixed;
  bottom: 187upx;
  right: 23upx;
  height: 100upx;
  width: 100upx;
  border-radius: 100upx;
  background-color: #EE603F;
  color: #fff;
  font-size: 28upx;
  text-align: center;
  line-height: 1;
  box-sizing: border-box;
  padding-top:22upx; 
  font-weight: bold;  
}
.text_over{
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 280upx;
}
.wid_370{
	width: 370upx;
	word-break: break-all;
}
.title_img{
	width: 32upx;
	height: 35upx;
	padding-left:10upx;
	padding-right: 20upx; 
}
.mr_60{
	margin-right: 60upx;
}
.mt_10{
	margin-top: 10upx;
}
.color_888{
	color: #888890;
}
.search_btn2{
	color: #fff;
	font-size: 14px;
	font-weight: bold;
	padding-left: 40upx;
	line-height: 56upx;
}
.reset{
	color: #EE603F;
	font-weight: bold;
	line-height: 56upx;
	padding-left: 40upx;
}
.record_list{
	margin: 20upx;
	padding: 20upx 10upx;
	font-size: 14px;
	background-color: #fff;
	border-radius: 6upx;
}
.color_9b{
	color: #9B9B9B
}
.border_bottom{
	border-bottom: 1upx solid #ddd;
	padding:0 10upx 20upx; 
	margin-bottom: 15upx;
}
.wid_510{
	width: 510upx;
}
</style>