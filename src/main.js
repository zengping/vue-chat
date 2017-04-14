// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false // 将此值设置为 false ,会关闭 Vue 启动时的提示信息，推荐
/* eslint-disable no-new */

new Vue({
  router,
  store: store
}).$mount('#app')
