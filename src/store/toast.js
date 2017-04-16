export default {
  state: {
    toast: false,
    toast_text: ''
  },
  mutations: {
    showToast (state) {
      state.toast = true
    },
    hideToast (state) {
      state.toast = false
    },
    setToastText (state, text) {
      state.toast_text = text
      state.toast = true
    }
  },
  actions: {
  }
}
