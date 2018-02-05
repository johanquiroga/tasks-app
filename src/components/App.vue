<template>
	<div class="container" id="app">
		<h1 class="text-center">Tasks App - johanquiroga.me</h1>

		<app-tasks></app-tasks>

		<app-footer></app-footer>
	</div>
</template>

<script>
	import Tasks from 'components/Task/Tasks.vue'
	import Footer from './Footer.vue'

	export default {
		components: {
			'app-tasks': Tasks,
			'app-footer': Footer
		}
	}
</script>

<style lang="scss">
	@import "src/sass/app";

	body {
	    margin: 10px;
	}

	.container {
		max-width: 650px;

		h2 {
	    	margin-bottom: 20px;
		}
	}
	
</style>