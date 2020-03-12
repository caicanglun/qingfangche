<template>
	<view>
		<view v-if="serialList.length==0" style="margin-top:140upx;">
			<view class="flex_c_c">
				暂无相关产品
			</view>
			<view class="flex_c_c" @tap="toAddProuct">
				<text style="color:#FF6000">去添加</text>
			</view>
		</view>
		<view style="background: #FFFFFF;margin:20upx 20upx;" v-if="serialList.length>0">
			<uni-collapse ref="add" class="warp" @change="change">
				<uni-collapse-item v-for="(sub, key) in serialList" :key="key" :open="sub.open" :show-animation="sub.showAnimation" :disabled="sub.disabled" :title="sub.subName">
					
					<uni-list>
						 <uni-list-item v-for="(list, listIndex) in sub.subList" :key="listIndex" :title="list.title" 
						  @click="toDetail(list.goodsCode)" @switchChange="change"/>
					</uni-list> 
		
				</uni-collapse-item>
			</uni-collapse>
		</view>
		
		<view class="fixed_right_bottom box_shadow"  @tap="toAddProuct()">
		  <view>新建</view>
		  <view>产品</view>
		</view>
	</view>
</template>

<script>
	let _this
	import uniCollapse from '@/components/uni-collapse/uni-collapse.vue'
	import uniCollapseItem from '@/components/uni-collapse-item/uni-collapse-item.vue'
	import uniList from '@/components/uni-list/uni-list.vue'
	import uniListItem from '@/components/uni-list-item/uni-list-item-my.vue'
	export default {
		components:{
			uniCollapse,
			uniCollapseItem,
			uniList,
			uniListItem
		},
		data() {
			return {
				buyOrSellCode:'',
				companyCode:'',
				serialList:[{
					
					subName: '春亚纺系列',
					open: false,
					subList: [{
							title: '春亚纺300条',
							
						},
						{
							title: '春亚纺500条',
							
						}
					
					]
				   }
				],
			};
		},
		onLoad:function(options){
			_this = this
			this.buyOrSellCode = options.buyOrSellCode
			this.companyCode = options.companyCode
			this.getProductList()
		},
		onShow:function(){
			this.getProductList()
		},
		methods:{
			getProductList:function(){
				let url =  this.Api.QgoodsList
				let data ={
					 buyOrSellCode: _this.buyOrSellCode
					
				}
				console.log('wfefe')
				this.myRequest(data,url,'get').then(res => {
					// _this.pageNum++;
				  console.log(res);
					_this.serialList = res.data.data.list
				 }).catch(err => {
				  wx.showToast({
				    title: err.data.errMsg,
				    icon: 'none'
				  });
				});
			},
			toDetail:function(goodsCode){
				console.log(goodsCode)
				uni.navigateTo({
					url: './productDetail?goodsCode='+goodsCode+'&buyOrSellCode='+this.buyOrSellCode,
					success: res => {},
					fail: (err) => {console.log(err)},
					complete: () => {}
				});
			},
			change:function(){
				
			},
			toAddProuct:function(){
			    uni.navigateTo({
			    	url: '/pages/qing-f-c/productShow/product-created?companyCode='+ this.companyCode,
			    	success: res => {},
			    	fail: (err) => {console.log(err)},
			    	complete: () => {}
			    });
			}
			
		}
		
	}
</script>

<style lang="scss">
.fixed_right_bottom{
  position: fixed;
  bottom: 187upx;
  right: 23upx;
  height: 100upx;
  width: 100upx;
  border-radius: 100upx;
  background-color: #FF6000;
  color: #fff;
  font-size: 28upx;
  text-align: center;
  line-height: 1;
  box-sizing: border-box;
  padding-top:22upx; 
  font-weight: bold;  
}
</style>
