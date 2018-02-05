<template>
	<div>
		<task-list :tasks="tasks"></task-list>

		<div class="text-right"><a @click="deleteCompleted" class="btn btn-danger" role="button">Eliminar tareas completadas</a></div>

		<task-form @created="createTask"></task-form>
	</div>
</template>

<script>
	import TaskList from './List.vue'
	import TaskForm from './CreateForm.vue'

	export default {
		components: {
			'task-list': TaskList,
			'task-form': TaskForm
		},
		created() {
			this.tasks.forEach((task, index) => {
				this.$set(task, 'id', index + 1)
			});
		},
		data() {
			return {
				new_task: '',
				tasks: [
					{
						description: 'Aprender Vue.js',
						pending: true
					},
					{
						description: 'Suscribirse a Styde.net',
						pending: true
					},
					{
						description: 'Crear una API',
						pending: false
					}
				]
			}
		},
		methods: {
			createTask(task) {
				this.tasks.push(task);
			},
			deleteCompleted() {
				this.tasks = this.tasks.filter((task) => task.pending);
			}
		}
	}
</script>