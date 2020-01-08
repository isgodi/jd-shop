<template>
	<div class="home">
		<div class="home-in">	
			<router-view></router-view>
		</div>
		<div class="nav">
			<div><router-link to="/shouye">首页</router-link></div>
			<div><router-link to="/classify">分类</router-link></div>
			<div><router-link to="/shopcar">购物车</router-link></div>
			<div><router-link to="/user">我的</router-link></div>
		</div>
	</div>
	
</template>

<script>
	import {show} from "../api/index.js"
	export default {
		name: 'home',
		data(){
			return {

			}
		},
		mounted() {
			show().then(res => {
				console.log(res)
			}).catch(err => {
				console.log(err);
			})
		}
	}
</script>

<style lang="less">
	#home {
		padding-bottom: 10000px;
	}

	.nav {
		display: flex;
		position: fixed;
		left: 0;
		bottom: 0;
		width: 100%;
		align-items: center;
		justify-content: space-around;
		// color: #13C2C2;
		height: 0.6rem;
		background-color: #fff;
		z-index: 100;
	}
</style>