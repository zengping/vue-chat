export default {
  state: {
    jconfirm: false,
    jconfirm_text: ''
  },
  mutations: {
    showJconfirm (state) {
      state.jconfirm = true
    },
    hideJconfirm (state) {
      state.jconfirm = false
    },
    setJconfirmText (state, text) {
      state.jconfirm_text = text
      state.jconfirm = true
    }
  },
  actions: {
  }
}
