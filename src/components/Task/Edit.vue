<script>
	import store from 'store'
	import Form from 'components/Commons/Form.vue'

	export default {
		props: ['id'],
		render(createElement) {
			if (!this.task) {
				return createElement('h2', 'Cargando tarea...');
			}

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
		},
		data() {
			return {
				task: null
			}
		},
		created() {
			this.findTask();
		},
		methods: {
			findTask() {
				setTimeout(() => {
					this.task = store.findTask(this.id);

					not_found_unless(this.task);
				}, 2000);
			}
		}
	}
</script>