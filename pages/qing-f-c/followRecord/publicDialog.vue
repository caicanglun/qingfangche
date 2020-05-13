<template>
	<view>
		<block v-for="(item,index) in list" :key="index" v-if="list.length>0">
			<view class="messageWrap" :id="`msg-${item.messageCode}`" @tap="toInquiryDetail(item.relevanceCode,item.relevanceTarget)">
				<view class="messageTitle" v-if="!item.my">
					<view>{{item.realName}}</view>
					<view class="flex_c_c postCode" :style="{'background': item.postCode=='SELL_DEPUTY'?'#4484FF':''}">{{item.postName}}</view>
				</view>
				<view class="myTitle" v-if="item.my">我</view>
				<view class="flex" :style="{'justify-content': item.my?'flex-end':''}">
					<view :class="item.my?'my':'messageContent'">
						<block v-for="(subItem,subIndex) in item.contentList" :key="subIndex">
							<view :style="{'color': subItem.link?'#4487FD':''}" v-if="item.messageType == 0">{{subItem.content}}</view>
			               
							<!-- <view v-if="subItem.content.indexOf('http://') != -1"> -->
							<view v-if="item.messageType == 1">
								
                                 <block v-for="(num,ind) in subItem.content" :key="ind">
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
		
		<!-- <uniLoadMore :status="loadingType"></uniLoadMore> -->
		<view style="width:100%;height: 100upx;"></view>
		<view class="send_button">
			<view><input @input="selectDeputy" class="input_class" placeholder="点此可发布评论,可@相关人" v-model="content"></input></view>
			<!-- <view><textarea auto-height @input="selectDeputy" placeholder-style="font-size:13px;" class="area_class" v-model="content"  maxlength="-1" placeholder="点此可发布评论,可@相关人"/> </view> -->
			<view class="flex_c_c" style="font-size: 16px;width:90upx;background: #FFFFFF;height: 89upx;" @tap="pickImage">
				 <uniIcon type="plusempty" size="40" color="#ACACAC"></uniIcon>
			</view>
			<view class="flex_c_c" style="color:#FFFFFF;background: #FF6000;width:165upx;height: 89upx;" @tap="sendText">发布</view>
		</view>
	</view>
</template>

<script>
	import uniLoadMore from "@/components/uni-load-more/uni-load-more.vue";
	import uniIcon from "@/components/uni-icons/uni-icons.vue";
	let _this,timer;
	export default {
		components:{
			uniIcon,
			uniLoadMore
		},
		data() {
			return {
				loadingType:'more',
				list:[],
				content:'',
				postCode:'',
				buyOrSell: '',
				messageType:0,
				fileUrl:'',
				pageNum:1,
				pageSize:5,
                pictures: [],
				totalCount: 0
			};
		},
		filters:{
			strToArr:function(e){
				return e.split(',')
			}
		},
		onReachBottom:function(){
			this.fetchList();
			
		},
		onPullDownRefresh:function(){
			console.log('here here')
			if (timer != null) {
			           clearTimeout(timer);
			       }
			  timer = setTimeout(function() {
			       _this.fetchMoreList();
			       }, 1000);
			
		},
		onLoad:function(options){
			_this = this
			this.buyOrSell = options.buyOrSell
			this.recordCode = options.recordCode
			this.postCode = uni.getStorageSync('pupDefault')
			this.fetchList()
		},
		methods:{
			async fetchList(){
				this.pageSize = 5
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
				if (res.data.data.totalCount > this.totalCount){
					this.totalCount = res.data.data.totalCount
					this.list = res.data.data.list.reverse()
					this.list.forEach((item)=>{
						if (item.messageType == 1){
							item.contentList[0].content = item.contentList[0].content.split(',')
						}
					})
					if (this.list.length>0){
						let selector = `#msg-${this.list[this.list.length-1].messageCode}`;
						console.log(selector)
						this.$nextTick(function(){
							uni.createSelectorQuery().select(selector).boundingClientRect((tab)=>{
								console.log(tab)
								uni.pageScrollTo({
								    duration:300,
								    scrollTop: tab.bottom-150
								})
							}).exec()
						})
					}
				}else {
					return
				}
				
				
				
				
				
				// uni.stopPullDownRefresh(); //得到数据后停止下拉刷新
			},
			async fetchMoreList(){
				this.pageSize += 5
				// if (_this.loadingType !== 'more') {//loadingType!=0;直接返回
				// 	return false;
				// }
				_this.loadingType = 'loading';
				uni.showNavigationBarLoading();//显示加载动画
				let data={
					recordCode:this.recordCode, //	记录编码
					buyOrSell: this.buyOrSell, //		1买家聊天框，2卖家聊天
					pageNum:  this.pageNum, 
					pageSize: this.pageSize, 
				}
				const res = await this.$http.get('/latent/dialog_list',{data:data})
				uni.hideNavigationBarLoading();//关闭加载动画
				if (res.data.data.list.length < this.pageSize){
					_this.loadingType = '';
					return;
				}
				
				// this.list = this.list.concat(res.data.data.list.reverse())
				this.list = res.data.data.list.reverse()
				_this.loadingType = 'more';//将loadingType归0重置
				uni.stopPullDownRefresh()
				
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
				const res = await this.$http.post('/latent/dialog_add',{data:data})
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
								 uni.showToast({
								 	title: '上传成功',
									icon:'none',
									duration: 1000
								 });
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
  .send_button{
	  position: fixed;
	  bottom: 0;
	  width: 750upx;
	  z-index: 999;
	  display: flex;
	  background: white;
  }
  .input_class{
	  background: #FFFFFF;
	  width: 500upx;
	  height: 56upx;
	  padding: 20upx 0 20upx 30upx; 
  }
   .area_class{
	  background: #FFFFFF;
	  width: 500upx;
	  line-height: 20px; 
	  
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
</style>
