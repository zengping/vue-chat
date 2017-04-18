var sql = require("../mysqlQuery");

var app = function(){};

app.prototype = {
  list: async function (request, response, params) {
    let s = `SELECT * from user`;
    return await sql.query(s);
  },
  login: async function (request, response, params) {
    let p = request.postData;
    let s = `SELECT * from user where username="${p.username}" and password="${p.password}"`;
    return await sql.query(s);
  },
  info: async function (request, response, params) {
    let s = `SELECT * from user where id="${params.routes[4]}"`;
    return await sql.query(s);
  },
  register: async function (request, response, params) {
    let p = request.postData;
    let s = `SELECT * from user where username="${p.username}"`;
    let r = await sql.query(s);
    if (r.length > 0) {
      throw new Error("该用户已经存在");
    } else {
      s = `insert into user (username, password, nickname, header_url, country, area) values("${p.username}", "${p.password}", "${p.nickname}", "${p.header_url}", "${p.country}", "${p.area}")`;
    }
    return await sql.query(s);
  },
  editHeaderUrl: async function (request, response, params) {
    let p = request.postData;
    let s = `update user set header_url="${p.header_url}" where id="${p.id}"`;
    return await sql.query(s);
  }
}

module.exports = new app();
