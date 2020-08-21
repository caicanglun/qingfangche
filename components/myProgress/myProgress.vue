<template>
	<view>
		<view style="width: 90%;">
			<view class="flex_c" :style="{width: (percent>20?percent:20) +'%'}" style="justify-content: flex-end;">
				<text style="font-size:16px;font-weight: bold;">{{current}}</text>
				<text style="font-size:12px;font-weight: bold;">{{unit}}</text>
			</view>
		</view>
		<!-- <progress :percent="percent" activeColor="#FF6000" show-info active stroke-width="10" border-radius="5"/> -->
		<progress  activeColor="#FF6000" show-info active stroke-width="10" border-radius="5"/>
		<view class="flex_sb" style="width: 90%;">
			<view>
				<text style="font-size:16px;font-weight: bold;">0</text>
			</view>
			<view>
				<text style="font-size:16px;font-weight: bold;">{{target}}</text>
				<text style="font-size:12px;font-weight: bold;">{{unit}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			target: [String,Number],
			percent: Number,
			current: [String,Number],
			unit: String
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">

</style>
