<template>
	<div class="container" id="app">
		<h2>Tareas</h2>

		<p class="text-right"><a @click="deleteCompleted" class="btn btn-danger" role="button">Eliminar tareas completadas</a></p>

		<div class="alert alert-warning" role="alert" v-show="tasks.length == 0">
			<p class="text-center"><span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
			No hay ninguna tarea!!</p>
		</div>

		<ul class="list-group tasks">
			<li is="app-task" v-for="(task, index) in tasks"
			:tasks="tasks" :task="task" :index="index" @remove="deleteTask"></li>
		</ul>

		<form @submit.prevent="createTask" class="new-task-form">
			<input v-model.trim="new_task" type="text" class="form-control">
			<button class="btn btn-primary">Crear tarea</button>
		</form>

		<footer class="footer">
			<p>&copy; 2018 Johan Quiroga.</p> 
		</footer>
	</div>
</template>

<script>
	import Task from './Task.vue'

	export default {
		components: {
			'app-task': Task
		},
		data () {
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
			createTask: function () {
				if (this.new_task != '') {
					this.tasks.push({
						description: this.new_task,
						pending: true
					});

					this.new_task = '';
				}
			},
			deleteTask: function (index) {
				this.tasks.splice(index, 1);
			},
			deleteCompleted: function () {
				this.tasks = this.tasks.filter(function (task) {
					return task.pending;
				});
			}
		}
	}
</script>
