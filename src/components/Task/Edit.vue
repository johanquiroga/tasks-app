<script>
	import Form from 'components/Commons/Form.vue'

	export default {
		props: ['id'],
		computed: {
			task() {
				return this.$store.getters.findTask(this.id);
			}
		},
		render(createElement) {
			return createElement(Form, {
				props: {
					title: 'Editar tarea',
					action: 'Actualizar tarea',
					cancelRedirect: {name: 'tasks.details', params: {id:this.id}},
					loadingAction: 'Actualizando',
					task: this.task
				},
				on: {
					save: (draft) => {
						this.$store.dispatch('updateTask', { id: this.id, draft })
						.then((newTask) => {
							this.$emit('showModal', 'success', 'Se ha actualizado la tarea correctamente');
							this.$router.push({
								name: 'tasks.details',
								params: {id: this.id}
							});
						})
						.catch((e) => this.$emit('showModal', 'error', e));
					}
				}
			});
		}
	}
</script>