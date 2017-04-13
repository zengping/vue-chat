<template>
  <!--复兴性高，数据交互比较频繁-->
  <div>
    <!--右上角图标-->
    <div class="center">
      <span>微信</span>
    </div>
  </div>
</template>

<script>
  import io from '../../../lib/socket.io'
  export default {
    data () {
      return {
        headerConfig: {
          left: 'conn',
          right: '设置'
        },
        userInfo: {},
        userNameList: ['加菲猫 ', '流氓兔', '蜡笔小新', '樱木道', '机猫', '皮卡丘', '史努比', '蓝精灵', '紫龙', '芭比'],
        onlineUserList: [],
        messageList: [],
        inputValue: '',
        connectState: false
      }
    },
    mounted () {
      this.connectEvent()
    },
    methods: {
      connectEvent () {
        var me = this
        var randomNum = Math.floor(Math.random() * 10)
        this.userInfo = {
          userId: this.getUserId(),
          userName: this.userNameList[randomNum],
          userImg: randomNum + 1
        }
        this.httpServer = io.connect('http://localhost:8888')
        this.httpServer.emit('login', this.userInfo)
        this.onlineUserList.push(this.userInfo)
        this.httpServer.on('login', function (obj) {
          console.log(obj)
          me.onlineUserList = obj.onlineUserList
          me.messageList.push({ type: 1, msg: '用户 ' + obj.msgUser.userName + ' 加入聊天', msgUser: obj.msgUser })
        })
      },
      getUserId () {
        return (new Date().getTime() + '' + Math.floor(Math.random() * 100000 + 100)) - 0
      }
    }
  }
</script>
