<template>
	<view id="outView">
		<view class="inTabbar box_shadow" id="inTabbar">
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
		<view class="box-shawn" style="margin-top: 108upx;padding-bottom: 30upx;" id="tabbar1">
			<view class="blockWrap">
				<view class="flex_c" style="height: 84upx;border-bottom: 1upx solid #ECECEC;">
					<view class="line"></view>
					<view class="title">业绩目标</view>
				</view>
				<view class="flex_sb" style="align-items: center;margin-left: -30upx;">
					<view style="background: #FFFFFF;height: 60upx;">
						
					</view>
					<view @tap="toSelectTime(1)" class="flex_c_c">
						<view>
							{{ label.label1}}
						</view>
						<view class="menu">
							
						</view>
					</view>
				</view>
				<view class="flex_c" style="height: 70upx;">
					成交金额
				</view>
				<view style="padding: 10upx 30upx;">
					<myProgress :percent='comPercent' :target="content1.targetMoney" :current="content1.turnover" unit="万元"></myProgress>
				</view>
				<view class="flex_c" style="height: 70upx;">
					开发客户数
				</view>
				<view style="padding: 10upx 30upx;">
					<myProgress :percent='comPercentCount' :target="content1.targetCount" :current="content1.companyCount" unit="人"></myProgress>
				</view>
				<!-- <view style="margin-top: 20upx;">
					<t-table @change="change">
					    <t-tr>
					        <t-th>帮办</t-th>
					        <t-th>目标金额</t-th>
					        <t-th>已成交</t-th>
					        <t-th>目标客户</t-th>
					        <t-th>已开发</t-th>
					    </t-tr>
					    <t-tr v-for="(item,index) in content1.list" :key="index">
					        <t-td>{{ item.realName}}</t-td>
					        <t-td>{{ item.targetMoney }}</t-td>
					        <t-td>{{ item.turnover }}</t-td>
					        <t-td>{{ item.targetCount }}</t-td>
					        <t-td>{{ item.companyCount }}</t-td>
					    </t-tr>
					</t-table>
				</view> -->
			</view>
			<!-- <tongjiColor title="高斌丰" levelA=80 levelB=80 levelC=80 levelD=80></tongjiColor> -->
		</view>
		<view class="box-shawn" style="margin-top: 20upx;padding-bottom: 30upx;" id="tabbar2">
			<view class="blockWrap">
				<view class="flex_c" style="height: 84upx;border-bottom: 1upx solid #ECECEC;">
					<view class="line"></view>
					<view class="title">业绩统计</view>
				</view>
				<view class="flex_sb" style="align-items: center;margin-left: -30upx;">
					<view style="background: #FFFFFF;height: 60upx;">
						<!-- <ms-dropdown-menu>
							
						    <ms-dropdown-item v-model="userPostCode2" :list="userPostList2" @input="filterInput(2)" v-if="userPostList2.length>0"></ms-dropdown-item>
				            <ms-dropdown-item v-model="regionCode2" :list="regionCodeList2" @input="filterInput(2)" v-if="regionCodeList2.length>0"></ms-dropdown-item>
						</ms-dropdown-menu> -->
					</view>
					<view @tap="toSelectTime(2)" class="flex_c_c">
						<view>
							{{label.label2 }}
						</view>
						<view class="menu">
							
						</view>
					</view>
				</view>
				<view class="flex">
					<view style="width:50%;line-height: 30px;border-right: 2upx solid #ECECEC;">
						<view class="flex_c_c labelTitle">总金额</view>
						<view class="flex_c_c"><text class="numberFont">{{content2.totalMoney||0}}</text><text class="spanFont">元</text></view>
						<view class="flex_c_c labelTitle">订单笔数</view> 
						<view class="flex_c_c"><text class="numberFont">{{content2.orderCount||0}}</text><text class="spanFont">笔</text></view>
						<view class="flex_c_c labelTitle">交易总数量</view>
						<view class="flex_c_c"><text class="numberFont">{{content2.meterNumber||0}}</text><text class="spanFont">米</text></view>
					</view>
					<view style="width:50%;line-height: 30px;">
						<view class="flex_c_c labelTitle">应收金额</view>
						<view class="flex_c_c"><text class="numberFont">{{content2.planMoney||0}}</text><text class="spanFont">元</text></view>
						<view class="flex_c_c labelTitle">实收金额</view> 
						<view class="flex_c_c"><text class="numberFont">{{content2.realMoney||0}}</text><text class="spanFont">元</text></view>
						<view class="flex_c_c labelTitle">金融逾期</view>
						<view class="flex_c_c"><text class="numberFont">0</text><text class="spanFont"></text></view>
					</view>
				</view>
				
				
			</view>	
		</view>
		<view class="box-shawn" style="margin-top: 20upx;padding-bottom: 30upx;" id="tabbar3">
			<view class="blockWrap">
				<view class="flex_c" style="height: 84upx;border-bottom: 1upx solid #ECECEC;">
					<view class="line"></view>
					<view class="title">客户跟进</view>
				</view>
				<view class="flex_sb" style="align-items: center;margin-left: -30upx;">
					<view style="background: #FFFFFF;height: 60upx;">
						<!-- <ms-dropdown-menu>
							
						    <ms-dropdown-item v-model="userPostCode3" :list="userPostList3" @input="filterInput(3)" v-if="userPostList3.length>0"></ms-dropdown-item>
				            <ms-dropdown-item v-model="regionCode3" :list="regionCodeList3" @input="filterInput(3)" v-if="regionCodeList3.length>0"></ms-dropdown-item>
						</ms-dropdown-menu> -->
					</view>
					<view @tap="toSelectTime(3)" class="flex_c_c">
						<view>
							{{label.label3 }}
						</view>
						<view class="menu">
							
						</view>
					</view>
				</view>
				<view class="flex">
					<view style="width:50%;line-height: 30px;">
						<view class="flex_c_c labelTitle">跟进家数</view>
						<view class="flex_c_c"><text class="numberFont">{{content3.companyCount || 0}}</text><text class="spanFont">家</text></view>
					</view>
					<view style="width:50%;line-height: 30px;">
						<view class="flex_c_c labelTitle">跟进次数</view>
						<view class="flex_c_c"><text class="numberFont">{{content3.followCount || 0}}</text><text class="spanFont">次</text></view>
					</view>
				</view>
				 <block v-for="(item,index) in content3.list" :key="index">
					 <tongjiColor :title="item.realName" :levelA='item.aCount' :levelB='item.bCount' :levelC='item.cCount' :levelD='item.dCount'></tongjiColor>
				 </block>
				 
				
				 <view class="flex_c" style="height: 50upx;" v-if="content3.list.length > 0">
					 <view style="font-size: 10px;color: #999999;">次数</view>
					 <view style="width: 600upx;font-size:10px;color: #707070;padding-left:45upx;" class="flex_sb">
						 <view>0</view>
						 <view>100</view>
						 <view>200</view>
						 <view>300</view>
						 <view>400</view>
						 <view>500</view>

					 </view>
				 </view>
				 <view class="flex_sb" v-if="content3.list.length > 0">
					 <view class="flex_c">
						 <view style="height:12upx;width: 12upx;background: #51E88A;"></view>
						 <view style="padding-left: 10upx;font-size: 11px;color: #333333">A级客户</view>
					 </view>
					 <view class="flex_c">
						 <view style="height:12upx;width: 12upx;background: #3293F4;"></view>
						 <view style="padding-left: 10upx;font-size: 11px;color: #333333">B级客户</view>
					 </view>
					 <view class="flex_c">
						 <view style="height:12upx;width: 12upx;background: #F89D10;"></view>
						 <view style="padding-left: 10upx;font-size: 11px;color: #333333">C级客户</view>
					 </view>
					 <view class="flex_c">
						 <view style="height:12upx;width: 12upx;background: #B350E7;"></view>
						 <view style="padding-left: 10upx;font-size: 11px;color: #333333">D级客户</view>
					 </view>
					 <view class="flex_c">
						 <view style="height:12upx;width: 12upx;background: #DADADA;"></view>
						 <view style="padding-left: 10upx;font-size: 11px;color: #333333">E级客户</view>
					 </view>
				 </view>
				
			</view>
		</view>
	    <view class="box-shawn" style="margin-top: 20upx;padding-bottom: 30upx;" id="tabbar4">
	    	<view class="blockWrap">
	    		<view class="flex_c" style="height: 84upx;border-bottom: 1upx solid #ECECEC;">
	    			<view class="line"></view>
	    			<view class="title">潜在订单</view>
	    		</view>
	    		<view class="flex_sb" style="align-items: center;margin-left: -30upx;">
	    			<view style="background: #FFFFFF;height: 60upx;">
<!-- 	    				<ms-dropdown-menu>
	    					
	    				    <ms-dropdown-item v-model="userPostCode4" :list="userPostList4" @input="filterInput(4)" v-if="userPostList4.length>0"></ms-dropdown-item>
	                        <ms-dropdown-item v-model="regionCode4" :list="regionCodeList4" @input="filterInput(4)" v-if="regionCodeList4.length>0"></ms-dropdown-item>
	    				</ms-dropdown-menu> -->
	    			</view>
	    			<view @tap="toSelectTime(4)" class="flex_c_c">
	    				<view>
	    					{{label.label4 }}
	    				</view>
	    				<view class="menu">
	    					
	    				</view>
	    			</view>
	    		</view>
	    		<view class="flex">
	    			<view style="width:25%;line-height: 30px;">
	    				<view class="flex_c_c labelTitle">跟进中</view>
	    				<view class="flex_c_c"><text class="numberFont">{{content4.following || 0}}</text><text class="spanFont">家</text></view>
	    			</view>
	    			<view style="width:25%;line-height: 30px;">
	    				<view class="flex_c_c labelTitle">成交</view>
	    				<view class="flex_c_c"><text class="numberFont">{{content4.success || 0}}</text><text class="spanFont">次</text></view>
	    			</view>
					<view style="width:25%;line-height: 30px;">
						<view class="flex_c_c labelTitle">丢单</view>
						<view class="flex_c_c"><text class="numberFont">{{content4.failed || 0}}</text><text class="spanFont">次</text></view>
					</view>
					<view style="width:25%;line-height: 30px;">
						<view class="flex_c_c labelTitle">丢单率</view>
						<view class="flex_c_c"><text class="numberFont">{{content4.failedProbability || 0}}</text><text class="spanFont">%</text></view>
					</view>
	    		</view>
	    		
	    	</view>
	    	
	    </view>
	    <view class="box-shawn" style="margin-top: 20upx;padding-bottom: 30upx;" id="tabbar5">
	    	<view class="blockWrap">
	    		<view class="flex_c" style="height: 84upx;border-bottom: 1upx solid #ECECEC;">
	    			<view class="line"></view>
	    			<view class="title">询价统计</view>
	    		</view>
	    		<view class="flex_sb" style="align-items: center;margin-left: -30upx;">
	    			<view style="background: #FFFFFF;height: 60upx;">
	    				<!-- <ms-dropdown-menu>
	    					
	    				    <ms-dropdown-item v-model="userPostCode5" :list="userPostList5" @input="filterInput(5)" v-if="userPostList5.length>0"></ms-dropdown-item>
	                        <ms-dropdown-item v-model="regionCode5" :list="regionCodeList5" @input="filterInput(5)" v-if="regionCodeList5.length>0"></ms-dropdown-item>
	    				</ms-dropdown-menu> -->
	    			</view>
	    			<view @tap="toSelectTime(5)" class="flex_c_c">
	    				<view>
							{{ label.label5}}
						</view>
						<view class="menu">
							
						</view>
	    			</view>
					
	    		</view>
	    		<view class="flex">
	    			<view style="width:25%;line-height: 30px;">
	    				<view class="flex_c_c labelTitle">常规询价</view>
	    				<view class="flex_c_c"><text class="numberFont">{{content5.routine ||0}}</text><text class="spanFont">家</text></view>
	    			</view>
	    			<view style="width:25%;line-height: 30px;">
	    				<view class="flex_c_c labelTitle">找样询价</view>
	    				<view class="flex_c_c"><text class="numberFont">{{content5.sample ||0}}</text><text class="spanFont">次</text></view>
	    			</view>
	    			<view style="width:25%;line-height: 30px;">
	    				<view class="flex_c_c labelTitle">成交</view>
	    				<view class="flex_c_c"><text class="numberFont">{{content5.bargain ||0}}</text><text class="spanFont">次</text></view>
	    			</view>
	    			<view style="width:25%;line-height: 30px;">
	    				<view class="flex_c_c labelTitle">转化率</view>
	    				<view class="flex_c_c"><text class="numberFont">{{content5.conversion ||0}}</text><text class="spanFont">%</text></view>
	    			</view>
	    		</view>
	    		
	    	</view>
	    	<view style="height: 400upx;width: 100%;">
				
			</view>
	    </view>
	</view>
	
</template>

<script>
	import msDropdownMenu from '@/components/ms-dropdown/dropdown-menu.vue'
	import msDropdownItem from '@/components/ms-dropdown/dropdown-item.vue'
	import myProgress from '@/components/myProgress/myProgress.vue'
	import tongjiColor from '@/components/tongji-color.vue'
	import tTable from '@/components/t-table/t-table.vue';
	import tTh from '@/components/t-table/t-th.vue';
	import tTr from '@/components/t-table/t-tr.vue';
	import tTd from '@/components/t-table/t-td.vue';
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
			msDropdownMenu,
			msDropdownItem,
			myProgress,
			tongjiColor,
			tTable,
			tTh,
			tTr,
			tTd
		},
		computed:{
			comPercent:function(){
				if (this.content1.targetMoney ==0){
					return 0
				}else {
					return (this.content1.turnover/this.content1.targetMoney*100)
				}
			},
			comPercentCount:function(){
				if (this.content1.targetCount ==0){
					return 0
				}else {
					return (this.content1.companyCount/this.content1.targetCount*100)
				}
			},
			
		
		},
		data() {
			return {
				postCode: '',
				userPostList1:[{value: 2,text: '采购'},{value: 1,text:'销售'}],
				userPostList2:[{value: 2,text: '采购'},{value: 1,text:'销售'}],
				userPostList3:[{value: 2,text: '采购'},{value: 1,text:'销售'}],
				userPostList4:[{value: 2,text: '采购'},{value: 1,text:'销售'}],
				userPostList5:[{value: 2,text: '采购'},{value: 1,text:'销售'}],
				items: ['业绩目标','业绩统计','客户跟进','潜在订单','询价统计'],
				items2: [],
				activeIndex: -1,
				activeIndex2: -1,
				regionCodeList1:[],
				regionCodeList2:[],
				regionCodeList3:[],
				regionCodeList4:[],
				regionCodeList5:[],
				selectTime:{
					time1:{
						startTime: showMonthFirstDay({format: true}),
						endTime: getDate({
						   format: true
						})
					},
					time2:{
						startTime: showMonthFirstDay({format: true}),
						endTime: getDate({
						   format: true
						})
					},
					time3:{
						startTime: showMonthFirstDay({format: true}),
						endTime: getDate({
						   format: true
						})
					},
					time4:{
						startTime: showMonthFirstDay({format: true}),
						endTime: getDate({
						   format: true
						})
					},
					time5:{
						startTime: showMonthFirstDay({format: true}),
						endTime: getDate({
					       format: true
				        })
					}
				},
				regionCode1: 0,
				regionCode2: 0,
				regionCode3: 0,
				regionCode4: 0,
				regionCode5: 0,
				userPostCode1: 1,
				userPostCode2: 1,
				userPostCode3: 1,
				userPostCode4: 1,
				userPostCode5: 1,
				percent: 65,
				content1:'',
				content2:'',
				content3: '',
				content4:'',
				content5:'',
				content2Detail:{},
				label:{
					label1: '本月',
					label2: '本月',
					label3: '本月',
					label4: '本月',
					label5: '本月'
				},
				tableList: [{
				        id: 0,
				        name: '张三',
				        age: '19',
				        hobby: '游泳'
				    },
				    {
				        id: 1,
				        name: '李四',
				        age: '21',
				        hobby: '绘画'
				    },
				    {
				        id: 2,
				        name: '王二',
				        age: '29',
				        hobby: '滑板'
				    },
				    {
				        id: 3,
				        name: '码字',
				        age: '20',
				        hobby: '蹦极'
				    }
				]
			};
		},
		onLoad:function(){
			// this.getBuyDeputy()
			this.getRegionCode()
			this.postCode = uni.getStorageSync('pupDefault')
			this.fetchList1()
			this.fetchList2()
			this.fetchList3()
			this.fetchList4()
			this.fetchList5()
		},
		methods:{
			async fetchList1(){
				
				let data = {
					postCode: this.postCode,		//职位编码
					buyOrSell: this.userPostCode1,		//1销售，2采购 非必填
					regionCode: this.regionCode1,	//区域编码 非必填
					startTime: this.selectTime.time1.startTime,		//开始时间
					endTime	: this.selectTime.time1.endTime	//结束时间
			
				}
				console.log(data)
				const res = await this.$http.get('/data/target',{data: data})
				console.log(res)
				this.content1 = res.data.data
				
			},
			async fetchList2(){
				
				let data = {
					postCode: this.postCode,		//职位编码
					buyOrSell: this.userPostCode2,		//1销售，2采购 非必填
					regionCode: this.regionCode2,	//区域编码 非必填
					startTime: this.selectTime.time2.startTime,		//开始时间
					endTime	: this.selectTime.time2.endTime	//结束时间
			
				}
				console.log(data)
				const res = await this.$http.get('/data/performance',{data: data})
				console.log(res)
				this.activeIndex2 = -1
				this.items2 =[]
				this.content2Detail = {}
				this.content2 = res.data.data
				this.content2.list.forEach((item)=>{
					this.items2.push(item.realName)
				})
				
			},
			async fetchList3(){
				
				let data = {
					postCode: this.postCode,		//职位编码
					buyOrSell: this.userPostCode3,		//1销售，2采购 非必填
					regionCode: this.regionCode3,	//区域编码 非必填
					startTime: this.selectTime.time3.startTime,		//开始时间
					endTime	: this.selectTime.time3.endTime	//结束时间
			
				}
				console.log(data)
				const res = await this.$http.get('/data/follow',{data: data})
				console.log(res)
				this.content3 = res.data.data
				
			},
			async fetchList4(){
				
				let data = {
					postCode: this.postCode,		//职位编码
					buyOrSell: this.userPostCode4,		//1销售，2采购 非必填
					regionCode: this.regionCode4,	//区域编码 非必填
					startTime: this.selectTime.time4.startTime,		//开始时间
					endTime	: this.selectTime.time4.endTime	//结束时间
			
				}
				console.log(data)
				const res = await this.$http.get('/data/latent',{data: data})
				console.log(res)
				this.content4 = res.data.data
				
			},
			async fetchList5(){
				
				let data = {
					postCode: this.postCode,		//职位编码
					buyOrSell: this.userPostCode5,		//1销售，2采购 非必填
					regionCode: this.regionCode5,	//区域编码 非必填
					startTime: this.selectTime.time5.startTime,		//开始时间
					endTime	: this.selectTime.time5.endTime	//结束时间

				}
				console.log(data)
				const res = await this.$http.get('/data/inquiry',{data: data})
				console.log(res)
				this.content5 = res.data.data.list[0]
				
			},
			
			async getRegionCode(){
				const res = await this.$http.get('/choose/region',{})
				let tmp = res.data.data.list
				tmp.forEach((item)=>{
					this.regionCodeList1.push({text:item.label,value:item.id})
					this.regionCodeList2.push({text:item.label,value:item.id})
					this.regionCodeList3.push({text:item.label,value:item.id})
					this.regionCodeList4.push({text:item.label,value:item.id})
					this.regionCodeList5.push({text:item.label,value:item.id})
					
				})
				this.regionCodeList1.unshift({text:'全部区域',value: 0})
				this.regionCodeList2.unshift({text:'全部区域',value: 0})
				this.regionCodeList3.unshift({text:'全部区域',value: 0})
				this.regionCodeList4.unshift({text:'全部区域',value: 0})
				this.regionCodeList5.unshift({text:'全部区域',value: 0})
				
			},
			filterInput:function(type){
				if (type ==5 ){
					this.fetchList5()
				}
				else if (type ==4){
					this.fetchList4()
				}else if (type ==3){
					this.fetchList3()
					
				}else if (type==2){
					this.fetchList2()
				}else if (type==1){
					this.fetchList1()
				}
				
			},
			toSelectTime:function(index){
				uni.navigateTo({
					url: `./selectTime?type=${index}`
				});
			},
			tabSwitch2:function(index){
				this.activeIndex2 = index
				this.content2Detail = this.content2.list[this.activeIndex2]
			},
			tabSwitch:function(index){
				this.activeIndex = index
			    
				switch (index){
						case 0:
						    this.selectorQuery("#outView","#tabbar1");
							
							break;
						case 1:
						    this.selectorQuery("#outView","#tabbar2");
							
							break;
						case 2:
						   this.selectorQuery("#outView","#tabbar3");
						   
						   break;
						case 3:
						   this.selectorQuery("#outView","#tabbar4");
						  
						   break;
						case 4:
						   this.selectorQuery("#outView","#tabbar5");
						  
						   break;
					}
				
			},
			selectorQuery:function(outView,currentView){
				uni.createSelectorQuery().select(outView).boundingClientRect(data=>{
				    uni.createSelectorQuery().select(currentView).boundingClientRect((res)=>{
							uni.pageScrollTo({
							    duration:0,
							    scrollTop:res.top - data.top 
							})
					    }).exec()
				}).exec();
			},
		}
	
	}
</script>

<style lang="scss">
page{
	background: #F4F4F4;
	font-size: 15px;
}
.spanFont{
	font-size: 13px;
}
.numberFont{
	font-size: 16px;
	font-weight: bold;
}
 .inTabbar{
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		width: 100%;
		background-color: #FFFFFF;
		z-index: 99;
		position: fixed;
		height: 88upx;
		top: 0;
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
.active2 {
		color: #3999F4;
		border-bottom: 4upx solid #3999F4;
}
.tabItem2{
	font-size: 14px;
	margin-right: 30upx;
}
 .blockWrap{
	 padding: 0 30upx;
 }
 .box-shawn{
	width:750upx;
	 
	background: #FFFFFF; 
	box-shadow:0px 4px 8px 0px rgba(0, 0, 0, 0.05);
 }
 .line{
	width:6upx;
	height:28upx;
	background:rgba(255,102,0,1);
	border-radius:3upx; 
 }
 .title{
	 padding-left: 20upx;
	 font-size: 16px;
	 font-weight:bold;
	 color:rgba(0,0,0,1);
	 line-height:24upx;
 }
 .labelTitle{
	 font-size:15px;
	 color:#707070;
 }
 .menu{
        width: 30upx; 
		height: 3upx;
		border-top: 3upx solid #595959;
		border-bottom: 3upx solid #595959;
		background-color: #595959;
		padding: 10upx 0;
		margin-left: 10upx;
		background-clip:content-box;

 }
 .uni-swiper-tab {
 	width: 100%;
 	white-space: nowrap;
 	line-height: 100upx;
 	height: 100upx;
 	// border-bottom: 1px solid #c8c7cc;
 }
 
 .swiper-tab-list {
 	font-size: 30upx;
 	width: 150upx;
 	display: inline-block;
 	text-align: center;
 	color: #555;
 }
 
 .uni-tab-bar .active {
 	color: #007AFF;
 }
 
 .uni-tab-bar .swiper-box {
 	flex: 1;
 	width: 100%;
 	height: calc(100% - 100upx);
 }
 
 .uni-tab-bar-loading{
 	padding:20upx 0;
 }
 
</style>
