<template>
	<view>
		<view style="background: #FFFFFF;margin: 20upx 30upx;border-radius: 10upx;">
			<view style="padding:10upx;">
				<view class="flex_sb" style="align-items: center;height:46upx;" >
					<view style="font-size:15px;color:#333333;">询价单待报价</view>
					<view style="font-size:11px;color:#999999;">10:20:25</view>
				</view>
				<view class="flex_sb" style="align-items: center;height:46upx;">
					<view class="cont_text">询价单【春亚纺】还未报价，去报价fsfefwefewfewfewfewewerwerwrwerwer</view>
					<view class="redpoint"></view>
				</view>
			</view>
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		onLoad:function(){
	
		},
		methods:{
			
		}
	}
</script>

<style lang="scss">
   page{
	  background: #F4F4F4; 
   }
   .redpoint{
	   background-color: red;
	   height:16upx;
	   width: 16upx;
	   border-radius: 50%;
   }
   .cont_text{
	    color: #666666;
		// max-height: 130upx;
		font-size:13px;
		width: 90%;
		overflow: hidden;
		word-break: break-all;  /* break-all(允许在单词内换行。) */
		text-overflow: ellipsis;  /* 超出部分省略号 */
		display: -webkit-box; /** 对象作为伸缩盒子模型显示 **/
		-webkit-box-orient: vertical; /** 设置或检索伸缩盒对象的子元素的排列方式 **/
		-webkit-line-clamp: 1; /** 显示的行数 **/
	
   }
</style>
