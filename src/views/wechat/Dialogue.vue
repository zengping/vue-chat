<template>
  <div class="dialogue">
    <header id="wx-header">
      <div class="center">
        <router-link to="/" tag="div" class="iconfont icon-return-arrow">
          <span>微信</span>
        </router-link>
        <span>{{pageName}}</span>
        <!--<span class="parentheses" v-show='$route.query.group_num&& $route.query.group_num!=1'>{{$route.query.group_num}}</span>-->
      </div>
    </header>
    <section class="dialogue-section clearfix" v-on:click="MenuOutsideClick">
      <div class="row_bar" v-for="item in chatList.msg" v-if="chatList">
        <div class="row clearfix" :class="{'showRight':item.wxid == user.id}">
          <img :src="item.header_url" class="header">
          <p class="text" v-more>{{item.text}}</p>
        </div>
      </div>
      <span class="msg-more" id="msg-more">
        <ul>
            <li>复制</li>
            <li>转发</li>
            <li>收藏</li>
            <li>删除</li>
        </ul>
      </span>
    </section>
    <footer class="dialogue-footer">
      <div class="component-dialogue-bar-person">
        <span class="iconfont icon-dialogue-jianpan" v-show="!currentChatWay" v-on:click="currentChatWay=true"></span>
        <span class="iconfont icon-dialogue-voice" v-show="currentChatWay" v-on:click="currentChatWay=false"></span>
        <div class="chat-way" v-show="!currentChatWay">
          <div class="chat-say" v-press>
            <span class="one">按住 说话</span>
            <span class="two">松开 结束</span>
          </div>
        </div>
        <div class="chat-way" v-show="currentChatWay">
          <input class="chat-txt" type="text" v-model="newMsg" v-on:focus="focusIpt" v-on:blur="blurIpt" v-on:input="inputIpt" />
        </div>
        <span class="expression iconfont icon-dialogue-smile"></span>
        <span class="more iconfont icon-dialogue-jia" v-show="!sendStatus"></span>
        <button class="weui-btn weui-btn_primary" v-show="sendStatus" style="width:16%;margin-top:3px;margin-right:4px;padding:0 3px;line-height:33px;font-size:16px;" @click="sendMsg">发送</button>
        <div class="recording" style="display: none;" id="recording">
          <div class="recording-voice" style="display: none;" id="recording-voice">
            <div class="voice-inner">
              <div class="voice-icon"></div>
              <div class="voice-volume">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <p>手指上划,取消发送</p>
          </div>
          <div class="recording-cancel" style="display: none;">
            <div class="cancel-inner"></div>
            <p>松开手指,取消发送</p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data () {
    return {
      pageName: this.$route.query.name,
      currentChatWay: true, // ture为键盘打字 false为语音输入
      timer: null,
      newMsg: '',
      chatList: this.$store.state.chatList[this.$route.query.wxid] ? this.$store.state.chatList[this.$route.query.wxid] : false,
      contact_id: this.$route.query.wxid,
      sendStatus: false   // 有内容才可以发送
      // sayActive: false // false 键盘打字 true 语音输入
    }
  },
  computed: {
    user () {
      return this.$store.state.user
    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.$store.commit('setPageName', vm.$route.query.name)
    })
  },
  directives: {
    press: {
      bind (element, binding) {
        // var recording = document.querySelector('.recording'),
        //     recordingVoice = document.querySelector('.recording-voice'),
        //     recordingCancel = document.querySelector('.recording-cancel'),
        let startTx, startTy
        element.addEventListener('touchstart', function (e) {
          // 为什么每次注册监听器,都要重新获取一次 DOM 像上面写就 undefine?
          let recording = document.querySelector('.recording')
          let recordingVoice = document.querySelector('.recording-voice')
          element.className = 'chat-say say-active'
          recording.style.display = recordingVoice.style.display = 'block'
          // console.log('start')
          let touches = e.touches[0]
          startTx = touches.clientX
          startTy = touches.clientY
          e.preventDefault()
        }, false)
        element.addEventListener('touchend', function (e) {
          let recording = document.querySelector('.recording')
          let recordingVoice = document.querySelector('.recording-voice')
          let recordingCancel = document.querySelector('.recording-cancel')
          element.className = 'chat-say'
          recordingCancel.style.display = recording.style.display = recordingVoice.style.display = 'none'
          // console.log('end')
          e.preventDefault()
        }, false)
        element.addEventListener('touchmove', function (e) {
          let recording = document.querySelector('.recording')
          let recordingVoice = document.querySelector('.recording-voice')
          let recordingCancel = document.querySelector('.recording-cancel')
          let touches = e.changedTouches[0]
          let endTx = touches.clientX
          let endTy = touches.clientY
          let distanceX = startTx - endTx
          console.log(distanceX)
          let distanceY = startTy - endTy
          if (distanceY > 10 && distanceY < 80) {
            // 控制范围 和谐掉指尖抖动
            element.className = 'chat-say'
            recordingVoice.style.display = 'none'
            recordingCancel.style.display = 'block'
          } else if (distanceY > 80) {
            element.className = 'chat-say'
            recording.style.display = recordingCancel.style.display = 'none'
          }
          // 阻断事件冒泡 防止页面被一同向上滑动
          e.preventDefault()
        }, false)
      }
    },
    more: {
      bind (element, binding) {
        let startTx, startTy
        element.addEventListener('touchstart', function (e) {
          let msgMore = document.getElementById('msg-more')
          let touches = e.changedTouches[0]
          startTx = touches.clientX
          startTy = touches.clientY
          console.log(startTy)
          // 控制菜单的位置
          msgMore.style.left = ((startTx - 18) > 180 ? 180 : (startTx - 18)) + 'px'
          msgMore.style.top = (element.offsetTop - 33) + 'px'
          msgMore.style.display = 'block'
          e.preventDefault()
        }, false)
        element.addEventListener('touchend', function (e) {
          e.preventDefault()
        }, false)
      }
    }
  },
  methods: {
    // 解决输入法被激活时 底部输入框被遮住问题
    focusIpt () {
    },
    blurIpt () {
      clearInterval(this.timer)
    },
    inputIpt () {
      if (this.newMsg === '') {
        this.sendStatus = false
      } else {
        this.sendStatus = true
      }
    },
    // 点击空白区域，菜单被隐藏
    MenuOutsideClick (e) {
      let container = document.querySelectorAll('.text')
      console.log(container)
      let msgMore = document.getElementById('msg-more')
      if (e.target.className === 'text') {

      } else {
        msgMore.style.display = 'none'
      }
    },
    sendMsg () {
      let chat = {from_id: this.user.id, to_id: this.contact_id, msg: this.newMsg}
      this.$io.send(chat)
      this.$store.commit('setChatList2', chat)
      this.chatList = this.$store.state.chatList[this.contact_id]
      this.clearSendStatus()
    },
    clearSendStatus () {
      this.sendStatus = false
      this.newMsg = ''
    }
  },
  mounted () {
    let self = this
    this.$io.receive((chat) => {
      self.chatList = self.$store.state.chatList[self.contact_id]
    })
  }
}
</script>

<style>
  @import "../../assets/css/dialogue.css";
  .say-active {
    background: #c6c7ca;
  }
  .dialogue-section .row_bar {
    float: left;
    width: 100%;
    height: auto;
    margin-top: 10px;
  }
  .dialogue-section .row {
    margin: 0px;
  }
  .dialogue-section .showRight, .dialogue-section .showRight .header, .dialogue-section .showRight .text {
    float: right;
  }
  .dialogue-section .showRight .text {
    margin-right: 10px;
    background-color: #1aad19;
    color: #333;
  }
  .dialogue-section .showRight .text:before {
    width: 0;
    height: 0;
    border: 0px;
  }
  .dialogue-section .showRight .text:after {
    width: 0;
    height: 0;
    position: absolute;
    right: -12px;
    top: 11px;
    content: "";
    border: 6px solid transparent;
    border-left-color: #1aad19;
  }
</style>
