var express = require('express');
var app = express();

app.use(express.static('public'));
//var bodyParser = require('body-parser');


//app.use(bodyParser.urlencoded({ extended: false }));


app.get('/', function (req, res) {
   res.sendFile( __dirname + "/pages/" + "http_verb_get.html" );
})

app.get('/test_submit', function (req, res) {
   // Prepare output in JSON format
   response = {
      first_name:req.query.first_name,
      last_name:req.query.last_name
   };
   console.log(response);
   res.end(JSON.stringify(response));
});

/*
app.post('/test_submit', function (req, res) {
    // Prepare output in JSON format
    response = {
       first_name:req.body.first_name,
       last_name:req.body.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response));
 });
*/
var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})