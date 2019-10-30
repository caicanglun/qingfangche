<template>
<view>
  
	<view class="search_top_box">
	  <view class="flex_sb height_56">
		<view class="flex_c search_left " style="width:100%">
		  <icon type="search" size="14" style="height:14px;margin-left:40upx;"></icon>
		  <input class="search_left_input" v-model="inputValueOne" placeholder="请输入搜索内容" 
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
				  <view :class="'fs_14 ' + (index>0?'lh_62':'color_FF6000')" @tap="bindSelectContent" 
				  :data-index="index">{{item.label}}</view>
				</block>
			  </view>
			  <!-- <image src="/static/images/qingfc/application/select_bind.png" mode="aspectFit"></image> -->
			  <uniIcon type='arrowdown' size='20' color='#FF6000' v-if='!bindSelect'></uniIcon>
			  <uniIcon type='arrowup' size='20' color='#FF6000' v-if='bindSelect'></uniIcon>
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
    <view class="list flex_c box_shadow" @click.stop="toClientDetail(item.companyCode)" :data-id="item.id" :data-index="index">
      
      <view :class="(compileing?'wid_610':'wid_670')">
        <view class="flex_sb mt_10">
          <view class="flex">
            <image src="/static/images/qingfc/application/companyx.png" class="title_img" mode="aspectFit"></image>
            <view class="fs_16 font_we_bold wid_510">{{item.companyName||''}}</view>
          </view>
          <view :class="(item.buyOrSell==1?'id_btn':'seller_btn')">{{item.buyOrSell==1?'买家':'卖家'}}</view>
        </view>
        <view class="flex_c mt_20">
          <image src="/static/images/qingfc/application/list.png" class="title_img" mode="aspectFit"></image>
          <view class="fs_14 ">
            <text class="mr_60">{{item.regionName||''}}</text>
            <text class="mr_60">{{item.companyTypeName||''}}</text>
            <text>{{item.linkmanCount||0}}个联系人</text>
          </view>
        </view>
        <view class="flex_c mt_20">
			  <image src="/static/images/qingfc/application/contacts.png" class="title_img" mode="aspectFit"></image>
			  <view class="fs_14">{{item.deputyRealName||''}} {{item.deputyPhone||""}}</view>
        </view>
		<view class="flex_sb mt_20">
		  <view class="flex">
			  <image src="/static/images/qingfc/application/organize.png" class="title_img" mode="aspectFit"></image>
			  <view class="fs_14 ">所属帮办: {{ item.deputyRealName||'' }}</view>
		  </view>
		  <view v-if="tabTwo==0">
				  <image src="/static/images/qingfc/application/exit2x.png" class="title_img" mode="aspectFit" @click.stop='delSingleAllo(item.companyCode)'></image>
				  <image src="/static/images/qingfc/application/swap2x.png" class="title_img" mode="aspectFit" @click.stop='toSingleAllo(item.companyCode)'></image>
		  </view>
		</view>
		
      </view>
    </view>
  </block>

  <checkbox-group @change="checkboxChange" v-if="compileing&&tabTwo>0">
  	<label v-for="item in customerList" :key="item.companyCode"> 
  	<view class="flex">
  		<view class="checkboxSty"> 
  				<checkbox :value="item.companyCode" :checked="(allPitchOn?true:item.isChecked)"/> 
  		</view>
  		<view >
			
			 <view class="list flex_c box_shadow" >
			   
			    <view :class="(compileing?'wid_610':'wid_670')" >
			      <view class="flex_sb mt_10">
			        <view class="flex">
			          <image src="/static/images/qingfc/application/companyx.png" class="title_img" mode="aspectFit"></image>
			          <view class="fs_16 font_we_bold wid_510">{{item.companyName||''}}</view>
			        </view>
			        <view :class="(item.buyOrSell==1?'id_btn':'seller_btn')">{{item.buyOrSell==1?'买家':'卖家'}}</view>
			      </view>
			      <view class="flex_c mt_20">
			        <image src="/static/images/qingfc/application/list.png" class="title_img" mode="aspectFit"></image>
			        <view class="fs_14 ">
			          <text class="mr_60">{{item.regionName||''}}</text>
			          <text class="mr_60">{{item.companyTypeName||''}}</text>
			          <text>{{item.linkmanCount||0}}个联系人</text>
			        </view>
			      </view>
			      <view class="flex_c mt_20">
						  <image src="/static/images/qingfc/application/contacts.png" class="title_img" mode="aspectFit"></image>
						  <view class="fs_14">{{item.deputyRealName||''}} {{item.deputyPhone||""}}</view>
			      </view>
					<view class="flex_sb mt_20">
					  <view class="flex">
						  <image src="/static/images/qingfc/application/organize.png" class="title_img" mode="aspectFit"></image>
						  <view class="fs_14 ">所属帮办: {{ item.deputyRealName||'' }}</view>
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
  <view class="btn_right_tapTwo" v-if="tabTwo==2" @tap="toAllotAreaManager">去分配</view>
</view>
<view class="height_100" v-if="compileing"></view>



</view>
</template>

<script>
import uniIcon from "@/components/uni-icons/uni-icons.vue";
let pageSize = 20
let _this,_postCode
 const JsyServer = require("@/services/jsy-server.js");
export default {
	components:{
		uniIcon
	},
  data() {
    return {
   
      tabTwo: 0,
      compileing:false,
      allPitchOn: false,
      //是否全部选中
      inputValueOne: '',
      setOver: false,
      //返回该页是否刷新
      selectContent: [],
      bindSelect: false,
      //是否点开搜素类别
      loading: false,
      numOne: 0,
      numTwo: 0,
      numThree: 0,
	  customerList: [],
	  isFilterBuyer:false,
	  isFilterSeller: false,
	  pageNum: 1,   //当前页
	  buyOrSell: -1,   //0全部，1买家，2卖家
	  isAllocation: -1,   //-1全部，1已分配，0未分配
	  isLastPage: false   ,//是否最后一页面
	  codeValue:[],
	  isDoRefresh:false
	  
    };
  },

  onReachBottom: function () {

     if (!this.isLastPage){
	   this.pageNum = this.pageNum + 1
	   
	   this.getCustomerList(this.pageNum,this.isAllocation)
      }

   },
   onPullDownRefresh: function () {
  	 this.pageNum =1
     this.getCustomerList(this.pageNum,this.isAllocation); 
   },
   onShow: function () {
	   
      let pages = getCurrentPages();
      let currPage = pages[pages.length-1];
      if (currPage.data.isDoRefresh == true){
		   currPage.data.isDoRefresh = false;
		   this.pageNum =1
		   this.getCustomerList(this.pageNum,this.isAllocation);
		   
     	 }
   },
   onLoad: function (options) {
     _this = this;
	 _postCode = uni.getStorageSync('pupDefault')
     //let userInfo = wx.getStorageSync("userInfo");
  	if (this.checkLogin()){
		this.getCustomerList(this.pageNum,this.isAllocation)
		this.getRegionCode()
		
  	    //获取职位
  	
  	}
   },
  onNavigationBarButtonTap:function(val){
	  if (this.tabTwo>0) {
		 this.tapCompile() 
	  }
	  
	    
  },
 

  methods: {
	  getRegionCode:function(){
		  let url = this.Api.getRegion
		  this.myRequest({},url,'get').then(res => {
			 console.log("regionCode",res)
		     _this.selectContent = res.data.data.list
			 _this.selectContent.unshift({id: 0 ,label:'全部区域'})
		  	console.log("regionCode===",_this.selectContent)
		  	
		   }).catch(err => {
		     console.log("getBSList=err==", res);
		   });  
		  
		  
	  },
	  getCustomerList:function(pageNum=1,isAllocation=-1,buyOrSell=-1,regionCode='',keyword=''){
			let _data={
			 	keyword:keyword,		//搜索关键字
			 	regionCode: regionCode,	//区域编码，空为全部区域
			 	buyOrSell: buyOrSell,			//-1全部，0未知，1买家，2卖家
			 	isAllocation: isAllocation,		//是否已分配买/卖帮办。-1全部，1已分配，0未分配
			 	pageNum: pageNum,			//当前页
			 	pageSize: pageSize,             // 页面大小
			 	postCode: _postCode             //职位
			 }
		    console.log(_data)
	    
			JsyServer.dmList(_data).then(res => {
			   console.log("客户信息===",res)
			   _this.customerList = res.data.data.list
				console.log("customerlist===",_this.customerList)
				_this.isLastPage = res.data.data.isLastPage
				console.log("最后一页",_this.isLastPage)
			 }).catch(err => {
			   console.log("getBSList=err==", res);
			 }); 
			  
			  let __data={
				  keyword:keyword,		//关键词
				  regionCode:regionCode,   //区域编码
				  buyOrSell: buyOrSell,  //买卖家
				  postCode: _postCode
			   }
			  JsyServer.dmCount(__data).then(res => {
			     console.log("客户数量===",res)
			     _this.numOne = res.data.data.all
				_this.numTwo = res.data.data.isAllocation
				_this.numThree = res.data.data.notAllocation
			   }).catch(err => {
			     console.log("getBSList=err==", res);
			   }); 
	  },
	  
	  
	  checkboxChange: function (e) {
			
			this.codeValue = e.detail.value
			
						
	  },
	  tabAllPitchOn:function(){
		  this.allPitchOn = !this.allPitchOn;
		  console.log('quanxuankuang',this.allPitchOn)
		  let temp = []
		  if (this.allPitchOn){
			 
			 this.customerList.forEach((item)=>{
			 			  temp.push(item.companyCode)
			 })
			 _this.codeValue = temp 
		  }else {
			  _this.codeValue=[]
		  }
		  
		 
		  
		  
		  
	  },
    blurInput: function (e) {
      console.log(this.tabOne, e.detail.value);

  //     if (this.tabOne == 0) {
  //       // this.setData({
  //       //   inputValueOne: e.detail.value
  //       // });
		// this.inputValue = e.detail.value
  //     } else {
  //       this.inputValue = e.detail.value
  //     }
    },
	tapBuyFilter:function(e){
		this.buyOrSell = 1
		this.isFilterBuyer = true
		this.isFilterSeller = false
		let regionCode 
		if(this.selectContent[0].id == 0){
			regionCode = ''
		}else {
			regionCode = this.selectContent[0].id
		}
		this.getCustomerList(this.pageNum,this.isAllocation,this.buyOrSell,regionCode)
		
		
	},
	tapSellFilter:function(){
		this.buyOrSell = 2
		this.isFilterBuyer = false
		this.isFilterSeller = true
		let regionCode
		if(this.selectContent[0].id == 0){
			regionCode = ''
		}else {
			regionCode = this.selectContent[0].id
		}
		this.getCustomerList(this.pageNum,this.isAllocation,this.buyOrSell,regionCode)
	},
    bindSearch: function (e) {
    
      // this.setData({
      //   inputValue: e.detail.value
      // });
     
    },
    // 点开搜索下拉选项
    bindSelectFunc: function () {
      // this.setData({
      //    bindSelect: !this.bindSelect
      // });
	  this.bindSelect = !this.bindSelect
    },
    // 点击选项
    bindSelectContent: function (e) {
      let index = e.currentTarget.dataset.index;
      let selectContent = this.selectContent;
      let obj = selectContent[0];
      selectContent[0] = selectContent[index];
      selectContent[index] = obj;
	  if (this.selectContent[0].id == 0){
		  this.getCustomerList(this.pageNum,this.isAllocation,this.buyOrSell)
	  }else{
		  this.getCustomerList(this.pageNum,this.isAllocation,this.buyOrSell,this.selectContent[0].id)
	  }
	  
	  
      
	 
	  
     
    },
    // 点击搜索
    tapSearch: function () {
      
      uni.showLoading({
        title: '搜索中...'
      });
	  let pageNum=1,
	     isAllocation=-1,
	     buyOrSell=-1,
	     regionCode=''
      this.getCustomerList(pageNum,isAllocation,buyOrSell,regionCode,this.inputValueOne);
      setTimeout(function() {
      		  uni.hideLoading();
      }, 1000);
	  
	  
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
	  //重新请求已分配客户列表
      this.isAllocation = 1 
      this.tabTwo = index;
	  console.log(index);
	  if (index == 0){
		  //this.customerList = this.orginalList
		  this.setNavButton("")
		  this.isAllocation = -1
		  this.compileing = false
		  this.getCustomerList()
	  }
      if (index==1){
		 this.setNavButton("编辑") 
		 //重新请求已分配客户列表
		 this.isAllocation = 1
		 this.pageNum = 1
		this.getCustomerList(this.pageNum,this.isAllocation)
	  }
	  if(index==2){
		  //重新请求未分配客户列表
		 this.setNavButton("编辑")
		this.isAllocation = 0
		this.pageNum = 1
		console.log("分配状态：",this.isAllocation)
		this.getCustomerList(this.pageNum,this.isAllocation)
	  }
	  
    },
    // 点击编辑
    tapCompile: function () {
      this.compileing = !this.compileing;
	  if (this.compileing){
		  this.setNavButton('完成')
	  }else {
		  this.setNavButton('编辑')
	  }
    },
    // 点击全部
    
    
       
    //设置当前时间
    setTime: function () {
      let newDate = new Date();
      let month = newDate.getMonth() + 1;
      month = month < 10 ? "0" + month : month;
      let newTime = newDate.getFullYear() + '-' + month + '-' + newDate.getDate();
      // this.setData({
      //   newTime: newTime
      // });
	  this.newTime = newTime
    },
   
    toSingleAllo:function(companyCode){
		_this.codeValue = []
		_this.codeValue.push(companyCode)
		this.toAllotAreaManager()
	},
	delSingleAllo:function(companyCode){
		_this.codeValue = []
		_this.codeValue.push(companyCode)
		this.deleteAllot()
	},
    // 跳转到选中区域经理页
    toAllotAreaManager: function () {
      
	  
      let optionList = _this.codeValue
	  let _temp = []
	  _this.codeValue.forEach((s)=>{
		  this.customerList.forEach((item)=>{
		  		  if (item.companyCode == s){
					  _temp.push(item.buyOrSell)
				  }
		  })
	  })
	  
	  if (_temp.includes(1) && _temp.includes(2)){
		  uni.showToast({
		  	title: '不能同时选择买家和卖家',
			icon: 'none'
		  });
		  return
	  }
	  
	  let buyOrSell = optionList
      console.log("optionList===",optionList.length)
      if (optionList.length > 0) {
        optionList = JSON.stringify(optionList);
        uni.navigateTo({
          url: '/pages/qing-f-c/sales_director/manager-list?optionList=' + optionList+ '&buyOrSell=' + _temp[0] 
		  // url: '/pages/qing-f-c/sales_director/deputy-list?optionList=' + optionList + '&type=1'
        });
      } else {
        uni.showToast({
          title: '至少选择一个客户',
          icon: 'none'
        });
      }
    },
   
    deleteAllot:function(){
		uni.showModal({
			title: '移除分配',
			content: '确认要移除该客户分配吗？不要请返回',
			showCancel: true,
			cancelText: '返回',
			confirmText: '我要移除',
			success: res => {
				if (res.confirm) {
				        let optionList = _this.codeValue
				        let _data={
				        	companyCodes:optionList
				        }
				        let url = this.Api.majordomoDel
				        this.myRequest(_data,url,'post').then(res => {
				        	if (res.data.status == 0){  
				        			wx.showToast({
				        			  title: '成功删除分配'
				        			});
				        			if (this.selectContent[0].id == 0){
				        				this.getCustomerList(this.pageNum,this.isAllocation,this.buyOrSell)
				        			}else{
				        				this.getCustomerList(this.pageNum,this.isAllocation,this.buyOrSell,this.selectContent[0].id)
				        			}
	
				        		}		 
	
				         }).catch(err => {
				           console.log("getBSList=err==", res);
				         });  
				        } else if (res.cancel) {
				           return
				        }
	
			},
			fail: () => {},
			complete: () => {}
		});
		
		
		
	},
    
   
    // 跳转到客户详情页
    toClientDetail: function (e) {
      
		console.log(e)
		wx.navigateTo({
		  url: '/pages/qing-f-c/sales_director/customer-details?companyCode=' + e
		});
      
    },
    
    // 重置时间
    // bindReset: function () {
    //   this.setData({
    //     startDate: "",
    //     endDate: "",
    //     inputValue: ''
    //   });
    //   recordPage = 1;
    //   this.getRecordList();
    // },
 
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
  color: #FF6000;
  font-weight: bold;
}
.line{
  height: 48upx;
  width: 1upx;
  background-color: #E5E5E5;
  margin-top: 20upx;
}
.tab_text{
  display: inline-block;
  padding: 24upx 0;
}
.text_on{
  border-bottom: 4upx solid #FF6000;
}
.tab_bj{
  font-size: 24upx;
  color: #FF6000;
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
  background-color: #FF6000;
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
  background-color: #FF6000;
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
  /* background-color: #F2F2F2; */
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
  height: 300upx;
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
	color: #FF6000;
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
		border: none;
	}
.checkboxSty {
		display: flex;
		align-items: center;
		padding-left:15upx;
	}
.btn_right_director{
		width: 20%;
		background-color: #FF6000;
		color: #fff;
		border-radius: 0;
		font-weight: bold;
		line-height: 88upx;
		font-size: 16px;
		
	}
.btn_right_director_1{
		width: 40%;
		background-color: #FF6000;
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
	background-color: #FF6000;
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