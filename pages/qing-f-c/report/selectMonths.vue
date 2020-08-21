<template>
	<view>
		<view class="inTabbar box_shadow" >
			<view style="width:100%;height: 7upx;"></view>
			<view class="flex_sa">
				<view class="tabItem fs_16"
					v-for="(item,index) of items" 
					:key= "index" 
					:class= "activeIndex==index?'active':''"
					 @tap= "tabSwitch(index)"
					:data-index='activeIndex'>
					<text>{{item}}</text>
				</view>
			</view>
		</view>
		<view style="height: 20upx;background: #F4F4F4;">
		</view>
		<view v-if="activeIndex == 0" class="content" style="line-height: 35px;">
			
			<view style="font-size: 18px;font-weight:500;" @tap="tapDateIndex(1)" :style="{color: dateIndex==1?'#ff6000':''}">上个月</view>
			
		</view>
		<view v-if="activeIndex == 1" class="content" style="display: flex;">
			
			<picker mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange">
				<view class="timeBox">{{date}}</view>
			</picker>
			
			<view class="flex_c">
				<view class="timeLine"></view>
			</view>
			<picker mode="date" :value="dateEnd" :start="startDate" :end="endDate" @change="bindDateChangeEnd">
				<view class="timeBox">{{dateEnd}}</view>
			</picker>
		</view>
		<view class="fixed_bottom box_shadow_btn">
		  <button class="btn_right" @tap="submit" hover-class="none">提交</button>
		</view>
	</view>
</template>

<script>
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
	
	function showWeekFirstDay()     
	{     
	    var Nowdate=new Date();     
	    var WeekFirstDay=new Date(Nowdate-(Nowdate.getDay()-1)*86400000);     
	    let M=Number(WeekFirstDay.getMonth())+1     
	    return Nowdate.getFullYear()+"-"+M+"-"+WeekFirstDay.getDate();     
	}
	function showLastMonthStart()
	{     
	    var Nowdate=new Date();     
	    var MonthFirstDay=new Date(Nowdate.getYear(),Nowdate.getMonth(),1);     
	    let M=Number(MonthFirstDay.getMonth())     
	    return Nowdate.getFullYear()+"-"+M+"-"+'01';     
	}
	function showLastMonthEnd()
	{     
	    var Nowdate=new Date();     
	    var MonthFirstDay=new Date(Nowdate.getYear(),Nowdate.getMonth(),1);     
	    let M=Number(MonthFirstDay.getMonth())+1     
	    return Nowdate.getFullYear()+"-"+M+"-"+'01';     
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
				type:'',
				items: ['时间','自定义'],
				activeIndex: 0,
				dateIndex: -1,
				date: getDate({
					format: true
				}),
				start1Date: getDate({
					format: true
				}),
				
				dateEnd: getDate({
					format: true
				}),
				label: ''
			};
		},
		onLoad:function(options){
			this.type = options.type
		},
		methods:{
			bindDateChange: function(e) {
				this.date = e.target.value
			},
			bindDateChangeEnd:function(e){
				this.dateEnd = e.target.value
			},
			tapDateIndex:function(e){
				this.dateIndex = e
				if (e == 1){
					this.start1Date = showLastMonthStart()
					this.dateEnd = showLastMonthEnd({format: true})	
					console.log(this.start1Date)
					this.label = '上个月'
				}
			},
			tabSwitch:function(index){
				this.activeIndex = index
				console.log(this.activeIndex)
			},
			handleMonth: function(para){
				let tmp = para.split('-')
				return tmp[0]+ '-' + tmp[1]+'-'+'01'
			},
			submit:function(){
				let pages = getCurrentPages();
				let currPage = pages[pages.length - 1]; //当前页面
				let prevPage = pages[pages.length - 2]; //上一个页面
				if (this.type ==0){
					if (this.activeIndex == 0){
						prevPage.$vm.selectTime.time0.startTime = this.start1Date
						prevPage.$vm.selectTime.time0.endTime = showLastMonthEnd()
						prevPage.$vm.label.label0= this.label
					}else if (this.activeIndex == 1){
						
						prevPage.$vm.selectTime.time0.startTime = this.handleMonth(this.date) 
						prevPage.$vm.selectTime.time0.endTime =  this.handleMonth(this.dateEnd) 
						prevPage.$vm.label.label1 = '自定义'
							
					}
					prevPage.$vm.fetchList0()
				}
				if (this.type ==1){
					if (this.activeIndex == 0){
						prevPage.$vm.selectTime.time1.startTime = this.start1Date
						prevPage.$vm.selectTime.time1.endTime = showLastMonthEnd()
						prevPage.$vm.label.label1= this.label
					}else if (this.activeIndex == 1){
						prevPage.$vm.selectTime.time1.startTime = this.handleMonth(this.date)
						prevPage.$vm.selectTime.time1.endTime =  this.handleMonth(this.dateEnd)
						prevPage.$vm.label.label1 = '自定义'
							
					}
					prevPage.$vm.fetchList1()
				}else if (this.type ==2){
					if (this.activeIndex == 0){
						prevPage.$vm.selectTime.time2.startTime = this.start1Date
						prevPage.$vm.label.label2 = this.label
					}else if (this.activeIndex == 1){
						prevPage.$vm.selectTime.time2.startTime = this.date
						prevPage.$vm.selectTime.time2.endTime =  this.dateEnd
						prevPage.$vm.label.label2 = '自定义'
							
					}
					prevPage.$vm.fetchList2()
				}else if (this.type == 3){
					if (this.activeIndex == 0){
						prevPage.$vm.selectTime.time3.startTime = this.start1Date
						prevPage.$vm.label.label3 = this.label
					}else if (this.activeIndex == 1){
						prevPage.$vm.selectTime.time3.startTime = this.date
						prevPage.$vm.selectTime.time3.endTime =  this.dateEnd
						prevPage.$vm.label.label3 = '自定义'
							
					}
					prevPage.$vm.fetchList3()
				}else if (this.type == 4){
					
					if (this.activeIndex == 0){
						prevPage.$vm.selectTime.time4.startTime = this.start1Date
						prevPage.$vm.label.label4 = this.label
					}else if (this.activeIndex == 1){
						prevPage.$vm.selectTime.time4.startTime = this.date
						prevPage.$vm.selectTime.time4.endTime =  this.dateEnd
						prevPage.$vm.label.label4 = '自定义'
							
					}
					prevPage.$vm.fetchList4()
				}
				else if (this.type == 5){
					
					if (this.activeIndex == 0){
						prevPage.$vm.selectTime.time5.startTime = this.start1Date
						prevPage.$vm.label.label5 = this.label
					}else if (this.activeIndex == 1){
						prevPage.$vm.selectTime.time5.startTime = this.date
						prevPage.$vm.selectTime.time5.endTime =  this.dateEnd
						prevPage.$vm.label.label5 = '自定义'
							
					}
					prevPage.$vm.fetchList5()
						
				}
				uni.navigateBack({
					delta: -1
				});
			}
		}
		
	}
</script>

<style lang="scss">

  .inTabbar{
  		display: flex;
  		flex-direction: column;
  		justify-content: space-around;
  		width: 100%;
  		background-color: #FFFFFF;
  	
  		height: 88upx;
  		
  		.tabItem {
  			display: flex;
  			justify-content: center;
  			align-items: center;
  			font-weight: 500;
             height: 81upx;
  			.tabText{
  				color: black;
  			}
  		  
  		}
  	}
     .active {
     		color: #FF6000;
     		border-bottom: 4upx solid #FF6000;
     }
	 
	 .fixed_bottom{
	   width: 750upx;
	   position: fixed;
	   bottom: 0;
	   display: flex;
	   z-index: 999;
	 }
	 .btn_right{
	   width: 100%;
	   background-color: #FF6000;
	   color: #fff;
	   font-size: 16px;
	   line-height: 98upx;
	   
	 }
	 .content{
		padding: 35upx 40upx; 
	 }
	 .timeBox{
		 display: flex;
		 justify-content: center;
		 align-items: center;
		 width:274upx;
		 height:73upx;
		 border:1upx solid rgba(193,193,193,1);
		 border-radius:4upx;
	 }
	 .timeLine{
		 width:70upx;
		 height:5upx;
		 margin: 0 20upx;
		 background:rgba(167,167,167,1);
	 }
</style>
