import Vue from 'vue'
import EventBus from 'event-bus.js'
import App from './components/App.vue'

window.EventBus = EventBus

new Vue({
  el: '#app',
  render: h => h(App)
})
