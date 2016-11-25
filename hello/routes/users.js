var common = require('../common/common')

exports.autoroute={
  get:{
    '/test/api/login':loginreult
  }
}
function loginreult(req,res){
    console.log(req.route)
    var sql = 'select * from user';
    common.sqlconn(sql,function(err,rows){
      if (err) console.log(err);
      for (var i in rows) {
          res.send()
      }
    })
}


