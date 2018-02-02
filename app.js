var vm = new Vue({
	el: '#app',
	data: {
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
				editing: true
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
		}
	}
});