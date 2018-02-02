var vm = new Vue({
	el: '#app',
	data: {
		draft: '',
		new_task: '',
		tasks: [
			{
				description: 'Aprender Vue.js',
				pending: true,
				editing: false
			},
			{
				description: 'Suscribirse a Styde.net',
				pending: true,
				editing: false
			},
			{
				description: 'Crear una API',
				pending: false,
				editing: false
			}
		]
	},
	methods: {
		createTask: function () {
			if (this.new_task != '') {
				this.tasks.push({
					description: this.new_task,
					pending: true,
					editing: false
				});

				this.new_task = '';
			}
		},
		toggleStatus: function (task) {
			task.pending = !task.pending;
		},
		editTask: function (task) {
			this.tasks.forEach(function (task) {
				task.editing = false;
			});

			this.draft = task.description;

			task.editing = true;
		},
		updateTask: function (task) {
			if (this.draft != '') {
				task.description = this.draft;
			}

			task.editing = false;
		},
		discardTask: function (task) {
			task.editing = false;
		}
	}
});