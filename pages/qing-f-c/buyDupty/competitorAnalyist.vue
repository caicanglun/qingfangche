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
					<myCheckboxGroup @selectChange="tabSwitchChange('mainProduct',$event)" :items="mainProduct"></myCheckboxGroup>
				</view>
			</view>
			<view class="content-1">
				<view class='label'>规模</view>
				<view class='items'>
					<myPickerPart :items="purcharseArr" @mychange="pickerChange('purcharseID',$event)" :firstLabel='-1'></myPickerPart>
				</view>
			</view>
			<view class="content-1">
				<view class='label'>经营模式</view>
				<view class='items'>
					<myPickerPart :items="purcharseArr" @mychange="pickerChange('purcharseID',$event)" :firstLabel='-1'></myPickerPart>
				</view>
			</view>
			<view class="content-1">
				<view class='label'>采购方式</view>
				<view class='items'>
					<myPickerPart :items="purcharseArr" @mychange="pickerChange('purcharseID',$event)" :firstLabel='-1'></myPickerPart>
				</view>
			</view>
			<view class="content-1">
				<view class='label'>优势</view>
				<view class='items'>
					<myPickerPart :items="purcharseArr" @mychange="pickerChange('purcharseID',$event)" :firstLabel='-1'></myPickerPart>
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
	import myPickerPart from "@/components/myPickerPartNew.vue";
	export default {
		components:{
			myCheckboxGroup,
			myPickerPart
		},
		data() {
			return {
				purcharseArr:[{id:1,label:'shenfen'},{id:2,label:'shenfen2'}],
				mainProduct:[{id:1,label:'梭织化纤布1'},{id:2,label:'梭织化纤布2'},{id:3,label:'梭织化纤布3'},{id:4,label:'梭织化纤布4'}],
				form:{
					companyName: ''
				}
			};
		},
		methods:{
			
			tabSwitchChange:function(label,index){
				if (label=="mainProduct"){
					let items = this.mainProduct
					for (var i = 0, lenI = items.length; i < lenI; ++i) {
						const item = items[i]
						if (item.id == index) {
							this.$set(item,'isChecked',!item.isChecked)
						}
					}
				}
			  },
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
