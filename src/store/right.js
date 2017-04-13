export default {
  state: {
    rightApi: {}
  },
  mutations: {
    setRight (state, i) {
      state.rightApi = i
    },
    setRightNull (state) {
      state.rightApi = {}
    }
  },
  actions: {
  }
}
