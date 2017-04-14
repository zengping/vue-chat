export default {
  state: {
    currentPageName: '',
    newMsgCount: 0,
    tipsStatus: false
  },
  mutations: {
    setPageName (state, name) {
      state.currentPageName = name
    },
    // 减少未读消息数
    minusNewMsg (state) {
      state.newMsgCount < 1 ? state.newMsgCount = 0 : state.newMsgCount--
    },
    // 切换“微信”页中右上角菜单
    toggleTipsStatus (state, status) {
      if (status === -1) {
        state.tipsStatus = false
      } else {
        state.tipsStatus = !state.tipsStatus
      }
    }
  },
  actions: {
  }
}
