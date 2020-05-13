<template>
	<view>
		<view class="box">
			     <view class="flex_c list_bold">
			       <view class="line"></view>
			       <view class="font_we_bold fs_15">联系人信息</view>
			     </view>
				<listShow label="姓名" :content="linkmanDetails.realName"></listShow>
				<listShow label="手机号码" :content="linkmanDetails.phone"></listShow>
				<view class="flex_c list_bold">
				  <view class="line"></view>
				  <view class="font_we_bold fs_15">经营者特征</view>
				</view>
				<listShow label="身份" :content="linkmanDetails.identity"></listShow>
				<listShow label="性格特征" :content="character"></listShow>
				<listShow label="经营特征" :content="manager"></listShow>
				<listShow label="价格敏感度" :content="linkmanDetails.priceSensitivity"></listShow>
				<listShow label="性价比思维" :content="linkmanDetails.costPerformance"></listShow>
				<listShow label="渠道状况" :content="linkmanDetails.channelStatus"></listShow>
				<listShow label="发展潜力" :content="linkmanDetails.potential"></listShow>
				<view class="fixed_bottom box_shadow_btn">
				  <button class="btn_left" hover-class="none" @tap="bindCancel" :disabled="deleteAble">删除</button>
				  <button class="btn_right" @tap="bindConfirm" hover-class="none">编辑</button>
				</view>		
		</view>
	</view>
</template>

<script>
	import listShow from "@/components/listShow.vue";
	const JsyServer = require("services/jsy-server.js");
	let _this,_buyOrSellCode,_totalCount
	export default {
		components:{
			listShow
		},
		data() {
			return {
				linkmanDetails:'',
				deleteAble: false,
				character: '',
				manager:''
			};
		},
		onShow:function(){
			// let character = []
			// _this.linkmanDetails.characterFeatures.forEach((item)=>{
			// 	character.push(item.label)
			// })
			// this.character = character.join(',')
			this.getLinkmanDetails()
		},
		onLoad:function(options){
			_this = this
			console.log(options)
			_buyOrSellCode = options.buyOrSellCode
			_totalCount = options.totalCount
			this.getLinkmanDetails()
			
		},
		
		methods:{
			getLinkmanDetails:function(){
				let _data ={
					buyOrSellCode: _buyOrSellCode
				}
				JsyServer.linkmanDetails(_data).then(res => {
				  console.log(res);
				  _this.linkmanDetails = res.data.data
				 
				 //性格特征 和管理特征 ，转化成字符串
				  let character = _this.linkmanDetails.characterFeatures
				  let temp = []
				  character.forEach((item)=>{
					  temp.push(item.label)
				  })
				  _this.character = temp.join(',')
				  
				  character = _this.linkmanDetails.manageFeatures
				  temp = []
				  character.forEach((item)=>{
				  	  temp.push(item.label)
				  })
				  _this.manager = temp.join(',')
				  
				  
				  console.log(temp)
				}).catch(err => {
				  wx.showToast({
				    title: err.data.errMsg,
				    icon: 'none'
				  });
				});
			},
			bindConfirm:function(){
				let contact = JSON.stringify(this.linkmanDetails)
				
				uni.navigateTo({
					url: '/pages/qing-f-c/sellDupty/edit-contact?buyOrSellCode='+ contact,
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
				
			},
			bindCancel:function(){
				    if (_totalCount ==1){
						uni.showToast({
							title: '联系人最少为一个',
							icon: 'none',
							duration: 500,
						});
						return
					}
				    uni.showModal({
				    	title: '删除联系人',
				    	content: '确认要删除该联系人吗？不要请取消',
				    	showCancel: true,
				    	cancelText: '返回',
				    	confirmText: '我要删除',
				    	success: res => {
							if (res.confirm) {
							            let _data ={
							            	buyOrSellCode: _buyOrSellCode
							            }
							            JsyServer.linkmanDel(_data).then(res => {
											console.log("返回信息==",res)
							              if (res.data.status == 0){
							            	 
											var pages = getCurrentPages();
											var currPage = pages[pages.length - 1]; //当前页面
											var prevPage = pages[pages.length - 2]; //上一个页面
											//直接调用上一个页面的setData()方法，把数据存到上一个页面中去
											prevPage.setData({
													isDoRefresh:true
											})
											  uni.navigateBack({
											  	delta: 2
											  });
							              }
							              
							            }).catch(err => {
							              wx.showToast({
							                title: err.data.description,
							                icon: 'none'
							              });
							            });
							        } else if (res.cancel) {
							           return
							        }
							
							
						},
				    	fail: () => {},
				    	complete: () => {}
				    });
				    
				}
			
		}
		
	}
</script>

<style lang="scss">
     .box{
        background-color:#fff; 
        font-size: 14px;
      	margin-bottom: 20upx
      }
	  .list{
	    margin: 0 20upx;
	    padding:0 10upx;
	    border-bottom: 1upx solid rgba(221, 221, 221, 0.3);
	    line-height: 87upx;
	  }
	  .list_bold{
		  margin: 0 20upx;
		  padding:0 10upx;
		  line-height: 87upx;
	  }
	 .btn_left{
	   width: 50%;
	   background-color: #fff;
	   color: #FF6000;
	   border-radius: 0;
	   font-size: 16px;
	   line-height: 88upx;
	 }
	 .btn_right{
	   width: 50%;
	   background-color: #FF6000;
	   color: #fff;
	   border-radius: 0;
	   font-size: 16px;
	   line-height: 88upx;
	 }
	 button::after {
	   border-radius: 0;
	 }
	 .fixed_bottom{
	   width: 750upx;
	   position: fixed;
	   bottom: 0;
	   display: flex;
	   z-index: 999;
	 }
</style>
