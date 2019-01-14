var express = require('express');
var router = express.Router();
var db = require('../module/db');
let searchSql = "select * from informations where addr like ? limit ?,?";

router.get('/', function (req, resp) {
    resp.render('home', {});
});

router.post('/', function (req, resp) {
    let keyWord = req.body.keyWord;
    let page = req.body.page;
    let line = req.body.line;
    db.query(searchSql, ["%"+keyWord + "%", page,line], function (rows) {
        console.log("ajax:" + rows);
        resp.json(rows);
    });
});


module.exports = router;