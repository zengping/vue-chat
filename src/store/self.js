export default {
  state: {
    user: {}
  },
  mutations: {
    setUser (state, user) {
      state.user = user
    },
    setRightNull (state) {
      state.rightApi = {}
    }
  },
  actions: {
  }
}
