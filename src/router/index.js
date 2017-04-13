import Vue from 'vue'
import Router from 'vue-router'
import http from '../http'
import filters from '../filters'
import App from 'App'
// import Home from 'views/Home'
// import Second from 'views/Second'

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
        // {
        //   path: '/:second',
        //   component: Second
        // }
      ]
    }
  ]
})
