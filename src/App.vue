<template>
	<div class="container" id="app">
		<h2>Tareas</h2>

		<p class="text-right"><a @click="deleteCompleted" class="btn btn-danger" role="button">Eliminar tareas completadas</a></p>

		<app-alert msg="No hay tareas!!" type="warning" v-show="tasks.length == 0"></app-alert>

		<app-task-list :tasks="tasks"></app-task-list>

		<app-task-form @created="createTask"></app-task-form>

		<app-footer></app-footer>
	</div>
</template>

<script>
	import TaskList from './TaskList.vue'
	import TaskForm from './TaskForm.vue'
	import Alert from './Alert.vue'
	import Footer from './Footer.vue'

	export default {
		components: {
			'app-alert': Alert,
			'app-task-list': TaskList,
			'app-task-form': TaskForm,
			'app-footer': Footer
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

<style>
	body {
	    margin: 10px;
	}

	.container {
	    max-width: 650px;
	}

	.container h2 {
	    margin-bottom: 20px;
	}
</style>