<template>
	<div class="chaoshi">
		<img class="jd-logo" src="img/jd/22.jpg">
		<h4>休闲食品</h4>
		<list></list>
		<h4>京东生鲜</h4>
		<list></list>
		<h4>粮油调味</h4>
		<list></list>
	</div>
</template>

<script>
	import list from '../components/list'
	export default {
		name:"chaoshi",
		components: {
			list
		}
	}
</script>

<style lang="less">
	.chaoshi {
		margin-top: 0.15rem;
		.jd-logo {
			width: 2.65rem;
			height: 0.9rem;
		}
		h4 {
			font-weight: 700;
			margin: 0.05rem 0;
		}
	}
</style>
