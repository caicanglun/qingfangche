<template>
	<view>
		<view class="wrap">
			<view class="title">
				<view>产品要素</view>
				<view>原样分析结果</view>
				<view>回样分析结果</view>
			</view>
			<!-- ------------------- -->
			<view class="content">
				<view class="content-left">
					成份
				</view>
				<view class="content-right">
					<view class="content-text">
						<view class="text-up">
							<view>涤棉</view><view>涤棉</view>
						</view>
						<view>
							<rangeButton @buttonChange="compareChange" :items="items"></rangeButton>
						</view>
					</view>
					<view></view>
				</view>
			</view>

			<!-- --------------- -->
			<view class="content">
				<view class="content-left">
					规格
				</view>
				<view class="content-right">
					<view class="content-text-1">
						<view class="text-up">
							<view>T75DDTY*T150DDTY</view><view>T75DDTY*T150DDTY</view>
						</view>
						<view>
							<rangeButton @buttonChange="compareChange" :items="items"></rangeButton>
						</view>
					</view>
					<view></view>
				</view>
			</view>
			<!-- --------------- -->
			<!-- <view class="content">
				<view class="content-left">
					特性
				</view>
				<view class="content-right">
					<view class="content-text">
						<view class="text-up">
							<view>消光</view><view>半消光</view>
						</view>
						<view>
							<rangeButton @buttonChange="compareChange" :items="items"></rangeButton>
						</view>
					</view>
					<view></view>
				</view>
			</view> -->
			<!-- --------------- -->
			<view class="content">
				<view class="content-left">
					风格
				</view>
				<view class="content-right">
					<view class="content-text">
						<view class="text-up">
							<view>小提花</view><view>小提花</view>
						</view>
						<view>
							<rangeButton @buttonChange="compareChange" :items="items"></rangeButton>
						</view>
					</view>
					<view></view>
				</view>
			</view>
			<!-- --------------- -->
			<view class="content">
				<view class="content-left-1">
					<view>布样</view>
					<view>类型</view>
				</view>
				<view class="content-right">
					<view class="content-text">
						<view class="text-up">
							<view>坯布</view><view>坯布</view>
						</view>
						<view>
							<rangeButton @buttonChange="compareChange" :items="bigButtons" wid="wid_240"></rangeButton>
						</view>
					</view>
					<view></view>
				</view>
			</view>
			<!-- --------------- -->
			<view class="content">
				<view class="content-left-1">
					<view>密度</view>
					<view>(坯布)</view>
				</view>
				<view class="content-right">
					<view class="content-text">
						<view class="text-up">
							<view>113</view><view>114</view>
						</view>
						<view>
							<rangeButton @buttonChange="compareChange" :items="items"></rangeButton>
						</view>
					</view>
					<view></view>
				</view>
			</view>
			<!-- --------------- -->
			<view class="content">
				<view class="content-left-1">
					<view>克重</view>
					<view>(坯布)</view>
				</view>
				<view class="content-right">
					<view class="content-text">
						<view class="text-up">
							<view>126</view><view>136</view>
						</view>
						<view>
							<rangeButton @buttonChange="compareChange" :items="items"></rangeButton>
						</view>
					</view>
					<view></view>
				</view>
			</view>
			<!-- --------------- -->
			<view class="content">
				<view class="content-left-1">
					<view>幅宽</view>
					<view>(坯布)</view>
				</view>
				<view class="content-right">
					<view class="content-text">
						<view class="text-up">
							<view>150</view><view>160</view>
						</view>
						<view>
							<rangeButton @buttonChange="compareChange" :items="items"></rangeButton>
						</view>
					</view>
					<view></view>
				</view>
			</view>
			<!-- --------------- -->
			
		</view>  <!-- wrap -->
		<view class="placeholder-view"></view>
		 
		<view class="fixed_bottom box_shadow_btn flex">
		   <button class="btn_left" hover-class="none" @tap="bindCancel">取消</button>
		  <button class="btn_right" @tap="confirm" hover-class="none">确定</button>
		</view>
	</view>
</template>

<script>
	import rangeButton from "@/components/rangeButton-single.vue";
	export default {
		components:{
			rangeButton
		},
		data() {
			return {
				items:[{id:'xt',label:'相同'},{id:'xs',label:'相似'},{id:'bt',label:'不同'}],
				partCompare:'',
				bigButtons: [{id:'xt',label:'相同'},{id:'bt',label:'不同'}]
			};
		},
		methods:{
			compareChange:function(e){
				this.partCompare = e
			},
			bindCancel:function(){
				uni.navigateBack({
					delta: 1
				});
			},
			confirm:function(){
				
			}
		}
	}
</script>

<style lang="scss">
  page{
	  background: #F4F4F4;
  }
  .wrap{
	  background: #FFFFFF;
  }
  .title{
	  font-size: 15px;
	  font-weight: bold;
	  height: 65upx;
	  display: flex;
	  justify-content: space-around;
	  align-items:  center;
	  border-bottom: 1upx solid #E6E6E6;
  }
  .content{
	  display: flex;
	  align-items: center;
	  height: 132upx;
	  border-bottom: 2upx solid #E6E6E6;
	  .content-left{
		  width: 210upx;
		  display: flex;
		  align-items: center;
		  justify-content: center;
		  font-size:15px;
	  }
	  .content-left-1{
	  		  width: 210upx;
	  		  display: flex;
			  flex-direction: column;
	  		  align-items: center;
	  		  justify-content: center;
	  		  font-size:15px;
	  }
		  
	  .content-right{
		  width: 520upx;
		  display: flex;
		  flex-direction: column;
		  .content-text{
			  
			  font-size: 13px;
			  color: #898989;
			  .text-up{
				  display: flex;
				  justify-content: space-around;
			  }
		  }
		  .content-text-1{
		  			  font-size: 12px;
		  			  color: #898989;
		  			  .text-up{
		  				  display: flex;
		  				  justify-content: space-around;
		  			  }
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
  }
</style>
