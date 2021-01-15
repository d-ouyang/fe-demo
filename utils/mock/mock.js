import Mock from 'mockjs'
import hotList from './demo.hot.js'

export default {
	getHotList() {
		return new Promise((resolve, reject) => {
			const response = Mock.mock({
				'list': hotList
			})
			if (response.list) {
				resolve(response.list)
			} else {
				reject('数据获取失败')
			}
		})
	}
}