<template>
	<div>
		<h2 class="subtitle">{{ title }}</h2>

		<app-loading v-if="isLoading" :event="loadingAction.toLowerCase() + ' tarea'"/>

		<form @submit.prevent="save">
			<div class="form-group">
				<label for="title">Título</label>
				<input type="text" v-model.trim="draft.title" class="form-control" id="title">
			</div>

			<div class="form-group">
				<label for="description">Descripción</label>
				<textarea id="description" cols="30" rows="6" v-model.trim="draft.description" class="form-control"></textarea>
			</div>

			<button class="btn btn-success" :disabled="isLoading">
				<v-loading :loader="loadingAction.toLowerCase() + ' tarea'">
					<template slot="spinner">{{loadingAction}} tarea...</template>
					{{ action }}
				</v-loading>
			</button>
			
			<router-link :to="cancelRedirect" class="btn btn-danger">Cancelar</router-link>
		</form>
	</div>
</template>

<script>
	import Loading from 'components/Commons/Loading.vue'

	export default {
		components: {
			'app-loading': Loading
		},
		props: ['title', 'action', 'task', 'cancelRedirect', 'loadingAction'],
		data() {
			return {
				draft: clone(this.task)
			}
		},
		computed: {
			isLoading() {
				return this.$loading.isLoading(this.loadingAction.toLowerCase() + ' tarea');
			}
		},
		methods: {
			save() {
				this.$emit('save', this.draft);
				if (this.draft.title != '') {

				}
			}
		}
	}
</script>