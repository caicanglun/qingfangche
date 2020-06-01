module.exports = item =>{
	return function(){
		    let identity = uni.getStorageSync('pupDefault')
			item
			this.isDoRefresh = true
			switch (identity){
				case 'SELL_DEPUTY':
				    if (item.messageType ==1){
				    	uni.navigateTo({
				    		url: `/pages/qing-f-c/inquiryManage/sellDeputy/inquiry-details?inquiryNumber=${item.orderNum}`,
				    		
				    	});
				    } else if (item.messageType == 2){
						uni.navigateTo({
							url:`/pages/qing-f-c/inquiryManage/sampleInquiry/sellDeputy/inquiry-details?inquiryNumber=${item.orderNum}`
						})
					}else if (item.messageType == 3){
						uni.navigateTo({
							url:`/pages/qing-f-c/inquiryManage/sellDeputy/inquiry-details?inquiryNumber=${item.orderNum}`
						})
					}
					else if (item.messageType == 4){
						uni.navigateTo({
							url:`/pages/qing-f-c/inquiryManage/sampleInquiry/sellDeputy/inquiry-details?inquiryNumber=${item.orderNum}`
						})
					}
				    break;
				case 'BUY_DEPUTY':
				    if (item.messageType ==1){
				    	uni.navigateTo({
				    		url: `/pages/qing-f-c/inquiryManage/inquiry-details?inquiryNumber=${item.orderNum}`,
				    		
				    	});
				    } else if (item.messageType ==2){
						uni.navigateTo({
							url: `/pages/qing-f-c/inquiryManage/sampleInquiry/buyDeputy/inquiry-details?quoteNumber=${item.orderNum}`,
							
						});
					}else if (item.messageType ==3){
						uni.navigateTo({
							url: `/pages/qing-f-c/inquiryManage/quotedPrice/quotedPrice?quoteNumber=${item.orderNum}`,
							
						});
					}else if (item.messageType ==4){
						uni.navigateTo({
							url: `/pages/qing-f-c/inquiryManage/sampleInquiry/buyDeputy/quotationDetails/quotationDetails?number=${item.orderNum}`,
							
						});
					}		
				    break;
				case 'SALES_DIRECTOR':
				    if (item.messageType ==1){
				    	uni.navigateTo({
				    		url: `/pages/qing-f-c/inquiryManage/sales_director/inquiry-details?inquiryNumber=${item.orderNum}`,
				    		
				    	});
				    } else if (item.messageType ==2){
				    	uni.navigateTo({
				    		url: `/pages/qing-f-c/inquiryManage/sampleInquiry/sales_director/inquiry-details?inquiryNumber=${item.orderNum}`,
				    		
				    	});
				    }else if (item.messageType ==3){
				    	uni.navigateTo({
				    		url: `/pages/qing-f-c/inquiryManage/sales_director/quotation-detail?quoteNumber=${item.orderNum}`,
				    		
				    	});
				    }else if (item.messageType ==4){
				    	uni.navigateTo({
				    		url: `/pages/qing-f-c/inquiryManage/sampleInquiry/sales_director/quotation-details?number=${item.orderNum}`,
				    		
				    	});
				    }else if (item.messageType == 5) {
						uni.navigateTo({
							url: `/pages/qing-f-c/inquiryManage/sales_director/quotation-detail?quoteNumber=${item.orderNum}`,
							
						});
					}		
				    
				    break;
				case 'REGIONAL_MANAGER':
				    
				    break;
				case 'ANALYST':
				    
				    break;
			}
		    
			if (item.messageType ==6){
				uni.navigateTo({
					url: `/pages/qing-f-c/customPicture/followRecordDetail?recordCode=${item.orderNum}`,
					
				});
			}
			if (item.messageType == 7){
				uni.navigateTo({
					url: `/pages/qing-f-c/customPicture/followRecordDetailSeller?recordCode=${item.orderNum}`,
					
				});
			}
			if (item.messageType == 8){
				uni.navigateTo({
					url: `/pages/qing-f-c/newFollowRecord/publicDialog?recordCode=${item.orderNum}&buyOrSell=1`,
					
				});
			}
			if (item.messageType == 9){
				uni.navigateTo({
					url: `/pages/qing-f-c/newFollowRecord/publicDialog?recordCode=${item.orderNum}&buyOrSell=2`,
					
				});
			}
			if (item.messageType == 10){
				uni.navigateTo({
					url: `/pages/qing-f-c/newFollowRecord/detail?recordCode=${item.orderNum}`,
					
				});
			}
			if (item.messageType == 11){
				uni.navigateTo({
					url: `/pages/qing-f-c/newFollowRecord/detail?recordCode=${item.orderNum}`,
					
				});
			}
	}
}