var express = require('express');
var router = express.Router();
var db = require('../module/db');

router.get('/',function (req,resp) {
    resp.render('sign','');
});

router.post('/',function (req,resp) {
    let userName = req.body.userName;
    let mail = req.body.mail;
    let passWord = req.body.passWord;
    let repassWord = req.body.repassWord;
    let query_sql = "select * from tab_user where name = ?";
    let sign_sql = "insert into tab_user(name,password,mail) values(?,?,?)";
    db.query(query_sql, [userName], function (rows) {
        console.log('select' + rows);
        if (rows != null && rows.length > 0) {
            req.flash('err1','该用户名已被注册');
            resp.redirect('sign');
        }else if (!/^[a-zA-Z][a-zA-Z0-9]{3,15}$/.test(userName)) {
            req.flash('err2','用户名由英文字母和数字组成的4-16位字符');
            resp.redirect('sign');
        }else if (!/^\w+@\w+(\.[a-zA-Z]{2,3}){1,2}$/.test(mail)) {
            req.flash('err3','Email格式不正确，例如web@163.com');
            resp.redirect('sign');
        }else if (!/^[a-zA-Z0-9]{6,16}$/.test(passWord)) {
            req.flash('err4','密码不能含有非法字符，长度在6-16之间');
            resp.redirect('sign');
        } else if (passWord !== repassWord) {
            req.flash('err5','两次密码输入不相等');
            resp.redirect('sign');
        }
        else{
            db.query(sign_sql, [userName, passWord,mail], function (rows) {
                console.log('insert' + rows);
                if (rows) {
                    resp.redirect('login');
                } else {
                    req.flash('error', '注册失败');
                    resp.redirect('sign');
                }
            })
        }
    });
});

module.exports = router;