<template>
	<view>
		<view class="wrap">
			<view class="title">
				<view>产品要素</view>
				<view>原样分析结果</view>
				<view>回样分析结果</view>
			</view>
			<!-- ------------------- -->
			<view class="content">
				<view class="content-left">
					成份
				</view>
				<view class="content-right">
					<view class="content-text">
						<view class="text-up">
							<view>{{list.inquiryIngredient}}</view><view>{{list.quotationIngredient}}</view>
						</view>
						<view>
							<rangeButton @buttonChange="compareChange('ingredient',$event)" :items="items"></rangeButton>
						</view>
					</view>
					<view></view>
				</view>
			</view>

			<!-- --------------- -->
			<view class="content">
				<view class="content-left">
					规格
				</view>
				<view class="content-right">
					<view class="content-text-1">
						<view class="text-up">
							<view class="seller">{{list.inquirySpecification}}</view><view class="seller" style="margin-left:10upx;">{{list.quotationSpecification}}</view>
						</view>
						<view>
							<rangeButton @buttonChange="compareChange('specification',$event)" :items="items"></rangeButton>
						</view>
					</view>
					<view></view>
				</view>
			</view>
			
			<!-- --------------- -->
			<view class="content">
				<view class="content-left">
					风格
				</view>
				<view class="content-right">
					<view class="content-text">
						<view class="text-up">
							<view>{{list.inquiryStyle}}</view><view>{{list.quotationStyle}}</view>
						</view>
						<view>
							<rangeButton @buttonChange="compareChange('style',$event)" :items="items"></rangeButton>
						</view>
					</view>
					<view></view>
				</view>
			</view>
			<!-- --------------- -->
			<view class="content">
				<view class="content-left-1">
					<view>布样</view>
					<view>类型</view>
				</view>
				<view class="content-right">
					<view class="content-text">
						<view class="text-up">
							<view>{{list.inquiryClothType}}</view><view>{{list.quotationClothType}}</view>
						</view>
						<view>
							<rangeButton @buttonChange="compareChange('clothType',$event)" :items="bigButtons" wid="wid_240"></rangeButton>
						</view>
					</view>
					<view></view>
				</view>
			</view>
			<!-- --------------- -->
			<view class="content">
				<view class="content-left-1">
					<view>密度</view>
					<view>(({{list.quotationClothType|| ''}}))</view>
				</view>
				<view class="content-right">
					<view class="content-text">
						<view class="text-up">
							<view>{{list.inquiryDensity}}</view><view>{{list.quotationDensity}}</view>
						</view>
						<view>
							<rangeButton @buttonChange="compareChange('density',$event)" :items="items"></rangeButton>
						</view>
					</view>
					<view></view>
				</view>
			</view>
			<!-- --------------- -->
			<view class="content">
				<view class="content-left-1">
					<view>克重</view>
					<view>(({{list.quotationClothType|| ''}}))</view>
				</view>
				<view class="content-right">
					<view class="content-text">
						<view class="text-up">
							<view>{{list.inquiryGramWeight}}</view><view>{{list.quotationGramWeight}}</view>
						</view>
						<view>
							<rangeButton @buttonChange="compareChange('gramWeight',$event)" :items="items"></rangeButton>
						</view>
					</view>
					<view></view>
				</view>
			</view>
			<!-- --------------- -->
			<view class="content">
				<view class="content-left-1">
					<view>幅宽</view>
					<view>({{list.quotationClothType|| ''}})</view>
				</view>
				<view class="content-right">
					<view class="content-text">
						<view class="text-up">
							<view>{{list.inquiryClothBreadth || ''}}</view><view>{{list.quotationClothBreadth ||''}}</view>
						</view>
						<view>
							<rangeButton @buttonChange="compareChange('clothBreadth',$event)" :items="items"></rangeButton>
						</view>
					</view>
					<view></view>
				</view>
			</view>
			<!-- --------------- -->
			
		</view>  <!-- wrap -->
		<view class="placeholder-view"></view>
		 
		<view class="fixed_bottom box_shadow_btn flex">
		   <button class="btn_left" hover-class="none" @tap="bindCancel">取消</button>
		  <button class="btn_right" @tap="confirm" hover-class="none">确定</button>
		</view>
	</view>
</template>

<script>
	import rangeButton from "@/components/rangeButton-single.vue";
	let _this
	export default {
		components:{
			rangeButton
		},
		data() {
			return {
				// SAME(1, "相同"),
				//  SIMILARITY(2, "相似"),
				//  DIFFERENT(3, "不同");
				items:[{id:1,label:'相同'},{id:2,label:'相似'},{id:3,label:'不同'}],
				partCompare:'',
				bigButtons: [{id:1,label:'相同'},{id:3,label:'不同'}],
				list:'',
				form:{
						inquiryAnalysisSampleCode:'',	    //询价分析数据编码
					    quotationAnalysisSampleCode:'',	//报价分析数据编码
					    ingredient:'',						//成分
						specification:'',				//规格
						style:'',							//风格
						clothType:	'',				//布样类型
						density:'',							//密度
						gramWeight:	'',					//克重
						clothBreadth:''	,				//幅宽
					
				},
				quotationNumber:''
				
			};
		},
		onLoad:function(options){
			_this =this
			this.quotationNumber = options.quotationNumber
			console.log(this.quotationNumber)
			this.contrastDetails()
		},
		methods:{
			compareChange:function(label,e){
				switch(label){
					case 'ingredient':
					   _this.form.ingredient = e
					   break
					case 'specification':
					   _this.form.specification = e
					    break
					case 'style':
					   _this.form.style = e
					    break
					case 'clothType':
					   _this.form.clothType = e
					    break
					case 'density':
					   _this.form.density = e
					    break
					case 'gramWeight':
					   _this.form.gramWeight = e
					    break
					case 'clothBreadth':
					   _this.form.clothBreadth = e
					    break
				}
				console.log(e)
				
			},
			contrastDetails:function(){
				let url = this.Api.contrastDetails
				let data = {
					quotationNumber: _this.quotationNumber
				}
				
				this.myRequest(data,url,'get').then(res => {
				  console.log(res)
				  if (res.data.status == 0){
					 _this.list = res.data.data
				  }
				  console.log(_this.list)
				}).catch(err => {
				  wx.showToast({
				    title: err.data.errMsg,
				    icon: 'none'
				  });
				});
			},
			
			bindCancel:function(){
				uni.navigateBack({
					delta: 1
				});
			},
			confirm:function(){
				let url = this.Api.contrastAdd
				_this.form.inquiryAnalysisSampleCode  = _this.list.inquiryAnalysisSampleCode
				_this.form.quotationAnalysisSampleCode = _this.list.quotationAnalysisSampleCode
				let data = _this.form
				
				this.myRequest(data,url,'post').then(res => {
				  console.log(res)
				  if (res.data.status == 0){
					  var pages = getCurrentPages();
					  var currPage = pages[pages.length - 1]; //当前页面
					  var prevPage = pages[pages.length - 2]; //上一个页面
					 
					  //直接调用上一个页面的setData()方法，把数据存到上一个页面中去
					  
					  prevPage.setData({
					     isDoRefresh:true
					  })
					  
					  uni.navigateBack({
					  	delta: 1
					  });
				  }
				}).catch(err => {
				  wx.showToast({
				    title: err.data.errMsg,
				    icon: 'none'
				  });
				});
			}
		}
	}
</script>

<style lang="scss">
  page{
	  background: #F4F4F4;
  }
  .wrap{
	  background: #FFFFFF;
  }
  .title{
	  font-size: 15px;
	  font-weight: bold;
	  height: 65upx;
	  display: flex;
	  justify-content: space-around;
	  align-items:  center;
	  border-bottom: 1upx solid #E6E6E6;
  }
  .content{
	  display: flex;
	  align-items: center;
	  height: 132upx;
	  border-bottom: 2upx solid #E6E6E6;
	  .content-left{
		  width: 210upx;
		  display: flex;
		  align-items: center;
		  justify-content: center;
		  font-size:15px;
	  }
	  .content-left-1{
	  		  width: 210upx;
	  		  display: flex;
			  flex-direction: column;
	  		  align-items: center;
	  		  justify-content: center;
	  		  font-size:15px;
	  }
		  
	  .content-right{
		  width: 520upx;
		  display: flex;
		  flex-direction: column;
		  .content-text{
			  
			  font-size: 13px;
			  color: #898989;
			  .text-up{
				  display: flex;
				  justify-content: space-around;
			  }
		  }
		  .content-text-1{
		  			  font-size: 12px;
		  			  color: #898989;
		  			  .text-up{
		  				  display: flex;
		  				  justify-content: space-around;
		  			  }
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
	    line-height: 88upx;
	  }
	  .btn_right_100{
	    width: 100%;
	    background-color: #FF6000;
	    color: #fff;
	    border-radius: 0;
	    font-size: 16px;
	    line-height: 88upx;
	  }
	  .btn_right{
	    width: 50%;
	    background-color: #FF6000;
	    color: #fff;
	    border-radius: 0;
	    font-size: 16px;
	    line-height: 88upx;
	  }
	  .seller{
	  	max-height: 130upx;
	  	overflow: hidden;
	  	word-break: break-all;  /* break-all(允许在单词内换行。) */
	  	text-overflow: ellipsis;  /* 超出部分省略号 */
	  	display: -webkit-box; /** 对象作为伸缩盒子模型显示 **/
	  	-webkit-box-orient: vertical; /** 设置或检索伸缩盒对象的子元素的排列方式 **/
	  	-webkit-line-clamp: 3; /** 显示的行数 **/	
	  }
  }
</style>
