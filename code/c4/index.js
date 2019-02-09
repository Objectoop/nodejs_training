var fs = require("fs");

var content = fs.readFileSync("./msg.txt","UTF-8");

console.log(content);


/*
//Asynchronous mode
fs.readFile("./msg.txt","UTF8",function(err, data) {
    if(!err){
        console.log(data);
    }
});
*/

