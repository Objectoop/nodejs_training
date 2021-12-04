var fs = require("fs");



var content = fs.readFileSync("./msg2.txt","UTF-8");

console.log(content);


/*
//Asynchronous mode
fs.readFile("./msg2.txt","UTF8",function(err, data) {
    var fileName = 'msg2.txt';
    if(!err){
        console.log(data + 'from ' + fileName);
    }
});


fs.readFile("./msg.txt","UTF8",function(err, data) {
    var fileName = 'msg.txt';
    if(!err){
        console.log(data + 'from ' + fileName);
    }
});*/

console.log('Script Ended');


