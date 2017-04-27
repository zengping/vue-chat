import contact from './contact'

export default {
  state: {
    chatList: {},
    unReadTotal: 0
  },
  getters: {
    chatChange (state, cid) {
      return state.chatList[cid]
    }
  },
  mutations: {
    computeRead (state) {
      let unReadTotal = 0
      Object.values(state.chatList).forEach((o) => {
        let unRead = 0
        o.msg.forEach((x) => {
          if (x.unRead) {
            unRead++
          }
        })
        o.unRead = unRead
        unReadTotal += unRead
      })
      state.unReadTotal = unReadTotal
    }
  },
  actions: {
    setChatList (context, chat) {
      let state = context.state
      if (!state.chatList[chat.from_id]) {
        state.chatList[chat.from_id] = {}
      }
      if (!state.chatList[chat.from_id].msg) {
        state.chatList[chat.from_id].msg = []
        state.chatList[chat.from_id].name = contact.getters.getContact(state, chat.from_id).nickname
        state.chatList[chat.from_id].header_url = contact.getters.getContact(state, chat.from_id).header_url
        state.chatList[chat.from_id].wxid = chat.from_id
      }
      state.chatList[chat.from_id].msg.push({
        wxid: chat.from_id,
        name: contact.getters.getContact(state, chat.from_id).nickname,
        header_url: contact.getters.getContact(state, chat.from_id).header_url,
        date: new Date().getTime(),
        text: chat.msg,
        unRead: true
      })
      context.commit('computeRead')
    },
    setChatList2 (context, chat) {
      let state = context.state
      if (!state.chatList[chat.to_id]) {
        state.chatList[chat.to_id] = {}
      }
      if (!state.chatList[chat.to_id].msg) {
        state.chatList[chat.to_id].msg = []
        state.chatList[chat.to_id].name = contact.getters.getContact(state, chat.to_id).nickname
        state.chatList[chat.to_id].header_url = contact.getters.getContact(state, chat.to_id).header_url
        state.chatList[chat.to_id].wxid = chat.to_id
      }
      state.chatList[chat.to_id].msg.push({
        wxid: chat.from_id,
        name: state.user.nickname,
        header_url: state.user.header_url,
        date: new Date().getTime(),
        text: chat.msg,
        unRead: false
      })
      context.commit('computeRead')
    },
    changeUnRead (context, chat) {
      let obj = context.state.chatList[chat.wxid]
      context.state.unReadTotal -= obj.unRead
      obj.unRead = 0
      obj.msg.forEach((o) => {
        o.unRead = false
      })
    }
  }
}
