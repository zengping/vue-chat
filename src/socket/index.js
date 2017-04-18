import io from '../../lib/socket.io'

var Socket = function () {
  this.server = io.connect('http://chat.bta.one/socket')
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

export default new Socket()
