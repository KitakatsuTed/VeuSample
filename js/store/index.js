import Vuex from 'vuex';
import Vue from "vue";
import Counter from "./counter"
import Counter2 from "./counter2"

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
      counter: Counter,
      counter2: Counter2
    }
  }
)
