<template>
	<view>
		<view class="box-shawn">
			<view class="content-1" style="padding-top: 20upx;">
				<view class='label' style="color:#999999">公司名称</view>
				<view class='items'>
					{{item.companyName ||''}}
				</view>
			</view>
			<view class="content-1">
				<view class='label' style="color:#999999">主营类型</view>
				<view class='items'>
					{{mainProduct}}
				</view>
			</view>
			<view class="content-1">
				<view class='label' style="color:#999999">规模</view>
				<view class='items'>
					{{item.companyScaleName ||''}}
				</view>
			</view>
			<view class="content-1">
				<view class='label' style="color:#999999">经营模式</view>
				<view class='items'>
					{{item.businessModelName ||''}}
				</view>
			</view>
			
			<view class="content-1">
				<view class='label' style="color:#999999">优势</view>
				<view class='items'>
					{{superiority ||''}}
				</view>
			</view>
		</view>
		<view class="fixed_bottom box_shadow_btn" v-if="isShow">
		  <button class="btn_left" hover-class="none" @tap="bindCancel">删除</button>
		  <button class="btn_right" @tap="toEdit" hover-class="none">编辑</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				rivalCode:'',
				item:'',
				mainProduct:'',
				superiority:'',
				procurementArr:[],  //采购方式
				companyScaleArr:[], //公司规模
				businessModelArr:[], //经营模式
				isShow:false,
			};
		},
		onLoad:function(options){
			this.rivalCode = options.rivalCode
			// this.rivalCode = '101458267745'
			console.log(this.rivalCode)
			let pupDefault = uni.getStorageSync('pupDefault')
			if (pupDefault == "BUY_DEPUTY"){
				this.isShow = true
			}
			this.fetchProcurement()
			this.fetchCompanyScale()
			this.fetchBusinessModel()
			this.fetch()
			
		},
		onShow:function(){
			this.fetchProcurement()
			this.fetchCompanyScale()
			this.fetchBusinessModel()
			this.fetch()
		},
		methods:{
			async fetch(){
				const res = await this.$http.get('/cm/rival_details',{data:{
					rivalCode: this.rivalCode
				}})
				console.log(res)
				
				this.item = res.data.data
				console.log(this.item)
				this.joinMain()
			    this.joinSuperiority()
			},
			joinMain:function(){
				let tmp = []
				this.item.mainProductList.forEach((item)=>{
					tmp.push(item.mainProductName)
				})
				this.mainProduct = tmp.join(',')
			},
			joinSuperiority:function(){
				let tmp = []
				this.item.superiorityList.forEach((item)=>{
					tmp.push(item.superiorityName)
				})
				this.superiority = tmp.join(',')
			},
			async bindCancel(){
				uni.showModal({
						title: '提示',
						content: '确认删除该竞争对手吗？',
						showCancel: true,
						cancelText: '取消',
						confirmText: '确认',
						success: async (res) => {
							console.log(res)
							if (res.confirm){
								
								uni.showLoading({
									title:'提交中',
									mask: true
								})
								await this.$http.get('/cm/rivalDel',{data:{
									rivalCode: this.rivalCode
								}})
								uni.hideLoading()
								uni.showToast({
									title: '删除成功',
									
								});
								uni.navigateBack({
									delta: -1
								});
								
							}
							
						},
						fail: (err) => { console.log(err)},
						complete: () => {}
					});
				
			},
			async fetchProcurement(){
				const res = await this.$http.get('/choose/procurement',{})
				this.procurementArr = res.data.data.list
				console.log(this.procurementArr)
			},
			
			async fetchCompanyScale(){
				const res = await this.$http.get('/choose/scale',{})
				this.companyScaleArr = res.data.data.list
				console.log(this.companyScaleArr)
			},
			async fetchBusinessModel(){
				const res = await this.$http.get('/choose/businessModel',{})
				this.businessModelArr = res.data.data.list
				console.log(this.businessModelArr)
			},
			toEdit:function(){
				let data = JSON.stringify(this.item)
				let select = JSON.stringify({
					procurementArr: this.procurementArr,  //采购方式
					companyScaleArr: this.companyScaleArr, //公司规模
					businessModelArr: this.businessModelArr //经营模式
				})
				
				uni.navigateTo({
					url: `./editCompetitor?rivalCode=${this.rivalCode}&data=${data}&select=${select}`,
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			}
		}
	}
</script>

<style lang="scss">
      .box-shawn{
      	 padding: 0upx 30upx;
      	 background: #FFFFFF;
      }
      .content-1{
      	color: #333236;
      	font-size: 15px;
      	display: flex;
      	align-items: center;
      	//justify-content: space-between;
      	height: 80upx;
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
