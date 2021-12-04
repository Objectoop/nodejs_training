var express = require('express');
var app = express();

app.get('/', function (req, res) {
   res.send('Hello World');
})

app.get('/test/:id/:name', function (req, res) {
   //var id = req.query.id;
   //var name = req.query.name; 
   var { id, name} = req.params;
   //res.send('test with id ' + id + ' name = ' + name);
   res.send(`test with id ${id} name = ${name}`);

})

app.post('/login', function (req, res) {
   //var id = req.query.id;
   //var name = req.query.name; 
   var { id, name} = req.body;
   //res.send('test with id ' + id + ' name = ' + name);
   res.send(`test with id ${id} name = ${name}`);

})




var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})