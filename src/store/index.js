/**
 * Vuex
 * http://vuex.vuejs.org/zh-cn/intro.html
 */
import Vue from 'vue'
import Vuex from 'vuex'
import wechat from './wechat'
import global from './global'
import self from './self'
import contact from './contact'
import toast from './toast'
import loading from './loading'
import jalert from './jalert'
import jconfirm from './jconfirm'

Vue.use(Vuex)

let status = {
  state: {},
  getters: {},
  mutations: {},
  actions: {}
}

status = objAdd(status, wechat)
status = objAdd(status, global)
status = objAdd(status, self)
status = objAdd(status, contact)
status = objAdd(status, toast)
status = objAdd(status, loading)
status = objAdd(status, jalert)
status = objAdd(status, jconfirm)

function objAdd (a, b) {
  Object.keys(a).forEach((o) => {
    for (let i in b[o]) {
      a[o][i] = b[o][i]
    }
  })
  return a
}

const store = new Vuex.Store(status)

export default store
