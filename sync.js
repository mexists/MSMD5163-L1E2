var fs = require("fs");

console.log("Begin reading");

var data = fs.readFileSync("input.txt");

console.log(data.toString());
console.log("End reading");
