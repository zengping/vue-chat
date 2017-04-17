<template>
  <div class="profile">
    <header id="wx-header">
      <div class="center">
        <router-link to="/contact" tag="div" class="iconfont icon-return-arrow">
          <span>通讯录</span>
        </router-link>
        <span>详细资料</span>
      </div>
    </header>
    <div class="weui-cells">
      <div class="weui-cell">
        <div class="weui-cell__hd"><img :src="contactInfo.header_url" alt="" class="self-header" style="width:60px"></div>
        <div class="weui-cell__bd">
          <h4 class="self-nickname">{{contactInfo.nickname}}<span class="gender" :class="[contactInfo.sex===1?'gender-male':'gender-female']"></span></h4>
          <p class="self-wxid" style="font-size: 13px;color: #999;">微信号: {{contactInfo.id}}</p>
          <p class="nickname" style="font-size: 13px;color: #999;">昵称:{{contactInfo.nickname||'无'}}</p>
        </div>
      </div>
    </div>
    <div class="weui-cells">
      <div class="weui-cell weui-cell_access">
        <div class="weui-cell__bd">
          <p>设置备注和标签</p>
        </div>
        <div class="weui-cell__ft">

        </div>
      </div>
    </div>
    <div class="weui-cells">
      <div class="weui-cell">
        <div class="weui-cell__bd">
          <p>地区</p>
        </div>
        <div class="weui-cell__ft" style="-webkit-flex: 4;text-align: left;">
          <span v-for="item in contactInfo.area">{{item}}&nbsp;&nbsp;&nbsp;</span>
        </div>
      </div>
      <div class="weui-cell weui-cell_access">
        <div class="weui-cell__bd">
          <p>个人相册</p>
        </div>
        <div class="weui-cell__ft" style="-webkit-flex: 4;text-align: left;">
          <div class="album-list">
            <img :src="item.imgSrc" style="width:50px;margin:0 5px" v-for="item in contactInfo.album">
          </div>
        </div>
      </div>
      <div class="weui-cell weui-cell_access">
        <div class="weui-cell__bd">
          <p>更多</p>
        </div>
        <div class="weui-cell__ft">

        </div>
      </div>
    </div>

    <!--<a href="javascript:;"
       class="weui-btn weui-btn_primary"
       style="width:90%;margin-top:20px;">发消息</a>-->
    <router-link :to="{ path: '/wechat/dialogue', query: { wxid: contactInfo.id,name:contactInfo.nickname, group_num:1}}" tag="div" class="list-info">
      <button class="weui-btn weui-btn_primary" style="width:90%;margin-top:20px;">发消息</button>
    </router-link>
    <a href="javascript:;" class="weui-btn weui-btn_default" style="width:90%;margin-top:20px;">视频</a>

  </div>
</template>

<script>
export default {
  data () {
    return {
      pageName: '',
      contactInfo: {}
    }
  },
  mounted () {
    this.getInfo()
  },
  methods: {
    getInfo () {
      let uid = this.$route.query.wxid
      let self = this
      this.$http.get({ api: '/api/contacts/info/' + uid, params: {uid: uid} }).then((data) => {
        self.contactInfo = data[0]
      }, (res) => {

      })
    }
  }
}
</script>

<style>

</style>
