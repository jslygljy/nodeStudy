var config = require('../conf');
var mysql = require('mysql');
var pool = mysql.createPool(config.orm);

exports.sqlconn  = function(sql,callback) {
  pool.getConnection(function (err, conn) {
    conn.query(sql,callback);
      conn.release();
  })
}


//function(err,rows){
//    if (err) console.log(err);
//    for (var i in rows) {
//        console.log(rows[i]);
//    }
//    conn.release();
//}

