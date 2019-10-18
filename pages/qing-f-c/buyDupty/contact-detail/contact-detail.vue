<template>
	<view>
		<view class="box">
			     <view class="flex_c list_bold">
			       <view class="line"></view>
			       <view class="font_we_bold fs_15">联系人信息</view>
			     </view>
				<listShow label="姓名" content="轻纺车网络有限公司"></listShow>
				<listShow label="手机号码" content="15399923283"></listShow>
				<view class="flex_c list_bold">
				  <view class="line"></view>
				  <view class="font_we_bold fs_15">经营者特征</view>
				</view>
				<listShow label="身份" content="雇员"></listShow>
				<listShow label="性格特征" content="温和"></listShow>
				<listShow label="经营特征" content="经营不久"></listShow>
				<listShow label="价格敏感度" content="高"></listShow>
				<listShow label="性价比思维" content="轻纺车网络有限公司"></listShow>
				<listShow label="渠道状况" content="轻纺车网络有限公司"></listShow>
				<listShow label="发展潜力" content="轻纺车网络有限公司"></listShow>
				<view class="fixed_bottom box_shadow_btn">
				  <button class="btn_left" hover-class="none" @tap="bindCancel" :disabled="deleteAble">删除</button>
				  <button class="btn_right" @tap="bindConfirm" hover-class="none">确定</button>
				</view>		
		</view>
	</view>
</template>

<script>
	import listShow from "@/components/listShow.vue";
	export default {
		components:{
			listShow
		},
		data() {
			return {
				customerInfo: {},
				deleteAble: false
			};
		},
		methods:{
			bindConfirm:function(){
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
     .box{
        background-color:#fff; 
        font-size: 14px;
      	margin-bottom: 20upx
      }
	  .list{
	    margin: 0 20upx;
	    padding:0 10upx;
	    border-bottom: 1upx solid rgba(221, 221, 221, 0.3);
	    line-height: 87upx;
	  }
	  .list_bold{
		  margin: 0 20upx;
		  padding:0 10upx;
		  line-height: 87upx;
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
	 button::after {
	   border-radius: 0;
	 }
	 .fixed_bottom{
	   width: 750upx;
	   position: fixed;
	   bottom: 0;
	   display: flex;
	   z-index: 999;
	 }
</style>
