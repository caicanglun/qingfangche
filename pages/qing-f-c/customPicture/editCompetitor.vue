<template>
	<view>
		<view class="box-shawn">
			<view class="content-1">
				<view class='label'>公司名称</view>
				<view class='items'>
					<input v-model="form.companyName" placeholder="请填写"></input>
				</view>
			</view>
			<view style="border-bottom: 1upx solid #F4F4F4;display: flex;flex-direction: column;justify-content: center;">
				<view style="height: 68upx;" class="flex_c">主营产品类型</view>
				<view>
					<myCheckboxGroup @selectChange="tabSwitchChange('mainProduct',$event)" :items="mainProductArr"></myCheckboxGroup>
				</view>
			</view>
			<view class="content-1">
				<view class='label'>规模</view>
				<view class='items'>
					<myPickerPart :items="companyScaleArr" @mychange="pickerChange('companyScaleCode',$event)" :firstLabel='form.companyScaleCode'></myPickerPart>
				</view>
			</view>
			<view class="content-1">
				<view class='label'>经营模式</view>
				<view class='items'>
					<myPickerPart :items="businessModelArr" @mychange="pickerChange('businessModelCode',$event)" :firstLabel='form.businessModelCode'></myPickerPart>
				</view>
			</view>
			<!-- <view class="content-1">
				<view class='label'>采购方式</view>
				<view class='items'>
					<myPickerPart :items="procurementArr" @mychange="pickerChange('procurementCode',$event)" :firstLabel='form.procurementCode'></myPickerPart>
				</view>
			</view> -->
			<view style="border-bottom: 1upx solid #F4F4F4;display: flex;flex-direction: column;justify-content: center;">
				<view style="height: 68upx;" class="flex_c">优势</view>
				<view>
					<myCheckboxGroup @selectChange="tabSwitchChange('superiority',$event)" :items="superiorityArr"></myCheckboxGroup>
				</view>
			</view>
		</view>
		<view class="fixed_bottom box_shadow_btn">
		  <button class="btn_left" hover-class="none" @tap="bindCancel">取消</button>
		  <button class="btn_right" @tap="submit" hover-class="none">确定</button>
		</view>
	</view>
</template>

<script>
	import myCheckboxGroup from "@/components/myCheckboxGroup.vue";
	import myPickerPart from "@/components/myPickerPartProps.vue";
	let _this
	export default {
		components:{
			myCheckboxGroup,
			myPickerPart
		},
		data() {
			return {
				purcharseArr:[{id:1,label:'shenfen'},{id:2,label:'shenfen2'}],
				procurementArr:[],  //采购方式
				companyScaleArr:[], //公司规模
				businessModelArr:[], //经营模式
				superiorityArr:[],  //优势
				mainProductArr:[],
				
				form:{
					companyName:'',			//公司名称
					companyScaleCode:'',	//公司规模编码
					businessModelCode:'',	//经营模式编码
					procurementCode:'',	    //采购方式分析
					superiorityCode:'',	    //优势
					mainProductList:[],	    //主营产品类型编码（数组）
                    superiorityCodeList:[]      //优势
				},
				
				rivalCode:''
			};
		},
		onReady:function(){
           
		},
		onLoad:function(options){
			let _this = this
			
			this.rivalCode = options.rivalCode
			this.form = JSON.parse(options.data)
			let select = JSON.parse(options.select)
			console.log(select)
			this.procurementArr= select.procurementArr  //采购方式
			this.companyScaleArr= select.companyScaleArr  //公司规模
			this.businessModelArr= select.businessModelArr //经营模式
			console.log(this.rivalCode)
			this.fetchMainProduct()
			this.fetchSuperiority()
			// this.fetchProcurement()
			// this.fetchCompanyScale()
			// this.fetchBusinessModel()
			// this.fetch()

		},
		
		methods:{
			async fetch(){
				const res = await this.$http.get('/cm/rival_details',{data:{
					rivalCode: this.rivalCode
				}})
				this.form = res.data.data
				this.handleMainProduct()
                this.handleSuperiority()
				console.log(this.form)
				
			},
			async fetchProcurement(){
				const res = await this.$http.get('/choose/procurement',{})
				this.procurementArr = res.data.data.list
				console.log(this.procurementArr)
			},
			
			async fetchCompanyScale(){
				const res = await this.$http.get('/choose/scale',{})
				this.companyScaleArr = res.data.data.list
				console.log(this.companyScaleArr)
			},
			async fetchBusinessModel(){
				const res = await this.$http.get('/choose/businessModel',{})
				this.businessModelArr = res.data.data.list
				console.log(this.businessModelArr)
			},
			async fetchSuperiority(){
				const res = await this.$http.get('/choose/superiority',{})
				this.superiorityArr = res.data.data.list
				this.handleSuperiority()
				console.log(this.superiorityArr)
			},
			async fetchMainProduct(){
				const res = await this.$http.get('/choose/mainProduct',{})
				this.mainProductArr = res.data.data.list
				this.handleMainProduct()
				console.log(this.mainProductArr)
			},
			handleMainProduct:function(){
				this.form.mainProductList.forEach((item)=>{
					this.mainProductArr.forEach((main)=>{
						if (main.id == item.mainProductCode){
							this.$set(main,'isChecked',true)
							
						}
					})
				})
			},
			handleSuperiority:function(){
				this.form.superiorityList.forEach((item)=>{
					this.superiorityArr.forEach((main)=>{
						if (main.id == item.superiorityCode){
							this.$set(main,'isChecked',true)
							
						}
					})
				})
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
				    let tmp = []
				    this.mainProductArr.forEach((item)=>{
						if (item.isChecked){
							tmp.push(item.id)
						}
					})
					
					this.$set(this.form,'mainProductList',tmp)
					// ----------------------------
					let tmp1 = []
					this.superiorityArr.forEach((item)=>{
						if (item.isChecked){
							tmp1.push(item.id)
						}
					})
					this.$set(this.form,'superiorityCodeList',tmp1)
					
					uni.showLoading({
						title: "提交中",
						mask: true
					})
				    const res =  await this.$http.post('/cm/rivalUpdate',{
						data: this.form
					})
					uni.hideLoading()
					
				  	uni.navigateBack({
				  		delta: -1
				  	});
			  }
		}
	}
</script>

<style lang="scss">
	page{
		font-size: 15px;
		color: #333236;
	}
   .box-shawn{
   	 padding: 30upx 30upx 0 30upx;
   	 background: #FFFFFF;
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
     width: 50%;
     background-color: #FF6000;
     color: #fff;
     border-radius: 0;
     font-size: 16px;
     line-height: 98upx;
   }
</style>

