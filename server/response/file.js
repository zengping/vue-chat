var fs = require('fs');
var url = require("url");
var formidable = require('formidable');
var BufferHelper = require('bufferhelper');

var app = function(){};

app.prototype = {
  upload: async function (request, response, params) {
    let ymd = new Date();
    let year = ymd.getFullYear();
    let month = ymd.getMonth() + 1;
    month = month > 9 ? month : "0" + month;
    let day = ymd.getDate();
    day = day > 9 ? day : "0" + day;
    const Dir = "assets/images/" + year + month + day + "/";
    const Host = "http://img.bta.one/";

    if (!fs.existsSync(__dirname + Dir)) {
        fs.mkdirSync(Dir);
    }

    var path = url.parse(request.url, true);
    var query = path.query;
    var _fileName = query.filename;

    var bufferHelper = new BufferHelper();
    var form = new formidable.IncomingForm();

    form.onPart = function onPart (part) {
      if (part.name != 'data') { // part.name == data的部分才是上传文件流
        return;
      }
      part.addListener('data', function (chunck) {
        bufferHelper.concat(chunck);
      });
      part.addListener('end', function () {
        fs.writeFile(__dirname + Dir + _fileName, bufferHelper.toBuffer(), { flag: 'w' }, function (err) {
            if (err) {
                console.log(err);
                throw new Error(err);
            }
            response.write(JSON.stringify({status: {
                code: 200,
                msg: 'ok'
            }, data: Host + Dir + _fileName}));
            response.end();
        });
      });
    };
    return await form.parse(request, function(err, fields, files) {});
  }
}

module.exports = new app();
