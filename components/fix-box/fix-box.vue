<template>
	<view>
		<movable-area class="fixed-box">
			<movable-view class="fixed-button" direction="all" :inertia="true" >
				<slot></slot>
			</movable-view>
		</movable-area>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
  .fixed-box {
  	pointer-events: none; // 这里是重点，盒子可穿透操作
  	width: 100vw;
  	height: 100vh;
  	position: fixed;
  	left: 0;
  	bottom: 0;
  	z-index: 10000;
  }
  .fixed-button {
  	pointer-events: auto;
  	width: max-content;
  	height: auto;
  	overflow: hidden;
  	z-index: 999;
  	display: flex;
  	align-items: center;
  	justify-content: center;
  	left: 650rpx;
  	top: 70vh;
  }
   
  /* 适配iphonex 有底部横条的 */
  @supports (bottom: constant(safe-area-inset-bottom)) or (bottom: env(safe-area-inset-bottom)) {
  	.fixed-box {
  		bottom: constant(safe-area-inset-bottom);
  		bottom: env(safe-area-inset-bottom);
  	}
  }

</style>
