// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Login from './views/Login.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import http from './http'

Vue.use(ElementUI)
Vue.prototype.$http = http

/* eslint-disable no-new */
new Vue({
  template: '<Login/>',
  components: { Login }
}).$mount('#app')
