import io from '../../lib/socket.io'

var Socket = function () {
  this.server = io.connect('ws://socket.bta.one:8686')
}

Socket.prototype = {
  login (obj) {
    this.server.emit('login', obj) // 向服务器发送消息
  },
  send (obj) {
    this.server.emit('chat', obj) // 向服务器发送消息
  },
  receive (callback) {
    this.server.on('chat', function (data) {
      if (callback) {
        callback(data)
      }
    })
  }
}

export default {
  install (Vue, name = '$io') {
    Object.defineProperty(Vue.prototype, name, {value: new Socket()})
  }
}
