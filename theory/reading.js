var fs = require('fs');

fs.readFile('temp.txt', function(err, buf) {
  console.log(buf.toString());
});


output:
PS C:\Users\Sowmya Sudhireddy\Desktop\week2\httpandhttps> node reading.js
reading
