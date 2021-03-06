import Vue from 'vue'
import Router from 'vue-router'
import http from '../http'
import socket from '../socket'
import lib from '../lib'
import filters from '../filters'
import directives from '../directives'
import app from './default'

Vue.use(Router)
filters.init(Vue)
directives.init(Vue)
Vue.use(http)
Vue.use(socket)
Vue.use(lib)

let router = []
app.router.forEach(function (route) {
  router.push(route)
})

export default new Router({
  mode: 'hash',
  routes: router
})
