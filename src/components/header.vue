<template>
	<div id="header">
		<div class="sao">
			一
		</div>
		<div class="ku">
			搜索
			<input type="text">
		</div>
	</div>
	
</template>

<script>
</script>

<style lang="less">
	#header {
		width: 100%;
		height: 0.44rem;
		position:relative;
		position:fixed;
		z-index: 100;
		background-color: #fff;
		top:0;
		.sao {
			width: 0.2rem;
			height: 0.2rem;
			left: .35rem;
			top: 0.12rem;
			line-height: 0.2rem;
			border-radius: 3px;
			background-color: rgba(255, 0, 0, 0);
			text-align: center;
			border: 1px dashed rgba(153, 153, 153, 1);
			cursor: pointer;
			position: absolute;
		}
		.ku {
			width: 2.38rem;
			height: 0.3rem;
			line-height: 0.3rem;
			border-radius: 0.15rem;
			background-color: rgba(240, 240, 240, 1);
			text-align: center;
			margin-left: 0.7rem;
			margin-top: 0.05rem;
			input {
				outline: none;
				border: none;
				background-color: rgba(240, 240, 240, 1);
			}
		}
	}
</style>
