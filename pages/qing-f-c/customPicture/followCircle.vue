<template>
	<view>
		<view style="padding: 0 45upx;">
			<view class="row_class">
				<view style="color: #333333">A级客户</view>
				<view class="flex">
					 <!-- <picker @change="bindPickerChange('A',$event)" :value="indexA" :range="array">
					        <view v-if="indexA <0" style="color: #999999">请选择 </view>
							<view v-else style="color: #333333">{{array[indexA]}}</view>
					 </picker>
					 <uniIcon size="24" type="arrowright" color="#333333" style="padding-left: 10upx;"></uniIcon> -->
					 <view style="color: #333333">{{array[indexA]}}</view>
				</view>
			</view>
			<view class="row_class">
				<view style="color: #333333">B级客户</view>
				<view class="flex">
					 <!-- <picker @change="bindPickerChange('B',$event)" :value="indexB" :range="array">
					        <view v-if="indexB <0" style="color: #999999">请选择 </view>
							<view v-else style="color: #333333">{{array[indexB]}}</view>
					 </picker>
					 <uniIcon size="24" type="arrowright" color="#333333" style="padding-left: 10upx;"></uniIcon> -->
					 <view style="color: #333333">{{array[indexB]}}</view>
				</view>
			</view>
			<view class="row_class">
				<view style="color: #333333">C级客户</view>
				<view class="flex">
					<!-- <picker @change="bindPickerChange('C',$event)" :value="indexC" :range="array">
					        <view v-if="indexC <0" style="color: #999999">请选择 </view>
							<view v-else style="color: #333333">{{array[indexC]}}</view>
					 </picker> -->
					 <view style="color: #333333">{{array[indexC]}}</view>
					 <!-- <uniIcon size="24" type="arrowright" color="#333333" style="padding-left: 10upx;"></uniIcon> -->
				</view>
			</view>
			
		</view>
		<!-- <view class="fixed_bottom box_shadow_btn">
		  <button class="btn_right" @tap="submit" hover-class="none">提交</button>
		</view> -->
	</view>
	
</template>

<script>
	import uniIcon from "@/components/uni-icons/uni-icons.vue"
	function getDate(){
		let array = ['不跟进']
		for (let i=1; i< 31; i++){
			array.push(i+'天')
		}
		return array
	}
	export default {
		components:{
			uniIcon
		},
		data() {
			return {
				array: getDate(),
				indexA: -1,
				indexB: -1,
				indexC: -1,
				regionCode:''
			};
		},
		onLoad:function(){
			this.regionCode = this.$store.state.regionCode
			console.log(this.regionCode)
			this.getCompanyLevelView()
		},
		methods:{
			async getCompanyLevelView(){
				let data ={ regionCode: this.regionCode}
				const res = await this.$http.get('/portrayal/company_level_view',{data: data})
				
				this.indexA = res.data.data.a
				this.indexB = res.data.data.b
				this.indexC = res.data.data.c
				// console.log(this.indexA)
			},
			bindPickerChange: function(label,e) {
				console.log('picker发送选择改变，携带值为', e.target.value)
				if (label == 'A'){
					this.indexA = e.target.value
				}else if (label == 'B'){
					this.indexB = e.target.value
				}
				else if (label == 'C'){
					this.indexC = e.target.value
				}
				
			},
			async submit(){
				
				let data ={
					regionCode: this.regionCode,
					a: this.indexA,
					b: this.indexB,
					c: this.indexC,
					d: 0,
					e: 0
				}
				console.log(data)
				const res = await this.$http.get('/portrayal/company_level_update?',{data:data})
				console.log(res)
				uni.showToast({
					title: '设置成功'
				});
			}
		}
		
	}
</script>

<style lang="scss">
 page{
	 font-size: 15px;
 }
 .row_class{
	 border-bottom: solid 2upx #E7E7E7;
	 display: flex;
	 justify-content: space-between;
	 align-items: center;
	 height: 90upx;
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
</style>
