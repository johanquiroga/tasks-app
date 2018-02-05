<template>
	<div class="container" id="app">
		<app-task-list :tasks="tasks"></app-task-list>

		<div class="text-right"><a @click="deleteCompleted" class="btn btn-danger" role="button">Eliminar tareas completadas</a></div>

		<app-task-form @created="createTask"></app-task-form>

		<app-footer></app-footer>
	</div>
</template>

<script>
	import TaskList from './TaskList.vue'
	import TaskForm from './TaskForm.vue'
	import Footer from './Footer.vue'

	export default {
		components: {
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

<style lang="scss">
	body {
	    margin: 10px;
	}

	.container {
		max-width: 650px;

		h2 {
	    	margin-bottom: 20px;
		}
	}

	
</style>