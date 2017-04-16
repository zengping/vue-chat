var sql = require("../mysqlQuery");

var app = function(){};

app.prototype = {
  list: async function (request, response, params) {
    let query = params.query;
    let s = `SELECT * from contacts inner join user on user.id=contacts.cid where uid="${query.uid}"`;
    return await sql.query(s);
  },
  info: async function (request, response, params) {
    let s = `SELECT id, nickname, header_url from user where id="${params.routes[4]}"`;
    return await sql.query(s);
  }
}

module.exports = new app();
