<template>
	<view>
		<view>
			<view class="uni-list" >
				
				<label class="uni-list-cells uni-list-cell-pd" v-for="(item,index) in selectArr" :key="index">
					
					<view style="padding-left: 20upx;font-size: 16px;font-weight: bold;">{{item.companyName}}</view>
					<view @tap="removeItem(item.companyCode)">
						<image src="/static/images/tab/close2x.png" mode="aspectFit" style="width: 30upx;height: 30upx;"></image>
					</view>
				</label>
				
			</view>
		</view>
		
		<view style="background: #FFFFFF;height: 80upx;margin-top:20upx;align-items: center;" class="flex_sb">
			<input placeholder="搜索" style="padding-left: 20upx;width: 500upx;" type="text" v-model="keyword" @confirm="inputConfirm" confirm-type="search"/>
			<image src="/static/images/tab/search@2x.png" @tap="inputConfirm" mode="aspectFit" style="width: 30upx;height: 30upx;padding-right: 50upx;"></image>
		</view>
		<view class="uni-list" style="margin-top: 20upx;">
			<checkbox-group @change="checkboxChange">
				<label class="uni-list-cell uni-list-cell-pd" v-for="(item,index) in items" :key="index">
					<view>
						<checkbox :value="item.companyCode" color="#FF6000" :checked="item.checked"/>
					</view>
					<view style="padding-left: 20upx;font-size: 16px;font-weight: bold;" @tap.stop="toCustomerDetail(item.companyCode)">{{item.companyName}}</view>
				</label>
			</checkbox-group>
		</view>
	</view>
</template>

<script>
	let _this,timer
	function getMonths(type) {
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
	
		return `${year}-${month}`;
	}
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
		
		data() {
			return {
				
				items: [],
				selectArr:[],
				time: '',
				customLevel: 1,
				keyword:'',
				postCode: '',
				pageNum: 1,
				pageSize: 40,
				buyOrSell:'',
				regionCode: ''
			};
		},
		onReachBottom: function () {
		    
		       if (timer != null) {
		                  clearTimeout(timer);
		              }
		         timer = setTimeout(function() {
		              _this.fetchMoreList();
		          }, 1000);
		
		},
		onNavigationBarButtonTap:function(val){
			 
				 this.tapSettingButton() 
		    
		},
		onLoad:function(options){
			_this = this
			this.time = getMonths({format: true})
			this.buyOrSell = options.buyOrSell
			this.regionCode = options.regionCode
			this.postCode = uni.getStorageSync('pupDefault')
			// this.getSelectCustomer()
			this.fetchList()
		},
		methods:{
			removeItem:function(code){
				let tmpIndex=''
				this.selectArr.forEach((item,index)=>{
					if (item.companyCode == code){
						tmpIndex = index
					}
				})
				this.selectArr.splice(tmpIndex,1)
				this.items.forEach((item,index)=>{
					if (item.companyCode == code){
						this.$set(item,'checked',false)
					}
				})
				
				
			},
			toCustomerDetail:function(code){
				uni.navigateTo({
				  url: '/pages/qing-f-c/regionalManager/customer-details?companyCode=' + code
				});
			},
			async getSelectCustomer(){
				let data
				
					data ={
						
						postCode: this.postCode,
						
						buyOrSell: this.buyOrSell,		//1销售，2采购 非必填
						regionCode:this.regionCode,	    //区域编码 非必填
						startTime: showMonthFirstDay({format: true}),   //开始时间
						endTime:getDate({format: true}),	   //结束时间
						pageNum: this.pageNum,
						pageSize: this.pageSize
					}
				
				const res = await this.$http.get('/data/new_customer_list',{data: data})
				// this.customerList = res.data.data.list
				res.data.data.list.forEach((item)=>{
					this.items.forEach((item1,index)=>{
						if (item1.companyCode == item.companyCode){
							this.items.splice(index,1)
						}
					})
					this.$set(item,'checked',true)
					this.items.unshift(item)
				})
				this.selectItem()
				console.log(res)
			},
			async fetchList(){
				    
					let data ={
						keyword: this.keyword,
						postCode: this.postCode,
						level: this.customLevel,
						pageNum: this.pageNum,
						pageSize: this.pageSize
					}
				
				
				const res = await this.$http.get('/cm/level_list',{data: data})
				//  res.data.data.list.forEach((item)=>{
				// 	this.items.push({value: item.companyCode,name: item.companyName})
				// })
				this.items = res.data.data.list
				this.getSelectCustomer()
				
				console.log(res)
			},
			async fetchMoreList(){
				
				this.pageNum += 1
				
				let	data ={
						keyword: this.keyword,
						postCode: this.postCode,
						level: this.customLevel,
						pageNum: this.pageNum,
						pageSize: this.pageSize
					}
				
				
				const res = await this.$http.get('/cm/level_list',{data: data})
				
				this.items = this.items.concat(res.data.data.list)
				console.log(res)
			},
			async inputConfirm(){
				if (this.keyword ==''){
					uni.showToast({
						title: '请输入搜索内容',
						icon: 'none'
					});
					return
				}
				let data ={
						keyword: this.keyword,
						postCode: this.postCode,
						level: this.customLevel,
						pageNum: 1,
						pageSize: this.pageSize
					}
				
				
				const res = await this.$http.get('/cm/level_list',{data: data})
				 res.data.data.list.forEach((item)=>{
					this.items.forEach((item1,index)=>{
						if (item1.companyCode == item.companyCode){
							this.items.splice(index,1)
						}
					})
					this.items.unshift(item)
				})
				
				console.log(res)
			},
			checkboxChange: function (e) {
				            
			                var items = this.items,
			                    values = e.detail.value;
			                for (var i = 0, lenI = items.length; i < lenI; ++i) {
			                    const item = items[i]
			                    if(values.includes(item.companyCode)){
			                        this.$set(item,'checked',true)
			                    }else{
			                        this.$set(item,'checked',false)
			                    }
			                }
							this.selectItem()
			},
			async tapSettingButton(){
				let list11 =[]
				console.log(this.items)
				this.selectArr.forEach((item)=>{
					
					list11.push({userPostCode: item.userPostCode,companyCode: item.companyCode})

				})
				
				let data ={
					time: this.time,				//	月份
					list: list11	
				}
				uni.showLoading({
					title: '提交中',
					mask: true
				});
				console.log(data)
				const res = await this.$http.post('/cm/new_customer_target',{data: data})
				uni.hideLoading()
				uni.showToast({
					title: '设置成功',
					duration: 1000
				});
				setTimeout(function() {
					uni.navigateBack({
						delta:  -1
					});
				}, 2000);
				console.log(res)
			},	
			selectItem(){
				this.selectArr = []
				this.items.forEach((item)=>{
					if (item.checked){
						this.selectArr.push(item)
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	 page{
		background: #F4F4F4;
		font-size: 15px;
	 }
	 .uni-list {
	 	background-color: #FFFFFF;
	 	position: relative;
	 	width: 100%;
	 	display: flex;
	 	flex-direction: column;
	 }
	 .uni-list:after {
	 	position: absolute;
	 	z-index: 10;
	 	right: 0;
	 	bottom: 0;
	 	left: 0;
	 	height: 1px;
	 	content: '';
	 	-webkit-transform: scaleY(.5);
	 	transform: scaleY(.5);
	 	background-color: #c8c7cc;
	 }
	 .uni-list::before {
	 	position: absolute;
	 	z-index: 10;
	 	right: 0;
	 	top: 0;
	 	left: 0;
	 	height: 1px;
	 	content: '';
	 	-webkit-transform: scaleY(.5);
	 	transform: scaleY(.5);
	 	background-color: #c8c7cc;
	 }
	 .uni-list-cell {
	 	position: relative;
	 	display: flex;
	 	flex-direction: row;
	 	
	 	align-items: center;
		border-bottom: 1upx solid #f4f4f4;
	 }
	 .uni-list-cells {
	 	position: relative;
	 	display: flex;
	 	flex-direction: row;
	 	justify-content: space-between;
	 	align-items: center;
	 	border-bottom: 1upx solid #f4f4f4;
	 }
	 .uni-list-cell-pd {
	 	padding: 20upx 30upx;
	 }
	 
	     
	    
</style>
