import Vue from 'vue'
import Vuex from 'vuex'
import tasks from './tasks.js'
import { createActionHelpers } from 'vuex-loading'

Vue.use(Vuex)

const { startLoading, endLoading } = createActionHelpers({
	moduleName: 'loading'
});

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

			return startLoading(context.dispatch, 'creando tarea', () => {
				return new Promise((resolve, reject) => {
          setTimeout(() => {
          	if (title == '') {
              return reject('Debes escribir un título');
            }

            context.commit('createTask', newTask);

            return resolve(newTask);
          }, 1500)
	      })
			});
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