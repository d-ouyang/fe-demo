<template>
	<view class="container">
		<u-swiper :list="list" title :effect3d="true" @click="onClickSwiperItem"></u-swiper>
	</view>
</template>

<script>
	import Mock from 'mockjs'
	export default {
		data() {
			return {
				loading: true,
				list: []
			}
		},
		async onLoad() {
			Promise.all([
				this.getHotList()
			])
			setTimeout(() => {
				this.loading = false
			}, 2000)
		},
		methods: {
			onClickSwiperItem(e) {
				const current = this.list[e]
				console.log(current)
			},
			async getHotList() {
				const list = await this.$mock.getHotList()
				console.log(list)
				this.list = list
			}
		}
	}
</script>

<style>
</style>
