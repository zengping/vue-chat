<template>
  <div>
          <div class="weui-cell">
              <div class="weui-cell__hd"><label class="weui-label">昵&nbsp;&nbsp;称</label></div>
              <div class="weui-cell__bd">
                  <input class="weui-input" type="text" placeholder="昵称" v-model="user.nickname"/>
              </div>
          </div>
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
              <a href="javascript:void(0);" class="weui-btn weui-btn_primary" v-on:click="registor">注&nbsp;&nbsp;册</a>
              </div>
          </div>
          <div class="weui-cell weui-custom">
              <router-link :to="{path:'/'}">登&nbsp;&nbsp;录
              </router-link>
          </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        user: {
          nickname: '',
          username: '',
          password: ''
        }
      }
    },
    methods: {
      registor () {
        let self = this
        if (!this.valid()) {
          this.$store.commit('setJalertMsg', '请填写完整信息')
          return
        }
        this.$store.commit('showLoading')
        this.$http.post({api: '/api/user/register', params: this.user}).then(data => {
          if (data.affectedRows) {
            self.$store.commit('showToast')
          }
        }, (res) => {
          self.$store.commit('setJalertText', res)
        })
      },
      valid () {
        if (this.user.nickname === '' || this.user.username === '' || this.user.password === '') {
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
