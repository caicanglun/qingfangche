<template>
	<view>
		<view class="wrap-box">
			<view class="content-box">
				<text class="baojia_price">报价价格：</text>
				<input v-model="newPrice" placeholder="请输入价格"  type='number' class="input" placeholder-style="font-size: 13px;"/>
				<switchButton :items="unit" @buttonChange="tapSwitch"></switchButton>
			</view>
			<view class="content-bottom">
				<text class="baojia_price">备注：</text>
				<input v-model="remark" placeholder="请输入" class="input_two" placeholder-style="font-size: 13px;"/>
			</view>
			
		</view>
		<view class="fixed_bottom box_shadow_btn">
		  <button class="btn_right" @tap="submit" hover-class="none">确定修改并推送</button>
		</view>
	</view>
</template>

<script>
	import switchButton from '@/components/switchButton-auto.vue';
	export default {
		components:{
		   switchButton	
		},
		data() {
			return {
				newPrice:'',
				remark:'',
				unit:[{id: 1,label:'元/米'},{id: 0,label:'元/码'}],
				unitIndex: 1,
			};
		},
		methods:{
			tapSwitch:function(e){
				this.unitIndex = e
				console.log(this.unitIndex)
			}
		}
		
	}
</script>

<style lang="scss">
   .wrap-box{
	margin-top: 40upx;
	margin-left: 40upx;
	margin-right: 30upx;	
}
.content-box{
	display: flex;
	justify-content: space-between;
	align-items: center;	
	border-bottom: 1upx solid rgba(237,237,237,1);
	height: 65upx;
	
}
.content-bottom{
	display: flex;
	justify-content: space-between;
	align-items: center;	
	height: 65upx;
	
}
.baojia_price{
	color: #333236;
	font-size: 14px;
}
.input{
		width: 250upx;
	}
.input_two{
	width: 480upx;
}
.fixed_bottom{
	  width: 100%;
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
	  line-height: 88upx;
	}
</style>
