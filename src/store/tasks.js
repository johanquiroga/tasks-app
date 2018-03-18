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

export default tasks;