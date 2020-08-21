<template>
	<view id="outView">
		<view class="inTabbar box_shadow" id="inTabbar">
			
			<scroll-view scroll-x class="uni-swiper-tab" style="margin-top: 0;">
				<view class="flex_sa" style="width: 130%;">
					<view class="tabItem fs_16"
						v-for="(item,index) in items" 
						:key= "index" 
						:class= "activeIndex==index?'active':''"
						 @tap= "tabSwitch(index)"
						:data-index='activeIndex'>
						<text>{{item}}</text>
					</view>
				</view>
			</scroll-view>
		</view>
	<!-- ------业绩排行----------- -->
		<view class="box-shawn" style="margin-top: 108upx;padding-bottom: 30upx;" id="tabbar0">
			<view class="blockWrap">
				<view class="flex_c" style="height: 84upx;border-bottom: 1upx solid #ECECEC;justify-content: space-between;">
					<view class="flex_c">
						<view class="line"></view>
						<view class="title">业绩排行</view>
					</view>
					
					<view  class="flex_c_c">
						<view @tap='tapSelectDay(0,$event)' data-index='0'>
							<!-- 今日 -->
						</view>
						<view :style="{color: label.label0 ==1?'#ff6000':''}" @tap='tapSelectDay(0,$event)' data-index='1' style="padding-left: 10upx;">
							本月
						</view>
						<view @tap='tapSelectDay(0,$event)' :style="{color: label.label0 ==2?'#ff6000':''}" data-index="2" style="padding-left: 10upx;">
							上个月
						</view>
						<!-- <view>
							{{ label.label1}}
						</view> -->
						<view class="menu" @tap="toSelectTime(0)">
							
						</view>
					</view>
				</view>
		
				<scroll-view scroll-x class="uni-swiper-tab">
					<view class="flex">
						<view class="tabItemRegion"
							v-for="(item,index) of rangeList" 
							:key= "item.id" 
							:class= "rangeCode==item.id?'activeRegion':''"
							 @tap= "tabSwitchRange(0,item.id)"
							>
							<text>{{item.label}}</text>
						</view>
					</view>
				</scroll-view>
                 <view class="flex" style="margin-top:20upx;" v-if="rangeCode!==2">
                 	<view class="tabItem2"
                 		v-for="(item,index) in deputyList" 
                 		:key= "item.id" 
                 		:class= "deputyCode==item.id?'active2':''"
                 		 @tap= "tabSwitch2(item.id)"
                 		>
                 		<text>{{item.label}}</text>
                 	</view>
                 </view>
				 <scroll-view scroll-x class="uni-swiper-tab" style="margin-top:20upx;" v-if="rangeCode==2">
				 	<view class="flex">
				 		<view class="tabItem2"
				 			v-for="(item,index) in regionCodeList0" 
				 			:key= "item.id" 
				 			:class= "regionCode0==item.id?'active2':''"
				 			 @tap= "tabSwitchRegion(0,item.id,item.buyOrSell)"
				 			>
				 			<text>{{item.label}}</text>
				 		</view>
				 	</view>
				 </scroll-view>
				<scroll-view scroll-x class="uni-swiper-tab">
					<view style="width: 140%;">
						<t-table @change="change">
							<t-tr>
								<t-th>排名</t-th>
								<t-th>销售额/元</t-th>
								<t-th>{{rangeCode ==1?'区域':'帮办'}}</t-th>
								<t-th>开发客户数/家</t-th>
								<t-th>{{rangeCode ==1?'区域':'帮办'}}</t-th>
							</t-tr>
							<t-tr v-for="(item,index) in content0" :key="index">
								<t-td>{{ index+1}}</t-td>
								<t-td>{{ item.decimal ||0}}</t-td>
								<t-td>{{ item.decimalName ||0}}</t-td>
								<t-td>{{ item.count ||0}}</t-td>
								<t-td>{{ item.countName ||''}}</t-td>
								
							</t-tr>
						</t-table>
					</view>
				</scroll-view>
			</view>
			<!-- <tongjiColor title="高斌丰" levelA=80 levelB=80 levelC=80 levelD=80></tongjiColor> -->
		</view>
	<!-- ------业绩目标----------- -->
		<view class="box-shawn" style="margin-top: 20upx;padding-bottom: 30upx;" id="tabbar1">
			<view class="blockWrap">
				<view class="flex_c" style="height: 84upx;border-bottom: 1upx solid #ECECEC;justify-content: space-between;">
					<view class="flex_c">
						<view class="line"></view>
						<view class="title">业绩目标</view>
					</view>
					
					<view  class="flex_c_c">
						<view @tap='tapSelectDay(1,$event)' :style="{color: label.label1 ==0?'#ff6000':''}" data-index='0'>
							<!-- 今日 -->
						</view>
						<view @tap='tapSelectDay(1,$event)' :style="{color: label.label1 ==1?'#ff6000':''}" data-index='1' style="padding-left: 10upx;">
							本月
						</view>
						<view @tap='tapSelectDay(1,$event)' :style="{color: label.label1 ==2?'#ff6000':''}" data-index="2" style="padding-left: 10upx;">
							上个月
						</view>
						<!-- <view>
							{{ label.label1}}
						</view> -->
						<view class="menu" @tap="toSelectTime(1)">
							
						</view>
					</view>
				</view>

				<scroll-view scroll-x class="uni-swiper-tab" v-if="isShowFilter">
					<view class="flex">
						<view class="tabItemRegion"
							v-for="(item,index) in regionCodeList1" 
							:key= "item.id" 
							:class= "regionCode1==item.id?'activeRegion':''"
							 @tap= "tabSwitchRegion(1,item.id,item.buyOrSell)"
							>
							<text>{{item.label}}</text>
						</view>
					</view>
				</scroll-view>
					
				
				<view class="flex_c" style="height: 80upx;">
					交易总额<text style="font-size: 14px;">（万元）</text>
				</view>
				<view style="padding: 10upx 30upx;">
					<!-- <myProgress :percent='comPercent' :target="content1.targetMoney" :current="content1.turnover" unit="万元"></myProgress> -->
					<view :style="{width: comPercentWidth + '%'}" style="display: flex;justify-content: flex-end;padding: 10upx 0;">
						<view class="progressPercent">{{comPercent||0}}%</view>
					</view>
					<view style="background: #E9E9E9;height: 20upx;width:600upx;border-radius: 10upx;">
						<view class="progessClass" :style="{width: comPercent + '%'}"></view>
					</view>
					<view class="flex" style="margin-top: 5upx;">
						<view>
							0
						</view>
						<view style="flex-grow: 1;">
							<view :style="{width: comPercentWidth + '%'}" style="display: flex;justify-content: flex-end;">{{content1.turnover}}</view>
						</view>
						<view >
							<view @tap="toSelctList">
								{{content1.targetMoney}}
							</view>

						</view>
						
					</view>
					
				</view>
				<view class="flex_c" style="height: 70upx;">
					总开发客户数<text style="font-size: 14px;">（人）</text>
				</view>
				<view style="padding: 10upx 30upx;">
					<!-- <myProgress :percent='comPercent' :target="content1.targetMoney" :current="content1.turnover" unit="万元"></myProgress> -->
					<view :style="{width: comPercentCountWidth + '%'}" style="display: flex;justify-content: flex-end;padding: 10upx 0;">
						<view class="progressPercent">{{comPercentCount}}%</view>
					</view>
					<view style="background: #E9E9E9;height: 20upx;width:600upx;border-radius: 10upx;">
						<view class="progessClass" :style="{width: comPercentCount + '%'}"></view>
					</view>
					<view class="flex" style="margin-top: 5upx;">
						<view>
							0
						</view>
						<view style="flex-grow: 1;">
							<view :style="{width: comPercentCountWidth + '%'}" style="display: flex;justify-content: flex-end;">{{content1.companyCount}}</view>
						</view>
						<view> 
						     
						    <view>
								<text @tap="toSetTargetCustomer" style="color: #ff6000;padding-right: 10upx;" v-if="!isShowFilter">设置</text>
								<text @tap="toSelectTargetCustomer">{{content1.targetCount}}</text>
							</view>
							
						</view>
						
					</view>
					
				</view>
				<view style="margin-top: 20upx;">
					<t-table @change="change">
					    <t-tr>
					        <t-th>{{regionCode1==0?'区域':'帮办'}}</t-th>
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
				</view>
			</view>
			<!-- <tongjiColor title="高斌丰" levelA=80 levelB=80 levelC=80 levelD=80></tongjiColor> -->
		</view>
	<!-- ------业绩统计----------- -->
		<view class="box-shawn" style="margin-top: 20upx;padding-bottom: 30upx;" id="tabbar2">
			<view class="blockWrap">
				<view class="flex_c" style="height: 84upx;border-bottom: 1upx solid #ECECEC;justify-content: space-between;">
					<view class="flex_c">
						<view class="line"></view>
						<view class="title">业绩统计</view>
					</view>
					
					<view  class="flex_c_c">
						<view @tap='tapSelectDay(2,$event)' :style="{color: label.label2 ==0?'#ff6000':''}" data-index="0">
							 今日
						</view>
						<view @tap='tapSelectDay(2,$event)' :style="{color: label.label2 ==1?'#ff6000':''}" data-index="1" style="padding-left: 10upx;">
							本月
						</view>
						<view @tap='tapSelectDay(2,$event)' :style="{color: label.label2 ==2?'#ff6000':''}" data-index="2" style="padding-left: 10upx;">
							上个月
						</view>
						<!-- <view>
							{{ label.label1}}
						</view> -->
						<view class="menu" @tap="toSelectTime(2)">
							
						</view>
					</view>
				</view>
				<scroll-view scroll-x class="uni-swiper-tab" v-if="isShowFilter">
					<view class="flex">
						<view class="tabItemRegion"
							v-for="(item,index) in regionCodeList2" 
							:key= "item.id" 
							:class= "regionCode2==item.id?'activeRegion':''"
							 @tap= "tabSwitchRegion(2,item.id,item.buyOrSell)"
							>
							<text>{{item.label}}</text>
						</view>
					</view>
				</scroll-view>
				
				<view style="padding: 0 30upx;margin-top: 30upx;">	
					<view class="flex_sb">
						<view>
							<view class="flex_c_c labelTitle">交易金额</view>
							<view class="flex_c_c"><text class="numberFont">{{content2.totalMoney||0}}</text><text class="spanFont">元</text></view>
						</view>
						<view>
							<view class="flex_c_c labelTitle">交易数量</view>
							<view class="flex_c_c"><text class="numberFont">{{content2.meterNumber||0}}</text><text class="spanFont">米</text></view>
						</view>
						<view>
							<view class="flex_c_c labelTitle">订单笔数</view>
							<view class="flex_c_c"><text class="numberFont">{{content2.orderCount||0}}</text><text class="spanFont">笔</text></view>
						</view>
						
					</view>
					<view class="flex_sb" style="margin-top: 20upx;" v-if="userPostCode2!==2">
						<view>
							<view class="flex_c_c labelTitle">应收金额</view>
							<view class="flex_c_c"><text class="numberFont">{{content2.planMoney||0}}</text><text class="spanFont">元</text></view>
						</view>
						<view>
							<view class="flex_c_c labelTitle">实收金额</view>
							<view class="flex_c_c"><text class="numberFont">{{content2.realMoney||0}}</text><text class="spanFont">元</text></view>
						</view>
						<view>
							<view class="flex_c_c labelTitle">金融逾期</view>
							<view class="flex_c_c"><text class="numberFont">0</text><text class="spanFont">元</text></view>
						</view>
						
					</view>
					<view class="flex_sb" style="margin-top: 20upx;" v-if="userPostCode2!==1">
						<view>
							<view class="flex_c_c labelTitle">应付金额</view>
							<view class="flex_c_c"><text class="numberFont">{{content2.planMoney||0}}</text><text class="spanFont">元</text></view>
						</view>
						<view>
							<view class="flex_c_c labelTitle">实付金额</view>
							<view class="flex_c_c"><text class="numberFont">{{content2.realMoney||0}}</text><text class="spanFont">元</text></view>
						</view>
						<view>
							<view class="flex_c_c labelTitle">异常扣款</view>
							<view class="flex_c_c"><text class="numberFont">0</text><text class="spanFont">元</text></view>
						</view>	
					</view>
				</view>
				<scroll-view scroll-x class="uni-swiper-tab">
					<view style="width:180%;">
						<t-table @change="change">
							<t-tr>
								<t-th>{{regionCode2==0?'区域':'帮办'}}</t-th>
								<t-th>交易金额</t-th>
								<t-th>交易数量</t-th>
								<t-th>订单笔数</t-th>
								<t-th>应收/应付</t-th>
								<t-th>实收/实付</t-th>
								<t-th>异常/逾期</t-th>
							</t-tr>
							<t-tr v-for="(item,index) in content2.list" :key="index">
								<t-td>{{ item.realName || 0}}</t-td>
								<t-td>{{ item.totalMoney||0}}</t-td>
								<t-td>{{ item.meterNumber ||0}}</t-td>
								<t-td>{{ item.orderCount ||0}}</t-td>
								<t-td>{{ item.planMoney ||0}}</t-td>
								<t-td>{{ item.realMoney||0}}</t-td>
								<t-td>0</t-td>
							</t-tr>
						</t-table>
					</view>
				</scroll-view>
	        </view>
		</view>
	<!-- ----------客户数量-------------- -->
		<view class="box-shawn" style="margin-top: 20upx;padding-bottom: 30upx;" id="tabbar3">
			<view class="blockWrap">
				<view class="flex_c" style="height: 84upx;border-bottom: 1upx solid #ECECEC;justify-content: space-between;">
					<view class="flex_c">
						<view class="line"></view>
						<view class="title">客户数量</view>
					</view>
				</view>
				<scroll-view scroll-x class="uni-swiper-tab" v-if="isShowFilter">
					<view class="flex">
						<view class="tabItemRegion"
							v-for="(item,index) in regionCodeList6" 
							:key= "item.id" 
							:class= "regionCode6==item.id?'activeRegion':''"
							 @tap= "tabSwitchRegion(6,item.id,item.buyOrSell)"
							>
							<text>{{item.label}}</text>
						</view>
					</view>
				</scroll-view>
				
				<view style="margin-top: 30upx;">	
					<view class="flex_sb">
						<view>
							<view class="flex_c_c labelTitle">客户数</view>
							<view class="flex_c_c"><text class="numberFont">{{content6.totalCount||0}}</text></view>
						</view>
						<view>
							<view class="flex_c_c labelTitle">A级</view>
							<view class="flex_c_c"><text class="numberFont">{{content6.aCount||0}}</text></view>
						</view>
						<view>
							<view class="flex_c_c labelTitle">B级</view>
							<view class="flex_c_c"><text class="numberFont">{{content6.bCount||0}}</text></view>
						</view>
						<view>
							<view class="flex_c_c labelTitle">C级</view>
							<view class="flex_c_c"><text class="numberFont">{{content6.cCount||0}}</text></view>
						</view>
						<view>
							<view class="flex_c_c labelTitle">D级</view>
							<view class="flex_c_c"><text class="numberFont">{{content6.dCount||0}}</text></view>
						</view>
						<view>
							<view class="flex_c_c labelTitle">E级</view>
							<view class="flex_c_c"><text class="numberFont">{{content6.eCount||0}}</text></view>
						</view>
						
					</view>
					
					
				</view>
				<scroll-view scroll-x class="uni-swiper-tab">
					<view>
						<t-table @change="change">
							<t-tr>
								<t-th>{{regionCode6==0?'区域':'帮办'}}</t-th>
								<t-th>总客户数</t-th>
								<t-th>A级</t-th>
								<t-th>B级</t-th>
								<t-th>C级</t-th>
								<t-th>D级</t-th>
								<t-th>E级</t-th>
							</t-tr>
							<t-tr v-for="(item,index) in regionCode6==0?content6.list:content6.list[0].list" :key="index">
								<t-td>{{ regionCode6==0?item.regionName:item.realName ||''}}</t-td>
								<t-td>{{ item.totalCount ||0}}</t-td>
								<t-td>{{ item.aCount ||0}}</t-td>
								<t-td>{{ item.bCount ||0}}</t-td>
								<t-td>{{ item.cCount ||0}}</t-td>
								<t-td>{{ item.dCount ||0}}</t-td>
								<t-td>{{ item.eCount ||0}}</t-td>
							</t-tr>
						</t-table>
					</view>
				</scroll-view>
		    </view>
		</view>
		<!-- ------客户跟进----------- -->
	    <view class="box-shawn" style="margin-top: 20upx;padding-bottom: 30upx;" id="tabbar4">
	    	<view class="blockWrap">
	    		<view class="flex_c" style="height: 84upx;border-bottom: 1upx solid #ECECEC;justify-content: space-between;">
	    			<view class="flex_c">
	    				<view class="line"></view>
	    				<view class="title">客户跟进</view>
	    			</view>
					<view  class="flex_c_c">
						<view @tap='tapSelectDay(3,$event)' :style="{color: label.label3 ==0?'#ff6000':''}" data-index="0">
							 今日
						</view>
						<view @tap='tapSelectDay(3,$event)' :style="{color: label.label3 ==1?'#ff6000':''}" data-index="1" style="padding-left: 10upx;">
							本月
						</view>
						<view @tap='tapSelectDay(3,$event)' :style="{color: label.label3 ==2?'#ff6000':''}" data-index="2" style="padding-left: 10upx;">
							上个月
						</view>
						<!-- <view>
							{{ label.label1}}
						</view> -->
						<view class="menu" @tap="toSelectTime(3)">
							
						</view>
					</view>
	    		</view>
	    		<scroll-view scroll-x class="uni-swiper-tab" v-if="isShowFilter">
	    			<view class="flex">
	    				<view class="tabItemRegion"
	    					v-for="(item,index) in regionCodeList2" 
	    					:key= "item.id" 
	    					:class= "regionCode3==item.id?'activeRegion':''"
	    					 @tap= "tabSwitchRegion(3,item.id,item.buyOrSell)"
	    					>
	    					<text>{{item.label}}</text>
	    				</view>
	    			</view>
	    		</scroll-view>
	    		
	    		<view style="margin-top: 30upx;">	
	    			<view class="flex_sb">
	    				<view>
	    					<view class="flex_c_c labelTitle">跟进客户</view>
	    					<view class="flex_c_c"><text class="numberFont">{{content3.companyTotalCount||0}}</text></view>
	    				</view>
	    				<view>
	    					<view class="flex_c_c labelTitle">已跟进家数/次数</view>
	    					<view class="flex_c_c"><text class="numberFont">{{content3.followCompanyCount||0}}/{{content3.followCount||0}}</text></view>
	    				</view>
	    				<view>
	    					<view class="flex_c_c labelTitle">未跟进</view>
	    					<view class="flex_c_c"><text class="numberFont">{{content3.unFollowCount||0}}</text></view>
	    				</view>
	    				<view>
	    					<view class="flex_c_c labelTitle">逾期家数/次数</view>
	    					<view class="flex_c_c"><text class="numberFont">{{content3.unqualifiedCompanyCount||0}}/{{content3.unqualifiedFollowCount||0}}</text></view>
	    				</view>

	    			</view>

	    		</view>
	    		<scroll-view scroll-x class="uni-swiper-tab" v-if="regionCode3 ==0">
	    			<view>
	    				<t-table @change="change">
	    					<t-tr>
	    						<t-th>{{regionCode3==0?'区域':'帮办'}}</t-th>
	    						<t-th>总客户</t-th>
	    						<t-th>已跟进家数/次数</t-th>
	    						<t-th>未跟进</t-th>
	    						<t-th>逾期家数/次数</t-th>
	    						
	    					</t-tr>
	    					<t-tr v-for="(item,index) in content3.list" :key="index">
								<t-td>{{ item.regionName||0}}</t-td>
	    						<t-td>{{ item.companyTotalCount||0}}</t-td>
	    						<t-td>{{ item.followCompanyCount||0}}/{{item.followCount||0}}</t-td>
	    						<t-td>{{ item.unFollowCount||0 }}</t-td>
	    						<t-td>{{ item.unqualifiedCompanyCount||0}}/{{item.unqualifiedFollowCount||0}}</t-td>
	    						
	    					</t-tr>
	    				</t-table>
	    			</view>
	    		</scroll-view>
				<view v-if="regionCode3 !==0" style="margin-top: 20upx;">
					<t-table @change="change">
						<t-tr>
							<t-th>帮办</t-th>
							<t-th>总客户</t-th>
							<t-th>已跟进家数/次数</t-th>
							<t-th>未跟进</t-th>
							<t-th>逾期家数/次数</t-th>
							
						</t-tr>
						<!-- <t-tr v-for="(item,index) in content3.list" :key="index">
							<t-td>{{ item.regionName||0}}</t-td>
							<t-td>{{ item.companyTotalCount||0}}</t-td>
							<t-td>{{ item.followCompanyCount||0}}/{{item.followCount||0}}</t-td>
							<t-td>{{ item.unFollowCount||0 }}</t-td>
							<t-td>{{ item.unqualifiedCompanyCount||0}}/{{item.unqualifiedFollowCount||0}}</t-td>
							
						</t-tr> -->
						<t-tr>
							<t-td>全部/A</t-td>
							<t-td>{{ content3.list[0].aCompanyTotalCount||0}}</t-td>
							<t-td>{{ content3.list[0].aFollowCompanyCount||0}}/{{content3.list[0].aFollowCount||0}}</t-td>
							<t-td>{{ content3.list[0].aUnFollowCount||0 }}</t-td>
							<t-td>{{ content3.list[0].aUnqualifiedCompanyCount||0}}/{{content3.list[0].aUnqualifiedFollowCount||0}}</t-td>
							
						</t-tr>
						<t-tr>
							<t-td>全部/B</t-td>
							<t-td>{{ content3.list[0].bCompanyTotalCount||0}}</t-td>
							<t-td>{{ content3.list[0].bFollowCompanyCount||0}}/{{content3.list[0].bFollowCount||0}}</t-td>
							<t-td>{{ content3.list[0].bUnFollowCount||0 }}</t-td>
							<t-td>{{ content3.list[0].bUnqualifiedCompanyCount||0}}/{{content3.list[0].bUnqualifiedFollowCount||0}}</t-td>
							
						</t-tr>
						<t-tr>
							<t-td>全部/C</t-td>
							<t-td>{{ content3.list[0].cCompanyTotalCount||0}}</t-td>
							<t-td>{{ content3.list[0].cFollowCompanyCount||0}}/{{content3.list[0].cFollowCount||0}}</t-td>
							<t-td>{{ content3.list[0].cUnFollowCount||0 }}</t-td>
							<t-td>{{ content3.list[0].cUnqualifiedCompanyCount||0}}/{{content3.list[0].cUnqualifiedFollowCount||0}}</t-td>
						</t-tr>
						<block v-for="(item,index) in content3.list[0].list" :key="index">
							<t-tr>
								<t-td>{{item.realName}}/A</t-td>
								<t-td>{{ item.aCompanyTotalCount||0}}</t-td>
								<t-td>{{ item.aFollowCompanyCount||0}}/{{item.aFollowCount||0}}</t-td>
								<t-td>{{ item.aUnFollowCount||0 }}</t-td>
								<t-td>{{ item.aUnqualifiedCompanyCount||0}}/{{item.aUnqualifiedFollowCount||0}}</t-td>
								
							</t-tr>
							<t-tr>
								<t-td>{{item.realName}}/B</t-td>
								<t-td>{{ item.bCompanyTotalCount||0}}</t-td>
								<t-td>{{ item.bFollowCompanyCount||0}}/{{item.bFollowCount||0}}</t-td>
								<t-td>{{ item.bUnFollowCount||0 }}</t-td>
								<t-td>{{ item.bUnqualifiedCompanyCount||0}}/{{item.bUnqualifiedFollowCount||0}}</t-td>
								
							</t-tr>
							<t-tr>
								<t-td>{{item.realName}}/C</t-td>
								<t-td>{{ item.cCompanyTotalCount||0}}</t-td>
								<t-td>{{ item.cFollowCompanyCount||0}}/{{item.cFollowCount||0}}</t-td>
								<t-td>{{ item.cUnFollowCount||0 }}</t-td>
								<t-td>{{ item.cUnqualifiedCompanyCount||0}}/{{item.cUnqualifiedFollowCount||0}}</t-td>
							</t-tr>
						</block>
					</t-table>
				</view>
	        </view>
	    </view>
		<!-- ---------潜在订单------------------ -->
		<view class="box-shawn" style="margin-top: 20upx;padding-bottom: 30upx;" id="tabbar5">
			<view class="blockWrap">
				<view class="flex_c" style="height: 84upx;border-bottom: 1upx solid #ECECEC;justify-content: space-between;">
					<view class="flex_c">
						<view class="line"></view>
						<view class="title">潜在订单</view>
					</view>
					<view  class="flex_c_c">
						<view @tap='tapSelectDay(4,$event)' :style="{color: label.label4 ==0?'#ff6000':''}" data-index="0">
							 今日
						</view>
						<view @tap='tapSelectDay(4,$event)' :style="{color: label.label4 ==1?'#ff6000':''}" data-index="1" style="padding-left: 10upx;">
							本月
						</view>
						<view @tap='tapSelectDay(4,$event)' :style="{color: label.label4 ==2?'#ff6000':''}" data-index="2" style="padding-left: 10upx;">
							上个月
						</view>
						<!-- <view>
							{{ label.label1}}
						</view> -->
						<view class="menu" @tap="toSelectTime(4)">
							
						</view>
					</view>
				</view>
				<scroll-view scroll-x class="uni-swiper-tab" v-if="isShowFilter">
					<view class="flex">
						<view class="tabItemRegion"
							v-for="(item,index) in regionCodeList4" 
							:key= "item.id" 
							:class= "regionCode4==item.id?'activeRegion':''"
							 @tap= "tabSwitchRegion(4,item.id,item.buyOrSell)"
							>
							<text>{{item.label}}</text>
						</view>
					</view>
				</scroll-view>
				
				<view style="margin-top: 30upx;">	
					<view class="flex_sb">
						<view>
							<view class="flex_c_c labelTitle">跟进中</view>
							<view class="flex_c_c"><text class="numberFont">{{content4.following||0}}</text></view>
						</view>
						<view>
							<view class="flex_c_c labelTitle">成交</view>
							<view class="flex_c_c"><text class="numberFont">{{content4.success||0}}</text></view>
						</view>
						<view>
							<view class="flex_c_c labelTitle">丢单</view>
							<view class="flex_c_c"><text class="numberFont">{{content4.failed||0}}</text></view>
						</view>
						<view>
							<view class="flex_c_c labelTitle">丢单率</view>
							<view class="flex_c_c"><text class="numberFont">{{content4.failedProbability||0}}%</text></view>
						</view>
						
						
					</view>
					
					
				</view>
				<scroll-view scroll-x class="uni-swiper-tab">
					<view>
						<t-table @change="change">
							<t-tr>
								<t-th>{{regionCode4==0?'区域':'帮办'}}</t-th>
								<t-th>跟进中</t-th>
								<t-th>成交</t-th>
								<t-th>丢单</t-th>
								<t-th>丢单率</t-th>
								
							</t-tr>
							<t-tr v-for="(item,index) in content4.list" :key="index">
								<t-td>{{ item.realName||0}}</t-td>
								<t-td>{{ item.following||0}}</t-td>
								<t-td>{{ item.success ||0}}</t-td>
								<t-td>{{ item.failed ||0}}</t-td>
								<t-td>{{ item.failedProbability||0 }}%</t-td>
								
							</t-tr>
						</t-table>
					</view>
				</scroll-view>
		    </view>
		</view>
	    <!-- --------询价统计-------------------- -->
	    <view class="box-shawn" style="margin-top: 20upx;padding-bottom: 30upx;" id="tabbar6">
	    	<view class="blockWrap">
	    		<view class="flex_c" style="height: 84upx;border-bottom: 1upx solid #ECECEC;justify-content: space-between;">
	    			<view class="flex_c">
	    				<view class="line"></view>
	    				<view class="title">询价统计</view>
	    			</view>
	    			<view  class="flex_c_c">
	    				<view @tap='tapSelectDay(5,$event)' :style="{color: label.label5 ==0?'#ff6000':''}" data-index="0">
	    					 今日
	    				</view>
	    				<view @tap='tapSelectDay(5,$event)' :style="{color: label.label5 ==1?'#ff6000':''}" data-index="1" style="padding-left: 10upx;">
	    					本月
	    				</view>
						<view @tap='tapSelectDay(5,$event)' :style="{color: label.label5 ==2?'#ff6000':''}" data-index="2" style="padding-left: 10upx;">
							上个月
						</view>
	    				<!-- <view>
	    					{{ label.label1}}
	    				</view> -->
	    				<view class="menu" @tap="toSelectTime(5)">
	    					
	    				</view>
	    			</view>
	    		</view>
	    		<scroll-view scroll-x class="uni-swiper-tab" v-if="isShowFilter">
	    			<view class="flex">
	    				<view class="tabItemRegion"
	    					v-for="(item,index) in regionCodeList5" 
	    					:key= "item.id" 
	    					:class= "regionCode5==item.id?'activeRegion':''"
	    					 @tap= "tabSwitchRegion(5,item.id,item.buyOrSell)"
	    					>
	    					<text>{{item.label}}</text>
	    				</view>
	    			</view>
	    		</scroll-view>
	    		
	    		<view style="margin-top: 30upx;">	
	    			<view class="flex_sb">
	    				<view>
	    					<view class="flex_c_c labelTitle">常规询价</view>
	    					<view class="flex_c_c"><text class="numberFont">{{content5.routine||0}}</text></view>
	    				</view>
	    				<view>
	    					<view class="flex_c_c labelTitle">找样询价</view>
	    					<view class="flex_c_c"><text class="numberFont">{{content5.sample||0}}</text></view>
	    				</view>
	    				<view>
	    					<view class="flex_c_c labelTitle">成交</view>
	    					<view class="flex_c_c"><text class="numberFont">{{content5.bargain||0}}</text></view>
	    				</view>
	    				<view>
	    					<view class="flex_c_c labelTitle">转化率</view>
	    					<view class="flex_c_c"><text class="numberFont">{{content5.conversion||0}}%</text></view>
	    				</view>
	    				
	    				
	    			</view>
	    			
	    			
	    		</view>
	    		<scroll-view scroll-x class="uni-swiper-tab">
	    			<view>
	    				<t-table @change="change">
	    					<t-tr>
	    						<t-th>{{regionCode5==0?'区域':'帮办'}}</t-th>
	    						<t-th>常规询价</t-th>
	    						<t-th>找样询价</t-th>
	    						<t-th>成交</t-th>
	    						<t-th>转化率</t-th>
	    						
	    					</t-tr>
	    					<t-tr v-for="(item,index) in content5.list" :key="index">
	    						<t-td>{{ item.realName ||''}}</t-td>
	    						<t-td>{{ item.routine ||''}}</t-td>
	    						<t-td>{{ item.sample ||''}}</t-td>
	    						<t-td>{{ item.bargain ||''}}</t-td>
	    						<t-td>{{ item.conversion ||''}}%</t-td>
	    						
	    					</t-tr>
	    				</t-table>
	    			</view>
	    		</scroll-view>
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
	function getDay(type) {
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
	
		return `${day}`;
	}
	function showMonthFirstDay()
		{     
			var Nowdate=new Date();     
			var MonthFirstDay=new Date(Nowdate.getYear(),Nowdate.getMonth(),1);     
			let M=Number(MonthFirstDay.getMonth())+1     
			return Nowdate.getFullYear()+"-"+M+"-"+MonthFirstDay.getDate();     
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
				}else{
					let tmp = parseInt(this.content1.turnover/this.content1.targetMoney*100) 
					
					if (tmp >100){
						return 100
					}else {
						return tmp
					}
				}
				
				

			},
			comPercentWidth:function(){
				
				if (this.content1.targetMoney ==0){
					return 10
				}else {
					let tmp = parseInt(this.content1.turnover/this.content1.targetMoney*100) 
					if (tmp < 20){
						return 20
					}else {
						if (tmp >90){
							return 90
						}else {
							return tmp
						}
                   }
					
					
				}
				
			},
			
			comPercentCount:function(){
				
				if (this.content1.targetCount ==0){
				    return 0
				}else {
					let tmp = parseInt(this.content1.companyCount/this.content1.targetCount*100)
					if (tmp >100){
						return 100
					}else {
						return tmp
					}
				
				}
			},
			comPercentCountWidth:function(){
				
				if (this.content1.targetCount ==0){
					return 10
				}else {
					let tmp = parseInt(this.content1.companyCount/this.content1.targetCount*100) 
					if (tmp < 20){
						return 20
					}else {
						if (tmp >90){
							return 90
						}else {
							return tmp
						}
						
					}
					
				}
			},
			
		
		},
		data() {
			return {
				today:'',
				isShowFilter: false,
				postCode: '',
				userPostList1:[{value: 2,text: '采购'},{value: 1,text:'销售'}],
				userPostList2:[{value: 2,text: '采购'},{value: 1,text:'销售'}],
				userPostList3:[{value: 2,text: '采购'},{value: 1,text:'销售'}],
				userPostList4:[{value: 2,text: '采购'},{value: 1,text:'销售'}],
				userPostList5:[{value: 2,text: '采购'},{value: 1,text:'销售'}],
				items: ['业绩排名','业绩目标','业绩统计','客户数量','客户跟进','潜在订单','询价统计'],
				rangeList:[{id:1,label:'区域排名'},{id:2,label:'区域个人排名'},{id:3,label:'总公司个人排名'}],
				rangeCode: 1,
				deputyList:[{id: 1,label:'买帮办'},{id: 2,label:'卖帮办'}],
				deputyCode: 1,
				items2: [],
				activeIndex: -1,
				activeIndex2: -1,
				regionCodeList0:[],
				regionCodeList1:[],
				regionCodeList2:[],
				regionCodeList3:[],
				regionCodeList4:[],
				regionCodeList5:[],
				regionCodeList6:[],
				selectTime:{
					time0:{
						startTime: showMonthFirstDay({format: true}),
						endTime: getDate({
						   format: true
						})
					},
					time1:{
						startTime: showMonthFirstDay({format: true}),
						endTime: getDate({
						   format: true
						})
					},
					time2:{
						startTime: getDate({format: true}),
						endTime: getDate({
						   format: true
						})
					},
					time3:{
						startTime: getDate({format: true}),
						endTime: getDate({format: true})
					},
					time4:{
						startTime: getDate({format: true}),
						endTime: getDate({
						   format: true
						})
					},
					time5:{
						startTime: getDate({format: true}),
						endTime: getDate({
					       format: true
				        })
					},
					time6:{
						startTime: getDate({format: true}),
						endTime: getDate({
					       format: true
				        })
					}
				},
				regionCode0: 'SS',
				regionCode1: 0,
				regionCode2: 0,
				regionCode3: 0,
				regionCode4: 0,
				regionCode5: 0,
				regionCode6: 0,
				userPostCode0: 1,
				userPostCode1: 1,
				userPostCode2: 0,
				userPostCode3: 1,
				userPostCode4: 1,
				userPostCode5: 1,
				content0:'',
				content1:'',
				content2:'',
				content3: '',
				content4:'',
				content5:'',
				content6:'',
				content2Detail:{},
				label:{
					label0: 1,
					label1: 1,
					label2: 0,
					label3: 0,
					label4: 0,
					label5: 0,
					label6: 0
				},
				
				
			};
		},
		onLoad:function(){
			// this.getBuyDeputy()
			this.today = getDay({format: true})
			
			this.getRegionCode()
			this.postCode = uni.getStorageSync('pupDefault')
			if (this.postCode == 'SALES_DIRECTOR'){
				this.isShowFilter = true
			}
			if (this.postCode == 'REGIONAL_MANAGER'){
				let rc = this.$store.state.regionCode
				this.regionCode1 = rc
				this.regionCode2 = rc
				this.regionCode3 = rc
				this.regionCode4 = rc
				this.regionCode5 = rc
				this.regionCode6 = rc
			}
			this.fetchList0()
			this.fetchList1()
			this.fetchList2()
			this.fetchList3()
			this.fetchList4()
			this.fetchList5()
			this.fetchList6()
			
		},
		methods:{
			toSelectTargetCustomer:function(){
				uni.navigateTo({
					url: `./selectTargetCustomer?buyOrSell=${this.userPostCode1}&regionCode=${this.regionCode1}`
				
				});
			},
			toSelctList:function(){
				uni.navigateTo({
					url: `./selectCustomerList?buyOrSell=${this.userPostCode1}&regionCode=${this.regionCode1}`
				
				});
			},
			tabSwitchRange:function(label,id){
				if(label ==0){
					this.rangeCode = id
					if (id ==1){
						this.deputyCode = 1
					}else if (id ==2){
						this.deputyCode = 1
						this.regionCode0 = 'SS'
					}else if (id == 3){
						this.deputyCode = 1
					}
					this.fetchList0()
				}
			},
			tapSelectDay:function(index,e){
				console.log(index)
				console.log(e.target.dataset.index)
				switch(index){
					case 0:
						this.label.label0 = e.target.dataset.index
						if (e.target.dataset.index ==1){
							this.selectTime.time0.startTime = showMonthFirstDay({format: true})
							this.selectTime.time0.endTime = getDate({format: true})
						}
						if (e.target.dataset.index ==0){
							this.selectTime.time0.startTime = getDate({format: true})
						}
						if (e.target.dataset.index ==2){
							this.selectTime.time0.startTime = showLastMonthStart({format: true})
							this.selectTime.time0.endTime = showLastMonthEnd({format: true})
						}
						this.fetchList0()
						break
					case 1:
						this.label.label1 = e.target.dataset.index
						if (e.target.dataset.index ==1){
							this.selectTime.time1.startTime = showMonthFirstDay({format: true})
							this.selectTime.time1.endTime = getDate({format: true})
						}
						if (e.target.dataset.index ==0){
							this.selectTime.time1.startTime = getDate({format: true})
							this.selectTime.time1.endTime = getDate({format: true})
						}
						if (e.target.dataset.index ==2){
							this.selectTime.time1.startTime = showLastMonthStart({format: true})
							this.selectTime.time1.endTime = showLastMonthEnd({format: true})
						}
						this.fetchList1()
						break
					case 2:
						this.label.label2 = e.target.dataset.index
						if (e.target.dataset.index ==1){
							this.selectTime.time2.startTime = showMonthFirstDay({format: true})
							this.selectTime.time2.endTime = getDate({format: true})
						}
						if (e.target.dataset.index ==0){
							this.selectTime.time2.startTime = getDate({format: true})
							this.selectTime.time2.endTime = getDate({format: true})
						}
						if (e.target.dataset.index ==2){
							this.selectTime.time2.startTime = showLastMonthStart({format: true})
							this.selectTime.time2.endTime = showLastMonthEnd({format: true})
						}
						this.fetchList2()
						break
					case 3:
						this.label.label3 = e.target.dataset.index
						if (e.target.dataset.index ==1){
							this.selectTime.time3.startTime = showMonthFirstDay({format: true})
							this.selectTime.time3.endTime = getDate({format: true})
						}
						if (e.target.dataset.index ==0){
							this.selectTime.time3.startTime = getDate({format: true})
							this.selectTime.time3.endTime = getDate({format: true})
						}
						if (e.target.dataset.index ==2){
							this.selectTime.time3.startTime = showLastMonthStart({format: true})
							this.selectTime.time3.endTime = showLastMonthEnd({format: true})
						}
						this.fetchList3()
						break
					case 4:
						this.label.label4 = e.target.dataset.index
						if (e.target.dataset.index ==1){
							this.selectTime.time4.startTime = showMonthFirstDay({format: true})
							this.selectTime.time4.endTime = getDate({format: true})
						}
						if (e.target.dataset.index ==0){
							this.selectTime.time4.startTime = getDate({format: true})
							this.selectTime.time4.endTime = getDate({format: true})
						}
						if (e.target.dataset.index ==2){
							this.selectTime.time4.startTime = showLastMonthStart({format: true})
							this.selectTime.time4.endTime = showLastMonthEnd({format: true})
						}
						this.fetchList4()
						break
					case 5:
						this.label.label5 = e.target.dataset.index
						if (e.target.dataset.index ==1){
							this.selectTime.time5.startTime = showMonthFirstDay({format: true})
							this.selectTime.time5.endTime = getDate({format: true})
						}
						if (e.target.dataset.index ==0){
							this.selectTime.time5.startTime = getDate({format: true})
							this.selectTime.time5.endTime = getDate({format: true})
						}
						if (e.target.dataset.index ==2){
							this.selectTime.time5.startTime = showLastMonthStart({format: true})
							this.selectTime.time5.endTime = showLastMonthEnd({format: true})
						}
						this.fetchList5()
						break
					case 6:
						this.label.label6 = e.target.dataset.index
						
						break
						
				}
				
				
				
				
			},
			async fetchList0(){
				
				let data = {
					
					buyOrSell: this.deputyCode,		//1销售，2采购 非必填
					rankingType: this.rangeCode,       //区域或者个人或者公司
					startTime: this.selectTime.time0.startTime,		//开始时间
					endTime	: this.selectTime.time0.endTime,//结束时间
			        regionCode: this.regionCode0
				}
				console.log(data)
				const res = await this.$http.get('/data/ranking',{data: data})
				console.log(res)
				this.content0 = res.data.data.list
				
			},
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
				this.content5 = res.data.data
				
			},
			async fetchList6(){
				
				let data = {
					postCode: this.postCode,		//职位编码
					regionCode: this.regionCode6,	//区域编码 非必填
				}
				console.log(data)
				const res = await this.$http.get('/data/company',{data: data})
				console.log(res)
				this.content6 = res.data.data
				
			},
			
			async getRegionCode(){
				const res = await this.$http.get('/choose/region',{})
				console.log(res)
				let tmp = res.data.data.list
				tmp.forEach((item)=>{
					this.regionCodeList0.push({label:item.label,id:item.id,buyOrSell: item.buyOrSell})
					this.regionCodeList1.push({label:item.label,id:item.id,buyOrSell: item.buyOrSell})
					this.regionCodeList2.push({label:item.label,id:item.id,buyOrSell: item.buyOrSell})
					this.regionCodeList3.push({label:item.label,id:item.id,buyOrSell: item.buyOrSell})
					this.regionCodeList4.push({label:item.label,id:item.id,buyOrSell: item.buyOrSell})
					this.regionCodeList5.push({label:item.label,id:item.id,buyOrSell: item.buyOrSell})
					this.regionCodeList6.push({label:item.label,id:item.id,buyOrSell: item.buyOrSell})
					
				})
				
				// this.regionCodeList1.unshift({label:'全部',id: 0})
				this.regionCodeList1.unshift({label:'全部',id: 0,buyOrSell:0})
				this.regionCodeList2.unshift({label:'全部',id: 0,buyOrSell:0})
				this.regionCodeList3.unshift({label:'全部',id: 0,buyOrSell:0})
				this.regionCodeList4.unshift({label:'全部',id: 0,buyOrSell:0})
				this.regionCodeList5.unshift({label:'全部',id: 0,buyOrSell:0})
				this.regionCodeList6.unshift({label:'全部',id: 0,buyOrSell:0})
				
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
			tabSwitchRegion:function(type,id,buyOrSell){
			 
				switch(type){
					case 0:
					    console.log(buyOrSell)
						this.regionCode0 = id
						this.deputyCode= buyOrSell
						this.fetchList0()
						break
					case 1:
						this.regionCode1 = id
						this.userPostCode1 = buyOrSell
						this.fetchList1()
						break
					case 2:
						this.regionCode2 = id
						this.userPostCode2 = buyOrSell
						this.fetchList2()
						break
					case 3:
						this.regionCode3 = id
						this.userPostCode3 = buyOrSell
						this.fetchList3()
						break
					case 4:
						this.regionCode4 = id
						this.userPostCode4 = buyOrSell
						this.fetchList4()
						break
					case 5:
						this.regionCode5 = id
						this.userPostCode5 = buyOrSell
						this.fetchList5()
						break
					case 6:
						this.regionCode6 = id
						this.userPostCode6 = buyOrSell
						this.fetchList6()
						break
					
				}
			},
			toSetTargetCustomer:function(){
				if (!this.isShowFilter){
					if (parseInt(this.today) < 7){
						uni.navigateTo({
							url: `./setTargetCustomer?buyOrSell=${this.userPostCode1}&regionCode=${this.regionCode1}`
						});
					}else {
						uni.showToast({
							title: '超过设定时间',
							icon: 'none',
							duration: 1000
						});
					}
					
				}
				
			
			},
			toSetTargetMoney:function(){
				if (!this.isShowFilter){
					if (parseInt(this.today) < 30){
						uni.navigateTo({
							url: `./targetCustomList`
						});
					}else {
						uni.showToast({
							title: '超过设定时间',
							icon: 'none',
							duration: 1000
						});
					}
					
				}
				
			},
			toSelectTime:function(index){
				if (index == 0){
				   uni.navigateTo({
				   	url: `./selectMonths?type=${index}`
				   });	
				   return
				}
				if (index == 1){
				   uni.navigateTo({
				   	url: `./selectMonths?type=${index}`
				   });	
				   return
				}
				uni.navigateTo({
					url: `./selectTime?type=${index}`
				});
			},
			tabSwitch2:function(index){
				// this.activeIndex2 = index
				// this.content2Detail = this.content2.list[this.activeIndex2]
				this.deputyCode = index
				this.fetchList0()
			},
			tabSwitch:function(index){
				this.activeIndex = index
			    
				switch (index){
						case 0:
						    this.selectorQuery("#outView","#tabbar0");
							
							break;
						case 1:
						    this.selectorQuery("#outView","#tabbar1");
							
							break;
						case 2:
						    this.selectorQuery("#outView","#tabbar2");
							
							break;
						case 3:
						   this.selectorQuery("#outView","#tabbar3");
						   
						   break;
						case 4:
						   this.selectorQuery("#outView","#tabbar4");
						  
						   break;
						case 5:
						   this.selectorQuery("#outView","#tabbar5");
						  
						   break;
						case 6:
						   this.selectorQuery("#outView","#tabbar6");
						  
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
.progessClass{
	
	height:20upx;
	background:linear-gradient(86deg,rgba(255,162,79,1) 0%,rgba(255,96,0,1) 100%);
	border-radius:10upx;
}
.progressPercent{
	width:80upx;
	height:32upx;
	background:rgba(255,102,0,1);
	border-radius:14upx;
	color: white;
	display: flex;
	justify-content: center;
	align-items: center;
	
}
.spanFont{
	font-size: 13px;
}
.numberFont{
	font-size: 16px;
	font-weight: bold;
}
 .inTabbar{
		// display: flex;
		// flex-direction: column;
		// justify-content: space-around;
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
            height: 88upx;
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
		color: #FF6000;
		border-bottom: 2upx solid #FF6000;
}
.tabItem2{
	font-size: 14px;
	margin-right: 30upx;
}
.tabItemRegion{
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 14px;
	height: 50upx;
	padding: 0 10upx;
	border-radius: 10upx;
	background: #F4F4F4;
	color: black;
	margin-right: 30upx;
}
.activeRegion {
		color: white;
		background: #FF6000;
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
	overflow: hidden;
 	// white-space: nowrap;
	margin-top: 20upx;
	
 	// line-height: 60upx;
 	// height: 60upx;
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
