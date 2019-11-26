<template>
	<view>
		<view class="hand_box">
			<view class="pt_20">
				<chanpinyaosu></chanpinyaosu>
			</view>
		</view>
		<view class="baojia-details">
			<view class="baojia-wrap">
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
		}
	}
</script>

<style lang="scss">
  page{
	  background: #F4F4F4;
  }
  .hand_box{
	  margin: 20upx 30upx 30upx;
	  background: #FFFFFF;
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
