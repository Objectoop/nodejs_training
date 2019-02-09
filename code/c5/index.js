var fs = require("fs");

fs.writeFileSync("./test_write_file.txt","This is content written to the file");
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

 //fs.mkdir
 //fs.rmdir
 */
console.log("Finish");