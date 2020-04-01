<template>
	<view>
		<view class="box-shawn" >
			<view class="content-1 no_border">
				<view>
					<text style="color:#888890">客户</text><text style="padding-left: 30upx;">吴江全鑫纺织有限公司  小陈</text>
				</view>
			</view>
			<view class="content-1 no_border">
				<view>
					<view>
						<text style="color:#999A99">2020/2/22 18:00:36</text>
					</view>
				</view>
			</view>
			
		</view>
		<view class="box-shawn" style="margin-top: 20upx;" >
			<view class="content-1 no_border">
				<view class="flex">
					<view class="line"></view>
					<view style="font-fize:16px;color:#140F26;font-weight: bold;padding-left: 20upx;">
						信息跟进
					</view>
				</view>
			</view>
			<view class="content-sb">
					<view class="flex" style="width:50%;">
						<view style="color:#888890;width:180upx;">采购身份</view>
						<view>老板</view>
					</view>
					<view class="flex">
						<view style="color:#888890;width:180upx;">经营策略</view>
						<view>好</view>
					</view>

			</view>
			<view class="content-sb">
					<view class="flex" style="width:50%;">
						<view style="color:#888890;width:180upx;">采购渠道</view>
						<view>好</view>
					</view>
					<view class="flex">
						<view style="color:#888890;width:180upx;">市场口碑</view>
						<view>好</view>
					</view>
			</view>
			<view class="content-sb">
					<view class="flex" style="width:50%;">
						<view style="color:#888890;width:180upx;">价格敏感度</view>
						<view>好</view>
					</view>
					<view class="flex">
						<view style="color:#888890;width:180upx;">品质接受度</view>
						<view>良好</view>
					</view>
			</view>
			<view class="content-sb no_border">
					<view class="flex" style="width:50%;">
						<view style="color:#888890;width:180upx;">资金状况</view>
						<view>好</view>
					</view>
					<view class="flex">
						<view style="color:#888890;width:180upx;">经营信用度</view>
						<view>良好</view>
					</view>
			</view>
		</view>
		<view class="box-shawn" style="margin-top: 20upx;" >
			<view class="content-1 no_border">
				<view class="flex">
					<view class="line"></view>
					<view style="font-fize:16px;color:#140F26;font-weight: bold;padding-left: 20upx;">
						竞争对手分析
					</view>
				</view>
				
			</view>
			<view class="content-1 no_border" style="justify-content: space-between;">
					<view>
						石狮大川纺织贸易有限公司
					</view>
					<view>
						<uniIcon size="20" type="forward" color="#ACACAC"></uniIcon>
					</view>
			</view>
		</view>
		<view class="box-shawn" style="margin-top: 20upx;" >
			<view class="content-1 no_border">
				<view class="flex">
					<view class="line"></view>
					<view style="font-fize:16px;color:#140F26;font-weight: bold;padding-left: 20upx;">
						跟进需求
					</view>
				</view>
				
			</view>
			<view class="content-1 no_border" style="justify-content: space-between;">
					<view>
						75D双层充绒布 
					</view>
					<view>
						<uniIcon size="20" type="forward" color="#ACACAC"></uniIcon>
					</view>
			</view>
		</view>
		
		<view class="box-shawn" style="margin-top: 20upx;" >
			<view class="content-1 no_border">
				<view class="flex">
					<view class="line"></view>
					<view style="font-fize:16px;color:#140F26;font-weight: bold;padding-left: 20upx;">
						备注
					</view>
				</view>
				
			</view>
			<view class="content-1 no_border">
					<view>
						客户吵架，欠债 
					</view>
			</view>
		</view>
		<view class="box-shawn" style="margin-top: 20upx;" >
			<view class="content-1 no_border">
				<view class="flex">
					<view class="line"></view>
					<view style="font-fize:16px;color:#140F26;font-weight: bold;padding-left: 20upx;">
						下次计划
					</view>
				</view>
				
			</view>
			<view class="content-1 no_border">
					<view>
						 2020/03/18   09:00      
					</view>
			</view>
			<view class="content-1 no_border">
					<view>
						走访客户，走访客户
					</view>
			</view>
			
		</view>
		<view style="height: 100upx;width:100%;"></view>
		<view class="fixed_bottom box_shadow_btn">
		  
		  <button class="btn_right" @tap="submit" hover-class="none">修改</button>
		</view>
	</view>
</template>

<script>
	import uniIcon from "@/components/uni-icons/uni-icons.vue"
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
	  background: #F4F4F4;
  } 
 
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
  	height: 70upx;
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
  .content-sb{
  	color: #333236;
  	font-size: 14px;
  	display: flex;
  	align-items: center;
  	// justify-content: space-between;
  	height: 70upx;
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
  .no_border{
  	  border: none;
  }
  .line{
	  width: 4upx;
	  height: 30upx;
	  background: #FF6000;
  }
  .fixed_bottom{
    width: 100%;
    position: fixed;
    bottom: 0;
    display: flex;
    z-index: 999;
  }
  .btn_right{
    width: 100%;
    background-color: #FF6000;
    color: #fff;
    border-radius: 0;
    font-size: 16px;
    line-height: 98upx;
  }
</style>0
