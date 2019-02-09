var express = require('express');
var mysql      = require('mysql');
var bodyParser = require('body-parser')
var app = express();

app.use(express.static('public'));
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 


app.get('/', function (req, res) {
    res.send('Hello APIs.');
})

 var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    
    console.log("Example app listening at http://%s:%s", host, port)
 })
 
/*
var pool = mysql.createPool({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'nodejs_training'
});

pool.getConnection(function(err, conn){
        var sql = "";
		conn.query(sql,[],function(err, rows, fields){
			if(err) throw err;

			conn.release();
			res.json(rows);
		});
	});




app.get('/get_topics', function (req, res) {
   // Prepare output in JSON format
   response = {
      first_name:req.query.first_name,
      last_name:req.query.last_name
   };
   console.log(response);
   res.end(JSON.stringify(response));
});
*/






//=========================================
