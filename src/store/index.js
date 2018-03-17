let tasks = [
	{
		title: 'Aprender Vue.js',
		pending: true
	},
	{
		title: 'Suscribirse a Styde.net',
		pending: true
	},
	{
		title: 'Crear una API',
		pending: false
	}
];

tasks.forEach((task, index) => {
	task.description = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...`;
	task.id = index + 1;
});

export default {
	state: {
		tasks
	},
	findTask(id) {
		return this.state.tasks.find((task) => task.id == id);
	},
	createTask(task) {
		task.id = this.state.tasks.length + 1;

		task.pending = true;
 
		this.state.tasks.push(task);
	},
	toggleTask(task) {
		task.pending = !task.pending;
	},
	deleteTask(id) {
		let index = this.state.tasks.findIndex((task) => task.id === id);

		this.state.tasks.splice(index, 1);
	},
	deleteCompleted() {
		this.state.tasks = this.state.tasks.filter((task) => task.pending);
	}
};