<template>
	<view>
		<view class="box-shawn">
			<view class="content-1">
				<view class='label' style="color:#999999">公司名称</view>
				<view class='items'>
					轻纺车网络科技
				</view>
			</view>
			<view class="content-1">
				<view class='label' style="color:#999999">主营类型</view>
				<view class='items'>
					纬编化纤面料
				</view>
			</view>
			<view class="content-1">
				<view class='label' style="color:#999999">规模</view>
				<view class='items'>
					小型（1500-3000w/年）
				</view>
			</view>
			<view class="content-1">
				<view class='label' style="color:#999999">经营模式</view>
				<view class='items'>
					原材料加工
				</view>
			</view>
			<view class="content-1">
				<view class='label' style="color:#999999">采购方式</view>
				<view class='items'>
					中间商为主
				</view>
			</view>
			<view class="content-1">
				<view class='label' style="color:#999999">优势</view>
				<view class='items'>
					专业能力强
				</view>
			</view>
		</view>
		<view class="fixed_bottom box_shadow_btn">
		  <button class="btn_left" hover-class="none" @tap="bindCancel">删除</button>
		  <button class="btn_right" @tap="submit" hover-class="none">编辑</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
      .box-shawn{
      	 padding: 0upx 30upx;
      	 background: #FFFFFF;
      }
      .content-1{
      	color: #333236;
      	font-size: 14px;
      	display: flex;
      	align-items: center;
      	//justify-content: space-between;
      	height: 80upx;
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
</style>
