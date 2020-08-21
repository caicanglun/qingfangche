<template>
	<view>
		
		<block v-for="(item,index) in list" :key="index" v-if="list.length>0">
			<view class="messageWrap" :id="`msg-${item.messageCode}`" @tap="toInquiryDetail(item.relevanceCode,item.relevanceTarget)">
				<view style="color:#999;text-align: center;font-size:11px;">{{item.createTime.split(' ')[0]}}</view>
				<view class="messageTitle" v-if="!item.my">
					<view>{{item.realName}}</view>
					<view class="flex_c_c postCode" :style="{'background': item.postCode=='SELL_DEPUTY'?'#4484FF':''}">{{item.postName}}</view>
				</view>
				<view class="myTitle" v-if="item.my">我</view>
				<view class="flex" :style="{'justify-content': item.my?'flex-end':''}">
					<view :class="item.my?'my':'messageContent'">
						<block v-for="(subItem,subIndex) in item.contentList" :key="subIndex">
							<view :style="{'color': subItem.link?'#4487FD':''}" v-if="item.messageType == 0"><text  selectable="true">{{subItem.content}}</text></view>
			               
							
							<view v-if="item.messageType == 1">
								
                                 <block v-for="(num,index1) in subItem.content" :key="index1">
									 <view>
										 <image :src="num" style="width: 200upx;height:200upx;" mode="aspectFit" @tap="toBigPic(num)"></image>
									 </view>
									 
								 </block>
							</view>
							
						</block>
						
					</view>
				</view>
			</view>
		</block>
		<view class="detailButton" @tap="toRecordDetail">
			订单详况 >>>
		</view>
		
		<fixbox v-if="isShowDialogue=='true' && buyOrSell==1">
			<!-- <text style="background-color: #EE5757;color:#fff">自定义内容</text> -->
			<view style="position: relative;">
				<image src="/static/images/jinsy/dialogue/sellDeputy.png" mode="aspectFit" class="er_img_seller"  @tap="toSellDialogue"></image>
				<view class="icon-position flex_c_c" v-if="wigitSell>0">{{wigitSell}}</view>
			</view>
			
		</fixbox>		
		
					<!-- <view class="icon-position flex_c_c" style="bottom: 520upx;right:20upx;" v-if="wigitSell>0">{{wigitSell}}</view> -->
				
		
		<!-- <uniLoadMore :status="loadingType"></uniLoadMore> -->
		<view style="width:100%;height: 150upx;"></view>
		<view class="send_button">
			<!-- <view><input @input="selectDeputy" class="input_class" placeholder="点此可发布评论,可@相关人" v-model="content"></input></view> -->
			<view style="padding: 0 15upx;"><textarea auto-height @input="selectDeputy" placeholder-style="font-size:14px;" cursor-spacing="10" class="area_class" v-model="content"  maxlength="-1" placeholder="点此可发布评论,可@相关人"/> </view>
            <view style="height:89upx;"></view>
		</view>
		<view class="flex_c_c" style="position:fixed;bottom: 0;right: 165upx;font-size: 16px;width:90upx;background: #FFFFFF;height: 89upx;" @tap="pickImage">
			 <uniIcon type="plusempty" size="40" color="#ACACAC"></uniIcon>
		</view>
		<view class="flex_c_c" style="position:fixed;bottom: 0;right: 0;color:#FFFFFF;background: #FF6000;width:165upx;height: 89upx;" @tap="sendText">发布</view>
		
	</view>
</template>

<script>
	import uniLoadMore from "@/components/uni-load-more/uni-load-more.vue";
	import uniIcon from "@/components/uni-icons/uni-icons.vue";
	import fixbox from "@/components/fix-box/fix-box.vue"
	let _this,timer;
	export default {
		components:{
			uniIcon,
			uniLoadMore,
			fixbox
		},
		data() {
			return {
				loadingType:'more',
				list:[],
				content:'',
				postCode:'',
				buyOrSell: 1,
				messageType:0,
				fileUrl:'',
				pageNum:1,
				pageSize:5,
                pictures: [],
				totalCount: 0,
				isShowDialogue: 'false',
				wigitSell: 0,
				recordCode:'',
				flag: true
			};
		},
		filters:{
			strToArr:function(e){
				return e.split(',')
			}
		},
		// onReachBottom:function(){
		// 	this.fetchList();
			
		// },
		// onPullDownRefresh:function(){
		// 	console.log('here here')
		// 	if (timer != null) {
		// 	     clearTimeout(timer);
		// 	       }
		// 	  timer = setTimeout(function() {
		// 	       _this.fetchMoreList();
		// 	       }, 100);
			
		// },
		onPageScroll(e){
			if(e.scrollTop<5){
				this.fetchMoreList();
				// this.fetchList()
				
			}
		},
		onLoad:function(options){
			_this = this
			this.buyOrSell = options.buyOrSell
			this.recordCode = options.recordCode
			this.postCode = uni.getStorageSync('pupDefault')
			this.fetchList()
			this.getShowPrivil()
			this.getCount()
			
		},
		methods:{
			async getCount(){
				const res = await this.$http.get('/latent/message_count',{data:{
					recordCode: this.recordCode
				}})
				console.log(res)
				let countList = res.data.data.list
				countList.forEach((item)=>{
					if (item.buyOrSell == 2){
						this.wigitSell = item.messageCount
					}
					
				})
			
				console.log(this.wigitSell)
			},
			async getShowPrivil(){
				const res = await this.$http.get('/latent/show',{})
				console.log(res)
			    this.isShowDialogue  = res.data.data.msg
				console.log(this.isShowDialogue)
			},
			async fetchList(){
				// if (!this.flag){
				// 	return
				// }
				// this.flag = false;
				// this.pageSize = 5
				this.pageNum = 1
				let data={
					recordCode:this.recordCode, //	记录编码
					buyOrSell: this.buyOrSell, //		1买家聊天框，2卖家聊天
					pageNum:  this.pageNum,
					pageSize: this.pageSize,
				}
				// uni.showLoading({
				// 	title: '加载中',
				// 	mask: true
				// })
				const res = await this.$http.get('/latent/dialog_list',{data:data})
				console.log(res)
                // uni.hideLoading()
				
				
					this.totalCount = res.data.data.totalCount
					
					let selector = '';
										
					// if(this.pageNum>1){
					// 	// 非第一页，则取历史消息数据的第一条信息元素
					// 	selector = `#msg-${this.list[0].messageCode}`;
					// }else{
					// 	// 第一页，则取当前消息数据的最后一条信息元素
					// 	selector = `#msg-${res.data.data.list[res.data.data.list.length-1].messageCode}`;
					// }
					selector = `#msg-${res.data.data.list[0].messageCode}`;
					console.log(selector)
					this.list = res.data.data.list.reverse()
					this.list.forEach((item)=>{
						if (item.messageType == 1){
							item.contentList[0].content = item.contentList[0].content.split(',')
						}
					})
					this.$nextTick(()=>{
						// 设置当前滚动的位置
						this.setPageScrollTo(selector);
						
						// this.hideLoadTips(true);
												
						
						
					})
					// if (this.list.length>0){
					// 	let selector = `#msg-${this.list[this.list.length-1].messageCode}`;
					// 	console.log(selector)
					// 	this.$nextTick(function(){
					// 		this.setPageScrollTo(selector);
					// 	})
					// }
				
							
				
				
				// uni.stopPullDownRefresh(); //得到数据后停止下拉刷新
			},
			async fetchMoreList(){
				if (_this.loadingType == ''){
					return
				}
				this.pageNum += 1
				// if (_this.loadingType !== 'more') {//loadingType!=0;直接返回
				// 	return false;
				// }
				
				_this.loadingType = '';
				uni.showNavigationBarLoading();//显示加载动画
				let data={
					recordCode:this.recordCode, //	记录编码
					buyOrSell: this.buyOrSell, //		1买家聊天框，2卖家聊天
					pageNum:  this.pageNum, 
					pageSize: this.pageSize, 
				}
				const res = await this.$http.get('/latent/dialog_list',{data:data})
				uni.hideNavigationBarLoading();//关闭加载动画
				if (res.data.data.isLastPage){
					_this.loadingType = '';
					
				}else {
					setTimeout(function() {
						_this.loadingType = 'more'
					}, 1000);
				}
				let selector = `#msg-${res.data.data.list[0].messageCode}`;
				// this.list = this.list.concat(res.data.data.list.reverse())
				console.log(selector)
				let tmp
				tmp = res.data.data.list.reverse()
				tmp.forEach((item)=>{
					if (item.messageType == 1){
						item.contentList[0].content = item.contentList[0].content.split(',')
					}
				})
				this.list = [...tmp, ...this.list]
				this.$nextTick(()=>{
					// 设置当前滚动的位置
					this.setPageScrollTo(selector);
					
					// this.hideLoadTips(true);
											
					
					
				})
				// uni.stopPullDownRefresh()
				
			},
			sendText:function(){
				this.messageType = 0
				this.pictures = ''
				this.sendMessage()
			},
			async sendMessage(){
				let data ={
					postCode: this.postCode,			//职位编码
					recordCode: this.recordCode,		//潜在订单编码
					buyOrSell: this.buyOrSell,		//1买家对话框，2卖家对话框
					messageType: this.messageType,		//消息类型。0文本，1图片，2视频...
					content: this.content,			//内容
					fileUrl: this.pictures		//文件地址
				
				}
				uni.showLoading({
					title: '发言中',
					mask: true
				})
				const res = await this.$http.post('/latent/dialog_add',{data:data})
				uni.hideLoading()
				this.content=''
				this.pictures= ''
				this.fetchList()
			},
			pickImage(){
						  uni.chooseImage({
							  sizeType: ['compressed'],
						      success: (chooseImageRes) => {
						          const tempFilePaths = chooseImageRes.tempFilePaths;
			                      let pictures = []
								  for (let i=0 ;i<tempFilePaths.length;i++){
									  uni.uploadFile({
									      url: _this.Api.upload, 
										  filePath: tempFilePaths[i],
										  name:'file',
									      success: (uploadFileRes) => {
									          console.log(uploadFileRes);	
											  pictures.push(JSON.parse(uploadFileRes.data).data.msg)
											  
											  _this.pictures = pictures.join(',')
											  if (_this.pictures.split(',').length == tempFilePaths.length){
												  _this.messageType = 1
												  _this.sendMessage()
											  }
									      },
										 
										 
									  });
								  }
								
						      },
							  complete:function(){
								 
							  }
						  });
		
						  							  
			},
			selectDeputy:function(e){
				let str = e.detail.value
				if (str.substr(str.length-1,1)=='@'){
					uni.hideKeyboard()
					uni.navigateTo({
						url: `./selectContact?buyOrSell=${this.buyOrSell}`,
						
					});
				}
			},
			toSellDialogue:function(){
				
				uni.navigateTo({
					url: `./publicDialog?buyOrSell=2&recordCode=${this.recordCode}`,
				});
			},
			toRecordDetail:function(){
				uni.navigateTo({
					url: `./detail?recordCode=${this.recordCode}`
				})
			},
			// 设置页面滚动位置
			setPageScrollTo(selector){
				let view = uni.createSelectorQuery().in(this).select(selector);
				view.boundingClientRect((res) => {
					uni.pageScrollTo({
					    scrollTop:res.top - 30,	// -30 为多显示出大半个消息的高度，示意上面还有信息。
					    duration: 0
					});
				}).exec();
			},
			toBigPic:function(src){
				
				// this.src = src
				// this.$refs.bigimage.show()
				uni.previewImage({
					urls: [src]
				})
				
			},
			toInquiryDetail:function(number,code){
				if (code >0){
					let identity = uni.getStorageSync('pupDefault')

					switch (identity){
						case 'SELL_DEPUTY':
						    if (code ==1){
						    	uni.navigateTo({
						    		url: `/pages/qing-f-c/inquiryManage/sellDeputy/inquiry-details?inquiryNumber=${number}`,
						    		
						    	});
						    } else if (code == 2){
								uni.navigateTo({
									url:`/pages/qing-f-c/inquiryManage/sampleInquiry/sellDeputy/inquiry-details?inquiryNumber=${number}`
								})
							}else if (code == 3){
								uni.navigateTo({
									url:`/pages/qing-f-c/inquiryManage/sellDeputy/inquiry-details?inquiryNumber=${number}`
								})
							}
							else if (code == 4){
								uni.navigateTo({
									url:`/pages/qing-f-c/inquiryManage/sampleInquiry/sellDeputy/inquiry-details?inquiryNumber=${number}`
								})
							}
						    break;
						case 'BUY_DEPUTY':
						    if (code ==1){
						    	uni.navigateTo({
						    		url: `/pages/qing-f-c/inquiryManage/inquiry-details?inquiryNumber=${number}`,
						    		
						    	});
						    } else if (code ==2){
								uni.navigateTo({
									url: `/pages/qing-f-c/inquiryManage/sampleInquiry/buyDeputy/inquiry-details?inquiryNumber=${number}`,
									
								});
							}else if (code ==3){
								uni.navigateTo({
									url: `/pages/qing-f-c/inquiryManage/quotedPrice/quotedPrice?quoteNumber=${number}`,
									
								});
							}else if (code ==4){
								uni.navigateTo({
									url: `/pages/qing-f-c/inquiryManage/sampleInquiry/buyDeputy/quotationDetails/quotationDetails?number=${number}`,
									
								});
							}		
						    break;
						case 'SALES_DIRECTOR':
						    if (code ==1){
						    	uni.navigateTo({
						    		url: `/pages/qing-f-c/inquiryManage/sales_director/inquiry-details?inquiryNumber=${number}`,
						    		
						    	});
						    } else if (code ==2){
						    	uni.navigateTo({
						    		url: `/pages/qing-f-c/inquiryManage/sampleInquiry/sales_director/inquiry-details?inquiryNumber=${number}`,
						    		
						    	});
						    }else if (code ==3){
						    	uni.navigateTo({
						    		url: `/pages/qing-f-c/inquiryManage/sales_director/quotation-detail?quoteNumber=${number}`,
						    		
						    	});
						    }else if (code ==4){
						    	uni.navigateTo({
						    		url: `/pages/qing-f-c/inquiryManage/sampleInquiry/sales_director/quotation-details?number=${number}`,
						    		
						    	});
						    }		
						    break;
						case 'REGIONAL_MANAGER':
						   
						    break;
						case 'ANALYST':
						    
						    break;
					}
				}else {
					return
				}
			}
		}
	}
</script>

<style lang="scss">
  page{
	  
	  background: #f4f4f4;
	  font-size: 14px;
  }
  *{
	  box-sizing: border-box;
  }
  .send_button{
	  box-sizing: border-box;
	  line-height: 20px;
	  position: fixed;
	  bottom: 0;
	  left:0;
	  width: 495;
	  z-index: 999;
	  display: flex;
	  align-items: center;
	  background: white;
  }
  .input_class{
	  background: #FFFFFF;
	  width: 500upx;
	  height: 56upx;
	  padding: 20upx 0 20upx 30upx; 
  }
   .area_class{
	  width: 495upx;
	  line-height:50upx;
	  font-size:28upx;
	  background:#FFF;
	  flex: 1;
	  // background: #FFFFFF;
	  // width: 495upx;
	  // line-height: 30px; 
	  // font-size: 14px;
	  
  }
  
  .messageWrap{
	  margin: 30upx;
	  line-height: 30px;
  }
  .messageWrap .messageTitle{
	  display: flex;
	  align-items: center;
	  
  }
  .messageWrap .myTitle{
  	  display: flex;
  	  justify-content: flex-end;
  }
  .messageWrap .messageTitle .postCode{
	  margin-left: 20upx;
	  // width:120upx;
	  padding: 0 10upx;
	  height: 30upx;
	  background: #FF6000;
	  color: #FFFFFF;
  	  border-radius: 15upx;
	  font-size: 13px;
	  box-sizing: border-box;
  	  
  }
  .messageWrap .messageContent{
	  display: flex;
	  flex-direction: column;
	  padding: 20upx;
	  border-radius: 20upx;
	  // width: 460upx;
	  max-width: 460upx;
	  line-height: 30px;
	  background: #FFFFFF;
	  box-shadow:0px 3px 3px 0px rgba(0, 0, 0, 0.08);
  }
  .messageWrap .my{
  	  display: flex;
  	  flex-direction: column;
  	  padding: 20upx;
  	  border-radius: 20upx;
  	  // width: 460upx;
	  max-width: 460upx;
  	  line-height: 30px;
  	  background:rgba(226,239,255,1);
  	  box-shadow:0px 2px 2px 0px rgba(0, 0, 0, 0.04);
  }
  .er_img_seller{
    // position: fixed;
    width: 84upx;
    height: 84upx;
  }
  .icon-position{
   	font-size: 13px;
  	position: absolute;
	right: 0upx;
	top: 0upx;
  	background-color: #ff0000;
  	color: #ffffff;
  	line-height: 40upx;
  	width: 40upx;
  	height: 40upx;
  	border-radius: 50%;
  	z-index: 20000;
  //    right: 50upx;
  	// top: 20upx;
      }
.detailButton{
	display: flex;
	align-items: center;
	padding-left: 30upx;
	border-top-left-radius: 40upx;
	border-bottom-left-radius: 40upx;
	width:210px;
	height:80px;
	background:rgba(255,255,255,1);
	border:1px solid rgba(218,218,218,1);
	box-shadow:0px 0px 8px 0px rgba(0, 0, 0, 0.1);
	width:210upx;
	height:80upx;
	font-size:16px;
	font-weight:bold;
	color: #333333;
	color:rgba(51,51,51,1);
	position: fixed;
	top: 50upx;
	right: 0;
	z-index: 99;
}
</style>
