<template>
	<view>
		<view class="box-shawn">
			
			<view class="content-1">
				<view class='label'>订单状态</view>
				<view class='items'>
					<view style="display:flex;">
						<view @tap="tapReason" :class="dataIndex==7?'tabActiveReason':'ButtonReason'"  data-index="7">成交</view>
						<view @tap="tapReason" :class="dataIndex ==8?'tabActiveReason':'ButtonReason'" data-index="8">丢单</view>
						
						
					</view>
				</view>
				
			</view>
			<view style="border-bottom: 1upx solid #F4F4F4;display: flex;flex-direction: column;justify-content: center;">
				<view style="height: 68upx;" class="flex_c">总结原因（可多选）</view>
				<view>
					<myCheckboxGroup @selectChange="tabSwitchChange('mainProduct',$event)" :items="mainProductArr"></myCheckboxGroup>
				</view>
			</view>

		</view>
		<view class="fixed_bottom box_shadow_btn">
		  
		  <button class="btn_right" @tap="submit" hover-class="none">提交</button>
		</view>
	</view>
</template>

<script>
	import myCheckboxGroup from "@/components/myCheckboxGroup.vue";
	import myPickerPart from "@/components/myPickerPartNew.vue";
	export default {
		components:{
			myCheckboxGroup,
			myPickerPart
		},
		data() {
			return {
				dataIndex: -1,
				inquiryNumber:'',
				mainProductArr:[],  //主营产品
			    successArr:[], //成功原因
			    failArr:[], //失败原因
				
				form:{
					inquiryNumber:'',
					inquiryStatus:'',
					list:[],	    //主营产品类型编码（数组）
				}
			};
		},
		onLoad:function(options){
			
			this.form.inquiryNumber = options.inquiryNumber
			console.log(this.inquiryNumber)
			this.getFailCause()
			this.getSuccessCause()

		},
		methods:{
			async getSuccessCause(){
				const res = await this.$http.get('/choose/success_cause',{})
				this.successArr = res.data.data.list
				// this.mainProductArr = this.successArr()
			},
			async getFailCause(){
				const res = await this.$http.get('/choose/fail_cause',{})
				this.failArr = res.data.data.list
				
			},
			
			tapReason:function(e){
				console.log(e.target.dataset.index)
				this.dataIndex = e.target.dataset.index
				this.form.inquiryStatus = e.target.dataset.index
				if (this.dataIndex == 7){
					this.mainProductArr = this.successArr
				}else if (this.dataIndex == 8){
					this.mainProductArr = this.failArr
				}
			},
			tabSwitchChange:function(label,index){
				if (label=="mainProduct"){
					let items = this.mainProductArr
					for (var i = 0, lenI = items.length; i < lenI; ++i) {
						const item = items[i]
						if (item.id == index) {
							this.$set(item,'isChecked',!item.isChecked)
						}
					}
				}else if (label=="superiority"){
					let items = this.superiorityArr
					for (var i = 0, lenI = items.length; i < lenI; ++i) {
						const item = items[i]
						if (item.id == index) {
							this.$set(item,'isChecked',!item.isChecked)
						}
					}
				}
			  },
			 pickerChange:function(label,event){
			   	
			     switch (label){
					case 'companyScaleCode':
						 this.form.companyScaleCode = event
						 console.log(this.form.companyScaleCode)
						 break;
					case 'businessModelCode':
						 this.form.businessModelCode = event
						 console.log(this.form.businessModelCode)
						 break;
					case 'procurementCode':
						 this.form.procurementCode = event
						 console.log(this.form.procurementCode)
						 break;
					case 'superiorityCode':
						 this.form.superiorityCode = event
						 console.log(this.form.superiorityCode)
						 break;
						
					
				 }
				},
				
			    async submit(){
				    this.mainProductArr.forEach((item)=>{
						if (item.isChecked){
							this.form.list.push(item.id)
						}
					})
					
					console.log(this.form)
					uni.showLoading({
						title: "提交中",
						mask: true
					})
					const res = await this.$http.get('/bInquiry/transfer_summary',{
						data: this.form
					})
					uni.hideLoading()
					console.log(res)
					uni.navigateBack({
						delta: -1
					});
				   //  var pages = getCurrentPages();
				  	// var currPage = pages[pages.length - 1]; //当前页面
				  	// var prevPage = pages[pages.length - 2]; //上一个页面
				  	//直接调用上一个页面的setData()方法，把数据存到上一个页面中去
				  	// prevPage.setData({
				  	// 		buyer:  realName,
				  	// 		buyerCode: code
				  	// })
					// console.log(this.form)
				 //  	prevPage.$vm.form.rivalList.push(this.form)
				 //  	uni.navigateBack({
				 //  		delta: -1
				 //  	});
			  }
		}
	}
</script>

<style lang="scss">
	page{
		font-size: 14px;
		color: #333236;
	}
   .box-shawn{
   	 padding: 30upx 30upx 0 30upx;
   	 background: #FFFFFF;
   }
   .content-1{
   	color: #333236;
   	font-size: 14px;
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
   .fixed_bottom{
     width: 100%;
     position: fixed;
     bottom: 0;
     display: flex;
     z-index: 999;
   }
   .btn_left{
     width: 50%;
     background-color: #fff;
     color: #FF6000;
     border-radius: 0;
     font-size: 16px;
     line-height: 98upx;
   }
   .btn_right{
     width: 100%;
     background-color: #FF6000;
     color: #fff;
     border-radius: 0;
     font-size: 16px;
     line-height: 98upx;
   }
   .tabActiveReason{
   	 display: flex;
   	
   	 align-items: center;
   	 justify-content: center;
   	 padding: 0 10upx;
   	 height:48upx;
   	 border:2upx solid #ff6000;
   	 border-radius:8px;
   	 margin-right: 30upx;
   	 background: #FF6000;
   	 color: white;
   }
   .ButtonReason{
   	 display: flex;
   	 
   	 align-items: center;
   	 justify-content: center;
   	 padding: 0 10upx;
   	 height:48upx;
   	 border:2upx solid rgba(220,220,220,1);
   	 border-radius:8px; 
   	 margin-right: 30upx;
   }
</style>
