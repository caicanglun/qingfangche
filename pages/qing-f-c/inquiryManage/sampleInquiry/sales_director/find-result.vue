<template>
	<view>
		<view class="login_top" >
			<view class="backto" @tap="backto">返回</view>
			<veiw class="navTitle">询价单详情</veiw>
		</view>
		<view class="xunjia_box">
			<view class="wrap-box">
				<view class='box-row'>
					<view>
						询价单号: 3303cc0
					</view>
					<!-- <view class="buttonStyle">
						 复制
					</view> -->
					<view class="buttonStyle">
						已分析
					</view>
				</view>
				<view class="box-content">
				  <text class='title'>买帮办：</text><text>王新有</text>
				</view>
				<view class="box-content flex_sb">
				  <veiw>
					  <text class='title'>买家：</text><text>买家十分威风</text>
				  </veiw>
				  <image src="/static/images/printer.png" class="i-print" mode="aspectFit"></image>
				</view>
				<view class="box-contentSmall">
						<text>找样类型：</text><text>找样询价</text>
				</view>
				<view class="box-contentBottom">
					<view class="created_time">
						<text>建立时间：</text><text>2019-01-01 14:25:25</text>
					</view>
				   <!-- <view :class="(isHasPush?'button':'')">
					   <view class='Clipboard' v-if="isHasPush">复制</view>
					   <view class='Clipboard' @tap="tapClosing">关闭</view>
				   </view> -->
		
				</view>
		
			</view>
		</view>
		<view class="hand_box">
			<view class="details-title">
				<view>品名（别名）：T20D400T半光春亚纺</view>
				<view>回样分析数据</view>
			</view>
			<view class="pt_20">
				<chanpinyaosu></chanpinyaosu>
			</view>
		</view>
		<view class="baojia-details">
			<view class="baojia-wrap">
				<view v-if="true">
					<view class='baojiaTitle'>销售总监报价信息</view>
					<view class="content-box">
						<view class='subItem'><text class="label">报价：</text><text class="color_FF6000">3.25元/米</text></view>
						<view class='subItem'><text class="label">备注：</text>价格偏低，市场爆款</view>
						<view class='subItemTime'><text>报价时间：</text>2019-10-01 20:30</view>
					</view>
				</view>
				<view class="baojia_line mt_20 mb_20" v-if="true"></view>
				<view class='baojiaTitle'>报价信息</view>
				<view class="content-box">
					<view class='subItem'><text class="label">报价：</text>3.25元/米</view>
					<view class='subItem'><text class="label">是否含税：</text>不含税</view>
					<view class='subItem'><text class="label">是否含运费：</text>不含运费</view>
					<view class='subItem'><text class="label">交货地：</text>盛泽</view>
					<view class='subItem'><text class="label">卖帮办：</text>高斌丰</view>
					<view class='subItem'><text class="label">卖家：</text>JS02174M 星月染厂 蔡丁丁
                     </view>
					<view class='subItem'><text class="label">库存状态：</text>全部现货</view>
					<view class='subItem'><text class="label">挂码率：</text>97%</view>
					<view class='subItem'><text class="label">卖帮办备注：</text>全部现货</view>
					<view class='subItemTime'><text>报价时间：</text>2019-10-01 20:30</view>
				</view>

			</view>
		</view>
		<view class="photo-box">
			<view class="photo-wrap">
				<view>布样照片</view>
				<image src="/static/images/c-take-photo.png" mode="aspectFit" class="image_sample"></image>
				
			</view>
			
		</view>
		<view class='placeholder-view'></view>
		
		<view class="fixed_bottom box_shadow_btn">
		  <button class="btn_left" hover-class="none" @tap="bindCancel">修改价格</button>
		  <button class="btn_right" @tap="submit" hover-class="none">确定并推送</button>
		</view>
		
	</view>
</template>

<script>
	import chanpinyaosu from "@/components/inquiry/chanpinyaosu.vue";
	export default {
		components:{
			chanpinyaosu
		},
		data() {
			return {
				
			};
		},
		methods:{
			backto:function(){

						  uni.navigateBack({
							delta: 1
						  });
			},
			bindCancel:function(){
				
			}
		}
	}
</script>

<style lang="scss">
  page{
	  background: #F4F4F4;
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
	.navTitle{
		color:#fff;
	    position:fixed;
		top:60upx;
		left:280upx;
		font-size:16px;
		z-index:99;
	}
   
   .xunjia_box{
	   margin: -200upx 30upx 0 30upx;
	   border-radius: 6upx;
	   line-height: 1;
	   background-color: #fff;
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
   .i-print{
   	width: 50upx;
   	height: 50upx;
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
   .wrap-box{
   	padding-left: 24upx;
   	padding-right: 20upx;
   	font-size: 13px;
   	display: flex;
   	flex-direction: column;
   }
  .hand_box{
	  margin: 20upx 30upx 30upx;
	  background: #FFFFFF;
  }
  .details-title{
  	padding-left: 20upx;
  	padding-top: 20upx;
  	padding-bottom: 10upx;
  	display:flex;
  	flex-direction: column;
  	// align-items: center;
  	height: 72upx;
  	width: 100%;
  	font-size: 14px;
  	font-weight: bold;	
  }
  .baojia-details{
	  margin: 20upx 30upx 30upx;
	  background: #FFFFFF;
	  
  }
  .content-box{
	  padding-lef: 20upx;
	  display: flex;
	  flex-direction: column;
	  .subItem{
		  display:flex;
		  align-items: center;
		  font-size:13px;
		  height: 56upx;
		  .label{
			  color: #999999;
		  }
		  
	  }
	  .subItemTime{
		  display:flex;
		  align-items: center;
		  font-size:11px;
		  height: 56upx;
          color: #999999;

	  }
  }
  .baojia-wrap{
	  padding-left: 20upx;
	  padding-top: 20upx;
  }
  .baojiaTitle{
	font-size: 14px;
	font-weight: bold;
  }
  .baojia_line{
	  width: 650upx;
	  height: 1upx;
	  background:rgba(237,237,237,1);
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
  .photo-box{
  	margin: 20upx 30upx 0 30upx;
  	border-radius: 6upx;
  	line-height: 1;
  	background-color: #fff; 
  	height: 320upx;
  }
  .photo-wrap{
  	padding-top: 30upx;
  	padding-left: 20upx;
  	font-size: 14px;
  	
  }
  .image_sample{
  	width: 200upx;
  	height: 200upx;
  	margin-top: 20upx;
  }
  
</style>
