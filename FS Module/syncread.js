var fs = require("fs");
// Synchronous read
var data = fs.readFileSync('readfile1.txt');
console.log("Synchronous read: " + data.toString());
var data = fs.readFileSync('readfile2.txt');
console.log("Synchronous read: " + data.toString());
var data = fs.readFileSync('readfile3.txt');
console.log("Synchronous read: " + data.toString());

console.log("Program Ended");