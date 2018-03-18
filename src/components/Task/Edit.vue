<script>
	import store from 'store'
	import Form from 'components/Commons/Form.vue'

	export default {
		props: ['id'],
		computed: {
			task() {
				return store.findTask(this.id);
			}
		},
		render(createElement) {
			return createElement(Form, {
				props: {
					title: 'Editar tarea',
					action: 'Actualizar tarea',
					cancelRedirect: {name: 'tasks.details', params: {id:this.id}},
					task: this.task
				},
				on: {
					save: (newTask) => {
						store.updateTask(this.id, newTask);

						this.$router.push({
							name: 'tasks.details',
							params: {id: this.id}
						});
					}
				}
			});
		}
	}
</script>