var express = require('express');
var router = express.Router();

router.get('/',function (req,resp) {
    resp.render('about','')
});

module.exports = router;