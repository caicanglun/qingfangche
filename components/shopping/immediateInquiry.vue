<template>
	<view>
		<!-- 弹出层 -->
		<view  class="uni-banner" style="font-size: 14px;" v-if="bannerShow">
			<view style="padding: 20upx;">
				<view style="border-bottom: 1upx solid #f2f2f2;height: 90upx;" class="flex_sb_c">
					<view class="flex_c">
						<text>购买数量</text><input v-model="form.count" placeholder="请填写数量" type="number" style="margin-left: 20upx;"/>
					</view>
					<view>
						<text style="padding-right: 5upx;">米</text>
					</view>
					
				</view>
				<view class="flex_sb_c" style="border-bottom: 1upx solid #f2f2f2;height: 90upx;">
					<view class="flex_c">
						<text>报价截止时间</text>
						<picker mode="date" :value="form.date" :start="startDate" :end="endDate" @change="bindDateChange">
						        <view :class="form.date==''?'noPick':''" style="margin-left: 20upx;">{{form.date==''?'请选择':form.date}}</view>
						</picker>
					</view>
					<view>
						 <uniIcon type="arrowright" size="22" color="#666666"></uniIcon>
					</view>
				</view>
				<view class="flex_c" style="border-bottom: 1upx solid #f2f2f2;height: 90upx;">
					<text>备注</text><input v-model="form.remarks" placeholder="请填写详细信息" type="text" style="margin-left: 20upx;"/>
				</view>
				<view class="flex_c_c" style="margin-top: 70upx;">
					<view @tap="confirmBanner" class="flex_c_c" style="width: 80%;color: #FFFFFF;background: #FF6000;font-size: 16px;height: 88upx;">立即询价</view>
				</view>
				<view class="flex_c_c" style="font-size: 12px;color: #FF6000;height: 60upx;">温馨提醒：您发起的询价将同步发布到求购区</view>
			</view>
		</view>
		
		<!-- 做黑色阴影颜色 -->
		<view class="uni-mask" v-if="bannerShow" @tap="closeBanner"></view>
	</view>
</template>

<script>
	import uniIcon from "@/components/uni-icons/uni-icons.vue";
	export default {
		components:{
			uniIcon
		},
		computed: {
		        startDate() {
		            return this.getDate('start');
		        },
		        endDate() {
		            return this.getDate('end');
		        }
		    },
		props:{
			
		},
		data() {
			return {
				bannerShow:false,
				form:{
					count:'',
					date:'',
					remarks:''
				}
			};
		},
		mounted:function(){
			
		},
		methods:{
			getDate(type) {
			            const date = new Date();
			            let year = date.getFullYear();
			            let month = date.getMonth() + 1;
			            let day = date.getDate();
			
			            if (type === 'start') {
			                year = year - 60;
			            } else if (type === 'end') {
			                year = year + 2;
			            }
			            month = month > 9 ? month : '0' + month;;
			            day = day > 9 ? day : '0' + day;
			            return `${year}-${month}-${day}`;
			},
			bindDateChange: function(e) {
			    this.form.date = e.target.value
			},
			closeBanner:function(){
				this.bannerShow=false;
			},
			show:function(){
				this.bannerShow=true;
			},
			confirmBanner:function(e){
				
				this.$emit('input',e)
			
				
				this.bannerShow = false
			}
		}
		
	}
</script>

<style lang="scss">
     /* 弹出层形式的广告 */
     	.uni-banner {
     		width: 750upx;
			height: 520upx;
     		position: fixed;
     		bottom: 0;
     		z-index: 99;
     		
			background: #FFFFFF;
     	}
     	.uni-mask{
     		position: fixed;
     		top:0;
     		left:0;
     		z-index:50;
     		width:100%;
     		height:100%;
     		background:rgba(0,0,0,0.4);
     	}
		.popupTitle{
			height: 100upx;
			background: #1a2843;
			display: flex;
			justify-content: center;
			align-items: center;
			font-size:16px;
			font-weight: bold;
		}
		
     	.textarea-borer{
     		border: 2upx solid #DCDCDC;
     		height: 140upx;
     		width: 500upx;
     		border-radius: 6upx;
     		padding-right: 20upx;
     		background-color:#F7F7F7;
     		font-size: 14px;
     	}
     	.noPick{
			color: #999999;
		}
		.iconClose{
			position:absolute;
			top: 2upx;
			right: 2upx;
		}
		.input-wrap{
			
			
			border-radius: 10upx;
			margin: 0 30upx;
			height: 200upx;
			
			display: flex;
			align-items: center;
			justify-content: center;
		}
		.input-class{
			width: 100%;
			height: 90upx;
			background-color:#1a2843;
		}
		.uni-list-cell {
			display: flex;
			
			justify-content: flex-start
		}
		.uni-list-cell-pd {
			padding: 22upx 30upx;
		}
		.uni-list {
			background-color: #FFFFFF;
			position: relative;
			width: 100%;
			display: flex;
			flex-direction: column;
		}
		.newPartCancel{
			background: #283651;
			color: #fe2c2c;
			width: 250upx;
			height: 80upx;
			font-size:14px;
			border-radius: 6upx;
			display: flex;
			justify-content: center;
			align-items: center
		}
	    .newPart{
			background: #283651;
			color: #34f073;
			width: 250upx;
			height: 80upx;
			font-size:14px;
			border-radius: 6upx;
			display: flex;
			justify-content: center;
			align-items: center
        } 
		  .buySellActive{background: #1b2944;color: #FFFFFF;width:50%;height: 100upx;font-size: 15px;}
		  .buySell{background: #121c31;color: #3d4663;width:50%;height: 100upx;font-size: 15px;}
		 .inputClass{
		 	  background: #1b2944;
		 	  height: 90upx;
		 	  border-radius: 8upx;
		 	  padding-left: 20upx;
		 	  font-size: 14px;
		 	  color: #FFFFFF;
		 	  width: 70%;
		 }
		 .inClass{
		 	  color: #34f073;
		 	  font-size: 16px;
		 	  font-weight: bold;
		 	  display: flex;
		 	  width: 250upx;
		 	  height: 70upx;
		 	  border-radius: 8upx;
		 	  background: #2a3650;
		 	  justify-content: center;
		 	  align-items: center;
		 }
</style>
