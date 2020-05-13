<template>
	<view>	
		<view class="box-shawn" style="margin-top: 20upx;" >
			<view class="content-1 no_border">
				<view class="flex_c">
					<view style="font-fize:16px;color:#140F26;font-weight: bold;">
						跟进内容
					</view>
				</view>
				
			</view>
			<view class="no_border" style="display: flex;flex-direction: column;font-size:14px;">
				   <block v-for="(subItem,index) in item.remarks" :key="index">
					   <view style="margin: 10upx 0upx;">
					   	<text style="color:#999999">{{subItem.name}}：</text><text>{{subItem.remarks}}</text>
					   </view>
				   </block>
					
			</view>
		</view>
		<view class="box-shawn" style="margin-top: 20upx;">
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
						 <text style="color:#888890">提醒时间</text> <text style="padding-left: 30upx;">{{item.nextTime||''}}</text>     
					</view>
			</view>
			<view class="content-remark no_border">
					<view>
						<text style="color:#888890">计划事项</text><text style="padding-left: 30upx;">{{item.nextRemarks||''}}</text>
					</view>
			</view>
			<view v-if="isShow">
				<image src="/static/images/qingfc/addFollow.png" mode="aspectFit" class="er_img" @tap="AddFollow"></image>
			</view>
		</view>
		<view style="height: 150upx;width:100%;"></view>
		<view class="fixed_bottom box_shadow_btn" v-if="isShow">
		   <button class="btn_left" @tap="deleteReord" hover-class="none">删除</button>
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
				recordCode:'',
				item:'',
				buyOrSellCode:'',
				selectList:[],
				isShow:false,
				
			};
		},
		onLoad:function(options){
			this.recordCode = options.recordCode
			this.buyOrSellCode = options.buyOrSellCode
			this.fetch()
			let pupDefault = uni.getStorageSync('pupDefault')
			if (pupDefault == "BUY_DEPUTY" || pupDefault == "SELL_DEPUTY"){
				this.isShow = true
			}
		},
		onShow:function(){
			this.fetch()
			
		},
		methods:{
			
			async fetch(){
				const res = await this.$http.get('/portrayal/details',{data:{
					recordCode: this.recordCode
				}})
				console.log(res)
				this.item = res.data.data
			},
			toRivalDetail:function(item){
				
				uni.navigateTo({
					url: `./competitorDetail?rivalCode=${item.rivalCode}`,
					success: res => {},
					fail: (err) => { console.log(err)},
					complete: () => {}
				});
			},
			async deleteReord(){
				uni.showModal({
						title: '提示',
						content: '确认删除跟进记录？',
						showCancel: true,
						cancelText: '取消',
						confirmText: '确认',
						success: async (res) => {
							console.log(res)
							if (res.confirm){
								
								uni.showLoading({
									title:'提交中',
									mask: true
								})
								await this.$http.get('/portrayal/del',{data:{
									recordCode: this.recordCode
								}})
								uni.hideLoading()
								uni.showToast({
									title: '删除成功',
									
								});
								uni.navigateBack({
									delta: -1
								});
								
							}
							
						},
						fail: (err) => { console.log(err)},
						complete: () => {}
					});
				
				
				
			},
			addCompetitor:function(){
				uni.navigateTo({
					url: `./addCompetitor?companyCode=${this.item.companyCode}`,
					success: res => {},
					fail: (err) => {console.log(err)},
					complete: () => {}
				});
			},
			AddFollow:function(){
				let pupDefault = uni.getStorageSync('pupDefault')
				if (pupDefault=='BUY_DEPUTY'){
					uni.navigateTo({
						url: `./createCustomFollow?companyCode=${this.item.companyCode}&buyOrSellCode=${this.buyOrSellCode}`,
						success: res => {},
						fail: (err) => {console.log(err)},
						complete: () => {}
					});
				}else if (pupDefault=='SELL_DEPUTY'){
					uni.navigateTo({
						url: `./createCustomFollow?companyCode=${this.item.companyCode}&buyOrSellCode=${this.buyOrSellCode}`,
						success: res => {},
						fail: (err) => {console.log(err)},
						complete: () => {}
					});
				}else {
					uni.showToast({
						title: '身份不允许',
						icon:'none'
					});
				}
				
			},
			async submit(){
				const res = await this.$http.get('/portrayal/buyerComboBox',{})
				let selectList = JSON.stringify(res.data.data)
				let data = JSON.stringify(this.item)
				uni.navigateTo({
					url: `./editFollowRecord?recordCode=${this.recordCode}&item=${data}`,
					success: res => {},
					fail: (err) => { console.log(err)},
					complete: () => {}
				});
			}
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
  	font-size: 15px;
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
  	font-size: 15px;
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
  .content-remark{
  	color: #333236;
  	font-size: 15px;
  	display: flex;
  	align-items: center;
  	line-height: 40px;
  	//justify-content: space-between;
  	// height: 70upx;
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
  .er_img{
    position: fixed;
    bottom: 200upx;
    right: 24upx;
    width: 84upx;
    height: 84upx;
  }
</style>
