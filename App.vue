<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
			
			//#ifdef APP-PLUS
            
			 plus.push.addEventListener("click",function(message){
				
				let payload = message.payload
				console.log(payload)
				
				uni.navigateTo({
					url: '/pages/qing-f-c/message/messageList',
					success: res => {},
					fail: (err) => {console.log(err)},
					complete: () => {}
				})
			  },false);
			  // plus.push.addEventListener('receive',function(message){

			  // },false);
			//#endif
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	@import url("common/app.css");
</style>
