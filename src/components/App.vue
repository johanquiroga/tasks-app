<template>
	<div class="container" id="app">
		<app-header title="Tasks App - johanquiroga.me"></app-header>

		<router-link to="/dashboard">Dashboard</router-link>
		<router-link to="/tasks">Tareas</router-link>

		<keep-alive>
			<router-view></router-view>
		</keep-alive>

		<app-footer></app-footer>
	</div>
</template>

<script>
	import Header from 'components/Layout/Header.vue'
	import Footer from 'components/Layout/Footer.vue'

	export default {
		components: {
			'app-header': Header,
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