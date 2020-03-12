<template>
	<view>
		<view class='box box_shadow'>
			<view class='hand_text border_bottom'>蓝牙搜索</view>
			<block v-for="(item,index) in devices" :key="index">
				<view class='flex_sb_c border_bottom' @tap='onConn(item)' >
					<view class='flex_c'>
						<image src="/static/images/qingfc/application/printer.png" class='printer_img'></image>
						<view class='font_we_bold'>{{item.name}}</view>
					</view>
					<view class='flex_c'>
						<view class='color_9b' @tap='onConn(item)'>点击添加</view>
						<image src="/static/images/qingfc/application/right.png" class='right_img'></image>
					</view>
				</view>
			</block>
			
			
			<button class='btn' @tap='searchBle' :loading="isScanning">重新搜索</button>
		</view>
	</view>
</template>

<script>
	var tsc = require('@/components/gprint/tsc.js')
	var esc = require('@/components/gprint/esc.js')
	export default {
		data() {
			return {
				items:[],
				isScanning:'',
				devices: [],
				currDev: null,
				connId: '',
				piaojuText:'',
			};
		},
		methods:{
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
										}
									},
								})
							}
						})
					},
					onDevice(){
						console.log("监听寻找到新设备的事件---------------")
						var that = this
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
								let serviceId = ""
			
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
						let url = "pages/qing-f-c/inquiryManage/sampleInquiry/analyst/inquiry-details-1?inquiryNumber=000108Z"
						let height = 30
						let deviceId = this.currDev.deviceId;
						let serviceId = this.currDev.services[0].serviceId;
						let characteristicId = this.currDev.services[0].characteristicId;
						var command = tsc.jpPrinter.createNew()
						// console.log(command)
					    command.setSize(74, 52)
			            command.setGap(2)
			            command.setCls()
			            command.setText(50, 10, "TSS24.BF2", 1, 1, "找样单号：000108Z")
			            command.setQR(50, 50, "L", 10, "A", url)
						command.setText(250, height, "TSS24.BF2", 1, 1, "涤棉1*1消光平稳")
						height += 35
						command.setText(250, height, "TSS24.BF2", 1, 1, "买帮办")
						height += 35
						command.setText(250, height, "TSS24.BF2", 1, 1, "卖帮办")
						height += 35
						command.setText(250, height, "TSS24.BF2", 1, 1, "买家编号")
						height += 35
						command.setText(250, height, "TSS24.BF2", 1, 1, "已分析")
						height += 35
						command.setText(250, height, "TSS24.BF2", 1, 1, "打印日期")
						height += 35
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

<style lang="scss">
 page{
	 background: #F4F4F4;
 }
 .box{	margin: 20rpx;	padding: 0 20rpx 80rpx;	font-size: 14px;	background-color: #fff;	border-radius: 6rpx;}
 .hand_text{	font-size: 16px;	font-weight: bold;	padding: 30rpx 10rpx;}
 .printer_img{	width: 40rpx;	height: 40rpx;	padding: 22rpx 20rpx 22rpx 10rpx;	}
 .color_9b{	color: #9b9b9b;}
 .right_img{	width: 15rpx;	height: 25rpx;	padding: 0 10rpx 0 20rpx;}
 .text_search{	text-align: center;	font-size: 14px;	color: #9b9b9b;	margin: 50rpx 0 0;}
 .btn{	text-align: center;	color: #fff;	background-color: #FF6000;	width: 406rpx;	line-height: 76rpx;	border-radius: 6rpx;	margin-top: 30rpx;	font-size: 16px;}
 .border_bottom{	border-bottom: 1rpx solid #DDDDDD;}
</style>
