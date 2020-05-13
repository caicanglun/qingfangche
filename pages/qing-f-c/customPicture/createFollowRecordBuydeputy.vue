<template>
	<view>
		<view class="box-shawn">
			<view class="title">信息跟进</view>
			<view class="content-1">
				<view class='label'>采购身份</view>
				<view class='items'>
					<myPickerPart :items="selectList.identityList" @mychange="pickerChange('identityCode',$event)" firstLabel='-1'></myPickerPart>
				</view>
			</view>
			<view class="content-1">
				<view class='label'>采购渠道</view>
				<view class='items'>
					<myPickerPart :items="selectList.channelList" @mychange="pickerChange('channelCode',$event)" :firstLabel='-1'></myPickerPart>
				</view>
			</view>
			<view class="content-1">
				<view class='label'>价格敏感度</view>
				<view class='items'>
					<myPickerPart :items="selectList.sensitivityList" @mychange="pickerChange('sensitivityCode',$event)" :firstLabel='-1'></myPickerPart>
				</view>
			</view>
			<view class="content-1">
				<view class='label'>资金状况</view>
				<view class='items'>
					<myPickerPart :items="selectList.positionList" @mychange="pickerChange('positionCode',$event)" :firstLabel='-1'></myPickerPart>
				</view>
			</view>
			<view class="content-1">
				<view class='label'>经营策略</view>
				<view class='items'>
					<myPickerPart :items="selectList.strategyList" @mychange="pickerChange('strategyCode',$event)" :firstLabel='-1'></myPickerPart>
				</view>
			</view>
			<view class="content-1">
				<view class='label'>市场口碑</view>
				<view class='items'>
					<myPickerPart :items="selectList.praiseList" @mychange="pickerChange('praiseCode',$event)" :firstLabel='-1'></myPickerPart>
				</view>
			</view>
			<view class="content-1">
				<view class='label'>品质接受度</view>
				<view class='items'>
					<myPickerPart :items="selectList.acceptanceList" @mychange="pickerChange('acceptanceCode',$event)" :firstLabel='-1'></myPickerPart>
				</view>
			</view>
			<view class="content-1 no_border">
				<view class='label'>经营信用度</view>
				<view class='items'>
					<myPickerPart :items="selectList.creditList" @mychange="pickerChange('creditCode',$event)" :firstLabel='-1'></myPickerPart>
				</view>
			</view>
		</view>
		<view class="box-shawn" style="margin-top:20upx;">
			<view class="content-1 flex_sb no_border" >
				<view style="font-weight: bold;font-size: 16px;">竞争对手分析</view>
				
				<view style="color:#FF6600" @tap="addCompetitor">
					<uniIcon type="plus" color="#FF6600" style="padding-right: 10upx;"></uniIcon><text>添加竞争对手</text>
				</view>
			</view>
			<block v-for="(item,index) in form.rivalList" :key="index">
				<view class="content-1 flex_sb" >
					<view>{{item.companyName}}</view>
					<view style="padding-right:20upx;">
						<uniIcon type="arrowright" size="20" color="#ACACAC"></uniIcon>
					</view>
				</view>
			</block>
		</view>
		<!-- <view class="box-shawn" style="margin-top:20upx;">
			<view class="content-1 no_border" >
				<view style="font-weight: bold;font-size: 16px;">跟进需求</view>
				
			</view>
			<view class="content-1 no_border" >
				<view style="color:#FF6600">
					<uniIcon type="plus" color="#FF6600" style="padding-right: 10upx;"></uniIcon><text>添加跟进需求</text>
				</view>
			</view>
		</view> -->
		<view class="box-shawn" style="margin-top:20upx;font-size:15px;">
			<view class="content-1 no_border" >
				<view style="font-weight: bold;font-size: 16px;">跟进内容</view>
				
			</view>
			<view style="width:100%; padding-bottom: 20upx;" >
				<textarea maxlength="-1" auto-height placeholder-style="font-size:13px" v-model="form.remarks" @blur="bindTextAreaBlur"  placeholder="请填写"/> 
			</view>
		</view>
		<view class="box-shawn" style="margin-top:20upx;">
			<view style="font-weight: bold;font-size: 16px;">下次计划</view>
			<view class="content-1" >
				<view>提醒时间</view>
				<!-- <picker mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange">
					<view style="padding-left: 50upx;">{{date}}</view>
				</picker> -->
				<view style="width: 40upx;"></view>
				<ePicker startYear="2015" endYear="2040" :defaultValue="date" @btnConfirm="confirm">
				    {{date}}
				 </ePicker>
			</view>
			<view class="content-1 no_border" >
				<view>计划事项</view>
			</view>
			<view style="width:100%; padding-bottom: 20upx;font-size:15px;" >
				<textarea maxlength="-1" auto-height placeholder-style="font-size:13px" v-model="form.nextRemarks" @blur="bindTextAreaBlur"  placeholder="请填写"/> 
			</view>
		</view>
		<view style="height:150upx;">
			
		</view>
		<view class="fixed_bottom box_shadow_btn">
		  <button class="btn_right" @tap="submit" hover-class="none">提交</button>
		</view>
	</view>
</template>

<script>
	import ePicker from '@/components/e-picker/e-picker.vue';
	import myPickerPart from "@/components/myPickerPartProps.vue";
	import uniIcon from "@/components/uni-icons/uni-icons.vue";
	let _this;
	function getDate(type) {
		const date = new Date();
	
		let year = date.getFullYear();
		let month = date.getMonth() + 1;
		let day = date.getDate();
	    let hour = date.getHours();
		let minute = date.getMinutes()
		let second = date.getSeconds()
		
		if (type === 'start') {
			year = year - 60;
		} else if (type === 'end') {
			year = year + 2;
		}
		month = month > 9 ? month : '0' + month;;
		day = day > 9 ? day : '0' + day;
		hour = hour > 9 ? hour : '0' + hour;
		minute = minute > 9 ? minute : '0' + minute;
		second = second > 9 ? second : '0' + second;
	
		return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
	}
	export default {
		components:{
			myPickerPart,
			uniIcon,
			ePicker
		},
		data() {
			return {
				purcharseArr:[{id:'ss',label:'shenfen'},{id:'sl',label:'shenfen2'}],
				selectList:{},
				form:{
					buyOrSellCode: '', //联系人编码
					positionCode:'',		//资金状况编码
					channelCode:'',			//采购渠道编码
					creditCode:'',			//经营信用编码
					identityCode:'',		//采购身份编码
					strategyCode:'',		//经营策略编码
					sensitivityCode:'',	    //价格敏感度编码
					praiseCode:'',		    //市场口碑编码
					acceptanceCode:'',	    //品质接受度编码
					remarks:'',				//备注
					nextTime:'',		    //下次跟进时间
					nextRemarks:'',			//下次跟进备注
					rivalList:	[]		    //竞争对手（数组）
				},
				date: getDate({
					format: true
				}),
			};
		},
		onLoad:function(options){
			_this = this
			this.form.buyOrSellCode = options.buyOrSellCode
			this.getSelect()
			
		},
		methods:{
			async getSelect(){
				const res = await this.$http.get('/portrayal/buyerComboBox',{})
				this.selectList = res.data.data
				console.log(this.selectList)
				console.log(res)
			},
			pickerChange:function(label,event){
				
			  switch (label){
				  case 'identityCode':
					 this.form.identityCode = event
					 console.log(this.form.identityCode)
					 break;
				  case 'channelCode':
					 this.form.channelCode = event
					 console.log(this.form.channelCode)
					 break;
				 case 'positionCode':
					 this.form.positionCode = event
					 console.log(this.form.positionCode)
					 break;
				case 'creditCode':
					 this.form.creditCode = event
					 console.log(this.form.creditCode)
					 break;
				case 'strategyCode':
					 this.form.strategyCode = event
					 console.log(this.form.strategyCode)
					 break;	 
				case 'sensitivityCode':
					 this.form.sensitivityCode = event
					 console.log(this.form.sensitivityCode)
					 break;
				case 'praiseCode':
					 this.form.praiseCode = event
					 console.log(this.form.praiseCode)
					 break;
				case 'acceptanceCode':
					 this.form.acceptanceCode = event
					 console.log(this.form.acceptanceCode)
					 break;
				}
			},
			addCompetitor:function(){
				uni.navigateTo({
					url: './competitorAnalyist',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			},
			bindTextAreaBlur:function(){
				
			},
			bindDateChange: function(e) {
				this.date = e.target.value
			},
			confirm(obj){
				console.log(obj)
				this.date = obj.selectTime
			},
			async submit(){
				this.form.nextTime = this.date
				let data=this.form
				uni.showLoading({
					title: "提交中",
					mask: true
				})
				
				const res = await this.$http.post('/portrayal/buyer_add',{data:data})
				uni.hideLoading()
				
				var pages = getCurrentPages();
				var currPage = pages[pages.length - 1]; //当前页面
				var prevPage = pages[pages.length - 2]; //上一个页面
				//直接调用上一个页面的setData()方法，把数据存到上一个页面中去
				prevPage.setData({
				   isDoRefresh:true
				})
				uni.redirectTo({
					url: `./followRecordDetail?recordCode=${res.data.data.msg}`
				})
			}
		},
		
	}
</script>

<style lang="scss">
 page{
	 background: #F4F4F4;
 }
 .content-1{
 	color: #333236;
 	font-size: 15px;
 	display: flex;
 	align-items: center;
 	//justify-content: space-between;
 	height: 75upx;
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
 
 .box-shawn{
	 padding: 30upx 30upx 0 30upx;
	 background: #FFFFFF;
 }
 .title{
 	font-size: 16px;
 	color: #140F26;	
 	font-weight: bold;
 }
.no_border{
	 border: none;
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
   line-height: 78upx;
 }
</style>
