<template>
	<view>
		<view class="box-shawn">
			<view class="title">信息跟进</view>
			<view class="content-1">
				<view class='label'>采购身份</view>
				<view class='items'>
					<myPickerPart :items="purcharseArr" @mychange="pickerChange('purcharseID',$event)" :firstLabel='-1'></myPickerPart>
				</view>
			</view>
			<view class="content-1">
				<view class='label'>采购渠道</view>
				<view class='items'>
					<myPickerPart :items="purcharseArr" @mychange="pickerChange('purcharseID',$event)" :firstLabel='-1'></myPickerPart>
				</view>
			</view>
			<view class="content-1">
				<view class='label'>价格敏感度</view>
				<view class='items'>
					<myPickerPart :items="purcharseArr" @mychange="pickerChange('purcharseID',$event)" :firstLabel='-1'></myPickerPart>
				</view>
			</view>
			<view class="content-1">
				<view class='label'>资金状况</view>
				<view class='items'>
					<myPickerPart :items="purcharseArr" @mychange="pickerChange('purcharseID',$event)" :firstLabel='-1'></myPickerPart>
				</view>
			</view>
			<view class="content-1">
				<view class='label'>经营策略</view>
				<view class='items'>
					<myPickerPart :items="purcharseArr" @mychange="pickerChange('purcharseID',$event)" :firstLabel='-1'></myPickerPart>
				</view>
			</view>
			<view class="content-1">
				<view class='label'>品质接受度</view>
				<view class='items'>
					<myPickerPart :items="purcharseArr" @mychange="pickerChange('purcharseID',$event)" :firstLabel='-1'></myPickerPart>
				</view>
			</view>
			<view class="content-1 no_border">
				<view class='label'>经营信用度</view>
				<view class='items'>
					<myPickerPart :items="purcharseArr" @mychange="pickerChange('purcharseID',$event)" :firstLabel='-1'></myPickerPart>
				</view>
			</view>
		</view>
		<view class="box-shawn" style="margin-top:20upx;">
			<view class="content-1 flex_sb no_border" >
				<view style="font-weight: bold;font-size: 16px;">竞争对手分析</view>
				<view style="color:#FF6600">
					<uniIcon type="plus" color="#FF6600" style="padding-right: 10upx;"></uniIcon><text>添加竞争对手</text>
				</view>
			</view>
			<view class="content-1 flex_sb" >
				<view>纺织贸易公司</view>
				<view style="padding-right:20upx;">
					<uniIcon type="arrowright" size="20" color="#ACACAC"></uniIcon>
				</view>
			</view>
		</view>
		<view class="box-shawn" style="margin-top:20upx;">
			<view class="content-1 no_border" >
				<view style="font-weight: bold;font-size: 16px;">跟进需求</view>
				
			</view>
			<view class="content-1 no_border" >
				<view style="color:#FF6600">
					<uniIcon type="plus" color="#FF6600" style="padding-right: 10upx;"></uniIcon><text>添加跟进需求</text>
				</view>
			</view>
		</view>
		<view class="box-shawn" style="margin-top:20upx;">
			<view class="content-1 no_border" >
				<view style="font-weight: bold;font-size: 16px;">备注</view>
				
			</view>
			<view style="width:100%; padding-bottom: 20upx;" >
				<textarea auto-height placeholder-style="font-size:13px" v-model="form.remarks" @blur="bindTextAreaBlur"  placeholder="请填写"/> 
			</view>
		</view>
		<view class="box-shawn" style="margin-top:20upx;">
			<view style="font-weight: bold;font-size: 16px;">下次计划</view>
			<view class="content-1" >
				<view>提醒时间</view>
				<picker mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange">
					<view style="padding-left: 50upx;">{{date}}</view>
				</picker>
			</view>
			<view class="content-1 no_border" >
				<view>内容事项</view>
			</view>
			<view style="width:100%; padding-bottom: 20upx;" >
				<textarea auto-height placeholder-style="font-size:13px" v-model="form.nextremarks" @blur="bindTextAreaBlur"  placeholder="请填写"/> 
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
	import myPickerPart from "@/components/myPickerPartNew.vue";
	import uniIcon from "@/components/uni-icons/uni-icons.vue";
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
	export default {
		components:{
			myPickerPart,
			uniIcon
		},
		data() {
			return {
				purcharseArr:[{id:1,label:'shenfen'},{id:2,label:'shenfen2'}],
				form:{
					purcharseID:'',
					remarks:'',
					nextremarks:''
				},
				date: getDate({
					format: true
				}),
			};
		},
		methods:{
			tabSwitchChange:function(label,event){
			  switch (label){
				  case 'purcharseID':
					 this.form.purcharseID = event
					 console.log(this.form.purcharseID)
					 break;
				}
			},
			bindTextAreaBlur:function(){
				
			},
			bindDateChange: function(e) {
				this.date = e.target.value
			},
		},
		
	}
</script>

<style lang="scss">
 page{
	 background: #F4F4F4;
 }
 .content-1{
 	color: #333236;
 	font-size: 14px;
 	display: flex;
 	align-items: center;
 	//justify-content: space-between;
 	height: 65upx;
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
