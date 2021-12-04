
function test(){

    console.log("TEST function from lib1.js");

}


function interfaceFnc(){
    console.log("interfaceFnc called");
    test();
}

console.log("lib1.js initialized!!");




exports.infFnc = interfaceFnc;
exports.x = 1;