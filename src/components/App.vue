<template>
	<div class="container" id="app">
		<app-header title="Tasks App - johanquiroga.me"></app-header>

		<ul class="nav nav-tabs">
			<router-link tag="li" to="/" active-class="active" exact><a>Dashboard</a></router-link>
			<router-link tag="li" to="/tasks" active-class="active"><a>Tareas</a></router-link>
		</ul>

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
		max-width: 920px;

		h2 {
	    	margin-bottom: 20px;
		}
	}
	
</style>