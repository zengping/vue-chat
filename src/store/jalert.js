export default {
  state: {
    jalert: false,
    jalert_text: ''
  },
  mutations: {
    showJalert (state) {
      state.jalert = true
    },
    hideJalert (state) {
      state.jalert = false
    },
    setJalertText (state, text) {
      state.jalert_text = text
      state.jalert = true
    }
  },
  actions: {
  }
}
