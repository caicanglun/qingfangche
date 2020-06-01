<template>
	<view>
		<view class="box-shawn">
			<view class="content-1 no_border" @tap="selectBuyer">
				<view class='label'>客户</view>
				<view class='items'>
					<text :style="{color:companyName?'#333':'#909090'}">{{companyName? companyName : '请选择'}}</text>
				</view>
				<view style="justify-content: flex-end;">
					<uniIcon type="arrowright" size="20" color="#ACACAC"></uniIcon>
				</view>
			</view>
		</view>
		<view class="box-shawn" style="margin-top: 20upx;">
			<view class="title">潜在订单</view>
			<view class="content-1">
				<view class='label'>品名</view>
				<view class='items'>
					<input v-model="form.tradeName" placeholder="请填写"></input>
				</view>
				
			</view>
			<view class="content-1" @tap="toSelectInquiry">
				<view class='label'>选择关联单</view>
				<view class='items'>
					<text :style="{color:tradeName?'#333':'#909090'}">{{tradeName? tradeName : '请选择'}}</text>
				</view>
				<view style="justify-content: flex-end;">
					<uniIcon type="arrowright" size="20" color="#ACACAC"></uniIcon>
				</view>
			</view>
			<view class="content-1">
				<view class='label'>数量</view>
				<view class='items'>
					<input v-model="form.purchaseQuantity" type="number" placeholder="请填写"></input>
				</view>
				<view style="justify-content: flex-end;">米</view>
			</view>
			<view class="content-1">
				<view class='label'>跟进预警</view>
				<view class='items'>
					<myPickerPart :items="selectList.warningLevelList" @mychange="pickerChange('warningLevel',$event)" :firstLabel='-1'></myPickerPart>
				</view>
			</view>
			<view class="content-1 no_border">
				<view class='label'>接单概率</view>
				<view class='items'>
					<input v-model="form.probability" type="number" placeholder="请填写"></input>
				</view>
				<view style="justify-content: flex-end;">%</view>
			</view>
<!-- 
			<view class="content-1 no_border">
				<view class='label'>跟进状态</view>
				<view class='items'>
					<myPickerPart :items="selectList.recordStatusList" @mychange="pickerChange('recordStatus',$event)" :firstLabel='-1'></myPickerPart>
				</view>
			</view> -->
			<!-- <view class="content-1 no_border">
				<view class='label'>丢单理由</view>
				<view class='items'>
					<myPickerPart :items="selectList.failCauseList" @mychange="pickerChange('failCauseCode',$event)" :firstLabel='-1'></myPickerPart>
				</view>
			</view> -->
		</view>
		
		
		<view class="box-shawn" style="margin-top:20upx;">
			<view class="content-1 no_border" >
				<view style="font-weight: bold;font-size: 16px;">跟进内容</view>
				
			</view>
			<view style="width:100%; padding-bottom: 20upx;font-size:15px;">
				<textarea auto-height placeholder-style="font-size:13px" style="width: 100%;" v-model="form.remarks"  maxlength="-1" placeholder="请填写"/> 
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
				<textarea auto-height placeholder-style="font-size:13px" style="width: 100%;" v-model="form.nextRemarks" @blur="bindTextAreaBlur" maxlength="-1" placeholder="请填写"/> 
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
	    date.setTime(date.getTime()+24*60*60*1000);
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
				selectList:{
					warningLevelList:[],
					recordStatusList:[],
					failCauseList:[]
				},
				tradeName:'',      //关联的品名
				companyName:'',    //公司名
				form:{
					recordType: 0,				//跟进单类型	（不用传）
					companyCode:'',				//联系人编码
					buyOrSellCode:'',			//联系人编码
					tradeName:'',				//品名(别名)
					inquiryNumber:'',			//询价单号
					orderNumber:'',				//交易单号
					purchaseQuantity:'',		//购买数量
					quantityUnit:1,			//购买数量单位。1米，2码
					warningLevel:'',			//预警等级，分数越高紧急程度越高
					recordStatus: 1,			//跟进单状态
					probability:'',				//接单概率
					failCauseCode:'',			//丢单原因编码
					remarks:'',					//备注
					nextTime:'',			    //下次跟进时间
					nextRemarks:''			   //下次跟进备注
				},
				date: getDate({
					format: true
				})
				
			};
		},
		onLoad:function(options){
			_this = this
			this.form.buyOrSellCode = options.buyOrSellCode
			this.getWarnLevel()
			this.getRecordStatus()
			this.getFailCause()
			
		},
		methods:{
			async getWarnLevel(){
				const res = await this.$http.get('/latent/warning_level',{})
				this.selectList.warningLevelList = res.data.data.list
				console.log(res)
			},
			async getRecordStatus(){
				const res = await this.$http.get('/latent/record_status',{})
				this.selectList.recordStatusList = res.data.data.list
				console.log(res)
			},
			async getFailCause(){
				const res = await this.$http.get('/latent/fail_cause',{})
				this.selectList.failCauseList = res.data.data.list
				console.log(res)
			},
			pickerChange:function(label,event){
				
			  switch (label){
				  case 'warningLevel':
					 this.form.warningLevel = event
					 console.log(this.form.warningLevel)
					 break;
				 
				case 'recordStatus':
					 this.form.recordStatus = event
					 console.log(this.form.recordStatus)
					 break;
				case 'failCauseCode':
					 this.form.failCauseCode = event
					 console.log(this.form.failCauseCode)
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
			toSelectInquiry:function(){
				uni.navigateTo({
					url: './connectInquiry',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			},	
			areaInput:function(e){
				console.log(e)
			},
			selectBuyer:function(){
				uni.navigateTo({
					url: './selectBuyer',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			},
			async submit(){
				
				this.form.nextTime = this.date
				let data=this.form
                console.log(data)
				uni.showLoading({
					title: '提交中',
					mask: true
				})
				const res = await this.$http.post('/latent/add',{data:data})
				console.log(res)
				uni.hideLoading()
				var pages = getCurrentPages();
				var currPage = pages[pages.length - 1]; //当前页面
				var prevPage = pages[pages.length - 2]; //上一个页面
				//直接调用上一个页面的setData()方法，把数据存到上一个页面中去
				prevPage.setData({
				   isDoRefresh:true
				})
				
				uni.redirectTo({
					url: `./detailFollowRecord?recordCode=${res.data.data.msg}`
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
 	height: 85upx;
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
	 padding: 30upx 40upx 0 30upx;
	 background: #FFFFFF;
 }
 .title{
 	font-size: 16px;
 	color: #333236;	
 	font-weight: bold;
	line-height: 30px;
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
