<script>
	import store from 'store'
	import Form from 'components/Commons/Form.vue'

	export default {
		render(createElement) {
			return createElement(Form, {
				props: {
					title: 'Nueva tarea',
					action: 'Crear tarea',
					cancelRedirect: {name: 'tasks'},
					task: {
						title: '',
						description: ''
					}
				},
				on: {
					save: (draft) => {
						store.dispatch('createTask', draft).then((newTask) => {
							this.$router.push({
								name: 'tasks.details',
								params: {id: newTask.id}
							});
						});
					}
				}
			});
		}
	}
</script>