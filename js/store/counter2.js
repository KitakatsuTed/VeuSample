export default {
  namespaced: true,
  state: {
    count1: 0
  },
  mutations: {
    increment(state) {
      state.count2 ++
    }
  },
  actions: {
    increment({commit}) {
      commit('increment')
    },
    incrementAsync({commit}) {
      setTimeout(() => {
        commit('increment')
      }, 1000)
    }
  },
  getters: {
    addHundred: state => state.count2 + 100
  }
}
