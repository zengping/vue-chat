export default {
  state: {
    leftApi: {}
  },
  mutations: {
    // loading
    setLeft (state, i) {
      state.leftApi = i
    },
    setLeftNull (state) {
      state.leftApi = {}
    }
  },
  actions: {
  }
}
