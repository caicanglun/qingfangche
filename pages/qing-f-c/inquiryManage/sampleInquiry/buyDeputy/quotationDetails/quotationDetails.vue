<template>
	<view>
		<view class="login_top" >
			<view class="backto" @tap="backto">返回</view>
			<veiw class="navTitle">找样结果详情</veiw>
		</view>
		<view class="hand_box">
			<view class="wrap-box">
				<view class='box-row'>
					<view>
						询价单号: {{ topList.quotation.quotationNumber||''}}
					</view>
					<!-- <view class="buttonStyle">
						 复制
					</view> -->
					<view class="buttonStyle">
						{{topList.inquiry.inquiryStatusName ||''}}
					</view>
				</view>
				<view class="box-content">
				  <text class='title'>卖帮办：</text><text>{{topList.quotation.sellDeputyRealName ||''}}</text>
				</view>
				<view class="box-content flex_sb">
				  <veiw>
					  <text class='title'>卖家：</text><text>{{topList.quotation.companyCode||''}}</text>
				  </veiw>
				  <image src="/static/images/printer.png"  @tap="toPrintContent" class="i-print" mode="aspectFit" ></image>
				</view>
				<view class="box-contentSmall">
						<text>询价类型：</text><text>{{topList.inquiry.inquiryTypeName||''}}</text>
				</view>
				<view class="box-contentBottom">
					<view class="created_time">
						<text>建立时间：</text><text>{{topList.inquiry.createTime ||''}}</text>
					</view>
				   <!-- <view :class="(isHasPush?'button':'')">
					   <view class='Clipboard'>复制</view>
					   -->
					   <!-- <view :class="(topList.orderNum != 4&&topList.orderNum !=9)?'Clipboard':'Clipboard_close'" @tap="tapClosing">关闭</view>
					   <view class="Clipboard" @tap="tapClosing">关闭</view> 
				   </view> -->
		
				</view>
		
			</view>
		</view>
		<popUpPic ref="bigimage" :src='src'></popUpPic>
		<view class="details-box" v-if="topList.hasSnalyseContrast">
		   <sampleResult :resultList="topList.snalyseContrast" ></sampleResult>
		</view>
		
		<view class="details-box">
			<view class='wrap-box'>
				<view class="details-title">
					<view>品名（别名）：{{topList.goAnalysisSample.tradeName}}</view>
					<view class="color_FF6000">原样分析数据</view>
				</view>
				 <!-- 产品要素 -->
				 
				<chanpinyaosu :inquiryInfo="topList.goAnalysisSample"></chanpinyaosu> 
				<view class="flex_c_c">
					<view class='recentPrice'  @tap="showModifyRecord(topList.goAnalysisSample.code)">
						查看更新记录<uniIcon type="arrowright" size="16" color="#FFFFFF"></uniIcon>
					</view>
				</view>
		    </view>
		</view>
		
		<view class="details-box" v-if="topList.hasComeAnalysisSample">
			<view class='wrap-box'>

				<view class="details-title" v-if="topList.hasComeAnalysisSample">
					<view>品名（别名）：{{topList.comeAnalysisSample.tradeName}}</view>
					<view class="color_4484FF">回样分析数据</view>
				</view>

				<chanpinyaosu :inquiryInfo="topList.comeAnalysisSample" v-if="topList.hasComeAnalysisSample" ></chanpinyaosu> 	   
				<view class="flex_c_c">
						<view class='recentPrice'  @tap="showModifyRecord(topList.comeAnalysisSample.code)">
							查看更新记录<uniIcon type="arrowright" size="16" color="#FFFFFF"></uniIcon>
						</view>
				</view>
			</view>   <!-- wrap -->
			
		</view>  <!-- 详情 -->
		
		
		<!-- ---------回样初始数据--------- -->
		<view  class="details-box" v-if="topList.hasComeInitialSample"> 
		        <view class='wrap-box'>
						<view class="details-title">
							<view>品名（别名）：{{topList.comeInitialSample.tradeName}}</view>
							<view>回样初始数据</view>
						</view>
						<chanpinyaosu :inquiryInfo="topList.comeInitialSample"></chanpinyaosu>
                         <!-- <view class="flex_c_c">
                         		<view class='recentPrice'  @tap="showModifyRecord(topList.comeInitialSample.code)">
                         			查看更新记录<uniIcon type="arrowright" size="16" color="#FFFFFF"></uniIcon>
                         		</view>
                         </view> -->
						
				</view>		
		 </view>  
		<view class="photo-box">
			<view class="photo-wrap">
				<view>布样照片</view>
				<view class="photo-flex-wrap">
					<block v-for="(item,index) in topList.comeInitialPictures" :key="index">
					   <image :src="item" mode="aspectFit" class="image_sample" @tap="toBigPic(item)"></image>
					</block>
				</view>
				
			</view>
			
		</view>
       
	   <!-- 卖家信息 -->
	   <sellerInfo :quotation="quotation"></sellerInfo>
	   <!-- 卖家信息 -->
	   
        <view class='banner'>
        	<view :class="(!isMatch?'btn':'unSelect')">
        		报价记录<view><text class="fs_12">（{{quotationList.length||0}}）</text></view>
        	</view>
           <!-- <view :class="(isMatch?'btn':'unSelect')" @tap="swtichMatch(2)">
            	卖帮办报价<view><text class="fs_12">（{{quotationList.length}}）</text></view>
            </view> -->
        </view>
        
        <view>
        	<view class='no_baojia' v-if="quotationList.length == 0">
        		暂无相关报价信息
        	</view>
        	<block v-for="(item,index) in quotationList" :key="index">
        		<view class="baojia-box" @tap="toDetail(item.quotationNumber)">
        			<baojiaList :item="item" @handleEvent="handleEvent" :isDisplayButton="!(topList.inquiry.inquiryStatusCode == 4 ||inquiryInfo.inquiryStatusCode == 9)"></baojiaList>
        		</view>
        	</block>
        	<view class='placeholder-view'></view>
        	
        	<view class="fixed_bottom box_shadow_btn" v-if="topList.inquiry.inquiryStatusCode ==2 ">
        	  <button class="btn_all" hover-class="none" @tap="pushSellerQuote" v-if="quotationList.length ==0">推送卖帮办报价</button>
        
        	</view>
        	
        	
        	<view class="fixed_bottom box_shadow_btn" v-if="topList.inquiry.inquiryStatusCode ==3 ">
        	    <button class="btn_all" hover-class="none" @tap="bindCancel" >催单报价</button>
        
        	</view>
        </view>	
        	
        
      
		
		
		
		
       <!-- <view class="placeholder-view"></view>

		<view class="fixed_bottom box_shadow_btn" v-if="topList.inquiry.inquiryStatusCode ==3 ">
		    <button class="btn_all" hover-class="none" @tap="bindCancel" >催单报价</button>
		        
		</view>
		 -->
	</view>
</template>

<script>
	import popupMe from "@/components/popupMe.vue";
	import uniIcon from "@/components/uni-icons/uni-icons.vue";
	import chanpinyaosu from "@/components/sample-inquiry/chanpinyaosu-quote.vue";
	import sampleResult from "@/components/sampleResult.vue";
	import baojiaList from "@/components/sample-inquiry/baojia-detail-buy.vue";
	import sellerInfo from "@/components/sample-inquiry/sellerInfo.vue";
	import popUpPic from "@/components/popupMe-pic.vue";
	let _this
	export default {
		components:{
			popupMe,
			uniIcon,
			chanpinyaosu,
			sampleResult,
			baojiaList,
			sellerInfo,
			popUpPic
		},
		data(){
			return {
				isDoRefresh:false,
				isMatch: true,
				unMatch: '',
				closing: '',
				isHasPush: true,
				isDisplayOrginal: true,
				isAnaly: false,
				number:'',
				orderType:'',
				topList:'',
				quotation:'',
				quotationList:'',
				pageNum:1,
				pageSize:10,
				initialSampleCode:'',
				src:''
			};
		},
		onLoad:function(options){
				 _this = this
			    
				 this.number = options.number
				 this.orderType = options.orderType
				 this.getInquiryInfo()
				 this.getDeputyQuotation()
		},
		onShow: function () {
		  let pages = getCurrentPages();
		  let currPage = pages[pages.length-1];
		  if (currPage.data.isDoRefresh == true){
		  	       currPage.data.isDoRefresh = false;
				   this.getInquiryInfo()
		  		  this.getDeputyQuotation()
		  	 }
		  
		},
		methods:{

			//报价单列表
			getDeputyQuotation:function(){
				let number = _this.number
				let data={
					initialSampleCode: _this.initialSampleCode,  //	询价单号
					
				}
				let url = this.Api.zyDetailsList
				this.myRequest(data,url,'get').then(res => {
				  console.log("报价单列表",res);
				  _this.quotationList = res.data.data.list
				  console.log(_this.quotationList)
				}).catch(err => {
				  wx.showToast({
				    title: err.data.errMsg,
				    icon: 'none'
				  });
				});
			},
			getInquiryInfo:function(){
				let url = this.Api.quotationDetails
				let data ={
					quotationNumber: _this.number,		//询价/报价单号
					// orderType: _this.orderType	   //类型 1询价单，2报价单
				}
				this.myRequest(data,url,'get').then(res => {
				  
				  if (res.data.status == 0){
					 _this.topList = res.data.data
					 _this.quotation = _this.topList.quotation
					 console.log(_this.quotation)
					
					 _this.initialSampleCode = res.data.data.quotation.initialSampleCode
					 _this.getDeputyQuotation()
					 console.log(_this.topList)
					 console.log(_this.topList.snalyseContrast)
					 
				  }
				}).catch(err => {
				  wx.showToast({
				    title: err.data.errMsg,
				    icon: 'none'
				  });
				});
			},
			//打印二维码
			toPrintContent:function(){
				uni.navigateTo({
					url: '/pages/qing-f-c/printer/printContent?number='+ _this.number+'&orderType=2'+'&isAnalysis=0',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			},
			swtichDisplay:function(){
				this.isDisplayOrginal = !this.isDisplayOrginal
			},
			//不匹配弹窗
			tapClosing:function(){
				this.$refs.closingRef.show()
			},
			tapUnmatch:function(){
				this.$refs.unMatchRef.show()
			},
			getContent:function(label,content){
						switch (label){
							case 'unMatchRef':
								 this.unMatch = content
								 console.log(this.unMatch)
								 break
							case 'closingRef':
								 this.closing = content
								 console.log(this.closing)
								 break
						}
						
			},
		
			handleCancelClosing:function(){
						  this.$refs.popupClosing.close()
						  this.closing=''
			},
			handleClosing:function(){
						 console.log("关闭原因")
						 console.log(this.closing)
						 this.$refs.popupClosing.close()
			},
			showModifyRecord:function(code){
				uni.navigateTo({
					url: '/pages/qing-f-c/inquiryManage/sampleInquiry/common/sampleModifyRecord?analysisSampleCode='+ code,
					success: res => {},
					fail: (err) => {console.log(err)},
					complete: () => {}
				});
			},
			backto:function(){
					  uni.navigateBack({
						delta: 1
					  });
			},
			swtichMatch:function(e){
				this.isMatch = !this.isMatch
			},
				
			modifyResult:function(){
				//修改分析结果
			},
			toDetail:function(e){
				uni.navigateTo({
					url: '/pages/qing-f-c/inquiryManage/sampleInquiry/common/quotation-detail-common?number=' + e,
					success: res => {},
					fail: (err) => {console.log(err)},
					complete: () => {}
				});
			},
			setCompareResult:function(){
				//设置对比结果
				uni.navigateTo({
					url: './setSampleResult?quotationNumber='+ _this.number,
					success: res => {},
					fail: (err) => {console.log(err)},
					complete: () => {}
				});
			},
			bindCancel:function(){
				uni.showToast({
					title: '开发中',
					icon:'none',
					duration: 1000
				});
			},
			toBigPic:function(src){
				
				// this.src = src
				// this.$refs.bigimage.show()
				uni.previewImage({
					urls: [src],
					success:function(){
						console.log('正在预览中')
					},
					fail:function(){
						
					},
					complete:function(){
						
					}
				})
				
			}
			
		}
	}
</script>

<style lang="scss">
	page{
		background-color: #f4f4f4;
	}
	.login_top{
	          height: 338upx;
	          width: 750upx;
	          box-sizing: border-box;
	          background-image:url('~@/static/images/qingfc/customer-back.png');
	          background-repeat:no-repeat;
	          background-position:center top;
	          background-size:cover;
	          text-align: center;
	        }
	.hand_box{
	  margin: -200upx 30upx 0 30upx;
	  border-radius: 6upx;
	  line-height: 1;
	  background-color: #fff;
	}
	.i-print{
		width: 50upx;
		height: 50upx;
	}
	.navTitle{
		color:#fff;
	    position:fixed;
		top:60upx;
		left:280upx;
		font-size:16px;
		z-index:99;
	}
	.wrap-box{
		padding-top: 20upx;
		padding-left: 24upx;
		padding-right: 20upx;
		font-size: 13px;
		display: flex;
		flex-direction: column;
	}
	.wrap-box-1{
		// padding-left: 24upx;
		padding-right: 20upx;
		font-size: 13px;
		display: flex;
		flex-direction: column;
	}
	
	.box-row{
		display:flex;
		justify-content: space-between;
		align-items: center;
		height: 72upx;
		font-size: 13px;
		width: 100%;
		border-bottom: 1upx solid #F3F3F3;
		.buttonStyle{
			color: #FF6000;
		}
		.state-unMatch{
			color: #333333;
		}
		.tax_button{
			display: flex;
			justify-content: center;
			align-items: center;
			color:#FF6000;
			width:124upx;
			height:44upx;
			background:rgba(255,96,0,0.12);
			border-radius:4upx;
			font-size: 12px;
		}
		.title{
			font-size:14px;
			font-weight: bold;
			.num{
				color: #FF6000;
			}
		}
	}
	.box-content{
		display: flex;
		align-items: center;
		width: 100%;
		font-size: 13px;
		height: 50upx;
		.title{
			color: #8D8D8D;
		}
	}
	.baojia-content{
		display: flex;
		align-items: center;
		width: 100%;
		font-size: 13px;
		height: 69upx;
		.title{
			color: #8D8D8D;
		}
	}
	
	.box-contentSmall{
		display: flex;
		align-items: center;
		width: 100%;
		font-size: 11px;
		height: 50upx;
		color: #8D8D8D;
	}
	.box-contentBottom{
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		font-size: 12px;
		height: 50upx;
		padding-bottom: 10upx;
		color: #8D8D8D;
		.button{
			width:180upx;
			display: flex;
			justify-content: space-between;
			height: 50upx;
		}
		.created_time{
			font-size: 11px;
		}
		
	}
	

    .color_999{
		color: #999999!important;
	}
	
	.Clipboard{
		text-align: center;
		width: 80upx;
		height: 40upx;
		background-color: #FF6000;
		color: white;
		line-height: 40upx;
		border-radius: 20upx;
		
	}
	.details-box{
		margin: 20upx 30upx 0 30upx;
		border-radius: 6upx;
		// line-height: 1;
		background-color: #fff;
	   }
	 .baojia-box{
		margin: 20upx 30upx 0 30upx;
		border-radius: 6upx;
		line-height: 1;
		background-color: #fff; 
	 }
	.details-title{
		
		padding-bottom: 10upx;
		display:flex;
		flex-direction: column;
		// align-items: center;
		height: 72upx;
		width: 100%;
		font-size: 14px;
		font-weight: bold;	
	}
	.details-title-orginal{
		
		display:flex;
		//flex-direction: column;
		align-items: center;
		height: 72upx;
		width: 100%;
		font-size: 14px;
		font-weight: bold;	
	}
	.details-content{
		display: flex;
		align-items: center;
		width: 100%;
		font-size: 13px;
		height: 56upx;
		.title{
			color: #999999;
		}	
	}
	.bingpai{
		display: flex;
		justify-content: space-between;
	}
	.banner{
		background-color: #FF6000;
		width:100%;
	    height: 88upx;
		margin-top: 30upx;
		display: flex;
		align-items: center;
		justify-content: space-around;
		font-size: 14px;
		color: white;
		.btn{
			display:flex;
			justify-content: center;
			align-items: center;
			width:250upx;
			height:60upx;
			background:rgba(255,255,255,0.2);
			border-radius:30upx;	
		}
		.unSelect{
				display:flex;
				justify-content: center;
				align-items: center;
				width: 250upx;
				height:60upx;
				
			}
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
	  line-height: 88upx;
	}
	.btn_right_100{
	  width: 100%;
	  background-color: #FF6000;
	  color: #fff;
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
	.recentPrice{
		display: flex;
		justify-content: center;
		align-items: center;
		background: #FF6000;
		color: #FFFFFF;
		height: 38upx;
		width: 228upx;
		border-radius: 18upx;
		font-size: 10px;
        margin-bottom: 20upx;
	}
	.shouqi{
		background: #FFFFFF;
		color: #FF6000;
		border: 1upx solid #FF6000;
	}
	.no_baojia{
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 14px;
		color: #CCCCCC;
		height: 56upx;
		margin-top: 100upx;
	}
	.close_button{
		display: flex;
		justify-content: center;
		align-items: center;
		color:#999999;
		width:124upx;
		height:44upx;
		background: #f4f4f4;
		border-radius:4upx;
		font-size: 12px;
	}
// 弹窗样式
	.publishWrapper{
	    display: flex;  
	    flex-direction: column;
	    justify-content: space-between; 
		
	    input{  
	        border: 1px solid $uni-border-color;  
	        border-radius: 40upx;  
	        padding-left: 20upx;  
	        width: 70%;  
	    }
	}
	.iconClose{
		position:absolute;
		top: 2upx;
		right: 2upx;
	}
	.popTitle{
		display: flex;
		justify-content: center;
		align-items: center;
		
	}
	.newPart{
		display: flex;
		font-size: 14px;
		
		width: 170upx;
		height: 60upx;
		justify-content: center;
		align-items: center;
		
		border: 1upx solid #FF6000;
		box-sizing: border-box;
		border-radius: 30upx;
		color: #fff;
		background-color: #FF6000;
		margin-left: 10upx;
	}
	.newPartCancel{
		display: flex;
		font-size: 14px;
		
		width: 170upx;
		height: 60upx;
		justify-content: center;
		align-items: center;
		
		border: 1upx solid #DCDCDC;
		box-sizing: border-box;
		border-radius: 30upx;
		color: black;
		background-color: #FFFFFF;
		margin-left: 10upx;
	}
	.textarea_border{
		border: 2upx solid #DCDCDC;
		height: 160upx;
		width: 450upx;
		border-radius: 6upx;
		padding-right: 20upx;
		background-color:#F7F7F7;
		font-size: 14px;
	}
	.textarea_holder{
		color: #b3b3b3b;
		font-size: 13px;
	}
	.image_sample{
		width: 200upx;
		height: 200upx;
		margin-top: 20upx;
	}
	.photo-box{
		margin: 20upx 30upx 0 30upx;
		border-radius: 6upx;
		line-height: 1;
		background-color: #fff; 
		// height: 320upx;
	}
	.photo-wrap{
		padding-top: 30upx;
		padding-left: 20upx;
		font-size: 14px;
		
	}
	.productPart{
		background: #FFFFFF;
		margin: 0 30upx 0 30upx;
	}
	.photo-flex-wrap{
		display: flex;
		flex-wrap: wrap;
		
	}
	.btn_all{
	  width: 100%;
	  background-color: #FF6000;
	  color: #fff;
	  border-radius: 0;
	  font-size: 16px;
	  line-height: 88upx;
	}
	.banner{
		background-color: #FF6000;
		width:100%;
	    height: 88upx;
		margin-top: 30upx;
		display: flex;
		align-items: center;
		justify-content: space-around;
		font-size: 14px;
		color: white;
		.unSelect{
			display:flex;
			justify-content: center;
			align-items: center;
			width: 250upx;
			height:60upx;
			
		}
		.btn{
			display:flex;
			justify-content: center;
			align-items: center;
			width: 250upx;
			height:60upx;
			background:rgba(255,255,255,0.2);
			border-radius:30upx;	
		}	
	}
	
</style>
