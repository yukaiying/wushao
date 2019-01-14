var express = require('express');
var router = express.Router();
var db = require('../module/db');
var infoSql = 'select * from informations';

router.get('/',function (req,resp) {

   db.query(infoSql,[],function (rows) {
      console.log(rows);
      resp.render('home',{info:rows});
   });
});


module.exports = router;