<template>
	<view>
		<view class="login_top" >
			<view class="backto" @tap="backto">返回</view>
			<veiw class="navTitle">询价单详情</veiw>
		</view>
		<view class="hand_box">
			<view class="wrap-box">
				<view class='box-row'>
					<view>
						询价单号: 3303cc0
					</view>
					<view class="buttonStyle">
						 复制
					</view>
					<view class="buttonStyle">
						状态
					</view>
				</view>
				<view class="box-content">
				  <text class='title'>买帮办：</text><text>王新有</text>
				</view>
				<view class="box-content">
				  <text class='title'>买家：</text><text>买家十分威风</text>
				</view>
				<view class="box-contentSmall">
				  <text>找样类型：</text><text>找样询价</text>
				</view>
				<view class="box-contentBottom">
					<view>
						<text>建立时间：</text><text>2019-01-01 14:25:25</text>
					</view>
				   <view class='button'>
					   <view class='Clipboard'>复制</view>
					   <view class='Clipboard'>关闭</view>
				   </view>
					  
				 
				  
				</view>
				
				
			</view>
		</view>
		
		<view class="details-box">
			<view class='wrap-box'>
				<view class="details-title">
					品名（别名）：T20D400T半光春亚纺
				</view>
				<view class="bingpai">
					<view class="details-content">
						<text class='title'>产品系列：</text><text>春亚纺</text>
					</view>
					<view class="details-content">
						<text class='title'>品质定位：</text><text>一般订单</text>
					</view>
				</view>
					
				<view class="details-content">
					<text class='title'>成分：</text><text>全涤</text>
				</view>
				<view class="details-content">
					<text class='title'>含量：</text><text>涤纶100%</text>
				</view>
				<view class="details-content">
					<text class='title'>规格：</text><text>T20D*t20D</text>
				</view>
				
				<view class='bingpai'>
					<view class="details-content">
						<text class='title'>风格：</text><text>平纹</text>
					</view>
					<view class="details-content">
						<text class='title'>密度：</text><text>1*1梭</text>
					</view>
				</view>
				<view class='bingpai'>
					<view class="details-content">
						<text class='title'>组织：</text><text>1*1</text>
					</view>
					<view class="details-content">
						<text class='title'>克重：</text><text> 50g/m² </text>
					</view>
				</view>
				<view class='bingpai'>
					<view class="details-content">
						<text class='title'>挂码率：</text><text>35%</text>
					</view>
					<view class="details-content">
						<text class='title'>幅宽：</text><text>150cm</text>
					</view>
				</view>

				<view class="details-content">
					<text class='title'>购买数量：</text><text>8000米</text>
				</view>
				<view class="details-content">
					<text class='title'>备注：</text><text>石狮A客户</text>
				</view>
				
				<view class='recentPrice'>
					<navigator url="/pages/qing-f-c/inquiryManage/recentPrice/recentPrice">查看近期价格>></navigator>
				</view>
			</view>
			
		</view>  <!-- 详情 -->
		
		<view class='banner'>
			<view :class="(!isMatch?'btn':'')" @tap="swtichMatch(1)">
				系统匹配(12)
			</view>
		    <view :class="(isMatch?'btn':'')" @tap="swtichMatch(2)">
		    	卖帮办报价(9)
		    </view>
		</view>
		<view class='no_baojia'>
			暂无相关报价信息
		</view>
	<!-- ---------------- 报价记录---------------- -->
		<view class="baojia-box">
			<view class="wrap-box">
				<view class='box-row'>
					<view class="title">
						报价： <text class='color_FF6000'>2.5元/米</text>
					</view>
					<view class='tax_button'>
						含运费
					</view>
					<view class='tax_button'>
						含税
					</view>
					<view class="buttonStyle">
						待处理
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
					   
					   <view class='baojia_Clipboard'>不匹配</view>
					   <view class='baojia_Clipboard'>确定</view>
				   </view>

				</view>

			</view>
		</view>   <!-- 报价记录 -->
		
		
<!-- ---------------- 报价记录---------------- -->
		<view class="baojia-box">
			<view class="wrap-box">
				<view class='box-row'>
					<view class="title">
						报价： <text class='color_FF6000'>2.5元/米</text>
					</view>
					<view class='tax_button'>
						含运费
					</view>
					<view class='tax_button'>
						含税
					</view>
					<view class="buttonStyle">
						状态
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
					   <view class='baojia_Clipboard'>生成交易</view>
				   </view>

				</view>

			</view>
		</view>   <!-- 报价记录 -->		
		
		
		
		
		
		
	<!-- ---------------- 报价记录---------------- -->
			<view class="baojia-box">
				<view class="wrap-box">
					<view class='box-row'>
						<view class="title">
							报价： <text class='color_FF6000'>2.5元/米</text>
						</view>
						<view class='tax_button'>
							含运费
						</view>
						<view class='tax_button'>
							含税
						</view>
						<view class="state-unMatch">
							不匹配
						</view>
					</view>
					<view class="baojia-content">
					  <text class='title'>卖帮办：</text><text>高斌丰</text>
					</view>
					<view class="baojia-content">
					  <text class='title'>卖家：</text><text>JS02171M</text>
					</view>
					<view class="baojia-bottom-spec">
						<view class="baojia_time">
							<text>报价时间：</text><text>2019-01-01 14:25:25</text>
						</view>
					</view>
					<view class="baojia-content-spec">
					  <text>不匹配原因：</text><text>报价太高</text>
					</view>
	
				</view>
			</view>   <!-- 报价记录 -->			
		
		<!-- ---------------- 报价记录---------------- -->
				<view class="baojia-box baojia-close">
					<view class="wrap-box">
						<view class='box-row'>
							<view class="title">
								报价：<text class="num color_999">2.5元/米</text>
							</view>
							<view class='close_button color_999'>
								含运费
							</view>
							<view class='close_button color_999'>
								含税
							</view>
							<view class="state-unMatch color_999">
								已关闭
							</view>
						</view>
						<view class="baojia-content">
						  <text class='title'>卖帮办：</text><text>高斌丰</text>
						</view>
						<view class="baojia-content">
						  <text class='title'>卖家：</text><text>JS02171M</text>
						</view>
						<view class="baojia-bottom-spec">
							<view class="baojia_time">
								<text>报价时间：</text><text>2019-01-01 14:25:25</text>
							</view>
						</view>
						<view class="baojia-content-spec">
						  <text>匹配未成交原因：</text><text>买家不要了</text>
						</view>
		
					</view>
				</view>   <!-- 报价记录 -->			
		
		
		
		<view class='placeholder-view'></view>
		
		<view class="fixed_bottom box_shadow_btn">
		  <button class="btn_left" hover-class="none" @tap="bindCancel">推送卖帮办报价</button>
		  <button class="btn_right" @tap="submit" hover-class="none">直接报价</button>
		</view>
		
	</view>
</template>

<script>
	export default {
		data(){
			return {
				isMatch: true
			};
		},
		methods:{
			backto:function(){
					  uni.navigateBack({
						delta: 1
					  });
			},
			swtichMatch:function(e){
				this.isMatch = !this.isMatch
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
	          background-image:url(https://api.qingfangche.net/api/common/picture/hand_back/png/images/download);
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
	.navTitle{
		color:#fff;
	    position:fixed;
		top:60upx;
		left:280upx;
		font-size:16px;
		z-index:99;
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
		line-height: 1;
		background-color: #fff;
	   }
	 .baojia-box{
		margin: 20upx 30upx 0 30upx;
		border-radius: 6upx;
		line-height: 1;
		background-color: #fff; 
	 }
	.details-title{
		display:flex;
		align-items: center;
		height: 72upx;
		width: 100%;
		font-size: 15px;
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
		color: #FF6000;
		font-size: 13px;
		height: 56upx;
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
	
	
</style>
