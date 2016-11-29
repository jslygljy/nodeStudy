var common = require('../common/common');


exports.autoroute={
    get:{
      '/test/api/login':loginreult
    },
    post:{
        '/login':login
    }
}
function loginreult(req,res){
    var sql = 'select * from user ';
    common.sqlconn(sql,function(err,rows){
      if (err) console.log(err);

      rows.forEach(function(data){
          if(data.username === req.query.user && data.password === req.query.password){
              res.send({errcode:'0',errmsg:'OK',data:'已找到'});
          }else{
              res.send({errcode:'-1',errmsg:'账号或者密码不正确',data:{}})
          }
      });

    })
}

function login(req,res){
    var user_name=req.body.user;
    var password=req.body.password;
    console.log("User name = "+user_name+", password is "+password);
    res.end("yes");
}



