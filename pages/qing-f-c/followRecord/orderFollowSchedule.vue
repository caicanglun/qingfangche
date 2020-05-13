<template>
	<view>
		
			<block v-for="(item,index) in followList" :key="index">
				<view class="flex" style="margin: 30upx 30upx 0 30upx;">
					<view class="flex" style="width: 139upx;align-items: center;">
						<view class="circle"></view>
						<view style="padding-left: 10upx;">{{item.createTime||''}}</view>
					</view>
					<view class="right-box">
						<view>
							<text style="color: #888890">品名：</text><text>{{item.tradeName||''}}</text>
						</view>
						
						<view>
							<text style="color: #888890">数量：</text><text>{{item.purchaseQuantity||''}}</text>
						</view>
						<view>
							<text style="color: #888890">跟进预警：</text><text>{{item.warningLevelName||''}}</text>
						</view>
						<view>
							<text style="color: #888890">跟进状态：</text><text>{{item.recordStatusName||''}}</text>
						</view>
						
						<view class="flex" style="word-break: break-all;">
							<view>
								<text style="color: #888890">跟进内容：</text><text style="color:#FF0000" > {{item.remarks||''}}</text>
							</view>
							
						</view>
						<view>
							<text style="color: #888890">下次计划时间：</text><text>{{item.nextTime||''}}</text>
						</view>
						<view class="flex">
							<view>
								<text style="color: #888890">下次计划事项：</text><text> {{item.nextRemarks||''}}</text>
							</view>
						</view>
					</view>
				</view>
			</block>
			
		<uniLoadMore :status="loadingType"></uniLoadMore>
	</view>
</template>

<script>
	import uniLoadMore from "@/components/uni-load-more/uni-load-more.vue";
	import uniIcon from "@/components/uni-icons/uni-icons.vue";
	let _this,timer;	
	export default {
		components:{
			uniLoadMore,
			uniIcon
		},
		data() {
			return {
				followList:[],
				recordCode:'',
                loadingType: 'more',
                pageNum: 1,
                pageSize: 20,
			};
		},
		onReachBottom:function(){
			 if (timer != null) {
			            clearTimeout(timer);
			        }
			   timer = setTimeout(function() {
			        _this.fetchMoreList();
			        }, 1000);
		},
		onPullDownRefresh:function(){
			
			this.fetchList();
		},
		
		onLoad:function(options){
			_this = this
			this.recordCode = options.recordCode
			this.fetchList()
		},
		methods:{
			async fetchList(){
				this.pageNum =1
				let data={
					recordCode: this.recordCode,
					pageNum:  this.pageNum,
					pageSize: this.pageSize,
				}
				const res = await this.$http.get('/latent/update_list',{data:data})
				console.log(res)
				this.pageNum += 1
				
				this.followList = res.data.data.list
				uni.stopPullDownRefresh(); //得到数据后停止下拉刷新
			},
			async fetchMoreList(){
				if (_this.loadingType !== 'more') {//loadingType!=0;直接返回
					return false;
				}
				_this.loadingType = 'loading';
				uni.showNavigationBarLoading();//显示加载动画
				let data={
					recordCode: this.recordCode,
					pageNum:  this.pageNum,
					pageSize: this.pageSize,
				}
				const res = await this.$http.get('/latent/update_list',{data:data})
				if (res.data.data.list.length==0){
					_this.loadingType = '';
					uni.hideNavigationBarLoading();//关闭加载动画
					return;
				}
				this.pageNum += 1
				this.followList = this.followList.concat(res.data.data.list)
				_this.loadingType = 'more';//将loadingType归0重置
				uni.hideNavigationBarLoading();//关闭加载动画
				
			},
		}
	}
</script>

<style lang="scss">
 page{
	 background:#F4F4F4;
	 font-size: 15px;
 }
 .circle{
	 width: 20upx;
	 height: 20upx;
	 border-radius: 50%;
	 border: 4upx solid #FF6000;

 }
 .right-box{
	 width: 550upx;
	 line-height: 30px;
	 padding: 25upx;
	 display: flex;
	 flex-direction: column;
	 background: #FFFFFF;
	 border-radius: 8upx;
	 box-shadow:0px 4px 8px 0px rgba(0, 0, 0, 0.05);
 }
 .wordBreak{
	 width: 350upx;
 	overflow: hidden;
 	word-break: break-all;  /* break-all(允许在单词内换行。) */
 	text-overflow: ellipsis;  /* 超出部分省略号 */
 	display: -webkit-box; /** 对象作为伸缩盒子模型显示 **/
 	-webkit-box-orient: vertical; /** 设置或检索伸缩盒对象的子元素的排列方式 **/
 	-webkit-line-clamp: 3; /** 显示的行数 **/	
 }
 .wordBreak-1{
 	 width: 300upx;
 	overflow: hidden;
 	word-break: break-all;  /* break-all(允许在单词内换行。) */
 	text-overflow: ellipsis;  /* 超出部分省略号 */
 	display: -webkit-box; /** 对象作为伸缩盒子模型显示 **/
 	-webkit-box-orient: vertical; /** 设置或检索伸缩盒对象的子元素的排列方式 **/
 	-webkit-line-clamp: 3; /** 显示的行数 **/	
 }
 .content-remark{
 	color: #333236;
 	font-size: 15px;
 	display: flex;
 	align-items: center;
 	line-height: 40px;
	}
</style>
