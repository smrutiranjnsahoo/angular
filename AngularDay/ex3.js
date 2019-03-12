var fs = require('fs');

var content ="";
//NON-Blocking
var stream = fs.createReadStream("ex1.js");

stream.on("data",function(chunk){
    console.log(chunk.toString());
});

stream.on("end",function(chunk){
    console.log("DONE !!!");
});

stream.on("error",function(e){
    console.log("PROBLEM !!!",e);
});

/*fs.readFile("first.js",function(err,data){
    if(!err){
        content = data;
        console.log("INSIDE : "+content.toString());
    }
});*/
console.log("OUTSIDE : "+content.toString());