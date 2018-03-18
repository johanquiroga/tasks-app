<template>
	<div>
		<h2 class="subtitle">{{ title }}</h2>

		<form @submit.prevent="save">
			<div class="form-group">
				<label for="title">Título</label>
				<input type="text" v-model.trim="draft.title" class="form-control" id="title" required>
			</div>

			<div class="form-group">
				<label for="description">Descripción</label>
				<textarea id="description" cols="30" rows="6" v-model.trim="draft.description" class="form-control"></textarea>
			</div>

			<button class="btn btn-success">{{ action }}</button>
			
			<router-link :to="cancelRedirect" class="btn btn-danger">Cancelar</router-link>
		</form>
	</div>
</template>

<script>
	export default {
		props: ['title', 'action', 'task', 'cancelRedirect'],
		data() {
			return {
				draft: clone(this.task)
			}
		},
		methods: {
			save() {
				if (this.draft.title != '') {
					this.$emit('save', this.draft);
				}
			}
		}
	}
</script>