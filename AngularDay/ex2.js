var fs = require('fs');

var content ="";
fs.readFile("first.js",function(err,data){
    if(!err){
        content = data;
        console.log("INSIDE : "+content.toString());
    }
});
console.log("OUTSIDE : "+content.toString());