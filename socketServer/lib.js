var sql = require("./mysqlQuery");
var util = require('util');
var formidable = require('formidable');

module.exports = {
    async getPost(request) {
        // var postData = "";
        // request.addListener("data", function (chunck) {
        //     postData += chunck;
        // });

        // return await request.addListener("end", function () {
        //     var query = querystring.parse(postData);
        //     console.log(query.username);
        //     return query;
        // });
        var postData = {};
        var form = new formidable.IncomingForm();

        await form.parse(request, function(err, fields, files) {
            postData = fields;
        });
        return postData;
    },
    render(res) {
        if (res.serverStatus == 1) {
            res.write(JSON.stringify(res.okMsg));
        } else {
            res.write(JSON.stringify(res.errMsg));
        }
        res.end();
    }
}
