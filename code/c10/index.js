var express = require('express');
var mysql      = require('mysql');
//var sync_mysql = require('sync-mysql');
var bodyParser = require('body-parser')
var app = express();

var cors = require('cors');
app.use(cors());

app.use(express.static('public'));
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: false
})); 


var conProfile = {
  host     : 'localhost',
  user     : 'root',
  password : '1234',
  database : 'nodejs'
};

var pool = mysql.createPool(conProfile);


app.get('/', function (req, res) {
  
    res.send('{ data : "kmitl" }');
})

app.get('/get_topics',function(req, res){

   pool.getConnection(function(err, con){
      con.query("SELECT * FROM t_topic", function (err, result, fields) {
         if (err) throw err;
        
         con.release();
         res.send(JSON.stringify(result));
       });
   }); 
});

app.get('/get_topic/:id', function(req,res){
   pool.getConnection(function(err, con){
      con.query("SELECT * FROM t_topic where topic_id = ?",[req.params.id], function (err, result, fields) {
         if (err) throw err;
        
         con.release();
         res.send(JSON.stringify(result));
       });
   });

});

app.get('/get_reply/:topic_id', function(req, res){
   pool.getConnection(function(err, con){
      con.query("SELECT * FROM t_reply where topic_id = ?",[req.params.topic_id], function (err, result, fields) {
         if (err) throw err;
        
         con.release();
         res.send(JSON.stringify(result));
       });
   });

});

app.get('/get_detail_topic/:topic_id', function(req, res){

   //var response = [];
   pool.getConnection(function(err, con){
      con.query("SELECT * FROM t_topic where topic_id = ? ",[req.params.topic_id], function (err, result, fields) {
         if (err) throw err;
     
         con.query("select * from t_reply where topic_id = ? ",[result[0].topic_id],(err, result_reply, fields) => {
            result[0].replys = result_reply;
            con.release();
            res.send(JSON.stringify(result));
         });
            
       });
   });

});


app.post('/create_topic/:topic_name', function(req, res){
   
  // console.log(req.body);
   //res.send("");

   
   pool.getConnection(function(err, con){
      con.query("INSERT INTO t_topic(topic_id, topic_name,created_date)VALUES(null,?,NOW())",[req.params.topic_name], function (err, result, fields) {
         if (err) throw err;
         con.release();
         res.send({ 'status' : 'Create Success'});
       });
   });
});


//Extra sync mysql
//npm install sync-mysql --save
app.get('/get_full_detail_topics',function(req,res){
    var sync_con = new sync_mysql(conProfile);
    const result = sync_con.query('SELECT * from t_topic');
    for(var i = 0 ; i < result.length; i ++)
    {
        var reply_result = sync_con.query('SELECT * from t_reply where topic_id = ? ',[result[i].topic_id]);
        result[i].replies = reply_result;
    }
    res.json(result);
});






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
