var fs = require("fs");

fs.writeFileSync("./input.txt","TEST KMITL");
console.log("Finish");

/*
//Asynchronous
fs.writeFile('input.txt', 'Simply Easy Learning!', function(err) {
    if (err) {
       return console.error(err);
    }
    
    console.log("Data written successfully!");
    console.log("Let's read newly written data");
    
    fs.readFile('input.txt', function (err, data) {
       if (err) {
          return console.error(err);
       }
       console.log("Asynchronous read: " + data.toString());
    });
 });
*/
 //fs.mkdir
 //fs.rmdir
 
