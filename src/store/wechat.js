export default {
  state: {
    chatList: {},
    n: 0
  },
  getters: {
    chatChange (state, cid) {
      return state.chatList[cid]
    },
    getN (state) {
      return state.n
    }
  },
  mutations: {
    setChatList (state, chat) {
      if (!state.chatList[chat.from_id]) {
        state.chatList[chat.from_id] = {}
      }
      if (!state.chatList[chat.from_id].msg) {
        state.chatList[chat.from_id].msg = []
      }
      state.chatList[chat.from_id].msg.push({
        mid: chat.from_id,
        name: chat.from_id,
        header_url: chat.from_id,
        date: new Date().getTime(),
        text: chat.msg
      })
    },
    setN (state) {
      state.n++
    }
  },
  actions: {
  }
}
