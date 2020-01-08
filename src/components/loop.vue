<template>
	<div class="loop">
		<!-- <Carousel v-model="value1" :radius-dot="true" loop autoplay>
			<div v-for="(item,i) in loopArrr" :key="i">
				<CarouselItem>
					<div class="demo-carousel">
						<img :src="item">
					</div>
				</CarouselItem>
			</div>
		</Carousel> -->
		<Carousel style="height: 1.04rem;" autoplay>
			<Carousel-item v-for="(e,i) in loopArr" :key="i">
				<div class="demo-carousel">
					<img style="width:100%;height: 1.04rem;" :src="e">
				</div>
			</Carousel-item>
		</Carousel>
	</div>

</template>

<script>
	export default {
		name: "loop",
		props: ["loopArr"],
		data() {
			return {
				arr: [1, 2, 3, 4]
			}
		}
	}
</script>

<style>
	.loop {
		width: 100%;
		height: 1.04rem;

		Carousel {
			width: 100%;
			height: 100%;
		}
	}
</style>
