<template>
	<view>
		<view :class="'box_shadow search_btn ' + (bindSelect?(index==1?'bind_searach':'bind_searach_more'):'')" @tap="bindSelectFunc">
		
			<view class="flex selection ">
			  <view>
				<block v-for="(item, index) in selectContent" :key="index">
				  <view :class="'fs_14 ' + (index>0?'lh_62':'color_FF6000')" @tap="bindSelectContent" 
				  :data-index="index">{{item.realName}}</view>
				</block>
			  </view>
			  <!-- <image src="/static/images/qingfc/application/select_bind.png" mode="aspectFit"></image> -->
			  <uniIcon type='arrowdown' size='20' color='#000000' v-if='!bindSelect'></uniIcon>
			  <uniIcon type='arrowup' size='20' color='#000000' v-if='bindSelect'></uniIcon>
			</view>
		</view>
	</view>
</template>

<script>
	import uniIcon from "@/components/uni-icons/uni-icons.vue";
	export default {
		computed:{
			returnHeight(){
				return this.showHeight+'upx';
			}		
		},
		components:{
			uniIcon
		},
		beforeMount:function(){
			this.getRegionCode()
		},
		data() {
			return {
				selectContent:[],
				regionIndex:0,
				regionCode:'',
				bindSelect: false,
				index: 2
			};
		},
		methods:{
			async getRegionCode(){
					  
					  
					  const res = await this.$http.get('/cm/region_deputy')
					  this.selectContent = res.data.data.list[this.regionIndex].list
					  
					  console.log(res)
			},
			bindSelectFunc: function () {
			  // this.setData({
			  //    bindSelect: !this.bindSelect
			  // });
			  this.bindSelect = !this.bindSelect
			  
			},
			// 点击选项
			bindSelectContent: function (e) {
			  let index = e.currentTarget.dataset.index;
			  let selectContent = this.selectContent;
			  let obj = selectContent[0];
			  selectContent[0] = selectContent[index];
			  selectContent[index] = obj;
			  if (this.selectContent[0].userCode == 0){
				  this.regionCode = '' 
			  }else{
				  this.regionCode = this.selectContent[0].userCode
			  }
              this.$emit('selected',this.regionCode)
			},
		}
	}
</script>

<style lang="scss">
	.flex{
		display: flex;
	}
    .search_btn{
      width: 210upx;
      /* background-color: #F2F2F2; */
      background-color: #F2F2F2;
      border-radius: 28upx;
      display: flex;
      justify-content: center;
     /* color:#9B9B9B; */
      color:#333;
      height: 56upx;
      flex-wrap: wrap;
      position: relative;
      z-index: 99;
      overflow: hidden;
      transition: 0.2s
    }
	.bind_searach{
	  /* height: 192upx; */
	  height: 300upx;
	}
	.bind_searach_more{
	  /* height: 192upx; */
	  height: 800upx;
	}
	.selection{
	  line-height: 56upx;
	}
	.lh_62{
	  line-height: 62upx;
	}
	.fs_14{
		fonts-size: 14px;
	}
	.color_FF6000{
		color: #000000;
	}
</style>
