Vue.component('app-icon', {
	template: '<span :class="cssClasses" aria-hidden="true"></span>',
	props: ['img'],
	computed: {
		cssClasses: function () {
			return 'glyphicon glyphicon-'+this.img;
		}
	}
})

Vue.component('app-task', {
	data: function () {
		return {
			editing: false,
			draft: ''
		};
	},
	template: '#task-template',
	props: ['tasks', 'task', 'index'],
	methods: {
		toggleStatus: function () {
			this.task.pending = !this.task.pending;
		},
		edit: function () {
			/* @FIXME: reimplement this.
			this.tasks.forEach(function (task) {
				task.editing = false;
			});*/

			this.draft = this.task.description;

			this.editing = true;
		},
		update: function () {
			if (this.draft != '') {
				this.task.description = this.draft;
			}

			this.editing = false;
		},
		discard: function () {
			this.editing = false;
		},
		remove: function () {
			this.tasks.splice(this.index, 1);
		},
	}
})

var vm = new Vue({
	el: '#app',
	data: {
		new_task: '',
		tasks: [
			{
				description: 'Aprender Vue.js',
				pending: true
			},
			{
				description: 'Suscribirse a Styde.net',
				pending: true
			},
			{
				description: 'Crear una API',
				pending: false
			}
		]
	},
	/*created: function () {
		this.tasks.forEach(function (task) {
			this.$set(task, 'editing', false);
		}.bind(this));
	},*/
	methods: {
		createTask: function () {
			if (this.new_task != '') {
				this.tasks.push({
					description: this.new_task,
					pending: true
				});

				this.new_task = '';
			}
		},
		deleteCompleted: function () {
			this.tasks = this.tasks.filter(function (task) {
				return task.pending;
			});
		}
	}
});