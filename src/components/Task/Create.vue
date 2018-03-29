<script>
	import Form from 'components/Commons/Form.vue'

	export default {
		render(createElement) {
			return createElement(Form, {
				props: {
					title: 'Nueva tarea',
					action: 'Crear tarea',
					cancelRedirect: {name: 'tasks'},
					loadingAction: 'tasks.create',
					task: {
						title: '',
						description: ''
					}
				},
				on: {
					save: (draft) => {
						this.$store.dispatch('createTask', draft)
							.then((newTask) => {
								this.$swal({
									title: 'Se ha creado la tarea correctamente', 
									type: 'success'
								});
								this.$router.push({
									name: 'tasks.details',
									params: {id: newTask.id}
								});
							})
							.catch((e) => this.$swal({
								title: 'Error',
								text: e,
								type:'error'
							}));
					}
				}
			});
		}
	}
</script>