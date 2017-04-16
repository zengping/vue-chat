import Vue from 'vue'
import Router from 'vue-router'
import http from '../http'
import socket from '../socket'
import filters from '../filters'
import App from 'App'

import Wechat from 'views/wechat/Wechat'
import Dialogue from 'views/wechat/Dialogue'

import Contact from 'views/contact/Contact'
import Details from 'views/contact/Details'

import Explore from 'views/explore/Explore'

import Self from 'views/self/Self'
import Profile from 'views/self/Profile'
import MyQrcode from 'views/self/my-qrcode'
import Settings from 'views/self/Settings'

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
          components: { 'subPage': Dialogue }
        },
        {
          path: '/contact',
          component: Contact
        },
        {
          path: '/contact/details',
          components: { 'subPage': Details }
        },
        {
          path: '/explore',
          component: Explore
        },
        {
          path: '/self',
          component: Self
        },
        {
          path: '/self/profile',
          components: { 'subPage': Profile }
        },
        {
          path: '/self/my-qrcode',
          components: { 'subPage': MyQrcode }
        },
        {
          path: '/self/settings',
          components: { 'subPage': Settings }
        }
      ]
    }
  ]
})
