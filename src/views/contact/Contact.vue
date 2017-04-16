<template>
  <div id="contact">
    <section>
      <div class="weui-cells_contact-head weui-cells weui-cells_access"
           style="margin-top:-1px">
        <router-link to="/contact/new-friends"
                     class="weui-cell">
          <div class="weui-cell_hd"> <img class="img-obj-cover"
                 src="../../assets/images/contact_top-friend-notify.png"> </div>
          <div class="weui-cell_bd weui-cell_primary">
            <p>新的朋友</p>
          </div>
        </router-link>
        <router-link to="/contact/group-list"
                     class="weui-cell">
          <div class="weui-cell_hd"> <img class="img-obj-cover"
                 src="../../assets/images/contact_top-addgroup.png"> </div>
          <div class="weui-cell_bd weui-cell_primary">
            <p>群聊</p>
          </div>
        </router-link>
        <router-link to="/contact/tags"
                     class="weui-cell">
          <div class="weui-cell_hd"> <img class="img-obj-cover"
                 src="../../assets/images/contact_top-tag.png"> </div>
          <div class="weui-cell_bd weui-cell_primary">
            <p>标签</p>
          </div>
        </router-link>
        <router-link to="/contact/official-accounts"
                     class="weui-cell">
          <div class="weui-cell_hd"><img class="img-obj-cover"
                 src="../../assets/images/contact_top-offical.png"></div>
          <div class="weui-cell_bd weui-cell_primary">
            <p>公众号</p>
          </div>
        </router-link>
      </div>
      <!--联系人集合-->
        <!--首字母-->
        <div class="weui-cells">
          <router-link :key="item.id"
                       :to="{path:'/contact/details',query:{wxid:item.id}}"
                       class="weui-cell weui-cell_access"
                       v-for="item in contactsList"
                       tag="div">
            <div class="weui-cell__hd">
              <img :src="item.header_url"
                   class="home__mini-avatar___1nSrW">
            </div>
            <div class="weui-cell__bd">
              {{item.remark?item.remark:item.nickname}}
            </div>
          </router-link>
        </div>
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      'pageName': '通讯录'
    }
  },
  computed: {
    contactsList () {
      return this.$store.state.contactsList
    }
  }
}
</script>

<style>
  @import "../../assets/css/contact.css";
</style>
