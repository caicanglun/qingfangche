<template>
	<view>
		<view class="box-shawn">
			<view class="content-1" @tap="selectBuyer">
				<view class='label'>客户</view>
				<view class='items'>
					<text :style="{color:companyName?'#333':'#909090'}">{{companyName? companyName : '请选择'}}</text>
				</view>
				<view style="justify-content: flex-end;">
					<uniIcon type="arrowright" size="20" color="#ACACAC"></uniIcon>
				</view>
			</view>
			<view class="content-1">
				<view class='label'>品名</view>
				<view class='items'>
					<input v-model="form.tradeName" placeholder="请填写详细品名"></input>
				</view>
				<view style="justify-content: flex-end;width:45upx;">
					
				</view>
			</view>
			<view class="content-1" >
				<view style="width: 120upx;">目标价</view>
				<view style="width: 80upx;">
					<input v-model="price1" type="number" placeholder="请填写" placeholder-style="font-size: 13px;"></input>
				</view>
				<view class="blackLine"></view>
				<view style="width: 80upx;">
					<input v-model="price2" type="number" placeholder="请填写" placeholder-style="font-size: 13px;"></input>
				</view>
				<view style="padding-left: 5upx;">元/米</view>
				<view style="display:flex;justify-content: flex-end;flex:1;">
					<view @tap="tapTaxButton" :class="isTaxSelect?'tabActiveTax':'taxButton'">含税</view>
					<view @tap="tapCarrButton" :class="isCarriageSelect?'tabActiveTax':'taxButton'">含运费</view>
				</view>
			</view>
		</view>
		
		<view style="height:150upx;"></view>
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
	
	export default {
		components:{
			myPickerPart,
			uniIcon,
			ePicker
		},
		data() {
			return {
				delivery: ['现货','定织'],
				activeIndex: -1,
				isTaxSelect: false,
				isCarriageSelect: false,
				
				
				tradeName:'',      //关联的品名
				companyName:'',    //公司名
				price1:'',
				price2:'',
				form:{
					    companyCode:'',				//联系人编码
						buyOrSellCode:'',			//联系人编码
						tradeName:'',				//品名(别名)
						price:'',                   //目标价
                        isPlusDuty:'',	            //是否含税
                        isIcash:''			        //是否含运费

				    }
				
			};
		},
		onLoad:function(){
			_this = this
		},
		methods:{
			
			
			
			
			selectButton:function(e){
				console.log(e)
				this.activeIndex = e
			},
			
			
			toSelectInquiry:function(){
				uni.navigateTo({
					url: './connectInquiry',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			},
		    tapTaxButton:function(){
				this.isTaxSelect = !this.isTaxSelect
			},
			tapCarrButton:function(){
				this.isCarriageSelect = !this.isCarriageSelect
			},
			areaInput:function(e){
				console.log(e)
			},
			selectBuyer:function(){
				uni.navigateTo({
					url: '/pages/qing-f-c/newFollowRecord/selectBuyer',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			},
			async submit(){
				
                if (this.price2 < this.price1){
					uni.showToast({
						title: '价格范围有误',
						icon: 'none'
					});
					return
				}
				this.form.price = this.price1 +'~'+this.price2
				this.form.isPlusDuty = this.isTaxSelect? 1 : 0
				this.form.isIcash = this.isCarriageSelect? 1 : 0
				let data=this.form
				
                console.log(data)
				uni.showLoading({
					title: '提交中',
					mask: true
				})
				const res = await this.$http.post('/sQuotation/rapid_add',{data:data})
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
					url: `./casualList`
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
   line-height: 89upx;
 }
 .deliveryButton{
	 display: flex;
	 flex: 1;
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
	 flex: 1;
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
 .taxButton{
 	 display: flex;
	 
 	 align-items: center;
 	 justify-content: center;
 	 padding: 0 10upx;
 	 height:48upx;
 	 border:2upx solid rgba(220,220,220,1);
 	 border-radius:8px; 
	 margin-left: 20upx;
 }
 .tabActiveTax{
 	 display: flex;
	
 	 align-items: center;
 	 justify-content: center;
 	 padding: 0 10upx;
 	 height:48upx;
 	 border:2upx solid #ff6000;
 	 border-radius:8px;
 	 margin-left: 20upx;
 	 background: #FF6000;
 	 color: white;
 }
 .blackLine{
	 width:24upx;
	 height:3upx;
	 background:rgba(9,9,9,1);
	 margin: 0 20upx;
 }
</style>
