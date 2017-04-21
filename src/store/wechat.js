import contact from './contact'

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
        name: contact.getters.getContact(state, chat.from_id).nickname,
        header_url: contact.getters.getContact(state, chat.from_id).header_url,
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
        name: state.user.nickname,
        header_url: state.user.header_url,
        date: new Date().getTime(),
        text: chat.msg
      })
    }
  },
  actions: {
  }
}
