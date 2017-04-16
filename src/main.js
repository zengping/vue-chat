// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import store from './store'
import Toast from 'views/common/Toast'
import Loading from 'views/common/Loading'
import Jalert from 'views/common/Jalert'
import Jconfirm from 'views/common/Jconfirm'

Vue.config.productionTip = false // 将此值设置为 false ,会关闭 Vue 启动时的提示信息，推荐
/* eslint-disable no-new */

new Vue({
  router,
  store: store,
  components: {
    Toast,
    Loading,
    Jalert,
    Jconfirm
  }
}).$mount('#app')
