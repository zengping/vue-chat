<template>
  <div>
    <div id="toast" v-show="toast">
      <div class="weui-mask_transparent"></div>
      <div class="weui-toast">
          <i class="weui-icon-success-no-circle weui-icon_toast"></i>
          <p class="weui-toast__content">{{toastText}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    toastText () {
      return this.$store.state.toast_text
    },
    toast () {
      if (this.$store.state.toast) {
        this.hide()
      }
      return this.$store.state.toast
    }
  },
  methods: {
    // toast 隐藏
    hide () {
      let self = this
      setTimeout(() => {
        self.$store.commit('hideToast')
      }, 3000)
    }
  }
}
</script>
