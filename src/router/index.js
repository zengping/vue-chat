import Vue from 'vue'
import Router from 'vue-router'
import http from '../http'
import socket from '../socket'
import filters from '../filters'
import App from 'App'

import Wechat from 'views/wechat/Wechat'
import Dialogue from 'views/wechat/Dialogue'

import Contact from 'views/contact/Contact'
import NewFriends from 'views/contact/new-friends'
import AddFriend from 'views/contact/add-friend'
import GroupList from 'views/contact/group-list'
import OfficialAccounts from 'views/contact/official-accounts'
import Tags from 'views/contact/Tags'
import Details from 'views/contact/Details'

import Explore from 'views/explore/Explore'
import Moments from 'views/explore/Moments'

import Self from 'views/self/Self'
import Profile from 'views/self/Profile'
import MyQrcode from 'views/self/my-qrcode'
import Settings from 'views/self/Settings'
import Album from 'views/self/Album'
import Security from 'views/self/Security'
import Common from 'views/self/Common'
import Notice from 'views/self/Notice'
import Privacy from 'views/self/Privacy'

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
          path: '/contact/new-friends',
          components: { 'subPage': NewFriends }
        },
        {
          path: '/contact/add-friend',
          components: { 'subPage': AddFriend }
        },
        {
          path: '/contact/group-list',
          components: { 'subPage': GroupList }
        },
        {
          path: '/contact/official-account',
          components: { 'subPage': OfficialAccounts }
        },
        {
          path: '/contact/tags',
          components: { 'subPage': Tags }
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
          path: '/explore/moments',
          component: Moments
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
        },
        {
          path: '/self/album',
          components: { 'subPage': Album }
        },
        {
          path: '/self/security',
          components: { 'subPage': Security }
        },
        {
          path: '/self/common',
          components: { 'subPage': Common }
        },
        {
          path: '/self/notice',
          components: { 'subPage': Notice }
        },
        {
          path: '/self/privacy',
          components: { 'subPage': Privacy }
        }
      ]
    }
  ]
})
