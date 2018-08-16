import Vue from 'vue'
import App from './App.vue'
import DropElement from '../index.js';
Vue.use(DropElement);

new Vue({
  el: '#app',
  render: h => h(App)
})
