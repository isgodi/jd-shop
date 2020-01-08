<template>
	<div class="list">
		<dl v-for="(e,i) in lists" :key="i">
			<dt><router-link to="/shoplist"><img src="img/jd/1.jpg"></router-link></dt>
			<dd>手机</dd>
		</dl>
	</div>
</template>

<script>
	export default {
		name:'list',
		data(){
			return {
				lists:[1,2,3,4,5,6,7,8,9]
			}
		}
	}
</script>

<style lang="less">
	.list {
		width: 2.65rem;
		background-color: #fff;
		display: flex;
		justify-content:space-around;
		flex-wrap:wrap;
		
		dl {
			width: 0.76rem;
			text-align:center;
			margin:0.09rem 0;
			img {
				width: 100%;
				height: 0.83rem;
			}
		}
	}
</style>
