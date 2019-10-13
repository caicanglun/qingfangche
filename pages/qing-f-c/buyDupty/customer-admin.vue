<template>
<view>
<view class="search_top_box">
 
  <view class="flex_sb" >
    <view class="flex_c search_left">
      <icon type="search" size="14" style="height:14px;margin-left:40rpx;"></icon>
      <input class="search_left_input" :value="inputValueOne" placeholder="请输入搜索内容" @input="blurInput"></input>
    </view>
    <button class="searcb_right_btn" @tap="tapSearch">搜索</button>
  </view>

</view>


<view>
  <block v-for="(item, index) in customerList" :key="index">
    <view class="list flex_c box_shadow" @click.stop="toClientDetail" :data-id="item.id" :data-index="index">
      <view class="no_pitch"></view>
      <image src="/images/jinsy/pitch_on.png"  mode="aspectFill" class="pitch_on"></image>
      <view :class="(compileing?'wid_610':'wid_670')">
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
			  <view class="fs_14 color_888">{{item.contName||''}} {{item.contPhone||""}}</view>
        </view>
		<view class="flex_sb mt_20">
		  <view class="flex">
			  <image src="/static/images/qingfc/application/organize.png" class="title_img" mode="aspectFit"></image>
			  <view class="fs_14 ">所属帮办: {{ item.bangban||'' }}</view>
		  </view>
		  
		</view>
		
      </view>
    </view>
  </block>
  <view class="bottom_title fff_50" v-if="loading">加载中...</view>
</view>

<view class="fixed_right_bottom box_shadow"  @tap="goCustomerCreated">
  <view>新建</view>
  <view>客户</view>
</view>

</view>
</template>

<script>

let pageSize = 20,
    recordPage = 1,
    _this,
    custYN = true,
    recordYN = true;

export default {
  data() {
    return {
      //identity: 1,
      //0销售总监或者区域经理 1：买帮办或者卖帮办
      tabTwo: 0,
      compileing:false,
      allPitchOn: false,
      //是否全部选中
      list: [{
        option: false
      }, {
        option: false
      }, {
        option: false
      }],
      inputValue: '',
      //跟进记录搜索内容
      inputValueOne: '',
      
      timeIconStatus: false,
      //时间区间选择是否被打开
     
      setOver: false,
      //返回该页是否刷新
      selectContent: [{
        name: '全部',
        id: 0
      }, {
        name: '买家',
        id: 2
      }, {
        name: '卖家',
        id: 4
      }],
      bindSelect: false,
      //是否点开搜素类别
      loading: false,
     
	  customerList: []
    };
  },

  onReachBottom: function () {
    this.getAdminCustomerList();

  },
  onPullDownRefresh: function () {
    this.getAdminCustomerList();
    
  },
  onShow: function () {
    
      this.getAdminCustomerList();
    
  },
  onLoad: function (options) {
    _this = this;
   
    recordPage = 1;
    custYN = true;

    //let userInfo = wx.getStorageSync("userInfo");
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
	
    this.getAdminCustomerList();
    this.setTime();
  }
     
  ,
  components: {},
  props: {},
  methods: {
    blurInput: function (e) {
      console.log(this.tabOne, e.detail.value);

      if (this.tabOne == 0) {
        this.setData({
          inputValueOne: e.detail.value
        });
      } else {
        this.setData({
          inputValue: e.detail.value
        });
      }
    },
    bindSearch: function (e) {
      recordPage = 1;
      this.setData({
        inputValue: e.detail.value
      });
      this.getRecordList();
    },
    // 点开搜索下拉选项
    bindSelectFunc: function () {
      this.setData({
         bindSelect: !this.bindSelect
      });
    },
    // 点击选项
    bindSelectContent: function (e) {
      let index = e.currentTarget.dataset.index;
      let selectContent = this.selectContent;
      let obj = selectContent[0];
      selectContent[0] = selectContent[index];
      selectContent[index] = obj;
      this.setData({
        selectContent: selectContent
      });

      if (index > 0) {
        this.tapSearch();
      }
    },
    // 点击搜索
    tapSearch: function () {
      
      wx.showLoading({
        title: '搜索中...'
      });
      this.getAdminCustomerList();
    },
    // 获取客户列表
    getAdminCustomerList: function () {
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
    },
    setNavButton:function(val){
		let pages = getCurrentPages();
		let page = pages[pages.length-1];
		let currentWebview = page.$getAppWebview();
		let titleObj = currentWebview.getStyle().titleNView;  
		                    
		titleObj.buttons[0].text = val;  
		currentWebview.setStyle({  
			titleNView: titleObj  
		});  
		
	},
    tapTabTwo: function (e) {
      let index = e.currentTarget.dataset.index;

      this.tabTwo = index;
	  console.log(index);
	  
      // if (status == 0 && this.list0 || status == 1 && this.list1 || status == 2 && this.list2 || status == 3 && this.list3) {
      //   return;
      // }

      // custYN = true;
      this.getAdminCustomerList();
	  
    },
    
   

       
    //设置当前时间
    setTime: function () {
      let newDate = new Date();
      let month = newDate.getMonth() + 1;
      month = month < 10 ? "0" + month : month;
      let newTime = newDate.getFullYear() + '-' + month + '-' + newDate.getDate();
      this.setData({
        newTime: newTime
      });
    },
   
 
    
    //跳转到新建客户页面
    goCustomerCreated: function () {
      wx.navigateTo({
        url: '/pages/qing-f-c/buyDupty/customer-created'
      });
    },
    //跳转到新增跟进记录页
   
    // 跳转到客户详情页
    toClientDetail: function (e) {
      if (this.compileing) {
        this.tapPitchOn(e.currentTarget.dataset.index);
      } else {
        let id = e.currentTarget.dataset.id;
        wx.navigateTo({
          url: '/pages/qing-f-c/buyDupty/customer-details?id=' + id
        });
      }
    },
    
    // 重置时间
    bindReset: function () {
      this.setData({
        startDate: "",
        endDate: "",
        inputValue: ''
      });
      recordPage = 1;
      this.getRecordList();
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
<style>
.tab_one{
  color: #fff;
  text-align: center;
  width: 374rpx;
  font-size: 14px;
}
.tab_one:nth-child(1){
  border-right: 2rpx solid #fff;
}
.tab_list{
  background-color: #fff;
  font-size: 28rpx;
  font-weight: 300;
}
.tab_170{
  text-align: center;
  width: 170rpx;
}
.tab_145{
  text-align: center;
  width: 145rpx;
}
.tab_208{
  text-align: center;
  width: 208rpx;
	
}

.tab_on{
  color: #EE603F;
  font-weight: bold;
}
.line{
  height: 60rpx;
  width: 2rpx;
  background-color: #D3D3D3;
}
.tab_text{
  display: inline-block;
  padding: 24rpx 0;
}
.text_on{
  border-bottom: 4rpx solid #EE603F;
}
.tab_bj{
  font-size: 24rpx;
  color: #EE603F;
  font-weight: bold;
  text-align: center;
  width: 114rpx;
	padding: 24rpx 0;
}
.all_list{
  padding: 20rpx 40rpx 0;
}
.no_pitch{
   width: 40rpx;
   height: 40rpx;
   border-radius: 40rpx;
   border: 1rpx solid #979797;
   background-color: #fff;
   margin-right: 20rpx;
   box-sizing: border-box;
}
.pitch_on{
  width: 40rpx;
  height: 40rpx;
  border-radius: 40rpx;
  margin-right: 20rpx;
}
.list{
  padding: 20rpx;
  margin: 20rpx;
  background-color: #fff;
  border-radius: 6rpx;
  font-size: 12px;
}
.hand_img{
  width: 100rpx;
  height: 100rpx;
  margin-right: 20rpx;
  border-radius: 100rpx;
}
.client_hand_img{
  width: 120rpx;
  height: 120rpx;
  margin-right: 30rpx;
  border-radius: 120rpx;
}
.height_120{
  height: 120rpx;
}
.width_380{
	width: 380rpx
}
.width_400{
	width: 400rpx;
}
.width_510{
  width: 510rpx;
}
.width_490{
  width: 490rpx;
}
.mr_50{
  margin-right: 50rpx;
}
.fff_50{
  color: rgba(0, 0, 0, 0.5)
}
.fixed_right_bottom{
  position: fixed;
  bottom: 187rpx;
  right: 23rpx;
  height: 100rpx;
  width: 100rpx;
  border-radius: 100rpx;
  background-color: #EE603F;
  color: #fff;
  font-size: 28rpx;
  text-align: center;
  line-height: 1;
  box-sizing: border-box;
  padding-top:22rpx; 
  font-weight: bold;  
}
.riqi_img{
  width: 50rpx;
  height: 50rpx;
  margin-right: 10rpx;
  margin-top: 3rpx;
}
.wangfan_img{
  width: 50rpx;
  height: 27rpx;
  margin: 14rpx 30rpx;
}
.time_btn{
  width: 222rpx;
  height: 56rpx;
  box-sizing: border-box;
  background-color: #EE603F;
  color: #fff;
  font-size: 14px;
  text-align: center;
  border-radius: 6rpx;
  line-height: 56rpx;
}
.height_100{
	height: 100rpx
}

.mb_16{
	margin-bottom: 16rpx;
	line-height: 1.1
}
.search_btn{
  width: 138rpx;
  background-color: #fff;
  border-radius: 28rpx;
  display: flex;
  justify-content: center;
  color:#9B9B9B;
  height: 56rpx;
  flex-wrap: wrap;
  position: relative;
  z-index: 99;
  overflow: hidden;
  transition: 0.2s
}
.bind_searach{
  height: 192rpx;
}
.selection{
  line-height: 56rpx;
}
.search_btn image{
  width: 18rpx;
  height: 28rpx;
  margin-left: 12rpx;
  margin-top: 14rpx
}
.lh_62{
  line-height: 62rpx;
}
.height_92{
	height: 92rpx
}
.height_56{
  height: 56rpx
}
.bottom_title{
	text-align: center;
	font-size: 14px;
	margin: 20rpx 0;
}
.ptb_20{
	line-height: 1.2;
	padding-top: 17rpx;
	padding-bottom: 17rpx;
}
.title_img{
	width: 32rpx;
	height: 35rpx;
	padding-left:10rpx;
	padding-right: 20rpx; 
}
.mr_60{
	margin-right: 60rpx;
}
.mt_10{
	margin-top: 10rpx;
}
.color_888{
	color: #888890;
}
.wid_670{
	width: 670rpx
}
.wid_610{
	width: 610rpx
}
.time_box{
  padding: 14rpx 30rpx 16rpx 30rpx;
}
.wangfan_img{
  width: 84rpx;
  height: 18rpx;
  margin: 11rpx 32rpx;
}
.reset{
	color: #EE603F;
	font-weight: bold;
	line-height: 56rpx;
	padding-left: 40rpx;
}
.record_list{
	margin: 20rpx;
	padding: 20rpx 10rpx;
	font-size: 14px;
	background-color: #fff;
	border-radius: 6rpx;
}
.color_9b{
	color: #9B9B9B
}
.border_bottom{
	border-bottom: 1rpx solid #ddd;
	padding:0 10rpx 20rpx; 
	margin-bottom: 15rpx;
}
.wid_510{
	width: 510rpx;
	line-height: 1.1
}
</style>