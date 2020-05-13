<template>
	<view class="qiun-columns">
		<sellerInfoMatch :quotationInfo="quotationInfo"></sellerInfoMatch>
		<view class="charts-title-wrap" >
			<view class="charts-title">产品价格趋势图</view>
			<view style="display: flex;justify-content: flex-end;">
				<view @tap="weekly" class="flex_c_c" style="margin-right:20upx;font-size:12px;width:98upx;height:38upx;border-radius: 14upx;background-color: #FF6000;color:#FFFFFF">
					近一周</view>
				<view @tap="showDrawer" class="flex_c_c" style="margin-right:20upx;font-size:12px;width:98upx;height:38upx;border-radius: 14upx;background-color: #F3F3F3;color:#999999">
					筛选<faIcon type="sort-down" size="22" color="#999999" class="icon-filter"></faIcon></view>
			</view>
			<uni-drawer :visible="showRight" mode="right" @close="closeDrawer">
				<veiw style="margin-top:30upx;margin-left: 20upx;">时间</veiw>
				<!-- <view class="flex_sa">
					<view class="flex_c_c" style="margin-right:20upx;font-size:12px;width:98upx;height:38upx;border-radius: 14upx;background-color: #FF6000;color:#FFFFFF">
						近3天</view>
					<view class="flex_c_c" style="margin-right:20upx;font-size:12px;width:98upx;height:38upx;border-radius: 14upx;background-color: #FF6000;color:#FFFFFF">
						近一周</view>
					<view class="flex_c_c" style="margin-right:20upx;font-size:12px;width:98upx;height:38upx;border-radius: 14upx;background-color: #FF6000;color:#FFFFFF">
						近一月
					</view>
							
				</view> -->
				<view style="margin-top: 30upx;">
					<view class="flex_sa">
						<view @tap="showCalendar" class="flex_c_c" style="width:200upx;height:58upx;border-radius: 29upx;background-color: #f2f2f2;color:#262626;font-size:12px;">
							{{startTime}}<faIcon type="angle-down" size="18" color="#999999" class="icon-filter-1"></faIcon></view>
						<view @tap="showCalendarEnd" class="flex_c_c" style="width:200upx;height:58upx;border-radius: 29upx;background-color: #f2f2f2;color:#262626;font-size:12px;">
							{{endTime}}<faIcon type="angle-down" size="18" color="#999999" class="icon-filter-1"></faIcon></view>
					     
					</view>
				</view>
				
				<!-- <view class="flex_c" style="margin-top: 200upx;justify-content: flex-end;">
					<view @tap="resetCal" class="resetButton flex_c_c">重置</view>
					<view @tap="confirmCal" class="confirmButton flex_c_c">确认</view>
				</view> -->
				<view class="fixed_bottom box_shadow_btn">
				    <view @tap="resetCal" style="margin-left:50upx;" class="resetButton flex_c_c">重置</view>
				    <view @tap="confirmCal" class="confirmButton flex_c_c">确认</view>
				</view>
				
			</uni-drawer>
			<uniCalendar
			   ref="calendar"
			   :insert="false"
			   @confirm="confirm"
			    ></uniCalendar>
			<uniCalendar
			   ref="calendarEnd"
			   :insert="false"
			   @confirm="confirmEnd"
			    ></uniCalendar>
			
		</view>
		<view class="qiun-charts" >
			<canvas canvas-id="canvasLineA" id="canvasLineA" class="charts" @touchstart="touchLineA"></canvas>
			
		</view>
		<view style="background: #FFFFFF;height:56upx;font-size:11px;" class="flex_c_c">
			历史最高价：<text style="color:#FF6000">{{quotationInfo.maxPrice}}</text>元，最低价：<text style="color:#FF6000">{{quotationInfo.minPrice}}</text>元，平均价：<text style="color:#FF6000">{{quotationInfo.middlePrice}}</text>元
		</view>
		<!-- ------------------------ -->
		<block v-for="(item,index) in quotationInfo.goodsList" :key="index">
			<view class="baojia-box" @tap="toSingleProduct(item.goodsCode)">
				<view class="wrap-box">
					<view class='box-row'>
						
						<view class="flex">
							<view class="color-block" :style="{background: item.color}"></view>
							<view style="font-size:14px;padding-left: 10upx;">
			                          {{item.systemName||''}}
			                    </view>
						</view>
						
					</view>
					<view class="baojia-content">
					  <text class='title'>卖帮办：</text><text>{{item.sellDeputy||''}}</text>
					</view>
					<!-- <view class="baojia-content">
					  <text class='title'>卖家：</text><text>JS02171M</text>
					</view> -->
					<view class="baojia-contentBottom">
						<view class="baojia_time">
							<text>报价时间：</text><text>{{item.createTime||''}}</text>
						</view>
					  
					   <view class='baojia_button' v-if="quotationInfo.matchStatusCode==1" >
						   <view class='baojia_Clipboard' @tap.stop="handleEvent(item.goodsCode,item.buyOrSellCode)">发起报价</view>
						   
				       </view>
			
					</view>
			
				</view>
			</view>   <!-- 报价记录 -->
		</block>
		<view class="placeholder-view"></view>
	</view>
</template>

<script>
	import uCharts from '@/components/u-charts/u-charts.js';
	import faIcon from "@/components/kilvn-fa-icon/fa-icon.vue"
	import uniDrawer from '@/components/uni-drawer/uni-drawer.vue'
	import uniCalendar from '@/components/uni-calendar/uni-calendar.vue'
	import sellerInfoMatch from "@/components/inquiry/sellerInfoMatch.vue"
	var _self;
	var canvaLineA=null;
	export default {
		components:{
			faIcon,
			uniDrawer,
			uniCalendar,
			sellerInfoMatch
		},
		data() {
			return {
				inquiryNumber:'',
				quotationInfo:'',
				matchCode:'',
				color1:'#ff6000',
				startTime:'',
				endTime:'',
				showRight:false,
				cWidth:'',
				cHeight:'',
				pixelRatio:1,
				series:[
					{
						name: "塔丝隆50D",
						color: "#FF6000",
						data: [1.81,2, 2.01, 2.03, 2.38, 5.27,2.03, 2.38, 5.27],
						legendShape: "line",
						pointShape: "circle",
						show: true,
						type: "line",
						format:(val)=>{return val+'元'}
					}
				],
				categories:['10.01','10.01','10.14','10.24','10.30','11.23','10.24','10.30','11.23']
				
				
			}
		},
		onLoad(options) {
			_self = this;
			this.matchCode = options.matchCode
			this.inquiryNumber = options.inquiryNumber
			this.cWidth=uni.upx2px(750);
			this.cHeight=uni.upx2px(500);
			//this.getServerData();
			this.endTime = this.getDay(0)  //设置当前时间
			this.startTime = this.getDay(-7)  //默认是一周前
			console.log(this.endTime)
			console.log(this.startTime)
			this.matchList2()
		},
		methods: {
			handleEvent(goodsCode,buyOrSellCode){
				this.$store.dispatch('copeFun',this.inquiryNumber)
				uni.navigateTo({
					url: `/pages/qing-f-c/inquiryManage/comQuotation/startQuotation?goodsCode=${goodsCode}&buyOrSellCode=${buyOrSellCode}&flag=1`,
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
				
			},
			matchList2:function(){
				let data={
					matchCode: _self.matchCode,
					startTime: _self.startTime,
					endTime:   _self.endTime
				}
				let url = this.Api.matchList2
				this.myRequest(data,url,'get').then(res => {
				  console.log(res);
				  if (res.data.status==0){
					  _self.quotationInfo = res.data.data
					  _self.categories = res.data.data.categories
					  console.log(_self.categories)
					  _self.series = res.data.data.series
					  console.log(_self.series)
					  _self.series.forEach((item)=>{
						  this.$set(item,'legendShape','line')
						  this.$set(item,'pointShape','circle')
						  this.$set(item,'show',true)
						  this.$set(item,'type','line')
					  })
					  let LineA={categories:[],series:[]};
					  //这里我后台返回的是数组，所以用等于，如果您后台返回的是单条数据，需要push进去
					  // LineA.categories=res.data.data.LineA.categories;
					  LineA.categories= _self.categories
					  
					  // LineA.series=res.data.data.LineA.series;
					  LineA.series= _self.series
					  _self.showLineA("canvasLineA",LineA);
					  console.log(LineA.series[0])
				  }
				}).catch(err => {
				  wx.showToast({
				    title: err.data.errMsg,
				    icon: 'none'
				  });
				});
			},
			weekly:function(){
				this.startTime= this.getDay(-7)
				this.endTime = this.getDay(0)
				this.matchList2()
			},
			resetCal:function(){
				this.startTime= this.getDay(-7)
				this.endTime = this.getDay(0)
			},
			confirmCal:function(){
				this.showRight = false
				this.matchList2()
			},
			showCalendarEnd:function(){
				this.$refs.calendarEnd.open();
			},
			showCalendar:function(){
				this.$refs.calendar.open();
			},
			confirm:function(e){
				console.log(e)
				this.startTime = e.fulldate
				
			},
			confirmEnd:function(e){
				console.log(e)
				this.endTime = e.fulldate
				
			},
			closeDrawer:function(){
				this.showRight = false
			},
			showDrawer:function(){
				this.showRight = true
				console.log(this.showRight)
			},
			toSingleProduct:function(goodsCode){
				uni.navigateTo({
					url: './singleProduct?goodsCode='+ goodsCode+'&startTime='+_self.startTime+'&endTime='+_self.endTime,
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			},
			getServerData(){
				uni.request({
					url: 'https://www.ucharts.cn/data.json',
					data:{
					},
					success: function(res) {
						console.log(res.data.data)
						let LineA={categories:[],series:[]};
						//这里我后台返回的是数组，所以用等于，如果您后台返回的是单条数据，需要push进去
						// LineA.categories=res.data.data.LineA.categories;
						LineA.categories= _self.categories
						
						// LineA.series=res.data.data.LineA.series;
						LineA.series= _self.series
						_self.showLineA("canvasLineA",LineA);
						console.log(LineA.series[0])
					},
					fail: () => {
						_self.tips="网络错误，小程序端请检查合法域名";
					},
				});
			},
			showLineA(canvasId,chartData){
				canvaLineA=new uCharts({
					$this:_self,
					canvasId: canvasId,
					type: 'line',
					fontSize:11,
					legend:{show:true},
					dataLabel:true,
					dataPointShape:true,
					background:'#FFFFFF',
					pixelRatio:_self.pixelRatio,
					categories: chartData.categories,
					series: chartData.series,
					animation: true,
					xAxis: {
						disableGrid:true,
						titleFontColor:'#333333'
					},
					yAxis: {
						gridType:'dash',
						gridColor:'#EAEAEA',
						
						
					},
					width: _self.cWidth*_self.pixelRatio,
					height: _self.cHeight*_self.pixelRatio,
					extra: {
						line:{
							type: 'straight'
						}
					}
				});
				
			},
			touchLineA(e) {
				canvaLineA.showToolTip(e, {
					format: function (item, category) {
						// return category + ' ' + item.name + ':' + item.data 
						return item.data 
					}
				});
			},
			getDay:function(day){
			  
			 　　var today = new Date();
			  
			
			  
			 　　var targetday_milliseconds=today.getTime() + 1000*60*60*24*day;
			  
			  
			  
			 　　today.setTime(targetday_milliseconds); //注意，这行是关键代码
			  
			  
			  
			 　　var tYear = today.getFullYear();
			  
			 　　var tMonth = today.getMonth();
			  
			 　　var tDate = today.getDate();
			  
			 　　tMonth = this.doHandleMonth(tMonth + 1);
			  
			 　　tDate = this.doHandleMonth(tDate);
			  
			 　　return tYear+"-"+tMonth+"-"+tDate;
			  
			 },
			  
			 doHandleMonth:function(month){
			  
			 　　var m = month;
			  
			 　　if(month.toString().length == 1){
			  
			 　　　　m = "0" + month;
			 
			 　　}
			  
			 　　return m;
			  
			 }
			
		}
	}
</script>

<style lang="scss">
	/*样式的width和height一定要与定义的cWidth和cHeight相对应*/
	page{
		background: #F4F4F4;
	}
	.color-block{
		width:10upx;
		height: 24upx;
	}
	.fixed_bottom{
	  width: 750upx;
	  position: fixed;
	  bottom: 0;
	  display: flex;
	  
	  z-index: 999;
	}
	.resetButton{
		background: #FFFFFF;
		color: #FF6000;
		width:180upx;
		height:78upx;
		font-size:16px;
		border: 1upx solid #F4F4F4;
		border-top-left-radius: 40upx;
		border-bottom-left-radius: 40upx;
	}
	.confirmButton{
		border: 1upx solid #F4F4F4;
		background: #FF6000;
		color: #FFFFFF;
		font-size:16px;
		width:180upx;
		height:78upx;
		border-top-right-radius: 40upx;
		border-bottom-right-radius: 40upx;
	}
	.icon-filter-1{
		padding-left: 5upx;
	}
	.icon-filter{
		padding-bottom: 20upx;
		padding-left: 5upx;
		
	}
	.qiun-charts {
		width: 750upx;
		height: 500upx;
		background-color: #FFFFFF;
	}
	
	.charts {
		width: 750upx;
		height: 500upx;
		background-color: #FFFFFF;
	}
	
	.charts-title-wrap{
		background: #FFFFFF;
	}
	.charts-title{
		display:flex;
		justify-content: center;
		align-items: center;
		height:65upx;
		font-size:15px;
	}
	


 .baojia-box{
		margin: 20upx 30upx 0 30upx;
		border-radius: 6upx;
		line-height: 1;
		background-color: #fff; 
	 }
.wrap-box{
	 	padding-left: 24upx;
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
		.baojia-content-spec{
			display: flex;
			align-items: center;
			width: 100%;
			font-size: 12px;
			height: 69upx;
		}
		.box-contentSmall{
			display: flex;
			align-items: center;
			width: 100%;
			font-size: 12px;
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
			color: #8D8D8D;
			.button{
				width:180upx;
				display: flex;
				justify-content: space-between;
				height: 50upx;
			}
			
		}
		
		
	.baojia-contentBottom{
			display: flex;
			justify-content: space-between;
			line-height: 65upx;
			width: 100%;
			font-size: 12px;
			height: 69upx;
			color: #8D8D8D;
			.baojia_button{
				display: flex;
				flex-direction: row-reverse;
				justify-content: space-between;
				width:300upx;
				.baojia_Clipboard{
					display: flex;
					justify-content: center;
					align-items: center;
					background-color: #FF6000;
					color: white;
					line-height: 52upx;
					width:136upx;
					height:52upx;
					background:rgba(255,96,0,1);
					border-radius:4upx;
				}
			}
			.baojia_time{
				font-size: 10px;
			}
		}	
		.baojia-bottom-spec{
			display: flex;
			justify-content: space-between;
			line-height: 65upx;
			width: 100%;
			font-size: 12px;
			height: 69upx;
			color: #8D8D8D;
			border-bottom: 1upx solid #f3f3f3;
			.baojia_time{
				font-size: 10px;
			}
		}
		
		.baojia-close{
			color: #999999!important;
		}
		
</style>
