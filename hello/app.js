//express_demo.js 文件
var express = require('express');
var config = require('./conf');
var mysql = require('mysql');
var app = express();

var pool = mysql.createPool(config.orm);

var selectSQL = 'select * from tbbase_user limit 10';

pool.getConnection(function (err, conn) {
    if(err){
        return
    }
    console.log(conn.query);
    conn.query(selectSQL,function(err,rows){
        if (err) console.log(err);
        console.log("SELECT ==> ");
        for (var i in rows) {
            console.log(rows[i]);
        }
        conn.release();
    });
})

var server = app.listen(8001, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("应用实例，访问地址为 http://%s:%s", host, port)

})
