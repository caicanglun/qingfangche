<template>
	<!--
	<inputSearch :dataSource="dataSource" @select="handleChange" placeholder="请输入商品名称" />
	//数据源
	dataSource: [{
			id: 1,
			name: '耐克1'
		},
		{
			id: 2,
			name: '耐克2'
		}
	],
	 
	 //用户点击获取的数据
	 handleChange(data) {
	 	console.log(data)
	 }
	 
	 -->
	<view class="input-group">
		<input :placeholder="placeholder" @input="search" @blur="hideList" v-model="name" placeholder-class="fs_13"/>
		<view class="ul">
			<view class="li" v-for="(item,index) in list" :key="index" @tap="select(item)">{{item}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			placeholder: String, //默认提示
			searchKey: String, //模糊搜索的key值
			// dataSource: {
			// 	type: Array,
			// 	default: function() { //数据源
			// 		return [];
			// 	}
			// }
			
		},
		data() {
			return {
				list: [],
				name: '',
				backName: '',
				dataSource:[]
			};
		},
	
		destroyed() {
			clearTimeout(this.t);
		},
		methods: {
			async search(e) {
				let val = e.detail.value;
				// let {
				// 	dataSource
				// } = this;
				let data ={
					keyword: val
				}
				const res = await this.$http.get('shop/specification_query',{data: data})
				console.log(res)
				this.list = res.data.data.list
                this.$emit('input',this.name)

			},
			select(item) {
				this.backName = item;
				this.name = item;
				this.list = [];
				this.$emit('select', item);
				uni.hideKeyboard()
			},
			hideList() {
				this.list = [];
				this.t = setTimeout(() => {
					// this.name = this.backName;
				}, 0);
				
			}

		}
	}
</script>


<style lang="scss">
	.input-group {
		position: relative;


		input {
			// border: 1upx solid gray;
			width: 500upx;
			// height: 50upx;
			padding-left: 10upx;
			font-size: 14px;
			box-sizing: border-box;
		}

		.ul {
			position: absolute;
			left: 0;
			top: 100%;
			width: 100%;
			background: #FFFFFF;
			box-shadow:0px 4px 8px 0px rgba(0, 0, 0, 0.05);
            z-index: 999;
			.li {
				border-bottom: 1upx solid #E6E6E6;
				line-height: 70upx;
				margin: 0 20upx;
			}
		}
	}
	.fs_13{
		font-size: 13px;
	}
</style>
