import io from '../../lib/socket.io'

var Socket = function () {
  this.server = io.connect('http://localhost:8886')
}

export default new Socket()
