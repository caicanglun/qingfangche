<template>
	<view>
		<button style="background-color: #ff6000;color: #FFFFFF;margin-top:10upx;width:80%;" @click="searchBle">搜索蓝牙</button>
		
		<view style="margin-top: 30upx;" :key="index" v-for="(item,index) in devices">
			<button style="width: 400upx; color: #0081FF;" @click="onConn(item)">{{item.name}}</button>
		</view>
		<button style="background-color: #ff6000;color: #FFFFFF;margin-top:100upx;width:80%;" @click="senBleLabel()">打印二维码</button>
		<view class="flex mt_50">
			<view style="margin-left:30upx;">
				<image src="/static/images/qingfc/application/code.png" mode="aspectFit" style="width:250upx;height:250upx;"></image>
			</view>
			<view style="margin-left:30upx;">
				<block v-for="(item,index) in showData" :key = "index">
					<view>{{item}}</view>
				</block>
				      
					  
			</view>
		</view>
		<!-- <textarea @blur="bindTextAreaBlur" auto-height placeholder-style="color:#F76260" placeholder="请输入票据信息" v-model="piaojuText" /> -->
		<!-- <button style="margin-top: 100upx;" @click="senBleLabel2()">票据打印</button> -->
	</view>


</template>

<script>
	var tsc = require('../../../components/gprint/tsc.js')
	var esc = require('../../../components/gprint/esc.js')
	let _this
	export default {
		data() {
			return {
				devices: [],
				currDev: null,
				connId: '',
				piaojuText:'',
				number:'',
				orderType:''  ,// 1询价，2报价
				topList:'',
				url:'',
				showData:'',
				isAnalysis:''
			}
		},
		computed:{
			// createtime:function(){
			// 	let str = _this.topList.createTime
			// 	str = str.toString()
			// 	return str.slice(0,10)
			// }
		},
		onLoad: function(options) {
		    _this = this
			this.number = options.number
			this.orderType = options.orderType
			this.isAnalysis = options.isAnalysis
			this.getInquiryInfo()
			
		},
        onUnload:function(){
			_this.destroyed()
		},
		methods: {
			
			
			getInquiryInfo:function(){
				 let url= this.Api.qrCode
				 let data={
					number: _this.number,
					orderType: _this.orderType,
					isAnalysis: _this.isAnalysis
				}
				this.myRequest(data,url,'get').then(res => {
				  console.log(res);
				  _this.topList = res.data.data
				
				 _this.number = res.data.data.number
				 _this.orderType = res.data.data.orderType
				  console.log('number',_this.number)
				  console.log('orderType',_this.orderType)
				  _this.showData= res.data.data.showData
				 
				  
				  
				 }).catch(err => {
				  wx.showToast({
				    title: err.data.errMsg,
				    icon: 'none'
				  });
				});
			},
			  destroyed: function() {
						console.log("destroyed----------")
						if (this.connId != '') {
							uni.closeBLEConnection({
								deviceId: this.connId,
								success(res) {
									console.log(res)
								}
							})
						}
			
					},
				searchBle() {
						var that = this
						console.log("initBule")
						uni.openBluetoothAdapter({
							success(res) {
								console.log("打开 蓝牙模块")
								console.log(res)
								that.onDevice()
								uni.getBluetoothAdapterState({
									success: function(res) {
										console.log(res)
										if (res.available) {
											if (res.discovering) {
												that.stopFindBule()
											}
											//搜索蓝牙
											//开始搜寻附近的蓝牙外围设备
											console.log("开始搜寻附近的蓝牙外围设备")
											uni.startBluetoothDevicesDiscovery({
												success(res) {
													console.log(res)
												}
											})
			
										} else {
											console.log('本机蓝牙不可用')
											uni.showToast({
												title: '本机蓝牙不可用',
												icon:'none',
												duration: 2000
											});
										}
									},
								})
							}
						})
					},
					onDevice(){
						console.log("监听寻找到新设备的事件---------------")
						var that = this
						that.devices = []
						//监听寻找到新设备的事件
						uni.onBluetoothDeviceFound(function(devices) {
									console.log('--------------new-----------------------'+JSON.stringify(devices))
									var re = JSON.parse(JSON.stringify(devices))
									console.log(re.devices[0].name + "  " + re.devices[0].deviceId)
										let name = re.devices[0].name
										if (name != "未知设备") {
											let deviceId = re.devices[0].deviceId
											that.devices.push({
												name: name,
												deviceId: deviceId,
												services: []
											})
										}
									
									
									
									
						})
					},
					
					stopFindBule() {
						console.log("停止搜寻附近的蓝牙外围设备---------------")
						uni.stopBluetoothDevicesDiscovery({
							success(res) {
								console.log(res)
							}
						})
					},
					onConn(item) {
						var that = this
						console.log("连接蓝牙---------------" + item.deviceId)
						let deviceId = item.deviceId
						uni.createBLEConnection({
							deviceId: deviceId,
							complete(res) {
								if (res.errMsg == "createBLEConnection:ok") {
									console.log("连接蓝牙-[" + item.name + "]--成功")
									uni.showToast({
										title: '连接成功',
										duration: 3000
									});
									that.connId = deviceId;
									that.currDev = item
									setTimeout(function() {
										that.getBLEServices(deviceId)
									}, 2000)
								} else {
									console.log(res)
								}
								//连接成功 关闭搜索
								that.stopFindBule()
			
							},
						})
					},
			
					getBLEServices(_deviceId) {
						var that = this;
						let deviceId = _deviceId
						console.log("获取蓝牙设备所有服务(service)。---------------")
			
						uni.getBLEDeviceServices({
							// 这里的 deviceId 需要已经通过 createBLEConnection 与对应设备建立链接
							deviceId: deviceId,
							complete(res) {
								console.log(res)
			
								for (var s = 0; s < res.services.length; s++) {
									console.log(res.services[s].uuid)
									let serviceId = res.services[s].uuid
									uni.getBLEDeviceCharacteristics({
										// 这里的 deviceId 需要已经通过 createBLEConnection 与对应设备建立链接
										deviceId: deviceId,
										// 这里的 serviceId 需要在 getBLEDeviceServices 接口中获取
										serviceId: serviceId,
										success(res) {
											var re = JSON.parse(JSON.stringify(res))
			
											console.log('deviceId = [' + deviceId + ']  serviceId = [' + serviceId + ']')
											for (var c = 0; c < re.characteristics.length; c++) {
												if (re.characteristics[c].properties.write == true) {
													let uuid = re.characteristics[c].uuid
													console.log(' deviceId = [' + deviceId + ']  serviceId = [' + serviceId + '] characteristics=[' +
														uuid)
			
													for (var index in that.devices) {
														if (that.devices[index].deviceId == deviceId) {
															that.devices[index].services.push({
																serviceId: serviceId,
																characteristicId: uuid
															})
															break
														}
			
													}
													console.log(JSON.stringify(that.devices))
			
												}
											}
										}
									})
			
								}
			
			
			
							},
							fail(res) {
								console.log(res)
							},
						})
			
					},
					senBlData(deviceId, serviceId, characteristicId,uint8Array) {
						console.log('************deviceId = [' + deviceId + ']  serviceId = [' + serviceId + '] characteristics=[' +characteristicId+ "]")
						var uint8Buf = Array.from(uint8Array);
						function split_array(datas,size){
							var result = {};
							var j = 0
							for (var i = 0; i < datas.length; i += size) {
								result[j] = datas.slice(i, i + size)
								j++
							}
							console.log(result)
							return result
						}
						var sendloop = split_array(uint8Buf, 20);
						// console.log(sendloop.length)
						function realWriteData(sendloop, i) {
							var data = sendloop[i]
							if(typeof(data) == "undefined"){
								return
							}
							console.log("第【" + i + "】次写数据"+data)
							var buffer = new ArrayBuffer(data.length)
							var dataView = new DataView(buffer)
							for (var j = 0; j < data.length; j++) {
								dataView.setUint8(j, data[j]);
							}
							uni.writeBLECharacteristicValue({
								deviceId,
								serviceId,
								characteristicId,
								value: buffer,
								success(res) {
									realWriteData(sendloop, i + 1);
								}
							})
						}
			           var i = 0;
						realWriteData(sendloop, i);
					},
					
					senBleLabel() {
						//标签模式
						let content = _this.topList.orderType+"#轻纺车网络科技欢迎你#"+_this.topList.number
						uni.showToast({
							title: content,
							duration: 1000
						});
						let height = 30
						
						let deviceId = this.currDev.deviceId;
						let serviceId = this.currDev.services[0].serviceId;
						let characteristicId = this.currDev.services[0].characteristicId;
						var command = tsc.jpPrinter.createNew()
						// console.log(command)
					    command.setSize(74, 52)
			            command.setGap(2)
			            command.setCls()

						for (var i=0;i<_this.showData.length;i++){
							command.setText(250, height, "TSS24.BF2", 1, 1, _this.showData[i])
							height += 35
						}
						
						command.setText(20, 30, "TSS24.BF2", 2, 2, '轻纺车网')
						command.setText(60, 100, "TSS24.BF2", 1, 1, '144F.com')
			            command.setQR(20, 140, "L", 8 , "A", content)
						command.setPagePrint()
						this.senBlData(deviceId, serviceId, characteristicId,command.getData())
					},
					senBleLabel2(){
						//票据模式
						let deviceId = this.currDev.deviceId;
						let serviceId = this.currDev.services[0].serviceId;
						let characteristicId = this.currDev.services[0].characteristicId;
						var command = esc.jpPrinter.createNew()
						command.init()
			            command.setText(this.piaojuText);
			            command.setPrintAndFeedRow(1)
						this.senBlData(deviceId, serviceId, characteristicId,command.getData())
					}
				}
			
		
	}
</script>

<style>

</style>
