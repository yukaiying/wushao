var mysql = require("mysql");
let setting = require('../setting');
var db = {};
db.query = function (sql,queryArray, callback) {
    var connect = mysql.createConnection({
        host:setting.host,
        user: setting.user,
        password: setting.password,
        database:setting.database,
        port: setting.port

    });
    connect.connect();
    connect.query(sql, queryArray,function (err,rows) {
        if (err) console.log(err);
        callback(rows);
    });
    connect.end();
};


module.exports = db;
