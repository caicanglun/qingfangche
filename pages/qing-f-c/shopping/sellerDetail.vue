<template>
	<view>
		<view class='chanpin-box'>
				<view class="details-title">
					品名（别名）：T20D400T半光春亚纺
				</view>
			    <view class="bingpai">
					
					<view class="details-content">
						<text class='title'>产品系列：</text><text>{{inquiryInfo.seriesName||''}}</text>
					</view>
	
				</view>
				
				
				<view style="display: flex;">
					<view>
						 <text style="color:#999999;font-size: 14px;">规格：</text>
					</view>
					   
					<view class="flex_c">
						<text class="seller">{{inquiryInfo.specificationLongitude||''}}*{{inquiryInfo.specificationLatitude||''}}</text>
					</view>
						
	
				</view>
				<view class='bingpai'>
					<view class="details-content">
						<text class='title'>成份：</text><text>{{inquiryInfo.ingredient||''}}</text>
					</view>
					
					<view class="details-content">
						<text class='title'>含量：</text><text>{{inquiryInfo.content||''}}</text>
					</view>

				</view>
				
				
				<view class='bingpai'>
					<view class="details-content">
						<text class='title'>风格：</text><text>{{inquiryInfo.styleName||''}}</text>
					</view>
					
					<view class="details-content">
						<text class='title'>密度（{{inquiryInfo.clothTypeName||''}}）：</text>
						<text>{{inquiryInfo.densityLongitude||''}}*{{inquiryInfo.densityLatitude||''}}{{inquiryInfo.densityUnitName||''}}</text>
					</view>
				</view>
				<view class='bingpai'>
					<view class="details-content">
						<text class='title'>组织：</text>
						<text>{{inquiryInfo.organization||''}}</text>
					</view>
					<view class="details-content">
						<text class='title'>克重（{{inquiryInfo.clothTypeName||''}}）：</text>
						<text> {{inquiryInfo.gramWeight||''}} </text>
						<text> {{inquiryInfo.gramWeightUnitName||''}} </text>
					</view>

				</view>
			    <view class='bingpai'>
					<view class="details-content">
						<text class='title'>挂码率：</text>
						<text>{{inquiryInfo.guamalv||''}}</text>
					</view>
					<view class="details-content">
						<text class='title'>幅宽（{{inquiryInfo.clothTypeName||''}}）：</text>
						<text>{{inquiryInfo.clothBreadth||''}}cm</text>
					</view>
					
				</view>
				<view class='flex_c' style="border-bottom: 1upx dashed #E5E5E5;">
					<view class="details-content" style="padding-bottom: 10upx;">
						<text class='title'>品质定位：</text>
						<text>{{inquiryInfo.qualityName||''}}</text>
						<uniIcon type="help-filled" size="22" color="#666666" @tap="showTips = !showTips"></uniIcon>
						
					</view>
				</view>
				<view class='bingpai' style="margin-top: 10upx;">
					<view class="details-content">
						<text class='title'>库存：</text>
						<text>{{inquiryInfo.guamalv||''}}</text>
					</view>
					<view class="details-content">
						<text class='title'>仓库地址：</text>
						<text>{{inquiryInfo.clothBreadth||''}}苏州 盛泽</text>
					</view>
					
				</view>
                
			</view>
			
		 
	   <!-- <view class="flex_sb" style="align-items: center;margin-top: 20upx;background: #FFFFFF;padding: 20upx 30upx;" @tap="tapAssurance">
			<text style="font-size:14px;font-weight: bold;">服务</text>
			<view>
				<uniIcon type="checkbox-filled" size="22" color="#ff6000"></uniIcon>
				<text style="color: #666666;font-size: 14px;padding-left: 5upx;">交易保障</text>
			</view>
			<view>
				<uniIcon type="checkbox-filled" size="22" color="#ff6000"></uniIcon>
				<text style="color: #666666;font-size: 14px;padding-left: 5upx;">免费分析布样</text>
			</view>
			<view>
				<uniIcon type="checkbox-filled" size="22" color="#ff6000"></uniIcon>
				<text style="color: #666666;font-size: 14px;padding-left: 5upx;">发货及时</text>
			</view>
			<view>
				<uniIcon type="arrowright" size="22" color="#666666"></uniIcon>
			</view>
			
		</view> -->
	    <view style="background: #FFFFFF;padding: 24upx 30upx;margin-top: 20upx;">
	    	<view class="photo-wrap">
	    		<view>布样照片</view>
	    		<view class="photo-flex-wrap">
	    			<block v-for="(item,index) in goodsDetail.pictures" :key="index">
	    			   <image :src="item" mode="aspectFill" class="image_sample" @tap="toBigPic(item)"></image>
	    			</block>
	    		</view>
	    		
	    	</view>
	    	
	    </view>
		
		<view class="bottomBar" v-if="buttonIndex==2">
			<view @tap="showInquiry" class="flex_c_c" style="width: 50%;color: #FF6000;background: #FFFFFF;font-size: 16px;height: 88upx;">
				无法报价
			</view>
			<view @tap="showInquiry" class="flex_c_c" style="width: 50%;color: #FFFFFF;background: #FF6000;font-size: 16px;height: 88upx;">
				马上报价
			</view>
		</view>
		<view style="margin-top: 20upx;padding: 30upx;background: #FFFFFF;position: relative;">
			<view style="font-size: 14px;font-weight: bold;">采购需求</view>
			<view class='flex'>
				<view class="details-content">
					<text class='title'>购买数量：</text><text>{{inquiryInfo.ingredient||''}}</text>
				</view>

			</view>
			<view class='flex'>
				<view class="details-content">
					<text class='title'>备注：</text><text>{{inquiryInfo.ingredient||''}}</text>
				</view>
			
			</view>
			<view class='flex'>
				<view class="details-content">
					<text class='title'>买家：</text><text>{{inquiryInfo.ingredient||''}}</text>
				</view>
			
			</view>
			<view class='flex'>
				<view class="details-content">
					<text class='title'>截单时间：</text><text>{{inquiryInfo.ingredient||''}}</text>
				</view>
			
			</view>
			<view class='flex'>
				<view class="details-content">
					<text class='title'>询价时间：</text><text>{{inquiryInfo.ingredient||''}}</text>
				</view>
			
			</view>
			<view class='flex'>
				<view class="details-content">
					<text class='title'>询价单号：</text><text>{{inquiryInfo.ingredient||''}}</text>
				</view>
			
			</view>
			<view style="position: absolute;top: 40upx;right: 40upx;">
				<image src="/static/shopping/dialog.png" mode="aspectFit" style="height: 84upx;width: 84upx;"></image>
			</view>
		</view>
		<view style="margin-top: 20upx;padding: 30upx;background: #FFFFFF;">
			<view style="font-size: 14px;font-weight: bold;">报价信息</view>
			<view class='flex'>
				<view class="details-content">
					<text class='title'>是否含税：</text><text>{{inquiryInfo.ingredient||''}}</text>
				</view>
		
			</view>
			<view class='flex'>
				<view class="details-content">
					<text class='title'>是否含运费：</text><text>{{inquiryInfo.ingredient||''}}</text>
				</view>
			
			</view>
			<view class='flex'>
				<view class="details-content">
					<text class='title'>卖家：</text><text>{{inquiryInfo.ingredient||''}}</text>
				</view>
			
			</view>
			<view class='flex'>
				<view class="details-content">
					<text class='title'>备注：</text><text>{{inquiryInfo.ingredient||''}}</text>
				</view>
			
			</view>
			<view class='flex'>
				<view class="details-content">
					<text class='title'>报价时间：</text><text>{{inquiryInfo.ingredient||''}}</text>
				</view>
			
			</view>
			
		</view>
		<view style="width: 100%;height: 120upx;"></view>
		<view class="tips" v-show="showTips">
			<view style="padding: 10upx;">
				<text>高级订单</text>
				<text>市场订单</text>
				<text>一般订单</text>
			</view>

		</view>
		<view class="shoucang" v-show="showShoucang">
			<view style="padding: 20upx;"> 
				<view class="flex_c_c" style="height: 80upx;border-bottom: 1upx solid #cdcdcd;">
					<image src="/static/shopping/tupian.png" mode="aspectFit" style="height: 30upx;width: 30upx;" ></image>
					<text style="padding-left: 15upx;">保存图片</text>
				</view>
				<view class="flex_c_c" style="height: 80upx;">
					<image src="/static/shopping/collect.png" mode="aspectFit" style="height: 30upx;width: 30upx;"></image>
					<text style="padding-left: 15upx;">我的收藏</text>
				</view>
			</view>
			
		</view>
		<muskPicture :url="url" ref="refPicture"></muskPicture>
		<serviceAssurance ref="refAssurance"></serviceAssurance>
		<startQuote ref="refStartQuote"></startQuote>
	</view>
</template>

<script>
	import startQuote from "@/components/shopping/startQuote.vue"
	import serviceAssurance from "@/components/serviceAssurance.vue"
	import muskPicture from "@/components/muskPicture/muskPicture.vue";
	import uniIcon from "@/components/uni-icons/uni-icons.vue"
	export default {
		components:{
			uniIcon,
			muskPicture,
			serviceAssurance,
			startQuote
		},
		onNavigationBarButtonTap:function(val){
			 
			this.showShoucang = !this.showShoucang
		    
		},
		data() {
			return {
				buttonIndex: 2,
				url:'/static/shopping/sample.jpg',
				inquiryInfo:'',
				showTips:false,
				showShoucang:false
			};
		},
		methods:{
			showInquiry:function(){
				this.$refs.refStartQuote.show()
			},
			tapAssurance:function(){
				this.$refs.refAssurance.show()
			},
			showPicture:function(){
				this.$refs.refPicture.show()
			}
		}
		
	}
</script>

<style lang="scss">
	page{
		background: #F2F2F2;
	}
	.shoucang{
		width:230upx;
		height:189upx;
		background:rgba(255,255,255,1);
		box-shadow:0upx 6upx 8upx 0upx rgba(0, 0, 0, 0.18);
		border-radius:8upx;
		position: fixed;
		top: 20upx;
		left: 65vw;
		z-index: 100;
		font-size: 14px;
	}
	.tips{
		position: fixed;
		top: 25vh;
		left: 40vw;
		z-index: 99;
		width:359upx;
		height:137upx;
		background:rgba(8,6,6,0.5);
		border:1upx solid rgba(230,230,230,1);
		// opacity:0.5;
		border-radius:4px;
		color: #FFFFFF;
		font-size: 14px;
		
	}
	.bottomBar{
		display: flex;
		position: fixed;
		bottom: 0;
		width: 750upx;
		height: 88upx;
	}
	.chanpin-box{
        background: #FFFFFF;
		display: flex;
		flex-direction: column;
		padding: 36upx 40upx 20upx 40upx;
		line-height: 56upx;
		
	}
   .details-title{
   	display:flex;
   	align-items: center;
   	height: 56upx;
   	width: 100%;
   	font-size: 18px;
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
	.height70{
		height: 70upx;
	}
   }
   .bingpai{
   	display: flex;
   	justify-content: space-between;
   }
   .recentPrice{
   	display: flex;
   	justify-content: center;
   	align-items: center;
   	color: #FF6000;
   	font-size: 13px;
   	height: 56upx;
   }
   .seller{
   	max-height: 130upx;
   	overflow: hidden;
   	word-break: break-all;  /* break-all(允许在单词内换行。) */
   	text-overflow: ellipsis;  /* 超出部分省略号 */
   	display: -webkit-box; /** 对象作为伸缩盒子模型显示 **/
   	-webkit-box-orient: vertical; /** 设置或检索伸缩盒对象的子元素的排列方式 **/
   	-webkit-line-clamp: 3; /** 显示的行数 **/	
   }
   .photo-wrap{
   	// padding-top: 30upx;
   	// padding-left: 20upx;
   	font-size: 14px;
   	
   }
   .photo-flex-wrap{
   	display: flex;
   	flex-wrap: wrap;
   	
   }
   .image_sample{
   	width: 200upx;
   	height: 200upx;
   	margin-top: 20upx;
   }
</style>
