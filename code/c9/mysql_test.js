var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "nodejs"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");


  con.query("SELECT * FROM t_topic", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
    /*
    console.log("======================================");
    for(var i = 0 ; i < result.length ; i++)
    {
        console.log(result[i].topic_name);
    }*/

    //fields[].name
    con.end();
  });



});