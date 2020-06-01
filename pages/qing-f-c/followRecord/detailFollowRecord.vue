<template>
	<view>
		<view class="box-shawn" style="padding-top: 20upx;">
			<view class="content-1 no_border" style="height: 75upx;">
				<view>
					<text style="color:#888890">{{isShow?'客户':'买家'}}</text><text style="padding-left: 30upx;">{{item.companyName ||''}}</text>
				</view>
			</view>
			
			<view class="content-1 no_border" style="height: 75upx;">
				<view>
					<text style="color:#888890">买帮办</text><text style="padding-left: 30upx;">{{item.realName ||''}}</text>
				</view>
			</view>
			<view class="content-1 no_border" style="height: 75upx;">
					<view>
						<text style="color:#999A99">时间</text><text style="padding-left: 30upx;">{{item.createTime ||''}}</text>
					</view>
			</view>
			
		</view>
		<view class="box-shawn" style="margin-top: 20upx;" >
			<view class="content-1" style="justify-content: space-between;">
				<view class="flex_c">
					<view class="line"></view>
					<view style="width: 200upx;font-fize:16px;color:#140F26;font-weight: bold;padding-left: 20upx;">
						潜在订单
					</view>
				</view>
				<view style="color:#ff6000;font-size: 14px;">{{item.recordStatusName ||''}}</view>
			</view>
			
			<view class="content-sb no_border">
					<view class="flex" style="width:100%;">
						<view style="color:#888890;width:180upx;">品名</view>
						<view>{{item.latentTradeName ||''}}</view>
					</view>
					
			</view>
			<view class="content-sb" @tap="toInquiry">
					<view class="flex" style="width:100%;">
						<view style="color:#888890;width:180upx;">关联单</view>
						<view style="color: #4487FD;">{{item.tradeName ||''}}</view>
					</view>
					
			</view>
			<view class="content-sb">
					<view class="flex" style="width:100%;">
						<view style="color:#888890;width:180upx;">数量</view>
						<view>{{item.purchaseQuantity ||''}}{{item.purchaseQuantity>0?'米':''}}</view>
					</view>
			</view>
			<view class="content-sb">
					<view class="flex" style="width:100%;">
						<view style="color:#888890;width:180upx;">跟进预警</view>
						<view>{{item.warningLevelName ||''}}</view>
					</view>
			</view>
			<view class="content-sb">
					<view class="flex" style="width:100%;">
						<view style="color:#888890;width:180upx;">询价单进度</view>
						<view>{{item.inquiryStatusName ||''}}</view>
					</view>
			</view>
			<view class="content-sb">
					<view class="flex" style="width:100%;">
						<view style="color:#888890;width:180upx;">接单概率</view>
						<view>{{item.probability ||''}}{{item.probability>0?'%':''}}</view>
					</view>
			</view>
			
			<view class="content-sb" :style="{'border':isShow ? 'none':''}">
					<view class="flex">
						<view style="color:#888890;width:180upx;">跟进状态</view>
						<view>{{item.recordStatusName ||''}}</view>
					</view>
			</view>
			<view class="content-sb no_border" v-if="item.failCauseName">
					<view class="flex">
						<view style="color:#888890;width:180upx;">丢单理由</view>
						<view>{{item.failCauseName ||''}}</view>
					</view>
			</view>
		</view>
		
		
		
		<view class="box-shawn" style="margin-top: 20upx;">
			<view class="content-1 no_border">
				<view class="flex_c">
					<view class="line"></view>
					<view style="font-fize:16px;color:#140F26;font-weight: bold;padding-left: 20upx;">
						跟进内容
					</view>
				</view>
				
			</view>
			<view class="content-remark no_border">
					<view>
						{{item.remarks ||''}}
					</view>
			</view>
		</view>
		<view class="box-shawn" style="margin-top: 20upx;">
			<view class="content-1 no_border">
				<view class="flex">
					<view class="line"></view>
					<view style="font-fize:16px;color:#140F26;font-weight: bold;padding-left: 20upx;">
						下次计划
					</view>
				</view>
				
			</view>
			<view class="content-1 no_border">
					<view>
						 <text style="color:#888890">提醒时间</text> <text style="padding-left: 30upx;">{{item.nextTime ||''}}</text>     
					</view>
			</view>
			<view class="content-remark no_border">
					<view>
						<text style="color:#888890">计划事项</text><text style="padding-left: 30upx;">{{item.nextRemarks ||''}}</text>
					</view>
			</view>
			
		</view>
		<view v-if="isShowDialogue== 'true'"> 
			<image src="/static/images/jinsy/dialogue/sellDeputy.png" mode="aspectFit" class="er_img_seller"  @tap="toSellDialogue"></image>
			<view class="icon-position flex_c_c" style="bottom: 520upx;right:20upx;" v-if="wigitSell>0">{{wigitSell}}</view>
		</view>
		<view>
			<image src="/static/images/jinsy/dialogue/publicDialogue.png" mode="aspectFit" class="er_img" style="bottom: 330upx;" @tap="toPublicDialogue"></image>
			<view class="icon-position flex_c_c" style="bottom: 390upx;right:20upx;" v-if="wigitPublic>0">{{wigitPublic}}</view>
		</view>
		<view>
			<image src="/static/images/jinsy/dialogue/updateRecord.png" mode="aspectFit" class="er_img" @tap="followSchedule"></image>
		</view>
		<view style="height: 150upx;width:100%;"></view>
		<view class="fixed_bottom box_shadow_btn" v-if="item.operatingAuthorization&&item.recordStatusCode!=98&&item.recordStatusCode!=99">
		   <button class="btn_left" @tap="modifyRecord" hover-class="none">修改</button>
		  <button class="btn_right" @tap="updateRecord" hover-class="none">更新进度</button>
		</view>
	</view>
</template>

<script>
	import uniIcon from "@/components/uni-icons/uni-icons.vue"
	export default {
		components:{
			uniIcon
		},
		
		data() {
			return {
				pupDefault:'',
				selectList:{
					warningLevelList:[],
					recordStatusList:[],
					failCauseList:[]
				},
				recordCode:'',
				item:'',
				isShowDialogue: 'false',
				isShow: true,
				isShowButton:false,
				wigitPublic:0,
				wigitSell:0
			};
		},
		onLoad:function(options){
			this.recordCode = options.recordCode
			
			this.pupDefault = uni.getStorageSync('pupDefault')
		    if(this.pupDefault == "SELL_DEPUTY"){
				this.isShow = false
			}
			// if (this.pupDefault != "BUY_DEPUTY"){
			// 	this.isShowDialogue = true
			// }
			this.fetch()
			this.getShowPrivil()
			this.getWarnLevel()
			this.getRecordStatus()
			this.getFailCause()
			this.getCount()
			
		},
		onShow:function(){
			this.fetch()
			this.getCount()
		},
		methods:{
			async getShowPrivil(){
				const res = await this.$http.get('/latent/show',{})
				console.log(res)
			    this.isShowDialogue  = res.data.data.msg
				console.log(this.isShowDialogue)
			},
			async getCount(){
				const res = await this.$http.get('/latent/message_count',{data:{
					recordCode: this.recordCode
				}})
				console.log(res)
				let countList = res.data.data.list
				countList.forEach((item)=>{
					if (item.buyOrSell == 1){
						this.wigitPublic = item.messageCount
					}
					if (item.buyOrSell == 2){
						this.wigitSell = item.messageCount
					}
					
				})
				console.log(this.wigitPublic)
				console.log(this.wigitSell)
			},
			async getWarnLevel(){
				const res = await this.$http.get('/latent/warning_level',{})
				this.selectList.warningLevelList = res.data.data.list
				console.log(res)
			},
			async getRecordStatus(){
				const res = await this.$http.get('/latent/record_status',{})
				this.selectList.recordStatusList = res.data.data.list
				console.log(res)
			},
			async getFailCause(){
				const res = await this.$http.get('/latent/fail_cause',{})
				this.selectList.failCauseList = res.data.data.list
				console.log(res)
			},
			async fetch(){
				const res = await this.$http.get('/latent/details',{data:{
					recordCode: this.recordCode
				}})
				console.log(res)
				this.item = res.data.data
			},
			
			modifyRecord:function(){
				let detail = JSON.stringify(this.item)
				let selectList = JSON.stringify(this.selectList)
				uni.navigateTo({
					url: `./editFollowRecord?detail=${detail}&selectList=${selectList}`,
					success: res => {},
					fail: (err) => { console.log(err)},
					complete: () => {}
				});
			},
			updateRecord:function(){
				let detail = JSON.stringify(this.item)
				let selectList = JSON.stringify(this.selectList)
				uni.navigateTo({
					url: `./updateFollowRecord?detail=${detail}&selectList=${selectList}`,
					success: res => {},
					fail: (err) => { console.log(err)},
					complete: () => {}
				});
			},
			toPublicDialogue:function(){
				if (this.wigitPublic >0){
					var pages = getCurrentPages();
					var currPage = pages[pages.length - 1]; //当前页面
					var prevPage = pages[pages.length - 2]; //上一个页面
					//直接调用上一个页面的setData()方法，把数据存到上一个页面中去
					prevPage.setData({
					   isDoRefresh:true
					})
				}
				uni.navigateTo({
					url: `./publicDialog?buyOrSell=1&recordCode=${this.item.recordCode}`,
				});
			},
			followSchedule:function(){
				uni.navigateTo({
					url: `./orderFollowSchedule?recordCode=${this.item.recordCode}`,
				});
			},
			toSellDialogue:function(){
				if (this.wigitSell >0){
					var pages = getCurrentPages();
					var currPage = pages[pages.length - 1]; //当前页面
					var prevPage = pages[pages.length - 2]; //上一个页面
					//直接调用上一个页面的setData()方法，把数据存到上一个页面中去
					prevPage.setData({
					   isDoRefresh:true
					})
				}
				uni.navigateTo({
					url: `./publicDialog?buyOrSell=2&recordCode=${this.item.recordCode}`,
				});
			},
            toInquiry:function(){
				let pupDefault = uni.getStorageSync('pupDefault')
				let id = this.item.inquiryNumber
				if(pupDefault == "BUY_DEPUTY"){
					if (this.item.inquiryTypeCode ==1){
						uni.navigateTo({
							url: `/pages/qing-f-c/inquiryManage/inquiry-details?inquiryNumber=#{id}`,
							
						});
					}else {
						uni.navigateTo({
							url: `/pages/qing-f-c/inquiryManage/sampleInquiry/buyDeputy/inquiry-details?inquiryNumber=${id}`,
						})
					}
				}else if (pupDefault == "SELL_DEPUTY"){
					if (this.item.inquiryTypeCode ==1){
						uni.navigateTo({
							url: '/pages/qing-f-c/inquiryManage/sellDeputy/inquiry-details?inquiryNumber='+ id,
						});
					}else {
						uni.navigateTo({
							url: '/pages/qing-f-c/inquiryManage/sampleInquiry/sellDeputy/inquiry-details?inquiryNumber='+ id
						})
					}
				}else if (pupDefault == "SALES_DIRECTOR"){
					if (this.item.inquiryTypeCode == 1){
						uni.navigateTo({
							url: '/pages/qing-f-c/inquiryManage/sales_director/inquiry-details?inquiryNumber='+ id,
							success: res => {},
							fail: () => {},
							complete: () => {}
						});
					}else {
						uni.navigateTo({
							url: '/pages/qing-f-c/inquiryManage/sampleInquiry/sales_director/inquiry-details?inquiryNumber='+ id,
							success: res => {},
							fail: (err) => {console.log(err)},
							complete: () => {}
						});
					}
				}else {
					uni.showToast({
						title: '身份不允许',
						icon: 'none'
					});
				}
			},
			async submit(){
				
			}
		}
	}
</script>

<style lang="scss">
  page{
	  background: #F4F4F4;
  } 
 
  .box-shawn{
      	 padding: 0upx 30upx;
      	 background: #FFFFFF;
      }
  .content-1{
  	color: #333236;
  	font-size: 15px;
  	display: flex;
  	align-items: center;
  	//justify-content: space-between;
  	height: 85upx;
  	border-bottom: 1upx solid rgba(237,237,237,1);
  	.label{
  		width: 175upx;
  	}
  	.items{
  		width: 505upx;
  	}
  	.items-1{
  		width: 505upx;
  		display: flex;
  		justify-content: space-between;
  	}
  }
  .content-sb{
  	color: #333236;
  	font-size: 15px;
  	display: flex;
  	align-items: center;
  	// justify-content: space-between;
  	height: 85upx;
  	border-bottom: 1upx solid rgba(237,237,237,1);
  	.label{
  		width: 175upx;
  	}
  	.items{
  		width: 505upx;
  	}
  	.items-1{
  		width: 505upx;
  		display: flex;
  		justify-content: space-between;
  	}
  }
  .no_border{
  	  border: none;
  }
  .line{
	  width: 4upx;
	  height: 30upx;
	  background: #FF6000;
  }
  .fixed_bottom{
    width: 100%;
    position: fixed;
    bottom: 0;
    display: flex;
    z-index: 999;
  }
  .btn_left{
    width: 50%;
    background-color: #fff;
    color: #FF6000;
    border-radius: 0;
    font-size: 16px;
    line-height: 98upx;
  }
  .btn_right{
    width: 50%;
    background-color: #FF6000;
    color: #fff;
    border-radius: 0;
    font-size: 16px;
    line-height: 98upx;
  }
  .content-remark{
  	color: #333236;
  	font-size: 15px;
  	display: flex;
  	align-items: center;
  	line-height: 40px;
  	//justify-content: space-between;
  	// height: 70upx;
  	border-bottom: 1upx solid rgba(237,237,237,1);
  	.label{
  		width: 175upx;
  	}
  	.items{
  		width: 505upx;
  	}
  	.items-1{
  		width: 505upx;
  		display: flex;
  		justify-content: space-between;
  	}
  }
  
  .er_img{
    position: fixed;
    bottom: 200upx;
    right: 24upx;
    width: 84upx;
    height: 84upx;
  } 
  .er_img_seller{
    position: fixed;
    bottom: 460upx;
    right: 24upx;
    width: 84upx;
    height: 84upx;
  }
  .icon-position{
  	font-size: 13px;
	position: fixed;
	background-color: #ff0000;
	color: #ffffff;
	line-height: 40upx;
	width: 40upx;
	height: 40upx;
	border-radius: 50%;
	z-index: 999;
 //    right: 50upx;
	// top: 20upx;
     }
</style>
