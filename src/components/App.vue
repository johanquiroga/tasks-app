<template>
	<div class="container" id="app">
		<app-header title="Tasks App - johanquiroga.me"></app-header>

		<app-tasks></app-tasks>

		<app-footer></app-footer>
	</div>
</template>

<script>
	import Header from 'components/Layout/Header.vue'
	import Tasks from 'components/Task/Tasks.vue'
	import Footer from 'components/Layout/Footer.vue'

	export default {
		components: {
			'app-header': Header,
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