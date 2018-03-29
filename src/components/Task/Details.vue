<template>
	<div v-if="task">
		<h2>{{ task.title }}</h2>

		<p>{{ task.description }}</p>

		<div class="well">
			<button @click="toggleTask" class="btn" :class="task.pending ? 'btn-default': 'btn-primary'">
				<app-icon img="ok"></app-icon> Completar
			</button>
			<button @click="editTask" class="btn btn-default">
				<app-icon img="edit"></app-icon> Editar
			</button>
			<button @click="deleteTask" class="btn btn-default" :disabled="isDeleteLoading">
				<v-loading loader="tasks.delete">
					<template slot="spinner">
						<app-icon img="trash"></app-icon> Eliminando tarea...
					</template>
					<app-icon img="trash"></app-icon> Eliminar
				</v-loading>
			</button>
		</div>
	</div>
</template>

<script>
	export default {
		props: ['id'],
		computed: {
			task() {
				return this.$store.getters.findTask(this.id);
			},
			isDeleteLoading() {
				return this.$loading.isLoading('tasks.delete');
			}
		},
		methods: {
			toggleTask() {
				this.$store.dispatch('toggleTask', this.task);
			},
			editTask() {
				this.$router.push({
					name: 'tasks.edit',
					params: {id: this.id}
				});
			},
			deleteTask() {
				this.$swal({
					title: '¿Estás seguro?',
					text: 'No podrás revertir esta acción',
					type: 'warning',
					showCancelButton: true,
					showLoaderOnConfirm: true,
					preConfirm: () => this.$store.dispatch('deleteTask', this.id),
					allowOutsideClick: () => !this.isDeleteLoading
				})
					.then((result) => {
						if (result.value) {
							this.$swal({
								title: 'Se ha eliminado la tarea correctamente',
								type:'success'
							});

							this.$router.replace({name: 'tasks'});
						}
					})
					.catch((e) => this.$swal({
						title: 'Error',
						text: e,
						type:'error'
					}));
			}
		}
	}
</script>