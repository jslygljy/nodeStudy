var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var username=req.body.name;//获取post参数
  var password=req.body.password;
  res.send("id: "+req.query.id+"  password: "+req.query.password);
  res.render('index', { title: 'Express' });
  res.jsonp({
    succeed: true,
    data: body
  })
});

module.exports = router;
