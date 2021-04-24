import Vuex from 'vuex';
import Vue from "vue";

Vue.use(Vuex)

const counter = new Vuex.Store(
  {
    state: {
      count: 0
    },
    mutations: {
      increment(state) {
        state.count ++
      }
    }
  }
)

export default counter