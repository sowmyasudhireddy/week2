var fs = require("fs");

// Asynchronous read
fs.readFile('readfile1.txt', function (err, data) {
   if (err) {
      return console.error(err);
   }
   console.log("Asynchronous read: " + data.toString());
   fs.write('writefile.txt',data);
      
   
});
fs.readFile('readfile2.txt', function (err, data) {
    if (err) {
       return console.error(err);
    }
    console.log("Asynchronous read: " + data.toString());
});
fs.readFile('readfile3.txt', function (err, data) {
    if (err) {
       return console.error(err);
    }
    console.log("Asynchronous read: " + data.toString());
});

console.log("sucessfull");

output:


PS C:\Users\Sowmya Sudhireddy\week2node> node Asyncread.js
sucessfull
Asynchronous read: reading file!!

Asynchronous read: reading 3rd file............reading 3rd file............reading reading 3rd file............reading 3rd file............reading reading 3rd file............reading 3rd file............reading
reading 3rd file............reading 3rd file............reading reading 3rd file............reading 3rd file............reading
Asynchronous read:
reading second file :)reading second file :)reading second file :)reading second file :)reading second file :)reading second file :)
reading second file :)reading second file :)reading second file :)reading second file :)
reading second file :)reading second file :)reading second file :)reading second file :)reading second file :)reading second file :)
reading second file :)reading second file :)reading second file :)reading second file :)reading second file :)reading second file :)





PS C:\Users\Sowmya Sudhireddy\week2node> node Asyncread.js
sucessfull
Asynchronous read: reading file!!

Asynchronous read: reading 3rd file............reading 3rd file............reading reading 3rd file............reading 3rd file............reading reading 3rd file............reading 3rd file............reading
reading 3rd file............reading 3rd file............reading reading 3rd file............reading 3rd file............reading
Asynchronous read:
reading second file :)reading second file :)reading second file :)reading second file :)reading second file :)reading second file :)
reading second file :)reading second file :)reading second file :)reading second file :)
reading second file :)reading second file :)reading second file :)reading second file :)reading second file :)reading second file :)
reading second file :)reading second file :)reading second file :)reading second file :)reading second file :)reading second file :)

