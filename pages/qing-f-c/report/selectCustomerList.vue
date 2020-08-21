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
					   <view class="flex" style="width: 500upx;">
						 <image src="/static/images/qingfc/application/companyx.png" class="title_img" mode="aspectFit"></image>
						 <view style="font-size: 16px;font-weight: bold;">{{item.companyName||''}}</view>
					   </view>
					   
						<view >{{item.buyerTotalMoney}}万元</view>
				   </view>
					
					 
				   
					
				  <view class="flex" style="margin-top: 10upx;">
					  <!-- <view class="flex_c">
							  <image src="/static/images/qingfc/application/gengduo-3@2x.png" class="title_img" mode="aspectFit"></image>
							  <view class="fs_14 ">{{ item.companyLevelName||'' }}</view>
					  </view>
					  <view class="flex_c" style="padding-left: 30upx;">
						  <image src="/static/images/qingfc/application/organize.png" class="title_img" mode="aspectFit"></image>
						  <view class="fs_14 ">所属帮办: {{ item.realName||'' }}</view>
					  </view> -->
					 <view style="color: #999999;padding-left: 60upx;font-size: 13px;">{{item.orderTime}}</view>
				  </view>
					
				  </view>
			</block>
		</view>
		<view style="height: 50upx;width: 100%;"></view>
		
	</view>
</template>

<script>
	import topSearch from "@/components/topSearch.vue";
	import uniLoadMore from "@/components/uni-load-more/uni-load-more.vue";
	import msDropdownMenu from '@/components/ms-dropdown/dropdown-menu.vue'
	import msDropdownItem from '@/components/ms-dropdown/dropdown-item.vue'
	let _this,timer,onOff
	function getDate(type) {
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
	}
	function showMonthFirstDay()
		{     
			var Nowdate=new Date();     
			var MonthFirstDay=new Date(Nowdate.getYear(),Nowdate.getMonth(),1);     
			let M=Number(MonthFirstDay.getMonth())+1     
			return Nowdate.getFullYear()+"-"+M+"-"+MonthFirstDay.getDate();     
		}
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
				pageSize: 20,
				buyOrSell:'',
				regionCode: ''
			};
		},
		onLoad:function(options){
			_this = this
			this.getCompanyLevel()
			this.buyOrSell = options.buyOrSell
			this.regionCode = options.regionCode
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
						companyLevel: -1,
						buyOrSell: this.buyOrSell,		//1销售，2采购 非必填
						regionCode:this.regionCode,	    //区域编码 非必填
						startTime: showMonthFirstDay({format: true}),   //开始时间
						endTime:getDate({format: true}),	   //结束时间
						pageNum: this.pageNum,
						pageSize: this.pageSize
					}
					onOff = 0
				}else {
					data ={
						keyword: this.keyword,
						postCode: this.postCode,
						companyLevel: this.customLevel,
						buyOrSell: this.buyOrSell,		//1销售，2采购 非必填
						regionCode:this.regionCode,	    //区域编码 非必填
						startTime: showMonthFirstDay({format: true}),   //开始时间
						endTime:getDate({format: true}),	   //结束时间
						pageNum: this.pageNum,
						pageSize: this.pageSize
					}
				}
				const res = await this.$http.get('/data/order_list',{data: data})
				this.customerList = res.data.data.list
				console.log(res)
			},
			async fetchMoreList(){
				
				this.pageSize  +=  20
				
				let	data ={
						keyword: this.keyword,
						postCode: this.postCode,
						companyLevel: this.companyLevel,
						buyOrSell: this.buyOrSell,		//1销售，2采购 非必填
						regionCode:this.regionCode,	    //区域编码 非必填
						startTime: showMonthFirstDay({format: true}),   //开始时间
						endTime:getDate({format: true}),	   //结束时间
						pageNum: this.pageNum,
						pageSize: this.pageSize
					}
				
				
				const res = await this.$http.get('/data/order_list',{data: data})
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
