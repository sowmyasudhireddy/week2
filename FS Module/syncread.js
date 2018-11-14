var fs = require("fs");
// Synchronous read
var data = fs.readFileSync('readfile1.txt');
console.log("Synchronous read: " + data.toString());
var data = fs.readFileSync('readfile2.txt');
console.log("Synchronous read: " + data.toString());
var data = fs.readFileSync('readfile3.txt');
console.log("Synchronous read: " + data.toString());

console.log("Program Ended");

output:

PS C:\Users\Sowmya Sudhireddy\week2node> node syncread.js
Synchronous read: reading file!!

Synchronous read:
reading second file :)reading second file :)reading second file :)reading second file :)reading second file :)reading second file :)
reading second file :)reading second file :)reading second file :)reading second file :)
reading second file :)reading second file :)reading second file :)reading second file :)reading second file :)reading second file :)
reading second file :)reading second file :)reading second file :)reading second file :)reading second file :)reading second file :)





Synchronous read: reading 3rd file............reading 3rd file............reading reading 3rd file............reading 3rd file............reading reading 3rd file............reading 3rd file............reading
reading 3rd file............reading 3rd file............reading reading 3rd file............reading 3rd file............reading
Program Ended
