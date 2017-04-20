export default {
  state: {
    contactsList: []
  },
  getters: {
    getContact (state, wxid) {
      let contact = {}
      for (let i of state.contactsList) {
        if (i.id === wxid) {
          contact = i
        }
      }
      return contact
    }
  },
  mutations: {
    setContactsList (state, list) {
      state.contactsList = list
    }
  },
  actions: {
  }
}
