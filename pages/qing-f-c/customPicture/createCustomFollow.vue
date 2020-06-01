<template>
	<view>
		<view style="background: #FFFFFF; padding: 10upx 40upx 0 30upx;">
			<view class="content-1 no_border">
				<view class='label'>跟进方式</view>
				<view class='items'>
					<myPickerPart  :items="selectList.followPatternList" @mychange="pickerChange('followPattern',$event)" :firstLabel='-1'></myPickerPart>
				</view>
			</view>
		</view>
		<view class="box-shawn" style="margin-top:20upx;">
			<view class="content-1 no_border" >
				<view style="font-weight: bold;font-size: 16px;">跟进内容</view>
				
			</view>
			<view class="flex_c">
				<block v-for="(item,index) in purcharseArr" :key="item.id" v-if="purcharseArr.length>0">
					<view :class="item.isChecked?'tag-button-select':'tag-button'" @tap="handleClick(item)">{{ item.label }}</view>
				</block>
				
			</view>
			<view style="height: 1upx;width:100%;margin-top: 20upx;background: #E9E9E9;"></view>
			<view style="width:100%; padding-bottom: 20upx;font-size:15px;margin-top: 20upx;">
				<textarea  placeholder-style="font-size:13px" style="width: 100%;min-height: 200upx;" v-model="form.remarks"  maxlength="-1" placeholder="请填写"/> 
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
				<textarea  placeholder-style="font-size:13px" style="width: 100%;min-height: 180upx;"  v-model="form.nextRemarks" maxlength="-1" placeholder="请填写"/> 
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
				
				purcharseArr:[],
				selectList:{
					
					followPatternList:[]
				},
				tradeName:'',      //关联的品名
				companyName:'',    //公司名
				form:{
					buyOrSellCode: '',      //联系人编码
					wayCode:'',             //跟进方式
					remarks:'',				//备注
					nextTime:'',		    //下次跟进时间
					nextRemarks:'',			//下次跟进备注
					
				},
				date: getDate({
					format: true
				})
				
			};
		},
		
		onLoad:function(options){
			_this = this
			this.form.buyOrSellCode = options.buyOrSellCode
			this.getType()
			this.getFollowWay()
			
		},
		methods:{
			async getFollowWay(){
				const res = await this.$http.get('/choose/follow_way',{})
				this.selectList.followPatternList = res.data.data.list
			},
			async getType(){
				const res = await this.$http.get('/choose/remarks_type',{})
				this.purcharseArr = res.data.data.list
				console.log(res)
			},
			handleClick:function(e){
				
				let reg = new RegExp(e.label)
				
				if (!reg.test(this.form.remarks)){
					
					this.purcharseArr.forEach((item)=>{
						if (item.id == e.id){
							this.$set(item,'isChecked',!item.isChecked)
						}
					})
					if (e.isChecked){
						if (this.form.remarks.length > 0){
							this.form.remarks = this.form.remarks + `\n${e.label}：`
						}else{
							this.form.remarks = this.form.remarks + `${e.label}：`
						}
					}
					
				}
	
			},
			bindDateChange: function(e) {
				this.date = e.target.value
			},
			confirm(obj){
				console.log(obj)
				this.date = obj.selectTime
			},
			pickerChange:function(label,event){
			  console.log(event)
			  switch (label){
				  case 'followPattern':
					 this.form.wayCode = event
					 
					 break;
				}
				
			},
			areaInput:function(e){
				console.log(e)
			},
			
			async submit(){
				
				this.form.nextTime = this.date
				// this.form.remarks = this.form.remarks.replace(/\n/g, '')
				let data=this.form
                console.log(data)
				
				const res = await this.$http.post('/portrayal/add',{data:data})
				console.log(res)
				
				// var pages = getCurrentPages();
				// var currPage = pages[pages.length - 1]; //当前页面
				// var prevPage = pages[pages.length - 2]; //上一个页面
				// //直接调用上一个页面的setData()方法，把数据存到上一个页面中去
				// prevPage.setData({
				//    isDoRefresh:true
				// })
				
				uni.redirectTo({
					url: `./followRecordDetail?recordCode=${res.data.data.msg}&buyOrSellCode=${this.form.buyOrSellCode}`
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
   line-height: 98upx;
   
 }
 .tag-button-select{
	 display: flex;
	 justify-content: center;
	 align-items: center;
	 border-radius: 24upx;
	 width: 144upx;
	 height: 48upx;
	 color: #FF6000;
	 background: #FFF2F2;
	 font-size: 14px;
	 margin-right: 20upx;
 }
 .tag-button{
 	 display: flex;
 	 justify-content: center;
 	 align-items: center;
 	 border-radius: 24upx;
 	 width: 144upx;
 	 height: 48upx;
 	 color: #333236;
 	 background: #F3F3F3;
 	 font-size: 14px;
	 margin-right: 20upx;
 }
</style>
