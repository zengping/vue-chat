export default {
  state: {
    currentPageName: '',
    newMsgCount: 0
  },
  mutations: {
    setPageName (state, name) {
      state.currentPageName = name
    },
    // 减少未读消息数
    minusNewMsg (state) {
      state.newMsgCount < 1 ? state.newMsgCount = 0 : state.newMsgCount--
    }
  },
  actions: {
  }
}
