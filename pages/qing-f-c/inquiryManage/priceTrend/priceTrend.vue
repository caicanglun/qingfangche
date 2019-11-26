<template>
	<view class="qiun-columns">
		<view class="charts-title-wrap" >
			<view class="charts-title">价格趋势图</view>
		</view>
		<view class="qiun-charts" >
			<canvas canvas-id="canvasLineA" id="canvasLineA" class="charts" @touchstart="touchLineA"></canvas>
		</view>
		
		<!-- ------------------------ -->
		<view class="baojia-box">
			<view class="wrap-box">
				<view class='box-row'>
					<view class="title">
						报价： <text class='color_FF6000'>2.5元/米</text>
					</view>
					<view class='flex_sb'>
						<view class='tax_button'>
							含运费
						</view>
						<view class='tax_button ml_20'>
							含税
						</view>
					</view>
					<view style="width: 50upx;">
						
					</view>
					
				</view>
				<view class="baojia-content">
				  <text class='title'>卖帮办：</text><text>高斌丰</text>
				</view>
				<view class="baojia-content">
				  <text class='title'>卖家：</text><text>JS02171M</text>
				</view>
				<view class="baojia-contentBottom">
					<view class="baojia_time">
						<text>报价时间：</text><text>2019-01-01 14:25:25</text>
					</view>
				   <view class='baojia_button'>
					   <view class='baojia_Clipboard'>查看详情>></view>
				   </view>
		
				</view>
		
			</view>
		</view>   <!-- 报价记录 -->
	</view>
</template>

<script>
	import uCharts from '@/components/u-charts/u-charts.js';
	var _self;
	var canvaLineA=null;
	export default {
		data() {
			return {
				cWidth:'',
				cHeight:'',
				pixelRatio:1,
				series:[
					{
						name: "塔丝隆50D",
						color: "#FF6000",
						data: [1.81, 2.47, 2.01, 2.03, 2.38, 5.27,2.03, 2.38, 5.27],
						legendShape: "line",
						pointShape: "circle",
						show: true,
						type: "line",
						format:(val)=>{return val+'元'}
					}
				],
				categories:['10.11','10.13','10.14','10.24','10.30','11.23','10.24','10.30','11.23']
				
				
			}
		},
		onLoad() {
			_self = this;
			this.cWidth=uni.upx2px(750);
			this.cHeight=uni.upx2px(500);
			this.getServerData();
		},
		methods: {
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
			}
		}
	}
</script>

<style lang="scss">
	/*样式的width和height一定要与定义的cWidth和cHeight相对应*/
	page{
		background: #F4F4F4;
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
