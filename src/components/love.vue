<template>
	<div class="love">
		<div class="love-title">
			<span class="love-no">爱 / 生 / 活</span>
		</div>
		<div class="love-content">
			<div class="list" v-for="(e,i) in lists" :key="i">
				<p class="list-title">玩3C</p>
				<p class="list-desc">
					iPhone6 16G低至2499元疯抢
				</p>
				<img src="img/jd/5.png">
				<img src="img/jd/6.png">
			</div>
			<div class="list" v-for="(e,i) in lists" :key="i">
				<p class="list-title">爱健康</p>
				<p class="list-desc">
					满299减100
				</p>
				<img src="img/jd/5.png">
			</div>
		</div>
	</div>
	
</template>

<script>
	export default {
		name:"love",
		data(){
			return {
				lists:[1,2,3,4]
			}
		}
	}
</script>

<style lang="less">	
	.love-title {
		width: 100%;
		height: 0.4rem;
		text-align:center;
		line-height:0.4rem;
		background-color:rgba(240,240,240,1);
		.love-no {
			color: #FF9D57;
		}
	}
	.love-content {
		height: 3.6rem;
		width: 100%;
		.list:nth-child(-n+4){
			width: 1.87rem;
			height: 1.2rem;
			float: left;
			.list-title {
				font-size: 15px;
			}
			.list-desc {
				color: #FF6060;
				font-size: 0.12rem;
			}
			img {
				width: 0.93rem;
				height: 0.72rem;
				font-size: 0;
			}
		}
		.list:nth-child(n+5){
			float: left;
			width: .93rem;
			height: 1.2rem;
			float: left;
			.list-title {
				font-size: 15px;
			}
			.list-desc {
				color: #FF6060;
				font-size: 0.12rem;
			}
			img {
				width: 0.93rem;
				height: 0.72rem;
				font-size: 0;
			}
		}
	}
</style>
