var fs = require('fs');
var url = require("url");

var app = function () { };

app.prototype = {
  open: function (request, response) {
    var req_path = url.parse(request.url).path;
    var filepath = __dirname + req_path;

    fs.exists(filepath, function (exists) {
      if (exists) {
        fs.stat(filepath, function (err, stats) {
          if (err) {
            response.writeHead(500, { 'Content-Type': 'text/html;charset=utf8' });
            response.end('<div styel="color:black;font-size:22px;">server error</div>');
          } else {
            if (stats.isFile()) {
              var file = fs.createReadStream(filepath);
              response.writeHead(200, { 'Content-Type': 'image/jpeg;charset=utf8' });
              file.pipe(response);
            } else {
              fs.readdir(filepath, function (err, files) {
                var str = '';
                for (var i in files) {
                  str += files[i] + '<br/>';
                }
                response.writeHead(200, { 'Content-Type': 'text/html;charset=utf8' });
                response.write(str);
                response.end();
              });
            }
          }
        });
      } else {
        response.writeHead(404, { "Content-Type": "text/plain;charset=utf-8" });
        response.write("404 Not found");
        response.end();
      }
    });
  }
}

module.exports = new app();
