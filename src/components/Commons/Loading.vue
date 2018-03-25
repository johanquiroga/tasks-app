<template>
	<sweet-modal ref="loadingModal" blocking hide-close-button>
		<v-loading :loader="event" slot="default" class="loading">
			<template slot="spinner">
				<app-spinner :size="60" />
			</template>
		</v-loading>
	</sweet-modal>
</template>

<script>
	export default {
		props: ['event'],
		mounted() {
			this.$refs.loadingModal.open()
		},
	}
</script>

<style>
	.loading {
		display: flex;
		justify-content: center;
	}
</style>