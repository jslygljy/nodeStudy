//express_demo.js 文件
var express = require('express');
var app = express();
var autoroute =require('express-autoroute')
var http =require('http')


//app.configure(function () {
//    app.set('port', 8001);
//    app.use(function (req, res, next) {
//        res.setHeader("Access-Control-Allow-Origin", "*");
//        res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
//        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
//
//    });
//});
//app.set('port', 8001);
//    app.use(function (req, res, next) {
//        res.setHeader("Access-Control-Allow-Origin", "*");
//        res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
//        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
//
//    });
autoroute(app, { throwErrors: true });
http.createServer(app).listen(8001, function () {
    console.log("start express")
});


//var server = app.listen(8001, function () {
//
//  var host = server.address().address
//  var port = server.address().port
//
//  console.log("应用实例，访问地址为 http://%s:%s", host, port)
//
//})
