import Vue from 'vue'
import Router from 'vue-router'
import http from '../http'
import filters from '../filters'
import App from 'App'
import Contact from 'views/contact/Contact'
import Explore from 'views/explore/Explore'
import Self from 'views/self/Self'

Vue.use(Router)
filters.init(Vue)
Vue.prototype.$http = http

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      component: App,
      children: [
        // {
        //   path: '',
        //   component: Home
        // },
        {
          path: '/contact',
          component: Contact
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
