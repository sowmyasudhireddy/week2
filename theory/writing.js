var fs = require('fs');

var data = "New File Contents";

fs.writeFile('temp.txt', data, function(err, data){
    if (err) console.log(err);
    console.log("Successfully Written to File.");
});

output:
PS C:\Users\Sowmya Sudhireddy\Desktop\week2\httpandhttps> node writing.js
Successfully Written to File.
