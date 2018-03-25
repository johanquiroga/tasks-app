<template>
	<div class="row">
		<sweet-modal ref="modal" :icon="status" @close="closeModal">
			{{ response }}
		</sweet-modal>

		<div class="col-xs-6 col-md-6">
			<div class="top">
				<h2>Tareas:</h2>
				<router-link :to="{ name: 'tasks.create'}" class="btn btn-primary" role="button">Nueva Tarea</router-link>
			</div>

			<app-alert v-show="tasks.length == 0" msg="No hay tareas!!" type="warning"></app-alert>

			<div class="list-group tasks-list">
				<task-item v-for="(task, index) in tasks" :key="task.id" :task="task"></task-item>
			</div>

			<div class="text-right" v-show="tasks.length"><a @click="deleteCompleted" class="btn btn-danger" role="button">Eliminar tareas completadas</a></div>
		</div>
		<div class="col-xs-6 col-md-6">
			<router-view @showModal="showModal"></router-view>
		</div>
	</div>
</template>

<script>
	import TaskItem from './ListItem.vue'
	import Alert from 'components/Commons/Alert.vue'

	export default {
		components: {
			'task-item': TaskItem,
			'app-alert': Alert
		},
		data() {
			return {
				status: '',
				response: null
			}
		},
		computed: {
			tasks() {
				return this.$store.state.tasks
			}
		},
		methods: {
			deleteCompleted() {
				this.$store.dispatch('deleteCompletedTasks')
					.then(() => {
						this.showModal('success', 'Se han eliminado las tareas correctamente');
						this.$router.replace({name: 'tasks'});
					})
					.catch((e) => this.showModal('error', e));
			},
			showModal(status, msg) {
				this.status = status;
				this.response = msg;
				this.$refs.modal.open();
			},
			closeModal() {
				this.status = '';
				this.response = null;
			}
		}
	}
</script>

<style lang="scss">
	.top {
		display: flex;
		align-items: baseline;
		justify-content: space-between;
	}

	.tasks-list {
	    margin-bottom: 40px;
	}
</style>