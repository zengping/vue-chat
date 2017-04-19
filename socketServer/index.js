var app = require('http').createServer(handler)
var io = require('socket.io')(app);
var fs = require('fs');

function handler(req, res) {
  res.writeHead(404, {"Content-Type": "text/plain;charset=utf-8"});
  res.write("The socket is created");
  res.end();
}

//在线用户
var onlineUserList = [];
// socket实例栈
var socketsList = {};
//当前在线人数
var onlineUserCount = 0;

io.sockets.on('connection', function (socket) {
  console.log('新连接已创建 !');

  //监听新用户加入
  socket.on('login', function (obj) {
    // socket.socketId = obj.id;
    socketsList[obj.id] = socket;
    //检查在线列表，如果不在里面就加入
    // var sign = false;
    // for (var i = 0; i < onlineUserList.length; i++) {
    //   if (obj.id === onlineUserList[i].id) {
    //     sign = true;
    //     break;
    //   }
    // }

    // if (!sign) onlineUserList.push(obj);
    //向除自己以外的所有客户端广播:有新用户加入
    // this.broadcast.emit('login', { onlineUserList: onlineUserList, onlineUserCount: onlineUserCount, msgUser: obj });
    // this.emit('loginSuccess', { onlineUserList: onlineUserList, sign: 1 });
  });

  //监听用户退出
  socket.on('disconnect', function () {
    // 将退出的用户从在线列表中删除
    var exitObj = {};
    var sign = false;
    for (var i = 0; i < onlineUserList.length; i++) {
      if (onlineUserList[i].userId === socket.socketId) {
        onlineUserList[i].userId = -1;
        exitObj = onlineUserList[i];
        sign = true;
        break;
      }
    }
    var a = [];
    if (sign) {
      for (var i = 0; i < onlineUserList.length; i++) {
        if (onlineUserList[i].userId !== -1) {
          a.push(onlineUserList[i]);
        }
      }
      onlineUserList = a;
      onlineUserCount--;
      //向所有客户端广播用户退出
      this.broadcast.emit('logout', { onlineUserList: onlineUserList, onlineUserCount: onlineUserCount, msgUser: exitObj });
      console.log(exitObj.userName + '退出了群聊');
    }
  });

  //监听用户发布聊天内容
  socket.on('chat', function (obj) {
    console.log(obj)
    // socket.emit('chat', obj);
    socketsList[obj.to_id].emit('chat', obj)
  });

});

app.listen(8687);
