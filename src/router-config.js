import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Index from './components/index/Index'
import App from './App'
import Foo from './components/Foo'

Vue.use(VueRouter)
Vue.use(VueResource)

const routes = [
  { path: '/', component: Index },
  { path: '/foo', component: Foo },
  { path: '/app', component: App }
]

export const router = new VueRouter({
  mode: 'history',
  routes: routes
})
