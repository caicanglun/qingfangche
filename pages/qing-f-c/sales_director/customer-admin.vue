<template>
<view>
  
	<view class="search_top_box">
	  <view class="flex_sb height_56">
		<view class="flex_c search_left " style="width:100%">
		  <icon type="search" size="14" style="height:14px;margin-left:40upx;"></icon>
		  <input class="search_left_input" :value="inputValueOne" placeholder="请输入搜索内容" 
		  @input="blurInput" confirm-type="search" @confirm="tapSearch"></input>
		</view>
	  </view>
	</view>

	<view class="box_shadow">
	  <view class="flex_sa tab_list">
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
 <!-- 条件筛选框 -->
	  <view class="search_area_box">
		<view class="flex_sa height_56">
		  <view :class="'box_shadow search_btn ' + (bindSelect?'bind_searach':'')" @tap="bindSelectFunc">
			<view class="flex selection ">
			  <view>
				<block v-for="(item, index) in selectContent" :key="index">
				  <view :class="'fs_14 ' + (index>0?'lh_62':'color_ee603f')" @tap="bindSelectContent" 
				  :data-index="index">{{item.name}}</view>
				</block>
			  </view>
			  <image src="/static/images/qingfc/application/select_bind.png" mode="aspectFit"></image>
			</view>
		  </view>
		  <view :class="isFilterBuyer?'box_shadow filter_btn_select fs_14':'box_shadow filter_btn fs_14'"
		  @tap="tapBuyFilter" >
			  买家
		  </view>
		  <view :class="isFilterSeller?'box_shadow filter_btn_select fs_14':'box_shadow filter_btn fs_14'" 
		  @tap="tapSellFilter" data-index="1">
			  卖家
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
			  <view class="fs_14">{{item.contName||''}} {{item.contPhone||""}}</view>
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
						  <view class="fs_14">{{item.contName||''}} {{item.contPhone||""}}</view>
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
	  <checkbox value="" :checked="allPitchOn" />全选
  </view>
  
  <view class="btn_right_director" v-if="tabTwo==1" @tap="toAllotAreaManager">指定分配</view>
  <view class="btn_right_director_1" v-if="tabTwo==1" @tap="deleteAllot">删除分配</view>
  <view class="btn_left_tapTwo" v-if="tabTwo==2" @tap="tabAllPitchOn">
  	  <checkbox value="" :checked="allPitchOn" />全选
  </view>
  <view class="btn_right_tapTwo" v-if="tabTwo==2" @tap="toAllotDeputy">去分配</view>
</view>
<view class="height_100" v-if="compileing"></view>



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
        name: '区域',
        id: 0
      }, {
        name: '石狮',
        id: 2
      }, {
        name: '盛泽',
        id: 4
      },
	  {
	    name: '柯桥',
	    id: 6
	  },
	  {
	    name: '其他',
	    id: 8
	  }],
      bindSelect: false,
      //是否点开搜素类别
      loading: false,
      numOne: 0,
      numTwo: 0,
      numThree: 0,
      numFour: 0,
	  customerList: [],
	  //区域经理
	  orginalList:[],
	  isFilterBuyer:false,
	  isFilterSeller: false
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
	this.numOne = this.customerList.length
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
	tapBuyFilter:function(e){
		this.isFilterBuyer = true;
	    this.isFilterSeller = false;
		let region = this.selectContent[0].name;
		this.customerList = this.orginalList
		this.customerList = this.customerList.filter((item)=>{
			if ( region == '区域'){
				return item.type==2
			}else {
				return item.type==2&&item.region==region
			}
			
		})
		
	},
	tapSellFilter:function(){
		this.isFilterBuyer = false;
		this.isFilterSeller = true;
		let region = this.selectContent[0].name;
		this.customerList = this.orginalList
		this.customerList = this.customerList.filter((item)=>{
			if ( region == '区域'){
				return item.type==1
			}else {
				return item.type==1&&item.region==region
			}
			
		})
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
      this.customerList = this.orginalList
      this.customerList = this.customerList.filter((item)=>{
      		      if (selectContent[0].name == '区域'){
      				  return item
      			  }else {
      				  return item.region==selectContent[0].name
      			  }
      });
      // if (index > 0) {
      //   this.tapSearch();
      // }
    },
    // 点击搜索
    tapSearch: function () {
      
      // wx.showLoading({
      //   title: '搜索中...'
      // });
      this.getAdminCustomerList();
	  
    },
    // 获取客户列表
    getAdminCustomerList: function () {
       this.customerList = [
	   {id:"1",followid: "11",followRecord: "","name":"绿城纺织有限公司",contNum: 3,
       region:"柯桥",type: 2,type1: '布行',contName:"王兴明",contPhone:'13400223325',bangban:'王新有'},
       {id:"2",followid: "11",followRecord: "","name":"绿城纺织有限公司",contNum: 3,
       region:"石狮",type: 1,type1: '布行',contName:"王兴明",contPhone:'13400223325',bangban:'王新有'},
       {id:"3",followid: "11",followRecord: "","name":"绿城纺织有限公司",contNum: 3,
       region:"盛泽",type: 2,type1: '布行',contName:"王兴明",contPhone:'13400223325',bangban:'王新有'},
       {id:"4",followid: "11",followRecord: "","name":"绿城纺织有限公司",contNum: 3,
       region:"厦门",type: 1,type1: '布行',contName:"王兴明",contPhone:'13400223325',bangban:'王新有'},
       {id:"5",followid: "11",followRecord: "","name":"绿城纺织有限公司",contNum: 3,
       region:"其他",type: 2,type1: '布行',contName:"王兴明",contPhone:'13400223325',bangban:'王新有'},
	   {id:"6",followid: "11",followRecord: "","name":"绿城纺织有限公司",contNum: 3,
	   region:"盛泽",type: 2,type1: '布行',contName:"王兴明",contPhone:'13400223325',bangban:'王新有'},
	   {id:"7",followid: "11",followRecord: "","name":"绿城纺织有限公司",contNum: 3,
	   region:"柯桥",type: 1,type1: '布行',contName:"王兴明",contPhone:'13400223325',bangban:'王新有'},
	   {id:"8",followid: "11",followRecord: "","name":"绿城纺织有限公司",contNum: 3,
	   region:"石狮",type: 2,type1: '布行',contName:"王兴明",contPhone:'13400223325',bangban:'王新有'},
	   {id:"9",followid: "11",followRecord: "","name":"绿城纺织有限公司",contNum: 3,
	   region:"石狮",type: 1,type1: '布行',contName:"王兴明",contPhone:'13400223325',bangban:'王新有'},
	   {id:"10",followid: "11",followRecord: "","name":"绿城纺织有限公司",contNum: 3,
	   region:"厦门",type: 2,type1: '布行',contName:"王兴明",contPhone:'13400223325',bangban:'王新有'},
	   {id:"11",followid: "11",followRecord: "","name":"绿城纺织有限公司",contNum: 3,
	   region:"石狮",type: 2,type1: '布行',contName:"王兴明",contPhone:'13400223325',bangban:'王新有'}
       ],
	   this.orginalList = this.customerList
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
		  //this.customerList = this.orginalList
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
      this.compileing = !this.compileing;
	  
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
  width: 374upx;
  font-size: 14px;
}
.tab_one:nth-child(1){
  border-right: 2upx solid #fff;
}
.tab_list{
  background-color: #fff;
  font-size: 28upx;
  font-weight: 300;
}
.tab_170{
  text-align: center;
  width: 170upx;
}
.tab_145{
  text-align: center;
  width: 145upx;
}
.tab_208{
  text-align: center;
  width: 208upx;
	
}

.tab_on{
  color: #EE603F;
  font-weight: bold;
}
.line{
  height: 60upx;
  width: 2upx;
  background-color: #D3D3D3;
}
.tab_text{
  display: inline-block;
  padding: 24upx 0;
}
.text_on{
  border-bottom: 4upx solid #EE603F;
}
.tab_bj{
  font-size: 24upx;
  color: #EE603F;
  font-weight: bold;
  text-align: center;
  width: 114upx;
	padding: 24upx 0;
}
.all_list{
  padding: 20upx 40upx 0;
}
.no_pitch{
   width: 40upx;
   height: 40upx;
   border-radius: 40upx;
   border: 1upx solid #979797;
   background-color: #fff;
   margin-right: 20upx;
   box-sizing: border-box;
}
.pitch_on{
  width: 40upx;
  height: 40upx;
  border-radius: 40upx;
  margin-right: 20upx;
}
.list{
  padding: 20upx;
  margin: 20upx;
  background-color: #fff;
  border-radius: 6upx;
  font-size: 12px;
}
.hand_img{
  width: 100upx;
  height: 100upx;
  margin-right: 20upx;
  border-radius: 100upx;
}
.client_hand_img{
  width: 120upx;
  height: 120upx;
  margin-right: 30upx;
  border-radius: 120upx;
}
.height_120{
  height: 120upx;
}
.width_380{
	width: 380upx
}
.width_400{
	width: 400upx;
}
.width_510{
  width: 510upx;
}
.width_490{
  width: 490upx;
}
.mr_50{
  margin-right: 50upx;
}
.fff_50{
  color: rgba(0, 0, 0, 0.5)
}
.fixed_right_bottom{
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
.riqi_img{
  width: 50upx;
  height: 50upx;
  margin-right: 10upx;
  margin-top: 3upx;
}
.wangfan_img{
  width: 50upx;
  height: 27upx;
  margin: 14upx 30upx;
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
.height_100{
	height: 100upx
}

.mb_16{
	margin-bottom: 16upx;
	line-height: 1.1
}
.search_btn{
  width: 210upx;
  background-color: #F2F2F2;
  border-radius: 28upx;
  display: flex;
  justify-content: center;
 /* color:#9B9B9B; */
  color:#333;
  height: 56upx;
  flex-wrap: wrap;
  position: relative;
  z-index: 99;
  overflow: hidden;
  transition: 0.2s
}
.bind_searach{
  /* height: 192upx; */
  height: 350upx;
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
.lh_62{
  line-height: 62upx;
}
.lh_30{
  line-height: 30upx;
}
.height_92{
	height: 92upx
}
.height_56{
  height: 56upx
}
.bottom_title{
	text-align: center;
	font-size: 14px;
	margin: 20upx 0;
}
.ptb_20{
	line-height: 1.2;
	padding-top: 17upx;
	padding-bottom: 17upx;
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
.wid_670{
	width: 670upx
}
.wid_610{
	width: 610upx
}
.time_box{
  padding: 14upx 30upx 16upx 30upx;
}
.wangfan_img{
  width: 84upx;
  height: 18upx;
  margin: 11upx 32upx;
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
.btn_right_director{
		width: 20%;
		background-color: #EE603F;
		color: #fff;
		border-radius: 0;
		font-weight: bold;
		line-height: 88upx;
		font-size: 16px;
		
	}
.btn_right_director_1{
		width: 40%;
		background-color: #EE603F;
		color: #fff;
		border-radius: 0;
		font-weight: bold;
		line-height: 88upx;
		font-size: 16px;	
	}
.btn_right_director{
		width: 40%;
		background-color: #ffaf7f;
		color: #fff;
		border-radius: 0;
		font-weight: bold;
		line-height: 88upx;
		font-size: 16px;	
	}
.btn_left_director{
		width: 20%;
		background-color: #fff;
		color: #000;
		line-height: 88upx;
		border-radius: 0;
		font-size: 16px;
	}
.btn_left_tapTwo{
	width: 70%;
	background-color: #fff;
	color: #000;
	line-height: 88upx;
	border-radius: 0;
	font-size: 16px;
	padding-left: 20upx;
	text-align:left;	
}
.btn_right_tapTwo{
	width: 30%;
	background-color: #EE603F;
	color: #fff;
	border-radius: 0;
	font-weight: bold;
	line-height: 88upx;
	font-size: 16px;	
}
.search_area_box{
  background-color: #fff;
  padding:16upx 30upx 20upx;
	/* height: 92upx; */
  box-sizing: border-box;
 
  }
  .filter_btn{
	  width: 210upx;
	  background-color: #F2F2F2;
	  border-radius: 28upx;
	  color:#333;
	  height: 56upx;
	  display: flex;
	  justify-content: center;
	  align-items: center;
  }
  .filter_btn_select{
  	  width: 210upx;
  	  background-color: #FFECE0;
  	  border-radius: 28upx;
  	  color:#FF6000;
  	  height: 56upx;
  	  display: flex;
  	  justify-content: center;
  	  align-items: center;
  }
</style>