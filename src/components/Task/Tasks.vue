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
	import store from 'store'

	export default {
		components: {
			'task-list': TaskList,
			'task-form': TaskForm
		},
		data() {
			return {
				new_task: '',
				tasks: store.state.tasks
			}
		},
		methods: {
			createTask(task) {
				this.$set(task, 'id', this.tasks.length + 1);
				this.tasks.push(task);
			},
			deleteCompleted() {
				this.tasks = this.tasks.filter((task) => task.pending);
			}
		}
	}
</script>