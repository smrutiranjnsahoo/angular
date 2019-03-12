var fs = require('fs');

var content = fs.readFileSync("first.js");

console.log(content.toString());

