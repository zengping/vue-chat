var sql = require("../mysqlQuery");

var app = function(){};

app.prototype = {
  list: async function (request, response, params) {
    let query = params.query;
    let s = `SELECT * from contacts inner join user on user.id=contacts.cid where uid="${query.uid}"`;
    return await sql.query(s);
  },
  login: async function (request, response, routes) {
    let p = request.postData;
    let s = `SELECT * from user where username="${p.username}" and password="${p.password}"`;
    return await sql.query(s);
  }
}

module.exports = new app();
