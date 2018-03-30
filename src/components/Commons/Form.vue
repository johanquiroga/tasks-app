<template>
	<div>
		<h2 class="subtitle">{{ title }}</h2>

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
				<v-loading :loader="loadingAction">
					<template slot="spinner">{{actionMessage}} tarea...</template>
					{{ action }}
				</v-loading>
			</button>
			
			<router-link :to="cancelRedirect" class="btn btn-danger">Cancelar</router-link>
		</form>
	</div>
</template>

<script>
	export default {
		props: ['title', 'action', 'task', 'cancelRedirect', 'loadingAction'],
		data() {
			return {
				draft: clone(this.task)
			}
		},
		computed: {
			isLoading() {
				return this.$loading.isLoading(this.loadingAction);
			},
			actionMessage() {
				return this.loadingAction == 'tasks.create' ? 'Creando ' : 'Actualizando'
			}
		},
		methods: {
			save() {
				this.$emit('save', this.draft);
			},
			loader() {
				if (this.isLoading) {
					this.$swal({
						title: this.actionMessage + ' tarea',
						onOpen: () => this.$swal.showLoading(),
						allowOutsideClick: () => !this.isLoading
					})
				}
			}
		},
		watch: {
			isLoading: 'loader'
		}
	}
</script>