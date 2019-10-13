<template>
	<view v-if="tabSelection==2">
	  <view class="search flex fs_12">
	    <view class="flex_c search_input " style="width:590upx">
	      <icon type="search" size="14" style="height:14px;margin-left:40upx;"></icon>
	      <input placeholder="搜索" placeholder-style="color:#9B9B9B" confirm-type="search" @confirm="bindSearch" @input="inputSearch"></input>
	    </view>
	    <view class="search_btn2" @tap="bindSearchFollow">搜索</view>
	    <!-- <image mode='aspectFit' src='/images/jinsy/riqi.png' class='riqi_img' bindtap='iconTime'></image> -->
	  </view>
	  <view class="time_box flex" v-if="tabSelection==2">
	    <view class="time_btn">
	      <picker mode="date" :value="startDate||newTime" start="2016-01-01" :end="newTime" @change="startDateChange">
	        {{startDate||'开始时间'}}
	      </picker>
	    </view>
	    <image src="/images/jinsy/jiantou.png" mode="aspectFit" class="wangfan_img"></image>
	    <view class="time_btn">
	      <picker mode="date" :value="endDate||newTime" :start="startDate||'2016-01-01'" :end="newTime" @change="endDateChange">
	        {{endDate||'结束时间'}}
	      </picker>
	    </view>
	    <view class="reset" @tap="bindReset">重置</view>
	  </view>
	</view>
</template>

<script>
</script>

<style>
</style>
