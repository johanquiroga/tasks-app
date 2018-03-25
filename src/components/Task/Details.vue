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
			<button @click="deleteTask" class="btn btn-default">
				<app-icon img="trash"></app-icon> Eliminar
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
				this.$store.dispatch('deleteTask', this.id)
					.then(() => {
						this.$emit('showModal', 'success', 'Se ha eliminado la tarea correctamente');

						this.$router.replace({ name: 'tasks' });
					})
					.catch((e) => this.$emit('showModal', 'error', e));
			}
		}
	}
</script>