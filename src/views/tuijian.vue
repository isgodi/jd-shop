<template>
	<div class="tuijian">
		<img class="jd-logo" src="img/jd/11.jpg">
		<h4>专场推荐</h4>
		<div class="show-time">
			<dl>
				<dt><img src="img/jd/5.png"></dt>
				<dd><router-link class="as little" to="#">厨房电器超级品类日</router-link></dd>
			</dl>
			<dl>
				<dt><img src="img/jd/6.png"></dt>
				<dd><router-link class="as little" to="#">厨房电器超级品类日</router-link></dd>
			</dl>
			<dl>
				<dt><img src="img/jd/7.png"></dt>
				<dd><router-link class="as little" to="#">厨房电器超级品类日</router-link></dd>
			</dl>
		</div>
		<h4>热门分类</h4>
		<list></list>
	</div>
	
</template>

<script>
	import list from '../components/list.vue'
	export default {
		name:"tuijian",
		components:{
			list
		}
	}
</script>

<style lang="less">
	.as {
		color: #000;
	}
	.little {
		font-size: 12px;
	}
	.tuijian {
		margin-top: 0.15rem;
		.jd-logo {
			width: 2.65rem;
			height: 0.9rem;
		}
		h4 {
			font-weight: 700;
			margin: 0.05rem 0;
		}
		.show-time {
			width: 2.65rem;
			height: 1.33rem;
			background-color: #fff;
			display:flex;
			justify-content:space-around;
			dl {
				margin-top: 0.09rem;
				width: 0.76rem;
				text-align:center;
				img {
					width: 100%;
					height: 0.73rem;
				}
				dd {
					color: #000;
				}
			}
		}
	}
</style>
