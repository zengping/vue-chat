import Vue from 'vue'
import Router from 'vue-router'
import http from '../http'
import App from 'Login.vue'
import Login from 'views/Login'
import Register from 'views/Register'

Vue.use(Router)
Vue.prototype.$http = http

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      component: App,
      children: [
        {
          path: '',
          component: Login
        },
        {
          path: '/register',
          component: Register
        }
      ]
    }
  ]
})
