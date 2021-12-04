var a = 1;
var b = "Hello";

function test(){
    console.log('Test Func');
}

var fnc1 = function(){
    var cnt = 0;
    function innerFunc(){
        console.log('From inner function cnt = ' + cnt);
        cnt++;
    }
    
    return innerFunc;
}
/*
var x = fnc1();
x();
x();
x();

var y = fnc1();
y();
y();
y();

x();
*/

/*
var a = [1,2,3,4,"Hello WOrld",10];
var b = a;

console.log(a);
console.log(b);

a[4] = 'KMITL';
console.log(b);
*/


/*
function greet(){
    console.log('My name is ' + this.name);
}

var a = { 
    name : 'Krit', 
    gender : 'MALE', 
    showGreet : null 
};

var b = { 
    name : 'Spiderman', 
    gender : 'MALE', 
    showGreet : null 
};


a.showGreet();
b.showGreet();
*/



/*
for(var i = 0; i < a.length ; i++){
    console.log(a[i]);
}*/
/*
var b = { 
    name : 'Spiderman', 
    gender : 'MALE', 
    showGreet1 : function(){
        console.log(this.name + ' - Greet1' )
    } ,
    showGreet2 : function(){
        console.log(this.name + ' - Greet2' )
    } 
};
*/
/*
var fncName = 'showGreet1';
b[fncName]();   //b['showGreet2']();
*/


/*
var a = [{ id : 1},{id : 2},{id:3}];
var b = [];

var b = a.filter(function(it){
   
    return it.id %2 == 0;
})

console.log(b);

*/
/*
for(var index in a){
    if(a[index] % 2 == 0)
        b.push(a[index]);
} 
console.log(b);
*/

/*
for(var index in a){
    b.push(a[index] * a[index]);
} */

/*
var b = a.map(function(it){
    return it * it;
})*/


/*
a.forEach(function(it){
    console.log(it + 'KMITL');
})*/


/*
function test(){
    console.log('Test');
}

var test = function(){
    console.log('Test');
}
var fnx = (message) => {
    console.log('Test '+message);
}


fnx('String Text');

*/

// Promise
/*
var p  = new Promise(function(resolve, reject){
    setTimeout(()=>{
        console.log('After 5 seconds');
        resolve('After 5 seconds already');
    },5000)
});

p.then((result)=>{
    console.log(result);
    return new Promise((res,rej)=>{ res('XX')});
}).then((msg) => {
    console.log('Hello '+msg)
}).catch((err)=>{

});
*/

var fs = require("fs");




async function main(){
    var data = await (async function(){
       
        var p = new Promise((resolve, reject)=>{
            fs.readFile("./test.txt","UTF8",function(err, data) {
            
                if(!err){
                    
                }
        
                resolve(data);
            });
        })
        return p;
    })();
    
    
    console.log(data);
}


main();




