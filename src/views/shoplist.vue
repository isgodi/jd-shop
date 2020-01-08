<template>
	<div class="shoplist">
		<van-pagination 
		  v-model="currentPage" 
		  :total-items="24" 
		  :items-per-page="5"
		/>
	</div>
</template>

<script>
	export default {
		name:'shoplist',
		data(){
			return {
				currentPage:1
			}
		}
	}
</script>

<style>
</style>
