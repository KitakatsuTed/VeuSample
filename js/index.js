import App from './App'
import Vue from 'vue';
import 'es6-promise/auto'
require('./styles/main.css')

new Vue({
  el: "#app",
  components: {
    'App': App
  },
  template: "<App></App>"
})
