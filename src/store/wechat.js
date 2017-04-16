export default {
  state: {
    chatList: {}
  },
  getters: {
    chatChange (state, cid) {
      return state.chatList[cid]
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
    setChatList2 (state, chat) {
      if (!state.chatList[chat.to_id]) {
        state.chatList[chat.to_id] = {}
      }
      if (!state.chatList[chat.to_id].msg) {
        state.chatList[chat.to_id].msg = []
      }
      state.chatList[chat.to_id].msg.push({
        mid: chat.from_id,
        name: chat.from_id,
        header_url: chat.from_id,
        date: new Date().getTime(),
        text: chat.msg
      })
    }
  },
  actions: {
  }
}
