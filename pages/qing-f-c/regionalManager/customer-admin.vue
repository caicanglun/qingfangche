<template>
<view>
<view class="search_top_box">
  <view class="flex_sb height_56">
    <view class="flex_c search_left " style="width:522rpx">
      <icon type="search" size="14" style="height:14px;margin-left:40rpx;"></icon>
      <input class="search_left_input" :value="inputValueOne" placeholder="请输入搜索内容" @input="blurInput" confirm-type="search" @confirm="tapSearch"></input>
    </view>
    <view :class="'box_shadow search_btn ' + (bindSelect?'bind_searach':'')" @tap="bindSelectFunc">
      <view class="flex selection ">
        <view>
          <block v-for="(item, index) in selectContent" :key="index">
            <view :class="'fs_12 ' + (index>0?'lh_62':'color_ee603f')" @tap="bindSelectContent" :data-index="index">{{item.name}}</view>
          </block>
        </view>
        <image src="/static/images/qingfc/application/select_bind.png" mode="aspectFit"></image>
      </view>
    </view>
  </view>
</view>

<view class="box_shadow">
  <view class="flex_c tab_list">
    <view :class="'tab_208 flex_c_c ' + (tabTwo==0?'tab_on':'')" @tap="tapTabTwo" data-index="0">
      <view :class="(tabTwo==0?'text_on':'') + ' ptb_20'">
        <view>全部</view>
        <view>({{numOne}})</view>
      </view>
    </view>
    <view class="line"></view>
    <view :class="'tab_208 flex_c_c ' + (tabTwo==1?'tab_on':'')" @tap="tapTabTwo" data-index="1">
      <view :class="(tabTwo==1?'text_on':'') + ' ptb_20'">
        <view>已分配</view>
        <view>({{numTwo}})</view>
      </view>
    </view>
    <view class="line"></view>
    <view :class="'tab_208 flex_c_c ' + (tabTwo==2?'tab_on':'')" @tap="tapTabTwo" data-index="2">
      <view :class="(tabTwo==2?'text_on':'') + ' ptb_20'">
        <view>未分配</view>
        <view>({{numThree}})</view>
      </view>
    </view>
  </view>
</view>




<view>
  <block v-for="(item, index) in customerList" :key="index" v-if="!compileing">
    <view class="list flex_c box_shadow" @click.stop="toClientDetail" :data-id="item.id" :data-index="index">
      
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
		  <view v-if="tabTwo==0">
				  <image src="/static/images/qingfc/application/exit2x.png" class="title_img" mode="aspectFit"></image>
				  <image src="/static/images/qingfc/application/swap2x.png" class="title_img" mode="aspectFit"></image>
		  </view>
		</view>
		
      </view>
    </view>
  </block>

  <checkbox-group @change="checkboxChange" v-if="compileing&&tabTwo>0">
  	<label v-for="item in customerList" :key="item.id"> 
  	<view class="flex">
  		<view class="checkboxSty"> 
  				<checkbox :value="item.id" :checked="(allPitchOn?true:items.ischecked)" /> 
  		</view>
  		<view>
			
			 <view class="list flex_c box_shadow" >
			   
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
			
		</view> 
      </view>
  	 </label> 
   </checkbox-group>
  <view class="bottom_title fff_50" v-if="loading">加载中...</view>
</view>

<!-- <view class="flex_c all_list" v-if="compileing" @tap="tabAllPitchOn">
  <view class="no_pitch" v-if="!allPitchOn"></view>
  <image src="/images/jinsy/pitch_on.png" v-if="allPitchOn" mode="aspectFill" class="pitch_on"></image>
  <view class="fs_12">全部</view>
</view> -->



<view class="fixed_bottom flex" v-if="compileing">
  <view class="btn_left_director" v-if="tabTwo==1" @tap="tabAllPitchOn">
	  <checkbox value="" :checked="allPitchOn" />全选</view>
  <view class="btn_right_director" v-if="tabTwo==1" @tap="toAllotAreaManager">分配给区域经理</view>
  <view class="btn_left" v-if="tabTwo==2" @tap="deleteAllot">删除分配</view>
  <view class="btn_right" v-if="tabTwo==2" @tap="toAllotDeputy">分配给帮办</view>
</view>
<view class="height_100" v-if="compileing"></view>

<!-- <view class="fixed_right_bottom box_shadow" v-if="identity==1" @tap="goCustomerCreated">
  <view>新建</view>
  <view>客户</view>
</view> -->

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
      
      tabTwo: 0,
      compileing:false,
      allPitchOn: false,
      //是否全部选中
      inputValue: '',
      //跟进记录搜索内容
      inputValueOne: '',
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
      numOne: 0,
      numTwo: 0,
      numThree: 0,
      numFour: 0,
	  customerList: []
    };
  },

  onReachBottom: function () {
    

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
	
    this.getAdminCustomerList();
    this.setTime();
  },
  onNavigationBarButtonTap:function(val){
	  if (this.tabTwo>0) {
		 this.tapCompile() 
	  }
	  
	    
  },
  components: {},
  props: {},
  methods: {
	  checkboxChange: function (e) {
	     				var items = this.customerList;
	     				var	values = e.detail.value;
	  				  //  console.log(values);
	     				for (var i = 0, lenI = items.length; i < lenI; ++i) {
	     					const item = items[i]
	     					if(values.includes(item.id)){
	     						this.$set(item,'ischecked',true)
	     					}else{
	     						this.$set(item,'ischecked',false)
	     					}
	     				}
						
	  },
	  tabAllPitchOn:function(){
		  this.allPitchOn = !this.allPitchOn;
	  },
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
       this.customerList = [{id:"1",followid: "11",followRecord: "","name":"绿城纺织有限公司",contNum: 3,
       region:"柯桥",type: 2,type1: '布行',contName:"王兴明",contPhone:'13400223325',bangban:'王新有'},
       {id:"2",followid: "11",followRecord: "","name":"绿城纺织有限公司",contNum: 3,
       region:"柯桥",type: 1,type1: '布行',contName:"王兴明",contPhone:'13400223325',bangban:'王新有'},
       {id:"3",followid: "11",followRecord: "","name":"绿城纺织有限公司",contNum: 3,
       region:"柯桥",type: 2,type1: '布行',contName:"王兴明",contPhone:'13400223325',bangban:'王新有'},
       {id:"4",followid: "11",followRecord: "","name":"绿城纺织有限公司",contNum: 3,
       region:"柯桥",type: 1,type1: '布行',contName:"王兴明",contPhone:'13400223325',bangban:'王新有'},
       {id:"5",followid: "11",followRecord: "","name":"绿城纺织有限公司",contNum: 3,
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
	  if (index == 0){
		  this.setNavButton("")
		  this.compileing = false
	  }
      if (index>0){
		 this.setNavButton("编辑") 
	  }
    
      // custYN = true;
      this.getAdminCustomerList();
	  
    },
    // 点击编辑
    tapCompile: function () {
      this.compileing = true;
     
    },
    // 点击全部
    
    
       
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
   
  
    // 跳转到选中区域经理页
    toAllotAreaManager: function () {
      let list = this.customerList,
          optionList = [];
	  
      list.forEach(function(item) {
        if (item.ischecked) {
          optionList.push(item.id);
        }
      });
      
      if (optionList.length > 0) {
        optionList = JSON.stringify(optionList);
        uni.navigateTo({
          url: '/pages/qing-f-c/sales_director/deputy-list?optionList=' + optionList 
		  // url: '/pages/qing-f-c/sales_director/deputy-list?optionList=' + optionList + '&type=1'
        });
      } else {
        uni.showToast({
          title: '至少选择一个客户',
          icon: 'none'
        });
      }
    },
    // 跳转到选择帮办页
    toAllotDeputy: function () {
      let list = this.list1,
          optionList = [];
      list.map(function(item) {
        if (item.isSelected) {
          optionList.push(item.id);
        }
      });

      if (optionList.length > 0) {
        let ids = optionList.join(",");
        wx.navigateTo({
          url: '/pages/jin-suo-yun/admin/select-deputy?ids=' + ids
        });
      } else {
        wx.showToast({
          title: '至少选择一客户',
          icon: 'none'
        });
      }
    },

    
   
    // 跳转到客户详情页
    toClientDetail: function (e) {
      if (this.compileing) {
        this.tapPitchOn(e.currentTarget.dataset.index);
      } else {
        let id = e.currentTarget.dataset.id;
        wx.navigateTo({
          url: '/pages/jin-suo-yun/customer-admin/customer-details?id=' + id
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
checkbox .wx-checkbox-input {
		border-radius: 50%;
	}
checkbox .wx-checkbox-input.wx-checkbox-input-checked {
		background: #FF6000;
		color: #fff !important;
	}
.checkboxSty {
		display: flex;
		align-items: center;
		padding-left:15upx;
	}
.btn_left_director{
	  width: 70%;
	  background-color: #fff;
	  color: #EE603F;
		line-height: 88upx;
		border-radius: 0;
		font-size: 16px;
		
}
.btn_right_director{
	  width: 30%;
	  background-color: #fff;
	  color: #EE603F;
		line-height: 88upx;
		border-radius: 0;
		font-size: 16px;
}
</style>