var express = require('express');
var app = express();
var getResult = require('./getResult');

app.get('/fibonacci', function (req, res) {
    console.log(req.query.num);
   let fib = getResult.getResult(req.query.num);
   res.end( JSON.stringify({'result':fib}) );
})

 

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
})