const http= (options) =>{
	return Promise((reslove,reject) => {
		uni.showLoading({
			title: '加载中....',
			mask: true
		});
		uni.request({
			url: options.url,
			method: options.method,
			data: options.data,
			success: res => {
				reslove(res.data)
			},
			fail: () => {},
			complete: () => {
				uni.hideLoading();
			}
		});
	})
}
export default http