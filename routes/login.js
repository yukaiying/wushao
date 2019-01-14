var express = require('express');
var router = express.Router();
var db = require('../module/db');

/* GET home page. */
router.get('/', function(req, res) {
    db.query("select * from tab_user",[],function (rows) {
        console.log(rows);
    });
    res.render('login', '');
});

router.post('/',function (req,resp) {
    let userName = req.body.userName;
    let passWord = req.body.passWord;
    let login_sql = "select * from tab_user where name = ? and password = ?";
    db.query(login_sql,[userName,passWord],function (rows) {
        console.log(rows);
        if (rows != null && rows.length > 0){
        //    登录成功
            resp.redirect('home');
        } else {
        //    登录失败
            req.flash('err','登录失败，请重新登录！');
            resp.redirect('login');
        }
    })
});

module.exports = router;
