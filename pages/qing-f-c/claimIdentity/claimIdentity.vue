<template>
	<view>
		<view class="claimWrap">
			<view class="titleView">
				<view><text>身份</text></view>
				<view><text>真实姓名</text></view>
				<view><text>手机号码</text></view>
				<view><text>公司名称</text></view>
				<view><text>公司地址</text></view>
			</view>
			<view class="contentView">
				<view><text>卖家</text></view>
				<view><text>赵又廷</text></view>
				<view><text>15700165431</text></view>
				<view><text>廷越织造厂</text></view>
				<view><text>江苏盛泽</text></view>
			</view>
		</view>
		<view>
			<button class="login_btn">马上认领</button>
		</view>
		<view class="skipFooter">
			<navigator url="" open-type="navigate" style="color: #999999;font-size: 13px;">跳过</navigator>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		onLoad: function() {
			var loginRes = this.checkLogin('/pages/qing-f-c/claimIdentity/clainIdentity', '1');
			if(!loginRes){
				return false;
			}
		}
	}
</script>

<style lang="scss">
	       .claimWrap{
			   display: flex;
			   flex-direction: row;
			   padding: 30upx;
			 
		   }
		   .titleView{
			   view{
				   padding-top: 20upx;   
			   }
			   text{
				  color: #909090;
				  font-size: 13px; 
			   }
			}
			.contentView{
				padding-left: 63upx;
				view{
					padding-top: 20upx;
				}
				text{
					font-size: 13px;
					font-weight: bold;
				}
			}   
		   
		   .login_btn{
		     width: 400upx;
		     line-height: 96upx;
		     color:#fff;
		     background-color: #ff6000;
		     border-radius: 44upx;
		     margin: 100upx auto 20upx;
		     font-size: 18px;
		   }
		   .skipFooter{
			   display: flex;
			   justify-content: center;
		   }
</style>
