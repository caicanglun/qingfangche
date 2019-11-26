<template>
<view>
<view class="search flex_sb fs_12">
  <view class="flex_c search_input">
    <icon type="search" size="14" style="height:14px;margin-left:40upx;"></icon>
    <input placeholder="搜索" placeholder-style="color:#9B9B9B" confirm-type="search" @confirm="bindSearch"></input>
  </view>
  <!-- <view :class="'box_shadow search_btn ' + (bindSelect?'bind_searach':'')" @tap="tapBindSelect" :style="'height:' + (bindSelect?(selectContent.length-1)*46+56:56) + 'upx'">
    <view class="flex selection ">
      <view>
        <block v-for="(item, index) in selectContent" :key="index">
          <view :class="(index>0?'lh_44':'color_FF6000 font_we_bold')" @tap="bindSelectContent" :data-index="index">{{item.name}}</view>
        </block>
      </view>
      <image src="/static/images/qingfc/application/select_bind.png" mode="aspectFit"></image>
    </view>
  </view> -->
</view>

<block v-for="(item, index) in list" :key="index">
  <view class="box box_shadow flex_c">
    <view class="no_pitch" v-if="index!=optionIndex" @tap="tapPitchOn" :data-index="index"></view>
    <image src="/static/images/jinsy/pitch_on.png" v-if="index==optionIndex" mode="aspectFill" class="pitch_on" @tap="tapPitchOn" :data-index="index"></image>
    <image :src="item.avatar||'/static/images/hand_img.png'" mode="aspectFill" class="list_img"></image>
    <view class="flex_line_sb height_100">
      <view class="flex_sb width_490">
        <view>
          <text class="fs_14 font_we_bold width_200">{{item.realName||''}}</text>
          <text class="fff_50">{{item.regionName || ''}}</text>
        </view>
        <view class="border_text">区域经理</view>
      </view>
      <view>
        <text class="width_200">管理客户{{item.companyCount||0}}人</text>
        <text>管理帮办{{item.deputyCount||0}}人</text>
      </view>
    </view>
  </view>
</block>

<view class="fixed_bottom flex">
  <view class="btn_left" @tap="cancel">取消</view>
  <view class="btn_right" @tap="confirm">确定</view>
</view>
</view>
</template>

<script>
const JsyServer = require("../../../services/jsy-server.js");
let _this,
   _buyOrSell,
    type = 0,
    adding = true;

export default {
  data() {
    return {
      selectContent: [],
      bindSelect: false,
      //是否点开搜素类别
      list: [],
      optionIndex: 0,
	  idList:[]
    };
  },

  onPullDownRefresh: function () {
    this.getManagerList({});
  },
  onLoad: function (options) {
    adding = true;
    _this = this;
    _this.idList = JSON.parse(options.optionList)
	_buyOrSell= JSON.parse(options.buyOrSell)
    console.log("options===",_this.idList)
    // type = options.type || 0;
    this.getManagerList()
	this.getRegionCode()
    
  },
  components: {},
  props: {},
  methods: {
    // 获得区域列表
    getRegionCode:function(){
	  let url = this.Api.getRegion
	  this.myRequest({},url,'get').then(res => {
		 console.log("regionCode",res)
		 _this.selectContent = res.data.data.list
		 _this.selectContent.unshift({id: 0 ,label:'区域'})
		console.log("regionCode===",_this.selectContent)
	   }).catch(err => {
		 console.log("getBSList=err==", res);
	   });   		  
    },
    // 获取区域经理列表
    getManagerList: function (data) {
		
      JsyServer.managerList(data).then(res => {
         console.log("list===",res)
        _this.list = res.data.data.list

        console.log("res---", res);
      }).catch(err => {
        console.log("err---", err);
      });
	
    },
    bindSearch: function (e) {
      let content = e.detail.value;
      let areaid = this.selectContent[0].id;
      let data = {
        content
      };

      if (areaid) {
        data.areaid = areaid;
      }

      this.getManagerList(data);
    },
    // 点击选项框
    tapBindSelect: function () {
      this.setData({
        bindSelect: !this.bindSelect
      });
    },
    // 点击选项框中的选项(客户列表)
    bindSelectContent: function (e) {
      let index = e.currentTarget.dataset.index;
      let selectContent = this.selectContent;
      let obj = selectContent[0];
      selectContent[0] = selectContent[index];
      selectContent[index] = obj;
      this.selectContent = selectContent
 
    },
    tapPitchOn: function (e) {
      let index = e.currentTarget.dataset.index;
      this.setData({
        optionIndex: index
      });
	  console.log(this.list[this.optionIndex])
    },
	 // 分配客户
    confirm: function () {
      let _data= {
      		  companyCodes: this.idList,	//客户编码数组
      		  userCode: this.list[this.optionIndex].userCode,		// 区域经理用户编码
      		  buyOrSell: _buyOrSell    //买卖家
      }
      JsyServer.majordomoAllot(_data).then(res => {
        if (res.data.status == 0){
			    
      			wx.showToast({
      			  title: '分配成功'
      			});
				var pages = getCurrentPages();
				var currPage = pages[pages.length - 1]; //当前页面
				var prevPage = pages[pages.length - 2]; //上一个页面
				//直接调用上一个页面的setData()方法，把数据存到上一个页面中去
				prevPage.setData({
						isDoRefresh:true
				})
      			let timer = setTimeout(() => {
      			  wx.navigateBack({});
      			}, 500);
      		}
       
      }).catch(err => {
        adding = true;
        wx.showToast({
          title: '分配失败',
          icon: 'none'
        });
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
<style>
.search{
  background-color: #FF6000;
  height: 74upx;
  padding: 18upx 20upx 0 30upx;
}
.search_input{
  background-color: #fff;
  width: 100%;
  height: 56upx;
  border-radius: 28upx;
  line-height: 56upx;
}
.search_input>input{
  margin-left: 18upx;
  width: 350upx;
}
.search_btn{
  width: 194upx;
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
  height: 148upx;
}
.selection{
  line-height: 56upx;
}
.search_btn image{
  width: 18upx;
  height: 28upx;
  margin-left: 16upx;
  margin-top: 14upx
}
.lh_44{
  line-height: 44upx;
}
.box{
  background-color: #fff;
  margin: 20upx;
  padding:  10upx 20upx;
  border-radius: 6upx;
  font-size: 12px;
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
.list_img{
  width: 100upx;
  height: 100upx;
  border-radius: 100upx;
  margin-right: 20upx;
}
.height_100{
  height: 100upx;
}
.width_200{
  display: inline-block;
  width: 200upx;
}
.border_text{
  border: 1upx solid #FF6000;
  line-height: 38upx;
  height: 38upx;
  width: 136upx;
  text-align: center;
  box-sizing: 38upx;
  border-radius: 38upx;
  color: #FF6000;
}
.width_490{
  width:490upx;
}
</style>