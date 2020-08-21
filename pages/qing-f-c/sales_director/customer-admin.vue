<template>
<view>
    <view style="position: fixed;top:0;z-index: 99;width: 100%;">
		<view class="search_top_box">
			  <view class="flex_sb height_56">
				<view class="flex_c search_left " style="width:100%">
				  <icon type="search" size="14" style="height:14px;margin-left:40upx;"></icon>
				  <input class="search_left_input" v-model="inputValueOne" placeholder="请输入搜索内容" 
				  @input="blurInput" confirm-type="search" @confirm="tapSearch"></input>
				</view>
			  </view>
			</view>
		
			<view class="box_shadow" >
			  <view class="flex_sa tab_list" v-show="showAllocation">
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
				  <dropMenuRegion @selected="tapRegion"></dropMenuRegion>
				  <dropMenuDeputy ref="refDeputy" @selected="tapSelectDeputy"></dropMenuDeputy>
				  <dropMenuLevel @selected="tapSelectLevel"></dropMenuLevel>
				</view>
			  </view>
		   </view> 
		   
		  <view class="flex_c_c" style="height: 80upx;color: #333333;background: #F2F2F2;font-size: 15px;">共{{totalCount ||0}}个客户</view>
	</view>
	
  <view :style="{'margin-top': (showAllocation?'360upx':'250upx')}">
   
   <block v-for="(item, index) in customerList" :key="index" v-if="!compileing">
    <view class="list flex_c box_shadow" @click.stop="toClientDetail(item.companyCode)" :data-id="item.id" :data-index="index">
      
      <view :class="(compileing?'wid_610':'wid_670')">
        <view class="flex_sb">
			   <view class="flex">
				 <image src="/static/images/qingfc/application/companyx.png" class="title_img" mode="aspectFit"></image>
				 <view style="font-size: 16px;font-weight: bold;">{{item.companyName||''}}</view>
			   </view>
			   
				<view :class="(item.buyOrSell==1?'id_btn':'seller_btn')">{{item.buyOrSell==1?'买家':'卖家'}}</view>
         </view>
        
        <view class="flex" style="margin-top: 10upx;">
			  <view class="flex_c">
					  <image src="/static/images/qingfc/application/gengduo-3@2x.png" class="title_img" mode="aspectFit"></image>
					  <view class="fs_14 ">{{ item.companyLevelName||'' }}</view>
			  </view>
			  <view class="flex_c" style="padding-left: 30upx;">
				  <image src="/static/images/qingfc/application/organize.png" class="title_img" mode="aspectFit"></image>
				  <view class="fs_14 ">所属帮办: {{ item.realName||'' }}</view>
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
			      <view class="flex_sb">
					   <view class="flex">
						 <image src="/static/images/qingfc/application/companyx.png" class="title_img" mode="aspectFit"></image>
						 <view style="font-size: 16px;font-weight: bold;">{{item.companyName||''}}</view>
					   </view>
					   
						<view :class="(item.buyOrSell==1?'id_btn':'seller_btn')">{{item.buyOrSell==1?'买家':'卖家'}}</view>
			       </view>
			      
			      <view class="flex" style="margin-top: 10upx;">
					  <view class="flex_c">
							  <image src="/static/images/qingfc/application/gengduo-3@2x.png" class="title_img" mode="aspectFit"></image>
							  <view class="fs_14 ">{{ item.companyLevelName||'' }}</view>
					  </view>
					  <view class="flex_c" style="padding-left: 30upx;">
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
  <uniLoadMore :status="loadingType"></uniLoadMore>
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
import dropMenuRegion from "@/components/dropMenuRegion.vue";
import dropMenuDeputy from "@/components/dropMenuDeputy.vue";
import dropMenuLevel from "@/components/dropMenuLevel.vue";
import uniIcon from "@/components/uni-icons/uni-icons.vue";
import uniLoadMore from "@/components/uni-load-more/uni-load-more.vue";
import msDropdownMenu from '@/components/ms-dropdown/dropdown-menu.vue'
import msDropdownItem from '@/components/ms-dropdown/dropdown-item.vue'
let pageSize = 20
let _this,_postCode,_regionCode,timer
const JsyServer = require("@/services/jsy-server.js");

export default {
	components:{
		uniIcon,
		uniLoadMore,
		msDropdownMenu,
		msDropdownItem,
		dropMenuRegion,
		dropMenuDeputy,
		dropMenuLevel
	},
    data() {
    return {
	  showAllocation: false,
      regionList:[],
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
	  loadingType:'more',
      loading: false,
      numOne: 0,
      numTwo: 0,
      numThree: 0,
	  customerList: [],
	  isFilterBuyer:false,
	  isFilterSeller: false,
	  pageNum: 1,   //当前页
	  buyOrSell: -1,   //-1全部，1买家，2卖家
	  isAllocation: -1,   //-1全部，1已分配，0未分配
	  isLastPage: false   ,//是否最后一页面
	  codeValue:[],
	  isDoRefresh:false,
	  totalPage:'',
	  userCode:'',
	  privateLevel:'',
	  companyLevel:'',
	  regionCode:'',
	  postCode:'',
	  totalCount:''
    };
  },

  onReachBottom: function () {
    if (timer != null) {
               clearTimeout(timer);
           }
      timer = setTimeout(function() {
           _this.getMoreCustomer();
       }, 1000);
    
     

   },
   onPullDownRefresh: function () {
	   _this.getCustomerList();
	      
   },
   onShow: function () {
	   
      let pages = getCurrentPages();
      let currPage = pages[pages.length-1];
      if (currPage.data.isDoRefresh == true){
		   currPage.data.isDoRefresh = false;
		   this.pageNum =1
		   this.getCustomerList();
		   this.dmCount()
     	 }
	this.getCustomerList();
   },
   onLoad: function (options) {
     _this = this;
	 this.postCode = uni.getStorageSync('pupDefault')
	 // this.regionCode = this.$store.state.regionCode
	 this.getRegionCode()
  	if (this.checkLogin()){
		this.getCustomerList()
		//this.getRegionCode()
		//this.dmCount()
  	    //获取职位
  	
  	}
   },
  onNavigationBarButtonTap:function(val){
	  // if (this.tabTwo>0) {
		 // this.tapCompile() 
	  // }
	  this.tapCompile() 
	    
  },
  components: {},
  props: {},
  methods: {
	  async getRegionCode(){

	  		  const res = await this.$http.get('/cm/region_deputy')
	  		  this.regionList = res.data.data.list
			  // this.tapRegion(this.regionCode)
	  		  console.log(res)
	  },
	  tapRegion:function(e){
		  console.log(e)
		  this.regionCode = e
		  this.regionList.forEach((item,index)=>{
			  if (item.regionCode == e){
				  console.log('wfef')
				  this.$refs.refDeputy.selectContent = this.regionList[index].list
				  if (this.regionList[index].list.length>6){
					  this.$refs.refDeputy.index = 2
				  }else {
					  this.$refs.refDeputy.index = 1
				  }
			  }
		  })
		  this.pageNum =1
		  this.loadingType = 'more'
		  this.getCustomerList()
		  
		  
	  },
	  tapSelectLevel:function(e){
		 console.log(e) 
		 this.companyLevel = e
		 this.pageNum =1
		 this.loadingType = 'more'
		 this.getCustomerList()
	  },
	  tapSelectDeputy:function(e){
		  console.log(e)
		  this.userCode = e
		  this.pageNum =1
		  this.loadingType = 'more'
		  this.getCustomerList()
	  },
	  async getMoreCustomer(){
	  		 
	  	    if (_this.loadingType !== 'more') {//loadingType!='more';直接返回
	  	    	return false;
	  	    }
	  		_this.loadingType = 'loading';
	  		uni.showNavigationBarLoading();//显示加载动画
	  
	  	    let _data= {
	  			keyword: _this.inputValueOne,		//搜索关键字
	  			regionCode: _this.regionCode,	//区域编码，空为全部区域
	  			// buyOrSell: _this.buyOrSell,			//-1全部，0未知，1买家，2卖家
	  			isAllocation: _this.isAllocation,		//-1全部，1已分配，0未分配
	  			pageNum: _this.pageNum,			  //当前页
	  			pageSize: pageSize,               // 页面大小
	  			postCode: this.postCode ,
				userCode: this.userCode,          //用户编码&
				companyLevel: this.companyLevel,  //客户等级&
				privateLevel: this.privateLevel,   //私有等级&

				
	  		}
	  	    const res = await this.$http.get('/cm/list',{data: _data})
	  		 if (res.data.data.list.length == 0) {//没有数据
	  		      console.log("no data")
	  		  	_this.loadingType = '';
	  		  	uni.hideNavigationBarLoading();//关闭加载动画
	  		  	return;
	  		 }
	  		  _this.pageNum++;//每触底一次 page +1
	  	     console.log(res)
	  	     _this.customerList = _this.customerList.concat(res.data.data.list)
	  		_this.loadingType = 'more';//将loadingType归0重置
	  		uni.hideNavigationBarLoading();//关闭加载动画
	  		
	  	   
	  },
	  async getCustomerList(){
		  _this.pageNum = 1
		  _this.loadingType = 'more';
		  uni.showNavigationBarLoading();
			let _data={
			 	keyword: _this.inputValueOne,		//搜索关键字
			 	regionCode: _this.regionCode,	//区域编码，空为全部区域
			 	// buyOrSell: _this.buyOrSell,			//-1全部，0未知，1买家，2卖家
			 	isAllocation: _this.isAllocation,		//-1全部，1已分配，0未分配
			 	pageNum: _this.pageNum,			  //当前页
			 	pageSize: pageSize,               // 页面大小
			 	postCode: this.postCode ,
			 	userCode: this.userCode,          //用户编码&
			 	companyLevel: this.companyLevel,  //客户等级&
			 	privateLevel: this.privateLevel,   //私有等级&
			 	
			 }
		    console.log('客户请求参数',_data)
	        const res = await this.$http.get('/cm/list',{data: _data})
			
			console.log("客户信息===",res)
		     _this.pageNum++;//每触底一次 page +1
		     _this.customerList = res.data.data.list
			 this.totalCount = res.data.data.totalCount
			_this.isLastPage = res.data.data.isLastPage
			_this.totalPage = res.data.data.totalPage
				
			 
			 let __data={
				  keyword:_this.inputValueOne,		//关键词
				  regionCode: this.regionCode,   //区域编码
				  buyOrSell: _this.buyOrSell,  //买卖家
				  postCode: this.postCode
			  }
			 JsyServer.dmCount(__data).then(res => {
			    console.log("客户数量===",res)
			            _this.numOne = res.data.data.all
			 			_this.numTwo = res.data.data.isAllocation
			 			_this.numThree = res.data.data.notAllocation
			  }).catch(err => {
			    console.log("getBSList=err==", res);
			  }); 
			  _this.loadingType = 'more';//将loadingType归0重置
			  uni.hideNavigationBarLoading();//关闭加载动画
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
      console.log(this.inputValueOne, e.detail.value);
      
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
   
    // 点击搜索
    tapSearch: function () {
      
      uni.showLoading({
        title: '搜索中...'
      });
	  this.pageNum = 1
	  this.isAllocation = -1
	  this.buyOrSell = -1
      this.getCustomerList();
	  
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
      this.tabTwo = index;
	  console.log(index);
	  if (index == 0){
		  //this.customerList = this.orginalList
		  // this.setNavButton("")
		  this.isAllocation = -1
		  this.compileing = false
		  this.pageNum =1
		  
		  
	  }
      if (index==1){
		 this.setNavButton("编辑") 
		 //重新请求已分配客户列表
		 this.isAllocation = 1
		 this.compileing = true
		 this.pageNum = 1
		
	  }
	  if(index==2){
		  //重新请求未分配客户列表
		this.setNavButton("编辑") 
		this.isAllocation = 0
		this.compileing = true
		this.pageNum = 1
		console.log("分配状态：",this.isAllocation)
		
	  }
	  this.getCustomerList()
    },
    // 点击编辑
    tapCompile: function () {
      // this.compileing = !this.compileing;
	  this.showAllocation = !this.showAllocation
	  // if (this.compileing){
	  // 		  this.setNavButton('完成')
	  // }else {
	  // 		  this.setNavButton('编辑')
	  // }
	   // this.setNavButton('编辑')
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
          url: '/pages/qing-f-c/regionalManager/deputy-list?optionList=' + optionList+ '&buyOrSell=' + _temp[0] 
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
			content: '确认要移除该分配吗？不要请返回',
			showCancel: true,
			cancelText: '返回',
			confirmText: '我要移除',
			success: res => {
				if (res.confirm) {
				         let optionList = _this.codeValue
				         let _data={
				         	companyCodes:optionList
				         }
				         let url = this.Api.managerDel
				         this.myRequest(_data,url,'post').then(res => {
				         	console.log("区域经理删除分配",res)
				         	if (res.data.status == 0){  
				         			wx.showToast({
				         			  title: '成功删除分配'
				         			});
				         			this.getCustomerList(this.pageNum,this.isAllocation)
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
		  url: './customer-details?companyCode=' + e
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
	page{
		background: #F2F2F2;
	}
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
  height: 60upx;
  width: 2upx;
  background-color: #D3D3D3;
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
		border: 2upx solid #FF6000;
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