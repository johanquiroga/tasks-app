import Vue from 'vue'
import router from 'router'
import App from './components/App.vue'
import Icon from './components/Commons/Icon.vue'
import Spinner from 'vue-spinner-component/src/Spinner.vue'
import SweetModal from 'sweet-modal-vue/src/plugin.js'
import VueLoading from 'vuex-loading'
import store from 'store'

window.not_found = function () {
	console.log('Not found: ' + router.currentRoute.fullPath);
	
	router.replace('/404');
};

window.not_found_unless = function (condition) {
	if (!condition) {
		not_found();
	}
};

window.clone = function (obj) {
	return JSON.parse(JSON.stringify(obj));
};

Vue.use(SweetModal);
Vue.use(VueLoading);

Vue.component('app-icon', Icon);
Vue.component('app-spinner', Spinner);

new Vue({
	el: '#app',
	router,
	store,
	vueLoading: new VueLoading({useVuex: true, moduleName: 'loading'}),
	render: h => h(App)
});
