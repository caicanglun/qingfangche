<template>
	<view>
		<switchButton :items="items" :testIndex="itemsIndex" @buttonChange="buttonChange"></switchButton>
		
		<my-picker :items="pickerItems" :firstLabel="pickerItemsIndex"></my-picker>
		<view style="padding: 200upx 15%;">
					<button type="primary" @tap="showBanner">打开弹窗</button>
		</view>
				
		<popupMe ref="myPopup" @input="getContent" title="请输入不匹配原因"></popupMe>	

	</view>
</template>

<script>
	import switchButton from '@/components/switchButton-last.vue';
	import myPicker from "@/components/myPicker.vue";
	import popupMe from "@/components/popupMe.vue";
	export default {
		components:{
			switchButton,
			myPicker,
			popupMe
		},
		// onBackPress() {
		// 		if(this.bannerShow){
		// 				this.bannerShow = false;
		// 				return true;
		// 			}
		// 		},

		data() {
			return {
				items:[{id: 1,label:'石狮'},{id: 0,label:'盛泽'}],
				itemsIndex: 0,
				pickerItems:[{id: 'ss',label:'石狮'},{id: 'sz',label:'盛泽'},{id: 'js',label:'江苏'}],
				pickerItemsIndex: 'sz',
				bannerShow:false,
				content: ''
			};
		},
		methods:{
			buttonChange:function(e){
				this.itemsIndex = e
				console.log(this.itemsIndex)
			},
			closeBanner:function(){
				this.bannerShow=false;
						},
			showBanner:function(){
				this.$refs.myPopup.show()
			},
			getContent:function(e){
				this.content = e
				console.log(this.content)
			}

		}
	}
</script>

<style lang="scss">
    /* 弹出层形式的广告 */
    	.uni-banner {
    		width: 80%;
    		position: fixed;
    		left: 10%;
    		margin-top: -300upx;
    		z-index: 99;
			border-radius: 6upx;
    	}
    	.uni-mask{
			position: fixed;
			top:0;
			left:0;
			z-index:50;
			width:100%;
			height:100%;
			background:rgba(0,0,0,0.4);
    	}
		.textarea-borer{
			border: 2upx solid #DCDCDC;
			height: 140upx;
			width: 500upx;
			border-radius: 6upx;
			padding-right: 20upx;
			background-color:#F7F7F7;
			font-size: 14px;
		}
		.newPart{
			display: flex;
			font-size: 14px;
			
			width: 170upx;
			height: 60upx;
			justify-content: center;
			align-items: center;
			
			border: 1upx solid #FF6000;
			box-sizing: border-box;
			border-radius: 30upx;
			color: #fff;
			background-color: #FF6000;
			margin-left: 10upx;
		}
		.newPartCancel{
			display: flex;
			font-size: 14px;
			
			width: 170upx;
			height: 60upx;
			justify-content: center;
			align-items: center;
			
			border: 1upx solid #DCDCDC;
			box-sizing: border-box;
			border-radius: 30upx;
			color: black;
			background-color: #FFFFFF;
			margin-left: 10upx;
		}

</style>
