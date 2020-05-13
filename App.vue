<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
			
			//#ifdef APP-PLUS
            
			 plus.push.addEventListener("click",function(message){
				console.log(message)
				let payload = message.payload
				console.log(payload)
				
				uni.navigateTo({
					url: '/pages/qing-f-c/message/messageList',
					
				})
			  },false);
			  plus.push.addEventListener('receive',function(msg){
				  console.log(msg)
				  if (plus.os.name == 'iOS'){
					  switch (msg.payload) {
					  		case "LocalMSG"://ios进入判断  如果msg.payload为LocalMSG则不创建本地消息  
					  			break;  
					  		default:  
					  			//创建本地消息  
					  			var iosmsgstr = msg.content.replace(/\'/g, '"')  //替换单引号成双引号
					  			var iosmsg = JSON.parse(iosmsgstr); //处理下消息内容  
					  			var options = {  
					  				cover: false,
					  				title: iosmsg.title
					  			};  
					  			
					  			//创建消息并设置本地消息的msg.payload=LocalMSG（唯一标识）下次进入receive则直接break；  
					  			plus.push.createMessage(iosmsg.content, "LocalMSG", options); 
								 var UIApplication = plus.ios.import("UIApplication");
								  var app = UIApplication.sharedApplication();  
								  //获取应用图标的数量  
								  
								 var oldNum = app.applicationIconBadgeNumber();  
								 console.log("oldNUM",oldNum)
								 
								var newNum = oldNum + 1;
								
								 plus.runtime.setBadgeNumber(newNum);
								//导入个推原生类
								 var GeTuiSdk = plus.ios.importClass("GeTuiSdk");
								 GeTuiSdk.setBadge(newNum);
								 
					  			break;  
					  	}  
				  }
				       
						

			  },false);
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
