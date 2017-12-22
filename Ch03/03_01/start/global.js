var camino = require("path");

console.log(`rockeando en el mundo ${camino.basename(__filename)}`);


var olis = "olis mundis en variable";
var variable = olis.slice(15);
console.log(`rockeando en el mundo ${variable}`);
console.log(__dirname);
console.log(__filename);