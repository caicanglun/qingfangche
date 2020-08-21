<template>
	<view>
		<view class="flex_c" style="margin-top: 20upx;">
			<view style="color: #707070;font-size: 12px;width:80upx;">{{title}}</view>
			<view style="display:flex;width: 600upx;padding-left:20upx;">
				<view class="colorBlock" v-if="levelA>0" style="background:#50E788;" :style="{width: comLevelA+'upx'}">{{levelA}}</view>
				<view class="colorBlock" v-if="levelB>0" style="background:#2E8FF4;" :style="{width: comLevelB +'upx'}">{{levelB}}</view>
				<view class="colorBlock" v-if="levelC>0" style="background:#F89E0F;" :style="{width: comLevelC+'upx'}">{{levelC}}</view>
				<view class="colorBlock" v-if="levelD>0" style="background:#C072E9;" :style="{width: comLevelD+'upx'}">{{levelD}}</view>
				<view class="colorBlock"  style="background:#DADADA;flex-grow: 1;"></view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			title: String,
			levelA: [Number,String],
			levelB: [Number,String],
			levelC: [Number,String],
			levelD: [Number,String],
			levelE: [Number,String],
		},
		computed: {
			comLevelA:function(){
				if (Math.floor(parseInt(this.levelA)/500*600)<40){
					return 40
				}else {
					return Math.floor(parseInt(this.levelA)/500*600)
				}
			},
			comLevelB:function(){
				if (Math.floor(parseInt(this.levelB)/500*600)<40){
					return 40
				}else {
					return Math.floor(parseInt(this.levelB)/500*600)
				}
			},
			comLevelC:function(){
				if (Math.floor(parseInt(this.levelC)/500*600)<40){
					return 40
				}else {
					return Math.floor(parseInt(this.levelC)/500*600)
				}
			},
			comLevelD:function(){
				if (Math.floor(parseInt(this.levelD)/500*600)<40){
					return 40
				}else {
					return Math.floor(parseInt(this.levelD)/500*600)
				}
			}
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
  .colorBlock{
  	 display: flex;
  	 justify-content: center;
  	 align-items: center;
  	 height: 50upx;
  	 color: white;
  }
</style>
