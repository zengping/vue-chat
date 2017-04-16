<template>
  <div>
          <div class="weui-cell">
              <div class="weui-cell__hd"><label class="weui-label">账&nbsp;&nbsp;号</label></div>
              <div class="weui-cell__bd">
                  <input class="weui-input" type="text" placeholder="QQ号/微信号/Email" v-model="user.username"/>
              </div>
          </div>
          <div class="weui-cell">
              <div class="weui-cell__hd"><label class="weui-label">密&nbsp;&nbsp;码</label></div>
              <div class="weui-cell__bd">
                  <input class="weui-input" type="password" pattern="[0-9]*" placeholder="密码" v-model="user.password"/>
              </div>
          </div>
          <div class="weui-cell">
              <div class="button-sp-area" style="width: 100%;">
              <a href="javascript:void(0);" class="weui-btn weui-btn_primary" v-on:click="login">登&nbsp;&nbsp;录</a>
              </div>
          </div>
          <div class="weui-cell weui-custom">
              <router-link :to="{path:'/register'}">注&nbsp;&nbsp;册
              </router-link>
          </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        user: {
          username: '',
          password: ''
        }
      }
    },
    methods: {
      login () {
        let self = this
        if (!this.valid()) {
          this.$store.commit('setJalertText', '请填写正确信息')
          return
        }
        this.$store.commit('showLoading')
        this.$http.post({api: '/api/user/login', params: this.user}).then(data => {
          if (data.length === 0) {
            self.$store.commit('setJalertText', '用户名或者密码错误！')
          } else {
            let user = data[0]
            sessionStorage.setItem('user', JSON.stringify(user))
            window.location.href = 'index.html'
          }
        }, (res) => {
          self.$store.commit('setJalertText', res)
        })
      },
      valid () {
        if (this.user.username === '' || this.user.password === '') {
          return false
        }
        return true
      }
    }
  }
</script>

<style>
  .weui-custom:before {
    border: 0px;
  }
  .weui-custom {
    text-align: center;
  }
</style>
