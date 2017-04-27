<template>
  <!--微信组件-->
  <div id="wechat">
    <ul class="wechat-list">
      <!--props传递消息对象 baseMsgObj -->
      <msg-item v-for="item in chatList" :item="item" class="list-row line-bottom"></msg-item>
    </ul>
  </div>
</template>

<script>
import msgItem from './msg-item'
export default {
  components: {
    msgItem
  },
  data () {
    return {
      'pageName': '微信'
    }
  },
  computed: {
    chatList () {
      console.log(this.$store.state.chatList)
      return Object.values(this.$store.state.chatList)
    }
  }
  // watch: {
  //   chatList (val, oldVal) {
  //     console.log(val, oldVal)
  //   }
  // }
}
</script>

<style>
  @import "../../assets/css/wechat.css";
</style>
