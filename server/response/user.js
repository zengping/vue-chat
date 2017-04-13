var sql = require("../mysqlQuery");

var app = function(){};

app.prototype.list = async function(request, response, routes) {
    let s = `SELECT * from user`;
    return await sql.query(s);
}

app.prototype.login = async function(request, response, routes) {
    let p = request.postData;
    let s = `SELECT * from user where username="${p.username}" and password="${p.password}"`;
    return await sql.query(s);
}

module.exports = new app();