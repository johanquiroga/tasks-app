<template>
	<div class="container" id="app">
		<app-header title="Tasks Management App"></app-header>

		<ul class="nav nav-tabs">
			<router-link tag="li" :to="{name: 'dashboard'}" active-class="active" exact><a>Dashboard</a></router-link>
			<router-link tag="li" :to="{name: 'tasks'}" active-class="active"><a>Tareas</a></router-link>
		</ul>

		<router-view></router-view>

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