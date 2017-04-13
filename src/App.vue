<template>
    <div>
        <div class="outter">
            <!--通用头部-->
            <header class="app-header">
                <wx-header></wx-header>
            </header>
            <section class="app-content">
                <keep-alive>
                    <router-view name="default"></router-view>
                </keep-alive>
            </section>
            <!--底部导航 路由 -->
            <footer class="app-footer">
                <wx-nav></wx-nav>
            </footer>
        </div>
    </div>
</template>

<script>
    import WxHeader from './views/common/wx-header'
    import WxNav from './views/common/wx-nav'
    export default {
      name: 'app',
      components: {
        WxHeader,
        WxNav
      },
      data () {
        return {
          user: {}
        }
      },
      created () {
        this.checkLogin()
      },
      methods: {
        checkLogin () {
          let user = sessionStorage.user ? JSON.parse(sessionStorage.user) : null
          if (user) {
            this.user = user
          } else {
            window.location.href = 'login.html'
          }
        }
      }
    }
</script>

<style>
    /*将公用的样式统一在此导入*/

    @import "assets/css/base.css";
    @import "assets/css/common.css";
    @import "assets/css/wx-header.css";
    /*阿里 fonticon*/

    @import "assets/css/lib/iconfont.css";
    /*过渡效果需要的动画库*/

    @import "assets/css/lib/animate.css";
    /*weui 样式库 非常适合高仿微信*/

    @import "assets/css/lib/weui.min.css";
</style>
