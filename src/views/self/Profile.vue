<template>
<!--个人信息组件-->
    <div class="profile">
        <header id="wx-header">
            <div class="center">
                <router-link to="/self" tag="div" class="iconfont icon-return-arrow">
                    <span>我</span>
                </router-link>
                <span>个人信息</span>
            </div>
        </header>
        <div class="weui-cells">
            <div class="weui-cell" id="avatarCell" v-on:click="uploadImg">
                <div class="weui-cell__bd">
                    <p>头像</p>
                </div>
                <div class="weui-cell__ft">
                    <img :src="user.header_url" style="width: 50px;height: 50px;border-radius: 4px;" class="headerShow">
                </div>
            </div>
            <div class="weui-cell">
                <div class="weui-cell__bd">
                    <p>名字</p>
                </div>
                <div class="weui-cell__ft">
                    {{user.nickname}}
                </div>
            </div>
            <div class="weui-cell">
                <div class="weui-cell__bd">
                    <p>微信号</p>
                </div>
                <div class="weui-cell__ft">
                    {{user.username}}
                </div>
            </div>
            <router-link to="/self/my-qrcode" class="weui-cell weui-cell_access">
                <div class="weui-cell__bd">
                    <p>我的二维码</p>
                </div>
                <div class="weui-cell__ft">
                    <img src="../../assets/images/contact_add-friend-my-qr.png" style="vertical-align: middle;;width:24px" class="_align-middle">
                </div>
            </router-link>
            <div class="weui-cell">
                <div class="weui-cell__bd">
                    <p>我的地址</p>
                </div>
                <div class="weui-cell__ft">

                </div>
            </div>
        </div>

        <div class="weui-cells">
            <div class="weui-cell">
                <div class="weui-cell__bd">
                    <p>性别</p>
                </div>
                <div class="weui-cell__ft">
                    男
                </div>
            </div>
            <div class="weui-cell">
                <div class="weui-cell__bd">
                    <p>地区</p>
                </div>
                <div class="weui-cell__ft">
                    {{user.country}} {{user.area}}
                </div>
            </div>
            <div class="weui-cell">
                <div class="weui-cell__bd">
                    <p>个性签名</p>
                </div>
                <div class="weui-cell__ft">
                    未填写
                </div>
            </div>
        </div>

        <div class="weui-cells">
            <div class="weui-cell">
                <div class="weui-cell__bd">
                    <p>LinkedIn帐号</p>
                </div>
                <div class="weui-cell__ft">
                    未设置
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
  data () {
    return {
      pageName: '个人信息'
    }
  },
  computed: {
    user () {
      return this.$store.state.user
    }
  },
  methods: {
    uploadImg () {
      let self = this
      this.$lib.upload(
        {
          callback (data) {
            let params = {
              id: self.user.id,
              header_url: data
            }
            self.$http.post({api: '/api/user/editHeaderUrl/' + self.user.id, params}).then(data => {
              if (data.affectedRows) {
                self.lib.updateSession(self.user.id)
                self.$store.commit('showToast')
              }
            }, (res) => {
              self.$store.commit('setJalertText', res)
            })
          }
        }
      )
    }
  }
}
</script>
