<template>
	<view>
		<view class="top-wrap">
			<view class="content-1" @tap="selectSeller">
			  <view class="label">公司名称：</view>
			  <view :class="(seller==''?'color_909090 wid_400 fs_13':'wid_400 fs_13')">{{seller==''?"请选择":seller}}</view>
			  <view class="i-next"><uniIcon type="arrowright" size="20" color="#ACACAC"></uniIcon></view>
				
			</view>
			<view class="content-1 no_border" @tap="selectSeller">
			  <view class="label">联系人：</view>
			  <view :class="(seller==''?'color_909090 wid_400 fs_13':'wid_400 fs_13')">{{seller==''?"请选择":seller}}</view>
			  <view class="i-next"><uniIcon type="arrowright" size="20" color="#ACACAC"></uniIcon></view>
				
			</view>
		</view>
		<view class="form_box box_shadow">
			<view class="flex_c list border_none">
			  <!-- <view class="line"></view> -->
			  <view class="font_we_bold fs_16">本次跟进记录 </view>
			</view>
			<view class="content-1">
				<view class='label'>跟进方式</view>
				<view style="width:80%;">
					<myPickerPart :items="followWay" @mychange="pickerChange('followWay',$event)" firstLabel="-1" ></myPickerPart>
				</view>
				
			</view>
			<view class="content-1">
				<view class='label'>跟进状态</view>
				<view style="width:80%;">
					<myPickerPart :items="followStatus" @mychange="pickerChange('followStatus',$event)" firstLabel="-1" ></myPickerPart>
				</view>
				
			</view>
			<view class="content-1">
				<view class='label'>跟进时间</view>
				<view style="width:80%;">
					<picker mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange">
						<view class="uni-input">{{date}}</view>
					</picker>
				</view>
				
			</view>
			<view class="content-areatext">
				<view class="flex_c" style="height:65upx;">跟进记录</view>
				<view style="width:100%; padding-bottom: 20upx;" >
					<textarea auto-height placeholder-style="font-size:13px" v-model="recordContent" @blur="bindTextAreaBlur"  placeholder="请填写详细的跟进记录"/> 
				</view>
			</view>
			
			
			<view class="content-1">
				<view class='label'>备注内容</view>
				<view style="width:80%;">
					<input v-model="remark" placeholder="请输入"></input>
				</view>
				
			</view>
		</view>  
		<!-- 下次跟进 -->
		<view class="form_box box_shadow">
			<view class="flex_c list border_none">
			  <!-- <view class="line"></view> -->
			  <view class="font_we_bold fs_16">下次跟进计划 </view>
			</view>
			<view class="content-1">
				<view class='label'>跟进时间</view>
				<view style="width:80%;">
					<picker mode="date" :value="dateNext" :start="startDate" :end="endDate" @change="bindNextDateChange">
						<view class="uni-input">{{dateNext}}</view>
					</picker>
				</view>
				
			</view>
			<view class="content-areatext">
				<view class="flex_c" style="height:65upx;">跟进计划</view>
				<view style="width:100%; padding-bottom: 20upx;" >
					<textarea auto-height placeholder-style="font-size:13px" v-model="nextPlan" @blur="bindTextAreaBlur"  placeholder="请填写详细的跟进记录"/> 
				</view>
			</view>
			
			
			<view class="content-1">
				<view class='label'>备注内容</view>
				<view style="width:80%;">
					<input v-model="nextRemark" placeholder="请输入"></input>
				</view>
				
			</view>
			
		</view>
		
		<view class="fixed_bottom box_shadow_btn">
		
		  <button class="btn_right" @tap="submit" hover-class="none">确定</button>
		</view>
		
	</view>
</template>

<script>
	import myPickerPart from "@/components/myPickerPartNew.vue";
	let _this
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
		     myPickerPart
		},
		data() {
			return {
				seller:'',    //卖家
				sellerCode: '',  //卖家编号
				followWay:[{id:1,label:'电话'},{id:2,label:'拜访'}], //跟进方式
				followWayIndex: '',
				followStatus:[{id:1,label:'状态11'},{id:2,label:'状态22'}], //跟进方式
				followStatusIndex: '',
				date: getDate({
					format: true
				}),
				remark:'',
				recordContent:'',
				dateNext: getDate({
					format: true
				}),
				nextPlan:'',
				nextRemark:''
			};
		},
		onLoad:function(){
			_this = this
		},
		methods:{
			bindTextAreaBlur: function (e) {
				console.log(e.detail.value)
				console.log(this.recordContent)
			},
			bindDateChange: function(e) {
				this.date = e.target.value
			},
			bindNextDateChange: function(e) {
				this.dateNext = e.target.value
				console.log(this.dateNext)
			},
			selectSeller:function(){
			  uni.navigateTo({
				url: '/pages/qing-f-c/inquiryManage/sellDeputy/selectSeller',
				success: res => {},
				fail: () => {},
				complete: () => {}
			  });
			},
			pickerChange:function(label,index){
				switch (label){
					case 'followWay':{
						this.followWayIndex = index
						console.log(this.followWayIndex)
						break;
					}case 'followStatus':{
						this.followStatusIndex = index
						console.log(this.followStatusIndex)
						break;
					}
					case 'sellers':{
						//this.sellersIndex = index
						break;
					}
					
				}
			},
		}
	}
</script>

<style lang="scss">
	page{
		background: #F4F4F4;
	}
   .top-wrap{
		padding: 20upx 20upx 0upx 20upx;
		background: #FFFFFF;
		.title{
			font-size: 16px;
			color: #140F26;	
			font-weight: bold;
		}
		.content{
			color: #333236;
			font-size: 14px;
			display: flex;
			align-items: center;
			justify-content: space-between;
			height: 65upx;
			border-bottom: 1upx solid rgba(237,237,237,1);
			.label{
				width: 190upx;
			}
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
				width: 20%;
			}
			.items{
				width: 80%;
			}
			.items-1{
				width: 80%;
				display: flex;
				justify-content: space-between;
			}
		}
		.no_border{
			border: none;
		}
   }
   
   .color_909090{
   	    color: #909090;
   }
   
   .form_box{
	 padding: 20upx 20upx 0upx 20upx;
     background-color:#fff; 
     font-size: 14px;
     margin-top: 20upx;
	 .content-1{
	 	color: #333236;
	 	font-size: 14px;
	 	display: flex;
	 	align-items: center;
	 	//justify-content: space-between;
	 	height: 65upx;
	 	border-bottom: 1upx solid rgba(237,237,237,1);
	 	.label{
	 		width: 20%;
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
   }
  .content-areatext{
  	color: #333236;
  	font-size: 14px;
  	display: flex;
	flex-direction: column;
  	//align-items: center;
  	//justify-content: space-between;
  	border-bottom: 1upx solid rgba(237,237,237,1);
	}
	.btn_right{
	  width: 100%;
	  background-color: #FF6000;
	  color: #fff;
	  border-radius: 0;
	  font-size: 16px;
	  line-height: 98upx;
	}
	
</style>
