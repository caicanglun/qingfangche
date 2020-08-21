<script>
	const url = require('./lib/messageUrl.js')
	let _payload={}
	export default {
		onLaunch: function() {
			console.log('App Launch')
			
			//#ifdef APP-PLUS
            
			 plus.push.addEventListener("click",function(message){
				console.log(message)
				let payload = message.payload
				console.log(payload)
				
				if (plus.os.name == 'iOS'){
					if (payload == 'LocalMSG'){
						console.log(_payload)
						url(_payload)()
					}else {
						let payloadStr = payload.replace(/\'/g, '"')  //替换单引号成双引号
						let payloadObj = JSON.parse(payloadStr); //处理下消息内容  
						console.log(payloadObj)
						let urlObj = {
							 messageType: payloadObj.relevanceTarget,
							 orderNum: payloadObj.relevanceCode
						}
						url(urlObj)()
					}
					
				}
				
				// uni.navigateTo({
				// 	url: '/pages/qing-f-c/message/messageList'
				// })
				
			  },false);
			  plus.push.addEventListener('receive',function(msg){
				  console.log(msg)
				  if (plus.os.name == 'Android'){
					 let payload = msg.payload
					 var payloadStr = payload.replace(/\'/g, '"')  //替换单引号成双引号
					 var payloadObj = JSON.parse(payloadStr); //处理下消息内容  
					 console.log(payloadObj)
					 let urlObj = {
						 messageType: payloadObj.relevanceTarget,
						 orderNum: payloadObj.relevanceCode
					 }
					 url(urlObj)()
					 console.log('hwifhief')
				  }
				  
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
					  			console.log(iosmsg)
								_payload = {messageType: iosmsg.relevanceTarget,
									           orderNum: iosmsg.relevanceCode}
					  			//创建消息并设置本地消息的msg.payload=LocalMSG（唯一标识）下次进入receive则直接break；  
					  			plus.push.createMessage(iosmsg.content, "LocalMSG", options); 
								 var UIApplication = plus.ios.import("UIApplication");
								 var app = UIApplication.sharedApplication();  
								  //获取应用图标的数量  
								  
								 var oldNum = app.applicationIconBadgeNumber();  

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
