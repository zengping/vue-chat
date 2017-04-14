import Vue from 'vue'
import Router from 'vue-router'
import http from '../http'
import socket from '../socket'
import filters from '../filters'
import App from 'App'
import Wechat from 'views/wechat/Wechat'
import dialogue from 'views/wechat/dialogue'
import Contact from 'views/contact/Contact'
import Explore from 'views/explore/Explore'
import Self from 'views/self/Self'

Vue.use(Router)
filters.init(Vue)
Vue.prototype.$http = http
Vue.prototype.io = socket

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      component: App,
      children: [
        {
          path: '',
          component: Wechat
        },
        {
          path: '/wechat/dialogue',
          components: { 'subPage': dialogue }
        },
        {
          path: '/contact',
          component: Contact
        },
        {
          path: '/contact/details',
          components: { 'subPage': resolve => require(['views/contact/details'], resolve) }
        },
        {
          path: '/explore',
          component: Explore
        },
        {
          path: '/self',
          component: Self
        }
      ]
    }
  ]
})
