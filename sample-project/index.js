require('dotenv').config();
var dateFormat = require('dateFormat')
var today = new Date()

//console.log(today);
var formattedDate = dateFormat(today, "yyyy-mm-dd")

//console.log(today);
//console.log(formattedDate);



console.log(process.env.APP_NAME);
console.log(process.env.BASE_URL);