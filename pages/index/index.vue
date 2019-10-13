<template>
	<view class="content">
		<topSearch />
		<topTabbar :items= "items" />
		<analyistResult />
		
	</view>
</template>

<script>
	import topSearch from "@/components/topSearch.vue";
	import topTabbar from "@/components/topTabbar.vue";
	import analyistResult from "@/components/analyist-result.vue";
	export default {
		components:{
			topSearch,
			topTabbar,
			analyistResult
		},
		data() {
			return {
				title: 'Hello',
				items:["精选","图书","童书","服装","百货"]
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
	.content {
		
	}

	
</style>
