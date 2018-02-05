<template>
	<div>
		<h2>Tareas:</h2>

		<app-alert v-show="tasks.length == 0" msg="No hay tareas!!" type="warning"></app-alert>

		<div class="list-group tasks-list">
			<task-item v-for="(task, index) in tasks" :key="task.id"
			:task="task" :index="index" @remove="deleteTask"></task-item>
		</div>
	</div>
</template>

<script>
	import TaskItem from './ListItem.vue'
	import Alert from 'components/Commons/Alert.vue'

	export default {
		components: {
			'task-item': TaskItem,
			'app-alert': Alert,
		},
		props: ['tasks'],
		methods: {
			deleteTask(index) {
				this.tasks.splice(index, 1);
			}
		},
		computed: {
			hasPendingTasks() {
				return this.tasks.some(task => task.pending);
			}
		}
	}
</script>

<style lang="scss">
	.tasks-list {
	    margin-bottom: 40px;
	}
</style>