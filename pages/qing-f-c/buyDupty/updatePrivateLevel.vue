<template>
	<view>
		<view style="padding: 0 30upx;">
			<view class="content-1">
				<view class='label'>客户等级</view>
				<view class='items'>
					<myPickerPart v-if="level.length>0" :items="level" @mychange="pickerChange('customLevel',$event)" :firstLabel='statusCode'></myPickerPart>
				</view>
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
				level:[],
				companyCode:'',
				statusCode:''
				
			}
		},
		onLoad:function(options){
			_this = this
		    this.companyCode = options.companyCode
		    this.statusCode = options.statusCode
			this.getCompanyLevel()
		},
		methods:{
			async getCompanyLevel(){
				const res = await this.$http.get('/choose/private_level',{})
				console.log('companyLevel',res)
				this.level = res.data.data.list
			},
			
			pickerChange:function(label,event){
			  console.log(event)
			  switch (label){
				  case 'customLevel':
					 this.statusCode = event
					 
					 break;
				}
				
			},
			
			async submit(){
				
				let data={
					companyCode: this.companyCode,    //公司编码数组
					privateLevel:   this.statusCode	      //等级
				}

				uni.showLoading({
					title: '提交中',
					mask: true
				});
				const res = await this.$http.get('/cm/private_level_update',{data:data})
				uni.hideLoading()
				uni.navigateBack({
					delta: -1
				});
			}
		}
	}
</script>

<style lang="scss">
	
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
