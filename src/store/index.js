import Vue from 'vue'
import Vuex from 'vuex'
import tasks from './tasks.js'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		tasks
	},
	getters: {
		findTask(state) {
			return function (id) {
				let task = state.tasks.find((task) => task.id == id);

				not_found_unless(task);

				return task;
			}
		}	
	},
	mutations: {
		toggleTask(state, task) {
			task.pending = !task.pending;
		},
		createTask(state, newTask) {
			state.tasks.push(newTask);
		},
		updateTask(state, { id, draft }) {
			let index = state.tasks.findIndex((task) => task.id == id);

			state.tasks.splice(index, 1, draft);
		},
		deleteTask(state, id) {
			let index = state.tasks.findIndex((task) => task.id == id);

			state.tasks.splice(index, 1);
		},
		deleteCompletedTasks(state) {
			state.tasks = state.tasks.filter((task) => task.pending);
		}
	},
	actions: {
		createTask(context, { title, description }) {
			let newTask = {
				id: context.state.tasks.length + 1,
				title,
				description,
				pending: true
			};

			context.commit('createTask', newTask);

			// FIXME:
			// return newTask;
		},
		toggleTask(context, task) {
			context.commit('toggleTask', task);
		},
		updateTask(context, task) {
			context.commit('updateTask', task);
		},
		deleteTask(context, id) {
			context.commit('deleteTask', id);
		},
		deleteCompletedTasks(context) {
			context.commit('deleteCompletedTasks');
		}
	}
})