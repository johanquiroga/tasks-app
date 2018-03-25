<script>
	import Form from 'components/Commons/Form.vue'

	export default {
		render(createElement) {
			return createElement(Form, {
				props: {
					title: 'Nueva tarea',
					action: 'Crear tarea',
					cancelRedirect: {name: 'tasks'},
					loadingAction: 'Creando',
					task: {
						title: '',
						description: ''
					}
				},
				on: {
					save: (draft) => {
						this.$store.dispatch('createTask', draft)
							.then((newTask) => {
								this.$emit('showModal', 'success', 'Se ha creado la tarea correctamente');
								this.$router.push({
									name: 'tasks.details',
									params: {id: newTask.id}
								});
							})
							.catch((e) => this.$emit('showModal', 'error', e));
					}
				}
			});
		}
	}
</script>