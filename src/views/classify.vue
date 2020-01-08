<template>
	<div class="classify clearfix">
		<heads></heads>
		<div class="left">
			<ul>
				<li><router-link class="as linkin" to="/tuijian">推荐分类</router-link></li>
				<li><router-link class="as linkin" to="/chaoshi">京东超市</router-link></li>
				<li><router-link class="as linkin" to="#">全球购</router-link></li>
			</ul>
		</div>
		<div class="right">
			<router-view></router-view>
		</div>
	</div>
</template>



<script>
	import heads from '../components/header.vue'
	export default {
		nama:"classify",
		components: {
			heads
		},
		data(){
			return {
				
			}
		}
	}
</script>

<style lang="less">
	.clearfix:after {
		content: "";
		display: block;
		visibility: hidden;
		clear: both;
	}
	.as {
		color: #000;
	}
	.classify {
		background-color: rgba(240,240,240,1);
		width: 100%;
		margin-top: 0.44rem;
		.left{
			float: left;
			margin-right:0.1rem;
			li {
				width: 0.9rem;
				height: 0.5rem;
				line-height: 0.5rem;
				text-align: center;
			}
		}
		.right {
			float: left;
		}
	}
</style>
