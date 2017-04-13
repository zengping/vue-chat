/**
 * Vuex
 * http://vuex.vuejs.org/zh-cn/intro.html
 */
import Vue from 'vue'
import Vuex from 'vuex'
import wechat from './wechat'
import global from './global'
import right from './right'

Vue.use(Vuex)

let status = {
  state: {},
  mutations: {},
  actions: {}
}

status = objAdd(status, wechat)
status = objAdd(status, global)
status = objAdd(status, right)

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
