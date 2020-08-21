<template>
	<view>
		<view class="top-nav-fixed">
			<topSearch @search='tapSearch'></topSearch>
			<view style="background: #FFFFFF;">
				<ms-dropdown-menu>
				    <ms-dropdown-item v-model="customLevel" :list="levelList" @input="filterInput" v-if="levelList.length>0"></ms-dropdown-item>
				</ms-dropdown-menu>
			</view>
		</view>
		
		<view style="margin: 220upx 30upx 0 30upx;">
			
			<block v-for="(item, index) in customerList" :key="index">
			  <view class="box_shadow" style="background: #FFFFFF;padding: 20upx 20upx; margin-top: 30upx;" @tap="toMicroShop(item)">
			    
				   <view class="flex_sb">
					   <view class="flex">
						 <image src="/static/images/qingfc/application/companyx.png" class="title_img" mode="aspectFit"></image>
						 <view style="font-size: 16px;font-weight: bold;">{{item.companyName||''}}</view>
					   </view>
					   
						<view :class="(item.buyOrSell==1?'id_btn':'seller_btn')">{{item.buyOrSell==1?'买家':'卖家'}}</view>
				   </view>
					
					 
				   
					
				  <view class="flex" style="margin-top: 20upx;">
					  <view class="flex_c">
							  <image src="/static/images/qingfc/application/gengduo-3@2x.png" class="title_img" mode="aspectFit"></image>
							  <view class="fs_14 ">{{ item.companyLevelName||'' }}</view>
					  </view>
					  <view class="flex_c" style="padding-left: 30upx;">
						  <image src="/static/images/qingfc/application/organize.png" class="title_img" mode="aspectFit"></image>
						  <view class="fs_14 ">所属帮办: {{ item.realName||'' }}</view>
					  </view>
					 
				  </view>
					
				  </view>
			</block>
		</view>
		
		
	</view>
</template>

<script>
	import topSearch from "@/components/topSearch.vue";
	import uniLoadMore from "@/components/uni-load-more/uni-load-more.vue";
	import msDropdownMenu from '@/components/ms-dropdown/dropdown-menu.vue'
	import msDropdownItem from '@/components/ms-dropdown/dropdown-item.vue'
	let _this,timer,onOff
	export default {
		components:{
			topSearch,
			uniLoadMore,
			msDropdownMenu,
			msDropdownItem
		},
		data() {
			return {
				customerList:[],
				customLevel: 0,
				levelList:[],
				keyword:'',
				postCode: '',
				pageNum: 1,
				pageSize: 20
			};
		},
		onLoad:function(){
			_this = this
			this.getCompanyLevel()
			this.postCode = uni.getStorageSync('pupDefault')
			onOff = 1
			this.fetchList()
		},
		onReachBottom: function () {
		    
		       if (timer != null) {
		                  clearTimeout(timer);
		              }
		         timer = setTimeout(function() {
		              _this.fetchMoreList();
		          }, 1000);

		},
		methods:{
			async fetchList(){
				let data
				if (onOff==1){
					data ={
						keyword: this.keyword,
						postCode: this.postCode,
						level: -1,
						pageNum: this.pageNum,
						pageSize: this.pageSize
					}
					onOff = 0
				}else {
					data ={
						keyword: this.keyword,
						postCode: this.postCode,
						level: this.customLevel,
						pageNum: this.pageNum,
						pageSize: this.pageSize
					}
				}
				
				const res = await this.$http.get('/cm/level_list',{data: data})
				this.customerList = res.data.data.list
				console.log(res)
			},
			async fetchMoreList(){
				
				this.pageSize  +=  20
				
				let	data ={
						keyword: this.keyword,
						postCode: this.postCode,
						level: this.customLevel,
						pageNum: this.pageNum,
						pageSize: this.pageSize
					}
				
				
				const res = await this.$http.get('/cm/level_list',{data: data})
				this.customerList = res.data.data.list
				console.log(res)
			},
			
			filterInput:function(){
				this.fetchList()
			},
			async getCompanyLevel(){
				const res = await this.$http.get('/choose/company_level',{})
				let tmp = res.data.data.list
				tmp.forEach((item)=>{
					this.levelList.push({text:item.label,value:item.id})
				})
				this.levelList.unshift({text:'全部等级',value: -1})
				
			},
			tapSearch: function (value) {
			  uni.showLoading({
			    title: '搜索中...'
			  });
			  this.keyword = value
			  this.fetchList()
			  setTimeout(function() {
			  		  uni.hideLoading();
			  }, 2000);
			  
			},
			toMicroShop:function(e){
				let data = JSON.stringify(e)
				uni.navigateTo({
					url: `./microShop?data=${data}`
					
				});
			}
		}
		
	}
</script>

<style lang="scss">
page{
	background: #F4F4F4;
}
.title_img{
	width: 32upx;
	height: 35upx;
	padding-left:10upx;
	padding-right: 20upx; 
}
.top-nav-fixed{
				position:fixed;
				top: 0;
		        z-index: 99;
				background:#F4F4F4 ;
				width: 100%;
			}
</style>
