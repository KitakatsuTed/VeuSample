import App from './App'
import Vue from 'vue';
import 'es6-promise/auto'
import store from "./store/index";
require('./styles/main.css')

new Vue({
  el: "#app",
  store,
  components: {
    'App': App
  },
  template: "<App></App>"
})
