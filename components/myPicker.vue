<template>
	
		<view class="flex_c list fs_14">
		  <view class="list_right"><text style="color:#EE603F" v-if="star=='true'">*</text>{{name}}：</view>
		  <picker @change="itemChange" :range="items" range-key="label" :value="index">
		    <view :class="(index==-1?'color_888 wid_400':'wid_400')">{{index==-1?"请选择":items[index].label}} </view>
		  </picker>
				<image src="/static/images/qingfc/arrow.png" class="i-next" mode="aspectFill"></image>
		</view>

</template>

<script>
	export default {
		props:{
			items:{
				type: Array
			},
			name:{
				type: String,
				default: '测试'
			},
			star:{
				type: String,
				default: 'false'
			}
		},
		data() {
			return {
				index: -1
			};
		},
		methods:{
			itemChange:function(e){
				let index = e.detail.value
				this.index = index
				this.$emit("mychange",this.items[index].id)
			}
		}
	}
</script>

<style lang="scss">

</style>
