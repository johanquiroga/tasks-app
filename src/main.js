import Vue from 'vue'
import router from 'router'
import App from './components/App.vue'
import Icon from './components/Commons/Icon.vue'
import VueSweetalert2 from 'vue-sweetalert2'
import VueLoading from 'vuex-loading'
import store from 'store'

window.not_found = function () {
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

Vue.use(VueLoading);
Vue.use(VueSweetalert2);

Vue.component('app-icon', Icon);

new Vue({
	el: '#app',
	router,
	store,
	vueLoading: new VueLoading({useVuex: true, moduleName: 'loading'}),
	render: h => h(App)
});
