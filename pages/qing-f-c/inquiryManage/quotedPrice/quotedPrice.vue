<template>
	<view>
		<view class="details-box">
			<view class='wrap-box'>
				<view class="details-title">
					 报价产品要素
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
	
			</view>
			
		</view>  <!-- 产品要素 -->
		
		
		<view class="details-box">
			<view class='wrap-box'>
				<view class="details-title">
					 报价信息
				</view>
				<view class="details-content">
					<text class='title'>报价：</text><text>3.2元/米</text>
				</view>
				<view class="details-content">
					<text class='title'>是否含税：</text><text>不含税</text>
				</view>
				<view class="details-content">
					<text class='title'>是否含运费：</text><text>不含运费</text>
				</view>
				<view class="details-content">
					<text class='title'>交货地：</text><text>盛泽</text>
				</view><view class="details-content">
					<text class='title'>卖帮办：</text><text>高斌丰</text>
				</view><view class="details-content">
					<text class='title'>库存状态：</text><text>全部现货</text>
				</view><view class="details-content">
					<text class='title'>挂码率：</text><text>97%</text>
				</view><view class="details-content">
					<text class='title'>卖帮办备注：</text><text>全部现货</text>
                </view>
				<view class="box-contentBottom">
					<view>
						<text>建立时间：</text><text>2019-01-01 14:25:25</text>
					</view>
				</view>
			</view>
			
		</view>  <!-- 报价详情 -->
		
		<view class="details-box">
			<view class='wrap-box'>
				<view class="details-title">
					 卖家信息
				</view>
				<view class="details-content">
					<text class='title'>客户编号：</text><text>JS02012M</text>
				</view>
				
				<view class="bingpai">
					<view class="details-content">
						<text class='title'>成交笔数：</text><text>12笔</text>
					</view>
					<view class="details-content">
						<text class='title'>保证金：</text><text>已交</text>
					</view>
					
				</view>
				<view class="bingpai">
					<view class="details-content">
						<text class='title'>评价：</text>
						<block v-for="(item,index) in 3" :key="index" >
							<uniIcon type="star-filled" size='18' color='#FF6000'></uniIcon>
						</block>
						<block v-for="(item,index) in 2" :key="index" >
							<uniIcon type="star-filled" size='18' color='#999999'></uniIcon>
						</block>
						
					</view>
					<view class="details-content">
						<view class='color_FF6000'>
							<navigator url="/pages/qing-f-c/inquiryManage/recentPrice/recentPrice">查看详情>></navigator>
						</view>
					</view>
					
				</view>
			
			</view>
			
		</view>  <!-- 卖家信息 -->
		
		
		<view class="details-box">
			<view class='wrap-box'>
				<view class="details-title">
					 不匹配原因
				</view>
				<view class="details-content">
					<text class='title'>买帮办：</text><text>数据不匹配</text>
				</view>

			</view>
			
		</view>  <!-- 不匹配原因 -->
		
		
		<view class='placeholder-view'></view>
		
		<view class="fixed_bottom box_shadow_btn">
		  <button class="btn_left" hover-class="none" @tap="bindCancel">确定</button>
		  <button class="btn_right" @tap="submit" hover-class="none">匹配</button>
		</view>
		
	</view>
</template>

<script>
	import uniIcon from "@/components/uni-icons/uni-icons.vue";
	export default {
		components:{
			uniIcon
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
	page{
		background-color: #f4f4f4;
	}
   .details-box{
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
	.details-title{
		display:flex;
		align-items: center;
		height: 56upx;
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
	.box-contentBottom{
		display: flex;
		align-items: center;
		width: 100%;
		font-size: 11px;
		height: 50upx;
		color: #999999;
		
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
</style>
