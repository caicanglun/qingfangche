<template>
	<view>
		<view class="box-shawn" style="padding-top: 20upx;">
			<view class="content-1 no_border">
				<view>
					<text style="color:#888890">客户</text><text style="padding-left: 30upx;">{{item.companyName||''}}</text>
				</view>
			</view>
			
			<view class="content-1 no_border">
				<view>
					<view>
						<text style="color:#999A99">跟进时间</text><text style="padding-left: 30upx;">{{item.createTime||''}}</text>
					</view>
				</view>
			</view>
			
		</view>
		<view class="box-shawn" style="margin-top: 20upx;" >
			<view class="content-1 no_border">
				<view class="flex_c">
					<view class="line"></view>
					<view style="font-fize:16px;color:#140F26;font-weight: bold;padding-left: 20upx;">
						信息跟进
					</view>
				</view>
			</view>
			<view class="content-sb">
					<view class="flex" style="width:50%;">
						<view style="color:#888890;width:180upx;">采购身份</view>
						<view>{{item.identityName||''}}</view>
					</view>
					<view class="flex">
						<view style="color:#888890;width:180upx;">市场口碑</view>
						<view>{{item.praiseName||''}}</view>
					</view>
			</view>
			<view class="content-sb">
					<view class="flex" style="width:50%;">
						<view style="color:#888890;width:180upx;">价格敏感度</view>
						<view>{{item.sensitivityName||''}}</view>
					</view>
					<view class="flex">
						<view style="color:#888890;width:180upx;">品质接受度</view>
						<view>{{item.acceptanceName||''}}</view>
					</view>
			</view>
			<view class="content-sb">
					<view class="flex" style="width:100%;">
						<view style="color:#888890;width:180upx;">采购渠道</view>
						<view>{{item.channelName||''}}</view>
					</view>
					
			</view>
			<view class="content-sb">
					<view class="flex" style="width:100%;">
						<view style="color:#888890;width:180upx;">经营策略</view>
						<view>{{item.strategyName||''}}</view>
					</view>
					
			</view>
			<view class="content-sb">
					<view class="flex" style="width:100%;">
						<view style="color:#888890;width:180upx;">资金状况</view>
						<view>{{item.positionName||''}}</view>
					</view>
					
			</view>
			
			
			<view class="content-sb no_border">
					
					<view class="flex">
						<view style="color:#888890;width:180upx;">经营信用度</view>
						<view>{{item.creditName||''}}</view>
					</view>
			</view>
		</view>
		<view class="box-shawn" style="margin-top: 20upx;" >
			<view class="content-1 no_border">
				<view class="flex_c">
					<view class="line"></view>
					<view style="font-fize:16px;color:#140F26;font-weight: bold;padding-left: 20upx;">
						竞争对手分析
					</view>
				</view>
				
			</view>
			<block v-for="(item,index) in item.rivalList" :key="index">
				<view class="content-1 flex_sb" @tap="toRivalDetail(item)">
					<view>{{item.companyName}}</view>
					<view style="padding-right:20upx;">
						<uniIcon type="arrowright" size="20" color="#ACACAC"></uniIcon>
					</view>
				</view>
			</block>
			
		</view>
		<!-- <view class="box-shawn" style="margin-top: 20upx;" >
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
		</view> -->
		
		<view class="box-shawn" style="margin-top: 20upx;" >
			<view class="content-1 no_border">
				<view class="flex_c">
					<view class="line"></view>
					<view style="font-fize:16px;color:#140F26;font-weight: bold;padding-left: 20upx;">
						跟进内容
					</view>
				</view>
				
			</view>
			<view class="content-remark no_border">
					<view>
						{{item.remarks||''}}
					</view>
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
				selectList:[],
				isShow:false,
				
			};
		},
		onLoad:function(options){
			this.recordCode = options.recordCode
			this.fetch()
			let pupDefault = uni.getStorageSync('pupDefault')
			if (pupDefault == "BUY_DEPUTY"){
				this.isShow = true
			}
		},
		onShow:function(){
			this.fetch()
		},
		methods:{
			async fetch(){
				const res = await this.$http.get('/portrayal/buyer_details',{data:{
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
			
			async submit(){
				const res = await this.$http.get('/portrayal/buyerComboBox',{})
				let selectList = JSON.stringify(res.data.data)
				let data = JSON.stringify(this.item)
				uni.navigateTo({
					url: `./editFollowRecordBuy?recordCode=${this.recordCode}&item=${data}&selectList=${selectList}`,
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
</style>
