<template>
	<view>
		<view class="box-shawn">
			<view class="content-1 no_border">
				<view class='label'>预警等级</view>
				<view class='items'>
					<myPickerPart v-if="selectList.warningLevelList.length>0" :items="selectList.warningLevelList" @mychange="pickerChange('warningLevel',$event)" :firstLabel='warningLevelCode'></myPickerPart>
				</view>
			</view>
			<view style="color:#999999;font-size: 11px;">1级为最低预警等级，5级为最高预警等级</view>
		</view>
		<view class="box-shawn">
			<view class="content-1">
				<view class='label'>订单状态</view>
				<view v-for="(item,index) in selectList.recordStatusList" :key="index"
				    :class="activeIndex == item.id?'tabActive':'deliveryButton'"
					@tap="selectButton(item.id)">
					{{item.label}}
				</view>
			</view>
			<view class="content-1 no_border">
				<view>总结原因（可多选）</view>
			</view>
			<view style="font-size: 14px;" v-if="activeIndex == '98'">
				<myCheckboxGroup @selectChange="tapCause" :items="selectList.failCauseList"></myCheckboxGroup>
			</view>
			<view style="font-size: 14px;" v-if="activeIndex == '99'">
				<myCheckboxGroup @selectChange="tapSuccess" :items="selectList.successCauseList"></myCheckboxGroup>
			</view>
		</view>
		<view class="fixed_bottom box_shadow_btn">
		   <button class="btn_right_all" @tap="submit" hover-class="none">提交</button>
		   
		</view>
	</view>
</template>

<script>
	import myCheckboxGroup from "@/components/myCheckboxGroupPopCause.vue";
	import myPickerPart from "@/components/myPickerPartProps.vue";
	import uniIcon from "@/components/uni-icons/uni-icons.vue";
	let _this;
	export default {
		components:{
			myPickerPart,
			myCheckboxGroup
		},
		data() {
			return {
				item:'',
				recordCode:'',
				warningLevelCode:'',
				selectList:{
					warningLevelList:[],
					recordStatusList:[],
					failCauseList:[],
					successCauseList:[]
					},
				activeIndex: 1
				
			}
		},
		onLoad:function(options){
			_this = this
			this.recordCode = options.recordCode
			this.warningLevelCode = options.warningLevelCode
			this.getFetch()
			this.getWarnLevel()
			this.getRecordStatus()
			this.getFailCause()
			this.getSuccessCause()
		},
		methods:{
			async getFetch(){
				let data ={
					recordCode: this.recordCode
				}
				const res = await this.$http.get('/latent/details',{data:data})
			    console.log(res)
				this.item = res.data.data
				this.activeIndex = this.item.recordStatusCode
				
				
			},
			async getWarnLevel(){
				const res = await this.$http.get('/latent/warning_level',{})
				this.selectList.warningLevelList = res.data.data.list
				console.log(res)
			},
			async getRecordStatus(){
				const res = await this.$http.get('/latent/record_status',{})
				res.data.data.list.shift()
				this.selectList.recordStatusList = res.data.data.list
				console.log(res)
			},
			async getFailCause(){
				const res = await this.$http.get('/choose/fail_cause',{})
				this.selectList.failCauseList = res.data.data.list
				console.log(res)
			},
			async getSuccessCause(){
				const res = await this.$http.get('/choose/success_cause',{})
				this.selectList.successCauseList = res.data.data.list
				console.log(res)
			},
			pickerChange:function(label,event){
			  console.log(event)
			  switch (label){
				  case 'warningLevel':
					 this.warningLevelCode = event
					 console.log(this.warningLevelCode)
					 break;
				}
				
			},
			selectButton:function(e){
				console.log(e)
				this.activeIndex = e
			},
			tapCause:function(index){
				let items = this.selectList.failCauseList
				for (var i = 0, lenI = items.length; i < lenI; ++i) {
					const item = items[i]
					if (item.id == index) {
						this.$set(item,'isChecked',!item.isChecked)
					}
				}
			},
			tapSuccess:function(index){
				let items = this.selectList.successCauseList
				for (var i = 0, lenI = items.length; i < lenI; ++i) {
					const item = items[i]
					if (item.id == index) {
						this.$set(item,'isChecked',!item.isChecked)
					}
				}
			},
			async submit(){
				let list =[]
				if (this.activeIndex == '98'){
					this.selectList.failCauseList.forEach((item)=>{
						if (item.isChecked){
							list.push(item.id)
						}
					})
				} 
				if (this.activeIndex == '99'){
					this.selectList.successCauseList.forEach((item)=>{
						if (item.isChecked){
							list.push(item.id)
						}
					})
				} 
				let data={
					recordCode: this.recordCode,		//潜在订单编码
					warningLevel:  this.warningLevelCode, //预警等级
					recordStatus: this.activeIndex, 	//跟进单状态
					causeList: 	list	//原因编码数组
				}
				const res = await this.$http.post('/latent/update_status',{data:data})
				console.log(res)
				uni.navigateBack({
					delta: -1
				});
			}
		}
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
	 	 padding: 30upx;
	 	 background: #FFFFFF;
	 }
	 .no_border{
	 	 border: none;
	  }
	  .deliveryButton{
	  	 display: flex;
	  	 align-items: center;
	  	 justify-content: center;
	  	 width:88upx;
	  	 height:48upx;
	  	 border:2upx solid rgba(220,220,220,1);
	  	 border-radius:8px;
	  	 margin-right: 20upx;
	  }
	  .tabActive{
	  	 display: flex;
	  	 align-items: center;
	  	 justify-content: center;
	  	 width:88upx;
	  	 height:48upx;
	  	 border:2upx solid #ff6000;
	  	 border-radius:8px;
	  	 margin-right: 20upx;
	  	 background: #FF6000;
	  	 color: white;
	  }
	  .fixed_bottom{
	    width: 100%;
	    position: fixed;
	    bottom: 0;
	    display: flex;
	    z-index: 999;
	  }
	  .btn_right_all{
	    width: 100%;
	    background-color: #FF6000;
	    color: #fff;
	    border-radius: 0;
	    font-size: 16px;
	    line-height: 98upx;
	  }
</style>
